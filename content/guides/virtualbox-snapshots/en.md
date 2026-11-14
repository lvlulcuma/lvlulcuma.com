---
# Guide → lvlulcuma.com/en/guides/virtualbox-snapshots/
title: "Take and restore snapshots in VirtualBox"
date: 2026-11-14
category: use   # install | quick | configure | use | harden | fix
order: 3   # position within its category
time: 10   # rough minutes to complete
platforms: [windows, linux]   # windows | macos | linux
requires: []   # guides to do first (folder names); shown as "Before you start"
dek: "Save a virtual machine as it is, jump back when something breaks, make a target reset itself, keep the list tidy, and know why a snapshot isn't a backup."
# Pictures: each one is placed in the text below by a line <!-- pic: <name> -->. How each kind is drawn:
# src/components/GuideVisual.astro. Rows count from 1.
visuals:
  # What a snapshot holds (manual, Snapshot Contents: settings, disks, and the memory of a running machine;
  # a running machine pauses briefly while it's taken; restoring a running-state snapshot resumes it).
  state:
    kind: cards
    cards:
      - title: "Shut down"
        text: "Saves the disks and settings. Small and quick; restoring it gives you a machine that's off, ready for a clean start."
      - title: "Running"
        text: "Also saves what's in the machine's memory, which can take as much disk space as the machine has memory. Restoring it brings the machine back where it was."
    caption: "Both work. For a save point like clean, shut down is the tidier choice."
  # Taking a snapshot of a machine that's off (7.2 release notes: VM tools on tabs above the right-hand pane;
  # manual: Take on the Snapshots toolbar, Snapshot Name and Snapshot Description).
  take:
    kind: route
    stages:
      - where: "VirtualBox, machine selected in the list"
        steps: ["Snapshots", "Take", "Snapshot Name: clean", "OK"]
    caption: "In versions before 7.2, <strong>Snapshots</strong> is in the menu next to the machine's name. In a running machine's own window: <strong>Machine</strong> > <strong>Take Snapshot</strong>."
  # The Snapshots tab, drawn as a list. Names follow Get started's snapshot timeline.
  tree:
    kind: window
    title: "Snapshots"
    head: ["Snapshot", "What it saved"]
    rows:
      - ["clean", "Installed and updated"]
      - ["tools", "Your tools added"]
      - ["before-attack", "Right before something risky"]
      - ["Current State", "The machine as it is now"]
    mark: 3
    caption: "Each snapshot is built on the one above it. <strong>Current State</strong> sits under the snapshot the machine is built on now."
  # The restore question (seen in VirtualBox's restore confirmation: "Create a snapshot of the current machine state").
  keep:
    kind: cards
    cards:
      - title: "Ticked"
        text: "VirtualBox first saves the machine as it is now, as a new snapshot you name. Nothing is lost."
        tags: ["something worth keeping"]
      - title: "Not ticked"
        text: "The machine as it is now is thrown away for good."
        tags: ["broken anyway"]
    caption: "The box is <strong>Create a snapshot of the current machine state</strong>."
  # The close dialog (manual, Saving the State of the Machine: power off can restore the current snapshot).
  close:
    kind: window
    title: "Close the machine's window"
    head: ["Choice", "Set to"]
    rows:
      - ["Save the machine state", ""]
      - ["Send the shutdown signal", ""]
      - ["Power off the machine", "Selected"]
      - ["Restore current snapshot 'clean'", "Ticked"]
    mark: 4
    caption: "The box appears under <strong>Power off the machine</strong> only when the machine has a snapshot. It names the snapshot the machine is built on now."
---

A snapshot saves a virtual machine exactly as it is: its disks, its settings and, if it's running, what's in its
memory. Restore it, and the machine is back at that moment. It's your lab's undo button: when an attack, a tool or a
malware sample breaks a machine, you jump back in a minute instead of rebuilding it. This works the same on Windows
and Linux, for any machine. It was written for VirtualBox 7.2.22.

