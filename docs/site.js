/* MarsNext — Theme toggle, live Olympus Coder star badge, spotlight & reveal */
(() => {
  const root = document.documentElement;
  const saved = localStorage.getItem('marsnext-theme');
  const initial = saved || 'dark';
  const btn = document.getElementById('theme-toggle');

  function apply(theme) {
    root.dataset.theme = theme;
    if (btn) {
      btn.textContent = theme === 'dark' ? '☀' : '☾';
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }
  }
  apply(initial);

  if (btn) {
    btn.addEventListener('click', () => {
      const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('marsnext-theme', next);
      apply(next);
    });
  }

  // Live GitHub star count for flagship Olympus Coder
  const starEl = document.getElementById('olympus-stars');
  async function loadStars() {
    if (!starEl) return;
    const KEY = 'marsnext-olympus-stars-v1';
    try {
      const cached = JSON.parse(sessionStorage.getItem(KEY) || 'null');
      if (cached && typeof cached.stars === 'number' && Date.now() - cached.ts < 600_000) {
        starEl.textContent = `★ ${cached.stars}`;
        return;
      }
    } catch {}
    try {
      const res = await fetch('https://api.github.com/repos/martianacademy/olympus-coder', {
        headers: { Accept: 'application/vnd.github+json' },
      });
      if (!res.ok) return;
      const data = await res.json();
      if (typeof data.stargazers_count === 'number') {
        starEl.textContent = `★ ${data.stargazers_count}`;
        try {
          sessionStorage.setItem(KEY, JSON.stringify({ stars: data.stargazers_count, ts: Date.now() }));
        } catch {}
      }
    } catch {}
  }
  void loadStars();

  // Cursor spotlight on cards
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });

  // Scroll reveal
  const items = [...document.querySelectorAll('.reveal')];
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('in');
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    items.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min((i % 4) * 70, 210)}ms`;
      io.observe(el);
    });
  } else {
    items.forEach((el) => el.classList.add('in'));
  }
})();
