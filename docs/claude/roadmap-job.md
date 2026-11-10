# Playbook: one Roadmap job's "what to learn"

The Roadmap lists 64 jobs; each gets a learning path, **one job at a time, done properly**: researched from real
frameworks and job ads, with concrete topics in three languages. A scheduled run does the next job in site order
and opens a pull request; the owner reviews and merges.

## 1. Which job

```
python3 scripts/roadmap/next_job.py          # the full list (✓ = done) and the next job
python3 scripts/roadmap/next_job.py --next   # "<job-slug> <field-slug> <level>"
```

Read the job's `content/roadmap/jobs/<job>/en.md` (title, summary, and `also:`, the other titles in job ads) and its
field's `content/roadmap/fields/<field>/en.md`. Work on `claude/roadmap-<job>`.

## 2. How it works on the site

- Levels (`LEARN_LEVELS`): beginner, knowledgeable, intermediate, advanced, expert. Each job has one file,
  `content/roadmap/jobs/<job>/learn.yml`: `updated:`, `hire:`, the five level lists of topic slugs, and `sources:`.
- `hire:` is the level employers usually expect (an "Enough to apply for this job" box appears after it):
  `knowledgeable` for entry jobs, `intermediate` for mid jobs, `advanced` for senior jobs (Expert is then the growth zone).
- Topics are shared between jobs: `content/roadmap/topics/<slug>/{en,ua,pl}.md`, with front matter `title:` and
  `summary:` only. A missing or duplicated topic stops the build.
- The job's page is `/<lang>/roadmap/<field>/<job>/`, and it exists once `learn.yml` exists.

## 3. Research properly, in this order

1. **NIST NICE Framework** work role(s) that match the job: task, knowledge and skill statements (a readable mirror:
   `https://performatron.risk-redux.io/nice_work_roles/<ID>`, e.g. PD-WRL-006 Threat Analysis). Use two roles when
   one doesn't cover the job.
2. **ENISA ECSF** profile that fits (12 profiles; the full PDF is at
   `https://enisa.europa.eu/publications/european-cybersecurity-skills-framework-role-profiles/@@download/fullReport`).
3. The main **certification's** current exam objectives.
4. Authoritative **guidance** for the job (NIST, CISA, ENISA, CIS, MITRE, SANS, FIRST…).
5. **EU rules** that apply (NIS2 and its implementing regulation, DORA, GDPR, CRA, AI Act…), and Polish law where it matters.
6. Real **job ads from this year**, including EU and Polish ones, to see which tools are actually asked for.

Verify facts (dates, numbers, article numbers) before they go into a summary.

## 4. Choose topics

- **Reuse before adding.** `python3 scripts/roadmap/topic_inventory.py` lists every shared topic with its titles in
  three languages and who uses it. Reuse a topic when the meaning is the same; add a new one only for genuinely new
  knowledge. If a shared summary is too narrow for this job, rewrite it (`UPDATE` in the module) so it fits every job
  using it, and list it in the pull request.
- Levels: beginner is the IT basics (for technical jobs the same seven: `networking-basics`, `web-basics`,
  `windows-basics`, `linux-basics`, `security-fundamentals`, `common-attacks`, `cryptography-basics`); knowledgeable
  is the core concepts and tools; intermediate and advanced are the bulk of the job; expert is strategy, programs
  and leadership. Typical sizes: 7 / 8–11 / 9–14 / 6–12 / 3–4, about 33–46 in total.
- Style: **title** short, plain, sentence case ("Making searches fast"). **Summary** one or two sentences, about 25–60
  words, saying exactly what to know or do, naming real tools, logs, event IDs, standards, laws and numbers.
  Plain and friendly, US spelling, **no straight double quotes** (use “ ” if ever needed).
- Translate titles and summaries by meaning (`docs/claude/translation.md`), matching the terms existing topics use.

## 5. Generate

Write a module outside the repository (e.g. `/tmp/topics_<short>.py`):

```python
HIRE = "intermediate"          # knowledgeable for entry jobs, intermediate for mid, advanced for senior
T = {}
def add(slug, en, ua, pl):
    assert slug not in T, slug
    T[slug] = {"en": en, "ua": ua, "pl": pl}

UPDATE = {}   # optional: {"existing-slug": {"en": (title, summary), "ua": (...), "pl": (...)}}

add("example-slug",
 ("English title", "English summary."),
 ("Український заголовок", "Український опис."),
 ("Polski tytuł", "Polski opis."))

LEVELS = {
 "beginner": ["networking-basics", "web-basics", "windows-basics", "linux-basics", "security-fundamentals", "common-attacks", "cryptography-basics"],
 "knowledgeable": [...], "intermediate": [...], "advanced": [...], "expert": [...],
}
SOURCES = [  # 5 or 6, each with a real URL; names are the same in every language
 ("NIST NICE Framework, <Role> work role (<ID>)", "https://www.nist.gov/itl/applied-cybersecurity/nice/nice-framework-resource-center"),
 ("ENISA ECSF, <Profile> profile", "https://www.enisa.europa.eu/publications/european-cybersecurity-skills-framework-role-profiles"),
]
```

Then, from the repository root: `python3 scripts/roadmap/write_job.py /tmp/topics_<short>.py <job> <field> <YYYY-MM-DD>`.
To redo it: `git checkout -- content/roadmap && git clean -fd content/roadmap`, fix the module, run it again.

## 6. Check and open the pull request

1. The checks in CLAUDE.md (`build:all-langs`, `build`, `check:links`).
2. Every topic shows on the page:
   `grep -o 'id="t-[a-z0-9-]*"' dist/en/roadmap/<field>/<job>/index.html | wc -l` equals the total in `learn.yml`.
3. Career moves are worked out by themselves from the paths (`jobMoves()` in `src/lib/roadmap.ts`), so a new path
   changes "Where you can go next" on its own page and on other jobs' pages. Look at the new job's moves and the moves
   that now point to it (`grep -l 'to-<job>/' dist/en/roadmap/*/*/index.html`) and check they make sense as real
   career moves; mention anything odd in the pull request instead of changing the rules.
4. Pull request `Roadmap: what to learn for <Job title>`, with: the topic count and how many are new, the hiring
   level, a few bullets per level highlighting the new topics, the sources, which shared topics changed (if any),
   the new job's moves, and the checks you ran.
