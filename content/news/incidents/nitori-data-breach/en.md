---
# An incident breakdown → lvlulcuma.com/en/news/incidents/nitori-data-breach/
title: "Nitori: up to 37.62 million customer records may have leaked after weeks of unnoticed access"
dek: "On 9 November 2026, Japanese furniture and home goods retailer Nitori said an outsider had got into one of its systems and that up to 37.62 million records of customer data may have leaked; it found the intrusion on 6 November, but the access may go back to October."
type: breach
status: unfolding       # unfolding | confirmed | report (the victim or investigators published a full report)
date: 2026-11-09        # when it became public
published: 2026-11-16   # when this breakdown was published
who: "Nitori Holdings, a Japanese furniture and home goods retailer with 879 stores in Japan and 219 abroad, and its members, online buyers and business customers"
sector: "Retail"
entry: "Not known yet"
impact: "Up to 37.62 million records may have leaked: names, addresses, phone numbers, email addresses, birth dates and gender of members, contact details of business customers, and online order data. No login passwords or card data, Nitori says."
timeline:
  - date: 2022-09-20
    text: "Context: Nitori reports a credential-stuffing attack on its app, in which logins leaked from other sites were tried on Nitori accounts. About 132,000 accounts may have been viewed."
  - date: 2026-10
    text: "An outsider may already have access to Nitori's system from mid-to-late October, according to log analysis done after the intrusion was found. Nitori is still checking this."
  - date: 2026-11-06
    text: "Nitori confirms unauthorized access by an outsider to a system it manages, blocks it and starts an investigation with an outside specialist firm."
  - date: 2026-11-09
    text: "Nitori publishes a notice: up to 37.62 million records of personal data held on its servers may have leaked. It is reporting to Japan's Personal Information Protection Commission and the police."
  - date: 2026-11-11
    text: "A spokesperson tells BleepingComputer that Nitori is still investigating the cause, including whether ransomware was involved, and doesn't yet know how many customers are affected."
detect:
  - "Unusually large reads or exports of customer records, especially one account touching far more different customers than it normally does."
  - "Access to systems that hold customer data from new places, at odd hours, or by accounts of former staff or contractors."
  - "Look back weeks, not days: after spotting the intrusion on 6 November, Nitori's log analysis found possible access from October."
check:
  - "Review who can search and export customer data, including former staff and contractors, and remove access nobody needs."
  - "Keep logs of who reads customer data long enough to look back several weeks, and record customer IDs in them rather than the personal data itself."
  - "Don't keep old order data longer than you need it."
  - "Confirm any request to change payment details or bank accounts through a channel you already know, not the one the request came in."
  - "Nitori customers: expect fake emails, texts and calls pretending to be Nitori, a delivery company or an online marketplace. Nitori says it never asks for passwords, card numbers or PINs; don't use contact details from a suspicious message."
unknown:
  - "How the attackers got in and which system they reached."
  - "Whether data was actually taken, or only could have been. Nitori says it “may have leaked”."
  - "How many people are affected: 37.62 million is a count of records, and one person can appear in several."
  - "Whether ransomware was involved. Nobody has claimed the attack."
  - "Which online marketplaces' order data is included."
  - "When affected customers will hear from Nitori by email or post."
jobs: [incident-responder, soc-analyst, detection-engineer, privacy-analyst, data-protection-officer]
topics: [data-breach-response, log-analysis, anomaly-detection, access-reviews, everyday-threats]
sources:
  - name: "ニトリホールディングス: 当社システムへの不正アクセスによる個人情報漏えいの可能性に関するお詫びとお知らせ"
    url: "https://www.nitorihd.co.jp/news/items/2b702dbe4d438f7fef74945d68e5bd27_3.pdf"
  - name: "ニトリネット: 当社システムへの不正アクセスによる個人情報漏えいの可能性に関するお詫びとお知らせ"
    url: "https://www.nitori-net.jp/ec/notices/info261109/"
  - name: "NHK: ニトリに不正アクセス 最大3762万件の個人情報が流出の可能性"
    url: "https://news.web.nhk/newsweb/na/nd-20261109de73045"
  - name: "Impress Watch: ニトリ、最大3762万件の個人情報流出の恐れ　不正アクセス"
    url: "https://www.watch.impress.co.jp/docs/news/2154952.html"
  - name: "BleepingComputer: Japanese furniture giant Nitori says hackers stole 37.6M customer records"
    url: "https://www.bleepingcomputer.com/news/security/japanese-furniture-giant-nitori-says-hackers-stole-376m-customer-records/"
  - name: "innovatopia: ニトリに不正アクセス、最大3,762万件の個人情報が流出の可能性 パスワードとカードは対象外"
    url: "https://innovatopia.jp/cyber-security/cyber-security-news/119884/"
  - name: "ネットショップ担当者フォーラム: ニトリ、外部からの不正アクセスで最大3762万件が流出した可能性"
    url: "https://netshop.impress.co.jp/n/2026/11/11/17020"
  - name: "The Star: Cyberattack puts 37.62 million Nitori customer records at risk"
    url: "https://www.thestar.com.my/aseanplus/aseanplus-news/2026/11/09/cyberattack-puts-3762-million-nitori-customer-records-at-risk"
  - name: "一創: ニトリの情報漏洩：最大3,762万件の対象確認となりすまし連絡の見分け方"
    url: "https://www.issoh.co.jp/tech/details/19545/"
  - name: "ScanNetSecurity: 「ニトリアプリ」にパスワードリスト型攻撃、約13万2,000アカウントが閲覧された可能性"
    url: "https://scan.netsecurity.ne.jp/article/2022/09/22/48226.html"
---

Nitori is a Japanese furniture and home goods retailer, sometimes called the IKEA of Japan, with 879 stores in Japan and 219 abroad. On 6 November 2026 it found that an outsider had got into a system it manages. It blocked the access and called in an outside security firm.

On Monday, 9 November, Nitori said up to 37.62 million records of personal data held on its servers may have leaked. For individual members and buyers, that means member number, name, email address, postal address, phone number, birth date and gender. For business members, it means the company's details and the contact person's name, email and phone. Order data from its online store and its shops on online marketplaces is included too. Which details are exposed differs from customer to customer; login passwords and card numbers aren't among them.

Log analysis after the discovery suggests the outsider may have had access since mid-to-late October, weeks before anyone noticed. Nitori is reporting to Japan's Personal Information Protection Commission and the police, and will contact affected customers by email or post. It hasn't said how the attackers got in. A spokesperson told BleepingComputer that the company is still investigating, including whether ransomware was involved. No group has claimed the attack.

Nitori warns customers about what may come next: fake emails, texts and calls in its name, or in the name of a delivery company or online marketplace, built with the leaked details. It says it will never ask for passwords, card numbers or PINs. This isn't Nitori's first incident: in 2022, attackers tried logins leaked from other sites on its app, and about 132,000 accounts may have been viewed.
