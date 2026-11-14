---
# Get started → lvlulcuma.com/pl/lab/start/
# The page is the text below the second --- (headings, paragraphs, boxes and margin notes, as in any article).
# A line like <!-- lab:ram --> on its own places a picture there; the words in each picture are under `visuals:` here.
# A <!-- guide: install-utm --> at the end of a paragraph or list item adds a "Step by step" line there, with that
# guide (a folder in content/guides/, or one planned in content/guides/planned.yml); in a card, `guide:` does the same
# (several guides, one per hypervisor: separate them with commas).
# Inside the pictures' words, <strong>, <code>, <kbd> and <a href="…"> work. See en.md for what each picture shows.
updated: 2026-11-13
title: "Pierwsze kroki"
summary: "Od zera do pierwszego laboratorium w jeden weekend: czego potrzebuje twój komputer, jakie darmowe oprogramowanie zainstalować i jak oddzielić to wszystko od prawdziwej sieci."   # one line on the Lab page
intro: "Nie masz jeszcze laboratorium? Zacznij tutaj. W jeden weekend komputer, który już masz, stanie się małą, bezpieczną siecią do ćwiczeń — wyłącznie na darmowym oprogramowaniu."
key:   # the big fact at the top of the box beside the page
  label: "Koszt na start"
  value: "Za darmo"
