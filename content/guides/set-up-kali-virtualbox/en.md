---
# Guide → lvlulcuma.com/en/guides/set-up-kali-virtualbox/
title: "Set up Kali Linux in VirtualBox"
date: 2026-11-14
category: install   # install | quick | configure | use | harden | fix
order: 9   # position within its category
time: 45   # rough minutes to complete
platforms: [windows, linux]   # windows | macos | linux
requires: []   # guides to do first (folder names); shown as "Before you start"
dek: "Download Kali's ready-made VirtualBox machine, open it on Windows or Linux, give it a password of your own and bring every tool up to date."
# Pictures: each one is placed in the text below by a line <!-- pic: <name> -->. How each kind is drawn:
# src/components/GuideVisual.astro. Rows count from 1.
visuals:
  # Kali's download page (kali.org/get-kali), Virtual Machines section.
  download:
    kind: route
    stages:
      - where: "kali.org/get-kali"
        steps: ["Virtual Machines", "VirtualBox", "Download"]
    caption: "Take the release, not the weekly build: the weekly ones are untested. The file's SHA-256 hash is listed with it, under <strong>SHA256sum</strong>."
  # Adding an existing machine in VirtualBox 7.2 (manual, Working with Virtual Machines: "clicking Open").
  open:
    kind: route
    stages:
      - where: "VirtualBox Manager"
        steps: ["Open", "The unpacked folder", "The .vbox file", "Open"]
    caption: "Older versions of VirtualBox call the button <strong>Add</strong>. Double-clicking the <code>.vbox</code> file works too."
  # The machine's settings. The values are the ones Kali builds its VirtualBox images with (Kali's VirtualBox guide).
  settings:
    kind: window
    title: "Settings"
    head: ["Setting", "Value"]
    rows:
      - ["System > Motherboard > Base Memory", ""]
      - ["System > Processor", "2 CPUs"]
      - ["Storage", "80 GB, grows as needed"]
      - ["Network > Adapter 1", "NAT"]
    mark: 1
    states:
      - { label: "As it comes", value: "2048 MB" }
      - { label: "16 GB or more", value: "4096 MB", tone: go }
    caption: "With the machine selected, <strong>Settings</strong> on the toolbar. The real window has many more pages: only the lines that matter here are drawn."
  # Keyboard and mouse (VirtualBox manual: the Host key is the right Ctrl key by default; Guest Additions free the mouse).
  keys:
    kind: cards
    cards:
      - title: "Click inside"
        text: "Kali's window gets your keyboard. The mouse moves freely in and out."
      - title: "<kbd>Right Ctrl</kbd>"
        text: "The Host key: gives the keyboard back to your computer."
      - title: "Bottom right"
        text: "VirtualBox shows the current Host key in the corner of Kali's window."
    caption: "No <kbd>Right Ctrl</kbd> on your keyboard? Choose another Host key in VirtualBox's preferences, under <strong>Input</strong>."
---

