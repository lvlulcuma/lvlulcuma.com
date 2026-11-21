---
# Roadmap topic. Its title and summary show on every job page that lists "cryptography-basics" in learn.yml.
# The text under the dashes is the topic's own page: lvlulcuma.com/<lang>/roadmap/topics/cryptography-basics/
# How these pages are written: docs/claude/roadmap-topic.md
title: "Podstawy szyfrowania i haszowania"
summary: "Szyfrowanie symetryczne i asymetryczne, skróty (MD5, SHA-256) i ich zastosowania, podpisy cyfrowe, certyfikaty i TLS: tyle, by wiedzieć, co jest chronione, a co nie."
date: 2026-11-20
sources:
  - name: "RFC 4648: The Base16, Base32, and Base64 Data Encodings, 2006"
    url: "https://www.rfc-editor.org/rfc/rfc4648"
  - name: "Microsoft Learn: about_PowerShell_exe, the -EncodedCommand option"
    url: "https://learn.microsoft.com/en-us/powershell/module/Microsoft.PowerShell.Core/About/about_PowerShell_exe"
  - name: "Microsoft Learn: Decode a PowerShell command from a running process"
    url: "https://learn.microsoft.com/en-us/powershell/scripting/samples/decode-powershell-command-from-a-running-process"
  - name: "NIST FIPS 197: Advanced Encryption Standard (AES), 2001, updated 2023"
    url: "https://csrc.nist.gov/pubs/fips/197/final"
  - name: "RFC 8439: ChaCha20 and Poly1305 for IETF Protocols, 2018"
    url: "https://www.rfc-editor.org/rfc/rfc8439"
  - name: "NIST SP 800-38D: Galois/Counter Mode (GCM) and GMAC, 2007"
    url: "https://csrc.nist.gov/pubs/sp/800/38/d/final"
  - name: "NIST SP 800-38E: The XTS-AES Mode for Confidentiality on Storage Devices, 2010"
    url: "https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38e.pdf"
  - name: "NIST SP 800-131A Rev. 3 (initial public draft): Transitioning the Use of Cryptographic Algorithms and Key Lengths, October 2024"
    url: "https://csrc.nist.gov/pubs/sp/800/131/a/r3/ipd"
  - name: "NIST SP 800-57 Part 1 Rev. 5: Recommendation for Key Management, 2020"
    url: "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-57pt1r5.pdf"
  - name: "ACM: Cryptography pioneers Diffie and Hellman receive the 2015 A.M. Turing Award"
    url: "https://www.acm.org/media-center/2016/march/turing-award-2015"
  - name: "ACM A.M. Turing Award 2002: Leonard M. Adleman (RSA)"
    url: "https://amturing.acm.org/award_recipient/adleman_7308544"
  - name: "NIST: Post-quantum cryptography FIPS approved (FIPS 203, 204, 205), August 2024"
    url: "https://csrc.nist.gov/news/2024/postquantum-cryptography-fips-approved"
  - name: "NIST IR 8547: Transition to Post-Quantum Cryptography Standards, 2026"
    url: "https://nvlpubs.nist.gov/nistpubs/ir/2026/NIST.IR.8547.pdf"
  - name: "RFC 10024: Post-Quantum Traditional (PQ/T) Hybrid Key Agreement Mechanisms for TLS 1.3, August 2026"
    url: "https://www.rfc-editor.org/rfc/rfc10024"
  - name: "Google Security Blog: A new path for Kyber on the web, September 2024"
    url: "https://security.googleblog.com/2024/09/a-new-path-for-kyber-on-web.html"
  - name: "Cloudflare Docs: Post-quantum cryptography support in browsers and libraries"
    url: "https://developers.cloudflare.com/ssl/post-quantum-cryptography/pqc-support/"
  - name: "Cloudflare Radar: Post-quantum encryption adoption (browser support)"
    url: "https://radar.cloudflare.com/post-quantum"
  - name: "Cloudflare: Cloudflare targets 2029 for full post-quantum security, April 2026"
    url: "https://blog.cloudflare.com/post-quantum-roadmap"
  - name: "NIST CSRC: Hash Functions (FIPS 180-4 and FIPS 202)"
    url: "https://csrc.nist.gov/Projects/hash-functions"
  - name: "NIST: NIST Retires SHA-1 Cryptographic Algorithm, December 2022"
    url: "https://www.nist.gov/news-events/news/2022/12/nist-retires-sha-1-cryptographic-algorithm"
  - name: "Google Security Blog: Announcing the first SHA1 collision, February 2017"
    url: "https://security.googleblog.com/2017/02/announcing-first-sha1-collision.html"
  - name: "RFC 1321: The MD5 Message-Digest Algorithm, 1992"
    url: "https://www.rfc-editor.org/rfc/rfc1321"
  - name: "RFC 6151: Updated Security Considerations for MD5, 2011"
    url: "https://www.rfc-editor.org/rfc/rfc6151"
  - name: "NIST FIPS 198-1: The Keyed-Hash Message Authentication Code (HMAC), 2008"
    url: "https://csrc.nist.gov/pubs/fips/198-1/final"
  - name: "NIST: National Software Reference Library (NSRL)"
    url: "https://www.nist.gov/itl/csd/secure-systems-and-applications/national-software-reference-library-nsrl/about-nsrl/nsrl"
  - name: "NIST: NSRL Reference Data Set (RDS), Special Database 28"
    url: "https://data.nist.gov/pdr/lps/ark:/88434/mds01d4mwd/pdr:v/1.0.1"
  - name: "SWGDE 06-F-001: Data Integrity Within Computer Forensics"
    url: "https://www.swgde.org/documents/published-complete-listing/06-f-001-swgde-data-integrity-within-computer-forensics/"
  - name: "SWGDE 17-F-002: Best Practices for Computer Forensic Acquisitions, version 2.0, 2023"
    url: "https://www.swgde.org/wp-content/uploads/2024/03/2023-06-15-SWGDE-Best-Practices-for-Computer-Forensic-Acquisitions-17-F-002-2.0.pdf"
  - name: "OWASP Password Storage Cheat Sheet"
    url: "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html"
  - name: "NIST SP 800-63B-4: Authenticators (password storage and length)"
    url: "https://pages.nist.gov/800-63-4/sp800-63b/authenticators"
  - name: "crypt(5): storage format for hashed passphrases (libxcrypt)"
    url: "https://manpages.debian.org/trixie/libcrypt-dev/crypt.5.en.html"
  - name: "Microsoft [MS-NLMP] 3.3.1: NTLM v1 Authentication (NTOWFv1)"
    url: "https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-nlmp/464551a8-9fc4-428e-b3d3-bc5bfb2e73a5"
  - name: "NIST FIPS 186-5: Digital Signature Standard (DSS), February 2023"
    url: "https://csrc.nist.gov/pubs/fips/186-5/final"
  - name: "RFC 5280: Internet X.509 Public Key Infrastructure Certificate and CRL Profile, 2008"
    url: "https://www.rfc-editor.org/rfc/rfc5280"
  - name: "RFC 9846: The Transport Layer Security (TLS) Protocol Version 1.3, July 2026"
    url: "https://www.rfc-editor.org/rfc/rfc9846"
  - name: "Microsoft Learn: Setting the BitLocker encryption algorithm for Autopilot devices"
    url: "https://learn.microsoft.com/autopilot/bitlocker"
  - name: "Microsoft Learn: BitLocker overview"
    url: "https://learn.microsoft.com/windows/security/information-protection/bitlocker/bitlocker-overview"
  - name: "Microsoft Support: BitLocker overview (recovery key)"
    url: "https://support.microsoft.com/windows/bitlocker-overview-44c0c61c-989d-4a69-8822-b95cd49b1bbf"
  - name: "Microsoft Support: Device Encryption in Windows"
    url: "https://support.microsoft.com/en-us/windows/device-encryption-in-windows-cf7e2b6f-3e70-4882-9532-18633605b7df"
  - name: "Microsoft Learn: manage-bde status"
    url: "https://learn.microsoft.com/windows-server/administration/windows-commands/manage-bde-status"
  - name: "Apple Platform Security: Volume encryption with FileVault in macOS"
    url: "https://support.apple.com/guide/security/sec4c6dc1b6e/web"
  - name: "Apple Platform Security: Data Protection overview"
    url: "https://support.apple.com/guide/security/secf6276da8a/"
  - name: "fdesetup(8): FileVault configuration tool (macOS manual page)"
    url: "https://keith.github.io/xcode-man-pages/fdesetup.8.html"
  - name: "Red Hat: Encrypting block devices by using LUKS (RHEL 10)"
    url: "https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/10/html/managing_storage_devices/encrypting-block-devices-by-using-luks"
  - name: "cryptsetup 2.1.0 release notes (LUKS2 and XTS key size)"
    url: "https://cdn.kernel.org/pub/linux/utils/cryptsetup/v2.1/v2.1.0-ReleaseNotes"
  - name: "lsblk(8): Linux manual page"
    url: "https://www.man7.org/linux/man-pages/man8/lsblk.8.html"
  - name: "Microsoft Learn: Get-FileHash"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powershell.utility/get-filehash"
  - name: "shasum(1): Print or Check SHA Checksums (Perl documentation)"
    url: "https://perldoc.perl.org/shasum"
  - name: "md5(1): macOS manual page"
    url: "https://leancrew.com/all-this/man/man1/md5.html"
  - name: "sha256sum(1) and base64(1): Linux manual pages (GNU coreutils)"
    url: "https://man7.org/linux/man-pages/man1/base64.1.html"
  - name: "base64(1): macOS manual page"
    url: "https://www.manpagez.com/man/1/base64/"
  - name: "Chrome DevTools: Privacy and security panel"
    url: "https://developer.chrome.com/docs/devtools/security"
  - name: "Mozilla Support: checking a connection's encryption in Page Info"
    url: "https://support.mozilla.org/en-US/questions/1219496"
