---
# An incident breakdown → lvlulcuma.com/en/news/incidents/optimizely-script-hijack/
title: "Optimizely: one hijacked script, 178 websites and a day of card skimming, crypto swaps and iPhone exploits"
dek: "On 16 November 2026, attackers abused a flaw in the sign-up process of Optimizely Web Experimentation to add their own JavaScript to customers' projects, so visitors to the websites of 178 organizations, including CNN, the BBC, Zoom and HSBC, loaded code that swapped crypto addresses, copied card numbers and targeted older iPhones."
type: supply-chain
status: confirmed       # unfolding | confirmed | report (the victim or investigators published a full report)
date: 2026-11-16        # when it became public
published: 2026-11-23   # when this breakdown was published
who: "Optimizely, whose Web Experimentation product puts a script on its customers' web pages, and the visitors of 178 organizations that used it, among them CNN, the BBC, Zoom, Salesforce, HSBC, IKEA, GitLab, Equifax and Air France-KLM"
sector: "Marketing software (website testing); the affected sites span banking, tech, retail, streaming, news and travel"
entry: "A flaw in the Optimizely Web Experimentation account sign-up flow, which let the attackers act as users on targeted customer accounts and write their code into those customers' projects, Optimizely says"
impact: "For most of 16 November, visitors to the affected sites ran code that swapped crypto wallet addresses, copied card numbers typed into forms, sent cookies and screenshots to the attackers and tried iOS exploit kits on iPhones and iPads. At least $7,000 in crypto was stolen; how many cards were skimmed and whether any phone was infected is unknown."
timeline:
  - date: 2026-09
    text: "Context: Scott Helme of Report URI later says he first saw the same kind of injected code on Turkish websites in September."
  - date: 2026-11-13
    text: "Context: scripts from three other website tools (Kissmetrics, StorifyMe and minute-ly) start serving tampered code that shares hosting and loader code with this attack. Researchers say that doesn't prove the same attackers or the same way in."
  - date: 2026-11-16
    text: "At 04:21 UTC the first injected code appears, in a BBC snippet. About an hour later the attackers register the domain for their main payload, and over the day they publish 26 versions of it."
  - date: 2026-11-16
    text: "At 13:43 UTC a card skimmer is added to the code, according to Helme. The final version goes live at 17:56 UTC."
  - date: 2026-11-16
    text: "Optimizely detects the activity and closes the flaw within three hours of detection. Most of the injected code is removed between 20:40 and 23:11 UTC, when Helme sees every file clean. In the evening Optimizely says it has identified and contained an incident affecting some Web Experimentation customers."
  - date: 2026-11-17
    text: "The attackers' payload domain is suspended at 00:37 UTC and their injector domain at 03:37 UTC. Their crypto wallets are emptied between 04:11 and 05:39 UTC. Report URI publishes its count: 188 infected snippets belonging to 178 organizations."
  - date: 2026-11-18
    text: "Optimizely gives a fuller statement: it ended active sessions, revoked tokens and reset access for the affected accounts."
  - date: 2026-11-19
    text: "Optimizely updates its advisory: the flaw was in the sign-up flow, fewer than 5% of its customers were affected, no other product was involved and it wasn't a credentials breach. It says it contacted every Web Experimentation customer."
attack:
  - tactic: "Initial access"
    id: T1190
    name: "Exploit Public-Facing Application"
    text: "Abused a flaw in the Web Experimentation sign-up flow to act as users on targeted customer accounts."
  - tactic: "Initial access"
    id: T1195.002
    name: "Supply Chain Compromise: Compromise Software Supply Chain"
    text: "Wrote their code into customers' Project JavaScript, so Optimizely's own servers delivered it to every visitor of those sites."
  - tactic: "Initial access"
    id: T1189
    name: "Drive-by Compromise"
    text: "Sent iPhone and iPad visitors to the Coruna and DarkSword exploit kits; on iOS 18.6 or earlier the page reloaded every 60 seconds."
  - tactic: "Credential access"
    id: T1539
    name: "Steal Web Session Cookie"
    text: "After swapping an address, sent up to 8,000 characters of the page's cookies to the attackers. HttpOnly cookies were out of reach."
  - tactic: "Collection"
    id: T1113
    name: "Screen Capture"
    text: "Took a picture of the visible page with the html2canvas library and posted it to the attackers' server."
  - tactic: "Impact"
    id: T1657
    name: "Financial Theft"
    text: "Replaced wallet addresses for eight cryptocurrencies, including bitcoin, ether and Solana, with the attackers' own; at least $7,000 arrived before the wallets were emptied."
