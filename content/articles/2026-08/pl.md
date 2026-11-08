---
title: "OWASP API Top 10 z perspektywy programisty"
date: 2026-08-31
topic: api
dek: "Tę listę zwykle tłumaczy się przez pryzmat ataków. Oto pięć zabezpieczeń, które radziłbym każdemu zespołowi wbudować w API jeszcze przed startem."
related: "research/api-scanner-benchmark"
---

### 1. Sprawdzaj uprawnienia do każdego obiektu

API1, Broken Object Level Authorization, to wciąż najczęstsza luka w API. Każde żądanie z identyfikatorem powinno sprawdzać — w tym samym kodzie, który wczytuje rekord — czy wywołujący ma prawo zobaczyć właśnie ten rekord. Samo sprawdzenie, czy użytkownik jest zalogowany, nie wystarczy.

### 2. Zwracaj tylko potrzebne pola

API3 dotyczy odpowiedzi zawierających więcej, niż pokazuje ekran, oraz żądań, które pozwalają klientowi ustawiać pola, do których nie powinien mieć dostępu. Definiuj jawne schematy wejścia i odpowiedzi zamiast serializować całe obiekty z bazy.

### 3. Ustaw limity na wszystko

API4: limity żądań na użytkownika i na klucz, maksymalny rozmiar strony wyników, limity rozmiaru plików i timeouty. Limity chronią dostępność usługi i Twoje koszty.

### 4. Znaj każdy udostępniony endpoint

API9: prowadź spis hostów, wersji i środowisk. Stare endpointy v1 i zapomniane serwery testowe to miejsca, gdzie najczęściej brakuje zabezpieczeń.

### 5. Traktuj zewnętrzne API jak niezaufane dane

API10: waliduj dane od partnerów i integracji tak samo rygorystycznie jak dane od użytkowników.

Żaden z tych kroków nie wymaga osobnego zespołu bezpieczeństwa. Wystarczy, że znajdą się w definicji ukończenia zadania (definition of done).
