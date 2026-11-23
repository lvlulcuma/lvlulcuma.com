---
# An incident breakdown → lvlulcuma.com/en/news/incidents/java4shell-openjdk-flaw/
title: "Java4Shell: a 62-byte slip in Java's Base64 shortcut, and why Jira, Jenkins and Keycloak need new Java"
dek: "On 17 November 2026, Oracle and OpenJDK fixed CVE-2026-114938, a memory bug in the fast Base64 decoder that Java 17 and newer use on modern Intel and AMD chips; its finder, Calif, says it turned the bug into takeovers without a password in six popular apps, though no attacks have been confirmed."
type: vulnerability
status: unfolding       # unfolding | confirmed | report (the victim or investigators published a full report)
date: 2026-11-17        # when it became public
published: 2026-11-23   # when this breakdown was published
who: "Anyone running Java 17.0.6 or newer (also 21, 25 and 27) on x86-64 Intel or AMD chips with AVX-512 VBMI, in apps that decode Base64 from outsiders. Apps named so far include Keycloak, Jira, Confluence, JFrog Artifactory, Jenkins and PingFederate."
sector: "Any organization running Java server software"
entry: "A crafted Base64 string sent to any part of an app that decodes it, such as an HTTP Basic login header, a SAML message or a CSRF token. In six apps no password is needed, Calif says."
impact: "Memory corruption inside Java itself: a crash with a burst of requests, leaks of memory contents and, with more work, running code on the server. No attacks had been reported as of 22 November."
timeline:
  - date: 2026-09-09
    text: "Context: a proposed OpenJDK change posted in public describes an overflow in the same AVX-512 Base64 decoder code. Its author closes it in early November after it sits inactive. It isn't clear it's the same bug."
  - date: 2026-11-17
    text: "Oracle's November Critical Patch Update and an OpenJDK advisory fix CVE-2026-114938. Oracle rates it 8.1 out of 10 under CVSS 3.1; under CVSS 4.0 it's 9.2."
  - date: 2026-11-17
    text: "Calif publishes its findings under the name Java4Shell: takeovers without a password in six apps and after sign-in in five more, with exploit chains it keeps private. CISA issues an alert the same day."
  - date: 2026-11-17
    text: "By 18:00 Eastern time, VulnCheck gives its customers a full working exploit. Public GitHub projects claiming working chains against test apps start to appear."
  - date: 2026-11-18
    text: "By now Amazon Corretto and Azul have fixed builds out, and Red Hat publishes a first fix for one of its OpenJDK builds. Censys notes no confirmed attacks so far."
  - date: 2026-11-22
    text: "watchTowr still lists no attacks seen in the wild, but rates exploitation as highly likely."
detect:
  - "Base64 values of 65 characters or more that end in one or two `=` and whose length leaves 1, 2 or 3 when divided by 64, especially in `Authorization` headers (SentinelOne's hunting rule)."
  - "Bursts of `IllegalArgumentException` errors from `java.util.Base64$Decoder` in app logs, and unexplained JVM crash files (`hs_err_pid…`) or restart loops."
  - "A Java process starting a shell, new web shells, or a Java app suddenly asking the cloud metadata service for credentials."
  - "None of these proves an attack, and their absence doesn't prove you're safe."
check:
  - "Find every Java runtime, including copies bundled inside apps, containers and appliances, not just the system Java, as CISA advises."
  - "Update to the fixed releases: Oracle's 17.0.21.1, 21.0.13.1, 25.0.5.1 and 27.0.1.1; Amazon Corretto 17.0.21.1.2, 21.0.13.1.2, 25.0.5.1.2 and 27.0.1.1.4; Azul Zulu 17.70.201, 21.54.201, 25.38.201 and 27.30.201. Eclipse Temurin, Microsoft Build of OpenJDK, BellSoft Liberica and most Red Hat packages had no fixed builds when checked on 18 November."
  - "Until you can update, start Java with `-XX:+UnlockDiagnosticVMOptions -XX:-UseBASE64Intrinsics`, which VulnCheck verified on Java 17, 21 and 25. `-XX:UseAVX=2` also works on x86-64, but Java on ARM64 won't start with it. Neither was tested on Java 27."
  - "To see whether a Linux server's chip can run the vulnerable code, run `grep -m1 '^flags' /proc/cpuinfo | tr ' ' '\\n' | grep -E '^(avx512f|avx512bw|avx512vbmi|bmi2)$'`: all four flags must appear. Use it to decide what to patch first, not to rule a server out."
  - "Restrict internet-facing Java services until they're patched, and limit the size of Base64 input your apps accept."
