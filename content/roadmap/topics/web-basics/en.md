---
# Roadmap topic. Its title and summary show on every job page that lists "web-basics" in learn.yml.
# The text under the dashes is the topic's own page: lvlulcuma.com/en/roadmap/topics/web-basics/
# How these pages are written: docs/claude/roadmap-topic.md
title: "How the web works"
summary: "URLs, HTTP requests and responses, methods and status codes, headers, cookies and sessions, HTTPS, and what a web server or proxy writes to its logs."
date: 2026-11-14
sources:
  - name: "RFC 3986: Uniform Resource Identifier (URI): Generic Syntax, 2005"
    url: "https://www.rfc-editor.org/rfc/rfc3986"
  - name: "RFC 9110: HTTP Semantics, 2022"
    url: "https://www.rfc-editor.org/rfc/rfc9110.html"
  - name: "RFC 9112: HTTP/1.1, 2022"
    url: "https://rfc-editor.org/rfc/rfc9112.html"
  - name: "RFC 9113: HTTP/2, 2022"
    url: "https://www.rfc-editor.org/rfc/rfc9113"
  - name: "RFC 9114: HTTP/3, 2022"
    url: "https://www.rfc-editor.org/rfc/rfc9114"
  - name: "RFC 5789: PATCH Method for HTTP, 2010"
    url: "https://www.rfc-editor.org/rfc/rfc5789"
  - name: "RFC 6265: HTTP State Management Mechanism (cookies), 2011"
    url: "https://www.rfc-editor.org/rfc/rfc6265"
  - name: "IETF draft-ietf-httpbis-rfc6265bis: Cookies (the update to RFC 6265)"
    url: "https://datatracker.ietf.org/doc/draft-ietf-httpbis-rfc6265bis/"
  - name: "RFC 7239: Forwarded HTTP Extension, 2014"
    url: "https://rfc-editor.org/rfc/rfc7239"
  - name: "RFC 6797: HTTP Strict Transport Security (HSTS), 2012"
    url: "https://datatracker.ietf.org/doc/rfc6797/"
  - name: "RFC 8446: The Transport Layer Security (TLS) Protocol Version 1.3, 2018"
    url: "https://www.rfc-editor.org/rfc/rfc8446"
  - name: "RFC 9846: The Transport Layer Security (TLS) Protocol Version 1.3, July 2026"
    url: "https://www.rfc-editor.org/rfc/rfc9846.html"
  - name: "RFC 8996: Deprecating TLS 1.0 and TLS 1.1, 2021"
    url: "https://rfc-editor.org/rfc/rfc8996.html"
  - name: "RFC 9849: TLS Encrypted Client Hello, March 2026"
    url: "https://datatracker.ietf.org/doc/rfc9849/"
  - name: "RFC 6962: Certificate Transparency, 2013"
    url: "https://www.rfc-editor.org/rfc/rfc6962"
  - name: "MDN Web Docs: Overview of HTTP"
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview"
  - name: "MDN Web Docs: HTTP response status codes"
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status"
  - name: "MDN Web Docs: Set-Cookie header"
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie"
  - name: "MDN Web Docs: Same-origin policy"
    url: "https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Same-origin_policy"
  - name: "MDN Web Docs: Referrer-Policy header"
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Referrer-Policy"
  - name: "MDN Web Docs: X-Forwarded-For header"
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Forwarded-For"
  - name: "MDN Web Docs: Proxy servers and tunneling"
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling"
  - name: "MDN Web Docs: Strict-Transport-Security header"
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security"
  - name: "OWASP HTTP Security Response Headers Cheat Sheet"
    url: "https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html"
  - name: "OWASP Session Management Cheat Sheet"
    url: "https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html"
  - name: "Chromium Blog: SameSite Cookie Changes in February 2020"
    url: "https://blog.chromium.org/2020/02/samesite-cookie-changes-in-february.html"
  - name: "Google: Chrome Now Warns Before Insecure HTTP Connections, October 2026"
    url: "https://blog.google/security/chrome-now-warns-before-insecure-http-connections/"
  - name: "Chromium Blog: An Update on the Lock Icon, May 2023"
    url: "https://blog.chromium.org/2023/05/an-update-on-lock-icon.html"
  - name: "CA/Browser Forum: Ballot SC-081v3, Introduce Schedule of Reducing Validity and Data Reuse Periods, 2025"
    url: "https://cabforum.org/2025/04/11/ballot-sc081v3-introduce-schedule-of-reducing-validity-and-data-reuse-periods/"
  - name: "Sophos X-Ops: Cookie stealing, the new perimeter bypass, 2022"
    url: "https://news.sophos.com/en-us/2022/08/18/cookie-stealing-the-new-perimeter-bypass/"
  - name: "CISA Alert TA17-075A: HTTPS Interception Weakens TLS Security, 2017"
    url: "https://www.cisa.gov/news-events/alerts/2017/03/16/https-interception-weakens-tls-security"
  - name: "Apache HTTP Server documentation: Log Files"
    url: "https://httpd.apache.org/docs/logs.html"
  - name: "nginx documentation: ngx_http_log_module"
    url: "https://nginx.org/en/docs/http/ngx_http_log_module.html"
  - name: "Microsoft Learn: Configure Logging in IIS"
    url: "https://learn.microsoft.com/en-us/iis/manage/provisioning-and-managing-iis/configure-logging-in-iis"
  - name: "curl: curl shipped by Microsoft"
    url: "https://curl.se/windows/microsoft.html"
  - name: "Chrome for Developers: Inspect network activity"
    url: "https://developer.chrome.com/docs/devtools/network"
  - name: "WebKit: Enabling Web Inspector (Safari)"
    url: "https://webkit.org/web-inspector/enabling-web-inspector/"
