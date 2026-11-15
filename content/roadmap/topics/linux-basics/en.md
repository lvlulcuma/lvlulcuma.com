---
# Roadmap topic. Its title and summary show on every job page that lists "linux-basics" in learn.yml.
# The text under the dashes is the topic's own page: lvlulcuma.com/en/roadmap/topics/linux-basics/
# How these pages are written: docs/claude/roadmap-topic.md
title: "Linux basics"
summary: "The file system, users and permissions, processes and services, package managers, where logs live (/var/log), and everyday shell commands like ls, cd, grep, cat, tail, ps and ssh."
date: 2026-11-15
sources:
  - name: "Canonical: Canonical releases Ubuntu 26.04 LTS Resolute Raccoon"
    url: "https://canonical.com/blog/canonical-releases-ubuntu-26-04-lts-resolute-raccoon"
  - name: "Ubuntu 26.04 LTS release notes"
    url: "https://documentation.ubuntu.com/release-notes/26.04/"
  - name: "Debian: Debian 13 \"trixie\" released, August 9, 2025"
    url: "https://www.debian.org/News/2025/20250809.en.html"
  - name: "Kali Docs: Kali's relationship with Debian"
    url: "https://www.kali.org/docs/policy/kali-linux-relationship-with-debian/"
  - name: "Ubuntu project docs: Package format"
    url: "https://documentation.ubuntu.com/project/how-ubuntu-is-made/concepts/package-format/"
  - name: "Linux Foundation: Filesystem Hierarchy Standard 3.0, 2015"
    url: "https://refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html"
  - name: "systemd: file-hierarchy(7)"
    url: "https://www.freedesktop.org/software/systemd/man/255/file-hierarchy.html"
  - name: "Debian 13 release notes: Issues to be aware of for trixie"
    url: "https://www.debian.org/releases/stable/release-notes/issues"
  - name: "Debian 12 release notes: Issues to be aware of for bookworm"
    url: "https://www.debian.org/releases/bookworm/amd64/release-notes/ch-information.en.html"
  - name: "Debian 11 release notes (yescrypt by default)"
    url: "https://www.debian.org/releases/bullseye/amd64/release-notes"
  - name: "Microsoft Learn: Adjust case sensitivity (WSL)"
    url: "https://learn.microsoft.com/windows/wsl/case-sensitivity"
  - name: "Linux man-pages: passwd(5)"
    url: "https://man7.org/linux/man-pages/man5/passwd.5.html"
  - name: "Linux man-pages: shadow(5)"
    url: "https://man7.org/linux/man-pages/man5/shadow.5.html"
  - name: "Debian manpages: crypt(5), libxcrypt"
    url: "https://manpages.debian.org/trixie/libcrypt-dev/crypt.5.en.html"
  - name: "Ubuntu manpages: login.defs(5)"
    url: "https://manpages.ubuntu.com/manpages/stonking/man5/login.defs.5.html"
  - name: "Ubuntu manpages: pam_umask(8)"
    url: "https://manpages.ubuntu.com/manpages/noble/man8/pam_umask.8.html"
  - name: "Ubuntu Server docs: User management"
    url: "https://documentation.ubuntu.com/server/how-to/security/user-management"
  - name: "Ubuntu Community Help: RootSudo"
    url: "https://help.ubuntu.com/community/RootSudo"
  - name: "Red Hat: Managing sudo access (RHEL 10)"
    url: "https://docs.redhat.com/en/documentation/Red_Hat_Enterprise_Linux/10/html/security_hardening/managing-sudo-access"
  - name: "Ubuntu Discourse: Ubuntu 25.10 (Questing Quokka) release notes"
    url: "https://discourse.ubuntu.com/t/questing-quokka-release-notes/59220"
  - name: "Trifecta Tech Foundation: Memory-safe sudo to become the default in Ubuntu, May 2025"
    url: "https://trifectatech.org/blog/memory-safe-sudo-to-become-the-default-in-ubuntu"
  - name: "GNU Coreutils manual: Mode structure"
    url: "https://www.gnu.org/s/coreutils/manual/html_node/Mode-Structure.html"
  - name: "GNU Coreutils manual: What information is listed (ls)"
    url: "https://gnu.org/software/coreutils/manual/html_node/What-information-is-listed.html"
  - name: "GNU Coreutils manual: shred invocation"
    url: "https://www.gnu.org/software/coreutils/shred"
  - name: "Arch manual pages: chmod(1)"
    url: "https://man.archlinux.org/man/chmod.1.txt"
  - name: "procps-ng: ps(1)"
    url: "https://man.archlinux.org/man/core/procps-ng/ps.1.en"
  - name: "Linux man-pages: signal(7)"
    url: "https://www.man7.org/linux/man-pages/man7/signal.7.html"
  - name: "Linux man-pages: proc_pid_exe(5)"
    url: "https://man7.org/linux/man-pages/man5/proc_pid_exe.5.html"
  - name: "SUSE: What is a kernel thread?"
    url: "https://www.suse.com/blog/what-is-a-kernel-thread/"
  - name: "Elastic Security: Executable Masquerading as Kernel Process (detection rule)"
    url: "https://www.elastic.co/guide/en/security/current/executable-masquerading-as-kernel-process.html"
  - name: "Linux man-pages: systemd.unit(5)"
    url: "https://man7.org/linux/man-pages/man5/systemd.unit.5.html"
  - name: "systemd: systemd.exec(5)"
    url: "https://www.freedesktop.org/software/systemd/man/253/systemd.exec.html"
  - name: "systemd: systemd.service(5)"
    url: "https://www.freedesktop.org/software/systemd/man/systemd.service.html"
  - name: "Microsoft Learn: Use systemd to manage Linux services with WSL"
    url: "https://learn.microsoft.com/windows/wsl/systemd"
  - name: "Debian manpages: crontab(5)"
    url: "https://manpages.debian.org/testing/cron/crontab.5.en.html"
  - name: "Debian manpages: apt-secure(8)"
    url: "https://manpages.debian.org/unstable/apt/apt-secure.8.en.html"
  - name: "dpkg(1) manual"
    url: "https://www.mankier.com/1/dpkg"
  - name: "Red Hat: Verifying packages with rpm -V"
    url: "https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/5/html/Deployment_Guide/s2-rpm-verifying.html"
  - name: "Red Hat: DNF commands list (RHEL 10)"
    url: "https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/10/html/managing_software_with_the_dnf_tool/dnf-commands-list"
  - name: "Fedora Project Wiki: DNF"
    url: "https://fedoraproject.org/wiki/DNF"
  - name: "Alpine Linux Wiki: Alpine Package Keeper"
    url: "https://wiki.alpinelinux.org/wiki/Alpine_Package_Keeper"
  - name: "Red Hat: Troubleshooting problems by using log files (RHEL 10)"
    url: "https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/10/html/risk_reduction_and_recovery_operations/troubleshooting-problems-by-using-log-files"
  - name: "Ubuntu tutorial: Viewing and monitoring log files"
    url: "https://ubuntu.com/tutorials/viewing-and-monitoring-log-files"
  - name: "Ubuntu: rsyslog default rules (50-default.conf)"
    url: "https://patches.ubuntu.com/r/rsyslog/rsyslog_8.2504.0-1ubuntu2.patch"
  - name: "systemd: journald.conf(5)"
    url: "https://www.freedesktop.org/software/systemd/man/258/journald.conf.html"
  - name: "Linux man-pages: journalctl(1)"
    url: "https://man7.org/linux/man-pages/man1/journalctl.1.html"
  - name: "GNU Bash manual: Bash History Facilities"
    url: "https://www.gnu.org/s/bash/manual/html_node/Bash-History-Facilities.html"
  - name: "IANA: Service Name and Transport Protocol Port Number Registry"
    url: "https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml"
  - name: "RFC 4251: The Secure Shell (SSH) Protocol Architecture, 2006"
    url: "https://www.rfc-editor.org/rfc/rfc4251"
  - name: "RFC 4252: The Secure Shell (SSH) Authentication Protocol, 2006"
    url: "https://www.rfc-editor.org/rfc/rfc4252"
  - name: "Linux man-pages: ssh(1)"
    url: "https://man7.org/linux/man-pages/man1/ssh.1.html"
  - name: "Linux man-pages: sshd(8)"
    url: "https://man7.org/linux/man-pages/man8/sshd.8.html"
  - name: "Linux man-pages: sshd_config(5)"
    url: "https://man7.org/linux/man-pages/man5/sshd_config.5.html"
  - name: "OpenSSH 9.5 release notes (Ed25519 keys by default)"
    url: "https://www.openssh.com/txt/release-9.5"
  - name: "OpenSSH 9.8 release notes (sshd-session)"
    url: "https://www.openssh.com/txt/release-9.8"
  - name: "OpenSSH 10.0 release notes (sshd-auth)"
    url: "https://openssh.com/txt/release-10.0"
  - name: "MITRE ATT&CK T1548.001: Setuid and Setgid"
    url: "https://attack.mitre.org/techniques/T1548/001/"
  - name: "MITRE ATT&CK T1036.004: Masquerade Task or Service"
    url: "https://attack.mitre.org/techniques/T1036/004/"
  - name: "MITRE ATT&CK T1543.002: Systemd Service"
    url: "https://attack.mitre.org/techniques/T1543/002/"
  - name: "MITRE ATT&CK T1053.006: Systemd Timers"
    url: "https://attack.mitre.org/techniques/T1053/006/"
  - name: "MITRE ATT&CK T1053.003: Cron"
    url: "https://attack.mitre.org/techniques/T1053/003/"
  - name: "MITRE ATT&CK T1546.004: Unix Shell Configuration Modification"
    url: "https://attack.mitre.org/techniques/T1546/004/"
  - name: "MITRE ATT&CK T1098.004: SSH Authorized Keys"
    url: "https://attack.mitre.org/techniques/T1098/004/"
  - name: "MITRE ATT&CK T1110.001: Password Guessing"
    url: "https://attack.mitre.org/techniques/T1110/001/"
  - name: "OverTheWire: Bandit"
    url: "https://overthewire.org/wargames/bandit/"
  - name: "Linux Foundation: Introduction to Linux (LFS101)"
    url: "https://training.linuxfoundation.org/training/introduction-to-linux/"
  - name: "TryHackMe: free learning path"
    url: "https://tryhackme.com/resources/blog/free_path"
