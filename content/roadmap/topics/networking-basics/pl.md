---
# Roadmap topic. Its title and summary show on every job page that lists "networking-basics" in learn.yml.
# The text under the dashes is the topic's own page: lvlulcuma.com/pl/roadmap/topics/networking-basics/
# How these pages are written: docs/claude/roadmap-topic.md
title: "Podstawy sieci"
summary: "Jak dane przepływają między komputerami: adresy IP i podsieci, porty, TCP i UDP, modele OSI i TCP/IP, routery, przełączniki i NAT oraz do czego służą DNS i DHCP."
date: 2026-11-14
sources:
  - name: "RFC 791: Internet Protocol (IPv4), 1981"
    url: "https://www.rfc-editor.org/rfc/rfc791"
  - name: "RFC 1122: Requirements for Internet Hosts, Communication Layers, 1989"
    url: "https://www.rfc-editor.org/rfc/rfc1122"
  - name: "ISO/IEC 7498-1:1994: OSI Basic Reference Model"
    url: "https://www.iso.org/standard/20269.html"
  - name: "RFC 1918: Address Allocation for Private Internets"
    url: "https://www.rfc-editor.org/rfc/rfc1918"
  - name: "RFC 3927: Dynamic Configuration of IPv4 Link-Local Addresses"
    url: "https://www.rfc-editor.org/rfc/rfc3927"
  - name: "RFC 6598: IANA-Reserved IPv4 Prefix for Shared Address Space"
    url: "https://www.rfc-editor.org/rfc/rfc6598"
  - name: "RFC 5737: IPv4 Address Blocks Reserved for Documentation"
    url: "https://www.rfc-editor.org/rfc/rfc5737"
  - name: "RFC 3849: IPv6 Address Prefix Reserved for Documentation"
    url: "https://www.rfc-editor.org/rfc/rfc3849"
  - name: "RFC 8200: Internet Protocol, Version 6 (IPv6) Specification"
    url: "https://www.rfc-editor.org/rfc/rfc8200"
  - name: "RFC 5952: A Recommendation for IPv6 Address Text Representation"
    url: "https://www.rfc-editor.org/rfc/rfc5952"
  - name: "IANA: Service Name and Transport Protocol Port Number Registry (RFC 6335)"
    url: "https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml"
  - name: "Microsoft Learn: The default dynamic port range for TCP/IP has changed"
    url: "https://learn.microsoft.com/en-us/troubleshoot/windows-server/networking/default-dynamic-port-range-tcpip-chang"
  - name: "Linux kernel documentation: IP sysctl (ip_local_port_range)"
    url: "https://www.kernel.org/doc/html/latest/networking/ip-sysctl.html"
  - name: "RFC 9293: Transmission Control Protocol (TCP), 2022"
    url: "https://www.rfc-editor.org/rfc/rfc9293"
  - name: "RFC 768: User Datagram Protocol, 1980"
    url: "https://www.rfc-editor.org/rfc/rfc768"
  - name: "RFC 9000: QUIC, a UDP-Based Multiplexed and Secure Transport"
    url: "https://www.rfc-editor.org/rfc/rfc9000"
  - name: "RFC 9114: HTTP/3"
    url: "https://www.rfc-editor.org/rfc/rfc9114"
  - name: "RFC 826: An Ethernet Address Resolution Protocol"
    url: "https://www.rfc-editor.org/rfc/rfc826"
  - name: "Wikipedia: Organizationally unique identifier"
    url: "https://en.wikipedia.org/wiki/Organizationally_unique_identifier"
  - name: "Apple Support: Use private Wi-Fi addresses on Apple devices"
    url: "https://support.apple.com/en-us/102509"
  - name: "Microsoft Learn: tracert"
    url: "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/tracert"
  - name: "RFC 3022: Traditional IP Network Address Translator (Traditional NAT)"
    url: "https://www.rfc-editor.org/rfc/rfc3022"
  - name: "RFC 6302: Logging Recommendations for Internet-Facing Servers"
    url: "https://www.rfc-editor.org/rfc/rfc6302"
  - name: "RFC 1034: Domain Names, Concepts and Facilities, 1987"
    url: "https://www.rfc-editor.org/rfc/rfc1034"
  - name: "RFC 1035: Domain Names, Implementation and Specification, 1987"
    url: "https://www.rfc-editor.org/rfc/rfc1035"
  - name: "RFC 7766: DNS Transport over TCP, Implementation Requirements"
    url: "https://www.rfc-editor.org/rfc/rfc7766"
  - name: "IANA: Domain Name System (DNS) Parameters (record types)"
    url: "https://www.iana.org/assignments/dns-parameters/"
  - name: "Root Server Technical Operations Association: root-servers.org"
    url: "https://root-servers.org/"
  - name: "RFC 7858: Specification for DNS over Transport Layer Security (TLS)"
    url: "https://www.rfc-editor.org/rfc/rfc7858"
  - name: "RFC 8484: DNS Queries over HTTPS (DoH)"
    url: "https://www.rfc-editor.org/rfc/rfc8484"
  - name: "RFC 2131: Dynamic Host Configuration Protocol"
    url: "https://www.rfc-editor.org/rfc/rfc2131"
  - name: "Apple Platform Support: Adjust private Wi-Fi settings on Mac"
    url: "https://support.apple.com/guide/platform-support/supe1a7bd6f9/web"
