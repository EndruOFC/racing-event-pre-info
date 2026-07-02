# Firmen Racing Cup 2026/2027 – Info-Website

Öffentliche Info-Website für den Firmen Racing Cup 2026/2027.  
Presented by **Lässer Stickmaschinen** & **Menzi Muck AG** | Hosted at **Hybrid Racing, Au SG**

---

## Eventkalender Saison 2026/2027

| Event | Datum | Strecke | Kosten/Person |
|-------|-------|---------|--------------|
| Event 01 — Season Opener | Do. 10. September 2026 | Spielberg South Course | CHF 90.— |
| Event 02 — Round 2 | Do. 15. Oktober 2026 | Hockenheim / Brands Hatch | CHF 90.— |
| Event 03 — Weather Challenge | Do. 19. November 2026 | Nürburgring Sprint GT | CHF 90.— |
| Grand Finale | Fr. 16. Januar 2027 | Nürburgring Nordschleife | CHF 180.— |

Alle Events bei **Hybrid Racing Au SG**, Start jeweils ab 19:00 Uhr.

**Anmeldeschluss: 31. Juli 2026** — Anmeldung über das Anmeldeportal (siehe „Verwandte Apps").

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
│   ├── header-pre-event.jpg    ← Hero-Hintergrundbild (index.html)
│   └── porsche-silhouette.svg
└── logos/
    ├── LAESSER-Logo_CMYK.png
    ├── menzimuck.png
    └── hybracing.png       ← Hybrid Racing Logo (Footer + Company-Card)
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

## Stand der Implementierung (2026-07-02)

- Alle 4 Seiten fertig; Eventdaten & Preise definitiv.
- **Anmeldeschluss: 31. Juli 2026**; Countdown zielt auf den Season Opener (Do. 10. September 2026, 19:00 Uhr).
- Cross-Site-Links mit `target="_blank" rel="noopener"`; Below-the-fold-Bilder `loading="lazy"`; `preconnect` für Google Fonts; OG-Tags (`og:type`/`og:title`/`og:description`/`og:url`) auf `index.html`.
- Hybrid-Racing-Logo (`logos/hybracing.png`) im Footer aller Seiten und in der 3. Company-Card (verlinkt auf hybracing.ch).
- Offen: `og:image`, CNAME-Datei committen, Favicon als echte Datei.

---

© 2026/2027 Firmen Racing Cup · Hybrid Racing, Au SG
