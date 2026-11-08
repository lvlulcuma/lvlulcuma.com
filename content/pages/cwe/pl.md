---
# CWE list → lvlulcuma.com/pl/cwe/
# (Each write-up is in content/cwe/<number>/. The categories and CWE names are in content/cwe/owasp-2025.yml.)
updated: 2026-11-01
title: "Słabości (CWE)"
intro: "Wszystkie słabości z OWASP Top 10:2025 w jednym miejscu. Otwórz dowolną, żeby zobaczyć, jak działa, jak znajdują ją testerzy i jak naprawiają ją programiści."
# Short paragraphs under the intro. <strong> is allowed.
about:
  - "<strong>CWE</strong> (Common Weakness Enumeration) to jeden rodzaj błędu, przez który oprogramowanie można zaatakować. Każdy ma numer, a listę prowadzi MITRE. Na przykład CWE-639 to „aplikacja ufa identyfikatorowi, który jej wysyłasz”. Za jednym CWE mogą stać tysiące prawdziwych podatności."
  - "OWASP grupuje najważniejsze dla aplikacji webowych słabości w dziesięć kategorii — OWASP Top 10 — i przypisuje do nich 249 CWE. To właśnie lista poniżej. Te z linkiem są tu omówione; strzałka ↗ otwiera stronę MITRE dla pozostałych."
  - "Każde omówienie zaczyna się od tego, co powinien wiedzieć każdy, a potem dzieli się na <strong>stronę ataku</strong> (jak testerzy zauważają problem, jak jest poważny, jak go udowodnić i opisać w raporcie) i <strong>stronę obrony</strong> (jak go naprawić, wykryć przed wydaniem i zauważyć na produkcji). Przełącznik <strong>Pokaż</strong> pozwala czytać obie strony albo tylko jedną. Twój wybór zostaje, gdy przechodzisz między stronami."
# One line under each category heading, in plain words.
categories:
  a01: "Użytkownik dostaje się do cudzych danych lub działań: cudzego konta, panelu administratora, pliku spoza swojego folderu."
  a02: "Niebezpieczne ustawienia: włączony tryb debugowania, hasła w plikach konfiguracyjnych, niechronione ciasteczka, zbyt otwarte zasady dostępu."
  a03: "Słabe punkty w cudzym kodzie: przestarzałe biblioteki, porzucone pakiety, komponenty, którym nie można ufać lub których nie da się zaktualizować."
  a04: "Źle użyte szyfrowanie i losowość: dane wysyłane lub przechowywane otwartym tekstem, słabe algorytmy, klucze i tokeny do odgadnięcia."
  a05: "Dane, które aplikacja traktuje jak kod lub polecenia: SQL injection, cross-site scripting (XSS), wstrzykiwanie poleceń i ich krewni."
  a06: "Błędy w założeniach, a nie w kodzie: brak limitów, zaufanie do przeglądarki, reguły biznesowe, które da się nagiąć."
  a07: "Problemy z logowaniem i sesjami: dozwolone słabe hasła, nieograniczone zgadywanie, sesje, które nigdy się nie kończą."
  a08: "Zaufanie do kodu lub danych bez sprawdzania: niepodpisane aktualizacje, niebezpieczna deserializacja, skrypty z cudzych stron."
  a09: "Ataki, których nikt nie zauważa: nic nie trafia do logów, trafia nie to, co trzeba, albo logi da się podrobić."
  a10: "Co się dzieje, gdy coś pójdzie nie tak: błędy zdradzające szczegóły, awarie i kontrole, które przy błędzie przepuszczają wszystkich."
---
