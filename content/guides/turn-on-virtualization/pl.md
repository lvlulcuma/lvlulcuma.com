---
# Guide → lvlulcuma.com/pl/guides/turn-on-virtualization/
title: "Włącz wirtualizację w UEFI (BIOS)"
date: 2026-11-13
category: configure   # install | quick | configure | use | harden | fix
order: 1   # position within its category
time: 10   # rough minutes to complete
platforms: [windows, linux]   # windows | macos | linux
requires: []   # guides to do first (folder names); shown as "Before you start"
revisions:          # after publishing, add a line for each change
  - date: 2026-11-13
    note: "Kroki dla Windows i dla Linuksa w każdej sekcji stoją teraz w osobnych, podpisanych ramkach."
  - date: 2026-11-13
    note: "Ostatnia poprawka dotyczy teraz VMware Workstation Pro, hipernadzorcy, którego strona poleca na Windows."
dek: "Sprawdź, czy wirtualizacja procesora jest włączona, włącz ją w ustawieniach uruchamiania komputera, jeśli nie jest, i upewnij się, że zadziałało."
# Pictures: each one is placed in the text below by a line <!-- pic: <name> -->. How each kind is drawn:
# src/components/GuideVisual.astro. Rows and tabs count from 1.
visuals:
  # Task Manager's CPU page, before and after: only the marked row changes.
  task-manager:
    kind: window
    title: "Task Manager"
    head: ["CPU", "Intel(R) Core(TM) …"]
    rows:
      - ["Base speed", "…"]
      - ["Sockets", "…"]
      - ["Cores", "…"]
      - ["Logical processors", "…"]
      - ["Virtualization", ""]
      - ["L1 cache", "…"]
    mark: 5
    states:
      - { label: "Wyłączona", value: "Disabled", tone: stop }
      - { label: "Włączona", value: "Enabled", tone: go }
    caption: "Pod wykresem na stronie <strong>CPU</strong>. Twoje liczby będą inne: liczy się tylko wiersz <strong>Virtualization</strong>. Nazwa procesora jest w prawym górnym rogu i zaczyna się od <strong>Intel</strong> albo <strong>AMD</strong>."
  # The way into the UEFI from Windows 11, as on Microsoft's "Enable Virtualization on Windows".
  way-in:
    kind: route
    stages:
      - where: "W Windows 11"
        steps: ["Settings", "System", "Recovery", "Advanced startup: Restart now"]
      - where: "Po ponownym uruchomieniu: Choose an option"
        steps: ["Troubleshoot", "Advanced options", "UEFI Firmware Settings", "Restart"]
    caption: "Dwa przystanki: Settings w Windows, a potem niebieski ekran, który Windows pokazuje po ponownym uruchomieniu. W Windows 10 pierwsza część to <strong>Settings</strong> &gt; <strong>Update &amp; Security</strong> &gt; <strong>Recovery</strong>."
  # A made-up firmware screen, to show what to look for.
  setup-screen:
    kind: screen
    title: "Setup Utility"
    badge: "Przykład"
    tabs: ["Main", "Advanced", "Security", "Boot", "Exit"]
    tab: 2
    rows:
      - ["Hyper-Threading", "[Enabled]"]
      - ["Intel Virtualization Technology", "[Enabled]"]
      - ["Intel VT-d", "[Disabled]"]
    mark: 2
    keys: [["↑↓", "Move"], ["Enter", "Change"], ["F10", "Save and exit"], ["Esc", "Back"]]
    caption: "Zmyślony, żeby pokazać ogólny wygląd. Twój wygląda po swojemu i używa własnych słów, a nowsze obsługują też mysz. Klawisze są opisane na ekranie, zwykle na dole albo z boku."
  # What the switch is called. Each name is one a maker uses in its own instructions (the links in "makers").
  names:
    kind: cards
    layout: rows
    cards:
      - title: "Intel"
        text: "Nazwa procesora zaczyna się od Intel."
        tags: ["Intel Virtualization Technology", "Intel (VMX) Virtualization Technology", "Intel VTX", "VT-x"]
      - title: "AMD"
        text: "Nazwa procesora zaczyna się od AMD."
        tags: ["SVM Mode", "AMD-SVM", "AMD-V"]
      - title: "Dowolny procesor"
        text: "Niektórzy producenci używają prostej nazwy dla obu."
        tags: ["Virtualization", "Virtualization Technology", "Virtualization Technology (VTx)"]
    caption: "Różne słowa, jeden przełącznik. Jest przy ustawieniach procesora (CPU)."
  # Each maker's key and menu, from its own support page (the link). Alphabetical; Surface and "another maker" last.
  makers:
    kind: finder
    title: "Producent twojego komputera"
    labels: { key: "Klawisz", where: "Gdzie", note: "Uwaga", link: "Instrukcja samego producenta" }
    items:
      - name: "Acer"
        key: "F2"
        press: "Przytrzymaj przycisk zasilania przez 5 sekund, żeby komputer całkiem się wyłączył. Włącz go i naciśnij <kbd>F2</kbd>."
        where: "<strong>Advanced</strong>: <strong>Intel VTX</strong> w modelach z Intelem, <strong>AMD-SVM</strong> w modelach z AMD."
        note: "Nie ma? W niektórych modelach <kbd>Ctrl</kbd> <kbd>S</kbd> pokazuje ukryte ustawienia."
      - name: "Laptop ASUS"
        key: "F2"
        press: "Gdy laptop jest całkiem wyłączony, przytrzymaj <kbd>F2</kbd> i naciśnij przycisk zasilania. Puść, gdy pojawią się ustawienia."
        where: "<strong>Intel Virtualization Technology</strong> albo <strong>SVM Mode</strong> w modelach z AMD, zwykle na stronie <strong>Advanced</strong>. Jeśli pierwszy ekran jest uproszczony (EZ Mode), najpierw przełącz się na Advanced Mode."
        note: "ASUS włącza ją fabrycznie, więc najpierw sprawdź w Task Manager. Jest wyszarzona? Ustaw <strong>Intel Trusted Execution Technology</strong> na <strong>Disabled</strong> i spróbuj ponownie."
        link: "https://www.asus.com/support/FAQ/1043181"
      - name: "Płyta główna ASUS (komputer stacjonarny)"
        key: "Del"
        press: "Naciśnij <kbd>Del</kbd> albo <kbd>F2</kbd> zaraz po włączeniu."
        where: "Naciśnij <kbd>F7</kbd>, żeby przejść do Advanced Mode (płyty ROG otwierają się od razu w nim), potem <strong>Advanced &gt; CPU Configuration</strong>: <strong>Intel (VMX) Virtualization Technology</strong> albo <strong>SVM Mode</strong>."
        note: "Na płytach ASUS do procesorów Intel jest domyślnie włączona."
        link: "https://www.asus.com/support/FAQ/1045141"
      - name: "Dell"
        key: "F2"
        press: "Naciśnij <kbd>F2</kbd>, gdy pojawi się logo Dell."
        where: "<strong>Virtualization Support &gt; Virtualization</strong> albo <strong>Advanced &gt; Virtualization</strong>, zależnie od modelu."
        note: "Modele od 2025 roku ukrywają część ustawień: <kbd>Ctrl</kbd> <kbd>Alt</kbd> <kbd>S</kbd> je pokazuje. Jeśli ustawienia wirtualizacji nie ma wcale, komputer jej nie obsługuje."
        link: "https://www.dell.com/support/kbdoc/en-us/000195978"
      - name: "HP"
        key: "F10"
        press: "Włącz komputer i od razu naciśnij <kbd>F10</kbd>."
        where: "OMEN, Victus, Spectre, ENVY i Pavilion: <strong>Configuration &gt; Virtualization Technology</strong>. EliteBook, EliteDesk i inne modele biznesowe: <strong>Advanced &gt; System Options &gt; Virtualization Technology (VTx)</strong>."
        note: "W niektórych starszych modelach biznesowych jest w <strong>Security &gt; System Security</strong>."
        link: "https://support.hp.com/us-en/document/ish_5637142-5637191-16"
      - name: "Lenovo ThinkPad, ThinkCentre"
        key: "F1"
        press: "Naciśnij <kbd>F1</kbd> zaraz po włączeniu."
        where: "Karta <strong>Security</strong>; w ThinkPadzie <strong>Security &gt; Virtualization</strong>."
        note: "Jeśli żadna strona nie ma ustawienia wirtualizacji, komputer jej nie obsługuje."
        link: "https://support.lenovo.com/us/en/solutions/HT500006"
      - name: "Lenovo IdeaPad, Yoga"
        key: "F2"
        press: "Naciśnij <kbd>F2</kbd> (albo <kbd>Fn</kbd> <kbd>F2</kbd>) zaraz po włączeniu. Albo, gdy laptop jest wyłączony, naciśnij mały przycisk Novo i wybierz <strong>BIOS Setup</strong>."
        where: "Zwykle karta <strong>Configuration</strong>."
        note: "Jeśli żadna strona nie ma ustawienia wirtualizacji, komputer jej nie obsługuje."
        link: "https://support.lenovo.com/us/en/solutions/HT500216"
      - name: "Laptop MSI"
        key: "Del"
        press: "Naciśnij <kbd>Del</kbd> zaraz po włączeniu."
        where: "<strong>Advanced</strong>: <strong>Intel Virtualization Technology</strong> albo <strong>SVM Mode</strong> w modelach z AMD."
        note: "MSI włącza ją fabrycznie, więc najpierw sprawdź w Task Manager."
        link: "https://www.msi.com/faq/8790"
      - name: "Płyta główna MSI (komputer stacjonarny)"
        key: "Del"
        press: "Naciśnij <kbd>Del</kbd> zaraz po włączeniu."
        where: "<strong>OC &gt; CPU Features &gt; SVM Mode</strong> na płytach do procesorów AMD. Płyty do Intela też mają to ustawienie wśród ustawień procesora."
        link: "https://www.msi.com/faq/mb-2581"
      - name: "Inne płyty główne do komputerów stacjonarnych"
        key: "Del"
        press: "Zwykle <kbd>Del</kbd> zaraz po włączeniu; pierwszy ekran podpowiada, który klawisz otwiera ustawienia."
        where: "Przełącz się na widok zaawansowany, jeśli jest, i szukaj w ustawieniach procesora (CPU), w <strong>Advanced</strong> albo na karcie podkręcania."
        note: "Dokładne menu podaje instrukcja płyty na stronie jej producenta."
      - name: "Microsoft Surface"
        tag: "Już włączona"
        where: "Nigdzie: Microsoft podaje, że urządzenia Surface mają wirtualizację już włączoną."
        link: "https://support.microsoft.com/topic/c5578302-6e43-4b4b-a449-8ced115f58e1"
      - name: "Inny producent"
        press: "Obserwuj pierwszy ekran po włączeniu: często podaje, który klawisz otwiera ustawienia. Najczęściej to <kbd>F2</kbd>, <kbd>Del</kbd>, <kbd>F10</kbd> i <kbd>F1</kbd>. Albo skorzystaj z drogi przez Windows opisanej wyżej."
        where: "Wyszukaj na stronie wsparcia producenta „enable virtualization” i swój model albo przejrzyj każdą kartę: to ustawienie jest przy ustawieniach procesora (CPU)."
