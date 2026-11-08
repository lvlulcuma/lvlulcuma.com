---
title: "The OWASP API Top 10, read from the builder's side"
date: 2026-08-31
topic: api
dek: "The list is usually explained through attacks. These are the five checks I'd ask any team to build into their API before launch."
related: "research/api-scanner-benchmark"
---

### 1. Check ownership on every object

API1, Broken Object Level Authorization, is still the most common API flaw. Every request that takes an ID should confirm the caller may see that specific record, in the code that loads it. Checking only that the user is logged in is not enough.

### 2. Return only the fields the client needs

API3 covers responses that include more than the screen shows, and requests that let clients set fields they shouldn't. Define input and response schemas explicitly instead of serializing whole database objects.

### 3. Put limits on everything

API4: rate limits per user and per key, maximum page sizes, upload size caps and timeouts. Limits protect availability and your bill.

### 4. Know every endpoint you expose

API9: keep an inventory of hosts, versions and environments. Old v1 endpoints and forgotten staging hosts are where controls tend to be missing.

### 5. Treat third-party APIs as untrusted input

API10: validate data from partners and integrations as strictly as data from users.

None of these need a security team to implement. They need to be part of the definition of done.
