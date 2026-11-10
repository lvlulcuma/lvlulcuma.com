# Playbook: an incident breakdown

A breakdown is a full page about one big incident: `content/news/incidents/<folder>/{en,ua,pl}.md`, shown at
`/en/news/incidents/<folder>/`. README.md ("An incident breakdown") lists every field. A published breakdown such
as `binance-crypto-theft` shows the layout: copy its structure (the fields and their comments), never its content.

## 1. How it goes out

- **With the weekly digest:** each story of the week gets a breakdown, written by the digest run on the digest's
  own branch and published with it (`weekly-digest.md`, section 6). Sections 2, 3 and 5 below apply; sections 1
  and 4 don't.
- **Normally** (a breakdown written on its own, or an update to a published one): a pull request from
  `claude/breakdown-<folder>` that the owner reviews and merges.
- **Only when the owner asked for this breakdown to be published automatically:** use the branch
  `claude/autopublish-incident-<folder>`. It may change only `content/news/incidents/<folder>/` and, to add a story
  that links to it (section 4), one week that's already published. `.github/workflows/digest-auto-publish.yml`
  publishes it if every check passes, from 01:11 Eastern Time at the next scheduled run (hourly on Mondays), or
  when the owner runs the workflow by hand. Never use this branch name otherwise.
- Either way, if you aren't confident (you can't confirm what happened, sources are thin, a check fails), open
  the pull request as a **draft** and say why at the top of its description. Drafts are never published
  automatically.
- Folder name: short, lowercase, dashes, who + what (`air-alert-app-hack`). It becomes the address, so don't
  rename it later.

## 2. Research

- Primary sources first: the victim's own statement, official bodies (CERT-UA, the State Service of Special
  Communications (SSSCIP), the SSU, police, ministries, CERT Polska, CISA), and reports from the security firms
  that investigated. Then good news outlets. Read every source you use; two sources per fact where possible.
- **Keep what's confirmed apart from what's claimed.** A group taking credit, an anonymous insider, an official's
  first guess: say who said it ("the Air Force said the app had probably been tampered with"), or put it in
  `unknown:`. Never turn a guess into a fact, and don't name a culprit nobody has named.
- Write down when things happened in local time with the zone where the hour matters ("22:47 Kyiv time"). The
  timeline itself takes dates only.
- Don't link to leaked data or the attackers' channels, and don't spread their message: say in a few words what
  it claimed (and that it was false, if it was), without repeating it in full.

## 3. The fields

- `title:` plain and specific, can be catchy; `dek:` one sentence with the key facts.
- `type:` the closest of: ransomware, breach, supply-chain, accounts, vulnerability, phishing, ddos, espionage,
  takedown, rules.
- `status:` **unfolding** while facts are still coming in (most new breakdowns), **confirmed** once the victim or
  officials have confirmed what happened, **report** once a full report is out.
- `date:` when it became public; `published:` today.
- `who`, `sector`, `entry` (how they got in: "Not known yet" when nobody has said), `impact`.
- `timeline:` oldest first. Earlier events go in only if a source connects them, or as plainly labelled context.
  Events on the same day share one date on the page, so give each its own entry with that date.
- `attack:` only techniques a source supports, each with its official ATT&CK ID and name (check them on
  attack.mitre.org). If nobody knows yet how it was done, leave `attack:` out; an empty section isn't shown.
- `detect:` and `check:` practical points for readers (teams running similar services, and ordinary users where
  it fits). Nothing invented.
- `unknown:` the open questions. On a fresh incident this list matters most.
- `jobs:` and `topics:` existing folder names from `content/roadmap/jobs/` and `content/roadmap/topics/`
  (`ls` them; a wrong name stops the build).
- `sources:` primary sources first; `name` is "Outlet: headline" in the outlet's own language.
- Below the second `---`: "What happened", a few short paragraphs in plain words.
- When you update a published breakdown, change `status:` or the text and add a `revisions:` line (date + note).

## 4. Linking it from a week

If the incident happened in a week that's already published, add a story about it to that week **in the same
pull request**: as the **last** story (so the existing story numbers and links stay the same), with
`incident: <folder>`, written like the other stories (`weekly-digest.md`, section 3). Add a `revisions:` entry to
the week (today's date, a note like "Added the Air Alert app hack."). Don't change the week's title, date or
other stories.

## 5. Ukrainian and Polish

Same as the digest: translate by meaning (`translation.md`), russia lowercase, a non-breaking space before " — "
where a line could start with a dash, and the Ukrainian names of Ukrainian things as Ukrainians use them
(«Повітряна тривога», not a translation back from English).

## 6. Check and open the pull request

1. `npm ci`, `npm run build:all-langs`, `npm run build`, `npm run check:links`: all must pass.
2. Re-read every file once more: each fact, number, time and name against your sources; nothing personal about
   the author.
3. Commit only the incident folder (and the week folder from section 4), message `News: <short name> breakdown`.
4. Open the pull request with the REST API (`gh pr create` doesn't work in these sessions):
   `gh api repos/lvlulcuma/lvlulcuma.com/pulls -X POST -f title=… -f head=<branch> -f base=main -F body=@<file>`
   (add `-F draft=true` for a draft). In the description: what happened in three lines, what's confirmed and what
   isn't, and the main sources.
