# Firmen Racing Cup 2026/2027 — Projektüberblick (CLAUDE.md)

## Projektziel

Öffentliche Info-Website für den **Firmen Racing Cup 2026/2027** – ein Sim-Racing-Event bei
Hybrid Racing in Au SG. Die Website präsentiert Event-Details, Rennformat, Kosten, FAQ
sowie Cross-Links zum Anmeldeportal und zur Rangliste (externe Repos).

Zielgruppe: Mitarbeitende von Lässer Stickmaschinen und Menzi Muck AG,
die ein Team anmelden oder sich über die Meisterschaft informieren wollen.

---

## Firmenbezug

| Firma | Rolle | Website |
|-------|-------|---------|
| Lässer Stickmaschinen AG (Widnau) | Co-Veranstalter / Presented by | laesser.ch |
| Menzi Muck AG | Co-Veranstalter / Presented by | menzimuck.com |
| Hybrid Racing (Au SG) | Austragungsort, Simulator-Provider | – |

---

## Eventkalender Saison 2026/2027

| Event | Datum | Strecke | Kosten/Person |
|-------|-------|---------|--------------|
| Event 01 — Season Opener | Do. 20. August 2026 | Spielberg South Course | CHF 90.— |
| Event 02 — Round 2 | Do. 17. September 2026 | Hockenheim / Brands Hatch | CHF 90.— |
| Event 03 — Weather Challenge | Do. 15. Oktober 2026 | Nürburgring Sprint GT | CHF 90.— |
| Grand Finale | Fr. 16. Januar 2027 | Nürburgring Nordschleife | CHF 180.— |

- Alle Events bei **Hybrid Racing Au SG**, Start jeweils ab **19:00 Uhr**
- Format normal: 20' Training + 10' Qualifying + 60' Rennen
- Format E03: 20' Training + 10' Qualifying + 90' Rennen (Weather Challenge)
- Format Finale: 30' Training + 30' Qualifying + 3h Rennen · Pflicht-Fahrerwechsel · ×2 Punkte

---

## Farben / Branding

| Token | Hex | Verwendung |
|-------|-----|-----------|
| `--gelb` / `--color-primary` | `#FFD100` | Primär-Akzent: Buttons, Headlines, Borders |
| `--blau` / `--color-secondary` | `#003087` | Sekundär: Partner-Farbton, Hinweisboxen |
| `--schwarz` / `--color-dark` | `#0A0A0A` | Seitenhintergrund |
| `--anthrazit` / `--color-surface-2` | `#1E1E1E` | CTA-Blöcke |
| `--karte` / `--color-surface` | `#141414` | Karten/Cards |
| `--gold` / `--color-gold` | `#C9A84C` | Grand-Finale-Akzent, P1-Podium |
| `--silber` / `--color-silver` | `#A8A9AD` | P2-Podium |
| `--bronze` / `--color-bronze` | `#CD7F32` | P3-Podium |

CSS hat **primäre Tokens** (`--color-*`) plus **deutsche Aliasse** (`--gelb`, `--blau` etc.)
für Inline-Styles in HTML. Beide Formen sind verwendbar.

Fonts: **Orbitron** (Headlines, monospace Motorsport-Font) · **Rajdhani** (Body, 300–700)
Beide via Google Fonts CDN geladen.

Logo-Besonderheit: `menzimuck.png` hat schwarzes/rotes Original →
CSS-Filter `invert(1) hue-rotate(180deg)` macht es für Dark-Theme nutzbar.

---

## Tech-Stack

- **Statische Website** – reines HTML/CSS/JavaScript, kein Build-Tool, kein Framework
- **Styling** – CSS Custom Properties Design-System (~1650 Zeilen in `css/style.css`)
- **JS** – Vanilla JS (~115 Zeilen in `js/main.js`): Countdown, FAQ-Accordion, Hamburger-Nav, Navbar-Scroll-Darkening
- **Parallax** – Inline `<script>` am Ende von `index.html` (außerhalb von `main.js`) via `translateY` auf `.hero-bg`
- **Fonts** – Google Fonts CDN (Orbitron + Rajdhani)
- **Assets** – SVG-Silhouette in `assets/`, Logos (PNG) in `logos/`
- **Hero-Bild** – Unsplash-URL direkt im `style`-Attribut von `#heroBg` (kein lokales Asset)
- **Deployment** – GitHub Pages, Branch `main`, Root `/`
- **Favicon** – Inline `data:URI` SVG (kein eigenes Favicon-File)

