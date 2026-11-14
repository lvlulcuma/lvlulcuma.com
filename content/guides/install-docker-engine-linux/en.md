---
# Guide → lvlulcuma.com/en/guides/install-docker-engine-linux/
title: "Install Docker Engine on Ubuntu or Debian"
date: 2026-11-14
category: install   # install | quick | configure | use | harden | fix
order: 10   # position within its category
time: 15   # rough minutes to complete
platforms: [linux]   # windows | macos | linux
requires: []   # guides to do first (folder names); shown as "Before you start"
dek: "Add Docker's own repository, install Docker Engine with the Compose plugin, use it without sudo knowing what that allows, keep lab containers to yourself, and check it works."
# Pictures: each one is placed in the text below by a line <!-- pic: <name> -->. How each kind is drawn:
# src/components/GuideVisual.astro. Rows count from 1.
visuals:
  # The five packages Docker's install pages list, and what each one is.
  parts:
    kind: cards
    layout: rows
    cards:
      - title: "docker-ce"
        text: "Docker Engine itself: the service that runs in the background and manages your containers."
        tags: ["the engine"]
      - title: "docker-ce-cli"
        text: "The <code>docker</code> command you type."
      - title: "containerd.io"
        text: "The lower layer that actually starts and stops containers."
      - title: "docker-buildx-plugin"
        text: "Builds images, with <code>docker build</code>."
      - title: "docker-compose-plugin"
        text: "Starts a set of containers from one file, with <code>docker compose</code>."
        tags: ["the lab's container ideas use it"]
  # Docker's post-install page: the docker group gives root-level privileges; rootless mode is the other way.
  sudo:
    kind: cards
    cards:
      - title: "sudo docker"
        text: "Every command asks for your password. Nothing new is trusted."
        tags: ["safest"]
      - title: "The docker group"
        text: "No sudo. But anyone who can use your account can then do anything on the computer, through Docker."
        tags: ["handy", "same as root"]
    caption: "Both are fine on your own computer. Choose the group only if your account is yours alone."
  # Docker's port-publishing page: published ports go to all host addresses unless you name one.
  ports:
    kind: window
    title: "Who can reach a published port"
    head: ["You type", "Who can reach it"]
    rows:
      - ["-p 8080:80", "Every device on your network"]
      - ["-p 127.0.0.1:8080:80", "Only this computer"]
    mark: 2
    caption: "Then open <code>http://127.0.0.1:8080</code> in your browser. The first number is the port on your computer, the second the one inside the container."
---

Docker runs containers: small, packaged programs that share your computer's Linux kernel instead of booting a whole
system of their own. The lab's container ideas use it to start a vulnerable web app in seconds. On Ubuntu and Debian,
the best place to get it is Docker's own repository (a package source for `apt`): it has the current version and the
Compose plugin, and it updates Docker along with the rest of your system. Ubuntu and Debian have their own `docker.io`
package, but it's older (Debian 13's is version 26). This guide was written for Docker Engine 29.9.3, the current
release since 3 November 2026.

Docker's packages are made for Ubuntu 22.04, 24.04, 26.04 and 26.10, and Debian 12 and 13, on Intel and AMD
processors and on Arm ones too.

> [!NOTE]
> On Linux Mint or another system built on Ubuntu, follow the Ubuntu steps: the repository command picks the Ubuntu
> version underneath. Docker doesn't officially support those systems, but says it may work.

## Remove older Docker packages

If you've installed Docker from Ubuntu's or Debian's own packages before, remove them first, so they don't clash with
Docker's. This command removes only the ones that are installed:

```bash
sudo apt remove $(dpkg --get-selections docker.io docker-compose docker-compose-v2 docker-doc docker-buildx podman-docker containerd runc | cut -f1)
```

If it says none of them is installed, or that some aren't found, that's fine: there's nothing to remove. Images and
containers you had stay in `/var/lib/docker/`.

## Add Docker's repository

1. Install the two tools the next steps use, and make the folder for repository keys:

   ```bash
   sudo apt update
   sudo apt install ca-certificates curl
   sudo install -m 0755 -d /etc/apt/keyrings
   ```

2. Download Docker's signing key, the one `apt` uses to check that every package really comes from Docker.

   On Ubuntu:

   ```bash
   sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
   ```

   On Debian:

   ```bash
   sudo curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc
   ```

   Then let `apt` read it:

   ```bash
   sudo chmod a+r /etc/apt/keyrings/docker.asc
   ```

3. Check it's the right key:

   ```bash
   gpg --show-keys /etc/apt/keyrings/docker.asc
   ```

   The long line of letters and numbers must be Docker's fingerprint:

   ```text
   9DC858229FC7DD38854AE2D88D81803C0EBFCD88
   ```

   It may be shown in groups of four (`9DC8 5822 …`), but it's the same. If yours is different, stop here. (If `gpg`
   isn't found, install it with `sudo apt install gpg`.)
