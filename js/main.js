// ============================================================
// FIRMEN RACING CUP 2026 – Info-Site JavaScript
// Countdown · FAQ Accordion · Navigation
// ============================================================

/* ── Konfiguration ─────────────────────────────────────────── */
const CONFIG = {
  SEASON_OPENER: '2026-09-10T19:00:00',
};

/* ── Navigation: Hamburger + aktiver Link ──────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const toggle   = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.navbar-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('offen');
      navLinks.classList.toggle('offen');
    });

    // Schließen bei Klick auf einen Link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('offen');
        navLinks.classList.remove('offen');
      });
    });
  }

  // Aktiven Nav-Link markieren
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('aktiv');
    }
  });

  // Navbar-Hintergrund beim Scrollen intensivieren
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.style.background = window.scrollY > 10
        ? 'rgba(10, 10, 10, 0.97)'
        : 'rgba(10, 10, 10, 0.85)';
    }, { passive: true });
  }

  initCountdown();
  initAccordion();
});

/* ── Countdown bis Season Opener ───────────────────────────── */
function initCountdown() {
  const wrapper = document.getElementById('countdown-wrapper');
  if (!wrapper) return;

  const tagEl  = document.getElementById('cd-tage');
  const stdEl  = document.getElementById('cd-stunden');
  const minEl  = document.getElementById('cd-minuten');
  const sekEl  = document.getElementById('cd-sekunden');
  if (!tagEl) return;

  function update() {
    const ziel  = new Date(CONFIG.SEASON_OPENER);
    const jetzt = new Date();
    const diff  = ziel - jetzt;

    if (diff <= 0) {
      wrapper.innerHTML = `
        <div class="countdown-label">Der Season Opener hat begonnen!</div>
        <p class="countdown-live-note">Road to the Nordschleife</p>`;
      return;
    }

    const tage    = Math.floor(diff / 86400000);
    const stunden = Math.floor((diff % 86400000) / 3600000);
    const minuten = Math.floor((diff % 3600000)  / 60000);
    const sekunden= Math.floor((diff % 60000)    / 1000);

    tagEl.textContent = String(tage).padStart(2, '0');
    stdEl.textContent = String(stunden).padStart(2, '0');
    minEl.textContent = String(minuten).padStart(2, '0');
    sekEl.textContent = String(sekunden).padStart(2, '0');

    setTimeout(update, 1000);
  }

  update();
}

/* ── FAQ Accordion ─────────────────────────────────────────── */
function initAccordion() {
  document.querySelectorAll('.faq-frage').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const istOffen = item.classList.contains('offen');

      document.querySelectorAll('.faq-item.offen').forEach(o => {
        o.classList.remove('offen');
        o.querySelector('.faq-frage').setAttribute('aria-expanded', 'false');
      });

      if (!istOffen) {
        item.classList.add('offen');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}