visuals:
  # One sentence encoded, hashed and encrypted twice. All values are real; the AES key was random and thrown away.
  three:
    kind: window
    title: "„Pay 100 to Alex” na trzy sposoby"
    head: ["Co zrobiono", "Co wyszło"]
    rows:
      - ["Zakodowano (Base64)", "<code>UGF5IDEwMC<wbr>B0byBBbGV4</code>. Każdy może to odwrócić: klucza nie ma."]
      - ["Policzono skrót (SHA-256)", "<code>657e378217ecbe4f<wbr>a16ef40902d325bc<wbr>59093cfba3c676be<wbr>57a28247fbec646d</code>. Nie da się tego odwrócić. Te 15 znaków za każdym razem daje dokładnie ten skrót."]
      - ["Zaszyfrowano (AES-256-GCM)", "<code>gFoxFkKkTyGUfQTr<wbr>LZvz0k0DfWS5P4AQ<wbr>aY7ZIEbxtEvCjGe9<wbr>7P/7YA4iMA==</code> (pokazane w Base64). Odwrócić to może tylko klucz."]
      - ["Zaszyfrowano ponownie tym samym kluczem", "<code>/cCHaA0Is4ysXM24<wbr>oA2uK1nQ66uaCDMP<wbr>FaBttnl8IokvUlee<wbr>EdXh4w1RFA==</code>. Inaczej, bo każda wiadomość dostaje nowy nonce. Ten sam klucz otwiera obie."]
    mark: 3
    caption: "Zaszyfrowany wynik ma 43 bajty: 12-bajtowy nonce, 15 zaszyfrowanych bajtów zdania i 16-bajtowy znacznik, który wykrywa każdą zmianę. Policz skrót tego samego zdania ze znakiem nowego wiersza na końcu, jaki dodaje <code>echo</code>, a wyjdzie zupełnie inny."
  # The shapes of common hashes. Hex ones are of the note in Try it yourself; the rest are of the made-up password Winter2026!
  shapes:
    kind: window
    title: "Jaki to skrót? (zmyślone)"
    head: ["Jak wygląda", "Co to jest"]
    rows:
      - ["32 znaki hex", "MD5 albo skrót NT z Windows, który ma taką samą długość: <code>d08ad59cce6e7f47<wbr>84a80da330fbfff0</code>"]
      - ["40 znaków hex", "SHA-1: <code>ee009c388a1ece97<wbr>51379b20687e8c9a<wbr>7277a2fe</code>"]
      - ["64 znaki hex", "SHA-256 albo rzadszy SHA3-256: <code>e0b2c4d048c516fc<wbr>d09ea13cfb7196b5<wbr>88459725dd5a369d<wbr>8c14cc3c950f7f6a</code>"]
      - ["Zaczyna się od <code>$2b$</code>", "bcrypt. <code>12</code> to jego koszt; każdy krok w górę podwaja pracę: <code>$2b$12$lx2E1vp4<wbr>ViCa7vhtzJ2N4.…</code>"]
      - ["Zaczyna się od <code>$argon2id$</code>", "Argon2id z ustawieniami na widoku: <code>m=19456,t=2,p=1</code> to 19 MiB pamięci, 2 przebiegi, 1 wątek"]
      - ["Zaczyna się od <code>$y$</code>", "yescrypt, z linuksowego <code>/etc/shadow</code>: <code>$y$j9T$2BtnQ2gC<wbr>uVB5oDltIucvI0$…</code>"]
      - ["Zaczyna się od <code>$6$</code>", "SHA-512 crypt, ze starszych systemów Linux"]
    caption: "W formatach haseł sól stoi wprost w ciągu, między znakami <code>$</code>. Nie jest tajna; musi tylko być inna dla każdego konta. Przykłady hex to skróty notatki z części „Spróbuj samodzielnie”, reszta to skróty zmyślonego hasła <code>Winter2026!</code>."
  # How a signature is made and checked.
  signature:
    kind: route
    stages:
      - where: "Podpisywanie"
        steps: ["Program podpisującego liczy skrót pliku, na przykład SHA-256", "Podpisuje ten skrót kluczem prywatnym podpisującego", "Podpis wędruje razem z plikiem, zwykle razem z certyfikatem podpisującego"]
      - where: "Sprawdzanie"
        steps: ["Twój komputer liczy skrót otrzymanego pliku", "Sprawdza podpis względem tego skrótu kluczem publicznym podpisującego z certyfikatu", "Pasują: plik jest niezmieniony i podpisano go właśnie tym kluczem prywatnym"]
    caption: "Zmień jeden bajt pliku, a skróty się rozjadą i sprawdzenie się nie uda. Bez klucza prywatnego nikt nie zrobi podpisu, który będzie pasował."
  # The main fields of a website's certificate.
  cert:
    kind: window
    title: "Certyfikat witryny (zmyślony)"
    head: ["Pole", "Wartość"]
    rows:
      - ["Subject", "CN=shop.example"]
      - ["Subject Alternative Name", "DNS:<wbr>shop.example, DNS:<wbr>www.shop.<wbr>example"]
      - ["Issuer", "CN=Example Issuing CA 1, O=Example Trust"]
      - ["Validity", "Not Before 1 listopada 2026, Not After 30 kwietnia 2027 (180 dni)"]
      - ["Public key", "ECDSA na krzywej P-256"]
      - ["Serial number", "4F:1C:9A:07:…, unikalny wśród certyfikatów tego wystawcy"]
      - ["Signature", "ECDSA z SHA-384, od Example Issuing CA 1"]
      - ["SHA-256 fingerprint", "Skrót całego certyfikatu, liczony przez przeglądarkę certyfikatów"]
    mark: 2
    caption: "Przeglądarka sprawdza, czy wpisana nazwa jest w Subject Alternative Name, czy dzisiejsza data mieści się między dwiema datami i czy podpis wystawcy jest ważny. Odcisk (fingerprint) nie jest częścią certyfikatu: liczy go program, w którym go oglądasz, i po nim ludzie odróżniają dwa certyfikaty."
  # The chain from a website up to a root in the trust store.
  chain:
    kind: cards
    layout: rows
    cards:
      - title: "Główny CA"
        text: "Sam podpisuje swój certyfikat. Ma zaufanie, bo jest wbudowany w system operacyjny lub przeglądarkę, w magazyn zaufanych certyfikatów."
        tags: ["z magazynu zaufania"]
      - title: "Pośredni CA"
        text: "Jego certyfikat podpisał główny. Na co dzień podpisuje certyfikaty witryn."
        tags: ["wysyła serwer"]
      - title: "Certyfikat witryny"
        text: "Podpisany przez pośredni. Nazywa witrynę i zawiera jej klucz publiczny."
        tags: ["wysyła serwer", "shop.example"]
    caption: "Przeglądarka sprawdza każdy podpis kluczem z certyfikatu poziom wyżej, aż do głównego, któremu już ufa. Jedno zerwane ogniwo i cały łańcuch nie przechodzi."
  # A TLS 1.3 connection from the first message to the first request.
  tls:
    kind: route
    stages:
      - where: "Powitanie"
        steps: ["Przeglądarka wysyła ClientHello: swoje wersje TLS, zestawy szyfrów, udziały klucza (key shares) i nazwę witryny"]
      - where: "Wymiana kluczy"
        steps: ["Serwer odpowiada ServerHello: wybranym zestawem szyfrów i własnym udziałem klucza", "Obie strony liczą ten sam sekret. Wszystko od tej chwili jest zaszyfrowane"]
      - where: "Dowód"
        steps: ["Serwer wysyła łańcuch certyfikatów", "Podpisuje dotychczasowe uzgadnianie swoim kluczem prywatnym (CertificateVerify)", "Przeglądarka sprawdza łańcuch i podpis"]
      - where: "Dane"
        steps: ["Obie strony wysyłają Finished, kontrolę z kluczem nad całym uzgadnianiem", "Żądania i strony płyną zaszyfrowane AES-GCM albo ChaCha20-Poly1305"]
    caption: "Jedna wymiana tam i z powrotem i przeglądarka może wysłać żądanie. Jest tu każda idea z tej strony: wymiana kluczy, podpis, skróty, certyfikaty i szyfrowanie symetryczne."
  # Full-disk encryption on the three systems.
  disk:
    kind: cards
    layout: rows
    cards:
      - title: "BitLocker"
        text: "Windows. Domyślnie XTS-AES 128. Przy starcie odblokowuje go TPM; gdy to się nie uda, otwiera go 48-cyfrowe hasło odzyskiwania."
        tags: ["manage-bde -status"]
      - title: "FileVault"
        text: "macOS. AES-XTS. Wiąże klucz dysku z hasłem użytkownika."
        tags: ["fdesetup status"]
      - title: "LUKS2"
        text: "Linux. Domyślnie aes-xts-plain64 z 512-bitowym kluczem: AES-256 w trybie XTS. Każde hasło lub plik z kluczem otwiera go samodzielnie."
        tags: ["lsblk -f"]
    caption: "Wszystkie trzy używają XTS, trybu stworzonego dla dysków. Wszystkie trzy chronią wyłączony komputer i żaden nie chroni takiego, który działa i jest odblokowany."
  quiz:
    kind: questions
    items:
      - q: "Skrypt zawiera <code>password = cGFzc3dvcmQxMjM=</code>, a autor twierdzi, że hasło jest zaszyfrowane. Czy tak jest?"
        a: "Nie. Znak <code>=</code> na końcu i alfabet z liter i cyfr zdradzają Base64: ciąg dekoduje się do <code>password123</code> bez żadnego klucza. Kodowanie zmienia tylko alfabet. Zgłoś to jako hasło zapisane jawnym tekstem i wynieś sekret ze skryptu."
      - q: "Na stronie pobierania obok pliku jest ciąg 40 znaków hex. Jaki to skrót i ile dowodzi zgodność?"
        a: "SHA-1 (160 bitów, 40 znaków hex). Zgodność pokazuje, że plik nie uszkodził się po drodze. Nie pokazuje, kto go zrobił: kto może podmienić plik na tej stronie, podmieni też skrót. Więcej dowodzi podpis albo SHA-256 opublikowany tam, gdzie atakujący nie sięgnie."
      - q: "Chcesz wysłać Annie sekret za pomocą kryptografii z kluczem publicznym. Czyjego klucza użyjesz? A żeby udowodnić, że wiadomość jest od ciebie?"
        a: "Do sekretu: klucza publicznego Anny, żeby otworzyć go mógł tylko jej klucz prywatny. Do dowodu: własnego klucza prywatnego, żeby podpisać; Anna sprawdzi podpis twoim kluczem publicznym. W praktyce krok z kluczem publicznym chroni tylko nowy klucz symetryczny, a samą wiadomość szyfruje AES."
      - q: "Dwie osoby z firmy mają hasło <code>Winter2026!</code>. Czy ich skróty są takie same w bazie, która używa Argon2id? A w SAM w Windows?"
        a: "W Argon2id nie, bo każde konto ma własną losową sól. W SAM tak, bo skrót NT to MD4 z hasła bez soli, więc to samo hasło daje ten sam skrót na każdym komputerze z Windows. To jeden z powodów, dla których skradzione skróty NT łamie się tak szybko."
      - q: "Dlaczego witryna przechowuje hasła za pomocą Argon2id albo bcrypt, a nie SHA-256?"
        a: "SHA-256 zaprojektowano jako szybki, więc kto ukradnie skróty, może sprawdzać ogromną liczbę prób na sekundę. Funkcje do haseł są celowo wolne, mają parametr kosztu, który z czasem można podnosić, i używają soli, więc każda próba kosztuje dużo więcej i trzeba ją powtarzać dla każdego konta osobno."
      - q: "Atakujący nagrywa dziś twój ruch TLS 1.3, a za rok kradnie klucz prywatny serwera. Czy odczyta nagranie?"
        a: "Nie. TLS 1.3 robi nową wymianę kluczy przy każdym połączeniu i wyrzuca klucze: klucz prywatny serwera tylko podpisuje uzgadnianie. To poufność przekazywania (forward secrecy). Przyszły komputer kwantowy mógłby zaatakować samą wymianę kluczy, dlatego przeglądarki już dodają do niej ML-KEM (X25519MLKEM768)."
      - q: "Co HTTPS ukrywa przed kimś, kto podgląda sieć w kawiarni, a co ta osoba nadal widzi?"
        a: "Ukryte: strony, pełne adresy za nazwą witryny, ciasteczka, hasła i wszystko, co wysyłasz. Widoczne: adresy IP, czas połączenia, ile danych poszło w każdą stronę i zwykle nazwa witryny, z DNS i z powitania TLS, chyba że i one są zaszyfrowane."
      - q: "W trakcie dochodzenia znaleziono działający i odblokowany laptop z BitLockerem. Dlaczego nie warto po prostu go wyłączyć i zabrać dysku?"
        a: "Dopóki działa, dysk da się czytać, a klucze są w pamięci. Po wyłączeniu dysk staje się szyfrogramem i potrzebne jest hasło odzyskiwania. SWGDE zauważa, że akwizycja na żywo może być jedyną szansą na dane, a zrzut pamięci na początku może dać klucze. Z TPM dysk jest też związany z tym komputerem. Postępuj według swojej procedury."
      - q: "Skrót weryfikacyjny obrazu dysku nie zgadza się ze skrótem z akwizycji. Co to znaczy i co zrobić?"
        a: "Obraz nie jest dokładną kopią tego, co odczytano, więc nie można go używać jako kopii. Zapisz to, poszukaj przyczyny w logach (błędy odczytu, psujący się dysk, złe połączenie) i wykonaj akwizycję ponownie. Dopiero para zgodnych skrótów pozwala później stwierdzić, że każdy bit jest ten sam."
      - q: "Aplikacja ma ważny podpis od znanego wydawcy. Czy można ją bezpiecznie uruchomić?"
        a: "Niekoniecznie. Podpis dowodzi, kto podpisał i że od tamtej pory nic się nie zmieniło. Nic nie mówi o tym, czy aplikacja jest nieszkodliwa: wydawca może podpisać złą aktualizację, a skradziony klucz do podpisywania też daje ważne podpisy."
