---
# An incident breakdown → lvlulcuma.com/en/news/incidents/example-logistics-ransomware/
# MADE-UP EXAMPLE (example: true): it shows the layout. Delete this folder once real breakdowns exist.
example: true
title: "Ransomware at Example Logistics: in through an unpatched VPN, out with 400 GB"
dek: "Attackers got in through a VPN gateway that had gone unpatched for six weeks, spent a month inside, then encrypted the servers that run the warehouses."
type: ransomware
status: report          # unfolding | confirmed | report (the victim or investigators published a full report)
date: 2026-10-19        # when it became public
published: 2026-10-27   # when this breakdown was published
who: "Example Logistics, a freight and warehouse company"
sector: "Transport and logistics"
entry: "An unpatched flaw in the VPN gateway"
impact: "Warehouses and parcel tracking down for six days; about 400 GB of customer and shipping data stolen"
timeline:
  - date: 2026-09-02
    text: "The VPN vendor releases a fix for a critical flaw that lets anyone run commands on the gateway without logging in."
  - date: 2026-09-09
    text: "Security firms report that attackers are already exploiting the flaw. Example Logistics' gateway is on a quarterly patch cycle and stays unpatched."
  - date: 2026-09-14
    text: "Attackers exploit the gateway and log in to the VPN as an IT administrator."
  - date: 2026-09-21
    text: "They dump passwords from a file server's memory and get a domain admin account."
  - date: 2026-10-14
    text: "About 400 GB of customer and shipping records are copied to a cloud storage service."
  - date: 2026-10-17
    text: "On Saturday night, ransomware encrypts the virtualization hosts. Warehouse systems and parcel tracking go down."
  - date: 2026-10-19
    text: "The company announces the attack and reports it to the authorities."
  - date: 2026-10-24
    text: "Core systems are restored from offline backups and the warehouses are working again."
  - date: 2026-10-26
    text: "The company publishes its incident report."
attack:
  - tactic: "Initial access"
    id: T1190
    name: "Exploit Public-Facing Application"
    text: "Ran commands on the unpatched VPN gateway without logging in."
  - tactic: "Initial access"
    id: T1078
    name: "Valid Accounts"
    text: "Logged in to the VPN with an IT administrator's account read from the gateway's configuration."
  - tactic: "Credential access"
    id: T1003.001
    name: "OS Credential Dumping: LSASS Memory"
    text: "Dumped passwords from a file server's memory and found a domain admin account."
  - tactic: "Lateral movement"
    id: T1021.001
    name: "Remote Services: Remote Desktop Protocol"
    text: "Moved from server to server over RDP as the domain admin."
  - tactic: "Exfiltration"
    id: T1567.002
    name: "Exfiltration Over Web Service: Exfiltration to Cloud Storage"
    text: "Copied about 400 GB to a cloud storage service with `rclone`."
  - tactic: "Impact"
    id: T1490
    name: "Inhibit System Recovery"
    text: "Deleted shadow copies and switched off every backup job they could reach."
  - tactic: "Impact"
    id: T1486
    name: "Data Encrypted for Impact"
    text: "Encrypted the virtualization hosts, and with them every server running on them."
detect:
  - "VPN logins for an admin account from a country the company doesn't operate in, on the night the gateway was exploited."
  - "Event `4624` with logon type `10` (RDP) from the VPN address pool straight to servers that admins normally reach through a jump host."
  - "Access to LSASS memory on the file server: Sysmon event `10`, or the EDR's credential dumping alert."
  - "`rclone` running on a server, followed by an unusually large upload to a cloud storage provider."
  - "`vssadmin delete shadows` and backup jobs being disabled, minutes before the encryption started."
check:
  - "Patch internet-facing devices (VPNs, firewalls, mail gateways) within days of a critical fix, outside the normal cycle."
  - "Require MFA for every VPN login, admin and service accounts included."
  - "Keep at least one backup copy offline or immutable, and test a full restore."
  - "Alert on RDP from the VPN address pool straight to servers."
  - "Block, or at least alert on, file transfer tools like `rclone` on servers."
unknown:
  - "How the attackers got the administrator's password: the report doesn't say whether it was stored on the gateway or reused elsewhere."
  - "Whether anyone else used the same flaw on the gateway before 14 September."
  - "Exactly which customers' records were in the stolen data."
jobs: [incident-responder, soc-analyst, vulnerability-analyst, incident-response-manager]
topics: [edge-device-incidents, ransomware-response, vulnerability-prioritization, lateral-movement-hunting, incident-recovery]
sources:
  - name: "CISA: #StopRansomware Guide"
    url: "https://www.cisa.gov/stopransomware/ransomware-guide"
  - name: "CISA: Known Exploited Vulnerabilities Catalog"
    url: "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
  - name: "MITRE ATT&CK: Data Encrypted for Impact (T1486)"
    url: "https://attack.mitre.org/techniques/T1486/"
---

Example Logistics runs 14 warehouses and a parcel network. On the night of 17 October, ransomware encrypted the company's virtualization hosts and took down everything that ran on them: the warehouse management system, label printing and parcel tracking. For two days, trucks were loaded from printed lists.

The way in was a VPN gateway. Its vendor had shipped a fix for a critical flaw on 2 September, and attacks on it were public a week later, but the gateway was on a quarterly patch cycle. The attackers used the flaw on 14 September and spent a month inside before they encrypted anything, which gave them time to find a domain admin account and copy out about 400 GB of data.

The company restored its core systems from offline backups within six days and says it didn't pay. The attackers published part of the stolen data on their leak site after their deadline passed.
