---
# Roadmap topic. Its title and summary show on every job page that lists "security-fundamentals" in learn.yml.
# The text under the dashes is the topic's own page: lvlulcuma.com/pl/roadmap/topics/security-fundamentals/
# How these pages are written: docs/claude/roadmap-topic.md
title: "Podstawy bezpieczeństwa"
summary: "Poufność, integralność i dostępność (triada CIA), uwierzytelnianie a autoryzacja, zasada najmniejszych uprawnień, obrona warstwowa oraz różnica między zagrożeniem, podatnością i ryzykiem."
date: 2026-11-15
sources:
  - name: "44 U.S.C. § 3552: Definitions (Federal Information Security Modernization Act of 2014)"
    url: "https://www.law.cornell.edu/uscode/text/44/3552"
  - name: "NIST FIPS 199: Standards for Security Categorization of Federal Information and Information Systems, 2004"
    url: "https://doi.org/10.6028/NIST.FIPS.199"
  - name: "NIST CSRC Glossary: potential impact"
    url: "https://csrc.nist.gov/glossary/term/potential_impact"
  - name: "NIST CSRC Glossary: security controls"
    url: "https://csrc.nist.gov/glossary/term/security_controls"
  - name: "NIST SP 800-63-4: Digital Identity Guidelines, July 2025"
    url: "https://csrc.nist.gov/pubs/sp/800/63/4/final"
  - name: "NIST SP 800-63-4: Glossary"
    url: "https://pages.nist.gov/800-63-4/sp800-63/glossary"
  - name: "NIST SP 800-63B-4: Introduction (authentication assurance levels)"
    url: "https://pages.nist.gov/800-63-4/sp800-63b/introduction"
  - name: "NIST SP 800-63B-4: Authenticators (passwords, phishing resistance)"
    url: "https://pages.nist.gov/800-63-4/sp800-63b/authenticators"
  - name: "CISA: Implementing Phishing-Resistant MFA (fact sheet), October 2022"
    url: "https://www.cisa.gov/sites/default/files/publications/fact-sheet-implementing-phishing-resistant-mfa-508c.pdf"
  - name: "FIDO Alliance: Passkeys"
    url: "https://fidoalliance.org/passkeys/"
  - name: "RFC 9110: HTTP Semantics, 2022 (401 and 403)"
    url: "https://www.rfc-editor.org/rfc/rfc9110.html"
  - name: "OWASP Top 10:2025: Introduction"
    url: "https://owasp.org/Top10/2025/0x00_2025-Introduction/"
  - name: "Saltzer and Schroeder: The Protection of Information in Computer Systems, Proceedings of the IEEE, 1975"
    url: "https://web.mit.edu/saltzer/www/publications/protection/"
  - name: "NIST SP 800-53 Rev. 5: Security and Privacy Controls (AC-5 Separation of Duties, AC-6 Least Privilege)"
    url: "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
  - name: "CISA and NSA: Top Ten Cybersecurity Misconfigurations (AA23-278A), 2023"
    url: "https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-278a"
  - name: "NIST CSRC Glossary: defense-in-depth"
    url: "https://csrc.nist.gov/glossary/term/defense_in_depth"
  - name: "James Reason: Human error: models and management, BMJ 2000"
    url: "https://www.bmj.com/content/320/7237/768"
  - name: "NIST: NIST Releases Version 2.0 of Landmark Cybersecurity Framework, February 26, 2024"
    url: "https://www.nist.gov/news-events/news/2024/02/nist-releases-version-20-landmark-cybersecurity-framework"
  - name: "NIST SP 1300: CSF 2.0 Small Business Quick-Start Guide, February 2024"
    url: "https://csrc.nist.gov/pubs/sp/1300/final"
  - name: "NIST SP 800-207: Zero Trust Architecture, August 2020"
    url: "https://csrc.nist.gov/pubs/sp/800/207/final"
  - name: "NIST SP 800-30 Rev. 1: Guide for Conducting Risk Assessments, September 2012"
    url: "https://csrc.nist.gov/pubs/sp/800/30/r1/final"
  - name: "NIST CSRC Glossary: threat"
    url: "https://csrc.nist.gov/glossary/term/threat"
  - name: "NIST CSRC Glossary: threat source"
    url: "https://csrc.nist.gov/glossary/term/threat_source"
  - name: "NIST CSRC Glossary: vulnerability"
    url: "https://csrc.nist.gov/glossary/term/vulnerability"
  - name: "NIST CSRC Glossary: risk"
    url: "https://csrc.nist.gov/glossary/term/risk"
  - name: "NIST CSRC Glossary: risk response"
    url: "https://csrc.nist.gov/glossary/term/risk_response"
  - name: "FIRST: CVSS v4.0 User Guide (CVSS-B measures severity, not risk)"
    url: "https://www.first.org/cvss/v4.0/user-guide"
  - name: "CISA: Known Exploited Vulnerabilities Catalog"
    url: "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
  - name: "MITRE ATT&CK T1621: Multi-Factor Authentication Request Generation"
    url: "https://attack.mitre.org/techniques/T1621/"
  - name: "MITRE ATT&CK T1114.003: Email Forwarding Rule"
    url: "https://attack.mitre.org/techniques/T1114/003/"
  - name: "Microsoft Learn: Get-LocalGroupMember"
    url: "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.localaccounts/get-localgroupmember"
  - name: "Microsoft Learn: Get-FileHash"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powershell.utility/get-filehash"
  - name: "Apple Support: Add a user or group on Mac"
    url: "https://support.apple.com/guide/mac-help/mchl3e281fc9"
  - name: "Apple Support: Set up users, guests and groups on Mac (macOS Catalina guide)"
    url: "https://support.apple.com/en-au/guide/mac-help/mtusr001/10.15/mac"
  - name: "Ubuntu Server docs: User management"
    url: "https://documentation.ubuntu.com/server/how-to/security/user-management"
  - name: "Red Hat: Managing sudo access (RHEL 10)"
    url: "https://docs.redhat.com/en/documentation/Red_Hat_Enterprise_Linux/10/html/security_hardening/managing-sudo-access"
