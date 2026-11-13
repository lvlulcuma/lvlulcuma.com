---
# Get started → lvlulcuma.com/en/lab/start/
# The page is the text below the second --- (headings, paragraphs, boxes and margin notes, as in any article).
# A line like <!-- lab:ram --> on its own places a picture there; the words in each picture are under `visuals:` here.
# A <!-- guide: install-utm --> at the end of a paragraph or list item adds a "Step by step" line there, with that
# guide (a folder in content/guides/, or one planned in content/guides/planned.yml); in a card, `guide:` does the same.
# Inside the pictures' words, <strong>, <code>, <kbd> and <a href="…"> work. The pictures: map, plan, ram, check, kinds,
# pick, systems, nets, snaps, notebook, weekend. Each one's comment says what it shows.
updated: 2026-11-13
title: "Get started"
summary: "From zero to your first lab in a weekend: what your computer needs, which free software to install, and how to keep it all away from your real network."   # one line on the Lab page
intro: "Never built a lab before? Start here. In one weekend, the computer you already have becomes a small, safe practice network, with free software only."
key:   # the big fact at the top of the box beside the page
  label: "Cost to start"
  value: "Free"
visuals:
  # What you'll build: your computer, the hypervisor in it, two virtual machines on a private network, and your home
  # network kept out.
  map:
    host: "Your computer"
    hypervisor: "Hypervisor: VirtualBox, VMware or UTM"
    attacker:
      name: "Kali Linux"
      role: "Your attack machine"
    target:
      name: "Target"
      role: "Vulnerable on purpose"
    wire: "private lab network"
    wall: "no way through"
    home: "Your home network"
    devices: ["phone", "TV", "router", "family laptop"]
    caption: "What you're building. Everything runs inside your own computer. The lab machines talk only to each other, never to the devices around you."
  # The first five steps with rough times. Titles and links come from the first five headings below.
  plan:
    label: "The plan"
    times: ["10 min", "20 min", "about 1 h", "10 min", "2 min"]
    total: "About two hours in all, most of it waiting for downloads. Everything is free."
  # How much memory runs what. `pips` is how many virtual machines fit at once (drawn as squares, out of 6).
  ram:
    caption: "Memory (RAM) is what limits you most: every running virtual machine takes its share. One square is one virtual machine running at the same time."
    tiers:
      - size: "8 GB"
        verdict: "Enough to start"
        pips: 1
        fits: "The container-based ideas, or one small virtual machine at a time"
      - size: "16 GB"
        verdict: "The sweet spot"
        pips: 3
        best: true
        fits: "Two or three virtual machines together, such as an attacker and a target"
      - size: "32 GB +"
        verdict: "Room to grow"
        pips: 6
        fits: "A small company network: a Windows server, two Windows clients and a few Linux machines"
  # Where to see memory and virtualization on each system. A step with `cmd` shows a command to type.
  check:
    title: "Check yours in two minutes"
    systems:
      - name: "Windows"
        steps:
          - text: "Press <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>Esc</kbd> to open Task Manager, then go to <strong>Performance</strong>."
          - text: "<strong>Memory</strong> shows how much you have. Under <strong>CPU</strong>, <strong>Virtualization</strong> should say <strong>Enabled</strong>."
      - name: "macOS"
        steps:
          - text: "Open the Apple menu, then <strong>About This Mac</strong>: <strong>Memory</strong> shows how much you have."
          - text: "There's nothing to switch on: a Mac has virtualization on already."
      - name: "Linux"
        steps:
          - cmd: "free -h"
            text: "Your memory is under <strong>total</strong>."
          - cmd: "lscpu | grep Virt"
            text: "<strong>VT-x</strong> or <strong>AMD-V</strong> means your processor has it."
  # Virtual machine and container side by side. `layers` are drawn top to bottom; `mark` is the layer that makes the
  # difference (counted from 1).
  kinds:
    - name: "Virtual machine"
      what: "A whole computer in a window"
      layers: [["App", "App"], ["Its own operating system"], ["Hypervisor"], ["Your computer"]]
      mark: 2
      rows:
        - label: "Good for"
          text: "Windows, Active Directory, firewalls, and anything you'll attack or infect"
        - label: "Runs in"
          text: "A hypervisor"
    - name: "Container"
      what: "One app in its own box"
      layers: [["App", "App", "App"], ["Docker"], ["Your computer's own system"], ["Your computer"]]
      mark: 3
      rows:
        - label: "Good for"
          text: "Web apps and tools, like the <a href=\"/en/lab/web-app-hacking/\">Web and API hacking lab</a>"
        - label: "Runs in"
          text: "Docker"
  # Which hypervisor to install on each system, then every free choice in a fold.
  pick:
    first: "Start with"
    or: "Or"
    docker: "For containers"
    systems:
      - name: "Windows"
        main: "VirtualBox"
        why: "Free and open source. No account needed."
        alt: "VMware Workstation Pro"
        docker: "Docker Desktop"
        dockerGuide: install-docker-desktop
        guide: install-virtualbox-windows
      - name: "Mac"
        main: "UTM"
        why: "Free from the UTM website. The App Store version is the same app, paid, with automatic updates."
        alt: "VMware Fusion Pro"
        docker: "Docker Desktop"
        dockerGuide: install-docker-desktop-mac
        guide: install-utm
        note: "<strong>On a Mac with Apple silicon</strong> (M1 or later), download the Arm (arm64) version of every system: x86 ones only run emulated, and slowly."
      - name: "Linux"
        main: "VirtualBox"
        why: "Free and open source. No account needed."
        alt: "VMware Workstation Pro"
        docker: "Docker Engine with the Compose plugin"
        dockerGuide: install-docker-engine-linux
        guide: install-virtualbox-linux
    more: "Every free choice, compared"
    head: ["Hypervisor", "Runs on", "Good to know"]
    all:
      - ["VirtualBox", "Windows, Linux, macOS", "Open source. On Apple silicon Macs it runs Arm systems only (Linux, BSD, Windows 11 for Arm), not x86 ones."]
      - ["VMware Workstation Pro / Fusion Pro", "Windows and Linux / macOS", "Free for everyone since November 2024. The download needs a free Broadcom account."]
      - ["Hyper-V", "Windows 11 Pro, Enterprise, Education", "Built in: turn it on in <strong>Windows Features</strong>. Not available on Windows Home."]
      - ["UTM", "macOS", "Free from the UTM website. The App Store version is the same app, paid, with automatic updates."]
      - ["Proxmox VE", "A spare computer", "Open source. It replaces that computer's system and erases its disk; you manage it from a browser."]
  # The free systems to put in your virtual machines.
  systems:
    - kicker: "Your attack machine"
      name: "Kali Linux"
      text: "Hundreds of security tools, ready to go. Get the ready-made virtual machine for your hypervisor: no installing."
      facts: ["Free", "Log in: <code>kali</code> / <code>kali</code>"]
    - kicker: "Everyday Linux"
      name: "Ubuntu or Debian"
      text: "For servers and targets. Download it from the project's own site and <a href=\"/en/guides/check-hash/\">check the file's hash</a> first."
      facts: ["Free", "20–30 GB disk"]
    - kicker: "Windows targets"
      name: "Windows"
      text: "Free trials from the Microsoft Evaluation Center, with no product key. When one runs out, build a fresh machine: good practice anyway."
      facts: ["Windows 11 Enterprise: 90&nbsp;days", "Windows Server 2025: 180&nbsp;days"]
      guide: set-up-windows-trial-virtualbox
  # The three kinds of network as a traffic light. `light`: go (green), wait (amber) or stop (red);
  # `reach`: [reaches the internet, your home network can reach it].
  nets:
    can: ["Goes online", "Reachable from home"]
    yes: "Yes"
    no: "No"
    modes:
      - light: go
        verdict: "Lab machines live here"
        name: "Host-only or internal"
        reach: [false, false]
        text: "The machines reach each other (with host-only, your computer too) and nothing else."
      - light: wait
        verdict: "Only while you install and update"
        name: "NAT"
        reach: [true, false]
        text: "The machine goes online through your computer; nothing on your home network can reach it."
      - light: stop
        verdict: "Never for lab machines"
        name: "Bridged"
        reach: [true, true]
        text: "The machine joins your home network as a separate device, next to your phone and TV."
    names:
      title: "What your hypervisor calls them"
      rows:
        - ["VirtualBox", "Host-only Adapter, Internal Network", "NAT", "Bridged Adapter"]
        - ["VMware", "Host-only, LAN segment", "NAT", "Bridged"]
        - ["UTM", "Host Only", "Shared Network", "Bridged (Advanced)"]
        - ["Hyper-V", "Internal or Private switch", "Default Switch", "External switch"]
  # Snapshots as a line in time: three saved points, then something breaks and you jump back.
  snaps:
    points:
      - name: "clean"
        text: "Installed and updated"
      - name: "tools"
        text: "Your tools added"
      - name: "before-attack"
        text: "Right before something risky"
    broke: "Something broke"
    back: "Restore <code>before-attack</code>: back in minutes"
  # A sample lab notebook, shown like a file.
  notebook:
    file: "lab-notes.md"
    text: |
      # Lab notebook

      ## Machines
      - kali: 192.168.56.10, attacker
      - juice-shop: 127.0.0.1:3000

      ## 2026-11-14
      - Kali: updated, snapshot "clean"
      - Juice Shop: found the score board
      - Didn't work: Burp saw no traffic.
        Fix: browser proxy 127.0.0.1:8080
  # The first weekend as a checklist. Ticking boxes needs no JavaScript; `todo` shows under the days until every box is
  # ticked, then `done` takes its place.
  weekend:
    todo: "Tick everything to finish the weekend."
    done: "Weekend done. Pick your next idea below."
    days:
      - day: "Saturday"
        items:
          - text: "Check your computer and switch virtualization on"
            time: "10 min"
          - text: "Install a hypervisor, and Docker for the container ideas"
            time: "20 min"
          - text: "Import Kali, update it, move it to host-only and take a snapshot called <code>clean</code>"
            time: "1 h"
      - day: "Sunday"
        items:
          - text: "Build the <a href=\"/en/lab/web-app-hacking/\">Web and API hacking lab</a> and solve your first Juice Shop challenge"
            time: "1 h"
          - text: "Write down what you did in your lab notebook"
            time: "10 min"
          - text: "Read <a href=\"/en/lab/rules/\">Practice safely and legally</a>, then pick your next idea"
            time: "10 min"