<!-- for: windows -->
You need VirtualBox and a machine in it. If you don't have VirtualBox yet, its installer is on
[VirtualBox's download page](https://www.virtualbox.org/wiki/Downloads), under **Windows hosts**;
[Get VirtualBox](/en/guides/set-up-kali-virtualbox/#get-virtualbox) in the Kali guide goes through it page by page.

<!-- for: linux -->
You need VirtualBox and a machine in it. If you don't have VirtualBox yet, install it from Oracle's own repository:
<!-- guide: install-virtualbox-linux -->
<!-- /for -->

## Take your first snapshot

Take the first one as soon as a machine is installed and updated, and call it `clean`.

<!-- pic: state -->

1. Shut the machine down from inside, like any computer (in Linux: `sudo poweroff`).
2. In VirtualBox, select the machine in the list on the left, then the **Snapshots** tab above the right-hand side.
   Until you take a snapshot, the list only shows **Current State**: the machine as it is now.
3. Select **Take**. Type a name in **Snapshot Name**, `clean`, and a description in **Snapshot Description** that
   says what's in it, such as "Updated, nothing else installed". Select **OK**.

   <!-- pic: take -->

`clean` appears in the list, with **Current State** under it: from now on, the machine's changes build on `clean`.

## Take more before risky changes

Take another snapshot before every big change: before you add tools (`tools`), before an attack or a malware sample
(`before-attack`). Give each a name that says what it holds; the description has room for more. To change a name or
description later, select the snapshot and select **Properties**.

> [!TIP]
> Keep a handful, not dozens. VirtualBox sets no limit, but each snapshot takes space on your computer's disk, and it
> grows the longer the machine runs after it.

## Restore a snapshot

1. Shut the machine down. VirtualBox restores a machine only while it isn't running.
2. On the **Snapshots** tab, select the snapshot you want and select **Restore**. (Right-clicking it works too.)

   <!-- pic: tree -->

3. VirtualBox asks you to confirm. If it offers **Create a snapshot of the current machine state**, decide whether the
   machine as it is now is worth keeping:

   <!-- pic: keep -->

4. Select **Restore**. Everything since the snapshot is gone: files made since then disappear, deleted files come back,
   and the settings go back too. The snapshot itself stays, so you can restore it again and again.

Start the machine. If the snapshot was taken while the machine was running, it picks up right where it was.

## Make a target reset itself

For a machine you break on purpose, there's a quick way back to its snapshot every time you stop it: close its window
instead of shutting it down from inside.

1. Close the machine's window, with its **X** button like any window.
2. Choose **Power off the machine** and tick **Restore current snapshot**. Select **OK**.

   <!-- pic: close -->

The machine powers off and goes straight back to the snapshot it's built on, usually the latest one. Powering off is
like pulling the plug, which is fine here because everything since that snapshot is being thrown away anyway.

## Delete old snapshots

1. On the **Snapshots** tab, select the snapshot.
2. Select **Delete**, and confirm.

Deleting never changes the machine as it is now: it only removes that save point. What the snapshot kept is merged
into the files the machine still needs, so a big one can take a while, and it needs some free disk space while it
works. A deleted snapshot can't be brought back. You can delete while the machine runs, but some deletions only finish
with the machine shut down: VirtualBox says so, and you try again then.

## A snapshot isn't a backup

Snapshots live in the machine's own folder, in its `Snapshots` folder, on the same disk. They only record changes on
top of the machine's virtual disk, so they're useless without it. If that disk fails or the folder is deleted, the
snapshots go with it.

To back a machine up, shut it down fully (not with **Save the machine state**) and copy its whole folder, the one with
its `.vbox` file, to another drive. To use the copy, put the folder back and open its `.vbox` file in VirtualBox.

<!-- for: windows -->
Machines live in the `VirtualBox VMs` folder inside your user folder (`C:\Users\<you>`), unless you chose another
place.

<!-- for: linux -->
Machines live in `VirtualBox VMs` in your home folder (`~/VirtualBox VMs`), unless you chose another place.
<!-- /for -->

## Check it works

1. Take a snapshot called `test`.
2. Start the machine and make a change you'll recognize, such as a file on its desktop. Shut it down.
3. Restore `test`, without ticking **Create a snapshot of the current machine state**.
4. Start the machine again: the file is gone.
5. Shut it down and delete `test`.

## If something goes wrong

**Restore is greyed out.** The machine is still running or paused. Shut it down from inside, or close its window with
**Power off the machine**, and try again.

**The close window has no "Restore current snapshot".** Choose **Power off the machine** first: the box sits under it.
If it's still missing, the machine has no snapshot yet, so take one.

**A snapshot won't delete.** Shut the machine down and delete it again. If it still fails, free some room on your
computer's disk first: merging a big snapshot needs extra space for a while.

**You restored and lost something you wanted.** A restore can't be undone, unless you left **Create a snapshot of the
current machine state** ticked: then the lost state is in the list as a snapshot, and you can restore that.

**The disk keeps filling up.** Delete the snapshots you no longer need. Snapshots of a running machine are the big
ones, because they hold its memory too.
