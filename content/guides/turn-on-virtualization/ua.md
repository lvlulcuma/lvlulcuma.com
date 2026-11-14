---
# Guide → lvlulcuma.com/ua/guides/turn-on-virtualization/
title: "Увімкніть віртуалізацію в UEFI (BIOS)"
date: 2026-11-13
category: configure   # install | quick | configure | use | harden | fix
order: 1   # position within its category
time: 10   # rough minutes to complete
platforms: [windows, linux]   # windows | macos | linux
requires: []   # guides to do first (folder names); shown as "Before you start"
revisions:          # after publishing, add a line for each change
  - date: 2026-11-13
    note: "Кроки для Windows і для Linux у кожному розділі тепер стоять в окремих підписаних рамках."
  - date: 2026-11-13
    note: "Останнє виправлення тепер стосується VMware Workstation Pro — гіпервізора, який сайт радить для Windows."
dek: "Перевірте, чи ввімкнена віртуалізація процесора, увімкніть її в налаштуваннях запуску комп'ютера, якщо ні, і переконайтеся, що все спрацювало."
# Pictures: each one is placed in the text below by a line <!-- pic: <name> -->. How each kind is drawn:
# src/components/GuideVisual.astro. Rows and tabs count from 1.
visuals:
  # Task Manager's CPU page, before and after: only the marked row changes.
  task-manager:
    kind: window
    title: "Task Manager"
    head: ["CPU", "Intel(R) Core(TM) …"]
    rows:
      - ["Base speed", "…"]
      - ["Sockets", "…"]
      - ["Cores", "…"]
      - ["Logical processors", "…"]
      - ["Virtualization", ""]
      - ["L1 cache", "…"]
    mark: 5
    states:
      - { label: "Вимкнено", value: "Disabled", tone: stop }
      - { label: "Увімкнено", value: "Enabled", tone: go }
    caption: "Під графіком на сторінці <strong>CPU</strong>. Ваші числа будуть іншими: важить лише рядок <strong>Virtualization</strong>. Назва процесора — угорі праворуч, вона починається з <strong>Intel</strong> або <strong>AMD</strong>."
  # The way into the UEFI from Windows 11, as on Microsoft's "Enable Virtualization on Windows".
  way-in:
    kind: route
    stages:
      - where: "У Windows 11"
        steps: ["Settings", "System", "Recovery", "Advanced startup: Restart now"]
      - where: "Після перезавантаження: Choose an option"
        steps: ["Troubleshoot", "Advanced options", "UEFI Firmware Settings", "Restart"]
    caption: "Дві зупинки: Settings у Windows, а потім синій екран, у який Windows перезавантажується. У Windows 10 перша частина — <strong>Settings</strong> &gt; <strong>Update &amp; Security</strong> &gt; <strong>Recovery</strong>."
  # A made-up firmware screen, to show what to look for.
  setup-screen:
    kind: screen
    title: "Setup Utility"
    badge: "Приклад"
    tabs: ["Main", "Advanced", "Security", "Boot", "Exit"]
    tab: 2
    rows:
      - ["Hyper-Threading", "[Enabled]"]
      - ["Intel Virtualization Technology", "[Enabled]"]
      - ["Intel VT-d", "[Disabled]"]
    mark: 2
    keys: [["↑↓", "Move"], ["Enter", "Change"], ["F10", "Save and exit"], ["Esc", "Back"]]
    caption: "Вигаданий, щоб показати ідею. Ваш виглядає по-своєму й має свої слова, а новіші працюють і з мишею. Клавіші підписані на екрані, зазвичай унизу або збоку."
  # What the switch is called. Each name is one a maker uses in its own instructions (the links in "makers").
  names:
    kind: cards
    layout: rows
    cards:
      - title: "Intel"
        text: "Назва процесора починається з Intel."
        tags: ["Intel Virtualization Technology", "Intel (VMX) Virtualization Technology", "Intel VTX", "VT-x"]
      - title: "AMD"
        text: "Назва процесора починається з AMD."
        tags: ["SVM Mode", "AMD-SVM", "AMD-V"]
      - title: "Будь-який процесор"
        text: "Деякі виробники дають обом просту назву."
        tags: ["Virtualization", "Virtualization Technology", "Virtualization Technology (VTx)"]
    caption: "Різні слова, один перемикач. Він стоїть поруч із налаштуваннями процесора (CPU)."
  # Each maker's key and menu, from its own support page (the link). Alphabetical; Surface and "another maker" last.
  makers:
    kind: finder
    title: "Виробник вашого комп'ютера"
    labels: { key: "Клавіша", where: "Де", note: "Зауважте", link: "Інструкція самого виробника" }
    items:
      - name: "Acer"
        key: "F2"
        press: "Утримуйте кнопку живлення 5 секунд, щоб комп'ютер повністю вимкнувся. Увімкніть його й натисніть <kbd>F2</kbd>."
        where: "<strong>Advanced</strong>: <strong>Intel VTX</strong> на моделях з Intel, <strong>AMD-SVM</strong> на моделях з AMD."
        note: "Немає? На деяких моделях <kbd>Ctrl</kbd> <kbd>S</kbd> показує приховані налаштування."
      - name: "Ноутбук ASUS"
        key: "F2"
        press: "Коли ноутбук повністю вимкнений, затисніть <kbd>F2</kbd> і натисніть кнопку живлення. Відпустіть, коли з'являться налаштування."
        where: "<strong>Intel Virtualization Technology</strong> або <strong>SVM Mode</strong> на моделях з AMD, зазвичай на сторінці <strong>Advanced</strong>. Якщо перший екран спрощений (EZ Mode), спершу перейдіть в Advanced Mode."
        note: "ASUS вмикає її ще на заводі, тож спершу перевірте в Task Manager. Сіре й не змінюється? Встановіть <strong>Intel Trusted Execution Technology</strong> на <strong>Disabled</strong> і спробуйте знову."
        link: "https://www.asus.com/support/FAQ/1043181"
      - name: "Материнська плата ASUS (настільний ПК)"
        key: "Del"
        press: "Натисніть <kbd>Del</kbd> або <kbd>F2</kbd> одразу після ввімкнення."
        where: "Натисніть <kbd>F7</kbd>, щоб перейти в Advanced Mode (плати ROG відкриваються одразу в ньому), потім <strong>Advanced &gt; CPU Configuration</strong>: <strong>Intel (VMX) Virtualization Technology</strong> або <strong>SVM Mode</strong>."
        note: "На платах ASUS для процесорів Intel увімкнена за замовчуванням."
        link: "https://www.asus.com/support/FAQ/1045141"
      - name: "Dell"
        key: "F2"
        press: "Натисніть <kbd>F2</kbd>, коли з'явиться логотип Dell."
        where: "<strong>Virtualization Support &gt; Virtualization</strong> або <strong>Advanced &gt; Virtualization</strong>, залежно від моделі."
        note: "Моделі від 2025 року приховують частину налаштувань: <kbd>Ctrl</kbd> <kbd>Alt</kbd> <kbd>S</kbd> їх показує. Якщо налаштування віртуалізації немає взагалі, комп'ютер її не підтримує."
        link: "https://www.dell.com/support/kbdoc/en-us/000195978"
      - name: "HP"
        key: "F10"
        press: "Увімкніть комп'ютер і одразу натисніть <kbd>F10</kbd>."
        where: "OMEN, Victus, Spectre, ENVY і Pavilion: <strong>Configuration &gt; Virtualization Technology</strong>. EliteBook, EliteDesk та інші бізнес-моделі: <strong>Advanced &gt; System Options &gt; Virtualization Technology (VTx)</strong>."
        note: "На деяких старіших бізнес-моделях вона в <strong>Security &gt; System Security</strong>."
        link: "https://support.hp.com/us-en/document/ish_5637142-5637191-16"
      - name: "Lenovo ThinkPad, ThinkCentre"
        key: "F1"
        press: "Натисніть <kbd>F1</kbd> одразу після ввімкнення."
        where: "Вкладка <strong>Security</strong>; на ThinkPad — <strong>Security &gt; Virtualization</strong>."
        note: "Якщо на жодній сторінці немає налаштування віртуалізації, комп'ютер її не підтримує."
        link: "https://support.lenovo.com/us/en/solutions/HT500006"
      - name: "Lenovo IdeaPad, Yoga"
        key: "F2"
        press: "Натисніть <kbd>F2</kbd> (або <kbd>Fn</kbd> <kbd>F2</kbd>) одразу після ввімкнення. Або, коли ноутбук вимкнений, натисніть маленьку кнопку Novo й виберіть <strong>BIOS Setup</strong>."
        where: "Зазвичай вкладка <strong>Configuration</strong>."
        note: "Якщо на жодній сторінці немає налаштування віртуалізації, комп'ютер її не підтримує."
        link: "https://support.lenovo.com/us/en/solutions/HT500216"
      - name: "Ноутбук MSI"
        key: "Del"
        press: "Натисніть <kbd>Del</kbd> одразу після ввімкнення."
        where: "<strong>Advanced</strong>: <strong>Intel Virtualization Technology</strong> або <strong>SVM Mode</strong> на моделях з AMD."
        note: "MSI вмикає її ще на заводі, тож спершу перевірте в Task Manager."
        link: "https://www.msi.com/faq/8790"
      - name: "Материнська плата MSI (настільний ПК)"
        key: "Del"
        press: "Натисніть <kbd>Del</kbd> одразу після ввімкнення."
        where: "<strong>OC &gt; CPU Features &gt; SVM Mode</strong> на платах для процесорів AMD. На платах для Intel це налаштування теж серед налаштувань процесора."
        link: "https://www.msi.com/faq/mb-2581"
      - name: "Інші материнські плати для настільних ПК"
        key: "Del"
        press: "Зазвичай <kbd>Del</kbd> одразу після ввімкнення; перший екран підказує, яка клавіша відкриває налаштування."
        where: "Перейдіть у розширений вигляд, якщо він є, і шукайте серед налаштувань процесора (CPU) — в <strong>Advanced</strong> або на вкладці розгону."
        note: "Точне меню названо в посібнику до плати на сайті її виробника."
      - name: "Microsoft Surface"
        tag: "Уже ввімкнено"
        where: "Ніде: Microsoft каже, що на пристроях Surface віртуалізація вже ввімкнена."
        link: "https://support.microsoft.com/topic/c5578302-6e43-4b4b-a449-8ced115f58e1"
      - name: "Інший виробник"
        press: "Стежте за першим екраном після ввімкнення: він часто підказує, яка клавіша відкриває налаштування. Найчастіше це <kbd>F2</kbd>, <kbd>Del</kbd>, <kbd>F10</kbd> і <kbd>F1</kbd>. Або скористайтеся шляхом через Windows вище."
        where: "Пошукайте на сайті підтримки виробника «enable virtualization» і свою модель або перегляньте кожну вкладку: це налаштування стоїть поруч із налаштуваннями процесора (CPU)."
