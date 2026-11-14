---
# Guide → lvlulcuma.com/en/guides/vmware-host-only/
title: "Put VMware Workstation machines on a host-only network"
date: 2026-11-14
category: configure   # install | quick | configure | use | harden | fix
order: 2   # position within its category
time: 15   # rough minutes to complete
platforms: [windows]   # windows | macos | linux
requires: [install-vmware-workstation-windows]   # guides to do first (folder names); shown as "Before you start"
dek: "Wall your lab off from the internet and your home network: switch a machine to Host-only, see which addresses VMware hands out, and check that the wall holds."
# Pictures: each one is placed in the text below by a line <!-- pic: <name> -->. How each kind is drawn:
# src/components/GuideVisual.astro. Rows count from 1.
visuals:
  # Workstation's network types, from its manual (Table 17: VMnet0 bridged, VMnet1 host-only, VMnet8 NAT).
  nets:
    kind: cards
    layout: rows
    cards:
      - title: "Host-only"
        text: "Your lab machines and your computer, nothing else. Addresses are handed out automatically."
        tags: ["VMnet1", "lab machines live here"]
      - title: "NAT"
        text: "The machine goes online through your computer. Nothing on your home network can reach it."
        tags: ["VMnet8", "only while you update"]
      - title: "LAN segment"
        text: "Only the machines you put in it, not even your computer. You set every address yourself."
        tags: ["tighter, more work"]
      - title: "Bridged"
        text: "The machine joins your home network like one more device."
        tags: ["VMnet0", "never for lab machines"]
  # The Virtual Network Editor's list right after installing Workstation Pro.
  editor:
    kind: window
    title: "Virtual Network Editor"
    head: ["Name", "Type"]
    rows:
      - ["VMnet0", "Bridged"]
      - ["VMnet1", "Host-only"]
      - ["VMnet8", "NAT"]
    mark: 2
    caption: "<strong>Edit</strong> > <strong>Virtual Network Editor</strong>. More columns sit to the right, among them each network's subnet address."
  # Where the switch is: VM > Settings, Network Adapter (Workstation Pro 26H1 manual, Modify an Existing Virtual Network Adapter).
  switch:
    kind: route
    stages:
      - where: "VMware Workstation, machine selected"
        steps: ["VM", "Settings", "Network Adapter", "Host-only: A private network shared with the host", "OK"]
    caption: "The same page switches it back to <strong>NAT</strong> when the machine needs updates."
  # Address plan of a host-only network, from the manual's IP address table. The subnet is an example.
  addresses:
    kind: window
    title: "VMnet1, example subnet 192.168.47.0"
    head: ["Who", "Address"]
    rows:
      - ["Your computer", "192.168.47.1"]
      - ["Free for fixed addresses", ".2 to .127"]
      - ["Handed out to machines", ".128 to .253"]
      - ["VMware's address server (DHCP)", "192.168.47.254"]
    mark: 3
    caption: "VMware picks an unused subnet when it installs, so your third number differs. The last number follows this plan."
---

A lab machine is built to be broken into, so it must not share a network with your real devices. Workstation Pro's
**host-only** network is the wall: the machines on it reach each other and your computer, and nothing else. This
guide puts a machine on it, shows which addresses it gets, and checks that the wall holds. It works for any machine:
the Linux commands use Kali as the example, and the Windows ones sit next to them.

## Know Workstation's networks

Every machine has a virtual network adapter, and Workstation can plug it into one of these networks:

<!-- pic: nets -->

New machines usually start on **NAT**, so they can go online for updates. Vulnerable machines, the ones you practice
on, go on **Host-only** and stay there. The machine you attack from (Kali, for example) has to be on the same network
to reach them: put it on Host-only too, and switch it to NAT only while it updates.

## Look at your host-only network

1. In VMware Workstation, select **Edit** > **Virtual Network Editor**.
2. Find **VMnet1**, the host-only network Workstation made when you installed it. Note its **Subnet Address**, such as
   `192.168.47.0`: every machine on it gets an address that starts with the same three numbers.

   <!-- pic: editor -->

3. Close the editor without changing anything. To change a network, you'd first select **Change Settings**, which
   asks for administrator rights.

## Put a machine on it

1. Select the machine in Workstation's list and select **VM** > **Settings**.
2. On the **Hardware** tab, select **Network Adapter**. Check that **Connected** and **Connect at power on** are
   ticked.
3. Choose **Host-only: A private network shared with the host** and select **OK**.

   <!-- pic: switch -->

