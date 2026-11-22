---
# Roadmap topic. Its title and summary show on every job page that lists "forensic-fundamentals" in learn.yml.
# The text under the dashes is the topic's own page: lvlulcuma.com/en/roadmap/topics/forensic-fundamentals/
# How these pages are written: docs/claude/roadmap-topic.md
title: "How digital forensics works"
summary: "The steps every case follows (collection, examination, analysis, reporting, as in NIST SP 800-86), working only on verified copies and never on the original, hashing everything, taking notes as you go, documenting so another examiner gets the same result, and the difference between what an artifact proves and what it only suggests."
date: 2026-11-22
sources:
  - name: "NIST SP 800-86: Guide to Integrating Forensic Techniques into Incident Response, August 2006"
    url: "https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-86.pdf"
  - name: "RFC 3227 (BCP 55): Guidelines for Evidence Collection and Archiving, February 2002"
    url: "https://www.rfc-editor.org/rfc/rfc3227.html"
  - name: "ACPO Good Practice Guide for Digital Evidence, version 5, March 2012"
    url: "https://training-on-eppo.era.int/EPPO/kiosk/pdf/ACPO_Good_Practice_Guide.pdf"
  - name: "ISO/IEC 27037:2012: Guidelines for identification, collection, acquisition and preservation of digital evidence"
    url: "https://www.iso.org/standard/44381.html"
  - name: "ISO/IEC 27042:2015: Guidelines for the analysis and interpretation of digital evidence"
    url: "https://www.iso.org/standard/44406.html"
  - name: "NIST IR 8354: Digital Investigation Techniques: A NIST Scientific Foundation Review, November 2022"
    url: "https://nvlpubs.nist.gov/nistpubs/ir/2022/NIST.IR.8354.pdf"
  - name: "NIST CSRC Glossary: chain of custody"
    url: "https://csrc.nist.gov/glossary/term/chain_of_custody"
  - name: "NIST FIPS 180-4: Secure Hash Standard (SHS), August 2015"
    url: "https://csrc.nist.gov/files/pubs/fips/180-4/final/docs/fips180-4.pdf"
  - name: "NIST: Policy on Hash Functions"
    url: "https://csrc.nist.gov/Projects/hash-functions/NIST-Policy-on-Hash-Functions"
  - name: "NIST: Transitioning Away from SHA-1 for All Applications, December 15, 2022"
    url: "https://csrc.nist.gov/news/2022/nist-transitioning-away-from-sha-1-for-all-apps"
  - name: "RFC 6151: Updated Security Considerations for the MD5 Message-Digest and the HMAC-MD5 Algorithms, March 2011"
    url: "https://www.rfc-editor.org/rfc/rfc6151"
  - name: "NIST: About the National Software Reference Library (NSRL)"
    url: "https://www.nist.gov/itl/csd/secure-systems-and-applications/national-software-reference-library-nsrl/about-nsrl/nsrl"
  - name: "NSRL Reference Data Set (RDS), NIST Special Database 28"
    url: "https://data.commerce.gov/node/317401"
  - name: "NIST Computer Forensics Tool Testing (CFTT): Hardware Write Block"
    url: "https://www.nist.gov/itl/ssd/software-quality-group/cftt-technical-information/hardware-write-block"
  - name: "NIST: Computer Forensic Reference Data Sets (CFReDS)"
    url: "https://www.nist.gov/itl/ssd/software-quality-group/computer-forensics-tool-testing-program-cftt/cfreds"
  - name: "Eoghan Casey: Error, Uncertainty, and Loss in Digital Evidence, International Journal of Digital Evidence, 2002"
    url: "https://serval.unil.ch/resource/serval:BIB_DEA4FEA262D8.P001/REF"
  - name: "Microsoft Learn: File Times"
    url: "https://learn.microsoft.com/en-us/windows/win32/sysinfo/file-times"
  - name: "Microsoft Learn: Get-FileHash"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powershell.utility/get-filehash"
  - name: "Microsoft Learn: FileSystemInfo.LastWriteTimeUtc"
    url: "https://learn.microsoft.com/dotnet/api/system.io.filesysteminfo.lastwritetimeutc"
  - name: "GNU coreutils: sha256sum manual page"
    url: "https://man7.org/linux/man-pages/man1/sha256sum.1.html"
  - name: "GNU coreutils: cp invocation"
    url: "https://www.gnu.org/software/coreutils/manual/html_node/cp-invocation.html"
  - name: "GNU coreutils: stat manual page"
    url: "https://www.man7.org/linux/man-pages/man1/stat.1.html"
  - name: "Perl documentation: shasum"
    url: "https://perldoc.perl.org/shasum"
  - name: "macOS manual page: stat(1)"
    url: "https://keith.github.io/xcode-man-pages/stat.1.html"
  - name: "Autopsy: open source digital forensics platform"
    url: "https://www.autopsy.com/"
  - name: "Digital Corpora: Scenarios"
    url: "https://digitalcorpora.org/corpora/scenarios/"
