---
# Guide → lvlulcuma.com/en/guides/install-docker-desktop/
title: "Install Docker Desktop on Windows"
date: 2026-09-19
category: quick   # install | quick | configure | use | harden | fix
order: 2   # position within its category
time: 15   # rough minutes to complete
platforms: [windows]   # windows | macos | linux
requires: []   # guides to do first (folder names); shown as "Before you start"
dek: "Set up Docker Desktop on Windows with the WSL 2 backend."
revisions:          # after publishing, add a line for each change
  - date: 2026-11-09
    note: "Checks the installer's signature (Docker publishes no hash for it), updates WSL first, and follows Docker's current installer and license terms."
  - date: 2026-11-14
    note: "No longer asks you to set up Ubuntu first: Docker Desktop needs only WSL itself, and the guide now installs it if it's missing."
  - date: 2026-11-14
    note: "Docker does publish a checksum for its installer, next to each download in its release notes: the guide now checks it, with the signature as a second check."
---

Docker Desktop runs Linux containers on Windows through WSL (Windows Subsystem for Linux, Windows' built-in way to run
Linux). WSL 2 runs Linux in a small virtual machine, so the processor's virtualization feature must be switched on.
Most computers come with it on; the virtualization guide shows how to check.
<!-- guide: turn-on-virtualization -->

## Download

1. Open Docker Desktop's [release notes](https://docs.docker.com/desktop/release-notes/). Under the newest version, in **Download Docker Desktop**, select **Windows**. **Docker Desktop Installer.exe** lands in your Downloads folder.
2. Select the **checksum** link next to it. It shows the installer's SHA-256 hash: a line of 64 letters and numbers.
3. In File Explorer, open Downloads, right-click an empty area and choose **Open in Terminal**. Check the installer, with the hash in place of the example:

   ```powershell
   (Get-FileHash "Docker Desktop Installer.exe" -Algorithm SHA256).Hash -eq "PASTE-THE-HASH-HERE"
   ```

   **True** means the file is exactly the one Docker released. **False** means it isn't: delete it and download it again.
   <!-- guide: check-hash -->
4. For a second check, right-click **Docker Desktop Installer.exe**, choose **Properties** and open the **Digital Signatures** tab. The name of the signer should be **Docker Inc**.

The download button on the [Docker Desktop](https://www.docker.com/products/docker-desktop/) page gives you the same newest version, but without the checksum beside it.

## Install

1. Docker Desktop needs WSL version 2.1.5 or later, but no Linux system of your own. In PowerShell, check whether WSL
   is installed:

   ```powershell
   wsl --version
   ```

   If it shows a WSL version, bring WSL up to date with `wsl --update`. If it doesn't, right-click **Start**, open
   **Terminal (Admin)**, install WSL without a Linux system and restart the computer:

   ```powershell
   wsl --install --no-distribution
   ```

2. Run **Docker Desktop Installer.exe**.
3. On the **Configuration** page, choose the **WSL 2** backend (**Use WSL 2 instead of Hyper-V**).
4. Finish the install, and **restart** the computer if it asks you to.
5. Open **Docker Desktop** from the Start menu and accept the **Docker Subscription Service Agreement**. The engine starts once you accept.

   > [!NOTE]
   > Docker Desktop is free for personal use and for small businesses (fewer than 250 employees and less than $10 million a year in revenue). Bigger companies need a paid subscription for work use.

## Check it works

1. In PowerShell, run:

   ```powershell
   docker --version
   ```

   > [!NOTE]
   > A version number means Docker is ready. If the command isn't found, open Docker Desktop and wait until it says the engine is running.
