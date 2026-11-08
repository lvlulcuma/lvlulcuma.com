---
# A weekly digest → lvlulcuma.com/en/news/2026-w44/ (the folder name is the year and ISO week number)
title: "A 14-year-old bug and a $50 million “no”"
dek: "A PHP bug spreads to firewalls, a Japanese host won't pay a $50 million ransom, and details of 41,000 US security staff go public. Plus fake power bills in Ukraine, a seized criminal host and a Coinbase vendor leak."
date: 2026-11-01   # when this digest was published
action: "Find every place PHP runs in your network, including inside your firewall, and check it's up to date."
stories:
  - title: "A PHP bug is breaking into servers, and now firewalls"
    type: vulnerability
    text:
      - "PHP is the language behind a huge part of the web. Two serious bugs in it, nicknamed PHP2Shell, let anyone take over a server just by sending it web requests. No password needed."
      - "PHP shipped a fix on 21 October. This week CISA confirmed real attacks, and Palo Alto Networks said the bugs are now being used against its firewalls. One group adds a second bug, in Linux, to take full control."
    notes:
      - label: "In numbers"
        text: "More than 50,000 attack attempts from 70 countries, counted by just one university lab."
      - label: "The wild part"
        text: "The bug has been in PHP since version 5.4, released in 2012. Attackers started using it four days before the fix, because details leaked early."
    why: "PHP also hides inside products like firewalls. You can't update it there yourself; you have to wait for the vendor's fix."
    do: "Update PHP to the latest version of your branch (8.2.35, 8.3.36, 8.4.27 or 8.5.12). If you use Palo Alto, install the fix and keep the firewall's admin page off the internet."
    sources:
      - name: "The Register: CISA confirms PHP2Shell under attack"
        url: "https://www.theregister.com/a/5305681"
      - name: "Palo Alto Networks: CVE-2026-109618 advisory"
        url: "https://security.paloaltonetworks.com/CVE-2026-109618"
      - name: "Unit 42: PHP2Shell threat brief"
        url: "https://unit42.paloaltonetworks.com/cve-2026-109618-cve-2026-109619/"
  - title: "A Japanese host refuses to pay a $50 million ransom"
    type: ransomware
    text:
      - "GMO Internet rents out cloud computers that many people in Japan use for currency trading. Hackers broke in, stole data, left malware on some customers' machines and asked for about $50 million."
      - "GMO said no. The hackers then posted some customer data, and GMO told customers to back up their own PCs and switch them off. Some traders say money left their accounts through trades they never made."
    notes:
      - label: "The ransom note"
        text: "It gave GMO until 5 p.m. the same day, and suggested GMO's own crypto exchange could send the money right away."
      - label: "What GMO did instead"
        text: "It's paying every customer ¥5,000 (about $30), covering confirmed losses, and offering a $1 million reward for information on the attackers."
    why: "One break-in at a hosting company reached thousands of customers at once. And because trading logins were saved on those machines, the theft turned into real money fast."
    do: "Don't save bank or trading logins on rented or shared computers, and turn on two-factor login wherever money can move."
    sources:
      - name: "BleepingComputer: GMO urges customers to shut down PCs"
        url: "https://www.bleepingcomputer.com/news/security/japans-gmo-urges-customers-to-shut-down-pcs-amid-ransomware-threat/"
      - name: "Jiji Press (Nippon.com): GMO customer info exposed"
        url: "https://www.nippon.com/en/news/yjj2026102700370/"
      - name: "Webhosting.Today: GMO refuses ransom and offers a $1 million bounty"
        url: "https://webhosting.today/2026/10/28/japans-gmo-refuses-ransom-after-vps-breach-and-offers-1-million-bounty/"
  - title: "Details of 41,000 US security staff published online"
    type: breach
    text:
      - "On Wednesday, the leak site DDoSecrets published a list of more than 41,000 people who work for the US Department of Homeland Security (DHS), including border, immigration and cyber agency staff. It has names, job titles, work phone numbers and emails."
      - "A hacker group calling itself the Department of Peace says it got the data through Okta, the login service DHS uses. Okta says it has seen no sign of a break-in. Reuters checked part of the list and found real employees."
    notes:
      - label: "Single sign-on (SSO)"
        text: "One login that opens all your work apps. Okta is one of the biggest SSO companies, which also makes it a valuable target."
      - label: "Inside the files"
        text: "The list also shows which internal groups people belong to and which apps they can use. Some groups have names like “Undercover Operations”."
    why: "There are no passwords here. But a list of who works where, and with which systems, is a ready-made target list for phishing, and a safety risk for people in sensitive jobs."
    do: "Check which apps and API keys can read your whole company directory, and take that access away where it isn't needed."
    sources:
      - name: "CyberScoop: Leak site publishes data on more than 41,000 DHS employees"
        url: "https://cyberscoop.com/dhs-employee-data-leak-ddosecrets/"
      - name: "Reuters (via GV Wire): Leak website releases data on DHS employees"
        url: "https://gvwire.com/2026/10/28/leak-website-releases-data-on-tens-of-thousands-of-dhs-employees/"
  - title: "Fake power bills from “DTEK” hit Ukrainian government offices"
    type: phishing
    text:
      - "On 29 October, Ukrainian government offices got emails that seemed to come from an accountant at DTEK, a large Ukrainian energy company, about an unpaid electricity bill. CERT-UA, Ukraine's national cyber team, blames the russia-linked group UAC-0050."
      - "A “pay your debt” link in the attached PDF downloaded LiteManager, a real remote-control program. It set itself up to start with Windows, giving the attackers quiet, lasting access to the computer."
    notes:
      - label: "Remote-access tool"
        text: "Software that lets someone use a computer from far away. IT support uses the same tools, so security software often lets them through."
      - label: "The clever part"
        text: "The download was an archive inside a second, password-protected archive, with the password in a text file next to it. Security tools can't look inside a locked archive, but a person opens it in seconds."
    why: "Power cuts after russian strikes on the grid make bills confusing, so a debt letter feels believable."
    do: "Allow only the remote-access tools your team actually uses, and get an alert for any other. Check bills on the supplier's own website, never through a link in an email."
    sources:
      - name: "Government of Ukraine portal: CERT-UA alert"
        url: "https://www.kmu.gov.ua/news/khakery-rozsylaiut-lysty-derzhustanovam-vid-imeni-dtek-dlia-vstanovlennia-prohram-viddalenoho-dostupu"
      - name: "Ukrinform: russian hackers sent fake DTEK debt letters"
        url: "https://ukrinform.ua/rubric-society/4179756-rosijski-hakeri-atakuvali-derzustanovi-vidpravlali-listi-vid-dtek-pro-borgi-za-elektriku.html"
  - title: "The FBI takes down a hosting company built for criminals"
    type: takedown
    text:
      - "On Tuesday, the FBI, with partners in Germany, the Netherlands and the UK, seized virtualine.net. Virtualine rented out servers, openly advertised on hacking forums and promised to ignore complaints and police requests."
      - "Its customers included ransomware gangs and a password-stealing malware operation. Prosecutors say it also laundered money and kept a child-abuse forum online. Nobody has been arrested."
    notes:
      - label: "Bulletproof hosting"
        text: "A hosting company that ignores abuse reports and police requests, so criminals' servers stay online."
      - label: "The wild part"
        text: "Servers started at $0.79 a month. After the seizure, the operator posted an open letter on a different domain."
    why: "Taking a website doesn't switch off the servers, and hosts like this often come back under a new name within days. But each takedown hands defenders fresh lists of networks to block."
    do: "Block traffic to networks known for bulletproof hosting. Spamhaus's free DROP list is an easy place to start."
    sources:
      - name: "The Record: FBI seizes ‘bulletproof’ hosting site"
        url: "https://therecord.media/fbi-seizure-csam-virtualine"
      - name: "TRM Labs: FBI seizes Virtualine domain"
        url: "https://www.trmlabs.com/resources/blog/fbi-seizes-virtualine-domain-after-provider-led-bulletproof-hosting-sector-in-illicit-inflows"
  - title: "Coinbase customers exposed through an analytics company"
    type: supply-chain
    text:
      - "Coinbase, one of the biggest crypto exchanges, says contact details of some of its customers leaked from Amplitude, an analytics company it works with. Other Amplitude clients were hit too."
      - "Coinbase says its own systems and its customers' money are safe. It hasn't said how many people were affected."
    notes:
      - label: "Analytics tool"
        text: "Code in a website or app that records what users do, so the company can study it. It often gets more personal data than it needs."
      - label: "Who said 70,000?"
        text: "The number came from a post by the security chief of SlowMist, a blockchain security firm. Coinbase hasn't confirmed it."
    why: "An email or phone number tied to a crypto account is just what scammers need for fake “Coinbase support” calls. And nobody had to hack Coinbase itself for it to happen."
    do: "Check what your website's analytics tools send to vendors. Send an internal ID instead of a real email or phone number where you can."
    sources:
      - name: "Decrypt: Coinbase customer data hit in analytics vendor breach"
        url: "https://decrypt.co/382009/coinbase-customer-data-hit-analytics-vendor-breach-funds-not-impacted"
      - name: "Crowdfund Insider: Coinbase clarifies the Amplitude incident"
        url: "https://www.crowdfundinsider.com/2026/10/320708-coinbase-clarifies-amplitude-data-breach-impacted-only-limited-customer-contact-information/"
  - title: "Hackers send fake radiation alerts through Ukraine's Air Alert app"
    type: phishing
    text:
      - "Air Alert is the official app millions of Ukrainians use to know when to head for a shelter. At about 22:47 on Sunday, it suddenly warned of radiation, chemical danger and street fighting in Kyiv, turned the whole map red, and showed a message in russian about an incoming Oreshnik missile."
      - "The Air Force said there was no threat and that the app had been hacked. The team switched off notifications and took the app offline, then brought most of it back around 2 a.m. Nobody official has said how the attackers got in."
    notes:
      - label: "The wild part"
        text: "In Lviv region, some street loudspeakers played a “radiation danger” signal too. The regional administration blamed a malfunction of the app."
      - label: "Push notification"
        text: "A message an app's server sends to your phone even when the app is closed. Whoever controls the sending side can reach every user at once."
    why: "A fake alarm on millions of phones spreads panic, and the next real one may be ignored. Any system that can message a whole country in seconds is a prime target."
    do: "Turn on emergency alerts in your phone's settings, and never tap a link inside an alert. If you run an alert system, require a second person to approve rare or nationwide alerts."
    incident: air-alert-app-hack
    sources:
      - name: "Суспільне: Застосунок «Повітряна тривога», ймовірно, зламаний, радіаційної загрози в Україні немає — Повітряні сили"
        url: "https://suspilne.media/1442465-zastosunok-povitrana-trivoga-jmovirno-zlamanij-radiacijnoi-zagrozi-v-ukraini-nemae-povitrani-sili/"
      - name: "Укрінформ: Застосунок «Повітряна тривога» відновлює роботу після зламу"
        url: "https://www.ukrinform.ua/rubric-society/4180346-zastosunok-povitrana-trivoga-prizupiniv-robotu-cerez-zlam.html"
      - name: "РБК-Україна: У Повітряних Силах підтвердили злам додатку, після чого послідували тривожні сповіщення"
        url: "https://www.rbc.ua/rus/news/povitryanih-silah-pidtverdili-zlam-dodatku-1793569071.html"
