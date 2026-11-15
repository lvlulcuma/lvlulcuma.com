---
# Roadmap topic. Its title and summary show on every job page that lists "security-fundamentals" in learn.yml.
# The text under the dashes is the topic's own page: lvlulcuma.com/en/roadmap/topics/security-fundamentals/
# How these pages are written: docs/claude/roadmap-topic.md
title: "Security fundamentals"
summary: "Confidentiality, integrity and availability (the CIA triad), authentication vs authorization, least privilege, defense in depth, and the difference between a threat, a vulnerability and a risk."
date: 2026-11-15
sources:
  - name: "44 U.S.C. § 3552: Definitions (Federal Information Security Modernization Act of 2014)"
    url: "https://www.law.cornell.edu/uscode/text/44/3552"
  - name: "NIST FIPS 199: Standards for Security Categorization of Federal Information and Information Systems, 2004"
    url: "https://doi.org/10.6028/NIST.FIPS.199"
  - name: "NIST CSRC Glossary: potential impact"
    url: "https://csrc.nist.gov/glossary/term/potential_impact"
  - name: "NIST CSRC Glossary: security controls"
    url: "https://csrc.nist.gov/glossary/term/security_controls"
  - name: "NIST SP 800-63-4: Digital Identity Guidelines, July 2025"
    url: "https://csrc.nist.gov/pubs/sp/800/63/4/final"
  - name: "NIST SP 800-63-4: Glossary"
    url: "https://pages.nist.gov/800-63-4/sp800-63/glossary"
  - name: "NIST SP 800-63B-4: Introduction (authentication assurance levels)"
    url: "https://pages.nist.gov/800-63-4/sp800-63b/introduction"
  - name: "NIST SP 800-63B-4: Authenticators (passwords, phishing resistance)"
    url: "https://pages.nist.gov/800-63-4/sp800-63b/authenticators"
  - name: "CISA: Implementing Phishing-Resistant MFA (fact sheet), October 2022"
    url: "https://www.cisa.gov/sites/default/files/publications/fact-sheet-implementing-phishing-resistant-mfa-508c.pdf"
  - name: "FIDO Alliance: Passkeys"
    url: "https://fidoalliance.org/passkeys/"
  - name: "RFC 9110: HTTP Semantics, 2022 (401 and 403)"
    url: "https://www.rfc-editor.org/rfc/rfc9110.html"
  - name: "OWASP Top 10:2025: Introduction"
    url: "https://owasp.org/Top10/2025/0x00_2025-Introduction/"
  - name: "Saltzer and Schroeder: The Protection of Information in Computer Systems, Proceedings of the IEEE, 1975"
    url: "https://web.mit.edu/saltzer/www/publications/protection/"
  - name: "NIST SP 800-53 Rev. 5: Security and Privacy Controls (AC-5 Separation of Duties, AC-6 Least Privilege)"
    url: "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
  - name: "CISA and NSA: Top Ten Cybersecurity Misconfigurations (AA23-278A), 2023"
    url: "https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-278a"
  - name: "NIST CSRC Glossary: defense-in-depth"
    url: "https://csrc.nist.gov/glossary/term/defense_in_depth"
  - name: "James Reason: Human error: models and management, BMJ 2000"
    url: "https://www.bmj.com/content/320/7237/768"
  - name: "NIST: NIST Releases Version 2.0 of Landmark Cybersecurity Framework, February 26, 2024"
    url: "https://www.nist.gov/news-events/news/2024/02/nist-releases-version-20-landmark-cybersecurity-framework"
  - name: "NIST SP 1300: CSF 2.0 Small Business Quick-Start Guide, February 2024"
    url: "https://csrc.nist.gov/pubs/sp/1300/final"
  - name: "NIST SP 800-207: Zero Trust Architecture, August 2020"
    url: "https://csrc.nist.gov/pubs/sp/800/207/final"
  - name: "NIST SP 800-30 Rev. 1: Guide for Conducting Risk Assessments, September 2012"
    url: "https://csrc.nist.gov/pubs/sp/800/30/r1/final"
  - name: "NIST CSRC Glossary: threat"
    url: "https://csrc.nist.gov/glossary/term/threat"
  - name: "NIST CSRC Glossary: threat source"
    url: "https://csrc.nist.gov/glossary/term/threat_source"
  - name: "NIST CSRC Glossary: vulnerability"
    url: "https://csrc.nist.gov/glossary/term/vulnerability"
  - name: "NIST CSRC Glossary: risk"
    url: "https://csrc.nist.gov/glossary/term/risk"
  - name: "NIST CSRC Glossary: risk response"
    url: "https://csrc.nist.gov/glossary/term/risk_response"
  - name: "FIRST: CVSS v4.0 User Guide (CVSS-B measures severity, not risk)"
    url: "https://www.first.org/cvss/v4.0/user-guide"
  - name: "CISA: Known Exploited Vulnerabilities Catalog"
    url: "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
  - name: "MITRE ATT&CK T1621: Multi-Factor Authentication Request Generation"
    url: "https://attack.mitre.org/techniques/T1621/"
  - name: "MITRE ATT&CK T1114.003: Email Forwarding Rule"
    url: "https://attack.mitre.org/techniques/T1114/003/"
  - name: "Microsoft Learn: Get-LocalGroupMember"
    url: "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.localaccounts/get-localgroupmember"
  - name: "Microsoft Learn: Get-FileHash"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powershell.utility/get-filehash"
  - name: "Apple Support: Add a user or group on Mac"
    url: "https://support.apple.com/guide/mac-help/mchl3e281fc9"
  - name: "Apple Support: Set up users, guests and groups on Mac (macOS Catalina guide)"
    url: "https://support.apple.com/en-au/guide/mac-help/mtusr001/10.15/mac"
  - name: "Ubuntu Server docs: User management"
    url: "https://documentation.ubuntu.com/server/how-to/security/user-management"
  - name: "Red Hat: Managing sudo access (RHEL 10)"
    url: "https://docs.redhat.com/en/documentation/Red_Hat_Enterprise_Linux/10/html/security_hardening/managing-sudo-access"
