---
# Guide → lvlulcuma.com/en/guides/set-up-windows-trial-vmware/
title: "Set up a Windows 11 trial in VMware Workstation Pro"
date: 2026-11-14
category: install   # install | quick | configure | use | harden | fix
order: 12   # position within its category
time: 60   # rough minutes to complete
platforms: [windows]   # windows | macos | linux
requires: [install-vmware-workstation-windows]   # guides to do first (folder names); shown as "Before you start"
dek: "Download Microsoft's free 90-day Windows 11 Enterprise trial, build a virtual machine that meets Windows 11's needs, install it with a local account, and know what to do when the trial ends."
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
  # The New Virtual Machine wizard's encryption page (Workstation docs: encrypt all files, or only the files the vTPM
  # needs; the partial option is the faster one).
  encrypt:
    kind: cards
    cards:
      - title: "Only the files needed to support a TPM"
        text: "Encrypts just the small files behind the virtual TPM. The disk stays unencrypted, so the machine stays fast."
        tags: ["pick this"]
      - title: "All the files"
        text: "Encrypts the whole machine, disk included. Safer for private data, slower, and not needed for a lab target."
    caption: "Either way, the machine is locked with a password. Lose it and the machine can't be opened."
  # What Windows 11 needs, and where Workstation shows it (Microsoft's minimums; Broadcom KB 315650).
  settings:
    kind: window
    title: "Virtual Machine Settings"
    head: ["Device or setting", "What Windows 11 needs"]
    rows:
      - ["Memory", "4 GB or more"]
      - ["Processors", "2 or more"]
      - ["Hard Disk", "64 GB or more"]
      - ["Trusted Platform Module", "Present"]
      - ["Options > Advanced: firmware", "UEFI, Secure Boot on"]
      - ["CD/DVD", "The Windows 11 ISO"]
    mark: 4
    caption: "<strong>VM</strong> > <strong>Settings</strong>. The <strong>Trusted Platform Module</strong> is there because the machine is encrypted: without encryption, Workstation can't add one."
  # Windows setup's account screens on Pro and Enterprise: work or school, then Domain join instead.
  account:
    kind: route
    stages:
      - where: "Windows setup, account screens"
        steps: ["Set up for work or school", "Sign-in options", "Domain join instead", "Your user name"]
    caption: "<strong>Domain join instead</strong> joins no domain here: with no domain on the network, Windows makes a local account."
---

Your lab needs Windows targets too, and Microsoft gives one away: a free 90-day trial of Windows 11 Enterprise from
its Evaluation Center, with no product key. This guide builds it as a VMware Workstation Pro virtual machine, the way
Windows 11 wants it: a virtual TPM (Trusted Platform Module, the security chip Windows 11 requires), Secure Boot, and
enough memory and disk. It was written for the Windows 11 Enterprise 26H2 trial (build 26300.9457) and Workstation
Pro 26H1.

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

1. In Workstation, select **File** > **New Virtual Machine**. Keep **Typical** and select **Next**.
2. Choose **I will install the operating system later** and select **Next**. You'll insert the ISO in a moment.
3. Choose **Microsoft Windows** and, as the version, **Windows 11 x64**. Select **Next**.
4. Give the machine a name, such as `Windows 11 target`, keep the suggested folder or pick another, and select
   **Next**.
5. On the encryption page, choose the option that encrypts **only the files needed to support a TPM**:

   <!-- pic: encrypt -->

   Type a password or select **Generate**, and tick **Remember the password on this machine in Credential Manager**,
   so Workstation doesn't ask every time. Write the password down somewhere safe as well: Credential Manager is only
   a convenience, and Workstation asks for the password whenever it's missing, for example after some upgrades.
6. Give the disk at least **64 GB**. Workstation only uses the space as Windows fills it. Select **Next**, then
   **Finish**.

Workstation adds a virtual TPM to the new machine by itself, because the machine is encrypted and runs Windows 11.
Don't remove the encryption or the TPM later: Windows 11 expects them.

## Check its settings and insert the ISO

Select the machine and open **VM** > **Settings**. Check each line, and change what's too small:

<!-- pic: settings -->

1. **Memory**: at least 4 GB (4096 MB). **Processors**: at least 2.
2. **CD/DVD (SATA)**: choose **Use ISO image file**, select **Browse** and pick the ISO you downloaded. Make sure
   **Connect at power on** is ticked.
3. **Network Adapter**: **NAT**. The trial needs the internet to activate.
4. On the **Options** tab, open **Advanced**: the firmware must be **UEFI**, with Secure Boot turned on.

Select **OK**.

## Install Windows

1. Select **Power on this virtual machine**. A black screen asks you to press any key to boot from CD or DVD: click
   inside the machine and press a key straight away. If you miss it, select **VM** > **Power** > **Reset** and try
   again.
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

## Install VMware Tools

VMware Tools are drivers for the virtual hardware: the screen fits the window, the mouse moves smoothly, and copy and
paste work between Windows and your computer.

1. Select **VM** > **Install VMware Tools**. Workstation puts the Tools disc into the machine's DVD drive.
2. In the machine, open File Explorer, then the DVD drive called **VMware Tools**, and run **setup64** (or **setup**).
3. Keep the defaults, finish the install, and restart Windows when it asks.

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
   <!-- guide: vmware-snapshots -->
3. Move the machine to the host-only network with the rest of your lab before you attack it.
   <!-- guide: vmware-host-only -->

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

**Setup says "This PC can't run Windows 11".** Something in [Check its settings](#check-its-settings-and-insert-the-iso)
is missing: usually the TPM (the machine must be encrypted first), Secure Boot, or memory. Shut the machine down, fix
the setting and start again.

**Workstation asks for a password when you open the machine.** It's the encryption password from step 5. Type it in
and tick **Remember the password**. Without it, the machine can't be opened.

**The machine starts but never reaches Windows setup.** You missed the "press any key" moment. Select **VM** >
**Power** > **Reset** and press a key as soon as the machine starts.

**There's no "Domain join instead".** Sign in with a Microsoft account, as the note in
[Install Windows](#install-windows) says.

**The desktop is black and Windows shuts down every hour.** The trial isn't activated or has run out. Check with
`slmgr /dlv`, put the machine on NAT, and see [When the trial ends](#when-the-trial-ends).
