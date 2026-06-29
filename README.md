# Firmen Racing Cup 2026/2027 – Info-Website

Öffentliche Info-Website für den Firmen Racing Cup 2026/2027.  
Presented by **Lässer Stickmaschinen** & **Menzi Muck AG** | Hosted at **Hybrid Racing, Au SG**

---

## Eventkalender Saison 2026/2027

| Event | Datum | Strecke | Kosten/Person |
|-------|-------|---------|--------------|
| Event 01 — Season Opener | Di. 13. Oktober 2026 | Spielberg South Course | CHF 90.— |
| Event 02 — Round 2 | Mi. 18. Februar 2027 | Hockenheim / Brands Hatch | CHF 90.— |
| Event 03 — Weather Challenge | Di. 04. Mai 2027 | Nürburgring Sprint GT | CHF 90.— |
| Grand Finale | Di. 06. Juli 2027 | Nürburgring Nordschleife | CHF 180.— |

Alle Events bei **Hybrid Racing Au SG**, Start jeweils ab 19:00 Uhr.

---

## Struktur

```
/
├── index.html          ← Startseite (Hero, Countdown, Season-Grid, CTA)
├── format.html         ← Rennformat, Kalender, Regelwerk, Punktesystem
├── kosten.html         ← Kosten & Teilnahme (definitive Preise)
├── faq.html            ← FAQ Accordion
├── css/
│   └── style.css       ← Vollständiges CI-Design-System
├── js/
│   └── main.js         ← Countdown, FAQ-Accordion, Navigation
├── assets/
│   └── porsche-silhouette.svg
└── logos/
    ├── LAESSER-Logo_CMYK.png
    └── menzimuck.png
```

---

## GitHub Pages Deployment

1. Repository auf GitHub pushen:
   ```bash
   git push origin main
   ```

2. In den Repository-Einstellungen → **Pages** → Source: `main` Branch, Root `/`

3. GitHub Pages URL: `https://EndruOFC.github.io/racing-event-pre-info/`

---

## Subdomain einrichten (info.racing-cup-2026.ch)

1. Beim DNS-Anbieter einen **CNAME-Record** anlegen:
   ```
   Name:   info
   Typ:    CNAME
   Wert:   EndruOFC.github.io
   TTL:    3600
   ```

2. In den GitHub Pages Einstellungen → Custom domain → `info.racing-cup-2026.ch` eintragen  
   → Enforce HTTPS aktivieren (nach DNS-Propagation, ca. 24h)

---

## Verwandte Apps

| App | Repo | URL |
|-----|------|-----|
| Info-Site (diese) | racing-event-pre-info | EndruOFC.github.io/racing-event-pre-info |
| Anmeldeportal | Racing-Event-Sing-In | EndruOFC.github.io/Racing-Event-Sing-In/ |
| Rangliste | firmen-racing-cup-2026 | EndruOFC.github.io/firmen-racing-cup-2026/standings.html |

---

© 2026/2027 Firmen Racing Cup · Hybrid Racing, Au SG