visuals:
  journey:
    kind: route
    stages:
      - where: "Dostać adres (DHCP)"
        steps: ["Discover", "Offer", "Request", "Acknowledge"]
      - where: "Znaleźć adres po nazwie (DNS)"
        steps: ["<code>shop.example</code>?", "Resolver", "<code>203.0.113.10</code>"]
      - where: "Połączyć się (TCP)"
        steps: ["SYN", "SYN-ACK", "ACK"]
      - where: "Wymienić dane (TLS, potem HTTP)"
        steps: ["Uzgodnić szyfrowanie", "<code>GET /</code>", "<code>200 OK</code>"]
    caption: "Co robi laptop, żeby otworzyć jedną stronę. Adres laptop dostaje raz, przy dołączaniu do sieci. Reszta powtarza się przy każdej nowej stronie."
  address:
    kind: window
    title: "Jeden adres, dwie części"
    head: ["192.168.1.37/24", "adres IPv4 z długością prefiksu"]
    rows:
      - ["Część sieciowa (pierwsze 24 bity)", "<code>192.168.1</code>"]
      - ["Część hosta (ostatnie 8 bitów)", "<code>.37</code>"]
      - ["Maska podsieci (to samo /24, zapisane w całości)", "<code>255.255.255.0</code>"]
      - ["Adres sieci (pierwszy)", "<code>192.168.1.0</code>"]
      - ["Adres rozgłoszeniowy (ostatni)", "<code>192.168.1.255</code>"]
      - ["Adresy dla urządzeń", "254 (od <code>.1</code> do <code>.254</code>)"]
    mark: 2
    caption: "Wszystkie urządzenia, których adres zaczyna się od 192.168.1, są w tej samej sieci i można do nich dotrzeć bezpośrednio. Wszystko inne idzie przez router."
  ranges:
    kind: cards
    layout: rows
    cards:
      - title: "Prywatne"
        text: "W domach i firmach. W internecie nikt ich nie trasuje, więc ten sam adres istnieje w milionach sieci."
        tags: ["10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16"]
      - title: "Pętla zwrotna (loopback)"
        text: "Urządzenie rozmawia samo ze sobą."
        tags: ["127.0.0.1", "::1"]
      - title: "Lokalne dla łącza (link-local)"
        text: "Adres, który urządzenie nadaje sobie samo, gdy żaden serwer DHCP nie odpowiada."
        tags: ["169.254.0.0/16"]
      - title: "Współdzielone (NAT operatorski)"
        text: "Używane wewnątrz dostawców internetu, którzy ukrywają wielu klientów za jednym adresem publicznym."
        tags: ["100.64.0.0/10"]
      - title: "Do dokumentacji"
        text: "Zarezerwowane dla przykładów, takich jak te na tej stronie. Nigdy nie są prawdziwe."
        tags: ["192.0.2.0/24", "198.51.100.0/24", "203.0.113.0/24", "2001:db8::/32"]
      - title: "Publiczne"
        text: "Prawie wszystkie pozostałe: unikalne w całym internecie."
    caption: "Rozpoznanie takiego adresu w logach mówi bardzo dużo, zanim cokolwiek się sprawdzi."
  tcpudp:
    kind: cards
    cards:
      - title: "TCP"
        text: "Najpierw połączenie. Każdy bajt jest ponumerowany, potwierdzony, w razie utraty wysłany ponownie i dostarczony po kolei."
        tags: ["HTTPS 443", "SSH 22", "SMB 445", "RDP 3389"]
      - title: "UDP"
        text: "Bez połączenia, bez potwierdzeń, bez kolejności. Lekki i szybki; ze stratami radzi sobie sam program."
        tags: ["DNS 53", "DHCP 67, 68", "HTTP/3 443"]
    caption: "List polecony i pocztówka. Oba niosą te same adresy i porty; różnią się tylko obietnicami."
  layers:
    kind: cards
    layout: rows
    cards:
      - title: "Aplikacji (OSI 5–7)"
        text: "Co programy mówią do siebie."
        tags: ["HTTP", "DNS", "SSH", "SMB"]
      - title: "Transportowa (OSI 4)"
        text: "Do którego programu i jak niezawodnie. Tu żyją porty."
        tags: ["TCP", "UDP"]
      - title: "Internetowa (OSI 3)"
        text: "Do której maszyny, przez różne sieci. Tu pracują routery."
        tags: ["IPv4", "IPv6", "ICMP"]
      - title: "Łącza (OSI 1 i 2)"
        text: "Następny krok w tej samej sieci: kable, radio, adresy MAC. Tu pracują przełączniki."
        tags: ["Ethernet", "Wi-Fi", "ARP"]
    caption: "Cztery warstwy TCP/IP od góry do dołu i numery warstw OSI, którymi nazywa się te same zadania."
  packet:
    kind: window
    title: "Jeden pakiet od środka"
    rows:
      - ["Łącze: od kogo (MAC)", "adres MAC laptopa"]
      - ["Łącze: do kogo (MAC)", "adres MAC routera"]
      - ["Internet: od kogo (IP)", "<code>192.168.1.37</code>"]
      - ["Internet: do kogo (IP)", "<code>203.0.113.10</code>"]
      - ["Transport: protokół", "TCP"]
      - ["Transport: port nadawcy", "<code>51234</code>"]
      - ["Transport: port odbiorcy", "<code>443</code>"]
      - ["Zawartość", "zaszyfrowana (TLS)"]
    mark: 7
    caption: "Pierwszy pakiet laptopa do sklepu, warstwa po warstwie. Adresy MAC doprowadzają go tylko do routera, a adresy IP i porty jadą całą drogę (dopóki NAT nie zmieni nadawcy — o tym niżej)."
  nat:
    kind: cards
    layout: rows
    cards:
      - title: "W twojej sieci"
        text: "Co wysyła laptop."
        tags: ["od 192.168.1.37:51234", "do 203.0.113.10:443"]
      - title: "W internecie"
        text: "Co widzi sklep po NAT na routerze."
        tags: ["od 198.51.100.7:40001", "do 203.0.113.10:443"]
      - title: "Router pamięta"
        text: "Dzięki swojej tabeli odsyła odpowiedź do właściwego urządzenia."
        tags: ["40001 = 192.168.1.37:51234"]
    caption: "Jedno połączenie przed NAT i po nim. Zmieniają się tylko adres i port nadawcy."
  dns:
    kind: route
    stages:
      - where: "Twój komputer pyta"
        steps: ["<code>www.example.com</code>?"]
      - where: "Resolver dopytuje (jeśli nie ma odpowiedzi w pamięci podręcznej)"
        steps: ["Serwer główny", "Serwery .com", "Serwery example.com"]
      - where: "Odpowiedź"
        steps: ["Rekord A: adres IPv4", "Zapamiętana na czas TTL"]
    caption: "Serwer główny wskazuje serwery .com, te wskazują własne serwery example.com, a one podają odpowiedź. Twój komputer rozmawia tylko z resolverem."
  quiz:
    kind: questions
    items:
      - q: "Laptop pokazuje <code>10.20.30.40/16</code>. W jakiej jest sieci i czy da się dotrzeć do tej maszyny z internetu pod tym adresem?"
        a: "Jest w sieci <code>10.20.0.0/16</code> (pierwsze 16 bitów, <code>10.20</code>, to sieć). Nie: <code>10.0.0.0/8</code> to zakres prywatny, używany w niezliczonych sieciach i nigdy nietrasowany w internecie."
      - q: "Ile adresów mieści sieć <code>/26</code> i ile z nich mogą dostać urządzenia?"
        a: "2 do potęgi (32 − 26) = 64 adresy. Pierwszy oznacza samą sieć, a ostatni jest adresem rozgłoszeniowym, więc dla urządzeń zostają 62."
      - q: "W logach jest połączenie z <code>192.168.1.37:52814</code> do <code>203.0.113.10:443</code>. Kto je rozpoczął i co najpewniej robi?"
        a: "Strona z wysokim, tymczasowym portem (<code>192.168.1.37</code>) to klient. Port 443 sugeruje HTTPS, ale port to tylko umowa: zanim mu zaufasz, sprawdź, co tam naprawdę działa."
      - q: "Zapytania DNS zwykle idą przez UDP. Kiedy używa się TCP i czy to opcjonalne?"
        a: "TCP używa się między innymi wtedy, gdy odpowiedź jest za duża dla UDP. Nie jest opcjonalne: od RFC 7766 każda uniwersalna implementacja DNS musi obsługiwać zarówno UDP, jak i TCP."
      - q: "Komputer ma adres <code>169.254.12.7</code>. Co się najpewniej stało?"
        a: "Poprosił o adres, ale żaden serwer DHCP nie odpowiedział, więc nadał sobie adres lokalny dla łącza. Widzi tylko urządzenia w tym samym łączu, a nie internet."
      - q: "Śledczy mają publiczny adres IP i datę ataku. Dostawca używa NAT operatorskiego. Dlaczego to może nie wystarczyć?"
        a: "Z tego jednego adresu korzysta wielu klientów. Żeby znaleźć właściwego, dostawca potrzebuje portu źródłowego i dokładnego czasu, co do sekundy (RFC 6302 zaleca, by serwery zapisywały jedno i drugie, z czasem w UTC)."
      - q: "Co robi router z pakietem, którego TTL spadł do 0?"
        a: "Odrzuca pakiet i zwykle odsyła nadawcy komunikat ICMP Time Exceeded. Właśnie tak tracert i traceroute ustalają routery na trasie."
      - q: "Jakie trzy komunikaty TCP otwierają połączenie i w jakiej kolejności?"
        a: "SYN, SYN-ACK, ACK. Dopiero potem płyną właściwe dane."
