---
# An incident breakdown → lvlulcuma.com/en/news/incidents/supermarket-freezer-attacks/
title: "Supermarket freezers set to 50°C: the second wave of attacks on Europe's cooling systems"
dek: "Overnight into 2 November 2026, attackers changed settings on internet-exposed refrigeration controllers in supermarkets across Europe, Poland included, three weeks after about 700 French stores were hit; nobody has claimed it."
type: vulnerability
status: unfolding       # unfolding | confirmed | report (the victim or investigators published a full report)
date: 2026-11-02        # when it became public
published: 2026-11-09   # when this breakdown was published
who: "Supermarkets and small food shops in at least six European countries, among them Delhaize, Carrefour, Coop Sweden, SuperValu and Auchan stores in Poland; also three sites of France's blood service (EFS)"
sector: "Food retail and cold storage"
entry: "Refrigeration controllers reachable from the internet, many with default or simple passwords or outdated software, according to Danfoss and CERT Polska. No single way in has been confirmed."
impact: "Fridges and freezers warmed up or switched to defrost; stores threw food away or pulled it from sale; in Poland, at least two devices attacked; at France's blood service, cold room settings changed but no blood products lost"
timeline:
  - date: 2026-10-11
    text: "Context: overnight, refrigeration units in French supermarkets are switched to defrost mode. About 700 stores are hit, according to the Paris prosecutor's office."
  - date: 2026-10-13
    text: "Context: Danfoss, which makes many of the controllers, advises its Dutch customers to disconnect them from the public internet."
  - date: 2026-11-02
    text: "During the night, the settings of cold rooms at three sites of France's blood service, EFS, are changed through its refrigeration supplier's equipment. Staff and independent alarms catch it, and plasma is moved to other sites."
  - date: 2026-11-02
    text: "Overnight into Monday, a second wave hits supermarkets in Belgium, Sweden, Ireland, Estonia, the Netherlands and Luxembourg. Some freezers in Sweden are set to 50°C; in Belgium, units are switched to defrost mode. Delhaize, Carrefour, Coop Sweden and others confirm incidents."
  - date: 2026-11-02
    text: "In Poland, fridges stop working at an Auchan store in Olsztyn."
  - date: 2026-11-03
    text: "CERT Polska says it found 140 refrigeration devices reachable from the internet in Poland and contacted their owners; it confirms attacks on at least two. Auchan Polska confirms problems with refrigeration controls in three stores. EFS confirms the attack on its cold rooms."
  - date: 2026-11-04
    text: "Coolworld, the blood service's refrigeration supplier, says a limited number of its units were affected by an incident involving third-party refrigeration management software."
  - date: 2026-11-05
    text: "CISA, the FBI and the US departments of Health and Human Services, Agriculture and Transportation urge organizations to harden industrial refrigeration and cold-chain monitoring systems."
attack:
  - tactic: "Initial access"
    id: T0883
    name: "Internet Accessible Device"
    text: "Reached refrigeration controllers whose web interfaces were open to the internet. CERT Polska found 140 such devices in Poland alone."
  - tactic: "Initial access"
    id: T1078.001
    name: "Valid Accounts: Default Accounts"
    text: "Logged in where default or simple passwords were still in use, according to Danfoss and CERT Polska."
  - tactic: "Impair process control"
    id: T0836
    name: "Modify Parameter"
    text: "Switched units to defrost mode and raised temperature settings, in some Swedish stores to 50°C."
  - tactic: "Impact"
    id: T0879
    name: "Damage to Property"
    text: "Food warmed up and had to be thrown away, like about €15,000 of meat at one butcher in Belgium."
detect:
  - "Setpoint or mode changes that nobody scheduled, especially at night: defrost mode on many units at once, or temperatures set far above normal."
  - "Logins to a controller's web page from outside your own network, or from addresses that have never logged in before."
  - "Independent temperature sensors that disagree with what the controller reports. At the French blood service, a technician and separate alarms caught the change."
  - "Your own controllers in internet search engines. Censys counted 6,695 exposed refrigeration controllers on 9 October and still 3,124 on 5 November."
check:
  - "Take controllers off the public internet. If you need remote access, put it behind a firewall or VPN that you keep up to date."
  - "Change default passwords, use strong ones and phishing-resistant MFA where you can, and allow access only from known addresses."
  - "Put refrigeration and other building systems on their own network segment."
  - "Patch controllers and replace ones the maker no longer supports. Danfoss says most of the affected devices were discontinued products."
  - "Turn on logging, review it, and keep offline copies of controller settings so you can restore them quickly."
  - "Make sure staff check temperatures and know what to do with food from a fridge that warmed up. Poland's chief sanitary inspector says such food must not be sold."
  - "In Poland, report incidents to CERT Polska."
unknown:
  - "Who is behind the attacks. Nobody has claimed them, and Belgium's cybersecurity centre says it may never be possible to identify them."
  - "Whether the October and November waves and the attack on the blood service are the work of the same people."
  - "How many stores and devices were hit in total, and how much food was lost."
  - "How attackers got into each system: default passwords, old software or a known flaw. Sweden's cybersecurity centre hasn't said how stores there were reached."
  - "Which part of Coolworld's equipment was used, and whether it's linked to the Danfoss controllers."
  - "Whether AI was used to find and attack devices. Belgium's cybersecurity centre raised the risk but said it doesn't know."