visuals:
  map:
    host: "Twój komputer"
    hypervisor: "Hipernadzorca: VirtualBox, VMware lub UTM"
    attacker:
      name: "Kali Linux"
      role: "Twoja maszyna do ataków"
    target:
      name: "Cel"
      role: "Celowo podatny"
    wire: "prywatna sieć laboratorium"
    wall: "tędy nie przejdzie"
    home: "Twoja sieć domowa"
    devices: ["telefon", "telewizor", "router", "rodzinny laptop"]
    caption: "Co budujesz. Wszystko działa wewnątrz twojego komputera. Maszyny z laboratorium rozmawiają tylko ze sobą, nigdy z urządzeniami wokół ciebie."
  plan:
    label: "Plan"
    times: ["10 min", "20 min", "ok. 1 godz.", "10 min", "2 min"]
    total: "Razem około dwóch godzin, głównie na czekaniu, aż wszystko się pobierze. Wszystko za darmo."
  ram:
    caption: "Najbardziej ogranicza cię pamięć RAM: każda uruchomiona maszyna wirtualna zabiera swoją część. Jeden kwadracik to jedna maszyna wirtualna działająca w tym samym czasie co inne."
    tiers:
      - size: "8 GB"
        verdict: "Wystarczy na start"
        pips: 1
        fits: "Pomysły oparte na kontenerach albo jedna mała maszyna wirtualna naraz"
      - size: "16 GB"
        verdict: "Złoty środek"
        pips: 3
        best: true
        fits: "Dwie lub trzy maszyny wirtualne jednocześnie, np. atakujący i cel"
      - size: "32 GB +"
        verdict: "Miejsce na rozwój"
        pips: 6
        fits: "Mała sieć firmowa: serwer Windows, dwa klienty Windows i kilka maszyn z Linuksem"
  check:
    title: "Sprawdź swój w dwie minuty"
    systems:
      - name: "Windows"
        steps:
          - text: "Naciśnij <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>Esc</kbd>, żeby otworzyć Menedżera zadań, i przejdź do <strong>Wydajność</strong>."
          - text: "<strong>Pamięć</strong> pokazuje, ile jej masz. W <strong>Procesor CPU</strong> przy <strong>Wirtualizacja</strong> powinno być <strong>Włączone</strong>."
      - name: "macOS"
        steps:
          - text: "Otwórz menu Apple, potem <strong>Ten Mac</strong>: <strong>Pamięć</strong> pokazuje, ile jej masz."
          - text: "Nie trzeba nic włączać: Mac ma wirtualizację włączoną od początku."
      - name: "Linux"
        steps:
          - cmd: "free -h"
            text: "Pamięć znajdziesz w kolumnie <strong>total</strong>."
          - cmd: "lscpu | grep Virt"
            text: "<strong>VT-x</strong> lub <strong>AMD-V</strong> oznacza, że twój procesor to potrafi."
  kinds:
    - name: "Maszyna wirtualna"
      what: "Cały komputer w okienku"
      layers: [["Aplikacja", "Aplikacja"], ["Własny system operacyjny"], ["Hipernadzorca"], ["Twój komputer"]]
      mark: 2
      rows:
        - label: "Do czego"
          text: "Windows, Active Directory, firewalle i wszystko, co będziesz atakować albo infekować"
        - label: "Gdzie działa"
          text: "W hipernadzorcy"
    - name: "Kontener"
      what: "Jedna aplikacja we własnym pudełku"
      layers: [["Aplikacja", "Aplikacja", "Aplikacja"], ["Docker"], ["System twojego komputera"], ["Twój komputer"]]
      mark: 3
      rows:
        - label: "Do czego"
          text: "Aplikacje webowe i narzędzia, jak w <a href=\"/pl/lab/web-app-hacking/\">Laboratorium do atakowania aplikacji webowych i API</a>"
        - label: "Gdzie działa"
          text: "W Dockerze"
  pick:
    first: "Zacznij od"
    or: "Albo"
    docker: "Do kontenerów"
    systems:
      - name: "Windows"
        main: "VMware Workstation Pro"
        why: "Darmowy do użytku prywatnego, edukacyjnego i firmowego. Do pobrania potrzebne jest darmowe konto Broadcom."
        alt: "VirtualBox"
        docker: "Docker Desktop"
        dockerGuide: install-docker-desktop
        guide: install-vmware-workstation-windows
      - name: "Mac"
        main: "UTM"
        why: "Darmowy ze strony UTM. Wersja z App Store to ta sama aplikacja, płatna, z automatycznymi aktualizacjami."
        alt: "VMware Fusion Pro"
        docker: "Docker Desktop"
        dockerGuide: install-docker-desktop-mac
        guide: install-utm
        note: "<strong>Na Macu z Apple silicon</strong> (M1 i nowsze) pobieraj wersję Arm (arm64) każdego systemu: wersje na x86 działają tylko w emulacji, i to powoli."
      - name: "Linux"
        main: "VirtualBox"
        why: "Darmowy, z otwartym kodem. Bez zakładania konta."
        alt: "VMware Workstation Pro"
        docker: "Docker Engine z wtyczką Compose"
        dockerGuide: install-docker-engine-linux
        guide: install-virtualbox-linux
    more: "Wszystkie darmowe opcje obok siebie"
    head: ["Hipernadzorca", "Działa na", "Warto wiedzieć"]
    all:
      - ["VirtualBox", "Windows, Linux, macOS", "Otwarty kod. Na Macu z Apple silicon uruchamia tylko systemy na Arm (Linux, BSD, Windows 11 dla Arm), nie systemy na x86."]
      - ["VMware Workstation Pro / Fusion Pro", "Windows i Linux / macOS", "Darmowe dla wszystkich od listopada 2024 roku. Do pobrania potrzebne jest darmowe konto Broadcom."]
      - ["Hyper-V", "Windows 11 Pro, Enterprise, Education", "Wbudowany: włącz go w <strong>Funkcjach systemu Windows</strong>. Nie ma go w Windows Home."]
      - ["UTM", "macOS", "Darmowy ze strony UTM. Wersja z App Store to ta sama aplikacja, płatna, z automatycznymi aktualizacjami."]
      - ["Proxmox VE", "Osobny komputer", "Otwarty kod. Zastępuje system tego komputera i kasuje jego dysk; zarządzasz nim z przeglądarki."]
  systems:
    - kicker: "Twoja maszyna do ataków"
      name: "Kali Linux"
      text: "Setki narzędzi bezpieczeństwa gotowych do pracy. Pobierz gotową maszynę wirtualną dla swojego hipernadzorcy: bez instalowania."
      facts: ["Za darmo", "Logowanie: <code>kali</code> / <code>kali</code>"]
    - kicker: "Zwykły Linux"
      name: "Ubuntu lub Debian"
      text: "Na serwery i cele. Pobieraj ze strony projektu i najpierw <a href=\"/en/guides/check-hash/\">sprawdź skrót (hash) pliku</a>."
      facts: ["Za darmo", "Dysk 20–30 GB"]
    - kicker: "Cele z Windowsem"
      name: "Windows"
      text: "Darmowe wersje próbne z Microsoft Evaluation Center, bez klucza produktu. Gdy okres próbny się skończy, zbuduj nową maszynę: to i tak dobre ćwiczenie."
      facts: ["Windows 11 Enterprise: 90&nbsp;dni", "Windows Server 2025: 180&nbsp;dni"]
      guide: set-up-windows-trial-vmware, set-up-windows-trial-virtualbox
  nets:
    can: ["Wychodzi do internetu", "Dostępna z domu"]
    yes: "Tak"
    no: "Nie"
    modes:
      - light: go
        verdict: "Tu mieszkają maszyny z laboratorium"
        name: "Host-only lub wewnętrzna"
        reach: [false, false]
        text: "Maszyny widzą się nawzajem (w host-only także twój komputer) i nic więcej."
      - light: wait
        verdict: "Tylko na czas instalacji i aktualizacji"
        name: "NAT"
        reach: [true, false]
        text: "Maszyna wychodzi do internetu przez twój komputer; nic z sieci domowej do niej nie sięgnie."
      - light: stop
        verdict: "Nigdy dla maszyn z laboratorium"
        name: "Mostkowana (bridged)"
        reach: [true, true]
        text: "Maszyna dołącza do sieci domowej jak osobne urządzenie, obok twojego telefonu i telewizora."
    names:
      title: "Jak nazywa je twój hipernadzorca"
      rows:
        - ["VirtualBox", "Host-only Adapter, Internal Network", "NAT", "Bridged Adapter"]
        - ["VMware", "Host-only, LAN segment", "NAT", "Bridged"]
        - ["UTM", "Host Only", "Shared Network", "Bridged (Advanced)"]
        - ["Hyper-V", "Przełącznik Internal lub Private", "Default Switch", "Przełącznik External"]
  snaps:
    points:
      - name: "clean"
        text: "Zainstalowana i zaktualizowana"
      - name: "tools"
        text: "Dodane twoje narzędzia"
      - name: "before-attack"
        text: "Tuż przed czymś ryzykownym"
    broke: "Coś się zepsuło"
    back: "Przywróć <code>before-attack</code>: wracasz w kilka minut"
  notebook:
    file: "lab-notes.md"
    text: |
      # Dziennik laboratorium

      ## Maszyny
      - kali: 192.168.56.10, atakujący
      - juice-shop: 127.0.0.1:3000

      ## 2026-11-14
      - Kali: zaktualizowana, migawka "clean"
      - Juice Shop: znaleziony Score Board
      - Nie zadziałało: Burp nie widział ruchu.
        Rozwiązanie: proxy przeglądarki 127.0.0.1:8080
  weekend:
    todo: "Odhacz wszystko, żeby zakończyć weekend."
    done: "Weekend zaliczony. Wybierz następny pomysł poniżej."
    days:
      - day: "Sobota"
        items:
          - text: "Sprawdź komputer i włącz wirtualizację"
            time: "10 min"
          - text: "Zainstaluj hipernadzorcę, a do pomysłów z kontenerami także Dockera"
            time: "20 min"
          - text: "Zaimportuj Kali, zaktualizuj ją, przełącz na host-only i zrób migawkę <code>clean</code>"
            time: "1 godz."
      - day: "Niedziela"
        items:
          - text: "Zbuduj <a href=\"/pl/lab/web-app-hacking/\">Laboratorium do atakowania aplikacji webowych i API</a> i rozwiąż pierwsze wyzwanie w Juice Shop"
            time: "1 godz."
          - text: "Zapisz w dzienniku laboratorium, co zostało zrobione"
            time: "10 min"
          - text: "Przeczytaj <a href=\"/pl/lab/rules/\">Ćwicz bezpiecznie i legalnie</a> i wybierz następny pomysł"
            time: "10 min"
