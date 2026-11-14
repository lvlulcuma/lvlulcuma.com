---
# Guide → lvlulcuma.com/en/guides/set-up-windows-trial-virtualbox/
title: "Set up a Windows 11 trial in VirtualBox"
date: 2026-11-14
category: install   # install | quick | configure | use | harden | fix
order: 13   # position within its category
time: 60   # rough minutes to complete
platforms: [windows, linux]   # windows | macos | linux
requires: []   # guides to do first (folder names); shown as "Before you start"
dek: "Download Microsoft's free 90-day Windows 11 Enterprise trial, build a VirtualBox machine with the TPM and Secure Boot Windows 11 needs, install it with a local account, and know what to do when the trial ends."
# Pictures: each one is placed in the text below by a line <!-- pic: <name> -->. How each kind is drawn:
# src/components/GuideVisual.astro. Rows count from 1.
visuals:
  # Microsoft Evaluation Center: Windows 11 Enterprise, register, then a 64-bit ISO per language.
  download:
    kind: route
    stages:
      - where: "Microsoft Evaluation Center"
        steps: ["Windows 11 Enterprise", "ISO – Enterprise", "Register", "English (United States): 64-bit edition"]
    caption: "Take <strong>ISO – Enterprise</strong>, not <strong>ISO – Enterprise LTSC</strong>. The file is several gigabytes."
  # VirtualBox 7.2's New wizard, first page (manual, Creating a New Virtual Machine).
  wizard:
    kind: window
    title: "New Virtual Machine"
    head: ["Field", "Set to"]
    rows:
      - ["Name", "Windows 11 target"]
      - ["ISO Image", "The Windows 11 ISO"]
      - ["OS Version", "Windows 11 (64-bit)"]
      - ["Install OS Using Unattended Installation", "Not ticked"]
    mark: 4
    caption: "VirtualBox reads the ISO and fills in the system for you. Clear the unattended box to go through Windows setup yourself."
  # What Windows 11 needs, and where VirtualBox shows it (VirtualBox fills these in for a Windows 11 machine).
  settings:
    kind: window
    title: "Settings"
    head: ["Where", "What Windows 11 needs"]
    rows:
      - ["System: Base Memory", "4096 MB or more"]
      - ["System: Processors", "2 or more"]
      - ["System > Motherboard: TPM", "2.0"]
      - ["System > Motherboard: EFI", "On"]
      - ["System > Motherboard: Secure Boot", "On"]
      - ["Storage: hard disk", "64 GB or more"]
    mark: 3
    caption: "For a Windows 11 machine VirtualBox normally sets all of these by itself. This is the check, before the first start."
  # Windows setup's account screens on Pro and Enterprise: work or school, then Domain join instead.
  account:
    kind: route
    stages:
      - where: "Windows setup, account screens"
        steps: ["Set up for work or school", "Sign-in options", "Domain join instead", "Your user name"]
    caption: "<strong>Domain join instead</strong> joins no domain here: with no domain on the network, Windows makes a local account."
---

Your lab needs Windows targets too, and Microsoft gives one away: a free 90-day trial of Windows 11 Enterprise from
its Evaluation Center, with no product key. This guide builds it as a VirtualBox virtual machine, the way Windows 11
wants it: a virtual TPM (Trusted Platform Module, the security chip Windows 11 requires), Secure Boot, and enough
memory and disk. It works the same on Windows and Linux, and was written for the Windows 11 Enterprise 26H2 trial
(build 26300.9457) and VirtualBox 7.2.22.

