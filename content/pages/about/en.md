---
# About → lvlulcuma.com/en/about/
# The first paragraph under the dashes (at the bottom of this file) is the big intro line.
# Links to this site's pages leave out the language: "/roadmap/" opens /en/roadmap/ here.
updated: 2026-10-31

# The big fact at the top of the box beside the page is the next article's date.
# To show something else there instead, add:
# key:
#   label: "..."
#   value: "..."

# "Now" in the box beside the page: what you're busy with. Update it when you post each month.
now:
  label: "Now"
  updated: 2026-10-28   # shown as the month next to "Now"
  items:
    - label: "Building"
      text: "What to learn for each job on the Roadmap"
      link: "/roadmap/"
    # - label: "Learning"
    #   text: "..."
    # - label: "Reading"
    #   text: "..."
    #   link: "https://..."   # optional

# 01 · Start here: one card per kind of visitor. `section:` is a menu item:
# articles, guides, roadmap, research, lab or contact.
start:
  heading: "Start here"
  text: "What you'll find on this site, depending on why you came."
  items:
    - who: "New to cybersecurity"
      text: "See the fields and jobs in security, and where people usually start."
      section: roadmap
    - who: "Setting something up"
      text: "Step-by-step guides for installing and securing tools on Windows, macOS and Linux."
      section: guides
    - who: "Keeping up"
      text: "One article a month: research summaries, lab notes and practical advice."
      section: articles
    - who: "Looking for depth"
      text: "Longer studies, each with a question, a method and the data behind it."
      section: research
    - who: "Want to practise"
      text: "How my lab is built, and the rules I follow when I test."
      section: lab
    - who: "Have a question"
      text: "Questions, corrections or a security problem with this site: email is the quickest way."
      section: contact

# 02 · Stay up to date: what each section publishes, and how to follow it.
#   section: a menu item (news, articles, guides, roadmap, research or lab)
#   text:    what's new there and how often
#   feed:    optional: the section's RSS feed on this site, like "/rss.xml"
updates:
  heading: "Stay up to date"
  text: "What's published where, and how often. RSS works in any feed reader, with no account or email address needed."
  feed_label: "RSS feed"
  items:
    - section: news
      text: "A digest of each week's security news, and step-by-step breakdowns of big attacks once the facts are public."
      feed: "/news/rss.xml"
    - section: articles
      text: "One write-up, published on the last Monday of every month."
      feed: "/rss.xml"
    - section: guides
      text: "Step-by-step guides, added as they're written. Each one shows when it was last updated."
    - section: roadmap
      text: "What to learn is added one job at a time. Each field's page shows which of its jobs have it so far."

# 03 · How I work: short promises about how the site is written and how I test.
how:
  heading: "How I work"
  text: "What you can expect from everything published here."
  items:
    - title: "Permission first"
      text: "I test only systems I own or have written permission to test, and findings go to the owner before anything is published."
      link: "/lab/rules/"
      link_text: "Practice safely and legally"
    - title: "Sources you can check"
      text: "Facts link to where they come from. The Roadmap, for example, is built on NIST's NICE Framework and ENISA's European Cybersecurity Skills Framework."
      link: "/roadmap/"
      link_text: "Roadmap"
    - title: "Mistakes get fixed in the open"
      text: "If something here is wrong, email me and I'll fix it. When an article or study changes after it's published, the box beside it lists what changed and when."
    - title: "Nothing tracks you"
      text: "No cookies, no analytics, no JavaScript. You can check how the site is secured yourself."
      link: "/colophon/"
      link_text: "How this site is secured"

# 04 · Is it really me: where to find you for sure. Email, GitHub, Medium and PGP come from
# content/settings.yml; the security address comes from public/.well-known/security.txt.
verify:
  heading: "Is it really me?"
  text: "People in security get impersonated too. These are the only addresses and accounts I use:"
  site_label: "Website"
  email_label: "Email"
  security_label: "Security reports"
  pgp_label: "PGP fingerprint"
  never_heading: "I will never:"
  never:
    - "ask for your passwords, one-time codes or recovery keys"
    - "ask you to pay before I share a security problem I found"
    - "send you files or links you didn't ask for"
    - "contact you from an address that isn't on this page"
  after: "If a message that claims to be from me doesn't match this page, email me at the address above and I'll tell you whether it's real."
---

lvlulcuma.com is a set of field notes on cybersecurity: how security fails, how to make it hold, and how to get into the field.
