---
# Guide → lvlulcuma.com/en/guides/install-vmware-workstation-windows/
title: "Install VMware Workstation Pro on Windows"
date: 2026-11-13
category: install   # install | quick | configure | use | harden | fix
order: 4   # position within its category
time: 20   # rough minutes to complete
platforms: [windows]   # windows | macos | linux
requires: [turn-on-virtualization]   # guides to do first (folder names); shown as "Before you start"
dek: "Get the free hypervisor for your Windows lab: make a Broadcom account, download VMware Workstation Pro, install it and start it for the first time."
# Pictures: each one is placed in the text below by a line <!-- pic: <name> -->. How each kind is drawn:
# src/components/GuideVisual.astro.
visuals:
  # What the computer needs, from the Workstation Pro 26H1 manual's host requirements.
  needs:
    kind: cards
    cards:
      - title: "Processor"
        text: "64-bit Intel or AMD, from 2011 or later, with virtualization turned on."
      - title: "Memory"
        text: "2 GB at the very least, 4 GB or more recommended, plus what your virtual machines use."
      - title: "Disk"
        text: "About 2.5 GB for Workstation Pro, plus room for your virtual machines."
    caption: "And a Windows account with administrator rights, to install it."
  # The way to the download on the Broadcom Support Portal (KB 344595), once signed in.
  portal:
    kind: route
    stages:
      - where: "Broadcom Support Portal, signed in"
        steps: ["My Downloads", "Free Software Downloads", "VMware Workstation Pro"]
      - where: "The download page"
        steps: ["VMware Workstation Pro 26H1 for Windows", "26H1u1", "I agree to the Terms and Conditions", "Download"]
    caption: "The direct link in step 1 skips the first row. Broadcom moves things around now and then, so the names may differ a little."
  # The installer's pages in order. Descriptions, not the exact titles on screen.
  setup:
    kind: route
    stages:
      - where: "The installer, page by page"
        steps: ["Welcome", "License agreement", "Hyper-V check", "Custom Setup", "User Experience Settings", "Shortcuts", "Install", "Finish", "Restart"]
    caption: "Steps 3 to 9 below go through them. Most pages need only <strong>Next</strong>, and the titles on screen may be worded a little differently."
  # The installer's Hyper-V check: the two messages it can show.
  hyperv:
    kind: cards
    cards:
      - title: "“Hyper-V is not detected on the host.”"
        text: "Your machines will run on VMware's own hypervisor, at full speed. Nothing to do here."
      - title: "“…the host has Hyper-V or Device/Credential Guard enabled.”"
        text: "Your machines will run through Windows' own hypervisor: a bit slower, but they work. Tick the Windows Hypervisor Platform box if there is one."
    caption: "The two messages, shortened. Docker Desktop, WSL 2 and some Windows security features switch Windows' hypervisor on."
---

VMware Workstation Pro is the program that runs your lab's virtual machines on Windows: a **hypervisor**. It's free
for personal, school and work use, with no license key. The only catch is the download: Broadcom, the company that
owns VMware, gives it out from its support portal, so you make a free account there first.

> [!NOTE]
> A Windows computer with an Arm processor (Snapdragon) can't run Workstation Pro: it needs an Intel or AMD
> processor. **Settings** > **System** > **About** shows which one you have.

<!-- pic: needs -->

## Make a free Broadcom account

