---
# Practice safely and legally → lvlulcuma.com/pl/lab/rules/
updated: 2026-11-08
title: "Ćwicz bezpiecznie i legalnie"
summary: "Gdzie wolno ćwiczyć, gdzie nie wolno i co zrobić, gdy trafisz na prawdziwy problem."   # one line on the Lab overview page
intro: "Własne laboratorium to najbezpieczniejsze miejsce do ćwiczeń. Te zasady chronią cię, gdy wychodzisz poza nie: do programów bug bounty, stron treningowych i prawdziwych systemów."
---

1. **Testuj tylko systemy, które należą do ciebie lub na których testowanie masz pisemną zgodę.** Zdobądź zgodę przed
   rozpoczęciem pracy i od kogoś, kto naprawdę może jej udzielić. Znajomy, który pracuje w firmie, nie może pozwolić
   ci testować strony tej firmy.
2. **Trzymaj się zakresu (scope).** Program bug bounty albo umowa na testy wymienia, co i jak wolno testować.
   Wszystko, czego tam nie ma, jest poza zakresem, więc przeczytaj zasady, zanim wyślesz pierwsze żądanie.
3. **Trzymaj podatne aplikacje na własnym komputerze.** Przypinaj je do `127.0.0.1`, nigdy nie wystawiaj ich do
   internetu ani do wspólnej sieci i zatrzymuj je po skończonej pracy.
4. **Sprawdzaj cel przed każdym atakiem.** Jedna zła cyfra w adresie IP i twój skaner trafi w cudzy system.
5. **Nie zatrzymuj danych, które nie były przeznaczone dla ciebie.** Jeśli trafisz na prawdziwe hasła albo dane
   osobowe, przerwij. Zachowaj tylko to, bez czego nie da się pokazać problemu, i usuń to zaraz po zgłoszeniu.
6. **Zgłaszaj prawdziwy problem prywatnie.** Poszukaj kontaktu właściciela w sprawach bezpieczeństwa (wiele stron
   podaje go w pliku `/.well-known/security.txt`) albo jego zasad zgłaszania podatności. Daj właścicielowi czas na
   poprawkę, zanim zaczniesz o tym mówić.

> [!WARNING]
> Dostęp do systemu komputerowego bez zgody jest przestępstwem niemal wszędzie: w USA na mocy Computer Fraud and Abuse
> Act, w Wielkiej Brytanii na mocy Computer Misuse Act, a w krajach UE na mocy przepisów krajowych zgodnych z dyrektywą
> 2013/40/UE. Ciekawość i dobre intencje to nie zgoda.

Ta strona przestrzega tych samych zasad. Pokazane tu ataki wykonano na aplikacjach laboratoryjnych albo dotyczą
problemów, które najpierw zgłoszono właścicielom i które zostały już naprawione.