---

## Krótko

Wyobraź sobie sieć jako pocztę dla danych. Wszystko, co wysyłasz, jest cięte na małe koperty, czyli **pakiety**, a na
każdej z nich widać z zewnątrz dwie rzeczy: od kogo jest i do kogo.

- **Adres IP** to adres budynku: który komputer.
- **Port** to numer mieszkania: który program na tym komputerze.
- **Routery** to sortownie, które przekazują pakiety z sieci do sieci, aż dotrą na miejsce.
- **DNS** to książka adresowa, która zamienia nazwę typu `example.com` na adres IP.
- **DHCP** to recepcja, która daje nowemu urządzeniu adres, gdy dołącza do sieci.
- **NAT** to podawcza dużego biura: wszystko wychodzi pod jednym publicznym adresem budynku, a podawcza pamięta,
  komu oddać każdą odpowiedź.
- **TCP** to list polecony z potwierdzeniem odbioru każdej strony. **UDP** to pocztówka.

<mark>Każdą rozmowę w sieci opisuje tych samych pięć rzeczy: dwa adresy IP, dwa porty i protokół.</mark> Są w prawie
każdym logu, alercie i ataku, jaki kiedykolwiek zobaczysz, i dlatego każdy zawód w cyberbezpieczeństwie zaczyna się
właśnie tutaj.

Po lekturze tej strony będziesz umieć:

- odczytać adres typu `192.168.1.37/24` i powiedzieć, w jakiej jest sieci i jak duża jest ta sieć;
- odróżnić adres prywatny od publicznego i rozpoznać specjalne adresy, które spotyka się w logach;
- wymienić porty, które widać na co dzień, i wyjaśnić, dlaczego sam numer portu niczego nie dowodzi;
- wyjaśnić, jak TCP otwiera połączenie i kiedy zamiast niego używa się UDP;
- prześledzić zapytanie DNS i wymianę DHCP od początku do końca;
- wyjaśnić, dlaczego wiele urządzeń dzieli jeden adres publiczny i co to oznacza dla śledztwa;
- znaleźć to wszystko na własnym komputerze.

## Słowa, które się przydadzą

- **Sieć** — dwa lub więcej urządzeń, które mogą wysyłać sobie dane. Twoje domowe Wi-Fi to sieć. Internet to sieć
  sieci.
- **Host** (urządzenie) — wszystko, co ma adres: laptop, telefon, serwer, drukarka czy kamera.
- **Pakiet** — jeden mały kawałek danych. Ma **nagłówek** (kopertę: adresy i inne informacje) i **zawartość** (to, co
  w środku). Duży plik podróżuje jako tysiące pakietów.
- **Protokół** — uzgodnione zasady rozmowy, jak HTTP dla stron internetowych czy DNS dla nazw.
- **Klient i serwer** — klient pyta (twoja przeglądarka), serwer odpowiada (strona).
- **Bit i bajt** — bit to pojedyncze 0 albo 1. Bajt to 8 bitów; normy sieciowe nazywają go **oktetem**.
- **LAN** — sieć lokalna, na przykład w jednym mieszkaniu czy biurze.

## Droga jednej strony internetowej

Wpisujesz `https://shop.example` i naciskasz Enter. Zanim pojawi się strona, w bardzo krótkim czasie dzieje się
sporo. Reszta tej strony rozbiera każdy krok na części.

<!-- pic: journey -->

1. **Adres już jest.** Gdy laptop łączył się z Wi-Fi, serwer **DHCP** (zwykle domowy router) dał mu adres, na
   przykład `192.168.1.37`, a do tego adres routera i serwer DNS, z którego ma korzystać.
