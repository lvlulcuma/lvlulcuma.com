# Playbook: topic ideas for the next monthly article

A scheduled run proposes ideas early each month. The article itself goes out on the **last Monday of the month**
(`npm run new-article` sets that date). This run only proposes ideas: it doesn't create files or open a pull request.
The owner picks one by replying in the run's chat; only then write the article (section 3).

## 1. Look at what exists

- Past articles: `content/articles/*/en.md` (title, `topic:`, `date:`). Don't repeat an angle already covered.
- Topics an article can have (`topic:`): `research`, `api`, `lab` (`TOPICS` in `src/i18n/ui.ts`).
- Related material on the site that an article can build on or link to: `content/research/`, `content/guides/`,
  the lab pages (`content/pages/lab*`), recent weeks in `content/news/weeks/` and incident breakdowns.
- The site covers cybersecurity broadly. Don't frame anything as "the author's main focus".

## 2. Propose three ideas

Research the past month's news and trends first, so at least one idea has a clear "why now". For each idea give:

- **Working title**: plain and specific, the way the existing articles are titled.
- **Topic** (`research`, `api` or `lab`) and **who it's for** (a beginner, a defender, a developer…).
- **What the reader can do afterwards**: one sentence. Practical beats theoretical.
- **Why now**: the news, report or change that makes it timely (with a link), or "evergreen".
- **Outline**: 4 to 6 section headings.
- **Sources to build on**: 2 to 4 good ones (standards, official docs, vendor research, data sets).
- **What it needs**: hands-on lab work, a data set, or reading only; and roughly how long.

Make the three different from each other (for example one hands-on lab, one research piece with numbers, one
explainer). Finish by recommending one and saying why, in a sentence or two.

## 3. After the owner picks

Only when the owner has chosen in this conversation: run `npm run new-article`, write the article in English,
Ukrainian and Polish following CLAUDE.md and `docs/claude/translation.md`, keep `draft: true` in the front matter,
run the checks, and open a pull request from `claude/article-YYYY-MM` for the owner to review. Never publish an
article without that review.
