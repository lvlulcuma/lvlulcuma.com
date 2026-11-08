---
title: "Laboratorium do ćwiczeń z API na komputerach z ARM"
date: 2026-09-28
topic: lab
dek: "Wiele celowo podatnych aplikacji szkoleniowych ma obrazy tylko dla x86. Oto jak uruchomić je na komputerze z procesorem ARM i jak odciąć je od sieci."
related: "lab/web-app-hacking"
---

## Co działa w laboratorium

W laboratorium są cztery aplikacje szkoleniowe stworzone po to, żeby je łamać: OWASP crAPI, Pixi, OWASP Juice Shop i DVGA do GraphQL. Każda działa w Dockerze na jednym komputerze.

## Niezgodność architektur

Część tych obrazów jest publikowana tylko dla amd64. Na komputerze z ARM (np. na Macu z Apple Silicon) Docker ostrzega, że platforma obrazu nie zgadza się z hostem, a niektóre kontenery nie startują albo padają przy domyślnej emulacji. Jawne wskazanie platformy, a na Macu także przełączenie emulacji na Rosettę, stabilizuje ich działanie.

```yaml
services:
  crapi-web:
    image: crapi/crapi-web:latest
    platform: linux/amd64
    ports:
      - "127.0.0.1:8888:80"
```

Na Macu włącz w ustawieniach Docker Desktop `Use Rosetta for x86_64/amd64 emulation on Apple Silicon`. Start trwa dłużej, ale wszystko działa.

## Jak to wszystko odizolować

- Przypinaj każdą usługę do `127.0.0.1`, nigdy do `0.0.0.0`, żeby nic nie było dostępne z sieci lokalnej.
- Umieść laboratorium we własnej sieci Dockera, bez dostępu do innych kontenerów.
- Wyłączaj je po pracy. Podatne aplikacje, które zostają włączone, to realne ryzyko.