fun:   # "Fun story of the week": a light, true story from this week that isn't one of the stories above
  title: "Britain's spies lost track of thousands of USB sticks"
  text:
    - "GCHQ, the UK's eavesdropping agency, can't account for thousands of USB sticks, hard drives, discs and memory cards, its watchdog said on Thursday. Some may hold surveillance data."
    - "The watchdog says it's “disappointed”, which is strong language for a British official. GCHQ says the devices may not be lost at all: its old system just couldn't keep track of them."
    - "Not the first time: in 2008, GCHQ couldn't find 35 of its laptops, three of them meant for top-secret files."
  sources:
    - name: "The Record"
      url: "https://therecord.media/gchq-cannot-account-for-thousands-of-data-devices"
    - name: "Computer Weekly"
      url: "https://www.computerweekly.com/news/366652841/UK-surveillance-watchdog-disappointed-over-government-investigatory-powers-failings"
    - name: "ITPro (2010)"
      url: "https://itpro.com/621412/gchqs-cavalier-attitude-leads-to-35-lost-laptops"
revisions:
  - date: 2026-11-02
    note: "Added the Air Alert app hack."
---

Most of this week's attacks came in through someone else's door: a bug in PHP, a hosting company, a login service, an analytics tool. You can do everything right and still get hit through a supplier.
