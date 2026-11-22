---
# Roadmap topic. Its title and summary show on every job page that lists "forensic-fundamentals" in learn.yml.
# The text under the dashes is the topic's own page: lvlulcuma.com/pl/roadmap/topics/forensic-fundamentals/
# How these pages are written: docs/claude/roadmap-topic.md
title: "Jak działa informatyka śledcza"
summary: "Etapy, przez które przechodzi każda sprawa (zabezpieczenie, badanie, analiza, raport, jak w NIST SP 800-86), praca wyłącznie na zweryfikowanych kopiach, nigdy na oryginale, liczenie hashy wszystkiego, notatki prowadzone na bieżąco, dokumentowanie tak, by inny ekspert uzyskał ten sam wynik, oraz różnica między tym, czego artefakt dowodzi, a tym, co jedynie sugeruje."
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
      - where: "1. Zabezpieczenie"
        steps: ["Znaleźć źródła", "Oznaczyć je i opisać", "Pozyskać dane, niczego nie zmieniając"]
      - where: "2. Badanie"
        steps: ["Przetworzyć kopię narzędziami i ręcznie", "Wydobyć ważne dane"]
      - where: "3. Analiza"
        steps: ["Połączyć elementy", "Odpowiedzieć na pytania sprawy"]
      - where: "4. Raport"
        steps: ["Napisać, co znaleziono i jak", "Napisać, czego to dowodzi, a czego nie"]
    caption: "Najpierw zabezpieczenie, analiza później. Notatki i łańcuch dowodowy biegną przez wszystkie cztery etapy, nie tylko przez ostatni."
  # The original, the evidence image and the working copy.
  copies:
    kind: cards
    layout: rows
    cards:
      - title: "Oryginał"
        text: "Laptop, telefon czy dysk w stanie, w jakim go znaleziono. Zapieczętowany, oznaczony i w magazynie. Dotykany jak najmniej, a każde dotknięcie jest zapisane."
        tags: ["zapieczętowana torba", "formularz łańcucha dowodowego"]
      - title: "Obraz dowodowy"
        text: "Kopia bit po bicie, wykonana przez bloker zapisu. Jej hash musi się zgadzać z hashem oryginału. Przechowywana jako wzorzec, nigdy się na niej nie pracuje."
        tags: ["hash przy pozyskaniu", "hash weryfikacyjny", "tylko do odczytu"]
      - title: "Kopia robocza"
        text: "Kopia obrazu, sprawdzona tym samym hashem. To ją otwierasz w narzędziach. Jeśli coś pójdzie źle, robisz nową z obrazu."
        tags: ["tej dotykają narzędzia", "można ją wyrzucić"]
    caption: "Dwie kopie, nie jedna: analiza zmienia dane (choćby czasy dostępu), więc nawet na obrazie nie pracuje się bezpośrednio."
  # Common hash algorithms and where they stand.
  hashes:
    kind: window
    title: "Algorytmy hashujące, które spotkasz"
    head: ["Algorytm", "Rozmiar i czy można na nim polegać"]
    rows:
      - ["MD5", "128 bitów, 32 znaki szesnastkowe. Kolizję da się celowo wytworzyć w około minutę: nie polegaj tylko na nim"]
      - ["SHA-1", "160 bitów, 40 znaków szesnastkowych. Słaby wobec kolizji; NIST wycofuje go do 31 grudnia 2030 roku"]
      - ["SHA-256", "256 bitów, 64 znaki szesnastkowe. Obecny wybór i domyślny algorytm PowerShella"]
      - ["SHA-512", "512 bitów, 128 znaków szesnastkowych. Też aktualny; dłuższy do przepisania w raporcie"]
    mark: 3
    caption: "Starsze raporty i narzędzia wciąż pokazują MD5 albo SHA-1, często obok SHA-256. Jeśli wybierasz ty, wybierz SHA-256."
  # A made-up acquisition record that verifies an image.
  verify:
    kind: window
    title: "Protokół pozyskania (zmyślony)"
    lead: ["Sprawa 2026-117", "Dysk laptopa, dowód A1093-01"]
    head: ["Pole", "Wartość"]
    rows:
      - ["Źródło", "Dysk 512 GB, przez bloker zapisu WB-02"]
      - ["Obraz", "A1093-01.raw, zapisany w magazynie laboratorium"]
      - ["Algorytm", "SHA-256"]
      - ["Hash przy pozyskaniu", "5e77f720…71e273ba (liczony podczas odczytu dysku)"]
      - ["Hash weryfikacyjny", "5e77f720…71e273ba (policzony ponownie z gotowego obrazu)"]
      - ["Wynik", "Zgodność: obraz jest identyczny z dyskiem"]
    mark: 6
    caption: "W protokole zapisuje się pełny hash; skrót jest tu tylko na potrzeby rysunku. Jeśli hashe się nie zgadzają, obrazu nie używa się, dopóki nie wiadomo dlaczego."
  # A made-up chain of custody form.
  custody:
    kind: window
    title: "Łańcuch dowodowy: dowód A1093 (zmyślony)"
    head: ["Kiedy (UTC)", "Kto komu przekazał i po co"]
    rows:
      - ["2026-11-02 18:40", "Zabezpieczony w biurze przez funkcjonariusza K. Torba A1093 zapieczętowana"]
      - ["2026-11-03 08:55", "K. do magazynu dowodów, pracownik M. Plomba nienaruszona"]
      - ["2026-11-03 09:12", "Magazyn do biegłego J. Doe, w celu wykonania obrazu. Plomba nienaruszona"]
      - ["2026-11-03 12:05", "J. Doe z powrotem do magazynu. Ponownie zapieczętowany w torbie A1094"]
    mark: 4
    caption: "Nowa plomba dostaje nowy numer, a formularz mówi, dlaczego się zmieniła. Luka na tej liście to pytanie, które zada obrońca."
  # One finding at three levels: what it shows, suggests and doesn't show.
  proves:
    kind: cards
    layout: rows
    cards:
      - title: "invoice_final.pdf leży w C:\\Users\\alex\\Downloads"
        text: "Pokazuje: plik o tej zawartości był w tym folderze konta alex. Sugeruje: pobrano go, gdy ktoś korzystał z tego konta. Nie pokazuje: kto siedział przy klawiaturze."
        tags: ["poziom źródła", "sprawdź: historię przeglądarki, logowania"]
      - title: "Ostatni zapis 2026-10-28 16:02:11 UTC"
        text: "Pokazuje: system plików zapisał ten czas. Sugeruje: plik zapisano właśnie wtedy. Nie pokazuje: że zegar chodził dobrze ani że żaden program nie zmienił czasu."
        tags: ["sprawdź: odchylenie zegara", "sprawdź: inne znaczniki czasu"]
      - title: "Hash pliku jest na liście NSRL"
        text: "Pokazuje: plik jest identyczny z plikiem ze znanego, opublikowanego oprogramowania. Sugeruje: trafił tam razem z zainstalowanym programem, więc można go odłożyć. Nie pokazuje: że jest nieszkodliwy."
        tags: ["na liście są też narzędzia hakerskie"]
    caption: "Każdy krok od „pokazuje” do „sugeruje” to wnioskowanie. Tak je zapisuj i szukaj tego, co by je potwierdziło albo wykluczyło."
  # Questions to check yourself.
  quiz:
    kind: questions
    items:
      - q: "Wymień po kolei cztery etapy NIST SP 800-86 i jedną rzecz, która dzieje się na każdym z nich."
        a: "Zabezpieczenie: znaleźć, oznaczyć i pozyskać dane, niczego nie zmieniając. Badanie: przetworzyć kopię, by wydobyć to, co ważne. Analiza: połączyć to w całość i odpowiedzieć na pytania sprawy. Raport: napisać, co znaleziono, w jaki sposób, i czego to dowodzi, a czego nie."
      - q: "Wykonano obraz dysku i jego hash zgadza się z hashem dysku. Po co jeszcze druga kopia do pracy?"
        a: "Analiza zmienia dane: otwieranie plików może aktualizować czasy dostępu, a narzędzie może się zawiesić albo coś omyłkowo zapisać. Zweryfikowany obraz zostaje nietknięty jako wzorzec, więc zawsze można zrobić świeżą kopię roboczą i udowodnić, że się zgadza."
      - q: "Hash przy pozyskaniu i hash weryfikacyjny obrazu się nie zgadzają. Co robisz?"
        a: "Nie używasz obrazu. Zapisujesz rozbieżność w notatkach, szukasz przyczyny (błąd odczytu, psujący się dysk, niewłaściwy plik) i wykonujesz obraz ponownie. Na SSD sam dysk mógł między dwoma odczytami usunąć dane oznaczone jako niepotrzebne (TRIM); jeśli to przyczyna, wyjaśnij to w protokole."
      - q: "Kolega mówi, że MD5 jest złamany, więc hashe ze starej sprawy są bezwartościowe. Ma rację?"
        a: "Nie do końca. Słabość MD5 polega na tym, że da się celowo wytworzyć dwa różne wejścia o tym samym hashu. Nadal pokazuje, że kopia nie została zmieniona przypadkiem. Ale zgodny MD5 to słabszy dowód niż SHA-256 wobec zarzutu celowego fałszerstwa, dlatego nowa praca używa SHA-256."
      - q: "Co powinno się znaleźć w dobrej notatce prowadzonej na bieżąco?"
        a: "Czas z podaną strefą czasową (najprościej UTC), co zrobiono, jakim narzędziem i w jakiej wersji, co to pokazało (hash, liczbę, ścieżkę) i wszystko, co było zaskakujące. Zapisuje się to od razu, nie z pamięci później."
      - q: "Co znaczy, że inny biegły ma uzyskać ten sam wynik, i co to umożliwia?"
        a: "Ktoś inny, zaczynając od tego samego obrazu, może powtórzyć twoje kroki i dojść do tych samych ustaleń. Do tego w notatkach potrzebne są hash obrazu, narzędzia i ich wersje, ustawienia, dokładne kroki i strefa czasowa, której użyto."
      - q: "Czas ostatniego zapisu pliku to 03:14 w niedzielę. Czy można napisać, że podejrzany zapisał go o 03:14 w niedzielę?"
        a: "Nie. Znacznik czasu pokazuje, co zapisał system plików. Zegar komputera mógł się mylić albo zostać celowo przestawiony, program mógł zmienić czas, a sam znacznik nie mówi, kto korzystał z komputera. Porównaj zegar ze wzorcem i poszukaj innych śladów, zanim napiszesz cokolwiek o człowieku."
      - q: "Na laptopie jest narzędzie hakerskie. Podaj dwa inne wyjaśnienia, które trzeba sprawdzić, zanim napiszesz, że właściciel go używał."
        a: "Mogło nigdy nie zostać uruchomione (tylko pobrane albo rozpakowane), może należeć do innego użytkownika albo trafić tam ze złośliwym oprogramowaniem, może być częścią legalnej pracy właściciela w bezpieczeństwie albo zostało podrzucone. Szukaj śladów jego uruchomienia i tego, kto je uruchomił."
