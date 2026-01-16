// Commercial Printers Page JavaScript

// Product Data - 30+ printer models
const printers = [
    // Konica Minolta Bizhub (7 models - arranged by size)
    { id: 1, brand: 'bizhub', name: 'Bizhub C224', desc: 'Compact 22ppm color MFP for small offices', type: 'color', size: 'small', function: 'mfp', image: 'images/printers/bizhub-hero-1.png' },
    { id: 2, brand: 'bizhub', name: 'Bizhub C284', desc: 'Versatile 28ppm color multifunction printer', type: 'color', size: 'small', function: 'mfp', image: 'images/printers/bizhub-hero-2.png' },
    { id: 3, brand: 'bizhub', name: 'Bizhub C364', desc: 'Professional 36ppm color office solution', type: 'color', size: 'medium', function: 'mfp', image: 'images/printers/bizhub-hero-1.png' },
    { id: 4, brand: 'bizhub', name: 'Bizhub C3351', desc: 'Advanced 33ppm color MFP with mobile printing', type: 'color', size: 'medium', function: 'mfp', image: 'images/printers/bizhub-hero-2.png' },
    { id: 5, brand: 'bizhub', name: 'Bizhub C454', desc: 'High-performance 45ppm color multifunction system', type: 'color', size: 'medium', function: 'mfp', image: 'images/printers/bizhub-hero-1.png' },
    { id: 6, brand: 'bizhub', name: 'Bizhub C458', desc: 'Enterprise 45ppm color MFP with advanced features', type: 'color', size: 'medium', function: 'mfp', image: 'images/printers/bizhub-hero-2.png' },
    { id: 7, brand: 'bizhub', name: 'Bizhub C558', desc: 'Production-level 55ppm color printing powerhouse', type: 'color', size: 'industrial', function: 'mfp', image: 'images/printers/bizhub-hero-1.png' },

    // Kyocera (10 models)
    { id: 13, brand: 'kyocera', name: 'TASKalfa 3252ci', desc: 'Efficient color multifunction printer', type: 'color', size: 'medium', function: 'mfp', image: 'images/printers/kyocera-hero-1.png' },
    { id: 14, brand: 'kyocera', name: 'TASKalfa 4052ci', desc: 'Professional color document system', type: 'color', size: 'medium', function: 'mfp', image: 'images/printers/kyocera-hero-2.png' },
    { id: 15, brand: 'kyocera', name: 'TASKalfa 5052ci', desc: 'High-speed color MFP', type: 'color', size: 'industrial', function: 'mfp', image: 'images/printers/kyocera-hero-1.png' },
    { id: 16, brand: 'kyocera', name: 'TASKalfa 6052ci', desc: 'Enterprise color printing solution', type: 'color', size: 'industrial', function: 'mfp', image: 'images/printers/kyocera-hero-2.png' },
    { id: 17, brand: 'kyocera', name: 'TASKalfa 7052ci', desc: 'Premium color production printer', type: 'color', size: 'industrial', function: 'mfp', image: 'images/printers/kyocera-hero-1.png' },
    { id: 18, brand: 'kyocera', name: 'TASKalfa 2552ci', desc: 'Compact color office MFP', type: 'color', size: 'small', function: 'mfp', image: 'images/printers/kyocera-hero-2.png' },
    { id: 19, brand: 'kyocera', name: 'TASKalfa 3011i', desc: 'Monochrome business printer', type: 'mono', size: 'small', function: 'mfp', image: 'images/printers/kyocera-hero-1.png' },
    { id: 20, brand: 'kyocera', name: 'TASKalfa 4012i', desc: 'High-volume monochrome MFP', type: 'mono', size: 'medium', function: 'mfp', image: 'images/printers/kyocera-hero-2.png' },
    { id: 21, brand: 'kyocera', name: 'TASKalfa 5003i', desc: 'Enterprise monochrome system', type: 'mono', size: 'industrial', function: 'mfp', image: 'images/printers/kyocera-hero-1.png' },
    { id: 22, brand: 'kyocera', name: 'TASKalfa 6003i', desc: 'Production monochrome printer', type: 'mono', size: 'industrial', function: 'mfp', image: 'images/printers/kyocera-hero-2.png' },

    // Xerox AltaLink (4 models - arranged by size)
    { id: 23, brand: 'xerox', name: 'AltaLink C8035', desc: 'Versatile 35ppm color multifunction printer', type: 'color', size: 'medium', function: 'mfp', image: 'images/printers/xerox-hero-1.png' },
    { id: 24, brand: 'xerox', name: 'AltaLink C8045', desc: 'Professional 45ppm color office solution', type: 'color', size: 'medium', function: 'mfp', image: 'images/printers/xerox-hero-2.png' },
    { id: 25, brand: 'xerox', name: 'AltaLink C8055', desc: 'High-performance 55ppm color MFP', type: 'color', size: 'industrial', function: 'mfp', image: 'images/printers/xerox-hero-1.png' },
    { id: 26, brand: 'xerox', name: 'AltaLink C8070', desc: 'Production-level 70ppm color powerhouse', type: 'color', size: 'industrial', function: 'mfp', image: 'images/printers/xerox-hero-2.png' },
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
        // 3 panels = 200vw total movement to show all panels (0vw -> -100vw -> -200vw)
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
function createProductCard(printer) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.brand = printer.brand;
    card.dataset.type = printer.type;
    card.dataset.size = printer.size;
    card.dataset.function = printer.function;

    card.innerHTML = `
    <img src="${printer.image}" alt="${printer.name}" class="product-card-image">
    <div class="product-card-content">
      <span class="brand-badge ${printer.brand}">${printer.brand === 'bizhub' ? 'Bizhub' : printer.brand.charAt(0).toUpperCase() + printer.brand.slice(1)}</span>
      <h3>${printer.name}</h3>
      <p class="product-card-desc">${printer.desc}</p>
      <a href="quote.html" class="btn btn-primary">Get a Quote</a>
    </div>
  `;

    return card;
}

