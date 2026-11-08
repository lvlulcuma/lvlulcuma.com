---
# Guide → lvlulcuma.com/en/guides/install-open-webui/
title: "Install Open WebUI"
date: 2026-09-19
category: install   # install | quick | configure | use | harden | fix
order: 2   # position within its category
time: 10   # rough minutes to complete
platforms: [windows]   # windows | macos | linux
requires: [install-docker-desktop, install-ollama]   # guides to do first (folder names); shown as "Before you start"
dek: "A local, browser-based chat interface for Ollama, running in Docker."
# revisions:          # after publishing, add a line for each change
#   - date: 2026-12-02
#     note: "Updated the download link"
---

## Run the container

1. Make sure Docker Desktop is open and running.
2. In PowerShell, start Open WebUI:

   ```powershell
   docker run -d -p 3000:8080 `
         --add-host=host.docker.internal:host-gateway `
         -v open-webui:/app/backend/data `
         --name open-webui --restart always `
         ghcr.io/open-webui/open-webui:main
   ```

   > [!NOTE]
   > The first run downloads the image, which can take a few minutes. Afterwards it starts automatically with Docker.

## Open it in your browser

1. Go to `http://localhost:3000`.
2. Create a local account.

   > [!NOTE]
   > The first account you create becomes the admin. Your chats and settings stay on your own computer.

## Connect your models

1. Open WebUI finds a running Ollama on its own. Pick a model from the dropdown in the top-left corner and start chatting.

   > [!TIP]
   > If the list is empty, pull a model in Ollama first — see [Install Ollama](/en/guides/install-ollama/).