---

## Seitenstruktur

| Datei | Inhalt | Besonderheiten |
|-------|--------|---------------|
| `index.html` | Vollbild-Hero mit Foto + Parallax, Narrativ-Quote, Company-Grid (3 Karten), Saison-Grid (4 Karten), CTA-Block | Unsplash-Hintergrundbild; Porsche-Silhouette als `.hero-car`-Overlay; Parallax per Inline-Script |
| `format.html` | Saisonkalender (Timeline), Regelwerk (6 Cards), Punktesystem (Podium + Tabelle + Bonus) | Standard-Hero (CSS only, kein Foto); Podium mit Shimmer-Animation |
| `kosten.html` | 4 Event-Karten mit definitiven Preisen, Gesamttabelle (CHF 450.—/Person), Inbegriffen-Liste | Preise definitiv: CHF 90.— / CHF 180.—; Hinweis-Box über Verpflegung |
| `faq.html` | 9 FAQ-Accordion-Items | Accordion per CSS max-height; `aria-expanded` wird per JS korrekt gesetzt |

Alle 4 Seiten teilen: identische Navigation (mit Hamburger-Toggle), identischen Footer, gleiche Logos.
Navigation und Footer sind **4× kopiert** (kein Include-Mechanismus).

### index.html Sektionsstruktur

```
<header class="hero hero-main">
  .hero-img-wrap                 ← Unsplash-Foto + Overlay
    #heroBg                      ← Parallax-Target (JS translateY)
    .hero-overlay
  .hero-logos                    ← Dual-Logo-Reihe (Lässer / Menzi Muck)
  .hero-content-main             ← "Road to the Nordschleife" + CTA-Buttons
  <img class="hero-car">         ← Porsche-Silhouette als Overlay (assets/porsche-silhouette.svg)
  .hero-stripe

.countdown-strip #countdown-wrapper
.section-divider
.narrative-section               ← Blockquote / Claim
.section-divider
.section → .company-grid         ← 3 Company-Cards (Lässer, Menzi Muck, Hybrid Racing)
.section-divider
.section → .season-grid          ← 4 Season-Cards mit definitiven Daten + Saison 2026/2027
.section-sm → .cta-block
<footer>
<script src="js/main.js">
<script> ... Parallax-IIFE ... </script>
```

---

## Datenmodell-Überblick

Kein serverseitiges Datenmodell – alles ist statischer HTML-Content.

### Saison-Struktur (hardcoded in format.html + index.html)
```
4 Events — alle bei Hybrid Racing Au SG, ab 19:00 Uhr:
├── Event 01 – Season Opener    | Do. 20. Aug. 2026 | Spielberg South Course      | 20' T + 10' Q + 60' R
├── Event 02 – Round 2          | Do. 17. Sep. 2026 | Hockenheim / Brands Hatch   | 20' T + 10' Q + 60' R
├── Event 03 – Weather Challenge| Do. 15. Okt. 2026 | Nürburgring Sprint GT       | 20' T + 10' Q + 90' R
└── Grand Finale                | Fr. 16. Jan. 2027 | Nürburgring Nordschleife    | 30' T + 30' Q + 3h R · ×2 Punkte
```

### Preise (definitiv, pro Person)
```
Event 01 / 02 / 03:  CHF 90.—
Grand Finale:        CHF 180.—
Total alle 4 Events: CHF 450.—
Nicht inbegriffen:   Apéro, Nachtessen, Getränke
```

### Punktesystem (hardcoded in format.html)
```
P1=25, P2=20, P3=16, P4=13, P5=11, P6=9, P7=7, P8=5
Bonus: +1 Pole Position, +1 Schnellste Runde
Grand Finale: ×2 auf alle Punkte
Wertung: Teamwertung (2 Fahrer/Team), 8 Teams total
```

### Konfiguration (js/main.js)
```js
CONFIG.SEASON_OPENER = '2026-08-20T19:00:00'  // Do. 20. August 2026
```

### Cross-Site-Links (hardcoded im HTML, nicht per JS)
```
Anmeldung: https://endruofc.github.io/Racing-Event-Sing-In/
Rangliste:  https://endruofc.github.io/firmen-racing-cup-2026/standings.html
```

---