---

Twój procesor ma wbudowaną funkcję do uruchamiania maszyn wirtualnych — **wirtualizację**: Intel nazywa ją VT-x,
AMD — AMD-V albo SVM. Gdy jest włączona, maszyna wirtualna działa niemal z pełną prędkością. Gdy jest wyłączona,
większość hipernadzorców (programów, które uruchamiają maszyny wirtualne, takich jak VMware Workstation Pro czy
VirtualBox) w ogóle żadnej nie uruchomi. Wiele komputerów ma ją fabrycznie wyłączoną.

Ten przełącznik nie jest w Windows ani w Linuksie. Jest w **UEFI** — małym programie wbudowanym w komputer, który go
uruchamia, zanim załaduje się system operacyjny. W starszych komputerach nazywa się **BIOS** i wiele osób wciąż tak go
nazywa. Zmienisz tam jedno ustawienie.

> [!NOTE]
> Masz Maca? Nie ma czego włączać: Mac ma wirtualizację już włączoną, więc możesz pominąć tę instrukcję.

> [!NOTE]
> Nazwy przycisków i menu Windows są tu podane tak, jak wyglądają po angielsku. Jeśli twój Windows jest po polsku,
> są przetłumaczone, ale stoją w tych samych miejscach.

> [!TIP]
> Otwórz tę instrukcję na telefonie: w połowie komputer uruchomi się ponownie, a kroki dobrze mieć przed oczami.

