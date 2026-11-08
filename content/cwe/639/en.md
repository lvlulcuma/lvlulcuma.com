---
# One weakness explained → lvlulcuma.com/en/cwe/639/  (plus /attack/ and /defend/ views)
# A "##" heading ending in <!-- attack --> or <!-- defend --> starts a part for one side only.
title: "IDOR: when changing an ID shows someone else's data"
cwe: 639
name: "Authorization Bypass Through User-Controlled Key"
also: ["IDOR", "BOLA"]
owasp: "A01:2025"
api: "API1:2023"
top25: 24
dek: "The app finds a record by the ID you send, but never checks that the record is yours. Like a coat check that hands out any coat for any ticket number."
date: 2026-11-01
sources:
  - name: "MITRE CWE-639: Authorization Bypass Through User-Controlled Key"
    url: "https://cwe.mitre.org/data/definitions/639.html"
  - name: "MITRE: 2025 CWE Top 25 Most Dangerous Software Weaknesses"
    url: "https://cwe.mitre.org/top25/archive/2025/2025_cwe_top25.html"
  - name: "OWASP Top 10:2025, A01 Broken Access Control"
    url: "https://top10.owasp.org/2025/A01_2025-Broken_Access_Control/"
  - name: "OWASP API Security Top 10, API1:2023 Broken Object Level Authorization"
    url: "https://owasp.org/API-Security/editions/2023/en/0xa1-broken-object-level-authorization/"
  - name: "OWASP Cheat Sheet: Insecure Direct Object Reference Prevention"
    url: "https://cheatsheetseries.owasp.org/cheatsheets/Insecure_Direct_Object_Reference_Prevention_Cheat_Sheet.html"
  - name: "OWASP Web Security Testing Guide: Testing for Insecure Direct Object References"
    url: "https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/05-Authorization_Testing/04-Testing_for_Insecure_Direct_Object_References"
  - name: "ACSC, CISA and NSA: Preventing Web Application Access Control Abuse (AA23-208A, 27 July 2023)"
    url: "https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-208a"
  - name: "KrebsOnSecurity: First American Financial Corp. Leaked Hundreds of Millions of Title Insurance Records (24 May 2019)"
    url: "https://krebsonsecurity.com/?p=47813"
  - name: "First American Financial, Form 10-Q for Q2 2021 (SEC settlement)"
    url: "https://www.sec.gov/Archives/edgar/data/1472787/000156459021037651/faf-10q_20210630.htm"
  - name: "Hunton: NYDFS reaches $1 million settlement with First American Title Insurance (4 Dec 2023)"
    url: "https://www.hunton.com/privacy-and-cybersecurity-law-blog/2023/12/04/new-york-department-of-financial-services-reaches-1-million-dollar-settlement-with-first-american-title-insurance-in-data-breach-investigation/"
  - name: "PortSwigger Web Security Academy: Insecure direct object references (IDOR)"
    url: "https://portswigger.net/web-security/access-control/idor"
---

## The short version

You hand in your coat and get ticket 42. Later you come back and say "forty-three, please". A careful attendant looks at your ticket and says no, that one isn't yours. A careless one just walks to hook 43 and hands you a stranger's coat.

Web apps do this all day. Every order, message, invoice and file has an ID, a bit like that ticket number. When you ask for one, the app should check that it's *yours*. When it skips the check and hands over whatever ID you name, <mark>you can read, and sometimes change, other people's things just by changing a number</mark>. That's this weakness.

MITRE calls it CWE-639, *Authorization Bypass Through User-Controlled Key*. Almost everyone else says **IDOR** (insecure direct object reference). People who work on APIs say **BOLA** (broken object level authorization). Three names, one mistake.

- **OWASP Top 10:** part of A01:2025 Broken Access Control, the number one category.
- **OWASP API Security Top 10:** number one, API1:2023.
- **CWE Top 25:** number 24 in MITRE's 2025 list of the most dangerous weaknesses, up from 30 the year before.
- **Who can run into it:** usually anyone with an ordinary account. Sometimes not even that.

## Words you'll need

If you're new to web apps, these five words make the rest of the page easy:

- **Request:** the message your browser sends to a website, like "show me invoice 1042". You never see it, but every click sends one.
- **ID:** the number or code that picks out one record. `1042` is an ID. So are `a8f3c2e1-…`, `report-2026-10.pdf` and `dana@example.com`.
- **Session cookie:** a long random string the site gives your browser after you log in. Your browser sends it with every request, so the site knows it's still you without asking for your password again.
- **Authentication:** proving *who you are*. Logging in is authentication.
- **Authorization:** deciding *what you're allowed to touch*. This is the step that goes missing.

> [!ASIDE] An easy way to remember
> Authentication is the bouncer checking your ID at the door. Authorization is the bartender checking you're on the guest list for the VIP room.

## How it works, step by step

Picture a small online shop with two customers, Dana and Alex.

1. **Dana logs in.** The shop gives her browser a session cookie. From now on, every request she sends carries it, so the shop knows the request comes from Dana.
2. **Dana opens her order history** and clicks invoice 1042. Her browser sends this request:

   ```http
   GET /api/invoices/1042 HTTP/1.1
   Host: shop.example
   Cookie: session=7f3c9a…   (proves this is Dana)
   ```

3. **The server reads the number** `1042`, looks up invoice 1042 in its database and sends it back:

   ```json
   {
     "id": 1042,
     "customer": "Dana Kowalski",
     "address": "12 Elm Street",
     "total": "89.90"
   }
   ```

Notice what the request carries: two separate facts. The cookie says **who is asking**. The `1042` says **what they want**. A safe server connects the two and asks *is invoice 1042 Dana's?* A vulnerable server only uses the second fact and fetches whatever number it's given.

So the weakness is simply this: the server trusts the ID in the request and never ties it back to the person who sent it.

### Why counting numbers make it worse

Most databases number records 1, 2, 3 and so on. If your invoice is 1042, the ones next to it are almost certainly 1041 and 1043, belonging to other customers. Random IDs (long codes like `a8f3c2e1-7b4d-…`) are much harder to guess, but they don't add the missing check. They only make other people's IDs harder to come by, and IDs have a habit of leaking.

## Where it hides

Anything that belongs to someone and has an ID can have this problem. Some everyday examples:

- **An online shop:** `/orders/1042` shows another customer's name, address and phone number.
- **A school portal:** `/grades?student=5531` shows another student's grades.
- **A clinic:** `/appointments/88213/letter.pdf` downloads someone else's appointment letter.
- **A chat app:** a message attachment at `/files/9f2c…` opens for anyone with the link, not just the people in the chat.
- **Online banking:** a transfer form with a hidden "from account" field.

The ID can travel in any part of a request:

- **The address:** `/orders/1042`, `/users/57/settings`
- **The query string** (after the `?`): `?invoice=1042`
- **The request body** (data sent with a form or an app): `"accountId": 57`, or a hidden form field
- **Cookies and headers:** a cookie that says which user or role you are
- **GraphQL queries**, **WebSocket messages**, and multi-step forms that carry an ID from one step to the next

And these are the spots where the check most often goes missing:

- **The side doors.** The invoice page has its check, but *Download PDF*, *Export to CSV* and *Email me a copy* were added later, by someone else, without it.
- **Changes, not just views.** Edit, delete, cancel, approve. An app can refuse to *show* you someone's order and still let you *cancel* it.
- **Older or second ways in.** `/api/v1` still running next to `/api/v2`, or the separate API that the mobile app uses.
- **Records inside records.** `/teams/7/projects/33`: the app checks you're in team 7, but not that project 33 belongs to team 7.
- **Pointing at someone else's thing from your own action.** Attaching file 881 to *your* message, when file 881 is someone else's.

## Inside the code

Here's what the mistake looks like in a real program. This is Node.js with Express (a popular web framework) and Prisma (a library for talking to the database). `requireLogin` sends away anyone who isn't logged in.

```js
// GET /api/invoices/:id
app.get("/api/invoices/:id", requireLogin, async (req, res) => {
  const invoice = await db.invoice.findUnique({
    where: { id: Number(req.params.id) },
  });
  if (!invoice) return res.status(404).end();
  res.json(invoice);
});
```

Read it line by line:

- `requireLogin` answers *who is this?* Only that. It doesn't know which invoice they're about to ask for.
- `req.params.id` is the `1042` from the address. The user controls it.
- `findUnique({ where: { id } })` fetches the invoice with that ID, whoever it belongs to.
- Nothing compares the invoice's owner with the logged-in user (`req.user.id`). That missing comparison is the whole bug.

The fix is one extra condition, and where the owner comes from is the point:

```js
app.get("/api/invoices/:id", requireLogin, async (req, res) => {
  const invoice = await db.invoice.findFirst({
    where: { id: Number(req.params.id), ownerId: req.user.id },
  });
  if (!invoice) return res.status(404).end();   // "not yours" looks the same as "not found"
  res.json(invoice);
});
```

`req.user.id` comes from the session cookie, which the user can't forge. The database now returns the invoice only if it belongs to this user, so someone else's invoice simply isn't found. The ID still comes from the user, and that's fine: on its own it no longer decides anything.

> [!ASIDE] Why answer "not found"
> Saying "forbidden" would confirm the record exists. Answering "not found" whether the record is missing or just not yours gives nothing away.

### A sneakier version

This one survives a quick code review, because there *is* a check in it:

```js
// PATCH /api/teams/:teamId/projects/:projectId   (rename a project)
app.patch("/api/teams/:teamId/projects/:projectId", requireLogin, async (req, res) => {
  // ✔ checks you're a member of the team in the address
  await requireMembership(req.user.id, req.params.teamId);
  // ✘ but renames whichever project is named, in any team
  await db.project.update({
    where: { id: Number(req.params.projectId) },
    data: { name: req.body.name },
  });
  res.status(204).end();
});
```

The membership check proves you belong to team 7. The update then uses the project ID on its own, so a member of *any* team can rename *any* project. The two IDs are never tied together. The fix makes the database check both at once:

```js
const { count } = await db.project.updateMany({
  where: { id: Number(req.params.projectId), teamId: Number(req.params.teamId) },
  data: { name: req.body.name },
});
if (count === 0) return res.status(404).end();
```

### The form that says who you are

A profile page with the user's ID in a hidden field:

```html
<form action="/profile" method="post">
  <input type="hidden" name="user_id" value="57">
  <input name="email" value="dana@example.com">
  <button>Save</button>
</form>
```

If the server updates whichever profile `user_id` names, then the person sending the form decides whose profile changes. "Hidden" only means hidden on the page: anyone can see and change it in their browser's developer tools. The fix is to ignore `user_id` and update the profile of the user in the session.

## How testers think about it <!-- attack -->

Penetration testers and bug bounty hunters check for this in almost every web app, because it's common and the idea is simple. To a tester, every ID the browser sends is a question to the server: *would you answer this for someone else?* The work is finding the places that take an ID and the ones that forget to tie it back to the person asking.

Everything here is about apps you have permission to test: your own, a practice lab, or a site inside a bug bounty program's scope.

### What catches their eye

- **Any ID in a request:** in the address, the query string, a JSON body, a hidden form field, a cookie.
- **The side doors:** export, download, print, share, "email me a copy", which are the parts most often added without a check.
- **Changes, not just views**, since an app can protect reading and forget writing.
- **IDs that turn up in replies:** a team member list, a search result or a notification that carries other people's IDs. That shows the app hands those references out; whether it checks them is the next question.

### How they test it, in principle

The standard method, from OWASP's testing guide, uses **two accounts the tester controls**, each with its own records. The tester signs in as the first and checks whether the app will let that account reach the *second* account's records, through every action a feature offers: view, edit, delete, export, share. If the app has roles, the same comparison with a normal account and an admin account shows whether an ordinary user can reach admin-only records.

Both accounts belong to the tester, so no real person's data is ever touched: the test only shows the tester's own two accounts crossing, or not crossing, into each other. A proxy tool such as Burp Suite (its free Community Edition is where most people start) or OWASP ZAP lets them see each request and send it again, and free extensions like Burp's Autorize can repeat requests under the second account automatically and flag the ones that still work.

For the actual click-by-click practice, the best place is a lab built for it: PortSwigger's free [Web Security Academy IDOR labs](https://portswigger.net/web-security/access-control/idor), where trying this is the whole point and nobody's real data is involved.

