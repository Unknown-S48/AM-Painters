/* A&M PAINTERS — SITE SCRIPT 
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


/* 6. CONTACT FORM */
const form = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function setFieldState(el, isValid) {
  el.closest('.field').classList.toggle('invalid', !isValid);
}

function validateForm() {
  const name = form.elements.name;
  const phone = form.elements.phone;
  const email = form.elements.email;
  const service = form.elements.service;
  const message = form.elements.message;

  const nameOk    = name.value.trim().length >= 2;
  const phoneOk   = phone.value.replace(/[^\d]/g, '').length >= 9;
  const emailOk   = email.value.trim() === '' || emailPattern.test(email.value.trim());
  const serviceOk = service.value !== '';
  const messageOk = message.value.trim().length >= 10;

  setFieldState(name, nameOk);
  setFieldState(phone, phoneOk);
  setFieldState(email, emailOk);
  setFieldState(service, serviceOk);
  setFieldState(message, messageOk);

  return nameOk && phoneOk && emailOk && serviceOk && messageOk;
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  formStatus.className = 'form-status';
  formStatus.textContent = '';

  if (!validateForm()) {
    formStatus.classList.add('error');
    formStatus.textContent = 'Please check the highlighted fields and try again.';
    return;
  }

  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending…';

  try {
    /* Posts to FormSubmit.co — no backend required.
       First submission triggers an activation email to mushimbwe@gmail.com. */
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    });

    if (!response.ok) throw new Error('Network response was not ok');

    const firstName = form.elements.name.value.trim().split(' ')[0];
    formStatus.classList.add('success');
    formStatus.textContent = `Thanks, ${firstName}! Your request has been sent — we'll be in touch shortly.`;
    form.reset();
  } catch (error) {
    formStatus.classList.add('error');
    formStatus.textContent =
      'Something went wrong. Please call or WhatsApp us on 064 159 9195.';
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
  }
});

form.querySelectorAll('input, textarea, select').forEach((input) => {
  input.addEventListener('input', () => {
    input.closest('.field')?.classList.remove('invalid');
  });
});


/* 7. FOOTER YEAR */
document.getElementById('year').textContent = new Date().getFullYear();