visuals:
  # The three things security protects, each with what breaks it.
  cia:
    kind: cards
    layout: rows
    cards:
      - title: "Poufność"
        text: "Informacje widzą tylko osoby, którym wolno je widzieć. Chronią ją kontrola dostępu, szyfrowanie i solidne logowanie."
        tags: ["wyciek bazy klientów", "czytanie cudzej poczty", "skradziony laptop bez szyfrowania"]
      - title: "Integralność"
        text: "Informacje są poprawne i kompletne, a nikt nie zmienił ani nie zniszczył ich bez zgody. Chronią ją uprawnienia, skróty (hashe) i podpisy, zatwierdzenia oraz kopie zapasowe."
        tags: ["podmienione dane konta na fakturze", "sfałszowana aktualizacja oprogramowania", "usunięte logi"]
      - title: "Dostępność"
        text: "Ci, którzy potrzebują informacji lub systemu, mogą z nich korzystać wtedy, kiedy trzeba. Chronią ją kopie zapasowe, systemy zapasowe, aktualizacje i zapas mocy."
        tags: ["strona zalana ruchem (DDoS)", "ransomware blokuje pliki", "awaria zasilania"]
    caption: "Przy każdym incydencie zapytaj, w którą z trzech cech uderzył. Ransomware uderza w dostępność, a jeśli gang kopiuje pliki przed ich zablokowaniem, to także w poufność."
  # From a claim to a decision: identification, authentication, authorization.
  auth:
    kind: route
    stages:
      - where: "Identyfikacja"
        steps: ["Wpisujesz nazwę użytkownika albo adres e-mail: mówisz, kim jesteś"]
      - where: "Uwierzytelnianie"
        steps: ["Udowadniasz to: hasłem, kluczem dostępu (passkey), kodem, odciskiem palca", "System sprawdza dowód i cię loguje"]
      - where: "Autoryzacja"
        steps: ["Otwierasz stronę, a system sprawdza, co wolno temu kontu", "Wolno, więc dostajesz stronę"]
    caption: "Dwa lub więcej różnych rodzajów dowodu to uwierzytelnianie wieloskładnikowe (MFA). Autoryzacja działa przy każdym żądaniu: zalogowane konto bez zgody dostaje <code>403 Forbidden</code>, a <code>401</code> oznacza, że serwer jeszcze nie wie, kim jesteś."
  # Common ways to sign in, and whether a fake website could steal them.
  signin:
    kind: window
    title: "Sposoby logowania a phishing"
    head: ["Sposób", "Składniki i czy fałszywa strona może z tego skorzystać?"]
    rows:
      - ["Samo hasło", "Coś, co wiesz. Tak: wpisujesz je na fałszywej stronie"]
      - ["Hasło + kod z SMS-a", "Wiesz + masz. Tak: kod też wpisujesz na fałszywej stronie"]
      - ["Hasło + kod z aplikacji", "Wiesz + masz. Tak, w ten sam sposób, póki kod jest ważny"]
      - ["Hasło + zatwierdzenie powiadomienia push", "Wiesz + masz. Tak: atakujący się loguje, a ty klikasz „Zatwierdź”"]
      - ["Klucz dostępu (passkey) lub sprzętowy klucz bezpieczeństwa", "Masz, a odblokowujesz odciskiem palca, twarzą lub PIN-em. Nie: odpowiada tylko prawdziwej stronie"]
    mark: 5
    caption: "Oprzeć się phishingowi może tylko logowanie kryptograficzne, takie jak klucze dostępu (passkeys) i sprzętowe klucze bezpieczeństwa oparte na FIDO/WebAuthn. Mimo to każdy inny wiersz jest dużo lepszy niż samo hasło."
  # A made-up access review that finds privilege creep.
  access:
    kind: window
    title: "Przegląd uprawnień: Finance (zmyślony)"
    head: ["Konto", "Co ma i czy praca tego wymaga?"]
    rows:
      - ["alex, księgowość", "Odczyt i zmiana faktur: tak"]
      - ["sam, księgowość", "Odczyt i zmiana faktur: tak"]
      - ["jordan, od marca w dziale sprzedaży", "Nadal odczyt i zmiana: nie, odebrać"]
      - ["svc-backup, usługa kopii zapasowych", "Zmiana wszystkiego: nie, wystarczy odczyt"]
      - ["it-admin, używane też do codziennej poczty", "Pełna kontrola: rozdzielić na konto administratora i konto codzienne"]
    mark: 3
    caption: "Kiedy ludzie zmieniają stanowiska, uprawnienia się kumulują: to privilege creep, czyli narastanie uprawnień. Regularny przegląd przywraca każde konto do tego, czego wymaga jego praca."
  # The layers that stand between one phishing email and real damage.
  layers:
    kind: cards
    layout: rows
    cards:
      - title: "Filtr poczty"
        text: "Blokuje znane złośliwe linki i załączniki, zanim ktokolwiek je zobaczy."
        tags: ["Ochrona"]
      - title: "Ludzie"
        text: "Pracownicy, którzy rozpoznają fałszywkę i ją zgłaszają."
        tags: ["Ochrona", "Wykrywanie"]
      - title: "MFA odporne na phishing"
        text: "Samo skradzione hasło nie wystarczy, żeby się zalogować."
        tags: ["Ochrona"]
      - title: "Najmniejsze uprawnienia"
        text: "Konto, które jednak zostanie przejęte, sięga tylko tam, gdzie wymaga tego jego praca."
        tags: ["Ochrona"]
      - title: "Monitorowanie"
        text: "Alerty o dziwnych logowaniach i nowych regułach przekazywania poczty."
        tags: ["Wykrywanie"]
      - title: "Reagowanie na incydenty"
        text: "Plan, jak zablokować konto, zakończyć jego sesje i cofnąć zmiany."
        tags: ["Reagowanie"]
      - title: "Kopie zapasowe"
        text: "Sposób na odtworzenie tego, co zmieniono, usunięto lub zablokowano."
        tags: ["Odzyskiwanie"]
    caption: "Każda warstwa ma dziury. Obrona warstwowa oznacza, że zakrywa je następna warstwa. Etykiety to funkcje NIST Cybersecurity Framework 2.0: warstwy nie tylko blokują, ale też zauważają, reagują i przywracają."
  # A made-up risk list: the highest CVSS score isn't the highest risk.
  risk:
    kind: window
    title: "Rejestr ryzyk (zmyślony)"
    head: ["Ustalenie", "Prawdopodobieństwo × wpływ = ryzyko"]
    rows:
      - ["Podatność w urządzeniu VPN, CVSS 7.2, wystawione do internetu, w katalogu KEV agencji CISA", "wysokie × wysoki = wysokie"]
      - ["Wspólne hasło administratora firmowej strony, bez MFA", "średnie × wysoki = wysokie"]
      - ["Podatność w serwerze baz danych, CVSS 9.8, na maszynie laboratoryjnej bez połączenia z siecią", "niskie × średni = niskie"]
      - ["Stara biurowa drukarka z domyślnym hasłem, dostępna tylko od środka", "niskie × niski = niskie"]
    mark: 1
    caption: "Prosta skala trzystopniowa; przewodnik NIST po ocenie ryzyka używa pięciu poziomów. Ocena ważności opisuje samą podatność. Ryzyko dodaje to, jak bardzo system jest wystawiony, czy atakujący wykorzystują tę podatność i co jest w systemie."
  quiz:
    kind: questions
    items:
      - q: "Ransomware blokuje dokumentację pacjentów kliniki, a gang publikuje też część z niej w internecie. Które części triady CIA ucierpiały?"
        a: "Dostępność, bo personel nie może otworzyć dokumentacji; poufność, bo dane wyciekły; i integralność też, bo pliki zostały zmienione bez zgody podczas szyfrowania."
      - q: "Atakujący zmienia numer konta bankowego w e-mailu z fakturą, zanim ten dotrze do klienta. Która to część triady?"
        a: "Integralność: informację zmieniono bez zgody. E-mail i tak dociera (dostępność) i może wcale nie był tajny (poufność), ale nie jest już poprawny."
      - q: "Logujesz się do firmowej aplikacji, otwierasz <code>/admin</code> i dostajesz <code>403 Forbidden</code>. Co zawiodło: uwierzytelnianie czy autoryzacja?"
        a: "Autoryzacja. Aplikacja wie, kim jesteś, ale twojemu kontu nie wolno tam wejść. <code>401</code> oznaczałby, że jeszcze nie przyjęła, kim jesteś, czyli zawiodłoby uwierzytelnianie."
      - q: "Bank prosi o hasło, a potem o kod z SMS-a. Czy to MFA? Czy jest odporne na phishing?"
        a: "To MFA: coś, co wiesz, plus coś, co masz. Ale nie jest odporne na phishing: fałszywa strona może poprosić o kod i przekazać go dalej, póki jest ważny. Phishingowi opierają się tylko metody kryptograficzne, takie jak klucze dostępu (passkeys) i sprzętowe klucze bezpieczeństwa."
      - q: "Ktoś pracuje w firmie od sześciu lat, na trzech kolejnych stanowiskach, i nadal ma uprawnienia ze wszystkich trzech. Jak to się nazywa i co to naprawia?"
        a: "Privilege creep, czyli narastanie uprawnień. Przegląd uprawnień porównuje każde konto z tym, czego wymaga obecna praca, i odbiera resztę: zasada najmniejszych uprawnień."
      - q: "Dlaczego zmiana numeru konta dostawcy powinna wymagać dwóch różnych osób?"
        a: "To rozdzielenie obowiązków. Jedno skradzione lub nieuczciwe konto nie przeleje pieniędzy samo; potrzebna byłaby zmowa dwóch osób."
      - q: "Antywirus przepuścił złośliwe oprogramowanie, ale firma w ciągu dnia odtworzyła wszystko z kopii zapasowych. Jaką ideę to pokazuje?"
        a: "Obronę warstwową. Warstwa ochronna miała dziurę, a późniejsza warstwa (odtwarzanie z kopii zapasowych) ograniczyła szkody."
      - q: "Podatność A ma CVSS 9.8 na maszynie bez połączenia z siecią. Podatność B ma 7.2 na VPN-ie wystawionym do internetu i jest w katalogu KEV agencji CISA. Co naprawić najpierw?"
        a: "Podatność B. CVSS mierzy ważność, a nie ryzyko. B jest wystawiona i wiadomo, że jest wykorzystywana w atakach, więc jej prawdopodobieństwo jest dużo wyższe; do A trudno w ogóle dotrzeć."
      - q: "Firma kupuje cyberubezpieczenie od ransomware. Jaka to reakcja na ryzyko i czego ona nie zmienia?"
        a: "Przeniesienie (lub współdzielenie): część szkody finansowej przechodzi na ubezpieczyciela. Atak nie staje się przez to mniej prawdopodobny, więc ubezpieczenie uzupełnia ograniczanie ryzyka, a nie je zastępuje."
