---
# An incident breakdown → lvlulcuma.com/en/news/incidents/binance-crypto-theft/
title: "The Binance theft: a fake job interview, an internal AI tool and $6.34 billion gone in four hours"
dek: "Between June and October 2026, attackers worked their way from two engineers' computers to Binance's wallet signing service, then drained about $6.34 billion on 29 October, the largest crypto theft on record; the FBI blames North Korea."
type: phishing
status: confirmed       # unfolding | confirmed | report (the victim or investigators published a full report)
date: 2026-10-29        # when it became public
published: 2026-11-09   # when this breakdown was published
who: "Binance, one of the world's biggest cryptocurrency exchanges"
sector: "Cryptocurrency exchanges"
entry: "A fake job interview: an engineer ran a coding “assignment” from a fake recruiter on his work computer, and it planted malware"
impact: "About $6.34 billion in crypto taken from hot wallets on about ten blockchains (Binance's estimate); about $2.85 billion frozen or intercepted; withdrawals stopped for about two days"
timeline:
  - date: 2026-06
    text: "A Binance wallet engineer (Engineer A) looks for a popular AI coding tool and downloads a tampered Homebrew installer. Binance detects it, replaces his device and changes his credentials, but by then his role and his wallet team colleagues are known to the attackers."
  - date: 2026-09
    text: "Someone posing as a project director contacts a Binance software engineer (Engineer B), whose profile mentions Binance, on a legitimate job platform. A fake HR person interviews him on video; a fake CEO of a made-up company holds a second interview on a chat app."
  - date: 2026-09
    text: "At the end, Engineer B is asked to download an “assignment” code repository to his work computer. Running it swaps part of pyenv, a Python developer tool, for a malicious version. Binance's endpoint security doesn't detect it."
  - date: 2026-10-20
    text: "From Engineer B's computer, the attackers use an internal AI tool to take control of the computers of Engineer A and of a wallet software engineer (Engineer C). Engineer A's machine holds a token that can deploy containers."
  - date: 2026-10-29
    text: "Between 17:15 and 19:56 UTC, the attackers log in to Engineer C's computer, deploy a container with Engineer A's stolen credentials and run a script that reaches Binance's internal wallet signing service."
  - date: 2026-10-29
    text: "From 20:05 UTC, money leaves: first 233.46 million XRP from five hot wallets, then SOL, OP and 18,270 BTC. On Ethereum, the signing service signs 50 EIP-7702 authorizations that give the attackers' smart contract partial control of a hot wallet, and they keep sweeping funds with it."
  - date: 2026-10-29
    text: "At 23:56 UTC, the last unauthorized transfer, 2,961.9 ETH, goes through. Tether, Circle and other stablecoin issuers start freezing stolen tokens; TRM Labs links the theft to TraderTraitor, a North Korean hacking group."
  - date: 2026-10-30
    text: "At 00:10 UTC, Binance clears the EIP-7702 delegation from the hot wallet. Elliptic also points to TraderTraitor."
  - date: 2026-10-31
    text: "The FBI attributes the theft to TraderTraitor. Binance says it has replenished 98% of the affected token assets from its own funds."
  - date: 2026-11-01
    text: "Binance starts restoring withdrawals in phases from 06:00 UTC."
  - date: 2026-11-03
    text: "Binance publishes its preliminary findings on how the attackers got in. North Korea has rejected the FBI's claim as “absurd”."
attack:
  - tactic: "Initial access"
    id: T1566.003
    name: "Phishing: Spearphishing via Service"
    text: "A fake “project director” approached an engineer on a job platform; the interviews ran on video and on a chat app."
  - tactic: "Execution"
    id: T1204.002
    name: "User Execution: Malicious File"
    text: "The engineer ran a coding “assignment” on his work computer, and it swapped part of pyenv for a malicious version."
  - tactic: "Lateral movement"
    id: T1072
    name: "Software Deployment Tools"
    text: "Used an internal AI tool, reached from the infected computer, to take control of two wallet engineers' computers."
  - tactic: "Credential access"
    id: T1528
    name: "Steal Application Access Token"
    text: "Took a token from one engineer's computer that was allowed to deploy containers."
  - tactic: "Execution"
    id: T1610
    name: "Deploy Container"
    text: "Deployed a container with the stolen credentials and ran a script that reached the wallet signing service."
  - tactic: "Impact"
    id: T1657
    name: "Financial Theft"
    text: "Drained about $6.34 billion from hot wallets in under four hours."
detect:
  - "A developer tool being swapped on a laptop: here, `pyenv` under `/opt/homebrew` was created, deleted, renamed and re-linked, and then a shell started."
  - "New code from a repository someone just downloaded, running right after a job interview or another outside contact."
  - "An internal tool, such as an AI assistant, suddenly acting on several employees' computers in a row, especially the wallet team's."
  - "A container deployed from an engineer's laptop instead of the normal pipeline, with a token that belongs to someone else."
  - "Signing requests that don't come from the normal withdrawal system, and an EIP-7702 authorization from a hot wallet to an unknown contract. Binance's co-CEO said this step “did not pass through our normal approval controls”."