## Bekannte Entscheidungen

- **Dark-Theme only** – kein Light-Mode-Toggle; bewusste Motorsport-Ästhetik-Entscheidung
- **Cross-Site-Links direkt im href** (nicht via JS-Variable) – robuster gegen Browser-Caching
  (Commit `aefdb2b`, PR #10 gemergt)
- **Hero `index.html` nutzt Unsplash-Foto** – URL direkt im `style`-Attribut von `#heroBg`;
  kein lokales Asset. Bei Bedarf mit eigenem Bild ersetzen.
- **Parallax auf index.html**: Inline-IIFE am Seitenende manipuliert `#heroBg.style.transform`
  (nur Desktop ≥ 768 px). Nicht in `main.js` ausgelagert – bewusste Entscheidung für Inline-Scope.
- **Carbon-Fiber-Textur** via CSS `repeating-linear-gradient` (kein Bild-Asset) –
  nur auf Sub-Pages (`format.html`, `kosten.html`, `faq.html`) aktiv; `index.html` Hero hat Foto-Background
- **Porsche-Silhouette** als `.hero-car` `<img>`-Tag (`assets/porsche-silhouette.svg`), positioniert
  als Overlay über dem Foto-Hero. SVG verwendet `currentColor` für Farbkontrolle.
- **Menzi-Muck-Logo** via CSS `invert(1) hue-rotate(180deg)` für Dark-Theme adaptiert
- **Lässer-Logo** in CMYK-Variante für Hero/Footer, RGB-Variante vorhanden aber ungenutzt
- **Responsive Breakpoints**: 768px (Hamburger-Nav, einspaltiges Hero-Logo) + 500px (Einspalt-Grids)
- **FAQ-Accordion** via CSS `max-height` (kein JS für Höhe nötig); `aria-expanded` wird per JS korrekt gesetzt
- **Countdown** via rekursiver `setTimeout`-Kette (nicht `setInterval`)
- **Aktiver Nav-Link** wird per JS via `window.location.pathname` erkannt und mit `.aktiv` markiert;
  HTML enthält zusätzlich statisches `.aktiv` als Fallback
- **Navbar-Hintergrund** verdunkelt sich via JS-scroll-Listener (`rgba(10,10,10,.85)` → `.97`);
  kein CSS-only Shrink (Unterschied zu Racing-Event-Sing-In, das `.navbar--shrunk` nutzt)
- **CEO Quality Pass** (Commit `6692d03`): Neue Utility-Klassen in `css/style.css` —
  `.cta-row`, `.hero-page`, `.total-card`, `.total-table`, `.includes-card`, `.includes-grid`,
  `.kosten-card--gold`, `.kosten-card--blau`, `.bonus-card--finale`, `.countdown-strip-note`, `.timeline-desc`
- **Footer-Credits** (Commit `d8936f2`): `.footer-tagline` ersetzt durch `.footer-credits` —
  „Website & Digital Infrastructure by Endrulabs.ch" (klickbarer Link, 0.7rem, #888888, Hover gelb);
  Copyright auf „© 2026/2027 Firmen Racing Cup · All Rights Reserved" aktualisiert

---

## CSS-Komponenten (Auswahl, `css/style.css`)

| Komponente | Klassen | Verwendet in |
|---|---|---|
| Sub-page Hero | `.hero-page` | format, kosten, faq |
| Button-Reihe | `.cta-row` | alle Seiten |
| Countdown-Note | `.countdown-strip-note` | index.html |
| Timeline-Beschreibung | `.timeline-desc` | format.html |
| Kosten-Card Modifier | `.kosten-card--gold`, `.kosten-card--blau` | kosten.html |
| Gesamttabelle | `.total-card`, `.total-table`, `.row-finale`, `.row-total` | kosten.html |
| Inbegriffen-Box | `.includes-card`, `.includes-grid`, `.includes-col-label--yes/no`, `.includes-list` | kosten.html |
| Bonus-Card Modifier | `.bonus-card--finale` | format.html |
| Season-Status Dot | `.season-status.upcoming::before` | index.html |
| Footer Credits | `.footer-credits`, `.footer-credits a` | alle Seiten |

---

## Logo-Dateien

| Datei | Format | Verwendung |
|-------|--------|-----------|
| `logos/LAESSER-Logo_CMYK.png` | PNG (weiß auf transparent) | Hero, Partner-Bereich, Footer – kein Filter nötig |
| `logos/LAESSER-Logo_RGB.png` | PNG (weiß auf transparent) | Derzeit ungenutzt (Reserve) |
| `logos/menzimuck.png` | PNG (schwarz/rot auf transparent) | Überall – mit CSS-Filter invertiert |
| `assets/porsche-silhouette.svg` | SVG (`currentColor`) | Hero-Overlay als `.hero-car` (opacity via CSS) |

---

## Deployment-Setup (GitHub Pages)

**Live-URL:** `https://EndruOFC.github.io/racing-event-pre-info/`

**Setup:**
1. Branch `main` → GitHub Pages, Source: Root `/`
2. Jeder Push auf `main` löst automatisches Deployment aus
3. Kein Build-Schritt erforderlich

**Geplante Custom Domain:** `info.racing-cup-2026.ch`
- CNAME-Record: `info` → `EndruOFC.github.io`
- CNAME-Datei im Repo noch nicht committet

**Verwandte Repos / Subdomains:**
| App | Repo | URL |
|-----|------|-----|
| Info-Site (dieses Repo) | racing-event-pre-info | EndruOFC.github.io/racing-event-pre-info |
| Anmeldeportal | Racing-Event-Sing-In | EndruOFC.github.io/Racing-Event-Sing-In/ |
| Rangliste / Championship-App | firmen-racing-cup-2026 | EndruOFC.github.io/firmen-racing-cup-2026/standings.html |

---

## Offene Punkte (Stand 2026-06-29)

### Hoch
- [ ] Open-Graph-Meta-Tags auf allen Seiten (`og:title`, `og:description`, `og:image`)
- [ ] CNAME-Datei committen (Custom Domain `info.racing-cup-2026.ch`)

### Mittel
- [ ] Unsplash-Hero-Bild durch eigenes Foto ersetzen (aktuell externe URL, DSGVO-relevant)
- [ ] Menzi-Muck-Logo: weisses PNG direkt bei Menzi Muck besorgen (CSS-Filter-Hack vermeiden)
- [ ] Partner-Logo-Slots befüllen oder Platzhalter entfernen (2× `+ Partner` in `index.html`)

### Niedrig
- [ ] Impressum / Datenschutzerklärung (Schweizer DSG / nDSG)
- [ ] Favicon als echte `.ico`/`.png`-Datei (aktuell nur `data:URI` inline SVG)
- [ ] 404-Seite für GitHub Pages (`404.html`)
- [ ] Countdown auf `setInterval` umstellen (robuster als rekursiver `setTimeout`)
- [ ] Parallax-Script aus `index.html` in `js/main.js` auslagern (technische Schuld)

### Erledigt
- [x] Preise eingetragen: CHF 90.— (normale Events) / CHF 180.— (Grand Finale)
- [x] Season-Opener-Datum gesetzt: `2026-08-20T19:00:00` (Do. 20. August 2026)
- [x] Alle Event-Termine in Timeline und Season-Grid befüllt
- [x] `aria-expanded` in FAQ-Buttons dynamisch korrekt gesetzt
- [x] README.md auf aktuellen Stand gebracht
- [x] CEO Quality Pass: Utility-Klassen in `css/style.css` (Inline-Styles abgebaut)

---

## Aktueller Branch-Status (Stand 2026-06-29)

- `main`: Stabil und aktuell. Alle Termine und Preise definitiv eingetragen. Keine offenen Feature-Branches.
    - `d8936f2`: Footer Credits korrigiert — Endrulabs.ch, Copyright 2026/2027
  - `3d0ab28`: Eventkalender Saison 2026/2027 — 4 Events Aug/Sep/Okt 2026 + Finale Jan 2027
  - `9ddec04`: CLAUDE.md auf aktuellen Stand gebracht (2026-06-29)
  - `7d9908c`: Termine korrigiert (E02: 18. Feb. 2027, E03: 04. Mai 2027, Finale: 06. Jul. 2027)
  - `6692d03`: Eventdaten, Termine und Preise Saison 2026/2027 initial eingetragen
  - `365656f`: CEO Quality Check — Footer, Typografie, Platzhalter-Qualität
  - `ba084ea`: CLAUDE.md auf Stand gebracht
  - `27282d9`: Landing-Seite komplett umgebaut (Unsplash-Hero + Narrativ-Sektionen)