---

## Krótko

Pomyśl o badaniu krwi w szpitalnym laboratorium.

- Pielęgniarka pobiera próbkę i opisuje probówkę twoim nazwiskiem i godziną: to **zabezpieczenie**.
- Laboratorium bada część próbki, a resztę przechowuje, by badanie dało się powtórzyć: **praca na kopii, nigdy na
  oryginale**.
- Plomba na probówce pokazuje, że po drodze nikt jej nie otworzył: w informatyce śledczej taką plombą jest **hash**.
- Każdy, przez czyje ręce przechodzi probówka, kwituje jej odbiór: to **łańcuch dowodowy** (chain of custody).
- Laboratorium zapisuje każdy krok i urządzenie, którego użyło, by inne laboratorium mogło powtórzyć badanie i
  uzyskać ten sam wynik: **notatki i odtwarzalność**.
- Wynik mówi, co jest w próbce. Nie mówi, jak się tam znalazło. To granica między tym, czego dowód **dowodzi**, a tym,
  co jedynie **sugeruje**.

<mark>Informatyka śledcza to staranna praca, którą da się sprawdzić. Zabezpieczasz dane, niczego nie zmieniając,
pracujesz wyłącznie na zweryfikowanych kopiach, hashami dowodzisz, że nic się nie zmieniło, zapisujesz każdy krok w
chwili, gdy go wykonujesz, i w raporcie piszesz tylko to, co dowody naprawdę pokazują.</mark> To te nawyki odróżniają
ustalenie, które wytrzymuje sprawdzenie, od domysłu ze zrzutami ekranu.