---

## Krótko

Wyobraź sobie, że wysyłasz pocztą coś cennego.

- **Skrzynka z dwoma identycznymi kluczami**, jeden u ciebie, drugi u adresata: **szyfrowanie symetryczne**. Jest
  szybkie, ale najpierw trzeba przekazać drugi klucz tak, żeby nikt nie dorobił kopii.
- **Otwarta kłódka, którą może mieć każdy**, a jedyny klucz do niej zostaje u właściciela: **szyfrowanie
  asymetryczne** (z kluczem publicznym). Każdy może nią zamknąć skrzynkę dla właściciela; otworzyć ją może tylko
  właściciel.
- **Odcisk palca listu**: **skrót** (hash). Ten sam list zawsze zostawia ten sam odcisk, zmieniony list inny, a z
  odcisku nikt listu nie odtworzy.
- **Lakowa pieczęć odciśnięta twoim sygnetem**: **podpis cyfrowy**. Każdy sprawdzi, że pieczęć jest twoja i cała;
  odcisnąć ją może tylko twój sygnet.
- **Paszport** z pieczęcią urzędu, któremu wszyscy ufają: **certyfikat**. Mówi, czyja kłódka jest czyja.
- **Kurier**, który sprawdza paszport, za pomocą kłódek przygotowuje nową skrzynkę i dalej przewozi wszystko w niej:
  **TLS**, ochrona, na której opiera się HTTPS.
- A **przepisanie listu innym alfabetem**, jak alfabetem Morse'a, to **kodowanie** (Base64, hex). Wygląda na
  zaszyfrowane, ale każdy z tabelką to przeczyta: klucza nie ma wcale.

<mark>Szyfrowanie ukrywa dane przed każdym, kto nie ma klucza, a z kluczem da się je cofnąć. Haszowanie zamienia dane w
krótki odcisk, którego nie da się cofnąć. Podpis dowodzi, kto coś zrobił i że nikt tego nie zmienił. Kodowanie
zmienia tylko alfabet. Gdy wiesz, czego użyto, na czym i kto ma klucze, wiesz, co jest chronione, a co
nie.</mark> Praca w bezpieczeństwie styka się z tym wszystkim codziennie: w skrótach plików, bazach haseł,
certyfikatach, ruchu HTTPS i zaszyfrowanych dyskach.

