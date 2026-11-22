---
# Forensics hub → lvlulcuma.com/pl/forensics/
# Everything on the site about digital forensics, in one place. The page holds no lessons of its own: it lists the
# learning path of the Roadmap job in `path: job:` (each topic becomes a link once its own page is written), the lab
# ideas in the "forensics" group (content/lab/), the write-ups (content/forensics/writeups/) and the jobs in `jobs: list:`.
# "What digital forensics is" (`what:` is its heading, the text is below the second ---) stays high level, like every
# overview page: the details belong on the topic pages.
updated: 2026-11-22
title: "Informatyka śledcza"
intro: "Jak ustalić, co wydarzyło się na komputerze czy telefonie, na podstawie śladów, które w nich zostają — tak, by wynik wytrzymał sprawdzenie. Ścieżka nauki, pomysły na laboratorium i rozwiązane przypadki, dodawane w miarę pisania."
what: "Czym jest informatyka śledcza"
path:
  job: forensics-analyst   # the Roadmap job whose learning path this page lists (content/roadmap/jobs/<job>/learn.yml)
  heading: "Ucz się krok po kroku"
  intro: "Tematy potrzebne analitykowi informatyki śledczej, od pierwszych kroków do poziomu eksperta. Temat staje się linkiem, gdy tylko dostanie własną stronę; najpierw powstają podstawy."
  pages: "Napisano {n} z {total}"   # {n} topics with their own page, out of {total}
  full: "Pełna ścieżka z opisem każdego tematu"
labs:
  heading: "Ćwicz w laboratorium"
  intro: "Przygotuj dowody samodzielnie: obrazy dysków, zrzuty pamięci i logi z własnych maszyn wirtualnych, by je rozbierać bez dotykania czyichkolwiek prawdziwych danych."
  empty: "Pierwsze pomysły na laboratorium informatyki śledczej są w przygotowaniu."
writeups:
  heading: "Write-upy"
  intro: "Przypadki od początku do końca: pytanie, dowody, każdy krok analizy i odpowiedź. Część pochodzi z mojego własnego laboratorium, część z publicznych zadań, których zasady pozwalają publikować rozwiązania."
  empty: "Nie ma jeszcze write-upów. Pierwsze pojawią się po pierwszych pomysłach na laboratorium."
jobs:
  heading: "Dokąd to prowadzi"
  intro: "Zawody, w których te umiejętności są podstawą pracy, każdy z własną ścieżką nauki."
  list: [forensics-analyst, cybercrime-investigator, incident-responder]   # Roadmap job folders
---

Informatyka śledcza to odnajdywanie, zabezpieczanie i odczytywanie śladów, które zostawiają komputery, telefony i
usługi online, tak by dało się powiedzieć, co się stało, kiedy i kto lub co to zrobiło — i poprzeć każde twierdzenie.
Te same umiejętności przydają się w śledztwie policyjnym, gdy firma wyjaśnia włamanie, i w sprawie sądowej.

Od zwykłego szukania usterek odróżnia ją to, że twoją pracę ktoś może później sprawdzić: inny biegły, prawnik, sędzia.
Dlatego każda sprawa przechodzi przez te same cztery etapy, tak jak opisuje je
[NIST SP 800-86](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-86.pdf):

1. **Zabezpieczenie:** znaleźć źródła (laptop, telefon, konto w chmurze, logi serwera) i pozyskać ich dane, niczego
   nie zmieniając.
2. **Badanie:** przetworzyć zebrany materiał narzędziami i ręcznie, by wydobyć to, co ważne.
3. **Analiza:** połączyć elementy i odpowiedzieć na pytania sprawy.
4. **Raport:** zapisać, co udało się znaleźć, w jaki sposób, oraz czego to dowodzi, a czego nie.

Całość opiera się na kilku zasadach. Pracuj na zweryfikowanej kopii, nigdy na oryginale. Sprawdzaj każdą kopię hashem
— „odciskiem” danych, który zmienia się, gdy zmieni się choćby jeden bit. Prowadź notatki na bieżąco, by ktoś inny mógł
powtórzyć każdy krok i uzyskać ten sam wynik. I zapisuj, kto miał dowody, kiedy i co z nimi robił: to łańcuch dowodowy
(chain of custody).

Ścieżka nauki poniżej zaczyna się od tych podstaw i prowadzi dalej — do analizy pamięci, urządzeń mobilnych i chmury.
