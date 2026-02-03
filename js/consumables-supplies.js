// Consumables & Supplies Page JavaScript

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

// Product Data - Specific Consumables & Supplies
const consumables = [
    // RZ Products
    { id: 1, type: 'ink', name: 'RZ Ink', desc: 'High-quality RZ duplicator ink', brand: 'rz', category: 'rz-ink', image: 'images/consumables/rz-ink.png' },
    { id: 2, type: 'master', name: 'RZ Master A4', desc: 'RZ Master A4 size for duplicators', brand: 'rz', category: 'rz-master', image: 'images/consumables/rz-master-a4.png' },

    // CPI Products
    { id: 3, type: 'ink', name: 'CPI Ink', desc: 'Premium CPI duplicator ink', brand: 'cpi', category: 'cpi-ink', image: 'images/consumables/cpi-ink.png' },

    // Bizhub 225/C35 - Toners (All Colors)
    { id: 4, type: 'toner', name: 'Bizhub 225/C35 Toner Cartridges', desc: 'Original toner cartridges for Bizhub 225/C35 - Available in Black, Cyan, Magenta, Yellow', brand: 'bizhub', category: 'bizhub-toner', colors: ['Black', 'Cyan', 'Magenta', 'Yellow'], image: 'images/consumables/bizhub-toner-black.png' },

    // Bizhub 225/C35 - Developers
    { id: 8, type: 'developer', name: 'Developer Sachets', desc: 'Developer sachets for Bizhub 225/C35 - Available in Big and Small sizes', brand: 'bizhub', category: 'bizhub-developer', variants: ['Big Sachet', 'Small Sachet'], image: 'images/consumables/developer-big.png' },

    // Bizhub 225/C35 - Drums
    { id: 10, type: 'drum', name: 'Original OPC Drum', desc: 'Genuine OPC drum unit for Bizhub 225/C35', brand: 'bizhub', category: 'bizhub-drum', image: 'images/consumables/opc-drum.png' },

    // Bizhub 225/C35 - Sensors
    { id: 11, type: 'sensor', name: 'Bizhub Universal Sensor Chip', desc: 'Universal sensor chip for Bizhub 225/C35 - Works for both Drum and Toner', brand: 'bizhub', category: 'bizhub-sensor', variants: ['Drum', 'Toner'], image: 'images/consumables/drum-sensor.png' },

    // Bizhub 225/C35 - Belts & Components
    { id: 13, type: 'belt', name: 'Transfer Belt', desc: 'Transfer belt unit for Bizhub 225/C35', brand: 'bizhub', category: 'bizhub-belt', image: 'images/products/bizhub-transfer-belt.png' },
    { id: 14, type: 'cartridge', name: 'Direct Cartridges', desc: 'Direct imaging cartridges for Bizhub 225/C35', brand: 'bizhub', category: 'bizhub-cartridge', image: 'images/products/bizhub-direct-cartridges.png' },

    // Bizhub 225/C35 - Cleaning Blades
    { id: 15, type: 'blade', name: 'Cleaning Blades', desc: 'Cleaning blades for Bizhub 225/C35 - Drum and Transfer Belt', brand: 'bizhub', category: 'bizhub-blade', variants: ['Drum Blade', 'Transfer Belt Blade'], image: 'images/products/bizhub-cleaning-blade.png' },

    // Kyocera - Color Toners
    { id: 17, type: 'toner', name: 'Kyocera Tech Color Toners', desc: 'High-quality tech color toners for Kyocera printers', brand: 'kyocera', category: 'kyocera-toner', image: 'images/products/kyocera-tech-color-toners.png' },
    { id: 18, type: 'toner', name: 'Rafaz Noble Crown Toners', desc: 'Premium Rafaz Noble Crown toners for Kyocera', brand: 'kyocera', category: 'kyocera-toner', image: 'images/consumables/rafaz-noble-crown.png' },
    { id: 19, type: 'toner', name: 'Kyocera Original Color Toners', desc: 'Genuine Kyocera original color toner cartridges', brand: 'kyocera', category: 'kyocera-toner', image: 'images/products/kyocera-original-color-toners.png' },

    // Kyocera - Drums (Multiple Models)
    { id: 20, type: 'drum', name: 'Kyocera Drum Units', desc: 'Original drum units for Kyocera printers - Multiple models available', brand: 'kyocera', category: 'kyocera-drum', variants: ['1128', '3140', '1620', '2030', '2530'], image: 'images/products/kyocera-drum-units.png' },

    // Kyocera - Cleaning Blades & Toners
    { id: 25, type: 'blade', name: 'Kyocera B/W Cleaning Blades', desc: 'Black & white cleaning blades for Kyocera printers', brand: 'kyocera', category: 'kyocera-blade', image: 'images/products/kyocera-bw-cleaning-blade.png' },
    { id: 26, type: 'toner', name: 'Katun Performance Toners', desc: 'Katun Performance toners for Kyocera printers - Available in CMYK colors', brand: 'kyocera', category: 'kyocera-toner', colors: ['Black', 'Cyan', 'Magenta', 'Yellow'], image: 'images/consumables/katun-white-bottle.png' },

    // Kyocera - Heater Rollers (Multiple Models)
    { id: 27, type: 'roller', name: 'Kyocera Heater Rollers', desc: 'Heater rollers for Kyocera printers - Multiple models available', brand: 'kyocera', category: 'kyocera-roller', variants: ['3140', '2100', '4100', '3010', '1128', '1118'], image: 'images/products/kyocera-heater-roller.png' },

    // HP - Golden Crown Toners
    { id: 33, type: 'toner', name: 'HP Golden Crown Toners', desc: 'Golden Crown toners for HP printers - Available in CMYK colors', brand: 'hp', category: 'hp-toner', colors: ['Black', 'Cyan', 'Magenta', 'Yellow'], image: 'images/consumables/hp-golden-crown-bw.png' },

    // HP - Sensors
    { id: 35, type: 'sensor', name: 'HP Sensors', desc: 'Sensors for HP printers - Color and Black & White', brand: 'hp', category: 'hp-sensor', variants: ['Color', 'Black & White'], image: 'images/products/hp-sensor.png' },

    // HP - Drums
    { id: 37, type: 'drum', name: 'HP Drum Units', desc: 'Drum units for HP printers - Color and Black & White', brand: 'hp', category: 'hp-drum', variants: ['Color', 'Black & White'], image: 'images/products/hp-drum-units.png' },

    // Accessories - Cables
    { id: 39, type: 'cable', name: 'Printer Cables', desc: 'Universal cables for printers - Power, USB, and Network', brand: 'universal', category: 'cable', variants: ['Power Cable', 'USB Cable', 'Network Cable'], image: 'images/consumables/power-cable.png' },

    // DTF & Flex Printing Consumables
    { id: 41, type: 'ink', name: 'Flex Printing Ink', desc: 'High-quality flex printing ink - Available in multiple colors', brand: 'flex', category: 'flex-ink', colors: ['Black', 'Cyan', 'Magenta', 'Yellow'], image: 'images/consumables/flex-ink.png' },
    { id: 42, type: 'ink', name: 'DTF Yinghe Inks', desc: 'Yinghe brand DTF printing inks - Available in CMYK colors', brand: 'dtf', category: 'dtf-ink', colors: ['Black', 'Cyan', 'Magenta', 'Yellow'], image: 'images/consumables/dtf-yinghe-ink.png' },
    { id: 43, type: 'ink', name: 'DTF MT Inks', desc: 'MT brand DTF printing inks', brand: 'dtf', category: 'dtf-ink', image: 'images/consumables/dtf-mt-ink.png' },
    { id: 44, type: 'powder', name: 'DTF Powder', desc: 'Hot melt adhesive powder for DTF printing', brand: 'dtf', category: 'dtf-powder', image: 'images/consumables/dtf-powder.png' },

    // Xerox - Consumables
    { id: 45, type: 'toner', name: 'Xerox Colour Toners', desc: 'Original color toner cartridges for Xerox printers', brand: 'xerox', category: 'xerox-toner', image: 'images/products/xerox-colour-toners.png' },
    { id: 46, type: 'drum', name: 'Xerox Drum Units', desc: 'Drum units for Xerox printers - Standard and Genuine Original', brand: 'xerox', category: 'xerox-drum', variants: ['Standard', 'Genuine Original'], image: 'images/products/xerox-drum-units.png' },
    { id: 48, type: 'sensor', name: 'Xerox Universal Sensor Chip', desc: 'Universal sensor chip for Xerox printers - Works for Toner, Drum, and Developer', brand: 'xerox', category: 'xerox-sensor', variants: ['Toner', 'Drum', 'Developer'], image: 'images/consumables/xerox-sensor.png' },



    // DTF Materials
    { id: 51, type: 'material', name: 'DTF Film', desc: 'DTF transfer film - Available in A2 and A3 sizes', brand: 'dtf', category: 'dtf-material', variants: ['A2', 'A3'], image: 'images/consumables/dtf-material-a2.png' },
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
        'ink': 'Ink',
        'master': 'Master',
        'toner': 'Toner',
        'developer': 'Developer',
        'drum': 'Drum',
        'sensor': 'Sensor',
        'belt': 'Belt',
        'cartridge': 'Cartridge',
        'blade': 'Cleaning Blade',
        'roller': 'Heater Roller',
        'cable': 'Cable',
        'powder': 'Powder',
        'material': 'Material'
    }[consumable.type] || consumable.type;

    // Create color badges HTML if colors exist
    let variantBadgesHTML = '';
    if (consumable.colors && consumable.colors.length > 0) {
        variantBadgesHTML = `
            <div class="color-variants">
                ${consumable.colors.map(color => `<span class="color-badge color-${color.toLowerCase()}">${color}</span>`).join('')}
            </div>
        `;
    } else if (consumable.variants && consumable.variants.length > 0) {
        // For non-color variants (like model numbers, sizes, etc.)
        variantBadgesHTML = `
            <div class="color-variants">
                ${consumable.variants.map(variant => `<span class="variant-badge">${variant}</span>`).join('')}
            </div>
        `;
    }

    card.innerHTML = `
    <img src="${consumable.image}" alt="${consumable.name}" class="product-card-image">
    <div class="product-card-content">
      <span class="brand-badge ${consumable.type}">${typeName}</span>
      <h3>${consumable.name}</h3>
      <p class="product-card-desc">${consumable.desc}</p>
      ${variantBadgesHTML}
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

    if (!typeFilter || !brandFilter) return;

    let filterTimeout;

    function applyFilters() {
        // Clear previous timeout
        clearTimeout(filterTimeout);

        // Debounce filter application
        filterTimeout = setTimeout(() => {
            const type = typeFilter.value;
            const brand = brandFilter.value;

            const filtered = consumables.filter(consumable => {
                return (type === 'all' || consumable.type === type) &&
                    (brand === 'all' || consumable.brand === brand);
            });

            renderProducts(filtered);
        }, 150);
    }

    typeFilter.addEventListener('change', applyFilters);
    brandFilter.addEventListener('change', applyFilters);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    initFilters();
});
