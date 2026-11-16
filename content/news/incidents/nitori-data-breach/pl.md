---
# An incident breakdown → lvlulcuma.com/pl/news/incidents/nitori-data-breach/
title: "Nitori: po tygodniach niezauważonego dostępu mogło wyciec do 37,62 mln rekordów klientów"
dek: "9 listopada 2026 roku japońska sieć sklepów z meblami i artykułami do domu Nitori poinformowała, że osoba z zewnątrz dostała się do jednego z jej systemów i że mogło wyciec do 37,62 mln rekordów z danymi klientów; włamanie wykryto 6 listopada, ale dostęp mógł trwać już od października."
type: breach
status: unfolding       # unfolding | confirmed | report (the victim or investigators published a full report)
date: 2026-11-09        # when it became public
published: 2026-11-16   # when this breakdown was published
who: "Nitori Holdings, japońska sieć sklepów z meblami i artykułami do domu, z 879 sklepami w Japonii i 219 za granicą, oraz jej członkowie programu klienckiego, kupujący online i klienci firmowi"
sector: "Handel detaliczny"
entry: "Jeszcze nieznane"
impact: "Mogło wyciec do 37,62 mln rekordów: imiona i nazwiska, adresy, numery telefonów, adresy e-mail, daty urodzenia i płeć członków programu, dane kontaktowe klientów firmowych oraz dane zamówień internetowych. Według Nitori bez haseł do logowania i danych kart."
timeline:
  - date: 2022-09-20
    text: "Dla kontekstu: Nitori zgłasza atak credential stuffing na swoją aplikację, w którym na kontach Nitori próbowano loginów i haseł wykradzionych z innych serwisów. Mogło zostać przejrzanych ok. 132 000 kont."
  - date: 2026-10
    text: "Osoba z zewnątrz mogła mieć dostęp do systemu Nitori już od połowy lub końca października — tak wynika z analizy logów wykonanej po wykryciu włamania. Nitori wciąż to sprawdza."
  - date: 2026-11-06
    text: "Nitori potwierdza nieuprawniony dostęp osoby z zewnątrz do systemu, którym zarządza, blokuje go i rozpoczyna dochodzenie z zewnętrzną wyspecjalizowaną firmą."
  - date: 2026-11-09
    text: "Nitori publikuje komunikat: mogło wyciec do 37,62 mln rekordów z danymi osobowymi przechowywanymi na jej serwerach. Firma zgłasza sprawę japońskiej Komisji Ochrony Informacji Osobowych i policji."
  - date: 2026-11-11
    text: "Rzecznik Nitori mówi BleepingComputer, że firma wciąż ustala przyczynę, w tym to, czy chodzi o ransomware, i nie wie jeszcze, ilu klientów dotyczy wyciek."
detect:
  - "Nietypowo duże odczyty lub eksporty rekordów klientów, zwłaszcza gdy jedno konto sięga po dane znacznie większej liczby różnych klientów niż zwykle."
  - "Dostęp do systemów z danymi klientów z nowych miejsc, o nietypowych porach albo z kont byłych pracowników lub podwykonawców."
  - "Patrz tygodnie wstecz, a nie dni: po wykryciu włamania 6 listopada Nitori znalazła w logach możliwy dostęp już od października."
check:
  - "Sprawdź, kto może wyszukiwać i eksportować dane klientów, w tym byli pracownicy i podwykonawcy, i odbierz dostęp, którego nikt nie potrzebuje."
  - "Przechowuj logi odczytów danych klientów na tyle długo, by móc cofnąć się o kilka tygodni, i zapisuj w nich identyfikatory klientów, a nie same dane osobowe."
  - "Nie przechowuj starych danych zamówień dłużej, niż to potrzebne."
  - "Każdą prośbę o zmianę danych do płatności lub numeru konta potwierdzaj kanałem, który już znasz, a nie tym, którym przyszła prośba."
  - "Klienci Nitori: spodziewajcie się fałszywych e-maili, SMS-ów i telefonów rzekomo od Nitori, firmy kurierskiej albo platformy sprzedażowej. Nitori zapewnia, że nigdy nie prosi o hasła, numery kart ani PIN-y; nie korzystajcie z danych kontaktowych z podejrzanej wiadomości."
unknown:
  - "Jak atakujący się dostali i do którego systemu."
  - "Czy dane rzeczywiście wykradziono, czy tylko mogły zostać wykradzione. Nitori mówi, że „mogły wyciec”."
  - "Ilu osób to dotyczy: 37,62 mln to liczba rekordów, a jedna osoba może pojawić się w kilku."
  - "Czy chodzi o ransomware. Nikt nie przyznał się do ataku."
  - "Z których platform sprzedażowych pochodzą dane zamówień."
  - "Kiedy poszkodowani klienci dostaną wiadomość od Nitori e-mailem lub pocztą."