2. **Szuka adresu po nazwie.** Pyta **DNS** o adres `shop.example` i dostaje `203.0.113.10`.
3. **Decyduje, dokąd wysłać.** `203.0.113.10` nie należy do sieci laptopa, więc pakiety idą do routera, a ten
   przekazuje je dalej, w stronę sklepu.
4. **Łączy się.** Laptop otwiera połączenie **TCP** z tymczasowego portu, na przykład `51234`, do portu `443`
   (HTTPS) na serwerze. Obie strony uzgadniają szyfrowanie (TLS), potem przeglądarka prosi o stronę i ją dostaje.
5. **Na wyjściu** **NAT** routera podmienia prywatny adres laptopa na jeden publiczny adres całego domu i zapamiętuje
   tę zamianę, żeby odpowiedź trafiła z powrotem.

## Adresy IP: która maszyna

Adres IP wskazuje miejsce urządzenia w sieci, tak jak adres pocztowy wskazuje budynek. W użyciu są dwie wersje: IPv4,
klasyczna, i IPv6, nowsza i dużo większa. W logach zobaczysz obie.

### IPv4 i ukośnik

Adres IPv4 ma 32 bity. Zapisuje się go jako cztery liczby od 0 do 255 rozdzielone kropkami, na przykład
`192.168.1.37`. Każda liczba to jeden bajt (8 bitów). 32 bity dają około 4,3 miliarda adresów, co brzmi jak dużo,
dopóki nie policzy się wszystkich telefonów, laptopów i telewizorów na Ziemi. Ten niedobór tłumaczy adresy prywatne,
NAT i IPv6 — o wszystkim niżej.

Każdy adres ma dwie części: **część sieciową** (która ulica) i **część hosta** (który dom przy tej ulicy). Liczba po
ukośniku, **długość prefiksu**, mówi, gdzie przebiega granica.

<!-- pic: address -->

`/24` oznacza, że pierwsze 24 bity, czyli pierwsze trzy liczby, wskazują sieć. **Maska podsieci** `255.255.255.0`
mówi dokładnie to samo w starszym zapisie: każde `255` oznacza bajt należący do sieci. Spotkasz oba zapisy, więc warto
rozpoznawać je jako bliźniaki.

W sieci `/24` jest 256 adresów, od `.0` do `.255`. Pierwszy, `192.168.1.0`, oznacza samą sieć, a ostatni,
`192.168.1.255`, to **adres rozgłoszeniowy** (broadcast), pod który trafia się do wszystkich urządzeń w sieci naraz.
Dla urządzeń zostaje 254.

Ta granica decyduje o losie każdego pakietu:

- **Ta sama sieć?** Jeśli adres docelowy zaczyna się od tej samej części sieciowej (`192.168.1.200`), urządzenie
  dostarcza pakiet bezpośrednio, w sieci lokalnej.
- **Inna sieć?** Jeśli nie (`192.168.2.5` albo `203.0.113.10`), oddaje pakiet swojej **bramie domyślnej**, czyli
  routerowi, a dalej zajmuje się nim router.

> [!ASIDE] Dlaczego „podsieć”
> Podsieć to po prostu sieć wycięta z większego bloku. Firma może podzielić `10.0.0.0/16` na wiele podsieci `/24`:
> jedną dla biur, jedną dla serwerów, jedną dla kamer.

### Większe i mniejsze sieci

Każdy krok ukośnika zmniejsza albo zwiększa sieć dwukrotnie. Zasada: 2 do potęgi (32 minus długość prefiksu):

| Prefiks | Maska podsieci | Adresów | Dla urządzeń |
|---|---|---|---|
| /8 | 255.0.0.0 | 16 777 216 | 16 777 214 |
| /16 | 255.255.0.0 | 65 536 | 65 534 |
| /24 | 255.255.255.0 | 256 | 254 |
| /25 | 255.255.255.128 | 128 | 126 |
| /26 | 255.255.255.192 | 64 | 62 |
| /30 | 255.255.255.252 | 4 | 2 |
| /32 | 255.255.255.255 | 1 | 1 |

`/32` to jeden jedyny adres: tak reguły firewalla i listy blokowania wskazują jedną konkretną maszynę. Im większa
liczba po ukośniku, tym mniejsza sieć.

### Adresy o specjalnym znaczeniu

Niektóre bloki adresów są zarezerwowane do konkretnych celów. Ich rozpoznawanie chroni przed pogonią za fałszywym
tropem:

<!-- pic: ranges -->

- **Adresy prywatne** (RFC 1918) służą do użytku w domu albo firmie. Routery w internecie ich nie przenoszą, więc ten
  sam `192.168.1.37` istnieje jednocześnie w milionach domów. Adres prywatny w logach mówi, że urządzenie jest w
  jakiejś sieci, ale poza tą siecią nic nie znaczy.
- **Adresy 169.254** (RFC 3927) urządzenie nadaje sobie samo, gdy prosi o adres, a żaden serwer DHCP nie odpowiada.
  Zwykle to znak, że coś poszło nie tak: urządzenie widzi tylko najbliższych sąsiadów, a nie internet.
- **100.64.0.0/10** (RFC 6598) jest używany wewnątrz dostawców internetu, którzy dzielą adresy publiczne między
  klientów (więcej w części o NAT).
- **Adresy do dokumentacji** (RFC 5737 dla IPv4, RFC 3849 dla IPv6) nigdy nie pojawiają się w prawdziwym internecie.
  Istnieją po to, żeby przykłady takie jak te nie wskazywały niczyjej prawdziwej maszyny.

### IPv6

Adresy IPv6 mają 128 bitów — to wystarcza na około 3,4 × 10<sup>38</sup> adresów. Zapisuje się je jako osiem grup
po cztery cyfry szesnastkowe (od 0 do 9, potem od a do f), rozdzielonych dwukropkami:

```
2001:0db8:0000:0000:0000:0000:0000:0001
```

Czyta się to męcząco, więc są zasady skracania (RFC 5952): usunąć zera na początku każdej grupy, zastąpić jeden ciąg
grup złożonych z samych zer przez `::` i pisać litery małymi. Adres powyżej staje się `2001:db8::1`. `::` może
wystąpić tylko raz, inaczej nie dałoby się ustalić, ile zer kryje każde.

