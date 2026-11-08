---
# Lab idea → lvlulcuma.com/pl/lab/active-directory/
title: "Małe Active Directory do atakowania i obrony"
date: 2026-11-08
group: attack
order: 3
level: intermediate
dek: "Zbuduj maleńką firmową sieć Windows, zostaw w niej słabe punkty, które tak lubią atakujący, a potem poznaj jeden klasyczny atak, oglądając go z obu stron — od strony atakującego i w logach obrońcy."
time: 3
ram: 16
jobs: [penetration-tester, red-team-operator, soc-analyst, detection-engineer]
requires: []
files: []
---

Active Directory to książka adresowa i system zamków niemal każdej firmowej sieci: trzyma konta użytkowników,
decyduje, kto gdzie może się zalogować, i wydaje klucze. Atakujący go uwielbiają, bo jeden słaby punkt w nim może
oddać całą sieć. To laboratorium buduje miniaturową wersję — jeden serwer i jeden komputer — celowo zostawia w niej
klasyczną słabość, a potem każe ci spojrzeć na jeden atak z obu stron: jak atakujący znajduje i wykorzystuje słabość
oraz jak ten sam atak wygląda w logach, które obserwuje obrońca. Zobaczenie obu połówek to właśnie to, co utrwala
lekcję.

## Czego potrzebujesz

- Hipernadzorca z miejscem na dwie maszyny Windows działające razem, czyli około 16 GB pamięci. Zobacz
  [Pierwsze kroki](/pl/lab/start/).
- **Windows Server 2025**, darmowa 180-dniowa wersja próbna, na „kontroler domeny” — serwer, który uruchamia Active
  Directory.
- **Windows 11**, darmowa 90-dniowa wersja próbna, na jeden komputer pracownika.
- **Kali Linux**, twoja maszyna atakującego, w tej samej prywatnej sieci.
- Wszystkie trzy w sieci **host-only / internal**, żeby laboratorium nie mogło sięgnąć twojej prawdziwej sieci. Serwer
  raz potrzebuje internetu (NAT), żeby się aktywować, potem przełącz z powrotem.

> [!NOTE]
> Nazwy tutaj — `corp.local`, użytkownik `jsmith`, konto usługi — to po prostu nazwy laboratoryjne. Weź własne, jeśli
> chcesz, ale zapisz je w dzienniku laboratorium, żeby się nie pogubić.

## Zbuduj kontroler domeny

1. Zainstaluj Windows Server 2025 w nowej maszynie wirtualnej. Wybierz opcję **Desktop Experience**, żeby miał
   normalny ekran, nadaj mu stały adres IP w twojej sieci host-only i ustaw silne hasło administratora.
2. Otwórz **PowerShell jako administrator** i zainstaluj rolę Active Directory:

   ```powershell
   Install-WindowsFeature AD-Domain-Services -IncludeManagementTools
   ```

3. Zamień serwer w pierwszy kontroler zupełnie nowej domeny `corp.local`. To ustawi też DNS, którego Active Directory
   potrzebuje:

   ```powershell
   Install-ADDSForest -DomainName corp.local -InstallDNS
   ```

   Poprosi o hasło odzyskiwania, a potem zrestartuje się do twojej nowej domeny. Po restarcie logujesz się jako
   `CORP\Administrator`.

## Dodaj ludzi i słaby punkt

Prawdziwa firma ma pracowników i konta usług. Dodamy kilka, a jedno z nich celowo zrobimy słabym — to jest dziura,
przez którą później przejdzie atak.

1. Dodaj zwykłego pracownika. W PowerShellu na serwerze:

   ```powershell
   New-ADUser -Name "John Smith" -SamAccountName jsmith `
     -AccountPassword (Read-Host -AsSecureString "Password") `
     -Enabled $true
   ```

2. Dodaj **konto usługi** — konto, na które loguje się program, a nie człowiek. Celowo nadaj mu słabe, łatwe do
   zgadnięcia hasło, bo właśnie o ten błąd chodzi w tym laboratorium:

   ```powershell
   New-ADUser -Name "SQL Service" -SamAccountName svc_sql `
     -AccountPassword (Read-Host -AsSecureString "Password") `
     -Enabled $true
   ```

3. Dołącz do niego **Service Principal Name (SPN)**. SPN to etykieta mówiąca „to konto uruchamia tę usługę”. To
   normalna, potrzebna część Active Directory — ale, jak zobaczysz, samo posiadanie SPN czyni konto celem:

   ```powershell
   setspn -s MSSQLSvc/db.corp.local:1433 svc_sql
   ```

