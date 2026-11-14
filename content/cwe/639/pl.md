---
# One weakness explained → lvlulcuma.com/pl/cwe/639/  (plus /attack/ and /defend/ views)
# A "##" heading ending in <!-- attack --> or <!-- defend --> starts a part for one side only.
title: "IDOR: gdy zmiana ID pokazuje cudze dane"
cwe: 639
name: "Authorization Bypass Through User-Controlled Key"
also: ["IDOR", "BOLA"]
owasp: "A01:2025"
api: "API1:2023"
top25: 24
dek: "Aplikacja znajduje rekord po ID, które wysyłasz, ale nie sprawdza, czy ten rekord jest twój. Jak szatnia, w której za dowolny numerek wydają dowolny płaszcz."
date: 2026-11-01
sources:
  - name: "MITRE CWE-639: Authorization Bypass Through User-Controlled Key"
    url: "https://cwe.mitre.org/data/definitions/639.html"
  - name: "MITRE: 2025 CWE Top 25 Most Dangerous Software Weaknesses"
    url: "https://cwe.mitre.org/top25/archive/2025/2025_cwe_top25.html"
  - name: "OWASP Top 10:2025, A01 Broken Access Control"
    url: "https://top10.owasp.org/2025/A01_2025-Broken_Access_Control/"
  - name: "OWASP API Security Top 10, API1:2023 Broken Object Level Authorization"
    url: "https://owasp.org/API-Security/editions/2023/en/0xa1-broken-object-level-authorization/"
  - name: "OWASP Cheat Sheet: Insecure Direct Object Reference Prevention"
    url: "https://cheatsheetseries.owasp.org/cheatsheets/Insecure_Direct_Object_Reference_Prevention_Cheat_Sheet.html"
  - name: "OWASP Web Security Testing Guide: Testing for Insecure Direct Object References"
    url: "https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/05-Authorization_Testing/04-Testing_for_Insecure_Direct_Object_References"
  - name: "ACSC, CISA and NSA: Preventing Web Application Access Control Abuse (AA23-208A, 27 July 2023)"
    url: "https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-208a"
  - name: "KrebsOnSecurity: First American Financial Corp. Leaked Hundreds of Millions of Title Insurance Records (24 May 2019)"
    url: "https://krebsonsecurity.com/?p=47813"
  - name: "First American Financial, Form 10-Q for Q2 2021 (SEC settlement)"
    url: "https://www.sec.gov/Archives/edgar/data/1472787/000156459021037651/faf-10q_20210630.htm"
  - name: "Hunton: NYDFS reaches $1 million settlement with First American Title Insurance (4 Dec 2023)"
    url: "https://www.hunton.com/privacy-and-cybersecurity-law-blog/2023/12/04/new-york-department-of-financial-services-reaches-1-million-dollar-settlement-with-first-american-title-insurance-in-data-breach-investigation/"
  - name: "PortSwigger Web Security Academy: Insecure direct object references (IDOR)"
    url: "https://portswigger.net/web-security/access-control/idor"
---

## W skrócie

Oddajesz płaszcz do szatni i dostajesz numerek 42. Później wracasz i mówisz: „Czterdzieści trzy, poproszę”. Uważna szatniarka spojrzy na twój numerek i odmówi: ten nie jest twój. Nieuważna po prostu podejdzie do wieszaka 43 i poda ci płaszcz obcej osoby.

Aplikacje webowe robią to cały dzień. Każde zamówienie, wiadomość, faktura i plik mają ID, trochę jak ten numerek. Kiedy prosisz o któreś z nich, aplikacja powinna sprawdzić, czy jest *twoje*. Gdy pomija to sprawdzenie i wydaje cokolwiek o podanym ID, <mark>możesz czytać, a czasem i zmieniać cudze rzeczy, po prostu zmieniając liczbę</mark>. To właśnie ta słabość.

MITRE nazywa ją CWE-639, *Authorization Bypass Through User-Controlled Key*. Prawie wszyscy inni mówią **IDOR** (insecure direct object reference, niebezpieczne bezpośrednie odwołanie do obiektu). Osoby pracujące z API mówią **BOLA** (broken object level authorization, wadliwa autoryzacja na poziomie obiektu). Trzy nazwy, jeden błąd.

