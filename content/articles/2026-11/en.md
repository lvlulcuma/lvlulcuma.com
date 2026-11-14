---
title: "Three days or 80? How fast new bugs get attacked"
date: 2026-11-30
topic: research
dek: "This year's reports put the time from a bug going public to the first attacks anywhere between minus seven days and 80 days. I counted every bug on CISA's list of attacked bugs to find the number worth planning around."
draft: true           # remove this line (or set false) to publish
# revisions:          # after publishing, add a line for each change (the page shows the latest date)
#   - date: 2026-12-02
#     note: "Fixed a typo in the table"
---

On Thursday, 5 November, OpenSSH shipped an emergency fix for [\*sshole](/en/news/incidents/openssh-alpine-sshole/), a bug
that let attackers into some Alpine Linux servers with an over-long password. Less than nine hours after the bug's public
record went out, a decoy server run by the threat intelligence firm Previdian logged the first attempt to use it
([The Hacker News](https://thehackernews.com/2026/11/hackers-exploited-openssh-sshole-flaw.html)). Four days later,
CISA, the US cyber defense agency, added it to its list of bugs under attack.

So how long do you really have once a bug goes public? It depends on whom you ask.

## Three reports, three answers

<div class="tablewrap">

| Report | Clock starts | Clock stops | Answer |
|---|---|---|---|
| [Rapid7](https://www.rapid7.com/blog/post/tr-q3-2026-threat-update-attackers-exploiting-vulnerabilities-within-3-days/) | The bug goes public | First attacks | 3 days (average) |
| [VulnCheck](https://www.vulncheck.com/blog/state-of-exploitation-1h-2026) | The CVE is published | First proof of attacks | 80 days (median) |
| [Mandiant](https://www.helpnetsecurity.com/2026/03/24/mandiant-m-trends-2026-report/) | The fix comes out | First attacks | −7 days (average) |

</div>

None of them is wrong. They count different bugs and start the clock at different moments. Rapid7's October report
looked at the 43 serious bugs first attacked from July to September. VulnCheck's July report uses its own list, which is
much longer (495 bugs in the first half of 2026) and includes bugs nobody touched until months or years later; that pulls
its middle value up. Mandiant, part of Google, starts the clock when the fix comes out. So many attacks now begin before
there is a fix that its average for 2025, published in March, fell below zero.

> [!ASIDE] CVE
> The public ID a security bug gets, like CVE-2026-123158 for \*sshole. For most defenders, its publication is the moment
> they first hear about the bug.

> [!ASIDE] Median
> The middle value: half the bugs were faster, half slower. Unlike an average, a few very slow bugs can't drag it far.

## My count: 1,779 bugs on CISA's list

CISA keeps a public list of bugs it has proof of real attacks for: the
[Known Exploited Vulnerabilities catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog), or KEV. A bug
only gets on it with a CVE, reliable evidence that someone used it to run code on a system without permission, and a fix
to apply. [Scans and proof-of-concept code don't count](https://www.cisa.gov/known-exploited-vulnerabilities).

I took all 1,779 bugs on the list on 10 November. For each one, I counted the days from the day its CVE was published
in [NVD](https://nvd.nist.gov/), the US National Vulnerability Database, to the day CISA added it. Both data sets are
free, so anyone can repeat this.

> [!ASIDE] Why CISA's list
> It's public, it goes back to 2021, and it only takes bugs with solid proof. That makes it short: VulnCheck counted
> 884 bugs first attacked in 2025, while CISA added 245
> ([VulnCheck](https://www.vulncheck.com/blog/state-of-exploitation-2026)).

It's also late. CISA adds a bug once it has proof, not on the day of the first attack, so the real wait before the first
attack was the same as in the numbers below, or shorter. \*sshole was tried within nine hours and listed after four days.
The PHP bugs nicknamed [PHP2Shell](/en/news/2026-w44/) were tried four days before their fix, according to Amazon, and
listed five days after it ([The Register](https://www.theregister.com/a/5305681)).

To compare like with like, the table counts only new bugs: those added within a year of going public. They make up most
of the list, 83% of this year's entries. The 2026 row runs to 10 November.

## The speed hasn't changed. The number has.

<div class="tablewrap">

| Year | New bugs | On day 0 | Within a week | Within a month | Median |
|---|---|---|---|---|---|
| 2023 | 141 | 31% | 60% | 73% | 4 days |
| 2024 | 141 | 28% | 55% | 67% | 6 days |
| 2025 | 189 | 26% | 51% | 67% | 7 days |
| 2026 | 244 | 25% | 52% | 73% | 6 days |

</div>

**The race lasts about a week, and it has since 2023.** For a typical new bug, about six days pass between going public
and CISA's proof of attacks. Half are on the list within a week. In four years of data, that hasn't sped up.

> [!ASIDE] Faster this year?
> Maybe. For new bugs added from January to March, the median was 11 days; from July to September, 5 days. The groups
> are small (55 and 91 bugs), so treat it as a hint.

**A quarter are attacked before you hear about them.** "On day 0" means CISA added the bug on the day its CVE went
public, or even earlier: it was already under attack when most defenders first heard of it. This year, Microsoft (18
bugs), Cisco (10) and Google (6) lead that group. No patch deadline helps against these.

**What has changed is the number.** From 1 January to 10 November, CISA added 295 bugs: 36% more than in the same
stretch of 2025 (217), and nearly twice as many as in 2024 (154). September brought 43, the busiest month since mid-2022,
when CISA was still loading old bugs into its new list. Google's threat intelligence group sees the same jump:
[141 attacked bugs from January to August, against 127 in all of 2025](https://therecord.media/google-vulnerabilities-cyberattacks-ai).

> [!ASIDE] New names on the list
> 2026 brought bugs in AI tools (four in Langflow, three in LiteLLM, plus MLflow and Ray), and poisoned developer
> packages, which CISA files as "embedded malicious code": eslint-config-prettier, Nx Console and Trivy.

## Old bugs never retire

The other 17% of this year's entries are old bugs. 41 were more than two years old when CISA added them, and 23 more than
five. In May, the list gained CVE-2008-4250, the Windows bug the Conficker worm spread through from late 2008. Microsoft
had [fixed it on 23 October 2008](https://learn.microsoft.com/en-us/security-updates/securitybulletins/2008/ms08-067),
more than 17 years earlier. The oldest bug added this year is a 2008 flaw in Cisco's router software, listed in July.

CISA doesn't say when each old bug was attacked, only that there is proof it was. But a bug on the list is a bug
attackers know how to use, and old systems are the ones nobody checks: a forgotten router, a Windows server in a corner
that "just works".

## What to do with these numbers

My rule of thumb, based on the count:

1. **Open to the internet and already attacked** (on the KEV list, or the vendor says "exploited"): fix it or take it
   offline within three days.
2. **Open to the internet, critical, no attacks yet:** within a week. Half of the new bugs that do get attacked are on
   CISA's list within seven days.
3. **Everything else:** your normal monthly cycle, plus a monthly check of all your systems against the KEV list, old
   ones included.
4. **For the quarter attacked before anyone hears about them,** no deadline helps. Keep what you can (admin pages,
   remote access) off the open internet, and keep logs, so you can check later whether someone got in.

Three days is also what CISA now asks of US federal agencies. In June, it replaced its old patching rules with a new
directive, [BOD 26-04](https://cyberscoop.com/cisa-vulnerability-remediation-directive-bod-26-04/). It keeps the
three-day deadline for the worst case: a bug that is already attacked, can be attacked automatically, gives at least
partial control of the system, and sits on a machine open to the internet. CISA said AI is helping both researchers and
attackers find new bugs much faster. Its list shows the change: in 2025, almost every entry came with a 21-day deadline;
since June, three in four new entries carry three days.

The headlines will keep disagreeing. When the next one says "attacked within X days", the first question to ask is
where it started the clock.
