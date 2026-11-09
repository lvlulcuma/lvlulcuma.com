---
# An incident breakdown → lvlulcuma.com/pl/news/incidents/apt29-plerdy-watering-hole/
title: "Poisoned Source: szpiedzy zamienili ukraiński skrypt analityczny w pułapkę na stare telefony"
dek: "4 listopada 2026 roku Sekoia poinformowała, że hakerzy, których łączy z APT29, przejęli skrypt analityczny Plerdy i inne strony, żeby podsuwać już załatane exploity na iPhone'a i Androida, które kradły pliki cookie, loginy, a na niektórych iPhone'ach niemal wszystkie dane."
type: espionage
status: report          # unfolding | confirmed | report (the victim or investigators published a full report)
date: 2026-11-04        # when it became public
published: 2026-11-09   # when this breakdown was published
who: "Odwiedzający strony, które ładują skrypt ukraińskiego narzędzia analitycznego Plerdy (głównie ukraińskie), oraz inne zhakowane strony w USA, Czechach i Bułgarii"
sector: "Strony internetowe i ich mobilni użytkownicy"
entry: "Zhakowane strony i przejęty zewnętrzny skrypt analityczny (atak przy wodopoju); nie wiadomo, jak zmieniono skrypt"
impact: "Starsze iPhone'y i telefony z Androidem, z których wchodzono na te strony, mogły stracić pliki cookie, zapisane loginy i hasła Wi-Fi, a niektóre iPhone'y niemal wszystkie dane; liczba ofiar nie jest znana"
timeline:
  - date: 2026-08-27
    text: "Do skryptu analitycznego Plerdy zostaje dodany kod, więc każda strona, która go ładuje, ładuje też skrypt do zbierania odcisków urządzeń z serwera napastników."
  - date: 2026-09-03
    text: "Po tygodniu zmiana w skrypcie Plerdy znika."
  - date: 2026-10
    text: "W połowie października Sekoia zauważa kampanię na stronie ukraińskiej firmy wydobywającej gaz, a potem na innych zhakowanych stronach: dużego amerykańskiego stowarzyszenia branży chemicznej, czeskiej skrajnie prawicowej partii i bułgarskiej strony związanej z wojskiem."
  - date: 2026-11-04
    text: "Sekoia publikuje raport Poisoned Source i z umiarkowaną lub wysoką pewnością łączy kampanię z APT29. Tego samego dnia CISA dodaje CVE-2024-27834, jeden z użytych błędów iPhone'a, do swojej listy wykorzystywanych podatności, nie wspominając o kampanii."
attack:
  - tactic: "Przygotowanie zasobów"
    id: T1608.004
    name: "Stage Capabilities: Drive-by Target"
    text: "Dodali swój kod do skryptu analitycznego Plerdy i do zhakowanych stron, żeby odwiedzający ładowali skrypt napastników."
  - tactic: "Przygotowanie zasobów"
    id: T1583.001
    name: "Acquire Infrastructure: Domains"
    text: "Założyli domeny-sobowtóry, np. `america250[.]holiday` i `theowo[.]club`, które kopiowały prawdziwe strony."
  - tactic: "Rekonesans"
    id: T1592
    name: "Gather Victim Host Information"
    text: "Skrypt do zbierania odcisków zbierał 394 cechy urządzenia i przeglądarki każdego odwiedzającego."
  - tactic: "Dostęp początkowy"
    id: T1456
    name: "Drive-By Compromise"
    text: "Telefony, z których wchodzono na strony, dostawały łańcuch exploitów na Safari albo Chrome, dobrany do wersji systemu."
  - tactic: "Eskalacja uprawnień"
    id: T1404
    name: "Exploitation for Privilege Escalation"
    text: "Wychodzili z piaskownicy przeglądarki przez kolejne błędy, m.in. w jądrze iPhone'a i w sterowniku grafiki w Androidzie."
  - tactic: "Zbieranie danych"
    id: T1533
    name: "Data from Local System"
    text: "Zabierali pliki cookie, zapisane loginy, historię przeglądania i hasła Wi-Fi; w iOS 18.5 także wiadomości, pocztę, zdjęcia, dane o lokalizacji i więcej."
detect:
  - "Strony ładujące skrypty z domen opublikowanych przez Sekoia, np. `edge-ord.clouds-stacks[.]com` i `static.flux-telemetry[.]com`."
  - "Telefony łączące się z `ad.starx-net[.]com` na porcie 8881: tam wszystkie trzy łańcuchy exploitów wysyłały skradzione dane."
  - "Zewnętrzny skrypt na twojej stronie, np. tracker analityczny, który nagle dodaje znacznik `<script>` ściągający kod z innej domeny."
  - "Wejścia na domeny-sobowtóry, np. `america250[.]holiday` i `theowo[.]club`."
  - "Stare wersje w spisie twoich telefonów: łańcuchy na iPhone'a celują w iOS od 16.0 do 17.4 oraz 18.5, łańcuch na Androida w Chrome od 139 do 145."