- **OWASP Top 10:** część A01:2025 Broken Access Control, kategorii numer jeden.
- **OWASP API Security Top 10:** numer jeden, API1:2023.
- **CWE Top 25:** 24. miejsce na liście najgroźniejszych słabości MITRE za 2025 rok, a rok wcześniej 30.
- **Kto może na nią trafić:** zwykle każdy ze zwykłym kontem. Czasem nawet bez niego.

## Słowa, które się przydadzą

Jeśli aplikacje webowe są dla ciebie nowe, tych pięć słów sprawi, że reszta strony będzie łatwa:

- **Żądanie:** wiadomość, którą twoja przeglądarka wysyła do strony, na przykład „pokaż fakturę 1042”. Nie widzisz go, ale każde kliknięcie wysyła żądanie.
- **ID:** liczba lub kod, który wskazuje jeden rekord. `1042` to ID. Tak samo `a8f3c2e1-…`, `report-2026-10.pdf` i `dana@example.com`.
- **Cookie sesyjne:** długi losowy ciąg znaków, który strona daje twojej przeglądarce po zalogowaniu. Przeglądarka wysyła go z każdym żądaniem, więc strona wie, że to wciąż ty, i nie pyta znowu o hasło.
- **Uwierzytelnianie:** udowodnienie, *kim jesteś*. Logowanie to uwierzytelnianie.
- **Autoryzacja:** decyzja, *czego wolno ci dotknąć*. To ten krok znika.

> [!ASIDE] Łatwy sposób, żeby zapamiętać
> Uwierzytelnianie to bramkarz, który przy wejściu sprawdza twój dowód. Autoryzacja to barman, który sprawdza, czy jesteś na liście gości strefy VIP.

## Jak to działa, krok po kroku

Wyobraź sobie mały sklep internetowy z dwojgiem klientów, Daną i Alexem.

1. **Dana się loguje.** Sklep daje jej przeglądarce cookie sesyjne. Od teraz jest ono w każdym jej żądaniu, więc sklep wie, że żądanie pochodzi od Dany.
2. **Dana otwiera historię zamówień** i klika fakturę 1042. Jej przeglądarka wysyła takie żądanie:

   ```http
   GET /api/invoices/1042 HTTP/1.1
   Host: shop.example
   Cookie: session=7f3c9a…   (proves this is Dana)
   ```

3. **Serwer odczytuje liczbę** `1042`, szuka faktury 1042 w swojej bazie danych i odsyła ją:

   ```json
   {
     "id": 1042,
     "customer": "Dana Kowalski",
     "address": "12 Elm Street",
     "total": "89.90"
   }
   ```

Zwróć uwagę, co niesie żądanie: dwa osobne fakty. Cookie mówi, **kto pyta**. `1042` mówi, **czego chce**. Bezpieczny serwer łączy jedno z drugim i pyta: *czy faktura 1042 należy do Dany?* Podatny serwer używa tylko drugiego faktu i wydaje rekord o każdym numerze, jaki dostanie.

Cała słabość sprowadza się więc do tego: serwer ufa ID z żądania i nigdy nie wiąże go z osobą, która to żądanie wysłała.

### Dlaczego kolejne numery pogarszają sprawę

Większość baz danych numeruje rekordy 1, 2, 3 i tak dalej. Jeśli twoja faktura ma numer 1042, sąsiednie to niemal na pewno 1041 i 1043, należące do innych klientów. Losowe ID (długie kody w rodzaju `a8f3c2e1-7b4d-…`) znacznie trudniej zgadnąć, ale nie dodają brakującego sprawdzenia. Utrudniają tylko zdobycie cudzych ID, a ID mają zwyczaj wyciekać.

## Gdzie się ukrywa

Ten problem może mieć wszystko, co do kogoś należy i ma ID. Kilka codziennych przykładów:

- **Sklep internetowy:** `/orders/1042` pokazuje imię, nazwisko, adres i telefon innego klienta.
- **Portal szkolny:** `/grades?student=5531` pokazuje oceny innego ucznia.
- **Przychodnia:** `/appointments/88213/letter.pdf` pobiera cudze potwierdzenie wizyty.
- **Komunikator:** załącznik z wiadomości pod adresem `/files/9f2c…` otwiera się każdemu, kto ma link, a nie tylko uczestnikom czatu.
- **Bankowość internetowa:** formularz przelewu z ukrytym polem „z rachunku”.

