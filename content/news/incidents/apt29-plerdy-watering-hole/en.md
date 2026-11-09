---
# An incident breakdown → lvlulcuma.com/en/news/incidents/apt29-plerdy-watering-hole/
title: "Poisoned Source: spies turned a Ukrainian web tracker into a trap for old phones"
dek: "On 4 November 2026, Sekoia reported that hackers it links to APT29 hijacked the Plerdy analytics script and other websites to serve already-patched iPhone and Android exploits that stole cookies, logins and, on some iPhones, almost all data."
type: espionage
status: report          # unfolding | confirmed | report (the victim or investigators published a full report)
date: 2026-11-04        # when it became public
published: 2026-11-09   # when this breakdown was published
who: "Visitors to websites that load the Ukrainian Plerdy analytics script, mostly Ukrainian sites, and to other hacked sites in the US, Czech Republic and Bulgaria"
sector: "Websites and their mobile visitors"
entry: "Hacked websites and a hijacked third-party analytics script (a watering hole attack); how the script was changed isn't known"
impact: "Older iPhones and Android phones that visited the sites could lose browser cookies, saved logins and Wi-Fi passwords, and some iPhones almost all their data; the number of victims isn't known"
timeline:
  - date: 2026-08-27
    text: "Code is added to Plerdy's analytics script, so every site that loads it also loads a fingerprinting script from the attackers' server."
  - date: 2026-09-03
    text: "The change to the Plerdy script ends, after one week."
  - date: 2026-10
    text: "In mid-October, Sekoia finds the campaign on the website of a Ukrainian gas production company, and then on other hacked sites: a major US chemical industry association, a Czech far-right party and a Bulgarian military-related website."
  - date: 2026-11-04
    text: "Sekoia publishes its report, Poisoned Source, and links the campaign to APT29 with moderate to high confidence. The same day, CISA adds CVE-2024-27834, one of the iPhone bugs used, to its list of exploited vulnerabilities, without naming the campaign."
attack:
  - tactic: "Resource development"
    id: T1608.004
    name: "Stage Capabilities: Drive-by Target"
    text: "Added their code to the Plerdy analytics script and to hacked websites, so visitors loaded the attackers' script."
  - tactic: "Resource development"
    id: T1583.001
    name: "Acquire Infrastructure: Domains"
    text: "Set up look-alike domains such as `america250[.]holiday` and `theowo[.]club` that copied real sites."
  - tactic: "Reconnaissance"
    id: T1592
    name: "Gather Victim Host Information"
    text: "A fingerprinting script collected 394 details about each visitor's device and browser."
  - tactic: "Initial access"
    id: T1456
    name: "Drive-By Compromise"
    text: "Phones that visited the sites got an exploit chain for Safari or Chrome, picked to match their system version."
  - tactic: "Privilege escalation"
    id: T1404
    name: "Exploitation for Privilege Escalation"
    text: "Escaped the browser's sandbox through further bugs, including the iPhone kernel and an Android graphics driver."
  - tactic: "Collection"
    id: T1533
    name: "Data from Local System"
    text: "Took cookies, saved logins, browsing history and Wi-Fi passwords; on iOS 18.5, also messages, mail, photos, location data and more."
detect:
  - "Web pages loading scripts from domains Sekoia published, such as `edge-ord.clouds-stacks[.]com` and `static.flux-telemetry[.]com`."
  - "Phones connecting to `ad.starx-net[.]com` on port 8881: all three exploit chains sent stolen data there."
  - "A third-party script on your website, like an analytics tracker, that suddenly adds a `<script>` tag pulling code from another domain."
  - "Visits to look-alike domains such as `america250[.]holiday` and `theowo[.]club`."
  - "Old versions in your phone inventory: the iPhone chains target iOS 16.0 to 17.4 and 18.5, the Android chain Chrome 139 to 145."
check:
  - "Update phones and browsers. Sekoia says a phone with an up-to-date system is safe from these attacks."
  - "Find work phones stuck on old iOS or Android versions and update or replace them, including phones used by contractors and suppliers."
  - "If your website loads scripts from other companies, keep a list of them, watch them for changes, and remove the ones you don't need."
  - "Block the domains and addresses Sekoia published."
unknown:
  - "How many phones were infected and how much data was taken. Sekoia hasn't been able to establish it."
  - "How the attackers changed Plerdy's script, and whether Plerdy knew. No comment from the company has been published."
  - "Whether the attackers wanted visitors of particular sites or as many unpatched phones as possible."
  - "Where the exploits came from. Sekoia thinks a third party probably made them."
  - "Why phones with Chrome 143 and the Samsung Galaxy S25 Ultra were left out."
  - "When the whole campaign started and whether it's still running."
jobs: [threat-intelligence-analyst, threat-hunter, malware-analyst, endpoint-security-engineer, appsec-engineer]
topics: [mobile-spyware, actor-tracking, ioc-enrichment, patch-management, client-side-bugs]
sources:
  - name: "Sekoia: Poisoned Source: APT29 watering holes target mobile devices with n-day exploits"
    url: "https://www.sekoia.com/blog/poisoned-source-apt29-watering-holes-targets-mobile-devices-with-n-day-exploits"
  - name: "The Record: Russian state-linked hackers target iPhone, Android devices in zero-click espionage campaign"
    url: "https://therecord.media/russia-hackers-smartphone-cyberattacks"
  - name: "Help Net Security: Russian hackers target iOS and Android users with n-day exploits"
    url: "https://www.helpnetsecurity.com/2026/11/04/apt29-watering-hole-mobile-devices-n-day-exploits/"
  - name: "The Hacker News: APT29-Linked Hackers Hijack Web Analytics Script to Deliver iOS and Android Exploits"
    url: "https://thehackernews.com/2026/11/apt29-linked-hackers-hijack-web.html"
  - name: "Security Affairs: Russian APT29 Targets Mobile Users with Watering Hole Attacks"
    url: "https://securityaffairs.com/202473/apt/russian-apt29-targets-mobile-users-with-watering-hole-attacks.html"
---

APT29 is a hacking group tied to the russian state. On 4 November, the security firm Sekoia said, with moderate to high confidence, that APT29 or one of its subgroups was behind a campaign it calls Poisoned Source. Sekoia first saw it in mid-October on the website of a Ukrainian gas production company.

The trail led to Plerdy, a Ukrainian web analytics tool whose script is loaded by thousands of websites, most of them Ukrainian, among them army, special forces and military equipment sites. From 27 August to 3 September, that script also pulled in a script from the attackers. They also broke into the websites of a major US chemical industry association, a Czech far-right party and a Bulgarian military-related organization, and set up look-alike copies of other sites.

The attackers' script collected hundreds of details about each visitor's device. Visitors with no touch screen or an impossible screen size got nothing back. Phones got an exploit chain picked for their system: on iOS 16, one that stole browser cookies; on iOS 18.5, the DarkSword kit, which copies messages, mail, photos, passwords, location data and much more; on Android with Chrome 139 to 145, a tool Sekoia calls AndroSnitch, which took Chrome cookies, logins, history and Wi-Fi passwords. None of them tried to stay on the phone.

Every bug in these chains had been fixed before the campaign began, so a phone with an up-to-date system was safe. Sekoia doesn't know how many phones were hit or what was done with the data.
