---
# An incident breakdown → lvlulcuma.com/en/news/incidents/outlook-ntlm-zero-day/
title: "An Outlook bug found with Claude was already under attack: what it leaks and how to check"
dek: "On 10 November 2026, Microsoft fixed an Outlook flaw (CVE-2026-124194) that attackers were already using: opening a crafted message file makes classic Outlook send the user's NTLMv2 hash to the attacker, without the usual warning."
type: vulnerability
status: unfolding       # unfolding | confirmed | report (the victim or investigators published a full report)
date: 2026-11-10        # when it became public
published: 2026-11-16   # when this breakdown was published
who: "Users of classic Outlook for Windows in Microsoft 365 Apps for Enterprise, Office LTSC 2021 and Office LTSC 2024"
sector: "Any organization that uses Outlook on Windows"
entry: "A crafted message file that the user opens in classic Outlook (CVE-2026-124194). How attackers delivered the files hasn't been disclosed."
impact: "The user's NTLMv2 hash goes to a server the attacker controls, where it can be cracked or relayed to sign in as the user; who was attacked, and how many, isn't known"
timeline:
  - date: 2023-03-14
    text: "Context: Microsoft fixes CVE-2023-23397, an earlier Outlook flaw that leaked NTLM hashes to attackers through a calendar reminder, without the user doing anything."
  - date: 2026-11-10
    text: "Microsoft's November updates fix 1,093 security bugs, the second month in a row above 1,000. Only one is marked as exploited: CVE-2026-124194 in Outlook, rated 6.5 and “Moderate”. The fix ships with Office updates."
  - date: 2026-11-10
    text: "Microsoft's advisory credits Benoît Sevens of Anthropic, who used the company's AI model Claude; some reports also list a second researcher, nono. It gives no details about the attacks."
  - date: 2026-11-10
    text: "CISA adds the bug to its catalog of known exploited vulnerabilities and gives US federal agencies until 24 November to fix it."
attack:
  - tactic: "Execution"
    id: T1204.002
    name: "User Execution: Malicious File"
    text: "The victim has to open a crafted message file; the preview pane doesn't trigger the bug."
  - tactic: "Credential access"
    id: T1187
    name: "Forced Authentication"
    text: "Outlook connects to a network location the attacker controls, and Windows sends the user's NTLMv2 hash along with the connection."
detect:
  - "`outlook.exe` connecting to public IP addresses on TCP 445 or 139, especially right after someone opens a `.msg` or `.oft` file."
  - "The WebDAV fallback: `rundll32.exe` running `davclnt.dll,DavSetCookie` with an outside host name."
  - "Outgoing NTLM to outside servers in the `Microsoft-Windows-NTLM/Operational` log (event 8001), once NTLM auditing is switched on."
  - "Network logons with NTLM (event 4624, logon type 3) from a user and source address you haven't seen together before, a possible sign of a relayed hash."
  - "Microsoft and CISA haven't published indicators of compromise, so these are behaviors to hunt for, not ready-made signatures."
check:
  - "Make sure Office itself is updated: the Windows cumulative update doesn't fix this. Fixed builds include Office LTSC 2021 16.0.14334.21048 and Office LTSC 2024 16.0.17932.21140; Microsoft 365 Apps builds are listed at `aka.ms/OfficeSecurityReleases`."
  - "Block outgoing SMB (TCP 445 and 139) from your network to the internet."
  - "Make relaying harder: require SMB signing, LDAP signing and channel binding, and Extended Protection for Authentication on services that accept NTLM."
  - "Consider limiting outgoing NTLM with the policy “Restrict NTLM: Outgoing NTLM traffic to remote servers”: audit first, then block."
  - "If someone may have opened such a file, reset their password, end their sessions and review where the account signed in afterwards."
  - "Office 2016 and 2019 have been out of support since October 2025 and aren't on Microsoft's list of fixed products: plan to move off them."
unknown:
  - "Who used the bug, against whom, how widely and since when."
  - "How the crafted files reached victims: by email, download or chat."
  - "Whether the attacks started before or after the researchers reported the bug."
  - "Which part of the file holds the address Outlook connects to. Microsoft hasn't published technical details."
  - "How Claude was used to find the bug. No write-up has been published."
