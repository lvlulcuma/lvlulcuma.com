---
# An incident breakdown → lvlulcuma.com/en/news/incidents/armory-castle-vcenter-zero-day/
title: "ARMORY CASTLE and vCenter: how suspected Chinese spies turned an unknown VMware flaw into the keys to the server room"
dek: "On 19 November 2026, Broadcom fixed CVE-2026-123890, a critical flaw in VMware vCenter, and Google's Mandiant said a suspected China-nexus espionage group, ARMORY CASTLE, had exploited it since early September to forge administrator access, take over ESXi hosts and copy data straight off virtual machines' disks."
type: espionage
status: report          # unfolding | confirmed | report (the victim or investigators published a full report)
date: 2026-11-19        # when it became public
published: 2026-11-23   # when this breakdown was published
who: "Organizations running VMware vCenter Server and VMware Cloud Foundation. Mandiant investigated several intrusions but hasn't named the victims, their sectors or countries."
sector: "Any organization with VMware virtual infrastructure"
entry: "In the intrusion Google describes, a zero-day in a BeyondTrust Remote Support appliance (CVE-2026-102764); from inside the network, the vCenter flaw CVE-2026-123890 for administrator access"
impact: "Full administrator control of vCenter and its ESXi hosts; a Windows machine's credential database (NTDS) and registry files copied off its virtual disk and likely sent out; long-term backdoors on Linux appliances. How many organizations were hit is unknown."
timeline:
  - date: 2026-07-13
    text: "Context: the build date inside BONESAW, the attackers' vCenter tool. Google notes such dates can be faked, but says the group knew of the flaw before 29 July."
  - date: 2026-07-29
    text: "Broadcom discloses an earlier vCenter flaw, CVE-2026-59309. Broadcom later calls the new bug a separate issue."
  - date: 2026-09
    text: "In early September the attackers run BONESAW against a vCenter already patched for CVE-2026-59309: the first known use of the new flaw."
  - date: 2026-10-15
    text: "Google reports the same group's use of a zero-day in BeyondTrust Remote Support (CVE-2026-102764), the way into the network in the intrusion it later describes."
  - date: 2026-11-19
    text: "Broadcom releases fixes for CVE-2026-123890, rated 9.8 out of 10, and says there is no workaround. Its advisory doesn't mention attacks and credits Mandiant with the find."
  - date: 2026-11-19
    text: "Google Threat Intelligence Group and Mandiant publish how ARMORY CASTLE exploited the flaw since early September, with indicators and detection rules."
attack:
  - tactic: "Initial access"
    id: T1190
    name: "Exploit Public-Facing Application"
    text: "Broke in through a zero-day in a BeyondTrust Remote Support appliance (CVE-2026-102764)."
  - tactic: "Persistence"
    id: T1505.003
    name: "Server Software Component: Web Shell"
    text: "Planted web shells (SLIMSAVAGE, then CAGEMATCH) on an internal Linux appliance; the first one opened with the password `123`."
  - tactic: "Privilege escalation"
    id: T1548.001
    name: "Abuse Elevation Control Mechanism: Setuid and Setgid"
    text: "Set the setuid bit on `/bin/env` with gdb to become root."
  - tactic: "Discovery"
    id: T1046
    name: "Network Service Discovery"
    text: "Scanned with nmap for VMware ports such as 2012, 5480 and 9080."
  - tactic: "Credential access"
    id: T1606.002
    name: "Forge Web Credentials: SAML Tokens"
    text: "Took vCenter's SAML signing key from its directory database and forged administrator tokens (BONESAW, SAWSNAKE), which also bypasses MFA."
  - tactic: "Persistence"
    id: T1098.004
    name: "Account Manipulation: SSH Authorized Keys"
    text: "Added their own key to the ESXi root account's `authorized_keys`."
  - tactic: "Credential access"
    id: T1003.003
    name: "OS Credential Dumping: NTDS"
    text: "Copied the NTDS, SYSTEM and SECURITY files out of a Windows virtual machine by reading its disk from the ESXi host."
  - tactic: "Persistence"
    id: T1543.002
    name: "Create or Modify System Process: Systemd Service"
    text: "Ran the LAZYBONES backdoor as a systemd service set to restart every 50 minutes."
  - tactic: "Command and control"
    id: T1102.002
    name: "Web Service: Bidirectional Communication"
    text: "LAZYBONES took orders and sent results through Slack, encrypted with AES-256."