visuals:
  # ls -l on the passwd program, one piece per row; the setuid bit is the point.
  lsl:
    kind: window
    title: "ls -l /usr/bin/passwd, piece by piece"
    lead: ["-rwsr-xr-x 1 root root 64152 May 30 2024 /usr/bin/passwd", "from one Ubuntu computer; the size and date differ on yours"]
    head: ["Piece", "What it means"]
    rows:
      - ["<code>-</code>", "The file type: a regular file. <code>d</code> would be a directory, <code>l</code> a link"]
      - ["<code>rws</code>", "The owner may read, write and run it. The <code>s</code> in place of <code>x</code> is setuid: it runs as its owner"]
      - ["<code>r-x</code>", "The group may read and run it"]
      - ["<code>r-x</code>", "Everyone else may read and run it"]
      - ["<code>1</code>", "How many names (hard links) the file has"]
      - ["<code>root root</code>", "The owner, then the group"]
      - ["<code>64152</code>", "The size in bytes"]
      - ["<code>May 30 2024</code>", "When the contents last changed"]
    mark: 2
    caption: "Anyone may run <code>passwd</code>, and thanks to the <code>s</code> it runs as root. That's how it can write your new password into <code>/etc/shadow</code>, a file you can't even read."
  # What happens when a normal user types sudo.
  sudo:
    kind: route
    stages:
      - where: "You type sudo apt update"
        steps: ["sudo asks for your own password, not root's"]
      - where: "sudo checks the rules"
        steps: ["In /etc/sudoers: may your account, or one of your groups, run this?"]
      - where: "apt runs"
        steps: ["As root, user 0", "Your shell stays yours: only that one command had root's powers"]
    caption: "If the rules don't allow it, sudo refuses and nothing runs as root. Who may borrow root's powers is set in <code>/etc/sudoers</code>, usually by group: <code>sudo</code> on Debian and Ubuntu, <code>wheel</code> on Red Hat."
  # Parent and child pairs on Linux: what's normal, what needs an explanation.
  ptree:
    kind: cards
    cards:
      - title: "Normal"
        text: "Pairs you'll see on any healthy server."
        tags: ["sshd → sshd-session → bash", "kthreadd (PID 2) → [kworker/0:1]", "systemd (PID 1) → cron → sh"]
      - title: "Needs an explanation"
        text: "Not always an attack, but never something to wave through."
        tags: ["nginx → sh → curl", "[kworker/0:2] whose parent isn't PID 2", "a program running from /tmp or /dev/shm", "/proc/PID/exe ending in (deleted)"]
    caption: "A name in brackets proves nothing: any program can call itself <code>[kworker]</code>. Its parent, its user and its file in <code>/proc</code> tell you much more."
  # A made-up unit file, line by line.
  unit:
    kind: window
    title: "/etc/systemd/system/backup-agent.service (made up)"
    head: ["Line", "What it does"]
    rows:
      - ["<code>[Unit]</code>", "Starts the section that describes the unit"]
      - ["<code>Description=Nightly backup agent</code>", "The name <code>systemctl status</code> shows"]
      - ["<code>[Service]</code>", "Starts the section on how to run it"]
      - ["<code>ExecStart=/opt/backup-agent/bin/agent</code>", "The program systemd starts"]
      - ["<code>User=backup</code>", "The account it runs as. Without this line, a system service runs as root"]
      - ["<code>Restart=on-failure</code>", "Start it again if it crashes or exits with an error"]
      - ["<code>[Install]</code>", "Starts the section that <code>systemctl enable</code> reads"]
      - ["<code>WantedBy=multi-user.target</code>", "enable links the unit here, so it starts at every boot"]
    mark: 4
    caption: "To judge a service, read three lines: what it runs (<code>ExecStart</code>), as whom (<code>User</code>) and whether it starts at boot (<code>WantedBy</code>, once enabled)."
  # The first places to check for anything that starts by itself, with their ATT&CK technique.
  persist:
    kind: cards
    layout: rows
    cards:
      - title: "systemd services"
        text: "A unit file, enabled to start at every boot, usually as root. Making a system-wide one takes root."
        tags: ["/etc/systemd/system", "~/.config/systemd/user", "ATT&CK T1543.002"]
      - title: "systemd timers"
        text: "A .timer unit that starts a service on a schedule, like a scheduled task on Windows."
        tags: ["systemctl list-timers", "ATT&CK T1053.006"]
      - title: "cron"
        text: "A line in a crontab runs a command at set times, or at every boot with @reboot. Every user can have their own."
        tags: ["crontab -l", "/etc/crontab", "/etc/cron.d", "ATT&CK T1053.003"]
      - title: "Shell startup files"
        text: "Commands in .bashrc or .profile run each time that user opens a shell. Changing your own needs no root."
        tags: ["~/.bashrc", "/etc/profile", "ATT&CK T1546.004"]
      - title: "SSH authorized_keys"
        text: "One more line here lets someone log in with their own key, no password needed."
        tags: ["~/.ssh/authorized_keys", "ATT&CK T1098.004"]
    caption: "The first five places to check for something that starts by itself or lets someone back in."
  # One made-up journal line from the SSH server, piece by piece.
  logline:
    kind: window
    title: "One SSH login in the journal (made up)"
    lead: ["Nov 12 09:41:09 web-01 sshd-session[2211]: Accepted password for deploy from 203.0.113.50 port 51562 ssh2", "as journalctl prints it"]
    head: ["Piece", "What it means"]
    rows:
      - ["<code>Nov 12 09:41:09</code>", "When it happened, in the computer's local time. No year"]
      - ["<code>web-01</code>", "The computer's name"]
      - ["<code>sshd-session[2211]</code>", "The program and its PID: the SSH server (<code>sshd</code> before OpenSSH 9.8)"]
      - ["<code>Accepted password</code>", "The login worked, with a password. A key login says <code>Accepted publickey</code>"]
      - ["<code>for deploy</code>", "The account"]
      - ["<code>from 203.0.113.50 port 51562</code>", "Where it came from: the address and its port"]
    mark: 4
    caption: "After hundreds of failed guesses from the same address, this is the line that matters: someone now has a shell as <code>deploy</code>."
  # SSH keys: what lives where, and what proves what.
  ssh:
    kind: route
    stages:
      - where: "On your computer"
        steps: ["ssh-keygen makes two files: id_ed25519 (private) and id_ed25519.pub (public)", "The private key never leaves your computer"]
      - where: "On the server"
        steps: ["Your public key goes into ~/.ssh/authorized_keys of your account there", "The server's own host key proves it's the machine you meant"]
      - where: "When you connect"
        steps: ["ssh compares the host key with known_hosts and warns if it changed", "Your ssh signs with the private key; the server checks it with the public one", "No password crosses the network"]
    caption: "Whoever can add a line to <code>authorized_keys</code> can log in as that account. That's why attackers like it (ATT&amp;CK T1098.004) and why defenders check it."
  quiz:
    kind: questions
    items:
      - q: "<code>ls -ld /tmp</code> shows <code>drwxrwxrwt</code>. What does the <code>t</code> do, and why does <code>/tmp</code> need it?"
        a: "It's the sticky bit. Everyone may create files in <code>/tmp</code>, but only a file's owner (or the folder's owner, or root) may delete or rename it. Without it, any user could delete everyone else's temporary files."
      - q: "<code>/etc/shadow</code> is <code>-rw-r----- root shadow</code>. Can alex, who isn't in the shadow group, read it? What's the mode as a number?"
        a: "No. The owner (root) may read and write, the group (shadow) may read, everyone else gets nothing. That's 640: 4+2, 4, 0."
      - q: "Root's crontab runs <code>/opt/scripts/cleanup.sh</code> every night, and <code>ls -l</code> shows it as <code>-rwxrwxrwx</code>. Why is that serious?"
        a: "Anyone on the computer can change the script, and whatever they put in it runs as root at the next run. A file that root runs must be writable only by root."
      - q: "A process called <code>[kworker/0:2]</code> runs as deploy with parent PID 1, and <code>/proc/2290/exe</code> points to <code>/dev/shm/.k (deleted)</code>. Kernel thread or not?"
        a: "Not. Real kernel threads belong to root, are started by kthreadd (PID 2) and have no program file. This is a program borrowing a trusted name (ATT&amp;CK T1036.004) that deleted its own file. You can still copy it from <code>/proc/2290/exe</code> while it runs, so do that before you stop it."
      - q: "<code>kill 2290</code> doesn't stop a process: it catches the signal and carries on. What can you send instead, and what's the catch?"
        a: "<code>kill -9 2290</code> sends SIGKILL, which can't be caught, blocked or ignored. The catch: the program can't clean up, and in an investigation whatever was only in its memory is gone, so collect evidence first."
      - q: "SSH warns you that a server's host key has changed. What could have happened, and what do you do?"
        a: "The server may have been reinstalled or given new keys, or someone may be sitting between you and it. ssh disables password logins for that connection for exactly this reason. Check with whoever runs the server before you remove the old key from <code>known_hosts</code>."
      - q: "On a Debian 13 server there's no <code>/var/log/auth.log</code>. Where did the login messages go?"
        a: "Into the systemd journal. Since Debian 12, rsyslog, the program that writes those text files, isn't installed by default. Read them with <code>journalctl</code>, for example <code>journalctl -u ssh</code>."
      - q: "<code>sudo dpkg --verify coreutils</code> prints <code>??5??????   /usr/bin/ls</code>. What does that tell you, and what doesn't it prove?"
        a: "The file's contents no longer match the checksum the package recorded: someone or something changed <code>ls</code>. Worth a close look. But dpkg calls this an integrity check, not security verification: an attacker who is root can change the database too, so a clean result doesn't prove the file is safe."
      - q: "alex runs <code>sudo -l</code> and sees <code>(ALL : ALL) ALL</code>. What does that mean if an attacker steals alex's password?"
        a: "alex may run any command as any user, root included. With the password, the attacker becomes root with one <code>sudo</code>. That's why <code>sudo -l</code> is among the first commands attackers run, and why defenders keep the sudo group small."