Po lekturze tej strony będziesz umieć:

- wymienić cztery etapy, przez które przechodzi każda sprawa, i powiedzieć, co dzieje się na każdym;
- wyjaśnić, dlaczego biegli nigdy nie pracują na oryginale i co zrobić, gdy nie da się tego uniknąć;
- policzyć hash pliku, porównać dwa hashe i wybrać właściwy algorytm;
- prowadzić notatki i łańcuch dowodowy tak, by były zrozumiałe nawet po latach;
- powiedzieć, czego inny biegły potrzebuje, by powtórzyć twoją pracę i uzyskać ten sam wynik;
- odróżnić to, co artefakt pokazuje, od tego, co jedynie sugeruje, i odpowiednio sformułować ustalenie.

## Słowa, które się przydadzą

- **Dowód cyfrowy:** informacja zapisana lub przesłana w postaci cyfrowej, która może mieć znaczenie dla sprawy:
  pliki, logi, wiadomości, zawartość pamięci, metadane.
- **Oryginał:** urządzenie lub nośnik w stanie, w jakim go znaleziono.
- **Obraz:** kopia dysku lub innego nośnika bit po bicie, z każdym bajtem, łącznie z usuniętymi danymi i wolnym
  miejscem.
- **Hash:** krótki „odcisk” obliczony z danych. Zmień jeden bit danych, a hash zmieni się całkowicie.
- **Artefakt:** ślad, który komputer zostawia podczas zwykłej pracy, np. znacznik czasu, wiersz logu czy lista
  ostatnio otwieranych plików. NIST opisuje artefakty jako powstające podczas rutynowego działania urządzenia.
