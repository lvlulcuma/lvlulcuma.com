---
# Guide → lvlulcuma.com/en/guides/set-up-kali-vmware/
title: "Set up Kali Linux in VMware Workstation Pro"
date: 2026-11-13
category: install   # install | quick | configure | use | harden | fix
order: 5   # position within its category
time: 45   # rough minutes to complete
platforms: [windows]   # windows | macos | linux
requires: [install-vmware-workstation-windows]   # guides to do first (folder names); shown as "Before you start"
dek: "Download Kali's ready-made virtual machine, open it in VMware Workstation Pro, give it a password of your own and bring every tool up to date."
# Pictures: each one is placed in the text below by a line <!-- pic: <name> -->. How each kind is drawn:
# src/components/GuideVisual.astro. Rows count from 1.
visuals:
  # Kali's download page (kali.org/get-kali), Virtual Machines section.
  download:
    kind: route
    stages:
      - where: "kali.org/get-kali"
        steps: ["Virtual Machines", "VMware", "Download"]
    caption: "Take <strong>VMware</strong>, not <strong>VMware Weekly</strong>: the weekly builds are untested. The file's SHA-256 hash is listed with it, under <strong>SHA256sum</strong>."
  # 7-Zip's entry in the File Explorer menu; Windows 11 hides it under "Show more options" (Kali's own docs say so).
  unpack:
    kind: route
    stages:
      - where: "In File Explorer"
        steps: ["Right-click the .7z file", "Show more options", "7-Zip", "Extract to \"kali-linux-2026.3-vmware-amd64\\\""]
    caption: "On Windows 10, <strong>7-Zip</strong> is in the menu straight away, without <strong>Show more options</strong>."
  # Workstation's settings for the Kali machine. The values are the ones Kali builds its images with (Kali's docs).
  settings:
    kind: window
    title: "Virtual Machine Settings"
    head: ["Device", "Summary"]
    rows:
      - ["Memory", ""]
      - ["Processors", "4"]
      - ["Hard Disk (SCSI)", "80 GB"]
      - ["Network Adapter", "NAT"]
    mark: 1
    states:
      - { label: "As it comes", value: "2 GB" }
      - { label: "16 GB or more", value: "4 GB", tone: go }
    caption: "<strong>VM</strong> > <strong>Settings</strong>, <strong>Hardware</strong> tab: as Kali comes, and with 16 GB or more in your computer. The list on screen is longer: only the lines that matter here are drawn."
  # Who has the mouse and keyboard: from Workstation Pro's list of default hot keys.
  keys:
    kind: cards
    cards:
      - title: "Click inside"
        text: "Kali's screen gets your mouse and keyboard."
      - title: "<kbd>Ctrl</kbd> <kbd>Alt</kbd>"
        text: "Gives them back to Windows."
      - title: "<kbd>Ctrl</kbd> <kbd>G</kbd>"
        text: "Hands them to Kali without a click."
    caption: "Your mouse seems stuck inside Kali? Press <kbd>Ctrl</kbd> <kbd>Alt</kbd>."
---

Kali Linux is the attack machine of your lab: a Linux system that comes with hundreds of security tools. Kali offers
it as a ready-made VMware virtual machine, so there's nothing to install. You download it, unpack it, open it in
Workstation Pro and log in. This guide was written for Kali 2026.3 (October 2026) and Workstation Pro 26H1.

> [!NOTE]
> Make room first. Unpacked, the machine takes more than 10 GB, and its virtual disk grows as you use it, up to
> 80 GB. A fast SSD is the best place for it.

## Download Kali's virtual machine

<!-- pic: download -->

