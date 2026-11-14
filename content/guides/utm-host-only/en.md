---
# Guide → lvlulcuma.com/en/guides/utm-host-only/
title: "Put UTM machines on a host-only network"
date: 2026-11-14
category: configure   # install | quick | configure | use | harden | fix
order: 3   # position within its category
time: 10   # rough minutes to complete
platforms: [macos]   # windows | macos | linux
requires: [install-utm]   # guides to do first (folder names); shown as "Before you start"
dek: "Wall your lab off from the internet and your home network: switch a UTM machine to Host Only, find its address, and check that the wall holds."
# Pictures: each one is placed in the text below by a line <!-- pic: <name> -->. How each kind is drawn:
# src/components/GuideVisual.astro. Rows count from 1.
visuals:
  # UTM's network modes for QEMU machines (docs.getutm.app, Network settings).
  modes:
    kind: cards
    layout: rows
    cards:
      - title: "Host Only"
        text: "Like Shared Network, but with the internet blocked. Your lab machines reach each other and your Mac, nothing else."
        tags: ["lab machines live here"]
      - title: "Shared Network"
        text: "The machine goes online through your Mac, and your Mac can reach it."
        tags: ["only while you update"]
      - title: "Emulated VLAN"
        text: "Each machine gets a network of its own and goes online through UTM. Your machines can't see each other."
        tags: ["not for the lab"]
      - title: "Bridged (Advanced)"
        text: "The machine joins your home network like one more device."
        tags: ["never for lab machines"]
  # Where the switch is.
  switch:
    kind: route
    stages:
      - where: "UTM Library, machine shut down"
        steps: ["Select the machine", "Edit", "Network", "Network Mode: Host Only", "Save"]
    caption: "The same page switches it back to <strong>Shared Network</strong> when the machine needs updates."
  # The Network page of a machine's settings.
  network:
    kind: window
    title: "Network"
    head: ["Setting", "Value"]
    rows:
      - ["Network Mode", ""]
      - ["Emulated Network Card", "virtio-net-pci"]
    mark: 1
    states:
      - { label: "For updates", value: "Shared Network" }
      - { label: "For the lab", value: "Host Only", tone: go }
    caption: "Leave the network card as it is (UTM recommends virtio-net-pci), and the advanced settings too: UTM's docs say they shouldn't normally be changed."
---

A lab machine is built to be broken into, so it must not share a network with your real devices. UTM's **Host Only**
mode is the wall: the machines on it reach each other and your Mac, and nothing else. This guide puts a machine on it,
finds its address, and checks that the wall holds. It works for any machine that uses UTM's usual engine (QEMU); the
Linux commands use Kali as the example, and the Windows ones sit next to them.

## Know UTM's network modes

Every machine has a network card, and UTM can connect it in one of these ways:

<!-- pic: modes -->

New machines usually start on **Shared Network**, so they can go online for updates. Vulnerable machines, the ones you
practice on, go on **Host Only** and stay there. The machine you attack from (Kali, for example) has to be on the same
network to reach them: put it on Host Only too, and switch it to Shared Network only while it updates.

## Put a machine on Host Only

1. Shut the machine down from inside, like any computer (in Linux: `sudo poweroff`).
2. In the UTM Library, select it and select **Edit**.
3. In the sidebar, select **Network**. Set **Network Mode** to **Host Only** and select **Save**.

   <!-- pic: switch -->

   <!-- pic: network -->

4. Start the machine. It asks for an address on its new network as it starts.

> [!NOTE]
> No **Host Only** in the list? The machine uses Apple's own engine (Apple Virtualization), which offers only Shared
> Network and Bridged in UTM 4.7.5. Machines made with UTM's usual engine, like the one in the Kali guide, have it.

## Find the addresses

1. In a Linux machine such as Kali, open a terminal and type:

   ```sh
   ip -4 -br address
   ```

   Ignore `lo`, which only talks to the machine itself. The other line, such as `eth0`, shows the machine's address,
   for example `192.168.128.3/24`. The `/24` means the first three numbers name the network: every machine on Host
   Only shares them.
2. In a Windows machine, open a terminal and type `ipconfig`. Look for **IPv4 Address**.

Write each machine's address in your lab notebook.

## Check that the wall holds

1. On your Mac, open **Terminal** and ping a Linux lab machine, with its address in place of the example:

   ```sh
   ping -c 3 192.168.128.3
   ```

   Three replies (`3 packets received`) mean your Mac reaches it. A Windows machine won't answer, because Windows'
   firewall blocks pings by default. For it, an address that starts like the others is check enough.
2. In the lab machine, try to reach the internet. In Linux:

   ```sh
   ping -c 3 8.8.8.8
   ```

   In Windows, type `ping 8.8.8.8`. It should fail, with an error or with every packet lost. That's the wall working.
3. With two lab machines on Host Only, ping one from the other the same way. Again, only a Linux machine answers.

## Update, then switch back

When a lab machine needs updates or new tools, shut it down, switch it to **Shared Network** the same way, start it
and update. Then shut it down and switch it back to **Host Only**. That's rule 2 of
[Wall off the lab](/en/lab/start/#wall-off-the-lab) in Get started.

## If something goes wrong

**The machine has no address.** Check that it still has a network card: **Edit** lists it under **Network** in the
sidebar. Then restart the machine. In Windows, `ipconfig /release` and then `ipconfig /renew` ask for a new address
without a restart.

**Kali still reaches the internet on Host Only.** Look in **Edit** for a second network card: every network card of a
lab machine must be on Host Only.

**Your Mac can't reach a Linux machine, but the machine has an address.** Check that it's really on Host Only and
that you used its current address: it can change after switching modes.