Idee są te same co w IPv4: długość prefiksu po ukośniku, część sieciowa i część hosta. `::1` to adres pętli zwrotnej,
jak `127.0.0.1`. Urządzenie może mieć jednocześnie adresy IPv4 i IPv6, więc ta sama maszyna może pojawiać się w
różnych logach pod jednym albo drugim.

## Porty: który program

Adres IP doprowadza pakiet do właściwej maszyny. **Port** doprowadza go do właściwego programu na niej: serwera WWW,
serwera poczty, usługi pulpitu zdalnego. Port to liczba od 0 do 65535 (16 bitów).

Programy serwerowe **nasłuchują** na stałym, znanym porcie, żeby klienci wiedzieli, gdzie ich szukać. Klienci przy
każdym połączeniu biorą tymczasowy port, żeby odpowiedzi wróciły do właściwej karty przeglądarki czy aplikacji. Razem
dwa adresy, dwa porty i protokół wyznaczają dokładnie jedną rozmowę.

IANA, organizacja prowadząca oficjalne rejestry numerów internetu, dzieli porty na trzy zakresy:

- **0–1023, porty systemowe** (często nazywane „dobrze znanymi”): klasyczne usługi.
- **1024–49151, porty użytkownika**: zarejestrowane dla konkretnych produktów.
- **49152–65535, porty dynamiczne lub prywatne**: nieprzypisane nikomu, wolne do tymczasowego użytku.

Tymczasowe porty wybierane przez klienta nazywa się **efemerycznymi**. Windows domyślnie bierze je z zakresu
49152–65535 (od Windows Vista), a Linux z 32768–60999. Dlatego strona klienta w logach prawie zawsze ma wysoki,
z pozoru losowy numer.

Porty, które widać najczęściej:

| Port | Przez | Kto używa |
|---|---|---|
| 22 | TCP | SSH: zdalny wiersz poleceń i kopiowanie plików |
| 25 | TCP | SMTP: poczta między serwerami pocztowymi |
| 53 | UDP, TCP | DNS: nazwy na adresy |
| 67, 68 | UDP | DHCP: serwer (67) i klient (68) |
| 80 | TCP | HTTP: strony bez szyfrowania |
| 443 | TCP, UDP | HTTPS (UDP dla HTTP/3) |
| 445 | TCP | SMB: udostępnianie plików w Windows |
| 853 | TCP | DNS przez TLS |
| 3389 | TCP, UDP | RDP: pulpit zdalny Windows |

> [!WARNING]
> Numer portu to umowa, a nie gwarancja. Sam rejestr IANA ostrzega, że ruch na zarejestrowanym porcie nie musi
> należeć do tej usługi ani być nieszkodliwy. Każdy program może nasłuchiwać na dowolnym porcie, a atakujący lubią 443,
> bo tam giną w zwykłym ruchu WWW. Traktuj port jako pierwszy trop, a potem sprawdzaj.

Port, na którym nasłuchuje jakiś program, nazywa się **otwartym**. Szukanie otwartych portów to pierwsze, co robi i
atakujący, i obrońca, gdy przygląda się maszynie, dlatego nieoczekiwany otwarty port zawsze jest wart pytania.

## TCP i UDP: dwa sposoby wysyłania

Oba protokoły niosą porty. Różni je obietnica dotycząca dostarczenia.

<!-- pic: tcpudp -->

### TCP: rozmowa z potwierdzeniami

TCP (obecny standard to RFC 9293 z 2022 roku, który zastąpił pierwotny RFC 793 z 1981 roku) daje programom
niezawodny strumień danych. Numeruje każdy bajt, odbiorca potwierdza, co dotarło, zgubione dane idą ponownie, a całość
wychodzi we właściwej kolejności. Korzystają z niego strony internetowe, SSH, udostępnianie plików i poczta.

Zanim popłyną dane, obie strony otwierają połączenie **trójetapowym uzgadnianiem** (three-way handshake):

1. **SYN:** klient mówi: „Porozmawiajmy, moja numeracja zaczyna się tutaj”.
2. **SYN-ACK:** serwer odpowiada: „Zgoda, moja zaczyna się tutaj, a twoja do mnie dotarła”.
3. **ACK:** klient potwierdza. Połączenie jest otwarte.

Na koniec każda strona wysyła **FIN**, a druga potwierdza. **RST** (reset) przerywa połączenie od razu. Gdy pakiet
puka do portu, na którym nikt nie nasłuchuje, komputer zwykle odpowiada RST, a wiele firewalli po prostu po cichu
odrzuca pakiet. SYN, ACK, FIN i RST to **flagi**: pojedyncze bity w nagłówku TCP, które zobaczysz w przechwyconym
ruchu i logach firewalla.

> [!ASIDE] Półotwarte
> SYN, na który nigdy nie przyszło końcowe ACK, zostawia „półotwarte” połączenie. Wiele takich może oznaczać
> skanowanie portów albo zalew pakietów, który próbuje wyczerpać zasoby serwera.

### UDP: po prostu wyślij

UDP (RFC 768 z 1980 roku) nie ma ani połączenia, ani obietnic. Pakiet UDP, czyli **datagram**, ma 8-bajtowy nagłówek
z zaledwie czterema polami: port źródłowy, port docelowy, długość i suma kontrolna. Jeśli datagram zginie, UDP nawet
tego nie zauważy. Za to jest szybki i prosty, co pasuje do krótkich pytań i odpowiedzi (DNS, DHCP) oraz dźwięku i
obrazu na żywo, gdzie spóźniony pakiet i tak nikomu się nie przyda.

Niektóre nowsze protokoły budują własną niezawodność na UDP. Najbardziej znany to **QUIC** (RFC 9000, 2021), który
dodaje szyfrowanie i ponowne wysyłanie; działa na nim **HTTP/3** (RFC 9114, 2022), zwykle na porcie UDP 443. Ruch WWW
to więc już nie zawsze TCP.

## Warstwy: modele OSI i TCP/IP

