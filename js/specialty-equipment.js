// Specialty Equipment Page JavaScript

// Product Data - 20+ specialty equipment items
const specialtyEquipment = [
    // DTF Machines (6 models)
    { id: 1, type: 'dtf', name: 'DTF Pro 600', desc: 'Entry-level DTF printer for small businesses', size: 'small', function: 'apparel', image: 'images/equipment/dtf-pro-600.png' },
    { id: 2, type: 'dtf', name: 'DTF Industrial 1200', desc: 'High-volume DTF printing system', size: 'industrial', function: 'apparel', image: 'images/equipment/dtf-industrial-1200.png' },
    { id: 3, type: 'dtf', name: 'DTF Compact 400', desc: 'Space-saving DTF solution', size: 'small', function: 'apparel', image: 'images/equipment/dtf-compact-400.png' },
    { id: 4, type: 'dtf', name: 'DTF Pro Max 800', desc: 'Professional DTF printer with dual heads', size: 'medium', function: 'apparel', image: 'images/equipment/dtf-pro-max-800.png' },
    { id: 5, type: 'dtf', name: 'DTF Enterprise 1600', desc: 'Enterprise-grade DTF production system', size: 'industrial', function: 'apparel', image: 'images/equipment/dtf-enterprise-1600.png' },
    { id: 6, type: 'dtf', name: 'DTF Studio 500', desc: 'Perfect for design studios and startups', size: 'small', function: 'apparel', image: 'images/equipment/dtf-studio-500.png' },

    // Flex Printers (5 models)
    { id: 7, type: 'flex', name: 'Flex Banner Pro 1.6m', desc: 'Wide format flex printer for banners', size: 'medium', function: 'signage', image: 'images/equipment/flex-banner-pro.png' },
    { id: 8, type: 'flex', name: 'Flex Industrial 3.2m', desc: 'Large format flex printing system', size: 'industrial', function: 'signage', image: 'images/equipment/flex-industrial.png' },
    { id: 9, type: 'flex', name: 'Flex Compact 1.2m', desc: 'Compact flex printer for small shops', size: 'small', function: 'signage', image: 'images/equipment/flex-compact.png' },
    { id: 10, type: 'flex', name: 'Flex Pro 2.0m', desc: 'Professional flex printing solution', size: 'medium', function: 'signage', image: 'images/equipment/flex-pro.png' },
    { id: 11, type: 'flex', name: 'Flex Max 2.5m', desc: 'High-speed flex banner printer', size: 'medium', function: 'signage', image: 'images/equipment/flex-max.png' },

    // Heat Press (4 models)
    { id: 12, type: 'heatpress', name: 'Heat Press Standard 40x50', desc: 'Standard heat press for t-shirts', size: 'small', function: 'apparel', image: 'images/equipment/heat-press-standard.png' },
    { id: 13, type: 'heatpress', name: 'Heat Press Pro 40x60', desc: 'Professional heat transfer press', size: 'medium', function: 'apparel', image: 'images/equipment/heat-press-pro.png' },
    { id: 14, type: 'heatpress', name: 'Heat Press Auto 50x70', desc: 'Automatic pneumatic heat press', size: 'medium', function: 'apparel', image: 'images/equipment/heat-press-auto.png' },
    { id: 15, type: 'heatpress', name: 'Heat Press Industrial 60x80', desc: 'Heavy-duty industrial heat press', size: 'industrial', function: 'apparel', image: 'images/equipment/heat-press-industrial.png' },

    // UV Printers (3 models)
    { id: 16, type: 'uv', name: 'UV Flatbed A3', desc: 'Desktop UV printer for small items', size: 'small', function: 'promotional', image: 'images/equipment/uv-flatbed-a3.png' },
    { id: 17, type: 'uv', name: 'UV Flatbed A1', desc: 'Large format UV flatbed printer', size: 'medium', function: 'promotional', image: 'images/equipment/uv-flatbed-a1.png' },
    { id: 18, type: 'uv', name: 'UV Industrial 2x3m', desc: 'Industrial UV printing system', size: 'industrial', function: 'promotional', image: 'images/equipment/uv-industrial.png' },

    // Sublimation (3 models)
    { id: 19, type: 'sublimation', name: 'Sublimation Pro A3', desc: 'Professional sublimation printer', size: 'small', function: 'apparel', image: 'images/equipment/sublimation-pro-a3.png' },
    { id: 20, type: 'sublimation', name: 'Sublimation Wide A2', desc: 'Wide format sublimation system', size: 'medium', function: 'apparel', image: 'images/equipment/sublimation-wide-a2.png' },
    { id: 21, type: 'sublimation', name: 'Sublimation Industrial A1', desc: 'High-volume sublimation printer', size: 'industrial', function: 'apparel', image: 'images/equipment/sublimation-industrial-a1.png' },
];

