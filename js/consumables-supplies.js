// Consumables & Supplies Page JavaScript

// Product Data - 25+ consumable items
const consumables = [
    // Toner Cartridges (8 models)
    { id: 1, type: 'toner', name: 'Konica Minolta TN-324K Black Toner', desc: 'High-yield black toner cartridge', brand: 'bizhub', compatibility: 'bizhub', image: 'images/consumables/toner-km-black.png' },
    { id: 2, type: 'toner', name: 'Konica Minolta TN-324C Cyan Toner', desc: 'High-yield cyan toner cartridge', brand: 'bizhub', compatibility: 'bizhub', image: 'images/consumables/toner-km-cyan.png' },
    { id: 3, type: 'toner', name: 'Kyocera TK-5270K Black Toner', desc: 'Original black toner for TASKalfa series', brand: 'kyocera', compatibility: 'kyocera', image: 'images/consumables/toner-kyocera-black.png' },
    { id: 4, type: 'toner', name: 'Kyocera TK-5270M Magenta Toner', desc: 'Original magenta toner cartridge', brand: 'kyocera', compatibility: 'kyocera', image: 'images/consumables/toner-kyocera-magenta.png' },
    { id: 5, type: 'toner', name: 'Xerox 006R01513 Black Toner', desc: 'Genuine Xerox black toner', brand: 'xerox', compatibility: 'xerox', image: 'images/consumables/toner-xerox-black.png' },
    { id: 6, type: 'toner', name: 'Xerox 006R01514 Yellow Toner', desc: 'Genuine Xerox yellow toner', brand: 'xerox', compatibility: 'xerox', image: 'images/consumables/toner-xerox-yellow.png' },
    { id: 7, type: 'toner', name: 'Compatible Black Toner - Universal', desc: 'High-quality compatible black toner', brand: 'compatible', compatibility: 'universal', image: 'images/consumables/toner-compatible-black.png' },
    { id: 8, type: 'toner', name: 'Compatible Color Set - Universal', desc: 'CMY compatible toner set', brand: 'compatible', compatibility: 'universal', image: 'images/consumables/toner-compatible-color.png' },

    // Ink Cartridges (5 models)
    { id: 9, type: 'ink', name: 'DTF Ink - White 1L', desc: 'Premium white ink for DTF printing', brand: 'dtf', compatibility: 'dtf', image: 'images/consumables/ink-dtf-white.png' },
    { id: 10, type: 'ink', name: 'DTF Ink - CMYK Set 1L', desc: 'Complete CMYK ink set for DTF', brand: 'dtf', compatibility: 'dtf', image: 'images/consumables/ink-dtf-cmyk.png' },
    { id: 11, type: 'ink', name: 'UV Ink - CMYK 500ml', desc: 'UV-curable ink for flatbed printers', brand: 'uv', compatibility: 'uv', image: 'images/consumables/ink-uv-cmyk.png' },
    { id: 12, type: 'ink', name: 'Sublimation Ink - 4 Color Set', desc: 'High-quality sublimation ink', brand: 'sublimation', compatibility: 'sublimation', image: 'images/consumables/ink-sublimation.png' },
    { id: 13, type: 'ink', name: 'Eco-Solvent Ink - 1L', desc: 'Eco-solvent ink for flex printing', brand: 'flex', compatibility: 'flex', image: 'images/consumables/ink-ecosolvent.png' },

    // Papers & Media (6 models)
    { id: 14, type: 'paper', name: 'A4 Copy Paper - 80gsm (Ream)', desc: 'Standard white copy paper, 500 sheets', brand: 'universal', compatibility: 'universal', image: 'images/consumables/paper-a4-copy.png' },
    { id: 15, type: 'paper', name: 'A3 Premium Paper - 100gsm', desc: 'High-quality A3 paper for presentations', brand: 'universal', compatibility: 'universal', image: 'images/consumables/paper-a3-premium.png' },
    { id: 16, type: 'paper', name: 'Glossy Photo Paper - A4', desc: 'Professional glossy photo paper', brand: 'universal', compatibility: 'universal', image: 'images/consumables/paper-glossy.png' },
    { id: 17, type: 'paper', name: 'DTF Transfer Film - Roll', desc: 'Premium DTF transfer film, 100m roll', brand: 'dtf', compatibility: 'dtf', image: 'images/consumables/film-dtf.png' },
    { id: 18, type: 'paper', name: 'Flex Banner Material - Roll', desc: 'Outdoor flex banner material, 50m', brand: 'flex', compatibility: 'flex', image: 'images/consumables/banner-flex.png' },
    { id: 19, type: 'paper', name: 'Sublimation Paper - A3', desc: 'Heat transfer sublimation paper', brand: 'sublimation', compatibility: 'sublimation', image: 'images/consumables/paper-sublimation.png' },

    // Maintenance Kits (6 models)
    { id: 20, type: 'maintenance', name: 'Konica Minolta Maintenance Kit', desc: 'Complete maintenance kit for Bizhub series', brand: 'bizhub', compatibility: 'bizhub', image: 'images/consumables/maintenance-km.png' },
    { id: 21, type: 'maintenance', name: 'Kyocera Drum Unit', desc: 'Replacement drum for TASKalfa series', brand: 'kyocera', compatibility: 'kyocera', image: 'images/consumables/drum-kyocera.png' },
    { id: 22, type: 'maintenance', name: 'Xerox Fuser Unit', desc: 'Genuine Xerox fuser assembly', brand: 'xerox', compatibility: 'xerox', image: 'images/consumables/fuser-xerox.png' },
    { id: 23, type: 'maintenance', name: 'DTF Powder - Adhesive 1kg', desc: 'Hot melt adhesive powder for DTF', brand: 'dtf', compatibility: 'dtf', image: 'images/consumables/powder-dtf.png' },
    { id: 24, type: 'maintenance', name: 'Printhead Cleaning Kit', desc: 'Universal printhead cleaning solution', brand: 'universal', compatibility: 'universal', image: 'images/consumables/cleaning-kit.png' },
    { id: 25, type: 'maintenance', name: 'Waste Toner Container', desc: 'Replacement waste toner box', brand: 'universal', compatibility: 'universal', image: 'images/consumables/waste-container.png' },
];