Praca sieci jest podzielona na warstwy: każda robi jedną rzecz i przekazuje wynik dalej, jak list, który trafia do
koperty, koperta do worka pocztowego, a worek do ciężarówki. Przy wysyłaniu każda warstwa owija dane we własny
nagłówek (**enkapsulacja**). Odbiorca rozwija je w odwrotnej kolejności.

Są dwa modele tych warstw i usłyszysz o obu:

- **Model TCP/IP** (RFC 1122, 1989): cztery warstwy — tak naprawdę zbudowany jest internet.
- **Model OSI** (ISO/IEC 7498-1:1994): siedem warstw, od 1 (fizyczna) do 7 (aplikacji). Mało który system wdraża go
  dosłownie, ale jego numery stały się wspólnym językiem: „przełącznik warstwy 2”, „atak w warstwie 7”, „reguła
  firewalla warstwy 3”.

<!-- pic: layers -->

Warstwy OSI od dołu do góry: 1 fizyczna, 2 łącza danych, 3 sieciowa, 4 transportowa, 5 sesji, 6 prezentacji,
7 aplikacji. W TCP/IP trzy górne to po prostu „aplikacja”.

Każda warstwa ma też własną nazwę dla swojego kawałka danych. Warstwa łącza wysyła **ramki**, internetowa —
**pakiety**, TCP — **segmenty**, a UDP — **datagramy**. W codziennej rozmowie wszystko to nazywa się „pakietami”.

> [!NOTE]
> Modele to mapy, a nie prawa. Niektóre prawdziwe protokoły nie mieszczą się w jednej szufladce: TLS, szyfrowanie,
> na którym opiera się HTTPS, siedzi między TCP a HTTP. Używaj warstw, żeby znaleźć, gdzie leży problem albo atak, a
> nie żeby spierać się, gdzie coś „należy”.

Tak wyglądają koperty jednego pakietu po rozłożeniu:

<!-- pic: packet -->

## Przełączniki, routery i adresy MAC

### Wewnątrz jednej sieci: adresy MAC i przełączniki

Wewnątrz jednej sieci urządzenia znajdują się po adresie sprzętowym, czyli **adresie MAC**. Ma on 48 bitów i zapisuje
się go jako sześć par cyfr szesnastkowych, na przykład `aa:bb:cc:11:22:33` (zmyślony). Zwykle pierwsze trzy pary
wskazują producenta karty sieciowej: te prefiksy przydziela producentom IEEE.

**Przełącznik** (switch) łączy urządzenia jednej sieci i przekazuje każdą ramkę tylko w stronę urządzenia, do którego
jest skierowana, na podstawie adresu MAC. Adresy MAC nigdy nie wychodzą poza sieć lokalną: sąsiednia sieć widzi MAC
routera, a nie twój.

Skąd laptop zna adres MAC `192.168.1.1`? Z **ARP**, protokołu odwzorowania adresów (RFC 826): pyta całą sieć „kto ma
192.168.1.1?”, właściciel odpowiada swoim adresem MAC, a laptop przez jakiś czas pamięta odpowiedź. ARP nie ma jak
sprawdzić, czy odpowiedź jest uczciwa, więc urządzenie w tej samej sieci może odpowiedzieć fałszywie i stanąć
pośrodku cudzego ruchu. Dlatego ataki „z sieci lokalnej” traktuje się poważnie. W IPv6 tę samą pracę wykonuje
protokół Neighbor Discovery.

> [!NOTE]
> Wiele telefonów i laptopów nie pokazuje już sieciom Wi-Fi swojego prawdziwego adresu MAC. Urządzenia Apple na
> przykład domyślnie używają osobnego prywatnego adresu dla każdej sieci Wi-Fi i mogą go z czasem zmieniać. W
> śledztwie adres MAC widziany w Wi-Fi nie musi być adresem sprzętowym urządzenia.

### Między sieciami: routery

**Router** łączy różne sieci i decyduje, dokąd dalej idzie każdy pakiet. Czyta docelowy adres IP, szuka go w swojej
**tablicy routingu** i wysyła pakiet o krok (**przeskok**, hop) bliżej. Twój komputer też ma malutką tablicę
routingu, a najważniejszy wiersz w niej to **brama domyślna**: „wszystko, co nie jest lokalne, do routera”.

Pudełko od dostawcy internetu to zwykle kilka urządzeń w jednym: router, przełącznik, punkt dostępowy Wi-Fi, serwer
DHCP, NAT i prosty firewall.

Każdy pakiet IPv4 niesie **TTL** (time to live, „czas życia”, RFC 791), a każdy pakiet IPv6 **Hop Limit** (RFC 8200).
Każdy router zmniejsza tę wartość o jeden. Gdy dojdzie do zera, router odrzuca pakiet i zwykle odsyła komunikat ICMP
Time Exceeded. Dzięki temu pakiety nie krążą w nieskończoność, i właśnie tak `tracert` (Windows) i `traceroute`
rysują trasę: wysyłają pakiety z TTL 1, potem 2, potem 3, a każdy router po drodze się zdradza.

> [!ASIDE] Dwa różne TTL
> Rekordy DNS też mają „TTL”: jak długo odpowiedź może leżeć w pamięci podręcznej. Ta sama nazwa, zupełnie inna
> rola.

## NAT: wiele urządzeń, jeden adres publiczny

Adresy prywatne nie mogą podróżować po internecie, a jednak twój telefon i laptop korzystają z niego cały dzień.
Sekret to **NAT** (translacja adresów sieciowych). Najczęstsza odmiana, **NAPT** (RFC 3022), pozwala wielu adresom
prywatnym dzielić jeden publiczny, bo zmienia także porty.

<!-- pic: nat -->

Gdy pakiet laptopa wychodzi z domu, router zastępuje prywatnego nadawcę (`192.168.1.37:51234`) swoim adresem
publicznym i wybranym przez siebie portem (`198.51.100.7:40001`) i zapisuje tę zamianę w tabeli. Gdy odpowiedź wraca
na port 40001, tabela mówi, dla kogo jest.

Wynikają z tego trzy rzeczy i wszystkie są ważne dla bezpieczeństwa:

- **Połączenia zaczynają się od środka.** Do urządzenia za NAT nie da się dotrzeć z internetu, dopóki ktoś nie ustawi
  dla niego reguły (przekierowania portu, port forwarding). NAT to nie firewall, ale przy okazji blokuje nieproszone
  połączenia przychodzące.