- **Łańcuch dowodowy:** zapis tego, kto miał dowody, kiedy i dlaczego przechodziły z rąk do rąk.
- **Bloker zapisu:** urządzenie lub program, który pozwala komputerowi czytać dysk, ale nie pozwala na nim zapisywać.
- **UTC:** uniwersalny czas koordynowany, jeden zegar dla całego świata. Notatki w UTC nie zależą od tego, gdzie jesteś ty
  ani gdzie był komputer.

> [!NOTE]
> Informatyka śledcza służy policji i sądom, ale też firmom, które wyjaśniają włamanie albo działania pracownika.
> Kroki są te same; różni się tylko to, ile dowodów potrzeba do decyzji. Prowadź każdą sprawę tak, jakby mogła
> trafić do sądu.

## Cztery etapy sprawy

W 2006 roku NIST opublikował [SP 800-86](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-86.pdf),
przewodnik po informatyce śledczej w reagowaniu na incydenty. Dzieli on każdą sprawę na cztery etapy. Pisze z
perspektywy IT, nie organów ścigania, ale etapy pasują do obu.

<!-- pic: phases -->

### 1. Zabezpieczenie

Rozpoznanie, oznaczenie, opisanie i pozyskanie danych z miejsc, w których mogą się znajdować. Ustalasz, gdzie są
dowody (laptop, telefon, logi serwera, konto w chmurze), zapisujesz, co znaleziono i w jakim stanie, i kopiujesz dane,
niczego nie zmieniając. Część danych znika, gdy komputer zostanie wyłączony, więc zabezpieczenie idzie w określonej
kolejności: najpierw to, co najbardziej ulotne. RFC 3227, przewodnik z 2002 roku o zabezpieczaniu dowodów, zaczyna
swoją listę od rejestrów i pamięci podręcznej procesora, potem pamięć i działające procesy, potem tymczasowe systemy
plików, potem dysk, a kończy na nośnikach archiwalnych. Jak zabezpieczać w tej kolejności — to osobny temat, dalej na
ścieżce.

### 2. Badanie

Przetwarzanie zebranych danych połączeniem metod automatycznych i ręcznych, by wydobyć to, co istotne. Narzędzie
śledcze czyta obraz, odzyskuje usunięte pliki, wypisuje każdy plik z jego znacznikami czasu i odfiltrowuje pliki,
które ma każda kopia Windows. Ty sprawdzasz, co znalazło narzędzie, i zaglądasz tam, gdzie ono nie zagląda.

### 3. Analiza

Analiza wyników badania, by odpowiedzieć na pytania sprawy, metodami i technikami, które da się uzasadnić prawnie.
Kto korzystał z tego konta? Kiedy skopiowano plik? Dokąd poszły pieniądze? W analizie fakty z różnych miejsc kładzie
się obok siebie, często na osi czasu.

### 4. Raport

Raport z wyników analizy, który może zawierać opis wykonanych czynności. SP 800-86 dodaje zasadę wartą zapamiętania:
gdy zdarzenie ma dwa lub więcej wiarygodnych wyjaśnień, każde z nich zasługuje w raporcie na należytą uwagę.

### Inne nazwy tej samej idei

Spotkasz też inne podziały sprawy. Obejmują to samo:

| Źródło | Jego etapy |
|---|---|
| NIST SP 800-86 (2006) | Zabezpieczenie, badanie, analiza, raport |
| ACPO Good Practice Guide for Digital Evidence, brytyjska policja (wersja 5, 2012) | Planowanie, pozyskanie, analiza, prezentacja |
| ISO/IEC 27037:2012 | Identyfikacja, zebranie, pozyskanie, zabezpieczenie (jak obchodzić się z dowodami) |
| ISO/IEC 27042:2015 | Analiza i interpretacja (co z nimi robić później) |

> [!TIP]
> RFC 3227 streszcza kolejność w jednym zdaniu: gdy trzeba wybierać między zabezpieczeniem a analizą, najpierw
> zabezpieczaj, analizuj później. Niezabezpieczone dane przepadną; analiza może poczekać.

## Nigdy nie pracuj na oryginale

Niemal każda czynność na urządzeniu może coś na nim zmienić. Otwarcie pliku może zaktualizować czas ostatniego
dostępu, a RFC 3227 ostrzega, że zwykłe narzędzia, takie jak `tar` czy `xcopy`, zmieniają czas dostępu każdego pliku,
którego dotkną. Jeśli oryginał się zmienił, nikt nie powie na pewno, co zawierał przed twoją ingerencją.

