---
# Guide → lvlulcuma.com/en/guides/vmware-snapshots/
title: "Take and restore snapshots in VMware Workstation Pro"
date: 2026-11-14
category: use   # install | quick | configure | use | harden | fix
order: 1   # position within its category
time: 10   # rough minutes to complete
platforms: [windows]   # windows | macos | linux
requires: [install-vmware-workstation-windows]   # guides to do first (folder names); shown as "Before you start"
dek: "Save a virtual machine as it is, jump back when something breaks, keep the list tidy, and know why a snapshot isn't a backup."
# Pictures: each one is placed in the text below by a line <!-- pic: <name> -->. How each kind is drawn:
# src/components/GuideVisual.astro. Rows count from 1.
visuals:
  # Taking a snapshot (Workstation Pro 26H1 manual, Take a Snapshot of a Virtual Machine).
  take:
    kind: route
    stages:
      - where: "VMware Workstation, machine selected"
        steps: ["VM", "Snapshot", "Take Snapshot", "Name: clean", "OK"]
    caption: "The snapshot buttons on the toolbar do the same."
  # What a snapshot of a running machine adds (the manual: memory, settings and disks; restoring a memory snapshot powers the machine on).
  state:
    kind: cards
    cards:
      - title: "Shut down"
        text: "Saves the disks and settings. Smaller and quicker; restoring it gives you a machine that's off, ready for a clean start."
      - title: "Running"
        text: "Also saves what's in the machine's memory, so it takes more disk space. Restoring it brings the machine back running, right where it was."
    caption: "Both work. For a save point like clean, shut down is the tidier choice."
  # The Snapshot Manager, drawn as a list. Names follow Get started's snapshot timeline.
  tree:
    kind: window
    title: "Snapshot Manager"
    head: ["Snapshot", "What it saved"]
    rows:
      - ["clean", "Installed and updated"]
      - ["tools", "Your tools added"]
      - ["before-attack", "Right before something risky"]
      - ["You Are Here", "The machine as it is now"]
    mark: 3
    caption: "<strong>VM</strong> > <strong>Snapshot</strong> > <strong>Snapshot Manager</strong> draws these as a tree of thumbnails. Select one and select <strong>Go To</strong> to jump back to it."
  # The power-off options (manual: Take or Revert to a Snapshot at Power Off).
  poweroff:
    kind: cards
    layout: rows
    cards:
      - title: "Just power off"
        text: "The usual: the machine stays as you left it."
        tags: ["default"]
      - title: "Revert to snapshot"
        text: "Every time the machine is powered off, it goes back to the snapshot it's built on (usually the latest). A target you break on purpose starts fresh each time."
        tags: ["good for targets"]
      - title: "Ask me"
        text: "Workstation asks at each power-off whether to go back."
    caption: "<strong>VM</strong> > <strong>Settings</strong>, <strong>Options</strong> tab, <strong>Snapshots</strong>."
---

A snapshot saves a virtual machine exactly as it is: its disks, its settings and, if it's running, what's in its
memory. Restore it, and the machine is back at that moment. It's your lab's undo button: when an attack, a tool or a
malware sample breaks a machine, you jump back in a minute instead of rebuilding it. This works the same for any
machine in Workstation Pro.

## Take your first snapshot

Take the first one as soon as a machine is installed and updated, and call it `clean`.

<!-- pic: state -->

1. Shut the machine down from inside, like any computer (in Linux: `sudo poweroff`).
2. Select it in Workstation's list and select **VM** > **Snapshot** > **Take Snapshot**.
3. Type a name, `clean`, and a description that says what's in it, such as "Updated, nothing else installed". Select
   **OK**.

   <!-- pic: take -->

## Take more before risky changes

Take another snapshot before every big change: before you add tools (`tools`), before an attack or a malware sample
(`before-attack`). Give each a name that says what it holds; the description has room for more.

> [!TIP]
> Keep a handful, not dozens. Each one takes disk space, and VMware's manual warns that more than 99 in one line of
> snapshots can cause problems starting the machine.

## Restore a snapshot

1. To go back to the snapshot your machine's current state is built on (usually the latest one), select **VM** >
   **Snapshot** > **Revert to Snapshot**.
2. To go back to any other one, select **VM** > **Snapshot** > **Snapshot Manager**, select the snapshot and select
   **Go To**.

   <!-- pic: tree -->

3. Workstation warns that the current state will be lost. That's the point: everything since the snapshot goes.
   A revert can't be undone, so if there's something in the current state you want to keep, take a snapshot of it
   first.

## Make a target reset itself

For a machine you break on purpose, Workstation can go back to its snapshot every time you power it off.

<!-- pic: poweroff -->

1. Select the machine and select **VM** > **Settings**.
2. On the **Options** tab, select **Snapshots**, choose **Revert to snapshot** and select **OK**.

## Delete old snapshots

1. Open **VM** > **Snapshot** > **Snapshot Manager** and select the snapshot.
2. Select **Delete**. To remove a snapshot and every snapshot after it in that line, right-click it and choose
   **Delete Snapshot and Children**.

Deleting never changes the machine as it is now: it only removes that save point. What the snapshot kept is merged
into the files the machine still needs, so a big one can take a while. A deleted snapshot can't be brought back.

## A snapshot isn't a backup

Snapshots live in the machine's own folder, on the same disk, and they only record changes on top of the machine's
virtual disk. If that disk fails or the folder is deleted, the snapshots go with it. Broadcom's advice is plain: don't
use snapshots as backups.

To back a machine up, shut it down (fully, not suspended) and copy its whole folder, the one with its `.vmx` file, to
another drive. A copy made while the machine runs or is suspended may not start.

## Check it works

1. Take a snapshot called `test`.
2. Start the machine and make a change you'll recognize, such as a file on its desktop.
3. Select **VM** > **Snapshot** > **Revert to Snapshot**. Start the machine again if it's off: the file is gone.
4. Delete `test` in the Snapshot Manager.

## If something goes wrong

**Take Snapshot is greyed out.** The machine probably has a disk set to "independent", which snapshots don't cover.
Shut the machine down and try again.

**Snapshots and restores are slow.** Usually your computer's own disk is the bottleneck: keep machines on an SSD.
Turning off background snapshots in Workstation's preferences can help too.

**The disk keeps filling up.** Delete the snapshots you no longer need. If **AutoProtect** is on (**VM** >
**Settings** > **Options**), Workstation takes snapshots by itself every half hour, hour or day, and keeps as many as
you set.
