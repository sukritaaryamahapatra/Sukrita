/* ═══════════════════════════════════════════════════════════════
   SUKRITA PORTFOLIO — main.js
   ═══════════════════════════════════════════════════════════════ */

/* ── NAV SCROLL ──────────────────────────────────────────────── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

/* ── HAMBURGER MENU ──────────────────────────────────────────── */
const hamburger   = document.getElementById('hamburger');
const mobileMenu  = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});

/* ── SCROLL REVEAL ───────────────────────────────────────────── */
const revealEls = document.querySelectorAll(
  '.reveal, .reveal-delay-1, .reveal-delay-2, .reveal-delay-3'
);

// Hero elements ko immediately visible karo
document.querySelectorAll('.hero .reveal, .hero .reveal-delay-1, .hero .reveal-delay-2, .hero .reveal-delay-3')
  .forEach(el => el.classList.add('visible'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => {
  // Hero elements skip karo — already visible hain
  if (!el.closest('.hero')) {
    observer.observe(el);
  }
});

/* ── CONTACT FORM ────────────────────────────────────────────── */
const form     = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formNote.textContent = '✓ Message sent! I\'ll get back to you soon.';
    formNote.style.color = '#4ac480';
    form.reset();
    setTimeout(() => { formNote.textContent = ''; }, 4000);
  });
}

/* ── SMOOTH SCROLL FOR NAV LINKS ─────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ── ACTIVE NAV LINK ON SCROLL ───────────────────────────────── */
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav__link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = 'var(--gold)';
    }
  });
});