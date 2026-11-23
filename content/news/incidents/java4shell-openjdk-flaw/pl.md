---
# An incident breakdown → lvlulcuma.com/pl/news/incidents/java4shell-openjdk-flaw/
title: "Java4Shell: 62 bajty za daleko w „skrócie” do Base64 i dlaczego Jira, Jenkins i Keycloak potrzebują nowej Javy"
dek: "17 listopada 2026 roku Oracle i OpenJDK załatały CVE-2026-114938, błąd pamięci w szybkim dekoderze Base64, którego Java 17 i nowsze używają na nowoczesnych procesorach Intel i AMD; firma Calif, która go znalazła, twierdzi, że zamieniła go w przejęcie bez hasła sześciu popularnych aplikacji, choć żadnych ataków nie potwierdzono."
type: vulnerability
status: unfolding       # unfolding | confirmed | report (the victim or investigators published a full report)
date: 2026-11-17        # when it became public
published: 2026-11-23   # when this breakdown was published
who: "Każdy, kto uruchamia Javę 17.0.6 lub nowszą (a także 21, 25 i 27) na procesorach x86-64 Intel lub AMD z AVX-512 VBMI w aplikacjach dekodujących Base64 od obcych. Wśród wymienionych aplikacji są Keycloak, Jira, Confluence, JFrog Artifactory, Jenkins i PingFederate."
sector: "Każda organizacja korzystająca z oprogramowania serwerowego w Javie"
entry: "Specjalnie przygotowany ciąg Base64 wysłany do dowolnej części aplikacji, która go dekoduje, na przykład do nagłówka logowania HTTP Basic, wiadomości SAML albo tokenu CSRF. Według Calif w sześciu aplikacjach hasło nie jest potrzebne."
impact: "Uszkodzenie pamięci w samej Javie: awaria po serii zapytań, wyciek zawartości pamięci, a przy większym wysiłku uruchomienie kodu na serwerze. Do 22 listopada nie zgłoszono żadnych ataków."
timeline:
  - date: 2026-09-09
    text: "Kontekst: publicznie zgłoszona propozycja zmiany w OpenJDK opisuje przepełnienie w tym samym kodzie dekodera Base64 dla AVX-512. Na początku listopada autor zamyka ją z powodu braku aktywności. Nie wiadomo, czy to ten sam błąd."
  - date: 2026-11-17
    text: "Listopadowa krytyczna aktualizacja Oracle (Critical Patch Update) i biuletyn OpenJDK łatają CVE-2026-114938. Oracle ocenia błąd na 8,1 na 10 według CVSS 3.1; według CVSS 4.0 to 9,2."
  - date: 2026-11-17
    text: "Calif publikuje swoje ustalenia pod nazwą Java4Shell: przejęcie bez hasła w sześciu aplikacjach i po zalogowaniu w pięciu kolejnych, a łańcuchy exploitów zachowuje dla siebie. Tego samego dnia CISA wydaje ostrzeżenie."
  - date: 2026-11-17
    text: "Do 18:00 czasu wschodniego USA VulnCheck przekazuje klientom pełny działający exploit. Na GitHubie pojawiają się publiczne projekty, których autorzy twierdzą, że mają działające łańcuchy przeciw aplikacjom testowym."
  - date: 2026-11-18
    text: "Amazon Corretto i Azul mają już poprawione wersje, a Red Hat publikuje pierwszą poprawkę dla jednej ze swoich wersji OpenJDK. Censys zaznacza, że potwierdzonych ataków na razie brak."
  - date: 2026-11-22
    text: "watchTowr nadal nie widzi ataków w prawdziwych sieciach, ale ocenia wykorzystanie błędu jako bardzo prawdopodobne."
detect:
  - "Wartości Base64 o długości co najmniej 65 znaków, kończące się jednym lub dwoma `=`, których długość daje resztę 1, 2 lub 3 z dzielenia przez 64, zwłaszcza w nagłówkach `Authorization` (reguła wyszukiwania od SentinelOne)."
  - "Serie błędów `IllegalArgumentException` z `java.util.Base64$Decoder` w logach aplikacji oraz niewyjaśnione pliki awarii JVM (`hs_err_pid…`) czy pętle restartów."
  - "Proces Javy uruchamiający powłokę, nowe web shelle albo aplikacja w Javie, która nagle prosi usługę metadanych chmury o poświadczenia."
  - "Żaden z tych sygnałów nie dowodzi ataku, a ich brak nie oznacza bezpieczeństwa."