Dlatego pierwsza zasada przewodnika brytyjskiej policji (ACPO) mówi, że żadna czynność śledczych nie powinna zmieniać
danych, na których może się później opierać sąd. RFC 3227 mówi to samo w praktyce: wykonaj kopię nośnika bit po bicie,
a do analizy zrób kopię tej kopii, bo analiza niemal na pewno zmieni czasy dostępu do plików. NIST SP 800-86 zalicza
badanie wyłącznie kopii do utrzymania łańcucha dowodowego.

<!-- pic: copies -->

### Blokery zapisu

Żeby skopiować dysk bez zapisywania na nim, biegli podłączają go przez **bloker zapisu**: urządzenie między dyskiem a
komputerem, które przepuszcza polecenia odczytu i blokuje wszystko, co mogłoby zmienić dysk. Bywają też blokery
programowe zamiast sprzętowych. Program NIST do testowania narzędzi śledczych (CFTT) publikuje wymagania dla obu
rodzajów i sprawdza produkty pod ich kątem, bo bloker, który przepuści choć jedno polecenie zapisu, traci sens. Jak
wykonać obraz krok po kroku — w temacie o obrazach dowodowych, dalej na ścieżce.

### Gdy nie da się nie dotknąć oryginału

Czasem nie ma innej drogi. Włączony komputer trzyma część danych tylko w pamięci: otwarte czaty, klucze
odszyfrowujące, połączenia sieciowe. Żeby zrzucić pamięć, trzeba pracować na działającej maszynie, a to ją zmienia.
Przewodnik ACPO na to pozwala, gdy jest to konieczne, pod dwoma warunkami: osoba, która to robi, musi mieć
kompetencje i musi umieć wyjaśnić przed sądem, co zrobiła i dlaczego. Rada dla działających systemów: pamięć zrzucaj
najpierw, bo uruchomienie wcześniej innych narzędzi może ją częściowo nadpisać, a wynik zapisuj gdzie indziej niż na
oryginalny dysk.

> [!WARNING]
> „Trzeba było to zmienić” jest do przyjęcia tylko wtedy, gdy notatki dokładnie mówią, co zmieniono, kiedy, jakim
> narzędziem i dlaczego było warto. Nieudokumentowana zmiana oryginału to błąd, po którym sprawa się nie podnosi.

## Hashuj wszystko

**Hash** to „odcisk” o stałej długości, obliczony z danych dowolnego rozmiaru. Standard bezpiecznego hashowania NIST
FIPS 180-4 opisuje najważniejszą właściwość: zmień dane w jakikolwiek sposób, a z bardzo dużym prawdopodobieństwem
zmieni się też hash. Jeśli więc hash twojej kopii jest równy hashowi oryginału, kopia jest identyczna, bit po bicie.
Zasada jest ta sama, czy hashujesz jeden mały plik, czy cały dysk 2 TB.

Hashe zapisuje się znakami szesnastkowymi, więc można je porównać na oko, a lepiej — zostawić to programowi.

<!-- pic: hashes -->

### MD5 i SHA-1: wciąż obecne, ale już nie wystarczą

**Kolizja** to dwa różne wejścia o tym samym hashu. Dla MD5 kolizje da się wytworzyć celowo: RFC 6151 (2011) opisuje
ataki, które znajdują kolizję w około minutę na zwykłym laptopie, i stwierdza, że MD5 nie jest już akceptowalny tam,
gdzie potrzebna jest odporność na kolizje. SHA-1 też jest słabszy, niż zakładano, a NIST planuje przestać go używać we
wszystkich zastosowaniach do 31 grudnia 2030 roku.

Kolizję trzeba zbudować celowo; nie sprawia ona, że uczciwa kopia przypadkiem zgodzi się ze zmienioną. Dlatego MD5 i
SHA-1 wciąż pojawiają się w starszych raportach i narzędziach, często obok SHA-256. We własnej pracy używaj SHA-256:
jest aktualny, powszechnie obsługiwany, a `Get-FileHash` w PowerShellu używa go domyślnie.

### Do czego służą hashe

- **Żeby udowodnić, że kopia jest identyczna.** Narzędzie do obrazowania liczy **hash przy pozyskaniu**, czytając
  dysk. Potem liczysz **hash weryfikacyjny** z gotowego obrazu. Muszą się zgadzać. NIST SP 800-86 opisuje dokładnie
  to: oblicz skrót oryginału i kopii, a potem je porównaj.
- **Żeby udowodnić, że od tamtej pory nic się nie zmieniło.** Policz hash obrazu ponownie przed zeznaniami w sądzie,
  kilka miesięcy później. Ten sam hash, te same dane.
