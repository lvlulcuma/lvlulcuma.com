---
# Guide → lvlulcuma.com/en/guides/install-ollama/
title: "Install Ollama"
date: 2026-09-19
category: install   # install | quick | configure | use | harden | fix
order: 1   # position within its category
time: 10   # rough minutes to complete
platforms: [windows, macos, linux]   # windows | macos | linux
requires: []   # guides to do first (folder names); shown as "Before you start"
dek: "Run large language models locally from the command line, on Windows, macOS or Linux."
revisions:          # after publishing, add a line for each change
  - date: 2026-11-09
    note: "Says where Ollama publishes its hashes, and adds the install command for Linux, which has no installer to download."
---

## Download and install

1. On Windows or macOS, download Ollama from [ollama.com/download](https://ollama.com/download).
2. Check the download against its hash. Ollama lists every file's SHA-256 hash in `sha256sum.txt` on its [GitHub releases page](https://github.com/ollama/ollama/releases); see [Verify a file's hash](/en/guides/check-hash/).
3. Install it. On Windows, run **OllamaSetup.exe**: it installs for your account and doesn't need administrator rights. On macOS, open the download and move **Ollama** to **Applications**, then start it. Ollama then keeps running in the background.
4. On Linux, there's nothing to download first: install it with Ollama's script instead.

   ```sh
   curl -fsSL https://ollama.com/install.sh | sh
   ```

5. Open a new terminal and confirm the install:

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