<!-- for: windows -->
You need VirtualBox. If you don't have it yet, its installer is on
[VirtualBox's download page](https://www.virtualbox.org/wiki/Downloads), under **Windows hosts**;
[Get VirtualBox](/en/guides/set-up-kali-virtualbox/#get-virtualbox) in the Kali guide goes through it page by page.

<!-- for: linux -->
You need VirtualBox. If you don't have it yet, install it from Oracle's own repository:
<!-- guide: install-virtualbox-linux -->
<!-- /for -->

> [!NOTE]
> Microsoft offers the trial for evaluating Windows 11 Enterprise. It runs for 90 days; then it stops being usable,
> and you build a fresh one. [When the trial ends](#when-the-trial-ends) explains your choices.

## Download the trial

1. Open Microsoft's [Windows 11 Enterprise evaluation page](https://www.microsoft.com/en-us/evalcenter/evaluate-windows-11-enterprise),
   choose to download the ISO for **Windows 11 Enterprise**, and fill in Microsoft's registration form.
2. On the download list, pick your language and its **64-bit edition** under **ISO – Enterprise**.

   <!-- pic: download -->

3. Wait for the download to finish: Microsoft warns it can take a few hours on a slow connection.

If Microsoft lists a SHA-256 hash for your file (the evaluation page links to its list, under verifying your
download), check the ISO against it before you use it.
<!-- guide: check-hash -->

## Create the virtual machine

1. In VirtualBox, select **Home**, then **New**.
2. Give the machine a name, such as `Windows 11 target`, and keep the suggested folder or pick another with enough
   free space.
3. Under **ISO Image**, choose the Windows 11 ISO you downloaded. VirtualBox reads it and fills in the system:
   **OS Version** should say **Windows 11 (64-bit)**. If it doesn't, choose that yourself.
4. Clear **Install OS Using Unattended Installation**, so you go through Windows setup yourself, then select
   **Next**.

   <!-- pic: wizard -->

5. On the hardware page, give it at least **4096 MB** of **Base Memory** and **2 Processors**: memory your computer
   can spare, and no more than half of its processor threads. Make sure **Use EFI** is ticked, and keep a **Disk Size**
   of at least 64 GB (VirtualBox suggests more; the disk only takes the space Windows fills). Select **Next**, then
   **Finish**.

> [!TIP]
> VirtualBox can also install Windows by itself: leave **Install OS Using Unattended Installation** ticked and give it a
> user name and password, and it makes that a local administrator account. It's quicker, but you don't see the steps,
> and if it stalls you start again with the box cleared.

## Check its settings

Select the machine and open **Settings**. VirtualBox chose these for Windows 11 already; check that nothing is
missing:

<!-- pic: settings -->

1. **System**: at least 4096 MB of memory and 2 processors. On the **Motherboard** settings, the TPM is **2.0**, and
   both EFI and Secure Boot are on.
2. **Storage**: the optical drive holds the Windows 11 ISO, and the hard disk is at least 64 GB.
3. **Network**: **Adapter 1** is enabled and attached to **NAT**. The trial needs the internet to activate.

Select **OK**.

## Install Windows

1. Select **Start**. The machine finds its empty disk and starts from the ISO. If a black screen asks you to press any
   key to boot from CD or DVD, click inside the window and press a key straight away. If you miss it, select
   **Machine** > **Reset** and try again.
2. Choose your language and keyboard, then **Install Windows 11**. If setup asks you to agree that everything on the
   disk will be deleted, agree: it's the machine's own empty disk. No product key is needed.
3. Accept the license terms, select the disk (**Disk 0 Unallocated Space**) and select **Next**, then **Install**.
   Windows copies its files and restarts a few times on its own.
4. Setup asks for your region and keyboard. The machine is already online through NAT, so it goes on by itself.
5. For the account, skip the Microsoft account and make a local one:

   <!-- pic: account -->

   If setup asks how to set the device up, choose **Set up for work or school**. On the sign-in page, select
   **Sign-in options**, then **Domain join instead**, and type a user name, a password, and the answers to the
   security questions it asks.
6. On the privacy pages, turn off what you don't want and select **Accept**. The desktop appears.

> [!NOTE]
> Microsoft's evaluation page says the trial needs a Microsoft account. On Pro and Enterprise, Windows 11's setup has
> long offered **Domain join instead**, which makes a local account without one. If your setup doesn't offer it, sign
> in with a Microsoft account: a free one works.

Your mouse is caught inside the machine's window until the next step. The **Host key**, the right <kbd>Ctrl</kbd> key
by default, gives it back to your computer.

## Install the Guest Additions

The Guest Additions are VirtualBox's drivers for the virtual hardware: the screen fits the window, the mouse moves
freely between Windows and your computer, and copy and paste can work.

1. In the machine's window, select **Devices** > **Insert Guest Additions CD image**.
2. In Windows, open File Explorer, then the new DVD drive, and run **VBoxWindowsAdditions**.
3. Keep the defaults, finish the install, and restart Windows when it asks.
4. For copy and paste, select **Devices** > **Shared Clipboard** > **Bidirectional**. It's off for new machines.

## Check that the trial is activated

The trial activates itself online. In the machine, right-click **Start**, open **Terminal**, and type:

```powershell
slmgr /dlv
```

A window shows the license details. **License Status: Licensed** and a **Timebased activation expiration** with the
days left mean the trial is running. The desktop's bottom-right corner shows the days left too. If it's not
licensed, check that the machine is on NAT and online, wait a little, and look again.

## Save it, then wall it off

1. Install updates now if you want a current system (**Settings** > **Windows Update**), while the machine is still
   on NAT.
2. Shut Windows down and take a snapshot called `clean`.
   <!-- guide: virtualbox-snapshots -->
3. Move the machine to the host-only network with the rest of your lab before you attack it.
   <!-- guide: virtualbox-host-only -->

## When the trial ends

`slmgr /dlv` and the desktop show how many days are left. Microsoft spells out what happens if the trial isn't
activated or runs out: the desktop background turns black, a notification says the system isn't genuine, and the
machine shuts down every hour.

- **Build a fresh one.** Download a new ISO and repeat this guide. That's the clean way, and a good habit for a lab
  anyway. Keep notes of what you installed on the machine, so a rebuild is quick.
- **Reset the clock, a few times at most.** `slmgr /rearm` in an administrator terminal, then a restart, starts a
  new trial period while rearms are left. `slmgr /dlv` shows how many are left (**Remaining Windows rearm count**).
  Do it before the trial runs out.
- **Not supported:** turning the trial into a normal Windows. A licensed Windows needs a fresh install.

## If something goes wrong

**Setup says "This PC can't run Windows 11".** Something in [Check its settings](#check-its-settings) is missing:
usually the TPM, Secure Boot, or memory. Shut the machine down, fix the setting and start again.

**The machine starts but never reaches Windows setup.** You missed the "press any key" moment. Select **Machine** >
**Reset** and press a key as soon as the machine starts.

**There's no "Domain join instead".** Sign in with a Microsoft account, as the note in
[Install Windows](#install-windows) says.

**The desktop is black and Windows shuts down every hour.** The trial isn't activated or has run out. Check with
`slmgr /dlv`, put the machine on NAT, and see [When the trial ends](#when-the-trial-ends).

<!-- for: windows -->
**Windows is very slow, and a green turtle shows at the bottom right of its window.** Windows' own hypervisor is on
(WSL 2, Docker Desktop and some security features use it), and VirtualBox runs on top of it, slowly. The Kali guide's
fixes explain your choices.
<!-- guide: set-up-kali-virtualbox -->

<!-- for: linux -->
**VirtualBox says its kernel driver isn't installed, or that it can't enable the processor's virtualization.** The
install guide's fixes cover both.
<!-- guide: install-virtualbox-linux -->
<!-- /for -->
