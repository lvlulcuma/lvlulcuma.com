---
# Roadmap topic. Its title and summary show on every job page that lists "networking-basics" in learn.yml.
# The text under the dashes is the topic's own page: lvlulcuma.com/en/roadmap/topics/networking-basics/
# How these pages are written: docs/claude/roadmap-topic.md
title: "Networking basics"
summary: "How data moves between computers: IP addresses and subnets, ports, TCP and UDP, the OSI and TCP/IP models, routers, switches and NAT, and what DNS and DHCP do."
date: 2026-11-14
sources:
  - name: "RFC 791: Internet Protocol (IPv4), 1981"
    url: "https://www.rfc-editor.org/rfc/rfc791"
  - name: "RFC 1122: Requirements for Internet Hosts, Communication Layers, 1989"
    url: "https://www.rfc-editor.org/rfc/rfc1122"
  - name: "ISO/IEC 7498-1:1994: OSI Basic Reference Model"
    url: "https://www.iso.org/standard/20269.html"
  - name: "RFC 1918: Address Allocation for Private Internets"
    url: "https://www.rfc-editor.org/rfc/rfc1918"
  - name: "RFC 3927: Dynamic Configuration of IPv4 Link-Local Addresses"
    url: "https://www.rfc-editor.org/rfc/rfc3927"
  - name: "RFC 6598: IANA-Reserved IPv4 Prefix for Shared Address Space"
    url: "https://www.rfc-editor.org/rfc/rfc6598"
  - name: "RFC 5737: IPv4 Address Blocks Reserved for Documentation"
    url: "https://www.rfc-editor.org/rfc/rfc5737"
  - name: "RFC 3849: IPv6 Address Prefix Reserved for Documentation"
    url: "https://www.rfc-editor.org/rfc/rfc3849"
  - name: "RFC 8200: Internet Protocol, Version 6 (IPv6) Specification"
    url: "https://www.rfc-editor.org/rfc/rfc8200"
  - name: "RFC 5952: A Recommendation for IPv6 Address Text Representation"
    url: "https://www.rfc-editor.org/rfc/rfc5952"
  - name: "IANA: Service Name and Transport Protocol Port Number Registry (RFC 6335)"
    url: "https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml"
  - name: "Microsoft Learn: The default dynamic port range for TCP/IP has changed"
    url: "https://learn.microsoft.com/en-us/troubleshoot/windows-server/networking/default-dynamic-port-range-tcpip-chang"
  - name: "Linux kernel documentation: IP sysctl (ip_local_port_range)"
    url: "https://www.kernel.org/doc/html/latest/networking/ip-sysctl.html"
  - name: "RFC 9293: Transmission Control Protocol (TCP), 2022"
    url: "https://www.rfc-editor.org/rfc/rfc9293"
  - name: "RFC 768: User Datagram Protocol, 1980"
    url: "https://www.rfc-editor.org/rfc/rfc768"
  - name: "RFC 9000: QUIC, a UDP-Based Multiplexed and Secure Transport"
    url: "https://www.rfc-editor.org/rfc/rfc9000"
  - name: "RFC 9114: HTTP/3"
    url: "https://www.rfc-editor.org/rfc/rfc9114"
  - name: "RFC 826: An Ethernet Address Resolution Protocol"
    url: "https://www.rfc-editor.org/rfc/rfc826"
  - name: "Wikipedia: Organizationally unique identifier"
    url: "https://en.wikipedia.org/wiki/Organizationally_unique_identifier"
  - name: "Apple Support: Use private Wi-Fi addresses on Apple devices"
    url: "https://support.apple.com/en-us/102509"
  - name: "Microsoft Learn: tracert"
    url: "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/tracert"
  - name: "RFC 3022: Traditional IP Network Address Translator (Traditional NAT)"
    url: "https://www.rfc-editor.org/rfc/rfc3022"
  - name: "RFC 6302: Logging Recommendations for Internet-Facing Servers"
    url: "https://www.rfc-editor.org/rfc/rfc6302"
  - name: "RFC 1034: Domain Names, Concepts and Facilities, 1987"
    url: "https://www.rfc-editor.org/rfc/rfc1034"
  - name: "RFC 1035: Domain Names, Implementation and Specification, 1987"
    url: "https://www.rfc-editor.org/rfc/rfc1035"
  - name: "RFC 7766: DNS Transport over TCP, Implementation Requirements"
    url: "https://www.rfc-editor.org/rfc/rfc7766"
  - name: "IANA: Domain Name System (DNS) Parameters (record types)"
    url: "https://www.iana.org/assignments/dns-parameters/"
  - name: "Root Server Technical Operations Association: root-servers.org"
    url: "https://root-servers.org/"
  - name: "RFC 7858: Specification for DNS over Transport Layer Security (TLS)"
    url: "https://www.rfc-editor.org/rfc/rfc7858"
  - name: "RFC 8484: DNS Queries over HTTPS (DoH)"
    url: "https://www.rfc-editor.org/rfc/rfc8484"
  - name: "RFC 2131: Dynamic Host Configuration Protocol"
    url: "https://www.rfc-editor.org/rfc/rfc2131"
  - name: "Apple Platform Support: Adjust private Wi-Fi settings on Mac"
    url: "https://support.apple.com/guide/platform-support/supe1a7bd6f9/web"
