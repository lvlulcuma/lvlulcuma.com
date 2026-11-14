---
# Guide → lvlulcuma.com/en/guides/set-up-kali-utm/
title: "Set up Kali Linux in UTM"
date: 2026-11-14
category: install   # install | quick | configure | use | harden | fix
order: 7   # position within its category
time: 45   # rough minutes to complete
platforms: [macos]   # windows | macos | linux
requires: [install-utm]   # guides to do first (folder names); shown as "Before you start"
dek: "Install Kali Linux on a Mac with Apple silicon: download its Arm installer, create the virtual machine in UTM, install, and bring every tool up to date."
# Pictures: each one is placed in the text below by a line <!-- pic: <name> -->. How each kind is drawn:
# src/components/GuideVisual.astro. Rows count from 1.
visuals:
  # Kali's download page: Installer Images, Apple Silicon (ARM64).
  download:
    kind: route
    stages:
      - where: "kali.org/get-kali"
        steps: ["Installer Images", "Apple Silicon (ARM64)", "Installer", "Download"]
    caption: "Take <strong>Installer</strong>, not the weekly image: weekly builds are untested. The SHA-256 hash is listed with it."
  # UTM's new-machine wizard, as Kali's own UTM page walks it.
  wizard:
    kind: route
    stages:
      - where: "UTM Library"
        steps: ["Create a New Virtual Machine", "Virtualize", "Other", "Boot ISO Image: the Kali ISO"]
      - where: "Then"
        steps: ["Hardware", "Storage", "Shared Directory", "Summary: name it Kali Linux", "Save"]
    caption: "Kali's page picks <strong>Other</strong>, not <strong>Linux</strong>. Steps 3 to 6 below say what to set on each page."
  # The two settings Kali's UTM page changes, before and after installing.
  devices:
    kind: cards
    cards:
      - title: "To install"
        text: "Add a Serial device. Kali installs in a text window, because of a bug in the current UTM."
        tags: ["Serial: added"]
      - title: "After installing"
        text: "Remove the Serial device and the installer disc, and set the display card to virtio-gpu-pci."
        tags: ["Serial: removed", "virtio-gpu-pci"]
    caption: "Both in the machine's settings: select it in the UTM Library, then <strong>Edit</strong>."
  # The text installer: one example page and its keys (Debian's installer, which Kali uses).
  installer:
    kind: screen
    title: "Partition disks"
    badge: "Example"
    rows:
      - ["Guided - use entire disk", ""]
      - ["Guided - use entire disk and set up LVM", ""]
      - ["Guided - use entire disk and set up encrypted LVM", ""]
      - ["Manual", ""]
    mark: 1
    keys: [["↑↓", "Move"], ["Space", "Tick a box"], ["Tab", "Go to the buttons"], ["Enter", "Choose"]]
    caption: "The installer is all text and keys. Click inside its window first, so it gets your keyboard."
---

Kali Linux is the attack machine of your lab: a Linux system that comes with hundreds of security tools. Kali makes
ready-made virtual machines only for Intel and AMD processors, so on a Mac with Apple silicon you install it yourself,
from Kali's Arm installer. It takes a while, but every step is a simple choice. This guide follows Kali's own
instructions for UTM and was written for Kali 2026.3 and UTM 4.7.5.

> [!NOTE]
> On an Intel Mac, take Kali's 64-bit (amd64) installer instead. UTM's questions are the same, but Kali's own UTM
> instructions, and this guide, were written for Apple silicon.

## Download the installer and check it

<!-- pic: download -->

