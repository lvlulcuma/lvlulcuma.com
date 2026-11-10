---
# Guide → lvlulcuma.com/en/guides/set-up-wsl2-ubuntu/
title: "Set up WSL2 Ubuntu"
date: 2026-09-19
category: quick   # install | quick | configure | use | harden | fix
order: 3   # position within its category
time: 15   # rough minutes to complete
platforms: [windows]   # windows | macos | linux
requires: []   # guides to do first (folder names); shown as "Before you start"
dek: "Install the Windows Subsystem for Linux with Ubuntu, on version 2."
revisions:          # after publishing, add a line for each change
  - date: 2026-11-09
    note: "Fixes the command for moving Ubuntu to WSL 2, and says what to do if Ubuntu doesn't open by itself."
---

## Install WSL and Ubuntu

1. Right-click **Start** and open **Terminal (Admin)** or **Windows PowerShell (Admin)**.
2. Install WSL with the default Ubuntu distribution:

   ```powershell
   wsl --install
   ```

3. **Restart** the computer to finish setup.

## Create your Linux user

1. After the restart, Ubuntu opens (if it doesn't, open **Ubuntu** from the Start menu) and asks for a new UNIX username and password.

   > [!NOTE]
   > Nothing appears while you type the password. That's normal on Linux.

2. Update the installed packages:

   ```bash
   sudo apt update && sudo apt upgrade
   ```

## Check the version

1. Back in PowerShell, list your distributions:

   ```powershell
   wsl -l -v
   ```

   > [!TIP]
   > If the VERSION column shows 1, move Ubuntu to WSL 2 with `wsl --set-version Ubuntu 2` and check again. (`wsl --set-default-version 2` only changes Linux distributions you install later.)
