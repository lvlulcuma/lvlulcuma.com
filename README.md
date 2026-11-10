# lvlulcuma.com

The code and text behind [lvlulcuma.com](https://lvlulcuma.com), a website about cybersecurity:

- **News:** what happened in security each week, and big attacks taken apart step by step
- **Articles:** one practical write-up a month
- **Guides:** how to set tools up, step by step
- **Roadmap:** the fields and jobs in cybersecurity, and what to learn for each job, from first steps to expert
- **Research and Lab:** longer studies, and home lab ideas: step-by-step builds readers can set up on their own computer

The site is in English and Ukrainian. Polish is written too, but switched off for now.

Questions or corrections: lvlulcuma@outlook.com. Security problems: see [SECURITY.md](SECURITY.md).

## How it's built

- **Ready-made pages.** [Astro](https://astro.build) turns the text files in `content/` into plain HTML and CSS pages before anything goes online. Nothing runs on a server, and **no JavaScript runs in your browser**: no cookies, no trackers, no analytics.
- **Locked down.** Every page is sent with strict security headers (`public/_headers`). One of them, the Content Security Policy, tells browsers to load only this site's own files. A check runs on every build and stops it if a page would break that rule. The full list is on the site: [How this site is secured](https://lvlulcuma.com/en/colophon/).
- **Hosted on Cloudflare.** Every push to GitHub makes Cloudflare build the pages and put them online:

```
text files in content/  →  git push  →  Cloudflare builds the site  →  live in about a minute
```

## Contents

1. [Run it on your computer](#1-run-it-on-your-computer)
2. [What's where](#2-whats-where)
3. [Editing the text](#3-editing-the-text)
4. [Writing articles](#4-writing-articles)
5. [News, guides, the Roadmap and research](#5-news-guides-the-roadmap-and-research)
6. [Languages](#6-languages)
7. [Publishing and the domain](#7-publishing-and-the-domain)
8. [Regular upkeep](#8-regular-upkeep)
9. [Commands](#9-commands)
10. [License](#10-license)

---

## 1. Run it on your computer

You need [Node.js](https://nodejs.org) (version 22.12 or newer; the site uses 24) and [Git](https://git-scm.com).

```bash
git clone https://github.com/lvlulcuma/lvlulcuma.com.git
cd lvlulcuma.com
npm install       # downloads the tools the site needs (once)
npm run dev       # starts a preview
```

Open http://localhost:4321/en/ in your browser. Changes you save show up straight away. To stop the preview, press `Ctrl+C` in the terminal.

`npm run build` makes the finished site in the `dist/` folder, exactly as it goes online, and runs all the checks. Most mistakes (a missing file or field, a misspelled folder name, a page that would break the Content Security Policy) stop it with a message that says which file and why.

---

## 2. What's where

**All the text is in `content/`.** Each page has its own folder, with one file per language side by side: `en.md`, `ua.md` and `pl.md`. You never need to touch `src/` to change wording.

```
content/                         ← all the text, one folder per page
  pages/                         The fixed pages
    home/        en.md pl.md ua.md   →  /en/                (headline, intro, the terminal menu lines, "New this week")
    about/                           →  /en/about/
    contact/                         →  /en/contact/
    colophon/                        →  /en/colophon/       ("How this site is secured")
    news/                            →  /en/news/           (intro, and the headings used on every incident breakdown;
                                        `weeksIntro:` is the intro of /en/news/weeks/, the list of every week)
    articles/                        →  /en/articles/       (intro above the list)
    guides/                          →  /en/guides/         (intro above the list)
    roadmap/                         →  /en/roadmap/        (intro, group and level headings)
    research/                        →  /en/research/       (intro above the list)
    lab/                             →  /en/lab/            (intro, "What a home lab is", the group descriptions)
    lab-start/                       →  /en/lab/start/      ("Get started": what a home lab needs)
    lab-rules/                       →  /en/lab/rules/      (the numbered rules)
  lab/                           Home lab ideas, one folder per idea (a step-by-step guide each)
    web-app-hacking/                 →  /en/lab/web-app-hacking/   (its downloads: public/lab/web-app-hacking/)
  news/weeks/                    Weekly digests, one folder per week
    2026-w43/                        →  /en/news/2026-w43/
  news/incidents/                Incident breakdowns, one folder per incident
    <name>/                          →  /en/news/incidents/<name>/
  articles/                      Monthly articles, one folder per month
    2026-10/                         →  /en/articles/2026-10/
  roadmap/fields/                The fields of cybersecurity, one folder per field
    cloud-security/                  →  a card on /en/roadmap/ and the page /en/roadmap/cloud-security/
  roadmap/jobs/                  The jobs in those fields, one folder per job
    soc-analyst/                     →  a card on its field's page
    soc-analyst/learn.yml            →  what to learn for that job: /en/roadmap/security-operations/soc-analyst/
  roadmap/topics/                Things to learn, one folder per topic, shared by every job that needs it
  cwe/                           Weaknesses explained, one folder per CWE number
    639/            en.md            →  /en/cwe/639/  (and /attack/ and /defend/ views)
    owasp-2025.yml                   The OWASP Top 10:2025 categories and the 249 CWEs mapped to them (the /cwe/ list)
    plan.yml                         Which write-up explains which CWEs (all 249 on 67 pages), in writing order
  guides/                        How-to guides, one folder per guide (English for now)
    install-ollama/  en.md           →  /en/guides/install-ollama/
  research/                      Research projects, one folder per project
  ui/            en.yml pl.yml ua.yml   Menu labels and small words used on every page
  settings.yml                   Published languages, email, GitHub and Medium links, PGP key
  LICENSE                        The license for all the text (see section 10)

src/                             How the pages look and work
  pages/                         One template per kind of page
  layouts/Base.astro             What every page shares: header, language switch, the box beside the text, footer
  components/                    Smaller building blocks used by several pages
  lib/                           Code that reads the text files (and checks them while building)
  styles/global.css              The whole design (the colours are at the top)
  styles/fonts-ua.css            Fonts for Ukrainian pages (Fixel; the font files and their license are in assets/fonts/fixel/)
public/                          Files served exactly as they are
  _headers                       The security headers Cloudflare sends with every page
  _redirects                     Sends lvlulcuma.com/ to /en/, and old /notes/ links to /articles/
  favicon.svg, favicon.ico, favicon.png, apple-touch-icon.png   The tab and home-screen icon
  .well-known/security.txt       Where to report security problems (a standard file, RFC 9116)
scripts/                         Small helpers that run during the build
  check-csp.mjs                  Stops the build if a page would break the Content Security Policy
  redirect-hidden-langs.mjs      Sends the addresses of a switched-off language to the English pages
  drop-noindex-from-sitemap.mjs  Leaves made-up example pages out of the list for search engines
  new-article.mjs                Creates next month's article in all three languages
wrangler.jsonc                   Cloudflare settings (the project name and the domain)
SECURITY.md                      How to report a security problem
LICENSE                          The license for the code (see section 10)
```

Addresses look like `lvlulcuma.com/en/articles/2026-10/` and `/ua/…`. Folders and addresses use "ua" for Ukrainian, but inside the pages the language is marked `uk`, its official code, so browsers, screen readers and search engines recognise it.

---

## 3. Editing the text

### How the text files work

Every file in `content/` has two parts:

```markdown
---
headline: "How security fails, and how to make it hold."   # notes like this one never appear on the site
intro: "One practical write-up a month…"
---

Everything below the second --- line is the page's body, written in Markdown.
```

- **Between the two `---` lines** are short named fields, like `headline: "…"`. Change only the text inside the quotes. Leave the field names as they are: a missing field usually stops the build with a message.
- **Below the second `---`** is the body, in [Markdown](https://www.markdownguide.org/basic-syntax/): `## A heading`, `- a list item`, `**bold**`, `[a link](https://…)`, tables.
- **Lines starting with `#`** between the `---` lines are notes for whoever edits the file. They never show on the site.
- **The first line** of every file says which address it belongs to.
- When you change a page, also change its `updated:` date. That date shows in the box beside the page.
- Change all three languages, Polish too, so it's ready when it comes back.

### Where to change what

| To change… | Edit |
|---|---|
| Home headline, intro, terminal menu lines, "New this week" words and announcements | `content/pages/home/` |
| About text and the "Now" box | `content/pages/about/` |
| Contact text and the email templates | `content/pages/contact/` |
| Published languages, email address, GitHub and Medium links, PGP key | `content/settings.yml` |
| Lab page: intro, "What a home lab is", group descriptions | `content/pages/lab/` |
| Get started (what a home lab needs) | `content/pages/lab-start/` |
| A home lab idea | `content/lab/<idea>/` (how to write one: `docs/claude/lab-idea.md`) |
| A lab idea's download (and the copy shown on its page) | `public/lab/<idea>/` (a page shows a file with `#include public/lab/<idea>/<file>`) |
| Practice safely and legally | `content/pages/lab-rules/` (a numbered list below the second `---`) |
| A research project (question, method, status) | `content/research/<project>/` |
| Menu labels and other small words | `content/ui/` |
| Colours, fonts, layout | `src/styles/global.css` (fonts for Ukrainian pages: `src/styles/fonts-ua.css`) |

### "New this week" on the home page

The glowing box beside the home page headline (right under it on phones) lists everything published or changed on the site in the last 7 days, newest first, one short row each. It fills itself from the dates already in the content: a weekly digest's `date:`, a breakdown's `published:`, an article's, guide's or CWE write-up's `date:`, `updated:` in a Roadmap job's `learn.yml`, a research project's `published:`, and any `revisions:` (shown as "updated"). Made-up examples (`example: true`) and drafts never show. Four rows fit (three on phones); more fold under "N more". Under them: when the next weekly digest is due, and RSS.

"The last 7 days" means today and the six days before, by the calendar in Eastern Time. A row drops off on the seventh day after its date, and the box says "Nothing new in the last 7 days" when it's empty. Because the site is static, this happens when it's rebuilt: every push does that, and so does a nightly rebuild (see "Nightly rebuild" in section 7). To see the box as it would look on another day: `SITE_TODAY=2026-11-04 npm run build`.

For news about the site that the content can't show by itself (a new section, a new feature), add an announcement at the top of `announcements:` in `content/pages/home/en.md` (and `ua.md`, `pl.md`). It's in the box for 7 days from its date, then drops off; old ones can stay in the file.

```yaml
announcements:
  - date: 2026-11-30
    title: "Results are up"                   # a few words
    text: "One short sentence."               # optional
    link: "/research/ransomware-by-sector/"   # optional: a page on this site (without /en/) or a full https:// address
```

The box's own words (its heading, the small word above each title, "N more", the empty message) are under `changes:` in the same file.

### What fills the home page by itself

- **The terminal** under the headline "runs" when the page opens: `ls ~/lvlulcuma` types itself and the sections print one by one, in about 1.5 seconds. The lines come from `ls:` in `content/pages/home/`, and the site counts the articles, guides and jobs by itself. People who turn animations off in their system settings see it finished straight away.
- **Topic of the week** (beside the headline on wide screens, under the terminal on smaller ones): a Roadmap topic that two or more jobs need, with its summary and, for each job, how far into that job's learning path it comes. Click it to open the topic. A different topic is picked each week; it changes when the site is rebuilt (on every push and every night). Its few labels are under `topic_week:`.
- **Job spotlight:** one job with a learning path, a different one each week. A bar shows its topics level by level, with a green line where employers usually start hiring. The sentence under the bar is `spotlight: path:`.
- **This week in security** appears by itself once there's a real weekly digest (see section 5).

### The box beside each page

On wide screens, every page has a box on its left that stays in view while you scroll, as long as the screen is tall enough to show all of it. On a shorter screen its rows tighten first (long titles shrink to one line, the full title shows on hover), and if it still doesn't fit, it stays at the top of the page instead of following you, so it never needs a scrollbar of its own. The build works out how tall each box is (`boxHeight()` in `src/lib/block.ts`). It holds the page's main fact at the top, then, depending on the page: a filter (Topic on Articles, Category on Guides), research stages, Contents, "Go to" links, the list of changes, and small facts (dates, reading time) at the bottom. It fills itself from the content. On About, Contact, Get started and the security page, you choose the main fact with `key:` (a `label` and a `value`); `facts:` on About and Contact adds rows at the bottom.

On phones there's no room beside the text, so the box becomes a one-line strip with an "On this page" fold under it.

---

## 4. Writing articles

A new article goes out on the **last Monday of each month**. The home page, the articles list, the topic filters, the home page's "{year} in articles" tiles (with the days until the next article), the previous and next links, article numbers, reading times, RSS feeds and the sitemap all update themselves. Articles are numbered in hex, like the hacker zine Phrack: 0x01, 0x02 … 0x09, 0x0A … 0x0F, 0x10, in the order they were first published (hovering a number shows it in plain digits).

**RSS feeds.** Each language has one feed with everything and one per section, all filled by themselves from the same dates as the "New this week" box (`src/lib/feed.ts`):

- `/<lang>/rss.xml`: **everything** (news, articles, guides, CWE write-ups, Roadmap jobs, research). Each title starts with what it is ("Breakdown · …", "CWE-639 · …"). The RSS link in "New this week" points here.
- `/<lang>/news/rss.xml` (weekly digests and breakdowns), `/<lang>/articles/rss.xml`, `/<lang>/guides/rss.xml`, `/<lang>/cwe/rss.xml`, `/<lang>/roadmap/rss.xml` (each job's "what to learn") and `/<lang>/research/rss.xml`. Each section's list links its own feed in the box beside it.

A change after publishing (a `revisions:` line) is a post of its own, "Updated · …", with the note as its text, so readers following an unfolding incident see each update. Every page tells feed readers about its section's feed and the one with everything, so pasting any page's address into a feed reader is enough. Made-up examples are left out.

**RSS feeds in a browser.** The feeds link a stylesheet, so someone who opens one in a browser sees it in the site's colours: the feed's title and description as a heading, a row of links to all the feeds (the open one marked), each post as a box with the side box's light glow, and the whole box opening the post. Feed readers ignore all of this and read the feed as before. The look is `src/styles/feed.css` (Ukrainian: `feed-ua.css`, with the Fixel fonts), the wiring is `src/lib/feed.ts`. It's plain CSS on the XML, because browsers are dropping XSLT, the older way to style feeds (Chrome from version 158, November 2026). The site's colours and fonts live in `src/styles/tokens.css`, shared by the pages and the feeds.

```bash
npm run new-article      # creates next month's article in en, ua and pl, marked as a draft
npm run dev              # preview it at http://localhost:4321/en/articles/YYYY-MM/
```

This creates a folder like `content/articles/2026-11/` with three files. Each starts like this:

```markdown
---
title: "Your title"
date: 2026-11-30
topic: api                  # research | api | lab
dek: "One-sentence summary, shown under the title and in lists."
related: "research/ransomware-by-sector"   # optional: links a research or lab page
medium: "https://medium.com/@lvlulcuma/..."  # optional: the same article on Medium, once it's there
draft: true                 # delete this line when the article is ready
---

## First heading

Your text…
```

When the English and Ukrainian files are ready, delete their `draft: true` lines, run `npm run build` to check everything, then commit and push.

**Good to know:**

- The folder name is the month (`YYYY-MM`) and becomes the address: `/en/articles/2026-11/`.
- **Images:** put the file in the article's folder and use `![What the picture shows](./diagram.png)`.
- **Margin notes:** for a short side remark (what a term means, where numbers come from), write the note right after the paragraph it belongs to:

  ```markdown
  > [!ASIDE] Why per 10,000
  > It keeps the numbers readable.
  ```

  On wide screens (from 1340 pixels) the note sits in the right margin next to its paragraph. On smaller screens it comes right after the paragraph, so readers always get the main text first. If a note is longer than its paragraph, it hangs down beside the text that follows, but only when the build is sure it won't run into the next note; otherwise it pushes the text down. Keep notes to a sentence or two, a paragraph or more apart. Notes don't count toward the reading time, so don't put anything there the reader must see. The label after `[!ASIDE]` is optional.
- **Boxes:** `> [!NOTE]`, `> [!TIP]` or `> [!WARNING]`, then the text on the next `> ` line.
- **No `style="…"`, `<script>` or `<iframe>`** in the text. The Content Security Policy would block them, so the build stops and names the page.
- Only publish findings from your own lab, or ones the owner has agreed to share (see the "Practice safely and legally" page).
- **Also on Medium:** publish here first. On Medium, use **Stories → Import a story** with the article's address, so Medium tells search engines this site has the original. Then add the Medium address as `medium:` in the article. The Medium profile link is `medium:` in `content/settings.yml` (leave it `""` to hide it).
- **Changing an article after it's published:** add a `revisions:` list (every new article has a commented-out example). The box beside the article then lists what changed and when (A = published, then B, C, …).

---

## 5. News, guides, the Roadmap and research

### A weekly digest (News)

Copy last week's folder in `content/news/weeks/` and rename it to the new week: the year, a `w` and the two-digit week number, like `2026-w45` (weeks start on Monday and are numbered the ISO way). The page shows that week's dates by itself. Then change:

- `title:` a short, catchy line built on the week's most striking outcome or detail, not a list of attacks (for example "A 14-year-old bug and a $50 million “no”"). `dek:` names the biggest stories, because search engines show it under the title. `date:` is the day you publish it.
- `action:` the one thing readers should do this week, in a sentence. It shows in a green box under the intro, labelled "If you do one thing this week".
- `stories:` about five, each with `title`, `type`, `text` (what happened, in plain words: one short paragraph, or a list of short paragraphs), `notes` (side notes beside the story, each a `label` and a `text`: the most striking detail, a number, or a term explained), `why` (why it matters) and, if there's something readers should do, `do`. `sources:` is a list of `name` ("Outlet: headline") and `url`; under the story they sit in a small "Sources" box that opens into the full list. `incident:` is the folder name of a full breakdown, when there is one: the whole story then becomes a link to it.
- `type:` one of ransomware, breach, supply-chain, accounts, vulnerability, phishing, ddos, espionage, takedown, rules. Their names in each language are `newsTypes:` in `content/ui/`.
- `fun:` (optional) the **Fun story of the week**: a light, true story from the same week that isn't one of the stories, with `title`, `text` (a few short paragraphs) and `sources`. It shows beside the latest week on the News page, in the empty right column on wide screens and under the week on smaller ones.
- Text below the second `---` is an optional short intro: one short paragraph on what ties the week together. Words in `` `backticks` `` show as code.

Readers find older weeks in three places, all updated by themselves: on the News page the four weeks before the latest one are listed right under it (with an **All weeks** link); `/en/news/weeks/` lists every week, newest first and grouped by month; and at the top of each week's page, ← and → beside the dates step to the week before or after.

### An incident breakdown (News)

Make a folder in `content/news/incidents/` (its name becomes the address, and it can't be one of the types above) and copy `en.md` from an existing breakdown. Every breakdown has the same sections in the same order, so readers know where to look: first the facts (what happened, how the attack worked, the timeline, what's still unknown), then what to do (what would have caught it, what to check), then who works on this and the sources. A section with nothing in it is left out. Beside "What happened" on wide screens (under it on smaller ones) come the side notes of the weekly story that links to the breakdown.

- `status:` unfolding (facts still coming in), confirmed, or report (the victim or investigators published a full report). When it changes, update it and add a line to `revisions:`.
- `date:` when the incident became public; `published:` when you published the breakdown. `who`, `sector`, `entry` (how the attackers got in) and `impact` fill the box at the top: the impact first, then who was hit (with the sector) and the way in under it. Separate the parts of `impact` with "; ": they show as short points.
- `timeline:` dates like `2026-10-14`, or `2026-10` when only the month is known. The page shows them as "14 Oct" or "Oct" (with the year when it isn't the year the incident became public), and events on the same day share one date.
- `attack:` one step per [MITRE ATT&CK](https://attack.mitre.org) technique, with `tactic`, `id` (like `T1190` or `T1003.001`), its official `name`, and what the attackers did. The ID links to the technique's page.
- `detect:`, `check:` and `unknown:` are short lists. `jobs:` and `topics:` are Roadmap folder names; a misspelled one stops the build.
- `sources:` primary sources first: the victim's statement, official advisories, court papers. The first three show at the end of the page; more fold under "N more". The text below the second `---` is the "What happened" section.

**Made-up examples:** `example: true` marks a sample that only shows the layout. It's labelled as an example on the page (with an orange "Example" box, also above any list that holds one) and kept out of search engines, the sitemap, RSS and the home page. The made-up weeks and breakdowns that showed the layout before the first real ones have been removed; to start from a layout, copy a real breakdown such as `news/incidents/binance-crypto-theft`.

### A guide

Make a folder in `content/guides/` (its name becomes the address) with an `en.md`, copying the top part from an existing guide. Translations are optional: add `ua.md` or `pl.md` when they're ready. Until then the Ukrainian and Polish guide lists show the English guide, marked EN.

- `category:` install, quick, configure, use, harden or fix. `order:` its place in that category.
- `time:` rough minutes to finish. `platforms:` any of `[windows, macos, linux]`.
- `requires:` folder names of guides to do first, like `[install-docker-desktop, install-ollama]`. They show as "Before you start" at the top, and this guide shows under "Used in" on theirs.

Write each part as a `## Heading` (numbered 01, 02, … by itself) followed by a numbered list of steps. Inside a step, indent by three spaces:

- **Commands:** a ```` ```powershell ````, ```` ```bash ```` or ```` ```sh ```` block (`sh` means any system's terminal). The `PS>` or `$` prompt is added for you, so don't type it. A line that starts with spaces continues the line above.
- **Boxes:** `> [!NOTE]`, `> [!TIP]` or `> [!WARNING]`, then the text on the next `> ` line.
- **Keys:** `<kbd>F12</kbd>`.

### The Roadmap

The Roadmap (`/en/roadmap/`) is for people looking for a way into cybersecurity. It's built in three layers:

1. **Fields** (`content/roadmap/fields/`): the areas of cybersecurity, in four groups (defend, attack, build, govern). Each has `group:`, `order:` (its place in the group), `title:`, `summary:` and `also:` (other names people search for). Each field has its own page listing its jobs.
2. **Jobs** (`content/roadmap/jobs/`): each names its `field:` and `level:` (`entry`, `mid`, `senior`, or `any` for work open at any stage, like bug bounty), with `order:`, `title:`, `summary:` and `also:` (other titles used in job ads).
3. **What to learn:** a job gets its own learning-path page once its folder has a `learn.yml`. It lists topics for five levels (`beginner`, `knowledgeable`, `intermediate`, `advanced`, `expert`), `hire:` (the level employers usually expect, after which an "Enough to apply" line appears), `sources:` (shown at the bottom) and `updated:`. One `learn.yml` serves all three languages, because it only lists topic folder names.

**Topics** (`content/roadmap/topics/`) are written once and shared by every job that lists them, so "Networking basics" is the same for a SOC analyst and a penetration tester. Each has a `title:` and a `summary:` (exactly what to know, in a sentence or two) in each language. Write text below a topic's second `---` and it gets its own page, like `/en/roadmap/topics/networking-basics/`, and becomes a link everywhere it's listed. A misspelled or repeated topic in a `learn.yml` stops the build and names the job.

The headings and short texts around the Roadmap (group names, level names, the "Enough to apply" line) are in `content/pages/roadmap/<language>.md`.

### Weaknesses (CWE)

The CWE section (`/en/cwe/`) explains the common software weaknesses behind the OWASP Top 10. The list page shows all ten OWASP Top 10:2025 categories and the 249 CWEs mapped to them (from `content/cwe/owasp-2025.yml`); a weakness with its own folder in `content/cwe/` becomes a link, the rest point to MITRE.

Related CWEs share a page: `content/cwe/plan.yml` groups all 249 into 67 write-ups, in the order they're written (`python3 scripts/cwe/next.py` shows progress and the next one). Write one up in `content/cwe/<number>/en.md` (the folder is the page's main CWE). Front matter: `title:` (plain and searchable), `cwe:`, `name:` (MITRE's official name), `also:`, `owasp:` (its category, like `A01:2025`), optional `api:` and `top25:`, `dek:`, `date:` and `sources:`. A write-up is split for two readers: a `## heading` ending in `<!-- attack -->` or `<!-- defend -->` makes that part show only on the attack or defense side. Every page has three views — everything, `/attack/` and `/defend/` — and the reader's **Show** choice follows them from page to page. The full how-to is in `docs/claude/cwe-entry.md`. Translations (`ua.md`, `pl.md`) are added as they're ready; until then the other languages show the English write-up, marked EN.

### Research

Copy a folder in `content/research/`, rename it (the name becomes the address), and change `order:`, `status:` and the text. `page: false` lists a project without giving it its own page yet. `current_step:` says which step of the method you're on (1 = the first): the box beside the project ticks off the earlier steps. Results go below the second `---` and appear at the end of the project's page. Add a `revisions:` entry when you publish results or change the method.

### A PGP key

To let people encrypt email to you: put your public key in `public/pgp-key.txt`, fill in `pgp_fingerprint` in `content/settings.yml`, and add this line to `public/.well-known/security.txt`:

```
Encryption: https://lvlulcuma.com/pgp-key.txt
```

---

## 6. Languages

`languages:` in `content/settings.yml` lists the languages that are published. It's `[en, ua]` for now. For a language that isn't in the list:

- no pages are built, and it isn't in the language switch, the sitemap, or the links that tell search engines about other languages;
- its old addresses send people to the English page (`/pl/articles/2026-10/` → `/en/articles/2026-10/`). The build adds these redirects by itself and marks them as temporary, because the language is coming back;
- all its files stay where they are (`pl.md` in every folder, `content/ui/pl.yml`), so nothing is lost.

**To bring Polish back:** change the line to `languages: [en, pl, ua]`, run `npm run build`, and push. Check the Polish files first for anything written while it was off.

---

## 7. Publishing and the domain

This is how the live site is set up. If you run your own copy, use your own names and domain.

### Connecting GitHub to Cloudflare (once)

1. Cloudflare dashboard → **Compute → Workers & Pages → Create application**.
2. Under **Import a repository**, connect GitHub and pick this repository.
3. Settings:
   - **Project name:** `lvlulcuma` (the same as `"name"` in `wrangler.jsonc`)
   - **Build command:** `npm run build`
   - **Deploy command:** `npx wrangler deploy`
4. **Save and Deploy.** The first build takes a minute or two.

`wrangler.jsonc` attaches the site to the domain by itself. If the deploy says the domain already has a record, go to **DNS → Records**, delete the old `A`, `AAAA` or `CNAME` record for the domain (for example a parking page), and deploy again.

From then on, every `git push` to `main` rebuilds and publishes the site. If a build fails, the live site stays on the last version that worked.

### Nightly rebuild (once)

"New this week" on the home page depends on the date, so the site is also rebuilt every night, just after midnight Eastern Time (`.github/workflows/nightly-rebuild.yml`), even when nothing was pushed. It needs a Cloudflare Deploy Hook, a private address that starts a build and can do nothing else:

1. Cloudflare dashboard → **Workers & Pages** → `lvlulcuma` → **Settings → Builds → Deploy Hooks**. Name `nightly`, branch `main`, **Create**, and copy the address.
2. GitHub → this repository → **Settings → Secrets and variables → Actions → New repository secret**. Name `CLOUDFLARE_DEPLOY_HOOK`, the address as its value.

Until the secret exists, the nightly run does nothing and says so. To rebuild right away: **Actions → Nightly rebuild → Run workflow**. If the address ever leaks, delete the hook in Cloudflare and make a new one.

### Securing the domain (once)

The "How this site is secured" page says these are in place, so they need to be set in the Cloudflare dashboard:

| Where | What to do |
|---|---|
| **SSL/TLS → Edge Certificates** | **Always Use HTTPS**: on. **Minimum TLS Version**: 1.2. **TLS 1.3**: on |
| **DNS → Settings** | Turn on **DNSSEC** (it signs the domain's DNS answers so they can't be faked). When the domain is registered with Cloudflare, the rest happens by itself |
| **DNS → Records** | Add a `CAA` record for the domain: tag `iodef`, value `mailto:` plus your email. It says which certificate authorities may issue certificates for the domain, and where to report attempts. Cloudflare adds the ones its own certificates need. Check with `dig lvlulcuma.com caa +short` |
| **DNS → Records** | Add a `TXT` record named `_dmarc` with the value `v=DMARC1; p=reject; adkim=s; aspf=s`. The domain sends no email, so this tells mail servers to reject any message that claims to come from it |
| **www** | **Rules → Redirect Rules → Create rule from template → "Redirect from WWW to root"**, and a proxied `AAAA` record `www` → `100::` so `www.lvlulcuma.com` works |

Then check the results:

- https://securityheaders.com/?q=lvlulcuma.com
- https://developer.mozilla.org/en-US/observatory/analyze?host=lvlulcuma.com
- https://internet.nl/site/lvlulcuma.com/
- https://dnsviz.net/d/lvlulcuma.com/dnssec/

**HSTS preload (optional, later):** HSTS tells browsers to only ever use HTTPS for the domain; "preload" builds that into browsers themselves. After a few weeks without problems, and only if every subdomain you'll ever use works over HTTPS, change the `Strict-Transport-Security` line in `public/_headers` to `max-age=63072000; includeSubDomains; preload` and submit the domain at https://hstspreload.org. Getting off that list again takes months, so there's no rush.

---

## 8. Regular upkeep

- **Every month:** one article (section 4).
- **About weekly, a few minutes:** GitHub's Dependabot opens a pull request when Astro or another package has an update. It waits a week after each release first, in case a release turns out to be compromised. Merge it, then check the build worked under **Workers & Pages → lvlulcuma → Deployments**.
- **Every October:** move the `Expires:` date in `public/.well-known/security.txt` one year ahead. An expired security.txt counts as invalid.
- **After changing `public/_headers`:** check securityheaders.com again. The "How this site is secured" page shows that file directly, so it never goes out of date.
- **Claude's scheduled work:** Claude runs a few recurring jobs in the cloud and sends each one as a pull request: the weekly news digest (written just after midnight on Mondays, Eastern Time), ideas for the next article (early each month), one Roadmap job's learning path (weekly) and a site check (monthly). The weekly digest is published without waiting for review by `.github/workflows/digest-auto-publish.yml` at 01:11 on Monday (or within the hour after it's ready, if that's later; GitHub sometimes starts these runs a few minutes late), together with a full breakdown for each of its stories, but only when it changes nothing except that week's folder and the new breakdown folders its stories link to, and every check passes. Any other incident breakdown (an update, or one written on its own) goes out the same way only when you ask Claude for that (its branch is then `claude/autopublish-incident-<folder>`); otherwise it waits for your review. Mark a pull request as a draft to hold it back, use **Actions → Publish weekly digest → Run workflow** to publish a finished one straight away, or delete the workflow to review every week yourself. The rules Claude follows are in `CLAUDE.md` and `docs/claude/`.

---

## 9. Commands

| Command | What it does |
|---|---|
| `npm run dev` | A preview at http://localhost:4321 that updates as you save |
| `npm run build` | Builds the finished site into `dist/` and runs all the checks |
| `npm run check:links` | After a build: checks that every link inside the site leads somewhere |
| `npm run build:all-langs` | Builds with every language on (including Polish while it's switched off) and checks the links; `content/settings.yml` is left as it was |
| `npm run preview` | Shows the built `dist/` folder in your browser |
| `npm run new-article` | Creates next month's article in all three languages |
| `npm run new-article -- 2026-12` | Creates the article for a specific month |
| `npm run deploy` | Builds and publishes straight from your computer (run `npx wrangler login` once first). Normally a `git push` does this instead |

---

## 10. License

- **The code** (everything except the two items below) is under the [MIT License](LICENSE): you may reuse it for anything, as long as you keep the copyright notice.
- **The writing** in `content/` (articles, news, guides, the Roadmap, research and the page texts) is under [Creative Commons Attribution-NonCommercial 4.0](content/LICENSE): you may share, translate and adapt it if you credit lvlulcuma.com, say what you changed, and don't use it commercially.
- **The name and the icon** (lvlulcuma, and the icon files `public/favicon.*` and `public/apple-touch-icon.png`) aren't covered by either license. Please don't use them for your own site.

The fonts have their own license, the [SIL Open Font License](https://openfontlicense.org): IBM Plex Sans, IBM Plex Mono and Unbounded (installed from npm through [Fontsource](https://fontsource.org)), and Fixel by MacPaw (in `src/assets/fonts/fixel/`, with its license file).
