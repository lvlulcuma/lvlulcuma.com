---
# An incident breakdown → lvlulcuma.com/en/news/incidents/openssh-alpine-sshole/
title: "*sshole: how an over-long password opened Alpine Linux servers"
dek: "On 5 November 2026, OpenSSH and Alpine Linux fixed a bug that let anyone log in to accounts without a password on Alpine and other musl-based systems by sending a 257 to 1,024-byte password; a threat intelligence firm says attackers used it within hours."
type: vulnerability
status: unfolding       # unfolding | confirmed | report (the victim or investigators published a full report)
date: 2026-11-05        # when it became public
published: 2026-11-09   # when this breakdown was published
who: "Servers and containers running OpenSSH on Alpine Linux, and other musl-based systems such as OpenWrt with OpenSSH, Buildroot and Yocto"
sector: "Linux servers, containers and cloud images"
entry: "A flaw in SSH password checking (CVE-2026-123158): no password needed, only the name of an account that doesn't have one"
impact: "Anyone who can reach SSH can log in to accounts without a password; on some cloud images that account can become root; one decoy server was taken over with the bug"
timeline:
  - date: 2012-08
    text: "Context: musl, the C library Alpine uses, starts returning “*” when its password-hashing function fails, and stops accepting SHA-crypt passwords longer than 256 bytes."
  - date: 2016-07-15
    text: "Context: to fix a timing leak (CVE-2016-6210), OpenSSH starts hashing login attempts for accounts with no usable password too, using another account's salt. Together with the musl behavior, this is what later opens the door."
  - date: 2026-11-05
    text: "Researcher Özgün Kültekin of Wakefield publishes the *sshole write-up. OpenSSH releases version 10.6p2 with a fix, and Alpine publishes fixed packages and new releases 3.21.10, 3.22.8, 3.23.8 and 3.24.4. No attacks are reported yet."
  - date: 2026-11-06
    text: "Reports now carry the number CVE-2026-123158, rated 8.1 (High). The threat intelligence firm Previdian says attackers tried the bug eight times from one address and got root on one of its decoy servers less than nine hours after the CVE was published."
attack:
  - tactic: "Initial access"
    id: T1190
    name: "Exploit Public-Facing Application"
    text: "Sent an over-long password over SSH for an account without a password, and got in."
  - tactic: "Discovery"
    id: T1033
    name: "System Owner/User Discovery"
    text: "Ran `id` on Previdian's decoy server to see which user they had become."
  - tactic: "Discovery"
    id: T1082
    name: "System Information Discovery"
    text: "Ran `uname` and `hostname` to learn about the system."
detect:
  - "`Accepted password for` in `/var/log/messages` for an account that has no password (root, a key-only user or `alpine`). Alpine says to treat a server as compromised if you can't rule such a login out."
  - "A failed password attempt followed by an accepted one in the same SSH connection."
  - "`id`, `uname` and `hostname` run in non-interactive SSH sessions right after a login, as on Previdian's decoy server."
  - "New users, new files, changed `authorized_keys` or `doas` use that nobody can explain."
check:
  - "On Alpine, run `apk upgrade -U -a`, then `rc-service sshd restart`: the running daemon keeps the old code until it restarts."
  - "Check the installed package with `apk info -v openssh-server`, not the SSH version banner: Alpine fixes older versions without changing their version number."
  - "If you can't update now, turn off password logins: set `PasswordAuthentication no`, check the file with `sshd -t`, restart, and confirm with `sshd -T | grep -i passwordauthentication`. Keep a session open and test your key login first."
  - "Look beyond servers: containers that run sshd, images built before 5 November, and routers or devices on OpenWrt, Buildroot or Yocto with OpenSSH."
  - "Know which accounts have `*` as their password field (key-only users, root, `alpine` on some cloud images): those are the ones exposed. Accounts locked with `!` are not."
  - "Systems with glibc, SSH with PAM switched on, and Dropbear aren't affected."