visuals:
  journey:
    kind: route
    stages:
      - where: "Get an address (DHCP)"
        steps: ["Discover", "Offer", "Request", "Acknowledge"]
      - where: "Look up the name (DNS)"
        steps: ["<code>shop.example</code>?", "Resolver", "<code>203.0.113.10</code>"]
      - where: "Connect (TCP)"
        steps: ["SYN", "SYN-ACK", "ACK"]
      - where: "Talk (TLS, then HTTP)"
        steps: ["Agree on encryption", "<code>GET /</code>", "<code>200 OK</code>"]
    caption: "What a laptop does to open one web page. Getting an address happens once, when it joins the network. The rest happens every time it talks to a new site."
  address:
    kind: window
    title: "One address, two parts"
    lead: ["192.168.1.37/24", "an IPv4 address and its prefix length"]
    rows:
      - ["Network part (first 24 bits)", "<code>192.168.1</code>"]
      - ["Host part (last 8 bits)", "<code>.37</code>"]
      - ["Subnet mask (the same /24, written out)", "<code>255.255.255.0</code>"]
      - ["Network address (the first)", "<code>192.168.1.0</code>"]
      - ["Broadcast address (the last)", "<code>192.168.1.255</code>"]
      - ["Addresses left for devices", "254 (<code>.1</code> to <code>.254</code>)"]
    mark: 2
    caption: "Every device whose address starts with 192.168.1 is on the same network and can be reached directly. Everything else goes to the router."
  ranges:
    kind: cards
    layout: rows
    cards:
      - title: "Private"
        text: "Inside homes and companies. Never routed on the internet, so the same address exists in millions of networks."
        tags: ["10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16"]
      - title: "Loopback"
        text: "The device talking to itself."
        tags: ["127.0.0.1", "::1"]
      - title: "Link-local"
        text: "An address a device gives itself when no DHCP server answers."
        tags: ["169.254.0.0/16"]
      - title: "Shared (carrier-grade NAT)"
        text: "Used inside internet providers that put many customers behind one public address."
        tags: ["100.64.0.0/10"]
      - title: "Documentation"
        text: "Kept for examples, like the ones on this page. Never real."
        tags: ["192.0.2.0/24", "198.51.100.0/24", "203.0.113.0/24", "2001:db8::/32"]
      - title: "Public"
        text: "Almost everything else: unique on the whole internet."
    caption: "Spotting one of these in a log tells you a lot before you look anything up."
  tcpudp:
    kind: cards
    cards:
      - title: "TCP"
        text: "Connection first. Every byte is numbered, confirmed, resent if lost and delivered in order."
        tags: ["HTTPS 443", "SSH 22", "SMB 445", "RDP 3389"]
      - title: "UDP"
        text: "No connection, no confirmation, no order. Small and fast; the program copes with losses."
        tags: ["DNS 53", "DHCP 67, 68", "HTTP/3 443"]
    caption: "Registered mail and a postcard. Both carry the same addresses and ports; only the promises differ."
  layers:
    kind: cards
    layout: rows
    cards:
      - title: "Application (OSI 5 to 7)"
        text: "What the programs say to each other."
        tags: ["HTTP", "DNS", "SSH", "SMB"]
      - title: "Transport (OSI 4)"
        text: "Which program, and how reliably. Ports live here."
        tags: ["TCP", "UDP"]
      - title: "Internet (OSI 3)"
        text: "Which machine, across networks. Routers work here."
        tags: ["IPv4", "IPv6", "ICMP"]
      - title: "Link (OSI 1 and 2)"
        text: "The next hop on the same network: cables, radio, MAC addresses. Switches work here."
        tags: ["Ethernet", "Wi-Fi", "ARP"]
    caption: "The four TCP/IP layers from top to bottom, with the OSI layer numbers people use for the same jobs."
  packet:
    kind: window
    title: "One packet, opened up"
    rows:
      - ["Link: from (MAC)", "the laptop's MAC address"]
      - ["Link: to (MAC)", "the router's MAC address"]
      - ["Internet: from (IP)", "<code>192.168.1.37</code>"]
      - ["Internet: to (IP)", "<code>203.0.113.10</code>"]
      - ["Transport: protocol", "TCP"]
      - ["Transport: from port", "<code>51234</code>"]
      - ["Transport: to port", "<code>443</code>"]
      - ["Payload", "encrypted (TLS)"]
    mark: 7
    caption: "The laptop's first packet to the shop, layer by layer. The MAC addresses only get it as far as the router; the IP addresses and ports travel the whole way (until NAT changes the sender, further down)."
  nat:
    kind: cards
    layout: rows
    cards:
      - title: "Inside your network"
        text: "What the laptop sends."
        tags: ["from 192.168.1.37:51234", "to 203.0.113.10:443"]
      - title: "On the internet"
        text: "What the shop sees after the router's NAT."
        tags: ["from 198.51.100.7:40001", "to 203.0.113.10:443"]
      - title: "The router remembers"
        text: "Its table sends the reply back to the right device."
        tags: ["40001 = 192.168.1.37:51234"]
    caption: "One connection before and after NAT. Only the sender's address and port change."
  dns:
    kind: route
    stages:
      - where: "Your computer asks"
        steps: ["<code>www.example.com</code>?"]
      - where: "The resolver asks around (unless it has the answer cached)"
        steps: ["Root", ".com servers", "example.com's servers"]
      - where: "The answer"
        steps: ["A record: the IPv4 address", "Kept for its TTL"]
    caption: "The root points to the .com servers, which point to example.com's own servers, which give the answer. Your computer only ever talks to the resolver."
  quiz:
    kind: questions
    items:
      - q: "A laptop shows <code>10.20.30.40/16</code>. Which network is it on, and could you find this machine from the internet by that address?"
        a: "It's on <code>10.20.0.0/16</code> (the first 16 bits, <code>10.20</code>, are the network). No: <code>10.0.0.0/8</code> is a private range, used inside countless networks and never routed on the internet."
      - q: "How many addresses does a <code>/26</code> hold, and how many can devices use?"
        a: "2 to the power of (32 − 26) = 64 addresses. The first names the network and the last is the broadcast address, so 62 are left for devices."
      - q: "A log shows a connection from <code>192.168.1.37:52814</code> to <code>203.0.113.10:443</code>. Which side started it, and what is it probably doing?"
        a: "The side with the high, temporary port (<code>192.168.1.37</code>) is the client. Port 443 suggests HTTPS, but a port is only a convention: check what's really there before you trust it."
      - q: "DNS questions usually travel over UDP. When is TCP used, and is it optional?"
        a: "TCP is used when an answer is too big for UDP, among other cases. It isn't optional: since RFC 7766, every general-purpose DNS implementation must support both UDP and TCP."
      - q: "A computer's address is <code>169.254.12.7</code>. What most likely happened?"
        a: "It asked for an address and no DHCP server answered, so it gave itself a link-local address. It can only reach devices on the same link, not the internet."
      - q: "Investigators have a public IP address and the date of an attack. The provider uses carrier-grade NAT. Why might that not be enough?"
        a: "Many customers share that one address. To find the right one, the provider needs the source port and the exact time, to the second (RFC 6302 recommends servers log both, in UTC)."
      - q: "What does a router do with a packet whose TTL reaches 0?"
        a: "It throws the packet away and usually sends an ICMP Time Exceeded message back to the sender. That's how tracert and traceroute map the routers on a path."
      - q: "Which three TCP messages open a connection, in order?"
        a: "SYN, SYN-ACK, ACK. Only after that does the real data flow."
