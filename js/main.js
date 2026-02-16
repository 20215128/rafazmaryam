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
  function initFormValidation() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
      form.addEventListener('submit', function (e) {
        // If attributes 'action' contains 'formsubmit.co', we want to allow the default submission
        // Check native validity first 
        if (!this.checkValidity()) {
          e.preventDefault();
          // Simple visual feedback (browser default usually handles this, but just in case)
          alert('Please fill in all required fields marked with *');
        }
        // If valid, we do NOTHING and let the form submit naturally to the action URL
      });
    });
  }
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

  // Sticky navigation on scroll (Optimized)
  let isScrolled = false;
  window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
      if (!isScrolled) {
        navbar.classList.add('scrolled');
        isScrolled = true;
      }
    } else {
      if (isScrolled) {
        navbar.classList.remove('scrolled');
        isScrolled = false;
      }
    }
  }, { passive: true }); // Passive listener for better scroll performance

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
  const currentPage = window.location.pathname.split('/').pop() || 'index'; // Default to index if empty

  navLinks.forEach(link => {
    let linkPage = link.getAttribute('href');
    // Normalize linkPage (remove ./ or / if present for comparison)
    linkPage = linkPage.replace(/^(\.\/|\/)/, '');

    // Normalize currentPage (handle index case)
    let current = currentPage;
    if (current === '' || current === 'index.html') current = 'index';

    // Simple matching or match index
    if (linkPage === current || (linkPage === './' && current === 'index')) {
      link.classList.add('active');
    }
  });

  // Make department cards clickable (Consolidated from inline script)
  const deptCards = document.querySelectorAll('.modern-dept-card');
  if (deptCards.length > 0) {
    deptCards.forEach(card => {
      // Get the link inside the card
      const link = card.querySelector('a[href^="departments.html"]');
      if (link) {
        const href = link.getAttribute('href');
        // Add click handler to the entire card
        card.style.cursor = 'pointer';
        card.addEventListener('click', function (e) {
          // Don't navigate if clicking the link itself
          if (e.target.tagName !== 'A' && !e.target.closest('a')) {
            window.location.href = href;
          }
        });
      }
    });
  }
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
// Configure your WhatsApp business numbers here (format: country code + number, no + or spaces)
const WHATSAPP_PRINTING = '2349166860809'; // Printing services (quotes, general inquiries)
const WHATSAPP_EQUIPMENT = '2348064060430'; // Equipment & supplies (consumables, machines, servicing)

// Helper function to get the appropriate WhatsApp number based on page
function getWhatsAppNumber() {
  const currentPage = window.location.pathname.split('/').pop() || 'index';

  // Equipment & supplies pages use the equipment number
  const equipmentPages = [
    'commercial-printers',
    'commercial-printers.html', // Keep just in case
    'specialty-equipment',
    'specialty-equipment.html',
    'consumables-supplies',
    'consumables-supplies.html'
  ];

  if (equipmentPages.includes(currentPage)) {
    return WHATSAPP_EQUIPMENT;
  }

  // All other pages use the printing services number
  return WHATSAPP_PRINTING;
}

// Helper function to generate WhatsApp URL with custom message
function getWhatsAppURL(message = 'Hello! I would like to get a quote for printing services.') {
  const number = getWhatsAppNumber();
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

// Initialize WhatsApp float button
function initWhatsApp() {
  const whatsappBtn = document.querySelector('.whatsapp-float');
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const currentPage = window.location.pathname.split('/').pop() || 'index';

      // On homepage, show modal to choose between printing or equipment
      if (currentPage === 'index.html' || currentPage === 'index' || currentPage === '') {
        showWhatsAppModal();
        return;
      }

      let message = 'Hello! I would like to inquire about your printing services.';

      // Customize message based on page
      if (currentPage === 'commercial-printers.html' || currentPage === 'commercial-printers') {
        message = "Hi! I'm interested in commercial printers. Can you help me?";
      } else if (currentPage === 'specialty-equipment.html' || currentPage === 'specialty-equipment') {
        message = "Hi! I'm interested in specialty printing equipment. Can you help me?";
      } else if (currentPage === 'consumables-supplies.html' || currentPage === 'consumables-supplies') {
        message = "Hi! I'd like to inquire about printing consumables and supplies.";
      }

      // Use location.href for better mobile compatibility
      const whatsappURL = getWhatsAppURL(message);
      window.location.href = whatsappURL;
    });
  }
}

