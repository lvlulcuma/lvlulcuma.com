---
# Guide → lvlulcuma.com/en/guides/install-docker-desktop/
title: "Install Docker Desktop"
date: 2026-09-19
category: quick   # install | quick | configure | use | harden | fix
order: 2   # position within its category
time: 15   # rough minutes to complete
platforms: [windows]   # windows | macos | linux
requires: [set-up-wsl2-ubuntu]   # guides to do first (folder names); shown as "Before you start"
dek: "Set up Docker Desktop on Windows with the WSL 2 backend."
revisions:          # after publishing, add a line for each change
  - date: 2026-11-09
    note: "Checks the installer's signature (Docker publishes no hash for it), updates WSL first, and follows Docker's current installer and license terms."
---

## Download

1. Open the [Docker Desktop](https://www.docker.com/products/docker-desktop/) page and download the **Windows** installer.
2. Check that it really comes from Docker: right-click **Docker Desktop Installer.exe**, choose **Properties** and open the **Digital Signatures** tab. The name of the signer should be **Docker Inc**.

   > [!NOTE]
   > Docker doesn't publish a hash for its installer, so the signature is the check here.

## Install

1. Docker Desktop needs WSL version 2.1.5 or later. In PowerShell, bring WSL up to date:

   ```powershell
   wsl --update
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
