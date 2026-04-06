document.addEventListener('DOMContentLoaded', function() {
  
  const navToggle = document.querySelector('.nav-toggle');
  const navItems = document.querySelector('.nav-items');
  if (navToggle && navItems) {
    navToggle.addEventListener('click', function() {
      const isOpen = navItems.classList.toggle('open');
      navItems.style.display = isOpen ? 'flex' : 'none';
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });
    
    document.addEventListener('click', function(e) {
      if (!navItems.contains(e.target) && !navToggle.contains(e.target)) {
        navItems.classList.remove('open');
        navItems.style.display = 'none';
      }
    });

    window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
        navItems.classList.remove('open');
        navItems.style.display = '';
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Open navigation');
      }
    });
  }
});