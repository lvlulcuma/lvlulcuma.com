---
# How this site is secured → lvlulcuma.com/ua/colophon/
# Keep every sentence true. The header list is filled in from public/_headers automatically.
updated: 2026-10-27
intro: "Сайт фахівця з безпеки має проходити ті самі перевірки, які він сам провів би для клієнта. Нижче — засоби захисту, які тут працюють, і ви можете перевірити їх самостійно."
key:   # the big fact at the top of the box beside the page
  label: "Файли JavaScript"
  value: "0"
---

## Хостинг

Статичний HTML, зібраний в Astro і розміщений на Cloudflare. Немає серверного коду, бази даних, входу чи адмінпанелі, а сторінки не виконують жодного JavaScript.

## Приватність

Без cookies, аналітики та запитів до сторонніх сервісів. Шрифти розміщено на власному сервері, тож браузер звертається лише до цього домену.

## Заголовки відповіді

Кожна сторінка надсилається з цими заголовками. Content-Security-Policy блокує всі скрипти, а збирання завершується помилкою, якщо будь-яка сторінка їх містить.

<!-- response-headers -->

## DNS і пошта

Зону підписано DNSSEC. Записи CAA обмежують, які центри сертифікації можуть видавати сертифікати для домену. SPF і DMARC вказують поштовим серверам відхиляти листи, що видають себе за цей домен.

## Перевірте самі

- [securityheaders.com](https://securityheaders.com/?q=lvlulcuma.com&followRedirects=on)
- [MDN HTTP Observatory](https://developer.mozilla.org/en-US/observatory/analyze?host=lvlulcuma.com)
- [internet.nl](https://internet.nl/site/lvlulcuma.com/)
- [DNSViz (DNSSEC)](https://dnsviz.net/d/lvlulcuma.com/dnssec/)
