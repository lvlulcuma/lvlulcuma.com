---
# Guide → lvlulcuma.com/en/guides/install-ventoy/
title: "Install Ventoy"
date: 2026-09-19
category: install   # install | quick | configure | use | harden | fix
order: 3   # position within its category
time: 20   # rough minutes to complete
platforms: [windows]   # windows | macos | linux
requires: []   # guides to do first (folder names); shown as "Before you start"
dek: "Turn one USB drive into a multiboot drive: copy ISO files onto it and boot any of them."
revisions:          # after publishing, add a line for each change
  - date: 2026-11-09
    note: "Says where Ventoy publishes its hashes, corrects the MBR and GPT advice and the Secure Boot steps."
---

## Prepare the USB drive

1. Plug in the drive and note its drive letter.
2. Copy anything you want to keep off the drive.

   > [!WARNING]
   > Installing Ventoy erases everything on the drive.

## Install Ventoy

1. Download the Windows `.zip` from the [Ventoy downloads page](https://www.ventoy.net/en/download.html).
2. Check the download against its hash. Ventoy lists each file's SHA-256 hash in its release notes on [GitHub](https://github.com/ventoy/Ventoy/releases); see [Verify a file's hash](/en/guides/check-hash/).
3. Extract the zip and run **Ventoy2Disk.exe**.
4. Leave **Option → Partition Style** on **MBR**, the default: it boots on both older BIOS and UEFI computers. Choose **GPT** only if a UEFI computer doesn't see the drive.
5. Under **Option → Partition Configuration**, keep the file system on **exFAT**, the default. Unlike FAT32, it holds ISO files bigger than 4 GB.
6. Check your drive is selected under **Device**, click **Install**, and confirm both warnings.

## Add ISO files

1. Copy any bootable `.iso` files straight onto the drive. You can keep several side by side.

   > [!TIP]
   > For example, Microsoft offers an official [Windows 11 ISO](https://www.microsoft.com/software-download/windows11) download.

## Boot from the drive

1. Turn the computer off, then on, and tap the boot-menu key until the menu appears:

   | Brand | Key |
   |---|---|
   | Dell, Lenovo, Acer, Gigabyte | <kbd>F12</kbd> |
   | HP | <kbd>F9</kbd> |
   | Asus | <kbd>Esc</kbd> or <kbd>F8</kbd> |
   | MSI | <kbd>F11</kbd> |

2. Choose the Ventoy drive, pick the ISO you want, and press <kbd>Enter</kbd>.

   > [!NOTE]
   > If Secure Boot blocks it ("Verification failed"), press <kbd>Enter</kbd> and use the blue screen that follows: **Enroll key from disk → VTOYEFI → ENROLL_THIS_KEY_IN_MOKMANAGER.cer**, then **Continue → Yes → Reboot**. This works because **Option → Secure Boot Support** is on by default.

## Optional: custom theme

1. Ventoy can show a GRUB theme at boot, set in a `ventoy/ventoy.json` file on the drive. The official [theme plugin docs](https://www.ventoy.net/en/plugin_theme.html) explain the format.
