// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Portfolio Modals
const modalTriggers = document.querySelectorAll('.portfolio-trigger');
const modal = document.getElementById('portfolio-modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close');

modalTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const modalId = trigger.getAttribute('data-modal');
    const modalDiv = document.getElementById(modalId);
    if (modalDiv) {
      modalBody.innerHTML = modalDiv.innerHTML;
    }
    modal.style.display = 'block';
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Contact Form Validation
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    // Simulate submission (replace with actual endpoint like Formspree)
    alert('Message sent! (In a real setup, this would submit to a backend.)');
    contactForm.reset();
  } else {
    alert('Please fill in all fields.');
  }
});

// Back to Top Button
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTop.style.display = 'flex';
  } else {
    backToTop.style.display = 'none';
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Animate Skill Bars on Scroll
const observerOptions = {
  threshold: 0.5,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const progressBars = entry.target.querySelectorAll('.progress');
      progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
      });
    }
  });
}, observerOptions);

const skillsSection = document.getElementById('projects-skills');
if (skillsSection) {
  observer.observe(skillsSection);
}

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navUl = document.querySelector('nav ul');

if (menuToggle && navUl) {
  menuToggle.addEventListener('click', () => {
    navUl.classList.toggle('active');
    // Optional: Add hamburger animation
    menuToggle.classList.toggle('active');
  });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    navUl.classList.remove('active');
    menuToggle.classList.remove('active');
  });
});

// Touch support for modals (swipe to close on mobile)
let startY;
const modalElement = document.getElementById('portfolio-modal');

if (modalElement) {
  modalElement.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
  });

  modalElement.addEventListener('touchmove', (e) => {
    if (!startY) return;
    const currentY = e.touches[0].clientY;
    const diffY = currentY - startY;
    if (diffY > 50) { // Swipe down to close
      modalElement.style.display = 'none';
      startY = null;
    }
  });

  modalElement.addEventListener('touchend', () => {
    startY = null;
  });
}