jobs: [incident-responder, soc-analyst, detection-engineer, privacy-analyst, data-protection-officer]
topics: [data-breach-response, log-analysis, anomaly-detection, access-reviews, everyday-threats]
sources:
  - name: "ニトリホールディングス: 当社システムへの不正アクセスによる個人情報漏えいの可能性に関するお詫びとお知らせ"
    url: "https://www.nitorihd.co.jp/news/items/2b702dbe4d438f7fef74945d68e5bd27_3.pdf"
  - name: "ニトリネット: 当社システムへの不正アクセスによる個人情報漏えいの可能性に関するお詫びとお知らせ"
    url: "https://www.nitori-net.jp/ec/notices/info261109/"
  - name: "NHK: ニトリに不正アクセス 最大3762万件の個人情報が流出の可能性"
    url: "https://news.web.nhk/newsweb/na/nd-20261109de73045"
  - name: "Impress Watch: ニトリ、最大3762万件の個人情報流出の恐れ　不正アクセス"
    url: "https://www.watch.impress.co.jp/docs/news/2154952.html"
  - name: "BleepingComputer: Japanese furniture giant Nitori says hackers stole 37.6M customer records"
    url: "https://www.bleepingcomputer.com/news/security/japanese-furniture-giant-nitori-says-hackers-stole-376m-customer-records/"
  - name: "innovatopia: ニトリに不正アクセス、最大3,762万件の個人情報が流出の可能性 パスワードとカードは対象外"
    url: "https://innovatopia.jp/cyber-security/cyber-security-news/119884/"
  - name: "ネットショップ担当者フォーラム: ニトリ、外部からの不正アクセスで最大3762万件が流出した可能性"
    url: "https://netshop.impress.co.jp/n/2026/11/11/17020"
  - name: "The Star: Cyberattack puts 37.62 million Nitori customer records at risk"
    url: "https://www.thestar.com.my/aseanplus/aseanplus-news/2026/11/09/cyberattack-puts-3762-million-nitori-customer-records-at-risk"
  - name: "一創: ニトリの情報漏洩：最大3,762万件の対象確認となりすまし連絡の見分け方"
    url: "https://www.issoh.co.jp/tech/details/19545/"
  - name: "ScanNetSecurity: 「ニトリアプリ」にパスワードリスト型攻撃、約13万2,000アカウントが閲覧された可能性"
    url: "https://scan.netsecurity.ne.jp/article/2022/09/22/48226.html"
---

Nitori to japońska sieć sklepów z meblami i artykułami do domu, nazywana czasem japońską IKEA, z 879 sklepami w Japonii i 219 za granicą. 6 listopada 2026 roku firma wykryła, że osoba z zewnątrz dostała się do systemu, którym zarządza. Nitori zablokowała ten dostęp i wezwała zewnętrzną firmę od bezpieczeństwa.

W poniedziałek 9 listopada Nitori poinformowała, że mogło wyciec do 37,62 mln rekordów z danymi osobowymi przechowywanymi na jej serwerach. W przypadku członków programu i kupujących to numer członkowski, imię i nazwisko, adres e-mail, adres pocztowy, numer telefonu, data urodzenia i płeć. W przypadku członków firmowych — dane firmy oraz imię i nazwisko, e-mail i telefon osoby kontaktowej. Do tego dochodzą dane zamówień ze sklepu internetowego i sklepów Nitori na platformach sprzedażowych. Zakres danych różni się u poszczególnych klientów; nie ma wśród nich haseł do logowania ani numerów kart.

Analiza logów po wykryciu włamania wskazuje, że osoba z zewnątrz mogła mieć dostęp już od połowy lub końca października — tygodnie przed tym, zanim ktokolwiek to zauważył. Nitori zgłasza sprawę japońskiej Komisji Ochrony Informacji Osobowych i policji, a poszkodowanych klientów powiadomi e-mailem lub pocztą. Nie podała, jak atakujący się dostali. Rzecznik powiedział BleepingComputer, że dochodzenie trwa, w tym w sprawie tego, czy chodzi o ransomware. Żadna grupa nie przyznała się do ataku.

Nitori ostrzega klientów przed tym, co może nastąpić: fałszywymi e-mailami, SMS-ami i telefonami w jej imieniu albo w imieniu firmy kurierskiej lub platformy sprzedażowej, przygotowanymi z użyciem danych z wycieku. Firma zapewnia, że nigdy nie prosi o hasła, numery kart ani PIN-y. To nie pierwszy incydent w Nitori: w 2022 roku atakujący próbowali w jej aplikacji loginów wykradzionych z innych serwisów i mogli przejrzeć ok. 132 000 kont.