---

## Krótko

Pomyśl o oddziale banku.

- Pieniądze, dane rachunków i drzwi otwarte dla klientów to to, co bank chroni: jego **zasoby**.
- Bank składa trzy obietnice. Dane rachunku widzą tylko osoby, którym wolno (**poufność**). Salda są poprawne i nikt
  ich po cichu nie zmienia (**integralność**). Oddział jest otwarty, a gotówka na miejscu, kiedy przychodzą klienci
  (**dostępność**). Razem to **triada CIA**.
- Przy okienku pracownik sprawdza twój dokument: to **uwierzytelnianie**, czyli dowód, kim jesteś. Potem sprawdza,
  na co pozwala twój rachunek: to **autoryzacja**. Możesz wypłacić pieniądze ze swojego rachunku, ale nie z rachunku
  sąsiada.
- Kasjer ma klucz do swojej szuflady, ale nie do skarbca: to **zasada najmniejszych uprawnień**. Do otwarcia skarbca
  potrzeba dwóch osób z dwoma kluczami: to **rozdzielenie obowiązków**.
- Ochroniarz przy drzwiach, kamery, skarbiec z zamkiem czasowym, alarm i ubezpieczenie: jeśli jedno zawiedzie,
  następne wytrzyma. To **obrona warstwowa**.
- Złodzieje istnieją: to **zagrożenie**. Niezamknięte tylne drzwi to **podatność**. Jak prawdopodobny jest napad i
  jak bolesny by był, to **ryzyko**.

<mark>Bezpieczeństwo dba o to, żeby informacje były poufne, poprawne i dostępne. Dochodzi się do tego, sprawdzając,
kim ktoś jest i co mu wolno, dając każdej osobie i każdemu programowi tylko taki dostęp, jakiego potrzebują, i
układając warstwy jedna za drugą, żeby jedna awaria nie oznaczała końca. Ryzyko podpowiada, od czego zacząć: jak
prawdopodobne coś jest i jak bardzo by zabolało.</mark> Te idee pojawiają się w każdym zawodzie w bezpieczeństwie: przy
pisaniu kodu, przy obsłudze alertów i w rozmowach z zarządem.