visuals:
  # The three things security protects, each with what breaks it.
  cia:
    kind: cards
    layout: rows
    cards:
      - title: "Confidentiality"
        text: "Only the people who are allowed to see information can see it. Kept by access control, encryption and strong sign-in."
        tags: ["a leaked customer database", "reading a colleague's email", "a stolen laptop without encryption"]
      - title: "Integrity"
        text: "Information is correct and complete, and nobody changed or destroyed it without permission. Kept by permissions, hashes and signatures, approvals and backups."
        tags: ["swapped bank details on an invoice", "a tampered software update", "deleted logs"]
      - title: "Availability"
        text: "The people who need information or a system can use it when they need it. Kept by backups, spare systems, updates and capacity."
        tags: ["a website flooded with traffic (DDoS)", "ransomware locking files", "a power cut"]
    caption: "For any incident, ask which of the three it hit. Ransomware hits availability, and confidentiality too when the gang copies the files before locking them."
  # From a claim to a decision: identification, authentication, authorization.
  auth:
    kind: route
    stages:
      - where: "Identification"
        steps: ["You type your username or email address: who you say you are"]
      - where: "Authentication"
        steps: ["You prove it: a password, a passkey, a code, a fingerprint", "The system checks the proof and signs you in"]
      - where: "Authorization"
        steps: ["You open a page, and the system checks what this account may do", "It's allowed, so you get the page"]
    caption: "Two or more different kinds of proof make it multi-factor (MFA). Authorization runs on every request: signed in but not allowed gets <code>403 Forbidden</code>, while <code>401</code> means the server doesn't know who you are yet."
  # Common ways to sign in, and whether a fake website could steal them.
  signin:
    kind: window
    title: "Sign-in methods against phishing"
    head: ["Method", "Factors, and can a fake site use it?"]
    rows:
      - ["Password only", "Something you know. Yes: you type it into the fake site"]
      - ["Password + code by text message", "Know + have. Yes: you type the code into the fake site too"]
      - ["Password + code from an app", "Know + have. Yes, the same way, as long as the code is still valid"]
      - ["Password + push approval", "Know + have. Yes: the attacker signs in and you tap Approve"]
      - ["Passkey or security key", "Have, unlocked with a fingerprint, face or PIN. No: it only answers the real site"]
    mark: 5
    caption: "Only cryptographic sign-in, such as passkeys and security keys built on FIDO/WebAuthn, can resist phishing. Every other line is still far better than a password alone."
  # A made-up access review that finds privilege creep.
  access:
    kind: window
    title: "Access review: Finance share (made up)"
    head: ["Account", "Has, and does the job need it?"]
    rows:
      - ["alex, accounts clerk", "Read and change invoices: yes"]
      - ["sam, accounts clerk", "Read and change invoices: yes"]
      - ["jordan, moved to Sales in March", "Still read and change: no, remove it"]
      - ["svc-backup, the backup service", "Change everything: no, read is enough"]
      - ["it-admin, also used for daily email", "Full control: split into an admin account and an everyday one"]
    mark: 3
    caption: "Access piles up as people change jobs: privilege creep. A regular review brings every account back to what its work needs."
  # The layers that stand between one phishing email and real damage.
  layers:
    kind: cards
    layout: rows
    cards:
      - title: "Email filter"
        text: "Blocks known bad links and attachments before anyone sees them."
        tags: ["Protect"]
      - title: "People"
        text: "Staff who spot the fake and report it."
        tags: ["Protect", "Detect"]
      - title: "Phishing-resistant MFA"
        text: "A stolen password alone isn't enough to sign in."
        tags: ["Protect"]
      - title: "Least privilege"
        text: "An account that does get taken reaches only what its job needs."
        tags: ["Protect"]
      - title: "Monitoring"
        text: "Alerts on strange sign-ins and new mail forwarding rules."
        tags: ["Detect"]
      - title: "Incident response"
        text: "A plan to lock the account, end its sessions and undo the changes."
        tags: ["Respond"]
      - title: "Backups"
        text: "A way to restore what was changed, deleted or locked."
        tags: ["Recover"]
    caption: "Every layer has holes. Defense in depth means the next layer covers them. The tags are functions of NIST's Cybersecurity Framework 2.0: layers don't only block, they also notice, respond and recover."
  # A made-up risk list: the highest CVSS score isn't the highest risk.
  risk:
    kind: window
    title: "Risk list (made up)"
    head: ["Finding", "Likelihood × impact = risk"]
    rows:
      - ["VPN appliance flaw, CVSS 7.2, open to the internet, listed in CISA's KEV catalog", "High × High = High"]
      - ["Shared admin password for the company website, no MFA", "Medium × High = High"]
      - ["Database server flaw, CVSS 9.8, on a lab machine with no network connection", "Low × Medium = Low"]
      - ["Old office printer with its default password, reachable only inside", "Low × Low = Low"]
    mark: 1
    caption: "A simple three-level scale; NIST's risk assessment guide uses five. A severity score describes the flaw. Risk adds how exposed the system is, whether attackers use the flaw, and what the system holds."
  quiz:
    kind: questions
    items:
      - q: "Ransomware locks a clinic's patient records, and the gang also posts some of them online. Which parts of the CIA triad were hit?"
        a: "Availability, because staff can't open the records; confidentiality, because records were leaked; and integrity too, because files were changed without permission when they were encrypted."
      - q: "An attacker changes the bank account number in an invoice email before it reaches the customer. Which part of the triad is that?"
        a: "Integrity: the information was changed without permission. The email still arrives (availability) and may not have been secret (confidentiality), but it's no longer correct."
      - q: "You sign in to a company app, open <code>/admin</code> and get <code>403 Forbidden</code>. Did authentication or authorization fail?"
        a: "Authorization. The app knows who you are, and your account isn't allowed there. A <code>401</code> would have meant it didn't accept who you are yet: authentication."
      - q: "A bank asks for your password and then a code sent by text message. Is that MFA? Is it phishing-resistant?"
        a: "It's MFA: something you know plus something you have. It isn't phishing-resistant: a fake page can ask for the code and pass it on while it's still valid. Only cryptographic methods such as passkeys and security keys resist phishing."
      - q: "Someone has worked at a company for six years in three roles and still has the access of all three. What's this called, and what fixes it?"
        a: "Privilege creep. An access review compares each account with what its current job needs and removes the rest: least privilege."
      - q: "Why should changing a supplier's bank details take two different people?"
        a: "Separation of duties. One stolen or dishonest account can't move the money alone; it would take two people working together."
      - q: "Antivirus missed a piece of malware, but the company restored everything from backups in a day. Which idea does that show?"
        a: "Defense in depth. The protective layer had a hole, and a later layer (recovery from backups) limited the damage."
      - q: "Flaw A scores CVSS 9.8 on a machine with no network connection. Flaw B scores 7.2 on an internet-facing VPN and is in CISA's KEV catalog. Which do you fix first?"
        a: "Flaw B. CVSS measures severity, not risk. B is exposed and known to be exploited, so its likelihood is far higher; A is hard to reach at all."
      - q: "A company buys cyber insurance against ransomware. Which risk response is that, and what doesn't it change?"
        a: "Transfer (or share): part of the financial harm moves to the insurer. It doesn't make an attack less likely, so it goes with mitigation, not instead of it."
