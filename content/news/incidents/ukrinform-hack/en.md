---
# An incident breakdown → lvlulcuma.com/en/news/incidents/ukrinform-hack/
title: "Ukrinform hacked: a defaced homepage and a hijacked X account at Ukraine's state news agency"
dek: "On 11 November 2026, attackers replaced the homepage of Ukrinform, Ukraine's state news agency, with an anti-Ukrainian message and took over its X account; the site was back the next afternoon, and how they got in hasn't been disclosed."
type: accounts
status: unfolding       # unfolding | confirmed | report (the victim or investigators published a full report)
date: 2026-11-11        # when it became public
published: 2026-11-16   # when this breakdown was published
who: "Ukrinform, Ukraine's state news agency"
sector: "News media"
entry: "Not known yet"
impact: "Homepage replaced with an anti-Ukrainian image and a link to a Telegram channel; X account renamed and given a pro-russian slogan; the website in maintenance mode until the next afternoon. Ukrinform hasn't reported any data theft."
timeline:
  - date: 2023-01-17
    text: "Context: a wiper attack hits Ukrinform's systems. CERT-UA links it to Sandworm, a group tied to russia's military intelligence. The agency keeps working."
  - date: 2026-11-01
    text: "Context: attackers break into the operator interface of Ukraine's Air Alert app and send fake alerts to its users."
  - date: 2026-11-04
    text: "Context: hackers use the Kyiv Independent's content management system and a newsletter service to send readers fake emails about a nuclear strike."
  - date: 2026-11-06
    text: "Context: Ukrainska Pravda's newsletter account is hacked, and subscribers get a fake email about a “terrorist attack in Kyiv”."
  - date: 2026-11-11
    text: "Overnight, Ukrinform's staff notice suspicious activity on the agency's systems. By morning they are working with the specialized state services."
  - date: 2026-11-11
    text: "In the afternoon, the attackers break through the website's protection. The homepage shows the word “ZELENET”, a crossed-out Ukrainian flag and a link to a Telegram channel, and the X account is renamed and given a pro-russian slogan. The image is removed within minutes and the site goes into maintenance mode."
  - date: 2026-11-11
    text: "Ukrinform confirms a cyberattack on its information resources and says it is working with the State Service of Special Communications and the SBU. Director general Serhii Cherevatyi tells IMI that russians are behind it."
  - date: 2026-11-12
    text: "In the afternoon, Ukrinform says its website is resuming work."
attack:
  - tactic: "Impact"
    id: T1491.002
    name: "Defacement: External Defacement"
    text: "Replaced the agency's homepage with an anti-Ukrainian image and a link to a Telegram channel."
detect:
  - "Suspicious activity at night: Ukrinform's staff spotted it overnight, hours before the homepage was replaced, and brought in the state services by morning."
  - "Changes to a social account's name, bio or profile picture that nobody on the team made. On X, the attackers renamed the account and changed its bio."
  - "Logins to the website's admin panel, hosting or social accounts from a new device, place or time, and new admin users that nobody added."
  - "Readers and other newsrooms reporting a strange page or post. Make it easy for them to tell you, at any hour."
check:
  - "Protect the website's admin panel, hosting and social accounts with phishing-resistant MFA, and keep the list of people with admin rights short."
  - "Have a maintenance page ready and know who can switch the site to it. Ukrinform took the defacement down within minutes."
  - "Know in advance how to get a hijacked social account back, and where you'll tell readers to check for real news in the meantime."
  - "In Ukraine, report incidents to CERT-UA and work with the State Service of Special Communications and the SBU, as Ukrinform did."
  - "Readers: if a trusted outlet's site or account suddenly posts something hostile or odd, check its other channels before sharing it, and don't follow links from the hacked page."
unknown:
  - "How the attackers got in, and whether the website and the X account were taken over the same way."
  - "The exact time of the break-in, when the site was fully back, and whether the X account has been recovered."
  - "Whether internal systems, data or published news were touched."
  - "Who did it. Cherevatyi blames russia, but no technical findings have been published and no group has claimed it."
  - "Whether it's linked to the Air Alert, Kyiv Independent and Ukrainska Pravda incidents earlier in the month."
  - "When the earlier, stronger attack Cherevatyi mentioned took place."