// Horizontal Scroll Functionality with Performance Optimization
function initHorizontalScroll() {
    const section = document.getElementById('brandScrollSection');
    const track = document.getElementById('brandScrollTrack');

    if (!section || !track) return;

    let ticking = false;
    let lastScrollY = 0;

    function updateHorizontalScroll() {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollY = lastScrollY;

        // Calculate scroll progress within the section
        const scrollProgress = (scrollY - sectionTop) / (sectionHeight - window.innerHeight);
        const clampedProgress = Math.max(0, Math.min(1, scrollProgress));

        // Move horizontally based on scroll progress
        const translateX = clampedProgress * -200;

        // Use translate3d for GPU acceleration
        track.style.transform = `translate3d(${translateX}vw, 0, 0)`;

        ticking = false;
    }

    function onScroll() {
        lastScrollY = window.scrollY;

        if (!ticking) {
            requestAnimationFrame(updateHorizontalScroll);
            ticking = true;
        }
    }

    // Use passive listener for better scroll performance
    window.addEventListener('scroll', onScroll, { passive: true });
}

// Product Card Creation
function createProductCard(equipment) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.type = equipment.type;
    card.dataset.size = equipment.size;
    card.dataset.function = equipment.function;

    // Format type name for badge
    const typeName = {
        'dtf': 'DTF',
        'flex': 'Flex',
        'heatpress': 'Heat Press',
        'uv': 'UV Printer',
        'sublimation': 'Sublimation'
    }[equipment.type] || equipment.type;

    card.innerHTML = `
    <img src="${equipment.image}" alt="${equipment.name}" class="product-card-image">
    <div class="product-card-content">
      <span class="brand-badge ${equipment.type}">${typeName}</span>
      <h3>${equipment.name}</h3>
      <p class="product-card-desc">${equipment.desc}</p>
      <a href="quote.html" class="btn btn-primary">Get a Quote</a>
    </div>
  `;

    return card;
}

// Render Products with Performance Optimization
function renderProducts(filteredEquipment = specialtyEquipment) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    // Fade out current products
    grid.style.opacity = '0';
    grid.style.transform = 'translateY(20px)';

    setTimeout(() => {
        grid.innerHTML = '';

        if (filteredEquipment.length === 0) {
            grid.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #718096; font-size: 1.125rem;">No equipment matches your filters. Please adjust your selection.</p>';
            grid.style.opacity = '1';
            grid.style.transform = 'translateY(0)';
            return;
        }

        // Use DocumentFragment for better performance
        const fragment = document.createDocumentFragment();

        filteredEquipment.forEach((equipment, index) => {
            const card = createProductCard(equipment);
            // Stagger animation
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.animation = `fadeInUp 0.5s ease-out ${index * 0.05}s forwards`;
            fragment.appendChild(card);
        });

        grid.appendChild(fragment);

        // Fade in grid
        requestAnimationFrame(() => {
            grid.style.opacity = '1';
            grid.style.transform = 'translateY(0)';
        });
    }, 200);
}

// Filter Functionality with Debouncing
function initFilters() {
    const typeFilter = document.getElementById('filter-type');
    const sizeFilter = document.getElementById('filter-size');
    const functionFilter = document.getElementById('filter-function');

    if (!typeFilter || !sizeFilter || !functionFilter) return;

    let filterTimeout;

    function applyFilters() {
        // Clear previous timeout
        clearTimeout(filterTimeout);

        // Debounce filter application
        filterTimeout = setTimeout(() => {
            const type = typeFilter.value;
            const size = sizeFilter.value;
            const func = functionFilter.value;

            const filtered = specialtyEquipment.filter(equipment => {
                return (type === 'all' || equipment.type === type) &&
                    (size === 'all' || equipment.size === size) &&
                    (func === 'all' || equipment.function === func);
            });

            renderProducts(filtered);
        }, 150);
    }

    typeFilter.addEventListener('change', applyFilters);
    sizeFilter.addEventListener('change', applyFilters);
    functionFilter.addEventListener('change', applyFilters);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initHorizontalScroll();
    renderProducts();
    initFilters();
});
