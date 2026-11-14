---
# Guide → lvlulcuma.com/en/guides/install-virtualbox-linux/
title: "Install VirtualBox on Ubuntu or Debian"
date: 2026-11-14
category: install   # install | quick | configure | use | harden | fix
order: 8   # position within its category
time: 20   # rough minutes to complete
platforms: [linux]   # windows | macos | linux
requires: []   # guides to do first (folder names); shown as "Before you start"
dek: "Add Oracle's repository, install VirtualBox 7.2 with the tools it needs, get its drivers past Secure Boot, and check it works."
# Pictures: each one is placed in the text below by a line <!-- pic: <name> -->. How each kind is drawn:
# src/components/GuideVisual.astro. Rows count from 1.
visuals:
  # What the computer needs (virtualbox.org: x86_64 hardware, Arm only on macOS and Windows hosts; Oracle's downloads
  # page: .deb packages for Ubuntu 22.04 to 26.04 and Debian 11 to 13).
  needs:
    kind: cards
    cards:
      - title: "An Intel or AMD processor"
        text: "64-bit. VirtualBox for Linux doesn't run on Arm processors."
        tags: ["amd64"]
      - title: "Ubuntu or Debian"
        text: "Oracle makes packages for Ubuntu 22.04 to 26.04 and Debian 11 to 13."
      - title: "Virtualization on"
        text: "The processor feature that hypervisors use. Most computers have it on already."
    caption: "<code>dpkg --print-architecture</code> shows your processor type: it should say <strong>amd64</strong>."
  # Secure Boot and VirtualBox's drivers (VirtualBox's setup script: it signs its drivers with the key in
  # /var/lib/shim-signed/mok; on Ubuntu it can make and enroll that key, on Debian it asks you to make it).
  secureboot:
    kind: cards
    layout: rows
    cards:
      - title: "SecureBoot disabled"
        text: "Nothing to do: VirtualBox's drivers load as they are."
      - title: "SecureBoot enabled, Ubuntu"
        text: "VirtualBox signs its drivers with Ubuntu's own key. If that key isn't trusted yet, you enroll it once."
        tags: ["one restart"]
      - title: "SecureBoot enabled, Debian"
        text: "You make the key yourself, enroll it once, and VirtualBox signs its drivers with it."
        tags: ["three commands", "one restart"]
    caption: "<code>mokutil --sb-state</code> tells you which line is yours."
  # The key manager that appears at startup after mokutil --import (shim's MokManager).
  mok:
    kind: screen
    title: "Perform MOK management"
    badge: "At startup"
    rows:
      - ["Continue boot", ""]
      - ["Enroll MOK", ""]
      - ["Enroll key from disk", ""]
      - ["Enroll hash from disk", ""]
    mark: 2
    keys: [["↑↓", "Move"], ["Enter", "Choose"]]
    caption: "Then <strong>Continue</strong>, <strong>Yes</strong>, the password you chose, and <strong>Reboot</strong>."
---

VirtualBox is a free, open-source hypervisor: the program that runs your lab's virtual machines. On Ubuntu and
Debian, the best place to get it is Oracle's own repository (a package source for `apt`). It always has the current
version, and it updates VirtualBox along with the rest of your system. Ubuntu's own package is often older, and
Debian's stable releases don't include VirtualBox at all. This guide was written for VirtualBox 7.2.22, the current
release since 20 October 2026.

<!-- pic: needs -->

The processor's virtualization feature must be switched on, or your virtual machines won't start. The virtualization
guide shows how to check in a minute, and how to turn it on if it's off.
<!-- guide: turn-on-virtualization -->

> [!NOTE]
> On Linux Mint or another system built on Ubuntu, the steps are the same: the repository command picks the Ubuntu
> version underneath.

## Get your system ready

VirtualBox builds its drivers (kernel modules: small programs that run inside Linux itself) on your computer, so it
needs a compiler and the header files of the Linux kernel you're running.

1. Open a terminal and update everything first, so you're on the newest kernel:

   ```bash
   sudo apt update && sudo apt full-upgrade -y
   ```

2. Restart the computer, so the newest kernel is the one running.
3. Install the build tools and the kernel headers.

   On Ubuntu:

   ```bash
   sudo apt install -y gcc make linux-headers-$(uname -r)
   ```

   On Debian, add `linux-headers-amd64`, so headers come with every future kernel too:

   ```bash
   sudo apt install -y gcc make linux-headers-amd64 linux-headers-$(uname -r)
   ```

> [!TIP]
> If you've installed Ubuntu's own `virtualbox` package before, remove it first (`sudo apt remove virtualbox`), so the
> two don't mix.

## Add Oracle's repository

1. Download Oracle's signing key, the one `apt` uses to check that every package really comes from Oracle:

   ```bash
   wget -O- https://www.virtualbox.org/download/oracle_vbox_2016.asc | sudo gpg --yes --output /usr/share/keyrings/oracle-virtualbox-2016.gpg --dearmor
   ```

2. Check it's the right key:

   ```bash
   gpg --show-keys /usr/share/keyrings/oracle-virtualbox-2016.gpg
   ```

   The long line of letters and numbers must be the fingerprint Oracle publishes:

   ```text
   B9F8D658297AF3EFC18D5CDFA2F683C52980AECF
   ```

   Oracle writes it in groups of four (`B9F8 D658 …`), but it's the same. If yours is different, stop here.