unknown:
  - "How many servers and container images are exposed. Shodan lists about 22 million systems with SSH open, but only some of them run Alpine."
  - "Whether attacks go beyond the eight attempts from one address that Previdian saw. No other source had confirmed exploitation."
  - "Whether anyone found and used the bug before it was published."
  - "Which appliances and other products built on musl ship OpenSSH without PAM and will need their own updates."
  - "When exactly the bug was reported to OpenSSH: reports differ between “the day before” and “earlier this week”."
jobs: [vulnerability-analyst, security-administrator, container-security-engineer, cloud-security-engineer, soc-analyst]
topics: [patch-management, vulnerability-prioritization, linux-logs, linux-administration, security-baselines]
sources:
  - name: "Orca Security: *sshole: OpenSSH Authentication Bypass Gives Attackers Root on Alpine Linux"
    url: "https://orca.security/resources/research/sshole-openssh-authentication-bypass-gives-attackers-root-on-alpine-linux/"
  - name: "StepSecurity: CVE-2026-123158 (*sshole): OpenSSH Password Authentication Bypass on Alpine Linux"
    url: "https://www.stepsecurity.io/blog/cve-2026-123158-sshhole-openssh-musl-password-bypass"
  - name: "Field Effect: OpenSSH releases fix for authentication bypass on Alpine Linux"
    url: "https://fieldeffect.com/blog/openssh-fix-authentication-bypass-alpine-linux"
  - name: "The Hacker News: OpenSSH Issues Emergency Fix for Flaw Letting Long Passwords Bypass SSH Auth on Alpine Linux"
    url: "https://thehackernews.com/2026/11/openssh-issues-emergency-fix-for-flaw.html"
  - name: "The Hacker News: Hackers Target OpenSSH SSHole Flaw Within Hours of Disclosure, Gain Root on Honeypot"
    url: "https://thehackernews.com/2026/11/hackers-exploited-openssh-sshole-flaw.html"
  - name: "SecurityWeek: OpenSSH Rushes Patches for 'SSHole' Authentication Bypass"
    url: "https://www.securityweek.com/openssh-rushes-patches-for-sshole-authentication-bypass/"
  - name: "CSO Online: OpenSSH flaw lets attackers access password-disabled accounts on some Linux systems"
    url: "https://www.csoonline.com/article/4245407/openssh-flaw-lets-attackers-access-password-disabled-accounts-on-some-linux-systems.html"
  - name: "Linux Compatible: Alpine Linux 3.21.10, 3.22.8, 3.23.8 and 3.24.4 Patches Critical SSH Password Bypass"
    url: "https://www.linuxcompatible.org/story/alpine-linux-32110-3228-3238-and-3244-patches-critical-ssh-password-bypass/"
---

OpenSSH is the standard way to log in to Linux servers remotely. Alpine Linux is a small Linux system found in countless Docker containers and cloud servers. Instead of glibc, it uses musl, a smaller version of the C library that almost every program relies on. On 5 November, researcher Özgün Kültekin of Wakefield published a bug he called *sshole, and OpenSSH and Alpine shipped fixes the same day.

The bug needs three things that are normal on Alpine: SSH without PAM, password logins switched on (OpenSSH's default), and at least one account with a real password. Then an attacker can log in to any account whose password field is just “*”, meaning it has no password, by sending a password 257 to 1,024 bytes long. Key-only users have such a field, and so does root, although Alpine blocks direct root logins over SSH by default. On some Alpine cloud images, the exposed `alpine` user can become root without a password.

The bug comes from two old decisions. Since 2012, musl gives back “*” when it can't hash a password, and it can't hash SHA-crypt passwords longer than 256 bytes. Since 2016, OpenSSH hashes login attempts even for accounts without a usable password, borrowing another account's salt, so that every check takes the same time. The result, “*”, matches the stored “*”, and the door opens. OpenSSH's maintainers say the root cause isn't in their code; version 10.6p2 works around it.

On 6 November, the threat intelligence firm Previdian said attackers had used the bug to get root on one of its decoy servers within hours and ran only basic commands. Other researchers and Alpine itself hadn't seen attacks when the bug was published.
