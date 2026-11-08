---
# Guide → lvlulcuma.com/en/guides/install-docker-desktop/
title: "Install Docker Desktop"
date: 2026-09-19
category: quick   # install | quick | configure | use | harden | fix
order: 2   # position within its category
time: 15   # rough minutes to complete
platforms: [windows]   # windows | macos | linux
requires: [check-hash]   # guides to do first (folder names); shown as "Before you start"
dek: "Set up Docker Desktop on Windows with the WSL 2 backend."
# revisions:          # after publishing, add a line for each change
#   - date: 2026-12-02
#     note: "Updated the download link"
---

## Download

1. Open the [Docker Desktop](https://www.docker.com/products/docker-desktop/) page and download the **Windows** installer.
2. Verify the download before running it — see [Verify a file's hash](/en/guides/check-hash/).

## Install

1. Run **Docker Desktop Installer**.
2. When asked, keep **Use WSL 2 instead of Hyper-V** checked.
3. Finish the install and **restart** the computer if prompted.
4. Open Docker Desktop once and accept the agreement so the engine starts.

## Check it works

1. In PowerShell, run:

   ```powershell
   docker --version
   ```

   > [!NOTE]
   > A version number means Docker is ready. If the command isn't found, open Docker Desktop and wait until it says the engine is running.
