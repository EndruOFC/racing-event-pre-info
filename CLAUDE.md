# Firmen Racing Cup 2026 — Projektüberblick

Projektziel
------------
Dieses Repository liefert die öffentliche Info-Seite für den Firmen Racing Cup 2026. Ziel ist
die Präsentation von Event-Details, Rennformat, Kosten, FAQ und Links zum Anmeldeportal/Rangliste.

Firmenbezug
-----------
Presented by Lässer Stickmaschinen & Menzi Muck AG. Veranstaltungsort: Hybrid Racing, Au SG.

Farben / Branding
------------------
- Primär: Gelb `#FFD100` (Event-Akzent)
- Sekundär: Blau `#003087` (Partner-Farbton)
- Dark UI: Schwarz / Anthrazit für Hintergrund

Tech-Stack
----------
- Statische Website: HTML, CSS, JavaScript
- Assets: SVG/PNG in `logos/` und `assets/`
- Deployment: GitHub Pages (Root auf Branch `main`)

Bekannte Entscheidungen
----------------------
- Ein responsives, dark-theme Design mit CI-Farben.
- Countdown- und Accordion-Logik in `js/main.js`.
- Platzhalter-Logos in `logos/` und Platzhalter-Preise in `kosten.html`.

Offene Punkte
------------
- Finale Termine und Preise eintragen (`js/main.js`, `kosten.html`).
- Offizielle Logos ersetzen in `logos/`.
- Links zu produktiven Diensten (Anmeldung, Rangliste) validieren.
- Accessibility-Checks (Kontrast, ARIA) durchführen.
