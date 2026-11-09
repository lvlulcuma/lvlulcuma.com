---
# An incident breakdown → lvlulcuma.com/en/news/incidents/ai-ceo-impersonation-fraud/
title: "AI-cloned CEOs and fake lawyers: how three men allegedly took $129 million"
dek: "On 5 November 2026, US prosecutors in New York unsealed charges against three men accused of using AI voices and video to pose as company chiefs and lawyers and talk employees into wiring more than $129 million between July 2024 and February 2026."
type: takedown
status: unfolding       # unfolding | confirmed | report (the victim or investigators published a full report)
date: 2026-11-05        # when it became public
published: 2026-11-09   # when this breakdown was published
who: "Companies in the US and abroad, including hospital systems in Missouri and California, a bank in Rhode Island, a UK financial technology company, a Massachusetts mutual fund company and a Florida pet food company"
sector: "Healthcare, banking, finance and other businesses"
entry: "Social engineering: an email seemingly from the CEO, then calls with an AI-faked CEO and a fake lawyer"
impact: "More than $129 million wired to accounts in nine countries, according to prosecutors; the largest single loss about $11.6 million"
timeline:
  - date: 2024-07
    text: "The scheme starts, according to the indictment."
  - date: 2024-11
    text: "A Missouri hospital system wires about $4.83 million, and a Rhode Island bank about $2.68 million."
  - date: 2024-12
    text: "A California hospital system loses about $2.97 million."
  - date: 2025-03
    text: "A UK financial technology company loses about $11.58 million, the biggest single loss in the charges."
  - date: 2025-04
    text: "A Massachusetts mutual fund company loses about $4.64 million."
  - date: 2025-06
    text: "A Florida pet food company loses about $5.24 million."
  - date: 2026-02
    text: "The last month covered by the charges."
  - date: 2026-06-17
    text: "Jacob Soall, 41, is arrested in Spain."
  - date: 2026-08-05
    text: "Sharon Hazan, 54, is arrested in Spain."
  - date: 2026-09-07
    text: "Guy Sheetrit, 42, is arrested in the UK."
  - date: 2026-11-05
    text: "The indictment is unsealed in the Southern District of New York: seven counts, including wire fraud, aggravated identity theft and money laundering. All three are waiting for extradition."
attack:
  - tactic: "Reconnaissance"
    id: T1591.004
    name: "Gather Victim Org Information: Identify Roles"
    text: "Picked employees, mostly in accounting, who could approve large wire transfers."
  - tactic: "Initial access"
    id: T1566
    name: "Phishing"
    text: "Sent an email, through an e-signature service and seemingly from the employee's CEO, about a confidential deal."
  - tactic: "Stealth"
    id: T1656
    name: "Impersonation"
    text: "Used AI to copy the CEO's voice and sometimes face on calls, then posed as lawyers at large international law firms."
  - tactic: "Impact"
    id: T1657
    name: "Financial Theft"
    text: "Had the money wired to accounts they controlled and turned it into cryptocurrency."
detect:
  - "A request for an urgent, confidential payment that arrives through an unusual channel, such as an e-signature service."
  - "A “CEO” or “lawyer” who insists on secrecy and talks about confidentiality or insider trading rules so that you don't check with colleagues."
  - "Large wires to new recipients in countries the company has never paid before."
  - "A call from the boss that comes right after an email you didn't expect, with a deal nobody else in finance has heard of."
check:
  - "Confirm every unusual payment request by calling back on a number you already have, never one given in the email or on the call."
  - "Require two people to approve large or urgent transfers, and make it normal to slow down a request from the top."
  - "Tell finance staff that voices and faces on calls can now be faked with AI."
  - "Agree with your executives on how a real confidential deal will be confirmed, before one ever comes up."
  - "If your company may have been hit, the FBI has asked victims to come forward."
unknown:
  - "Which companies were hit. The charging documents don't name them."
  - "How many of the thousands of targeted companies actually paid."
  - "Which AI tools were used to copy voices and faces."
  - "Whether any money has been recovered. No recovery has been reported."
  - "Whether and when the three will be extradited to the US. One defendant's lawyers say he has no connection to the case."
  - "Who the other people were who shared the money, according to prosecutors."
jobs: [cybercrime-investigator, awareness-specialist, security-manager, incident-responder, threat-intelligence-analyst]
topics: [fraud-investigations, ai-enabled-threats, social-engineering-tests, crypto-tracing, international-cooperation]
sources:
  - name: "CyberScoop: Authorities accuse trio of using AI deepfakes to defraud $129M from businesses"
    url: "https://cyberscoop.com/ai-deepfakes-impersonate-ceo-lawyer-defraud-companies/"
  - name: "Gizmodo: DOJ Says Deepfaked CEOs and Lawyers Helped Steal $129 Million From Hospitals, Banks, and Others"
    url: "https://gizmodo.com/doj-says-deepfaked-ceos-and-lawyers-helped-steal-129-million-from-hospitals-banks-and-others-2000836456"
  - name: "The Record: CEO-spoofing scammers used AI to help steal more than $100 million, feds say"
    url: "https://therecord.media/ceo-spoofing-scammers-charged"
  - name: "CBS News: 3 allegedly used AI to steal some $129 million from companies by impersonating executives and lawyers"
    url: "https://www.cbsnews.com/news/3-ai-steal-129-million-companies-impersonating-executives-lawyers/"
  - name: "SecurityWeek: 3 Charged in Scheme to Use AI to Impersonate CEOs and Attorneys to Steal $129 Million"
    url: "https://www.securityweek.com/3-charged-in-scheme-to-use-ai-to-impersonate-ceos-and-attorneys-to-steal-129-million/"
  - name: "Good Morning America: Trio used AI to impersonate corporate execs, defrauding companies of nearly $130 million: DOJ"
    url: "https://www.goodmorningamerica.com/news/story/trio-ai-impersonate-corporate-execs-defrauding-companies-130-137894421"
  - name: "IBTimes UK: Fake CEOs and Lawyers Tricked Companies Worldwide Into Sending $129M Using AI Voice and Video Impersonations, DOJ Says"
    url: "https://www.ibtimes.co.uk/ai-impersonation-global-fraud-scheme-129-million-1830610"
---

On Thursday, 5 November, the US Attorney's Office for the Southern District of New York unsealed charges against three men: Jacob Soall, 41, who lives in Spain and the UK; Sharon Hazan, 54, of Israel; and Guy Sheetrit, 42, of Israel and the United Arab Emirates. Prosecutors say that from July 2024 to February 2026 they used AI to pose as company chiefs and lawyers and got employees to wire away more than $129 million.

According to the charges, they picked employees, mostly in accounting, who could approve large wire transfers. The employee got an email, sent through an e-signature service and seemingly from their CEO, about a confidential deal. Then came a phone or video call in which AI copied the CEO's voice and sometimes face, and the employee was told to contact a lawyer at a big international law firm. That “lawyer”, also an impersonation, explained the deal and gave the bank details. Soall allegedly kept a handwritten script titled “Lawyer Call” that discouraged employees from discussing the deal with colleagues.

Prosecutors say the money went to accounts in nine countries, among them the US, Spain, the UAE and China, and was turned into cryptocurrency. Victims include hospital systems in Missouri and California, a bank in Rhode Island, a UK financial technology company that lost about $11.6 million, a Massachusetts mutual fund company and a Florida pet food company. Thousands of companies around the world were targeted.

Soall and Hazan were arrested in Spain and Sheetrit in the UK between June and September, and all three are waiting for extradition. These are allegations: Sheetrit's lawyers say he has no connection to the case. The FBI has asked other companies that may have been victims to come forward.
