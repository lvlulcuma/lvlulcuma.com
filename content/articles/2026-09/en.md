---
title: "An API practice lab on ARM computers"
date: 2026-09-28
topic: lab
dek: "Many deliberately vulnerable training apps only ship x86 images. Here's how to run them on an ARM computer, and how to keep them off the network."
related: "lab/setup"
---

## What runs in the lab

The lab holds four training targets that exist to be broken: OWASP crAPI, Pixi, OWASP Juice Shop, and DVGA for GraphQL. Each runs in Docker on a single computer.

## The architecture mismatch

Several of these images are published only for amd64. On an ARM computer (an Apple Silicon Mac, for example), Docker warns that the image platform doesn't match the host, and some containers fail to start or crash under the default emulation. Declaring the platform, and on a Mac switching emulation to Rosetta, makes them stable.

```yaml
services:
  crapi-web:
    image: crapi/crapi-web:latest
    platform: linux/amd64
    ports:
      - "127.0.0.1:8888:80"
```

On a Mac, turn on `Use Rosetta for x86_64/amd64 emulation on Apple Silicon` in Docker Desktop's settings. Startup is slower, but everything runs.

## Keeping it contained

- Bind every service to `127.0.0.1`, never `0.0.0.0`, so nothing is reachable from the local network.
- Give the lab its own Docker network with no route to other containers.
- Shut it down when you're done. Vulnerable apps left running are a real risk.
