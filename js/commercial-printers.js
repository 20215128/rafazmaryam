// Commercial Printers Page JavaScript

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

// Product Data - 30+ printer models
const printers = [
    // Konica Minolta Bizhub (7 models - arranged by size)
    { id: 1, brand: 'bizhub', name: 'Bizhub C224', desc: 'Compact 22ppm color MFP for small offices', type: 'color', size: 'small', function: 'mfp', image: 'images/printers/bizhub-c224.png' },
    { id: 2, brand: 'bizhub', name: 'Bizhub C284', desc: 'Versatile 28ppm color multifunction printer', type: 'color', size: 'small', function: 'mfp', image: 'images/printers/bizhub-c284.png' },
    { id: 3, brand: 'bizhub', name: 'Bizhub C364', desc: 'Professional 36ppm color office solution', type: 'color', size: 'medium', function: 'mfp', image: 'images/printers/bizhub-c364.png' },
    { id: 4, brand: 'bizhub', name: 'Bizhub C3351', desc: 'Advanced 33ppm color MFP with mobile printing', type: 'color', size: 'medium', function: 'mfp', image: 'images/printers/bizhub-c3351.png' },
    { id: 5, brand: 'bizhub', name: 'Bizhub C454', desc: 'High-performance 45ppm color multifunction system', type: 'color', size: 'medium', function: 'mfp', image: 'images/printers/bizhub-c454.png' },
    { id: 6, brand: 'bizhub', name: 'Bizhub C458', desc: 'Enterprise 45ppm color MFP with advanced features', type: 'color', size: 'medium', function: 'mfp', image: 'images/printers/bizhub-c458.png' },
    { id: 7, brand: 'bizhub', name: 'Bizhub C558', desc: 'Production-level 55ppm color printing powerhouse', type: 'color', size: 'industrial', function: 'mfp', image: 'images/printers/bizhub-c558.png' },

    // Kyocera (20 models - organized by series)
    // FS Series - Monochrome
    { id: 8, brand: 'kyocera', name: 'Kyocera FS-1350', desc: 'Compact monochrome laser printer', type: 'mono', size: 'small', function: 'printer', image: 'images/printers/kyocera-fs1350.png' },
    { id: 9, brand: 'kyocera', name: 'Kyocera FS-1370', desc: 'Fast monochrome office printer', type: 'mono', size: 'small', function: 'printer', image: 'images/printers/kyocera-fs1370.png' },
    { id: 10, brand: 'kyocera', name: 'Kyocera FS-3140', desc: 'Professional monochrome MFP', type: 'mono', size: 'medium', function: 'mfp', image: 'images/printers/kyocera-fs3140.png' },
    { id: 11, brand: 'kyocera', name: 'Kyocera FS-3640', desc: 'High-speed monochrome multifunction system', type: 'mono', size: 'medium', function: 'mfp', image: 'images/printers/kyocera-fs3640.png' },
    { id: 12, brand: 'kyocera', name: 'Kyocera FS-4030i', desc: 'Enterprise monochrome printer with network', type: 'mono', size: 'medium', function: 'printer', image: 'images/printers/kyocera-fs4030.png' },
    { id: 13, brand: 'kyocera', name: 'Kyocera FS-4035i', desc: 'Advanced monochrome MFP solution', type: 'mono', size: 'medium', function: 'mfp', image: 'images/printers/kyocera-fs4030.png' },

    // Numeric Series - Small Office
    { id: 14, brand: 'kyocera', name: 'Kyocera 420i', desc: 'Compact multifunction copier', type: 'mono', size: 'small', function: 'mfp', image: 'images/printers/kyocera-420i.png' },
    { id: 15, brand: 'kyocera', name: 'Kyocera 520i', desc: 'Versatile office MFP', type: 'mono', size: 'small', function: 'mfp', image: 'images/printers/kyocera-520i.png' },
    { id: 16, brand: 'kyocera', name: 'Kyocera 2040', desc: 'Reliable 20ppm monochrome copier', type: 'mono', size: 'small', function: 'mfp', image: 'images/printers/kyocera-2040.png' },
    { id: 17, brand: 'kyocera', name: 'Kyocera 2140', desc: 'Efficient 21ppm office system', type: 'mono', size: 'small', function: 'mfp', image: 'images/printers/kyocera-2140.png' },

    // Numeric Series - Medium Office
    { id: 18, brand: 'kyocera', name: 'Kyocera 3050', desc: 'Professional 30ppm multifunction printer', type: 'mono', size: 'medium', function: 'mfp', image: 'images/printers/kyocera-3050.png' },
    { id: 19, brand: 'kyocera', name: 'Kyocera 3055', desc: 'Advanced 30ppm office MFP', type: 'mono', size: 'medium', function: 'mfp', image: 'images/printers/kyocera-hero-2.png' },
    { id: 20, brand: 'kyocera', name: 'Kyocera 3060', desc: 'High-performance 30ppm system', type: 'mono', size: 'medium', function: 'mfp', image: 'images/printers/kyocera-3060.png' },
    { id: 21, brand: 'kyocera', name: 'Kyocera 3160', desc: 'Versatile 31ppm multifunction device', type: 'mono', size: 'medium', function: 'mfp', image: 'images/printers/kyocera-hero-2.png' },
    { id: 22, brand: 'kyocera', name: 'Kyocera 3920', desc: 'Robust 39ppm office workhorse', type: 'mono', size: 'medium', function: 'mfp', image: 'images/printers/kyocera-3920.png' },
    { id: 23, brand: 'kyocera', name: 'Kyocera 4050', desc: 'Professional 40ppm multifunction system', type: 'mono', size: 'medium', function: 'mfp', image: 'images/printers/kyocera-hero-2.png' },
    { id: 24, brand: 'kyocera', name: 'Kyocera 4200', desc: 'High-speed 42ppm office MFP', type: 'mono', size: 'medium', function: 'mfp', image: 'images/printers/kyocera-hero-1.png' },
    { id: 25, brand: 'kyocera', name: 'Kyocera 4300', desc: 'Enterprise 43ppm multifunction printer', type: 'mono', size: 'medium', function: 'mfp', image: 'images/printers/kyocera-hero-2.png' },

    // Numeric Series - Industrial
    { id: 26, brand: 'kyocera', name: 'Kyocera 6025', desc: 'Production-level 60ppm MFP', type: 'mono', size: 'industrial', function: 'mfp', image: 'images/printers/kyocera-hero-1.png' },
    { id: 27, brand: 'kyocera', name: 'Kyocera 6030', desc: 'High-volume 60ppm printing powerhouse', type: 'mono', size: 'industrial', function: 'mfp', image: 'images/printers/kyocera-hero-2.png' },

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
