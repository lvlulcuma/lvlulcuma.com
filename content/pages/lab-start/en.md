---
# Get started → lvlulcuma.com/en/lab/start/
updated: 2026-11-08
title: "Get started"
summary: "What a home lab needs, which free software runs it, and how to keep it away from your real network."   # one line on the Lab page
intro: "Everything to set up before your first lab idea: a computer you probably already have, free software that runs virtual machines, and a few habits that keep your practice safe."
key:   # the big fact at the top of the box beside the page
  label: "Cost to start"
  value: "Free"
---

## What you need

1. **Enough memory.** RAM matters most, because every virtual machine takes its share while it runs:

   | Free memory | What it runs comfortably |
   |---|---|
   | 8 GB | The container-based ideas, or one small virtual machine at a time |
   | 16 GB | Two or three virtual machines together, such as an attacker machine and a target |
   | 32 GB or more | A small company network: a Windows server, two Windows clients and a few Linux machines |

2. **Virtualization switched on.** Intel calls it VT-x, AMD calls it AMD-V (or SVM). On Windows, open Task Manager,
   go to **Performance > CPU** and check that **Virtualization** says **Enabled**. If it doesn't, turn it on in your
   computer's UEFI (BIOS) settings.
3. **Disk space.** An SSD with 100 GB or more free. Windows 11 asks for a 64 GB disk; most Linux machines are fine
   with 20 to 30 GB.
4. **Nothing new to buy.** The computer you have is enough for the first ideas. When you outgrow it, a used business
   mini PC (Lenovo ThinkCentre Tiny, Dell OptiPlex Micro, HP EliteDesk Mini) is small, quiet and easy to fill with
   more memory. An old desktop works too.

## Choose how to run things

You'll use two kinds of tools:

- **Containers** (with Docker) start one app in seconds and share your computer's system. They're best for web apps
  and tools: the [Web and API hacking lab](/en/lab/web-app-hacking/) runs this way.
- **Virtual machines** are whole computers in a window, each with its own operating system. You need them for
  Windows, Active Directory, firewalls, and anything you'll attack or infect.

A virtual machine runs inside a **hypervisor**. These are all free:

| Hypervisor | Runs on | Good to know |
|---|---|---|
| VirtualBox | Windows, Linux, macOS | Open source. On Apple silicon Macs it runs Arm versions of Linux and BSD, not x86 systems. |
| VMware Workstation Pro / Fusion Pro | Windows and Linux / macOS | Free for everyone since November 2024. The download needs a free Broadcom account. |
| Hyper-V | Windows 11 Pro, Enterprise, Education | Built in: turn it on in **Windows Features**. Not available on Windows Home. |
| UTM | macOS | Free from the UTM website. The App Store version is the same app, paid, with automatic updates. |
| Proxmox VE | A spare computer | Open source. It replaces that computer's system and erases its disk; you manage it from a browser. |

> [!TIP]
> Start with what's easiest where you are: VirtualBox or VMware Workstation on Windows and Linux, UTM or VMware
> Fusion on a Mac. Move to Proxmox VE once you have a spare computer to give the lab.

## Get the operating systems

1. **Linux** is free: Ubuntu, Debian and many more. Download it from the project's own site and
   [check the file's hash](/en/guides/check-hash/) before you use it.
2. **Kali Linux**, the attacker's toolbox, comes as ready-made virtual machines for VMware, VirtualBox, Hyper-V and
   QEMU. Log in with `kali` / `kali`, then set your own password with `passwd`.
3. **Windows** is free to try from the Microsoft Evaluation Center, with no product key: Windows 11 Enterprise for
   90 days and Windows Server 2025 for 180 days. When a trial runs out, build a fresh machine; rebuilding is good
   practice anyway.

> [!NOTE]
> An evaluation copy of Windows Server must be activated over the internet in its first 10 days, or it shuts itself
> down. Give it internet access (NAT, below) for its first start.

## Keep the lab away from your real network

Every hypervisor offers the same three kinds of network for a virtual machine. Choose one on purpose:

| Network | What it does | Use it for |
|---|---|---|
| NAT | The machine reaches the internet through your computer; nothing on your home network can reach it | Installing and updating |
| Host-only or internal | The machines reach each other (host-only: your computer too), but not the internet or your home network | Anything vulnerable, and anything you attack |
| Bridged | The machine joins your home network like a separate device | Not for lab machines |

The names differ a little: VirtualBox has **NAT**, **Host-only Adapter**, **Internal Network** and **Bridged
Adapter**; VMware has **NAT**, **Host-only**, **LAN segment** and **Bridged**; Hyper-V has the **Default Switch**
(NAT) and **Internal**, **Private** and **External** (bridged) switches.

1. Put vulnerable machines on a host-only or internal network only.
2. Switch a machine to NAT only while you install updates or tools, then switch it back.
3. Never bridge a vulnerable machine, and never forward a port from your router to the lab.
4. In containers, bind every port to `127.0.0.1`, as the [Web and API hacking lab](/en/lab/web-app-hacking/) does.

## Use snapshots as your undo button

A snapshot saves a virtual machine exactly as it is, so you can jump back to that moment later.

1. Take a snapshot as soon as a machine is installed and updated. Call it `clean`.
2. Take another one before every big change: a new tool, an attack, a malware sample.
3. When something breaks, restore the snapshot instead of fixing it. That takes minutes, not an evening.

> [!WARNING]
> Snapshots aren't backups: they sit on the same disk as the machine. Keep your notes and configuration files
> somewhere else too.

## Keep a lab notebook

1. Write down every machine: its name, IP address, user names, and what's installed on it.
2. Note each step you take and what happened, including what didn't work. In six weeks you'll need it.
3. Use passwords made only for the lab, and never reuse one from your real accounts.
4. Plain Markdown files in a folder (or a Git repository) are enough. Your notes turn into write-ups later, which
   show employers what you can do.

## Your first weekend

1. Switch virtualization on and install a hypervisor, plus Docker for the container-based ideas.
2. Import the Kali virtual machine, update it with `sudo apt update && sudo apt full-upgrade -y`, and take a
   snapshot.
3. Build the [Web and API hacking lab](/en/lab/web-app-hacking/) and solve your first Juice Shop challenge.
4. Write down what you did in your lab notebook.
5. Read [Practice safely and legally](/en/lab/rules/), then pick your next idea.