---

## The short version

Think of a bank branch.

- The money, the account records and the doors that open for customers are what the bank protects: its **assets**.
- It makes three promises. Only the right people see account details (**confidentiality**). Balances are correct and
  nobody quietly edits them (**integrity**). The branch is open and the cash is there when customers come
  (**availability**). Together, that's the **CIA triad**.
- At the counter, the teller checks your ID: that's **authentication**, proving who you are. Then the teller checks
  what your account allows: that's **authorization**. You may take money from your account, not your neighbor's.
- A teller has a key to their own drawer, not to the vault: **least privilege**. Opening the vault takes two people
  with two keys: **separation of duties**.
- A guard at the door, cameras, a vault with a time lock, an alarm and insurance: if one fails, the next one still
  holds. That's **defense in depth**.
- Robbers exist: that's a **threat**. A back door left unlocked is a **vulnerability**. How likely a robbery is, and
  how bad it would be, is the **risk**.

<mark>Security keeps information confidential, correct and available. You get there by checking who someone is and
what they may do, giving every person and program only the access they need, and stacking layers so that one failure
isn't the end. Risk tells you where to start: how likely something is, and how much it would hurt.</mark> These ideas
come up in every security job, from writing code to answering alerts to talking to the board.

By the end of this page you'll be able to:

