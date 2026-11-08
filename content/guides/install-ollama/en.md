---
# Guide → lvlulcuma.com/en/guides/install-ollama/
title: "Install Ollama"
date: 2026-09-19
category: install   # install | quick | configure | use | harden | fix
order: 1   # position within its category
time: 10   # rough minutes to complete
platforms: [windows, macos, linux]   # windows | macos | linux
requires: [check-hash]   # guides to do first (folder names); shown as "Before you start"
dek: "Run large language models locally from the command line, on Windows, macOS or Linux."
# revisions:          # after publishing, add a line for each change
#   - date: 2026-12-02
#     note: "Updated the download link"
---

## Download and install

1. Go to [ollama.com](https://ollama.com/) and download the build for your operating system.
2. Verify the download — see [Verify a file's hash](/en/guides/check-hash/).
3. Run the installer. It sets up a background service that detects your GPU automatically.
4. Open a new terminal and confirm the install:

   ```sh
   ollama --version
   ```

## Pull and run a model

1. Browse the [model library](https://ollama.com/library) and download a model:

   ```sh
   ollama pull llama3.1:8b
   ```

   > [!TIP]
   > Start with a small model like an 8B one. Larger models need more memory and run slower on most laptops.

2. Start a chat with it. Type `/bye` to exit:

   ```sh
   ollama run llama3.1:8b
   ```

3. See which models you have installed:

   ```sh
   ollama list
   ```
