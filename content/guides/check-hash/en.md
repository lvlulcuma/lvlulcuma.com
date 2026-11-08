---
# Guide → lvlulcuma.com/en/guides/check-hash/
title: "Verify a file's hash"
date: 2026-09-19
category: quick   # install | quick | configure | use | harden | fix
order: 1   # position within its category
time: 5   # rough minutes to complete
platforms: [windows]   # windows | macos | linux
requires: []   # guides to do first (folder names); shown as "Before you start"
dek: "Confirm a download matches the publisher's checksum, using PowerShell on Windows."
# revisions:          # after publishing, add a line for each change
#   - date: 2026-12-02
#     note: "Updated the download link"
---

## Open the folder in PowerShell

1. Open the folder where the file is saved. Right-click an empty area and choose **Properties**.
2. In the **Location** tab, copy the folder path.
3. Open **PowerShell** and move into the folder with `cd`, pasting the path after it:

   ```powershell
   cd "C:\Users\You\Downloads"
   ```

   > [!TIP]
   > Keep the quotes around the path. They're required when a folder name has spaces.

## Compare the hash

1. Run `Get-FileHash` with the algorithm the publisher lists, usually SHA256:

   ```powershell
   Get-FileHash example.zip -Algorithm SHA256
   ```

2. Compare the long value in the **Hash** column with the one on the download page.

   > [!WARNING]
   > If the two values don't match exactly, delete the file and download it again from the official site.