- say which part of the CIA triad an incident hit, with an example for each;
- explain the difference between authentication and authorization, and between a `401` and a `403`;
- name the three kinds of authentication factor and say which sign-in methods resist phishing;
- apply least privilege and separation of duties, and spot privilege creep in a list of accounts;
- describe defense in depth and choose layers that cover each other's gaps;
- tell a threat, a vulnerability and a risk apart, and explain why a high CVSS score isn't the same as high risk;
- choose a response to a risk: accept, avoid, mitigate, share or transfer.

## Words you'll need

- **Asset:** anything worth protecting: data, systems, devices, money, a company's good name.
- **Control:** a safeguard put in place to protect confidentiality, integrity and availability: a lock, a rule, a
  setting, a backup. Also called a safeguard or a countermeasure.
- **Privilege:** a right to do something on a system: read a file, change it, install software, manage accounts.
- **Exploit:** a way, often a program, to take advantage of a vulnerability.
- **Incident:** in US law, an event that harms, or is about to harm, the confidentiality, integrity or availability
  of information or a system without lawful authority, or that breaks the law or security rules.

> [!NOTE]
> The definitions on this page come from NIST, the US standards agency whose security glossary is free to read, and
> from US federal law (FISMA). Other standards word some of them differently.

## The CIA triad: what security protects

US law defines information security as protecting information and systems "from unauthorized access, use,
disclosure, disruption, modification, or destruction" so that they stay confidential, intact and available. Those
three goals are the **CIA triad** (nothing to do with the intelligence agency).

<!-- pic: cia -->

### Two more words inside integrity

The same law says integrity includes two more ideas you'll hear often:

- **Authenticity:** the information really comes from where it says it comes from.
- **Non-repudiation:** the sender can't credibly deny sending it later, for example because a message carries their
  digital signature.

### How much does each one matter?

It depends on the information. A public website has no secrets, so confidentiality barely matters there, but a
defaced page or an outage does. Payroll data needs all three. The US federal standard FIPS 199 (2004) rates the harm
from losing each of the three separately:

| Impact | Loss of confidentiality, integrity or availability could have… |
|---|---|
| Low | a limited adverse effect |
| Moderate | a serious adverse effect |
| High | a severe or catastrophic adverse effect |

Those ratings then shape how much protection a system gets. You'll meet this way of thinking in risk assessments,
audits and incident reports: "a moderate integrity impact" is a precise phrase, not a vague one.

