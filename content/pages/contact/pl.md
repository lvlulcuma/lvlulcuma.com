---
# Contact → lvlulcuma.com/pl/contact/
# Your email address, GitHub and Medium links and PGP key are set in content/settings.yml.
# Links to this site's pages leave out the language: "/about/" opens /pl/about/ here.
updated: 2026-10-28
intro: "Pytania, poprawki, pomysły albo problem z bezpieczeństwem: najlepiej napisz do mnie maila."   # line under the heading (also the Google description)

key:   # the big fact at the top of the box beside the page
  label: "Zwykle odpowiadam"
  value: "W ciągu dnia"
pgp_label: "Odcisk PGP"
also_label: "Również na"   # before the links to your GitHub and Medium (set in content/settings.yml)

# 01 · What's it about: one card per reason to write. Each card opens the visitor's email app
# with the subject and a short template already filled in.
#   who:      the card's heading
#   text:     one line under it
#   subject:  the email's subject line
#   body:     optional: the template inside the email (keep the "|" and indent each line)
topics:
  heading: "W jakiej sprawie?"
  text: "Wybierz temat, a aplikacja pocztowa otworzy się z krótkim szablonem, żeby było wiadomo, co napisać."
  go: "Napisz"   # the small link at the bottom of each card
  items:
    - who: "Błąd na stronie"
      text: "Nieprawdziwa informacja, niedziałający link albo krok w instrukcji, który nie działa."
      subject: "Poprawka: "
      body: |
        Strona (link):

        Co jest nie tak:

        Jak powinno być (jeśli wiesz):
    - who: "Jak zacząć w cyberbezpieczeństwie"
      text: "Nie wiesz, od czego zacząć ani czego uczyć się dalej? Zapytaj."
      subject: "Pytanie: jak zacząć w cyberbezpieczeństwie"
      body: |
        Gdzie jestem teraz (nauka, praca, umiejętności):

        Czym chcę się zajmować:

        Czego już próbowałem/próbowałam:

        Moje pytanie:
    - who: "Pomysł na artykuł"
      text: "Coś, co warto wyjaśnić, albo narzędzie, do którego przydałaby się instrukcja."
      subject: "Pomysł: "
      body: |
        Temat:

        Dlaczego to by pomogło:

        Materiały, które już znam:
    - who: "Współpraca"
      text: "Praca, staż, projekt albo wystąpienie."
      subject: "Współpraca: "
      body: |
        Kim jestem i gdzie pracuję:

        O co chodzi:

        Terminy:
    - who: "Luka na tej stronie"
      text: "Luka w zabezpieczeniach tej strony? Dziękuję! Co warto podać, opisuje sekcja 03."
      subject: "Bezpieczeństwo: "
      body: |
        Opis problemu:

        Gdzie (link):

        Kroki do odtworzenia:

        Co może z tym zrobić atakujący:
    - who: "Coś innego"
      text: "Wszystko, co nie pasuje powyżej. Możesz się po prostu przywitać."
      subject: "Cześć"

# 02 · What to expect, as HTTP status codes. `code:` starting with 2 shows green, with 4 orange.
expect:
  heading: "Czego się spodziewać"
  text: "W kodach statusu HTTP, w końcu to strona o cyberbezpieczeństwie ;)"
  items:
    - code: "200 OK"
      text: "Pytania, poprawki, pomysły i propozycje są mile widziane. Czytam każdego maila."
    - code: "202 Accepted"
      text: "Zwykle odpowiadam w ciągu dnia, czasem w ciągu kilku dni."
    - code: "403 Forbidden"
      text: "Nie włamię się do niczyjego konta, poczty ani telefonu (nawet byłego czy byłej) i nie przetestuję strony bez pisemnej zgody jej właściciela. Nie możesz zalogować się na własne konto? Skorzystaj z oficjalnej strony odzyskiwania dostępu w danym serwisie. Każdy inny, kto obiecuje przywrócić ci dostęp, to niemal na pewno oszust."
      link: "/lab/rules/"
      link_text: "Zasady testowania"
    - code: "429 Too Many Requests"
      text: "Jedna wiadomość wystarczy. Jeśli po tygodniu nie ma odpowiedzi, możesz krótko przypomnieć."

# 03 · Reporting a security problem with this site. The real public/.well-known/security.txt is shown under it.
security:
  heading: "Jak zgłosić lukę"
  text: "Jeśli znajdziesz lukę na lvlulcuma.com, napisz do mnie. Dobre zgłoszenie zawiera:"
  include:
    - "opis problemu oraz stronę lub adres, na którym występuje"
    - "kroki do odtworzenia"
    - "co może z tym zrobić atakujący"
    - "pomysł na poprawkę, jeśli go masz"
  please: "Testuj tylko to, co jest publicznie dostępne, nie próbuj dostać się do niczego, co nie jest twoje, i daj mi czas na poprawkę, zanim cokolwiek opublikujesz."
  security_txt: "Strona publikuje też plik security.txt (RFC 9116), dzięki któremu narzędzia bezpieczeństwa i badacze wiedzą, dokąd wysyłać zgłoszenia:"

# The line at the bottom of the page.
verify:
  text: "Masz wiadomość, która podaje się za moją?"
  link_text: "Sprawdź w zakładce „O stronie”"
---