jobs: [vulnerability-analyst, soc-analyst, detection-engineer, threat-hunter, security-administrator]
topics: [patch-management, vulnerability-prioritization, authentication-protocols, windows-event-logs, ai-vulnerability-discovery]
sources:
  - name: "OpenCVE: CVE-2026-124194"
    url: "https://app.opencve.io/cve/CVE-2026-124194"
  - name: "Tenable: Microsoft's November 2026 Patch Tuesday addresses 1093 CVEs (CVE-2026-124194)"
    url: "https://www.tenable.com/blog/microsoft-november-2026-patch-tuesday-addresses-1093-cves-cve-2026-124194"
  - name: "Zero Day Initiative: The November 2026 Security Update Review"
    url: "https://www.zerodayinitiative.com/blog/2026/11/10/the-november-2026-security-update-review"
  - name: "Krebs on Security: Microsoft Fixes Nearly 1,100 Security Vulnerabilities"
    url: "https://krebsonsecurity.com/2026/11/microsoft-fixes-nearly-1100-security-vulnerabilities/"
  - name: "The Record: Microsoft's Patch Tuesday surpasses 1,000 bugs for second month in a row"
    url: "https://therecord.media/patch-tuesday-microsoft-1000-bugs-again"
  - name: "The Hacker News: Microsoft Patches 1,259 Flaws, Including Exploited Outlook Bug That May Expose NTLMv2 Hashes"
    url: "https://thehackernews.com/2026/11/microsoft-patches-1259-flaws-including.html"
  - name: "CSO Online: November 2026 Patch Tuesday: 63 Critical Microsoft fixes, plus an Outlook zero day that allows theft of hashed credentials"
    url: "https://www.csoonline.com/article/4247015/november-2026-patch-tuesday-63-critical-microsoft-fixes-plus-an-outlook-zero-day-that-allows-theft-of-hashed-credentials.html"
  - name: "CyberInsider: Microsoft's November updates fix 1094 flaws, Outlook zero-day"
    url: "https://cyberinsider.com/microsoft-november-2026-patch-tuesday-outlook-zero-day/"
  - name: "Daily CyberSecurity: CISA Adds Six Exploited Flaws in Outlook, Chrome, Barracuda, Cisco and Openwave to KEV Catalog"
    url: "https://securityonline.info/cisa-kev-six-vulnerabilities-november-2026/"
  - name: "ThreatDefence: Outlook CVE-2026-124194 NTLM Zero-Day: Patching and Hunting"
    url: "https://threatdefence.com/article/microsoft-outlook-cve-2026-124194-ntlm-zero-day-patching-hunting"
  - name: "OPSWAT: Microsoft's November 2026 Patch Tuesday: One Flaw in 1,095 Scored 6.5, and it's Under Attack"
    url: "https://www.opswat.com/blog/microsoft-s-november-2026-patch-tuesday-one-flaw-in-1-095-scored-6-5-and-it-s-under-attack"
---

On Tuesday, 10 November, Microsoft released its monthly security updates. By the count most analysts use, they fix 1,093 bugs, the second month in a row above 1,000. Microsoft credits AI tools that help it find bugs much faster; a year earlier it was fixing around 100 a month. Of all those bugs, only one was known to be under attack: CVE-2026-124194, in the classic Outlook app for Windows.

The flaw is in how Outlook handles a specially crafted message file. When a user opens one, Outlook connects to a network location the attacker controls, without the warning it normally shows before loading outside content. Windows then sends the user's NTLMv2 hash, a scrambled proof of the password, to that server. Just viewing the message in the preview pane isn't enough; the file has to be opened.

With the hash, an attacker can try to crack the password offline, or relay it in real time to sign in as the user to other systems that accept NTLM without signing. Microsoft rates the bug only 6.5 out of 10, “Moderate”, and the fix comes through Office updates, not the Windows update, so it's easy to miss.

Microsoft's advisory credits Benoît Sevens of Anthropic, who used the company's AI model Claude; some reports also name a second researcher, nono. Tenable's Satnam Narang said that for most of the year AI had been “building bigger haystacks”, and this appears to be “the first time it has found a needle”. Microsoft hasn't said who used the bug, against whom or since when, and no technical write-up has been published.