- **Żeby szybko znaleźć albo odrzucić pliki.** Krajowa Biblioteka Referencyjna Oprogramowania NIST (NSRL) publikuje
  hashe plików ze znanego oprogramowania i aktualizuje je co trzy miesiące. W śledztwach służy głównie do odłożenia
  tysięcy plików systemu operacyjnego i programów, do których nikt nie musi zaglądać.
- **Żeby dokładnie wskazać, o który plik chodzi.** Raport, który nazywa plik jego hashem, nie zostawia wątpliwości,
  o jaki plik chodziło.

<!-- pic: verify -->

> [!NOTE]
> Hash obejmuje tylko zawartość, nie nazwę pliku ani jego znaczniki czasu. Zmień nazwę pliku, a hash zostanie ten
> sam. Skopiuj go, a kopia będzie miała ten sam hash, ale inne znaczniki czasu. Zobaczysz to poniżej na własne oczy.

> [!ASIDE] Gdy dwa uczciwe hashe się różnią
> W przeglądzie informatyki śledczej NIST z 2022 roku jest przypadek, w którym ponowny obraz SSD daje inny hash:
> oprogramowanie dysku może między dwoma odczytami usunąć dane wskazane mu jako niepotrzebne (TRIM). Nikt niczego nie
> sfałszował, ale protokół musi to wyjaśnić.

Jak sprawdzić hash pobranego pliku krok po kroku — ta sama umiejętność w małej skali:
<!-- guide: check-hash -->

## Prowadź notatki na bieżąco

Notatki pisane w trakcie pracy pozwalają odpowiadać na pytania o sprawę po latach. RFC 3227 wymienia, co powinno się
w nich znaleźć: daty i godziny, a przy każdej godzinie informacja, czy to UTC, czy czas lokalny; automatyczny zapis
poleceń, gdzie to możliwe, zapisany poza nośnikiem, który jest dowodem; notatki i wydruki podpisane i opatrzone datą.
Każe też zapisać różnicę między zegarem komputera a rzeczywistym czasem, bo zależy od niej każdy znacznik czasu z
tego komputera.

Przewodnik ACPO wymaga pełnego zapisu wszystkich czynności i zaznacza, że te zapisy udostępnia się obronie. Pisz każdą
notatkę tak, jakby miała ją czytać druga strona, bo może.

Dobra linijka notatek odpowiada na pięć pytań: kiedy (ze strefą czasową), co zrobiono, jakim narzędziem i w jakiej
wersji, co to pokazało i co było nieoczekiwane. Oddzielaj obserwacje od interpretacji: „plik był w Downloads” to
obserwacja; „użytkownik go pobrał” to interpretacja i jej miejsce jest w analizie, razem z uzasadnieniem.

### Łańcuch dowodowy

NIST definiuje łańcuch dowodowy jako proces śledzący dowody przez zabezpieczenie, przechowywanie i analizę, który
dokumentuje każdą osobę mającą z nimi styczność, datę i godzinę pozyskania lub przekazania oraz cel każdego
przekazania. RFC 3227 dodaje, gdzie dowody znaleziono i jak je przechowywano. Formularz podróżuje razem z dowodem, a
każde przekazanie dopisuje linijkę.

<!-- pic: custody -->

Przerwany łańcuch nie zawsze sprawia, że dowód jest bezużyteczny, ale daje drugiej stronie pytanie: co się z nim
działo w czasie luki? Najłatwiej wygrać ten spór, nigdy do niego nie dopuszczając.

## Dokumentuj tak, by ktoś inny uzyskał ten sam wynik

Trzecia zasada ACPO mówi, że trzeba tworzyć i przechowywać zapis wszystkich czynności wykonanych na dowodach
cyfrowych, a niezależna strona trzecia powinna móc je sprawdzić i uzyskać ten sam wynik. NIST SP 800-86 mówi to samo:
zapis każdego kroku pozwala innym analitykom powtórzyć proces później. ISO/IEC 27042, norma o analizie i
interpretacji, opiera się na tych samych ideach: ciągłości, wiarygodności, powtarzalności i odtwarzalności.

Prosto mówiąc: **powtarzalność** to uzyskanie tego samego wyniku, gdy zrobisz to jeszcze raz; **odtwarzalność** to
uzyskanie go przez kogoś innego, w jego własnym środowisku. Żeby to było możliwe, w notatkach potrzebne są:

- hash obrazu, na którym pracowano, by zacząć od tych samych danych;
- każde narzędzie z dokładną wersją i ustawienia, które zmieniono;
- dokładne kroki albo same polecenia;
- strefa czasowa, w której pokazywano czas;
- czego szukano i czego nie znaleziono, a nie tylko co znaleziono.