visuals:
  visit:
    kind: route
    stages:
      - where: "Find the server"
        steps: ["DNS: <code>shop.example</code>?", "<code>203.0.113.10</code>"]
      - where: "Open a private line (TLS)"
        steps: ["Hello", "Certificate", "Keys agreed"]
      - where: "Ask and answer (HTTP)"
        steps: ["<code>GET /</code>", "<code>200 OK</code> and a cookie"]
      - where: "Fetch the rest, then keep going"
        steps: ["Styles, images, scripts", "Every later request carries the cookie"]
    caption: "One visit to a shop's home page. Getting the address and the private line happen first; then the browser and the server trade requests and answers until you leave."
  url:
    kind: window
    title: "One URL, piece by piece"
    lead: ["https://shop.example:443/cart/items?id=42&amp;color=blue#reviews", "a URL with every common part"]
    head: ["Part", "In this URL"]
    rows:
      - ["Scheme: how to talk", "<code>https</code>"]
      - ["Host: which site", "<code>shop.example</code>"]
      - ["Port (usually left out)", "<code>443</code>"]
      - ["Path: which thing on the site", "<code>/cart/items</code>"]
      - ["Query: extra details", "<code>id=42&amp;color=blue</code>"]
      - ["Fragment: a spot on the page", "<code>reviews</code> (never sent to the server)"]
    mark: 2
    caption: "The host decides where your request goes. Everything else is decided by that site."
  status:
    kind: cards
    layout: rows
    cards:
      - title: "1xx: hold on"
        text: "An early note while the real answer is on its way. Rare in logs."
        tags: ["100 Continue"]
      - title: "2xx: success"
        text: "Here it is, or it's done."
        tags: ["200 OK", "201 Created", "204 No Content"]
      - title: "3xx: redirect"
        text: "The thing is elsewhere, or your saved copy is still good."
        tags: ["301", "302", "304", "307", "308"]
      - title: "4xx: client error"
        text: "Something is wrong with the request: bad address, not logged in, not allowed, or too many."
        tags: ["400", "401", "403", "404", "429"]
      - title: "5xx: server error"
        text: "The request looked fine, but the server failed to answer it."
        tags: ["500", "502", "503", "504"]
    caption: "The first digit tells you the kind of answer before you know the exact code."
  login:
    kind: route
    stages:
      - where: "Log in once"
        steps: ["<code>POST /login</code> with your password", "<code>200 OK</code> + <code>Set-Cookie: session=7f3a…</code>"]
      - where: "Every request after"
        steps: ["<code>Cookie: session=7f3a…</code>", "The server looks up session 7f3a…", "Your orders, your cart"]
    caption: "The password travels once. After that, the cookie is what proves it's you, which is why stealing it is as good as stealing the password."
  cookie:
    kind: window
    title: "One Set-Cookie header, opened up"
    lead: ["session=7f3a9c…", "the name and value: a long random ID, not your password"]
    head: ["Attribute", "What it does"]
    rows:
      - ["<code>Secure</code>", "Sent only over HTTPS"]
      - ["<code>HttpOnly</code>", "Page scripts can't read it, so injected code can't steal it that way"]
      - ["<code>SameSite=Lax</code>", "Left off most requests that other sites start"]
      - ["<code>Path=/</code>", "Sent for every page on the site"]
      - ["<code>Max-Age=3600</code>", "Deleted after an hour (3,600 seconds)"]
    caption: "A well-set session cookie. Without <code>Max-Age</code> or <code>Expires</code>, it would last until the browser closes."
  https:
    kind: cards
    cards:
      - title: "Hidden by HTTPS"
        text: "Encrypted between your browser and the server."
        tags: ["path and query", "headers and cookies", "the page itself", "what you type into forms"]
      - title: "Still visible on the network"
        text: "Anyone on the path can still see these."
        tags: ["both IP addresses", "the site's name (usually)", "when, and how much"]
    caption: "The site's name usually leaks through DNS and the TLS greeting. Encrypted DNS and Encrypted Client Hello can hide it, where both ends support them."
  proxies:
    kind: cards
    layout: rows
    cards:
      - title: "Forward proxy"
        text: "Sits in front of users, for example a company's web proxy. Sees and logs which sites each person visits."
        tags: ["company web proxy", "secure web gateway"]
      - title: "Reverse proxy"
        text: "Sits in front of servers. Takes every visitor's request and passes it to the server behind it."
        tags: ["load balancer", "CDN", "web application firewall"]
    caption: "Same idea, opposite sides. Either way, the proxy, not the visitor, is who the next machine talks to."
  logline:
    kind: window
    title: "One access-log line, field by field"
    head: ["Field", "In this line"]
    rows:
      - ["Who asked (<code>%h</code>)", "<code>203.0.113.25</code>"]
      - ["Identity (<code>%l</code>)", "<code>-</code> (almost always empty)"]
      - ["User (<code>%u</code>)", "<code>-</code> (only with HTTP's own login)"]
      - ["When (<code>%t</code>)", "<code>[12/Nov/2026:14:02:17 -0500]</code>"]
      - ["The request (<code>%r</code>)", "<code>GET /cart?item=42 HTTP/1.1</code>"]
      - ["Status (<code>%&gt;s</code>)", "<code>200</code>"]
      - ["Bytes sent (<code>%b</code>)", "<code>5120</code>"]
      - ["Came from (Referer)", "<code>https://shop.example/</code>"]
      - ["Says it is (User-Agent)", "<code>Mozilla/5.0 (Windows NT 10.0; …)</code>"]
    mark: 5
    caption: "Apache's combined format, which nginx also uses by default. The codes in brackets are the ones in its configuration."
  quiz:
    kind: questions
    items:
      - q: "Where does <code>https://shop.example.account-check.example/login</code> really take you?"
        a: "To <code>account-check.example</code>. The host ends at the first single <code>/</code>, and it's read from the right: <code>shop.example.</code> at the start is just a label that site's owner put in front."
      - q: "Which part of <code>https://shop.example/help?topic=returns#refunds</code> never reaches the server?"
        a: "<code>#refunds</code>, the fragment. The browser keeps it to jump to a spot on the page. The query <code>?topic=returns</code> is sent, and it usually lands in the server's logs."
      - q: "A log shows 300 requests in two minutes from one address to <code>/login</code>, all <code>401</code>, then one <code>302</code> to <code>/account</code>. What probably happened?"
        a: "Someone, almost certainly a script, guessed passwords, and the last guess worked: the redirect to the account page is what a successful login looks like. That success is the line to act on."
      - q: "What's the difference between <code>401</code> and <code>403</code>?"
        a: "<code>401</code> means the request has no valid credentials: log in first. <code>403</code> means the server understood and refuses, even if you are logged in. A server may also answer <code>404</code> to hide that a forbidden page exists."
      - q: "Why can't you trust the User-Agent or X-Forwarded-For in a request?"
        a: "Both are written by the client, and a client can write anything. X-Forwarded-For is only trustworthy for the part a proxy you control added."
      - q: "A session cookie is set with <code>HttpOnly</code>. Does that stop an infostealer on the user's computer from taking it?"
        a: "No. <code>HttpOnly</code> only stops scripts on web pages from reading it. Malware on the computer reads the browser's cookie store directly, and whoever replays the cookie is logged in as you, without a password or second factor."
      - q: "On café Wi-Fi, which of these can the network owner see when you open <code>https://bank.example/statements?year=2026</code>: the site's name, the path, the year, your cookie?"
        a: "Usually the site's name (from DNS and the TLS greeting), plus the IP addresses and how much data moves. The path, the query with the year, and the cookie are inside the encrypted connection."
      - q: "An Apache log says <code>[12/Nov/2026:14:02:17 -0500]</code> and an IIS log says <code>2026-11-12 19:02:17</code>. Can they be the same moment?"
        a: "Yes. Apache writes local time with its offset from UTC (here, 5 hours behind), so 14:02 at −0500 is 19:02 UTC, and IIS writes its W3C logs in UTC."