1. Open [Kali's download page](https://www.kali.org/get-kali/#kali-virtual-machines) and choose **Virtual Machines**.
2. Under **VMware**, select the download. In November 2026 the file is `kali-linux-2026.3-vmware-amd64.7z`, a few
   gigabytes. If a newer release is listed, take that one: every step works the same, only the number in the names
   changes.
3. While it downloads, copy the **SHA256sum** shown with it: a string of 64 letters and numbers.
4. When the download is done, open your **Downloads** folder, right-click an empty area and choose **Open in
   Terminal** (on Windows 10, hold <kbd>Shift</kbd> while you right-click and choose **Open PowerShell window
   here**). Paste the hash between the quotes and press <kbd>Enter</kbd>:

   ```powershell
   (Get-FileHash kali-linux-2026.3-vmware-amd64.7z -Algorithm SHA256).Hash -eq "PASTE-THE-HASH-HERE"
   ```

   **True** means you have exactly the file Kali released. **False** means you don't: delete it and download it
   again. [Verify a file's hash](/en/guides/check-hash/) explains this check in more detail.

## Unpack it

The `.7z` file is a compressed archive. Kali suggests the free 7-Zip app to unpack it.

1. If you don't have 7-Zip yet, download the **64-bit Windows x64** installer from [7-zip.org](https://www.7-zip.org/)
   and run it.
2. Move the `.7z` file to where you want the machine to live, such as a folder for your virtual machines.
3. Right-click it and choose **Show more options** > **7-Zip** > **Extract to "kali-linux-2026.3-vmware-amd64\\"**.

   <!-- pic: unpack -->

4. Wait until 7-Zip is done. The new folder holds another folder whose name ends in `.vmwarevm`, with the machine's
   files inside.

> [!WARNING]
> The unpacked files *are* the machine: its disk lives in them. Keep that folder. Once Kali runs, you can delete the
> `.7z` file to free up space.

## Open it in VMware Workstation Pro

1. Open VMware Workstation and select **File** > **Open**.
2. Go into the folder you unpacked, then into the folder ending in `.vmwarevm`. Select
   `kali-linux-2026.3-vmware-amd64.vmx` (Windows may hide the `.vmx` part) and select **Open**. Kali appears in the
   list of machines on the left, with its own tab.
3. Before you start it, select **VM** > **Settings**. Workstation changes the memory only while a machine is off,
   so this is the moment.

   <!-- pic: settings -->

   - **Memory:** Kali comes with 2 GB, enough to start. If your computer has 16 GB or more, give it 4 GB, so heavier
     tools and more windows at once run smoothly. The marks on the **Memory** page show how far Workstation
     recommends going.
   - **Processors:** it comes with 4 cores (2 processors with 2 cores each). Leave them.
   - **Network Adapter:** **NAT**, so Kali can go online for its first update. Leave it for now.

   Select **OK**.

## Start it and log in

1. Select the start button (▶) on the toolbar.
2. Workstation may ask whether you moved or copied this machine. Select **I Copied It**: the machine then gets its
   own ID and network address, so it never clashes with another copy of the same download. It's also the answer
   VMware suggests when you're not sure.
3. Kali starts and shows its login screen. Click inside it, type `kali` as the user name and `kali` as the
   password, and press <kbd>Enter</kbd>.

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
3. Copy a line of text in Windows, then right-click inside Kali's terminal and choose **Paste**. If the text appears,
   VMware's helper tools (open-vm-tools), which come with Kali's image, are working.

That's it: your attack machine is ready. Save it as it is now, in a snapshot called `clean`, so you can always come
back here:
<!-- guide: vmware-snapshots -->

Kali stays on NAT only for updates. In NAT it can reach your home network too, so before you aim any tool at
anything, move it onto a host-only network with your targets, and only test machines you own
([the lab rules](/en/lab/rules/)).
<!-- guide: vmware-host-only -->

## If something goes wrong

**Starting Kali fails with "This host supports Intel VT-x, but Intel VT-x is disabled"** (or AMD-V). The
processor's virtualization is off in your computer's UEFI settings.
<!-- guide: turn-on-virtualization -->

**There's no 7-Zip in the right-click menu.** On Windows 11, choose **Show more options** first. Or open **7-Zip
File Manager** from the Start menu, go to the file, select it and select **Extract**.

**The update fails with "Temporary failure resolving".** Kali isn't online. Select **VM** > **Settings** >
**Network Adapter**, tick **Connected** and **Connect at power on**, choose **NAT** and select **OK**. Then run the
update again.
