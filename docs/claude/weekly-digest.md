# Playbook: the weekly news digest

A scheduled run writes it just after midnight on Monday (Eastern Time), for the ISO week that just ended (Monday to
Sunday), together with **a full breakdown for each of its stories** (section 6). Both go in one pull request, which is
published automatically at 01:11 that morning if it passes the checks (see CLAUDE.md), so everything in it has to be
right without anyone looking at it first. Take the time it needs: a pull request that's ready after 01:11 goes out
at the next hourly run.

## 1. Which week

```
week=$(TZ=America/New_York date -d yesterday +%G-w%V)     # e.g. 2026-w45, the week that ended yesterday
```

If `content/news/weeks/$week/` already exists, stop: don't overwrite it, just report that it's there.
Work on the branch `claude/digest-$week`, starting from the latest `main`.

## 2. Research and picking

- Read the week's security news widely: The Record, BleepingComputer, SecurityWeek, The Hacker News, TechCrunch
  security, Reuters, Ars Technica, KrebsOnSecurity, CISA (KEV catalog and advisories), CERT-UA and CERT Polska,
  vendor research blogs, and weekly roundups such as "this week in security" (this.weekinsecurity.com) and
  Hackaday's "This Week In Security" to catch what you missed.
- **Only events that happened or were announced inside the week** (Monday to Sunday). Something from the week
  before is out, however big; note it in the pull request instead.
- Pick **5 or 6 stories**: the week's most important ones first, with **a mix of types**
  (ransomware, breach, supply-chain, accounts, vulnerability, phishing, ddos, espionage, takedown, rules) and
  **one story close to Ukraine or Poland** when there is one. A story needs **two good sources** where possible.
- Don't miss the biggest story of the week (a record theft, a mass-exploited bug). Re-check the top headlines of
  the main outlets before you finish.
- Stay neutral on politics; report what happened and who said it.
- Pick a **fun story of the week** as well (section 5).

## 3. Write the English file

Copy `content/news/weeks/<latest week>/en.md` to `content/news/weeks/$week/en.md` and follow the comments in
it. Fields:

- `title:` **a catchy line**, not a list of attacks. Build it on the week's most striking outcome or detail
  (a number, a refusal, an irony), short enough for one or two lines. Example: "A 14-year-old bug and a $50 million “no”".
- `dek:` the three biggest stories in one sentence, then "Plus …" for the rest. Search engines show it under the title.
- `date:` the day you publish (today).
- `action:` the one thing readers should do this week, in one sentence (no "If you only do one thing" lead-in;
  the box label says it).
- `stories:` 5 or 6, most important first. For each:
  - `title:` plain and specific ("A Japanese host refuses to pay a $50 million ransom").
  - `type:` one of the types above.
  - `text:` a YAML list of **2 short paragraphs** in plain words: what happened, then what's new or why now.
    Explain what a thing is in a few words ("PHP is the language behind a huge part of the web"). Keep CVE
    numbers, version lists and statistics out of the main text.
  - `notes:` **2 side notes**, each `label` + `text`: one striking or fun detail (labels like "The wild part",
    "The ransom note", "In numbers", "The clever part") and one term explained in plain words, with the term
    itself as the label ("Single sign-on (SSO)", "Bulletproof hosting").
  - `why:` one or two short sentences. `do:` one or two short sentences, if there's something to do (CVE
    numbers and fixed versions can go here).
  - `sources:` each `name` ("Outlet: headline", in the outlet's own language) and `url`.
  - `incident:` the folder of the story's breakdown: the one you write with this digest (section 6), or one that
    already exists in `content/news/incidents/` for the same incident. Leave it out only for a story that gets no
    breakdown.
- The text below the second `---`: **one short paragraph** on the week's common thread.
- Keep short quoted names and amounts together with a non-breaking space so they don't split across lines
  (e.g. «від ДТЕК», „od DTEK”, "$50 млн").

## 4. Ukrainian and Polish

Write `ua.md` and `pl.md` with the same structure. Translate the idea, not the words: the title has to be catchy in
each language too. Follow `docs/claude/translation.md` (terms, quotes, dashes, russia lowercase).

## 5. Fun story of the week

`fun:` in each language file: `title`, `text` (2 or 3 short paragraphs), `sources` (just the outlet name, e.g.
"The Record"). A light, true, security-related story from **the same week** that isn't one of the stories: an
irony, an odd detail, good guys pulling off a clever hack. Never something where people were really hurt
(a hospital attack), and nothing explicit. It sits in a narrow column, so keep it short; in UA and PL put a
non-breaking space before each " — " so no line starts with a dash. Two sources where possible.

## 6. A breakdown for each story

Every story gets its own full page, `content/news/incidents/<folder>/{en,ua,pl}.md`, on the same branch. Write it as
`incident-breakdown.md` says in sections 2, 3 and 5 (research, the fields, Ukrainian and Polish); its sections 1 and 4
(other branches, linking from an older week) don't apply here. The fun story gets no breakdown.

- **Order of work, so nothing is lost if the run stops early:** finish the digest first (sections 1 to 5), run the
  checks, commit it and push the branch, but don't open the pull request yet. Then do the breakdowns one story at a
  time, most important first: write the three files, add `incident: <folder>` to that story in all three week files,
  build, commit (`News: <short name> breakdown`) and push.
- **Go deeper than the story**, don't repeat it: who was hit and how, a dated timeline, how the attackers got in
  (or "Not known yet"), the impact, ATT&CK techniques a source supports, what defenders can detect and check, and
  what's still unknown. Look for primary sources (the victim, officials, the researchers who found it) beyond the
  story's two; the breakdown's facts follow the same rules as the digest's.
- `date:` when it became public (inside the week), `published:` today, `status:` usually **unfolding** or
  **confirmed** (incident-breakdown.md, section 3).
- **Folder name:** short, lowercase, dashes, who + what (`air-alert-app-hack`). Check `content/news/incidents/`
  first. If the incident already has a breakdown (a story that goes on from an earlier week), don't write a second
  one and don't change the old one (the automatic publish refuses changes to published breakdowns): link the story
  to the existing folder, and say in the report what's new, so the owner can ask for an update.
- **Too little to go on:** if you can't confirm what happened beyond the story itself (no primary source, nothing
  past the first reports), leave that story without a breakdown and without `incident:`, and say which and why in
  the pull request and the report. That isn't a reason to hold the digest back.
- Every breakdown folder must be linked from a story (`incident: <folder>` in en.md); the automatic publish refuses
  a breakdown that no story links to.

## 7. Check and publish

1. `npm ci`, `npm run build:all-langs`, `npm run build`, `npm run check:links`: all must pass.
2. Re-read every file once more, the week and each breakdown: every number, name, time and date against your
   sources; russia lowercase; nothing personal; no story from outside the week.
3. The branch holds only `content/news/weeks/$week/` and the new breakdown folders (`git status` clean, nothing
   else changed). Commit messages: `News: week NN digest`, then `News: <short name> breakdown` for each breakdown.
4. Push `claude/digest-$week` and open a pull request into `main`, titled `News: week NN digest`. In the
   description: the story titles, each with its breakdown's folder (or why it has none), the fun story and the main
   sources. The workflow checks it right away and publishes the digest and its breakdowns together at 01:11 (or at
   the next hourly run).
5. If you weren't confident (fewer than 5 solid stories, a source you couldn't verify, a failing check), open it as
   a **draft** instead and explain why. It then waits for the owner.

Finish with a short report: the week, the title, the story list with each breakdown (or why there's none), the pull
request link, and anything you left out on purpose (and why).