---

## The short version

Think of the web as a café with a counter and very bad memory. You don't walk into the kitchen: you hand over a written
order and get something back.

- Your **browser** writes the order: a **request**. It says what to do (the **method**, like `GET`), which item (the
  **URL**) and a few notes (the **headers**).
- The **server** answers with a **response**: a three-digit **status code** (`200` means "here it is", `404` means
  "we don't have that"), its own notes, and the item itself, such as a web page.
- The café forgets you the moment you step away, so it gives you a numbered ticket, a **cookie**, that you show with
  every order. That's how a site knows you're still logged in.
- **HTTPS** is the same conversation through a sealed tube: people nearby can see you're at the café, not what you
  order.
- The server, and any **proxy** in between, writes each order in a book: the **logs**.

<mark>The web is a conversation of requests and answers: the browser asks with a method and a URL, the server answers
with a status code, and only what the browser sends back, usually a cookie, links one request to the next.</mark>
Nearly every web attack, and nearly every web log you'll ever read, is made of these few parts.

By the end of this page you'll be able to:

- take a URL apart, say which site it really leads to, and which parts reach the server;
- read a raw HTTP request and response line by line;
- know the main methods and status codes, and what a burst of them in a log suggests;
- name the headers that matter for security, and know which ones a client can fake;
- explain how cookies keep you logged in, and why a stolen cookie is as good as a password;
- say what HTTPS protects, what it leaves visible and what a certificate proves;
- read a web server's access log line field by field.

