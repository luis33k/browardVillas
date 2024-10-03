const navLinks = document.querySelectorAll('.nav-link');


navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); // Prevent default link behavior
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        smoothScroll(targetSection);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
  
    if (hamburger && navMenu) {
      // Toggle the 'active' class on the hamburger and nav-menu
      hamburger.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent click from being detected outside
        hamburger.classList.toggle('toggle');
        navMenu.classList.toggle('active');
      });
  
      // Close the navMenu when clicking outside of it
      document.addEventListener('click', (event) => {
        if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
          hamburger.classList.remove('toggle');
          navMenu.classList.remove('active');
        }
      });
    }
  });