---

## The short version

Think of a Linux computer as a big library.

- Every room, shelf and book hangs off one map that starts at the front door, `/`: the **file system**. Even the
  library's machines and the people working in it have an entry there. On Linux, almost everything is a file.
- Everyone carries a **library card** with a number: a **user** and its **UID**. Cards belong to clubs, **groups**, so a
  rule can name a whole club at once.
- Every book has a label with three boxes: what its **owner**, its **group** and **everyone else** may do with it: read,
  write or run. Those are **permissions**.
- One card opens every door: **root**, number 0. Staff borrow its powers for one job at a time with **sudo**.
- The people working right now are **processes**. The night staff who start before anyone arrives are **services**,
  and the head librarian who hires and watches them is **systemd**.
- New books arrive in sealed, signed boxes from known suppliers: **packages**, unpacked by a **package manager** such
  as apt.
- Everything important goes into the daybook: the **logs**, in `/var/log` and in systemd's **journal**.
- You talk to the library through a window at the desk, the **shell**. **SSH** is the same window, reached safely
  from another building.

<mark>On Linux, almost everything is a file in one tree that starts at `/`, and every file and every process belongs
to a user. Three sets of read, write and execute permissions decide who can do what, and root, user 0, can do almost
anything.</mark> Most of what defenders check on a Linux server comes back to three questions: who am I, what can I
touch, and what starts by itself?