4. Add the repository. The parts in `$( )` fill in your system's code name, such as `noble` or `trixie`, and your
   processor type.

   On Ubuntu:

   ```bash
   printf '%s\n' \
     "Types: deb" \
     "URIs: https://download.docker.com/linux/ubuntu" \
     "Suites: $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}")" \
     "Components: stable" \
     "Architectures: $(dpkg --print-architecture)" \
     "Signed-By: /etc/apt/keyrings/docker.asc" \
     | sudo tee /etc/apt/sources.list.d/docker.sources
   ```

   On Debian:

   ```bash
   printf '%s\n' \
     "Types: deb" \
     "URIs: https://download.docker.com/linux/debian" \
     "Suites: $(. /etc/os-release && echo "$VERSION_CODENAME")" \
     "Components: stable" \
     "Architectures: $(dpkg --print-architecture)" \
     "Signed-By: /etc/apt/keyrings/docker.asc" \
     | sudo tee /etc/apt/sources.list.d/docker.sources
   ```

   The terminal shows the file it wrote: the `Suites:` line should name your system, such as `Suites: noble`.

## Install Docker Engine

```bash
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

That's five packages:

<!-- pic: parts -->

On Ubuntu and Debian, Docker starts by itself right after the install, and at every startup from then on.

## Use Docker without sudo

Docker's service runs as root (the all-powerful user), so at first every `docker` command needs `sudo`. To skip it,
you join the `docker` group, which the install created. Know what that means first: Docker warns that the group
grants root-level privileges. Anyone in it can start a container that sees your whole disk and change any file on
it, without typing a password.

<!-- pic: sudo -->

If you choose the group:

1. Add yourself to it:

   ```bash
   sudo usermod -aG docker $USER
   ```

2. Log out and back in, so the change takes effect. To use it in the current terminal right away, type
   `newgrp docker`.

> [!TIP]
> To run Docker with no root at all, Docker has
> [rootless mode](https://docs.docker.com/engine/security/rootless/). It takes more setup.

## Keep lab containers to yourself

When a container offers a website, you publish its port to reach it from your browser. By default, Docker publishes
it on every address your computer has, so every device on your network can reach it too, and Docker's rules go
around firewalls like `ufw`. For a vulnerable app built to be broken into, that's the wrong way round. Put
`127.0.0.1` in front, and only your own computer can reach it:

<!-- pic: ports -->

```bash
docker run -d -p 127.0.0.1:8080:80 nginx
```

In a Compose file, it's the same: `- "127.0.0.1:8080:80"` under `ports:`. When you're done, stop the container
(`docker ps` shows its name, `docker stop` and the name stops it).

## Check it works

1. Check that the service is running:

   ```bash
   sudo systemctl status docker
   ```

   It should say `active (running)`. Press <kbd>Q</kbd> to get back to the prompt. If it isn't running, start it with
   `sudo systemctl start docker`.
2. Run Docker's test container (with `sudo` in front if you didn't join the group):

   ```bash
   docker run hello-world
   ```

   It downloads a tiny image and runs it. The text it prints starts with `Hello from Docker!` and says your
   installation appears to be working correctly.
3. Check the versions:

   ```bash
   docker version
   docker compose version
   ```

   The first shows a **Client** and a **Server**, both `29.9.3` or newer. The second shows `Docker Compose version`
   and a number.

## Keep it up to date

New Docker versions come with your normal updates (`sudo apt update && sudo apt full-upgrade`), because they come from
the repository you added.

## If something goes wrong

**"permission denied while trying to connect to the Docker daemon socket".** Your terminal doesn't have the `docker`
group yet. Log out and back in (or restart), then try again. `groups` lists your groups: `docker` should be among
them. Or put `sudo` in front of the command.

**"Cannot connect to the Docker daemon".** The service isn't running. Start it with `sudo systemctl start docker`, and
read `sudo systemctl status docker` if it doesn't stay up.

**`apt update` says the repository "does not have a Release file".** Docker has no packages for the code name the
command filled in: your system may be too new, too old, or built on Debian without being Debian. Debian's steps
need Debian's address (`linux/debian`), Ubuntu's need Ubuntu's (`linux/ubuntu`). See what the file says with
`cat /etc/apt/sources.list.d/docker.sources`. To undo the repository, delete that file:
`sudo rm /etc/apt/sources.list.d/docker.sources`.

**`apt update` says "Conflicting values set for option Signed-By".** Docker's repository is listed twice, often
because an older guide added `/etc/apt/sources.list.d/docker.list`. Delete the old file
(`sudo rm /etc/apt/sources.list.d/docker.list`) and run `sudo apt update` again.

**`docker compose` doesn't work.** The Compose plugin is missing: `sudo apt install docker-compose-plugin`. Write
`docker compose` with a space; `docker-compose` with a dash is an older, separate tool.

**"WARNING: Error loading config file: … permission denied".** You ran Docker with `sudo` before joining the group,
so your `~/.docker` folder belongs to root. Give it back to yourself:

```bash
sudo chown "$USER":"$USER" /home/"$USER"/.docker -R
sudo chmod g+rwx "$HOME/.docker" -R
```