check:
  - "Zaktualizuj telefony i przeglądarki. Sekoia mówi, że telefon z aktualnym systemem jest bezpieczny przed tymi atakami."
  - "Znajdź służbowe telefony, które utknęły na starych wersjach iOS lub Androida, i zaktualizuj albo wymień je, także telefony podwykonawców i dostawców."
  - "Jeśli twoja strona ładuje skrypty innych firm, prowadź ich listę, pilnuj zmian i usuń te, których nie potrzebujesz."
  - "Zablokuj domeny i adresy opublikowane przez Sekoia."
unknown:
  - "Ile telefonów zainfekowano i ile danych skradziono. Sekoia nie zdołała tego ustalić."
  - "Jak napastnicy zmienili skrypt Plerdy i czy firma o tym wiedziała. Nie opublikowano komentarza Plerdy."
  - "Czy napastnikom chodziło o odwiedzających konkretne strony, czy o jak najwięcej niezałatanych telefonów."
  - "Skąd pochodzą exploity. Sekoia uważa, że prawdopodobnie zrobiła je strona trzecia."
  - "Dlaczego pominięto telefony z Chrome 143 i Samsunga Galaxy S25 Ultra."
  - "Kiedy zaczęła się cała kampania i czy wciąż trwa."
jobs: [threat-intelligence-analyst, threat-hunter, malware-analyst, endpoint-security-engineer, appsec-engineer]
topics: [mobile-spyware, actor-tracking, ioc-enrichment, patch-management, client-side-bugs]
sources:
  - name: "Sekoia: Poisoned Source: APT29 watering holes target mobile devices with n-day exploits"
    url: "https://www.sekoia.com/blog/poisoned-source-apt29-watering-holes-targets-mobile-devices-with-n-day-exploits"
  - name: "The Record: Russian state-linked hackers target iPhone, Android devices in zero-click espionage campaign"
    url: "https://therecord.media/russia-hackers-smartphone-cyberattacks"
  - name: "Help Net Security: Russian hackers target iOS and Android users with n-day exploits"
    url: "https://www.helpnetsecurity.com/2026/11/04/apt29-watering-hole-mobile-devices-n-day-exploits/"
  - name: "The Hacker News: APT29-Linked Hackers Hijack Web Analytics Script to Deliver iOS and Android Exploits"
    url: "https://thehackernews.com/2026/11/apt29-linked-hackers-hijack-web.html"
  - name: "Security Affairs: Russian APT29 Targets Mobile Users with Watering Hole Attacks"
    url: "https://securityaffairs.com/202473/apt/russian-apt29-targets-mobile-users-with-watering-hole-attacks.html"
---

APT29 to grupa hakerska powiązana z rosyjskim państwem. 4 listopada firma Sekoia z umiarkowaną lub wysoką pewnością oceniła, że za kampanią, którą nazwała Poisoned Source, stoi APT29 albo jedna z jej podgrup. Sekoia zauważyła ją w połowie października na stronie ukraińskiej firmy wydobywającej gaz.

Trop prowadził do Plerdy, ukraińskiego narzędzia do analityki internetowej, którego skrypt ładują tysiące stron, głównie ukraińskich, w tym strony wojska, sił specjalnych i producentów sprzętu wojskowego. Od 27 sierpnia do 3 września ten skrypt dociągał też skrypt napastników. Włamali się oni również na strony dużego amerykańskiego stowarzyszenia branży chemicznej, czeskiej skrajnie prawicowej partii i bułgarskiej organizacji związanej z wojskiem, a do tego postawili sobowtóry innych stron.

Skrypt napastników zbierał setki cech urządzenia każdego odwiedzającego. Odwiedzający bez ekranu dotykowego albo z niemożliwym rozmiarem ekranu nic nie dostawali. Telefony dostawały łańcuch exploitów dobrany do systemu: w iOS 16 taki, który kradł pliki cookie przeglądarki; w iOS 18.5 zestaw DarkSword, który kopiuje wiadomości, pocztę, zdjęcia, hasła, dane o lokalizacji i wiele więcej; w Androidzie z Chrome od 139 do 145 narzędzie, które Sekoia nazwała AndroSnitch: zabierało pliki cookie, loginy, historię Chrome i hasła Wi-Fi. Żadne z nich nie próbowało zostać na telefonie na stałe.

Wszystkie błędy w tych łańcuchach były załatane, zanim kampania się zaczęła, więc telefon z aktualnym systemem był bezpieczny. Sekoia nie wie, ile telefonów zaatakowano ani co zrobiono z danymi.
