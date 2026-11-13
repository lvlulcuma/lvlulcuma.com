# Playbook: one step-by-step guide

A guide walks through one task, click by click: installing a tool, setting something up, using one feature. Guides
are English-only for now: `content/guides/<slug>/en.md`, shown at `/en/guides/<slug>/` and listed on `/en/guides/`.
Overview pages (the lab's Get started, for now) stay high level and offer a guide as an optional extra right where
they talk about its task, in a "Step by step" line; the guides they announce but that aren't written yet wait in
`content/guides/planned.yml`.
Look at `content/guides/install-docker-desktop/` and `content/guides/check-hash/` first: they set the tone and the
level of detail.

**One guide per run and per pull request.** Don't write two in one go, and don't rework the page that announces it.
Each guide gets its own research, so every step is right for the current version.

## 1. Pick it and read where it's announced

- The owner names the guide, or take the first entry in `content/guides/planned.yml`. Its `slug` becomes the
  folder; its `title`, `category`, `platforms` and `scope` are a starting point, not facts.
- Find the pages that announce it (`grep -rn "<slug>" content/`: a `<!-- guide: … -->` in the text or a `guide:`
  field in a card) and read that part.
  The guide starts where that reader is and uses the same words (host-only, NAT, snapshot, hypervisor…), and it may
  go into everything the overview page left out on purpose.

## 2. Research before writing

- Every version number, download link, menu name, button label, command, file name, path, default value and system
  requirement comes from the publisher's own current documentation, read in this run: its docs, download page and
  release notes. Blog posts and videos only fill gaps; they never decide a fact.
- Look for what changed recently (a renamed menu, a new requirement, a dropped option) and for what differs between
  systems or versions (Apple silicon or Intel, Windows 11 Home or Pro). Say which version the guide was written for.
- How readers check the download: where the publisher lists the hash, or, when there's none, how to check the
  installer's signature (see `install-docker-desktop`).
- If you can't try something from the workspace (a graphical installer, a download that's blocked), say in the pull
  request which steps you couldn't run, so the owner tries them before merging.

## 3. Front matter

```yaml
title: "Install VirtualBox on Windows"   # the task, plus the system when it's for one; sentence case
date: 2026-11-20                          # the day it's published
category: install                         # install | quick | configure | use | harden | fix
order: 3                                  # position within its category
time: 15                                  # rough minutes to complete
platforms: [windows]                      # windows | macos | linux
requires: []                              # guides readers must have done first (folder names)
dek: "One sentence: what you end up with."
```

`requires:` is only for what a reader truly must have done first (Kali in VirtualBox needs VirtualBox installed).
A short how-to used inside a step (checking a hash) is a link in that step, not a requirement.

## 4. The guide itself

- `##` sections in the order the reader works, each with numbered steps (`1.`, `2.`); the page numbers both. The
  usual shape: get it (and check the download) → install → first start or setup → **Check it works** → optional
  extras → **If something goes wrong** (the two or three problems people really hit, each with its fix).
- One action per step. Menu paths in bold with `>` (**Settings > Network**), button names as they appear on screen,
  and what the reader should see afterwards when that helps them know they're on track.
- Commands in code blocks with their language (`powershell`, `sh`), exactly as typed, with a sentence saying what
  each does. Nothing the reader has to edit without saying so.
- Boxes for what trips people up: `> [!NOTE]`, `> [!TIP]`, `> [!WARNING]`.
- Lab guides keep Get started's safety rules: vulnerable machines on host-only or internal networks, NAT only while
  updating, never bridged, container ports bound to `127.0.0.1`; link `/en/lab/rules/` where practice could reach
  real systems.
- Plain, friendly English and the rest of the rules in `CLAUDE.md`. Nothing personal ("on my Mac" is out).

## 5. Finish

- Delete the guide's entry from `content/guides/planned.yml`: the build stops if a published guide is still listed.
  The "Step by step" mentions that name it then become links by themselves, with the guide's own title and time.
  If its title changed from the working title, check that the sentence it sits under still reads well.
- The checks in `CLAUDE.md`. Look at the guide and at the page that mentions it, on desktop and phone, in light and
  dark.
- Branch `claude/guide-<slug>`, commit `Guides: <title>`, pull request. In it (and in your reply), name the next
  guide waiting in `planned.yml`.
