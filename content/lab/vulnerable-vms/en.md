---
# Lab idea → lvlulcuma.com/en/lab/vulnerable-vms/
title: "A range of vulnerable machines"
date: 2026-11-08
group: attack      # attack | defend | network | analysis
order: 2           # position within its group
level: beginner    # beginner | intermediate | advanced
dek: "Download a computer that's broken on purpose, run it beside Kali Linux on a network only the two can see, and practice going from an IP address to full control."
time: 1            # rough hours to build it the first time
ram: 6             # GB of free memory it needs while it runs
jobs: [penetration-tester, bug-bounty-hunter, vulnerability-analyst]   # Roadmap jobs it helps with
requires: []
files: []
---

This is the classic way to practice attacking a whole machine. You download a virtual machine that someone built to
be hackable, put it on a private network with your Kali Linux machine, and work your way in: find it, see what it's
running, find a weak spot, get a foothold, and become the administrator. Each machine is a puzzle with a known
answer, and when you get stuck there's a write-up to learn from.

## What you need

- A hypervisor (VirtualBox or VMware), set up in [Get started](/en/lab/start/).
- **Kali Linux**, your attacker machine, running and updated. It has the tools you'll need already installed.
- About 1.5 GB of download for your first target, and the patience to read when you're stuck. That's normal.

## How it fits together

Two machines on one private network, and nothing else:

- **Kali** is where you work. Give it two network cards: one **NAT** card so it can reach the internet, and one
  **host-only** (VirtualBox) or **host-only / LAN segment** (VMware) card for the lab.
- **The target** gets one card only, on that same host-only network. It must not reach the internet or your home
  network — it's full of holes on purpose.

> [!WARNING]
> Some downloaded machines arrive set to **Bridged**, which would put a deliberately broken computer straight onto
> your home network. Always open the target's network settings and switch it to host-only **before** the first boot.

## Get your first target

1. Go to **VulnHub** (vulnhub.com), a free library of vulnerable machines built by the community. Pick one marked
   for beginners. **Basic Pentesting: 1**, **Kioptrix**, and **Mr-Robot: 1** are gentle, well-known starts.
2. Download it. It comes as an `.ova` or a `.zip` with a `.vmdk` disk inside.
3. **Check the file's hash** against the MD5 or SHA1 the entry page lists, the same way as in
   [Verify a file's hash](/en/guides/check-hash/). On Linux or in Kali:

   ```sh
   sha1sum the-machine.ova
   ```

   The number it prints must match the one on the page. If it doesn't, download it again.

## Import and isolate it

1. In VirtualBox, choose **File > Import Appliance** and pick the `.ova`. In VMware, **Open** it. A `.vmdk` disk is
   attached to a new machine instead (see the VM's own notes).
2. Open the new machine's **Settings > Network**. Set its one adapter to **Host-only Adapter** (VirtualBox) or
   **Host-only** (VMware). Save.
3. Make sure your **Kali** machine has a card on that **same** host-only network, plus its NAT card for updates.
4. Start the target. You don't log into it — you attack it from the outside, so just let it boot to its login
   screen and leave it.

## Find it, then look at it

This is where the practice begins. From Kali:

1. **Find the target's address.** It got an IP from the host-only network; this finds which one:

   ```sh
   sudo nmap -sn 192.168.56.0/24
   ```

   (Use your host-only network's range. VirtualBox's default is `192.168.56.0/24`.) The address that isn't your Kali
   machine or the gateway is your target.
2. **See what it's running.** A port scan lists the doors that are open — a web server, a file share, an old login
   service:

   ```sh
   sudo nmap -sV -sC 192.168.56.101
   ```

   `-sV` asks each open port what software and version it is; `-sC` runs Nmap's standard checks. Write down every
   service and version. That list is your map, and almost every way in starts from something on it.

From here the path is different for every machine: a website with a flaw, a service with a known weakness, a password
you can guess, a file left where it shouldn't be. Finding and walking that path is the whole exercise.

## When you get stuck (you will)

Getting stuck is the point — it's where the learning is. Try the obvious things first: open any website the scan
found in a browser, search the web for the exact service and version Nmap reported plus the word "exploit", and look
for pages the site doesn't link to. When you've truly run out of ideas, read the write-up:

1. Most VulnHub entries link to **walkthroughs** at the bottom. These explain the intended path step by step.
2. Read only as far as your next step, then go back and do it yourself. Reading the whole thing first teaches you
   much less.
3. Keep notes in your lab notebook: the command, what it returned, what it meant. Those notes are the start of your
   own write-ups later.

> [!TIP]
> When one machine feels doable, work through a themed set. **TJ Null's list of OSCP-like boxes** (search for it) is
> the well-known path: dozens of VulnHub and Hack The Box machines in rough order of difficulty.

## Keep it contained

1. The target stays on its host-only network for its whole life. Never give it a NAT or bridged card "just to
   update it" — you don't update these machines, you replace them.
2. Snapshot the target right after import, labelled `fresh`. If you break it past the point of practicing, restore
   the snapshot instead of re-downloading.
3. When you're done for the day, power the target off. A machine built to be hacked shouldn't sit running.

## Going further

- **Hack The Box** and **TryHackMe** run the same kind of targets in the cloud, so there's nothing to download and
  nothing to isolate — a good change of pace once the local loop feels natural.
- Add a second target and practice moving from one machine to another, which is how real networks fall.
- Try building a target yourself: take a plain Linux machine and misconfigure it on purpose. Teaching the lesson is
  the best way to learn it.

## If something goes wrong

1. **Nmap finds no target:** the machine isn't on the same host-only network as Kali, or it hasn't finished booting.
   Check both adapters are on the identical host-only network, and give it another minute.
2. **The machine won't import or boot:** some older VulnHub machines expect VMware. The entry page usually says;
   switch hypervisor or look for its listed fix.
3. **You found the IP but every port is closed:** you're likely scanning Kali's own gateway, not the target. Re-run
   the `-sn` host scan and pick the other address.