By the end of this page you'll be able to:

- find your way around the file system and say what lives in `/etc`, `/home`, `/var/log`, `/tmp` and `/proc`;
- read `/etc/passwd`, explain what a UID is and say who may use `sudo`;
- read `ls -l` and modes like 755 and 600, and spot a risky setuid file;
- list processes, read a process tree and check a suspicious process through `/proc`;
- list services, timers and cron jobs, and name the places where programs start by themselves;
- install, look up and check software with a package manager;
- find the logs, read an SSH login line and search them with `journalctl` and `grep`;
- chain everyday commands with pipes, and log in with SSH keys instead of a password.

## Words you'll need

- **Kernel:** the core of the system that runs programs and talks to the hardware. Strictly speaking, "Linux" is only
  the kernel.
- **Distribution (distro):** the kernel plus programs, settings and a package manager, ready to install: Ubuntu,
  Debian, Red Hat Enterprise Linux (RHEL), Fedora, Kali.
- **Terminal and shell:** the terminal is the window; the shell is the program inside it that reads your commands.
  Most Linux systems use **bash**.
- **Path:** a file's address in the tree, like `/home/alex/notes.txt`.
- **root:** the all-powerful account, user 0. The same word also names the top of the tree, `/`, and root's own home
  folder, `/root`.
- **Daemon:** a program that runs in the background, often with a name ending in d: `sshd`, `systemd-journald`.
- **Package:** a program packed with its files, its version and a list of what else it needs, ready for the package
  manager to install.

> [!NOTE]
> This page uses Ubuntu 26.04 LTS ("Resolute Raccoon", released April 23, 2026, supported until April 2031) and
> Debian 13 "trixie" (August 9, 2025) for its examples. Ubuntu is built on Debian, and Kali Linux on Debian's testing
> branch, so what works on one mostly works on the others. Where Red Hat Enterprise Linux and Fedora do things
> differently, the page says so.

## The file system

### One tree from `/`

Windows has drive letters; Linux has one tree. Everything hangs from its top, `/`, called the **root directory**. A
second disk or a USB stick doesn't get a letter: it's **mounted**, attached to a folder inside the tree, such as one
under `/mnt` or `/media`.

- An **absolute path** starts at the top: `/var/log/syslog`. A **relative path** starts where you are: from
  `/var`, `log/syslog` is the same file.
- `.` means the folder you're in, `..` the one above it, and `~` your home folder: `~/notes.txt` is
  `/home/alex/notes.txt` for alex.
- Names are **case-sensitive**: `Report.txt` and `report.txt` are two different files.
- A name that starts with a dot is **hidden**: `.bashrc`, `.ssh`. Plain `ls` skips them; `ls -a` shows them. Hidden
  isn't secret, it only keeps settings out of the way, but it's also an easy place to tuck a file nobody looks at.

### The folders worth knowing

Where things go is set by the **Filesystem Hierarchy Standard** (FHS 3.0, 2015) and, on systems with systemd, by its
file-hierarchy rules. You'll find the same folders on almost every Linux computer:

| Folder | What's in it | Why it matters in security |
|---|---|---|
| `/etc` | Settings for the whole system, as text files | Accounts, sudo rules, the SSH server, cron: change a file here and you change the system |
| `/home` | One folder per person: `/home/alex` | Their files, hidden settings, SSH keys and shell history |
| `/root` | Root's own home folder, kept outside `/home` | The same things, for the most powerful account |
| `/var/log` | Logs that survive a reboot | The first place to look after something happened |
| `/tmp` | Temporary files anyone may write; usually emptied at boot | A favorite drop spot: every user can write there |
| `/var/tmp` | Temporary files that survive a reboot | The same, but files stay after a restart |
| `/dev/shm` | Shared memory, kept in RAM, emptied at boot | Writable by everyone, and gone after a reboot |
| `/usr/bin`, `/usr/sbin` | Programs. `/bin` and `/sbin` are now links to these | Where trusted programs live; a "system" program elsewhere is odd |
| `/opt` | Add-on software, often from outside the distribution | Check where each program came from |
| `/usr/local` | Software the administrator installed by hand | No package database vouches for these files |
| `/boot` | The kernel and the files that start the system | Whatever changes here runs before everything else |
| `/proc` | Not on any disk: the kernel shows each running process as a folder | Live evidence about every process |
| `/dev` | Devices shown as files: disks, terminals, `/dev/null` | |
| `/run` | Data programs need while running, kept in memory | Cleared at every boot |

systemd's rules list the only places a normal user can write to: `/tmp`, `/var/tmp`, `/dev/shm`, their home folder
and a small per-user folder under `/run`. That short list is exactly where an attacker who gets in as a normal user
puts their files, which is why defenders look there first.

> [!NOTE]
> Debian 13 changed two of these. `/tmp` now lives in memory (a **tmpfs**), so it's empty after every reboot, and
> files nobody has used are deleted automatically: after 10 days in `/tmp` and 30 days in `/var/tmp`. Evidence in
> those folders has a short life.

### Everything is a file

Linux shows almost everything as a file: settings are text files in `/etc`, devices are files in `/dev`, and running
processes are folders in `/proc`. That's why the same few tools, `cat`, `grep` and `ls`, work on almost all of it. The
first character of `ls -l` tells you what kind of file you're looking at:

| Character | Type |
|---|---|
| `-` | A regular file |
| `d` | A directory (folder) |
| `l` | A symbolic link: a pointer to another path |
| `c`, `b` | A device: character (a terminal) or block (a disk) |
| `p`, `s` | A pipe or a socket: ways for programs to talk to each other |

## Users, groups and root

### Accounts are lines in a text file

Every account is one line in `/etc/passwd`, a file **everyone can read**. A line has seven fields separated by colons:

```
alex:x:1000:1000:Alex Example:/home/alex:/bin/bash
```

| Field | Here | What it means |
|---|---|---|
| Name | `alex` | The login name |
| Password | `x` | The hash isn't here; it's in `/etc/shadow` |
| UID | `1000` | The user's number: Linux checks this, not the name |
| GID | `1000` | The number of the user's main group |
| Comment | `Alex Example` | Usually the person's full name |
| Home | `/home/alex` | Where the user starts |
| Shell | `/bin/bash` | The program that runs at login. Service accounts get `/usr/sbin/nologin`: no login at all |

The password hashes live in **`/etc/shadow`**, which normal users must not be able to read. On Debian and Ubuntu it's
`-rw-r-----`, owned by root and the group shadow. Its second field shows how the password was hashed:

- `$y$…` is **yescrypt**, the default since Debian 11 and the method the libxcrypt library recommends for new hashes.
- `$6$…` is **SHA-512 crypt**, an older method you'll still find on many systems.
- A field that is `!` or `*`, or starts with `!`, means no password works: the account can't log in with one. New
  accounts that never got a password look like that.

### UIDs: the number behind the name

| UID | Who |
|---|---|
| `0` | root. Any account with UID 0 has root's powers, whatever its name |
| `1`–`999` | System and service accounts, such as `www-data` for the web server. New ones get 101–999 by default |
| `1000` and up | People. The first person's account usually gets 1000 |

