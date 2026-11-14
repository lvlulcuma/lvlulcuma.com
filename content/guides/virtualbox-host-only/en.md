---
# Guide → lvlulcuma.com/en/guides/virtualbox-host-only/
title: "Put VirtualBox machines on a host-only network"
date: 2026-11-14
category: configure   # install | quick | configure | use | harden | fix
order: 4   # position within its category
time: 15   # rough minutes to complete
platforms: [windows, linux]   # windows | macos | linux
requires: []   # guides to do first (folder names); shown as "Before you start"
dek: "Wall your lab off from the internet and your home network: set up VirtualBox's host-only network, switch a machine to it, see its address and check that the wall holds."
# Pictures: each one is placed in the text below by a line <!-- pic: <name> -->. How each kind is drawn:
# src/components/GuideVisual.astro. Rows count from 1.
visuals:
  # VirtualBox's networking modes (manual, Virtual Networking: who reaches whom in each mode).
  nets:
    kind: cards
    layout: rows
    cards:
      - title: "Host-only Adapter"
        text: "Your lab machines and your computer, nothing else. Addresses are handed out automatically."
        tags: ["lab machines live here"]
      - title: "NAT"
        text: "The machine goes online through your computer. Nothing on your home network can reach it."
        tags: ["only while you update"]
      - title: "Internal Network"
        text: "Only the machines you put in it, not even your computer. You set every address yourself."
        tags: ["tighter, more work"]
      - title: "Bridged Adapter"
        text: "The machine joins your home network like one more device."
        tags: ["never for lab machines"]
  # The Network tool (VirtualBox 7.2 manual: the Network tool in the sidebar, or File > Tools > Network Manager).
  manager:
    kind: route
    stages:
      - where: "VirtualBox Manager, sidebar on the left"
        steps: ["Network", "Host-only Networks", "Create (only if the list is empty)", "Properties"]
    caption: "In older versions: <strong>File</strong> > <strong>Tools</strong> > <strong>Network Manager</strong>."
  # The host-only network's properties. Values are the usual defaults of the first host-only network.
  props:
    kind: window
    title: "Host-only network properties"
    head: ["Field", "Usual value"]
    rows:
      - ["Adapter > IPv4 Address (your computer)", "192.168.56.1"]
      - ["DHCP Server > Enable Server", "On"]
      - ["DHCP Server > Server Address", "192.168.56.100"]
      - ["Addresses handed out to machines", ".101 to .254"]
    mark: 2
    caption: "If yours differ, that's fine: the addresses in this guide are examples, and yours follow your own network."
  # A machine's network adapter (manual: Settings > Network > Adapter tab, Enable Network Adapter, Attached To).
  switch:
    kind: window
    title: "Adapter 1"
    head: ["Field", "Value"]
    rows:
      - ["Enable Network Adapter", "Ticked"]
      - ["Attached to", ""]
    mark: 2
    states:
      - { label: "For updates", value: "NAT" }
      - { label: "For the lab", value: "Host-only Adapter", tone: go }
    caption: "<strong>Settings</strong> > <strong>Network</strong>, <strong>Adapter 1</strong> tab. With <strong>Host-only Adapter</strong>, the <strong>Name</strong> below it shows the network: <code>vboxnet0</code> on Linux, <strong>VirtualBox Host-Only Ethernet Adapter</strong> on Windows."
---

A lab machine is built to be broken into, so it must not share a network with your real devices. VirtualBox's
**host-only** network is the wall: the machines on it reach each other and your computer, and nothing else. This
guide sets that network up, puts a machine on it, shows which address it gets, and checks that the wall holds. It
works the same on Windows and Linux, for any machine: the commands inside machines use Kali as the example. It was
written for VirtualBox 7.2.22.

## Know VirtualBox's networks

Every machine has virtual network adapters, and VirtualBox can attach each one to one of these:

<!-- pic: nets -->

New machines start on **NAT**, so they can go online for updates. Vulnerable machines, the ones you practice on, go
on **Host-only Adapter** and stay there. The machine you attack from (Kali, for example) has to be on the same network
to reach them: put it on host-only too, and switch it to NAT only while it updates.

## Check your host-only network

A machine can only go on a host-only network that exists, so look first.

1. In VirtualBox, select **Network** in the sidebar on the left, then the **Host-only Networks** tab.

   <!-- pic: manager -->

2. If the list is empty, select **Create**. VirtualBox makes a host-only network, called `vboxnet0` on Linux and
   **VirtualBox Host-Only Ethernet Adapter** on Windows.
3. Select the network and select **Properties**. On the **DHCP Server** tab, make sure **Enable Server** is ticked:
   that's the small address server (DHCP) that gives each machine its address. Note the addresses: every machine on
   this network gets one that starts with the same three numbers.

   <!-- pic: props -->

4. If you changed something, select **Apply**.

## Put a machine on it