check:
  - "Znajdź każde środowisko uruchomieniowe Javy, także kopie wbudowane w aplikacje, kontenery i urządzenia, a nie tylko systemową Javę, jak radzi CISA."
  - "Zaktualizuj do poprawionych wydań: Oracle 17.0.21.1, 21.0.13.1, 25.0.5.1 i 27.0.1.1; Amazon Corretto 17.0.21.1.2, 21.0.13.1.2, 25.0.5.1.2 i 27.0.1.1.4; Azul Zulu 17.70.201, 21.54.201, 25.38.201 i 27.30.201. Eclipse Temurin, Microsoft Build of OpenJDK, BellSoft Liberica i większość pakietów Red Hat nie miały poprawionych wersji według stanu na 18 listopada."
  - "Dopóki nie możesz zaktualizować, uruchamiaj Javę z opcjami `-XX:+UnlockDiagnosticVMOptions -XX:-UseBASE64Intrinsics`, które VulnCheck sprawdził na Javie 17, 21 i 25. `-XX:UseAVX=2` też działa na x86-64, ale Java na ARM64 z tą opcją się nie uruchomi. Żadnej z nich nie testowano na Javie 27."
  - "Aby sprawdzić, czy procesor serwera z Linuksem może uruchomić podatny kod, wykonaj `grep -m1 '^flags' /proc/cpuinfo | tr ' ' '\\n' | grep -E '^(avx512f|avx512bw|avx512vbmi|bmi2)$'`: muszą pojawić się wszystkie cztery flagi. Używaj tego do ustalenia kolejności łatania, a nie do wykluczenia serwera."
  - "Ogranicz dostęp z internetu do usług w Javie, dopóki nie zostaną załatane, i ogranicz rozmiar danych Base64 przyjmowanych przez aplikacje."
unknown:
  - "Czy ktoś już wykorzystuje błąd. Do 22 listopada nie zgłoszono ataków."
  - "Jak działają łańcuchy Calif dla poszczególnych aplikacji: firma ich nie ujawnia."
  - "Kiedy Calif znalazła błąd i kiedy zgłosiła go Oracle."
  - "Czy wrześniowa propozycja do OpenJDK dotyczyła tego samego błędu, czyli czy był publiczny jeszcze przed poprawką."
  - "Ile serwerów jest zagrożonych: skanery widzą aplikacje, ale nie wersję Javy ani procesor, na którym działają."
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

Programy w Javie bez przerwy dostają dane w Base64: nagłówki logowania, wiadomości SAML i tokeny bezpieczeństwa zapisują dane właśnie tak, 64 zwykłymi znakami. Żeby dekodować szybciej, Java ma ręcznie napisany „skrót” dla procesorów x86-64 z instrukcjami AVX-512 VBMI. 17 listopada 2026 roku Oracle i projekt OpenJDK załatały CVE-2026-114938, błąd w tym skrócie. Długi ciąg Base64 z nietypowym dopełnieniem `=` na końcu sprawia, że Java zapisuje 62 lub 63 bajty za końcem swojego bufora wyjściowego. Java w końcu odrzuca taki ciąg, ale dopiero po zapisie.

Błąd znalazła i ujawniła firma Calif, a dostał przydomek Java4Shell. Dotyczy Javy 17.0.6 i nowszych oraz Javy 21, 25 i 27 od wszystkich głównych dostawców, ale tylko na procesorach z tym zestawem instrukcji: Intel Xeon od Ice Lake wzwyż oraz AMD Zen 4 i nowszych. Java 8 i 11 oraz serwery ARM nie są zagrożone. Calif twierdzi, że zbudowała łańcuchy przejmujące bez hasła sześć aplikacji, w tym Keycloak, Jirę, Confluence, Jenkinsa, JFrog Artifactory i PingFederate, a po zalogowaniu pięć kolejnych, przy czym późniejsze łańcuchy agenci AI zbudowali niemal samodzielnie. Firma ich nie opublikowała.

Zamiana błędu w wykonanie kodu jest trudna. VulnCheck wyjaśnia, że wymaga starannego ułożenia pamięci i dodatkowego wycieku, by obejść losowanie adresów, a Oracle ocenia złożoność ataku jako wysoką. Awaria jest za to łatwa, a Calif twierdzi, że przy ostrożnym użyciu błąd ujawnia też zawartość pamięci. Inne zespoły go odtworzyły: Blackpoint Cyber położył testową aplikację na Spring Boot około 28 300 błędnymi próbami logowania w mniej więcej 20 sekund, a VulnCheck wieczorem 17 listopada przekazał klientom pełny exploit. Do 22 listopada nie zgłoszono ataków, ale watchTowr ocenia je jako bardzo prawdopodobne.