- **Dostawcy internetu robią to samo.** Przy **NAT operatorskim** (carrier-grade NAT) dostawca ukrywa wielu klientów
  za jednym adresem publicznym, używając po swojej stronie bloku `100.64.0.0/10`.
- **Adres i data nie wystarczą, żeby kogoś znaleźć.** Przy współdzielonych adresach dostawca znajdzie właściwego
  klienta tylko po **porcie źródłowym** i **dokładnym czasie**. RFC 6302 zaleca, by serwery zapisywały jedno i
  drugie, z czasem w UTC i dokładnością do sekundy. Jeśli prowadzisz serwer — zapisuj je; jeśli prowadzisz śledztwo —
  proś o nie.

W IPv6 adresów jest tyle, że każde urządzenie może mieć własny, więc dzielenie adresów nie jest potrzebne.

## DNS: od nazw do adresów

Ludzie pamiętają nazwy, komputery potrzebują adresów. **DNS** (system nazw domen, RFC 1034 i 1035, 1987) to
ogólnoświatowy katalog rozłożony na miliony serwerów, który zamienia jedno na drugie.

<!-- pic: dns -->

Wyszukiwanie przebiega tak:

1. Twój komputer pyta swój **resolver**: zwykle domowy router, serwer dostawcy internetu albo publiczny, na przykład
   `1.1.1.1`.
2. Jeśli resolver ma świeżą zapamiętaną odpowiedź (w **pamięci podręcznej**, cache), odpowiada od razu.
3. Jeśli nie, pyta **serwer główny** (root), który nie zna adresu, ale wie, kto odpowiada za `.com`.
4. Pyta serwer `.com`, który wie, które serwery odpowiadają za `example.com`.
5. Pyta te **serwery autorytatywne**, one podają odpowiedź, a resolver przekazuje ją dalej.

Serwery główne mają 13 nazw, od `a.root-servers.net` do `m.root-servers.net`; obsługuje je 12 niezależnych
organizacji, a kopii na całym świecie jest ponad 2000.

Zapytania DNS zwykle idą przez **port UDP 53**. Używa się też portu TCP 53, na przykład gdy odpowiedź jest za duża, i
każda implementacja DNS musi obsługiwać oba (RFC 7766).

Typy rekordów, które spotkasz:

| Typ | Co zawiera |
|---|---|
| A | adres IPv4 |
| AAAA | adres IPv6 |
| CNAME | inną nazwę, której aliasem jest ta |
| MX | serwery pocztowe domeny |
| NS | serwery odpowiedzialne za domenę |
| PTR | nazwę stojącą za adresem (wyszukiwanie „odwrotne”) |
| TXT | dowolny tekst: do zabezpieczeń poczty i potwierdzania, kto jest właścicielem domeny |

**Szyfrowany DNS** ukrywa zapytania przed każdym, kto obserwuje sieć. **DNS przez TLS** (RFC 7858) ma własny port,
853. **DNS przez HTTPS** (RFC 8484) jedzie portem 443, wymieszany ze zwykłym ruchem WWW. Dla prywatności to dobrze,
ale obrońca, który pilnuje portu 53, może przeoczyć zapytania, także te od złośliwego oprogramowania.

Dla obrońców DNS to złoto. Program, który łączy się z serwerem po nazwie, musi najpierw ją wyszukać, i złośliwe
oprogramowanie nie jest wyjątkiem, więc logi DNS pokazują, która maszyna szukała której nazwy i kiedy. Dziwna nazwa,
nagły wysyp zapytań albo świeżo zarejestrowana domena to często pierwszy znak, że coś jest nie tak.

## DHCP: jak urządzenie dostaje adres

Nikt nie wpisuje adresów ręcznie w każdy laptop i telefon. **DHCP** (RFC 2131) rozdaje je automatycznie, w czterech
komunikatach, które często zapamiętuje się jako **DORA**:

1. **Discover:** nowe urządzenie woła do całej sieci: „Jest tu serwer DHCP?”
2. **Offer:** serwer odpowiada adresem, który mogłoby wziąć.
3. **Request:** urządzenie prosi o ten adres.
4. **Acknowledge:** serwer potwierdza, a urządzenie zaczyna go używać.

Serwer wysyła też maskę podsieci, bramę domyślną i serwery DNS, a adres daje w **dzierżawę**: jest pożyczony na jakiś
czas, a urządzenie odnawia dzierżawę, zanim ta wygaśnie. DHCP działa przez UDP: serwer na porcie 67, klient na
porcie 68.

Dwie rzeczy warte zapamiętania w pracy nad bezpieczeństwem:

- **Adresy są używane ponownie.** Ten sam `192.168.1.37` jutro może należeć do innego laptopa. Żeby wiedzieć, które
  urządzenie miało adres o 14:02, potrzebne są logi serwera DHCP z tamtej chwili, a nie sam adres. Urządzenia Apple z
  prywatnym adresem Wi-Fi wysyłają nawet w zapytaniu DHCP ogólną nazwę, więc nazw może po prostu nie być.
- **DHCP nie sprawdza, kto odpowiada.** Sam RFC 2131 ostrzega, że nieautoryzowany serwer DHCP łatwo uruchomić. Taki
  serwer może rozdawać własną bramę albo własny serwer DNS i po cichu przekierowywać ruch.

## Jak to wygląda w pracy

Oto wiersz z logów firewalla — takie czyta się codziennie. Przykład jest zmyślony: prawdziwe produkty układają pola
inaczej, ale składniki są zawsze te same:

```
2026-11-12T14:02:17Z  ALLOW  TCP  192.168.1.37:51234 -> 203.0.113.10:443
```

Od lewej: kiedy (w UTC, na co wskazuje `Z`), co zrobił firewall, protokół, klient (adres prywatny i tymczasowy port)
i serwer (adres publiczny na porcie HTTPS). Większość tej strony mieści się w tym jednym wierszu.

- **Centrum operacji bezpieczeństwa (SOC):** zauważasz wewnętrzną maszynę, która rozmawia z nietypowym portem, stację
  roboczą, która nagle łączy się z setkami innych adresów wewnętrznych (skanowanie), albo zapytania DNS o nazwy,
  których nikt wcześniej nie widział.