jobs: [ot-security-analyst, ot-security-engineer, iot-security-engineer, network-security-engineer, incident-responder]
topics: [attack-surface-management, asset-inventory, patch-management, security-baselines, firewall-rule-management]
sources:
  - name: "Portal Spożywczy: Pierwszy potwierdzony atak na lodówkę w Polsce. 140 urządzeń było narażonych"
    url: "https://www.portalspozywczy.pl/handel/wiadomosci/ataki-na-lodowki-i-zamrazarki-w-europie-w-polsce-potwierdzono-jeden-incydent,294868.html"
  - name: "Le Monde Informatique: L'Établissement français du sang touché par une cyberattaque"
    url: "https://www.lemondeinformatique.fr/cybersecurite-conformite/2026-11-06-l-etablissement-francais-du-sang-touche-par-une-cyberattaque"
  - name: "Aleteia: Les chambres froides de l'Établissement français du sang victimes d'une cyberattaque"
    url: "https://fr.aleteia.org/2026/11/05/les-chambres-froides-de-letablissement-francais-du-sang-victimes-dune-cyberattaque/"
  - name: "The Record: Second wave of suspected cyberattacks hits supermarket freezers across Europe"
    url: "https://therecord.media/cyberattack-grocery-freezers-europe"
  - name: "TechCrunch: A fresh wave of cyberattacks has hit Europe's supermarket refrigerators, destroying food across countries"
    url: "https://techcrunch.com/2026/11/02/a-fresh-wave-of-cyberattacks-has-hit-europes-supermarket-refrigerators-destroying-food-across-countries/"
  - name: "The Hacker News: New Wave of Refrigeration Cyberattacks Hits Supermarkets Across Europe, Forcing Stores to Pull Food"
    url: "https://thehackernews.com/2026/11/second-wave-of-cyberattacks-hits.html"
  - name: "Spider's Web: Polskie sklepy też na celowniku hakerów. Pracownicy zauważyli coś niepokojącego"
    url: "https://spidersweb.pl/2026/11/polskie-sklepy-lodowki-atak.html"
  - name: "Spider's Web: Niedziałające lodówki to dopiero ostrzeżenie. Co jeszcze będą próbowali atakować?"
    url: "https://spidersweb.pl/2026/11/lodowki-to-ostrzezenie.html"
  - name: "Interia: Fala ataków hakerskich w całej Europie. Celem sklepy w Polsce"
    url: "https://wydarzenia.interia.pl/kraj/news-fala-atakow-hakerskich-w-calej-europie-celem-sklepy-w-polsce,nId,23569075"
  - name: "The Record: Harden cooling systems now, feds warn critical infrastructure operators amid attacks"
    url: "https://therecord.media/cyberattacks-refrigeration-cisa-fbi"
  - name: "SecurityWeek: US Agencies Urge Organizations to Harden Refrigeration Controllers"
    url: "https://www.securityweek.com/us-agencies-urge-organizations-to-harden-refrigeration-controllers/"
  - name: "The Register: Feds warn grocers: Don't chill on cyber defenses as freezer hacking spree heats up"
    url: "https://www.theregister.com/security/2026/11/05/feds-warn-grocers-dont-chill-on-cyber-defenses-as-freezer-hacking-spree-heats-up/5307978"
  - name: "Malwarebytes: Ataki na supermarkety i systemy przechowywania krwi wywołują ostrzeżenie w USA"
    url: "https://www.malwarebytes.com/pl/blog/news/2026/11/attacks-on-supermarket-and-blood-storage-systems-prompt-us-warning"
---

Refrigeration controllers are small computers that run the fridges and freezers in shops and warehouses. Many have a web page for checking them remotely. In October, about 700 French supermarkets found their units switched to defrost overnight. Overnight into Monday, 2 November, it happened again, this time across Europe.

Stores in Belgium, Sweden, Ireland, Estonia, the Netherlands and Luxembourg reported fridges and freezers warming up. Some freezers in Sweden were set to 50°C; in Belgium, a refrigeration installer said units were switched to defrost mode. Delhaize, Carrefour, Coop Sweden, SuperValu and others confirmed incidents, none in more than a few dozen stores, and threw food away or pulled it from sale. Danfoss, which makes many of these controllers, said the affected systems in the Netherlands weren't on a secure network and still used default passwords.

In Poland, Auchan confirmed problems with refrigeration controls in three stores, in Olsztyn, Częstochowa-Poczesna and Sosnowiec. CERT Polska found 140 refrigeration devices reachable from the internet, contacted their owners and confirmed attacks on at least two. “These are not complicated attacks,” said its head, Marcin Dudek: the attackers scan the internet for reachable devices and try simple passwords.

In France, settings were changed on cold rooms at three sites of the national blood service, EFS, through equipment from a refrigeration supplier, which the press named as Coolworld. Staff noticed in time and no blood products were lost. On 5 November, five US agencies, including CISA and the FBI, urged organizations to take these controllers off the internet. Nobody has claimed the attacks.
