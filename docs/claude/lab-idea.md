# Playbook: one home lab idea

A lab idea is a full step-by-step guide to building one practice setup at home, in English, Ukrainian and Polish:
`content/lab/<idea>/{en,ua,pl}.md`, shown at `/<lang>/lab/<idea>/` and listed on `/<lang>/lab/` by group.
Look at `content/lab/web-app-hacking/` first: it's the model for the layout, tone and level of detail.

## 1. Research before writing

- Every command, version, port, menu name, file path and system requirement comes from the project's own current
  documentation, read in this run (docs site, README, release notes). Blog posts only fill gaps, never decide facts.
- Prefer the project's official install method (its own compose file, ISO, installer script). Note the minimum
  hardware it states, and what it says about exposing it to a network.
- If an image or download can't be fetched from the workspace (Docker Hub is blocked), check the files you can
  (`docker compose config`) and say in the pull request what you couldn't run, so the owner tries it before merging.

## 2. Frontmatter

```yaml
title: "Active Directory attack lab"   # what you build, in plain words
date: 2026-11-15                        # the day it's published
group: attack                           # attack | defend | network | analysis
order: 2                                # position within its group (easier ideas first)
level: intermediate                     # beginner | intermediate | advanced
dek: "One sentence: what you build and what you practice with it."
time: 4                                 # rough hours to build it the first time
ram: 16                                 # GB of free memory it needs while it runs
jobs: [penetration-tester, red-team-operator]   # Roadmap job folders it's good practice for
requires: []                            # other idea folders to build first
files: []                               # downloads in public/lab/<idea>/, linked in the box
```

The build stops on a job, a required idea or a file that doesn't exist. Folder names `start`, `rules` and `setup`
are taken.

## 3. The guide itself

- `##` sections, each with numbered steps (the page numbers them and lists them in the box). Usual order:
  **What you need**, **How it fits together** (what talks to what, with addresses), the build steps, a section that
  practices something real (an attack, a detection, a capture), **Keep it contained**, **Reset and tear down**,
  **Going further** (two or three next steps), **If something goes wrong**.
- Commands in code blocks with their language (`sh`, `powershell`, `yaml`), exactly as typed. A downloadable file
  goes in `public/lab/<idea>/` and is shown with a code block whose only line is `#include public/lab/<idea>/<file>`,
  so the page and the download can't differ.
- Containment is part of every idea: vulnerable machines on host-only or internal networks, container ports bound to
  `127.0.0.1`, nothing forwarded from the router, live malware only in an isolated machine with snapshots. A setup that
  must face the internet (a honeypot) says exactly what's exposed and how to keep the rest of the network apart.
- Attack steps stay inside the lab and teach the technique with standard public tools; link
  `/<lang>/lab/rules/` where practice could spill over to real systems.
- Callouts: `> [!NOTE]`, `> [!TIP]`, `> [!WARNING]`. Plain, friendly English, US spelling, rules in `CLAUDE.md`.

## 4. Translate, check, publish

- Ukrainian and Polish by meaning (`docs/claude/translation.md`). Links to Lab pages use the page's own language
  (`/ua/lab/start/`); guides stay `/en/guides/…`.
- `npm run build:all-langs`, `npm run build`, `npm run check:links`. Look at the page on desktop and phone, in light
  and dark, and check that nothing scrolls sideways at 320 px except code blocks.
- Branch `claude/lab-<idea>`, commit `Lab: <title>`, pull request. New ideas show up by themselves on the Lab page,
  in "New this week" and in the RSS feeds.