unknown:
  - "Whether anyone is exploiting it yet. No attacks had been reported as of 22 November."
  - "How Calif's chains work for each app: it is keeping them private."
  - "When Calif found the bug and when it reported it to Oracle."
  - "Whether the September OpenJDK proposal was the same bug, already public before the fix."
  - "How many servers are exposed: scanners can see the apps, but not which Java version or processor they run on."
jobs: [vulnerability-analyst, security-administrator, appsec-engineer, devsecops-engineer, threat-hunter]
topics: [patch-management, vulnerability-prioritization, memory-safety-bugs, ai-vulnerability-discovery, vulnerability-intelligence]
sources:
  - name: "VulnCheck: Java4Shell CVE-2026-114938: Fine, I Guess We'll Do This Again"
    url: "https://www.vulncheck.com/blog/java4shell"
  - name: "watchTowr: Frequently Asked Questions About the Java Remote Code Execution Vulnerability (Java4Shell CVE-2026-114938)"
    url: "https://watchtowr.com/intelligence/java4shell-cve-2026-114938-faq/"
  - name: "Censys: Nov 18 Advisory: OpenJDK Remote Code Execution (Java4Shell) [CVE-2026-114938]"
    url: "https://censys.com/advisory/cve-2026-114938/"
  - name: "The Hacker News: Java4Shell Flaw (CVE-2026-114938) Enables Pre-Auth RCE in Jira, Jenkins, Keycloak and More"
    url: "https://thehackernews.com/2026/11/java4shell-cve-2026-114938-enables-pre.html"
  - name: "SentinelOne: Defending Against Java4Shell: Vulnerability in OpenJDK Enables RCE on AVX-512 CPUs"
    url: "https://www.sentinelone.com/blog/java4shell-vulnerability-in-openjdk-enables-rce-on-avx-512-cpus/"
---

Java programs receive Base64 all the time: login headers, SAML messages and security tokens all use this way of writing data with 64 ordinary characters. To decode it faster, Java has a hand-written shortcut for x86-64 chips that support the AVX-512 VBMI instructions. On 17 November 2026, Oracle and the OpenJDK project fixed CVE-2026-114938, a bug in that shortcut. A long Base64 string that ends with an unusual `=` padding makes Java write 62 or 63 bytes past the end of its output. Java does reject the string, but only after the write.

The security firm Calif found and disclosed the bug, nicknamed Java4Shell. It affects Java 17.0.6 and newer, plus Java 21, 25 and 27, from every major distributor, but only on chips with that instruction set: Intel Xeon from Ice Lake onward and AMD Zen 4 and newer. Java 8 and 11 and ARM servers aren't affected. Calif says it built chains that take over six apps without a password, including Keycloak, Jira, Confluence, Jenkins, JFrog Artifactory and PingFederate, and five more after sign-in, and that AI agents built the later chains almost on their own. It hasn't published them.

Turning the bug into code execution is hard. VulnCheck says it takes careful arranging of memory plus a separate leak to get around address randomization, and Oracle rates the attack complexity as high. A crash is easy, though, and Calif says careful use can also leak memory contents. Other teams have reproduced the bug: Blackpoint Cyber crashed a test Spring Boot app with about 28,300 bad login requests in about 20 seconds, and VulnCheck gave its customers a full exploit on the evening of 17 November. No attacks had been reported by 22 November, but watchTowr rates them as highly likely.