---

<!-- lab:map -->

<!-- lab:plan -->

## Check your computer

Three things decide what your computer can run: its memory, a processor setting called virtualization, and free
disk space. A computer from the last few years almost certainly has enough.

> [!ASIDE] Virtualization
> A processor feature that lets virtual machines run at nearly full speed. Intel calls it VT-x, AMD calls it AMD-V
> or SVM.

<!-- lab:ram -->

<!-- lab:check -->

**Virtualization says Disabled?** Turn it on in your computer's UEFI (BIOS) settings, where it's called something
like Intel Virtualization Technology (VT-x), SVM Mode or AMD-V. On Windows 11, the quickest way there: save your
work, open Terminal as administrator and type this. The computer restarts straight into those settings.

```powershell
shutdown /r /fw /t 0
```

<!-- guide: turn-on-virtualization -->

**Disk space:** keep 100 GB free, ideally on an SSD. A Windows 11 machine wants a 64 GB disk; most Linux machines
are happy with 20 to 30 GB.

> [!TIP]
> Nothing to buy. When you outgrow your computer, a used business mini PC (Lenovo ThinkCentre Tiny, Dell OptiPlex
> Micro, HP EliteDesk Mini) is small, quiet and easy to fill with more memory. An old desktop works too.

## Install the software