Po lekturze tej strony będziesz umieć:

- odróżnić kodowanie, szyfrowanie i haszowanie i rozpoznać każde po wyglądzie;
- wyjaśnić szyfrowanie symetryczne i asymetryczne, dlaczego prawdziwe systemy łączą oba i jakich algorytmów oraz
  długości kluczy używa się dziś;
- rozpoznać MD5, SHA-1 i SHA-256 po długości, powiedzieć, do czego każdy jeszcze się nadaje, i sprawdzić skrót pliku;
- wyjaśnić, dlaczego hasła przechowuje się jako wolne skróty z solą, i rozpoznać popularne formaty skrótów haseł;
- powiedzieć, czego dowodzą podpis cyfrowy i certyfikat i jak przeglądarka sprawdza łańcuch certyfikatów;
- przejść krok po kroku przez połączenie TLS 1.3 i powiedzieć, co ukrywa, a co zostawia widoczne;
- wyjaśnić, przed czym chroni szyfrowanie dysku, a przed czym nie, i dlaczego to ważne, gdy zabezpiecza się komputer;
- wyjaśnić, jak śledczy dowodzą skrótami, że kopia dowodów jest dokładna.

## Słowa, które się przydadzą

- **Tekst jawny i szyfrogram:** dane, które da się przeczytać, i nieczytelny wynik ich zaszyfrowania.
- **Klucz:** tajna wartość, która zamienia tekst jawny w szyfrogram i z powrotem. Metoda jest publiczna; tajny jest
  tylko klucz.
- **Algorytm (szyfr):** opublikowana metoda, na przykład AES. Jego bezpieczeństwo opiera się na kluczu, a nie na
  ukrywaniu, jak działa.
- **Długość klucza:** rozmiar klucza w bitach. Klucz 128-bitowy ma 2¹²⁸ możliwych wartości, liczbę o 39 cyfrach.
- **System szesnastkowy (hex):** zapis bajtów cyframi 0–9 i literami a–f. Każdy znak hex oznacza 4 bity, więc jeden
  bajt zajmuje dwa znaki.
- **Nonce:** „liczba użyta raz” (number used once), nowa wartość dodawana do każdego szyfrowania, żeby ta sama
  wiadomość nigdy nie szyfrowała się dwa razy tak samo.

## Kodowanie, szyfrowanie i haszowanie

Trzy rzeczy, które na ekranie wyglądają podobnie, a wykonują zupełnie różną pracę:

| | Kodowanie | Szyfrowanie | Haszowanie |
|---|---|---|---|
| Przykłady | Base64, hex, kodowanie URL | AES, ChaCha20 | SHA-256, MD5 |
| Potrzebny klucz? | Nie | Tak | Nie |
| Da się cofnąć? | Każdy to zrobi | Tylko z kluczem | Nie |
| Wynik | Dłuższy niż dane wejściowe | Mniej więcej tak długi jak dane, trochę dłuższy | Zawsze tej samej długości |
| Do czego | Przenoszenie danych przez systemy zbudowane dla tekstu | Utrzymanie danych w tajemnicy | Sprawdzanie, że dane się nie zmieniły, rozpoznawanie plików |

<!-- pic: three -->

**Base64** (RFC 4648) zapisuje dowolne bajty 64 bezpiecznymi znakami: A–Z, a–z, 0–9, `+` i `/`, a `=` na końcu
służy za dopełnienie. Każde 3 bajty stają się 4 znakami, więc wynik jest mniej więcej o jedną trzecią dłuższy od
oryginału. Używa się go wszędzie tam, gdzie dane binarne muszą przejść przez coś zbudowanego dla tekstu. **Hex** (w
tym samym RFC to Base16) zapisuje każdy bajt dwoma znakami i tak zwykle pokazuje się skróty.

> [!WARNING]
> Kodowanie to nie ochrona. Hasło „ukryte” w Base64 w pliku konfiguracyjnym lub skrypcie jest tak samo czytelne jak
> jawny tekst dla każdego, kto je zdekoduje. Jeśli ktoś nazywa Base64 „szyfrowaniem”, to jest ustalenie do raportu.

Atakujący używają kodowania, żeby ukrywać się na widoku. Parametr PowerShella `-EncodedCommand` uruchamia polecenie
zapisane w Base64 (z tekstu polecenia w UTF-16LE), więc długi ciąg liter po `-EncodedCommand` albo jego skróconej
formie na liście procesów lub w logu to polecenie do zdekodowania, a nie szum. Microsoft opisuje, jak dekodować takie
polecenia z działających procesów, a narzędzia takie jak CyberChef robią to w przeglądarce.

## Szyfrowanie symetryczne: jeden wspólny klucz

W **szyfrowaniu symetrycznym** ten sam klucz zamyka i otwiera. Jest dość szybkie, żeby szyfrować całe dyski i każdy
pakiet rozmowy wideo, więc wykonuje prawie całe faktyczne szyfrowanie, jakie spotkasz.

### AES i ChaCha20

**AES** (Advanced Encryption Standard) to ten, który trzeba znać. NIST opublikował go jako FIPS 197 w listopadzie
2001 roku po otwartym konkursie, a w maju 2023 roku zaktualizował dokument bez zmiany algorytmu. AES działa na
blokach po 128 bitów (16 bajtów) z kluczami 128-, 192- lub 256-bitowymi: to właśnie oznaczają AES-128, AES-192 i
AES-256. Zatwierdzone są wszystkie trzy.

**ChaCha20-Poly1305** (RFC 8439) to główna alternatywa. Według jego RFC na urządzeniach bez specjalnego sprzętowego
wsparcia dla AES jest mniej więcej trzy razy szybszy od AES i jest jednym z trzech zestawów szyfrów, które oferuje
TLS 1.3.

Wycofane szyfry, które wciąż spotkasz w starych systemach i starych raportach: **DES** i **Triple DES (3DES)**. NIST
dopuszczał 3DES tylko do końca 2023 roku.

### Tryby: jak szyfr blokowy radzi sobie z więcej niż jednym blokiem

Sam AES szyfruje dokładnie 16 bajtów. **Tryb pracy** decyduje, co zrobić z dłuższymi danymi, i znaczy tyle samo co
sam szyfr:

- **ECB** szyfruje każdy blok osobno, więc identyczne bloki tekstu jawnego dają identyczne bloki szyfrogramu i wzory
  prześwitują. Projekt SP 800-131A od NIST (2024) proponuje zakazać ECB do utrzymywania danych w tajemnicy.
- **GCM** (NIST SP 800-38D, 2007) to **szyfrowanie uwierzytelnione**: szyfruje i dodaje krótki **znacznik** (tag),
  więc każda zmiana szyfrogramu jest wykrywana, a odszyfrowanie się nie udaje, zamiast zwrócić podrobione dane. Przy
  każdej wiadomości z tym samym kluczem potrzebuje nowego nonce. ChaCha20-Poly1305 działa tak samo, a jego RFC nazywa
  niepowtarzalny nonce najważniejszą kwestią bezpieczeństwa: użyj go ponownie, a ochrona przestaje działać.
- **XTS** (NIST SP 800-38E, 2010) stworzono dla dysków. Dodaje do szyfrowania pozycję każdego bloku na dysku, więc te
  same dane w dwóch miejscach wyglądają inaczej. Utrzymuje dane w tajemnicy, ale, jak zaznacza NIST, ich nie
  uwierzytelnia: nie ma znacznika, który wykryłby zmiany.

> [!TIP]
> Przy przeglądach kodu i konfiguracji patrz na tryb, nie tylko na „AES”. `AES-256-GCM` jest w porządku,
> `AES-128-ECB` nie, choć w obu jest napisane AES.

### Haczyk: jak podzielić się kluczem

Obie strony potrzebują tego samego klucza, a każdy z jego kopią przeczyta wszystko. Wysłanie klucza przez sieć, którą
próbujesz chronić, mija się z celem. Do lat 70. jedyną odpowiedzią było uzgodnienie kluczy z góry, przez kuriera lub
osobiście.

## Szyfrowanie asymetryczne: para kluczy

W 1976 roku Whitfield Diffie i Martin Hellman opublikowali artykuł „New Directions in Cryptography”, który wprowadził
**kryptografię z kluczem publicznym** i podpisy cyfrowe; przyniósł im Nagrodę Turinga za 2015 rok. W 1977 roku Ron
Rivest, Adi Shamir i Leonard Adleman z MIT zbudowali **RSA**, system, dzięki któremu ten pomysł zadziałał w praktyce,
i w 2002 roku dostali Nagrodę Turinga.

Każdy, kto z niej korzysta, ma **parę kluczy**:

- **klucz publiczny**, którym można dzielić się z każdym, nawet opublikować go w internecie;
- **klucz prywatny**, który nigdy nie opuszcza właściciela.

