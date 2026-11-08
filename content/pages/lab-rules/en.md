---
# Practice safely and legally → lvlulcuma.com/en/lab/rules/
updated: 2026-11-08
title: "Practice safely and legally"
summary: "Where you may practice, where you may not, and what to do if you find a real problem."   # one line on the Lab overview page
intro: "Your own lab is the safest place to practice. These rules keep you safe when you go beyond it, to bug bounty programs, practice sites and real systems."
---

1. **Test only systems you own or have written permission to test.** Get the permission before you start, from
   someone who can actually give it. A friend who works at a company can't allow you to test that company's website.
2. **Stay inside the scope.** A bug bounty program or a test contract lists what you may test and how. Anything it
   doesn't list is out of scope, so read the rules before you send the first request.
3. **Keep vulnerable apps on your own computer.** Bind them to `127.0.0.1`, never put them on the internet or a shared
   network, and stop them when you're done.
4. **Check the target before every attack.** One wrong digit in an IP address can point your scanner at someone
   else's system.
5. **Don't keep what you weren't meant to see.** If you come across real passwords or personal data, stop there. Keep
   only what you need to show the problem, and delete it once it's reported.
6. **Report a real problem privately.** Look for the owner's security contact (many sites list it in
   `/.well-known/security.txt`) or its vulnerability disclosure policy. Give them time to fix it before you talk about it.

> [!WARNING]
> Getting into a computer system without permission is a crime almost everywhere: in the US under the Computer Fraud
> and Abuse Act, in the UK under the Computer Misuse Act, and in EU countries under national laws that follow
> Directive 2013/40/EU. Curiosity and good intentions are not permission.

Everything on this site follows the same rules. The attacks shown here use lab apps, or problems that were reported
and fixed first.