## Real bug or false alarm? <!-- attack -->

A changed ID and a `200 OK` aren't proof on their own. Before writing anything up:

- **Whose data came back?** Some apps ignore the ID and quietly return your own record, or an empty shell. What matters is whether the reply holds the *other* account's data.
- **Was it meant to be public?** A public profile or a "shared with anyone who has the link" document isn't a finding. (For those, the better question is whether the link can expire or be revoked.)
- **Check the write actions on their own.** A protected *view* and an open *delete* on the same record is still a real bug.
- **The page isn't the app.** A hidden button in the page can still have a working request behind it. A check that lives only in the browser doesn't count ([CWE-602](https://cwe.mitre.org/data/definitions/602.html)).

## How bad is it, and writing it up <!-- attack -->

How serious a given IDOR is depends on what the record holds and what you can do with it. A few typical CVSS 3.1 scores:

| Score | What one account can do to others |
|---|---|
| 8.1 | **High.** Read and change their personal data, with any account.<br>`AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:N` |
| 7.5 | **High.** Read their personal data with no account at all.<br>`AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N` |
| 6.5 | **Medium.** Read their personal data, with any account.<br>`AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:N/A:N` |
| 4.3 | **Medium.** Read something minor, such as a display name.<br>`AV:N/AC:L/PR:L/UI:N/S:U/C:L/I:N/A:N` |

The score doesn't capture **scale**. One exposed record and a whole database can share the same vector, so programs and clients also weigh how sensitive the data is and how much of it could be reached. And if the ID is really a role or an "is admin" flag, the same mistake becomes **vertical** escalation: an ordinary user turns into an admin.

> [!ASIDE] Horizontal and vertical
> Horizontal: reaching another user's things at your own level. Vertical: reaching a higher level, such as admin.

Reporting it responsibly:

- **Use your own accounts**, and stop at the smallest proof: one request and one reply that shows your two test accounts crossing. Don't collect other people's data to show the scale — describe the scale in words ("IDs count up and there's no rate limit").
- **Write it so it gets fixed:** the exact endpoint and action, which part of the request carries the ID, the two accounts you used, what should have happened versus what did, the impact, and the fix (tie the lookup to the signed-in user).
- **On a bug bounty, read the rules first.** Most programs require your own test accounts and forbid touching real users' data.

## How developers fix it <!-- defend -->

### Fix it at the root

- **Check every request that touches a record, on the server, and refuse by default.** The question isn't *is this user logged in?* but *may this user do this action to this record?*
- **Take the user (and, for a shared app, the tenant) from the session.** Never from the address, the body, a hidden field or a header the client can set.
- **Scope the lookup instead of checking afterwards.** Load records *through* the user (`WHERE owner_id = current user`), so someone else's record simply isn't found. Most frameworks make this easy:
  - Django: pass `owner=request.user` to `get_object_or_404`.
  - Rails: look the record up in `current_user.invoices`.
  - ASP.NET Core: resource-based authorization with `AuthorizeAsync`.
  - Spring Security: `@PreAuthorize` and `@PostAuthorize`.
- **Put the rule in one place:** a policy layer or middleware every endpoint goes through, so the next export endpoint can't forget it.

### Layers that help, but aren't the fix

- **Random IDs (UUIDv4) instead of counters.** Good defense in depth, recommended by both OWASP and the CISA advisory. They are *not* the fix: the check still has to be there.
- **Don't encrypt IDs and call it fixed.** OWASP advises against it; it's hard to do safely and the missing check is still missing.
- **Rate limits** slow down anyone trying many IDs.
- **Row-level security in the database** as a safety net, so a forgotten check in the code still returns nothing. In PostgreSQL:

```sql
ALTER TABLE invoices ENABLE ROW LEVEL SECURITY;

CREATE POLICY own_invoices ON invoices
  USING (owner_id = current_setting('app.user_id')::bigint);

-- the app sets this at the start of each request:  SET LOCAL app.user_id = '57';
```

(The app must connect as a database role that doesn't own the table, or the policy is skipped unless the table is set to `FORCE ROW LEVEL SECURITY`.)

### Catch it before release

- **In code review, look for:** a handler that reads an ID and queries by that ID alone (`findById(req.params.id)`); a `userId` or `accountId` taken from the body or a header; a check that only exists in the frontend; a new endpoint (export, v2, mobile) next to an old one that has a check.
- **Write a two-account test.** For each endpoint that takes a record ID, an automated test signs in as one user, asks for another user's record and expects a refusal. OWASP's API Top 10 recommends exactly this, and not shipping when the test fails.
- **Know what tools miss.** Scanners (SAST and DAST) catch some cases, but neither knows who should own what in your app. That knowledge lives in tests and in people.

### Notice it in production

- **Log every refusal** with the user, the record and the action.
- **Alert on patterns:** one account asking for long runs of different IDs (OWASP's example), or a spike in 403 and 404 replies (the CISA advisory's).
- **A web application firewall (WAF) can flag that, but can't fix the flaw.** It doesn't know which invoice belongs to whom.

## Weaknesses it's easy to confuse with

| Weakness | How it differs |
|---|---|
| [CWE-862](https://cwe.mitre.org/data/definitions/862.html) | **Missing Authorization.** No check at all for an action. CWE-639 is specifically about records picked by an ID. |
| [CWE-863](https://cwe.mitre.org/data/definitions/863.html) | **Incorrect Authorization.** The parent: a check exists but decides wrongly. CWE-639 is the case where the decision rests on an ID the user controls. |
| [CWE-566](https://cwe.mitre.org/data/definitions/566.html) | **User-controlled SQL primary key.** The child: the same mistake when the ID is a database primary key. |
| [CWE-22](https://cwe.mitre.org/data/definitions/22.html) | **Path Traversal.** The ID is a file path. OWASP's word "IDOR" covers it too; MITRE keeps it separate. |
| API5:2023 | **Broken Function Level Authorization.** Reaching a *feature* you shouldn't (an admin page), rather than a *record*. |
| [CWE-915](https://cwe.mitre.org/data/definitions/915.html) | **Mass assignment.** The user sets a field they shouldn't, such as `ownerId`, in the request body. Often found next to IDOR. |

## It happened for real

**First American Financial, 2019.** This US title insurer shared closing documents through a web app: a customer got a link to their own document. In May 2019 KrebsOnSecurity reported that changing the digits in such a link brought up *other people's* documents, with no login at all. About 885 million files going back to 2003 were reachable, including bank account numbers, Social Security numbers, wire transfer receipts and driver's license images. According to the SEC, the company's own security staff had found the flaw in January 2019 and it wasn't fixed. The SEC fined the company $487,616 in 2021 for weak disclosure controls, and New York's financial regulator added a $1 million penalty in 2023.

> [!ASIDE] The earliest record
> The lowest document number on the site, 000000075, was a real estate deal from 2003.

**A whole government advisory about it.** In July 2023, Australia's ACSC and the US CISA and NSA published a joint advisory just on IDOR — a rare thing for one weakness. One of their examples: in 2021, "stalkerware" phone-monitoring apps exposed texts, call records, photos and locations from hundreds of thousands of phones through an IDOR in the server they shared (CVE-2022-0732).

**Who works on this:** [penetration testers](/en/roadmap/offensive-security/#penetration-tester) and [bug bounty hunters](/en/roadmap/offensive-security/#bug-bounty-hunter) find it; [application security engineers](/en/roadmap/application-security/#appsec-engineer) and [secure software developers](/en/roadmap/application-security/#secure-developer) prevent it.

## Learn more, hands on

- **Practice:** PortSwigger's Web Security Academy has free [IDOR labs](https://portswigger.net/web-security/access-control/idor) made for exactly this.
- **Testing:** OWASP's Web Security Testing Guide, [Testing for Insecure Direct Object References](https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/05-Authorization_Testing/04-Testing_for_Insecure_Direct_Object_References).
- **Fixing:** the OWASP [IDOR Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Insecure_Direct_Object_Reference_Prevention_Cheat_Sheet.html) and [Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html).
- **For APIs:** [API1:2023 Broken Object Level Authorization](https://owasp.org/API-Security/editions/2023/en/0xa1-broken-object-level-authorization/).
