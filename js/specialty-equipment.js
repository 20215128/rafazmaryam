// Specialty Equipment Page JavaScript

// Toggle Filters Function
function toggleFilters() {
    const filterBar = document.getElementById('filterBar');
    const arrow = document.querySelector('.filter-arrow');

    if (filterBar.style.display === 'none' || filterBar.style.display === '') {
        filterBar.style.display = 'flex';
        arrow.textContent = '▲';
    } else {
        filterBar.style.display = 'none';
        arrow.textContent = '▼';
    }
}

// Product Data - 20+ specialty equipment items
const specialtyEquipment = [
    // Yinghe DTF Machines (6 models)
    { id: 1, type: 'dtf', name: 'Yinghe A3 DTF Printer', desc: 'Compact A3 DTF printer with XP600 printhead', size: 'small', function: 'apparel', image: 'images/equipment/dtf-pro-600.png' },
    { id: 2, type: 'dtf', name: 'Yinghe 60cm DTF (XP600)', desc: 'A2 DTF printer with 2x Epson XP600 printheads', size: 'medium', function: 'apparel', image: 'images/products/yinghe-60cm-dtf-xp600.png' },
    { id: 3, type: 'dtf', name: 'Yinghe 60cm DTF (4720)', desc: 'Professional A2 DTF with 4720 printhead', size: 'medium', function: 'apparel', image: 'images/products/yinghe-60cm-dtf-4720.png' },
    { id: 4, type: 'dtf', name: 'Yinghe 60cm DTF (i3200)', desc: 'Advanced A2 DTF with i3200 printhead upgrade', size: 'medium', function: 'apparel', image: 'images/products/yinghe-60cm-dtf-i3200.png' },
    { id: 5, type: 'dtf', name: 'Yinghe A2 DTF Machine', desc: 'High-speed 40m/h DTF system with powder shaker', size: 'industrial', function: 'apparel', image: 'images/equipment/dtf-enterprise-1600.png' },
    { id: 6, type: 'dtf', name: 'Yinghe YH-700DTF', desc: 'Industrial 60cm DTF printer, 12sqm/h speed', size: 'industrial', function: 'apparel', image: 'images/equipment/dtf-studio-500.png' },

    // Flex Printers (2 models)
    { id: 7, type: 'flex', name: 'Flex Banner 6ft', desc: '6-foot wide format flex printer for banners', size: 'medium', function: 'signage', image: 'images/equipment/flex-banner-pro.png' },
    { id: 8, type: 'flex', name: 'Flex Banner 10ft', desc: '10-foot large format flex printing system', size: 'industrial', function: 'signage', image: 'images/equipment/flex-industrial.png' },

    // Cutting Plotters (2 models)
    { id: 9, type: 'cutter', name: 'Cutting Plotter 2ft', desc: 'Compact 2-foot vinyl cutting plotter', size: 'small', function: 'signage', image: 'images/equipment/cutter-2ft.png' },
    { id: 10, type: 'cutter', name: 'Cutting Plotter 4ft', desc: 'Professional 4-foot cutting plotter', size: 'medium', function: 'signage', image: 'images/equipment/cutter-4ft.png' },

    // Heat Press (1 model)
    { id: 12, type: 'heatpress', name: 'Heat Press 60x80', desc: 'Professional 60x80cm heat transfer press', size: 'medium', function: 'apparel', image: 'images/equipment/heat-press-industrial.png' },

    // UV Printer (2 models)
    { id: 16, type: 'uv', name: 'UV Flatbed A3', desc: 'Desktop A3 UV flatbed printer for small items', size: 'small', function: 'promotional', image: 'images/equipment/uv-flatbed-a3.png' },
    { id: 17, type: 'uv', name: 'Yinghe A3 UV DTF Printer', desc: 'Professional A3 UV DTF printer for transfers and direct printing', size: 'small', function: 'apparel', image: 'images/products/a3-uv-dtf-yinghe.png' },

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
        'cutter': 'Cutter',
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
