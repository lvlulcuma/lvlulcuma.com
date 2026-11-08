---
# Contact → lvlulcuma.com/en/contact/
# Your email address, GitHub and Medium links and PGP key are set in content/settings.yml.
# Links to this site's pages leave out the language: "/about/" opens /en/about/ here.
updated: 2026-10-28
intro: "Questions, corrections, ideas or a security problem: email is the way to reach me."   # line under the heading (also the Google description)

key:   # the big fact at the top of the box beside the page
  label: "Usual reply"
  value: "Within a day"
pgp_label: "PGP fingerprint"
also_label: "Also on"   # before the links to your GitHub and Medium (set in content/settings.yml)

# 01 · What's it about: one card per reason to write. Each card opens the visitor's email app
# with the subject and a short template already filled in.
#   who:      the card's heading
#   text:     one line under it
#   subject:  the email's subject line
#   body:     optional: the template inside the email (keep the "|" and indent each line)
topics:
  heading: "What's it about?"
  text: "Pick one and your email app opens with a short template, so you know what to include."
  go: "Write"   # the small link at the bottom of each card
  items:
    - who: "Found a mistake"
      text: "A wrong fact, a broken link, or a step in a guide that doesn't work."
      subject: "Correction: "
      body: |
        Page (link):

        What's wrong:

        What it should say (if you know):
    - who: "Getting into security"
      text: "Not sure where to start or what to learn next? Ask."
      subject: "Question: getting into security"
      body: |
        Where I am now (studies, job, skills):

        What I'd like to do:

        What I've tried so far:

        My question:
    - who: "An idea for an article"
      text: "Something you'd like explained, or a tool you'd like a guide for."
      subject: "Idea: "
      body: |
        Topic:

        Why it would help:

        Anything you've already read about it:
    - who: "Work together"
      text: "A job, an internship, a project or a talk."
      subject: "Work: "
      body: |
        Who I am and where I work:

        What it's about:

        Timeline:
    - who: "A security problem here"
      text: "Found a vulnerability on this site? Thank you. Section 03 says what to include."
      subject: "Security: "
      body: |
        What I found:

        Where (link):

        Steps to reproduce:

        What an attacker could do with it:
    - who: "Something else"
      text: "Anything that doesn't fit above. Just say hi."
      subject: "Hello"

# 02 · What to expect, as HTTP status codes. `code:` starting with 2 shows green, with 4 orange.
expect:
  heading: "What to expect"
  text: "In HTTP status codes, because this is a cybersecurity site ;)"
  items:
    - code: "200 OK"
      text: "Questions, corrections, ideas and offers are all welcome. Every email gets read."
    - code: "202 Accepted"
      text: "I usually reply within a day, sometimes in a few days."
    - code: "403 Forbidden"
      text: "I won't break into anyone's account, email or phone (not even your ex's), and I won't test a site without its owner's written permission. Locked out of your own account? Use the service's official recovery page. Anyone else who offers to get you back in is almost certainly a scammer."
      link: "/lab/rules/"
      link_text: "Practice safely and legally"
    - code: "429 Too Many Requests"
      text: "One message is enough. If you haven't heard back in a week, a short reminder is fine."

# 03 · Reporting a security problem with this site. The real public/.well-known/security.txt is shown under it.
security:
  heading: "Reporting a security problem"
  text: "If you find a vulnerability on lvlulcuma.com, email me. A good report includes:"
  include:
    - "what you found, and the page or address where it is"
    - "the steps to reproduce it"
    - "what an attacker could do with it"
    - "how to fix it, if you have an idea"
  please: "Please test only what's public, don't try to reach anything that isn't yours, and give me time to fix it before you publish."
  security_txt: "The site also publishes a security.txt file (RFC 9116), so security tools and researchers know where to send reports:"

# The line at the bottom of the page.
verify:
  text: "Got a message that claims to be from me?"
  link_text: "Check it on the About page"
---