## Authentication and authorization

Two words that look alike and get mixed up all the time. **Authentication** answers "who are you?".
**Authorization** answers "what may you do?". A system needs both, in that order.

<!-- pic: auth -->

### Who are you? Authentication

Typing a username only **identifies** you: anyone can type a name. **Authentication** is the proof. NIST's digital
identity guidelines (SP 800-63-4, July 2025) describe it as proving that you control one or more **authenticators**
tied to the account, and they name three kinds of **authentication factor**:

| Factor | Examples |
|---|---|
| Something you know | A password, a PIN |
| Something you have | A phone with an authenticator app, a security key, a smart card |
| Something you are | A fingerprint, a face |

**Multi-factor authentication (MFA)** needs more than one distinct type of factor. Two passwords are still one factor;
a password plus a code from your phone are two.

MFA isn't all equally strong. NIST says plainly that passwords aren't phishing-resistant, and neither are codes you
type in or approvals you tap: a fake website can ask for them and pass them on. Phishing resistance needs
cryptographic sign-in, where your device proves itself only to the real site. CISA calls FIDO/WebAuthn the only widely
available phishing-resistant authentication, and **passkeys** are FIDO credentials.

<!-- pic: signin -->

Push approvals have their own weak spot: an attacker who has your password can keep signing in and flood you with
prompts until someone taps **Approve** just to make them stop. MITRE ATT&CK calls it MFA request generation
(T1621); you'll also hear "MFA fatigue" or "push bombing".

NIST also sets three **authentication assurance levels**: AAL1 allows a single factor; AAL2 needs two distinct
factors and must offer a phishing-resistant option; AAL3 requires a phishing-resistant cryptographic authenticator
whose private key can't be copied out.

> [!TIP]
> NIST's current password rules (SP 800-63B-4) surprise many people:
> - at least **15 characters** when the password is the only factor, at least **8** when it's one of several;
> - accept passwords up to **at least 64 characters** long;
> - **no** composition rules such as "one capital, one digit, one symbol";
> - **no** forced changes on a schedule, but a forced change when there's evidence the password was stolen;
> - check new passwords against a list of common, expected and already-leaked ones.
>
> Long beats complicated.

### What may you do? Authorization

NIST describes **authorization** as a decision to grant access, usually made automatically from what's known about
the account: its role, its groups, its attributes. Two old rules make it work, both from Saltzer and Schroeder's 1975
paper on protecting information in computers:

- **Complete mediation:** every access to every object must be checked. Checking once at sign-in and trusting
  everything after is how apps leak other people's data.
- **Fail-safe defaults:** base decisions on permission rather than exclusion. Whatever isn't explicitly allowed is
  denied.

On the web, the two failures have their own status codes (RFC 9110): `401 Unauthorized` means the request lacks valid
authentication credentials, and `403 Forbidden` means the server understood the request and refuses it. Despite its
name, `401` is about authentication.

Authorization mistakes are the most common serious web flaw. In the OWASP Top 10:2025, **A01 Broken Access Control**
is in first place again: on average, 3.73% of the applications tested had at least one of its 40 weaknesses.
**A07 Authentication Failures** is seventh. A classic example is changing an ID in a link and seeing someone else's
record; our page on [CWE-639](/en/cwe/639/) explains how that happens and how to stop it.

> [!NOTE]
> Signing in doesn't make someone trustworthy. Once an attacker has a working account, often through a phished
> password, authorization is what limits the damage. That's where least privilege comes in.

## Least privilege

Saltzer and Schroeder put it in one sentence in 1975, and it hasn't needed changing: "Every program and every user of
the system should operate using the least set of privileges necessary to complete the job." NIST's control catalog
(SP 800-53, control AC-6) says the same: allow only the access that users, and programs acting for them, need for their
tasks.

Why it matters: when an account is stolen or a program is tricked, the attacker gets exactly what that account or
program was allowed. Least privilege keeps that small. In practice:

- **Separate everyday and admin accounts.** Read email and browse with a normal account; use an admin account only
  for admin work. CISA and NSA list "non-essential use of elevated accounts" among the most common problems their red
  and blue teams find.
