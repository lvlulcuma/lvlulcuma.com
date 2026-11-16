---
# An incident breakdown → lvlulcuma.com/en/news/incidents/vanderbilt-university-ransomware/
title: "Vanderbilt University: talking ransom notes, a campus told to switch off and a claim of a million Social Security numbers"
dek: "On 9 November 2026, Vanderbilt University in Nashville told students and staff to shut down university devices during a cyberattack claimed by the BYOD ransomware gang, which says it stole more than a million Social Security numbers; Vanderbilt hasn't confirmed what, if anything, was taken."
type: ransomware
status: unfolding       # unfolding | confirmed | report (the victim or investigators published a full report)
date: 2026-11-09        # when it became public
published: 2026-11-16   # when this breakdown was published
who: "Vanderbilt University in Nashville, Tennessee, with about 14,000 students; Vanderbilt University Medical Center, a separate organization, says its systems weren't affected"
sector: "Higher education"
entry: "Not known yet"
impact: "University devices shut down and most systems restricted on 9 November; a password reset for everyone; cloud storage (OneDrive, SharePoint, Box) still off a week later. BYOD claims more than a million Social Security numbers and student and employee records; Vanderbilt hasn't confirmed any data theft."
timeline:
  - date: 2026-09-29
    text: "Context: the first victims of BYOD, a new ransomware gang, appear on its leak site, according to the ransomware researcher Allan Liska."
  - date: 2026-10-26
    text: "Context: BYOD claims an attack on the University of New Mexico's health system that diverts ambulances. A day later it apologizes and offers patients up to $2,500 each, while keeping the data."
  - date: 2026-11-09
    text: "In the morning, Vanderbilt says it is responding to an active cybersecurity incident and tells students and staff to shut down university devices and get off campus Wi-Fi. Ransom notes named README_BYOD_31.txt appear on desktops, and some computers play a recorded voice message from BYOD."
  - date: 2026-11-09
    text: "BYOD lists Vanderbilt on its leak site, claiming more than a million Social Security numbers and a full takeover of the domain controller. Campus Wi-Fi comes back in the evening."
  - date: 2026-11-10
    text: "Email, Okta, Brightspace, Zoom and the course system YES are back, and university devices can be used again. Vanderbilt says a full recovery may take weeks. The FBI's Nashville office says it is assisting."
  - date: 2026-11-12
    text: "Vanderbilt makes a password reset mandatory for all users as part of the cleanup."
  - date: 2026-11-13
    text: "Most systems are back, but OneDrive, SharePoint and Box are still disabled. A proposed class action over the attack is reported, filed in federal court in Tennessee."
  - date: 2026-11-15
    text: "The student newspaper reports that OneDrive and Box are still unavailable."
attack:
  - tactic: "Impact"
    id: T1491.001
    name: "Defacement: Internal Defacement"
    text: "Filled university desktops with ransom notes and played a recorded voice message on campus computers to pressure the university."
detect:
  - "Vanderbilt's own list of warning signs: unexpected pop-ups or security notices, files or folders renamed, moved or deleted, unusual permission changes in OneDrive or Box, unfamiliar apps or prompts, and unexpected requests for passwords or MFA approval."
  - "Many copies of the same text file suddenly appearing on desktops: one Vanderbilt professor counted about 40 “Read Me” files."
  - "System updates running on a computer that nobody started: a Vanderbilt employee noticed them that Monday morning."
check:
  - "Have a way to reach everyone that doesn't depend on the systems under attack. Vanderbilt used its news site, text alerts and a separate public-safety email address."
  - "Write simple instructions in advance: shut down, don't try to fix anything yourself, and report from another device, as Vanderbilt asked."
  - "Review privileged accounts, domain controllers and cloud storage activity, and check that your backups are intact: BYOD claims it took over the domain controller and has the backups."
  - "Decide in advance who approves bringing services back, and make sure the attackers are gone before you do."
  - "Students and staff: reset your password as asked, reject MFA prompts you didn't start, and trust only official channels. Anyone in the US can freeze their credit for free at Equifax, Experian and TransUnion."
unknown:
  - "How BYOD got in, and when."
  - "Whether any data was actually stolen, and whose. Vanderbilt hasn't sent any notifications."
  - "Whether files were encrypted. Vanderbilt hasn't used the word ransomware."
  - "Whether the domain controller and the backups were really taken over."
  - "How much BYOD is asking for. A student newspaper headline mentions $750,000, but that couldn't be checked."
  - "When cloud storage will come back."