Oba klucze łączy matematyka, a z klucza publicznego nie da się wyliczyć prywatnego. Stąd dwa zadania:

| Żeby… | używasz… | aby… |
|---|---|---|
| wysłać Annie sekret | **publicznego** klucza Anny | otworzyć go mógł tylko prywatny klucz Anny |
| coś podpisać | własnego **prywatnego** klucza | każdy mógł to sprawdzić twoim kluczem publicznym |
| sprawdzić podpis Anny | **publicznego** klucza Anny | wiedzieć, że mógł go złożyć tylko jej klucz prywatny |

### Wymiana kluczy: uzgodnienie sekretu przy wszystkich

**Wymiana kluczy Diffiego-Hellmana** pozwala dwóm stronom, które nigdy się nie spotkały, uzgodnić wspólny sekret
przez otwarte łącze. Każda wybiera prywatną liczbę i wysyła drugiej wartość z niej utworzoną; potem każda łączy
wartość od drugiej strony z własną prywatną liczbą. Obie dochodzą do tego samego sekretu, a ktoś, kto widział
wszystko, co wysłały, nie potrafi go wyliczyć. Na krzywych eliptycznych nazywa się to **ECDHE**: ostatnie E oznacza
ephemeral (tymczasowy), nową parę kluczy przy każdym połączeniu, na przykład na krzywej X25519.

### Szyfrowanie hybrydowe: jak robią to prawdziwe systemy

Matematyka klucza publicznego jest wolna i radzi sobie tylko z małymi ilościami danych, więc nikt nie szyfruje całego
pliku ani strony internetowej bezpośrednio RSA. Prawdziwe systemy łączą oba rodzaje:

1. Kryptografia z kluczem publicznym uzgadnia nowy losowy klucz symetryczny albo go przenosi.
2. AES lub ChaCha20 szyfruje tym kluczem właściwe dane.

Tak działa TLS i tak samo szyfrowana poczta.

### Długości kluczy: co znaczy „wystarczająco silny”

Kluczy symetrycznych i kluczy publicznych nie da się porównać po długości: 2048-bitowy klucz RSA jest mniej więcej
tak trudny do złamania jak 112-bitowy klucz symetryczny. Zestawienie NIST z SP 800-57:

| Poziom bezpieczeństwa | Symetryczny | RSA | Krzywa eliptyczna |
|---|---|---|---|
| 112 bitów | 3DES (wycofany) | 2048 | 224–255 |
| 128 bitów | AES-128 | 3072 | 256–383, np. P-256 |
| 192 bity | AES-192 | 7680 | 384–511 |
| 256 bitów | AES-256 | 15360 | 512 i więcej |

Klucze na krzywych eliptycznych są dużo krótsze przy tym samym poziomie. NIST akceptuje 112 bitów, a więc i
RSA-2048, do ochrony nowych danych tylko do końca 2030 roku; od 2031 minimum to 128.

### Komputery kwantowe i przejście na nowe algorytmy

Dostatecznie duży komputer kwantowy mógłby rozwiązać problemy matematyczne, na których opierają się RSA i krzywe
eliptyczne. Taki jeszcze nie istnieje, ale wszystko, co nagrano dziś, da się odszyfrować, gdy powstanie: to zagrożenie
**„zbierz teraz, odszyfruj później”** (harvest now, decrypt later). Szyfry symetryczne i skróty są dotknięte dużo
słabiej: NIST nie wymaga odchodzenia od AES ani od skrótów SHA-2.

13 sierpnia 2024 roku NIST zatwierdził pierwsze standardy postkwantowe: FIPS 203 (**ML-KEM**, do uzgadniania kluczy)
oraz FIPS 204 (**ML-DSA**) i FIPS 205 (**SLH-DSA**), oba do podpisów. Jego plan przejścia, NIST IR 8547 (październik
2026), uznaje algorytmy RSA i krzywych eliptycznych za przestarzałe po 2030 roku i zakazuje ich po 2035.

Sieć nie czeka. Przeglądarki już łączą stare i nowe w **hybrydowej** wymianie kluczy **X25519MLKEM768** (X25519 i
ML-KEM razem, więc połączenie pozostaje bezpieczne, dopóki trzyma się choć jeden z nich). Chrome używa jej domyślnie
od wersji 131 z listopada 2024 roku, a IETF opisała ją w standardzie RFC 10024 w sierpniu 2026. W kwietniu 2026 roku
Cloudflare podał, że w ten sposób chronione jest ponad 65% ruchu od ludzi do jego sieci. Postkwantowe podpisy i
certyfikaty są dalej w tyle.

## Skróty: odciski palców dla danych

**Kryptograficzna funkcja skrótu** zamienia dowolną ilość danych, słowo albo cały dysk 2 TB, w krótką wartość o
stałej długości: **skrót** (hash), nazywany też digestem. Dobre funkcje skrótu mają cztery cechy:

1. **Te same dane, ten sam skrót:** za każdym razem, na każdym komputerze.
2. **Każdą zmianę widać:** zmień jeden bit danych, a skrót zmieni się całkowicie.
3. **Jednokierunkowość:** ze skrótu nie da się wrócić do danych.
4. **Odporność na kolizje:** praktycznie nie da się znaleźć dwóch różnych danych o tym samym skrócie.

### Te, które spotkasz

| Skrót | Standard | Bity | Znaki hex | Stan |
|---|---|---|---|---|
| MD5 | RFC 1321, 1992 | 128 | 32 | Kolizje od 2004 roku. Nie do podpisów; nadal dobry do wykrywania przypadkowych zmian |
| SHA-1 | FIPS 180-1, 1995 | 160 | 40 | Kolizję pokazano w 2017 roku. NIST chce się go pozbyć do końca 2030 |
| SHA-256 | FIPS 180-4 (SHA-2) | 256 | 64 | Aktualny. Domyślny w Get-FileHash w Windows |
| SHA-512 | FIPS 180-4 (SHA-2) | 512 | 128 | Ta sama rodzina, dłuższy |
| SHA3-256 | FIPS 202 (SHA-3) | 256 | 64 | Inna konstrukcja, zatwierdzona jako alternatywa dla SHA-2 |

Policzenie znaków to najszybszy sposób, żeby zgadnąć, co masz przed sobą: 32 to MD5, 40 to SHA-1, 64 to SHA-256.
Długość mówi jednak o rozmiarze, a nie o algorytmie: skrót NT hasła w Windows też ma 32 znaki hex, a SHA3-256 też 64.

### Co oznacza kolizja

23 lutego 2017 roku Google i CWI Amsterdam opublikowały **SHAttered**: dwa różne pliki PDF o tym samym skrócie SHA-1.
Znalezienie ich wymagało 9 223 372 036 854 775 808 obliczeń SHA-1, mniej więcej 6 500 lat pracy jednego procesora
plus 110 lat jednego GPU, a mimo to ponad 100 000 razy mniej niż zgadywanie na ślepo.

Dlaczego to ważne: podpis składa się na skrócie. Jeśli dwa dokumenty mają ten sam skrót, podpis pod niewinnym pasuje
też do szkodliwego. Dlatego MD5 i SHA-1 nie wolno używać tam, gdzie ktoś mógłby z góry przygotować taką parę: w
podpisach, certyfikatach, wszędzie, na co atakujący może wpłynąć. RFC 6151 mówi dokładnie to o MD5.

Do czego nadal się nadają: do zauważania przypadkowych zmian, takich jak uszkodzone pobieranie albo psujący się dysk.
Znane ataki tworzą dwa nowe pliki pasujące do siebie nawzajem; dopasowanie pliku do skrótu, który ktoś już zapisał,
nadal jest daleko poza zasięgiem: RFC 6151 ocenia najlepszy taki atak na MD5 na mniej więcej 2¹²³ kroków.

### Gdzie pojawiają się skróty

- **Sprawdzanie pobranych plików:** wydawcy podają SHA-256 obok pliku; liczysz go samodzielnie i porównujesz.
- **Nazywanie plików:** skrót pliku się nie zmienia, jakkolwiek plik się nazywa, więc raporty o zagrożeniach i bazy
  złośliwego oprogramowania oznaczają próbki ich SHA-256.
- **Odkładanie znanych plików:** National Software Reference Library (NSRL) prowadzona przez NIST bezpłatnie
  publikuje skróty znanych plików programów cztery razy w roku. Śledczy wczytują ją, żeby odsiać pliki systemu
  operacyjnego i programów, których nie trzeba przeglądać. „Znany” nie znaczy „dobry”: są tam też narzędzia hakerskie.
- **Dowód, że dowody się nie zmieniły**, zaraz dalej.
- **Hasła i podpisy**, niżej na tej stronie.