visuals:
  # The four phases of NIST SP 800-86, with what happens in each.
  phases:
    kind: route
    stages:
      - where: "1. Collection"
        steps: ["Find the sources", "Label and record them", "Acquire the data without changing it"]
      - where: "2. Examination"
        steps: ["Process the copy with tools and by hand", "Pull out the data that matters"]
      - where: "3. Analysis"
        steps: ["Put the pieces together", "Answer the questions of the case"]
      - where: "4. Reporting"
        steps: ["Say what you found and how", "Say what it does and doesn't show"]
    caption: "Collect first, analyze later. Notes and the chain of custody run through all four steps, not just the last one."
  # The original, the evidence image and the working copy.
  copies:
    kind: cards
    layout: rows
    cards:
      - title: "The original"
        text: "The laptop, phone or disk as it was found. Sealed, labeled and stored. Touched as little as possible, and every touch recorded."
        tags: ["sealed bag", "chain of custody form"]
      - title: "The evidence image"
        text: "A bit-for-bit copy, made through a write blocker. Its hash must match the original's. Stored as the master and never worked on."
        tags: ["acquisition hash", "verification hash", "read-only"]
      - title: "The working copy"
        text: "A copy of the image, checked against the same hash. This is what you open in your tools. If anything goes wrong, make a new one from the image."
        tags: ["your tools touch this one", "can be thrown away"]
    caption: "Two copies, not one: analysis changes things (access times, for a start), so even the image isn't the copy you work on."
  # Common hash algorithms and where they stand.
  hashes:
    kind: window
    title: "Hash algorithms you'll meet"
    head: ["Algorithm", "Size, and can you rely on it?"]
    rows:
      - ["MD5", "128 bits, 32 hex characters. Collisions can be made on purpose in about a minute: don't rely on it alone"]
      - ["SHA-1", "160 bits, 40 hex characters. Weak against collisions; NIST retires it by December 31, 2030"]
      - ["SHA-256", "256 bits, 64 hex characters. The current choice, and PowerShell's default"]
      - ["SHA-512", "512 bits, 128 hex characters. Also current; slower to type into a report"]
    mark: 3
    caption: "Older reports and tools still show MD5 or SHA-1, often next to SHA-256. When you choose, choose SHA-256."
  # A made-up acquisition record that verifies an image.
  verify:
    kind: window
    title: "Acquisition record (made up)"
    lead: ["Case 2026-117", "Laptop drive, item A1093-01"]
    head: ["Field", "Value"]
    rows:
      - ["Source", "512 GB drive, through write blocker WB-02"]
      - ["Image", "A1093-01.raw, saved to lab storage"]
      - ["Algorithm", "SHA-256"]
      - ["Acquisition hash", "5e77f720…71e273ba (computed while reading the drive)"]
      - ["Verification hash", "5e77f720…71e273ba (computed again from the finished image)"]
      - ["Result", "Match: the image is identical to the drive"]
    mark: 6
    caption: "Write the full hash in the record; the shortened form here is only for the picture. If the two don't match, the image isn't used until you know why."
  # A made-up chain of custody form.
  custody:
    kind: window
    title: "Chain of custody: item A1093 (made up)"
    head: ["When (UTC)", "Who handed it to whom, and why"]
    rows:
      - ["2026-11-02 18:40", "Seized at the office by Officer K. Bag A1093 sealed"]
      - ["2026-11-03 08:55", "K. to evidence store, clerk M. Seal intact"]
      - ["2026-11-03 09:12", "Store to examiner J. Doe, for imaging. Seal intact"]
      - ["2026-11-03 12:05", "J. Doe back to store. Resealed in bag A1094"]
    mark: 4
    caption: "A new seal gets a new number, and the form says why it changed. A gap in this list is a question a defense lawyer will ask."
  # One finding at three levels: what it shows, suggests and doesn't show.
  proves:
    kind: cards
    layout: rows
    cards:
      - title: "invoice_final.pdf is in C:\\Users\\alex\\Downloads"
        text: "Shows: a file with this content was in that folder of the account alex. Suggests: it was downloaded while someone used that account. Doesn't show: who was at the keyboard."
        tags: ["source level", "check: browser history, sign-ins"]
      - title: "Last written 2026-10-28 16:02:11 UTC"
        text: "Shows: the file system recorded that time. Suggests: the file was saved then. Doesn't show: that the clock was right, or that no program changed the time."
        tags: ["check: clock drift", "check: other timestamps"]
      - title: "The file's hash is in the NSRL list"
        text: "Shows: it's identical to a file in known, published software. Suggests: it came with installed software, so it can be set aside. Doesn't show: that it's harmless."
        tags: ["the list holds hacking tools too"]
    caption: "Each step from \"shows\" to \"suggests\" is an inference. Write it as one, and look for what would prove it or rule it out."
  # Questions to check yourself.
  quiz:
    kind: questions
    items:
      - q: "Name the four phases of NIST SP 800-86 in order, and one thing that happens in each."
        a: "Collection: find, label and acquire the data without changing it. Examination: process the copy to pull out what matters. Analysis: put it together to answer the case's questions. Reporting: say what was found, how, and what it does and doesn't show."
      - q: "You've made an image of a drive and its hash matches the drive. Why still make a second copy to work on?"
        a: "Analysis changes things: opening files can update access times, and a tool can crash or write by mistake. The verified image stays untouched as the master, so you can always make a fresh working copy and prove it matches."
      - q: "The acquisition hash and the verification hash of an image don't match. What do you do?"
        a: "Don't use the image. Record the mismatch in your notes, find the cause (a read error, a failing drive, the wrong file), and image again. On an SSD, the drive itself may have removed trimmed data between two reads, so explain that in the record if it's the cause."
      - q: "A colleague says MD5 is broken, so hashes from an old case are worthless. Is that right?"
        a: "Not quite. MD5's weakness is that someone can make two different inputs with the same hash on purpose. It still shows that a copy wasn't changed by accident. But a matched MD5 is weaker evidence than SHA-256 against a claim of deliberate tampering, so new work uses SHA-256."
      - q: "Which details belong in a good line of contemporaneous notes?"
        a: "The time, in a stated time zone (UTC is easiest), what you did, with which tool and version, what it showed (a hash, a count, a path), and anything that surprised you. Write it at the time, not from memory later."
      - q: "What does it mean that another examiner should get the same result, and what makes that possible?"
        a: "Someone else, starting from the same image, should be able to repeat your steps and reach the same findings. That needs the image's hash, the tools and versions, the settings, the exact steps and the time zone you used, all in your notes."
      - q: "A file's last-write time says 03:14 on a Sunday. Can you write that the suspect saved it at 03:14 on Sunday?"
        a: "No. The timestamp shows what the file system recorded. The computer's clock could have been wrong or set on purpose, a program could have changed the time, and the timestamp doesn't say who used the computer. Check the clock against a reference and look for other traces before you write anything about a person."
      - q: "You find a hacking tool on a laptop. List two other explanations you should check before reporting that the owner used it."
        a: "It may never have been run (it was downloaded or unpacked only), it may belong to another user or come from malware, it may be part of the owner's legitimate security work, or it may have been placed there. Look for traces of it running and of who ran it."
