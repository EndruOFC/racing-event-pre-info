# Firmen Racing Cup 2026 — Projektüberblick (CLAUDE.md)

## Projektziel

Öffentliche Info-Website für den **Firmen Racing Cup 2026** – ein Sim-Racing-Event bei
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
- **Styling** – CSS Custom Properties Design-System (~1450 Zeilen in `css/style.css`)
- **JS** – Vanilla JS (~113 Zeilen in `js/main.js`): Countdown, FAQ-Accordion, Hamburger-Nav, Navbar-Scroll-Darkening
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
| `kosten.html` | Teilnahmegebühr, Pro Rennabend, Grand Finale, Gruppenrabatt, Gesamttabelle, Inbegriffen-Liste | Alle Preise Platzhalter "???" |
| `faq.html` | 9 FAQ-Accordion-Items (8 inhaltlich + 1 Platzhalter) | Accordion per CSS max-height |

Alle 4 Seiten teilen: identische Navigation (mit Hamburger-Toggle), identischen Footer, gleiche Logos.
Navigation und Footer sind **4× kopiert** (kein Include-Mechanismus).

### index.html Sektionsstruktur (Stand nach Landing-Umbau, Commit 27282d9)

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
.section → .season-grid          ← 4 Season-Cards (Event 01-03 + Grand Finale)
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
4 Events:
├── Event 01 – Season Opener    | Spielberg South Course | 20' Q + 10' WU + 60' R
├── Event 02 – Normales Rennen  | Hockenheim / Brands Hatch | 20' Q + 10' WU + 60' R
├── Event 03 – Weather Challenge| Nürburgring Sprint GT | 20' Q + 10' WU + 90' R
└── Grand Finale                | Nürburgring Nordschleife | 30' Q + 30' WU + 3h R · ×2 Punkte
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
CONFIG.SEASON_OPENER = '2026-09-01T18:00:00'  // Platzhalter – anpassen!
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
- **FAQ-Accordion** via CSS `max-height` (kein JS für Höhe nötig)
- **Countdown** via rekursiver `setTimeout`-Kette (nicht `setInterval`)
- **Aktiver Nav-Link** wird per JS via `window.location.pathname` erkannt und mit `.aktiv` markiert;
  HTML enthält zusätzlich statisches `.aktiv` als Fallback
- **Navbar-Hintergrund** verdunkelt sich via JS-scroll-Listener (`rgba(10,10,10,.85)` → `.97`);
  kein CSS-only Shrink (Unterschied zu Racing-Event-Sing-In, das `.navbar--shrunk` nutzt)

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

## Offene Punkte (Stand 2026-06-25)

### Kritisch (blockiert finalen Launch)
- [ ] Preise eintragen: alle `CHF ???` in `kosten.html` → definitive Beträge nach Abklärung mit Hybrid Racing
- [ ] Season-Opener-Datum fixieren: `CONFIG.SEASON_OPENER` in `js/main.js` (aktuell: `2026-09-01T18:00:00`)
- [ ] Event-Termine in `format.html` Timeline-Tags (`tag-datum`) befüllen

### Hoch
- [ ] `aria-expanded` in FAQ-Buttons dynamisch toggeln (Accessibility-Bug: bleibt immer `"false"`)
- [ ] Open-Graph-Meta-Tags auf allen Seiten (`og:title`, `og:description`, `og:image`)
- [ ] CNAME-Datei committen (Custom Domain `info.racing-cup-2026.ch`)

### Mittel
- [ ] Unsplash-Hero-Bild durch eigenes Foto ersetzen (aktuell externe URL, DSGVO-relevant)
- [ ] Menzi-Muck-Logo: weisses PNG direkt bei Menzi Muck besorgen (CSS-Filter-Hack vermeiden)
- [ ] Partner-Logo-Slots befüllen oder Platzhalter entfernen (2× `+ Partner` in `index.html`)
- [ ] FAQ-Platzhalter F9 ("Weitere Fragen? [Platzhalter]") mit echtem Inhalt ersetzen
- [ ] README.md aktualisieren (referenziert noch `.svg`-Logos statt `.png`)

### Niedrig
- [ ] Impressum / Datenschutzerklärung (Schweizer DSG / nDSG)
- [ ] Favicon als echte `.ico`/`.png`-Datei (aktuell nur `data:URI` inline SVG)
- [ ] 404-Seite für GitHub Pages (`404.html`)
- [ ] Countdown auf `setInterval` umstellen (robuster als rekursiver `setTimeout`)
- [ ] Inline-Styles der Event-Grid-Kacheln in `index.html` → CSS-Klassen extrahieren
- [ ] Parallax-Script aus `index.html` in `js/main.js` auslagern (technische Schuld)

---

## Aktueller Branch-Status (Stand 2026-06-25)

- `main`: Stabil und aktuell. Alle bisherigen PRs gemergt. Keine offenen Feature-Branches.
  - PR #10 (`fix/hardcode-cross-links`): Cross-Site-Links direkt im href hardgecodet (Commit `aefdb2b`)
  - PR #9 (`feat/cross-site-links`): Anmeldung & Rangliste verdrahtet
  - PR #8 (`fix/logo-links`): Logo-Links klickbar gemacht
  - Commit `27282d9`: Landing-Seite komplett umgebaut (Unsplash-Hero + Narrativ-Sektionen)
  - Commit `72dda8d`: Corporate Design-System verfeinert (Gaming-Elemente entfernt)
  - Commit `4a74f01`: Corporate Motorsport Design-System implementiert