1. Open [support.broadcom.com](https://support.broadcom.com) and select **Register** in the top right corner.
2. Enter your email address, answer the captcha (the picture test) and select **Next**.
3. Broadcom emails you a verification code. Type it in and select **Verify & Continue**.
4. Fill in your details, accept the **Terms of Use** and select **Create Account**.

> [!TIP]
> Use your own email address (not a shared one) and your real name, address and country. Broadcom checks them
> against export rules before it lets you download, and made-up details can get your download blocked.

If Broadcom then asks you to build your profile, select **I'll do it later**: the free download needs only this
basic account.

## Download the installer

<!-- pic: portal -->

1. Sign in at support.broadcom.com, then open the
   [Workstation Pro downloads page](https://support.broadcom.com/group/ecx/productdownloads?subfamily=VMware%20Workstation%20Pro&freeDownloads=true).
   Or go there by hand: **My Downloads** > **Free Software Downloads** > **VMware Workstation Pro**.
2. Open **VMware Workstation Pro 26H1 for Windows** (or a newer one, if it's there) and choose the newest version
   in the **Release** column. In November 2026 that's **26H1u1**, which also fixes two security holes in the
   versions before it.
3. Open the **Terms and Conditions** link, then tick **I agree to the Terms and Conditions**. The box can only be
   ticked once you've opened the terms.
4. The first time, Broadcom asks you to fill in a short **Trade Compliance** form. Use your real details again.
5. Select the download icon next to the file. For 26H1u1 it's `VMware-Workstation-Full-26H1u1-25688693.exe`,
   about 270 MB.

> [!TIP]
> The download page lists checksums (a file's fingerprint) next to the file. If there's a SHA-256 one, compare it
> with your download: [Verify a file's hash](/en/guides/check-hash/) shows how, in about five minutes.

## Install it

<!-- pic: setup -->

1. Save your work and close other programs: you may need to restart at the end.
2. In your **Downloads** folder, right-click the file and choose **Run as administrator**. Select **Yes** when
   Windows asks.
3. On the welcome page, select **Next**. Accept the license agreement and select **Next**.
4. The installer now checks for Hyper-V, Windows' own hypervisor, and tells you which way your machines will run.

   <!-- pic: hyperv -->

   If it offers **Install Windows Hypervisor Platform (WHP) automatically**, tick it: with Windows' hypervisor on,
   Workstation Pro can't start without that feature. Then select **Next**.

5. On **Custom Setup**, keep the install folder it suggests and select **Next**. The box for the console tools
   adds VMware's command-line tools to the PATH (so any terminal finds them): handy later, not needed now.
6. On **User Experience Settings**, keep **Check for product updates on startup** ticked, so Workstation Pro tells
   you when a new version is out. **Join the VMware Customer Experience Improvement Program** sends Broadcom data
   about how you use it: your choice. Select **Next**.
7. Choose your **Shortcuts** (the desktop, the Start menu), select **Next**, then **Install**.
8. When it's done, select **Finish**. If you see a **License** button, leave it: the free version needs no key.
9. If the installer asks you to restart the computer, do it now.

## Start it for the first time

1. Open **Start**, type `VMware` and select **VMware Workstation**.
2. Accept the license agreement it shows the first time.
3. If a window asks for a license key, leave it empty and carry on: the free version doesn't need one.
4. The main window opens. This is where your virtual machines will live: **File** > **New Virtual Machine** creates
   one, and **File** > **Open** opens a ready-made one, like Kali's.

## Check it works

1. Select **Help** > **About VMware Workstation**.
2. The window shows the version and build. For 26H1u1 the build is **25688693**; a newer one is fine too.

That's it: your hypervisor is ready. Next, add your first virtual machine:
<!-- guide: set-up-kali-vmware -->

> [!NOTE]
> Workstation Pro doesn't update itself. When it tells you a new version is out, download that version from the
> portal the same way and run it.

## If something goes wrong

**The portal says "Account verification is pending".** Broadcom is still checking your details. If it doesn't clear
up, contact Broadcom's Customer Care: [their article](https://knowledge.broadcom.com/external/article?articleId=206567)
says how.

**A download says "Not Entitled".** That's a version older than 17.5.2, which isn't free. Choose the newest one.

**You can't tick "I agree to the Terms and Conditions".** Open the **Terms and Conditions** link first, then tick
the box.

**A virtual machine won't start: "This host supports Intel VT-x, but Intel VT-x is disabled"** (or AMD-V). The
processor's virtualization is off in your computer's UEFI settings, or the computer hasn't been fully switched off
since you turned it on.
<!-- guide: turn-on-virtualization -->

**Workstation Pro won't start, and Windows' hypervisor is on.** It needs the Windows feature called Windows Hypervisor
Platform. Press <kbd>Win</kbd> <kbd>R</kbd>, type `optionalfeatures` and press <kbd>Enter</kbd>. Tick
**Windows Hypervisor Platform**, select **OK** and restart when Windows asks.

**Your machines feel slow.** Windows' own hypervisor is probably on, so Workstation Pro runs through it. Broadcom's
fix is to turn off Hyper-V, Virtual Machine Platform, Windows Hypervisor Platform and Memory integrity, which also
turns off WSL 2, Docker Desktop and a Windows security feature
([Broadcom's article](https://knowledge.broadcom.com/external/article/417896) lists the steps). For a learning
lab, a little slower is usually the better deal.
