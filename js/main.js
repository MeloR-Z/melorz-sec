// Filter writeups
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.writeup-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    cards.forEach(card => {
      const show = filter === 'all' || card.dataset.category === filter;
      card.style.display = show ? 'block' : 'none';
      card.style.animation = show ? 'fadeIn 0.3s ease' : '';
    });
  });
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Animate focus bars on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.focus-fill').forEach(bar => {
        bar.style.width = bar.style.width;
      });
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('#about').forEach(el => observer.observe(el));

// Highlight active nav
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 200) current = sec.id;
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}`
      ? 'var(--blue-bright)'
      : '';
  });
});