A second account with UID 0 is a classic hiding place: a harmless-looking name with root's powers. A quick check is
whether any line in `/etc/passwd` other than root's has `0` in its third field.

`id` shows who you are right now:

```sh
id
```

```
uid=1000(alex) gid=1000(alex) groups=1000(alex),4(adm),27(sudo)
```

### Groups

Every user has a main group (on Debian and Ubuntu, a group with their own name) and can be in more groups, listed in
`/etc/group`. A few groups carry real power:

- **sudo** (Debian, Ubuntu) and **wheel** (Red Hat, Fedora): may run commands as root with `sudo`.
- **adm** and **systemd-journal**: may read the whole system journal, not just their own messages.

### root and sudo

root can read and change any file and stop any process: the permission checks you'll meet next barely apply to it.
That's why everyday work is done as a normal user, and root's powers are borrowed only when needed.

- On **Ubuntu**, root's password is locked: nobody can log in as root. The first account made during installation is
  in the **sudo** group instead.
- **`sudo`** runs one command as root after asking for **your own** password. Who may use it is set in
  `/etc/sudoers` and the files in `/etc/sudoers.d/`. On Ubuntu, the line `%sudo ALL=(ALL:ALL) ALL` lets the sudo
  group run anything; on Red Hat, `%wheel ALL=(ALL) ALL` does the same for wheel. Edit these files only with
  `visudo`, which checks them for mistakes before saving: a broken sudoers file can stop sudo from working at all.
- **`sudo -l`** lists what you may run with sudo. It's one of the first commands an attacker runs after getting in,
  for the same reason a defender should check it.

<!-- pic: sudo -->

> [!ASIDE] A new sudo on Ubuntu
> Since Ubuntu 25.10, the `sudo` command is provided by **sudo-rs**, a memory-safe rewrite in the Rust programming
> language by the Trifecta Tech Foundation. You still type `sudo`, so nothing on this page changes, but it's why you
> may see "sudo-rs" in package names and messages on Ubuntu 26.04. The original sudo is still there, with its programs
> renamed with a `.ws` ending.

## Permissions

### Reading `ls -l`

Every file has an **owner**, a **group** and a **mode**: three sets of three bits, for the owner, the group and
everyone else (often called "others"). Each set says whether that person may **r**ead, **w**rite or e**x**ecute the
file.

<!-- pic: lsl -->

On a **folder**, the same letters mean something slightly different, and it trips up beginners:

- **r** lets you list the names inside.
- **w** lets you create, delete and rename files inside, even files you can't write to yourself.
- **x** lets you go into the folder and reach the files in it. Without it, knowing a file's name doesn't help.

Linux checks only one set: if you're the owner, the owner's bits apply; if not but you're in the file's group, the
group's; otherwise the others' bits. Root skips these checks.

### Modes as numbers

Each letter has a value: **r = 4, w = 2, x = 1**. Add them up for each set and you get three digits:

| Mode | Letters | Typical use |
|---|---|---|
| `755` | `rwxr-xr-x` | Programs and folders everyone may use but only the owner may change |
| `644` | `rw-r--r--` | Ordinary files: the owner edits, everyone reads |
| `640` | `rw-r-----` | `/etc/shadow`: root writes, the shadow group reads, nobody else |
| `600` | `rw-------` | Private files, such as SSH private keys |
| `700` | `rwx------` | Private folders, such as `~/.ssh` |
| `1777` | `rwxrwxrwt` | `/tmp`: everyone writes, the sticky bit protects each file |
| `777` | `rwxrwxrwx` | Anyone may change it: almost always a mistake |

You change modes with `chmod` and owners with `chown` (which needs root):

```sh
chmod 600 ~/.ssh/id_ed25519
chmod u+x backup.sh
sudo chown alex:alex report.txt
```

`u+x` means "add execute for the user who owns it"; `g` is the group, `o` the others, `a` all three.

New files get their mode from the **umask**, which removes bits from the starting point (666 for files, 777 for
folders). The usual default is `022`, giving `644` files and `755` folders. On Ubuntu, a normal user whose main group
has their own name gets `002` instead, so their new files are `664`: the group may write too.

### Three special bits

A fourth digit in front adds three more bits. They're rare, and that's what makes them worth checking:

- **setuid** (`4000`, an `s` in the owner's x spot): the program runs as **the file's owner**, not as whoever started
  it. `passwd` needs this to change `/etc/shadow`.
- **setgid** (`2000`, an `s` in the group's x spot): the same idea for the group.
- **sticky bit** (`1000`, a `t` in the others' x spot): in a folder everyone can write to, only a file's owner (or
  the folder's owner, or root) may delete or rename it. `/tmp` has it.

A setuid-root program that can be made to run other commands, or that has a bug, hands out root. Attackers search for
them first (ATT&CK T1548.001), and so should you:

```sh
find / -perm -4000 -type f 2>/dev/null
```

`-perm -4000` means "has the setuid bit", and `2>/dev/null` throws away the "Permission denied" errors from folders
you can't open. In `/usr/bin` on a small Ubuntu 24.04 install, for example, there are ten: `chfn`, `chsh`,
`fusermount3`, `gpasswd`, `mount`, `newgrp`, `passwd`, `su`, `sudo` and `umount`. Keep a list of what's normal: a new
setuid file, above all one in `/tmp` or a home folder, needs an explanation.

> [!WARNING]
> `chmod 777` "fixes" a permission error by letting everyone change the file. If root or a service ever runs that file,
> anyone on the computer can now run their own code with those powers. Give the one account that needs it the one bit
> it needs.

## Processes

### What a process has

A **process** is a running program. Each one has:

- a **PID** (process ID) and a **PPID**, its parent's PID: every process is started by another one;
- a **user** it runs as, which decides what it may touch;
- a **command line**: the program and everything typed after it;
- a program file it was started from, and the files and network connections it has open.

The first process, PID 1, is **systemd**: it starts everything else in user space. PID 2 is **kthreadd**, which
starts the kernel's own helpers, the **kernel threads**. They have no program file and no command line, so `ps` shows
their names in brackets: `[kworker/0:1]`.

### Seeing them

```sh
ps -ef
ps -ef --forest
top
```

- `ps -ef` lists every process with its user (UID), PID, PPID, start time and command. You'll also see `ps aux` in
  tutorials: the same list in the older BSD style, with CPU and memory columns.
- `--forest` draws the list as a tree, so you can see who started whom.
- `top` shows the busiest processes live; press `q` to leave it.

The `STAT` column of `ps aux` uses letters worth knowing: **R** running, **S** sleeping (waiting for something),
**D** waiting on the disk and can't be interrupted, **T** stopped, **Z** a zombie (finished, but its parent hasn't
collected it yet) and **I** an idle kernel thread.

<!-- pic: ptree -->

### Looking inside `/proc`

`ps` gets everything it shows by reading `/proc`, and you can read it too. Each process has a folder, `/proc/<PID>`;
two entries in it are worth knowing from day one:

- **`/proc/<PID>/exe`** is a link to the program file the process was started from. If that file has been deleted
  since, the link ends in ` (deleted)`, a common trick of malware that wants to leave nothing on the disk. The
  process still has the file open, so you can copy it back out of `/proc/<PID>/exe` while it runs.
- **`/proc/<PID>/cmdline`** holds the command line the process was started with. A program can choose the name it
  shows there, so `ps` may print `[kworker/0:2]` for anything; the `exe` link, kept by the kernel, still points to the
  real file.

`$$` is your own shell's PID, so `ls -l /proc/$$/exe` shows which program your shell is.

### Stopping a process: signals

You stop or nudge a process by sending it a **signal**. `kill` sends one; despite its name, it doesn't always kill.

| Signal | Number | What it asks |
|---|---|---|
| SIGTERM | 15 | "Please stop." What `kill` sends by default; the program may clean up first, or ignore it |
| SIGINT | 2 | Interrupt from the keyboard: what Ctrl+C sends |
| SIGHUP | 1 | The terminal it belonged to has closed |
| SIGKILL | 9 | Stop now. It can't be caught, blocked or ignored |

```sh
kill 2290
kill -9 2290
```

You can also give the name instead of the number: `kill -KILL 2290` is the same as `kill -9 2290`.

> [!TIP]
> In an investigation, don't rush to `kill -9`. A process's memory and its deleted program file disappear with it.
> Collect first (copy `/proc/<PID>/exe`, note its command line, user and network connections), then stop it.

## Services and systemd

### Units

A **service** is a program that runs in the background, usually from boot, whether or not anyone is logged in. On
Debian, Ubuntu, Red Hat, Fedora and most other distributions, **systemd** starts, stops and restarts them. It
describes each thing it manages in a small text file called a **unit**: `ssh.service` for the SSH server on Ubuntu,
`apt-daily.timer` for the timer that checks for updates every day.

Unit files live in three main places:

| Folder | Who puts them there |
|---|---|
| `/usr/lib/systemd/system` | Packages |
| `/etc/systemd/system` | The administrator. A unit here wins over one with the same name from a package |
| `~/.config/systemd/user` | A single user, for their own services |

<!-- pic: unit -->

The commands you'll use most:

```sh
systemctl status ssh
systemctl list-units --type=service --state=running
systemctl list-unit-files --state=enabled
sudo systemctl restart ssh
sudo systemctl enable ssh
systemctl list-timers
```

`status` shows whether a service runs, its PID, its unit file and its last log lines. `enable` makes it start at every
boot (by creating links the `[Install]` section asks for), and `disable` undoes that; `start`, `stop` and `restart` act
right away. The SSH server's unit is `ssh` on Debian and Ubuntu, and `sshd` on Red Hat and Fedora.

A **timer** is a unit that starts a service on a schedule: every day, an hour after boot, every Monday.
`systemctl list-timers` shows each timer, when it last ran and when it runs next.

### cron

Before systemd timers, there was **cron**, and it's still common. Each line of a **crontab** has five time fields
and a command:

```
# minute  hour  day of month  month  day of week   command
  30      2     *             *      *             /usr/local/bin/backup.sh
  @reboot                                          /home/alex/start.sh
```

The first line runs every day at 02:30 (`*` means "every"); the second runs once each time cron starts, which means
at every boot. The fields go
minute 0–59, hour 0–23, day of month 1–31, month 1–12, and day of week 0–7, where both 0 and 7 mean Sunday.

- `crontab -l` lists your own crontab and `crontab -e` edits it. Every user can have one, and root can read anyone's
  with `sudo crontab -l -u alex`.
- `/etc/crontab` and the files in `/etc/cron.d/` are system-wide. Their lines have one more field before the
  command: the user to run it as.

### Where programs start by themselves

Services, timers, cron and shell startup files do on Linux what services, scheduled tasks and Run keys do on Windows.
Attackers use them for the same reason: whatever they plant comes back after a reboot or a new login. Defenders call
that **persistence**.

<!-- pic: persist -->

## Package managers

### Packages and where they come from

On Linux, you rarely download programs from websites. You install **packages** from your distribution's
**repositories**, online stores of packages it builds and signs, with a **package manager** that also installs what
each package needs and updates everything at once.

| Family | Package files | Tools | Used by |
|---|---|---|---|
| Debian | `.deb` | `apt`, `dpkg` | Debian, Ubuntu, Kali |
| Red Hat | `.rpm` | `dnf`, `rpm` | RHEL, Fedora |
| Alpine | `.apk` | `apk` | Alpine Linux |

```sh
sudo apt update
sudo apt upgrade
sudo apt install nmap
```

`apt update` downloads the newest lists of packages; `apt upgrade` installs newer versions of what you already have;
`apt install` adds a package. On Red Hat and Fedora the same jobs are `sudo dnf upgrade` and `sudo dnf install nmap`.

Before apt trusts a repository, it checks the digital signature on the repository's list of packages, and it refuses
repositories that aren't signed unless you force it. That's what makes "sealed boxes from known suppliers" true.
Adding someone else's repository, or installing a `.deb` file from a website, means trusting its author with root:
installing a package runs with root's powers.

### Whose file is this, and has it changed?

The package manager remembers which package put each file where. That answers two questions defenders ask all the
time:

```sh
dpkg -S /usr/bin/ls
dpkg -L coreutils
sudo dpkg --verify coreutils
```

- `dpkg -S` names the package a file came from: here, `coreutils: /usr/bin/ls`. A program in `/usr/bin` that belongs
  to no package deserves a closer look; the usual harmless exception is a link to `/etc/alternatives`, such as
  `/usr/bin/editor`. Ask with the `/usr/bin` path: `dpkg -S /bin/ls` finds nothing on current systems, because `/bin`
  is only a link.
- `dpkg -L` lists every file a package installed.
- `dpkg --verify` compares the files with the checksums recorded when they were installed. It prints nothing when all
  is well. A line like `??5??????   /usr/bin/ls` means the contents changed; `missing` means the file is gone.

On Red Hat and Fedora, `rpm -qf /usr/bin/ls` answers the first question and `rpm -V coreutils` the last one, with codes
such as `S` (size), `5` (checksum) and `T` (modification time) for what differs.

> [!WARNING]
> dpkg itself calls `--verify` an integrity check, not security verification. An attacker who is root can change the
> package database as easily as the files, so a clean result means "nothing obvious", not "safe".

Debian and Ubuntu also log every change to their packages in `/var/log/dpkg.log` and `/var/log/apt/history.log`,
which tells you what was installed, and when.

## Logs: where they live

### Two kinds of log

A Linux system keeps logs in up to two places at once:

- **The journal**, kept by systemd's `systemd-journald`. It collects messages from the kernel, from every service and
  from programs, in its own binary format, and you read it with **`journalctl`**. It's on disk in
  `/var/log/journal` when that folder exists; otherwise only in memory, in `/run/log/journal`, and gone at the next
  reboot.
- **Text files in `/var/log`**, written by a separate program, **rsyslog**, which receives a copy of the messages
  and sorts them into files. You read these with `less`, `tail` and `grep`.

Which you have depends on the distribution. Since Debian 12, rsyslog **isn't installed by default**: Debian keeps only
the journal. Red Hat Enterprise Linux runs both, with the journal passing messages on to rsyslog. On Ubuntu, rsyslog,
when it's installed, writes `auth.log` and `syslog`. Check with `ls /var/log`.

| What | Debian and Ubuntu, with rsyslog | Red Hat (RHEL) |
|---|---|---|
| Logins, SSH and other security messages | `/var/log/auth.log` | `/var/log/secure` |
| Almost everything else | `/var/log/syslog` | `/var/log/messages` |
| Scheduled jobs | (in `syslog`) | `/var/log/cron` |
| Installed packages | `/var/log/dpkg.log`, `/var/log/apt/history.log` | |

### Reading the journal

```sh
journalctl -u ssh --since today
journalctl -f
journalctl -b -p err
journalctl -k
```

- `-u` shows one unit (here, the SSH server) and `--since` limits the time: `today`, `yesterday` or a date and time
  such as `"2026-11-12 09:00"`.
- `-f` follows new messages as they arrive, like `tail -f` on a file.
- `-b` shows only this boot, and `-p err` only errors and worse.
- `-k` shows the kernel's messages.

Every user may read their own messages, but the whole system journal is for root and members of the **adm**,
**systemd-journal** and **wheel** groups. That's why you'll often type `sudo journalctl`.

<!-- pic: logline -->

> [!NOTE]
> Since OpenSSH 9.8 (July 2024), the SSH server is split in two: `sshd` only listens, and **`sshd-session`** handles
> each connection, so many login messages now carry its name instead of `sshd`. OpenSSH 10.0 (April 2025) split off
> **`sshd-auth`** as well. Searches and detection rules written for `sshd` alone can miss them, so match all three.

### Other places that remember

- **`~/.bash_history`**: the commands a user typed in bash. bash writes it when the shell exits, so a session that's
  still open isn't there yet, and anyone can empty their own history. Missing history is a clue in itself.
- **Logins**: the tools `last` and `lastlog` list past logins from older binary files. On Debian 13 they're no longer
  part of the default tools; the **wtmpdb** and **lastlog2** packages replace them. The journal has the logins either
  way.

How long logs are kept, how to collect them in one place and how to add detailed auditing comes further down the path.

## Everyday commands

### The ones you'll use every day

| Command | What it does | Example |
|---|---|---|
| `pwd` | Shows which folder you're in | `pwd` |
| `ls` | Lists a folder: `-l` with details, `-a` with hidden files | `ls -la ~` |
| `cd` | Changes folder; `cd` alone goes home | `cd /var/log` |
| `cat` | Prints a file | `cat /etc/os-release` |
| `less` | Reads a long file page by page; `q` quits | `less /etc/passwd` |
| `head`, `tail` | The first or last 10 lines; `tail -f` follows a growing file | `tail -n 50 auth.log` |
| `grep` | Lines that contain a text: `-i` any case, `-r` in a folder, `-c` count | `grep -i error syslog` |
| `find` | Files by name, owner, size, age or mode | `find /tmp -type f` |
| `file` | What a file really is, whatever its name says | `file /usr/bin/ls` |
| `wc -l` | Counts lines | `wc -l /etc/passwd` |
| `sort`, `uniq -c` | Sorts lines; counts lines that repeat | `sort names.txt` |
| `cp`, `mv`, `rm`, `mkdir` | Copy, move or rename, delete, make a folder | `cp a.txt b.txt` |
| `ps`, `kill` | List processes, send them signals | `ps -ef` |
| `ssh` | Log in to another computer | `ssh alex@203.0.113.10` |
| `man` | The manual for a command | `man grep` |

### Pipes and redirection

The real power is in joining small commands together. `|` (a **pipe**) sends one command's output into the next one;
`>` writes output into a file (replacing it) and `>>` adds to the end of a file. This line counts the failed SSH
passwords per address since midnight and shows the top five:

```sh
journalctl -u ssh --since today | grep 'Failed password' | grep -o 'from [0-9.]*' | sort | uniq -c | sort -rn | head -5
```

```
   1790 from 203.0.113.50
     61 from 198.51.100.23
     22 from 198.51.100.77
```

Read it left to right: the journal's SSH messages, only the failed passwords, only the "from" and the address, sorted
so equal lines sit together, counted, sorted by count from the highest (`-rn`), the top five. (These numbers are made
up.) With rsyslog, `grep 'Failed password' /var/log/auth.log` replaces the first two steps.

### Finding your way

- `man ls` opens the manual; `ls --help` gives a shorter summary. Both work offline.
- **Tab** completes commands and file names; press it twice to see the choices.
- The **Up** arrow brings back earlier commands; **Ctrl+C** stops the one that's running.

> [!WARNING]
> `rm` doesn't move files to a trash folder: there's no undo, and `rm -r` deletes a folder with everything in it.
> Read any command with `sudo` and `rm` twice before you press Enter. (For forensics, the twist is the other way
> round: deleting a file only removes the entry that points to its data, which often stays on the disk until it's
> overwritten. How investigators get it back comes with file systems, further down the path.)

## SSH: logging in from elsewhere

**SSH** (Secure Shell) gives you an encrypted shell on another computer. The server listens on **TCP port 22**. On
Linux, both sides are almost always **OpenSSH**: the client is `ssh`, the server is `sshd`.

```sh
ssh alex@203.0.113.10
```

### Host keys: is this the right server?

Every SSH server has its own **host key**. The first time you connect, ssh shows the key's fingerprint and asks
whether to trust it; if you say yes, it saves it in **`~/.ssh/known_hosts`**. Every later time, ssh compares. If a
server's key ever changes, ssh warns you loudly and turns off password logins for that connection, because the other
side might be someone pretending to be your server.

### Keys instead of passwords

A **key pair** is better than a password: the server only ever holds your public key, and only you hold the private
one, so nothing a server or an eavesdropper sees lets them log in as you.

```sh
ssh-keygen -t ed25519
```

This makes `~/.ssh/id_ed25519` (the private key, mode `600`) and `~/.ssh/id_ed25519.pub` (the public key). Ed25519 has
been ssh-keygen's default since OpenSSH 9.5, so `-t ed25519` only makes it explicit. You add the public key, one line,
to `~/.ssh/authorized_keys` in your account on the server. When you connect, your ssh proves it holds the private key
by signing with it, and the server checks the signature with the public key.

<!-- pic: ssh -->

Permissions matter here. ssh ignores a private key that other users can read, and the server, by default
(`StrictModes yes`), refuses keys when your home folder, `~/.ssh` (which should be `700`) or `authorized_keys` (`600`)
can be changed by others.

### The server side

The SSH server reads `/etc/ssh/sshd_config`. Three of its defaults matter most for security:

| Setting | OpenSSH default | What it means |
|---|---|---|
| `PermitRootLogin` | `prohibit-password` | root may log in with a key, never with a password |
| `PasswordAuthentication` | `yes` | Passwords are allowed, so they can be guessed |
| `PubkeyAuthentication` | `yes` | Key logins are allowed |

Distributions and cloud images may change these, so check the server in front of you: `sudo sshd -T` prints the
settings it actually uses. A server that accepts
passwords on port 22 of the internet gets password guesses all day long (ATT&CK T1110.001): MITRE suggests watching for
repeated failed logins followed by a success from the same address. Turning passwords off, limiting who may log in and
the rest of SSH hardening come further down the path.

## How it shows up on the job

Here's a made-up check of a web server after an alert for "many failed SSH logins". Every line is one command and its
answer:

```
Made-up triage · web-01 (Debian 13) · 2026-11-12

$ sudo journalctl -u ssh --since today | grep -c 'Failed password'
1873
$ sudo journalctl -u ssh --since today | grep Accepted
Nov 12 09:41:09 web-01 sshd-session[2211]: Accepted password for deploy from 203.0.113.50 port 51562 ssh2
$ ps -u deploy -o user,pid,ppid,args
USER       PID  PPID COMMAND
deploy    2290     1 [kworker/0:2]
$ sudo ls -l /proc/2290/exe
lrwxrwxrwx 1 deploy deploy 0 Nov 12 10:02 /proc/2290/exe -> /dev/shm/.k (deleted)
$ sudo crontab -l -u deploy
@reboot /home/deploy/.cache/.k
$ sudo ls -l /home/deploy/.ssh/authorized_keys
-rw------- 1 deploy deploy 189 Nov 12 09:44 /home/deploy/.ssh/authorized_keys
```

Read it from the top:

1. **1,873 failed passwords today:** someone is guessing (ATT&CK T1110.001). On its own, that's background noise on
   any server with SSH open to the internet.
2. **One `Accepted password` for deploy**, from the address that did most of the guessing. This is the line that turns
   noise into an incident: a guess worked.
3. **A `[kworker/0:2]` that belongs to deploy, with parent 1:** real kernel threads belong to root and are started by
   kthreadd, PID 2. This is a program wearing a kernel thread's name (ATT&CK T1036.004).
4. **Its file is `/dev/shm/.k (deleted)`:** it ran from a folder in memory, then deleted itself. It's still in
   `/proc/2290/exe`, so copy it now, before anything stops the process.
5. **`@reboot` in deploy's crontab:** a second copy, hidden in `.cache`, starts at every boot (ATT&CK T1053.003).
6. **`authorized_keys` changed at 09:44,** three minutes after the login: very likely a key of the attacker's
   (ATT&CK T1098.004). Changing deploy's password alone wouldn't lock them out.

On a real case, you'd isolate the server, collect the program from `/proc`, the journal, the crontab and the key file,
and only then clean up. The next questions are what else deploy could reach (`sudo -l -U deploy`), and why an account
with a guessable password could log in with it from the internet at all.

- **Security operations (SOC):** you read alerts like this one, run `journalctl` and `grep` on the server, and decide
  in minutes whether a login was a guess that worked.
- **Incident response and forensics:** you collect processes, files from `/proc`, logs and crontabs before anything is
  rebooted, and rebuild the timeline from the journal, shell history and file times. Linux forensics goes deeper further
  down the path.
- **Penetration testing and red teaming:** with permission, your first commands on a Linux machine are `id`, `sudo -l`
  and the hunt for setuid files and writable scripts that root runs.
- **Detection engineering and threat hunting:** you write rules for new setuid files, unexpected units and timers,
  crontab changes, programs running from `/tmp` or `/dev/shm`, and logins after a burst of failures.
- **System and cloud security:** you set permissions, keep the sudo group small, turn SSH passwords off and keep
  packages updated on the servers you look after, in the office or in the cloud.
- **Malware analysis:** you watch which files, units, cron lines and keys a Linux sample creates, because that's what a
  defender will search for.

## Try it yourself

Twenty minutes in a Linux terminal. Every command here only reads, except `ssh-keygen` at the end, which makes two
files in your home folder that you delete again.

### Get a Linux terminal

<!-- for: windows -->

The quickest way is WSL 2, which runs a real Ubuntu inside Windows, with systemd switched on by default for current
Ubuntu versions. Once it's set up, open **Ubuntu** from the Start menu.
<!-- guide: set-up-wsl2-ubuntu -->

<!-- for: macos -->

macOS's Terminal runs many of the same commands (`ls`, `cd`, `grep`, `ssh`), but macOS isn't Linux: it has no systemd,
no apt and no `/proc`. For this page, use a Linux virtual machine, such as Kali in UTM on a Mac with Apple silicon.
<!-- guide: set-up-kali-utm -->

<!-- for: linux -->

Open your Terminal app. If you'd rather practice where nothing can break, a Kali virtual machine works the same way;
the [lab's Get started](/en/lab/start/) compares the options.
<!-- guide: set-up-kali-virtualbox, set-up-kali-vmware -->

<!-- /for -->

### Who you are and what you can touch

```sh
pwd
ls -la ~
id
ls -l /etc/passwd /etc/shadow
ls -ld /tmp
sudo -l
```

Which hidden files are in your home folder? Which groups does `id` list, and is sudo one of them? Compare the modes of
`/etc/passwd` and `/etc/shadow`: who may read each? Find the `t` at the end of `/tmp`'s mode. Then read what `sudo -l`
allows you to run.

### Programs that run as root

```sh
find /usr/bin -perm -4000 -type f
ls -l /usr/bin/passwd
```

How many setuid programs are there, and do you recognize the names? Why does `passwd` need the `s`?

### What's running and what starts by itself

```sh
ps -ef --forest | less
ls -l /proc/$$/exe
systemctl list-units --type=service --state=running
systemctl list-timers
crontab -l
```

In the tree, find your own shell and walk up its parents: what started it? Scroll to the top to see kthreadd and its
kernel threads in brackets. `ls -l /proc/$$/exe` shows your shell's program file. Which services run, and which timer
runs next? `crontab -l` probably tells you that you have no crontab: that's fine.

### Packages and logs

```sh
dpkg -S /usr/bin/ls
sudo dpkg --verify coreutils
ls /var/log
sudo journalctl -b -p err
journalctl -u ssh -u sshd --since today
```

Which package does `ls` come from, and does `--verify` print anything? Do you have `auth.log` and `syslog`, or only the
`journal` folder? Which errors did this boot log? If no SSH server is installed, the last command shows no entries. On
Fedora, use `rpm -qf /usr/bin/ls` instead of `dpkg -S`.

### Make an SSH key

```sh
ssh -V
ssh-keygen -t ed25519 -f ~/practice_key -C practice
ls -l ~/practice_key ~/practice_key.pub
cat ~/practice_key.pub
rm ~/practice_key ~/practice_key.pub
```

Press Enter twice when ssh-keygen asks for a passphrase (this key is only for practice). Compare the two modes: why
is the private key `-rw-------` and the public one `-rw-r--r--`? The `.pub` line is what you'd add to
`authorized_keys` on a server. Then the last line deletes both files.

## Check yourself

Try to answer before you open each one.

<!-- pic: quiz -->

## Learn more

- **[OverTheWire: Bandit](https://overthewire.org/wargames/bandit/)**: a free game made for absolute beginners. You
  log in over SSH and use `ls`, `cat`, `find`, `grep` and pipes to find the password for each next level.
- **[Linux Foundation: Introduction to Linux (LFS101)](https://training.linuxfoundation.org/training/introduction-to-linux/)**:
  a free, self-paced course from the Linux Foundation, the organization that hosts the Linux kernel's development.
- **[TryHackMe's free learning path](https://tryhackme.com/resources/blog/free_path)**: it includes Linux
  Fundamentals Part 1, a free hands-on room that walks you through your first commands on a real Linux machine.
- **[The Linux man-pages project](https://man7.org/linux/man-pages/)**: the manual pages online, searchable and kept
  up to date. Most links on this page point there; `man` shows the same pages offline.