Po lekturze tej strony będziesz umieć:

- powiedzieć, w którą część triady CIA uderzył incydent, i podać przykład dla każdej;
- wyjaśnić różnicę między uwierzytelnianiem a autoryzacją oraz między `401` a `403`;
- wymienić trzy rodzaje składników uwierzytelniania i wskazać, które sposoby logowania są odporne na phishing;
- stosować zasadę najmniejszych uprawnień i rozdzielenie obowiązków oraz wyłapać narosłe uprawnienia na liście kont;
- opisać obronę warstwową i dobrać warstwy, które zakrywają nawzajem swoje luki;
- odróżnić zagrożenie, podatność i ryzyko oraz wyjaśnić, dlaczego wysoka ocena CVSS to nie to samo co wysokie ryzyko;
- wybrać reakcję na ryzyko: zaakceptować, unikać, ograniczyć, współdzielić lub przenieść.

## Słowa, które się przydadzą

- **Zasób:** wszystko, co warto chronić: dane, systemy, urządzenia, pieniądze, dobre imię firmy.
- **Zabezpieczenie (control):** środek wprowadzony po to, by chronić poufność, integralność i dostępność: zamek,
  reguła, ustawienie, kopia zapasowa. Mówi się też „środek kontroli” albo „środek zaradczy”.
- **Uprawnienie:** prawo do zrobienia czegoś w systemie: odczytu pliku, jego zmiany, instalowania programów,
  zarządzania kontami.
- **Exploit:** sposób, często program, na wykorzystanie podatności.
- **Incydent:** w prawie USA zdarzenie, które bez podstawy prawnej szkodzi albo za chwilę zaszkodzi poufności,
  integralności lub dostępności informacji albo systemu, lub które narusza prawo albo zasady bezpieczeństwa.

> [!NOTE]
> Definicje na tej stronie pochodzą z NIST, amerykańskiej agencji normalizacyjnej, której słownik pojęć
> bezpieczeństwa jest dostępny za darmo, oraz z amerykańskiej ustawy federalnej (FISMA). Inne normy formułują
> niektóre z nich inaczej.

## Triada CIA: co chroni bezpieczeństwo

Prawo USA definiuje bezpieczeństwo informacji jako ochronę informacji i systemów przed nieuprawnionym dostępem,
użyciem, ujawnieniem, zakłóceniem, modyfikacją lub zniszczeniem, tak by pozostały poufne, nienaruszone i dostępne. Te
trzy cele nazywa się **triadą CIA**, od angielskich słów confidentiality, integrity, availability (z amerykańskim
wywiadem nie ma to nic wspólnego).

<!-- pic: cia -->

### Jeszcze dwa słowa w ramach integralności

Ta sama ustawa mówi, że integralność obejmuje jeszcze dwie idee, o których często usłyszysz:

- **Autentyczność:** informacja naprawdę pochodzi stamtąd, skąd twierdzi, że pochodzi.
- **Niezaprzeczalność (non-repudiation):** nadawca nie może potem wiarygodnie zaprzeczyć, że ją wysłał, na przykład
  dlatego, że wiadomość ma jego podpis cyfrowy.

### Jak bardzo liczy się każda z nich?

To zależy od informacji. Publiczna strona nie ma sekretów, więc poufność ma tam niewielkie znaczenie, ale podmieniona
treść czy awaria już tak. Dane płacowe potrzebują wszystkich trzech. Amerykańska norma federalna FIPS 199 (2004)
ocenia szkodę z utraty każdej z trzech osobno:

| Wpływ | Utrata poufności, integralności lub dostępności może mieć… |
|---|---|
| Niski | ograniczony negatywny skutek |
| Umiarkowany | poważny negatywny skutek |
| Wysoki | dotkliwy lub katastrofalny negatywny skutek |

Od tych ocen zależy potem, ile ochrony dostanie system. Z takim sposobem myślenia spotkasz się w ocenach ryzyka,
audytach i raportach z incydentów: „umiarkowany wpływ na integralność” to precyzyjne sformułowanie, a nie ogólnik.

## Uwierzytelnianie i autoryzacja

Dwa podobne słowa, które ciągle się mylą. **Uwierzytelnianie** odpowiada na pytanie „kim jesteś?”. **Autoryzacja** —
na pytanie „co ci wolno?”. System potrzebuje obu, i to w tej kolejności.

<!-- pic: auth -->

### Kim jesteś? Uwierzytelnianie

Wpisanie nazwy użytkownika tylko cię **identyfikuje**: nazwę może wpisać każdy. **Uwierzytelnianie** to dowód.
Wytyczne NIST dotyczące tożsamości cyfrowej (SP 800-63-4, lipiec 2025 roku) opisują je jako udowodnienie, że
kontrolujesz jeden lub więcej **uwierzytelniaczy** powiązanych z kontem, i wymieniają trzy rodzaje **składników
uwierzytelniania**:

| Składnik | Przykłady |
|---|---|
| Coś, co wiesz | Hasło, PIN |
| Coś, co masz | Telefon z aplikacją uwierzytelniającą, sprzętowy klucz bezpieczeństwa, karta inteligentna |
| Coś, czym jesteś | Odcisk palca, twarz |

**Uwierzytelnianie wieloskładnikowe (MFA)** wymaga więcej niż jednego odrębnego rodzaju składnika. Dwa hasła to
nadal jeden składnik; hasło plus kod z telefonu to dwa.

Nie każde MFA jest równie mocne. NIST mówi wprost, że hasła nie są odporne na phishing, podobnie jak kody, które się
wpisuje, i zatwierdzenia, które się klika: fałszywa strona może o nie poprosić i przekazać je dalej. Odporność na
phishing wymaga logowania kryptograficznego, w którym twoje urządzenie potwierdza się tylko prawdziwej stronie. CISA
nazywa FIDO/WebAuthn jedynym szeroko dostępnym uwierzytelnianiem odpornym na phishing, a **klucze dostępu (passkeys)**
to poświadczenia FIDO.

<!-- pic: signin -->

