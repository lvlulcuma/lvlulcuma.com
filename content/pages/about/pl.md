---
# About → lvlulcuma.com/pl/about/
# The first paragraph under the dashes (at the bottom of this file) is the big intro line.
# Links to this site's pages leave out the language: "/roadmap/" opens /pl/roadmap/ here.
updated: 2026-10-31

# The big fact at the top of the box beside the page is the next article's date.
# To show something else there instead, add:
# key:
#   label: "..."
#   value: "..."

# "Now" in the box beside the page: what you're busy with. Update it when you post each month.
now:
  label: "Teraz"
  updated: 2026-10-28   # shown as the month next to "Now"
  items:
    - label: "Pracuję nad"
      text: "Czego się uczyć do każdego zawodu w Ścieżkach kariery"
      link: "/roadmap/"
    # - label: "Uczę się"
    #   text: "..."
    # - label: "Czytam"
    #   text: "..."
    #   link: "https://..."   # optional

# 01 · Start here: one card per kind of visitor. `section:` is a menu item:
# articles, guides, roadmap, research, lab or contact.
start:
  heading: "Od czego zacząć"
  text: "Co znajdziesz na tej stronie, zależnie od tego, po co tu przychodzisz."
  items:
    - who: "Dopiero zaczynasz w cyberbezpieczeństwie"
      text: "Zobacz dziedziny i zawody w bezpieczeństwie oraz to, od czego zwykle się zaczyna."
      section: roadmap
    - who: "Coś konfigurujesz"
      text: "Instrukcje krok po kroku: instalowanie i zabezpieczanie narzędzi na Windowsie, macOS i Linuksie."
      section: guides
    - who: "Chcesz być na bieżąco"
      text: "Jeden artykuł miesięcznie: podsumowania badań, notatki z laboratorium i praktyczne porady."
      section: articles
    - who: "Szukasz głębszej analizy"
      text: "Dłuższe badania, każde z pytaniem, metodą i danymi, na których się opiera."
      section: research
    - who: "Chcesz poćwiczyć"
      text: "Jak zbudowane jest moje laboratorium i jakich zasad przestrzegam podczas testów."
      section: lab
    - who: "Masz pytanie"
      text: "Pytania, poprawki albo problem z bezpieczeństwem strony: najszybciej napisać do mnie e-mail."
      section: contact

# 02 · Stay up to date: what each section publishes, and how to follow it.
#   section: a menu item (news, articles, guides, roadmap, research or lab)
#   text:    what's new there and how often
#   feed:    optional: the section's RSS feed on this site, like "/rss.xml"
updates:
  heading: "Jak być na bieżąco"
  text: "Co i gdzie się ukazuje, i jak często. RSS działa w każdym czytniku kanałów, bez konta i bez adresu e-mail."
  feed_label: "Kanał RSS"
  items:
    - section: news
      text: "Co tydzień przegląd najważniejszych wiadomości o bezpieczeństwie oraz analizy dużych ataków krok po kroku, gdy fakty są już znane."
      feed: "/news/rss.xml"
    - section: articles
      text: "Jeden artykuł w miesiącu, publikowany w jego ostatni poniedziałek."
      feed: "/rss.xml"
    - section: guides
      text: "Instrukcje krok po kroku, dodawane na bieżąco. Każda pokazuje, kiedy ją ostatnio zaktualizowano."
    - section: roadmap
      text: "„Czego się uczyć” przybywa po jednym zawodzie. Strona każdej dziedziny pokazuje, dla których zawodów jest już gotowe."

# 03 · How I work: short promises about how the site is written and how I test.
how:
  heading: "Jak pracuję"
  text: "Czego możesz się spodziewać po wszystkim, co tu publikuję."
  items:
    - title: "Najpierw zgoda"
      text: "Testuję tylko systemy, które należą do mnie albo na których testowanie mam pisemną zgodę. O znaleziskach najpierw dowiaduje się właściciel, dopiero potem cokolwiek publikuję."
      link: "/lab/rules/"
      link_text: "Ćwicz bezpiecznie i legalnie"
    - title: "Źródła, które można sprawdzić"
      text: "Fakty mają link do źródła. Na przykład Ścieżki kariery opierają się na NICE Framework od NIST i European Cybersecurity Skills Framework od ENISA."
      link: "/roadmap/"
      link_text: "Ścieżki kariery"
    - title: "Błędy poprawiam jawnie"
      text: "Jeśli coś tu się nie zgadza, napisz do mnie, a poprawię. Gdy artykuł lub badanie zmienia się po publikacji, ramka obok pokazuje, co się zmieniło i kiedy."
    - title: "Nic cię nie śledzi"
      text: "Bez ciasteczek, analityki i JavaScriptu. Możesz samodzielnie sprawdzić, jak zabezpieczono stronę."
      link: "/colophon/"
      link_text: "Jak zabezpieczono stronę"

# 04 · Is it really me: where to find you for sure. Email, GitHub, Medium and PGP come from
# content/settings.yml; the security address comes from public/.well-known/security.txt.
verify:
  heading: "Czy to naprawdę ja?"
  text: "Pod specjalistów od bezpieczeństwa też ktoś się podszywa. To jedyne adresy i konta, z których korzystam:"
  site_label: "Strona"
  email_label: "E-mail"
  security_label: "Zgłoszenia podatności"
  pgp_label: "Odcisk klucza PGP"
  never_heading: "Nigdy:"
  never:
    - "nie poproszę o twoje hasła, jednorazowe kody ani klucze odzyskiwania"
    - "nie zażądam zapłaty, zanim powiem ci o znalezionym problemie z bezpieczeństwem"
    - "nie wyślę ci plików ani linków, o które nie prosisz"
    - "nie napiszę do ciebie z adresu, którego nie ma na tej stronie"
  after: "Jeśli wiadomość rzekomo ode mnie nie zgadza się z tą stroną, napisz na adres powyżej, a powiem ci, czy jest prawdziwa."
---

lvlulcuma.com to notatki terenowe o cyberbezpieczeństwie: dlaczego zabezpieczenia zawodzą, jak sprawić, żeby wytrzymały, i jak wejść do tej branży.