Skrót z domieszanym tajnym kluczem to **HMAC** (FIPS 198-1): utworzyć go lub sprawdzić może tylko ten, kto ma klucz.
API używają HMAC, żeby udowodnić, że żądanie wysłał ktoś z kluczem i że po drodze nikt go nie zmienił.

### Skróty jako pieczęcie na dowodach

Kiedy śledczy kopiują dysk, liczą jego skrót, zgodnie z wytycznymi takimi jak SWGDE:

1. **Skrót z akwizycji:** liczony w trakcie tworzenia obrazu, z danych w miarę ich odczytu.
2. **Skrót weryfikacyjny:** liczony ponownie z gotowego obrazu, zanim ktokolwiek zacznie go analizować. Jeśli oba się
   zgadzają, obraz jest dokładną kopią tego, co odczytano.
3. **Ponowny skrót na koniec:** pokazuje, że obraz nie zmienił się w trakcie badania, i pozwala każdemu sprawdzić
   później, że nadal jest wierną kopią oryginału.

SWGDE wymaga algorytmu skrótu zatwierdzonego przez NIST. W logu z tworzenia obrazu często widać dwa skróty, starszy,
taki jak MD5, obok SHA-256: pierwszy do porównań ze starszymi zapisami i narzędziami, drugi dla siły.

> [!NOTE]
> Zgodny skrót dowodzi, że kopia jest identyczna. O treści niczego nie dowodzi: ani tego, kto umieścił tam pliki, ani
> tego, czy mówią prawdę.

## Przechowywanie haseł: wolne skróty z solą

Witryna nie powinna umieć podać ci twojego hasła, tylko je sprawdzić. Dlatego hasła się **haszuje, a nie szyfruje**:
gdy się logujesz, witryna liczy skrót tego, co wpisano, i porównuje wynik z zapisanym skrótem.