jobs: [incident-responder, incident-response-manager, soc-analyst, iam-engineer, security-administrator]
topics: [ransomware-response, incident-response-process, crisis-communications, mfa-conditional-access, backup-resilience]
sources:
  - name: "Vanderbilt University: Active Cybersecurity Incident Updates"
    url: "https://news.vanderbilt.edu/2026/11/09/nov-9-active-cybersecurity-incident-updates/"
  - name: "The Vanderbilt Hustler: LIVE COVERAGE: Vanderbilt experiencing cyberattack, agencies responding"
    url: "https://vanderbilthustler.com/2026/11/09/breaking-vanderbilt-wi-fi-networks-reportedly-hacked-vuit-yet-to-confirm/"
  - name: "BleepingComputer: Vanderbilt University hit in BYOD ransomware attack, data theft claimed"
    url: "https://www.bleepingcomputer.com/news/security/vanderbilt-university-hit-in-byod-ransomware-attack-data-theft-claimed/"
  - name: "The Record: Vanderbilt cybersecurity incident impacting campus devices and systems"
    url: "https://therecord.media/vanderbilt-cyberattack-ransomware-alert"
  - name: "The Register: Ransomware threat blares from Vanderbilt University computers during cyberattack"
    url: "https://www.theregister.com/cyber-crime/2026/11/10/ransomware-threat-blares-from-vanderbilt-university-computers-during-cyberattack/5308687"
  - name: "CyberScoop: Vanderbilt University reels following ransomware attack claimed by BYOD group"
    url: "https://cyberscoop.com/vanderbilt-university-ransomware-attack-byod/"
  - name: "Infosecurity Magazine: Vanderbilt University Takes Systems Offline After Cyber Incident"
    url: "https://www.infosecurity-magazine.com/news/vanderbilt-university-cyber/"
  - name: "Malwarebytes: Vanderbilt restores systems after cyberattack as hackers claim data theft"
    url: "https://www.malwarebytes.com/blog/news/2026/11/vanderbilt-restores-systems-after-cyberattack-as-hackers-claim-data-theft"
  - name: "Inside Higher Ed: Ransomware Gang Says It Hacked Vanderbilt University"
    url: "https://www.insidehighered.com/news/tech-innovation/administrative-tech/2026/11/11/ransomware-gang-says-it-hacked-vanderbilt"
  - name: "Nashville Scene: Ongoing Vanderbilt Hack Focused on Cloud Storage"
    url: "https://www.nashvillescene.com/news/pithinthewind/vanderbilt-university-ransomware-hack-update/article_2c82fa08-50e2-4642-9826-13003a662adc.html"
  - name: "WSMV: Cybercrime group claims it stole social security numbers during ongoing Vanderbilt breach, report says. Here's what we know"
    url: "https://www.wsmv.com/2026/11/09/vanderbilt-urges-university-community-shut-down-devices-amid-cybersecurity-incident-heres-what-we-know/"
  - name: "eSecurity Planet: Vanderbilt Cyberattack: Hackers Claim Theft of More Than 1M SSNs"
    url: "https://www.esecurityplanet.com/threats/news-vanderbilt-cyberattack-byod-ssn-claim/"
  - name: "Inc.: Hackers Claim 1 Million Social Security Numbers Were Stolen From Vanderbilt. Now 1 Demand Could Last a Lifetime"
    url: "https://www.inc.com/amaya-nichole/hackers-claim-social-security-numbers-stolen-vanderbilt-now-1-demand-last-lifetime/91435748"
  - name: "The Record: Michigan State cyber incident claimed by ransomware gang behind recent hospital attack"
    url: "https://therecord.media/michigan-state-university-byod-gang-cyber-incident"
  - name: "BleepingComputer: UNM Health ransomware attack disrupts patient care, surgeries"
    url: "https://www.bleepingcomputer.com/news/security/unm-health-ransomware-attack-disrupts-patient-care-surgeries/"
  - name: "Gizmodo: Hacker Group Claims UNM Hospital Cyberattack, Then Apologizes and Offers Patients $2,500"
    url: "https://gizmodo.com/hacker-group-claims-unm-hospital-cyberattack-then-apologizes-and-offers-patients-2500-2000832169"
---

Vanderbilt University is a private university in Nashville, Tennessee, with about 14,000 students. On the morning of Monday, 9 November, it said it was responding to an active cybersecurity incident and asked students and staff to shut down university devices and get off campus Wi-Fi. People were told not to try to fix anything themselves and to call the IT help desk from another device. Classes went on as planned, though some professors cancelled theirs.

On campus, desktops filled with ransom notes named README_BYOD_31.txt, and some computers played a recorded voice: “You have been compromised by BYOD.” The same day, BYOD, a ransomware gang first seen in late September, listed Vanderbilt on its leak site. It claims it took over the network's domain controller, has the backups, and stole more than a million Social Security numbers along with names, contact details, student and employee records and research data.

Vanderbilt calls it a cyberattack but hasn't confirmed who is behind it, whether anything was encrypted, or what data, if any, was taken. Wi-Fi came back that evening, and email, Okta, Brightspace and Zoom the next morning. On 12 November everyone had to reset their password. Cloud storage stayed off: OneDrive, SharePoint and Box were still disabled on 13 November, and the student newspaper reported them still down on 15 November. The FBI says it is assisting, and a proposed class action has been filed.

Vanderbilt University Medical Center, a separate organization, says its systems weren't affected. BYOD is new but busy. In October it claimed an attack on the University of New Mexico's health system, then apologized and offered patients up to $2,500 each, while keeping the data. It has also listed Michigan State University, which says it has seen no sign that its central accounts system was compromised.