detect:
  - "In vCenter, look for SSO administrator or machine accounts nobody created, and local admin accounts named like `sps-…@vsphere.local`."
  - "Look for SSH being switched on and off through the appliance API (`PUT /rest/appliance/access/ssh`): a disabled SSH service doesn't prove it wasn't used."
  - "On ESXi, check the root account's `authorized_keys` for new keys, and watch for Host Client logins as `vpxuser` and SSH logins as root."
  - "Watch connections to vCenter's directory service on TCP port 2012, and to ports 5480 and 9080, from machines that aren't used for management, and nmap-style scans of those ports."
  - "On Linux appliances, look for files such as `/tmp/123`, `/tmp/sss`, `/tmp/dbr` and `/usr/bin/vmtoolscs`, a Dropbear SSH listener on TCP port 53 or 33992, and web shells named `ActiveSer.jsp` and `u.jsp`. Google has published YARA rules and IP addresses."
check:
  - "Install Broadcom's 19 November fixes: vCenter 8.0 U3m, VMware Cloud Foundation 5.2.5, and VCF or vSphere Foundation 9.0.2.0200 or 9.1.1.0200. There's no workaround. vCenter 7.0 has no public fix, because its general support ended in October 2025."
  - "If you may have been hit, treat vCenter's signing keys and certificates as stolen and replace them: changing passwords alone isn't enough."
  - "Allow vCenter's ports 2012, 5480 and 22 and the vSphere API only from management machines."
  - "Put appliances (vCenter, remote support boxes and other Linux appliances) under EDR and central logging: the attackers moved through the machines nobody watched."
  - "Patch remote support and other edge appliances quickly: in this case the way in was a BeyondTrust zero-day."
unknown:
  - "How many organizations were hit, and in which sectors and countries. Mandiant says only that it investigated multiple incidents."
  - "When exactly Mandiant found the flaw and when it told Broadcom."
  - "What else the attackers took beyond the Windows credential files Google describes."
  - "Whether other attackers now use the flaw. No public exploit code had been seen when the fixes came out, and Google hasn't released BONESAW."
jobs: [threat-hunter, incident-responder, threat-intelligence-analyst, security-administrator, detection-engineer]
topics: [virtualization-security, edge-device-incidents, persistence-hunting, patch-management, actor-tracking]
sources:
  - name: "Google Threat Intelligence: ARMORY CASTLE Exploits vSphere"
    url: "https://cloud.google.com/blog/topics/threat-intelligence/armory-castle-exploits-vsphere"
  - name: "SecurityWeek: Newly Patched VMware vCenter Flaw Exploited as Zero-Day by Chinese APT"
    url: "https://www.securityweek.com/newly-patched-vmware-vcenter-flaw-exploited-as-zero-day-by-chinese-apt/"
  - name: "Help Net Security: VMware vCenter zero-day exploited for months before patch (CVE-2026-123890)"
    url: "https://www.helpnetsecurity.com/2026/11/20/vmware-vcenter-zero-day-cve-2026-123890-exploited/"
  - name: "The Hacker News: China-Linked Hackers Exploit Critical VMware vCenter Zero-Day to Gain Admin Access and Steal Data"
    url: "https://thehackernews.com/2026/11/china-linked-hackers-exploit-critical.html"
  - name: "SOC Prime: CVE-2026-123890: Critical VMware vCenter Zero-Day Exploited by China-Linked Hackers"
    url: "https://socprime.com/blog/cve-2026-123890-critical-vmware-vcenter-zero-day-exploited-by-china-linked-hackers/"
---

vCenter Server is the console companies use to manage VMware ESXi hosts, the physical servers that run their virtual machines. An administrator in vCenter can reach every virtual machine it manages. On 19 November 2026, Broadcom fixed CVE-2026-123890, rated 9.8 out of 10, a flaw in how vCenter's directory service handles sign-ins. An attacker who can reach that service on the network can learn a secret session key and act as an administrator, without a password.

The same day, Google Threat Intelligence Group and Mandiant said the flaw had been exploited since early September by ARMORY CASTLE, a suspected China-nexus espionage group formerly tracked as UNC5221. Google says the group has used zero-days and newly disclosed flaws in edge and security appliances to get in since 2023. Mandiant found the flaw during its investigations and reported it to Broadcom, whose advisory doesn't mention the attacks.

In the intrusion Google describes, the attackers entered through a zero-day in a BeyondTrust Remote Support appliance, planted web shells on an internal Linux appliance, became root and scanned for VMware ports. They moved between Linux appliances that had no endpoint security software and brought five new tools. One, BONESAW, used the flaw to create a vCenter administrator account, take vCenter's signing key and forge administrator sign-ins. Another, SAWSNAKE, forged SAML tokens for the administrator, which also gets around MFA.

As administrators, they switched on SSH, took vCenter's master key and database password, and switched SSH off again. On the ESXi hosts they logged in as root, added their own SSH key and read a Windows virtual machine's disk directly, copying its NTDS, SYSTEM and SECURITY files: the data needed to crack or reuse Windows domain passwords. Google says the archives were likely sent out through the BeyondTrust appliance. A backdoor called LAZYBONES, controlled through Slack, kept them inside.