## Sprawdź, czy jest już włączona

<!-- for: windows -->

1. Naciśnij <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>Esc</kbd>, żeby otworzyć **Task Manager** (Menedżer zadań).
2. Wybierz **Performance**, potem **CPU**.
3. Znajdź **Virtualization** na liście pod wykresem.

   <!-- pic: task-manager -->

   **Enabled** znaczy, że jest włączona: gotowe, nic nie trzeba zmieniać. **Disabled** znaczy, że jest wyłączona:
   przejdź dalej.

4. Przy okazji zapamiętaj nazwę procesora w prawym górnym rogu. Zaczyna się od **Intel** albo **AMD**, a przełącznik
   nazywa się inaczej dla każdego z nich.

<!-- for: linux -->

W Kali, Ubuntu albo Debianie otwórz terminal. Pierwsze polecenie instaluje mały program do sprawdzania, drugie go
uruchamia:

```sh
sudo apt install cpu-checker
sudo kvm-ok
```

**KVM acceleration can be used** znaczy, że jest włączona. **KVM acceleration can NOT be used** znaczy, że jest
wyłączona (albo twój procesor jej nie ma): przejdź dalej. W innych systemach Linux polecenie `ls /dev/kvm` pokazuje
`/dev/kvm`, gdy jest włączona. Żeby sprawdzić, czy masz procesor Intel czy AMD, uruchom `lscpu | grep "Model name"`.

