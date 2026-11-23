---
# An incident breakdown → lvlulcuma.com/en/news/incidents/ukraine-fbi-extortion-arrests/
title: "Ukraine and the FBI take apart a “help desk” extortion group behind $40.5 million in ransoms"
dek: "On 18 November 2026, Ukraine's Prosecutor General's Office and National Police said that, with the FBI, they had exposed an international group that phoned company staff posing as IT support, broke in, stole data and encrypted files; at least 28 companies paid more than $40.5 million, and four key members are in custody."
type: takedown
status: confirmed       # unfolding | confirmed | report (the victim or investigators published a full report)
date: 2026-11-18        # when it became public
published: 2026-11-23   # when this breakdown was published
who: "An extortion group of at least 27 people from Ukraine, Kazakhstan, russia and other countries, part of a network of more than 60 people in eight jurisdictions that includes former Conti members. Its victims were at least 28 companies, several of them in the US."
sector: "Victims mainly in oil and gas, pharmaceuticals, manufacturing, logistics, finance and critical infrastructure"
entry: "Phone calls to staff from fake “IT support”, some automated with AI-generated voices. Court records also mention phishing pages posing as company VPN logins, spoofed phone numbers, and TeamViewer and AnyDesk."
impact: "At least 28 companies paid more than $40.5 million (about 1.8 billion hryvnias) in ransoms after data theft, encryption and disruption. Four key suspects are in custody and face up to 15 years in prison."
timeline:
  - date: 2024-08
    text: "Court records: the group attacks the US oil producer Warren Oil, steals 1.4 TB of data and, after a $10 million demand, is paid about $5 million in bitcoin. The attack spreads to other companies in the same group."
  - date: 2024-10
    text: "Court records: the energy services firm Newpark Resources is attacked and later pays $1.5 million after a $10 million demand. Around the same time, 142 GB of data is stolen from the tire maker Maxxis International-USA."
  - date: 2026-06
    text: "Court records: after an attack in May and June, the healthcare services firm Quantum Health pays $5 million in crypto, against a $15 million demand."
  - date: 2026-11-18
    text: "The Prosecutor General's Office and the National Police announce the case: 66 searches in Kyiv and 11 regions with the FBI, four key members in custody, and suspicions of taking part in a criminal organization and interfering with computer systems."
  - date: 2026-11-18
    text: "Acting National Police chief Maksym Tsutskiridze tells Censor.NET that the group used its own platform with AI-generated voice messages to automate the calls, and that at least 28 companies paid."
attack:
  - tactic: "Initial access"
    id: T1566.004
    name: "Phishing: Spearphishing Voice"
    text: "Called staff pretending to be IT support, sometimes through a platform that played AI-generated voice messages."
  - tactic: "Credential access"
    id: T1111
    name: "Multi-Factor Authentication Interception"
    text: "In the Warren Oil case, an employee typed credentials into a phishing page posing as the company VPN, and the attackers also obtained a two-factor code."
  - tactic: "Command and control"
    id: T1219.002
    name: "Remote Access Tools: Remote Desktop Software"
    text: "Talked staff into installing TeamViewer or AnyDesk, then used it to get into the network."
  - tactic: "Impact"
    id: T1486
    name: "Data Encrypted for Impact"
    text: "Encrypted files to stop the business. Court records cited by BleepingComputer name the ransomware as Chaos; the authorities haven't named it."
  - tactic: "Impact"
    id: T1657
    name: "Financial Theft"
    text: "Demanded crypto to restore access and threatened to publish the stolen data; at least 28 companies paid more than $40.5 million."
detect:
  - "Calls or chats from “IT support” that nobody at your help desk opened a ticket for, especially ones asking staff to install a tool or read out a code."
  - "Remote-access tools such as TeamViewer or AnyDesk suddenly installed or started on a work computer, or connecting to accounts you don't know."
  - "A VPN sign-in right after a call to the same user, from a new device or place, or with a second-factor prompt the user approved during the call."
  - "Large outbound data transfers in the days before encryption: Warren Oil lost 1.4 TB."