1. Open [Kali's download page](https://www.kali.org/get-kali/) and choose **Installer
   Images**, then **Apple Silicon (ARM64)**.
2. Download **Installer**. In November 2026 the file is `kali-linux-2026.3-installer-arm64.iso`. If a newer release
   is listed, take that one: only the number in the name changes.
3. Copy the **SHA-256** hash shown with it.
4. When the download is done, open **Terminal**, paste the hash between the quotes and press <kbd>Return</kbd>:

   ```sh
   cd ~/Downloads
   echo "PASTE-THE-HASH-HERE  kali-linux-2026.3-installer-arm64.iso" | shasum -a 256 -c
   ```

   `OK` at the end of the line means you have exactly the file Kali released. `FAILED` means you don't: delete it and
   download it again. [Verify a file's hash](/en/guides/check-hash/) explains this check in more detail.

## Create the virtual machine

<!-- pic: wizard -->

1. Open UTM and select **Create a New Virtual Machine** (or the **+** button).
2. Choose **Virtualize**, then **Other**.
3. Next to **Boot ISO Image**, select **Browse**, choose the Kali ISO and select **Continue**.
4. On the **Hardware** page, set **Memory** to at least 2048 MiB, the amount Kali gives its own ready-made machines.
   If your Mac has 16 GB or more, 4096 MiB makes Kali smoother. Leave the rest and select **Continue**.
5. On the **Storage** page, keep the size UTM suggests, as Kali's page does, and select **Continue**. Skip the
   **Shared Directory** page.
6. On the **Summary** page, name the machine `Kali Linux` and select **Save**.

## Add a serial window for the installer

Kali's page says that a bug in the current UTM stops the usual installer from showing, so Kali installs in a plain
text window instead.

<!-- pic: devices -->

1. In the UTM Library, select **Kali Linux** and select **Edit**.
2. Under **Devices**, add a **Serial** device, then select **Save**.

## Install Kali

1. Start the machine with the play button. A text window opens with Kali's boot menu. Choose **Install**.
2. Answer the installer's questions. Most have a sensible answer already selected:

   <!-- pic: installer -->

   - **Language, location, keyboard:** yours.
   - **Hostname:** `kali` is fine. Leave **Domain name** empty.
   - **Full name, username, password:** the account you'll log in with. Pick a password of your own: unlike Kali's
     ready-made machines, there's no shared `kali` password here.
   - **Clock:** your time zone.
   - **Partition disks:** **Guided - use entire disk**, then the only disk in the list, then **All files in one
     partition**. At **Write the changes to disks?** choose **Yes**: the "disk" is the machine's own virtual disk, not
     your Mac's.
   - **Software selection:** keep what's ticked: the Xfce desktop and Kali's default tools.
   - **Boot loader (GRUB):** if it asks where to install it, choose the only disk in the list.
3. When it says the installation is complete, choose **Continue**. If the machine starts the installer again, stop it
   with the stop button: the next step fixes that.

## Switch to the normal screen

1. Shut the machine down if it's still running, select it and select **Edit**.
2. Right-click the **Serial** device and choose **Remove**.
3. Under **Display**, set the emulated display card to **virtio-gpu-pci**. If there's no **Display** device, add one
   under **Devices** first.
4. Scroll down below **Shared Directory** to the drives, right-click the one with the installer ISO and choose
   **Remove**. Without it, the machine starts Kali instead of the installer.
5. Select **Save** and start the machine. Kali's login screen appears in a normal window.

## Log in and update everything

1. Log in with the username and password you chose.
2. Open a terminal: select the terminal icon in the bar at the top of the screen, or open the menu in the top left
   corner and type `terminal`.
3. Update every tool. `sudo` runs a command as the administrator and asks for your password first:

   ```sh
   sudo apt update && sudo apt full-upgrade -y
   ```

   The first time, that takes a while. If it stops at a question in a blue box, the answer that's already selected
   is usually fine: press <kbd>Return</kbd>.
4. Install the helpers UTM recommends for Linux machines: the first makes copy and paste and window resizing work,
   the second lets your Mac and the machine talk (time sync, for one).

   ```sh
   sudo apt install -y spice-vdagent qemu-guest-agent
   ```

5. Restart Kali so the new kernel (the core of the system) and the helpers are used:

   ```sh
   sudo reboot
   ```

Kali needs the internet for updates, and UTM's **Shared Network** mode (**Edit** > **Network**) gives it that,
through your Mac. Before you practice on vulnerable machines, Kali moves onto a network without internet:
<!-- guide: utm-host-only -->

## Check it works

1. Open a terminal and type:

   ```sh
   uname -m
   grep VERSION /etc/os-release
   ```

   `aarch64` means Kali runs natively on your Mac's Arm processor. The version is `2026.3`, or newer if Kali released
   a new one since.
2. Copy a line of text on your Mac, then right-click inside Kali's terminal and choose **Paste**. If it appears, the
   helpers work.

That's it: your attack machine is ready. Save it as it is now, so you can always come back here:
<!-- guide: utm-snapshots -->

## If something goes wrong

**The window stays black when the installer starts.** The serial device is missing, or the window shows the wrong
display. Check that you added **Serial** under **Devices**; Kali's page also says to make sure the window's display
is set to the serial device.

**The machine keeps starting the installer.** The installer ISO is still attached. Remove its drive as in
[Switch to the normal screen](#switch-to-the-normal-screen), step 4.

**The update fails with "Temporary failure resolving".** Kali isn't online. Select **Edit** > **Network** and check
that **Network Mode** is **Shared Network**, then restart Kali and run the update again.

**Kali is very slow.** You probably downloaded the amd64 installer, so UTM has to emulate it. On Apple silicon, use
the arm64 one and **Virtualize**.
