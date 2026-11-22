# Playbook: one forensics write-up

A write-up is a worked digital forensics case, from the question to the answer, in English, Ukrainian and Polish:
`content/forensics/writeups/<slug>/{en,ua,pl}.md`, shown at `/<lang>/forensics/writeups/<slug>/` and listed on the
Forensics hub (`/<lang>/forensics/`), newest first. It's what a reader studies after a topic page: the same ideas,
applied to one piece of evidence, step by step.

**One write-up per run and per pull request.** Branch `claude/forensics-writeup-<slug>`, commit
`Forensics: <title> write-up`.

## 1. Where the case comes from

`source:` says which of the two it is.

- **`lab`: a case from a home lab.** The evidence (a disk image, a memory capture, logs, a phone backup) was made on
  purpose in virtual machines the author owns. When a lab idea in `content/lab/` builds it, name that idea in `lab:`
  (the page then offers "Make the evidence yourself"). Otherwise the write-up's first section says how the evidence
  was made, closely enough that a reader can make the same.
- **`challenge`: a public DFIR challenge** (CyberDefenders, Blue Team Labs Online, a conference CTF…). Only when the
  platform's own rules allow publishing solutions for that challenge, checked in this run on the platform's site.
  `challenge:` gives its `name`, `platform`, `url` and `rules` (the page where those rules say write-ups are allowed).
  The page then opens with "Try it yourself first". If the rules forbid it, or say nothing clear, don't write it.
  Follow any condition they set (no flags, retired challenges only, a link back…).

Never use real people's data, real company evidence, or anything leaked. Names, accounts, addresses and domains in
the evidence are made up: documentation addresses (`192.0.2.0/24`, `198.51.100.0/24`, `203.0.113.0/24`,
`2001:db8::/32`) and `example.com` names, as on the topic pages.

Nothing about the author (CLAUDE.md): not his devices, where he lives, his schooling or employers. "I" is fine
("I hashed the image first").

## 2. Research

- What an artifact means (a registry key, an event ID, a file system field, a log line) comes from the documentation
  of whoever makes it, read in this run: Microsoft Learn, Apple's documentation, the Linux man pages, the file system
  or format specification, the tool's own docs. Forensic research papers and SANS posters can point the way; vendor
  docs and standards decide.
- Every command shown was run on the case's evidence, and its output is real (trimmed where it's long, with `…`).
- Every source relied on goes in `sources:` (name and URL, names in English in all three files).

## 3. Front matter

```yaml
title: "Who copied the payroll file? A USB timeline on Windows 11"   # the question, in plain words
dek: "One sentence: what the case asks and what the evidence is."
date: 2026-12-01                 # the day it's published
source: lab                      # lab | challenge
level: beginner                  # beginner | intermediate | advanced
time: 3                          # rough hours to work the case yourself
lab: usb-evidence-lab            # optional: the lab idea that makes the evidence (content/lab/<idea>/)
challenge:                       # only for source: challenge
  name: "…"
  platform: "…"
  url: "https://…"
  rules: "https://…"             # where the platform allows write-ups
topics: [forensic-fundamentals, windows-forensics, timeline-analysis]   # Roadmap topic folders it practices
tools: [FTK Imager, Registry Explorer, Timeline Explorer]               # as their makers name them
sources:
  - name: "Microsoft Learn: …"
    url: "https://learn.microsoft.com/…"
```

The build stops on a topic or lab idea that doesn't exist, and on `source: challenge` without `challenge:`.

## 4. The write-up itself

`##` sections (numbered by the page and listed in the box). The usual order:

1. **The question.** What someone needs to know, and why it matters. One short paragraph.
2. **The evidence.** What there is, where it came from, its size and its hash, checked before anything else. For a
   lab case, how it was made (or the lab idea that makes it).
3. **The plan.** Which artifacts can answer the question, and in which order to look, with a sentence each on why.
4. **The analysis**, one `##` section per step: the command or the tool, the output that matters, what it shows, and
   what it doesn't prove. Times in UTC, said once.
5. **Timeline.** A table of the events found, in order (`| Time (UTC) | Source | Event |`).
6. **The answer.** What the evidence shows, how sure you can be, and the other explanations you ruled out or couldn't.
7. **What I'd do differently.** What took too long, what a better order would have been, and what to try next.

Keep the habits of the topic pages visible: verify hashes first, keep notes, separate what an artifact proves from
what it only suggests. Code blocks as in the guides (`powershell`, `sh`, no language for output). A picture where it
helps (`visuals:` and `<!-- pic: <name> -->`, as in `docs/claude/guide.md`).

## 5. Translate, check and open the pull request

1. `ua.md` and `pl.md` by meaning (`docs/claude/translation.md`: forensics = цифрова криміналістика / informatyka
   śledcza, chain of custody = ланцюг зберігання доказів / łańcuch dowodowy). Commands, output and tool names stay
   exactly as in English; front matter identical except `title` and `dek`.
2. The checks in CLAUDE.md, then look at the page and at the hub in each language.
3. The pull request says where the case comes from (for a challenge: the rules page and what it allows), what you ran,
   and anything you couldn't check yourself.
