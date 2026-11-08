# lvlulcuma.com: instructions for Claude

A static cybersecurity site: weekly news digests and incident breakdowns, monthly articles, step-by-step guides,
a career Roadmap (fields → jobs → what to learn), research and a lab. Astro, fully static, **no JavaScript**,
hosted on Cloudflare (every merge into `main` deploys). README.md explains the site for people; this file and
`docs/claude/` are the working rules for Claude, including scheduled runs that nobody is watching.

## How changes reach the site

- **Never push to `main` yourself.** Work on a branch named `claude/<short-topic>`, commit, push, and open a pull
  request. The site owner reviews and merges.
- **One exception: the weekly digest, with a breakdown for each of its stories.** It goes on a branch named exactly
  `claude/digest-YYYY-wNN` and touches only `content/news/weeks/YYYY-wNN/` and the new breakdown folders written
  with it (`content/news/incidents/<folder>/`, each linked from a story of that week). It's written just after
  midnight on Monday (Eastern Time). `.github/workflows/digest-auto-publish.yml` checks the pull request as soon as
  it opens and merges it by itself at 01:11 that Monday (or at the next hourly run, if it's ready later) when every
  check passes. Anything else in that pull request (any other file, a breakdown no story links to, a change to a
  breakdown that's already published) stops the automatic merge.
- **Other incident breakdowns** (a later update, or one written outside the digest) are normal pull requests,
  unless the owner asked for that breakdown to be published automatically. Only then use a branch named
  `claude/autopublish-incident-<folder>`: the same workflow publishes it (rules in `docs/claude/incident-breakdown.md`).
- If you aren't confident in a piece of work (thin sources, a check you can't make pass, a rule you had to bend),
  open the pull request as a **draft** and say why in its description. Drafts are never published automatically.
- Commit messages: `Area: what changed`, for example `News: week 45 digest` or `Roadmap: what to learn for Threat Intelligence Analyst`.

## Checks before every pull request

```
npm ci
npm run build:all-langs   # every language on (Polish is written but switched off), then the link check
npm run build             # as published; must end with "CSP check passed"
npm run check:links       # 0 broken
```

Don't commit `dist/`, `node_modules/`, temporary files or screenshots. `content/settings.yml` must stay unchanged
(`build:all-langs` restores it by itself).

## Rules for everything you write

- **Plain, friendly English**: short sentences, everyday words, explain a term in a few words the first time.
  US spelling (organization, behavior). Concrete beats general: name the tool, the number, the date.
- **Three languages**: every page is written in English (`en.md`), Ukrainian (`ua.md`) and Polish (`pl.md`);
  guides are English-only for now. Ukrainian is labelled **`ua`** (not `uk`) in folders, URLs and labels.
  **Translate by meaning, not word for word**; check the context. Terms and style: `docs/claude/translation.md`.
- **russia is always lowercase** in every language (russia, russian, росія, rosja), except proper names like the
  marketplace "Russian Market". Avoid starting a sentence with it.
- **No page may say which languages it's in.** The language switch is enough.
- **Nothing personal about the author** on the site or in this repository: not where he lives, not which devices
  he owns, not his schooling or employers, and no "main focus" of his work. First-person wording ("I test…") is fine.
  The only contact address is lvlulcuma@outlook.com (also for security reports).
- Facts must come from sources you actually read in this run; keep at least two good sources per news story
  where possible, and put them in the file's `sources:`. Never invent quotes, numbers or dates.
- **Code and data in code blocks look the way developers see them:** JSON (and YAML, HTTP bodies and the like) on
  several lines, one key or item per line, two spaces per level. The build lays out a one-line ```json block by
  itself, but write it laid out anyway. A short piece quoted inside a sentence (`"accountId": 57`) is fine inline.
- Keep the design as it is: use the existing CSS variables and components, don't add JavaScript or inline styles
  (the CSP check fails on them).

## Playbooks

| Task | Playbook |
|---|---|
| Weekly news digest and its breakdowns (scheduled, Mondays at midnight) | `docs/claude/weekly-digest.md` |
| An incident breakdown (one big incident, its own page) | `docs/claude/incident-breakdown.md` |
| Topic ideas for the next monthly article | `docs/claude/article-topics.md` |
| One Roadmap job's "what to learn" | `docs/claude/roadmap-job.md` |
| One CWE weakness explained (attack + defense) | `docs/claude/cwe-entry.md` |
| Monthly site check | `docs/claude/site-check.md` |
| Words and style in Ukrainian and Polish | `docs/claude/translation.md` |

## Where things are

- `content/`: all text. Pages in `content/pages/<page>/<lang>.md`, interface words in `content/ui/<lang>.yml`,
  news in `content/news/weeks/` and `content/news/incidents/`, articles in `content/articles/`, guides in
  `content/guides/`, the Roadmap in `content/roadmap/{fields,jobs,topics}/`, the CWE write-ups in `content/cwe/<id>/`
  (the categories and CWE names are in `content/cwe/owasp-2025.yml`). `content/README.md` maps pages to files.
- `src/`: Astro pages, components, `src/lib/*.ts` helpers, `src/styles/global.css`. Content schemas: `src/content.config.ts`.
- `scripts/`: build steps (`check-csp.mjs`, …), `check-links.mjs`, `build-all-langs.mjs`, and `scripts/roadmap/`
  (`next_job.py`, `topic_inventory.py`, `write_job.py`).