4. If the machine was running, it still has its address from the old network. Restart it so it asks for a new one.
   In Linux:

   ```sh
   sudo reboot
   ```

   In Windows, run `ipconfig /release` and then `ipconfig /renew` in a terminal instead.

## See the addresses

Machines on a host-only network get their address from a small address server (DHCP) that Workstation runs on it.
The addresses follow a fixed plan:

<!-- pic: addresses -->

1. In a Linux machine such as Kali, open a terminal and type:

   ```sh
   ip -4 -br address
   ```

   Ignore `lo`, which only talks to the machine itself. The other line, such as `eth0`, shows the machine's address,
   for example `192.168.47.129/24`. The `/24` means the first three numbers name the network.
2. In a Windows machine, open a terminal and type `ipconfig`. Look for **IPv4 Address**.
3. On your own computer, `ipconfig` shows an adapter called **VMware Network Adapter VMnet1**. Its address ends in
   `.1`: that's how your computer sits on the host-only network.

Write each machine's address in your lab notebook.

## Check that the wall holds

1. On your computer, open a terminal and ping a Linux lab machine, with its address in place of the example:

   ```powershell
   ping 192.168.47.129
   ```

   Four lines starting with **Reply from** mean your computer reaches it. A Windows machine won't answer, because
   Windows' firewall blocks pings by default. For it, an address that starts like the network's is check enough.
2. In the lab machine, try to reach the internet. In Linux:

   ```sh
   ping -c 3 8.8.8.8
   ```

   In Windows, type `ping 8.8.8.8`. It should fail, with an error or with every packet lost. That's the wall working.
3. With two lab machines on Host-only, ping one from the other the same way. Again, only a Linux machine answers.

> [!NOTE]
> Your computer doesn't answer pings from lab machines either, for the same reason. That's fine: the host-only network
> still works.

## Update, then switch back

When a lab machine needs updates or new tools, switch its adapter to **NAT** the same way, restart it, update, then
switch it back to **Host-only** and restart it again. That's rule 2 of
[Wall off the lab](/en/lab/start/#wall-off-the-lab) in Get started.

## Want a tighter wall? A LAN segment

Host-only machines can reach your computer. A **LAN segment** leaves your computer out: only the machines you put in it
can talk to each other. The cost is that Workstation hands out no addresses there, so you give each machine one
yourself.

1. Select **VM** > **Settings** > **Network Adapter**, then **LAN Segments**. Select **Add**, type a name such as
   `lab`, and select **OK**.
2. Choose **LAN segment**, pick `lab` from the list and select **OK**. Do the same for every machine that belongs in
   it.
3. In a Linux machine that uses NetworkManager, like Kali, find the name of its network connection (the **NAME**
   column, often `Wired connection 1`):

   ```sh
   nmcli connection show
   ```

4. Give it a fixed address, using that name. `10.10.10.10/24` is a private address, meant for networks like this:

   ```sh
   sudo nmcli connection modify "Wired connection 1" ipv4.method manual ipv4.addresses 10.10.10.10/24
   sudo nmcli connection up "Wired connection 1"
   ```

5. Give the other machines addresses from the same network, such as `10.10.10.20/24`, each its own. In Windows,
   that's **Settings** > **Network & internet** > **Ethernet** > **IP assignment** > **Edit** > **Manual**, with
   **IPv4** on.

Before a Linux machine goes back to NAT for updates, switch it back to automatic addresses:

```sh
sudo nmcli connection modify "Wired connection 1" ipv4.method auto ipv4.addresses ""
sudo nmcli connection up "Wired connection 1"
```

## If something goes wrong

**The machine still shows its old address, or none.** It hasn't asked for a new one since you switched. Restart it,
or in Windows run `ipconfig /release` and `ipconfig /renew`.

**A Windows machine's address starts with `169.254`.** It asked for an address and nobody answered. Open the
Virtual Network Editor, select **Change Settings**, select **VMnet1** and make sure **Use local DHCP service to
distribute IP address to VMs** is ticked. Select **OK** and renew the address.

**VMnet1 is missing, or nothing gets an address.** In the Virtual Network Editor, select **Change Settings**, then
**Restore Defaults**. It rebuilds Workstation's networks as they were after installing and deletes any networks you
added yourself.

**A machine still reaches the internet on Host-only.** Look in **VM** > **Settings** for a second network adapter: every
adapter of a lab machine must be on Host-only or the LAN segment.