Zatwierdzenia push mają własny słaby punkt: atakujący, który zna twoje hasło, może logować się raz za razem i
zasypywać cię prośbami, dopóki ktoś nie kliknie „Zatwierdź”, byle tylko przestały. MITRE ATT&CK nazywa to
generowaniem żądań MFA (T1621); mówi się też o „zmęczeniu MFA” (MFA fatigue) albo o push bombingu.

NIST wyznacza też trzy **poziomy pewności uwierzytelniania** (AAL): AAL1 dopuszcza jeden składnik; AAL2 wymaga dwóch
różnych składników i musi oferować opcję odporną na phishing; AAL3 wymaga kryptograficznego uwierzytelniacza
odpornego na phishing, którego klucza prywatnego nie da się skopiować.

> [!TIP]
> Obecne zasady NIST dotyczące haseł (SP 800-63B-4) zaskakują wiele osób:
> - co najmniej **15 znaków**, gdy hasło jest jedynym składnikiem, i co najmniej **8**, gdy jest jednym z kilku;
> - przyjmowanie haseł o długości **co najmniej do 64 znaków**;
> - **żadnych** reguł składu typu „jedna wielka litera, jedna cyfra, jeden znak specjalny”;
> - **żadnej** wymuszonej zmiany według harmonogramu, ale wymuszona zmiana, gdy są dowody, że hasło wykradziono;
> - sprawdzanie nowych haseł z listą popularnych, przewidywalnych i już wyciekłych.
>
> Długie jest lepsze niż skomplikowane.

### Co ci wolno? Autoryzacja

NIST opisuje **autoryzację** jako decyzję o przyznaniu dostępu, zwykle podejmowaną automatycznie na podstawie tego, co
wiadomo o koncie: jego roli, grup, atrybutów. Opierają się na niej dwie stare zasady, obie z artykułu Saltzera i
Schroedera z 1975 roku o ochronie informacji w komputerach:

- **Pełne pośrednictwo (complete mediation):** każdy dostęp do każdego obiektu musi zostać sprawdzony. Sprawdzenie
  raz przy logowaniu i ufanie potem wszystkiemu to właśnie sposób, w jaki aplikacje pokazują ludziom cudze dane.
- **Bezpieczne ustawienia domyślne (fail-safe defaults):** decyzje opierają się na zezwoleniu, a nie na wykluczeniu.
  Wszystko, na co nie ma wyraźnej zgody, jest zabronione.

W sieci oba niepowodzenia mają własne kody stanu (RFC 9110): `401 Unauthorized` oznacza, że w żądaniu brakuje
ważnych danych uwierzytelniających, a `403 Forbidden`, że serwer zrozumiał żądanie i odmawia jego wykonania. Mimo
nazwy `401` dotyczy uwierzytelniania.

Błędy autoryzacji to najczęstsza poważna wada aplikacji webowych. W OWASP Top 10:2025 **A01 Broken Access Control**
(błędna kontrola dostępu) znów zajmuje pierwsze miejsce: średnio 3,73% badanych aplikacji miało co najmniej jedną z
40 jej słabości. **A07 Authentication Failures** (błędy uwierzytelniania) jest na siódmym. Klasyczny przykład: zmieniasz
ID w linku i widzisz cudzy rekord; jak to się dzieje i jak temu zapobiec, wyjaśnia nasza strona o
[CWE-639](/pl/cwe/639/).

> [!NOTE]
> Zalogowanie się nie czyni nikogo godnym zaufania. Gdy atakujący ma działające konto, często dzięki hasłu
> wyłudzonemu phishingiem, szkody ogranicza właśnie autoryzacja. Tu wkracza zasada najmniejszych uprawnień.

## Zasada najmniejszych uprawnień

Saltzer i Schroeder ujęli ją w jednym zdaniu w 1975 roku i od tamtej pory nie trzeba było jej zmieniać: każdy program
i każdy użytkownik systemu powinien działać z najmniejszym zestawem uprawnień potrzebnym do wykonania pracy. Katalog
zabezpieczeń NIST (SP 800-53, zabezpieczenie AC-6) mówi to samo: zezwalać tylko na taki dostęp, jakiego użytkownicy i
działające w ich imieniu programy potrzebują do swoich zadań.

Dlaczego to ważne: gdy konto zostanie skradzione albo program oszukany, atakujący dostaje dokładnie to, na co temu
kontu lub programowi pozwolono. Zasada najmniejszych uprawnień sprawia, że to „dokładnie to” jest małe. W praktyce:

- **Osobne konta do codziennej pracy i do administrowania.** Pocztę i przeglądarkę obsługuj ze zwykłego konta; konta
  administratora używaj tylko do prac administracyjnych. CISA i NSA wymieniają „zbędne używanie kont z podwyższonymi
  uprawnieniami” wśród najczęstszych problemów, które znajdują ich zespoły red i blue.
- **Programom i usługom tylko to, czego używają.** Usługa kopii zapasowych musi czytać pliki, a nie je zmieniać.
- **Odczyt zamiast zapisu, wąsko zamiast szeroko.** Jeden folder, a nie cały dysk; dane jednego zespołu, a nie
  wszystkich.
- **Regularnie przeglądaj uprawnienia.** Ludzie zmieniają stanowiska i zachowują stary dostęp. CISA i NSA nazywają
  to **privilege creep** (narastanie uprawnień) i właśnie dlatego istnieją przeglądy uprawnień.

<!-- pic: access -->

### Rozdzielenie obowiązków

Niektóre zadania są zbyt ryzykowne dla jednej osoby. **Rozdzielenie obowiązków** dzieli je tak, by jedna osoba
tworzyła płatność, a inna ją zatwierdzała. Zabezpieczenie NIST AC-5 zaznacza, że przeciwdziała to nadużyciom
przyznanych uprawnień i zmniejsza ryzyko szkód bez zmowy: potrzebne byłyby do niej dwie osoby. NIST podaje też drugi
przykład, który warto zapamiętać: osoby zarządzające dostępem nie powinny zarządzać także logami audytowymi, które
zapisują ich własne działania. Saltzer i Schroeder opisali bardzo podobną ideę — „rozdzielenie uprawnień” (separation
of privilege): zamek, który wymaga dwóch kluczy.