ID może być przesyłane w dowolnej części żądania:

- **W adresie:** `/orders/1042`, `/users/57/settings`
- **W parametrach zapytania** (po `?`): `?invoice=1042`
- **W treści żądania** (dane wysyłane przez formularz lub aplikację): `"accountId": 57` albo ukryte pole formularza
- **W cookie i nagłówkach:** cookie, które mówi, kim jesteś lub jaką masz rolę
- **W zapytaniach GraphQL**, **wiadomościach WebSocket** i formularzach wieloetapowych, które przenoszą ID z jednego kroku do następnego

A to miejsca, w których sprawdzenia brakuje najczęściej:

- **Boczne drzwi.** Strona faktury ma sprawdzenie, ale *Pobierz PDF*, *Eksportuj do CSV* i *Wyślij mi kopię mailem* dodał później ktoś inny, już bez niego.
- **Zmiany, nie tylko podgląd.** Edycja, usuwanie, anulowanie, zatwierdzanie. Aplikacja może odmówić *pokazania* ci cudzego zamówienia, a mimo to pozwolić je *anulować*.
- **Starsze lub drugie wejścia.** `/api/v1`, które wciąż działa obok `/api/v2`, albo osobne API, z którego korzysta aplikacja mobilna.
- **Rekordy w rekordach.** `/teams/7/projects/33`: aplikacja sprawdza, czy jesteś w zespole 7, ale nie, czy projekt 33 należy do zespołu 7.
- **Wskazanie cudzej rzeczy we własnej akcji.** Dołączenie pliku 881 do *swojej* wiadomości, gdy plik 881 należy do kogoś innego.

## W kodzie

Tak ten błąd wygląda w prawdziwym programie. To Node.js z Expressem (popularnym frameworkiem webowym) i Prismą (biblioteką do pracy z bazą danych). `requireLogin` odprawia każdego, kto nie jest zalogowany.

```js
// GET /api/invoices/:id
app.get("/api/invoices/:id", requireLogin, async (req, res) => {
  const invoice = await db.invoice.findUnique({
    where: { id: Number(req.params.id) },
  });
  if (!invoice) return res.status(404).end();
  res.json(invoice);
});
```

Przeczytajmy to linijka po linijce:

- `requireLogin` odpowiada na pytanie *kto to?* I tylko na nie. Nie wie, o którą fakturę ta osoba za chwilę poprosi.
- `req.params.id` to `1042` z adresu. Kontroluje je użytkownik.
- `findUnique({ where: { id } })` pobiera fakturę o tym ID, niezależnie od tego, do kogo należy.
- Nic nie porównuje właściciela faktury z zalogowanym użytkownikiem (`req.user.id`). To brakujące porównanie to cały błąd.

Poprawka to jeden dodatkowy warunek, a najważniejsze jest w niej to, skąd bierze się właściciel:

```js
app.get("/api/invoices/:id", requireLogin, async (req, res) => {
  const invoice = await db.invoice.findFirst({
    where: { id: Number(req.params.id), ownerId: req.user.id },
  });
  if (!invoice) return res.status(404).end();   // "not yours" looks the same as "not found"
  res.json(invoice);
});
```

`req.user.id` pochodzi z cookie sesyjnego, którego użytkownik nie może podrobić. Baza danych zwraca teraz fakturę tylko wtedy, gdy należy do tego użytkownika, więc cudzej faktury po prostu nie znajduje. ID nadal przychodzi od użytkownika i to w porządku: samo w sobie niczego już nie rozstrzyga.

> [!ASIDE] Dlaczego odpowiadać „nie znaleziono”
> Odpowiedź „brak dostępu” potwierdziłaby, że rekord istnieje. Odpowiadając „nie znaleziono” zarówno wtedy, gdy rekordu nie ma, jak i wtedy, gdy po prostu nie jest twój, niczego nie zdradzasz.

### Bardziej podstępna wersja

