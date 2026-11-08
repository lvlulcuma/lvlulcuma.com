---
title: "Counting ransomware victims fairly"
date: 2026-10-26
topic: research
dek: "Raw victim counts say more about how many companies a sector has than about how exposed it is. Here is how I'm normalizing them."
related: "research/ransomware-by-sector"
---

## The problem with raw counts

Most ransomware reports rank sectors by number of victims. Manufacturing and professional services usually top the list. But those sectors also contain more businesses than most others. A sector with twice the victims and four times the companies is, <mark>per company, the safer one</mark>.

## A rate instead of a count

My study divides the victims in each sector and size band by the number of businesses in that same group, giving victims per 10,000 businesses. The business counts come from national statistical registers, so the denominator is official rather than estimated.

> [!ASIDE] Why per 10,000
> It keeps the numbers readable: a rate of 3 means 3 victims for every 10,000 businesses in that group.

Size matters as much as sector. A 20-person accounting firm and a 2,000-person hospital network live in different worlds, so every rate is split into small, medium and large organizations.

## What can go wrong

- Leak-site data only shows victims who didn't pay or were named anyway, so every rate is a lower bound.
- Sector labels in public trackers are inconsistent, so I map them to one industry classification by hand.
- Registers and trackers cover different years. I only compare matching periods.

> [!ASIDE] Where the data comes from
> Victims: public leak-site trackers and government breach notifications. Business counts: national registers, such as Statistics Canada and Statistics Poland (GUS).

The full method is already on the research page. Results follow when the paper is finished.
