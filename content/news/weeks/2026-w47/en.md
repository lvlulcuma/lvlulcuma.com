---
# A weekly digest → lvlulcuma.com/en/news/2026-w47/ (the folder name is the year and ISO week number)
title: "A poisoned script on 178 websites and an “AI-generated” attack on the EU"
dek: "Hackers slipped malware into a script that 178 big websites load, suspected Chinese spies used an unknown VMware flaw for months, and a Java bug nicknamed Java4Shell puts Jira, Jenkins and Keycloak at risk. Plus an “AI-generated” attack on the European Commission, ransomware suspects arrested in Ukraine and a breach at Transport for London."
date: 2026-11-23   # when this digest was published
action: "Update Java on your servers to the 17 November releases, including copies bundled inside apps and containers: the Java4Shell bug affects Java 17 and newer on many modern Intel and AMD server chips."
stories:
  - title: "Hackers slip malware into a script used by 178 big websites, from CNN to HSBC"
    type: supply-chain
    text:
      - "Optimizely sells tools that let companies test different versions of their web pages. Sites that use its Web Experimentation product load a small Optimizely script on their pages. On Monday, 16 November, someone abused a flaw in the product's account sign-up process, got into customers' projects and added their own code to that script. Visitors to sites such as CNN, the BBC, Zoom, Salesforce and HSBC loaded it for most of the day."
      - "The code swapped crypto wallet addresses for the attackers' own, copied card numbers typed into forms, took cookies and screenshots, and tried to load known hacking kits on iPhones and iPads running older iOS. Optimizely says it closed the hole within three hours of spotting it, that fewer than 5% of its customers were affected and that it wasn't a password breach. Researchers traced at least $7,000 in stolen crypto, but nobody knows how many cards were taken."
    notes:
      - label: "In numbers"
        text: "Report URI checked 1,611 Optimizely scripts and found 188 carrying the malware. Of the 178 organizations hit, 32 were banks and other finance firms. Only 24 had a browser security policy strict enough to stop the attack, and 68 had none at all."
      - label: "Content Security Policy (CSP)"
        text: "A list a website gives the browser of where scripts may load from and where data may be sent. A strict one blocks unknown servers, so it can stop an attack even when the bad code arrives through a trusted vendor's script."
    why: "One vendor's script ran on 178 trusted websites at once, and the famous names on them didn't protect visitors. Every outside script a site loads gives that vendor the power to change its pages."
    do: "If you paid by card or sent crypto on a big website on 16 November, check your card statement and wallet history, and update iPhones and iPads to the latest iOS. Site owners: keep outside scripts off payment pages and set a strict Content Security Policy."
    sources:
      - name: "Optimizely: Security Advisory: Web Experimentation Security Incident (Updated November 19, 2026)"
        url: "https://support.optimizely.com/hc/en-us/articles/50521849710605-Security-Advisory-Web-Experimentation-Security-Incident-Updated-November-19-2026"
      - name: "The Record: Website management platform Optimizely confirms hackers put malicious code into customer sites"
        url: "https://therecord.media/optimizely-malicious-code-customer-sites"
      - name: "Help Net Security: Malware spread through Optimizely hits 178 organizations, including BBC, CNN and Zoom"
        url: "https://www.helpnetsecurity.com/2026/11/17/optimizely-vulnerability-malicious-javascript/"
      - name: "StepSecurity: OPTIMJACK: Optimizely-Hosted Scripts Loaded a Crypto Clipper and Card Skimmer on 178 Organizations"
        url: "https://www.stepsecurity.io/blog/optimjack-optimizely-hosted-scripts-crypto-clipper-card-skimmer"
  - title: "Suspected Chinese spies used an unknown VMware flaw for months"
    type: espionage
    text:
      - "On Thursday, 19 November, Broadcom fixed a critical flaw in VMware vCenter, the software many companies use to run all their virtual servers from one place. The same day, Google's Mandiant said a suspected Chinese espionage group it calls ARMORY CASTLE had been using the flaw since early September, long before a fix existed. The bug lets an attacker who can reach vCenter on the network become an administrator without a password."
      - "In the attacks Mandiant investigated, the group first broke in through a hole in a BeyondTrust remote support appliance, then moved to Linux machines that had no security software. From there it forged administrator sign-ins to vCenter, reached the servers underneath and copied the Windows password database out of a virtual machine's disk. It left a backdoor that takes orders through Slack."
    notes:
      - label: "The clever part"
        text: "The attackers never had to touch the Windows machine itself: they read its disk from the server underneath, where Windows security tools can't see. They also switched on vCenter's remote login (SSH) just long enough to use it, then switched it off again."
      - label: "vCenter and ESXi"
        text: "ESXi is the system that runs virtual machines on a physical server. vCenter manages many ESXi servers from one console, so whoever controls it can reach every virtual machine they hold."
    why: "vCenter holds the keys to a company's whole server room, and in these attacks it sat among appliances that no security software watched. A system patched today can still hide forged accounts and stolen keys from September."
    do: "Install Broadcom's 19 November update (for example vCenter 8.0 U3m); there's no workaround. Then look for unexpected admin or machine accounts, earlier SSH use on vCenter and new keys in the ESXi root account's authorized_keys file. The bug is CVE-2026-123890."
    sources:
      - name: "Google Threat Intelligence: ARMORY CASTLE Exploits vSphere"
        url: "https://cloud.google.com/blog/topics/threat-intelligence/armory-castle-exploits-vsphere"
      - name: "SecurityWeek: Newly Patched VMware vCenter Flaw Exploited as Zero-Day by Chinese APT"
        url: "https://www.securityweek.com/newly-patched-vmware-vcenter-flaw-exploited-as-zero-day-by-chinese-apt/"
      - name: "Help Net Security: VMware vCenter zero-day exploited for months before patch (CVE-2026-123890)"
        url: "https://www.helpnetsecurity.com/2026/11/20/vmware-vcenter-zero-day-cve-2026-123890-exploited/"
      - name: "The Hacker News: China-Linked Hackers Exploit Critical VMware vCenter Zero-Day to Gain Admin Access and Steal Data"
        url: "https://thehackernews.com/2026/11/china-linked-hackers-exploit-critical.html"
  - title: "“Java4Shell”: a bug in Java's Base64 decoder puts Jira, Jenkins and Keycloak at risk"
    type: vulnerability
    text:
      - "On Tuesday, 17 November, Oracle and the OpenJDK project fixed a serious bug in Java, the language behind countless business apps. It sits in a shortcut Java takes on newer Intel and AMD server chips to decode Base64, a common way of turning data into plain text. A specially crafted string makes Java write past the end of a piece of memory. The bug was found by the security firm Calif and is nicknamed Java4Shell, echoing Log4Shell, the Java logging bug of 2021."
      - "Calif says it turned the bug into a takeover without a password in six popular apps, including Jira, Confluence, Jenkins and Keycloak, using AI agents to speed up the work. It hasn't published those exploits, and no attacks have been confirmed. But other researchers have already crashed test servers with it, and the firm VulnCheck has a working exploit for its customers."
    notes:
      - label: "Who's at risk"
        text: "The bug needs Java 17.0.6 or newer, a chip with the AVX-512 VBMI feature (Intel Xeon servers since Ice Lake, AMD Zen 4 and newer) and an app that decodes Base64 sent by outsiders. Java 8 and 11 and ARM servers aren't affected."
      - label: "Base64"
        text: "A way to write any data with 64 ordinary characters (letters, digits, + and /), so it can travel in places made for text, like a login header or a security token. Apps decode it all the time, often before they check who's asking."
    why: "Java runs inside a huge number of company tools, many of them reachable from the internet. Turning the bug into a takeover is hard, but researchers have already done it, and watchTowr rates attacks as highly likely."
    do: "Update Java to the 17 November releases (Oracle's 17.0.21.1, 21.0.13.1, 25.0.5.1 and 27.0.1.1, or your vendor's matching builds). Until you can, start Java with -XX:+UnlockDiagnosticVMOptions -XX:-UseBASE64Intrinsics. The bug is CVE-2026-114938."
    sources:
      - name: "VulnCheck: Java4Shell CVE-2026-114938: Fine, I Guess We'll Do This Again"
        url: "https://www.vulncheck.com/blog/java4shell"
      - name: "watchTowr: Frequently Asked Questions About the Java Remote Code Execution Vulnerability (Java4Shell CVE-2026-114938)"
        url: "https://watchtowr.com/intelligence/java4shell-cve-2026-114938-faq/"
      - name: "The Hacker News: Java4Shell Flaw (CVE-2026-114938) Enables Pre-Auth RCE in Jira, Jenkins, Keycloak and More"
        url: "https://thehackernews.com/2026/11/java4shell-cve-2026-114938-enables-pre.html"
      - name: "Censys: Nov 18 Advisory: OpenJDK Remote Code Execution (Java4Shell) [CVE-2026-114938]"
        url: "https://censys.com/advisory/cve-2026-114938/"
  - title: "The European Commission confirms an attack it calls “AI-generated”"
    type: breach
    text:
      - "On Thursday, 19 November, the European Commission confirmed a cyberattack after Politico reported it. The Commission first spotted signs of it on 22 October. Its systems for staff pay slips, leave requests and medical refunds, and its translation services, were taken offline, some for more than 10 days, and the HR system went down again on 18 November."
      - "Spokesperson Thomas Regnier said “this was an AI generated cyber campaign” that used a publicly available tool. Politico's sources named the tool as ARTEX, an open-source program that uses commercial AI models to find and exploit weak spots by itself. The Commission hasn't named the attackers or said how they got in, and says it found no evidence of a data breach affecting its staff as a whole."
    notes:
      - label: "The FBI's warning"
        text: "On 13 November, the FBI warned that attackers had been using ARTEX since at least August, with some intrusions reaching privileged access in under three hours. More than 1,600 ARTEX control panels were open on the internet."
      - label: "Penetration testing"
        text: "Breaking into your own systems, with permission, to find weak spots before criminals do. ARTEX was released in July as a tool for that job, then turned against real victims."
    why: "Tools like ARTEX let attackers do in hours what used to take a skilled team days. This is the Commission's third publicly known incident this year, and the EU's own response team urges fixing even low-severity findings."
    do: "Take admin and management pages off the internet, require MFA on key systems, and alert when one account looks up many records in a row: the FBI and CERT-EU list these steps against ARTEX."
    sources:
      - name: "The Record: European Commission confirms cyberattack, says hackers used AI tool"
        url: "https://therecord.media/european-commission-confirms-cyberattack-using-ai"
      - name: "SecurityWeek: European Commission Confirms AI-Assisted Cyberattack Disrupted Services"
        url: "https://www.securityweek.com/european-commission-confirms-ai-assisted-cyberattack-disrupted-services/"
      - name: "The Register: European Commission scrambles to contain AI-assisted cyberattack"
        url: "https://www.theregister.com/cyber-crime/2026/11/19/european-commission-scrambles-to-contain-ai-assisted-cyberattack/5311103"
      - name: "Cloud Security Alliance: AI-Tool Attack on the European Commission: Lessons for Defenders"
        url: "https://labs.cloudsecurityalliance.org/research/csa-research-note-european-commission-ai-cyberattack-2026112/"
  - title: "Ukraine and the FBI arrest four suspects behind $40.5 million in ransoms"
    type: takedown
    text:
      - "On Wednesday, 18 November, Ukraine's Prosecutor General's Office and National Police said that, working with the FBI, they had exposed an international extortion group. Police carried out 66 searches in Kyiv and 11 regions, and four key members are now in custody. They face up to 15 years in prison."
      - "Investigators say the group, at least 27 people from Ukraine, Kazakhstan, russia and other countries, phoned company staff pretending to be IT support, sometimes with AI-generated voices. Once someone handed over a login or installed a remote-access tool, the attackers stole data, encrypted files and demanded crypto. At least 28 companies paid more than $40.5 million. The wider network, which includes former members of the Conti ransomware gang, has more than 60 people in eight jurisdictions."
    notes:
      - label: "The haul"
        text: "Police seized computers, phones, bank cards, nearly $370,000 in cash and €20,000. Court records cited by reporters name US victims, such as the oil producer Warren Oil, which reportedly paid about $5 million in bitcoin after 1.4 TB of its data was stolen."
      - label: "Vishing"
        text: "Voice phishing: tricking someone over the phone instead of by email. Posing as the help desk works because staff are used to IT asking them to install a tool or read out a code."
    why: "Ransomware suspects rarely end up in custody. Investigators say they got into the group's chats and are still identifying other members of the wider network."
    do: "Agree on a way to check that a call from “IT” is real, such as calling back a known number. Never install remote-access tools or share codes because a caller asks, and block remote-access apps your company doesn't use."
    sources:
      - name: "BleepingComputer: Ukraine, FBI arrest ransomware gang members tied to $40M in ransoms"
        url: "https://www.bleepingcomputer.com/news/security/ukraine-fbi-arrest-ransomware-gang-members-tied-to-40m-in-ransoms/"
      - name: "The Record: Ukraine exposes ransomware network extorting US oil, healthcare firms"
        url: "https://therecord.media/ukraine-ransomware-arrests-cyber"
      - name: "Інтерфакс-Україна: Офіс генпрокурора та ФБР викрили міжнародне хакерське угруповання, арештовано 4 ключових учасників"
        url: "https://interfax.com.ua/news/general/1238478.html"
      - name: "Цензор.НЕТ: Виманили понад $40,5 млн у 28 підприємств: Нацполіція спільно з ФБР викрили групу хакерів, - Цуцкірідзе"
        url: "https://censor.net/ua/news/4034335/vykryly-grupu-hakeriv-scho-vymanyla-ponad-40-mln-dolariv"
  - title: "Hackers reach the details of 265,000 London Oyster photocard holders"
    type: breach
    text:
      - "Transport for London (TfL) runs the city's buses and the Tube. On Monday, 16 November, customers began getting emails asking them to create an account, and TfL found suspicious activity on its Oyster photocard website and took the system offline. Photocards give children, students, people over 60, apprentices and veterans free or cheaper travel."
      - "TfL says the attackers may have seen the names, phone numbers, email and home addresses, birth dates and security questions and answers of about 265,000 customers. Passwords, payment details, photos and journey history weren't affected, it says, and neither were the names and birth dates of children with Zip cards. TfL hasn't said how the attackers got in. It has told the ICO, the UK's data protection regulator."
    notes:
      - label: "Not the first time"
        text: "In September 2024, members of the Scattered Spider gang broke into TfL's network, in an attack that cost about £29 million. Two of them pleaded guilty and were sentenced this year."
      - label: "Security questions"
        text: "Backup questions, like your first school, that prove who you are if you forget a password. Unlike a password, a true answer can't be changed, so if you've used the same ones elsewhere, switch to new answers there."
    why: "Names, home addresses and birth dates of students and older people are what scammers need for convincing fake messages from TfL or a bank, and leaked security answers may help open other accounts."
    do: "Photocard holders: ignore unexpected “create an account” emails, change security answers you've used on other sites, and expect to reset your password and security question when the site comes back."
    sources:
      - name: "BleepingComputer: Transport for London breach exposes 265,000 Oyster card users' data"
        url: "https://www.bleepingcomputer.com/news/security/transport-for-london-breach-exposes-265-000-oyster-card-users-data/"
      - name: "Help Net Security: 265,000 Oyster photocard customers' data exposed in Transport for London breach"
        url: "https://www.helpnetsecurity.com/2026/11/20/transport-for-london-oyster-photocard-data-breach/"
      - name: "ITPro: Oyster photocard breach: TfL takes system offline after 260,000+ customers affected by attack"
        url: "https://www.itpro.com/cyber-resilience/data-breaches/oyster-photocard-breach-tfl-takes-system-offline-after-260-000-customers-affected-by-attack"
      - name: "TEISS: Transport for London data breach exposes details of about 265,000 Oyster photocard users"
        url: "https://www.teiss.co.uk/news/transport-for-london-data-breach-exposes-details-of-about-265000-oyster-photocard-users-18499"
fun:   # "Fun story of the week": a light, true story from this week that isn't one of the stories above
  title: "“123456” wins again, but Denmark's favorite says “Lukas is cool”"
  text:
    - "The password manager NordPass has published its yearly list of the most common passwords, built from passwords leaked between September 2025 and September 2026 in 44 countries."
    - "“123456” is first again, as in seven of the past eight years, ahead of “admin” and “12345678”. “1234” is new in the top five, and “password” slipped to seventh."
    - "Some countries have their own hits. Denmark's favorite was “lukasersej123”, Danish for “Lukas is cool 123”. And some people simply typed the word for password in their own language, like “contraseña” or “motdepasse”."
  sources:
    - name: "TechRadar"
      url: "https://www.techradar.com/pro/security/the-worlds-most-popular-passwords-for-2026-have-been-revealed-and-unsurprisingly-theyre-all-pretty-bad"
    - name: "Cybernews"
      url: "https://cybernews.com/security/nordpass-2026-most-popular-passwords-study/"
---

This week the way in was trust: a vendor's script that 178 websites load without a second look, a remote support box and a server console that nobody watches, a phone call from “IT”. And attacks are getting faster: an AI tool reached privileged access in hours, and researchers used AI agents to turn a Java bug into working exploits.
