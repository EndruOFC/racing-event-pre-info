# Firmen Racing Cup 2026 – Info-Website

Öffentliche Info-Website für den Firmen Racing Cup 2026.  
Presented by **Lässer Stickmaschinen** & **Menzi Muck AG** | Hosted at **Hybrid Racing, Au SG**

---

## Struktur

```
/
├── index.html          ← Startseite (Hero, Countdown, Highlights, CTA)
├── format.html         ← Rennformat, Kalender, Regelwerk, Punktesystem
├── kosten.html         ← Kosten & Teilnahme (Platzhalter-Preise)
├── faq.html            ← FAQ Accordion
├── CNAME               ← Subdomain für GitHub Pages
├── css/
│   └── style.css       ← Vollständiges CI-Design-System
├── js/
│   └── main.js         ← Countdown, FAQ-Accordion, Navigation
├── assets/
│   └── porsche-silhouette.svg
└── logos/
    ├── laesser.svg     ← Platzhalter – durch echtes Logo ersetzen
    └── menzimuck.svg   ← Platzhalter – durch echtes Logo ersetzen
```

---

## GitHub Pages Deployment

1. Repository auf GitHub pushen:
   ```bash
   git add .
   git commit -m "Add Firmen Racing Cup 2026 info site"
   git push origin main
   ```

2. In den Repository-Einstellungen → **Pages** → Source: `main` Branch, Root `/`

3. GitHub Pages URL: `https://EndruOFC.github.io/racing-event-pre-info/`

---

## Subdomain einrichten (info.racing-cup-2026.ch)

1. `CNAME`-Datei enthält bereits: `info.racing-cup-2026.ch`

2. Beim DNS-Anbieter einen **CNAME-Record** anlegen:
   ```
   Name:   info
   Typ:    CNAME
   Wert:   EndruOFC.github.io
   TTL:    3600
   ```

3. In den GitHub Pages Einstellungen → Custom domain → `info.racing-cup-2026.ch` eintragen  
   → Enforce HTTPS aktivieren (nach DNS-Propagation, ca. 24h)

---

## Platzhalter ersetzen

### Logos
Echte SVG- oder PNG-Logos ersetzen:
- `logos/laesser.svg` → offizielles Lässer-Logo
- `logos/menzimuck.svg` → offizielles Menzi-Muck-Logo

### Preise (`kosten.html`)
Alle `CHF ???` durch definitive Beträge ersetzen sobald mit Hybrid Racing abgeklärt.

### Termine (alle Seiten + `js/main.js`)
In `js/main.js` Zeile 7 den Season-Opener-Termin setzen:
```js
SEASON_OPENER: '2026-09-01T18:00:00',  // ← anpassen
```

Auf den Timeline-Karten in `format.html` die `tag-datum`-Tags befüllen:
```html
<span class="tag tag-datum">Termin TBD</span>
<!-- ersetzen durch z.B.: -->
<span class="tag tag-datum">15. Oktober 2026</span>
```

### Links zu anderen Apps
In `js/main.js` die URLs eintragen:
```js
ANMELDE_URL:  'https://anmeldung.racing-cup-2026.ch',   // ← Anmeldeportal
RANGLISTE_URL: 'https://rangliste.racing-cup-2026.ch',  // ← Rangliste (sobald live)
```

---

## Verwandte Apps

| App | Repo | Subdomain |
|-----|------|-----------|
| Anmeldeportal | Racing-Event-Sing-In | `anmeldung.racing-cup-2026.ch` |
| Info-Site (diese) | racing-event-pre-info | `info.racing-cup-2026.ch` |
| Rangliste | *(geplant)* | `rangliste.racing-cup-2026.ch` |

Alle drei Sites teilen dasselbe CI-Design-System (Farben, Fonts, Komponenten).

---

© 2026 Firmen Racing Cup · Hybrid Racing, Au SG