> [!WARNING]
> Zasada najmniejszych uprawnień, która przeszkadza w pracy, długo się nie utrzyma: ludzie zaczną dzielić się hasłami
> albo prosić o prawa administratora „na wszelki wypadek”. Saltzer i Schroeder mieli zasadę i na to — akceptowalność
> psychologiczną: z ochrony musi się łatwo korzystać, inaczej ludzie nie będą jej stosować poprawnie. Spraw, żeby
> właściwa droga była łatwa, na przykład dzięki szybkim, rejestrowanym prośbom o dodatkowy dostęp.

## Obrona warstwowa

Żadne pojedyncze zabezpieczenie nie jest doskonałe. **Obrona warstwowa** (defense in depth) to nazwa, jaką NIST nadaje
strategii łączącej ludzi, technologię i działania operacyjne, by ustawić bariery w wielu warstwach w całej organizacji:
gdy jedna zawiedzie, inna nadal stoi.

Dobrze tłumaczy to obraz z nauki o bezpieczeństwie. James Reason porównał zabezpieczenia do plastrów sera
szwajcarskiego: każdy plaster ma dziury, które się otwierają, zamykają i przesuwają, a szkoda przechodzi tylko wtedy,
gdy dziury w wielu plastrach ustawią się w jednej linii. Przykład z cyberbezpieczeństwa: e-mail phishingowy przechodzi
przez filtr (dziura), zmęczony pracownik klika (kolejna dziura), ale na drodze wciąż stoją MFA, zasada najmniejszych
uprawnień, monitorowanie i kopie zapasowe.

<!-- pic: layers -->

Warstwy to nie tylko mury. **NIST Cybersecurity Framework 2.0**, wydany 26 lutego 2024 roku, dzieli bezpieczeństwo na
sześć funkcji: **Govern** (zarządzanie), **Identify** (identyfikacja), **Protect** (ochrona), **Detect** (wykrywanie),
**Respond** (reagowanie) i **Recover** (odzyskiwanie). Projekt z dużą ilością Protect, a bez Detect i Recover, ma
głębię tylko w jednym kierunku: gdy coś się przedostanie, nikt tego nie zauważy i nie będzie z czego odtworzyć danych.

Dwa błędy, których warto unikać:

- **Wiele warstw z tą samą dziurą.** Jeśli VPN, poczta i konsola administracyjna przyjmują to samo hasło, które da się
  wyłudzić phishingiem, jedno wyłudzone hasło otwiera wszystkie trzy: trzy produkty, ale jedna warstwa.
- **Żadnych warstw w środku.** CISA i NSA wymieniają brak segmentacji sieci i niewystarczające monitorowanie sieci
  wewnętrznej wśród dziesięciu najczęstszych błędów konfiguracji: gdy atakujący jest już w środku, nic go nie
  zatrzymuje i nikt nie widzi, jak się porusza.

Dalej na ścieżce **zero trust** (NIST SP 800-207, sierpień 2020 roku) idzie jeszcze dalej: żadne konto ani urządzenie
nie jest zaufane tylko dlatego, gdzie jest w sieci albo do kogo należy, a każde żądanie jest sprawdzane.

## Zagrożenie, podatność i ryzyko

Tych trzech słów często używa się tak, jakby znaczyły to samo. Tak nie jest, a ich mylenie sprawia, że najpierw
naprawia się nie to, co trzeba. Przewodnik NIST po ocenie ryzyka (SP 800-30 Rev. 1, wrzesień 2012 roku) definiuje je,
w skrócie, tak:

- **Zagrożenie:** każda okoliczność lub zdarzenie, które może zaszkodzić organizacji za pośrednictwem systemu
  informacyjnego przez nieuprawniony dostęp, zniszczenie, ujawnienie, modyfikację informacji lub odmowę usługi.
  W banku: złodzieje. W IT: gang ransomware skanujący internet w poszukiwaniu niezałatanych VPN-ów.
- **Podatność:** słabość systemu, jego procedur bezpieczeństwa, mechanizmów kontroli wewnętrznej albo sposobu
  wykonania, którą źródło zagrożenia może wykorzystać lub przypadkiem uruchomić. W banku: niezamknięte tylne drzwi.
  W IT: niezałatany VPN.
- **Ryzyko:** miara tego, jak bardzo organizacji zagraża możliwe zdarzenie, zwykle połączenie **wpływu**, jeśli do
  niego dojdzie, i **prawdopodobieństwa**, że do niego dojdzie. W banku: jak prawdopodobny jest napad i ile by
  kosztował. W IT: jak prawdopodobne jest, że gang znajdzie i wykorzysta podatność, i co zrobiłby atak.

**Źródło zagrożenia** nie zawsze jest człowiekiem. NIST zalicza tu też zdarzenia, których nikt nie chciał: klęskę
żywiołową, awarię techniczną, ludzki błąd. Zalana serwerownia to też zagrożenie.

W sumie: do ryzyka potrzeba czegoś wartościowego, słabego punktu i kogoś lub czegoś, co może go wykorzystać. Usuń
którekolwiek z nich, a ryzyko spadnie. Tak się je też obniża: aktualizacja usuwa podatność, reguła firewalla utrudnia
do niej dostęp, kopie zapasowe zmniejszają wpływ.

### Jak mierzy się ryzyko

Większość ocen ryzyka ocenia prawdopodobieństwo i wpływ w krótkiej skali i łączy je. Przewodnik NIST używa pięciu
poziomów: bardzo niski, niski, umiarkowany, wysoki i bardzo wysoki. Mniejsze zespoły często używają trzech.

<!-- pic: risk -->

Pułapką na tej liście jest ocena CVSS, liczba od 0 do 10 dołączana do wielu publikowanych podatności. FIRST,
organizacja stojąca za CVSS, mówi to wprost: bazowe oceny CVSS służą do mierzenia **ważności** podatności i nie
powinny być używane same do oceny **ryzyka**. Ryzyko dodaje to, czego ocena nie wie: jak bardzo system jest
wystawiony, ile jest wart i czy atakujący naprawdę wykorzystują podatność. W tym ostatnim pomaga katalog **Known
Exploited Vulnerabilities (KEV)** agencji CISA: zawiera podatności, które już wykorzystano w prawdziwych atakach, a
CISA zachęca organizacje, by brały go pod uwagę, gdy decydują, co naprawić najpierw.

### Co zrobić z ryzykiem

