# Playbook: one Roadmap topic's own page

Every Roadmap topic (`content/roadmap/topics/<slug>/{en,ua,pl}.md`) has a `title:` and a `summary:` that show on the
job pages listing it. Text under the front matter gives the topic its own page, `/<lang>/roadmap/topics/<slug>/`,
which **teaches the whole topic**: after reading it, a beginner knows most of what the topic covers, not just what it
is (the owner's rule, 2026-11-14). The topic's heading on every job page then links to it.
Read `content/roadmap/topics/networking-basics/` first: it sets the tone, the depth and the format.

**One topic per run and per pull request**, in all three languages. Each gets its own research.

## 1. Which topic

The owner names a job; its topics are written in the order of its `learn.yml`, top to bottom, so the beginner basics
that most jobs share come first. The first job is Digital Forensics Analyst (`forensics-analyst`, from 2026-11-14).

```
python3 scripts/roadmap/next_topic.py forensics-analyst          # its topics by level (✓ = has a page) and the next one
python3 scripts/roadmap/next_topic.py forensics-analyst --next   # only the next topic's folder name
```

Read the topic's `summary:` in all three languages: it's the promise the page must keep. List the jobs that use it
(`python3 scripts/roadmap/topic_inventory.py`) so the page serves all of them, not only the job you started from.
Work on `claude/roadmap-topic-<slug>`.

## 2. Research

- **Precision comes first.** Every number, name, date, port, command, default, limit and rule comes from a source
  read in this run: the standard itself (RFC, ISO, NIST, MITRE, OWASP, W3C…), the registry that keeps it (IANA), the
  vendor's own documentation (Microsoft Learn, Apple Support, the Linux man pages, the tool's docs), or law and
  official guidance. Blog posts and courses only point to those; they never decide a fact.
- Check what changed recently (a replaced standard, a new default, a renamed tool) and say which version a fact is
  for when it depends on one ("since Windows Vista", "RFC 9293, 2022, replacing RFC 793").
- Every source used goes in `sources:` (name and URL; the names stay in English in all three files). A topic page
  typically has 15–35. The build stops when `sources:` or `date:` is missing.
- Only commands you can explain and that are safe on the reader's own computer: reading settings, looking things up,
  public examples. Nothing that scans, attacks or changes someone else's system.

## 3. What the page covers

"Comprehensive" means a reader who has only this page can do what the summary promises, in a job interview or on the
first day of the job. Cover every term the summary names, the ideas that hold them together, the numbers people are
expected to know by heart, the mistakes beginners make, and where the topic shows up in security work. Leave out
what belongs to a later, more advanced topic on the same path, and say where it goes deeper ("further down the
path"), without promising pages that don't exist yet.

## 4. The page itself

The spine, as in `networking-basics` (`##` headings are numbered by the page and listed in the side box):

1. **The short version.** An everyday comparison that makes the whole topic click (a postal service for networking),
   a short list of the key parts in that comparison, one key sentence in `<mark>…</mark>`, and "By the end of this
   page you'll be able to:" with 5–8 concrete abilities.
2. **Words you'll need.** The handful of basic terms the rest of the page uses, each in a line.
3. **The teaching sections**, one per part of the summary, in the order a beginner can follow. Each explains what it
   is, how it works, why it matters for security, and the numbers and names to remember. Use `###` inside a section,
   tables for things people look up (ports, record types, sizes), `> [!NOTE]`, `> [!TIP]` and `> [!WARNING]` for what
   trips people up, and `> [!ASIDE] Label` for a side story.
4. **How it shows up on the job.** One concrete example (a log line, an alert, a request) read piece by piece, then a
   bullet per kind of job that uses the topic.
5. **Try it yourself.** Ten minutes on the reader's own computer, safe commands only, each system in its own box
   (`<!-- for: windows -->`, `<!-- for: macos -->`, `<!-- for: linux -->`, closed by `<!-- /for -->`), with what to look
   for in the output and a question to answer. A "Step by step" line (`<!-- guide: … -->`) where a lab guide helps.
6. **Check yourself.** 6–10 questions with their answers in folds (the `questions` picture), testing understanding,
   not memory alone; the answer explains why.
7. **Learn more.** Three to five free, reputable resources with one line each on what they give (a course, an
   official explainer, a tool with sample data).

Style:

- Plain, friendly English for beginners (CLAUDE.md): short sentences, a term explained the first time, then used the
  same way everywhere. Concrete beats general. Make it engaging with the comparison, a story that runs through the
  page (one web page's journey) and the "on the job" example, never with hype.
- Examples use the addresses and names kept for documentation, never real ones: `192.0.2.0/24`, `198.51.100.0/24`,
  `203.0.113.0/24`, `2001:db8::/32` (RFC 5737, RFC 3849), and `example.com` or `.example` names (RFC 2606). Private
  addresses (`192.168.1.37`) are fine where the point is that they're private. A made-up log line says it's made up.
- Code blocks as in the guides: `powershell` (drawn with a `PS>` prompt), `sh` (with `$`), and no language for output
  or plain text.
- Pictures: three to nine, drawn from words under `visuals:` and placed with `<!-- pic: <name> -->`, the same kinds as
  the guides (`docs/claude/guide.md`, section 5). A diagram goes where the text needs it, never as decoration.
- A topic page runs long (networking-basics is about 20 minutes). That's fine: the side box lists the sections, and
  each section must still earn its place.

## 5. Front matter

```yaml
title: "Networking basics"   # unchanged unless the owner agrees: it shows on every job page that uses the topic
summary: "…"                 # unchanged too; if the page shows it's wrong or too narrow, fix it in all three files
date: 2026-11-15             # the day the page is published
sources:
  - name: "RFC 791: Internet Protocol (IPv4), 1981"
    url: "https://www.rfc-editor.org/rfc/rfc791"
visuals:
  journey:
    kind: route
    …
```

A later change adds `revisions:` (date and note) in all three files.

## 6. Translate (UA and PL)

`ua.md` and `pl.md` next to `en.md`, by meaning (`docs/claude/translation.md`). The same front matter except `title`,
`summary` (both as they were) and the words of the pictures; `sources:` and `date:` identical. The same pictures, boxes
and guide mentions in the same places. Commands, code and program output stay exactly as in English. When the
"Try it yourself" part names fields a system prints (`ipconfig`), add the note that they're given as in English and
may be translated on a Ukrainian or Polish system. Keep large numbers together with a non-breaking space
(`16 777 216`). The build stops if a topic has its page in some languages but not all.

## 7. Check and open the pull request

1. The checks in CLAUDE.md (`build:all-langs`, `build`, `check:links`).
2. Look at the page in every language, on desktop and phone, in light and dark: every picture, a question opened,
   every system box, the tables on a narrow screen. Then a job page that lists the topic: its heading links to the
   page, and the page's "Needed for" links back to `#t-<slug>` on each job.
3. Read every fact against its source one last time: numbers, years, RFC numbers, port numbers, ranges.
4. Branch `claude/roadmap-topic-<slug>`, commit `Roadmap: <Topic title> topic page`, pull request with what the page
   covers, its pictures, the sources, the checks you ran, anything you couldn't check yourself (a command you
   couldn't run here), and the next topic (`next_topic.py <job> --next`).
