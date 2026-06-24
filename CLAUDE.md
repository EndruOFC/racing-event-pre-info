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
| `--gelb` | `#FFD100` | Primär-Akzent: Buttons, Headlines, Borders |
| `--blau` | `#003087` | Sekundär: Partner-Farbton, Hinweisboxen |
| `--schwarz` | `#0A0A0A` | Seitenhintergrund |
| `--anthrazit` | `#1A1A1A` | CTA-Blöcke |
| `--karte` | `#141414` | Karten/Cards |
| `--gold` | `#C9A84C` | Grand-Finale-Akzent, P1-Podium |
| `--silber` | `#A8A9AD` | P2-Podium |
| `--bronze` | `#CD7F32` | P3-Podium |

Fonts: **Orbitron** (Headlines, monospace Motorsport-Font) · **Rajdhani** (Body, 300–700)
Beide via Google Fonts CDN geladen.

Logo-Besonderheit: `menzimuck.png` hat schwarzes/rotes Original →
CSS-Filter `invert(1) hue-rotate(180deg)` macht es für Dark-Theme nutzbar.

---

## Tech-Stack

- **Statische Website** – reines HTML/CSS/JavaScript, kein Build-Tool, kein Framework
- **Styling** – CSS Custom Properties Design-System (~1100 Zeilen in `css/style.css`)
- **JS** – Vanilla JS (~113 Zeilen in `js/main.js`): Countdown, FAQ-Accordion, Hamburger-Nav
- **Fonts** – Google Fonts CDN (Orbitron + Rajdhani)
- **Assets** – SVG-Silhouette in `assets/`, Logos (PNG) in `logos/`
- **Deployment** – GitHub Pages, Branch `main`, Root `/`
- **Favicon** – Inline `data:URI` SVG (kein eigenes Favicon-File)

---

## Seitenstruktur

| Datei | Inhalt | Besonderheiten |
|-------|--------|---------------|
| `index.html` | Hero, Countdown, Highlight-Kacheln, Saison-Überblick, Partner-Logos, CTA | Porsche-Silhouette als Hintergrund-Deko |
| `format.html` | Saisonkalender (Timeline), Regelwerk (6 Cards), Punktesystem (Podium + Tabelle + Bonus) | Podium mit Shimmer-Animation |
| `kosten.html` | Teilnahmegebühr, Pro Rennabend, Grand Finale, Gruppenrabatt, Gesamttabelle, Inbegriffen-Liste | Alle Preise Platzhalter "???" |
| `faq.html` | 9 FAQ-Accordion-Items (8 inhaltlich + 1 Platzhalter) | Accordion per CSS max-height |

Alle 4 Seiten teilen: identische Navigation, identischen Footer, gleiche Logos.
Navigation und Footer sind **4× kopiert** (kein Include-Mechanismus).

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
  (Branch `fix/hardcode-cross-links` / Commit `aefdb2b`)
- **Carbon-Fiber-Textur** via CSS `repeating-linear-gradient` (kein Bild-Asset)
- **Porsche-Silhouette** als handcodiertes SVG (800×320 px, `currentColor`)
- **Menzi-Muck-Logo** via CSS `invert(1) hue-rotate(180deg)` für Dark-Theme adaptiert
- **Lässer-Logo** in CMYK-Variante für Hero/Footer, RGB-Variante vorhanden aber ungenutzt
- **Responsive Breakpoints**: 768px (Hamburger-Nav, einspaltiges Hero-Logo) + 500px (Einspalt-Grids)
- **FAQ-Accordion** via CSS `max-height` (kein JS für Höhe nötig)
- **Countdown** via rekursiver `setTimeout`-Kette (nicht `setInterval`)
- **Aktiver Nav-Link** wird per JS via `window.location.pathname` erkannt und mit `.aktiv` markiert;
  HTML enthält zusätzlich statisches `.aktiv` als Fallback

---

## Logo-Dateien

| Datei | Format | Verwendung |
|-------|--------|-----------|
| `logos/LAESSER-Logo_CMYK.png` | PNG (weiß auf transparent) | Hero, Partner-Bereich, Footer – kein Filter nötig |
| `logos/LAESSER-Logo_RGB.png` | PNG (weiß auf transparent) | Derzeit ungenutzt (Reserve) |
| `logos/menzimuck.png` | PNG (schwarz/rot auf transparent) | Überall – mit CSS-Filter invertiert |
| `assets/porsche-silhouette.svg` | SVG (`currentColor`) | Hero-Hintergrund (opacity 0.13) |

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

## Offene Punkte (Stand 2026-06-24)

### Kritisch (blockiert finalen Launch)
- [ ] Preise eintragen: alle `CHF ???` in `kosten.html` → definitive Beträge nach Abklärung mit Hybrid Racing
- [ ] Season-Opener-Datum fixieren: `CONFIG.SEASON_OPENER` in `js/main.js` (aktuell: `2026-09-01T18:00:00`)
- [ ] Event-Termine in `format.html` Timeline-Tags (`tag-datum`) befüllen

### Hoch
- [ ] `aria-expanded` in FAQ-Buttons dynamisch toggeln (Accessibility-Bug: bleibt immer `"false"`)
- [ ] Open-Graph-Meta-Tags auf allen Seiten (`og:title`, `og:description`, `og:image`)
- [ ] CNAME-Datei committen (Custom Domain `info.racing-cup-2026.ch`)

### Mittel
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
