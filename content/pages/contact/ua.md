---
# Contact → lvlulcuma.com/ua/contact/
# Your email address, GitHub and Medium links and PGP key are set in content/settings.yml.
# Links to this site's pages leave out the language: "/about/" opens /ua/about/ here.
updated: 2026-10-28
intro: "Питання, виправлення, ідеї чи проблема з безпекою: найкраще написати мені листа."   # line under the heading (also the Google description)

key:   # the big fact at the top of the box beside the page
  label: "Зазвичай відповідаю"
  value: "Протягом дня"
pgp_label: "Відбиток PGP"
also_label: "Також на"   # before the links to your GitHub and Medium (set in content/settings.yml)

# 01 · What's it about: one card per reason to write. Each card opens the visitor's email app
# with the subject and a short template already filled in.
#   who:      the card's heading
#   text:     one line under it
#   subject:  the email's subject line
#   body:     optional: the template inside the email (keep the "|" and indent each line)
topics:
  heading: "Про що лист?"
  text: "Оберіть тему, і поштовий застосунок відкриється з коротким шаблоном, щоб ви знали, що написати."
  go: "Написати"   # the small link at the bottom of each card
  items:
    - who: "Знайшли помилку"
      text: "Неправильний факт, бите посилання або крок в інструкції, який не працює."
      subject: "Виправлення: "
      body: |
        Сторінка (посилання):

        Що не так:

        Як має бути (якщо знаєте):
    - who: "Як почати в кібербезпеці"
      text: "Не знаєте, з чого почати чи що вивчати далі? Питайте."
      subject: "Питання: як почати в кібербезпеці"
      body: |
        Де я зараз (навчання, робота, навички):

        Чим хочу займатися:

        Що вже пробував(-ла):

        Моє питання:
    - who: "Ідея для статті"
      text: "Тема, яку варто пояснити, або інструмент, для якого потрібна інструкція."
      subject: "Ідея: "
      body: |
        Тема:

        Чим це допоможе:

        Що ви вже про це читали:
    - who: "Співпраця"
      text: "Робота, стажування, проєкт чи виступ."
      subject: "Співпраця: "
      body: |
        Хто я і де працюю:

        Про що йдеться:

        Терміни:
    - who: "Вразливість на цьому сайті"
      text: "Знайшли вразливість на цьому сайті? Дякую! Що варто вказати, описано в розділі 03."
      subject: "Безпека: "
      body: |
        Що я знайшов(-ла):

        Де (посилання):

        Кроки для відтворення:

        Що з цим може зробити зловмисник:
    - who: "Щось інше"
      text: "Усе, що не підходить вище. Можна просто привітатися."
      subject: "Привіт"

# 02 · What to expect, as HTTP status codes. `code:` starting with 2 shows green, with 4 orange.
expect:
  heading: "Чого очікувати"
  text: "У кодах статусу HTTP, бо це ж сайт про кібербезпеку ;)"
  items:
    - code: "200 OK"
      text: "Питання, виправлення, ідеї та пропозиції — усе вітається. Я читаю кожен лист."
    - code: "202 Accepted"
      text: "Зазвичай відповідаю протягом дня, іноді — за кілька днів."
    - code: "403 Forbidden"
      text: "Я не зламуватиму чужі акаунти, пошту чи телефони (навіть колишнього чи колишньої) і не тестуватиму сайт без письмового дозволу власника. Не можете увійти у свій акаунт? Скористайтеся офіційною сторінкою відновлення доступу цього сервісу. Будь-хто інший, хто обіцяє повернути вам доступ, майже напевно шахрай."
      link: "/lab/rules/"
      link_text: "Практикуйтеся безпечно й законно"
    - code: "429 Too Many Requests"
      text: "Одного листа достатньо. Якщо за тиждень відповіді немає, можна коротко нагадати."

# 03 · Reporting a security problem with this site. The real public/.well-known/security.txt is shown under it.
security:
  heading: "Як повідомити про вразливість"
  text: "Якщо знайдете вразливість на lvlulcuma.com, напишіть мені. У хорошому звіті є:"
  include:
    - "що саме ви знайшли і на якій сторінці чи адресі"
    - "кроки для відтворення"
    - "що з цим може зробити зловмисник"
    - "як це виправити, якщо маєте ідею"
  please: "Будь ласка, тестуйте лише те, що є у відкритому доступі, не намагайтеся дістатися до того, що вам не належить, і дайте мені час виправити проблему, перш ніж публікувати."
  security_txt: "Сайт також публікує файл security.txt (RFC 9116), щоб інструменти безпеки та дослідники знали, куди надсилати звіти:"

# The line at the bottom of the page.
verify:
  text: "Отримали повідомлення нібито від мене?"
  link_text: "Перевірте на сторінці «Про сайт»"
---