- **Reagowanie na incydenty i informatyka śledcza:** wiążesz adres i czas z urządzeniem dzięki logom DHCP, prosisz
  dostawców o porty źródłowe za NAT, zestawiasz czasy z logów w różnych strefach czasowych i pamiętasz, że adres
  prywatny albo adres MAC z Wi-Fi może znaczyć coś innego, niż się wydaje.
- **Testy penetracyjne:** za zgodą ustalasz, które maszyny odpowiadają i które porty są otwarte, a potem sprawdzasz,
  co naprawdę na nich nasłuchuje, zamiast wierzyć numerowi portu.
- **Bezpieczeństwo chmury:** reguły firewalla pisze się dokładnie w tych pojęciach: pozwól `10.0.0.0/16` łączyć się z
  portem 443, nigdy nie pozwalaj `0.0.0.0/0` (wszystkim) łączyć się z portem 3389.

## Spróbuj samodzielnie

Dziesięć minut na własnym komputerze i wszystko to zamieni się w coś, co widać na własne oczy. Te polecenia tylko
odczytują twoje ustawienia, wyszukują publiczną nazwę albo śledzą drogę do publicznej strony. Nie sprawdzają niczyich
innych maszyn.

> [!NOTE]
> Nazwy pól są tu podane tak, jak pokazuje je system po angielsku. Jeśli twój Windows jest po polsku, `ipconfig` może
> pokazać je przetłumaczone, ale w tej samej kolejności.

### Twój adres, brama i serwer DNS

<!-- for: windows -->

Otwórz PowerShell i uruchom:

```powershell
ipconfig /all
```

Znajdź swoją kartę sieciową i odczytaj **IPv4 Address** (adres IPv4), **Subnet Mask** (maska podsieci), **Default
Gateway** (brama domyślna), **DHCP Server** i **DNS Servers**. **Physical Address** to adres MAC, którego używa karta.

<!-- for: macos -->

Otwórz Terminal i uruchom (przy połączeniu kablowym wpisz `"Ethernet"` zamiast `"Wi-Fi"`):

```sh
networksetup -getinfo "Wi-Fi"
scutil --dns | grep nameserver
```

Pierwsze polecenie pokazuje **IP address**, **Subnet mask** i **Router** (bramę domyślną). Drugie wymienia serwery
DNS, których używa system.

<!-- for: linux -->

Otwórz terminal i uruchom:

```sh
ip -4 -br address
ip route
resolvectl status
```

Pomiń `lo`: ten interfejs rozmawia tylko z samą maszyną. Drugi wiersz pokazuje twój adres z długością prefiksu, na
przykład `192.168.1.37/24`. W wyniku `ip route` wiersz zaczynający się od `default via` wskazuje twoją bramę.
`resolvectl status` wymienia serwery DNS (w systemach bez systemd-resolved zajrzyj do `/etc/resolv.conf`).

<!-- /for -->

Teraz odpowiedz: czy twój adres jest prywatny? Z którego z trzech prywatnych bloków? Ile urządzeń zmieści twoja sieć?

### Znajdź adres po nazwie

<!-- for: windows -->

```powershell
nslookup example.com
```

<!-- for: macos -->

```sh
nslookup example.com
```

<!-- for: linux -->

```sh
resolvectl query example.com
```

<!-- /for -->

Zobaczysz, który serwer odpowiedział i jakie adresy podał, często zarówno IPv4, jak i IPv6.

### Zobacz własne połączenia

Najpierw otwórz jakąś stronę, a potem:

<!-- for: windows -->

```powershell
netstat -an | findstr ESTABLISHED
```

<!-- for: macos -->

```sh
netstat -an -p tcp | grep ESTABLISHED
```

<!-- for: linux -->

```sh
ss -tn
```

<!-- /for -->

Znajdź wiersz, w którym strona zdalna kończy się na `:443`. Twoja strona pokazuje twój adres i wysoki tymczasowy port.
Czy mieści się w zakresie efemerycznym twojego systemu?

### Prześledź trasę

<!-- for: windows -->

```powershell
tracert example.com
```

<!-- for: macos -->

```sh
traceroute example.com
```

<!-- for: linux -->

```sh
tracepath example.com
```

`traceroute` też zadziała, jeśli jest zainstalowany.

<!-- /for -->

Każdy wiersz to jeden router po drodze. Wiersz gwiazdek (`*`) oznacza, że router nie odpowiedział, a wiele routerów
tak robi.

Chcesz mieć własną małą sieć do eksperymentów? Przewodniki z laboratorium budują ją na twoim komputerze: maszyny
wirtualne w prywatnej sieci bez dostępu do internetu.
<!-- guide: vmware-host-only, virtualbox-host-only, utm-host-only -->

## Sprawdź się

Spróbuj odpowiedzieć, zanim rozwiniesz każdą odpowiedź.

<!-- pic: quiz -->

## Dowiedz się więcej

- **[Kurs CompTIA Network+ (N10-009) od Professor Messer](https://www.professormesser.com/network-plus/n10-009/n10-009-video/n10-009-training-course/)**:
  87 bezpłatnych filmów, około 13 godzin, o wszystkim z tej strony, głębiej, z podsieciami i IPv6.
- **[Cisco Networking Academy](https://www.cisco.com/site/us/en/learn/training-certifications/training/netacad/index.html)**:
  bezpłatne kursy we własnym tempie. Dla początkujących jest Networking Basics, z ćwiczeniami praktycznymi.
- **[Cloudflare Learning Center: rodzaje serwerów DNS](https://www.cloudflare.com/learning/dns/dns-server-types/)**:
  krótkie, jasne wyjaśnienie ze schematami czterech rodzajów serwerów DNS, przez które przechodzi zapytanie.
- **[Wireshark](https://www.wireshark.org/docs/wsug_html_chunked/)**: bezpłatny analizator pakietów, którego używają
  wszyscy. Jego [przykładowe przechwycenia](https://wiki.wireshark.org/SampleCaptures) pozwalają otworzyć prawdziwe
  pakiety DHCP, DNS i TCP bez przechwytywania czegokolwiek samodzielnie. Przechwytuj ruch tylko w sieciach, które do
  ciebie należą albo które wolno ci monitorować.