## Words you'll need

- **Browser** (or **user agent**): the program that sends requests for you. Scripts and apps send requests too, so
  logs often say "client" instead.
- **Server:** the program that answers. One machine can host many sites, and one site can run on many machines.
- **Resource:** anything with an address: a page, an image, a file, a piece of data.
- **HTML, CSS and JavaScript:** the page's content, its look and its behavior. One page usually needs dozens of
  separate requests to load all of them.
- **API:** an address meant for programs, not people. It usually answers with data (often JSON) instead of a page.
- **Plain text:** HTTP/1.1 messages are text you can read, which is why they're the easiest place to learn.

## One visit, start to finish

You type `shop.example` and press Enter. Here's what happens before you see anything.

<!-- pic: visit -->

1. **Find the server.** The browser asks DNS for the address of `shop.example` and gets `203.0.113.10` (DNS is
   explained in [Networking basics](/en/roadmap/topics/networking-basics/)).
2. **Open a private line.** It connects to port 443 and agrees on encryption with **TLS**. The server proves who it is
   with a **certificate**.
3. **Ask and answer.** The browser sends `GET /`, and the server answers `200 OK` with the page and a cookie.
4. **Fetch the rest.** The page names its styles, images and scripts, and each one is another request. Every later
   request to the site carries the cookie back.

The rest of this page takes each part apart.

## URLs: the address of everything

A **URL** names a resource and says how to reach it. Its parts are fixed by a standard (RFC 3986), so every browser,
server and security tool splits it the same way.

<!-- pic: url -->

- **Scheme:** `https` or `http`, the protocol to use.
- **Host:** the site's name (or an IP address). This is the part that decides where your request goes.
- **Port:** left out almost always, because each scheme has a default: 443 for `https`, 80 for `http`.
- **Path:** which thing on that site, like a folder path: `/cart/items`.
- **Query:** extra details after `?`, written as `name=value` pairs joined by `&`. Search terms, filters and IDs live
  here.
- **Fragment:** after `#`, a spot on the page. The browser keeps it: fragments are never sent to the server, and
  never appear in its logs.

Some characters can't appear as they are, so they're written as `%` and two hexadecimal digits, called
**percent-encoding**: a space becomes `%20`. Attackers use it too, to slip characters past filters that only look for
the plain form, so logs often contain it.

The **origin** of a page is its scheme, host and port together. Browsers keep pages from different origins apart:
under the **same-origin policy**, a script on one origin can't read what another origin sends back, unless that other
site allows it (with headers called **CORS**). `http://` and `https://` versions of a site, or two different ports, are
different origins.

### Reading a URL safely

Phishing depends on people misreading URLs. Two rules cover most tricks:

- **The host ends at the first single `/`. Read it from the right.** In
  `https://shop.example.account-check.example/login`, the site is `account-check.example`, and `shop.example.` is just
  a label its owner put in front.
- **Anything before an `@` in that part is a user name, not the site.** In `https://shop.example@203.0.113.50/`,
  the request goes to `203.0.113.50`. Browsers may warn about such links, but not every app does.

> [!WARNING]
> Never put secrets in a URL. The query is sent in the request line, so it ends up in server and proxy logs, in the
> browser's history and sometimes in the Referer header sent to the next site.

## Requests and responses

Every exchange is one **request** and one **response**. In HTTP/1.1 both are plain text. Here's a browser asking for
a cart page:

```http
GET /cart?item=42 HTTP/1.1
Host: shop.example
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) …
Accept: text/html
Accept-Language: en-US
Cookie: session=7f3a9c…
```

- The **request line** holds the method (`GET`), the target (`/cart?item=42`) and the version (`HTTP/1.1`).
- Then come **headers**, one `Name: value` per line.
- A blank line ends the headers. A request can then carry a **body**, such as a form's data in a `POST`. This one
  has none.

The `Host` header is required in HTTP/1.1, and a server must answer `400` to a request without it. It exists because
one IP address often serves many sites, and the server needs to know which one you mean.

And the server's answer:

```http
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Length: 5120
Set-Cookie: session=7f3a9c…; Secure; HttpOnly; SameSite=Lax; Path=/
Strict-Transport-Security: max-age=31536000

<!doctype html>
…
```

The **status line** gives the version, the code and a short phrase (`200 OK`). Headers follow, then a blank line,
then the body: here, the page.

HTTP is **stateless**: each request stands alone, and nothing in the protocol links it to the one before. Cookies,
covered below, are how sites remember you anyway.

> [!ASIDE] Versions
> HTTP/2 (RFC 9113) sends the same messages as compact binary frames and runs many at once over one connection.
> HTTP/3 (RFC 9114) does the same over QUIC, on UDP. The meaning is identical (RFC 9110), so browser tools show
> every version as if it were the text above.

## Methods: what the client wants done

The method is the verb of the request. These are the ones you'll see:

| Method | Asks the server to | Safe | Idempotent |
|---|---|---|---|
| GET | send a resource (a page, an image, data) | Yes | Yes |
| HEAD | send only the headers a GET would get | Yes | Yes |
| POST | process data the client sends (log in, post, pay) | No | No |
| PUT | create or replace the resource at this URL | No | Yes |
| PATCH | change part of a resource | No | No |
| DELETE | remove the resource | No | Yes |
| OPTIONS | say which methods are allowed here | Yes | Yes |

**Safe** means the method only reads: the client isn't asking for any change. **Idempotent** means sending the same
request twice has the same effect as sending it once: deleting something that's already deleted changes nothing more,
but posting a payment twice pays twice. That's why browsers ask before resending a form.

What this means for security:

- **The method is a promise, not a guarantee.** If a site changes things on a `GET` (`/delete?id=7`), a simple link
  or image can trigger it.
- **GET puts its data in the URL**, so in logs and history. Logins and forms belong in a POST body, which access logs
  don't record.
- **Unusual methods from outside** (`PUT`, `DELETE` and `TRACE`, which echoes a request back for testing) deserve a
  look when a public site doesn't use them.

## Status codes: how it went

The status code is a three-digit summary of the answer, and its first digit gives the kind.

<!-- pic: status -->

The codes you'll meet most, and what they can mean in a log:

| Code | Means | In a log, it can point to |
|---|---|---|
| 200 OK | Here it is | Normal, but a 200 right after many failures is the line to read |
| 201 Created | Something new was made | An upload or a new account |
| 204 No Content | Done, nothing to send back | Normal for many API calls |
| 301, 308 | Moved for good | 308 keeps the method, so a POST stays a POST |
| 302, 307 | Moved for now (often to a login page) | 307 keeps the method. A 302 after a login POST often means it worked |
| 304 Not Modified | Your saved copy is still fine | Normal, and small |
| 400 Bad Request | The request is malformed | Broken clients, or someone sending odd input |
| 401 Unauthorized | No valid credentials: log in first | Many in a row from one address: password guessing |
| 403 Forbidden | Understood, but refused | Someone reaching for things they aren't allowed |
| 404 Not Found | Nothing here (or hidden) | Bursts for odd paths: a scanner guessing |
| 429 Too Many Requests | Slow down | Rate limiting kicked in |
| 500 Internal Server Error | The server's own code failed | Bursts after strange input deserve a look |
| 502 Bad Gateway | A proxy got a broken answer from the server behind it | The app behind it is down |
| 503 Service Unavailable | Overloaded or down for maintenance | Can follow a flood of requests |
| 504 Gateway Timeout | The server behind the proxy was too slow | Overload, or a slow, heavy request |

