---
# Guide → lvlulcuma.com/en/guides/install-docker-desktop-mac/
title: "Install Docker Desktop on a Mac"
date: 2026-11-14
category: install   # install | quick | configure | use | harden | fix
order: 11   # position within its category
time: 15   # rough minutes to complete
platforms: [macos]   # windows | macos | linux
requires: []   # guides to do first (folder names); shown as "Before you start"
dek: "Pick the download for your Mac's chip, check it against Docker's checksum, install and accept the terms, keep lab containers to yourself, and check it works."
# Pictures: each one is placed in the text below by a line <!-- pic: <name> -->. How each kind is drawn:
# src/components/GuideVisual.astro. Rows count from 1.
visuals:
  # Which download (Docker's install page: Mac with Apple silicon / Mac with Intel chip; About This Mac shows
  # "Chip" on Apple silicon and "Processor" on Intel).
  chip:
    kind: cards
    cards:
      - title: "Chip: Apple M1 or later"
        text: "Your Mac has Apple silicon. Download <strong>Mac with Apple chip</strong>."
        tags: ["arm64"]
      - title: "Processor: Intel"
        text: "Your Mac has an Intel processor. Download <strong>Mac with Intel chip</strong>."
        tags: ["amd64"]
    caption: "Apple menu > <strong>About This Mac</strong>. The line is called <strong>Chip</strong> or <strong>Processor</strong>, depending on the Mac."
  # Docker Desktop's release notes: each version has a download per system and a checksum link next to each.
  download:
    kind: route
    stages:
      - where: "Docker Desktop release notes, newest version"
        steps: ["Download Docker Desktop", "Mac with Apple chip (or Intel chip)", "checksum, next to it"]
    caption: "The checksum link opens a short text file with the hash of that exact download."
  # Docker Desktop's networking page: -p listens on all network interfaces unless you name an address.
  ports:
    kind: window
    title: "Who can reach a published port"
    head: ["You type", "Who can reach it"]
    rows:
      - ["-p 8080:80", "Every device on your network"]
      - ["-p 127.0.0.1:8080:80", "Only this Mac"]
    mark: 2
    caption: "Then open <code>http://127.0.0.1:8080</code> in your browser. The first number is the port on your Mac, the second the one inside the container."
---

Docker runs containers: small, packaged programs that start in seconds. The lab's container ideas use it to run a
vulnerable web app without building a whole virtual machine. On a Mac, containers need Linux, so Docker Desktop runs
a small Linux virtual machine for you and manages it by itself; you only see the `docker` command and Docker
Desktop's window. It comes with Docker Engine, the `docker` command and Docker Compose. This guide was written for
Docker Desktop 4.99.0, the current release since 9 November 2026.

Docker Desktop runs on the current macOS and the two versions before it, with at least 4 GB of memory. The
Apple menu > **About This Mac** shows your macOS version.

> [!NOTE]
> Docker Desktop is free for personal use, education, non-commercial open source projects and small businesses
> (fewer than 250 employees and less than $10 million a year in revenue). Bigger companies need a paid subscription
> for work use.

## Find out which Mac you have

Docker makes one download for Macs with Apple silicon and one for Macs with an Intel processor:

<!-- pic: chip -->

## Download and check it

1. Open Docker Desktop's [release notes](https://docs.docker.com/desktop/release-notes/). Under the newest version
   (4.99.0 when this guide was written), in **Download Docker Desktop**, select **Mac with Apple chip** or
   **Mac with Intel chip**. `Docker.dmg` lands in your Downloads folder.
2. Select the **checksum** link next to it. It shows the file's SHA-256 hash: a line of 64 letters and numbers.

   <!-- pic: download -->

3. Open **Terminal** (in Applications > Utilities) and check the file, with the hash in place of the example:

   ```sh
   cd ~/Downloads
   echo "PASTE-THE-HASH-HERE  Docker.dmg" | shasum -a 256 -c
   ```

   **OK** means the file is exactly the one Docker released. **FAILED** means it isn't: delete it and download it
   again.
   <!-- guide: check-hash -->