---

## The short version

Think of a blood test at a hospital lab.

- A nurse takes the sample and labels the tube with your name and the time: that's **collection**.
- The lab tests a portion and keeps the rest, so the test can be run again: **working on a copy, never on the
  original**.
- A seal on the tube shows nobody opened it on the way: in digital forensics, that seal is a **hash**.
- Every person the tube passes through signs for it: the **chain of custody**.
- The lab writes down each step and which machine it used, so another lab could repeat it and get the same number:
  **notes and reproducibility**.
- The result says what's in the sample. It doesn't say how it got there. That's the line between what evidence
  **proves** and what it only **suggests**.

<mark>Digital forensics is careful, checkable work. You collect data without changing it, work only on verified copies,
prove with hashes that nothing changed, write down every step as you take it, and report only what the evidence
actually shows.</mark> These habits are what make the difference between a finding that holds up when someone checks and a
guess with screenshots.

By the end of this page you'll be able to:

- name the four phases every case goes through, and what happens in each;
- explain why examiners never work on the original, and what to do when touching it can't be avoided;
- hash a file, compare two hashes and choose the right algorithm;
- keep notes and a chain of custody that will still make sense years later;
- say what another examiner needs from you to repeat your work and get the same result;
- separate what an artifact shows from what it only suggests, and word a finding to match.