To cała słabość: konto usługi, ze SPN, chronione słabym hasłem. To jeden z najczęstszych błędów w prawdziwym świecie,
dlatego jest to pierwszy atak, którego uczy się większość ludzi.

## Dodaj komputer pracownika i przyłącz go

1. Zainstaluj Windows 11 w drugiej maszynie wirtualnej, w tej samej sieci host-only.
2. Wskaż jego DNS na adres IP serwera (Active Directory działa na DNS, więc komputer musi pytać serwer o drogę).
3. Przyłącz go do domeny: **Settings > Accounts > Access work or school > Connect > Join this device to a local
   Active Directory domain** i wpisz `corp.local`. Zrestartuj, potem zaloguj się jako `CORP\jsmith`.

Masz teraz działającą miniaturową firmę: kontroler domeny, użytkownika, konto usługi i komputer. Zrób teraz migawkę
wszystkich trzech, z etykietą `clean`, żebyś zawsze mógł wrócić do tej chwili.

## Ustaw obie strony

**Strona obrońcy — włącz światło.** Domyślnie serwer rejestruje niewiele. Włącz logowanie, które pozwoli ci *zobaczyć*
atak później. W **Group Policy Management** na serwerze edytuj domyślną politykę kontrolerów domeny i włącz **Audit
Kerberos Service Ticket Operations** (w Advanced Audit Policy > Account Logon). To właśnie ono zapisuje zdarzenia, na
które będziesz polować.

**Strona atakującego — mapa i zestaw narzędzi.** Na Kali:

1. **BloodHound Community Edition** rysuje twoje Active Directory jako graf i pokazuje najkrótszą drogę, którą
   atakujący mógłby przejść od zwykłego konta do pełnej kontroli. Działa w Dockerze; zainstaluj go przez
   `bloodhound-cli` według oficjalnego przewodnika SpecterOps:
   [BloodHound CE quickstart](https://bloodhound.specterops.io/get-started/quickstart/community-edition-quickstart).
2. **impacket** to zestaw małych programów w Pythonie do rozmowy z usługami Windows. Kali może go zainstalować
   poleceniem `sudo apt install impacket-scripts`. Strona projektu dokumentuje każde narzędzie:
   [impacket na GitHub](https://github.com/fortra/impacket).

## Atak prostymi słowami: Kerberoasting

Oto sama idea, zanim pojawią się jakiekolwiek polecenia. Gdy logujesz się do Windowsa, dla każdej usługi, której
używasz, dostajesz pewien bilet. Bilet na usługę jest **zaszyfrowany hasłem tego konta usługi**. Zwykle to w porządku
— nie możesz odczytać biletu, więc nie możesz zdobyć hasła.

Haczyk: **każdy** zalogowany użytkownik ma prawo poprosić o bilet na usługę, znając tylko jej SPN. Więc atakujący
z dowolnym zwykłym kontem (jak `jsmith`) może poprosić kontroler domeny o bilet `svc_sql`, dostać go i zabrać. Potem,
offline na swojej maszynie, może zgadywać hasło za hasłem — miliony na sekundę — aż jedno z nich odszyfruje bilet.
W tej chwili pozna hasło konta usługi. Nazywa się to **Kerberoasting** i działa właśnie dlatego, że daliśmy `svc_sql`
słabe hasło.

Dwie rzeczy czynią to groźnym: atakującemu na start wystarczy podstawowe konto, a zgadywanie dzieje się na *jego*
komputerze, gdzie żaden alarm tego nie widzi.

### Spróbuj od strony atakującego

Zrób to z Kali, zalogowany na zwykłym koncie `jsmith`, przeciwko własnemu laboratorium:

1. **Znajdź cel.** Skieruj BloodHound na domenę i daj mu ją zmapować. W grafie konta ze SPN są oznaczone jako
   „kerberoastable” — `svc_sql` się wyróżni.
2. **Poproś o bilet i złam go.** Narzędzie impacket **`GetUserSPNs`** wykonuje krok „poproś o bilet”, a **hashcat**
   wykonuje krok „zgadnij hasło offline”. Zamiast powtarzać tu dokładne flagi, skorzystaj z własnej dokumentacji
   impacket dla `GetUserSPNs` — pokazuje żądanie, format wyniku i odpowiedni tryb hashcat. Gdy słabe hasło padnie,
   zobaczysz, czemu ten atak jest pierwszy na każdej liście.

Sens zatrzymania się i przeczytania dokumentacji samego narzędzia nie leży w ostrożności dla niej samej — chodzi o to,
że flagi i formaty zmieniają się między wersjami, a oficjalna strona zawsze jest poprawna.

### Teraz znajdź to od strony obrońcy

Przejdź na serwer i otwórz **Event Viewer > Windows Logs > Security**. Atak, który właśnie uruchomiłeś, zostawił ślad:

1. Szukaj **Event ID 4769** — „A Kerberos service ticket was requested”. Pojawia się za każdym razem, gdy ktoś otwiera
   usługę, więc większość z nich jest normalna.
2. Sygnałem jest **Ticket Encryption Type**. Wartość **`0x17`** oznacza stare, słabe szyfrowanie RC4 — takie, które
   szybko się łamie. Nowoczesne logowania używają `0x12` (AES). Zdarzenie 4769 dla jednego z twoich kont usług, ze
   szyfrowaniem `0x17`, poproszone przez zwykłego użytkownika, to odcisk palca próby Kerberoastingu.
3. Zwróć uwagę na to, czego *nie ma*: łamanie offline nie zostawiło żadnego śladu. Jedno żądanie to wszystko, co
   obrońca kiedykolwiek widzi, i dlatego znajomość tego jednego zdarzenia ma znaczenie.

To cała lekcja w jednym miejscu: słabe hasło konta usługi było dziurą, jedno zdarzenie 4769 ze `0x17` było jedynym
ostrzeżeniem, a teraz byś je rozpoznał.

## Zamknij dziurę

Po obejrzeniu ataku napraw go, a potem potwierdź naprawę:

1. Nadaj `svc_sql` długie, losowe hasło (25+ znaków). Hasło konta usługi wpisuje program, a nie człowiek, więc długość
   nic nie kosztuje — a długie hasło czyni zgadywanie offline beznadziejnym.
2. Gdzie możesz, wymuś dla konta **AES** zamiast RC4, żeby przechwycony bilet był znacznie trudniejszy do złamania.
3. Uruchom atak z Kali ponownie. Żądanie wciąż pojawi się w logu (4769 to normalny ruch), ale łamanie teraz się nie
   uda. Właśnie zamknąłeś prawdziwą słabość i zobaczyłeś, że naprawa się trzyma.

## Trzymaj wszystko w izolacji

1. Wszystkie trzy maszyny żyją w sieci **host-only / internal**. Daj serwerowi kartę NAT tylko na chwilę, żeby
   aktywować Windowsa, potem ją zabierz.
2. To celowo słaba domena. Nigdy nie podłączaj jej do swojej prawdziwej sieci i nigdy nie powtarzaj jej haseł gdzie
   indziej.
3. Gdy skończysz, wyłącz ją. Przywróć migawkę `clean`, żeby przećwiczyć atak od nowa.

## Co dalej

- **GOAD (Game of Active Directory)** to darmowa, gotowa podatna domena z wieloma wbudowanymi słabościami, na kiedy
  jedna dziura to za mało. To większa budowa, ale naturalne następne laboratorium.
- Ucz się kolejnych klasycznych ataków tak samo — znajdź słabość, uruchom narzędzie według jego dokumentacji, a potem
  poluj na zdarzenie, które je zdradza. Każdy uczy jednocześnie sztuczki atakującego i wykrycia obrońcy.
- Skieruj darmowy kolektor logów (zobacz pomysł [Wazuh SIEM](/pl/lab/), gdy zostanie opublikowany) na kontroler
  domeny, żeby polować na zdarzenia 4769 w prawdziwym narzędziu wyszukiwania zamiast w Event Viewer.

## Gdy coś nie działa

1. **Komputer nie przyłącza się do domeny:** jego DNS musi wskazywać na IP serwera, a nie na publiczny DNS. Popraw
   ustawienia sieci komputera i spróbuj ponownie.
2. **`Install-ADDSForest` narzeka na hasło:** hasło odzyskiwania (DSRM) ma własne reguły siły; użyj długiego.
3. **BloodHound nic nie pokazuje:** potrzebuje ważnych poświadczeń domeny, żeby zebrać dane. Daj mu konto `jsmith`
   i adres kontrolera domeny, jak wyjaśnia jego przewodnik.
4. **Zdarzenia 4769 się nie pojawiają:** polityka audytu Kerberos nie jest włączona albo się nie odświeżyła. Sprawdź
   ponownie krok Group Policy i uruchom `gpupdate /force` na serwerze.