check:
  - "Don't let staff run interview tasks or other outside code on work computers; give them a separate machine or a disposable virtual machine for it."
  - "Install developer tools only from approved sources, and check where installers like Homebrew's were downloaded from."
  - "Limit what internal AI tools and admin tools can do on employees' computers, and log every action they take."
  - "Keep tokens that can deploy containers or reach signing systems off laptops; make them short-lived and tied to one person."
  - "Make wallet signing services refuse anything outside the normal withdrawal flow, including EIP-7702 delegations, and practice revoking them fast."
  - "Warn people in sensitive roles that recruiters who contact them may be attackers. Binance says it blocked 57 suspected North Korea-linked attempts this year before this one worked."
unknown:
  - "Which job platform, chat app, AI coding tool and internal AI tool were involved. Binance hasn't named them."
  - "How exactly the internal AI tool could take control of other engineers' computers."
  - "Why the June compromise, which Binance caught, didn't lead to tighter checks around the wallet team."
  - "How much will come back: about $2.85 billion is frozen or intercepted, but the frozen tokens hadn't been returned yet, and the rest is being swapped into ETH and moved across bridges."
  - "What the independent review will find. Binance says some technical details are kept confidential."
  - "The exact total: Binance says $6.34 billion, TRM Labs $6.36 billion and Elliptic $6.43 billion, using different prices."
jobs: [incident-responder, threat-intelligence-analyst, endpoint-security-engineer, devsecops-engineer, awareness-specialist]
topics: [crypto-tracing, initial-access, secrets-management, privileged-access, actor-tracking]
sources:
  - name: "Binance: Binance Security Incident on October 30, 2026: Update on Preliminary Investigation Findings and Response"
    url: "https://www.binance.com/en/square/post/384314395829022"
  - name: "TRM Labs: North Korea Steals USD 6.36 Billion From Binance in the Largest Hack in History"
    url: "https://www.trmlabs.com/resources/blog/north-korea-steals-usd-6-36-billion-from-binance-in-the-largest-hack-in-history"
  - name: "Elliptic: The largest theft in history: North Korea behind the $6.4 billion Binance hack"
    url: "https://www.elliptic.co/insights/binance-largest-hack-in-history/"
  - name: "The Hacker News: FBI Links North Korea's TraderTraitor to Record $6.43 Billion Binance Crypto Heist"
    url: "https://thehackernews.com/2026/11/fbi-links-north-koreas-tradertraitor-to.html"
  - name: "Fortune: North Korea used LinkedIn, fake job interviews to trick Binance engineer in $6.3 billion hack"
    url: "https://fortune.com/2026/11/03/binance-hack-details-linkedin/"
  - name: "Security Affairs: Binance Hack: How Fake Job Interviews and AI Abuse Led to a $6.34 Billion Attack"
    url: "https://securityaffairs.com/202369/cyber-crime/binance-hack-how-fake-job-interviews-and-ai-abuse-led-to-a-6-34-billion-attack.html"
  - name: "The Block: Inside the largest crypto hack on record: How attackers breached Binance for $6.3 billion"
    url: "https://www.theblock.co/news/business/2026-10-30-binance-hack-largest-crypto-hack-north-korea-432225"
  - name: "RTÉ: North Korea calls FBI's Binance hack allegations 'absurd' as it test-fires missiles"
    url: "https://www.rte.ie/news/world/2026/1103/1597715-korea-binance-world/"
---

Binance is one of the world's biggest cryptocurrency exchanges. On the evening of 29 October (UTC), attackers drained about $6.34 billion from its hot wallets, the online wallets it uses to pay out withdrawals. It's the largest crypto theft on record, far above the $1.46 billion stolen from Bybit in February 2025. About $2.85 billion has been frozen or intercepted, much of it stablecoins frozen by Tether and Circle. Binance says it set aside more than the full amount from its own funds.

The attack took months. In June, a wallet engineer downloaded a tampered Homebrew installer while looking for an AI coding tool. Binance caught it, but the attackers had already learned who worked on the wallets. In September, a fake “project director” contacted another engineer on a job platform. After a video interview with a fake HR person and a second one with the fake CEO of a made-up company, he was asked to download an “assignment” to his work computer. It replaced part of pyenv, a Python developer tool, with malware that Binance's security tools didn't catch.

On 20 October, the attackers used an internal AI tool, reached from that computer, to take over the machines of two wallet engineers. One of them held a token that could deploy containers. On 29 October they used it to deploy a container, reach the internal service that signs wallet transactions, and start moving money out at 20:05 UTC. On Ethereum, they used a feature called EIP-7702 to give their own smart contract partial control of a hot wallet, and kept sweeping funds with it until 23:56 UTC.

The FBI named TraderTraitor, a North Korean hacking group, on 31 October; blockchain analysts TRM Labs and Elliptic had already pointed to it. North Korea called the claim absurd. On 3 November, Binance said it had rebuilt the wallet system and the AI tool, replaced the affected devices and revoked the engineers' credentials and tokens, and that an independent review is under way.
