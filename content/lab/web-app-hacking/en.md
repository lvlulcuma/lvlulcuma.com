---
# Lab idea → lvlulcuma.com/en/lab/web-app-hacking/
title: "Web and API hacking lab"
date: 2026-11-08
group: attack      # attack | defend | network | analysis
order: 1           # position within its group
level: beginner    # beginner | intermediate | advanced
dek: "Four apps that are vulnerable on purpose, running only on your own computer: practice the OWASP Top 10 on websites, REST APIs and GraphQL, and watch every request in Burp Suite."
time: 1            # rough hours to build it the first time
ram: 4             # GB of free memory it needs while it runs
jobs: [penetration-tester, bug-bounty-hunter, appsec-engineer, secure-developer]   # Roadmap jobs it helps with
requires: []       # other lab ideas to build first (folder names)
files: [compose.yaml]   # downloads in public/lab/web-app-hacking/, linked in the box beside the page
related_article: "2026-09"   # a monthly article linked at the bottom (folder name in content/articles/)
# revisions:       # after publishing, add a line for each change
#   - date: 2026-12-02
#     note: "Added a fifth app"
---

## What you need

- **Docker**, the tool that runs each app in its own container (a small, separate box on your computer). On Windows and
  macOS that's Docker Desktop (install guides for [Windows](/en/guides/install-docker-desktop/) and
  [Mac](/en/guides/install-docker-desktop-mac/)); on Linux, Docker Engine with the Compose plugin
  ([install guide](/en/guides/install-docker-engine-linux/)).
- **A few gigabytes of free disk space** for the apps. The first start downloads them.
- **Burp Suite Community Edition**, a free tool that shows every request your browser sends. You only need it for
  “Watch the traffic”.

## What's in the lab

| App | What you practice | Port |
|---|---|---|
| OWASP Juice Shop | A web shop with flaws from the whole OWASP Top 10, and many more | 3000 |
| OWASP WebGoat | Short lessons that explain a weakness, then let you try it | 8081, 9090 |
| VAmPI | A small REST API with the flaws from the OWASP API Security Top 10 | 5001 |
| DVGA | Attacks on GraphQL APIs, in a beginner and an expert mode | 5013 |

## Get the file

1. Make a folder for the lab, for example `practice-lab`, and open a terminal in it.
2. Download the file that describes the lab:

   ```sh
   curl -O https://lvlulcuma.com/lab/web-app-hacking/compose.yaml
   ```

   In PowerShell on Windows, type `curl.exe` instead of `curl`:

   ```powershell
   curl.exe -O https://lvlulcuma.com/lab/web-app-hacking/compose.yaml
   ```

3. Read it before you run it. It's short, and it's a good habit with any file from the internet. This is the whole file:

   ```yaml
   #include public/lab/web-app-hacking/compose.yaml
   ```

   > [!NOTE]
   > Every line under `ports:` starts with `127.0.0.1`. That's what keeps the apps reachable from your computer only.

## Start it

1. In the same folder, run:

   ```sh
   docker compose up -d
   ```

   The first start downloads all four apps, so give it a few minutes. `-d` keeps them running in the background.
2. Check that they're all up:

   ```sh
   docker compose ps
   ```

   Each app should show `Up` in the `STATUS` column. WebGoat adds `(healthy)` once it's ready, about a minute later.

## Open each app

1. **Juice Shop:** open `http://127.0.0.1:3000`. The shop has a hidden score board that tracks your progress, and
   finding it is the first challenge.
2. **WebGoat:** open `http://127.0.0.1:8081/WebGoat` and create an account. The name needs 6 to 45 lowercase
   letters, digits or dashes, and the password 6 to 10 characters. The account lives only inside the app.
   WebWolf, its helper with a test mailbox and file uploads, is at `http://127.0.0.1:9090/WebWolf`.
3. **VAmPI:** open `http://127.0.0.1:5001/createdb` once. It fills the database with sample users and books. Then open
   `http://127.0.0.1:5001/ui/` for a page that lists every endpoint of the API.
4. **DVGA:** open `http://127.0.0.1:5013`. Start in the beginner mode; the expert mode makes the same attacks harder.

## Watch the traffic with Burp Suite

1. Install [Burp Suite Community Edition](https://portswigger.net/burp/communitydownload) and start it with the
   default settings.
2. Go to **Proxy > Intercept** and click **Open browser**. This browser sends everything through Burp, including
   traffic to `127.0.0.1`, so there's nothing to set up.
3. Open one of the apps in that browser, then look at **Proxy > HTTP history**: every request and response is there.
   Right-click a request and choose **Send to Repeater** to change it and send it again.

> [!TIP]
> If pages stop loading, **Intercept** is on and is holding each request until you click **Forward**. Turn it off
> when you only want to watch.

> [!NOTE]
> Burp listens on `127.0.0.1:8080`. That's why WebGoat uses 8081 in this lab.

## Keep it contained

1. **Leave `127.0.0.1` in every port line.** Without it, Docker opens the port on every network your computer is
   connected to, café Wi-Fi included. On Linux, a port opened this way even gets past firewall rules made with ufw.
2. **Never run the lab on a server**, a cloud machine or a shared computer.
3. **Stop it when you're done** with `docker compose down`. A vulnerable app that's switched off can't be attacked.
4. **Don't type real passwords or personal data** into the apps. Use made-up names, like `test-user`.

## Reset and update

1. To start over, run `docker compose down`, then `docker compose up -d`. Everything you changed inside the apps is
   gone, and they start fresh.
2. To get the newest versions, run `docker compose pull`, then `docker compose up -d`.
3. To remove the lab completely, run `docker compose down --rmi all`. That also deletes the downloaded apps.

## Add crAPI (optional)

OWASP crAPI is a bigger practice app: a website for car owners, with a shop, a mechanic service and a mailbox, built
from many containers. It has its own compose file, so it runs next to this lab, not inside it.

1. Download it and start it with the commands from its own instructions:

   ```sh
   curl -L -o crapi.zip https://github.com/OWASP/crAPI/archive/refs/heads/main.zip
   unzip crapi.zip
   cd crAPI-main/deploy/docker
   docker compose pull
   docker compose -f docker-compose.yml --compatibility up -d
   ```

   On Windows, type `curl.exe` instead of `curl`, and `tar -xf crapi.zip` instead of `unzip crapi.zip`.
2. Open `http://127.0.0.1:8888`. Its emails go to a test mailbox at `http://127.0.0.1:8025`.

> [!WARNING]
> crAPI also binds to `127.0.0.1` by default, through the `LISTEN_IP` line in its `.env` file. Its instructions show
> how to change that to `0.0.0.0`; for a practice lab, don't.

## If something goes wrong

1. **"port is already allocated":** another program uses that port. Change the first number after `127.0.0.1:` in
   that line, for example `"127.0.0.1:3001:3000"`, then open the app on the new port.
2. **An app won't start on an ARM computer** (an Apple silicon Mac, for example): some images are built for x86
   only. In Docker Desktop's settings, turn on **Use Rosetta for x86_64/amd64 emulation on Apple Silicon**, and add
   `platform: linux/amd64` under that app's `image:` line. The article below explains this in detail.
3. **WebGoat doesn't load right after the start:** it needs about a minute. Wait until `docker compose ps` shows
   `(healthy)`.
4. **VAmPI answers with an error or an empty list:** open `/createdb` first (see “Open each app”).
5. **Anything else:** `docker compose logs juice-shop` (or `webgoat`, `vampi`, `dvga`) shows what that app printed
   while starting.
