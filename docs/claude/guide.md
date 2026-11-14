# Playbook: one step-by-step guide

A guide walks through one task, click by click: installing a tool, setting something up, using one feature. Guides
are English-only for now: `content/guides/<slug>/en.md`, shown at `/en/guides/<slug>/` and listed on `/en/guides/`.
Overview pages (the lab's Get started, for now) stay high level and offer a guide as an optional extra right where
they talk about its task, in a "Step by step" line; the guides they announce but that aren't written yet wait in
`content/guides/planned.yml`.
Look at `content/guides/install-docker-desktop/` and `content/guides/check-hash/` first: they set the tone and the
level of detail. `content/guides/turn-on-virtualization/` shows the pictures (section 5).

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
title: "Install VMware Workstation Pro on Windows"   # the task, plus the system when it's for one; sentence case
date: 2026-11-20                          # the day it's published
category: install                         # install | quick | configure | use | harden | fix
order: 3                                  # position within its category
time: 15                                  # rough minutes to complete
platforms: [windows]                      # windows | macos | linux
requires: []                              # guides readers must have done first (folder names)
dek: "One sentence: what you end up with."
```

`requires:` is only for a guide whose result the steps can't do without (Kali in VMware Workstation Pro needs VMware
Workstation Pro installed). Every guide must make sense to someone who arrives for that one task (the owner's rule,
2026-11-14), so:

- Don't require a guide just because it comes earlier on the lab's path. Putting machines on a host-only network needs
  Workstation Pro, not Kali.
- Don't require something most readers already have (virtualization switched on, WSL installed): say in the text what's
  needed and how to check, with a `<!-- guide: … -->` mention for when it's missing.
- Write the steps for any reader of the task. A machine like Kali can be the example; it's never assumed to exist.

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
- A guide for several systems keeps each system's part apart, so readers find theirs at a glance: a line
  `<!-- for: windows -->` (several systems: `<!-- for: macos, linux -->`) puts what follows in a box labelled with
  the system's name, until the next such line, a line `<!-- /for -->` or the next `##`. What's the same on every
  system (the firmware, a note for everyone) stays outside the boxes. The build stops on a system the guide's
  `platforms` doesn't list (`fillLanes` in `src/lib/content.ts`).
- A short opening paragraph (before the first `##`) when a beginner needs to know what the thing is and why it
  matters, in two or three sentences. A box at the top for readers who can skip the guide (a Mac, say).
- Another guide that the reader needs at one step, but not before starting: a link in that step, or a "Step by step"
  line (`<!-- guide: <slug> -->` on its own line after the paragraph), which also works for a guide still in
  `planned.yml` ("Coming soon"). If that planned guide has to cover something because of it, add it to its `scope`.

## 5. Pictures

Guides are read by beginners, so show them what they'll see and where to look, instead of only telling them. The
pictures are drawn in HTML and CSS from words in the guide's front matter, never screenshots: they stay sharp,
follow light and dark mode, need no files and can be translated with the text. Two to five per guide is plenty; put
each one where the reader needs it, inside a step when it belongs to that step.

- Words under `visuals: <name>:` in the front matter, with a `kind`; a line `<!-- pic: <name> -->` in the text puts
  the picture there (indented under a step to sit inside it). The build stops on a picture line without words, and
  on words no line places.
- The kinds (schema `guideVisual` in `src/content.config.ts`, drawing `src/components/GuideVisual.astro`, CSS
  "Guides: pictures" in `src/styles/global.css`):
  - `window`: an app's window (Task Manager, a settings dialog): `title`, an optional `head` line, label/value
    `rows` and the `mark`ed one. With `states`, the window is drawn once per state side by side (switched off,
    switched on), each giving the marked row its value.
  - `route`: where to click, in order: `stages`, each a `where` label and its `steps` as buttons with arrows.
  - `cards`: cards side by side, each a `title`, a line of `text` and `tags` drawn the way they look on screen;
    `layout: rows` stacks them when the tags are long.
  - `finder`: a fold per maker or system (`items`: `name`, `key` or `tag`, `press`, `where`, `note`, `link` to their
    own instructions); opening one closes the others.
  - `screen`: a text-mode screen (firmware setup, an installer): `tabs` with the open `tab`, `rows` with the `mark`ed
    one, `keys` along the bottom, and a `badge` such as "Example".
- Rows and tabs count from 1. The words may hold `<strong>`, `<code>`, `<kbd>` and `<a>`.
- A made-up screen says so (`badge: "Example"` and the caption). Values that don't matter are "…", not invented
  numbers. Every name, label and menu in a picture is as real as the text around it: from the publisher's docs.
- Need a kind that isn't there? Add it to the schema, the component and the CSS in the same pull request, keep it
  general enough for other guides, and list it here.

## 6. Finish

- Delete the guide's entry from `content/guides/planned.yml`: the build stops if a published guide is still listed.
  The "Step by step" mentions that name it then become links by themselves, with the guide's own title and time.
  If its title changed from the working title, check that the sentence it sits under still reads well.
- If the guides list changed (a new guide), set `updated:` in `content/pages/guides/{en,ua,pl}.md` to today.
- The checks in `CLAUDE.md`. Look at the guide (every picture, and a fold opened) and at the page that mentions it,
  on desktop and phone, in light and dark.
- Branch `claude/guide-<slug>`, commit `Guides: <title>`, pull request. In it (and in your reply), name the next
  guide waiting in `planned.yml`.
