---
# An incident breakdown → lvlulcuma.com/en/news/incidents/tfl-oyster-photocard-breach/
title: "TfL Oyster photocards: strange “create an account” emails, then a breach of 265,000 customers' details"
dek: "On 16 November 2026, Transport for London found suspicious activity on its Oyster photocard website and took it offline; it says attackers may have accessed the names, contact details, home addresses, birth dates and security questions and answers of about 265,000 photocard holders."
type: breach
status: confirmed       # unfolding | confirmed | report (the victim or investigators published a full report)
date: 2026-11-18        # when it became public
published: 2026-11-23   # when this breakdown was published
who: "Transport for London (TfL) and about 265,000 holders of Oyster photocards, the cards that give children, students, care leavers, people over 60, apprentices and veterans free or cheaper travel"
sector: "Public transport"
entry: "Not known yet"
impact: "Names, phone numbers, email and home addresses, dates of birth and security questions and answers of about 265,000 customers possibly accessed; the photocard website and online accounts offline. TfL says passwords, payment details, photos, supporting documents and journey history weren't affected."
timeline:
  - date: 2024-09
    text: "Context: members of Scattered Spider break into TfL's network, steal customer data and disrupt online services, including Oyster refunds. The attack costs TfL about £29 million."
  - date: 2026-06
    text: "Context: two of the 2024 attackers plead guilty."
  - date: 2026-11-16
    text: "Oyster photocard customers start getting emails, sent from TfL's own mail systems, asking them to create an account. TfL spots suspicious activity on the photocard website, limits access and takes the photocard system offline."
  - date: 2026-11-18
    text: "TfL emails affected customers about the incident."
  - date: 2026-11-19
    text: "TfL confirms the breach publicly and puts the number at about 265,000 customers, up from an earlier estimate of about 250,000. It has told the Information Commissioner's Office (ICO)."
detect:
  - "For organizations: emails your own systems send that nobody scheduled, such as a burst of “create an account” messages. Here they were the first sign."
  - "Sign-ins, lookups or exports on customer account systems in unusual numbers or from unusual places."
  - "For customers: messages that use your photocard details, home address or birth date to look official, or that ask you to “confirm” a security answer."
check:
  - "Customers: ignore unexpected emails asking you to create an Oyster photocard account, and report suspicious messages to TfL."
  - "Change your password and security answers on other services where you used the same ones. When the photocard site is back, TfL will ask everyone to change their password, security question and answer."
  - "Photocards still work. Renewals and journey history questions go through TfL Customer Services on 0343 222 1234 while the site is down."
  - "Services that still use security questions: treat them as a weak check, because a leaked true answer can't be changed, and offer MFA instead."
  - "Testing alone isn't enough: TfL says this system had a cybersecurity test within the past 12 months. Watch customer systems all the time as well."
unknown:
  - "How the attackers got in."
  - "Whether the “create an account” emails sent from TfL's mail systems and the photocard website breach are one incident or two."
  - "Who is behind it, and whether there's a ransom demand."
  - "Whether the number of affected customers will rise further. TfL says it may."
  - "When the photocard website will come back."
jobs: [incident-responder, data-protection-officer, privacy-analyst, soc-analyst, iam-engineer]
topics: [data-breach-response, incident-reporting-rules, customer-identity, phishing-analysis, password-policies]
sources:
  - name: "BleepingComputer: Transport for London breach exposes 265,000 Oyster card users' data"
    url: "https://www.bleepingcomputer.com/news/security/transport-for-london-breach-exposes-265-000-oyster-card-users-data/"
  - name: "Help Net Security: 265,000 Oyster photocard customers' data exposed in Transport for London breach"
    url: "https://www.helpnetsecurity.com/2026/11/20/transport-for-london-oyster-photocard-data-breach/"
  - name: "ITPro: Oyster photocard breach: TfL takes system offline after 260,000+ customers affected by attack"
    url: "https://www.itpro.com/cyber-resilience/data-breaches/oyster-photocard-breach-tfl-takes-system-offline-after-260-000-customers-affected-by-attack"
  - name: "TEISS: Transport for London data breach exposes details of about 265,000 Oyster photocard users"
    url: "https://www.teiss.co.uk/news/transport-for-london-data-breach-exposes-details-of-about-265000-oyster-photocard-users-18499"
  - name: "Yahoo News UK (This is Local London): Hackers access details of 265,000 Oyster card customers in TfL cyber breach"
    url: "https://uk.news.yahoo.com/hackers-access-details-265-000-150750904.html"
---

Transport for London (TfL) runs London's buses, the Tube and other transport. Its Oyster photocards are travel cards with the holder's photo that give free or cheaper travel to children, students, care leavers, people over 60, apprentices and veterans. Holders manage them through an online photocard account.

On 16 November 2026, TfL became aware that photocard customers were getting emails asking them to create an account. The emails came from TfL's own mail systems, as a result of a compromise. The same day TfL found suspicious activity on the photocard website, limited access and took the photocard system offline. It told affected customers on 18 November and confirmed the breach publicly the next day.

TfL says the attackers may have accessed the full names, phone numbers, email addresses, home addresses, dates of birth and security questions and answers of about 265,000 customers, up from an earlier estimate of about 250,000, and that the number may still rise. Its current assessment is that passwords, bank and card details, journey history, photos and supporting documents weren't affected, and neither were the names and dates of birth of children with Zip Oyster cards. It says it has found no evidence so far that the data has been misused.

TfL hasn't said how the attackers got in. Shashi Verma, its director of technology strategy and revenue, said the system had a cybersecurity test within the past 12 months and apologized to affected customers. TfL has told the ICO, the UK's data protection regulator. This is TfL's second big breach in just over two years: in September 2024, members of Scattered Spider broke into its network in an attack that cost about £29 million.
