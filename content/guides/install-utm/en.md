---
# Guide → lvlulcuma.com/en/guides/install-utm/
title: "Install UTM on a Mac"
date: 2026-11-14
category: install   # install | quick | configure | use | harden | fix
order: 6   # position within its category
time: 10   # rough minutes to complete
platforms: [macos]   # windows | macos | linux
requires: []   # guides to do first (folder names); shown as "Before you start"
dek: "Get the free app that runs virtual machines on your Mac, start it for the first time, and know when to virtualize and when to emulate."
# Pictures: each one is placed in the text below by a line <!-- pic: <name> -->. How each kind is drawn:
# src/components/GuideVisual.astro. Rows count from 1.
visuals:
  # What each kind of Mac runs fast (UTM's App Store description: Arm64 systems virtualized at near native speed on
  # Apple silicon; Intel/AMD systems emulated there, virtualized on Intel Macs).
  macs:
    kind: cards
    layout: rows
    cards:
      - title: "Apple silicon (M1 or later)"
        text: "Runs Arm systems (arm64) at near full speed. Intel and AMD systems (x86-64) only run emulated, and slowly."
        tags: ["pick arm64"]
      - title: "Intel"
        text: "Runs Intel and AMD systems (x86-64) at near full speed."
        tags: ["pick x86-64"]
    caption: "<strong>Apple menu</strong> > <strong>About This Mac</strong>: a <strong>Chip</strong> line with Apple M means Apple silicon; a <strong>Processor</strong> line with Intel means Intel."
  # The three ways to get UTM (UTM's website: the App Store version is identical; it updates itself and funds the project).
  where:
    kind: cards
    cards:
      - title: "UTM's website"
        text: "Free. You download new versions yourself."
        tags: ["free"]
      - title: "Mac App Store"
        text: "The same app, paid once. It updates itself, and the money funds UTM's makers."
        tags: ["$9.99 in the US"]
      - title: "Homebrew"
        text: "If you already use it: <code>brew install --cask utm</code>."
        tags: ["free"]
    caption: "No features are left out of the free version."
  # Installing from the disk image.
  install:
    kind: route
    stages:
      - where: "From mac.getutm.app"
        steps: ["Download", "Open UTM.dmg", "Drag UTM to Applications", "Eject the disk image"]
  # UTM's first question for every new machine. The wording on screen may differ slightly.
  start:
    kind: window
    title: "Start"
    head: ["Choice", "What it means"]
    rows:
      - ["Virtualize", "Faster, but only for your Mac's own kind of processor"]
      - ["Emulate", "Slower, but runs other kinds of processor"]
    mark: 1
    caption: "<strong>Create a New Virtual Machine</strong> opens this. For your lab, it's almost always <strong>Virtualize</strong>."
revisions:          # after publishing, add a line for each change
  - date: 2026-11-14
    note: "Updated for UTM 5.0.8, the current release since 17 October 2026: it needs macOS 12 or later."
---

UTM is a free, open-source app that runs virtual machines on a Mac: a **hypervisor**. It works on Macs with Apple
silicon and on Intel Macs, with macOS 12 (Monterey) or later. This guide was written for UTM 5.0.8, the current
release since 17 October 2026.

## Check your Mac

Which processor your Mac has decides which systems run fast in UTM.

<!-- pic: macs -->

Select the **Apple menu** in the top left corner and choose **About This Mac**. The same window shows your macOS
version. If it's older than 12, update macOS first in **System Settings** > **General** > **Software Update**.

## Choose where to get it

<!-- pic: where -->

The rest of this guide uses the free version from UTM's website. If you'd rather pay for automatic updates, get
[UTM Virtual Machines](https://apps.apple.com/app/id1538878817) from the Mac App Store, then skip to
[Start it for the first time](#start-it-for-the-first-time).

## Install it

<!-- pic: install -->

1. Open [mac.getutm.app](https://mac.getutm.app) and select **Download**. That's the current stable version; the
   "Beta" releases on GitHub are for testers.
2. Open your **Downloads** folder and double-click `UTM.dmg`.
3. In the window that opens, drag **UTM** onto the **Applications** folder.
4. Eject the disk image: in a Finder window's sidebar, select the eject button next to **UTM**. You can then delete
   `UTM.dmg`.

## Start it for the first time

1. Open your **Applications** folder and double-click **UTM**. (Or press <kbd>Cmd</kbd> <kbd>Space</kbd>, type `UTM`
   and press <kbd>Return</kbd>.)
2. macOS asks whether you're sure you want to open an app downloaded from the internet. Select **Open**. It only asks
   the first time.
3. The **UTM Library** window opens. It's empty for now: your virtual machines will be listed here.

## Virtualize or emulate?

When you create a virtual machine (**Create a New Virtual Machine**, or the **+** button), UTM first asks which of
the two it should do:

<!-- pic: start -->

- **Virtualize** runs a system made for your Mac's own kind of processor, at close to full speed. On Apple silicon,
  that's an Arm (arm64) system; on an Intel Mac, an x86-64 one.
- **Emulate** imitates a different kind of processor in software, such as x86-64 on Apple silicon. It works, but much
  more slowly.

So on Apple silicon, download the arm64 version of every system you put in your lab. Kali Linux has one:
<!-- guide: set-up-kali-utm -->

## Check it works

1. In the menu bar, select **UTM** > **About UTM**.
2. The window shows the version: 5.0.8, or a newer one.

> [!NOTE]
> The website version doesn't update itself. When a new version comes out, shut down every virtual machine first:
> UTM warns that a suspended one may not resume after an update. Then download it the same way and drag it to
> **Applications** again, choosing **Replace**. Your virtual machines stay where they are.

## If something goes wrong

**UTM won't open, or the Mac says it needs a newer macOS.** UTM 5 needs macOS 12 or later. Update macOS in
**System Settings** > **General** > **Software Update** (on older macOS: **System Preferences** > **Software
Update**). If your Mac can't go past macOS 11, UTM 4.7.5 is the last version for it (it needs macOS 11.3 or later):
it's on [UTM's GitHub releases page](https://github.com/utmapp/UTM/releases/tag/v4.7.5).

**A virtual machine is very slow.** It's probably emulated: on Apple silicon, an x86-64 system can only run that way.
Use the arm64 version of the system instead, and choose **Virtualize**.