## Otwórz ustawienia UEFI

Najpierw zapisz pracę: komputer uruchomi się ponownie.

<!-- for: windows -->

Jeśli twój dysk jest zaszyfrowany funkcją BitLocker albo szyfrowaniem urządzenia (Device encryption), upewnij się, że
masz dostęp do klucza odzyskiwania (przy koncie Microsoft jest na
[aka.ms/myrecoverykey](https://aka.ms/myrecoverykey)): po zmianie ustawień uruchamiania Windows czasem o niego prosi.

<!-- pic: way-in -->

1. Otwórz **Settings** (Ustawienia) > **System** > **Recovery**. W Windows 10: **Settings** > **Update & Security** >
   **Recovery**.
2. Obok **Advanced startup** wybierz **Restart now** i potwierdź.
3. Komputer uruchomi się ponownie i pokaże niebieski ekran **Choose an option**. Wybierz **Troubleshoot** >
   **Advanced options** > **UEFI Firmware Settings**.
4. Wybierz **Restart**. Komputer uruchomi się od razu w ustawieniach UEFI.

**Szybszy sposób:** kliknij prawym przyciskiem myszy **Start** i wybierz **Terminal (Admin)** (w Windows 10
**Windows PowerShell (Admin)**), a potem wpisz to. `/r` uruchamia ponownie, `/fw` przechodzi do oprogramowania
układowego (UEFI), a `/t 0` znaczy „teraz”:

```powershell
shutdown /r /fw /t 0
```

<!-- for: linux -->

To polecenie uruchamia komputer ponownie od razu w UEFI:

```sh
systemctl reboot --firmware-setup
```

<!-- /for -->

**Nie ma przycisku UEFI Firmware Settings albo polecenie zwraca błąd?** Użyj klawisza swojego producenta: uruchom
komputer ponownie i od razu stukaj w klawisz, mniej więcej dwa razy na sekundę, aż pojawią się ustawienia. Klawisz
każdego producenta jest na liście w następnej sekcji.

## Znajdź przełącznik

UEFI w każdym komputerze wygląda inaczej. Niektóre to ekrany tekstowe, po których poruszasz się strzałkami
i <kbd>Enter</kbd>; nowsze mają obrazki i obsługują mysz. Większość wygląda mniej więcej tak:

<!-- pic: setup-screen -->

Nazwa przełącznika zależy od procesora i producenta:

<!-- pic: names -->

1. Otwórz na liście swojego producenta i przejdź tam, gdzie wskazuje.

   <!-- pic: makers -->

2. Wybierz ustawienie wirtualizacji i zmień je na **Enabled**. Zwykle naciskasz <kbd>Enter</kbd> i wybierasz
   **Enabled**; na niektórych ekranach jest zamiast tego pole do zaznaczenia.
3. Wszystko inne zostaw tak, jak jest.

   > [!WARNING]
   > Zmień tylko to jedno ustawienie: inne, takie jak Secure Boot czy tryb rozruchu, mogą uniemożliwić uruchomienie
   > Windows. Coś zostało zmienione przez pomyłkę? Wyjdź bez zapisywania (szukaj **Discard Changes and Exit**) i zacznij od nowa.

> [!ASIDE] VT-d i IOMMU
> Obok przełącznika możesz zobaczyć **VT-d** (Intel) albo **IOMMU** (AMD). To inna funkcja, potrzebna do przekazania
> maszynie wirtualnej prawdziwego urządzenia twojego komputera. Twoje laboratorium jej nie potrzebuje, więc zostaw ją
> tak, jak jest.

## Zapisz i uruchom ponownie

1. Naciśnij <kbd>F10</kbd> albo otwórz **Exit** i wybierz **Save Changes and Exit** (słowa mogą się trochę różnić).
2. Potwierdź przyciskiem **Yes** albo **OK**. Komputer uruchomi się ponownie w Windows albo Linuksie jak zwykle.

## Sprawdź, czy działa

<!-- for: windows -->

1. Znów otwórz **Task Manager** (<kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>Esc</kbd>) i przejdź do **Performance** >
   **CPU**.
2. Przy **Virtualization** jest teraz **Enabled**. Twój komputer jest gotowy na maszyny wirtualne.

<!-- for: linux -->

Uruchom ponownie `sudo kvm-ok`: teraz polecenie pokazuje **KVM acceleration can be used**. Twój komputer jest gotowy na
maszyny wirtualne.

<!-- /for -->

> [!NOTE]
> Wciąż **Disabled** (albo **can NOT be used**)? Niektóre komputery przyjmują zmianę dopiero po pełnym wyłączeniu.
> Wyłącz komputer (nie uruchamiaj go ponownie), odczekaj kilka sekund i włącz go znowu.

## Jeśli coś pójdzie nie tak

**Komputer uruchamia się jak zwykle, a ustawienia się nie otwierają.** Klawisz trzeba naciskać wcześnie: zacznij, gdy
tylko ekran zgaśnie albo gdy naciśniesz przycisk zasilania. Albo skorzystaj z drogi przez ustawienia Windows lub
z polecenia dla Linuksa opisanych wyżej, które nie wymagają klawisza. W laptopach, w których górne klawisze zmieniają
też głośność i jasność, przytrzymaj <kbd>Fn</kbd> razem z klawiszem (<kbd>Fn</kbd> <kbd>F2</kbd>).

**Nigdzie nie ma ustawienia wirtualizacji.** Przejrzyj wszystkie karty i spróbuj klawiszy producenta, które pokazują
ukryte ustawienia (Dell: <kbd>Ctrl</kbd> <kbd>Alt</kbd> <kbd>S</kbd>; Acer: <kbd>Ctrl</kbd> <kbd>S</kbd>). Jeśli
naprawdę go nie ma, to według Della i Lenovo komputer nie obsługuje wirtualizacji.

**Ustawienie jest wyszarzone.** W laptopie ASUS najpierw ustaw **Intel Trusted Execution Technology** na **Disabled**.
W komputerze służbowym albo szkolnym administrator mógł zablokować ustawienia hasłem: zapytaj go.

<!-- for: windows -->

**Nie ma przycisku UEFI Firmware Settings.** Windows został pewnie zainstalowany po staremu (w trybie legacy BIOS)
albo komputer tego nie oferuje. Użyj klawisza swojego producenta.

**Windows prosi o klucz odzyskiwania BitLocker.** Na innym urządzeniu otwórz
[aka.ms/myrecoverykey](https://aka.ms/myrecoverykey), zaloguj się kontem Microsoft, którego używasz na tym komputerze,
i wpisz klucz, który tam zobaczysz. Potem Windows uruchomi się jak zwykle.

**Task Manager pokazuje Enabled, ale VMware Workstation Pro się nie uruchamia.** Część w UEFI jest zrobiona:
wirtualizacji używa własny hipernadzorca Windows (Hyper-V albo funkcja zabezpieczeń zbudowana na nim). VMware
Workstation Pro może działać na nim przez funkcję Windows o nazwie Windows Hypervisor Platform, a instrukcja jego
instalacji pokazuje, jak to zrobić.
<!-- guide: install-vmware-workstation-windows -->