Ta przechodzi szybki przegląd kodu, bo sprawdzenie w niej *jest*:

```js
// PATCH /api/teams/:teamId/projects/:projectId   (rename a project)
app.patch("/api/teams/:teamId/projects/:projectId", requireLogin, async (req, res) => {
  // ✔ checks you're a member of the team in the address
  await requireMembership(req.user.id, req.params.teamId);
  // ✘ but renames whichever project is named, in any team
  await db.project.update({
    where: { id: Number(req.params.projectId) },
    data: { name: req.body.name },
  });
  res.status(204).end();
});
```

Sprawdzenie członkostwa dowodzi, że należysz do zespołu 7. Ale aktualizacja używa potem samego ID projektu, więc członek *dowolnego* zespołu może zmienić nazwę *dowolnego* projektu. Te dwa ID nigdy nie zostają ze sobą powiązane. Poprawka każe bazie danych sprawdzić oba naraz:

```js
const { count } = await db.project.updateMany({
  where: { id: Number(req.params.projectId), teamId: Number(req.params.teamId) },
  data: { name: req.body.name },
});
if (count === 0) return res.status(404).end();
```

### Formularz, który mówi, kim jesteś

Strona profilu z ID użytkownika w ukrytym polu:

```html
<form action="/profile" method="post">
  <input type="hidden" name="user_id" value="57">
  <input name="email" value="dana@example.com">
  <button>Save</button>
</form>
```

Jeśli serwer aktualizuje ten profil, który wskazuje `user_id`, to o tym, czyj profil się zmieni, decyduje osoba wysyłająca formularz. „Ukryte” znaczy tylko ukryte na stronie: każdy może je zobaczyć i zmienić w narzędziach deweloperskich swojej przeglądarki. Poprawka polega na tym, żeby zignorować `user_id` i aktualizować profil użytkownika z sesji.

## Jak myślą o tym testerzy <!-- attack -->

Pentesterzy i łowcy błędów z programów bug bounty sprawdzają to niemal w każdej aplikacji webowej, bo to częsty błąd, a pomysł jest prosty. Dla testera każde ID, które wysyła przeglądarka, to pytanie do serwera: *czy odpowiedziałbyś na to komuś innemu?* Cała praca to znalezienie miejsc, które przyjmują ID, i tych, które zapominają powiązać je z osobą, która pyta.

Wszystko tutaj dotyczy aplikacji, które masz pozwolenie testować: twoich własnych, laboratorium do ćwiczeń albo strony objętej zakresem programu bug bounty.

### Co przyciąga ich uwagę

- **Każde ID w żądaniu:** w adresie, parametrach zapytania, treści JSON, ukrytym polu formularza, cookie.
- **Boczne drzwi:** eksport, pobieranie, drukowanie, udostępnianie, „wyślij mi kopię mailem” — to części najczęściej dodawane bez sprawdzenia.
- **Zmiany, nie tylko podgląd**, bo aplikacja może chronić odczyt i zapomnieć o zapisie.
- **ID, które pojawiają się w odpowiedziach:** lista członków zespołu, wynik wyszukiwania czy powiadomienie z cudzymi ID. To pokazuje, że aplikacja takie odwołania rozdaje; czy je sprawdza, to następne pytanie.

### Jak to testują, co do zasady

Standardowa metoda z przewodnika OWASP po testowaniu wykorzystuje **dwa konta, które kontroluje sam tester**, każde z własnymi rekordami. Tester loguje się na pierwsze i sprawdza, czy aplikacja pozwoli temu kontu dostać się do rekordów *drugiego* przez każdą akcję, jaką oferuje dana funkcja: podgląd, edycję, usuwanie, eksport, udostępnianie. Jeśli aplikacja ma role, takie samo porównanie zwykłego konta z kontem administratora pokazuje, czy zwykły użytkownik dostanie się do rekordów przeznaczonych tylko dla administratora.

Oba konta należą do testera, więc dane żadnej prawdziwej osoby nie są ruszane: test pokazuje tylko, czy dwa konta testera przechodzą na teren drugiego, czy nie. Proxy takie jak Burp Suite (większość osób zaczyna od jego darmowej Community Edition) albo OWASP ZAP pozwala zobaczyć każde żądanie i wysłać je ponownie, a darmowe rozszerzenia, na przykład Autorize do Burpa, potrafią automatycznie powtarzać żądania jako drugie konto i oznaczać te, które nadal działają.