Your lab runs things in two ways, and you'll use both:

<!-- lab:kinds -->

A virtual machine runs inside a **hypervisor**: the program that gives each machine its share of your memory and
processor. They're all free. Pick the one for your system:

<!-- lab:pick -->

> [!NOTE]
> On Windows, VirtualBox may show a green turtle at the bottom of a machine's window. It means Windows' own
> hypervisor is running (Docker Desktop and WSL switch it on), and VirtualBox works on top of it, which can be
> noticeably slower. Everything still works.

## Add your first machines

A virtual machine needs an operating system, just like a real computer. You won't pay for any of these:

<!-- lab:systems -->

Start with Kali. Download its virtual machine for your hypervisor, unpack it and open it there.
<!-- guide: set-up-kali-virtualbox, set-up-kali-utm -->

Most hypervisors put a new machine on NAT, the network setting that lets it go online, which is just right for its
first update. Log in, then type:

```sh
passwd
sudo apt update && sudo apt full-upgrade -y
```

The first command swaps the `kali` password for one of your own. The second updates every tool; the first time, that
takes a while.

> [!NOTE]
> A Windows Server trial must be activated over the internet in its first 10 days, or it shuts itself down. Keep it
> on NAT for its first start.

## Wall off the lab

Lab machines are built to be broken into, so they must never share a network with your real devices. Every
hypervisor gives a machine one of three kinds of network. Think of them as a traffic light:

<!-- lab:nets -->

Four rules keep it that way:

1. Put vulnerable machines on a host-only or internal network only. <!-- guide: virtualbox-host-only, utm-host-only -->
2. Switch a machine to NAT only while you install updates or tools, then switch it back.
3. Never bridge a vulnerable machine, and never forward a port from your router to the lab.
4. In containers, bind every port to `127.0.0.1`, as the [Web and API hacking lab](/en/lab/web-app-hacking/) does.

## Take a snapshot

A snapshot saves a virtual machine exactly as it is, like a save point in a game. It's your undo button: when
something breaks, you jump back instead of spending an evening on repairs.

<!-- lab:snaps -->

1. Take the first snapshot as soon as a machine is installed and updated. Call it `clean`. <!-- guide: virtualbox-snapshots, utm-snapshots -->
2. Take another before every big change: a new tool, an attack, a malware sample.
3. When something breaks, restore the latest good snapshot instead of fixing it.

> [!WARNING]
> Snapshots aren't backups: they sit on the same disk as the machine. Keep your notes and configuration files
> somewhere else too.

## Keep a lab notebook

In six weeks you won't remember which machine had which password. Write it down as you go: plain text files in a
folder (or a Git repository) are enough. Something like this:

<!-- lab:notebook -->

- Write down every machine: its name, IP address, user names and what's installed on it.
- Note each step and what happened, including what didn't work.
- Use passwords made only for the lab, never one from your real accounts.
- Your notes turn into write-ups later, and write-ups show employers what you can do.

## Your first weekend

Everything above as a plan. Tick things off as you go:

<!-- lab:weekend -->
