// ===================================
// PRINTMASTER PRO - MAIN JAVASCRIPT
// ===================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

  // === NAVIGATION ===
  initNavigation();

  // === SCROLL ANIMATIONS ===
  initScrollAnimations();

  // === FORM VALIDATION ===
  initFormValidation();

  // === SMOOTH SCROLLING ===
  initSmoothScrolling();

  // === PORTFOLIO LIGHTBOX ===
  if (document.querySelector('.portfolio-grid')) {
    initPortfolioLightbox();
  }
});

// === NAVIGATION FUNCTIONALITY ===
function initNavigation() {
  const navbar = document.querySelector('.navbar');
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky navigation on scroll
  window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (mobileToggle) {
    mobileToggle.addEventListener('click', function () {
      navMenu.classList.toggle('active');

      // Animate hamburger icon
      const spans = this.querySelectorAll('span');
      spans[0].style.transform = navMenu.classList.contains('active')
        ? 'rotate(45deg) translateY(8px)'
        : 'none';
      spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
      spans[2].style.transform = navMenu.classList.contains('active')
        ? 'rotate(-45deg) translateY(-8px)'
        : 'none';
    });
  }

  // Close mobile menu when clicking a link
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 768) {
        navMenu.classList.remove('active');
        const spans = mobileToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  });

  // Highlight active page in navigation
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// === SCROLL ANIMATIONS ===
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.scroll-reveal');

  const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(element => {
    revealOnScroll.observe(element);
  });
}

// === SMOOTH SCROLLING ===
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const offsetTop = target.offsetTop - 80; // Account for fixed navbar
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}

// === FORM VALIDATION ===
function initFormValidation() {
  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      let isValid = true;
      const formData = {};

      // Clear previous errors
      form.querySelectorAll('.form-error').forEach(error => error.remove());

      // Validate each required field
      const requiredFields = form.querySelectorAll('[required]');
      requiredFields.forEach(field => {
        const value = field.value.trim();
        formData[field.name] = value;

        if (!value) {
          isValid = false;
          showError(field, 'This field is required');
        } else if (field.type === 'email' && !isValidEmail(value)) {
          isValid = false;
          showError(field, 'Please enter a valid email address');
        } else if (field.type === 'tel' && !isValidPhone(value)) {
          isValid = false;
          showError(field, 'Please enter a valid phone number');
        }
      });

      if (isValid) {
        // Form is valid - show success message
        showSuccessMessage(form);

        // Log form data (in production, this would be sent to a server)
        console.log('Form submitted:', formData);

        // Reset form after 2 seconds
        setTimeout(() => {
          form.reset();
        }, 2000);
      }
    });
  });
}

function showError(field, message) {
  field.style.borderColor = 'var(--color-error)';
  const errorDiv = document.createElement('div');
  errorDiv.className = 'form-error';
  errorDiv.textContent = message;
  field.parentNode.appendChild(errorDiv);

  // Remove error styling when user starts typing
  field.addEventListener('input', function () {
    this.style.borderColor = '';
    const error = this.parentNode.querySelector('.form-error');
    if (error) error.remove();
  }, { once: true });
}

function showSuccessMessage(form) {
  const successDiv = document.createElement('div');
  successDiv.style.cssText = `
    background-color: var(--color-success);
    color: white;
    padding: 1rem 2rem;
    border-radius: var(--radius-md);
    margin-top: 1rem;
    text-align: center;
    font-weight: 600;
    animation: fadeIn 0.3s ease-out;
  `;
  successDiv.textContent = '✓ Thank you! We will contact you shortly.';
  form.appendChild(successDiv);

  setTimeout(() => {
    successDiv.remove();
  }, 5000);
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone) {
  const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
  return phoneRegex.test(phone);
}

// === PORTFOLIO LIGHTBOX ===
function initPortfolioLightbox() {
  const portfolioImages = document.querySelectorAll('.portfolio-item img');

  portfolioImages.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function () {
      openLightbox(this.src, this.alt);
    });
  });
}

function openLightbox(imageSrc, imageAlt) {
  // Create lightbox overlay
  const lightbox = document.createElement('div');
  lightbox.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.95);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    cursor: pointer;
    animation: fadeIn 0.3s ease-out;
  `;

  // Create image
  const img = document.createElement('img');
  img.src = imageSrc;
  img.alt = imageAlt;
  img.style.cssText = `
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-2xl);
  `;

  // Create close button
  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = '&times;';
  closeBtn.style.cssText = `
    position: absolute;
    top: 20px;
    right: 30px;
    background: none;
    border: none;
    color: white;
    font-size: 3rem;
    cursor: pointer;
    z-index: 10001;
    transition: transform 0.2s;
  `;

  closeBtn.addEventListener('mouseenter', () => {
    closeBtn.style.transform = 'scale(1.2)';
  });

  closeBtn.addEventListener('mouseleave', () => {
    closeBtn.style.transform = 'scale(1)';
  });

  lightbox.appendChild(img);
  lightbox.appendChild(closeBtn);
  document.body.appendChild(lightbox);

  // Prevent body scroll
  document.body.style.overflow = 'hidden';

  // Close lightbox on click
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox || e.target === closeBtn) {
      closeLightbox(lightbox);
    }
  });

  // Close on escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeLightbox(lightbox);
    }
  });
}

function closeLightbox(lightbox) {
  lightbox.style.opacity = '0';
  setTimeout(() => {
    lightbox.remove();
    document.body.style.overflow = '';
  }, 300);
}

// === WHATSAPP INTEGRATION ===
// Configure your WhatsApp business number here (format: country code + number, no + or spaces)
// Example: '1234567890' for USA number or '971501234567' for UAE number
const WHATSAPP_NUMBER = '1234567890'; // REPLACE WITH YOUR ACTUAL WHATSAPP NUMBER

// Helper function to generate WhatsApp URL with custom message
function getWhatsAppURL(message = 'Hello! I would like to get a quote for printing services.') {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Initialize WhatsApp float button
function initWhatsApp() {
  const whatsappBtn = document.querySelector('.whatsapp-float');
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const message = 'Hello! I would like to inquire about your printing services.';
      window.open(getWhatsAppURL(message), '_blank');
    });
  }
}

// Initialize all WhatsApp CTAs on the page
function initWhatsAppCTAs() {
  const whatsappLinks = document.querySelectorAll('a[href^="whatsapp://"]');
  whatsappLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const customMessage = this.getAttribute('data-message') || 'Hello! I would like to get a quote for printing services.';
      window.open(getWhatsAppURL(customMessage), '_blank');
    });
  });
}

// Auto-initialize WhatsApp on page load
if (WHATSAPP_NUMBER && WHATSAPP_NUMBER !== '1234567890') {
  document.addEventListener('DOMContentLoaded', function () {
    initWhatsApp();
    initWhatsAppCTAs();
  });
} else {
  console.warn('⚠️ WhatsApp number not configured. Please update WHATSAPP_NUMBER in main.js');
}

// === COUNTER ANIMATION (for stats) ===
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);

  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = target.toLocaleString();
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start).toLocaleString();
    }
  }, 16);
}

// Initialize counters when they come into view
const counters = document.querySelectorAll('.counter');
if (counters.length > 0) {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        const target = parseInt(entry.target.getAttribute('data-target'));
        animateCounter(entry.target, target);
        entry.target.classList.add('counted');
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => counterObserver.observe(counter));
}