jobs: [incident-responder, soc-analyst, iam-engineer, threat-intelligence-analyst, security-administrator]
topics: [crisis-communications, hacktivism-influence, identity-attacks, mfa-conditional-access, incident-response-process]
sources:
  - name: "Укрінформ: Сайт Укрінформу поновлює роботу після кібератаки"
    url: "https://www.ukrinform.ua/rubric-society/4183861-sajt-ukrinformu-ponovlue-robotu-pisla-kiberataki.html"
  - name: "Детектор медіа: Хакери з ночі атакують ресурси Укрінформу"
    url: "https://detector.media/infospace/article/253925/2026-11-11-khakery-z-nochi-atakuyut-resursy-ukrinformu/"
  - name: "IMI: Ukrinform website targeted in cyberattack"
    url: "https://imi.org.ua/en/russias-crimes/rosiyani-atakuvali-sajt-ukrinformu"
  - name: "ІМІ: Укрінформ поновлює роботу сайту після кібератаки"
    url: "https://imi.org.ua/news/ukrinform-vidnovyv-robotu-sajtu-pislya-kiberataky"
  - name: "The Kyiv Independent: Hackers target Ukraine's state news agency Ukrinform, replace website with anti-Ukrainian messages"
    url: "https://kyivindependent.com/hackers-target-ukraines-state-news-agency-ukrinform-replace-website-with-anti-ukrainian-messages/"
  - name: "Ukrainska Pravda (Yahoo News): Crossed-out flag and pro-Russian slogan: hackers attack state news agency Ukrinform"
    url: "https://www.yahoo.com/news/world/articles/crossed-flag-pro-russian-slogan-144400151.html"
  - name: "Hromadske: Hackers deface Ukraine's state news agency website and hijack its X profile"
    url: "https://hromadske.ua/en/ukraine/274208-hackers-deface-ukraines-state-news-agency-website-and-hijack-its-x-profile"
  - name: "24 Канал: Закреслений прапор та російські гасла: хакери зламали ресурси Укрінформу"
    url: "https://24tv.ua/kiberataka-ukrinform-hakeri-zlamali-sayt-sotsmerezhi_n3178523"
  - name: "dev.ua: A cyberattack was carried out on Ukrinform's information resources: specialists are working to restore work"
    url: "https://dev.ua/en/news/na-informatsiini-resursy-ukrinformu-zdiisneno-kiberataku-1794411083"
  - name: "AIN: Хакери атакують розсилки українських медіа: фейкові листи надіслали від імені «Української правди» та The Kyiv Independent"
    url: "https://ain.ua/2026/11/06/z-rozsilok-ukrayinskoyi-pravdi-ta-the-kyiv-independent-nadislali-feikovi-povidomlennia-pislia-zlamiv/"
  - name: "Суспільне: Зламали інтерфейс оператора, а не застосунок: розробники «Повітряної тривоги» пояснили, як сталася кібератака"
    url: "https://suspilne.media/1444525-zlamali-interfejs-operatora-a-ne-zastosunok-rozrobniki-povitranoi-trivogi-poasnili-ak-stalasa-kiberataka/"
  - name: "Еспресо: Одне з українських інформагенств атакували хакери, Держспецзв'язку підозрює їхню причетність до російського генштабу"
    url: "https://espreso.tv/odne-z-ukrainskikh-informagenstv-atakuvali-khakeri-derzhspetszvyazku-pidozryue-ikhnyu-prichetnist-do-rosiyskogo-genshtabu"
---

Ukrinform is Ukraine's state news agency. Overnight into Wednesday, 11 November, its staff noticed suspicious activity on the agency's systems, and by morning they were working with the specialized state services. In the afternoon, the attackers broke through the website's protection. The homepage was replaced with the word “ZELENET”, a crossed-out Ukrainian flag and a link to a Telegram channel. Ukrinform's X account was renamed the same way and given a pro-russian slogan in its bio.

The agency took the image down within minutes and put the site into maintenance mode with a “back shortly” notice. On the afternoon of 12 November, Ukrinform said its website was resuming work. It says it's working with the State Service of Special Communications and Information Protection and the SBU's counterintelligence department for information security, and that the adversary keeps improving its methods and tools.

Director general Serhii Cherevatyi told IMI that russians were behind the attack and said hackers try to break in constantly. He called it roughly the fourth similar attack in his time at the agency, and said an earlier one was stronger and took the site offline for several hours. He said it was too early to say what kind of attack it was. No group has claimed it, and no official technical findings have been published.

It's the latest in a series of attacks on channels Ukrainians trust: fake alerts in the Air Alert app on 1 November, fake emails sent through the Kyiv Independent's systems on 4 November and through Ukrainska Pravda's newsletter on 6 November. No link between them has been shown. Ukrinform has been a target before: in January 2023, CERT-UA linked a wiper attack on the agency to Sandworm, a group tied to russia's military intelligence.