Zwykły SHA-256 to jednak złe narzędzie. Zaprojektowano go jako szybki, więc kto ukradnie skróty, może sprawdzać
ogromną liczbę prób na sekundę na własnych komputerach: to **łamanie offline**, jeden z
[ataków na hasła](/pl/roadmap/topics/common-attacks/#ataki-na-hasła). Naprawiają to dwie rzeczy:

- **Sól:** losowa wartość, inna dla każdego konta, dodawana przed haszowaniem i zapisywana obok skrótu. Dwie osoby z
  tym samym hasłem dostają różne skróty, a tablice z góry policzonych skrótów (tablice tęczowe) stają się bezużyteczne.
  NIST SP 800-63B-4 wymaga soli o długości co najmniej 32 bitów.
- **Powolność:** funkcja haszowania haseł jest celowo kosztowna, z parametrem **kosztu**, który można podnosić, gdy
  komputery przyspieszają. NIST mówi, że koszt ma być tak wysoki, jak to praktycznie możliwe; OWASP radzi, żeby jeden
  skrót wciąż zajmował mniej niż sekundę.

Zalecenia OWASP, od najlepszego:

| Algorytm | Minimalne ustawienia OWASP | Kiedy |
|---|---|---|
| Argon2id | 19 MiB pamięci, 2 przebiegi, 1 wątek | Pierwszy wybór |
| scrypt | N=2¹⁷ (128 MiB), r=8, p=1 | Gdy Argon2id jest niedostępny |
| bcrypt | Koszt 10 | Tylko starsze systemy. Większość implementacji czyta tylko pierwsze 72 bajty hasła |
| PBKDF2 | 600 000 rund HMAC-SHA-256 | Gdy wymagana jest zgodność z FIPS-140 |

NIST radzi też **pieprz** (pepper): jeszcze jeden krok z tajnym kluczem przechowywanym osobno od bazy danych,
najlepiej w sprzęcie, żeby sama skradziona baza nie wystarczyła do zgadywania.

<!-- pic: shapes -->

W Linuksie `/etc/shadow` przechowuje skróty właśnie w takich formatach: metodę, jej ustawienia, sól i skrót w jednym
ciągu, rozdzielone `$`. Obecny Debian używa yescrypt (zobacz [Podstawy Linuksa](/pl/roadmap/topics/linux-basics/#konta-to-wiersze-w-pliku-tekstowym)). Windows jest tu
wyjątkiem. **Skrót NT** w SAM (zobacz [Podstawy Windows](/pl/roadmap/topics/windows-basics/#konta-grupy-i-sid-y)) to MD4 z tekstu hasła w UTF-16, bez soli
i bez parametru kosztu. To samo hasło daje ten sam skrót NT na każdym komputerze z Windows, a liczy się go szybko,
dlatego skradzione skróty NT łamie się tak szybko.

> [!NOTE]
> Haszowanie chroni zapisane hasła, a nie słabe. Wolny skrót z solą z `Winter2026!` i tak padnie przed dobrą listą
> prób. NIST wymaga co najmniej 15 znaków od hasła używanego samodzielnie, bez MFA.

## Podpisy cyfrowe: kto to zrobił i że nic się nie zmieniło

**Podpis cyfrowy** dowodzi naraz dwóch rzeczy: dane nie zmieniły się od podpisania (**integralność**) i podpisał je
ten, kto ma określony klucz prywatny (**autentyczność**). Ponieważ tylko podpisujący ma ten klucz, trudno mu potem
zaprzeczyć, że podpisał (**niezaprzeczalność**), o ile klucza strzeżono.

<!-- pic: signature -->

Standard podpisu cyfrowego NIST, FIPS 186-5 (3 lutego 2023 roku), zatwierdza trzy algorytmy: **RSA**, **ECDSA** i
**EdDSA** (np. Ed25519), ten ostatni nowy w tej wersji. Starszy DSA zostawiono tylko do sprawdzania istniejących
podpisów. ML-DSA i SLH-DSA to postkwantowe podpisy, które przyjdą potem.

Podpisy spotkasz:

- **na programach i aktualizacjach:** systemy operacyjne sprawdzają podpisy aplikacji, sterowników i aktualizacji, a
  menedżery pakietów w Linuksie podpis każdego pakietu;
- **na certyfikatach**, które podpisuje urząd, który je wydał;
- **w TLS**, gdzie serwer podpisuje uzgadnianie, żeby udowodnić, że ma klucz prywatny swojego certyfikatu;
- **na dokumentach i e-mailach**, takich jak podpisane pliki PDF i podpisana poczta.

HMAC też dowodzi, że wiadomości nie zmieniono, ale utworzyć go może każdy, kto ma klucz, więc nie powie, *który* z nich
to zrobił. Podpis da się złożyć tylko kluczem prywatnym, a sprawdzić może każdy.

> [!WARNING]
> Ważny podpis mówi, kto podpisał i że od tamtej pory nic się nie zmieniło. Nie mówi, że podpisana rzecz jest
> bezpieczna: wydawca może podpisać złą aktualizację, a atakujący, który ukradnie klucz do podpisywania, też składa
> ważne podpisy.

## Certyfikaty i łańcuch zaufania

Klucz publiczny to po prostu długa liczba. Zanim zaufasz złożonemu nim podpisowi albo coś dla niego zaszyfrujesz,
musisz wiedzieć, czyj jest. Odpowiada na to **certyfikat**: mały podpisany dokument w formacie X.509 (RFC 5280),
który mówi „ten klucz publiczny należy do tej nazwy” i który podpisał **urząd certyfikacji (CA)**.

<!-- pic: cert -->

Pola, które warto znać (w przeglądarkach certyfikatów zwykle po angielsku):

- **Subject** i **Subject Alternative Name:** dla kogo jest certyfikat. Nazwy alternatywne wymieniają wszystkie nazwy
  domen, które obejmuje.
- **Issuer:** CA, który go podpisał.
- **Validity:** dwie daty, między którymi jest ważny. Publiczne certyfikaty witryn są teraz ważne najwyżej 200 dni
  (zobacz [Jak działa sieć WWW](/pl/roadmap/topics/web-basics/#czego-dowodzi-certyfikat)).
- **Public key:** klucz publiczny, za który się ręczy, i jego algorytm.
- **Serial number:** unikalny wśród certyfikatów jednego wystawcy; po nim rozpoznaje się certyfikat, gdy zostaje
  unieważniony (odwołany przed końcem ważności).
- **Signature:** podpis wystawcy nad wszystkim powyżej.

### Łańcuch

Przeglądarka nie zna wszystkich CA. Ufa zestawowi **głównych CA** (root), których certyfikaty są wbudowane w system
operacyjny lub przeglądarkę, w **magazyn zaufanych certyfikatów** (trust store). Główne CA zwykle podpisują
**pośrednie CA**, a te podpisują certyfikaty witryn.

<!-- pic: chain -->

Żeby przyjąć certyfikat witryny, przeglądarka sprawdza całą ścieżkę (RFC 5280 nazywa to walidacją ścieżki): każdy
podpis kluczem z certyfikatu poziom wyżej, daty, to, czy nazwa witryny jest wśród nazw alternatywnych, i czy
certyfikatu nie unieważniono. Jedno nieudane sprawdzenie i zamiast witryny widzisz ostrzeżenie na całą stronę.

> [!NOTE]
> Firmy prowadzą też własne prywatne CA dla wewnętrznych witryn, Wi-Fi i urządzeń. Ich certyfikatom ufa się tylko na
> komputerach, na których firma dodała swój certyfikat główny do magazynu zaufania; w ten sam sposób niektóre firmy
> sprawdzają ruch HTTPS swoich pracowników.

## TLS: wszystko działa razem

[HTTPS](/pl/roadmap/topics/web-basics/#https-bezpieczny-kanał) to HTTP wewnątrz TLS, a TLS używa każdego elementu z tej strony. Oto połączenie TLS 1.3
(RFC 9846) od pierwszej wiadomości do pierwszego zaszyfrowanego żądania:

<!-- pic: tls -->

**Zestaw szyfrów** (cipher suite) w TLS 1.3 nazywa tylko część symetryczną. `TLS_AES_128_GCM_SHA256` oznacza AES-128
w trybie GCM, a SHA-256 służy do wyprowadzania kluczy. Takich zestawów jest tylko pięć. Każda implementacja TLS 1.3
musi obsługiwać `TLS_AES_128_GCM_SHA256` i powinna obsługiwać `TLS_AES_256_GCM_SHA384` oraz
`TLS_CHACHA20_POLY1305_SHA256`. Wymianę kluczy uzgadnia się osobno, jako **grupę**: P-256 jest wymagana, X25519
zalecana, a X25519MLKEM768 to postkwantowa hybryda, którą oferują teraz Chrome, Edge i Firefox.

Dwie decyzje projektowe są ważne dla każdego, kto bada ruch sieciowy:

- **Poufność przekazywania (forward secrecy).** TLS 1.3 porzucił stare sposoby wymiany kluczy, które ponownie
  używały długoterminowego klucza serwera: każde połączenie dostaje nowe klucze, które potem się wyrzuca, a klucz
  prywatny serwera tylko podpisuje. Nagrania ruchu nie da się więc odszyfrować później nawet z kluczem prywatnym
  serwera. Potrzebne byłyby klucze tej właśnie sesji, przechwycone na jednym z końców; jak to się robi, poznasz przy
  analizie ruchu sieciowego, dalej na ścieżce.
- **Mniej jawnego tekstu.** Wszystko po ServerHello jest zaszyfrowane, więc w nagraniu ruchu widać dużo mniej niż w
  TLS 1.2: nie widać nawet certyfikatu serwera.

## Co jest chronione, a co nie

Szyfrowanie chroni dane w jednym miejscu przed określonymi osobami. Pytanie jest zawsze to samo: gdzie są teraz dane
i kto ma klucz?

| Ochrona | Chroni przed | Nie chroni przed |
|---|---|---|
| **HTTPS (TLS)**, dane w drodze | Każdym na trasie w sieci, kto chce czytać lub zmieniać ruch | Oboma końcami: serwerem, jego logami i bazą, złośliwym oprogramowaniem lub osobą przy urządzeniu. Zostawia też widoczne, kto z kim, kiedy i ile wymienia |
| **Szyfrowanie dysku**, dane w spoczynku | Kimś, kto zabierze wyłączone urządzenie lub wyjmie z niego dysk | Każdym, kto używa komputera, gdy jest włączony i odblokowany, i każdym złośliwym programem: pliki odszyfrowują się przy odczycie |
| **Wiadomości szyfrowane end-to-end** | Usługą, która je przenosi | Kimś z odblokowanym telefonem albo kopią trzymaną gdzieś bez tego szyfrowania |
| **Haszowanie haseł** | Odczytaniem skradzionej bazy jako zwykłych haseł | Słabymi hasłami, które i tak się zgaduje, oraz hasłami przechwyconymi przy wpisywaniu lub phishingiem |
| **Skrót podany obok pliku** | Przeoczeniem przypadkowej zmiany | Kimś, kto zmieni i plik, i skrót obok niego |
| **Base64 i inne kodowania** | Niczym | Każdym |

Co obserwator w sieci nadal widzi przy HTTPS i ile z tego mogą ukryć szyfrowany DNS oraz Encrypted Client Hello,
opisuje strona [Jak działa sieć WWW](/pl/roadmap/topics/web-basics/#jedna-wizyta-od-początku-do-końca).

### Szyfrowanie dysku w trzech systemach

<!-- pic: disk -->

Na wielu urządzeniach z Windows BitLocker włącza się sam jako **Device Encryption**, gdy ktoś loguje się kontem
Microsoft, służbowym lub szkolnym, a klucz odzyskiwania trafia na to konto. Na Macach z Apple silicon lub układem T2
wewnętrzny dysk jest zaszyfrowany nawet przy wyłączonym FileVault, ale wtedy jego klucz chroni tylko sprzęt: dopiero
włączenie FileVault wiąże go z hasłem użytkownika.

### Co to oznacza dla dochodzenia

Szyfrowanie dysku zmienia pierwsze minuty sprawy:

- **Włączony i odblokowany** komputer ma dysk, który da się czytać, i klucze w pamięci. SWGDE zauważa, że akwizycja
  na żywo może być jedyną okazją, żeby zdobyć dane z zaszyfrowanego systemu, a zrzut pamięci na początku może dać
  klucze. Wyciągnięcie wtyczki może zamknąć wszystko.
- **Wyłączony** zaszyfrowany komputer potrzebuje klucza: hasła odzyskiwania z katalogu firmy lub konta właściciela
  albo hasła od właściciela. Klucze odzyskiwania mogą być na samym komputerze, na nośnikach wymiennych, u dostawcy
  chmury lub w firmowym systemie zarządzania. Bez klucza dane mogą przepaść na dobre.
- Z BitLockerem i TPM dysk jest związany z tym komputerem, więc SWGDE odradza zwykłe wyjmowanie go, a zmiana
  ustawień firmware'u, takich jak Secure Boot, może sprawić, że BitLocker poprosi o klucz odzyskiwania.

Jak poprawnie sobie z tym wszystkim radzić, poznasz w temacie o pracy z zaszyfrowanymi dowodami, dalej na ścieżce.

## Jak to wygląda w pracy

Oto zmyślony log z tworzenia obrazu, taki, jaki pisze narzędzie informatyki śledczej podczas kopiowania dysku
laptopa:

```
Made-up imaging log · case 2026-117 · laptop LT-0423 · times in UTC

14:02  Source       NVMe SSD, 1,024,209,543,168 bytes, serial EX-0001
14:02  Encryption   BitLocker on volume C: (XTS-AES 128); recovery password
                    from the company directory
14:02  Write block  hardware write blocker, read-only confirmed
16:47  Acquired     LT-0423.E01, 1,024,209,543,168 bytes, 0 read errors
16:47  MD5          64a89d0f313fa6456d9f4c09dc0ca3af
16:47  SHA-256      7f8ba77c1ab8f2211754a5426e6030ef147a09f6130948c87581d7de1bbd6390
16:48  Verify       reading the image back
17:31  MD5          64a89d0f313fa6456d9f4c09dc0ca3af
17:31  SHA-256      7f8ba77c1ab8f2211754a5426e6030ef147a09f6130948c87581d7de1bbd6390
17:31  Result       verified: both hashes match
```

Czytamy po kolei:

1. **Source (źródło).** Dokładny rozmiar i numer seryjny wiążą obraz z tym jednym dyskiem.
2. **Encryption (szyfrowanie).** Wolumin C: używa BitLockera z XTS-AES 128, domyślnym w Windows. Obraz zawiera te
   zaszyfrowane bajty dokładnie takie, jakie są na dysku; żeby odczytać pliki, narzędzie do analizy będzie potrzebować
   48-cyfrowego hasła odzyskiwania. Firma miała je w swoim katalogu, do którego jej laptopy zapisują klucze
   odzyskiwania. Bez niego ten obraz byłby terabajtem szyfrogramu.
3. **Write block.** Bloker zapisu pozwala komputerowi czytać dysk, ale nie zmieniać go, więc oryginał zostaje taki,
   jaki był.
4. **16:47, skróty z akwizycji.** Policzone w trakcie odczytu: MD5 (32 znaki hex) dla starszych zapisów i narzędzi
   oraz SHA-256 (64) jako ten silny.
5. **17:31, skróty weryfikacyjne.** Narzędzie odczytało gotowy obraz jeszcze raz i ponownie policzyło skróty. Oba się
   zgadzają, więc obraz jest kopią bit po bicie tego, co odczytano. Gdyby różnił się choć jeden znak, kopii nie można
   by ufać: trzeba by to zapisać, poszukać przyczyny (błędy odczytu, psujący się dysk) i wykonać akwizycję ponownie.
6. **Co dalej.** Analiza odbywa się na kopii roboczej, a ponowne policzenie skrótu obrazu na koniec pokazuje, że nigdy
   się nie zmienił.

- **Informatyka śledcza i reagowanie na incydenty:** liczysz skrót każdego zebranego obrazu i pliku, odkładasz znane
  pliki za pomocą zestawów skrótów takich jak NSRL, rozpoznajesz znane złośliwe oprogramowanie po skrócie i planujesz
  pracę z zaszyfrowanymi dyskami, zanim dotkniesz włączonego komputera.
- **Centrum operacji bezpieczeństwa (SOC) i analiza zagrożeń:** szukasz plików po SHA-256, dekodujesz Base64 w
  wierszach poleceń i czytasz szczegóły TLS oraz certyfikaty, żeby ocenić połączenie.
- **Testy penetracyjne i red teaming:** za zgodą łamiesz zdobyte skróty haseł, żeby pokazać, jak słabe są hasła, i
  zgłaszasz przestarzały TLS, ECB, MD5 lub SHA-1 tam, gdzie coś chronią.
- **Bezpieczeństwo aplikacji i programowanie:** przechowujesz hasła z Argon2id lub bcrypt, używasz szyfrowania
  uwierzytelnionego, takiego jak AES-GCM, z dobrze sprawdzonej biblioteki i nie trzymasz kluczy w kodzie.
- **PKI, tożsamość i infrastruktura:** wydajesz i odnawiasz certyfikaty, chronisz klucze prywatne i planujesz
  przejście na algorytmy postkwantowe.
- **GRC, audyt i prywatność:** sprawdzasz, czy dane są szyfrowane w spoczynku i w drodze, czy ktoś zarządza kluczami
  i czy deklaracje o „szyfrowaniu” wytrzymują sprawdzenie.
- **Analiza złośliwego oprogramowania:** spotykasz ransomware, które szyfruje pliki, ustawienia ukryte w Base64 i
  próbki znane po swoich skrótach.

## Spróbuj samodzielnie

Około piętnastu minut. Nic tu nie zmienia twojego systemu, a jedyny plik, który utworzysz, usuniesz na końcu.

> [!NOTE]
> Nazwy menu, pól i to, co wypisują polecenia, są tu podane tak, jak pokazują je systemy po angielsku. Jeśli twój
> system jest po polsku, mogą być przetłumaczone, ale są w tych samych miejscach. Same polecenia są takie same.

### Kodowanie to nie szyfrowanie

Zamień zdanie na Base64 i z powrotem:

<!-- for: windows -->

```powershell
$b = [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes("Pay 100 to Alex"))
$b
[Text.Encoding]::UTF8.GetString([Convert]::FromBase64String($b))
```

<!-- for: macos, linux -->

```sh
printf 'Pay 100 to Alex' | base64
printf 'UGF5IDEwMCB0byBBbGV4' | base64 --decode; echo
```

<!-- /for -->

Zobaczysz `UGF5IDEwMCB0byBBbGV4`, a potem znowu zdanie. Nigdzie nie był potrzebny klucz. Czego trzeba, żeby odczytać
hasło zapisane w ten sposób?

### Trzy skróty, trzy długości

Utwórz mały plik, policz jego skrót na trzy sposoby, zmień jego nazwę i policz skrót jeszcze raz:

<!-- for: windows -->

```powershell
Set-Content note.txt "Pay 100 to Alex"
Get-FileHash note.txt -Algorithm MD5
Get-FileHash note.txt -Algorithm SHA1
Get-FileHash note.txt
Rename-Item note.txt renamed.txt
Get-FileHash renamed.txt
Remove-Item renamed.txt
```

`Get-FileHash` używa SHA-256, chyba że poprosisz o inny algorytm.

<!-- for: macos -->

```sh
echo "Pay 100 to Alex" > note.txt
md5 note.txt
shasum -a 1 note.txt
shasum -a 256 note.txt
mv note.txt renamed.txt
shasum -a 256 renamed.txt
rm renamed.txt
```

<!-- for: linux -->

```sh
echo "Pay 100 to Alex" > note.txt
md5sum note.txt
sha1sum note.txt
sha256sum note.txt
mv note.txt renamed.txt
sha256sum renamed.txt
rm renamed.txt
```

<!-- /for -->

W Linuksie pierwsze trzy skróty wyglądają tak (macOS wypisuje MD5 jako `MD5 (note.txt) = …`, a w Windows wartości są
inne, bo PowerShell inaczej kończy wiersz):

```
d08ad59cce6e7f4784a80da330fbfff0  note.txt
ee009c388a1ece9751379b20687e8c9a7277a2fe  note.txt
e0b2c4d048c516fcd09ea13cfb7196b588459725dd5a369d8c14cc3c950f7f6a  note.txt
```

Policz znaki: 32, 40 i 64. Czy zmiana nazwy zmieniła SHA-256 pliku? Dlaczego nie i dlaczego dzięki temu skróty
przydają się do rozpoznawania plików? Żeby sprawdzić prawdziwy pobrany plik ze skrótem podanym przez wydawcę, skorzystaj
z przewodnika krok po kroku.
<!-- guide: check-hash -->

### Czy twój dysk jest zaszyfrowany?

<!-- for: windows -->

W **Settings** (Ustawienia) otwórz **Privacy & security > Device encryption**, jeśli twoje urządzenie to pokazuje. W
Windows Pro, Enterprise i Education możesz też wyszukać w menu Start **Manage BitLocker**. Żeby zobaczyć szczegóły,
otwórz PowerShell jako administrator (potrzebne są uprawnienia administratora) i uruchom:

```powershell
manage-bde -status C:
```

Spójrz na **Conversion Status**, **Encryption Method** i **Protection Status**.

<!-- for: macos -->

```sh
fdesetup status
```

Odpowiedź to `FileVault is On.` albo `FileVault is Off.`

<!-- for: linux -->

```sh
lsblk -f
```

Szukaj `crypto_LUKS` w kolumnie FSTYPE: ta partycja jest zaszyfrowana przez LUKS. Dopóki jest odblokowana,
urządzenie pokazane pod nią to jej zawartość.

<!-- /for -->

Gdyby ktoś ukradł ten komputer wyłączony, czy mógłby przeczytać twoje pliki? A gdyby zabrał go odblokowanego z
kawiarnianego stolika? I czy wiesz, gdzie jest twój klucz odzyskiwania?

### Zobacz, co chroni twoje połączenie

Otwórz w przeglądarce dowolną witrynę z HTTPS.

- **Chrome:** otwórz DevTools (F12), potem panel **Privacy and security** (w **More tools**, jeśli go nie widać) i
  wybierz witrynę w sekcji **Security**, żeby zobaczyć jej połączenie i certyfikat.
- **Firefox:** kliknij stronę prawym przyciskiem, wybierz **View Page Info**, potem **Security**. **Technical
  Details** pokazują zestaw szyfrów i wersję TLS.

Szukaj TLS 1.3, szyfru takiego jak AES-128-GCM lub ChaCha20-Poly1305, a w Chrome X25519MLKEM768 jako wymiany kluczy,
jeśli witryna obsługuje ochronę postkwantową. Potem otwórz certyfikat: kto go wydał, kiedy wygasa i ile certyfikatów
ma jego łańcuch?

## Sprawdź się

Spróbuj odpowiedzieć, zanim rozwiniesz każdą odpowiedź.

<!-- pic: quiz -->

## Dowiedz się więcej

- **[CyberChef](https://gchq.github.io/CyberChef/)**: darmowy „cybernetyczny scyzoryk szwajcarski” od GCHQ w
  przeglądarce. Dekoduj Base64, licz skróty, próbuj AES i czytaj certyfikaty; to, co wkleisz, zostaje w twojej
  przeglądarce. Po angielsku.
- **[The Illustrated TLS 1.3 Connection](https://tls13.xargs.org/)**: każdy bajt prawdziwego połączenia TLS 1.3,
  objaśniony i możliwy do odtworzenia, od ClientHello do ostatniej zaszyfrowanej wiadomości. Po angielsku.
- **[Crypto 101](https://www.crypto101.io/)**: darmowa książka wprowadzająca do kryptografii dla programistów, od
  szyfrów blokowych i skrótów po całe systemy, takie jak TLS. Po angielsku.
- **[OWASP Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)**:
  jak dziś przechowywać hasła, z algorytmami i ustawieniami. Po angielsku.
- **[NIST National Software Reference Library](https://www.nist.gov/itl/csd/secure-systems-and-applications/national-software-reference-library-nsrl/about-nsrl/nsrl)**:
  darmowe zestawy skrótów, którymi śledczy odkładają znane pliki programów. Po angielsku.