## Words you'll need

- **Digital evidence:** information stored or sent in digital form that may matter to a case: files, logs, messages,
  memory, metadata.
- **The original:** the device or storage medium as it was found.
- **Image:** a bit-for-bit copy of a disk or other storage, every byte included, deleted data and empty space too.
- **Hash:** a short fingerprint calculated from data. Change one bit of the data and the hash changes completely.
- **Artifact:** a trace a computer leaves during normal use, such as a timestamp, a log line or a list of recently
  opened files. NIST describes artifacts as created in the routine operation of a device.
- **Chain of custody:** the record of who had the evidence, when, and why it changed hands.
- **Write blocker:** a hardware device or a piece of software that lets a computer read a drive but stops it from
  writing to it.
- **UTC:** Coordinated Universal Time, one clock for the whole world. Notes in UTC don't depend on where you or the
  computer were.

> [!NOTE]
> Digital forensics serves police and courts, but also companies investigating a break-in or an employee. The steps
> are the same; how much proof a decision needs is not. Do every case as if it might end up in court.

## The four phases of a case

In 2006, NIST published [SP 800-86](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-86.pdf),
a guide to forensics in incident response. It splits every case into four phases. It writes from an IT point of view,
not a law enforcement one, but the phases fit both.

<!-- pic: phases -->

### 1. Collection

