---
# Get started → lvlulcuma.com/pl/lab/start/
updated: 2026-11-08
title: "Pierwsze kroki"
summary: "Czego potrzebuje domowe laboratorium, jakie darmowe oprogramowanie je uruchamia i jak oddzielić je od twojej prawdziwej sieci."   # one line on the Lab page
intro: "Wszystko, co warto przygotować przed pierwszym pomysłem: komputer, który najpewniej już masz, darmowe oprogramowanie do maszyn wirtualnych i kilka nawyków, dzięki którym ćwiczenia są bezpieczne."
key:
  label: "Koszt na start"
  value: "Za darmo"
---

## Czego potrzebujesz

1. **Wystarczająco dużo pamięci.** Najważniejszy jest RAM, bo każda maszyna wirtualna zabiera swoją część, dopóki
   działa:

   | Wolna pamięć | Co na niej wygodnie działa |
   |---|---|
   | 8 GB | Pomysły oparte na kontenerach albo jedna mała maszyna wirtualna naraz |
   | 16 GB | Dwie lub trzy maszyny wirtualne jednocześnie, np. maszyna atakującego i cel |
   | 32 GB lub więcej | Mała sieć firmowa: serwer Windows, dwa klienty Windows i kilka maszyn z Linuksem |

2. **Włączona wirtualizacja.** Intel nazywa ją VT-x, AMD — AMD-V (albo SVM). W Windowsie otwórz Menedżera zadań,
   przejdź do **Wydajność > Procesor CPU** i sprawdź, czy przy **Wirtualizacja** jest **Włączone**. Jeśli nie, włącz ją
   w ustawieniach UEFI (BIOS) komputera.
3. **Miejsce na dysku.** SSD z co najmniej 100 GB wolnego miejsca. Windows 11 wymaga dysku 64 GB; większości maszyn
   z Linuksem wystarczy 20–30 GB.
4. **Nic nie trzeba kupować.** Na pierwsze pomysły wystarczy komputer, który masz. Gdy przestanie wystarczać, używany
   biurowy mini PC (Lenovo ThinkCentre Tiny, Dell OptiPlex Micro, HP EliteDesk Mini) jest mały, cichy i łatwo dołożyć
   do niego pamięci. Stary komputer stacjonarny też się nada.

## Wybierz, na czym wszystko uruchamiać

Przydadzą ci się dwa rodzaje narzędzi:

- **Kontenery** (przez Dockera) uruchamiają jedną aplikację w kilka sekund i korzystają z systemu twojego komputera.
  Najlepiej sprawdzają się przy aplikacjach webowych i narzędziach: tak działa
  [Laboratorium do atakowania aplikacji webowych i API](/pl/lab/web-app-hacking/).
- **Maszyny wirtualne** to całe komputery w okienku, każdy z własnym systemem operacyjnym. Potrzebujesz ich do
  Windowsa, Active Directory, firewalli i wszystkiego, co będziesz atakować albo infekować.

Maszyna wirtualna działa w **hipernadzorcy** (hypervisor). Wszystkie poniższe są darmowe:

| Hipernadzorca | Działa na | Warto wiedzieć |
|---|---|---|
| VirtualBox | Windows, Linux, macOS | Otwarty kod. Na Macu z Apple silicon uruchamia wersje Linuksa i BSD na Arm, ale nie systemy na x86. |
| VMware Workstation Pro / Fusion Pro | Windows i Linux / macOS | Darmowe dla wszystkich od listopada 2024 roku. Do pobrania potrzebne jest darmowe konto Broadcom. |
| Hyper-V | Windows 11 Pro, Enterprise, Education | Wbudowany: włącz go w **Funkcjach systemu Windows**. Nie ma go w Windows Home. |
| UTM | macOS | Darmowy ze strony UTM. Wersja z App Store to ta sama aplikacja, płatna, z automatycznymi aktualizacjami. |
| Proxmox VE | Osobny komputer | Otwarty kod. Zastępuje system tego komputera i kasuje jego dysk; zarządzasz nim z przeglądarki. |

> [!TIP]
> Zacznij od tego, co najprostsze na twoim systemie: VirtualBox albo VMware Workstation na Windowsie i Linuksie, UTM
> albo VMware Fusion na Macu. Na Proxmox VE przejdź, gdy będziesz mieć osobny komputer dla laboratorium.

## Zdobądź systemy operacyjne

1. **Linux** jest darmowy: Ubuntu, Debian i wiele innych. Pobieraj go z oficjalnej strony projektu
   i [sprawdzaj skrót (hash) pliku](/en/guides/check-hash/), zanim go użyjesz.
