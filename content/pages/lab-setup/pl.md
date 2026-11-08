---
# Lab setup → lvlulcuma.com/pl/lab/setup/
updated: 2026-11-08
title: "Zbuduj swoje laboratorium"
summary: "Cztery aplikacje do ćwiczeń na twoim komputerze: krok po kroku, z jednego gotowego pliku."   # one line on the Lab overview page
intro: "Bezpieczne miejsce do ćwiczenia ataków: cztery celowo podatne aplikacje, które działają wyłącznie na twoim komputerze. Jeden plik uruchamia je wszystkie, a jedno polecenie przywraca je do czystego stanu."
related_article: "2026-09"   # a monthly article linked at the bottom (folder name in content/articles/)
key:   # the big fact at the top of the box beside the page
  label: "Aplikacje do ćwiczeń"
  value: "4"
---

## Czego potrzebujesz

- **Dockera**: narzędzia, które uruchamia każdą aplikację w osobnym kontenerze (małym, oddzielnym „pudełku” na twoim
  komputerze). Na Windowsie i macOS to Docker Desktop ([instrukcja dla Windowsa](/en/guides/install-docker-desktop/)),
  a na Linuksie Docker Engine z wtyczką Compose.
- **Kilku gigabajtów wolnego miejsca na dysku** na aplikacje. Pobierają się przy pierwszym uruchomieniu.
- **Burp Suite Community Edition**: darmowego narzędzia, które pokazuje każde żądanie wysyłane przez twoją
  przeglądarkę. Przyda się dopiero w części „Podglądaj ruch”.

## Co jest w laboratorium

| Aplikacja | Co ćwiczysz | Port |
|---|---|---|
| OWASP Juice Shop | Sklep internetowy z błędami z całego OWASP Top 10 i wieloma innymi | 3000 |
| OWASP WebGoat | Krótkie lekcje: najpierw wyjaśnienie podatności, potem próba jej wykorzystania | 8081, 9090 |
| VAmPI | Małe REST API z podatnościami z OWASP API Security Top 10 | 5001 |
| DVGA | Ataki na API GraphQL, w trybie dla początkujących i dla ekspertów | 5013 |

## Pobierz plik

1. Utwórz folder na laboratorium, na przykład `practice-lab`, i otwórz w nim terminal.
2. Pobierz plik, który opisuje laboratorium:

   ```sh
   curl -O https://lvlulcuma.com/lab/compose.yaml
   ```

   W PowerShellu na Windowsie wpisz `curl.exe` zamiast `curl`:

   ```powershell
   curl.exe -O https://lvlulcuma.com/lab/compose.yaml
   ```

3. Przeczytaj go, zanim go uruchomisz. Jest krótki, a czytanie plików z internetu przed uruchomieniem to dobry nawyk.
   Oto cały plik:

   ```yaml
   #include public/lab/compose.yaml
   ```

   > [!NOTE]
   > Każdy wiersz pod `ports:` zaczyna się od `127.0.0.1`. To dzięki temu aplikacje są dostępne tylko z twojego komputera.

## Uruchom

1. W tym samym folderze wykonaj:

   ```sh
   docker compose up -d
   ```

   Przy pierwszym uruchomieniu pobierają się wszystkie cztery aplikacje, więc daj im kilka minut. `-d` sprawia, że
   działają w tle.
2. Sprawdź, czy wszystkie działają:

   ```sh
   docker compose ps
   ```

   W kolumnie `STATUS` przy każdej aplikacji powinno być `Up`. WebGoat dopisuje `(healthy)`, gdy jest gotowy, mniej
   więcej minutę później.

## Otwórz każdą aplikację

1. **Juice Shop:** otwórz `http://127.0.0.1:3000`. Sklep ma ukrytą tablicę wyników (score board), która śledzi twoje
   postępy, a jej znalezienie to pierwsze wyzwanie.
2. **WebGoat:** otwórz `http://127.0.0.1:8081/WebGoat` i załóż konto. Nazwa musi mieć od 6 do 45 znaków (małe litery
   łacińskie, cyfry lub myślniki), a hasło od 6 do 10 znaków. Konto istnieje tylko wewnątrz aplikacji. WebWolf, jego
   pomocnik z testową skrzynką pocztową i wysyłaniem plików, działa pod adresem `http://127.0.0.1:9090/WebWolf`.
3. **VAmPI:** otwórz raz `http://127.0.0.1:5001/createdb`. Wypełni to bazę danych przykładowymi użytkownikami
   i książkami. Potem otwórz `http://127.0.0.1:5001/ui/`: to strona z listą wszystkich endpointów API.
4. **DVGA:** otwórz `http://127.0.0.1:5013`. Zacznij od trybu dla początkujących; tryb dla ekspertów utrudnia te same
   ataki.

## Podglądaj ruch w Burp Suite