Two pairs trip people up:

- **401 and 403.** Despite its name, `401 Unauthorized` is about who you are: the request "lacks valid
  authentication credentials", and the response must say how to log in. `403 Forbidden` means the server
  understood and refuses, even if you're logged in. A server may also answer `404` instead of `403` to hide that a forbidden
  page exists at all.
- **A success code isn't always good news.** In an attack, the dangerous line is the one that worked: the `200` on a
  backup file a scanner guessed, or the redirect after the hundredth login attempt.

## Headers: the notes on every message

Headers carry everything that isn't the body. The ones that matter most for security:

| Request header | What it says |
|---|---|
| Host | Which site the request is for |
| User-Agent | Which browser or tool says it sent the request |
| Accept, Accept-Language | Which formats and languages the client prefers |
| Referer | The page that led here |
| Cookie | The cookies the browser stored for this site |
| Authorization | Credentials, such as a token, for an API or a login |
| Content-Type | The format of the body, such as form data or JSON |
| Origin | Which site's page started the request |
| X-Forwarded-For | The client's address, added by a proxy on the way |

| Response header | What it says |
|---|---|
| Content-Type | What the body is, such as `text/html` |
| Set-Cookie | Store this cookie |
| Location | Where to go next, sent with redirects |
| Cache-Control | Whether and how long the answer may be stored |
| Server | Which server software answered, sometimes with its version |
| Strict-Transport-Security | Only ever use HTTPS for this site |
| Content-Security-Policy | Which scripts, images and frames the page may load |
| X-Content-Type-Options | `nosniff`: don't guess the type, trust `Content-Type` |
| X-Frame-Options | Whether other sites may show this page in a frame |

> [!WARNING]
> **Every request header is written by the client**, and a client can write anything. A User-Agent that says
> "Googlebot" proves nothing, a Referer can be invented, and X-Forwarded-For can be filled in before the request ever
> reaches your proxy. Trust only what a machine you control added.

The security headers in the second table are a site's own defenses, and checking them is part of most web
assessments. `Content-Security-Policy` limits what a page may load, which takes much of the sting out of injected
scripts. Its `frame-ancestors` rule replaces the older `X-Frame-Options`, and both stop other sites from showing your
page inside theirs, invisibly, to trick people into clicking on it (**clickjacking**).

> [!ASIDE] Referer, with one r
> The header is misspelled in the HTTP standard itself, and the mistake stuck. The newer `Referrer-Policy` header,
> which controls how much of it browsers send, is spelled correctly.

## Cookies and sessions: how a site remembers you

Because HTTP forgets everything between requests, sites use **cookies** (RFC 6265, 2011; its update is still being
finished). A response sends `Set-Cookie`, the browser stores it, and from then on it sends it back in a `Cookie`
header with every request to that site.

<!-- pic: login -->

A **session** is the site's memory of you, kept on the server: who you are, what's in your cart. The cookie holds only
a long random **session ID** that points to it. On a good site:

- the ID is random enough that nobody can guess another one;
- a **new** ID is issued right after login, so an ID someone planted before you logged in becomes useless;
- logging out **ends the session on the server**. Deleting the cookie alone isn't enough, because a copied ID would
  still work.

Cookies come with attributes that limit where they go and who can read them:

<!-- pic: cookie -->

- **Secure:** only sent over HTTPS. Pages on `http://` can't even set it.
- **HttpOnly:** the page's JavaScript can't read it, so a script injected into the page can't simply copy it. The
  browser still sends it with every request.
- **SameSite:** `Strict` never sends it on requests other sites start, `Lax` sends it only on simple navigations
  like clicking a link, and `None` always sends it (and requires `Secure`). Since 2020 (Chrome 80), Chrome treats a
  cookie without SameSite as `Lax`, but not every browser does, so sites should set it themselves.
- **Expires or Max-Age:** when it's deleted (if both are set, Max-Age wins). Without either, it's a session cookie,
  gone when the browser closes.
- **Domain and Path:** which hosts and paths receive it. A name starting with `__Host-` locks it to the exact host:
  it must be Secure, use `Path=/` and have no Domain.

APIs often skip cookies and send a token in the **Authorization** header instead. The idea is the same: whoever
holds the token is treated as you.