Przy każdym ryzyku ktoś musi zdecydować, co dalej. NIST wymienia pięć reakcji:

| Reakcja | Co oznacza | Przykład |
|---|---|---|
| Zaakceptować | Świadomie z nim żyć i to zapisać | Stary komputer-kiosk bez danych i bez sieci zostaje, jak jest |
| Unikać | Przestać robić to, co tworzy ryzyko | Wyłączyć usługę wystawioną do internetu, z której nikt nie korzysta |
| Ograniczyć | Dodać zabezpieczenia obniżające prawdopodobieństwo lub wpływ | Załatać, dodać MFA odporne na phishing, trzymać kopie zapasowe offline |
| Współdzielić | Podzielić ryzyko z inną stroną | Usługę prowadzi dostawca na podstawie umowy obejmującej bezpieczeństwo |
| Przenieść | Przerzucić część szkody na kogoś innego | Cyberubezpieczenie płaci za odtworzenie |

Zarządzanie ryzykiem, rejestry ryzyk i modelowanie zagrożeń omawia się dokładniej dalej na ścieżce.

## Jak to wygląda w pracy

Oto zmyślona oś czasu z raportu o incydencie w małej firmie. Każdy wiersz dotyczy jednej z idei z tej strony:

```
Made-up incident timeline · EXAMPLE Ltd. · 2026-11-10

09:02  "Invoice overdue" email with a link reaches 40 staff; the filter lets it in
09:05  alex and sam type their passwords into a fake page (sign-in.example)
09:06  alex: sign-in from 203.0.113.50, password OK, MFA push denied
09:07  sam: sign-in from 203.0.113.50, password OK, 6 pushes in 2 min, 6th approved
09:12  New rule in sam's mailbox: forward "payment" mail to billing@mail.example
09:40  sam's account opens the Finance share: invoices only; HR, Payroll: 403
10:05  From sam's account: supplier bank change requested, 2nd approver rejects
10:20  Alert on new forwarding rule: sessions revoked, password reset, rule removed
```

Czytamy od góry:

1. **09:02 i 09:05:** dwie warstwy z dziurami. Filtr przepuścił e-mail „Zaległa faktura” z linkiem, a dwie osoby
   wpisały hasła na fałszywej stronie logowania. Hasła nie są odporne na phishing, więc już samo to dało atakującemu
   oba hasła.
2. **09:06:** warstwa, która wytrzymała. Prośbę push dla alex odrzucono i uwierzytelnianie się nie powiodło.
3. **09:07:** push bombing (ATT&CK T1621). Sześć próśb w dwie minuty i szóstą w końcu zatwierdzono. Z kluczem dostępu
   (passkey) lub sprzętowym kluczem bezpieczeństwa nie byłoby ani prośby push, ani niczego, co fałszywa strona mogłaby
   użyć ponownie.
4. **09:12:** naruszenie poufności. Reguła w skrzynce po cichu przekazuje e-maile o płatnościach na zewnątrz
   (ATT&CK T1114.003). MITRE zaznacza, że takie reguły mogą działać nawet po zresetowaniu hasła, więc usunięcie reguły
   jest tak samo ważne jak reset.
5. **09:40:** zasada najmniejszych uprawnień i autoryzacja w działaniu. Konto użytkownika sam dotarło tylko do faktur, jedynej
   rzeczy, której potrzebuje księgowość, a wszędzie indziej dostało odmowę.
6. **10:05:** rozdzielenie obowiązków chroni integralność. Jedno skradzione konto nie zmieniło, dokąd trafiają
   pieniądze.
7. **10:20:** warstwy Detect i Respond. Dostępności incydent w ogóle nie naruszył.

Lekcja o ryzyku: zagrożenie, czyli grupy phishingowe, wróci. Podatności da się jednak naprawić: zatwierdzanie przez
push i przekazywanie poczty na zewnętrzne adresy. Ryzyko ograniczą MFA odporne na phishing i wyłączenie zewnętrznego
przekazywania, czyli dokładnie to, co proponuje MITRE.

- **Centrum operacji bezpieczeństwa (SOC):** analizujesz alerty takie jak ten o 10:20 i w kilka minut decydujesz,
  która część triady CIA jest zagrożona i jak szybko działać.
- **Reagowanie na incydenty i informatyka śledcza:** odtwarzasz osie czasu takie jak ta, opisujesz wpływ na poufność,
  integralność i dostępność i sprawdzasz, czy zamknięto każdą drogę powrotu, na przykład regułę przekazywania.
- **Ład, ryzyko i zgodność (GRC) oraz audyt:** prowadzisz rejestr ryzyk, przeprowadzasz przeglądy uprawnień,
  mapujesz zabezpieczenia na ramy takie jak NIST CSF 2.0 i zapisujesz, które ryzyka zaakceptowano i kto to zrobił.
- **Zarządzanie tożsamością i dostępem (IAM):** wdrażasz MFA odporne na phishing, projektujesz role według zasady
  najmniejszych uprawnień i oddzielasz konta administratorów od codziennych.
- **Testy penetracyjne i bug bounty:** za zgodą sprawdzasz autoryzację przy każdym żądaniu: zmieniasz ID, wywołujesz
  funkcje administratora jako zwykły użytkownik, próbujesz dostać się do cudzych danych.
- **Architektura i inżynieria bezpieczeństwa:** projektujesz warstwy, które zakrywają nawzajem swoje luki, i
  segmentujesz sieci, żeby jedno skradzione konto nie sięgało wszędzie.
- **Bezpieczne tworzenie oprogramowania:** sprawdzasz autoryzację na serwerze przy każdym żądaniu, domyślnie
  odmawiasz i traktujesz Broken Access Control (OWASP A01) jako pierwszą rzecz, którą trzeba zrobić dobrze.

## Spróbuj samodzielnie

Około dwudziestu minut. Nic tu nie zmienia twojego systemu, poza dwoma małymi plikami tekstowymi, które utworzysz i
usuniesz.

> [!NOTE]
> Nazwy menu i ustawień są tu podane tak, jak pokazują je Windows i macOS po angielsku. Jeśli twój system jest po
> polsku, są w tych samych miejscach, ale przetłumaczone. Same polecenia są takie same.

### Czy jesteś teraz administratorem?

<!-- for: windows -->