// Render Products with Performance Optimization
function renderProducts(filteredPrinters = printers) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    // Fade out current products
    grid.style.opacity = '0';
    grid.style.transform = 'translateY(20px)';

    setTimeout(() => {
        grid.innerHTML = '';

        if (filteredPrinters.length === 0) {
            grid.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #718096; font-size: 1.125rem;">No printers match your filters. Please adjust your selection.</p>';
            grid.style.opacity = '1';
            grid.style.transform = 'translateY(0)';
            return;
        }

        // Use DocumentFragment for better performance
        const fragment = document.createDocumentFragment();

        filteredPrinters.forEach((printer, index) => {
            const card = createProductCard(printer);
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
    const brandFilter = document.getElementById('filter-brand');
    const typeFilter = document.getElementById('filter-type');
    const sizeFilter = document.getElementById('filter-size');
    const functionFilter = document.getElementById('filter-function');

    let filterTimeout;

    function applyFilters() {
        // Clear previous timeout
        clearTimeout(filterTimeout);

        // Debounce filter application
        filterTimeout = setTimeout(() => {
            const brand = brandFilter.value;
            const type = typeFilter.value;
            const size = sizeFilter.value;
            const func = functionFilter.value;

            const filtered = printers.filter(printer => {
                return (brand === 'all' || printer.brand === brand) &&
                    (type === 'all' || printer.type === type) &&
                    (size === 'all' || printer.size === size) &&
                    (func === 'all' || printer.function === func);
            });

            renderProducts(filtered);
        }, 150);
    }

    brandFilter.addEventListener('change', applyFilters);
    typeFilter.addEventListener('change', applyFilters);
    sizeFilter.addEventListener('change', applyFilters);
    functionFilter.addEventListener('change', applyFilters);
}

// Render Featured Brand Strips
function renderFeaturedStrips() {
    // Featured Bizhub - select 3 high-end models
    const featuredBizhub = printers.filter(p => p.brand === 'bizhub' && p.size === 'industrial').slice(0, 3);
    const bizhubGrid = document.getElementById('featured-bizhub');
    if (bizhubGrid) {
        featuredBizhub.forEach(printer => {
            bizhubGrid.appendChild(createProductCard(printer));
        });
    }

    // Featured Kyocera - select 3 high-end models
    const featuredKyocera = printers.filter(p => p.brand === 'kyocera' && p.size === 'industrial').slice(0, 3);
    const kyoceraGrid = document.getElementById('featured-kyocera');
    if (kyoceraGrid) {
        featuredKyocera.forEach(printer => {
            kyoceraGrid.appendChild(createProductCard(printer));
        });
    }

    // Featured Xerox - select 3 models
    const featuredXerox = printers.filter(p => p.brand === 'xerox' && p.size === 'industrial').slice(0, 3);
    const xeroxGrid = document.getElementById('featured-xerox');
    if (xeroxGrid) {
        featuredXerox.forEach(printer => {
            xeroxGrid.appendChild(createProductCard(printer));
        });
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initHorizontalScroll();
    renderProducts();
    initFilters();
});
