---
# A weekly digest → lvlulcuma.com/en/news/2026-w45/ (the folder name is the year and ISO week number)
title: "A $6 billion job interview and freezers set to 50°C"
dek: "A fake job interview opened the way to the record Binance theft, hackers heated up supermarket freezers across Europe, and an over-long password let attackers into some Linux servers. Plus fake nuclear-strike emails from a Kyiv newsroom, spies inside a Ukrainian web tracker and $129 million taken with AI-cloned bosses."
date: 2026-11-09   # when this digest was published
action: "Find every device controller your organization has on the internet (fridges, heating, cameras), take it offline or put it behind a VPN, and change any default password on it."
stories:
  - title: "A fake job interview opened the door to the biggest crypto theft on record"
    type: phishing
    text:
      - "Binance is one of the world's biggest crypto exchanges. On 29 October, attackers took about $6.34 billion from its hot wallets, the largest crypto theft on record. The FBI has blamed North Korea."
      - "On 3 November, Binance explained how they got in. In September, someone posing as a project director contacted one of its engineers on a job site. After two fake interviews, he was asked to download a coding “assignment” to his work computer. It quietly swapped part of a developer tool for malware. From there, the attackers used an internal AI tool to take over the computers of two engineers who work on the wallets."
    notes:
      - label: "The head start"
        text: "In June, another wallet engineer downloaded a tampered installer while looking for an AI coding tool. Binance caught it, but by then the attackers knew his role and who worked with him."
      - label: "Hot wallet"
        text: "A crypto wallet that stays online so an exchange can pay out withdrawals quickly. That convenience also makes it the usual target."
    why: "North Korea's hackers keep getting in through fake jobs, and one developer's laptop was enough to reach billions. Binance says it had blocked 57 suspected North Korea-linked attempts this year before this one worked."
    do: "Never run a recruiter's test project on a work computer; use a separate, throwaway machine. If you hire developers, warn your own team that fake interviews are a known trick."
    incident: binance-crypto-theft
    sources:
      - name: "Binance: Binance Security Incident on October 30, 2026: Update on Preliminary Investigation Findings and Response"
        url: "https://www.binance.com/en/square/post/384314395829022"
      - name: "Fortune: North Korea used LinkedIn, fake job interviews to trick Binance engineer in $6.3 billion hack"
        url: "https://fortune.com/2026/11/03/binance-hack-details-linkedin/"
      - name: "Security Affairs: Binance Hack: How Fake Job Interviews and AI Abuse Led to a $6.34 Billion Attack"
        url: "https://securityaffairs.com/202369/cyber-crime/binance-hack-how-fake-job-interviews-and-ai-abuse-led-to-a-6-34-billion-attack.html"
  - title: "Hackers heat up supermarket freezers across Europe, Poland included"
    type: vulnerability
    text:
      - "Overnight into Monday, 2 November, fridges and freezers in supermarkets across Europe started warming up. Some in Sweden were remotely set to 50°C. Stores in Belgium, Sweden, Ireland, Estonia, the Netherlands and Luxembourg threw food away or pulled it from sale."
      - "It's the second wave, after about 700 French supermarkets were hit in October. In Poland, CERT Polska confirmed at least two attacked cooling devices, and Auchan reported problems with fridge controls in three stores. On Thursday, US agencies including CISA and the FBI urged anyone running refrigeration and cold storage to lock these systems down, after three sites of France's blood service were targeted too."
    notes:
      - label: "The wild part"
        text: "These aren't clever attacks. “The attackers mass-scan the internet, look for reachable devices and try simple passwords,” said Marcin Dudek, head of CERT Polska."
      - label: "Refrigeration controller"
        text: "A small computer that runs a store's fridges: it sets temperatures and defrost cycles. Many have a web page for remote checks, and if that page is on the internet, anyone can try to log in."
    why: "Nobody has claimed the attacks, and nobody knows yet who is behind them. Spoiled food costs stores a lot, and warm food that nobody notices is a health risk: Poland's chief sanitary inspector said food from attacked fridges must not be sold."
    do: "Take refrigeration and other building controllers off the internet, change default passwords, and put any remote access behind a VPN with MFA. In Poland, report incidents to CERT Polska."
    sources:
      - name: "The Record: Second wave of suspected cyberattacks hits supermarket freezers across Europe"
        url: "https://therecord.media/cyberattack-grocery-freezers-europe"
      - name: "Portal Spożywczy: Pierwszy potwierdzony atak na lodówkę w Polsce. 140 urządzeń było narażonych"
        url: "https://www.portalspozywczy.pl/handel/wiadomosci/ataki-na-lodowki-i-zamrazarki-w-europie-w-polsce-potwierdzono-jeden-incydent,294868.html"
      - name: "Spider's Web: Polskie sklepy też na celowniku hakerów. Pracownicy zauważyli coś niepokojącego"
        url: "https://spidersweb.pl/2026/11/polskie-sklepy-lodowki-atak.html"
      - name: "The Record: Harden cooling systems now, feds warn critical infrastructure operators amid attacks"
        url: "https://therecord.media/cyberattacks-refrigeration-cisa-fbi"
  - title: "An over-long password lets attackers into some Linux servers"
    type: vulnerability
    text:
      - "OpenSSH is the standard tool for logging in to Linux servers remotely. On Alpine Linux, a small system popular in containers and cloud servers, a bug nicknamed *sshole lets anyone log in to an account that has no password, just by sending a password 257 to 1,024 characters long. Alpine's default settings are enough, as long as at least one other account has a real password."
      - "OpenSSH and Alpine released fixes on Thursday, 5 November. A day later, the threat intelligence firm Previdian reported that attackers had already used the bug to get root on one of its decoy servers."
    notes:
      - label: "The wild part"
        text: "When a password is too long, musl gives back “*” instead of a result. And “*” is exactly what Linux stores for an account with no password. OpenSSH compares the two, sees a match and lets you in."
      - label: "musl"
        text: "A small version of the C library, the basic code that nearly every Linux program relies on. Alpine uses musl; most other Linux systems use glibc, which isn't affected."
    why: "Alpine runs in countless containers and small cloud servers that are easy to forget once they work. On some cloud images, the exposed account can become root without a password."
    do: "On Alpine, run apk upgrade and then restart sshd: the update alone isn't enough. Or turn password logins off (PasswordAuthentication no). Then look in /var/log/messages for “Accepted password” on accounts that have no password. The bug is CVE-2026-123158, fixed in OpenSSH 10.6p2."
    sources:
      - name: "Orca Security: *sshole: OpenSSH Authentication Bypass Gives Attackers Root on Alpine Linux"
        url: "https://orca.security/resources/research/sshole-openssh-authentication-bypass-gives-attackers-root-on-alpine-linux/"
      - name: "The Hacker News: OpenSSH Issues Emergency Fix for Flaw Letting Long Passwords Bypass SSH Auth on Alpine Linux"
        url: "https://thehackernews.com/2026/11/openssh-issues-emergency-fix-for-flaw.html"
      - name: "SecurityWeek: OpenSSH Rushes Patches for 'SSHole' Authentication Bypass"
        url: "https://www.securityweek.com/openssh-rushes-patches-for-sshole-authentication-bypass/"
      - name: "The Hacker News: Hackers Target OpenSSH SSHole Flaw Within Hours of Disclosure, Gain Root on Honeypot"
        url: "https://thehackernews.com/2026/11/hackers-exploited-openssh-sshole-flaw.html"
  - title: "Hackers send fake nuclear-strike emails to Kyiv Independent readers"
    type: breach
    text:
      - "The Kyiv Independent is a Ukrainian news outlet with most of its readers abroad. At about 1 a.m. Kyiv time on Wednesday, 4 November, some readers got an email in russian claiming that Zelensky had launched a nuclear warhead at Kyiv. More fake emails followed that afternoon, in russian and in English, and similar posts appeared on its website."
      - "The newsroom says hackers got into the website's content management system and one of the services it uses to send newsletters. It deleted the posts and says it found and closed the hole overnight. Editor-in-chief Olga Rudenko said everything known so far points to a russian operation."
    notes:
      - label: "Three days earlier"
        text: "On 1 November, Ukraine's Air Alert app showed fake radiation alerts. The newsroom pointed to the similarities, but nobody has shown the two attacks are linked."
      - label: "Content management system (CMS)"
        text: "The admin panel a website's staff use to write and publish pages. Whoever gets into it can post anything under the site's name."
    why: "A fake message from a real, trusted sender is far more convincing than random spam. Days after the Air Alert hack, it's another attempt to spread panic through a channel people trust."
    do: "If you send newsletters, protect the sending service and the CMS with MFA and review who has access. If an alarming email arrives, check it on the outlet's website or official channels before you act on it."
    sources:
      - name: "The Kyiv Independent: Kyiv Independent hit by suspected Russian cyberattack"
        url: "https://kyivindependent.com/kyiv-independent-hit-by-suspected-russian-cyberattack/"
      - name: "The Record: Ukrainian news outlet Kyiv Independent hit by suspected Russian cyberattack"
        url: "https://therecord.media/ukraine-kyiv-independent-cyberattack"
      - name: "Детектор медіа: Хакери зламали одну з систем The Kyiv Independent і розіслали читачам лист про «запуск ядерної боєголовки на Київ»"
        url: "https://detector.media/infospace/article/253748/2026-11-04-khakery-zlamaly-odnu-z-system-the-kyiv-independent-i-rozislaly-chytacham-lyst-pro-zapusk-yadernoi-boiegolovky-na-kyiv/"
  - title: "Spies hid phone exploits behind a Ukrainian website tracker"
    type: espionage
    text:
      - "On Wednesday, the security firm Sekoia said hackers it links to APT29, a russian state-linked group, planted code in Plerdy, a Ukrainian web analytics tool that thousands of mostly Ukrainian websites load. For a week, from 27 August to 3 September, visitors to those sites also loaded the attackers' script. They broke into other sites too, including a US chemical industry association and a Czech political party."
      - "The script checked each visitor's phone. Older iPhones and Android phones got exploits that stole browser cookies and saved logins and, on some iPhones, almost everything: messages, mail, photos and location data. Every bug used had been fixed before the attacks began, so up-to-date phones were safe."
    notes:
      - label: "The clever part"
        text: "Instead of hacking each target, they changed one script that many sites load. And visitors with no touch screen or an impossible screen size simply got an empty reply."
      - label: "Watering hole attack"
        text: "Instead of attacking people directly, attackers infect websites their targets are likely to visit, and wait."
    why: "Every bug here already had a fix, so the whole attack worked only on phones that skipped updates. Old work phones and phones nobody manages are exactly what kits like this look for."
    do: "Update phones now, and check that work phones aren't stuck on old iOS or Android versions. If your website loads scripts from other companies, keep a list of them and know who can change them."
    sources:
      - name: "Sekoia: Poisoned Source: APT29 watering holes target mobile devices with n-day exploits"
        url: "https://www.sekoia.com/blog/poisoned-source-apt29-watering-holes-targets-mobile-devices-with-n-day-exploits"
      - name: "The Record: Russian state-linked hackers target iPhone, Android devices in zero-click espionage campaign"
        url: "https://therecord.media/russia-hackers-smartphone-cyberattacks"
      - name: "The Hacker News: APT29-Linked Hackers Hijack Web Analytics Script to Deliver iOS and Android Exploits"
        url: "https://thehackernews.com/2026/11/apt29-linked-hackers-hijack-web.html"
  - title: "AI-cloned bosses and fake lawyers: three charged over $129 million"
    type: takedown
    text:
      - "On Thursday, US prosecutors in New York charged three men with using AI to pose as company chiefs and lawyers and talking staff into wiring away more than $129 million. They were arrested in Spain and the UK between June and September and are waiting to be sent to the US."
      - "Prosecutors say an employee who could approve big payments would get a message seemingly from their CEO about a secret deal, then a call where AI copied the CEO's voice and sometimes face. A “lawyer” from a big international law firm then gave the bank details. Victims include hospital systems in Missouri and California and a bank in Rhode Island."
    notes:
      - label: "The wild part"
        text: "One of the men kept a handwritten script titled “Lawyer Call”, prosecutors say. The biggest single loss was about $11.6 million, from a UK financial technology company."
      - label: "Deepfake"
        text: "Fake audio or video, made with AI, that copies a real person's voice or face. Here, prosecutors say, it was used live on phone and video calls."
    why: "A familiar voice on the phone used to be good proof. Now it can be faked, so only a payment process that doesn't trust the call will stop this."
    do: "Confirm every unusual or urgent payment through a second channel you already know, such as calling back on a number from your own records, and have two people approve large transfers."
    sources:
      - name: "CyberScoop: Authorities accuse trio of using AI deepfakes to defraud $129M from businesses"
        url: "https://cyberscoop.com/ai-deepfakes-impersonate-ceo-lawyer-defraud-companies/"
      - name: "CBS News: 3 allegedly used AI to steal some $129 million from companies by impersonating executives and lawyers"
        url: "https://www.cbsnews.com/news/3-ai-steal-129-million-companies-impersonating-executives-lawyers/"
      - name: "The Record: CEO-spoofing scammers used AI to help steal more than $100 million, feds say"
        url: "https://therecord.media/ceo-spoofing-scammers-charged"
fun:   # "Fun story of the week": a light, true story from this week that isn't one of the stories above
  title: "Anyone could rent a White House internet address"
  text:
    - "Residential proxy services sell the use of other people's internet connections, usually through an app or gadget that quietly shares its network. Layer3 Intel, a New York firm that tracks them, found six White House addresses among their exits."
    - "Between 5 October and 3 November, those addresses showed up 236 times on 28 proxy services, mostly in the evening, Eastern time. Layer3 says that points to a person's infected device, not a server."
    - "Renting an exit like this costs a few dollars. Nobody has shown that any White House system was broken into, and the White House didn't comment."
  sources:
    - name: "This Week in Security"
      url: "https://this.weekinsecurity.com/researchers-detect-residential-proxies-on-the-white-house-network/"
    - name: "Infosecurity Magazine"
      url: "https://www.infosecurity-magazine.com/news/white-house-residential-proxy-exits/"
---

This week, attackers rarely needed anything clever: a fake job offer, a fridge on the internet with a simple password, a forgotten Alpine server, a phone that skipped updates, a call in the boss's voice. The weak spot was usually something nobody was watching.