---

<!-- lab:map -->

<!-- lab:plan -->

## Sprawdź komputer

O tym, co twój komputer uruchomi, decydują trzy rzeczy: pamięć, ustawienie procesora zwane wirtualizacją i wolne
miejsce na dysku. Komputerowi z ostatnich kilku lat najpewniej wszystkiego wystarczy.

> [!ASIDE] Wirtualizacja
> Funkcja procesora, dzięki której maszyny wirtualne działają niemal z pełną prędkością. Intel nazywa ją VT-x,
> AMD — AMD-V albo SVM.

<!-- lab:ram -->

<!-- lab:check -->

**Wirtualizacja wyłączona?** Włącz ją w ustawieniach UEFI (BIOS) komputera, gdzie nazywa się mniej więcej tak:
Intel Virtualization Technology (VT-x), SVM Mode albo AMD-V. W Windows 11 najszybciej dostaniesz się tam tak: zapisz
swoją pracę, otwórz Terminal jako administrator i wpisz polecenie poniżej. Komputer uruchomi się ponownie prosto
w tych ustawieniach.

```powershell
shutdown /r /fw /t 0
```

<!-- guide: turn-on-virtualization -->

**Miejsce na dysku:** zostaw 100 GB wolnego, najlepiej na SSD. Maszyna z Windows 11 potrzebuje dysku 64 GB;
większości maszyn z Linuksem wystarczy 20–30 GB.

> [!TIP]
> Nic nie trzeba kupować. Gdy komputer przestanie wystarczać, używany biurowy mini PC (Lenovo ThinkCentre Tiny, Dell
> OptiPlex Micro, HP EliteDesk Mini) jest mały, cichy i łatwo dołożyć do niego pamięci. Stary komputer stacjonarny
> też się nada.

## Zainstaluj oprogramowanie

Twoje laboratorium uruchamia rzeczy na dwa sposoby i przydadzą ci się oba:

<!-- lab:kinds -->

Maszyna wirtualna działa w **hipernadzorcy** (hypervisor): programie, który przydziela każdej maszynie jej część
pamięci i procesora. Wszystkie są darmowe. Wybierz ten dla swojego systemu:

<!-- lab:pick -->

> [!NOTE]
> W Windowsie VMware Workstation Pro działa także wtedy, gdy włączony jest własny hipernadzorca Windowsa (włączają
> go Docker Desktop, WSL i niektóre funkcje zabezpieczeń Windowsa). Uruchamia wtedy twoje maszyny przez tego
> hipernadzorcę: to wolniejsze, ale wszystko działa.

## Dodaj pierwsze maszyny

Maszyna wirtualna, tak jak prawdziwy komputer, potrzebuje systemu operacyjnego. Za żaden z tych nie zapłacisz:

<!-- lab:systems -->

Zacznij od Kali. Pobierz jej maszynę wirtualną dla swojego hipernadzorcy, rozpakuj i otwórz ją w nim.
<!-- guide: set-up-kali-vmware, set-up-kali-virtualbox, set-up-kali-utm -->

Większość hipernadzorców podłącza nową maszynę do NAT, czyli sieci, przez którą wychodzi ona do internetu. Na
pierwszą aktualizację to w sam raz. Zaloguj się i wpisz:

```sh
passwd
sudo apt update && sudo apt full-upgrade -y
```

Pierwsze polecenie zamienia hasło `kali` na twoje własne. Drugie aktualizuje wszystkie narzędzia; za pierwszym
razem trwa to dłuższą chwilę.

> [!NOTE]
> Wersję próbną Windows Server trzeba aktywować przez internet w ciągu pierwszych 10 dni, inaczej sama się
> wyłącza. Przy pierwszym uruchomieniu trzymaj ją na NAT.

## Odgrodź laboratorium

Maszyny z laboratorium są po to, żeby się do nich włamywać, więc nigdy nie mogą być w jednej sieci z twoimi
prawdziwymi urządzeniami. Każdy hipernadzorca daje maszynie jeden z trzech rodzajów sieci. Pomyśl o nich jak
o sygnalizacji świetlnej:

<!-- lab:nets -->

Cztery zasady, które to zapewniają:

1. Podłączaj podatne maszyny tylko do sieci host-only albo wewnętrznej. <!-- guide: vmware-host-only, virtualbox-host-only, utm-host-only -->
2. Przełączaj maszynę na NAT tylko na czas instalowania aktualizacji albo narzędzi, a potem z powrotem.
3. Nigdy nie mostkuj podatnej maszyny i nigdy nie przekierowuj portu z routera do laboratorium.
4. W kontenerach przypinaj każdy port do `127.0.0.1`, tak jak w
   [Laboratorium do atakowania aplikacji webowych i API](/pl/lab/web-app-hacking/).

## Zrób migawkę

Migawka (snapshot) zapisuje maszynę wirtualną dokładnie w obecnym stanie, jak punkt zapisu w grze. To twój przycisk
„Cofnij”: gdy coś się zepsuje, po prostu wracasz, zamiast tracić wieczór na naprawy.

<!-- lab:snaps -->

1. Zrób pierwszą migawkę, gdy tylko maszyna jest zainstalowana i zaktualizowana. Nazwij ją `clean`. <!-- guide: vmware-snapshots, virtualbox-snapshots, utm-snapshots -->
2. Rób kolejną przed każdą większą zmianą: nowym narzędziem, atakiem, próbką złośliwego oprogramowania.
3. Gdy coś się zepsuje, przywróć ostatnią dobrą migawkę zamiast naprawiać.

> [!WARNING]
> Migawki to nie kopie zapasowe: leżą na tym samym dysku co maszyna. Notatki i pliki konfiguracyjne trzymaj też
> gdzie indziej.

## Prowadź dziennik laboratorium

Za półtora miesiąca nie przypomnisz sobie, która maszyna miała które hasło. Zapisuj na bieżąco: wystarczą zwykłe
pliki tekstowe w folderze (albo repozytorium Git). Mniej więcej tak:

<!-- lab:notebook -->

- Zapisuj każdą maszynę: nazwę, adres IP, nazwy użytkowników i to, co jest na niej zainstalowane.
- Notuj każdy krok i jego wynik, także to, co nie zadziałało.
- Używaj haseł stworzonych tylko dla laboratorium i nigdy nie bierz haseł z prawdziwych kont.
- Z czasem notatki zamienią się w opisy, a opisy pokażą pracodawcom, co potrafisz.

## Twój pierwszy weekend

Wszystko powyżej jako plan. Odhaczaj na bieżąco:

<!-- lab:weekend -->