1. Zainstaluj [Burp Suite Community Edition](https://portswigger.net/burp/communitydownload) i uruchom go
   z ustawieniami domyślnymi.
2. Przejdź do **Proxy > Intercept** i kliknij **Open browser**. Ta przeglądarka wysyła wszystko przez Burpa, także
   ruch do `127.0.0.1`, więc nie trzeba niczego ustawiać.
3. Otwórz w niej jedną z aplikacji i zajrzyj do **Proxy > HTTP history**: jest tam każde żądanie i każda odpowiedź.
   Kliknij żądanie prawym przyciskiem i wybierz **Send to Repeater**, żeby je zmienić i wysłać ponownie.

> [!TIP]
> Jeśli strony przestały się ładować, włączony jest **Intercept** i wstrzymuje każde żądanie, dopóki nie klikniesz
> **Forward**. Wyłącz go, gdy chcesz tylko obserwować.

> [!NOTE]
> Burp nasłuchuje na `127.0.0.1:8080`. Dlatego WebGoat w tym laboratorium używa portu 8081.

## Trzymaj laboratorium w izolacji

1. **Zostaw `127.0.0.1` w każdym wierszu z portem.** Bez tego Docker otworzy port w każdej sieci, do której jest
   podłączony twój komputer, także w Wi-Fi w kawiarni. Na Linuksie tak otwarty port omija nawet reguły firewalla
   ustawione przez ufw.
2. **Nigdy nie uruchamiaj laboratorium na serwerze**, w chmurze ani na wspólnym komputerze.
3. **Zatrzymuj je po skończonej pracy** poleceniem `docker compose down`. Wyłączonej podatnej aplikacji nie da się
   zaatakować.
4. **Nie wpisuj do aplikacji prawdziwych haseł ani danych osobowych.** Używaj zmyślonych nazw, np. `test-user`.

## Reset i aktualizacja

1. Żeby zacząć od nowa, wykonaj `docker compose down`, a potem `docker compose up -d`. Wszystko, co zmieniono
   w aplikacjach, znika, a one startują od zera.
2. Żeby pobrać najnowsze wersje, wykonaj `docker compose pull`, a potem `docker compose up -d`.
3. Żeby całkowicie usunąć laboratorium, wykonaj `docker compose down --rmi all`. To usuwa też pobrane aplikacje.

## Dodaj crAPI (opcjonalnie)

OWASP crAPI to większa aplikacja do ćwiczeń: serwis dla właścicieli samochodów ze sklepem, kontaktem z mechanikiem
i skrzynką pocztową, złożony z wielu kontenerów. Ma własny plik compose, więc działa obok tego laboratorium, a nie
w nim.

1. Pobierz go i uruchom poleceniami z jego własnej instrukcji:

   ```sh
   curl -L -o crapi.zip https://github.com/OWASP/crAPI/archive/refs/heads/main.zip
   unzip crapi.zip
   cd crAPI-main/deploy/docker
   docker compose pull
   docker compose -f docker-compose.yml --compatibility up -d
   ```

   Na Windowsie wpisz `curl.exe` zamiast `curl` i `tar -xf crapi.zip` zamiast `unzip crapi.zip`.
2. Otwórz `http://127.0.0.1:8888`. Jego e-maile trafiają do testowej skrzynki pod adresem `http://127.0.0.1:8025`.

> [!WARNING]
> crAPI też domyślnie nasłuchuje tylko na `127.0.0.1`, dzięki wierszowi `LISTEN_IP` w jego pliku `.env`. Jego
> instrukcja pokazuje, jak zmienić to na `0.0.0.0`; w laboratorium do ćwiczeń tego nie rób.

## Gdy coś nie działa

1. **„port is already allocated”:** ten port zajmuje inny program. Zmień w tym wierszu pierwszą liczbę po
   `127.0.0.1:`, na przykład na `"127.0.0.1:3001:3000"`, i otwieraj aplikację na nowym porcie.
2. **Aplikacja nie startuje na komputerze z ARM** (np. na Macu z Apple silicon): niektóre obrazy są zbudowane tylko
   dla x86. W ustawieniach Docker Desktop włącz **Use Rosetta for x86_64/amd64 emulation on Apple Silicon** i dodaj
   `platform: linux/amd64` pod wierszem `image:` tej aplikacji. Artykuł poniżej wyjaśnia to dokładniej.
3. **WebGoat nie otwiera się zaraz po uruchomieniu:** potrzebuje około minuty. Poczekaj, aż `docker compose ps`
   pokaże `(healthy)`.
4. **VAmPI odpowiada błędem albo pustą listą:** najpierw otwórz `/createdb` (zob. „Otwórz każdą aplikację”).
5. **Coś innego:** `docker compose logs juice-shop` (albo `webgoat`, `vampi`, `dvga`) pokaże, co ta aplikacja
   wypisała przy starcie.
