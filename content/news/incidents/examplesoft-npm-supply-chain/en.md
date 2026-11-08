---
# An incident breakdown → lvlulcuma.com/en/news/incidents/examplesoft-npm-supply-chain/
# MADE-UP EXAMPLE (example: true): it shows the layout. Delete this folder once real breakdowns exist.
example: true
title: "A poisoned update of ExampleSoft's npm package stole secrets from build servers"
dek: "Attackers phished a maintainer, published two versions of a popular package with a hidden install script, and collected tokens and cloud keys from every build that ran it. The cleanup is still going on."
type: supply-chain
status: unfolding       # unfolding | confirmed | report (the victim or investigators published a full report)
date: 2026-10-14        # when it became public
published: 2026-10-16   # when this breakdown was published
who: "ExampleSoft, maker of the example-date npm package, and the projects that install it"
sector: "Software"
entry: "A maintainer's npm login, stolen with a fake sign-in page"
impact: "Two malicious versions live for nine hours; secrets taken from an unknown number of build pipelines"
timeline:
  - date: 2026-10-12
    text: "A maintainer gets an email asking them to re-verify their npm account, and signs in on a look-alike page that also asks for the one-time code."
  - date: 2026-10-13
    text: "Versions 4.2.1 and 4.2.2 of example-date are published from the maintainer's account, each with a new `postinstall` script."
  - date: 2026-10-13
    text: "Nine hours later, a developer notices unexpected network calls during a build and reports the package."
  - date: 2026-10-14
    text: "npm removes both versions. ExampleSoft confirms the account takeover, resets its tokens and publishes a clean 4.2.3."
  - date: 2026-10-15
    text: "Researchers find the same script in three smaller packages maintained by other people."
attack:
  - tactic: "Initial access"
    id: T1566.002
    name: "Phishing: Spearphishing Link"
    text: "Sent the maintainer a link to a fake npm sign-in page that captured the password and the one-time code."
  - tactic: "Initial access"
    id: T1195.002
    name: "Supply Chain Compromise: Compromise Software Supply Chain"
    text: "Published two new versions of the package from the maintainer's account."
  - tactic: "Execution"
    id: T1059.007
    name: "Command and Scripting Interpreter: JavaScript"
    text: "A `postinstall` script ran by itself on every machine that installed the update."
  - tactic: "Credential access"
    id: T1552.001
    name: "Unsecured Credentials: Credentials In Files"
    text: "Read environment variables, `.npmrc` and cloud credential files on build servers."
  - tactic: "Exfiltration"
    id: T1041
    name: "Exfiltration Over C2 Channel"
    text: "Sent what it found over HTTPS to a server the attackers controlled."
detect:
  - "A dependency update that suddenly adds an install script (`postinstall`) when earlier versions had none."
  - "Build servers connecting to domains they have never contacted before."
  - "A new version published without the usual CI workflow, so it has no provenance statement."
check:
  - "Search lockfiles and CI logs for example-date 4.2.1 or 4.2.2."
  - "If any build installed them, rotate every secret that build could read: npm tokens, cloud keys, signing keys."
  - "Install from a lockfile with `npm ci` in builds, so a new version can't slip in unnoticed."
  - "Use `--ignore-scripts` in builds that don't need install scripts."
  - "Give build jobs short-lived credentials instead of long-lived tokens."
unknown:
  - "How many pipelines installed the bad versions during those nine hours."
  - "Whether the stolen secrets have been used yet."
  - "Who is behind it, and whether the three other packages were taken over the same way."
jobs: [appsec-engineer, devsecops-engineer, incident-responder, threat-intelligence-analyst]
topics: [software-supply-chain, phishing-analysis, incident-scoping, ioc-enrichment]
sources:
  - name: "MITRE ATT&CK: Compromise Software Supply Chain (T1195.002)"
    url: "https://attack.mitre.org/techniques/T1195/002/"
  - name: "npm Docs: Generating provenance statements"
    url: "https://docs.npmjs.com/generating-provenance-statements"
revisions:
  - date: 2026-10-20
    note: "Added the three smaller packages found with the same script."
---

example-date is a small npm package for formatting dates, and a lot of projects install it without thinking about it. On 13 October two new versions appeared. They worked like the old ones, but each carried a new `postinstall` script, which npm runs by itself during installation.

The script looked for secrets on the machine: environment variables, npm tokens and cloud credential files. Build servers are full of them, and they install packages all day, so that's where it did the most damage. Everything it found went to a server the attackers controlled.

The maintainer's account had been taken over a day earlier with a fake npm sign-in page that also asked for the one-time code, so MFA didn't help. Both versions were online for about nine hours. Anyone whose builds installed them should treat every secret those builds could read as stolen.