---

У вашому процесорі є вбудована функція для запуску віртуальних машин — **віртуалізація**: Intel називає її VT-x,
AMD — AMD-V або SVM. Коли вона ввімкнена, віртуальна машина працює майже на повній швидкості. Коли вимкнена,
більшість гіпервізорів (програм, що запускають віртуальні машини, як-от VMware Workstation Pro чи VirtualBox) взагалі
не запустять жодної. На багатьох комп'ютерах вона вимкнена з коробки.

Цей перемикач не у Windows і не в Linux. Він в **UEFI** — невеликій програмі, вбудованій у комп'ютер, яка запускає
його ще до того, як завантажиться операційна система. На старіших комп'ютерах вона називається **BIOS**, і багато хто
досі так її називає. Вам треба буде змінити там одне налаштування.

> [!NOTE]
> У вас Mac? Вмикати нічого не треба: на Mac віртуалізація вже ввімкнена, тож цю інструкцію можна пропустити.

> [!NOTE]
> Назви кнопок і меню Windows тут наведено так, як вони виглядають англійською. Якщо ваша Windows українською, вони
> перекладені, але стоять на тих самих місцях.

> [!TIP]
> Відкрийте цю інструкцію на телефоні: посеред роботи комп'ютер перезавантажиться, а кроки варто мати перед очима.

