---
# How this site is secured → lvlulcuma.com/en/colophon/
# Keep every sentence true. The header list is filled in from public/_headers automatically.
updated: 2026-10-26
intro: "A security professional's own site should pass the checks they'd run on a client's. These are the controls in place, and you're welcome to verify them."
key:   # the big fact at the top of the box beside the page
  label: "JavaScript files"
  value: "0"
---

## Hosting

Static HTML built with Astro and served by Cloudflare. There is no server-side code, database, login or admin panel to attack, and the pages run no JavaScript at all.

## Privacy

No cookies, analytics or third-party requests. Fonts are self-hosted, so your browser never talks to anyone but this domain.

## Response headers

Every page is sent with these headers. The Content-Security-Policy blocks all scripts, and the build fails if a page ever includes one.

<!-- response-headers -->

## DNS and email

The zone is signed with DNSSEC. CAA records restrict which certificate authorities may issue certificates for the domain. SPF and DMARC tell mail servers to reject messages that pretend to come from this domain.

## Check it yourself

- [securityheaders.com](https://securityheaders.com/?q=lvlulcuma.com&followRedirects=on)
- [MDN HTTP Observatory](https://developer.mozilla.org/en-US/observatory/analyze?host=lvlulcuma.com)
- [internet.nl](https://internet.nl/site/lvlulcuma.com/)
- [DNSViz (DNSSEC)](https://dnsviz.net/d/lvlulcuma.com/dnssec/)