- **Give programs and services only what they use.** A backup service needs to read files, not change them.
- **Prefer read over write, and narrow over broad.** One folder, not the whole drive; one team's data, not everyone's.
- **Review access regularly.** People change jobs and keep their old access. CISA and NSA call this **privilege
  creep**, and it's why access reviews exist.

<!-- pic: access -->

### Separation of duties

Some tasks are too risky for any one person. **Separation of duties** splits them, so that one person creates a
payment and another approves it. NIST's control AC-5 says it addresses the potential for abuse of authorized
privileges and reduces the risk of harm without collusion: it would take two people working together. NIST gives a
second example worth remembering: the people who manage access shouldn't also manage the audit logs that record
their own actions. Saltzer and Schroeder described a close cousin of it, "separation of privilege": a lock that
needs two keys.

> [!WARNING]
> Least privilege that gets in the way doesn't last: people share passwords or ask for admin rights "just in case".
> Saltzer and Schroeder had a principle for that too, psychological acceptability: protection has to be easy to use,
> or people won't use it correctly. Make the right way the easy way, for example with quick, logged requests for
> extra access.

## Defense in depth

No single control is perfect. **Defense in depth** is NIST's name for a strategy that combines people, technology and
operations to set up barriers in several layers across an organization, so that when one fails, another still stands.

A picture from safety science explains it well. James Reason compared defenses to slices of Swiss cheese: each slice
has holes that open, shut and move, and harm gets through only when the holes in many slices line up. A security
example: a phishing email gets past the filter (a hole), a tired employee clicks (another hole), but MFA, least
privilege, monitoring and backups are still in the way.

<!-- pic: layers -->

Layers aren't only walls. NIST's **Cybersecurity Framework 2.0**, released on February 26, 2024, organizes security
into six functions: **Govern**, **Identify**, **Protect**, **Detect**, **Respond** and **Recover**. A design with
plenty of Protect and no Detect or Recover has depth in one direction only: when something gets through, nobody
notices and there's nothing to restore from.

Two mistakes to avoid:

- **Many layers with the same hole.** If the VPN, email and admin console all accept the same phishable password, a
  single phished password opens all three: three products, one layer.
- **No layers inside.** CISA and NSA list lack of network segmentation and insufficient internal network monitoring
  among the top ten misconfigurations: once an attacker is inside, nothing stops or sees them moving around.

Further down the path, **zero trust** (NIST SP 800-207, August 2020) takes this further: no account or device is
trusted just because of where it is on the network or who owns it, and every request is checked.

## Threat, vulnerability and risk

These three words are often used as if they meant the same thing. They don't, and mixing them up leads to fixing the
wrong things first. NIST's risk assessment guide (SP 800-30 Rev. 1, September 2012) defines them, in short:

- **Threat:** any circumstance or event that could harm an organization through an information system, by
  unauthorized access, destruction, disclosure, modification of information, or denial of service. In the bank: robbers.
  In IT: a ransomware gang scanning the internet for unpatched VPNs.
- **Vulnerability:** a weakness in a system, its security procedures, its internal controls or how it was built, that
  a threat source could exploit or trigger. In the bank: the back door left unlocked. In IT: the unpatched VPN.
- **Risk:** how much an organization is threatened by a possible event, usually a combination of the **impact** if it
  happens and the **likelihood** that it will. In the bank: how likely a robbery is and what it would cost. In IT: how
  likely the gang finds and uses the flaw, and what an attack would do.

A **threat source** isn't always a person. NIST includes accidents and things nobody intended: a natural disaster, a
technical failure, a human error. A flood in the server room is a threat too.

Put together: risk needs something worth protecting, a weakness, and someone or something that could use it. Take
any one away and the risk falls. That's also how you lower it: patching removes the vulnerability, a firewall rule
makes it harder to reach, backups shrink the impact.

### Measuring risk

Most risk assessments rate likelihood and impact on a short scale and combine them. NIST's guide uses five levels:
very low, low, moderate, high and very high. Smaller teams often use three.

<!-- pic: risk -->

The trap in that list is the CVSS score, the 0–10 number attached to many published vulnerabilities. FIRST, the
organization behind CVSS, says it outright: CVSS base scores are designed to measure the **severity** of a
vulnerability and should not be used alone to assess **risk**. Risk adds what the score doesn't know: how exposed the
system is, how valuable it is, and whether attackers actually use the flaw. For that last part, CISA's **Known
Exploited Vulnerabilities (KEV)** catalog lists vulnerabilities that have been exploited in the wild, and CISA asks
organizations to use it as an input when they decide what to fix first.