The download buttons on Docker's install page give you the same newest version, but without the checksum beside them.

## Install

1. Double-click `Docker.dmg`, then drag the Docker icon into the **Applications** folder.
2. Open **Docker** from Applications. macOS checks the app the first time, which can take a moment, and may ask
   whether to open an app downloaded from the internet: select **Open**.
3. Read the **Docker Subscription Service Agreement** and select **Accept**. Docker Desktop doesn't run until you
   accept.
4. Docker Desktop starts. It doesn't ask for your password: it puts its command-line tools in a folder of your own
   (`~/.docker/bin`) and adds that folder to your Terminal's search path.

Docker Desktop may suggest signing in to a Docker account. It works without one.

> [!TIP]
> If you use [Homebrew](https://brew.sh), `brew install --cask docker-desktop` downloads Docker Desktop and puts it
> in Applications. Then go on from step 2.

## On Apple silicon: images made for Intel

Many images, such as `nginx`, come in an Arm version, which runs on Apple silicon at full speed. Some only exist for
Intel and AMD processors (`amd64`). Docker then either refuses them ("no matching manifest for linux/arm64/v8") or
runs them emulated, more slowly, with a warning that the platform doesn't match. To ask for the Intel version on
purpose, add the `--platform` option, for example:

```sh
docker run --platform linux/amd64 hello-world
```

To make emulation much faster, open Docker Desktop's **Settings** > **General**, turn on **Use Rosetta for
x86_64/amd64 emulation on Apple Silicon**, and select **Apply**. It's off by default. It uses Rosetta 2, Apple's
translator for Intel programs; if your Mac doesn't have it yet, install it once:

```sh
softwareupdate --install-rosetta
```

## Keep lab containers to yourself

When a container offers a website, you publish its port to reach it from your browser. By default, Docker publishes
it on every network address your Mac has, so every device on your network can reach it too. For a vulnerable app
built to be broken into, that's the wrong way round. Put `127.0.0.1` in front, and only your own Mac can reach it:

<!-- pic: ports -->

```sh
docker run -d -p 127.0.0.1:8080:80 nginx
```

In a Compose file, it's the same: `- "127.0.0.1:8080:80"` under `ports:`. When you're done, stop the container
(`docker ps` shows its name, `docker stop` and the name stops it).

## Check it works

1. Open a new Terminal window, so it knows where Docker's tools are.
2. Check the versions:

   ```sh
   docker version
   docker compose version
   ```

   The first shows a **Client** and a **Server**: the Server is the engine inside Docker Desktop. The second shows
   `Docker Compose version` and a number.
3. Run Docker's test container:

   ```sh
   docker run hello-world
   ```

   It downloads a tiny image and runs it. The text it prints starts with `Hello from Docker!` and says your
   installation appears to be working correctly.

## Keep it up to date

Docker Desktop checks for updates by itself and tells you when one is ready; install it from there. Don't uninstall
Docker Desktop to update it: Docker warns that uninstalling deletes your local containers, images and volumes.

## If something goes wrong

**"Docker.app is damaged and can't be opened".** The copy into Applications was interrupted, usually because another
app was using Docker at the same time. Quit apps that use Docker (such as VS Code), move `Docker.app` from
Applications to the Trash and empty it, then eject `Docker.dmg`, open it again and drag Docker in once more.

**Terminal says `docker` isn't found.** Docker Desktop hasn't finished its first start, or your Terminal window is older
than the install. Open Docker Desktop, then a new Terminal window, and try again.

**"Cannot connect to the Docker daemon".** Docker Desktop isn't running. Open it from Applications and wait until it
has started.

**"no matching manifest for linux/arm64/v8".** The image has no Arm version. Ask for the Intel one with the `--platform` option,
as in [On Apple silicon](#on-apple-silicon-images-made-for-intel).

**Your macOS is too old.** Docker Desktop supports only the current macOS and the two before it, and Docker doesn't
offer versions older than six months for download. Update macOS first, if your Mac can take a newer one.
