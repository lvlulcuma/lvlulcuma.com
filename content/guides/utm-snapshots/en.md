---
# Guide → lvlulcuma.com/en/guides/utm-snapshots/
title: "Take and restore snapshots in UTM"
date: 2026-11-14
category: use   # install | quick | configure | use | harden | fix
order: 2   # position within its category
time: 10   # rough minutes to complete
platforms: [macos]   # windows | macos | linux
requires: [install-utm]   # guides to do first (folder names); shown as "Before you start"
dek: "Save a virtual machine as it is with UTM 5's Snapshots tab, go back when something breaks, and let a target reset itself."
# Pictures: each one is placed in the text below by a line <!-- pic: <name> -->. How each kind is drawn:
# src/components/GuideVisual.astro. Rows count from 1.
visuals:
  # What a snapshot holds (UTM docs, Snapshots: a running QEMU machine's snapshot includes its running state;
  # otherwise only the drives, marked "Disks Only", which start up normally and are restored while the machine is off).
  state:
    kind: cards
    cards:
      - title: "Shut down"
        text: "Saves the machine's drives. UTM marks it <strong>Disks Only</strong>. Restoring it gives you a machine that starts up normally."
      - title: "Running"
        text: "Also saves the running state: what's in memory. When you restore it, the machine carries on right where it was the next time you start it."
        tags: ["UTM's usual engine (QEMU) only"]
    caption: "Both work for UTM's usual machines. For a save point like clean, shut down is the tidier choice."
  # Taking a snapshot (UTM docs: the Snapshots tab below the screenshot in the details view; New on Current State;
  # snapshot actions also on the right-click menu).
  take:
    kind: route
    stages:
      - where: "UTM Library"
        steps: ["Select the machine", "Snapshots"]
      - where: "Current State"
        steps: ["New"]
      - where: "The new snapshot"
        steps: ["Right-click", "Rename", "clean"]
    caption: "Restore, Rename and Delete are on every snapshot's right-click menu."
  # The Snapshots tab, drawn as a list. Names follow Get started's snapshot timeline; UTM shows the newest first.
  tab:
    kind: window
    title: "Snapshots"
    head: ["Entry", "Holds"]
    rows:
      - ["Current State", "The machine as it is now"]
      - ["before-attack", "Drives and running state"]
      - ["tools", "Disks Only"]
      - ["clean", "Disks Only"]
    mark: 1
    caption: "An example. A line along the left edge links each snapshot to the one it was made from."
  # Restoring (UTM docs: Restore replaces the current state; Disks Only snapshots only while the machine isn't running).
  restore:
    kind: route
    stages:
      - where: "The machine"
        steps: ["Shut it down"]
      - where: "Snapshots tab"
        steps: ["Right-click the snapshot", "Restore"]
    caption: "Everything since that snapshot is lost, unless another snapshot holds it."
---

A snapshot saves a virtual machine exactly as it is. Restore it, and the machine is back at that moment. It's your
lab's undo button: when an attack, a tool or a malware sample breaks a machine, you go back in a minute instead of
rebuilding it. UTM 5 added a **Snapshots** tab for this, and this guide was written for UTM 5.0.8. It works the same
for any machine in UTM.

> [!NOTE]
> Snapshots need UTM 5 or later; UTM 4 has none. They work for machines made with UTM's usual engine (QEMU), like the
> one in the Kali guide, on any Mac that runs UTM 5. Machines that use Apple's own engine (Apple Virtualization) need
> macOS 27 or later, and have to be shut down or suspended to take or restore one.

## Take your first snapshot

Take the first one as soon as a machine is installed and updated, and call it `clean`.

<!-- pic: state -->

1. Shut the machine down from inside, like any computer (in Linux: `sudo poweroff`).
2. In the UTM Library, select the machine. Below its screenshot, select the **Snapshots** tab.
3. On the **Current State** line at the top, select **New**.
4. The snapshot appears just under **Current State**. If UTM asked you for a name, type `clean`. If not, right-click
   the new snapshot, choose **Rename** and call it `clean`.

   <!-- pic: take -->

A snapshot holds the drives stored in the machine. It leaves out removable drives, such as an installer disc, and
read-only or external drives.

## Take more before risky changes

Take another snapshot before every big change: before you add tools (`tools`), before an attack or a malware sample
(`before-attack`). The tab lists them newest first:

<!-- pic: tab -->

To bring `clean` up to date after updating a machine, restore it, update, shut down, and select **Overwrite** on the
**Current State** line. It replaces the snapshot your machine is built on with the machine as it is now. The
snapshot keeps its name and its place in the list; its old contents are gone.

## Restore a snapshot

1. Shut the machine down from inside. If it's frozen, hold down the power-off button in its window's toolbar and
   choose **Force shut down**. That throws away anything unsaved, which is fine here.
2. In the **Snapshots** tab, right-click the snapshot and choose **Restore**.

   <!-- pic: restore -->

3. UTM asks you to confirm, because restoring replaces the machine as it is now. Everything since the snapshot goes,
   unless another snapshot holds it. To keep something from the current state, select **New** first.
4. Start the machine. A **Disks Only** snapshot starts up normally; one taken while running carries on from that
   moment.

## Make a target reset itself

For a machine you break on purpose, UTM can throw every change away by itself.

1. In the UTM Library, right-click the machine and choose **Run without saving changes**.
2. The window's title says **Disposable Mode**. Work in it, break it, shut it down: nothing it wrote to its drives is
   kept, so next time it starts from where it was before.

In this mode you can't take snapshots or keep a suspended machine's state. Apple Virtualization machines need
macOS 27 or later for it.

## Delete old snapshots

Right-click a snapshot and choose **Delete**. That removes the snapshot and all its data, and it can't be brought
back. The machine as it is now doesn't change.

Keep a handful, not dozens: each one takes space on your Mac's disk. UTM's **Reclaim Space** (in a drive's settings)
won't work on a drive that still has snapshots, so delete the ones you no longer need first.

## A snapshot isn't a backup

Snapshots live inside the machine itself, in its package on your Mac's disk. If that disk fails or the machine is
deleted, the snapshots go with it. Careful with **Remove** on the machine's right-click menu too: if the machine is in
UTM's own folder, it deletes the machine and its snapshots.

To back a machine up, shut it down, right-click it and choose **Show in Finder**. Copy the selected package (such as
`Kali Linux.utm`) to another drive. Keep your notes outside the machine as well.

## Check it works

1. With the machine shut down, take a snapshot called `test`.
2. Start the machine and make a change you'll recognize, such as a file on its desktop.
3. Shut it down, then restore `test` and start it again: the file is gone.
4. Delete `test`.

## If something goes wrong

**There's no Snapshots tab.** Select **UTM** > **About UTM**: it has to be version 5 or later. On a machine that uses
Apple Virtualization, the tab appears only on macOS 27 or later. And a machine running without saving changes can't
take snapshots at all.
<!-- guide: install-utm -->

**Restore doesn't work.** Shut the machine down first. A **Disks Only** snapshot, and any snapshot of an Apple
Virtualization machine, can only be restored while the machine isn't running.

**"This snapshot does not cover every drive."** It's missing data for one of the machine's drives, for example one
added after the snapshot was taken, so UTM can't restore it. **"The data of this snapshot is missing."** means what
it says. Either way, all you can do is delete it.

**Your Mac's disk keeps filling up.** Delete the snapshots you no longer need. On an Apple Virtualization machine, a
deleted snapshot's space only comes back once no newer snapshot is built on it.