Narzędzia też się mylą. Przegląd dziedziny NIST z 2022 roku stwierdza, że badanie dowodów cyfrowych stoi na solidnym
fundamencie informatyki. Zarazem odnotowuje, że większość z ponad 250 przetestowanych dotąd narzędzi robi, co do nich
należy, z jedynie drobnymi anomaliami, a dokumentacja producentów bywa niepełna, nieaktualna lub błędna. Błędy w pracy
cyfrowej są raczej systematyczne niż losowe: narzędzie, które źle czyta jakiś format, czyta go źle za każdym razem.
Dlatego biegli sprawdzają narzędzia na danych o znanej zawartości, takich jak obrazy referencyjne NIST CFReDS, a ważne
ustalenie potwierdzają drugim narzędziem albo odczytem surowych danych.

## Czego artefakt dowodzi, a co jedynie sugeruje

Samego zdarzenia nigdy nie widzisz. Widzisz ślady, które zostawiło: plik, wiersz logu, znacznik czasu. Droga od śladu
z powrotem do zdarzenia to wnioskowanie, a wnioskowanie bywa błędne.

Przegląd NIST z 2022 roku opisuje ustalenia na trzech poziomach. **Źródło:** te dane pochodzą z tego urządzenia lub
konta. **Czynność:** coś się wydarzyło, np. otwarto plik albo wysłano wiadomość. **Przestępstwo:** zrobił to
człowiek, celowo. Dwa pierwsze poziomy to twoja praca. O trzecim, jak zaznacza przegląd, rozstrzyga sąd.

<!-- pic: proves -->

Znaczniki czasu wymagają szczególnej ostrożności:

- **Zegar może się mylić.** Czas jest tak dokładny jak zegar, który go zapisał, a NIST zaznacza, że użytkownik może
  przestawić zegar, by wprowadzić śledczego w błąd. Porównaj zegar komputera ze wzorcem i zapisz różnicę.
- **Strefa czasowa może być niejasna.** „01:35” niewiele znaczy bez niej. W Windows system plików NTFS przechowuje
  czas w UTC, a starszy FAT czas lokalny, więc ta sama chwila na dwóch dyskach może wyglądać inaczej.
- **Dokładność bywa różna.** W FAT czas zapisu jest przechowywany z dokładnością do 2 sekund, a czas dostępu tylko do
  dnia. NTFS opóźnia aktualizację czasu ostatniego dostępu nawet o godzinę.
- **Czas można zmienić.** Windows pozwala programom ustawić czas utworzenia, dostępu i zapisu pliku bez dotykania jego
  zawartości. Znacznik czasu pokazuje, co zapisał system plików, a niekoniecznie, kiedy coś się stało.

### Słowa dopasowane do dowodów

Eoghan Casey pisał w 2002 roku, że każdy dowód cyfrowy niesie pewną niepewność, a biegły powinien umieć opisać, jak
dużą. W praktyce widać to w doborze słów:

| Co możesz napisać | Kiedy |
|---|---|
| „Dowody pokazują…” | Mówią to same dane i to sprawdzono |
| „Jest to zgodne z…” | Pasuje, ale inne wyjaśnienia pozostają |
| „Nie znaleziono śladów…” | Szukano, napisano gdzie, i nic nie znaleziono (to nie to samo co „tego nie było”) |
| „Nie udało się ustalić…” | Dane nie odpowiadają na pytanie |

Zanim napiszesz wniosek, wypisz inne wyjaśnienia i poszukaj tego, co potwierdziłoby albo wykluczyło każde z nich.
NIST SP 800-86 wymaga właśnie tego: próbować udowodnić lub obalić każde zaproponowane wyjaśnienie. Jak to wszystko
spisać — w temacie o raporcie z badań, dalej na ścieżce.

## Jak to wygląda w pracy

Oto zmyślone notatki biegłego z pierwszego dnia sprawy. Każda linijka korzysta z idei z tej strony:

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

Czytajmy od góry:

1. **09:12 i 12:05:** łańcuch dowodowy. Plomba była nienaruszona, gdy torba dotarła, nowa plomba ma nowy numer, a
   formularz to odnotowuje.
2. **09:20:** laptop był wyłączony i takim pozostał. Włączenie zmieniłoby dysk.
3. **09:41–11:59:** zabezpieczenie bez zmian. Bloker zapisu, a potem dwa zgodne hashe.
4. **12:05:** kopia robocza, by obraz pozostał nietknięty.
5. **14:30:** obserwacja, nie wniosek. Mówi, gdzie jest plik i co zapisał system plików, nic o tym, kto.
6. **14:35:** zegar. Jeśli zegar spieszył się o 3 min 10 s, to 16:02:11 na laptopie to około 15:59:01 czasu
   rzeczywistego. Każda oś czasu, która zestawia ten laptop z serwerem poczty, potrzebuje tej poprawki.

- **Analitycy informatyki śledczej** przechodzą te kroki z każdym urządzeniem, każdego dnia, i bronią ich w raportach
  i w sądzie.
