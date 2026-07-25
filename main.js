// Mobile nav toggle
(function(){
  const t = document.getElementById('navtoggle');
  const n = document.getElementById('navlinks');
  if(t){ t.addEventListener('click', () => {
    const open = n.classList.toggle('open');
    t.setAttribute('aria-expanded', open);
  }); }
})();

// Theme toggle (dark default, light alt) - persists via localStorage
(function(){
  const btn = document.getElementById('themeToggle');
  const root = document.documentElement;
  const saved = localStorage.getItem('yt-theme');
  if(saved === 'light'){ root.setAttribute('data-theme','light'); }
  if(btn){
    btn.addEventListener('click', () => {
      const isLight = root.getAttribute('data-theme') === 'light';
      if(isLight){ root.removeAttribute('data-theme'); localStorage.setItem('yt-theme','dark'); }
      else { root.setAttribute('data-theme','light'); localStorage.setItem('yt-theme','light'); }
    });
  }
})();

// Hero rotating role text
(function(){
  const el = document.getElementById('typedRole');
  if(!el) return;
  const roles = ['ECE Student', 'Full-Stack Developer', 'Embedded Systems Builder'];
  let i = 0;
  setInterval(() => {
    i = (i + 1) % roles.length;
    el.textContent = roles[i];
  }, 2200);
})();

// Project filter pills
(function(){
  const pills = document.querySelectorAll('.filter-pill');
  const cards = document.querySelectorAll('.project[data-tags]');
  if(!pills.length) return;
  pills.forEach(p => {
    p.addEventListener('click', () => {
      pills.forEach(x => x.classList.remove('active'));
      p.classList.add('active');
      const f = p.dataset.filter;
      cards.forEach(c => {
        const tags = c.dataset.tags.split(' ');
        c.style.display = (f === 'all' || tags.includes(f)) ? '' : 'none';
      });
    });
  });
})();

// Contact form -> opens mail client with prefilled message
(function(){
  const form = document.getElementById('contactForm');
  if(!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const subject = encodeURIComponent('Portfolio contact from ' + (name || 'website visitor'));
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:tiwariyashi2626@gmail.com?subject=${subject}&body=${body}`;
  });
})();
