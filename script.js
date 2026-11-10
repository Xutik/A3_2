document.addEventListener('DOMContentLoaded', () => {
  const siteNav = document.querySelector('.site-nav');
  if (!siteNav) return;

  const openBtn = document.createElement('button');
  openBtn.type = 'button';
  openBtn.className = 'mobile-menu-open-btn';
  openBtn.setAttribute('aria-label', 'Open navigation menu');
  openBtn.innerHTML = `
    <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="34" height="4" rx="2" fill="white"/>
      <rect y="10" width="34" height="4" rx="2" fill="white"/>
      <rect y="20" width="34" height="4" rx="2" fill="white"/>
    </svg>
  `;
  siteNav.appendChild(openBtn);

  const overlay = document.createElement('div');
  overlay.className = 'mobile-menu-overlay';
  overlay.setAttribute('aria-hidden', 'true');

  const closeBtn = document.createElement('button');
  closeBtn.type = 'button';
  closeBtn.className = 'mobile-menu-close-btn';
  closeBtn.setAttribute('aria-label', 'Close navigation menu');
  closeBtn.innerHTML = `
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 2L26 26M26 2L2 26" stroke="white" stroke-width="4" stroke-linecap="round"/>
    </svg>
  `;
  overlay.appendChild(closeBtn);

  const navList = document.createElement('ul');
  navList.className = 'mobile-menu-list';

  const menuItems = [
    { title: 'Play online', href: '#play' },
    { title: 'Play on-site', href: '#play' },
    { title: 'The story', href: '#story' },
    { title: 'Contact', href: '#contact' },
  ];

  menuItems.forEach((item) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = item.href;
    a.textContent = item.title;
    a.className = 'mobile-menu-link';

    a.addEventListener('click', closeMenu);

    li.appendChild(a);
    navList.appendChild(li);
  });

  overlay.appendChild(navList);
  document.body.appendChild(overlay);

  function openMenu() {
    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; 
  }

  function closeMenu() {
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; 
  }

  openBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
      closeMenu();
    }
  });
});