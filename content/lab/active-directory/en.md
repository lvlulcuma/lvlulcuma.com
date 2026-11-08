---
# Lab idea → lvlulcuma.com/en/lab/active-directory/
title: "A small Active Directory to attack and defend"
date: 2026-11-08
group: attack      # attack | defend | network | analysis
order: 3           # position within its group
level: intermediate   # beginner | intermediate | advanced
dek: "Build a tiny Windows company network, leave in the weak spots that attackers love, then learn one classic attack by seeing it both from the attacker's side and in the defender's logs."
time: 3            # rough hours to build it the first time
ram: 16            # GB of free memory it needs while it runs
jobs: [penetration-tester, red-team-operator, soc-analyst, detection-engineer]   # Roadmap jobs it helps with
requires: []
files: []
---

Active Directory is the address book and the lock system of almost every company network: it holds the user
accounts, decides who can log into what, and hands out the keys. Attackers love it because one weak spot in it can
hand over the whole network. This lab builds a miniature version — one server and one PC — leaves in a classic
weakness on purpose, and then has you look at one attack from both sides: how an attacker finds and uses the
weakness, and what that same attack looks like in the logs a defender watches. Seeing both halves is what makes the
lesson stick.

## What you need

- A hypervisor with room for two Windows machines running together, so about 16 GB of memory. See
  [Get started](/en/lab/start/).
- **Windows Server 2025**, the free 180-day evaluation, for the "domain controller" — the server that runs Active
  Directory.
- **Windows 11**, the free 90-day evaluation, for one employee PC.
- **Kali Linux**, your attacker machine, on the same private network.
- All three on a **host-only / internal** network so the lab can't reach your real network. The server needs the
  internet (NAT) once, to activate, then switch it back.

> [!NOTE]
> The names here — `corp.local`, user `jsmith`, the service account — are just lab names. Pick your own if you like,
> but write them in your lab notebook so you don't lose track.

## Build the domain controller

1. Install Windows Server 2025 in a new virtual machine. Choose the **Desktop Experience** option so it has a normal
   screen, give it a fixed IP address on your host-only network, and set a strong admin password.
2. Open **PowerShell as Administrator** and install the Active Directory role:

   ```powershell
   Install-WindowsFeature AD-Domain-Services -IncludeManagementTools
   ```

3. Turn the server into the first domain controller of a brand-new domain called `corp.local`. This also sets up DNS,
   which Active Directory needs:

   ```powershell
   Install-ADDSForest -DomainName corp.local -InstallDNS
   ```

   It asks for a recovery password and then reboots into your new domain. After the reboot you log in as
   `CORP\Administrator`.

## Add people and a weak spot

A real company has staff and service accounts. We'll add a few, and make one of them deliberately weak — this is the
hole the attack later walks through.

1. Add a normal employee. In PowerShell on the server:

   ```powershell
   New-ADUser -Name "John Smith" -SamAccountName jsmith `
     -AccountPassword (Read-Host -AsSecureString "Password") `
     -Enabled $true
   ```

2. Add a **service account** — the kind of account a program logs in as, rather than a person. Give it a weak,
   guessable password on purpose, because that's exactly the mistake this lab is about:

   ```powershell
   New-ADUser -Name "SQL Service" -SamAccountName svc_sql `
     -AccountPassword (Read-Host -AsSecureString "Password") `
     -Enabled $true
   ```

3. Attach a **Service Principal Name (SPN)** to it. An SPN is a label that says "this account runs this service." It's
   a normal, needed part of Active Directory — but, as you'll see, having one is also what makes an account a target:

   ```powershell
   setspn -s MSSQLSvc/db.corp.local:1433 svc_sql
   ```

That's the whole weakness: a service account, with an SPN, protected by a weak password. It's one of the most common
real-world mistakes, which is why it's the first attack most people learn.

## Add an employee PC and join it

1. Install Windows 11 in a second virtual machine, on the same host-only network.
2. Point its DNS at the server's IP address (Active Directory runs on DNS, so the PC has to ask the server for
   directions).
3. Join it to the domain: **Settings > Accounts > Access work or school > Connect > Join this device to a local
   Active Directory domain**, and enter `corp.local`. Reboot, then log in as `CORP\jsmith`.

You now have a working miniature company: a domain controller, a user, a service account, and a PC. Snapshot all
three now, labelled `clean`, so you can always come back to this moment.

## Set up the two sides

**The defender's side — turn the lights on.** By default the server doesn't record much. Switch on the logging that
lets you *see* the attack later. In **Group Policy Management** on the server, edit the default domain controllers
policy and turn on **Audit Kerberos Service Ticket Operations** (under Advanced Audit Policy > Account Logon). That's
what writes the events you'll hunt for.

**The attacker's side — the map and the toolkit.** On Kali:

1. **BloodHound Community Edition** draws your Active Directory as a graph and shows the shortest path an attacker
   could take from a normal account to full control. It runs in Docker; follow SpecterOps's official quickstart to
   install it with `bloodhound-cli`:
   [BloodHound CE quickstart](https://bloodhound.specterops.io/get-started/quickstart/community-edition-quickstart).
2. **impacket** is a toolkit of small Python programs for talking to Windows services. Kali can install it with
   `sudo apt install impacket-scripts`. Its project page documents each tool:
   [impacket on GitHub](https://github.com/fortra/impacket).

## The attack, in plain words: Kerberoasting

Here's the idea before any commands. When you log into Windows, you get a kind of ticket for each service you use.
The ticket for a service is **encrypted with that service account's password**. Normally that's fine — you can't read
the ticket, so you can't get the password.

The catch: **any** logged-in user is allowed to ask for a service's ticket, just by knowing its SPN. So an attacker
with any ordinary account (like `jsmith`) can ask the domain controller for the `svc_sql` ticket, receive it, and
take it away. Then, offline on their own machine, they can guess password after password — millions per second —
until one of them decrypts the ticket. The moment it does, they've learned the service account's password. This is
called **Kerberoasting**, and it works precisely because we gave `svc_sql` a weak password.

Two things make it dangerous: the attacker only needs a basic account to start, and the guessing happens on *their*
computer, where no alarm can see it.

### Try it from the attacker's side

Do this from Kali, logged in as the ordinary `jsmith` account, against your own lab:

1. **Find the target.** Point BloodHound at the domain and let it map it. In the graph, accounts with an SPN are
   marked as "kerberoastable" — `svc_sql` will stand out.
2. **Request and crack the ticket.** The impacket tool **`GetUserSPNs`** does the "ask for the ticket" step, and
   **hashcat** does the "guess the password offline" step. Rather than repeat the exact flags here, follow impacket's
   own documentation for `GetUserSPNs` — it shows the request, the output format, and the matching hashcat mode. When
   the weak password falls, you'll see why this one is first on every list.

The point of stopping to read the tool's own docs isn't caution for its own sake — it's that the flags and formats
change between versions, and the official page is always right.

### Now find it from the defender's side

Switch to the server and open **Event Viewer > Windows Logs > Security**. The attack you just ran left a trail:

1. Look for **Event ID 4769** — "A Kerberos service ticket was requested." There's one every time anyone opens a
   service, so most are normal.
2. The tell is the **Ticket Encryption Type**. A value of **`0x17`** means the old, weak RC4 encryption — the kind
   that's fast to crack. Modern logins use `0x12` (AES). A 4769 event for one of your service accounts, with
   encryption `0x17`, requested by a normal user, is the fingerprint of a Kerberoasting attempt.
3. Note what's *not* there: the offline cracking left no trace at all. The one request is the only thing a defender
   ever sees, which is why knowing this single event matters.

This is the whole lesson in one place: the weak service-account password was the hole, the single 4769 event with
`0x17` was the only warning, and now you'd recognize it.

## Close the hole

Having seen the attack, fix it, then confirm the fix:

1. Give `svc_sql` a long, random password (25+ characters). A service account's password is typed by a program, not
   a person, so length costs nothing — and a long password makes the offline guessing hopeless.
2. Where you can, require **AES** instead of RC4 for the account, so a captured ticket is far harder to crack.
3. Re-run the attack from Kali. The request still appears in the log (4769 is normal traffic), but the cracking now
   fails. You've just closed a real-world weakness and watched the fix hold.

## Keep it contained

1. All three machines live on the **host-only / internal** network. Only give the server a NAT card briefly to
   activate Windows, then take it away.
2. This is a deliberately weak domain. Never connect it to your real network, and never reuse its passwords anywhere.
3. When you're done, power it off. Restore the `clean` snapshot to practice the attack again from scratch.

## Going further

- **GOAD (Game of Active Directory)** is a free, ready-made vulnerable domain with many weaknesses built in, for when
  one hole isn't enough. It's a bigger build, but it's the natural next lab.
- Learn the next classic attacks the same way — find the weakness, run the tool from its docs, then hunt the event
  that gives it away. Each one teaches an attacker trick and a defender's detection together.
- Point a free log collector (see the [Wazuh SIEM idea](/en/lab/) once it's published) at the domain controller, so
  you hunt the 4769 events in a real search tool instead of Event Viewer.

## If something goes wrong

1. **The PC won't join the domain:** its DNS must point at the server's IP, not a public DNS server. Fix the PC's
   network settings and try again.
2. **`Install-ADDSForest` complains about the password:** the recovery (DSRM) password has its own strength rules;
   use a long one.
3. **BloodHound shows nothing:** it needs valid domain credentials to collect data. Give it the `jsmith` account and
   the domain controller's address, as its quickstart explains.
4. **No 4769 events appear:** the Kerberos auditing policy isn't on, or hasn't refreshed. Re-check the Group Policy
   step and run `gpupdate /force` on the server.
