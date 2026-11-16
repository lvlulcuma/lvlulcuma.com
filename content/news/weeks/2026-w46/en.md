---
# A weekly digest → lvlulcuma.com/en/news/2026-w46/ (the folder name is the year and ISO week number)
title: "Hot fridges, frozen billions and a bug found with AI"
dek: "France blamed Iran for the supermarket fridge attacks, an Outlook bug found with AI turned out to be under attack already, and the US froze $1.2 billion of the Binance loot. Plus up to 37.6 million Nitori records, a ransomware attack on Vanderbilt and a hacked Ukrainian news agency."
date: 2026-11-16   # when this digest was published
action: "Check that Office itself installed November's update, not just Windows: the fix for the Outlook bug that's already under attack only comes with Office updates."
stories:
  - title: "France blames Iran's Revolutionary Guards for the supermarket fridge attacks"
    type: espionage
    text:
      - "On Monday, 9 November, France officially blamed Iran's Revolutionary Guards for the October attacks on refrigeration in about 700 French food shops, mostly supermarkets. A report by French cyber and intelligence agencies names Shahid Kaveh, a Guards hacking unit. The sabotage spoiled food and caused at least 15 fires."
      - "Foreign Minister Jean-Noël Barrot called the attack unprecedented in scale and aggression. France summoned Iran's ambassador and will push for EU sanctions. The Paris prosecutor opened an investigation into the unit's head and two of his deputies and asked for international arrest warrants. Iran's foreign ministry rejected the accusation the next day. The French report doesn't cover the early-November wave that hit other countries, Poland included."
    notes:
      - label: "The evidence"
        text: "Investigators point to the attackers' infrastructure, the way they broke in, which matches other attacks by the same unit, and traces of Farsi. The same hackers also went after equipment at several small hydroelectric plants, with “moderate” effects."
      - label: "Revolutionary Guards (IRGC)"
        text: "A branch of Iran's armed forces, separate from its regular army. Its cyber units include Shahid Kaveh, which the US links to attacks on industrial controllers at American water utilities in 2023."
    why: "It's the first time a government has named who was behind the fridge attacks, and France calls it the first large-scale cyber sabotage on its soil. Store equipment left open on the internet is now a target for state hackers, not just vandals."
    do: "Take refrigeration and other building controllers off the internet, change default passwords and allow remote access only through a VPN with MFA."
    incident: supermarket-freezer-attacks
    sources:
      - name: "The Record: France blames Iran for fridge cyberattacks, says some caused fires"
        url: "https://therecord.media/france-blames-iran-for-fridge-cyberattacks"
      - name: "WUNC (NPR): Iran denies it was behind cyber fridge attacks targeting France"
        url: "https://www.wunc.org/2026-11-09/iran-denies-it-was-behind-cyber-fridge-attacks-targeting-france"
      - name: "Khaleej Times (Reuters): France accuses IRGC of cyberattack on supermarket fridges, summons Iran ambassador"
        url: "https://www.khaleejtimes.com/world/france-accuses-irgc-cyberattack-supermarket-fridges"
  - title: "Microsoft fixes 1,093 bugs, and one Outlook flaw was already being used in attacks"
    type: vulnerability
    text:
      - "On Tuesday, 10 November, Microsoft released fixes for 1,093 security bugs, the second month in a row above 1,000. A year ago it was fixing around 100 a month. Microsoft credits AI tools for helping find so many."
      - "One of them was already being used by attackers: a flaw in the classic Outlook app for Windows. When someone opens a booby-trapped message file, Outlook connects to the attacker's server without its usual warning and hands over a scrambled form of the user's Windows login. Among those credited with finding it is Benoît Sevens of Anthropic, who used the company's AI model Claude. Microsoft hasn't said who exploited it or against whom."
    notes:
      - label: "In numbers"
        text: "Microsoft has fixed more than 5,100 security bugs this year, far more than in any earlier year. Yet of November's 1,093, only this one was known to be under attack."
      - label: "NTLM hash"
        text: "NTLM is an old Windows way of proving who you are to another computer, using a scrambled version of your password (a hash). Whoever catches it can try to crack it, or pass it on to log in as you somewhere else."
    why: "A stolen hash can open other company systems in the user's name. Microsoft rates the bug only “moderate”, which makes it easy to skip, but it's the only one this month that attackers are known to be using."
    do: "Update Office, not just Windows: the fix ships with Office updates (for example Office LTSC 2021 build 16.0.14334.21048). Block outgoing SMB (TCP port 445) to the internet. The bug is CVE-2026-124194; CISA gave US agencies until 24 November."
    incident: outlook-ntlm-zero-day
    sources:
      - name: "Krebs on Security: Microsoft Fixes Nearly 1,100 Security Vulnerabilities"
        url: "https://krebsonsecurity.com/2026/11/microsoft-fixes-nearly-1100-security-vulnerabilities/"
      - name: "Tenable: Microsoft's November 2026 Patch Tuesday addresses 1093 CVEs (CVE-2026-124194)"
        url: "https://www.tenable.com/blog/microsoft-november-2026-patch-tuesday-addresses-1093-cves-cve-2026-124194"
      - name: "The Record: Microsoft's Patch Tuesday surpasses 1,000 bugs for second month in a row"
        url: "https://therecord.media/patch-tuesday-microsoft-1000-bugs-again"
      - name: "The Hacker News: Microsoft Patches 1,259 Flaws, Including Exploited Outlook Bug That May Expose NTLMv2 Hashes"
        url: "https://thehackernews.com/2026/11/microsoft-patches-1259-flaws-including.html"
  - title: "The US freezes $1.2 billion of the Binance loot and shuts down North Korea's fake video calls"
    type: takedown
    text:
      - "On Thursday, 12 November, the US Justice Department said a court had allowed it to seize or hold more than $1.2 billion of the crypto stolen from Binance in October, the largest crypto theft on record. With help from crypto companies, more than $2.7 billion has been frozen in all. The FBI blames TraderTraitor, a North Korean hacking group. The same day, Binance said it had covered all $6.34 billion of customer losses from its own funds."
      - "The FBI also took down servers behind “FaceStealer”, a separate North Korean scheme that stole more than $400 million in crypto over 18 months. Victims often got a meeting invite from someone they knew, whose account had been hijacked. On a fake Zoom or Teams call they saw recordings of earlier victims, and were told to fix an “audio problem”. The fix installed malware, which also secretly filmed them for the next round."
    notes:
      - label: "The wild part"
        text: "Every victim became bait: their webcam footage was played to the next target, so the call looked full of real people. The FBI seized more than 900 such videos. “The quality of the deepfakes only needs to be good enough to pass as webcam video,” it warns."
      - label: "Frozen crypto"
        text: "Stablecoins like USDT and USDC are run by companies, Tether and Circle, that can block tokens at an address. That's why most of the frozen loot is stablecoins, while about $2.8 billion, mostly ether and bitcoin, is still in the thieves' wallets, the analytics firm Elliptic says."
    why: "Stolen crypto is rarely recovered, so freezing this much is unusual. And FaceStealer shows a familiar face on a video call is no longer proof: the FBI says it fooled experienced developers and security people, and that it even infected a maintainer of a JavaScript library with tens of millions of weekly downloads before being caught."
    do: "Join calls only through the official Zoom or Teams app, never paste a command or install an “update” to fix audio during a call, and check unexpected invites with the person another way. Victims can report at ic3.gov with the keyword FaceStealer."
    incident: binance-crypto-theft
    sources:
      - name: "U.S. Department of Justice: Justice Department Announces Actions to Disrupt North Korea's Massive Theft of Cryptocurrency"
        url: "https://www.justice.gov/opa/pr/justice-department-announces-actions-disrupt-north-koreas-massive-theft-cryptocurrency"
      - name: "FBI FLASH: North Korean Hackers Use Secretly Recorded Webcam Library of 900+ Tech Workers in $400M 'FaceStealer' Crypto Theft Scheme"
        url: "https://www.ic3.gov/CSA/2026/261112.pdf"
      - name: "The Record: Feds announce seizure of $1.2 billion from Binance theft; also takedown of 'FaceStealer' tools"
        url: "https://therecord.media/stolen-binance-crypto-recovered-doj-facestealer-disrupted"
      - name: "Elliptic: How North Korea is laundering the $6.4 billion stolen from Binance"
        url: "https://elliptic.co/insights/how-north-korea-is-laundering-the-6-4-billion-stolen-from-binance/"
  - title: "Hackers got into Nitori, and up to 37.6 million customer records may have leaked"
    type: breach
    text:
      - "Nitori is a Japanese furniture and home goods chain with 879 stores in Japan. On Monday, 9 November, it said someone had got into one of its systems and that up to 37.62 million records of personal data may have leaked. They include members' names, addresses, phone numbers, email addresses, birth dates and gender, contact details of business customers, and online orders."
      - "Nitori found the intrusion on 6 November and blocked it. Its logs suggest the attackers may have been inside since mid-to-late October. Passwords and card numbers weren't included, it says. It hasn't said how they got in or whether ransomware was involved, and nobody has claimed the attack."
    notes:
      - label: "In numbers"
        text: "37.62 million is a count of records, not people: one customer can appear more than once. For comparison, Nitori's app had about 25 million members in March 2026."
      - label: "Log analysis"
        text: "Going through the records that systems keep of who did what and when. It's how Nitori found the attackers may have been inside for weeks before anyone noticed."
    why: "Names, addresses and order histories are exactly what scammers need for believable fake messages from Nitori or a delivery company. Business customers' contact details are useful for fake invoices too."
    do: "If you shop at Nitori, expect fake emails, texts and calls in its name: Nitori says it will never ask for passwords, card numbers or PINs. If you hold customer data, alert on unusually large reads or exports of it."
    incident: nitori-data-breach
    sources:
      - name: "ニトリ: 当社システムへの不正アクセスによる個人情報漏えいの可能性に関するお詫びとお知らせ"
        url: "https://www.nitori-net.jp/ec/notices/info261109/"
      - name: "BleepingComputer: Japanese furniture giant Nitori says hackers stole 37.6M customer records"
        url: "https://www.bleepingcomputer.com/news/security/japanese-furniture-giant-nitori-says-hackers-stole-376m-customer-records/"
      - name: "Impress Watch: ニトリ、最大3762万件の個人情報流出の恐れ　不正アクセス"
        url: "https://www.watch.impress.co.jp/docs/news/2154952.html"
      - name: "innovatopia: ニトリに不正アクセス、最大3,762万件の個人情報が流出の可能性 パスワードとカードは対象外"
        url: "https://innovatopia.jp/cyber-security/cyber-security-news/119884/"
  - title: "Vanderbilt shuts down campus computers as a ransomware gang claims a million Social Security numbers"
    type: ransomware
    text:
      - "On Monday, 9 November, Vanderbilt University in Nashville, Tennessee, told students and staff to shut down university computers and get off campus Wi-Fi because of an “active cybersecurity incident”. Ransom notes appeared on screens, and some computers played a recorded voice: “You have been compromised by BYOD.”"
      - "BYOD, a ransomware gang that appeared in September, claims it took over the network and stole more than a million Social Security numbers plus student and employee records. Vanderbilt hasn't confirmed what, if anything, was taken. Wi-Fi, email and teaching tools came back within a day, and everyone had to reset their password, but OneDrive and Box were still off on 15 November. Vanderbilt's medical center, a separate organization, says its systems weren't affected."
    notes:
      - label: "The wild part"
        text: "In October the same gang claimed an attack on the University of New Mexico's hospital that disrupted patient care. Then it apologized and offered patients up to $2,500 each, while keeping the data."
      - label: "Domain controller"
        text: "The server that holds a Windows network's accounts and passwords. Whoever controls it can usually reach every computer in the organization. BYOD claims it took over Vanderbilt's."
    why: "If BYOD's claim is true, the data includes Social Security numbers, which can't simply be changed like a password. Vanderbilt says a full recovery may take weeks, and a proposed class action has already been filed."
    do: "If you're at Vanderbilt, reset your password as asked, reject MFA prompts you didn't start and trust only official channels. Anyone in the US can freeze their credit for free at Equifax, Experian and TransUnion."
    incident: vanderbilt-university-ransomware
    sources:
      - name: "Vanderbilt University: Active Cybersecurity Incident Updates"
        url: "https://news.vanderbilt.edu/2026/11/09/nov-9-active-cybersecurity-incident-updates/"
      - name: "BleepingComputer: Vanderbilt University hit in BYOD ransomware attack, data theft claimed"
        url: "https://www.bleepingcomputer.com/news/security/vanderbilt-university-hit-in-byod-ransomware-attack-data-theft-claimed/"
      - name: "The Register: Ransomware threat blares from Vanderbilt University computers during cyberattack"
        url: "https://www.theregister.com/cyber-crime/2026/11/10/ransomware-threat-blares-from-vanderbilt-university-computers-during-cyberattack/5308687"
      - name: "The Vanderbilt Hustler: LIVE COVERAGE: Vanderbilt experiencing cyberattack, agencies responding"
        url: "https://vanderbilthustler.com/2026/11/09/breaking-vanderbilt-wi-fi-networks-reportedly-hacked-vuit-yet-to-confirm/"
      - name: "Gizmodo: Hacker Group Claims UNM Hospital Cyberattack, Then Apologizes and Offers Patients $2,500"
        url: "https://gizmodo.com/hacker-group-claims-unm-hospital-cyberattack-then-apologizes-and-offers-patients-2500-2000832169"
  - title: "Hackers deface Ukraine's state news agency Ukrinform and take over its X account"
    type: accounts
    text:
      - "On Wednesday, 11 November, the homepage of Ukrinform, Ukraine's state news agency, was replaced with an anti-Ukrainian message, a crossed-out Ukrainian flag and a link to a Telegram channel. Its X account was renamed and given a pro-russian slogan."
      - "The agency removed the image within minutes and put the site into maintenance mode; it was back the next afternoon. Ukrinform is working with the State Service of Special Communications and the SBU security service. Its director general, Serhii Cherevatyi, says russia is behind it and that attackers try to break in almost every month. Nobody has said how they got in."
    notes:
      - label: "A busy month"
        text: "It's the latest in a string of attacks on trusted channels in Ukraine: fake alerts in the Air Alert app on 1 November, fake emails from the Kyiv Independent on 4 November and from Ukrainska Pravda's newsletter on 6 November. No link between them has been shown."
      - label: "Defacement"
        text: "When attackers replace a website's pages with their own. It doesn't mean data was stolen, but it shows they could change the site."
    why: "Readers and other newsrooms trust a state news agency, so a hijacked site or account spreads a hostile message fast. Ukrinform says the attackers keep improving their methods."
    do: "If you run a newsroom or public accounts, protect the website's admin panel and social accounts with phishing-resistant MFA, keep the list of admins short and plan how to take the site offline quickly. Readers: check odd posts against the outlet's other channels."
    incident: ukrinform-hack
    sources:
      - name: "The Kyiv Independent: Hackers target Ukraine's state news agency Ukrinform, replace website with anti-Ukrainian messages"
        url: "https://kyivindependent.com/hackers-target-ukraines-state-news-agency-ukrinform-replace-website-with-anti-ukrainian-messages/"
      - name: "Детектор медіа: Хакери з ночі атакують ресурси Укрінформу"
        url: "https://detector.media/infospace/article/253925/2026-11-11-khakery-z-nochi-atakuyut-resursy-ukrinformu/"
      - name: "Укрінформ: Сайт Укрінформу поновлює роботу після кібератаки"
        url: "https://www.ukrinform.ua/rubric-society/4183861-sajt-ukrinformu-ponovlue-robotu-pisla-kiberataki.html"
      - name: "IMI: Ukrinform website targeted in cyberattack"
        url: "https://imi.org.ua/en/russias-crimes/rosiyani-atakuvali-sajt-ukrinformu"
fun:   # "Fun story of the week": a light, true story from this week that isn't one of the stories above
  title: "Lose an hour of sleep, click more phishing links"
  text:
    - "Neurobiologists at the University of California, Irvine studied fake phishing emails that a large US institution sends to more than 11,000 employees every few months, to train them."
    - "On the Monday after clocks jumped forward in spring 2026, costing people up to an hour of sleep, 17.76% clicked. On the Monday before, 15.56% did. The researchers say that makes people 13% more likely to fall for it. Their paper came out in PNAS on 9 November."
    - "Lead researcher Eitan Schechtman hopes employers will take extra care around the clock change, holidays and big sports events. And: “Better sleep likely leads to better decisions.”"
  sources:
    - name: "EurekAlert! (UC Irvine)"
      url: "https://www.eurekalert.org/news-releases/1150614"
    - name: "Popular Science"
      url: "https://www.popsci.com/health/sleep-loss-scam-daylight-saving-time/"
---

This week the attackers borrowed trust: a fridge controller left online, a message file that looks like any other, a friend's face on a video call, a news agency's homepage. The good news came from the defenders: an AI model helped find the Outlook bug, and quick freezes stopped billions in stolen crypto from disappearing.