detect:
  - "Read every Project JavaScript field in your Optimizely projects, not just the script your site serves: the code came in three forms (a plain script tag, the same address hidden in base64, and a full inline copy), so searching for one domain misses some."
  - "Search proxy, DNS and CSP report logs from 04:00 UTC on 16 November for `1688360[.]cc`, `webshell[.]lol` and random-looking `.icu` domains, and for requests to paths such as `/track.js`, `/hit.php` and `/card.php`."
  - "Check copies of the Optimizely script served from your own domain as well: self-hosted snippets were affected too."
  - "In a browser, the script left traces such as the variables `window._k7` and `window._qxc` and `sessionStorage` keys starting with `cc_`."
check:
  - "Keep third-party scripts off checkout and login pages, and take card details through your payment provider's hosted fields in a separate frame: this skimmer couldn't read those."
  - "Set a Content Security Policy that lists allowed hosts for scripts (`script-src`) and for data transfers (`connect-src`). Report URI found only 24 of the 178 organizations had a policy strict enough to stop this attack, and 68 had none. A policy that relies only on `strict-dynamic` and a nonce wouldn't have stopped it, because it trusts scripts that a trusted script adds."
  - "Don't allow `eval` just because a vendor recommends it: on HSBC's site, that setting let the inline backup copy of the malware run."
  - "If your site was affected, treat card numbers entered on 16 November as exposed and tell your payment provider."
  - "Visitors: check card statements and crypto transfers from 16 November, compare wallet addresses on your hardware wallet's own screen rather than against copied text, and update iPhones and iPads."
unknown:
  - "How exactly the sign-up flaw let the attackers act as users, and how many accounts they reached. Optimizely hasn't published a root-cause analysis."
  - "Who is behind it. No group or country has been named."
  - "How many cards, cookies and screenshots were taken, and whether any iPhone or iPad was actually infected: researchers saw the exploit kits being delivered, not a successful infection."
  - "Whether the tampered Kissmetrics, StorifyMe and minute-ly scripts came from the same attackers, and how they got in there."
  - "How many organizations were really affected. Helme believes the true number is higher than 178."
jobs: [appsec-engineer, secure-developer, third-party-risk-analyst, soc-analyst, threat-hunter]
topics: [supply-chain-attacks, third-party-incidents, browser-security-controls, pci-dss-basics, mobile-security]
sources:
  - name: "Optimizely: Security Advisory: Web Experimentation Security Incident (Updated November 19, 2026)"
    url: "https://support.optimizely.com/hc/en-us/articles/50521849710605-Security-Advisory-Web-Experimentation-Security-Incident-Updated-November-19-2026"
  - name: "StepSecurity: OPTIMJACK: Optimizely-Hosted Scripts Loaded a Crypto Clipper and Card Skimmer on 178 Organizations"
    url: "https://www.stepsecurity.io/blog/optimjack-optimizely-hosted-scripts-crypto-clipper-card-skimmer"
  - name: "The Record: Website management platform Optimizely confirms hackers put malicious code into customer sites"
    url: "https://therecord.media/optimizely-malicious-code-customer-sites"
  - name: "Help Net Security: Malware spread through Optimizely hits 178 organizations, including BBC, CNN and Zoom"
    url: "https://www.helpnetsecurity.com/2026/11/17/optimizely-vulnerability-malicious-javascript/"
  - name: "Sophos X-Ops: Hijacked Optimizely snippets served malicious code on major websites"
    url: "https://www.sophos.com/en-us/blog/hijacked-optimizely-snippets-served-malicious-code"
---

Optimizely Web Experimentation lets companies test different versions of their web pages. Each customer adds an Optimizely script to its pages, and that script carries the "Project JavaScript" the customer's own team writes. Whatever is in that field reaches every visitor, and it comes from Optimizely's servers, which browsers and security policies usually trust.

On 16 November 2026, attackers abused a flaw in the product's account sign-up flow to act as users on targeted customer accounts, and wrote their code into those customers' projects. The first injected code appeared at 04:21 UTC in a BBC snippet. Over the day the attackers released 26 versions of it and added a card skimmer in the afternoon. Report URI later counted 188 infected snippets belonging to 178 organizations, among them CNN, the BBC, Zoom, Salesforce, HSBC, IKEA, GitLab and Air France-KLM. Thirty-two of them were banks and other finance firms.

The code looked for crypto wallet addresses next to words like "wallet" or "send" and swapped them for the attackers' own. It copied card numbers, expiry dates and security codes typed into the sites' own forms, and after a swap it sent the page's cookies and a screenshot to the attackers. iPhone and iPad visitors were sent to the Coruna and DarkSword exploit kits, aimed at older versions of iOS.

Optimizely says it detected the activity the same day, closed the flaw within three hours of detection, removed the code and contacted every Web Experimentation customer. It says fewer than 5% of its customers were affected, no other product was involved and it wasn't a credentials breach. By 23:11 UTC every file was clean, Helme says; most sites had served the code for about 16 hours. Researchers traced at least $7,000 in crypto to the attackers, whose wallets were emptied early the next morning. Nobody outside the attackers knows how many cards were taken.
