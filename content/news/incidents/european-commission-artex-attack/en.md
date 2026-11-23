---
# An incident breakdown → lvlulcuma.com/en/news/incidents/european-commission-artex-attack/
title: "European Commission: an “AI-generated” attack that took staff pay and leave systems offline for more than 10 days"
dek: "On 19 November 2026, the European Commission confirmed an attack it first detected on 22 October and called it “an AI generated cyber campaign”; HR, pay, medical refund and translation systems were taken offline, and sources told Politico the attackers used ARTEX, an open-source AI hacking tool the FBI had warned about days earlier."
type: breach
status: unfolding       # unfolding | confirmed | report (the victim or investigators published a full report)
date: 2026-11-19        # when it became public
published: 2026-11-23   # when this breakdown was published
who: "The European Commission, the EU's executive body, and its staff"
sector: "Government (EU institution)"
entry: "Not known yet"
impact: "Systems for pay slips, timesheets and leave (Sysper), medical refunds (MyPMO) and translation taken offline, some for more than 10 days; Sysper went down again on 18 November. The Commission says it found no evidence of a data breach affecting its staff as a whole, and it has informed the people whose systems were targeted."
timeline:
  - date: 2026-01
    text: "Context: an intrusion into the Commission's mobile device management platform may expose some staff names and phone numbers. Officials haven't linked it to this attack."
  - date: 2026-03
    text: "Context: the cloud setup behind the Europa website is breached through the Trivy supply-chain compromise. Officials haven't linked it to this attack either."
  - date: 2026-07
    text: "ARTEX, an open-source tool that uses AI models to probe systems for weak spots, is released on GitHub, according to the FBI. Malicious use follows from at least August."
  - date: 2026-10-08
    text: "ARTEX's developer takes the GitHub project down, but copies and a commercial “ARTEX PRO” version keep circulating."
  - date: 2026-10-22
    text: "The Commission detects the first signs of the attack."
  - date: 2026-10-26
    text: "The Commission confirms the incident after a first investigation."
  - date: 2026-11-05
    text: "CERT-EU, the cybersecurity service of the EU institutions, publishes a warning about ARTEX."
  - date: 2026-11-13
    text: "The FBI issues a FLASH alert on ARTEX: some intrusions reach privileged access in under three hours, and more than 1,600 ARTEX control panels are open on the internet."
  - date: 2026-11-18
    text: "The HR system Sysper goes offline again. Commissioner Henna Virkkunen briefs her fellow commissioners."
  - date: 2026-11-19
    text: "Politico reports the attack. At the midday briefing, spokesperson Thomas Regnier confirms it and calls it an AI-generated cyber campaign that used a publicly available tool."
attack:
  - tactic: "Resource development"
    id: T1588.002
    name: "Obtain Capabilities: Tool"
    text: "Used a publicly available AI-driven tool, which sources told Politico was ARTEX."
detect:
  - "Fast, systematic probing: many requests trying SQL injection, server-side request forgery or XML tricks in a short time, the kind of checks ARTEX automates."
  - "One account or session looking up records one after another, or pulling an unusual number of records, especially on partner and staff portals."
  - "Kerberoasting and DCSync activity in Active Directory, which the FBI lists among the techniques in ARTEX's catalogue."
  - "Save identity provider sign-in and audit logs early in an incident: they show how far an intrusion got."
check:
  - "Take management interfaces off the internet."
  - "Require MFA on critical systems, and give apps only the permissions and consent grants they need."
  - "Scan configuration files, infrastructure code, CI/CD pipelines and JavaScript bundles for secrets, and replace any you find exposed."
  - "Do authorization checks on the server, rate-limit lookups and return error messages that don't reveal how the system works inside."
  - "Fix low-severity findings too, as CERT-EU urges, and run a tabletop exercise for an intruder who reaches privileged access within hours."
unknown:
  - "How the attackers got in, and which weakness or account they used."
  - "Whether ARTEX was used to break in or only to map the systems. The Commission itself hasn't named the tool."
  - "Who the attackers are and what they wanted. The spokesperson didn't attribute the attack and wasn't aware of any ransom demand."
  - "What data, if any, was taken. Politico's sources say large amounts may have been compromised; the Commission says it found no evidence of a breach affecting its staff as a whole, and its investigation is still open."
  - "Whether this attack is linked to the Commission's January and March incidents."
jobs: [incident-responder, soc-analyst, detection-engineer, threat-intelligence-analyst, security-manager]
topics: [ai-enabled-threats, ai-incidents, incident-response-process, data-breach-response, attack-surface-management]
sources:
  - name: "The Record: European Commission confirms cyberattack, says hackers used AI tool"
    url: "https://therecord.media/european-commission-confirms-cyberattack-using-ai"
  - name: "SecurityWeek: European Commission Confirms AI-Assisted Cyberattack Disrupted Services"
    url: "https://www.securityweek.com/european-commission-confirms-ai-assisted-cyberattack-disrupted-services/"
  - name: "The Register: European Commission scrambles to contain AI-assisted cyberattack"
    url: "https://www.theregister.com/cyber-crime/2026/11/19/european-commission-scrambles-to-contain-ai-assisted-cyberattack/5311103"
  - name: "Cloud Security Alliance: AI-Tool Attack on the European Commission: Lessons for Defenders"
    url: "https://labs.cloudsecurityalliance.org/research/csa-research-note-european-commission-ai-cyberattack-2026112/"
  - name: "Latin Times: European Commission Confirms AI-Linked Cyberattack After Nearly Four-Week Disclosure Delay"
    url: "https://www.latintimes.com/ai-artex-framework-european-commission-cyberattack-601595"
---

The European Commission is the EU's executive body. On 22 October 2026 it detected the first signs of an attack on its IT systems, and it confirmed the incident on 26 October after a first investigation. It said nothing in public until 19 November, when Politico reported that staff systems had been down for more than 10 days.

The systems hit run the staff's daily admin: Sysper, used for pay slips, timesheets and leave requests; MyPMO, used for medical refunds; and translation services. The Commission says it temporarily took several applications down and that most are back, but Sysper went offline again on 18 November. Asked why it hadn't spoken earlier, spokesperson Thomas Regnier said that publicizing defensive measures could undermine them, adding: “There was no hiding whatsoever.”

Regnier said “this was an AI generated cyber campaign” that used a publicly available tool, but he didn't name the tool. Unnamed sources told Politico it was ARTEX, an open-source framework that connects to commercial AI models to find and exploit weak spots by itself. It appeared on GitHub in July as a penetration-testing tool, and the FBI says attackers have used it since at least August. CERT-EU warned about it on 5 November, and the FBI on 13 November.

The Commission says it has informed the people whose systems were targeted, is checking other systems as a precaution and is in contact with CERT-EU and the European Data Protection Supervisor. It says it found no evidence of a data breach affecting its staff as a whole, while Politico's sources say large amounts of data may have been compromised. This is the Commission's third publicly known incident this year, after a breach of its mobile device management platform in January and of the cloud setup behind the Europa website in March. Officials haven't linked the three.