---

## The short version

Think of a network as a postal service for data. Everything you send is cut into small envelopes called
**packets**, and every packet carries two things on the outside: who it's from and who it's for.

- The **IP address** is the street address: which computer.
- The **port** is the flat number: which program on that computer.
- **Routers** are the sorting offices that pass packets from one network to the next until they arrive.
- **DNS** is the address book that turns a name like `example.com` into an IP address.
- **DHCP** is the front desk that gives a new device its address when it joins a network.
- **NAT** is the mail room of a big office: everything leaves under the building's one public address, and the mail
  room remembers who gets each reply.
- **TCP** is registered mail with a receipt for every page. **UDP** is a postcard.

<mark>Every conversation on a network is described by the same five things: two IP addresses, two ports and a
protocol.</mark> They're in almost every log, alert and attack you will ever look at, which is why every job in
cybersecurity starts here.

By the end of this page you'll be able to:

- read an address like `192.168.1.37/24` and say which network it's on and how big that network is;
- tell a private address from a public one, and know the special addresses you'll meet in logs;
- name the ports you'll see every day and explain why a port number alone proves nothing;
- explain how TCP opens a connection and when UDP is used instead;
- follow a DNS lookup and a DHCP exchange from start to finish;
- explain why many devices share one public address, and what that means for an investigation;
- find all of this on your own computer.