3. Add the repository. The part in `$( )` fills in your Ubuntu or Debian version's code name, such as `noble` or
   `trixie`:

   ```bash
   echo "deb [arch=amd64 signed-by=/usr/share/keyrings/oracle-virtualbox-2016.gpg] https://download.virtualbox.org/virtualbox/debian $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") contrib" | sudo tee /etc/apt/sources.list.d/virtualbox.list
   ```

## Install VirtualBox

```bash
sudo apt update
sudo apt install virtualbox-7.2
```

While it installs, VirtualBox builds its drivers: you'll see `Building VirtualBox kernel modules`. If it ends without
an error, go on to the next step. If it says `There were problems setting up VirtualBox`, Secure Boot is the usual
reason: the next section fixes it.

## If Secure Boot is on

Secure Boot is a firmware feature that lets your computer load only drivers signed with a key it trusts. VirtualBox's
drivers are built on your computer, so they need a key of yours: a Machine Owner Key (MOK). Check whether Secure Boot
is on:

```bash
mokutil --sb-state
```

If the terminal says `mokutil` isn't found, install it with `sudo apt install mokutil` and try again.

<!-- pic: secureboot -->

**On Ubuntu**, VirtualBox signs its drivers with Ubuntu's own key. If that key isn't enrolled yet, the install asks
you in the terminal to choose a password for Secure Boot. Restart and enroll the key, as shown below.

**On Debian**, VirtualBox asks you to make the key yourself, in the place it looks for it. These are the commands its
own message gives:

1. Make the key:

   ```bash
   sudo mkdir -p /var/lib/shim-signed/mok
   sudo openssl req -nodes -new -x509 -newkey rsa:2048 -outform DER -addext "extendedKeyUsage=codeSigning" -keyout /var/lib/shim-signed/mok/MOK.priv -out /var/lib/shim-signed/mok/MOK.der
   ```

   `openssl` asks a few questions, such as your country. Press <kbd>Enter</kbd> at each one: the answers don't
   matter here.
2. Ask the firmware to trust it. `mokutil` asks you to choose a one-time password, twice. Remember it for the restart:

   ```bash
   sudo mokutil --import /var/lib/shim-signed/mok/MOK.der
   ```

3. Restart: `sudo reboot`.

**Enroll the key at startup** (Ubuntu and Debian). Right after the restart, a blue screen offers to manage keys, and
waits only a few seconds: press any key.

<!-- pic: mok -->

1. Choose **Enroll MOK**, then **Continue**.
2. Choose **Yes**, type the password you chose, and press <kbd>Enter</kbd>.
3. Choose **Reboot**.

On Debian, once the computer is back, let VirtualBox build and sign its drivers with the new key:

```bash
sudo /sbin/vboxconfig
```

## Let VirtualBox use USB devices

To give a virtual machine a USB device, such as a Wi-Fi adapter for wireless labs, your user must be in the
`vboxusers` group, which the install created. Add yourself, then log out and back in:

```bash
sudo usermod -a -G vboxusers $USER
```

You can skip this if you won't use USB devices in your machines.

## Check it works

1. Check the version:

   ```bash
   VBoxManage --version
   ```

   It shows `7.2.22r` and a build number, or a newer version.
2. Check that the drivers are loaded:

   ```bash
   systemctl status vboxdrv
   ```

   It should say `active (exited)`: the service loaded the drivers and finished.
3. Open VirtualBox from your apps (search for "VirtualBox"), or type `virtualbox` in a terminal.

## Keep it up to date

New 7.2 versions come with your normal updates (`sudo apt update && sudo apt full-upgrade`). The package name carries
the version, so a future major version will need installing by its own name, as `virtualbox-7.2` did after
`virtualbox-7.1`.

> [!NOTE]
> The **Extension Pack** on VirtualBox's download page is a separate add-on with its own license (Oracle's PUEL, not
> the open-source one). You don't need it for this lab.

## If something goes wrong

**"Kernel driver not installed (rc=-1908)".** VirtualBox's drivers aren't loaded. Run `sudo /sbin/vboxconfig` and read
what it says. If it asks for kernel headers, install the packages it names and run it again. If it mentions signing,
follow [If Secure Boot is on](#if-secure-boot-is-on). This can also happen after a kernel update: the same command
builds the drivers for the new kernel.

**"VirtualBox can't operate in VMX root mode" (Intel) or "VirtualBox can't enable the AMD-V extension" (AMD).** Since
Linux 6.12, KVM, Linux's own hypervisor, takes the processor's virtualization as soon as it loads, and VirtualBox
can't always get it back. Tell KVM to wait until one of its own machines starts, as it did before, then restart:

```bash
echo "options kvm enable_virt_at_load=0" | sudo tee /etc/modprobe.d/kvm-virtualbox.conf
sudo reboot
```

**"VT-x is disabled in the BIOS for all CPU modes"** (on AMD processors: AMD-V). Virtualization is off in your
computer's UEFI settings.
<!-- guide: turn-on-virtualization -->

**`apt update` says the repository "does not have a Release file".** Oracle has no packages for the code name the
command filled in: your system may be too new, too old, or built on Debian without being Debian. See which name it
used with `cat /etc/apt/sources.list.d/virtualbox.list`. To undo the repository, delete that file:
`sudo rm /etc/apt/sources.list.d/virtualbox.list`.

**You missed the blue key screen.** The computer started normally without trusting the key. Ask again, then restart:

```bash
sudo mokutil --import /var/lib/shim-signed/mok/MOK.der
```
