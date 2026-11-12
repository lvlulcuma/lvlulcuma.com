---
title: "Trzy dni czy 80? Jak szybko atakowane są nowe podatności"
date: 2026-11-30
topic: research
dek: "Tegoroczne raporty podają, że od ujawnienia podatności do pierwszych ataków mija od minus siedmiu do 80 dni. Żeby znaleźć liczbę, na której warto się oprzeć, liczę każdą podatność z listy atakowanych podatności CISA."
# revisions:          # after publishing, add a line for each change (shown as REV B, C, …)
#   - date: 2026-12-02
#     note: "Fixed a typo in the table"
---

W czwartek, 5 listopada, OpenSSH wydał awaryjną poprawkę dla [\*sshole](/pl/news/incidents/openssh-alpine-sshole/)
— błędu, przez który atakujący mogli dostać się na niektóre serwery z Alpine Linux, wysyłając po prostu za długie hasło.
Niecałe dziewięć godzin po pojawieniu się publicznego wpisu o błędzie serwer-pułapka firmy Previdian, zajmującej się
analizą zagrożeń, zarejestrował pierwszą próbę jego użycia
([The Hacker News](https://thehackernews.com/2026/11/hackers-exploited-openssh-sshole-flaw.html)). Cztery dni później
CISA, amerykańska agencja ds. cyberbezpieczeństwa, dodała go do swojej listy atakowanych podatności.

Ile więc naprawdę jest czasu, gdy podatność staje się publiczna? To zależy, kogo zapytać.

## Trzy raporty, trzy odpowiedzi

<div class="tablewrap">

| Raport | Start | Meta | Odpowiedź |
|---|---|---|---|
| [Rapid7](https://www.rapid7.com/blog/post/tr-q3-2026-threat-update-attackers-exploiting-vulnerabilities-within-3-days/) | Ujawnienie podatności | Pierwsze ataki | 3 dni (średnia) |
| [VulnCheck](https://www.vulncheck.com/blog/state-of-exploitation-1h-2026) | Publikacja CVE | Pierwszy dowód ataków | 80 dni (mediana) |
| [Mandiant](https://www.helpnetsecurity.com/2026/03/24/mandiant-m-trends-2026-report/) | Wydanie poprawki | Pierwsze ataki | −7 dni (średnia) |

</div>

Żaden z nich się nie myli. Liczą różne podatności i włączają stoper w różnych momentach. Październikowy raport Rapid7
bierze pod lupę 43 poważne podatności, które po raz pierwszy zaatakowano od lipca do września. Lipcowy raport VulnCheck
opiera się na własnej liście firmy: jest znacznie dłuższa (495 podatności w pierwszej połowie 2026 roku) i obejmuje też
podatności, których nikt nie ruszał przez miesiące albo lata — to podnosi medianę. Mandiant, należący do Google, włącza
stoper w chwili wydania poprawki. Ataków zaczynających się, zanim poprawka w ogóle istnieje, jest dziś tyle, że jego
średnia za 2025 rok, opublikowana w marcu, spadła poniżej zera.

> [!ASIDE] CVE
> Publiczny identyfikator podatności, np. CVE-2026-123158 dla \*sshole. Dla większości obrońców jego publikacja to
> moment, w którym po raz pierwszy słyszą o podatności.

> [!ASIDE] Mediana
> Wartość środkowa: połowa podatności była szybsza, połowa wolniejsza. W przeciwieństwie do średniej kilka bardzo
> wolnych podatności nie przesunie jej daleko.

## Moje liczenie: 1779 podatności na liście CISA

CISA prowadzi publiczną listę podatności, dla których ma dowody prawdziwych ataków:
[katalog znanych wykorzystywanych podatności](https://www.cisa.gov/known-exploited-vulnerabilities-catalog) (Known
Exploited Vulnerabilities, KEV). Podatność trafia na nią tylko wtedy, gdy ma CVE, gdy są wiarygodne dowody, że ktoś użył
jej do uruchomienia kodu w cudzym systemie bez zgody właściciela, i gdy istnieje poprawka do wgrania.
[Skanowanie i exploity typu proof of concept się nie liczą](https://www.cisa.gov/known-exploited-vulnerabilities).

Do liczenia biorę wszystkie 1779 podatności z listy na dzień 10 listopada. Dla każdej liczę dni od publikacji jej CVE
w [NVD](https://nvd.nist.gov/), amerykańskiej krajowej bazie podatności, do dnia, w którym CISA dodała ją do listy. Oba
zbiory danych są bezpłatne, więc każdy może to powtórzyć.

> [!ASIDE] Dlaczego lista CISA
> Jest publiczna, prowadzona od 2021 roku i przyjmuje tylko podatności z solidnymi dowodami. Dlatego jest krótka:
> VulnCheck naliczył 884 podatności zaatakowane po raz pierwszy w 2025 roku, a CISA dodała 245
> ([VulnCheck](https://www.vulncheck.com/blog/state-of-exploitation-2026)).

Jest też spóźniona. CISA dodaje podatność, gdy ma dowody, a nie w dniu pierwszego ataku, więc do pierwszego ataku
naprawdę mijało tyle czasu, ile w liczbach poniżej, albo mniej. \*sshole próbowano wykorzystać już po dziewięciu
godzinach, a na listę trafił po czterech dniach. Błędy w PHP nazwane [PHP2Shell](/pl/news/2026-w44/) według Amazona
próbowano atakować cztery dni przed poprawką, a na listę trafiły pięć dni po niej
([The Register](https://www.theregister.com/a/5305681)).

Żeby porównywać porównywalne, w tabeli są tylko nowe podatności: te dodane do listy w ciągu roku od ujawnienia. To
większość listy: 83% tegorocznych wpisów. Wiersz 2026 obejmuje dane do 10 listopada.

## Tempo się nie zmieniło. Zmieniła się liczba

<div class="tablewrap">

| Rok | Nowe | W dniu 0 | Do tygodnia | Do miesiąca | Mediana |
|---|---|---|---|---|---|
| 2023 | 141 | 31% | 60% | 73% | 4 dni |
| 2024 | 141 | 28% | 55% | 67% | 6 dni |
| 2025 | 189 | 26% | 51% | 67% | 7 dni |
| 2026 | 244 | 25% | 52% | 73% | 6 dni |

</div>

**Wyścig trwa około tygodnia — i tak jest od 2023 roku.** Od ujawnienia typowej nowej podatności do dowodów ataków
w CISA mija mniej więcej sześć dni. Połowa trafia na listę w ciągu tygodnia. Przez cztery lata danych to tempo nie
wzrosło.

> [!ASIDE] W tym roku szybciej?
> Możliwe. Dla nowych podatności dodanych od stycznia do marca mediana wynosiła 11 dni, a od lipca do września 5 dni.
> Grupy są jednak małe (55 i 91 podatności), więc to tylko wskazówka.

**Co czwarta jest atakowana, zanim o niej usłyszysz.** „W dniu 0” oznacza, że CISA dodała podatność w dniu publikacji
jej CVE albo nawet wcześniej: była już atakowana, gdy większość obrońców dopiero się o niej dowiadywała. W tym roku
w tej grupie przodują Microsoft (18 podatności), Cisco (10) i Google (6). Przed takimi nie chroni żaden termin na
aktualizację.

**Zmieniła się liczba.** Od 1 stycznia do 10 listopada CISA dodała 295 podatności: o 36% więcej niż w tym samym okresie
2025 roku (217) i prawie dwa razy więcej niż w 2024 (154). Sam wrzesień przyniósł 43 — najwięcej w jednym miesiącu od
połowy 2022 roku, gdy CISA wciąż wypełniała swoją nową listę starymi podatnościami. Grupa analizy zagrożeń Google widzi
ten sam skok: [141 atakowanych podatności od stycznia do sierpnia wobec 127 w całym 2025 roku](https://therecord.media/google-vulnerabilities-cyberattacks-ai).

> [!ASIDE] Nowe nazwy na liście
> W 2026 roku na listę trafiły podatności w narzędziach AI (cztery w Langflow, trzy w LiteLLM, a także MLflow i Ray)
> oraz zatrute pakiety dla programistów, które CISA oznacza jako „osadzony złośliwy kod”: eslint-config-prettier,
> Nx Console i Trivy.

## Stare podatności nie idą na emeryturę

Pozostałe 17% tegorocznych wpisów to stare podatności. 41 z nich miało w chwili dodania ponad dwa lata, a 23 — ponad
pięć. W maju na liście pojawiła się CVE-2008-4250, podatność Windows, przez którą od końca 2008 roku rozprzestrzeniał
się robak Conficker. Microsoft
[załatał ją 23 października 2008 roku](https://learn.microsoft.com/en-us/security-updates/securitybulletins/2008/ms08-067),
ponad 17 lat wcześniej. Najstarsza podatność dodana w tym roku to błąd z 2008 roku w oprogramowaniu routerów Cisco; na
listę trafił w lipcu.

CISA nie podaje, kiedy dokładnie zaatakowano każdą starą podatność, tylko że są dowody ataków. Ale podatność z listy to
podatność, którą atakujący umieją wykorzystać. A stare systemy to właśnie te, których nikt nie sprawdza: zapomniany
router, serwer Windows w kącie, który „po prostu działa”.

## Co zrobić z tymi liczbami

Moja praktyczna zasada na podstawie tego liczenia:

1. **Dostępne z internetu i już atakowane** (na liście KEV albo producent pisze, że podatność jest wykorzystywana):
   załataj albo odłącz od sieci w ciągu trzech dni.
2. **Dostępne z internetu, krytyczne, bez ataków:** w ciągu tygodnia. Połowa nowych podatności, które jednak zostają
   zaatakowane, trafia na listę CISA w ciągu siedmiu dni.
3. **Cała reszta:** zwykły comiesięczny cykl aktualizacji plus comiesięczne porównanie wszystkich systemów z listą KEV,
   także tych starych.
4. **Na tę jedną czwartą atakowaną, zanim ktokolwiek o niej usłyszy,** żaden termin nie pomoże. Usuń z otwartego
   internetu wszystko, co się da (panele administracyjne, zdalny dostęp), i prowadź logi, żeby później sprawdzić, czy
   nikt nie dostał się do środka.

Trzy dni to także to, czego CISA wymaga teraz od amerykańskich agencji federalnych. W czerwcu agencja zastąpiła stare
zasady aktualizacji nową dyrektywą [BOD 26-04](https://cyberscoop.com/cisa-vulnerability-remediation-directive-bod-26-04/).
Najkrótszy termin, trzy dni, dyrektywa zostawia na najgorszy przypadek: podatność jest już atakowana, atak da się
zautomatyzować, daje co najmniej częściową kontrolę nad systemem, a sam system jest dostępny z internetu. CISA tłumaczy,
że AI pomaga zarówno badaczom, jak i atakującym znajdować nowe podatności znacznie szybciej. Zmianę widać też na samej
liście: w 2025 roku prawie każdy wpis miał termin 21 dni, a od czerwca trzy na cztery nowe wpisy mają trzy dni.

Nagłówki dalej będą się spierać. Gdy następny ogłosi „atakowane w ciągu X dni”, najpierw zapytaj, kiedy włączono stoper.