## Перевірте, чи вона вже ввімкнена

<!-- for: windows -->

1. Натисніть <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>Esc</kbd>, щоб відкрити **Task Manager** (Диспетчер завдань).
2. Виберіть **Performance**, потім **CPU**.
3. Знайдіть **Virtualization** у списку під графіком.

   <!-- pic: task-manager -->

   **Enabled** означає, що вона ввімкнена: усе готово, нічого змінювати не треба. **Disabled** означає, що вимкнена:
   продовжуйте.

4. Поки ви тут, запам'ятайте назву процесора вгорі праворуч. Вона починається з **Intel** або **AMD**, і перемикач для
   кожного називається по-різному.

<!-- for: linux -->

У Kali, Ubuntu чи Debian відкрийте термінал. Перша команда встановлює невелику програму для перевірки, друга її запускає:

```sh
sudo apt install cpu-checker
sudo kvm-ok
```

**KVM acceleration can be used** означає, що вона ввімкнена. **KVM acceleration can NOT be used** означає, що вимкнена
(або ваш процесор її не має): продовжуйте. В інших системах Linux команда `ls /dev/kvm` показує `/dev/kvm`, коли вона
ввімкнена. Щоб дізнатися, Intel у вас чи AMD, виконайте `lscpu | grep "Model name"`.

