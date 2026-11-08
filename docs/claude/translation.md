# Ukrainian and Polish: how the site is translated

- **By meaning, natural phrasing**, never word for word; check the context. A catchy English title gets a title that is
  catchy in Ukrainian or Polish, not a literal copy.
- Keep product, tool, standard and law names as they are (Splunk, Sigma, ATT&CK, NIS2, ISO/IEC 27001). Source names
  stay in the outlet's own language.
- **russia is lowercase** in every language (росія, rosja, russia, russian, pro-russian). Avoid starting a sentence with it.
- Match the terms existing pages use: `python3 scripts/roadmap/topic_inventory.py` shows all Roadmap topic titles in
  three languages, and earlier weeks in `content/news/weeks/` show the news style.
- Keep short quoted names and amounts together with a non-breaking space (U+00A0) so they don't split across lines:
  «від ДТЕК», „od DTEK”, "$50 млн". In narrow places (the fun story box) put one before each " — " as well.

## Ukrainian (`ua`)

- Quotes «…». Em dash with spaces ( — ). Straight apostrophe in words like пам'ять, об'єднання.
- Address readers politely and plainly; plain everyday words over officialese.
- Terms: firewall = **фаєрвол**; logs = журнали, logging = журналювання, alert = сповіщення, rule = правило,
  detection = виявлення, vulnerability = вразливість, threat hunting = полювання на загрози (threat hunting),
  a hunt = полювання, hunter = мисливець, persistence = закріплення, lateral movement = горизонтальне переміщення,
  playbook = плейбук, severity = рівень серйозності, tabletop exercise = штабні навчання (tabletop),
  containment = стримування, eviction = витіснення зловмисника, chain of custody = ланцюг зберігання доказів,
  BEC = компрометація ділової пошти (BEC), forensics = (цифрова) криміналістика, forensic image = криміналістичний образ,
  write blocker = блокувальник запису, carving = вирізання файлів (carving), timeline = хронологія
  (super timeline = зведена хронологія), anti-forensics = антикриміналістика, legal hold = юридичне утримання (legal hold),
  legal privilege = адвокатська таємниця, court expert = судовий експерт, insider = інсайдер,
  insider threat / insider risk = внутрішня загроза / внутрішній ризик, whistleblower = викривач, data exfiltration = витік даних,
  person of concern = особа, що викликає занепокоєння, OSINT = розслідування з відкритих джерел (OSINT),
  sock puppet = фіктивний акаунт (sock puppet), money mule = «грошовий мул», preservation request = запит на збереження даних,
  action day = день реалізації, incident commander = керівник інциденту, holding statement = заява на перші години,
  retainer = договір про постійну готовність (retainer), business continuity = безперервність бізнесу,
  crisis management = кризове управління, DPO = інспектор із захисту даних (DPO), data breach = витік даних,
  blameless review = розбір без пошуку винних, constituency = коло обслуговуваних організацій (constituency),
  prompt injection = ін'єкції в промпти, infostealer = інфостилер, initial access broker = брокер початкового доступу,
  combolist = комболіст, bulletproof hosting = «куленепробивний» хостинг, escrow = гарант угод (escrow),
  PIR = пріоритетні вимоги (PIR), RFI = запит на інформацію (RFI), Admiralty Code = код Адміралтейства (Admiralty Code),
  BLUF = головний висновок на початку (BLUF), doxxing = доксинг, digital risk protection = захист від цифрових ризиків,
  intelligence (the product) = розвіддані, hacktivist = хактивіст, two-factor authentication = двофакторна автентифікація,
  AI = ШІ, GDPR = GDPR, dashboards = дашборди. SIEM isn't declined ("Адміністрування SIEM").

## Polish (`pl`)

- Quotes „…”. Em dash with spaces ( — ). Address the reader as „ty” when needed (twoja organizacja) and avoid gendered
  past forms (write „co udało się znaleźć”, not „co znalazłeś”). „w Ukrainie”.
- Terms: firewall = firewall (firewalle); logs = logi, logging = logowanie, alert = alert, rule = reguła,
  detection = wykrywanie, vulnerability = podatność, threat hunting stays English (a single hunt = polowanie),
  persistence stays English or „mechanizmy przetrwania (persistence)”, lateral movement = ruch boczny, GDPR = RODO,
  dashboards = dashboardy, playbook = playbook (playbooki), severity = poziom ważności,
  tabletop exercise = ćwiczenia sztabowe (tabletop), containment = ograniczanie (ataku),
  chain of custody = łańcuch dowodowy (chain of custody), BEC = przejęcie poczty firmowej (BEC),
  forensics = informatyka śledcza, forensic image = obraz dowodowy, write blocker = bloker zapisu,
  carving = wycinanie plików (carving), timeline = oś czasu (super timeline = zbiorcza oś czasu),
  anti-forensics = zacieranie śladów, shadow copies = kopie w tle, legal hold = blokada prawna (legal hold),
  legal privilege = tajemnica adwokacka, court expert = biegły sądowy, insider = insider (insiderzy),
  insider threat / insider risk = zagrożenie wewnętrzne / ryzyko wewnętrzne, whistleblower = sygnalista,
  data exfiltration = wynoszenie danych, person of concern = osoba budząca niepokój, OSINT = biały wywiad (OSINT),
  sock puppet = fikcyjne konto (sock puppet), money mule = słup, preservation = zabezpieczenie danych,
  elements of an offence = znamiona przestępstwa, action day = dzień realizacji,
  incident commander = kierujący incydentem (incident commander), holding statement = oświadczenie na pierwsze godziny,
  retainer = umowa gotowości (retainer), business continuity = ciągłość działania, crisis management = zarządzanie kryzysowe,
  DPO = inspektor ochrony danych (IOD), data breach = naruszenie ochrony danych,
  blameless review = przegląd bez szukania winnych, constituency = obsługiwana społeczność (constituency),
  prompt injection stays English, infostealer = infostealer, initial access broker = broker dostępu początkowego,
  combolist = combolista, bulletproof hosting = hosting „kuloodporny” (bulletproof), PIR = priorytetowe wymagania (PIR),
  RFI = zapytanie o informacje (RFI), Admiralty Code = kod admiralicji (Admiralty Code),
  BLUF = najważniejszy wniosek na początku (BLUF), doxxing = doxxing, digital risk protection = ochrona przed ryzykiem cyfrowym,
  hacktivist = haktywista, two-factor authentication = uwierzytelnianie dwuskładnikowe.
  SIEM and SOC are declined with a hyphen (SIEM-a, SIEM-em, SOC-a, SOC-iem, SOC-ów).