1. Shut the machine down. VirtualBox changes most settings only while a machine is powered off.
2. Select it in the list and select **Settings** > **Network**. On the **Adapter 1** tab, make sure **Enable Network
   Adapter** is ticked.
3. Set **Attached to** to **Host-only Adapter**. Under **Name**, pick the host-only network from the last section,
   and select **OK**.

   <!-- pic: switch -->

4. Start the machine. It asks the network for an address as it starts.

## See the addresses

1. In a Linux machine such as Kali, open a terminal and type:

   ```sh
   ip -4 -br address
   ```

   Ignore `lo`, which only talks to the machine itself. The other line, such as `eth0`, shows the machine's address,
   for example `192.168.56.101/24`. The `/24` means the first three numbers name the network.
2. In a Windows machine, open a terminal and type `ipconfig`. Look for **IPv4 Address**.
3. Look at your own computer's side of the network. Its address ends in `.1`.

<!-- for: windows -->
Open a terminal and type `ipconfig`. Look for the adapter with **VirtualBox Host-Only** in its name.

<!-- for: linux -->
Open a terminal and type:

```sh
ip -4 -br address show vboxnet0
```

The line shows `192.168.56.1/24`, or your own network's `.1` address. If it says the device doesn't exist, open
VirtualBox, start a machine on the network and try again.
<!-- /for -->

Write each machine's address in your lab notebook.

## Check that the wall holds

From your computer, ping a Linux lab machine, with its address in place of the example:

<!-- for: windows -->
```powershell
ping 192.168.56.101
```

Four lines starting with **Reply from** mean your computer reaches it.

<!-- for: linux -->
```sh
ping -c 3 192.168.56.101
```

Three lines starting with **64 bytes from** mean your computer reaches it.
<!-- /for -->

A Windows lab machine won't answer, because Windows' firewall blocks pings by default. For it, an address that
starts like the network's is check enough. Then:

1. In the lab machine, try to reach the internet. In Linux:

   ```sh
   ping -c 3 8.8.8.8
   ```

   In Windows, type `ping 8.8.8.8`. It should fail, with an error or with every packet lost. That's the wall working.
2. With two lab machines on the host-only network, ping one from the other the same way. Again, only a Linux machine
   answers.

## Update, then switch back

When a lab machine needs updates or new tools, shut it down, set **Attached to** back to **NAT** the same way, start
it, update, then shut it down and switch it back to **Host-only Adapter**. That's rule 2 of
[Wall off the lab](/en/lab/start/#wall-off-the-lab) in Get started.

## Want a tighter wall? An internal network

Host-only machines can reach your computer. An **internal network** leaves your computer out: only the machines
attached to it can talk to each other. The cost is that nobody hands out addresses there, so you give each machine
one yourself.

1. Shut the machine down and select **Settings** > **Network**. Set **Attached to** to **Internal Network**, type a
   **Name** such as `lab` and select **OK**. Every machine with the same name is on the same network.
2. Start it. In a Linux machine that uses NetworkManager, like Kali, find the name of its network connection (the
   **NAME** column, often `Wired connection 1`):

   ```sh
   nmcli connection show
   ```

3. Give it a fixed address, using that name. `10.10.10.10/24` is a private address, meant for networks like this:

   ```sh
   sudo nmcli connection modify "Wired connection 1" ipv4.method manual ipv4.addresses 10.10.10.10/24
   sudo nmcli connection up "Wired connection 1"
   ```

4. Give the other machines addresses from the same network, such as `10.10.10.20/24`, each its own. In Windows,
   that's **Settings** > **Network & internet** > **Ethernet** > **IP assignment** > **Edit** > **Manual**, with
   **IPv4** on.

Before a Linux machine goes back to NAT for updates, switch it back to automatic addresses:

```sh
sudo nmcli connection modify "Wired connection 1" ipv4.method auto ipv4.addresses ""
sudo nmcli connection up "Wired connection 1"
```

## If something goes wrong

**"Attached to" says Host-only Adapter, but the Name list is empty.** There's no host-only network yet. Create one as
in [Check your host-only network](#check-your-host-only-network).

**The machine has no address on the host-only network, or a Windows machine's starts with `169.254`.** It asked for an
address and nobody answered. Check that **Enable Server** is ticked on the network's **DHCP Server** tab, then restart
the machine. If it still gets none, give it a fixed address from the same network instead (for example
`192.168.56.20/24`), as for an internal network.

<!-- for: linux -->
**VirtualBox refuses the address you type for the host-only network.** On Linux, it only allows addresses from
`192.168.56.0` to `192.168.63.255` unless you allow more in a file of your own. Keep a `192.168.56.x` network, or put
the ranges you want in `/etc/vbox/networks.conf`, each line starting with `*`, such as `* 10.0.0.0/8 192.168.0.0/16`.
<!-- /for -->

**A machine still reaches the internet on host-only.** Look at its **Adapter 2**, **3** and **4** tabs in
**Settings** > **Network**: every enabled adapter of a lab machine must be on **Host-only Adapter** or
**Internal Network**.
