# Reporting a security problem

Found a security problem with [lvlulcuma.com](https://lvlulcuma.com) or with the code in this repository? Thank you for looking. Please tell me privately first, so it can be fixed before anyone else hears about it.

**Email lvlulcuma@outlook.com**, with "Security:" at the start of the subject. Please don't open a public issue for it.

A good report includes:

- what you found, and the page, address or file where it is,
- the steps to reproduce it,
- what an attacker could do with it, and
- how to fix it, if you have an idea.

Please test only what's public, don't try to reach anything that isn't yours, and give me time to fix it before you publish. I usually reply within a day, sometimes in a few days.

## Good to know

- The site is static: every page is a plain HTML file made in advance. There are no logins, no forms, no database and no code running on a server, and no JavaScript runs in your browser. So problems are more likely to be in the security headers, the DNS or domain settings, the hosting setup, or a package the build uses.
- The same address is in the site's [security.txt](https://lvlulcuma.com/.well-known/security.txt), and the [Contact page](https://lvlulcuma.com/en/contact/) has a ready-made email template for reports.