// Product Card Creation
function createProductCard(consumable) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.type = consumable.type;
    card.dataset.brand = consumable.brand;
    card.dataset.compatibility = consumable.compatibility;

    // Format type name for badge
    const typeName = {
        'toner': 'Toner',
        'ink': 'Ink',
        'paper': 'Paper/Media',
        'maintenance': 'Maintenance'
    }[consumable.type] || consumable.type;

    card.innerHTML = `
    <img src="${consumable.image}" alt="${consumable.name}" class="product-card-image">
    <div class="product-card-content">
      <span class="brand-badge ${consumable.type}">${typeName}</span>
      <h3>${consumable.name}</h3>
      <p class="product-card-desc">${consumable.desc}</p>
      <a href="quote.html" class="btn btn-primary">Get a Quote</a>
    </div>
  `;

    return card;
}

// Render Products with Performance Optimization
function renderProducts(filteredConsumables = consumables) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    // Fade out current products
    grid.style.opacity = '0';
    grid.style.transform = 'translateY(20px)';

    setTimeout(() => {
        grid.innerHTML = '';

        if (filteredConsumables.length === 0) {
            grid.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #718096; font-size: 1.125rem;">No consumables match your filters. Please adjust your selection.</p>';
            grid.style.opacity = '1';
            grid.style.transform = 'translateY(0)';
            return;
        }

        // Use DocumentFragment for better performance
        const fragment = document.createDocumentFragment();

        filteredConsumables.forEach((consumable, index) => {
            const card = createProductCard(consumable);
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
    const brandFilter = document.getElementById('filter-brand');
    const compatibilityFilter = document.getElementById('filter-compatibility');

    if (!typeFilter || !brandFilter || !compatibilityFilter) return;

    let filterTimeout;

    function applyFilters() {
        // Clear previous timeout
        clearTimeout(filterTimeout);

        // Debounce filter application
        filterTimeout = setTimeout(() => {
            const type = typeFilter.value;
            const brand = brandFilter.value;
            const compatibility = compatibilityFilter.value;

            const filtered = consumables.filter(consumable => {
                return (type === 'all' || consumable.type === type) &&
                    (brand === 'all' || consumable.brand === brand) &&
                    (compatibility === 'all' || consumable.compatibility === compatibility);
            });

            renderProducts(filtered);
        }, 150);
    }

    typeFilter.addEventListener('change', applyFilters);
    brandFilter.addEventListener('change', applyFilters);
    compatibilityFilter.addEventListener('change', applyFilters);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    initFilters();
});
