---
# About → lvlulcuma.com/ua/about/
# The first paragraph under the dashes (at the bottom of this file) is the big intro line.
# Links to this site's pages leave out the language: "/roadmap/" opens /ua/roadmap/ here.
updated: 2026-10-31

# The big fact at the top of the box beside the page is the next article's date.
# To show something else there instead, add:
# key:
#   label: "..."
#   value: "..."

# "Now" in the box beside the page: what you're busy with. Update it when you post each month.
now:
  label: "Зараз"
  updated: 2026-10-28   # shown as the month next to "Now"
  items:
    - label: "Працюю над"
      text: "Що вивчати для кожної професії в розділі «Кар'єра»"
      link: "/roadmap/"
    # - label: "Вивчаю"
    #   text: "..."
    # - label: "Читаю"
    #   text: "..."
    #   link: "https://..."   # optional

# 01 · Start here: one card per kind of visitor. `section:` is a menu item:
# articles, guides, roadmap, research, lab or contact.
start:
  heading: "З чого почати"
  text: "Що ви знайдете на цьому сайті — залежно від того, навіщо сюди прийшли."
  items:
    - who: "Тільки починаєте в кібербезпеці"
      text: "Напрями та професії в кібербезпеці, а також те, з чого зазвичай починають."
      section: roadmap
    - who: "Щось налаштовуєте"
      text: "Покрокові інструкції зі встановлення та захисту інструментів на Windows, macOS і Linux."
      section: guides
    - who: "Хочете бути в курсі"
      text: "Одна стаття на місяць: підсумки досліджень, нотатки з лабораторії та практичні поради."
      section: articles
    - who: "Шукаєте глибший аналіз"
      text: "Ґрунтовніші дослідження: у кожного є питання, метод і дані, на яких воно побудоване."
      section: research
    - who: "Хочете практикуватися"
      text: "Як влаштована моя лабораторія і яких правил я дотримуюся під час тестування."
      section: lab
    - who: "Маєте питання"
      text: "Питання, виправлення чи проблема з безпекою сайту: найшвидше — написати мені листа."
      section: contact

# 02 · Stay up to date: what each section publishes, and how to follow it.
#   section: a menu item (news, articles, guides, roadmap, research or lab)
#   text:    what's new there and how often
#   feed:    optional: the section's RSS feed on this site, like "/rss.xml"
updates:
  heading: "Як стежити за оновленнями"
  text: "Що і де публікується та як часто. RSS працює в будь-якому RSS-читачі, без акаунта й без адреси ел. пошти."
  feed_label: "RSS-стрічка"
  items:
    - section: news
      text: "Щотижневий огляд головних новин безпеки і покрокові розбори великих атак, коли факти вже відомі."
      feed: "/news/rss.xml"
    - section: articles
      text: "Одна стаття на місяць, в останній понеділок."
      feed: "/rss.xml"
    - section: guides
      text: "Покрокові інструкції, що з'являються в міру написання. У кожній видно, коли її востаннє оновлено."
    - section: roadmap
      text: "«Що вивчати» додається по одній професії. На сторінці кожного напряму видно, для яких професій це вже готово."

# 03 · How I work: short promises about how the site is written and how I test.
how:
  heading: "Як я працюю"
  text: "Чого можна очікувати від усього, що тут публікується."
  items:
    - title: "Спершу дозвіл"
      text: "Я тестую лише системи, які належать мені або на тестування яких я маю письмовий дозвіл. Про знахідки першим дізнається власник, і лише потім щось публікується."
      link: "/lab/rules/"
      link_text: "Практикуйтеся безпечно й законно"
    - title: "Джерела, які можна перевірити"
      text: "Факти мають посилання на джерело. Наприклад, розділ «Кар'єра» побудований на NICE Framework від NIST та European Cybersecurity Skills Framework від ENISA."
      link: "/roadmap/"
      link_text: "Кар'єра"
    - title: "Помилки виправляю відкрито"
      text: "Якщо тут щось не так, напишіть мені — я виправлю. Коли стаття чи дослідження змінюється після публікації, у блоці поруч видно, що змінилося і коли."
    - title: "Жодного стеження"
      text: "Без cookies, аналітики та JavaScript. Як захищено сайт, можна перевірити самостійно."
      link: "/colophon/"
      link_text: "Як захищено сайт"

# 04 · Is it really me: where to find you for sure. Email, GitHub, Medium and PGP come from
# content/settings.yml; the security address comes from public/.well-known/security.txt.
verify:
  heading: "Чи це справді я?"
  text: "Фахівців з безпеки теж підробляють. Ось єдині адреси та акаунти, якими я користуюся:"
  site_label: "Сайт"
  email_label: "Ел. пошта"
  security_label: "Звіти про вразливості"
  pgp_label: "PGP-відбиток"
  never_heading: "Я ніколи:"
  never:
    - "не проситиму ваші паролі, одноразові коди чи ключі відновлення"
    - "не вимагатиму оплати, перш ніж розповісти про знайдену проблему з безпекою"
    - "не надсилатиму файли чи посилання, яких ви не просили"
    - "не писатиму вам з адреси, якої немає на цій сторінці"
  after: "Якщо повідомлення нібито від мене не збігається з цією сторінкою, напишіть мені на адресу вище — я скажу, чи воно справжнє."
---

lvlulcuma.com — це практичні нотатки про кібербезпеку: чому захист не спрацьовує, як зробити його надійним і як потрапити в цю сферу.
