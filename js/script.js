/* A&M PAINTERS — SITE SCRIPT */

/* 1. MOBILE NAVIGATION */
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
  navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 860) {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});


/* 2. STICKY HEADER SHADOW */
const header = document.getElementById('siteHeader');

function updateHeader() {
  header.classList.toggle('scrolled', window.scrollY > 8);
}
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });


/* 3. SCROLL REVEAL */
const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('visible'));
}


/* 4. ACTIVE NAV LINK */
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav a');

if ('IntersectionObserver' in window) {
  const spyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === '#' + entry.target.id
          );
        });
      });
    },
    { rootMargin: '-45% 0px -50% 0px' }
  );

  sections.forEach((section) => spyObserver.observe(section));
}


/* 5. GALLERY LIGHTBOX */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = lightbox.querySelector('.lightbox-close');

function openLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt || '';
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
  lightboxImg.src = '';
}

document.querySelectorAll('[data-full]').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const innerImg = trigger.querySelector('img');
    openLightbox(trigger.dataset.full, innerImg ? innerImg.alt : '');
  });
});

lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox || event.target === lightboxClose) {
    closeLightbox();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && lightbox.classList.contains('open')) {
    closeLightbox();
  }
});


/* 6. FOOTER YEAR */
document.getElementById('year').textContent = new Date().getFullYear();