## Words you'll need

- **Network:** two or more devices that can send data to each other. Your home Wi-Fi is one. The internet is a
  network of networks.
- **Host** (or device): anything with an address: a laptop, phone, server, printer or camera.
- **Packet:** one small chunk of data. It has a **header** (the envelope: addresses and other details) and a
  **payload** (what's inside). A big file travels as thousands of packets.
- **Protocol:** an agreed set of rules for talking, like HTTP for web pages or DNS for names.
- **Client and server:** the client asks (your browser), the server answers (the website).
- **Bit and byte:** a bit is a single 0 or 1. A byte is 8 bits; network standards call it an **octet**.
- **LAN:** a local area network, such as the network in one home or office.

## The journey of one web page

You type `https://shop.example` and press Enter. Before the page appears, a lot happens in a very short time. The
rest of this page takes each step apart.

<!-- pic: journey -->

1. **It already has an address.** When the laptop joined the Wi-Fi, a **DHCP** server (usually the home router) gave
   it an address, say `192.168.1.37`, plus the router's address and a DNS server to use.
2. **It looks up the name.** It asks **DNS** for the address of `shop.example` and gets back `203.0.113.10`.
3. **It decides where to send.** `203.0.113.10` isn't on the laptop's own network, so the packets go to the router,
   which passes them on toward the shop.
4. **It connects.** The laptop opens a **TCP** connection from a temporary port, such as `51234`, to port `443`
   (HTTPS) on the server. The two sides agree on encryption (TLS), then the browser asks for the page and gets it.
5. **On the way out**, the router's **NAT** swaps the laptop's private address for the household's one public
   address, and remembers the swap so the reply finds its way back.

## IP addresses: which machine

An IP address names one device's place on a network, the way a street address names a building. There are two
versions in use: IPv4, the classic one, and IPv6, the newer, much bigger one. You'll see both in logs.

### IPv4 and the slash

An IPv4 address is 32 bits long. It's written as four numbers from 0 to 255 separated by dots, such as
`192.168.1.37`. Each number is one byte (8 bits). 32 bits allow about 4.3 billion addresses, which sounds like a lot
until you count every phone, laptop and smart TV on Earth. That shortage explains private addresses, NAT and IPv6,
all further down.

Every address has two parts: the **network part** (which street) and the **host part** (which house on that street).
The number after the slash, called the **prefix length**, says where the split is.

<!-- pic: address -->

`/24` means the first 24 bits, the first three numbers, name the network. The **subnet mask** `255.255.255.0` says
exactly the same thing in an older form: each `255` marks a byte that belongs to the network. You'll meet both
spellings, so it helps to recognize them as twins.

In a `/24` network there are 256 addresses, from `.0` to `.255`. The first one, `192.168.1.0`, names the network
itself, and the last one, `192.168.1.255`, is the **broadcast address**, which reaches every device on that network
at once. That leaves 254 for devices.

This split decides how a device sends every single packet:

- **Same network?** If the destination starts with the same network part (`192.168.1.200`), the device delivers the
  packet directly, on the local network.
- **Different network?** If not (`192.168.2.5` or `203.0.113.10`), it hands the packet to its **default gateway**,
  the router, and lets the router deal with it.

> [!ASIDE] Why "subnet"
> A subnet is simply a network cut out of a bigger block. A company might split `10.0.0.0/16` into many `/24`
> subnets: one for offices, one for servers, one for cameras.

### Bigger and smaller networks

Every step of the slash halves or doubles the network. The rule is 2 to the power of (32 minus the prefix length):

| Prefix | Subnet mask | Addresses | For devices |
|---|---|---|---|
| /8 | 255.0.0.0 | 16,777,216 | 16,777,214 |
| /16 | 255.255.0.0 | 65,536 | 65,534 |
| /24 | 255.255.255.0 | 256 | 254 |
| /25 | 255.255.255.128 | 128 | 126 |
| /26 | 255.255.255.192 | 64 | 62 |
| /30 | 255.255.255.252 | 4 | 2 |
| /32 | 255.255.255.255 | 1 | 1 |

A `/32` is a single address, which is how firewall rules and blocklists name one exact machine. The bigger the number
after the slash, the smaller the network.

### Addresses with a special meaning

Some address blocks are set aside for a purpose. Recognizing them saves you from chasing the wrong thing:

<!-- pic: ranges -->

- **Private addresses** (RFC 1918) are for use inside a home or company. Routers on the internet don't carry them,
  so the same `192.168.1.37` exists in millions of homes at once. A private address in a log tells you the device is
  inside a network, but it means nothing outside that network.
- **169.254 addresses** (RFC 3927) are what a device gives itself when it asks for an address and no DHCP server
  answers. Seeing one usually means something went wrong: the device can only reach its closest neighbors, not the
  internet.
- **100.64.0.0/10** (RFC 6598) is used inside internet providers that share public addresses between customers
  (more on that in the NAT section).
- **Documentation addresses** (RFC 5737 for IPv4, RFC 3849 for IPv6) never appear on the real internet. They exist so
  examples like the ones on this page can't point at anyone's real machine.

### IPv6

IPv6 addresses are 128 bits long, enough for about 3.4 × 10<sup>38</sup> addresses. They're written as eight groups
of four hexadecimal digits (0 to 9, then a to f), separated by colons:

```
2001:0db8:0000:0000:0000:0000:0000:0001
```

That's tiring to read, so there are shortening rules (RFC 5952): drop the zeros at the start of each group, replace
one run of all-zero groups with `::`, and write the letters in lowercase. The address above becomes `2001:db8::1`.
`::` may appear only once, or the reader couldn't tell how many zeros each one stands for.

The ideas are the same as in IPv4: a prefix length after the slash, a network part and a host part. `::1` is the
loopback address, like `127.0.0.1`. A device can have IPv4 and IPv6 addresses at the same time, so the same
machine can show up under either one in different logs.

## Ports: which program

An IP address gets a packet to the right machine. A **port** gets it to the right program on that machine: the web
server, the mail server, the remote desktop service. A port is a number from 0 to 65535 (16 bits).

Server programs **listen** on a fixed, well-known port so clients know where to find them. Clients pick a temporary
port for each connection, so the replies come back to the right browser tab or app. Together, the two addresses, the
two ports and the protocol identify exactly one conversation.

IANA, the organization that keeps the internet's official number lists, splits the ports into three ranges:

- **0 to 1023, system ports** (often called "well-known"): the classic services.
- **1024 to 49151, user ports**: registered for specific products.
- **49152 to 65535, dynamic or private ports**: never assigned to anything, free for temporary use.

The temporary ports a client picks are called **ephemeral ports**. Windows picks them from 49152 to 65535 by default
(since Windows Vista), and Linux from 32768 to 60999. That's why the client side of a connection in a log almost
always shows a high, random-looking number.

The ports you'll see most:

| Port | Over | Used by |
|---|---|---|
| 22 | TCP | SSH: remote command line and file copies |
| 25 | TCP | SMTP: email between mail servers |
| 53 | UDP, TCP | DNS: names to addresses |
| 67, 68 | UDP | DHCP: server (67) and client (68) |
| 80 | TCP | HTTP: web pages without encryption |
| 443 | TCP, UDP | HTTPS (UDP for HTTP/3) |
| 445 | TCP | SMB: Windows file sharing |
| 853 | TCP | DNS over TLS |
| 3389 | TCP, UDP | RDP: Windows Remote Desktop |

> [!WARNING]
> A port number is a convention, not a guarantee. IANA's own registry warns that traffic on a registered port isn't
> necessarily that service, or harmless. Any program can listen on any port, and attackers like 443 because it
> blends in with ordinary web traffic. Treat the port as a first guess, then check.

A port with a program listening on it is called **open**. Finding open ports is the first thing both an attacker
and a defender do when they look at a machine, which is why an unexpected open port is worth asking about.

## TCP and UDP: two ways to send

Both protocols carry ports. What differs is the promise they make about delivery.

<!-- pic: tcpudp -->

### TCP: a conversation with receipts

TCP (today's standard is RFC 9293, from 2022, replacing the original RFC 793 of 1981) gives programs a reliable
stream of data. It numbers every byte, the receiver confirms what arrived, anything lost is sent again, and the data
comes out in the right order. Web pages, SSH, file sharing and email all use it.

Before any data flows, the two sides open a connection with the **three-way handshake**:

1. **SYN:** the client says "let's talk, my numbering starts here".
2. **SYN-ACK:** the server answers "agreed, mine starts here, and I got yours".
3. **ACK:** the client confirms. The connection is open.

To finish, each side sends **FIN** and the other confirms. A **RST** (reset) ends a connection on the spot. When a
packet asks for a port where nothing is listening, the computer normally answers with a RST, while many firewalls
just drop the packet and say nothing. SYN, ACK, FIN and RST are **flags**: single bits in the TCP header that you'll
see in packet captures and firewall logs.

> [!ASIDE] Half-open
> A SYN that never gets its final ACK leaves a "half-open" connection. Lots of them can mean a port scan or a flood
> that's trying to exhaust the server.

### UDP: just send it

UDP (RFC 768, from 1980) has no connection and no promises. A UDP packet, called a **datagram**, has an 8-byte header
with only four fields: source port, destination port, length and a checksum. If it's lost, UDP doesn't notice. That
makes it fast and simple, which suits short questions and answers (DNS, DHCP) and live audio and video, where a late
packet is useless anyway.

Some newer protocols build their own reliability on top of UDP. The best known is **QUIC** (RFC 9000, 2021), which
adds encryption and resending; **HTTP/3** (RFC 9114, 2022) runs on it, usually on UDP port 443. So web traffic isn't
always TCP any more.

## Layers: the OSI and TCP/IP models

Networking is split into layers, each doing one job and handing its work to the next, like a letter that goes into an
envelope, the envelope into a mail bag and the bag into a truck. When you send, each layer wraps the data in its own
header (**encapsulation**). The receiver unwraps them in reverse.

There are two models of these layers, and you'll hear both:

- **TCP/IP model** (RFC 1122, 1989): four layers, the way the internet is actually built.
- **OSI model** (ISO/IEC 7498-1:1994): seven layers, from 1 (Physical) to 7 (Application). Few systems implement it
  as such, but its numbers became everyone's vocabulary: "a layer 2 switch", "a layer 7 attack", "a layer 3
  firewall rule".

<!-- pic: layers -->

The OSI layers, bottom to top, are: 1 Physical, 2 Data link, 3 Network, 4 Transport, 5 Session, 6 Presentation,
7 Application. In TCP/IP, the top three are all just "application".

Each layer also has its own name for its chunk of data. The link layer sends **frames**, the internet layer sends
**packets**, TCP sends **segments** and UDP sends **datagrams**. In everyday talk, "packet" covers them all.

> [!NOTE]
> Models are maps, not laws. Some real protocols don't fit neatly in one box: TLS, the encryption behind HTTPS, sits
> between TCP and HTTP. Use the layers to locate a problem or an attack, not to argue about where something "belongs".

Here's what the envelopes of a single packet look like when you open them:

<!-- pic: packet -->

## Switches, routers and MAC addresses

### Inside one network: MAC addresses and switches

Inside a single network, devices find each other by a hardware address called the **MAC address**. It's 48 bits,
written as six pairs of hexadecimal digits, such as `aa:bb:cc:11:22:33` (made up). Normally the first three pairs
identify the maker of the network card; the IEEE assigns those prefixes to manufacturers.

A **switch** connects the devices of one network and passes each frame only toward the device it's for, using the
MAC address. MAC addresses never leave the local network: the next network over sees the router's MAC, not yours.

How does a laptop learn the MAC address of `192.168.1.1`? With **ARP**, the Address Resolution Protocol (RFC 826):
it asks the whole network "who has 192.168.1.1?", the owner answers with its MAC address, and the laptop keeps the
answer for a while. ARP has no way to check that an answer is honest, so a device on the same network can answer
falsely and place itself in the middle of other people's traffic. That's why attacks "on the local network" are
taken seriously. IPv6 does the same job with a protocol called Neighbor Discovery.

> [!NOTE]
> Many phones and laptops no longer show their real MAC address to Wi-Fi networks. Apple devices, for example, use a
> different private address for each Wi-Fi network by default and may change it over time. In an investigation, a
> MAC address seen on Wi-Fi may not be the device's hardware address.

### Between networks: routers

A **router** connects different networks and decides where each packet goes next. It reads the destination IP
address, looks it up in its **routing table**, and sends the packet one step (one **hop**) closer. Your own computer
has a tiny routing table too, and its most important line is the **default gateway**: "anything not local goes to
the router".

The box from your internet provider is usually several devices in one: a router, a switch, a Wi-Fi access point, a
DHCP server, a NAT and a basic firewall.

Every IPv4 packet carries a **TTL** (time to live, RFC 791), and every IPv6 packet a **Hop Limit** (RFC 8200). Each
router lowers it by one. When it reaches zero, the router drops the packet and usually sends back an ICMP "Time
Exceeded" message. That stops packets from looping forever, and it's how `tracert` (Windows) and `traceroute` map a
path: they send packets with a TTL of 1, then 2, then 3, and each router along the way gives itself away.

> [!ASIDE] Two different TTLs
> DNS records also have a "TTL": how long an answer may be cached. Same name, unrelated job.

## NAT: many devices, one public address

Private addresses can't travel on the internet, yet your phone and laptop browse it all day. The trick is **NAT**
(network address translation). The common form, **NAPT** (RFC 3022), lets many private addresses share one public
address by also changing the ports.

<!-- pic: nat -->

When the laptop's packet leaves home, the router replaces the private sender (`192.168.1.37:51234`) with its own
public address and a port of its choosing (`198.51.100.7:40001`), and writes the swap in a table. When the reply
comes back to port 40001, the table says who it's for.

Three things follow from this, and all of them matter in security:

- **Connections start from the inside.** A device behind NAT can't be reached from the internet unless someone sets
  up a rule for it (port forwarding). NAT isn't a firewall, but it blocks unasked-for incoming connections as a side
  effect.
- **Internet providers do it too.** With **carrier-grade NAT**, a provider puts many customers behind one public
  address, using the `100.64.0.0/10` block on its side.
- **An address and a date aren't enough to find someone.** Behind shared addresses, the provider can only find the
  right customer with the **source port** and the **exact time**. RFC 6302 recommends that servers log both, with the
  time in UTC and accurate to the second. If you run a server, log them; if you investigate, ask for them.

IPv6 has so many addresses that devices can each have their own, so it doesn't need address sharing.

## DNS: from names to addresses

People remember names; computers need addresses. **DNS** (the Domain Name System, RFC 1034 and 1035, from 1987) is a
worldwide directory spread over millions of servers that turns one into the other.

<!-- pic: dns -->

A lookup works like this:

1. Your computer asks its **resolver**, usually the home router, the internet provider's server or a public one such
   as `1.1.1.1`.
2. If the resolver has a fresh answer saved (**cached**), it replies at once.
3. If not, it asks a **root server**, which doesn't know the address but knows who runs `.com`.
4. It asks a `.com` server, which knows which servers are responsible for `example.com`.
5. It asks those **authoritative servers**, which give the answer, and the resolver passes it back.

The root servers come under 13 names, `a.root-servers.net` to `m.root-servers.net`, run by 12 independent
organizations, with more than 2,000 copies spread around the world.

DNS questions usually travel over **UDP port 53**. TCP port 53 is used too, for example when an answer is too big, and
every DNS implementation must support both (RFC 7766).

The record types you'll meet:

| Type | Holds |
|---|---|
| A | an IPv4 address |
| AAAA | an IPv6 address |
| CNAME | another name this one is an alias for |
| MX | the mail servers for a domain |
| NS | the servers responsible for a domain |
| PTR | the name behind an address (a "reverse" lookup) |
| TXT | free text, used for email security and proving who owns a domain |

**Encrypted DNS** hides the questions from anyone watching the network. **DNS over TLS** (RFC 7858) uses its own port,
853. **DNS over HTTPS** (RFC 8484) travels on port 443, mixed in with ordinary web traffic. That's good for privacy,
but it also means a defender watching port 53 can miss lookups, malware's included.

For defenders, DNS is gold. A program that reaches a server by name has to look the name up first, and malware is
no exception, so DNS logs show which machine looked up which name, and when. A strange name, a burst of lookups or a
newly registered domain is often the first sign that something is wrong.

## DHCP: how a device gets its address

No one types addresses into every laptop and phone. **DHCP** (RFC 2131) hands them out automatically, in four
messages often remembered as **DORA**:

1. **Discover:** the new device shouts to the whole network, "is there a DHCP server?"
2. **Offer:** a server answers with an address it could use.
3. **Request:** the device asks for that address.
4. **Acknowledge:** the server confirms, and the device starts using it.

The server also sends the subnet mask, the default gateway and the DNS servers, and the address comes with a
**lease**: it's lent for a while, and the device renews it before it runs out. DHCP runs over UDP, with the server on
port 67 and the client on port 68.

Two things to remember for security work:

- **Addresses get reused.** The same `192.168.1.37` may belong to a different laptop tomorrow. To know which device
  had an address at 14:02, you need the DHCP server's logs for that moment, not just the address. Apple devices that
  use a private Wi-Fi address even send a generic name in their DHCP request, so names can be missing too.
- **DHCP doesn't check who's answering.** RFC 2131 itself warns that unauthorized DHCP servers are easy to set up. A
  rogue server can hand out its own gateway or DNS server and quietly redirect traffic.

## How it shows up on the job

Here's a firewall log line of the kind you'll read every day. It's a made-up example; real products order the fields
differently, but the parts are always there:

```
2026-11-12T14:02:17Z  ALLOW  TCP  192.168.1.37:51234 -> 203.0.113.10:443
```

Read left to right: when (in UTC, marked by the `Z`), what the firewall did, the protocol, the client (a private
address and a temporary port) and the server (a public address on the HTTPS port). Most of this page is in that one
line.

- **Security operations:** you spot an internal machine talking to an unusual port, a workstation suddenly
  connecting to hundreds of other internal addresses (scanning), or DNS lookups for names nobody has seen before.
- **Incident response and forensics:** you tie an address and a time to a device with DHCP logs, ask providers for
  source ports behind NAT, line up times from logs in different time zones, and remember that a private address or
  a Wi-Fi MAC address may not mean what it seems.
- **Penetration testing:** with permission, you map which machines answer and which ports are open, then confirm
  what's really listening instead of trusting the port number.
- **Cloud security:** firewall rules are written in exactly these terms: allow `10.0.0.0/16` to reach port 443,
  never allow `0.0.0.0/0` (everyone) to reach port 3389.

## Try it yourself

Ten minutes on your own computer turns all of this into something you've seen. These commands only read your own
settings, look up a public name or follow the path to a public website. Nothing here tests anyone else's machine.

### Your address, gateway and DNS server

<!-- for: windows -->

Open PowerShell and run:

```powershell
ipconfig /all
```

Find your network adapter and read **IPv4 Address**, **Subnet Mask**, **Default Gateway**, **DHCP Server** and
**DNS Servers**. **Physical Address** is the MAC address the adapter uses.

<!-- for: macos -->

Open Terminal and run (use `"Ethernet"` instead of `"Wi-Fi"` on a wired connection):

```sh
networksetup -getinfo "Wi-Fi"
scutil --dns | grep nameserver
```

The first shows your **IP address**, **Subnet mask** and **Router** (the default gateway). The second lists the DNS
servers in use.

<!-- for: linux -->

Open a terminal and run:

```sh
ip -4 -br address
ip route
resolvectl status
```

Ignore `lo`, which only talks to the machine itself. The other line shows your address with its prefix length, such
as `192.168.1.37/24`. In `ip route`, the line starting `default via` names your gateway. `resolvectl status` lists
the DNS servers (on systems without systemd-resolved, look in `/etc/resolv.conf`).

<!-- /for -->

Now answer: is your address private? Which of the three private blocks is it from? How many devices fit on your
network?

### Look up a name

<!-- for: windows -->

```powershell
nslookup example.com
```

<!-- for: macos -->

```sh
nslookup example.com
```

<!-- for: linux -->

```sh
resolvectl query example.com
```

<!-- /for -->

You'll see which server answered and the addresses it gave, often both IPv4 and IPv6.

### See your own connections

Open a website first, then:

<!-- for: windows -->

```powershell
netstat -an | findstr ESTABLISHED
```

<!-- for: macos -->

```sh
netstat -an -p tcp | grep ESTABLISHED
```

<!-- for: linux -->

```sh
ss -tn
```

<!-- /for -->

Find a line whose remote side ends in `:443`. Your side shows your address and a high temporary port. Does that port
fall in your system's ephemeral range?

### Trace the path

<!-- for: windows -->

```powershell
tracert example.com
```

<!-- for: macos -->

```sh
traceroute example.com
```

<!-- for: linux -->

```sh
tracepath example.com
```

`traceroute` works too, if it's installed.

<!-- /for -->

Each line is one router on the way. A line of asterisks (`*`) means that router didn't answer, which many don't.

Want a small network of your own to experiment with? The lab guides build one on your computer: virtual machines on
a private network that can't reach the internet.
<!-- guide: vmware-host-only, virtualbox-host-only, utm-host-only -->

## Check yourself

Try to answer before you open each one.

<!-- pic: quiz -->

## Learn more

- **[Professor Messer's CompTIA Network+ (N10-009) course](https://www.professormesser.com/network-plus/n10-009/n10-009-video/n10-009-training-course/)**:
  87 free videos, about 13 hours, covering everything on this page in more depth, subnetting and IPv6 included.
- **[Cisco Networking Academy](https://www.cisco.com/site/us/en/learn/training-certifications/training/netacad/index.html)**:
  free, self-paced courses. Networking Basics is the one for beginners, with hands-on labs.
- **[Cloudflare Learning Center: DNS server types](https://www.cloudflare.com/learning/dns/dns-server-types/)**:
  a short, clear explainer with diagrams of the four kinds of DNS server a lookup passes through.
- **[Wireshark](https://www.wireshark.org/docs/wsug_html_chunked/)**: the free packet analyzer used everywhere. Its
  [sample captures](https://wiki.wireshark.org/SampleCaptures) let you open real DHCP, DNS and TCP packets without
  capturing anything yourself. Only capture traffic on networks you own or are allowed to monitor.
