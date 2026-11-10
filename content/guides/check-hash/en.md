---
# Guide → lvlulcuma.com/en/guides/check-hash/
title: "Verify a file's hash"
date: 2026-09-19
category: quick   # install | quick | configure | use | harden | fix
order: 1   # position within its category
time: 5   # rough minutes to complete
platforms: [windows, macos, linux]   # windows | macos | linux
requires: []   # guides to do first (folder names); shown as "Before you start"
dek: "Make sure a download is exactly the file its publisher released, by comparing its SHA-256 hash with the one they publish."
revisions:          # after publishing, add a line for each change
  - date: 2026-11-09
    note: "Compares the hash for you (True or False), opens PowerShell in the folder the simple way, and adds macOS and Linux."
---

## Copy the published hash

1. Find the file's **SHA-256** hash where its publisher lists it: a string of 64 letters and numbers. Guides that send you here say where to find it.
2. Copy it.

## Check it on Windows

1. In File Explorer, open the folder with the file, right-click an empty area and choose **Open in Terminal**. On Windows 10, hold <kbd>Shift</kbd> while you right-click and choose **Open PowerShell window here**.
2. Compare the file with the hash you copied. Put in your file's name and paste the hash between the quotes:

   ```powershell
   (Get-FileHash example.zip -Algorithm SHA256).Hash -eq "PASTE-THE-HASH-HERE"
   ```

   > [!TIP]
   > Type the first letters of the file name and press <kbd>Tab</kbd>: PowerShell fills in the rest. Capital or small letters in the hash don't matter.

3. **True** means the file is exactly the one the publisher released.

   > [!WARNING]
   > **False** means it isn't. Delete the file and download it again from the official site.

## Check it on macOS or Linux

1. Open **Terminal** and go to the folder with the file, for example:

   ```sh
   cd ~/Downloads
   ```

2. Paste the hash, then two spaces and the file's name, between the quotes. On macOS:

   ```sh
   echo "PASTE-THE-HASH-HERE  example.zip" | shasum -a 256 -c
   ```

   On Linux:

   ```sh
   echo "PASTE-THE-HASH-HERE  example.zip" | sha256sum -c
   ```

3. **OK** means the file matches. **FAILED** means it doesn't: delete it and download it again from the official site.
