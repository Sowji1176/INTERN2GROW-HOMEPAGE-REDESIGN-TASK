document.addEventListener('DOMContentLoaded', () => {

/* ============================================================
   REAL PROGRAM DATA (sourced from intern2grow.pages.dev/programs)
============================================================ */
const PROGRAMS = [
  { name:'UI/UX Designer', desc:'Create and improve user interface designs, focusing on usability, aesthetics, and better overall user experience.', tags:['Design Tools','UI Design','UX Design'], url:'https://intern2grow.pages.dev/programs/ui-ux-designer' },
  { name:'Data Analyst', desc:'Work with datasets to clean, analyze, and visualize information, answering questions with clear insights and reports.', tags:['Data Cleaning','Data Visualization','Statistics'], url:'https://intern2grow.pages.dev/programs/data-analyst' },
  { name:'UI Developer', desc:'Turn Figma designs into responsive and accessible web pages while ensuring consistency across devices.', tags:['HTML','CSS','Git','Figma'], url:'https://intern2grow.pages.dev/programs/ui-developer' },
  { name:'JavaScript Frontend Developer', desc:'Improve the user interface by fixing frontend bugs, optimizing code, and adding new interactive features.', tags:['HTML','CSS','JavaScript','Git'], url:'https://intern2grow.pages.dev/programs/javascript-frontend-developer' },
  { name:'React.js Developer', desc:'Develop and enhance dynamic web applications with React, focusing on reusable components and smooth user experience.', tags:['HTML','CSS','React','Git'], url:'https://intern2grow.pages.dev/programs/react-js-developer' },
  { name:'Graphic Designer', desc:'Create visual content such as logos, banners, and social media graphics to support branding and communication.', tags:['Photoshop','or any design tool'], url:'https://intern2grow.pages.dev/programs/graphic-designer' },
  { name:'AI Engineer', desc:'Apply basic AI algorithms to build smart solutions for games, problem solving, and simple automation tasks.', tags:['Python','JavaScript'], url:'https://intern2grow.pages.dev/programs/ai-engineer' },
  { name:'Backend Developer', desc:'Develop backend services, connect with databases, and implement APIs that power the frontend applications.', tags:['PHP & Laravel','JS & Express'], url:'https://intern2grow.pages.dev/programs/backend-developer' },
  { name:'ML Engineer', desc:'Work with datasets to train machine learning models that predict outcomes or classify data based on features.', tags:['Python'], url:'https://intern2grow.pages.dev/programs/ml-engineer' }
];

/* ============================================================
   RENDER PROGRAM CARDS
============================================================ */
const programGrid = document.getElementById('programGrid');
programGrid.innerHTML = PROGRAMS.map(p => `
  <a href="${p.url}" target="_blank" rel="noopener" class="program-card reveal">
    <h3>${p.name}</h3>
    <p>${p.desc}</p>
    <div class="program-tags">${p.tags.map(t => `<span class="program-tag">${t}</span>`).join('')}</div>
    <span class="program-cta">Explore Program &rarr;</span>
  </a>
`).join('');

/* ============================================================
   THEME — light/dark, localStorage persistence, system preference
============================================================ */
const THEME_KEY = 'intern2grow-theme';
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const themeToggleMobile = document.getElementById('themeToggleMobile');
const themeIconMobile = document.getElementById('themeIconMobile');
const themeLabelMobile = document.getElementById('themeLabelMobile');

function applyTheme(theme){
  document.body.classList.toggle('dark', theme === 'dark');
  const icon = theme === 'dark' ? '\u263D' : '\u2600';
  const label = theme === 'dark' ? 'Dark Mode' : 'Light Mode';
  themeIcon.textContent = icon;
  themeIconMobile.textContent = icon;
  themeLabelMobile.textContent = label;
  themeToggle.setAttribute('aria-pressed', String(theme === 'dark'));
  themeToggleMobile.setAttribute('aria-pressed', String(theme === 'dark'));
  themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  themeToggleMobile.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
}

function loadTheme(){
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === 'dark' || saved === 'light') {
    applyTheme(saved);
  } else {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }
}

function toggleTheme(){
  const next = document.body.classList.contains('dark') ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem(THEME_KEY, next);
}

themeToggle.addEventListener('click', toggleTheme);
themeToggleMobile.addEventListener('click', toggleTheme);

/* ============================================================
   HEADER SCROLL STATE + BACK TO TOP
============================================================ */
const header = document.getElementById('header');
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
  backToTop.classList.toggle('show', window.scrollY > 500);
});
backToTop.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));

/* ============================================================
   MOBILE MENU
============================================================ */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const overlay = document.getElementById('overlay');

function closeMobileMenu(){
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
  overlay.classList.remove('show');
  hamburger.setAttribute('aria-expanded','false');
}
hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  overlay.classList.toggle('show', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
});
overlay.addEventListener('click', closeMobileMenu);
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

/* ============================================================
   DROPDOWN KEYBOARD ACCESSIBILITY
============================================================ */
document.querySelectorAll('.dropdown-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    document.querySelectorAll('.dropdown-toggle').forEach(b => b.setAttribute('aria-expanded','false'));
    btn.setAttribute('aria-expanded', String(!expanded));
  });
});
document.addEventListener('click', (e) => {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown-toggle').forEach(b => b.setAttribute('aria-expanded','false'));
  }
});

/* ============================================================
   SMOOTH SCROLL FOR IN-PAGE ANCHORS
============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId.length > 1) {
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

/* ============================================================
   FAQ ACCORDION (single-open)
============================================================ */
document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.faq-q');
  const a = item.querySelector('.faq-a');
  q.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-a').style.maxHeight = null;
    });
    if (!isOpen) {
      item.classList.add('open');
      a.style.maxHeight = a.scrollHeight + 'px';
    }
  });
});

/* ============================================================
   SCROLL REVEAL
============================================================ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ============================================================
   FOOTER YEAR
============================================================ */
document.getElementById('year').textContent = new Date().getFullYear();

/* ============================================================
   INITIALIZE
============================================================ */
loadTheme();

});