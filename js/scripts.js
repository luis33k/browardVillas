const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        smoothScroll(targetSection);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
  
    if (hamburger && navMenu) {
      hamburger.addEventListener('click', (event) => {
        event.stopPropagation(); 
        hamburger.classList.toggle('toggle');
        navMenu.classList.toggle('active');
      });
  
      document.addEventListener('click', (event) => {
        if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
          hamburger.classList.remove('toggle');
          navMenu.classList.remove('active');
        }
      });
    }
  });

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".fade-in-section");
  
  const options = {
    root: null,
    threshold: 0.4, 
    rootMargin: "0px" 

  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-visible"); 
        observer.unobserve(entry.target); 
      }
    });
  }, options);
  
  sections.forEach(section => {
    observer.observe(section);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const textElements = document.querySelectorAll(".fade-in-text");
  
  const options = {
    root: null,
    threshold: 0.2, 
    rootMargin: "0px" 
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const textElement = entry.target;
        const text = textElement.textContent;
        
        textElement.innerHTML = text
          .split("")
          .map((char, index) => `<span style="animation-delay: ${index * 0.035}s">${char}</span>`)
          .join("");
        
        observer.unobserve(entry.target);
      }
    });
  }, options);
  
  textElements.forEach(textElement => {
    observer.observe(textElement);
  });
});