/* MyWay Tennis Academy — main.js */

(function () {
  'use strict';

  /* ── Navbar scroll state ── */
  const navbar   = document.getElementById('navbar');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu   = document.getElementById('nav-menu');
  const navOverlay = document.getElementById('nav-overlay');

  function onScroll() {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateActiveLink();
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load

  /* ── Mobile menu ── */
  function openMenu() {
    navToggle.classList.add('active');
    navMenu.classList.add('open');
    navOverlay.classList.add('visible');
    document.body.style.overflow = 'hidden';
    navToggle.setAttribute('aria-label', 'Chiudi menu');
  }

  function closeMenu() {
    navToggle.classList.remove('active');
    navMenu.classList.remove('open');
    navOverlay.classList.remove('visible');
    document.body.style.overflow = '';
    navToggle.setAttribute('aria-label', 'Apri menu');
  }

  navToggle.addEventListener('click', () => {
    navMenu.classList.contains('open') ? closeMenu() : openMenu();
  });

  navOverlay.addEventListener('click', closeMenu);

  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) closeMenu();
  });

  /* ── Active nav link on scroll ── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-link:not(.nav-cta)');

  function updateActiveLink() {
    const scrollPos = window.scrollY + window.innerHeight * 0.35;

    let current = '';
    sections.forEach(section => {
      if (scrollPos >= section.offsetTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }

  /* ── Smooth scroll for all anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = parseInt(getComputedStyle(document.documentElement)
        .getPropertyValue('--nav-h')) || 76;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* Scroll-reveal observer removed — no fade-in classes in use */

  /* ── Select floating label ── */
  document.querySelectorAll('.form-field--select select').forEach(sel => {
    function toggleLabel() {
      sel.closest('.form-field--select')
         .classList.toggle('has-value', sel.value !== '');
    }
    sel.addEventListener('change', toggleLabel);
    toggleLabel(); // run once in case of browser autofill
  });

  /* ── Contact form ── */
  const form     = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Validate required fields
      const required = form.querySelectorAll('[required]');
      let valid = true;
      required.forEach(field => {
        const empty = field.type === 'checkbox' ? !field.checked : !field.value.trim();
        if (empty) {
          if (field.type !== 'checkbox') field.classList.add('invalid');
          valid = false;
        } else {
          field.classList.remove('invalid');
        }
      });

      if (!valid) {
        showFeedback('Compila tutti i campi obbligatori (*).', 'error');
        return;
      }

      const btn      = form.querySelector('button[type="submit"]');
      const origHTML = btn.innerHTML;
      btn.innerHTML  = 'Invio in corso…';
      btn.disabled   = true;

      // Replace with a real fetch() when the backend is ready
      setTimeout(() => {
        showFeedback('Messaggio inviato! Ti risponderemo entro 24 ore.', 'success');
        form.reset();
        // reset select label state
        document.querySelectorAll('.form-field--select').forEach(w => w.classList.remove('has-value'));
        btn.innerHTML = origHTML;
        btn.disabled  = false;
        setTimeout(hideFeedback, 6000);
      }, 1500);
    });

    // Remove invalid state on interaction
    form.querySelectorAll('input, select, textarea').forEach(field => {
      field.addEventListener('input',  () => field.classList.remove('invalid'));
      field.addEventListener('change', () => field.classList.remove('invalid'));
    });
  }

  function showFeedback(msg, type) {
    feedback.textContent = msg;
    feedback.className = `form-feedback ${type}`;
  }
  function hideFeedback() {
    feedback.textContent = '';
    feedback.className = 'form-feedback';
  }

})();