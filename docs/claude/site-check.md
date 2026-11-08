# Playbook: the monthly site check

A scheduled run looks the whole site over once a month and reports back. It fixes only small, clear problems,
in one pull request for the owner to review; everything else goes in the report.

## 1. Build and links

`npm ci`, `npm run build:all-langs`, `npm run build`, `npm run check:links`. Report any failure with the exact error.

## 2. Outside links

Collect the external links in `content/` (sources in news weeks and incidents, Roadmap `sources:`, article links).
Spot-check the newest ones first (this month's weeks and anything changed recently) and a sample of older ones.
List links that no longer work or now point somewhere else.

## 3. Facts that may have changed

- Incident breakdowns with `status: unfolding`: has the story moved on (a full report, an arrest, new numbers)?
  Suggest the update and a `revisions:` entry; don't rewrite the facts in the check itself.
- The latest two or three weekly digests: any story where an important fact turned out differently? List it.
- Roadmap job pages: certifications, laws and exam objectives named in summaries that have since changed
  (a new exam version, a new law in force).
- The practice lab (`public/lab/compose.yaml`, explained on `content/pages/lab-setup/`): are the four apps
  (Juice Shop, WebGoat, VAmPI, DVGA) and crAPI still maintained, with the same image names, ports and start steps
  in their own READMEs? List what changed; the page and the file must stay in step, in all three languages.

## 4. Upkeep

- Open pull requests (`gh pr list`): Dependabot updates waiting to be merged, or anything stale.
- Drafts that should have gone out: articles still `draft: true` whose date has passed.
- The next article's date and the home page blocks look right (an article planned for the last Monday of this month).

## 5. Fix only the small, clear things

On `claude/site-check-YYYY-MM`: broken internal links, an outside link that moved (same page, new address), a typo.
Run the checks again and open **one** pull request, `Site check: <month>`, listing every change. Anything that
needs judgement (rewording, new facts, design) goes in the report only.

## 6. Report

Short and skimmable: what's fine, what's broken, what may be outdated (with links), what you fixed (and the pull
request link), and what needs the owner's decision.
