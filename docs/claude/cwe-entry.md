# Playbook: one CWE write-up

The CWE section (`/cwe/`) explains the common software weaknesses behind the OWASP Top 10:2025, for people studying
web pentesting and bug bounty. One weakness at a time, **done properly**: researched, beginner-friendly, and written
for both attackers and defenders. The list page already holds all 249 CWEs; a write-up turns one of them into a link.

## 1. Which weakness

The 249 CWEs and their ten categories are in `content/cwe/owasp-2025.yml`. **`content/cwe/plan.yml` groups them into
67 pages** (50 full write-ups, 17 short ones), in the order they're written: each page has a main CWE (its folder)
and `covers:`, the variants and close relatives it also explains. Every CWE is on exactly one page; the build stops
if one is missing or doubled. Don't regroup on the fly — if a grouping looks wrong, change plan.yml on purpose and
say so in the pull request.

```
python3 scripts/cwe/next.py          # the whole plan (✓ = written) and the next page
python3 scripts/cwe/next.py --next   # "<cwe> <kind> <covers>"
```

Work on a branch `claude/cwe-<id>`. A **full** page has everything in section 4; a **short** one (rarely a web
problem, or a narrow topic) keeps the same parts but shorter, and may skip the code examples if there's no useful
web example.

## 2. How it works on the site

- One write-up is `content/cwe/<id>/<lang>.md`, where `<id>` is the CWE number (it must match the `cwe:` field).
- It gets three addresses: `/<lang>/cwe/<id>/` (everything), `…/<id>/attack/` and `…/<id>/defend/` (the other side's
  parts left out). The list `/cwe/` has the same three views, and a reader's choice carries from page to page.
- **Front matter:** `title` (plain and searchable, not the official CWE name), `cwe`, `name` (MITRE's official name,
  kept in English), `also` (IDOR, BOLA…), `owasp` (`A01:2025` — must be the CWE's real category in the yml), `api`
  and `top25` (optional), `dek`, `date`, `sources` (name + url, at least one), optional `revisions`. Which other
  CWEs the page explains comes from plan.yml, not the front matter; explain each of them somewhere in the text.
- **Marking a side:** a `## heading` that ends in `<!-- attack -->` or `<!-- defend -->` makes that whole part (up to
  the next `##`) belong to one side. Everything else is shown to everyone. Don't put a margin note right after a
  marked heading (the build stops and says so); put a sentence between them.
- The CWE names and category descriptions on the list page are in `content/cwe/owasp-2025.yml` and
  `content/pages/cwe/<lang>.md`. The build checks that every `cwe:` matches its folder, sits in its category, and is
  a page of its own in plan.yml. Once a page is written, all of its CWEs (main and covered) link to it on `/cwe/`.

## 3. Research (verify every fact in this run)

1. **MITRE's CWE page**, `https://cwe.mitre.org/data/definitions/<id>.html`: the name, the description, the parent and
   child CWEs (the "confuse with" table), and the observed examples. It can't be fetched directly — find it through a
   web search and open a result, or read a mirror.
2. **OWASP**: the Top 10:2025 category page, the matching Cheat Sheet, the Web Security Testing Guide section, and the
   API Top 10 entry when there is one.
3. **MITRE's latest CWE Top 25** for the rank, if it's on the list.
4. **A real, checked incident** for the "It happened for real" section: a primary source (a company filing, a
   regulator's order, a named researcher's write-up), never a number from memory.
5. The matching **PortSwigger Web Security Academy** topic, to link for hands-on practice.

## 4. How to write it (the shape, from CWE-639)

Keep the house rules in `CLAUDE.md`: plain, friendly English, short sentences, explain a term the first time, US
spelling, concrete over general. Then:

- **Open for a beginner.** A one-line everyday analogy, then what the weakness is in plain words, then where it sits
  (OWASP, API Top 10, CWE Top 25, who can do it). A short "Words you'll need" list when the topic needs jargon.
- **Build up the understanding:** how it works step by step, where it hides, then real vulnerable code with a
  line-by-line "why", the fix next to it, and a subtler variant. This part is for everyone.
  Requests in ```http blocks, responses and other data in ```json blocks laid out on several lines (CLAUDE.md).
- **The attack side** (`<!-- attack -->`): how testers think about it, what catches their eye, the method *in
  principle* (two accounts you control; a proxy to see and resend requests), how to tell a real finding from a false
  alarm, how bad it is (a small CVSS table), and how to prove and report it responsibly.
- **The defense side** (`<!-- defend -->`): fix it at the root, layers that help but aren't the fix, catch it before
  release, notice it in production.
- **Close** with a "confuse with" table (link each related CWE), the real incident, Roadmap job links
  (`/en/roadmap/<field>/#<job>`), and where to practice.

**The line on the attack side (do not cross it):** explain at the level of *method and understanding* — what to look
for, why it's exploitable, how to judge and report a finding. No ready-to-run payloads, no copy-paste exploit
strings, no step-by-step "change this, send this, here's the data you get" walkthrough, even with made-up names.
Describe malicious input in words when you must name it. Send readers to the PortSwigger lab for the hands-on
keystrokes — that's its job. A write-up that drifts into an operational recipe is wrong for this site (and trips
safety filters); keep it teaching, not attacking.

## 5. Translate (UA and PL)

Every write-up is English, Ukrainian and Polish, like the rest of the site; translate by meaning (see
`translation.md`). CWE numbers, the official `name`, tool names (Burp Suite, OWASP ZAP) and code stay in English.
Useful terms: weakness = вразливість / słabość (the section is "Слабкі місця" / "Słabości"); authorization =
авторизація / autoryzacja; authentication = автентифікація / uwierzytelnianie; request = запит / żądanie. An English
write-up with no `ua.md`/`pl.md` yet shows in those languages in English, marked EN, like the guides.

## 6. Build, check, screenshot, open a draft

```
npm ci
npm run build:all-langs   # Polish on, then the link check
npm run build             # must end with "CSP check passed"
npm run check:links       # 0 broken
```

Screenshot `/en/cwe/`, `/en/cwe/<id>/` and `/en/cwe/<id>/attack/` at desktop and phone, light and dark; check the
attack and defense parts show the right coloured tag, the contents list drops the other side's headings in the
`/attack/` and `/defend/` views, and nothing scrolls sideways. Open a pull request on `claude/cwe-<id>`; the owner
reviews and merges. If a write-up is English-only so far, say so and open it as a **draft**.