Kali Linux is the attack machine of your lab: a Linux system that comes with hundreds of security tools. Kali offers
it as a ready-made VirtualBox virtual machine, so there's nothing to install. You download it, unpack it, open it in
VirtualBox and log in. It works the same on Windows and Linux, on a computer with an Intel or AMD processor (Kali's
VirtualBox machine isn't made for Arm). This guide was written for Kali 2026.3 (October 2026) and VirtualBox 7.2.22.

> [!NOTE]
> Make room first. The machine's virtual disk grows as you use it, up to 80 GB. A fast SSD is the best place for it.

## Get VirtualBox

<!-- for: windows -->
VirtualBox is free and quick to install. (On Windows, Get started recommends VMware Workstation Pro, but VirtualBox
works too.)

1. Open [VirtualBox's download page](https://www.virtualbox.org/wiki/Downloads) and select **Windows hosts**. The
   file is called `VirtualBox-7.2.22-…-Win.exe`, or a newer version.
2. Run it and select **Next** through the pages. The defaults are fine.
3. A warning says installing the networking feature will reset your network connection: select **Yes**. Your
   internet drops for a few seconds.
4. If a page says **Missing Dependencies Python Core / win32api**, select **Yes** to go on. That part is only for
   controlling VirtualBox from Python scripts, which you don't need.
5. Select **Install**. When Windows asks whether to install device software from Oracle, select **Install**: those
   are VirtualBox's network drivers. Then select **Finish**.

<!-- for: linux -->
Install VirtualBox from Oracle's own repository, so it updates with the rest of your system. The step-by-step guide
covers Ubuntu, Debian and systems built on them, including Secure Boot.
<!-- guide: install-virtualbox-linux -->
<!-- /for -->

The processor's virtualization feature must be switched on, or your virtual machines won't start. Most computers come
with it on. The virtualization guide shows how to check in a minute, and how to turn it on if it's off.
<!-- guide: turn-on-virtualization -->

## Download Kali's virtual machine

<!-- pic: download -->

1. Open [Kali's download page](https://www.kali.org/get-kali/#kali-virtual-machines) and choose **Virtual Machines**.
2. Under **VirtualBox**, select the download. In November 2026 the file is `kali-linux-2026.3-virtualbox-amd64.7z`,
   a few gigabytes. If a newer release is listed, take that one: every step works the same, only the number in the
   names changes.
3. While it downloads, copy the **SHA256sum** shown with it: a string of 64 letters and numbers.
4. When the download is done, check it's exactly the file Kali released. In the commands, paste the hash where it
   says `PASTE-THE-HASH-HERE`.

<!-- for: windows -->
Open your **Downloads** folder, right-click an empty area and choose **Open in Terminal** (on Windows 10, hold
<kbd>Shift</kbd> while you right-click and choose **Open PowerShell window here**). Then type:

```powershell
(Get-FileHash kali-linux-2026.3-virtualbox-amd64.7z -Algorithm SHA256).Hash -eq "PASTE-THE-HASH-HERE"
```

**True** means the file is right.

<!-- for: linux -->
Open a terminal in your **Downloads** folder (`cd ~/Downloads`). Then type, with two spaces before the file name:

```sh
echo "PASTE-THE-HASH-HERE  kali-linux-2026.3-virtualbox-amd64.7z" | sha256sum -c
```

**OK** means the file is right.
<!-- /for -->

Anything else means it isn't: delete it and download it again. [Verify a file's hash](/en/guides/check-hash/)
explains this check in more detail.

## Unpack it

The `.7z` file is a compressed archive. Move it to where you want the machine to live, such as a folder for your
virtual machines, and unpack it there.

<!-- for: windows -->
Kali suggests the free 7-Zip app.

1. If you don't have 7-Zip yet, download the **64-bit Windows x64** installer from [7-zip.org](https://www.7-zip.org/)
   and run it.
2. Right-click the `.7z` file and choose **Show more options** > **7-Zip** > **Extract to
   "kali-linux-2026.3-virtualbox-amd64\\"**. On Windows 10, **7-Zip** is in the menu straight away.

<!-- for: linux -->
Install the 7-Zip command, then unpack the file from a terminal in that folder:

```sh
sudo apt install p7zip-full
7z x kali-linux-2026.3-virtualbox-amd64.7z
```
<!-- /for -->

The new folder holds the machine's files: a `.vbox` file, its settings, and a `.vdi` file, its disk.

> [!WARNING]
> The unpacked files *are* the machine: VirtualBox runs it from that folder, and its disk lives there. Keep the
> folder where it is. Once Kali runs, you can delete the `.7z` file to free up space.

## Add it to VirtualBox

1. Open VirtualBox and select **Open** on its toolbar.
2. Go into the folder you unpacked, select the `.vbox` file and select **Open**. Kali appears in the list of machines.

   <!-- pic: open -->

3. Before you start it, select Kali in the list and select **Settings**. VirtualBox changes the memory only while a
   machine is powered off, so this is the moment.

   <!-- pic: settings -->

   - **Memory** (**System** > **Motherboard** > **Base Memory**): Kali comes with 2048 MB, enough to start. If your
     computer has 16 GB or more, give it 4096 MB, so heavier tools and more windows at once run smoothly.
   - **Processors** (**System** > **Processor**): it comes with 2. Leave them.
   - **Network** (**Adapter 1**): it should say **NAT**, so Kali can go online for its first update. If it doesn't,
     choose **NAT** under **Attached to**.

   Select **OK**.

## Start it and log in

1. With Kali selected, select **Start** on the toolbar.
2. Kali starts in its own window and shows its login screen. Click inside it, type `kali` as the user name and
   `kali` as the password, and press <kbd>Enter</kbd>.

   <!-- pic: keys -->

## Make the password your own

Every Kali download has the same `kali` password, so change it first.

1. Open a terminal: select the terminal icon (a small black window) in the bar at the top of Kali's screen, or open
   the menu in the top left corner and type `terminal`.
2. Type this and press <kbd>Enter</kbd>:

   ```sh
   passwd
   ```

3. Type the current password (`kali`), then your new one twice. Nothing appears while you type: that's normal.

## Update everything

Kali updates its tools all the time, and the download is already a few weeks old.

1. In the terminal, type:

   ```sh
   sudo apt update && sudo apt full-upgrade -y
   ```

   `sudo` runs a command as the administrator and asks for your new password first. `apt update` fetches the list
   of new versions; `apt full-upgrade -y` installs them all. The first time, that takes a while.

2. If the update stops at a question in a blue box, the answer that's already selected is usually fine: press
   <kbd>Enter</kbd>.
3. When the prompt comes back, restart Kali so a new kernel (the core of the system) is used:

   ```sh
   sudo reboot
   ```

## Check it works

1. Log in again with your new password and open a terminal.
2. Type this and press <kbd>Enter</kbd>:

   ```sh
   grep VERSION /etc/os-release
   ```

   It shows `2026.3`, or a newer number if Kali released a new version since.
3. Copy a line of text on your computer, then right-click inside Kali's terminal and choose **Paste**. If the text
   appears, VirtualBox's helper tools inside Kali (the Guest Additions, which come with Kali's image) are working.

That's it: your attack machine is ready. Save it as it is now, in a snapshot called `clean`, so you can always come
back here:
<!-- guide: virtualbox-snapshots -->

Kali stays on NAT only for updates. In NAT it can reach your home network too, so before you aim any tool at
anything, move it onto a host-only network with your targets, and only test machines you own
([the lab rules](/en/lab/rules/)).
<!-- guide: virtualbox-host-only -->

## If something goes wrong

**Starting Kali fails with "VT-x is disabled in the BIOS for all CPU modes"** (or AMD-V). The processor's
virtualization is off in your computer's UEFI settings.
<!-- guide: turn-on-virtualization -->

<!-- for: windows -->
**The installer says VirtualBox needs the Microsoft Visual C++ 2019 Redistributable Package.** Install Microsoft's
[Visual C++ Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist) for **x64**,
restart Windows and run VirtualBox's installer again.

**Kali is very slow, and a green turtle shows at the bottom right of its window.** Windows' own hypervisor is on:
WSL 2, Docker Desktop and some Windows security features use it. VirtualBox then runs Kali through it, which works
but is slower. If you use those features, keep it that way, or use VMware Workstation Pro, which Get started
recommends on Windows.
<!-- guide: install-vmware-workstation-windows -->

<!-- for: linux -->
**"Kernel driver not installed (rc=-1908)".** VirtualBox's drivers aren't loaded, often after a kernel update or
with Secure Boot on. The [fixes in the install guide](/en/guides/install-virtualbox-linux/#if-something-goes-wrong)
cover it.
<!-- /for -->

**Paste doesn't work.** In Kali's window, open **Devices** > **Shared Clipboard** and choose **Bidirectional**.

**The update fails with "Temporary failure resolving".** Kali isn't online. Shut it down (`sudo poweroff`), open its
**Settings** > **Network**, make sure **Enable Network Adapter** is ticked and **Attached to** says **NAT**, select
**OK** and start it again. Then run the update again.