2. **Kali Linux**, zestaw narzędzi atakującego, jest dostępny jako gotowe maszyny wirtualne dla VMware, VirtualBox,
   Hyper-V i QEMU. Zaloguj się jako `kali` / `kali`, a potem ustaw własne hasło poleceniem `passwd`.
3. **Windowsa** można za darmo wypróbować przez Microsoft Evaluation Center, bez klucza produktu: Windows 11
   Enterprise przez 90 dni i Windows Server 2025 przez 180 dni. Gdy okres próbny się skończy, zbuduj nową maszynę;
   stawianie od nowa to i tak dobre ćwiczenie.

> [!NOTE]
> Wersję próbną Windows Server trzeba aktywować przez internet w ciągu pierwszych 10 dni, inaczej sama się wyłącza.
> Daj jej dostęp do internetu (NAT, patrz niżej) przy pierwszym uruchomieniu.

## Oddziel laboratorium od prawdziwej sieci

Każdy hipernadzorca oferuje maszynie wirtualnej te same trzy rodzaje sieci. Wybieraj świadomie:

| Sieć | Co robi | Do czego |
|---|---|---|
| NAT | Maszyna wychodzi do internetu przez twój komputer; nic z twojej sieci domowej do niej nie sięgnie | Instalacja i aktualizacje |
| Host-only lub wewnętrzna | Maszyny widzą się nawzajem (w host-only także twój komputer), ale nie internet ani sieć domową | Wszystko, co podatne, i wszystko, co atakujesz |
| Mostkowana (bridged) | Maszyna dołącza do sieci domowej jak osobne urządzenie | Nie dla maszyn z laboratorium |

Nazwy trochę się różnią: w VirtualBox to **NAT**, **Host-only Adapter**, **Internal Network** i **Bridged Adapter**;
w VMware **NAT**, **Host-only**, **LAN segment** i **Bridged**; w Hyper-V **Default Switch** (NAT) oraz przełączniki
**Internal**, **Private** i **External** (mostkowany).

1. Podłączaj podatne maszyny tylko do sieci host-only albo wewnętrznej.
2. Przełączaj maszynę na NAT tylko na czas instalowania aktualizacji albo narzędzi, a potem z powrotem.
3. Nigdy nie mostkuj podatnej maszyny i nigdy nie przekierowuj portu z routera do laboratorium.
4. W kontenerach przypinaj każdy port do `127.0.0.1`, tak jak w
   [Laboratorium do atakowania aplikacji webowych i API](/pl/lab/web-app-hacking/).

## Migawki to twój przycisk „Cofnij”

Migawka (snapshot) zapisuje maszynę wirtualną dokładnie w obecnym stanie, więc później możesz wrócić do tej chwili.

1. Zrób migawkę, gdy tylko maszyna jest zainstalowana i zaktualizowana. Nazwij ją `clean`.
2. Rób kolejną przed każdą większą zmianą: nowym narzędziem, atakiem, próbką złośliwego oprogramowania.
3. Gdy coś się zepsuje, przywróć migawkę zamiast naprawiać. To kwestia minut, a nie całego wieczoru.

> [!WARNING]
> Migawki to nie kopie zapasowe: leżą na tym samym dysku co maszyna. Notatki i pliki konfiguracyjne trzymaj też
> gdzie indziej.

## Prowadź dziennik laboratorium

1. Zapisuj każdą maszynę: nazwę, adres IP, nazwy użytkowników i to, co jest na niej zainstalowane.
2. Notuj każdy krok i jego wynik, także to, co nie zadziałało. Za półtora miesiąca będzie jak znalazł.
3. Używaj haseł stworzonych tylko dla laboratorium i nigdy nie bierz haseł z prawdziwych kont.
4. Wystarczą zwykłe pliki Markdown w folderze (albo repozytorium Git). Z czasem notatki zamienią się w opisy, które
   pokażą pracodawcom, co potrafisz.

## Twój pierwszy weekend

1. Włącz wirtualizację i zainstaluj hipernadzorcę, a do pomysłów z kontenerami także Dockera.
2. Zaimportuj maszynę wirtualną Kali, zaktualizuj ją poleceniem `sudo apt update && sudo apt full-upgrade -y`
   i zrób migawkę.
3. Zbuduj [Laboratorium do atakowania aplikacji webowych i API](/pl/lab/web-app-hacking/) i rozwiąż pierwsze
   wyzwanie w Juice Shop.
4. Zapisz w dzienniku laboratorium, co zostało zrobione.
5. Przeczytaj [Ćwicz bezpiecznie i legalnie](/pl/lab/rules/) i wybierz następny pomysł.