- **Specjaliści reagowania na incydenty** zabezpieczają dowody w trakcie ataku, często z działających systemów, i
  muszą zapisywać, co zmieniły ich działania.
- **Śledczy od cyberprzestępczości** opierają się na łańcuchu dowodowym i ostrożnych sformułowaniach, bo ich sprawy
  kończą się w sądzie.
- **Zespoły eDiscovery i prawnicy** hashują i śledzą miliony plików, by obie strony miały pewność, że patrzą na te
  same dokumenty.
- **Analitycy SOC** często są na miejscu pierwsi. Wiedza, czego nie dotykać, i notatki z własnych działań chronią
  śledztwo, które nastąpi później.

## Spróbuj samodzielnie

Około piętnastu minut. Wcielisz się w biegłego z maleńkim plikiem-„dowodem”: policzysz jego hash, skopiujesz go,
sprawdzisz kopię i zobaczysz, czego hash dowodzi, a czego nie. Na komputerze nic się nie zmieni poza dwoma małymi
plikami, które usuniesz na końcu.

> [!NOTE]
> Nazwy pól, które wypisują polecenia (np. **Access** czy **Modify**), są podane tak, jak pokazuje je system po
> angielsku. Jeśli twój system jest po polsku, mogą być przetłumaczone. Same polecenia są takie same.

<!-- for: windows -->

Otwórz PowerShell i uruchom te polecenia po kolei:

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

`Get-FileHash` używa SHA-256, jeśli nie poprosisz o inny algorytm. Właściwości z `Utc` pokazują czas w UTC, tak jak
zapisuje się go w notatkach.

<!-- for: macos -->

Otwórz Terminal i uruchom te polecenia po kolei:

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

`shasum` używa SHA-1, jeśli nie poprosisz o inny algorytm, więc `-a 256` ma znaczenie. `stat -x` pokazuje czasy
każdego pliku (w czasie lokalnym) w wierszach **Access**, **Modify** i **Change**.

<!-- for: linux -->

Otwórz terminal i uruchom te polecenia po kolei:

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

`stat` pokazuje czasy każdego pliku w wierszach **Access**, **Modify**, **Change** oraz, w systemach plików, które go
zapisują, **Birth**.

<!-- /for -->

Na co zwrócić uwagę:

1. **Oba hashe są identyczne.** Na macOS i Linuksie oba wiersze to
   `5e77f720749d73090ce319bda7bb232565c42842b8d9bae02baf071e71e273ba`. W Windows hash jest inny, bo PowerShell zapisuje
   wiersz trochę inaczej, ale oryginał i kopia i tak zgadzają się ze sobą.
2. **Czasy nie są identyczne.** Co najmniej jeden z czasów kopii to chwila jej wykonania, pięć sekund po oryginale.
   W Linuksie `cp` nadaje kopii nowy czas modyfikacji, chyba że dodasz `-p`.
3. **Zapisz linijkę notatek** o tym, co właśnie zrobiono, tak jak w notatkach sprawy powyżej: czas w UTC z drugiego
   polecenia, czynność, narzędzie i hash.

Potem odpowiedz: gdyby ta kopia była wszystkim, co masz, co dałoby się powiedzieć o tym, kiedy zapisano oryginał? I
dlaczego biegli wykonują obraz całego dysku, zamiast kopiować potrzebne pliki?

## Sprawdź się

<!-- pic: quiz -->

## Dowiedz się więcej

- [NIST SP 800-86](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-86.pdf): cztery etapy w
  całości, z przykładami dla plików, systemów operacyjnych, ruchu sieciowego i aplikacji. Bezpłatny i wciąż
  podstawowy punkt odniesienia (po angielsku).
- [ACPO Good Practice Guide for Digital Evidence](https://training-on-eppo.era.int/EPPO/kiosk/pdf/ACPO_Good_Practice_Guide.pdf):
  cztery zasady na jednej stronie, a potem jak brytyjska policja planuje, pozyskuje, analizuje i przedstawia dowody
  cyfrowe.
- [NIST CFReDS](https://www.nist.gov/itl/ssd/software-quality-group/computer-forensics-tool-testing-program-cftt/cfreds):
  udokumentowane obrazy ćwiczeniowe z symulowanymi dowodami i opisem ich zawartości, żeby można było sprawdzić swoją
  pracę.
- [Scenariusze Digital Corpora](https://digitalcorpora.org/corpora/scenarios/): kompletne sprawy ćwiczeniowe, np.
  laptop, z którego wyciekły dokumenty firmy, przygotowane do nauki.
- [Autopsy](https://www.autopsy.com/): bezpłatny pakiet śledczy o otwartym kodzie, w którym otworzysz swój pierwszy
  obraz dysku.