check:
  - "Agree on how staff can check that IT is really IT: a ticket number, a call back to a known number or a code word."
  - "Block remote-access apps your company doesn't use, and allow approved ones only on managed devices."
  - "Use phishing-resistant MFA, such as security keys or passkeys, for VPN and email, so there's no code a caller can talk someone into reading out."
  - "Practice with phone-based phishing tests, not just fake emails."
  - "Keep offline backups and a tested recovery plan, so paying isn't the only way back."
unknown:
  - "The group's name, and the names, ages and roles of the four suspects."
  - "Which ransomware they used: court records cited by BleepingComputer say Chaos, while the authorities haven't named it."
  - "Which members are former Conti members, and how the group relates to BlackSuit, which claimed the Maxxis attack in 2024."
  - "The full list of victims and the final damage, which investigators say may be higher."
  - "Where the money went, and whether members abroad will be charged or extradited."
jobs: [cybercrime-investigator, incident-responder, awareness-specialist, soc-analyst, threat-intelligence-analyst]
topics: [cybercrime-disruption, international-cooperation, social-engineering-tests, ransomware-response, crypto-tracing]
sources:
  - name: "Інтерфакс-Україна: Офіс генпрокурора та ФБР викрили міжнародне хакерське угруповання, арештовано 4 ключових учасників"
    url: "https://interfax.com.ua/news/general/1238478.html"
  - name: "Цензор.НЕТ: Виманили понад $40,5 млн у 28 підприємств: Нацполіція спільно з ФБР викрили групу хакерів, - Цуцкірідзе"
    url: "https://censor.net/ua/news/4034335/vykryly-grupu-hakeriv-scho-vymanyla-ponad-40-mln-dolariv"
  - name: "LB.ua: В Україні викрили міжнародне хакерське угруповання, яке отримало понад 40 млн доларів викупу"
    url: "https://lb.ua/society/2026/11/18/781980_ukrayini_vikrili_mizhnarodne.html"
  - name: "The Record: Ukraine exposes ransomware network extorting US oil, healthcare firms"
    url: "https://therecord.media/ukraine-ransomware-arrests-cyber"
  - name: "BleepingComputer: Ukraine, FBI arrest ransomware gang members tied to $40M in ransoms"
    url: "https://www.bleepingcomputer.com/news/security/ukraine-fbi-arrest-ransomware-gang-members-tied-to-40m-in-ransoms/"
---

On 18 November 2026, Ukraine's Office of the Prosecutor General and National Police said that, together with the FBI, they had exposed an international group that broke into companies and extorted them. The cyber police and the FBI had followed its activity for more than two years. Police carried out 66 searches at once in Kyiv and 11 regions and detained four key members, who are now in custody. They're suspected of taking part in a criminal organization and of unauthorized interference with computer systems (Article 255, part 2, and Article 361, part 5, of Ukraine's Criminal Code), which carries up to 15 years.

Investigators say the group had at least 27 members from Ukraine, Kazakhstan, russia and other countries. Court records describe leaders, coordinators, social engineering specialists, technical operators and people who handled payments. It was part of a wider network of more than 60 people in eight jurisdictions, including former members of the Conti ransomware gang. Members talked over Rocket.Chat, qTOX and Telegram, and Ukrainian investigators got access to those chats and pieced attacks back together.

The attacks began with a phone call. Posing as IT support, often helped by a platform that played AI-generated voice messages, the callers got staff to give away their logins or install remote-access software. One attacker kept an employee on the line while another went into the network. The group then stole data, encrypted files and demanded crypto, threatening to publish what it took. At least 28 companies paid more than $40.5 million, about 1.8 billion hryvnias.

Court records cited by The Record and BleepingComputer name some US victims: the oil producer Warren Oil, which lost 1.4 TB of data in August 2024 and paid about $5 million in bitcoin; the energy services firm Newpark Resources, which paid $1.5 million; the tire maker Maxxis International-USA; and Quantum Health, which paid $5 million in 2026. Police seized computers, phones, bank cards, nearly $370,000 in cash and €20,000, and say they are still identifying other members of the network.