Identifying, labeling, recording and acquiring data from the places it might be. You work out where the evidence is
(a laptop, a phone, a server's logs, a cloud account), record what you found and in what state, and copy the data
without changing it. Some data disappears when a computer is switched off, so collection follows an order: the most
volatile first. RFC 3227, a 2002 guide to collecting evidence, starts its list with the processor's registers and
cache, then memory and running processes, then temporary file systems, then the disk, and ends with archive media.
How to collect in that order comes in its own topic, further down the path.

### 2. Examination

Processing the collected data with a mix of automated and manual methods to bring out what's relevant. A forensic
tool reads the image, recovers deleted files, lists every file with its timestamps, and filters out the files every
copy of Windows has. You check what the tool found and look where it doesn't.

### 3. Analysis

Analyzing the results of the examination to answer the questions of the case, using methods and techniques that are
legally justifiable. Who used this account? When was the file copied? Where did the money go? Analysis is where facts
from different places are put side by side, often on a timeline.

### 4. Reporting

Reporting the results of the analysis, which may include describing the actions you took. SP 800-86 adds a rule
worth remembering: when an event has two or more plausible explanations, each one deserves due consideration in the
report.

### Other names for the same idea

You'll meet other ways to split a case. They cover the same ground:

| Source | Its phases |
|---|---|
| NIST SP 800-86 (2006) | Collection, examination, analysis, reporting |
| ACPO Good Practice Guide for Digital Evidence, UK police (version 5, 2012) | Plan, capture, analyse, present |
| ISO/IEC 27037:2012 | Identification, collection, acquisition, preservation (how evidence is handled) |
| ISO/IEC 27042:2015 | Analysis and interpretation (what you do with it afterwards) |

> [!TIP]
> RFC 3227 puts the order in one line: when you have to choose between collection and analysis, collect first and
> analyze later. Data you didn't collect is gone; analysis can wait.

## Never work on the original

Almost anything you do to a device can change something on it. Opening a file can update its last-access time, and
RFC 3227 warns that ordinary tools such as `tar` or `xcopy` change the access time of every file they touch. If the
original changes, nobody can be sure what it held before you touched it.

So the first principle of the UK police guide (ACPO) is that no action by investigators should change data that may
later be relied on in court. RFC 3227 says the same in practice: make a bit-level copy of the media, and if you want
to do analysis, make a copy of that copy, because analysis will almost certainly change file access times. NIST
SP 800-86 lists examining only the copy as part of keeping the chain of custody.

<!-- pic: copies -->

### Write blockers

To copy a drive without writing to it, examiners connect it through a **write blocker**: a device between the drive
and the computer that passes read commands and blocks anything that would change the drive. Some are software
instead of hardware. NIST's Computer Forensics Tool Testing program (CFTT) publishes requirements for both and tests
products against them, because a write blocker that lets one write command through defeats its purpose. How to make
an image, step by step, comes with forensic imaging, further down the path.

### When you have to touch the original

Sometimes there's no other way. A running computer holds data only in memory: open chats, decryption keys, network
connections. To capture memory, you have to work on the live machine, and that changes it. The ACPO guide allows this
when it's necessary, on two conditions: the person doing it must be competent, and must be able to explain, in court,
what they did and why. Its advice for live systems is to capture memory first, since running other tools first can
overwrite parts of it, and to save the output somewhere other than the original drive.

> [!WARNING]
> "I had to change it" is only acceptable when the notes say exactly what you changed, when, with which tool, and why
> it was worth it. An undocumented change to the original is the kind of mistake a case doesn't recover from.

## Hash everything

A **hash** is a fixed-length fingerprint calculated from data of any size. The Secure Hash Standard, NIST FIPS 180-4,
describes the property that matters: change the data in any way, and with very high probability the hash changes
too. So if the hash of your copy equals the hash of the original, the copy is identical, bit for bit. The idea is the
same whether you hash one small file or a whole 2 TB drive.

Hashes are written as hexadecimal text, so you can compare them by eye, or better, let a program compare them.

<!-- pic: hashes -->

### MD5 and SHA-1: still around, no longer enough

A **collision** is two different inputs with the same hash. For MD5, collisions can be made on purpose: RFC 6151
(2011) reports attacks that find one in about a minute on a standard notebook, and says MD5 is no longer acceptable
where collision resistance is required. SHA-1 is weaker than it was designed to be too, and NIST plans to stop using
it in all applications by December 31, 2030.

A collision has to be built on purpose; it doesn't make an honest copy match a changed one by accident. That's why
MD5 and SHA-1 still show up in older reports and tools, often next to SHA-256. For your own work, use SHA-256: it's
current, widely supported, and PowerShell's `Get-FileHash` uses it by default.

### Where hashes are used

- **To prove a copy is identical.** The imaging tool calculates an **acquisition hash** while it reads the drive.
  Afterwards, you calculate a **verification hash** from the finished image. They must match. NIST SP 800-86
  describes exactly this: calculate the digest of the original and the copy, then compare.
- **To prove nothing changed since.** Hash the image again before you testify, months later. Same hash, same data.
- **To find or rule out files quickly.** NIST's National Software Reference Library (NSRL) publishes hashes of files
  from known software, updated every three months. Its main use in investigations is to set aside the thousands of
  operating system and program files nobody needs to look at.
- **To say exactly which file you mean.** A report that names a file by its hash leaves no room for doubt about which
  file it was.

<!-- pic: verify -->

> [!NOTE]
> A hash covers the content only, not the file's name or its timestamps. Rename a file and its hash stays the same.
> Copy it and the copy has the same hash but different timestamps. You'll see that for yourself below.

> [!ASIDE] When two honest hashes disagree
> NIST's 2022 review of digital forensics gives a case where re-imaging an SSD doesn't give the same hash: the drive's
> own firmware can remove data it was told is no longer needed (trimmed blocks) between two reads. Nobody tampered
> with anything, but the record has to explain it.

To check a download's hash step by step, the same skill on a small scale:
<!-- guide: check-hash -->

## Take notes as you go

Notes written at the time of the work, **contemporaneous notes**, are what lets you answer questions about a case
years later. RFC 3227 lists what they need: dates and times, and for each time, whether it's UTC or local; an
automatic transcript of commands where possible, saved somewhere that isn't part of the evidence; and notes and
printouts signed and dated. It also says to record the difference between the computer's clock and the real time,
because every timestamp from that computer depends on it.

The ACPO guide asks for full records of all actions taken, and notes that those records are disclosed to the
defense. Write every note as if the other side will read it, because they may.

A good line of notes answers five questions: when (with time zone), what you did, with which tool and version, what
it showed, and anything unexpected. Keep observations apart from interpretations: "the file was in Downloads" is an
observation; "the user downloaded it" is an interpretation, and belongs in your analysis with its reasons.

### The chain of custody

NIST defines the chain of custody as a process that tracks evidence through collection, safeguarding and analysis by
documenting each person who handled it, the date and time it was collected or transferred, and the purpose of each
transfer. RFC 3227 adds where it was found and how it was stored. The form travels with the evidence, and every
handover adds a line.

<!-- pic: custody -->

A broken chain doesn't always make evidence useless, but it hands the other side a question: what happened to it
during the gap? The easiest way to win that argument is never to have it.

## Document so someone else gets the same result

The third ACPO principle says an audit trail of all processes applied to digital evidence must be kept, and that an
independent third party should be able to examine those processes and achieve the same result. NIST SP 800-86 says
the same: the record of each step lets other analysts repeat the process later. ISO/IEC 27042, the standard on
analysis and interpretation, is built around the same ideas: continuity, validity, repeatability and
reproducibility.

In plain words: **repeatable** means you get the same result when you do it again; **reproducible** means someone
else, with their own setup, gets it too. To make that possible, your notes need:

- the hash of the image you worked on, so they start from the same data;
- every tool, with its exact version and the settings you changed;
- the exact steps, or the commands themselves;
- the time zone you used to show times;
- what you looked for and didn't find, not only what you found.

Tools make mistakes too. NIST's 2022 review of the field found that digital evidence examination rests on a firm
foundation in computer science. It also reported that most of the more than 250 tools tested so far do what they're
meant to with only minor anomalies, and that vendor documentation can be incomplete, out of date or wrong. Errors in
digital work tend to be systematic rather than random: a tool that misreads a format misreads it every time. So
examiners check tools against data whose contents are known, such as NIST's CFReDS reference images, and confirm an
important finding with a second tool or by reading the raw data.

## What an artifact proves, and what it only suggests

You never observe an event itself. You observe traces it left: a file, a log line, a timestamp. Getting from the trace
back to the event is an inference, and inferences can be wrong.

NIST's 2022 review describes findings at three levels. **Source**: this data came from this device or account.
**Activity**: this action happened, such as a file being opened or a message being sent. **Offense**: a person did it,
on purpose. The first two are your job. The third, the review notes, is for the court to decide.

<!-- pic: proves -->

Timestamps deserve extra care:

- **The clock can be wrong.** A time is only as good as the clock that wrote it, and NIST notes that a user can set the
  clock to mislead an investigator. Compare the computer's clock with a reference, and note the difference.
- **The time zone can be unclear.** "01:35" means little without one. On Windows, NTFS stores times in UTC, while the
  older FAT file system stores local time, so the same moment can look different on two drives.
- **The resolution varies.** On FAT, write times are kept to 2 seconds and access times only to the day. NTFS
  delays updating the last-access time by up to an hour.
- **Times can be changed.** Windows lets programs set a file's creation, access and write times without touching its
  content. A timestamp shows what the file system recorded, not necessarily when something happened.

### Words that match the evidence

Eoghan Casey wrote in 2002 that all digital evidence carries some uncertainty, and that an expert should be able to
describe how much. In practice, that shows up in the words you choose:

| What you can say | When |
|---|---|
| "The evidence shows…" | The data itself says it, and you checked it |
| "This is consistent with…" | It fits, but other explanations remain |
| "I found no evidence of…" | You looked, said where, and found nothing (which isn't the same as "it didn't happen") |
| "I could not determine…" | The data doesn't answer the question |

Before you write a conclusion, list the other explanations and look for what would rule each one in or out. NIST
SP 800-86 asks for exactly this: attempt to prove or disprove each explanation that's proposed. How to write all this
up comes with the forensic report, further down the path.

## How it shows up on the job

Here are an examiner's made-up notes from the first day of a case. Every line uses an idea from this page:

```
Made-up case notes · Case 2026-117 · Examiner J. Doe · all times UTC

09:12  Item A1093 (laptop EX-4471) received. Seal intact. Custody form line 3
09:20  Photographed bag and laptop. Laptop powered off; left off
09:41  Drive removed. Connected through hardware write blocker WB-02
09:44  Imaging started to lab storage, raw format. Tool and version in lab log
11:58  Imaging done. Acquisition SHA-256 5e77f720…71e273ba
11:59  Verification SHA-256 5e77f720…71e273ba. Match
12:05  Working copy made, hash matches. Drive resealed in bag A1094, back to store
14:30  C:\Users\alex\Downloads\invoice_final.pdf: last write 2026-10-28 16:02:11 UTC
14:35  Seizure record: laptop clock 3 min 10 s ahead of reference time
```

Read it from the top:

1. **09:12 and 12:05:** the chain of custody. The seal was intact when it arrived, the new seal has a new number, and
   the form says so.
2. **09:20:** the laptop was off and stayed off. Switching it on would have changed the disk.
3. **09:41 to 11:59:** collection without change. A write blocker, then two hashes that match.
4. **12:05:** a working copy, so the image stays untouched.
5. **14:30:** an observation, not a conclusion. It says where the file is and what the file system recorded, nothing
   about who.
6. **14:35:** the clock. If the clock ran 3 min 10 s fast, 16:02:11 on the laptop is about 15:59:01 in real time. Any
   timeline that compares this laptop with an email server needs that correction.

- **Digital forensics analysts** follow these steps on every device, every day, and defend them in reports and in
  court.
- **Incident responders** collect evidence in the middle of an attack, often from running systems, and have to record
  what their response changed.
- **Cybercrime investigators** rely on the chain of custody and on wording findings carefully, since their cases end
  in court.
- **eDiscovery and legal teams** hash and track millions of files so both sides can be sure they're looking at the
  same documents.
- **SOC analysts** are often first on the scene. Knowing what not to touch, and noting what they did, protects the
  investigation that follows.

## Try it yourself

About fifteen minutes. You'll play examiner with a tiny "evidence" file: hash it, copy it, check the copy, and see what
a hash proves and what it doesn't. Nothing changes on your computer except two small files you delete at the end.

<!-- for: windows -->

Open PowerShell and run these one at a time:

```powershell
Set-Content evidence.txt "Meeting moved to 15:00"
(Get-Date).ToUniversalTime()
Get-FileHash evidence.txt
Start-Sleep -Seconds 5
Copy-Item evidence.txt copy.txt
Get-FileHash copy.txt
Get-Item evidence.txt, copy.txt | Format-List Name, CreationTimeUtc, LastWriteTimeUtc
Remove-Item evidence.txt, copy.txt
```

`Get-FileHash` uses SHA-256 unless you ask for another algorithm. The `Utc` properties show the times in UTC, as you'd
record them in notes.

<!-- for: macos -->

Open Terminal and run these one at a time:

```sh
echo "Meeting moved to 15:00" > evidence.txt
date -u
shasum -a 256 evidence.txt
sleep 5
cp evidence.txt copy.txt
shasum -a 256 copy.txt
stat -x evidence.txt copy.txt
rm evidence.txt copy.txt
```

`shasum` uses SHA-1 unless you ask for another algorithm, so `-a 256` matters. `stat -x` shows each file's times
(in local time) under **Access**, **Modify** and **Change**.

<!-- for: linux -->

Open a terminal and run these one at a time:

```sh
echo "Meeting moved to 15:00" > evidence.txt
date -u
sha256sum evidence.txt
sleep 5
cp evidence.txt copy.txt
sha256sum copy.txt
stat evidence.txt copy.txt
rm evidence.txt copy.txt
```

`stat` shows each file's times under **Access**, **Modify**, **Change** and, on file systems that record it,
**Birth**.

<!-- /for -->

What to look for:

1. **The two hashes are identical.** On macOS and Linux, both lines read
   `5e77f720749d73090ce319bda7bb232565c42842b8d9bae02baf071e71e273ba`. On Windows the hash is different, because
   PowerShell saves the line a little differently, but the original and the copy still match each other.
2. **The times are not identical.** At least one of the copy's times is the moment you made the copy, five seconds
   after the original. On Linux, `cp` gives the copy a new modification time unless you add `-p`.
3. **Write a line of notes** for what you just did, the way the case notes above do: the UTC time from step 2, the
   action, the tool and the hash.

Then answer: if this copy were all you had, what could you say about when the original was written? And why do
examiners image the whole disk rather than copy the files they need?

## Check yourself

<!-- pic: quiz -->

## Learn more

- [NIST SP 800-86](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-86.pdf): the four phases in
  full, with examples for files, operating systems, network traffic and applications. Free, and still the standard
  reference.
- [ACPO Good Practice Guide for Digital Evidence](https://training-on-eppo.era.int/EPPO/kiosk/pdf/ACPO_Good_Practice_Guide.pdf):
  the four principles on one page, then how UK police plan, capture, analyze and present digital evidence.
- [NIST CFReDS](https://www.nist.gov/itl/ssd/software-quality-group/computer-forensics-tool-testing-program-cftt/cfreds):
  documented practice images of simulated evidence, with descriptions of what's in them, so you can check your work.
- [Digital Corpora scenarios](https://digitalcorpora.org/corpora/scenarios/): complete practice cases, such as a
  laptop from which company documents leaked, built for teaching.
- [Autopsy](https://www.autopsy.com/): a free, open source forensic suite to open your first disk image with.