### Deciding what to do about a risk

For each risk, someone has to decide what to do. NIST names five responses:

| Response | What it means | Example |
|---|---|---|
| Accept | Live with it, on purpose, and write it down | An old kiosk PC with no data and no network stays as it is |
| Avoid | Stop doing the thing that creates the risk | Switch off an internet-facing service nobody uses |
| Mitigate | Add controls that lower the likelihood or the impact | Patch, add phishing-resistant MFA, keep offline backups |
| Share | Split the risk with another party | A provider runs the service under a contract that covers security |
| Transfer | Move part of the harm to someone else | Cyber insurance pays for recovery |

Risk management, risk registers and threat modeling go deeper further down the path.

## How it shows up on the job

Here's a made-up timeline from a small company's incident report. Every line touches one of the ideas on this page:

```
Made-up incident timeline · EXAMPLE Ltd. · 2026-11-10

09:02  "Invoice overdue" email with a link reaches 40 staff; the filter lets it in
09:05  alex and sam type their passwords into a fake page (sign-in.example)
09:06  alex: sign-in from 203.0.113.50, password OK, MFA push denied
09:07  sam: sign-in from 203.0.113.50, password OK, 6 pushes in 2 min, 6th approved
09:12  New rule in sam's mailbox: forward "payment" mail to billing@mail.example
09:40  sam's account opens the Finance share: invoices only; HR, Payroll: 403
10:05  From sam's account: supplier bank change requested, 2nd approver rejects
10:20  Alert on new forwarding rule: sessions revoked, password reset, rule removed
```

Read it from the top:

1. **09:02 and 09:05:** two layers with holes. The filter missed the email, and two people typed their passwords
   into a fake page. Passwords aren't phishing-resistant, so this alone gave the attacker both passwords.
2. **09:06:** a layer that held. alex denied the push, and authentication failed.
3. **09:07:** push bombing (ATT&CK T1621). After six prompts in two minutes, sam tapped **Approve**. With a passkey or
   a security key, there would have been no push to approve and nothing the fake page could reuse.
4. **09:12:** a confidentiality breach. An inbox rule quietly sends payment emails outside (ATT&CK T1114.003). MITRE
   notes that such rules can keep working after a password reset, so removing the rule matters as much as the reset.
5. **09:40:** least privilege and authorization working. sam's account reached invoices, the only thing a clerk
   needs, and was refused everywhere else.
6. **10:05:** separation of duties protecting integrity. One stolen account couldn't change where the money goes.
7. **10:20:** the Detect and Respond layers. Availability was never touched.

The risk lesson: the threat, phishing crews, will be back. The vulnerabilities are fixable: approvals by push and
forwarding mail to outside addresses. Mitigate them with phishing-resistant MFA and by turning off external forwarding,
which is MITRE's own suggested mitigation.

- **Security operations (SOC):** you triage alerts like the one at 10:20 and decide in minutes which part of the CIA
  triad is at stake and how fast to act.
- **Incident response and forensics:** you rebuild timelines like this one, describe the impact on confidentiality,
  integrity and availability, and check that every way back in, such as a forwarding rule, is closed.
- **Governance, risk and compliance (GRC) and audit:** you keep the risk register, run access reviews, map controls to
  frameworks such as NIST CSF 2.0 and record which risks were accepted, and by whom.
- **Identity and access management (IAM):** you roll out phishing-resistant MFA, design roles around least privilege
  and separate admin accounts from everyday ones.
- **Penetration testing and bug bounty:** with permission, you test authorization on every request: changing IDs,
  calling admin functions as a normal user, trying to reach other people's data.
- **Security architecture and engineering:** you design layers that cover each other's gaps, and segment networks so
  that one stolen account doesn't reach everything.
- **Secure development:** you check authorization on the server for every request, deny by default and treat Broken
  Access Control (OWASP A01) as the first thing to get right.

## Try it yourself

About twenty minutes. Nothing here changes your system, except two small text files you create and delete.

### Are you an administrator right now?

<!-- for: windows -->

Open PowerShell (type `powershell` in the Start menu) and run:

```powershell
Get-LocalGroupMember -SID S-1-5-32-544
```

