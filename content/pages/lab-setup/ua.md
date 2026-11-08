---
# Lab setup → lvlulcuma.com/ua/lab/setup/
updated: 2026-11-08
title: "Склад лабораторії"
summary: "Обладнання, цілі та схема мережі."   # one line on the Lab overview page
intro: "Невелика лабораторія, яку легко відтворити. Усе можна розгорнути заново з одного compose-файлу за кілька хвилин."
related_article: "2026-09"   # a monthly article linked at the bottom (folder name in content/articles/)
key:   # the big fact at the top of the box beside the page
  label: "Цілі"
  value: "4"
---

| Компонент | Деталі |
|---|---|
| Хост | Ноутбук із Docker Desktop; образи лише для x86 працюють через емуляцію |
| Цілі | OWASP crAPI, Pixi, OWASP Juice Shop, DVGA |
| Проксі | Burp Suite Community Edition |
| Мережа | Окрема мережа Docker, кожен порт прив'язано до 127.0.0.1 |
| Друга машина | Комп'ютер з Linux для тривалих завдань |