Do samego ćwiczenia, klik po kliku, najlepsze jest laboratorium zbudowane właśnie w tym celu: darmowe [laboratoria IDOR w Web Security Academy](https://portswigger.net/web-security/access-control/idor) od PortSwiggera, gdzie próbowanie tego to cały sens, a niczyje prawdziwe dane nie wchodzą w grę.

## Prawdziwy błąd czy fałszywy alarm? <!-- attack -->

Zmienione ID i odpowiedź `200 OK` same w sobie nie są dowodem. Zanim cokolwiek opiszesz:

- **Czyje dane wróciły?** Niektóre aplikacje ignorują ID i po cichu zwracają twój własny rekord albo pusty szablon. Liczy się to, czy odpowiedź zawiera dane *drugiego* konta.
- **Czy to miało być publiczne?** Publiczny profil czy dokument udostępniony „każdemu, kto ma link” to nie znalezisko. (Przy takich lepiej zapytać, czy link może wygasnąć albo zostać odwołany.)
- **Sprawdź akcje zapisu osobno.** Chroniony *podgląd* i otwarte *usuwanie* tego samego rekordu to wciąż prawdziwy błąd.
- **Strona to nie cała aplikacja.** Za ukrytym na stronie przyciskiem może stać działające żądanie. Sprawdzenie, które istnieje tylko w przeglądarce, się nie liczy ([CWE-602](https://cwe.mitre.org/data/definitions/602.html)).

## Jak poważne to jest i jak to opisać <!-- attack -->

To, jak poważny jest dany IDOR, zależy od tego, co zawiera rekord i co można z nim zrobić. Kilka typowych ocen CVSS 3.1:

| Ocena | Co jedno konto może zrobić innym |
|---|---|
| 8.1 | **Wysoka.** Czytać i zmieniać ich dane osobowe, z dowolnego konta.<br>`AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:N` |
| 7.5 | **Wysoka.** Czytać ich dane osobowe zupełnie bez konta.<br>`AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N` |
| 6.5 | **Średnia.** Czytać ich dane osobowe, z dowolnego konta.<br>`AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:N/A:N` |
| 4.3 | **Średnia.** Czytać coś drobnego, na przykład nazwę wyświetlaną.<br>`AV:N/AC:L/PR:L/UI:N/S:U/C:L/I:N/A:N` |

Ocena nie oddaje **skali**. Jeden odsłonięty rekord i cała baza danych mogą mieć ten sam wektor, więc programy i klienci biorą też pod uwagę, jak wrażliwe są dane i ile z nich da się dosięgnąć. A jeśli ID tak naprawdę oznacza rolę albo flagę „jest administratorem”, ten sam błąd staje się eskalacją **pionową**: zwykły użytkownik zmienia się w administratora.

> [!ASIDE] Pozioma i pionowa
> Pozioma: dostęp do rzeczy innego użytkownika na twoim własnym poziomie. Pionowa: dostęp do wyższego poziomu, na przykład administratora.

Jak odpowiedzialnie to zgłosić:

- **Używaj własnych kont** i poprzestań na najmniejszym dowodzie: jedno żądanie i jedna odpowiedź, które pokazują, że twoje dwa konta testowe przekraczają granicę. Nie zbieraj cudzych danych, żeby pokazać skalę — opisz ją słowami („ID rosną po kolei, a limitu żądań nie ma”).
- **Napisz to tak, żeby zostało naprawione:** dokładny endpoint i akcja, która część żądania niesie ID, dwa konta użyte w teście, co powinno się stać, a co się stało, wpływ i poprawka (powiązanie wyszukiwania z zalogowanym użytkownikiem).
- **W programie bug bounty najpierw przeczytaj zasady.** Większość programów wymaga własnych kont testowych i zabrania ruszania danych prawdziwych użytkowników.

## Jak programiści to naprawiają <!-- defend -->

### Napraw u źródła

- **Sprawdzaj na serwerze każde żądanie, które dotyka rekordu, i domyślnie odmawiaj.** Pytanie nie brzmi *czy ten użytkownik jest zalogowany?*, tylko *czy ten użytkownik może wykonać tę akcję na tym rekordzie?*
- **Bierz użytkownika (a w aplikacji wspólnej dla wielu organizacji także dzierżawcę, tenant) z sesji.** Nigdy z adresu, treści żądania, ukrytego pola ani nagłówka, który może ustawić klient.
- **Zawężaj samo wyszukiwanie, zamiast sprawdzać po fakcie.** Wczytuj rekordy *przez* użytkownika (`WHERE owner_id = current user`), wtedy cudzego rekordu po prostu nie ma. Większość frameworków to ułatwia:
  - Django: przekaż `owner=request.user` do `get_object_or_404`.
  - Rails: szukaj rekordu w `current_user.invoices`.
  - ASP.NET Core: autoryzacja oparta na zasobach z `AuthorizeAsync`.
  - Spring Security: `@PreAuthorize` i `@PostAuthorize`.
- **Trzymaj regułę w jednym miejscu:** w warstwie polityk albo middleware, przez które przechodzi każdy endpoint, żeby następny endpoint eksportu nie mógł o niej zapomnieć.

### Warstwy, które pomagają, ale nie są poprawką

- **Losowe ID (UUIDv4) zamiast liczników.** Dobra obrona w głąb, zalecana zarówno przez OWASP, jak i w komunikacie CISA. Ale to *nie* jest poprawka: sprawdzenie nadal musi być.
- **Nie szyfruj ID i nie uznawaj tego za naprawę.** OWASP to odradza: trudno zrobić to bezpiecznie, a brakującego sprawdzenia dalej brakuje.
- **Limity żądań** spowalniają każdego, kto próbuje wielu ID.
- **Zabezpieczenia na poziomie wierszy (row-level security) w bazie danych** jako siatka bezpieczeństwa, żeby zapomniane w kodzie sprawdzenie i tak nic nie zwracało. W PostgreSQL:

```sql
ALTER TABLE invoices ENABLE ROW LEVEL SECURITY;

CREATE POLICY own_invoices ON invoices
  USING (owner_id = current_setting('app.user_id')::bigint);

-- the app sets this at the start of each request:  SET LOCAL app.user_id = '57';
```

(Aplikacja musi łączyć się z bazą jako rola, która nie jest właścicielem tabeli, inaczej polityka jest pomijana, chyba że tabela ma ustawione `FORCE ROW LEVEL SECURITY`.)

### Wyłap to przed wydaniem

- **W przeglądzie kodu szukaj:** obsługi żądania, która odczytuje ID i szuka tylko po nim (`findById(req.params.id)`); `userId` albo `accountId` wziętego z treści żądania lub nagłówka; sprawdzenia, które istnieje tylko we frontendzie; nowego endpointu (eksport, v2, mobilny) obok starego, który sprawdzenie ma.
- **Napisz test z dwoma kontami.** Dla każdego endpointu, który przyjmuje ID rekordu, automatyczny test loguje się jako jeden użytkownik, prosi o rekord innego i oczekuje odmowy. OWASP API Top 10 zaleca właśnie to — i niewypuszczanie wydania, gdy test nie przechodzi.
- **Wiedz, czego narzędzia nie widzą.** Skanery (SAST i DAST) wyłapują niektóre przypadki, ale żaden nie wie, kto powinien być właścicielem czego w twojej aplikacji. Ta wiedza jest w testach i w ludziach.

### Zauważ to na produkcji

- **Loguj każdą odmowę** z użytkownikiem, rekordem i akcją.
- **Ustaw alerty na wzorce:** jedno konto proszące o długie serie różnych ID (przykład OWASP) albo nagły wzrost liczby odpowiedzi 403 i 404 (przykład z komunikatu CISA).
- **Firewall aplikacji webowych (WAF) może to oznaczyć, ale nie usunie wady.** Nie wie, która faktura należy do kogo.

## Słabości, z którymi łatwo ją pomylić

| Słabość | Czym się różni |
|---|---|
| [CWE-862](https://cwe.mitre.org/data/definitions/862.html) | **Missing Authorization.** Brak jakiegokolwiek sprawdzenia dla akcji. CWE-639 dotyczy konkretnie rekordów wybieranych po ID. |
| [CWE-863](https://cwe.mitre.org/data/definitions/863.html) | **Incorrect Authorization.** Nadrzędna: sprawdzenie jest, ale decyduje źle. CWE-639 to przypadek, gdy decyzja opiera się na ID, które kontroluje użytkownik. |
| [CWE-566](https://cwe.mitre.org/data/definitions/566.html) | **User-controlled SQL primary key.** Podrzędna: ten sam błąd, gdy ID to klucz główny w bazie danych. |
| [CWE-22](https://cwe.mitre.org/data/definitions/22.html) | **Path Traversal.** ID to ścieżka do pliku. Określenie OWASP „IDOR” obejmuje i to; MITRE trzyma ją osobno. |
| API5:2023 | **Broken Function Level Authorization.** Dostęp do *funkcji*, do której nie powinno się mieć dostępu (strony administratora), a nie do *rekordu*. |
| [CWE-915](https://cwe.mitre.org/data/definitions/915.html) | **Mass assignment.** Użytkownik ustawia w treści żądania pole, którego nie powinien, na przykład `ownerId`. Często występuje obok IDOR. |

## To zdarzyło się naprawdę

**First American Financial, 2019.** Ten amerykański ubezpieczyciel tytułów prawnych do nieruchomości udostępniał dokumenty transakcji przez aplikację webową: klient dostawał link do własnego dokumentu. W maju 2019 roku KrebsOnSecurity ujawnił, że wystarczyło zmienić cyfry w takim linku, by zobaczyć dokumenty *innych osób*, zupełnie bez logowania. Dostępnych było około 885 milionów plików sięgających 2003 roku, w tym numery rachunków bankowych, numery ubezpieczenia społecznego (Social Security), potwierdzenia przelewów i zdjęcia praw jazdy. Według SEC własny zespół bezpieczeństwa firmy znalazł tę wadę już w styczniu 2019 roku i nie została naprawiona. W 2021 roku SEC nałożyła na firmę karę 487 616 USD za słabe mechanizmy kontroli ujawniania informacji, a nowojorski regulator finansowy dołożył w 2023 roku karę 1 mln USD.

> [!ASIDE] Najstarszy zapis
> Najniższy numer dokumentu w serwisie, 000000075, należał do transakcji na rynku nieruchomości z 2003 roku.

**Cały rządowy komunikat na ten temat.** W lipcu 2023 roku australijskie ACSC oraz amerykańskie CISA i NSA opublikowały wspólny komunikat poświęcony wyłącznie IDOR — rzadkość w przypadku jednej słabości. Jeden z ich przykładów: w 2021 roku aplikacje szpiegujące do monitorowania telefonów (stalkerware) ujawniły SMS-y, rejestry połączeń, zdjęcia i lokalizacje z setek tysięcy telefonów przez IDOR we wspólnym dla nich serwerze (CVE-2022-0732).

**Kto się tym zajmuje:** [pentesterzy](/pl/roadmap/offensive-security/#penetration-tester) i [łowcy błędów (bug bounty)](/pl/roadmap/offensive-security/#bug-bounty-hunter) ją znajdują; [inżynierowie bezpieczeństwa aplikacji](/pl/roadmap/application-security/#appsec-engineer) i [programiści bezpiecznego oprogramowania](/pl/roadmap/application-security/#secure-developer) jej zapobiegają.

## Dowiedz się więcej w praktyce

- **Ćwiczenia:** Web Security Academy od PortSwiggera ma darmowe [laboratoria IDOR](https://portswigger.net/web-security/access-control/idor) stworzone właśnie do tego.
- **Testowanie:** przewodnik OWASP Web Security Testing Guide, rozdział [Testing for Insecure Direct Object References](https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/05-Authorization_Testing/04-Testing_for_Insecure_Direct_Object_References).
- **Naprawianie:** OWASP [IDOR Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Insecure_Direct_Object_Reference_Prevention_Cheat_Sheet.html) i [Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html).
- **Dla API:** [API1:2023 Broken Object Level Authorization](https://owasp.org/API-Security/editions/2023/en/0xa1-broken-object-level-authorization/).