This lists the computer's local administrators. It asks for the group by its SID, so it works on Windows in any
language. Is your account in the list?

<!-- for: macos -->

Open **System Settings** > **Users & Groups** and click the info button (ⓘ) next to your name. If **Allow user to
administer this computer** is on, your account is an administrator.

<!-- for: linux -->

Open a terminal and run:

```sh
id
sudo -l
```

On Debian and Ubuntu, membership in the `sudo` group means you can act as root; on Red Hat Enterprise Linux and
similar systems the group is `wheel`. `sudo -l` may ask for your password, then shows exactly what you may run.

<!-- /for -->

If you are an administrator, that's normal on a personal computer: on a Mac, the account made during setup is an
administrator, and on Ubuntu the first account is in the sudo group. In a company, least privilege means the account
you read email with wouldn't be one. What could a phishing link do with your account as it is?

### Watch integrity break

A **hash** is a short fingerprint of a file's contents: change one character and the whole fingerprint changes. Make a
tiny file, hash it, change one digit, hash it again.

<!-- for: windows -->

```powershell
Set-Content note.txt "Pay 100 to Alex"
Get-FileHash note.txt
Set-Content note.txt "Pay 900 to Alex"
Get-FileHash note.txt
Remove-Item note.txt
```

`Get-FileHash` uses SHA-256 unless you ask for another algorithm.

<!-- for: macos -->

```sh
echo "Pay 100 to Alex" > note.txt
shasum -a 256 note.txt
echo "Pay 900 to Alex" > note.txt
shasum -a 256 note.txt
rm note.txt
```

<!-- for: linux -->

```sh
echo "Pay 100 to Alex" > note.txt
sha256sum note.txt
echo "Pay 900 to Alex" > note.txt
sha256sum note.txt
rm note.txt
```

<!-- /for -->

On Linux and macOS, the two lines look like this (on Windows the hashes are different, because PowerShell saves the
line a little differently, but the point is the same):

```
e0b2c4d048c516fcd09ea13cfb7196b588459725dd5a369d8c14cc3c950f7f6a  note.txt
18add157b4bf85c243721273e49bcaa88845692f98e44c41f06201c507b8ae88  note.txt
```

One digit changed in the text; how much of the hash changed? This is how software publishers let you check that a
download wasn't altered: they publish the hash, you compare. How hashes work comes with encryption and hashing,
further down the path.
<!-- guide: check-hash -->

### Count the layers on one account

Open the security settings of the account that matters most to you, usually your main email. Write down what protects
it:

1. How long is the password, and is it used anywhere else?
2. Is there a second factor, and which kind: a text message, an app code, a push, a passkey or a security key?
3. Which recovery options are set? Whoever controls the recovery email or phone can often take over the account.
4. Does the service alert you to new sign-ins, and can you see a list of signed-in devices?

Then look back at the timeline above. Which of your layers would have stopped the attacker at 09:07, and which would
only have helped you notice later?

### A five-minute risk list

On paper, pick three things you'd hate to lose: your phone, your email, your photos. For each, write one threat, one
vulnerability, a likelihood and an impact (low, medium or high) and one response. For example (made up):

| Asset | Threat | Vulnerability | Likelihood | Impact | Response |
|---|---|---|---|---|---|
| Photos | Phone stolen or broken | The only copy is on the phone | Medium | High | Mitigate: turn on a backup |

Which of your three risks is highest, and which response did you choose for it?

## Check yourself

Try to answer before you open each one.

<!-- pic: quiz -->

## Learn more

- **[NIST CSRC Glossary](https://csrc.nist.gov/glossary)**: free definitions of thousands of security terms, each with
  the publication it comes from. Look up any word on this page.
- **[OWASP Top 10:2025](https://owasp.org/Top10/2025/0x00_2025-Introduction/)**: the most common serious web
  application risks, starting with Broken Access Control and Authentication Failures, each with examples and fixes.
- **[Saltzer and Schroeder, The Protection of Information in Computer Systems](https://web.mit.edu/saltzer/www/publications/protection/)**:
  the 1975 paper behind least privilege, fail-safe defaults and complete mediation, free online. Its first section is
  readable without a computer science degree.
- **[NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)**: the six functions of CSF 2.0 and free
  quick-start guides, including one for small businesses.