## Відкрийте налаштування UEFI

Спершу збережіть роботу: комп'ютер перезавантажиться.

<!-- for: windows -->

Якщо ваш диск зашифровано BitLocker чи шифруванням пристрою (Device encryption), переконайтеся, що маєте доступ до
ключа відновлення (з обліковим записом Microsoft він на [aka.ms/myrecoverykey](https://aka.ms/myrecoverykey)):
після змін у налаштуваннях запуску Windows іноді його просить.

<!-- pic: way-in -->

1. Відкрийте **Settings** (Параметри) > **System** > **Recovery**. У Windows 10: **Settings** > **Update & Security** >
   **Recovery**.
2. Біля **Advanced startup** виберіть **Restart now** і підтвердьте.
3. Комп'ютер перезавантажиться в синій екран **Choose an option**. Виберіть **Troubleshoot** > **Advanced options** >
   **UEFI Firmware Settings**.
4. Виберіть **Restart**. Комп'ютер запуститься одразу в налаштуваннях UEFI.

**Швидкий спосіб:** клацніть правою кнопкою миші **Start** (Пуск) і виберіть **Terminal (Admin)** (у Windows 10 —
**Windows PowerShell (Admin)**), а потім введіть це. `/r` перезавантажує, `/fw` переходить у мікропрограму (UEFI),
а `/t 0` означає «зараз»:

```powershell
shutdown /r /fw /t 0
```

<!-- for: linux -->

Ця команда перезавантажує комп'ютер в UEFI:

```sh
systemctl reboot --firmware-setup
```

<!-- /for -->

**Немає кнопки UEFI Firmware Settings або команда видає помилку?** Скористайтеся клавішею свого виробника:
перезавантажте комп'ютер і одразу натискайте клавішу, приблизно двічі на секунду, поки не з'являться налаштування.
Клавіша кожного виробника — у списку в наступному розділі.

## Знайдіть перемикач

UEFI на кожному комп'ютері виглядає по-своєму. Одні — це текстові екрани, якими рухаються стрілками й
<kbd>Enter</kbd>; новіші мають картинки й працюють з мишею. Більшість виглядає приблизно так:

<!-- pic: setup-screen -->

Як називається перемикач, залежить від процесора й виробника:

<!-- pic: names -->

1. Відкрийте свого виробника в списку й перейдіть туди, куди він вказує.

   <!-- pic: makers -->

2. Виберіть налаштування віртуалізації й змініть його на **Enabled**. Зазвичай треба натиснути <kbd>Enter</kbd>
   і вибрати **Enabled**; на деяких екранах замість цього є прапорець.
3. Усе інше залиште як є.

   > [!WARNING]
   > Змінюйте лише це одне налаштування: інші, як-от Secure Boot чи режим завантаження, можуть завадити Windows
   > запуститися. Змінили щось випадково? Вийдіть без збереження (шукайте **Discard Changes and Exit**) і почніть знову.

> [!ASIDE] VT-d та IOMMU
> Поруч із перемикачем ви можете побачити **VT-d** (Intel) або **IOMMU** (AMD). Це інша функція: вона потрібна, щоб передати
> віртуальній машині справжній пристрій вашого комп'ютера. Вашій лабораторії вона не потрібна, тож не чіпайте її.

## Збережіть і перезавантажте

1. Натисніть <kbd>F10</kbd> або відкрийте **Exit** і виберіть **Save Changes and Exit** (слова можуть трохи
   відрізнятися).
2. Підтвердьте кнопкою **Yes** чи **OK**. Комп'ютер перезавантажиться у Windows або Linux, як зазвичай.

## Перевірте, що все працює

<!-- for: windows -->

1. Знову відкрийте **Task Manager** (<kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>Esc</kbd>) і перейдіть у **Performance** >
   **CPU**.
2. Біля **Virtualization** тепер написано **Enabled**. Ваш комп'ютер готовий до віртуальних машин.

<!-- for: linux -->

Знову виконайте `sudo kvm-ok`: тепер команда показує **KVM acceleration can be used**. Ваш комп'ютер готовий до
віртуальних машин.

<!-- /for -->

> [!NOTE]
> Досі **Disabled** (або **can NOT be used**)? Деякі комп'ютери приймають зміну лише після повного вимкнення.
> Вимкніть комп'ютер (не перезавантажуйте), зачекайте кілька секунд і ввімкніть знову.

## Якщо щось пішло не так

**Комп'ютер запускається як зазвичай, а налаштування не відкриваються.** Клавішу треба натискати рано: починайте з
моменту, коли екран згасне або коли ви натиснете кнопку живлення. Або скористайтеся шляхом через налаштування Windows чи
командою для Linux вище — там клавіша не потрібна. На ноутбуках, де верхні клавіші також змінюють гучність і яскравість,
затисніть <kbd>Fn</kbd> разом із клавішею (<kbd>Fn</kbd> <kbd>F2</kbd>).

**Налаштування віртуалізації немає ніде.** Перегляньте всі вкладки й спробуйте клавіші виробника, що показують
приховані налаштування (Dell: <kbd>Ctrl</kbd> <kbd>Alt</kbd> <kbd>S</kbd>; Acer: <kbd>Ctrl</kbd> <kbd>S</kbd>). Якщо
його справді немає, то, за словами Dell і Lenovo, комп'ютер не підтримує віртуалізацію.

**Налаштування сіре й не змінюється.** На ноутбуці ASUS спершу встановіть **Intel Trusted Execution Technology** на
**Disabled**. На робочому чи навчальному комп'ютері адміністратор міг заблокувати налаштування паролем: зверніться до
нього.

<!-- for: windows -->

**Немає кнопки UEFI Firmware Settings.** Найімовірніше, Windows встановлено по-старому (у режимі legacy BIOS), або
комп'ютер такої можливості не дає. Скористайтеся клавішею свого виробника.

**Windows просить ключ відновлення BitLocker.** На іншому пристрої відкрийте
[aka.ms/myrecoverykey](https://aka.ms/myrecoverykey), увійдіть з обліковим записом Microsoft, яким користуєтеся на
цьому комп'ютері, і введіть ключ, який там показано. Після цього Windows запуститься як зазвичай.

**Task Manager показує Enabled, але VMware Workstation Pro не запускається.** Частину з UEFI зроблено: віртуалізацію
використовує власний гіпервізор Windows (Hyper-V або функція безпеки, побудована на ньому). VMware Workstation Pro
може працювати поверх нього через функцію Windows під назвою Windows Hypervisor Platform, і інструкція з його
встановлення показує, як це зробити.
<!-- guide: install-vmware-workstation-windows -->