**This is why stolen cookies are so valuable.** The password and the second factor are checked once, at login. After
that, the session cookie is the proof. **Infostealer** malware copies cookies straight out of the browser's storage,
and an attacker who loads them into their own browser walks into the account without a password or a code. Security
teams call it **pass-the-cookie**. The fix is to end the stolen sessions on the server, not just to change the
password.

## HTTPS: the private line

**HTTPS** is HTTP sent inside **TLS**, usually on port 443. TLS gives three things:

- **Privacy:** nobody on the path can read the messages.
- **Integrity:** nobody can change them on the way without it being noticed.
- **The server's identity:** the server shows a **certificate**, which the browser checks.

The current version is TLS 1.3, defined in 2018 by RFC 8446 and republished with fixes in July 2026 as RFC 9846
(still version 1.3). TLS 1.2 is still common. TLS 1.0 and 1.1 were formally retired in 2021 (RFC 8996), so seeing them is a finding.

<!-- pic: https -->

### What a certificate proves

A certificate says "this key belongs to `shop.example`", signed by a **certificate authority** that browsers trust.
It proves you're talking to the real owner of that name. It doesn't prove the owner is honest: phishing sites get
certificates too, and most of them use HTTPS. That's why Chrome dropped the padlock from its address bar in Chrome 117
(September 2023) and shows a neutral settings icon instead: too many people read the padlock as "this site is safe".

Certificates are short-lived now. Under a CA/Browser Forum rule (Ballot SC-081v3), public certificates issued since
15 March 2026 last at most **200 days**, dropping to 100 days in March 2027 and 47 days in March 2029, so renewal has
to be automatic.

Every public certificate is also written to public **Certificate Transparency** logs (RFC 6962). Anyone can search
them, for example on crt.sh: owners spot certificates they never asked for, and investigators and attackers alike
find a company's hostnames, including internal ones that ended up in certificates.

### HSTS and HTTPS by default

A site can send `Strict-Transport-Security` (HSTS, RFC 6797) to tell the browser to use only HTTPS for it, for as
many seconds as `max-age` says. After the first visit, a typed `http://` link is upgraded before anything leaves the
computer. Browsers now push the same way: since October 2026, Chrome by default warns and asks before it opens a
public site that doesn't support HTTPS.

> [!NOTE]
> Some companies decrypt their own employees' HTTPS at a proxy to inspect it, using a certificate they install on
> company computers. It helps catch malware but has its own risks: CISA warned in 2017 that many such products check
> certificates badly and can weaken the very security they inspect.

## Proxies, load balancers and CDNs

Requests often pass through other machines on the way from the browser to the server. Each one can read, change and
log what passes through it, as long as it can see inside.

<!-- pic: proxies -->

- A **forward proxy** works for the users. A company's web proxy sees which sites everyone visits. For HTTPS it
  usually sees only the site's name: the browser sends `CONNECT shop.example:443` and the rest flows through
  encrypted.
- A **reverse proxy** works for the servers: load balancers, CDNs and web application firewalls (WAFs) take the
  visitor's request and pass it on.

Behind a reverse proxy, the server sees the **proxy's** address, not the visitor's. Proxies pass the original address
in the `X-Forwarded-For` header (a de facto standard) or the newer `Forwarded` header (RFC 7239). Each proxy adds
the address it received the request from, so the list grows from left to right, and only the entries your own proxies
added can be trusted.

## Web server logs

Almost every web server writes an **access log**, one line per request, and an **error log** for problems. The most
common access-log layout is Apache's **combined** format, which nginx uses by default:

```
203.0.113.25 - - [12/Nov/2026:14:02:17 -0500] "GET /cart?item=42 HTTP/1.1" 200 5120 "https://shop.example/" "Mozilla/5.0 (Windows NT 10.0; …)"
```

<!-- pic: logline -->

Things to keep in mind when you read one:

- **Time zones differ.** Apache and nginx write local time with its offset from UTC (`-0500`). Microsoft's IIS, in
  its default W3C format, writes UTC. Convert everything to UTC before you line up events.
- **The address can be a proxy's.** Behind a load balancer or CDN, the first field is the proxy, unless the server
  is set up to log X-Forwarded-For.
- **What's missing matters too.** These formats record the request line, including the query, but not POST bodies,
  and not cookies unless someone adds them. A login form's password isn't in the log; a password in a URL is.
- **A `-` for the user is normal.** That field is only filled in with HTTP's own login, and Apache's documentation
  warns not to trust it on a `401`, because the user hasn't been verified yet.

