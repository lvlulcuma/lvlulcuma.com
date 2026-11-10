# Where to edit the site's text

Every page has its own folder. Inside, `en.md`, `pl.md` and `ua.md` are the English, Polish and Ukrainian versions.
Polish is switched off for now (see `languages:` in `settings.yml`): keep its files, they just aren't published.

| Page on the site | Folder |
|---|---|
| Home `/en/` | `pages/home/` (headline, intro, the terminal menu lines, the Job spotlight words, and the "New this week" box) |
| News `/en/news/` | `pages/news/` (title, intro, and the section headings and notes on every incident breakdown); weeks are in `news/weeks/`, incidents in `news/incidents/` |
| All weekly digests `/en/news/weeks/` | `pages/news/` (`weeksIntro:`); the list builds itself from `news/weeks/` |
| A weekly digest `/en/news/2026-w43/` | `news/weeks/2026-w43/` (the folder name is the year and ISO week number) |
| An incident breakdown `/en/news/incidents/<name>/` | `news/incidents/<name>/` |
| Articles list `/en/articles/` | `pages/articles/` (intro only; the articles are in `articles/`) |
| An article `/en/articles/2026-10/` | `articles/2026-10/` |
| Roadmap `/en/roadmap/` | `pages/roadmap/` (intro, group and level headings, sources line); each field is in `roadmap/fields/<name>/` |
| A field's page `/en/roadmap/<field>/` | `roadmap/fields/<field>/` (title, summary); its jobs are in `roadmap/jobs/<name>/`; level headings are `levels:` in `pages/roadmap/` |
| A job's "what to learn" page `/en/roadmap/<field>/<job>/` | `roadmap/jobs/<job>/learn.yml` (topic folder names for each level, `hire:`, `sources:`); each topic's title and summary are in `roadmap/topics/<topic>/`; level headings are `learnLevels:` in `pages/roadmap/` |
| A topic's own page `/en/roadmap/topics/<topic>/` | `roadmap/topics/<topic>/` (built once there is text under the dashes) |
| Guides list `/en/guides/` | `pages/guides/` (intro and the line under each category; the guides are in `guides/`) |
| A guide `/en/guides/<name>/` | `guides/<name>/` |
| Research list `/en/research/` | `pages/research/` (intro only) |
| A research project `/en/research/<name>/` | `research/<name>/` |
| Lab `/en/lab/` | `pages/lab/` (and every idea in `lab/`) |
| Get started `/en/lab/start/` | `pages/lab-start/` |
| A lab idea `/en/lab/<idea>/` | `lab/<idea>/` (its downloads: `public/lab/<idea>/`) |
| Practice safely and legally `/en/lab/rules/` | `pages/lab-rules/` |
| About `/en/about/` | `pages/about/` |
| Contact `/en/contact/` | `pages/contact/` |
| How this site is secured `/en/colophon/` | `pages/colophon/` |
| Menu and small interface words (every page) | `ui/` |
| Published languages, email, GitHub and Medium links, PGP | `settings.yml` |

**In each file:**
- Between the two `---` lines: short fields like `headline: "…"`. Change the text inside the quotes only.
- Below the second `---`: normal Markdown (paragraphs, lists, tables), shown as the page body.
- Lines starting with `#` between the `---` lines are notes for you and never appear on the site.

New weekly digest or incident breakdown: see "Adding a weekly digest" and "Adding an incident breakdown" in the main README.md. Entries with `example: true` are made-up samples, labelled as such on the page; there are none left.

New monthly article: run `npm run new-article` from the project folder. It creates the next month's folder here in `articles/`.

"New this week" on the home page fills itself with whatever was published or changed in the last 7 days. For news it can't see (a new section, a new feature), add an announcement at the top of `announcements:` in `pages/home/en.md` (and `ua.md`, `pl.md`); it shows for 7 days from its date.