Otwórz PowerShell (wpisz `powershell` w menu **Start**) i uruchom:

```powershell
Get-LocalGroupMember -SID S-1-5-32-544
```

Polecenie wyświetla lokalnych administratorów komputera. Odwołuje się do grupy przez jej SID, więc działa w Windowsie
w każdym języku. Czy twoje konto jest na liście?

<!-- for: macos -->

Otwórz **System Settings** (Ustawienia systemowe) > **Users & Groups** i kliknij przycisk informacji (ⓘ) obok swojej
nazwy. Jeśli włączone jest **Allow user to administer this computer**, twoje konto jest kontem administratora.

<!-- for: linux -->

Otwórz terminal i uruchom:

```sh
id
sudo -l
```

W Debianie i Ubuntu członkostwo w grupie `sudo` oznacza, że możesz działać jako root; w Red Hat Enterprise Linux i
podobnych systemach ta grupa nazywa się `wheel`. `sudo -l` może poprosić o hasło, a potem pokaże dokładnie, co
wolno ci uruchamiać.

<!-- /for -->

Jeśli jesteś administratorem, na prywatnym komputerze to normalne: na Macu konto utworzone podczas konfiguracji jest
kontem administratora, a w Ubuntu pierwsze konto należy do grupy sudo. W firmie zasada najmniejszych uprawnień
oznaczałaby, że konto, z którego czytasz pocztę, nie jest kontem administratora. Co mógłby zrobić link phishingowy z
twoim kontem w obecnej postaci?

### Zobacz, jak psuje się integralność

**Skrót** (hash) to krótki odcisk zawartości pliku: zmień jeden znak, a zmieni się cały odcisk. Utwórz malutki plik,
policz jego skrót, zmień jedną cyfrę i policz go jeszcze raz.

<!-- for: windows -->

```powershell
Set-Content note.txt "Pay 100 to Alex"
Get-FileHash note.txt
Set-Content note.txt "Pay 900 to Alex"
Get-FileHash note.txt
Remove-Item note.txt
```

`Get-FileHash` używa SHA-256, chyba że poprosisz o inny algorytm.

<!-- for: macos -->

```sh
echo "Pay 100 to Alex" > note.txt
shasum -a 256 note.txt
echo "Pay 900 to Alex" > note.txt
shasum -a 256 note.txt
rm note.txt
```

<!-- for: linux -->

```sh
echo "Pay 100 to Alex" > note.txt
sha256sum note.txt
echo "Pay 900 to Alex" > note.txt
sha256sum note.txt
rm note.txt
```

<!-- /for -->

W Linuksie i macOS oba wiersze wyglądają tak (w Windowsie skróty są inne, bo PowerShell zapisuje wiersz trochę
inaczej, ale sens jest ten sam):

```
e0b2c4d048c516fcd09ea13cfb7196b588459725dd5a369d8c14cc3c950f7f6a  note.txt
18add157b4bf85c243721273e49bcaa88845692f98e44c41f06201c507b8ae88  note.txt
```

W tekście zmieniła się jedna cyfra; jaka część skrótu się zmieniła? W ten sposób wydawcy oprogramowania pozwalają
sprawdzić, że pobrany plik nie został zmieniony: publikują skrót, a ty porównujesz. Jak działają skróty, wyjaśnia
temat „Podstawy szyfrowania i haszowania” dalej na ścieżce.
<!-- guide: check-hash -->

### Policz warstwy na jednym koncie

Otwórz ustawienia bezpieczeństwa konta, które jest dla ciebie najważniejsze, zwykle głównej poczty. Zapisz, co je
chroni:

1. Jak długie jest hasło i czy używasz go gdzie indziej?
2. Czy jest drugi składnik i jaki: SMS, kod z aplikacji, push, klucz dostępu (passkey) czy sprzętowy klucz
   bezpieczeństwa?
3. Jakie metody odzyskiwania są ustawione? Kto kontroluje zapasowy e-mail albo telefon, często może przejąć konto.
4. Czy usługa powiadamia o nowych logowaniach i czy widać listę zalogowanych urządzeń?

Potem spójrz jeszcze raz na oś czasu powyżej. Które z twoich warstw zatrzymałyby atakującego o 09:07, a które tylko
pomogłyby zauważyć wszystko później?

### Rejestr ryzyk w pięć minut

Na kartce wybierz trzy rzeczy, których utrata najbardziej by cię zabolała: telefon, pocztę, zdjęcia. Dla każdej zapisz
jedno zagrożenie, jedną podatność, prawdopodobieństwo i wpływ (niskie, średnie lub wysokie) oraz jedną reakcję. Na
przykład (zmyślony):

| Zasób | Zagrożenie | Podatność | Prawdopodobieństwo | Wpływ | Reakcja |
|---|---|---|---|---|---|
| Zdjęcia | Telefon skradziony lub rozbity | Jedyna kopia jest w telefonie | Średnie | Wysoki | Ograniczyć: włączyć kopię zapasową |

Które z twoich trzech ryzyk jest najwyższe i jaką reakcję dla niego wybierasz?

## Sprawdź się

Spróbuj odpowiedzieć, zanim rozwiniesz każdą odpowiedź.

<!-- pic: quiz -->

## Dowiedz się więcej

- **[Słownik NIST CSRC](https://csrc.nist.gov/glossary)**: darmowe definicje tysięcy pojęć z bezpieczeństwa, każda z
  publikacją, z której pochodzi. Sprawdź tam dowolne słowo z tej strony. Po angielsku.
- **[OWASP Top 10:2025](https://owasp.org/Top10/2025/0x00_2025-Introduction/)**: najczęstsze poważne ryzyka aplikacji
  webowych, zaczynając od Broken Access Control i Authentication Failures, każde z przykładami i sposobami naprawy.
  Po angielsku.
- **[Saltzer i Schroeder, The Protection of Information in Computer Systems](https://web.mit.edu/saltzer/www/publications/protection/)**:
  artykuł z 1975 roku, z którego pochodzą zasada najmniejszych uprawnień, bezpieczne ustawienia domyślne i pełne
  pośrednictwo, za darmo w sieci. Jego pierwszą część da się przeczytać bez dyplomu z informatyki. Po angielsku.
- **[NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)**: sześć funkcji CSF 2.0 i darmowe krótkie
  przewodniki na start, w tym jeden dla małych firm. Po angielsku.