IIS writes the same facts with named fields in a header line (`date time c-ip cs-method cs-uri-stem sc-status …`).
Proxy logs are similar, but list the user and the full destination for each request, often with a category and
whether it was allowed.

## How it shows up on the job

Here's a made-up access-log excerpt of the kind that starts many investigations:

```
198.51.100.23 - - [12/Nov/2026:03:14:07 +0000] "GET /.env HTTP/1.1" 404 153 "-" "python-requests/2.32.3"
198.51.100.23 - - [12/Nov/2026:03:14:07 +0000] "GET /wp-login.php HTTP/1.1" 404 153 "-" "python-requests/2.32.3"
198.51.100.23 - - [12/Nov/2026:03:14:08 +0000] "GET /backup.zip HTTP/1.1" 200 48211337 "-" "python-requests/2.32.3"
```

Read it like this: one address, three requests in about a second (a script, not a person), a programming library
instead of a browser in the User-Agent, and guesses at files that sites often leave lying around. Two misses, then a
hit: a `200` and 48 MB sent for `/backup.zip`. The first two lines are background noise every public site gets. The
third is an incident.

- **Security operations (SOC):** you sort the background noise from the line that worked, and you alert on bursts of
  `401`s, odd methods or a sudden `200` for a file nobody should download.
- **Incident response and forensics:** you rebuild what happened from web, proxy and WAF logs, convert their times
  to UTC, check the proxy's X-Forwarded-For to find the real address, and on a victim's computer look at browser
  history and cookie stores to see what an infostealer could have taken.
- **Penetration testing and bug bounty:** with permission, you put an intercepting proxy such as Burp Suite between
  your browser and the site and change methods, headers, cookies and parameters to see what the server trusts.
- **Application security and development:** you check cookie attributes, security headers, which methods are
  allowed and what the error pages give away.
- **Cloud security:** load balancers, CDNs and WAFs write their own request logs, which you switch on and keep.

## Try it yourself

Ten minutes with your own browser and terminal. Everything here reads public pages or your own settings.

### Watch a page load

Open any site, then open the browser's developer tools: **F12** or **Ctrl+Shift+I** on Windows and Linux,
**Cmd+Option+I** on a Mac. In Safari, first turn on **Show features for web developers** in **Settings** >
**Advanced**.

1. Open the **Network** tab and reload the page. Every line is one request.
2. Click the first line, the page itself. Find the status code, the request headers and the response headers.
3. Look for `Set-Cookie` and security headers such as `Strict-Transport-Security`. Then count how many requests one
   page needed.
4. Cookies have their own view: **Application** > **Cookies** in Chrome and Edge, **Storage** in Firefox. Check which
   ones are Secure, HttpOnly and SameSite.

### Send a request yourself

<!-- for: windows -->

Open PowerShell and type `curl.exe`, not just `curl`: in Windows PowerShell, `curl` on its own can run a different
command, Invoke-WebRequest. curl has come with Windows since Windows 10 version 1803.

```powershell
curl.exe -I https://example.com
curl.exe -v https://example.com -o NUL
```

<!-- for: macos, linux -->

Open a terminal and run:

```sh
curl -I https://example.com
curl -v https://example.com -o /dev/null
```

<!-- /for -->

The first command sends a `HEAD` request and prints only the status line and headers. The second shows the whole
exchange: lines starting with `>` are what curl sent, lines starting with `<` are what came back, and lines starting
with `*` are curl's own notes about the connection and TLS.

### Look up a site's certificates

Open [crt.sh](https://crt.sh/) in your browser and search for `example.com`. Every row is a certificate written to the
public Certificate Transparency logs, with its validity dates and the authority that issued it. Try a company you know,
and notice how many hostnames appear.

Want to practice on real requests safely? The [Web and API hacking lab](/en/lab/web-app-hacking/) runs vulnerable apps
on your own computer, where you can intercept and change every request.

## Check yourself

Try to answer before you open each one.

<!-- pic: quiz -->

## Learn more

- **[MDN Web Docs: HTTP](https://developer.mozilla.org/docs/Web/HTTP/Guides/Overview)**: Mozilla's free guides to
  HTTP, from the overview to every header and status code. The reference most developers use.
- **[PortSwigger Web Security Academy](https://portswigger.net/web-security)**: free lessons and hands-on labs on web
  attacks, from the makers of Burp Suite. Everything on this page is the groundwork for it.
- **[OWASP Session Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html)**:
  how sessions should be created, protected and ended, written for developers and reviewers.