// Show WhatsApp selection modal
function showWhatsAppModal() {
  const modal = document.getElementById('whatsappModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

// Hide WhatsApp selection modal
function hideWhatsAppModal() {
  const modal = document.getElementById('whatsappModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Initialize all WhatsApp CTAs on the page
function initWhatsAppCTAs() {
  const whatsappLinks = document.querySelectorAll('a[href^="whatsapp://"]');
  whatsappLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const customMessage = this.getAttribute('data-message') || 'Hello! I would like to get a quote for printing services.';
      const whatsappURL = getWhatsAppURL(customMessage);
      window.location.href = whatsappURL;
    });
  });
}

// Auto-initialize WhatsApp on page load
if (WHATSAPP_PRINTING && WHATSAPP_EQUIPMENT) {
  document.addEventListener('DOMContentLoaded', function () {
    initWhatsApp();
    initWhatsAppCTAs();
  });
} else {
  console.warn('⚠️ WhatsApp numbers not configured. Please update WHATSAPP_PRINTING and WHATSAPP_EQUIPMENT in main.js');
}

// === UNIFIED COUNTER ANIMATION ===
function animateCounter(element, target, duration = 2000) {
  if (element.dataset.animated === 'true') return;
  element.dataset.animated = 'true';

  // Determine if we need to handle decimals
  const isDecimal = target % 1 !== 0;
  const startTimestamp = performance.now();

  function step(currentTimestamp) {
    const elapsed = currentTimestamp - startTimestamp;
    const progress = Math.min(elapsed / duration, 1);

    // Easing function for smoother effect (easeOutExpo)
    const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

    const current = easeProgress * target;

    if (isDecimal) {
      element.textContent = current.toFixed(1);
    } else {
      element.textContent = Math.floor(current).toLocaleString();
    }

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      // Ensure final value is exact
      element.textContent = isDecimal ? target.toFixed(1) : target.toLocaleString();
    }
  }

  requestAnimationFrame(step);
}

// Initialize counters (unified observer for both class types)
document.addEventListener('DOMContentLoaded', function () {
  const counterElements = document.querySelectorAll('.counter, .stat-number');

  if (counterElements.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
          const element = entry.target;
          // Get target from data-target OR data-count
          const targetValue = element.getAttribute('data-target') || element.getAttribute('data-count');

          if (targetValue) {
            // Clean the string (remove commas if present in the HTML attribute) and parse
            const target = parseFloat(targetValue.replace(/,/g, ''));
            if (!isNaN(target)) {
              animateCounter(element, target);
              element.classList.add('counted');
              // Stop observing once started
              counterObserver.unobserve(element);
            }
          }
        }
      });
    }, { threshold: 0.5 });

    counterElements.forEach(counter => counterObserver.observe(counter));
  }
});

// === SMOOTH SCROLL FOR DEPT PILLS ===
document.addEventListener('DOMContentLoaded', function () {
  const deptPills = document.querySelectorAll('.dept-pill');
  deptPills.forEach(pill => {
    pill.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 100;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});

// === PERFORMANCE: AGGRESSIVE IMAGE LOADING OPTIMIZATION ===
document.addEventListener('DOMContentLoaded', function () {
  // Add lazy loading to ALL images EXCEPT hero banner
  const allImages = document.querySelectorAll('img:not(.hero-banner-image)');

  allImages.forEach((img) => {
    // Add native lazy loading
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }

    // Add decode async for faster rendering
    img.setAttribute('decoding', 'async');
  });

  // Intersection Observer for critical images
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          imageObserver.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px' // Start loading 50px before entering viewport
    });

    // Observe all images with data-src
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
});
