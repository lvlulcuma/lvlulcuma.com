---
# Lab idea → lvlulcuma.com/pl/lab/vulnerable-vms/
title: "Zestaw podatnych maszyn"
date: 2026-11-08
group: attack
order: 2
level: beginner
dek: "Pobierz komputer celowo stworzony tak, by dało się go zhakować, uruchom go obok Kali Linux w sieci, którą widzą tylko one dwie, i ćwicz drogę od adresu IP do pełnej kontroli."
time: 1
ram: 6
jobs: [penetration-tester, bug-bounty-hunter, vulnerability-analyst]
requires: []
files: []
---

To klasyczny sposób na ćwiczenie ataku na całą maszynę. Pobierasz maszynę wirtualną, którą ktoś zbudował tak, by dało
się ją zhakować, stawiasz ją w prywatnej sieci razem ze swoją maszyną Kali Linux i torujesz sobie drogę do środka:
znajdujesz ją, sprawdzasz, co na niej działa, szukasz słabego punktu, zdobywasz przyczółek i zostajesz
administratorem. Każda maszyna to zagadka ze znaną odpowiedzią, a gdy utkniesz, zawsze jest opis, z którego można się
uczyć.

## Czego potrzebujesz

- Hipernadzorca (VirtualBox albo VMware), skonfigurowany w [Pierwszych krokach](/pl/lab/start/).
- **Kali Linux**, twoja maszyna atakującego, uruchomiona i zaktualizowana. Ma już zainstalowane narzędzia, których
  będziesz potrzebować.
- Około 1,5 GB na pobranie pierwszego celu i cierpliwość do czytania, gdy utkniesz. To normalne.

## Jak to się składa

Dwie maszyny w jednej prywatnej sieci i nic więcej:

- **Kali** to miejsce, w którym pracujesz. Daj jej dwie karty sieciowe: jedną **NAT**, żeby miała dostęp do
  internetu, i jedną **host-only** (VirtualBox) albo **host-only / LAN segment** (VMware) dla laboratorium.
- **Cel** dostaje tylko jedną kartę, w tej samej sieci host-only. Nie może sięgać do internetu ani do twojej sieci
  domowej — jest celowo pełen dziur.

> [!WARNING]
> Niektóre pobrane maszyny przychodzą ustawione na **Bridged**, co postawiłoby celowo zhakowany komputer prosto
> w twojej sieci domowej. Zawsze otwieraj ustawienia sieci celu i przełączaj je na host-only **przed** pierwszym
> uruchomieniem.

## Zdobądź pierwszy cel

1. Wejdź na **VulnHub** (vulnhub.com), darmową bibliotekę podatnych maszyn budowanych przez społeczność. Wybierz
   jedną oznaczoną dla początkujących. **Basic Pentesting: 1**, **Kioptrix** i **Mr-Robot: 1** to łagodne, dobrze
   znane początki.
2. Pobierz ją. Przychodzi jako `.ova` albo `.zip` z dyskiem `.vmdk` w środku.
3. **Sprawdź skrót (hash) pliku** względem MD5 albo SHA1 podanego na stronie, tak samo jak w
   [Sprawdzaniu skrótu pliku](/en/guides/check-hash/). Na Linuksie albo w Kali:

   ```sh
   sha1sum the-machine.ova
   ```

   Liczba, którą wypisze, musi zgadzać się z tą na stronie. Jeśli nie — pobierz jeszcze raz.

## Zaimportuj i odizoluj

1. W VirtualBox wybierz **File > Import Appliance** i wskaż `.ova`. W VMware otwórz ją przez **Open**. Dysk `.vmdk`
   podłącza się zamiast tego do nowej maszyny (zobacz notatki dołączone do maszyny).
2. Otwórz **Settings > Network** nowej maszyny. Ustaw jej jedyny adapter na **Host-only Adapter** (VirtualBox) albo
   **Host-only** (VMware). Zapisz.
3. Upewnij się, że twoja maszyna **Kali** ma kartę w tej **samej** sieci host-only, plus swoją kartę NAT do
   aktualizacji.
4. Uruchom cel. Nie logujesz się do niego — atakujesz go z zewnątrz, więc po prostu daj mu wstać do ekranu logowania
   i zostaw.

## Znajdź go, a potem mu się przyjrzyj

Tu zaczyna się ćwiczenie. Z Kali:

1. **Znajdź adres celu.** Dostał IP z sieci host-only; to znajduje który:

   ```sh
   sudo nmap -sn 192.168.56.0/24
   ```

   (Użyj zakresu swojej sieci host-only. Domyślny w VirtualBox to `192.168.56.0/24`.) Adres, który nie jest twoją
   maszyną Kali ani bramą, to twój cel.
2. **Sprawdź, co na nim działa.** Skan portów wypisuje otwarte drzwi — serwer WWW, udział plików, stary serwis
   logowania:

   ```sh
   sudo nmap -sV -sC 192.168.56.101
   ```

   `-sV` pyta każdy otwarty port, jaki to program i wersja; `-sC` uruchamia standardowe sprawdzenia Nmap. Zapisz każdy
   serwis i wersję. Ta lista to twoja mapa, a niemal każda droga do środka zaczyna się od czegoś na niej.

Stąd droga jest inna dla każdej maszyny: strona z wadą, serwis ze znaną podatnością, hasło, które da się zgadnąć,
plik zostawiony nie tam, gdzie trzeba. Znaleźć tę drogę i nią przejść — to całe ćwiczenie.

## Gdy utkniesz (a utkniesz)

Utknięcie to sedno — tu jest nauka. Najpierw spróbuj rzeczy oczywistych: otwórz w przeglądarce każdą stronę, którą
znalazł skan, poszukaj w sieci dokładnego serwisu i wersji z wyniku Nmap wraz ze słowem „exploit” i poszukaj stron,
do których strona nie linkuje. Gdy naprawdę skończą ci się pomysły — przeczytaj opis:

1. Większość stron na VulnHub ma na dole linki do **opisów przejścia (walkthroughs)**. Tłumaczą zamierzoną drogę krok
   po kroku.
2. Czytaj tylko do swojego następnego kroku, a potem wróć i zrób go sam. Przeczytanie całości z góry uczy o wiele
   mniej.
3. Prowadź notatki w dzienniku laboratorium: polecenie, co zwróciło, co to znaczyło. Te notatki to początek twoich
   własnych opisów później.

> [!TIP]
> Gdy jedna maszyna zacznie wychodzić, przerób tematyczny zestaw. **Lista maszyn w stylu OSCP od TJ Null** (poszukaj
> jej) to dobrze znana ścieżka: dziesiątki maszyn z VulnHub i Hack The Box w przybliżonej kolejności trudności.

## Trzymaj wszystko w izolacji

1. Cel zostaje w swojej sieci host-only przez całe życie. Nigdy nie dawaj mu karty NAT ani bridged „tylko żeby go
   zaktualizować” — tych maszyn się nie aktualizuje, tylko wymienia.
2. Zrób migawkę celu zaraz po imporcie, z etykietą `fresh`. Jeśli zepsujesz go bardziej, niż trzeba do ćwiczeń,
   przywróć migawkę zamiast pobierać od nowa.
3. Gdy skończysz na dziś, wyłącz cel. Maszyna zbudowana po to, by dało się ją zhakować, nie powinna stać włączona bez
   celu.

## Co dalej

- **Hack The Box** i **TryHackMe** uruchamiają takie same cele w chmurze, więc nie trzeba nic pobierać ani niczego
  izolować — dobra zmiana tempa, gdy lokalny cykl stanie się naturalny.
- Dodaj drugi cel i ćwicz przechodzenie z jednej maszyny na drugą — tak właśnie padają prawdziwe sieci.
- Spróbuj sam zbudować cel: weź zwykłą maszynę z Linuksem i celowo ją źle skonfiguruj. Nauczyć lekcji to najlepszy
  sposób, by się jej nauczyć.

## Gdy coś nie działa

1. **Nmap nie znajduje celu:** maszyna nie jest w tej samej sieci host-only co Kali albo nie skończyła się uruchamiać.
   Sprawdź, że oba adaptery są w identycznej sieci host-only, i daj jej jeszcze minutę.
2. **Maszyna nie importuje się albo nie startuje:** niektóre starsze maszyny z VulnHub oczekują VMware. Strona zwykle
   to mówi; zmień hipernadzorcę albo poszukaj podanej na niej poprawki.
3. **Znalazłeś IP, ale wszystkie porty są zamknięte:** najpewniej skanujesz własną bramę Kali, a nie cel. Uruchom
   ponownie skan hostów `-sn` i wybierz drugi adres.
