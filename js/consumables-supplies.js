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

    // Bizhub 225/C35 - Toners
    { id: 4, type: 'toner', name: 'Bizhub 225/C35 Toner - Black', desc: 'Original black toner cartridge for Bizhub 225/C35', brand: 'bizhub', category: 'bizhub-toner', image: 'images/consumables/bizhub-toner-black.png' },
    { id: 5, type: 'toner', name: 'Bizhub 225/C35 Toner - Cyan', desc: 'Original cyan toner cartridge for Bizhub 225/C35', brand: 'bizhub', category: 'bizhub-toner', image: 'images/consumables/bizhub-toner-cyan.png' },
    { id: 6, type: 'toner', name: 'Bizhub 225/C35 Toner - Magenta', desc: 'Original magenta toner cartridge for Bizhub 225/C35', brand: 'bizhub', category: 'bizhub-toner', image: 'images/consumables/bizhub-toner-magenta.png' },
    { id: 7, type: 'toner', name: 'Bizhub 225/C35 Toner - Yellow', desc: 'Original yellow toner cartridge for Bizhub 225/C35', brand: 'bizhub', category: 'bizhub-toner', image: 'images/consumables/bizhub-toner-yellow.png' },

    // Bizhub 225/C35 - Developers
    { id: 8, type: 'developer', name: 'Developer - Big Sachet', desc: 'Large developer sachet for Bizhub 225/C35', brand: 'bizhub', category: 'bizhub-developer', image: 'images/consumables/developer-big.png' },
    { id: 9, type: 'developer', name: 'Developer - Small Sachet', desc: 'Small developer sachet for Bizhub 225/C35', brand: 'bizhub', category: 'bizhub-developer', image: 'images/consumables/developer-small.png' },

    // Bizhub 225/C35 - Drums
    { id: 10, type: 'drum', name: 'Original OPC Drum', desc: 'Genuine OPC drum unit for Bizhub 225/C35', brand: 'bizhub', category: 'bizhub-drum', image: 'images/consumables/opc-drum.png' },

    // Bizhub 225/C35 - Sensors
    { id: 11, type: 'sensor', name: 'Drum Sensor', desc: 'Drum sensor for Bizhub 225/C35', brand: 'bizhub', category: 'bizhub-sensor', image: 'images/consumables/drum-sensor.png' },
    { id: 12, type: 'sensor', name: 'Toner Sensor', desc: 'Toner level sensor for Bizhub 225/C35', brand: 'bizhub', category: 'bizhub-sensor', image: 'images/consumables/toner-sensor.png' },

    // Bizhub 225/C35 - Belts & Components
    { id: 13, type: 'belt', name: 'Transfer Belt', desc: 'Transfer belt unit for Bizhub 225/C35', brand: 'bizhub', category: 'bizhub-belt', image: 'images/consumables/transfer-belt.png' },
    { id: 14, type: 'cartridge', name: 'Direct Cartridges', desc: 'Direct imaging cartridges for Bizhub 225/C35', brand: 'bizhub', category: 'bizhub-cartridge', image: 'images/consumables/direct-cartridge.png' },

    // Bizhub 225/C35 - Cleaning Blades
    { id: 15, type: 'blade', name: 'Drum Cleaning Blade', desc: 'Drum cleaning blade for Bizhub 225/C35', brand: 'bizhub', category: 'bizhub-blade', image: 'images/consumables/drum-blade.png' },
    { id: 16, type: 'blade', name: 'Transfer Belt Cleaning Blade', desc: 'Transfer belt cleaning blade for Bizhub 225/C35', brand: 'bizhub', category: 'bizhub-blade', image: 'images/consumables/belt-blade.png' },

    // Kyocera - Color Toners
    { id: 17, type: 'toner', name: 'Kyocera Tech Color Toners', desc: 'High-quality tech color toners for Kyocera printers', brand: 'kyocera', category: 'kyocera-toner', image: 'images/consumables/kyocera-tech-toner.png' },
    { id: 18, type: 'toner', name: 'Rafaz Noble Crown Toners', desc: 'Premium Rafaz Noble Crown toners for Kyocera', brand: 'kyocera', category: 'kyocera-toner', image: 'images/consumables/rafaz-noble-crown.png' },
    { id: 19, type: 'toner', name: 'Kyocera Original Color Toners', desc: 'Genuine Kyocera original color toner cartridges', brand: 'kyocera', category: 'kyocera-toner', image: 'images/consumables/kyocera-original-toner.png' },

    // Kyocera - Drums (Multiple Models)
    { id: 20, type: 'drum', name: 'Kyocera Drum - 1128', desc: 'Original drum unit for Kyocera 1128', brand: 'kyocera', category: 'kyocera-drum', image: 'images/consumables/kyocera-drum-1128.png' },
    { id: 21, type: 'drum', name: 'Kyocera Drum - 3140', desc: 'Original drum unit for Kyocera 3140', brand: 'kyocera', category: 'kyocera-drum', image: 'images/consumables/kyocera-drum-3140.png' },
    { id: 22, type: 'drum', name: 'Kyocera Drum - 1620', desc: 'Original drum unit for Kyocera 1620', brand: 'kyocera', category: 'kyocera-drum', image: 'images/consumables/kyocera-drum-1620.png' },
    { id: 23, type: 'drum', name: 'Kyocera Drum - 2030', desc: 'Original drum unit for Kyocera 2030', brand: 'kyocera', category: 'kyocera-drum', image: 'images/consumables/kyocera-drum-2030.png' },
    { id: 24, type: 'drum', name: 'Kyocera Drum - 2530', desc: 'Original drum unit for Kyocera 2530', brand: 'kyocera', category: 'kyocera-drum', image: 'images/consumables/kyocera-drum-2530.png' },

    // Kyocera - Cleaning Blades & Toners
    { id: 25, type: 'blade', name: 'Kyocera B/W Cleaning Blades', desc: 'Black & white cleaning blades for Kyocera printers', brand: 'kyocera', category: 'kyocera-blade', image: 'images/consumables/kyocera-bw-blade.png' },
    { id: 26, type: 'toner', name: 'Katun White Bottle Toners', desc: 'Katun white bottle toners for Kyocera printers', brand: 'kyocera', category: 'kyocera-toner', image: 'images/consumables/katun-white-bottle.png' },

    // Kyocera - Heater Rollers (Multiple Models)
    { id: 27, type: 'roller', name: 'Kyocera Heater Roller - 3140', desc: 'Heater roller for Kyocera 3140', brand: 'kyocera', category: 'kyocera-roller', image: 'images/consumables/kyocera-roller-3140.png' },
    { id: 28, type: 'roller', name: 'Kyocera Heater Roller - 2100', desc: 'Heater roller for Kyocera 2100', brand: 'kyocera', category: 'kyocera-roller', image: 'images/consumables/kyocera-roller-2100.png' },
    { id: 29, type: 'roller', name: 'Kyocera Heater Roller - 4100', desc: 'Heater roller for Kyocera 4100', brand: 'kyocera', category: 'kyocera-roller', image: 'images/consumables/kyocera-roller-4100.png' },
    { id: 30, type: 'roller', name: 'Kyocera Heater Roller - 3010', desc: 'Heater roller for Kyocera 3010', brand: 'kyocera', category: 'kyocera-roller', image: 'images/consumables/kyocera-roller-3010.png' },
    { id: 31, type: 'roller', name: 'Kyocera Heater Roller - 1128', desc: 'Heater roller for Kyocera 1128', brand: 'kyocera', category: 'kyocera-roller', image: 'images/consumables/kyocera-roller-1128.png' },
    { id: 32, type: 'roller', name: 'Kyocera Heater Roller - 1118', desc: 'Heater roller for Kyocera 1118', brand: 'kyocera', category: 'kyocera-roller', image: 'images/consumables/kyocera-roller-1118.png' },

    // HP - Golden Crown Toners
    { id: 33, type: 'toner', name: 'HP Golden Crown Black & White Toner', desc: 'Golden Crown B/W toner for HP printers', brand: 'hp', category: 'hp-toner', image: 'images/consumables/hp-golden-crown-bw.png' },
    { id: 34, type: 'toner', name: 'HP Golden Crown Colour Toner', desc: 'Golden Crown color toner for HP printers', brand: 'hp', category: 'hp-toner', image: 'images/consumables/hp-golden-crown-color.png' },

    // HP - Sensors
    { id: 35, type: 'sensor', name: 'HP Colour Sensors', desc: 'Color sensors for HP printers', brand: 'hp', category: 'hp-sensor', image: 'images/consumables/hp-sensor-color.png' },
    { id: 36, type: 'sensor', name: 'HP Black & White Sensors', desc: 'B/W sensors for HP printers', brand: 'hp', category: 'hp-sensor', image: 'images/consumables/hp-sensor-bw.png' },

    // HP - Drums
    { id: 37, type: 'drum', name: 'HP Colour Drums', desc: 'Color drum units for HP printers', brand: 'hp', category: 'hp-drum', image: 'images/consumables/hp-drum-color.png' },
    { id: 38, type: 'drum', name: 'HP Black & White Drums', desc: 'B/W drum units for HP printers', brand: 'hp', category: 'hp-drum', image: 'images/consumables/hp-drum-bw.png' },

    // Accessories - Cables
    { id: 39, type: 'cable', name: 'Power Cables', desc: 'Universal power cables for printers', brand: 'universal', category: 'cable', image: 'images/consumables/power-cable.png' },
    { id: 40, type: 'cable', name: 'Printer Cables', desc: 'USB and network printer cables', brand: 'universal', category: 'cable', image: 'images/consumables/printer-cable.png' },

    // DTF & Flex Printing Consumables
    { id: 41, type: 'ink', name: 'Flex Ink', desc: 'High-quality flex printing ink', brand: 'flex', category: 'flex-ink', image: 'images/consumables/flex-ink.png' },
    { id: 42, type: 'ink', name: 'DTF Yinghe Inks', desc: 'Yinghe brand DTF printing inks', brand: 'dtf', category: 'dtf-ink', image: 'images/consumables/dtf-yinghe-ink.png' },
    { id: 43, type: 'ink', name: 'DTF MT Inks', desc: 'MT brand DTF printing inks', brand: 'dtf', category: 'dtf-ink', image: 'images/consumables/dtf-mt-ink.png' },
    { id: 44, type: 'powder', name: 'DTF Powder', desc: 'Hot melt adhesive powder for DTF printing', brand: 'dtf', category: 'dtf-powder', image: 'images/consumables/dtf-powder.png' },

    // Xerox - Consumables
    { id: 45, type: 'toner', name: 'Xerox Colour Toners', desc: 'Original color toner cartridges for Xerox printers', brand: 'xerox', category: 'xerox-toner', image: 'images/consumables/xerox-color-toner.png' },
    { id: 46, type: 'drum', name: 'Xerox Normal Drums', desc: 'Standard drum units for Xerox printers', brand: 'xerox', category: 'xerox-drum', image: 'images/consumables/xerox-normal-drum.png' },
    { id: 47, type: 'drum', name: 'Xerox Original Drums', desc: 'Genuine original drum units for Xerox printers', brand: 'xerox', category: 'xerox-drum', image: 'images/consumables/xerox-original-drum.png' },
    { id: 48, type: 'sensor', name: 'Xerox Sensors', desc: 'Various sensors for Xerox printers', brand: 'xerox', category: 'xerox-sensor', image: 'images/consumables/xerox-sensor.png' },
    { id: 49, type: 'sensor', name: 'Xerox Developer Sensors', desc: 'Developer sensors for Xerox printers', brand: 'xerox', category: 'xerox-sensor', image: 'images/consumables/xerox-developer-sensor.png' },

    // Additional Cables
    { id: 50, type: 'cable', name: 'USB Cables', desc: 'USB cables for printer connectivity', brand: 'universal', category: 'cable', image: 'images/consumables/usb-cable.png' },

    // DTF Materials
    { id: 51, type: 'material', name: 'DTF Material A2', desc: 'A2 size DTF transfer material', brand: 'dtf', category: 'dtf-material', image: 'images/consumables/dtf-material-a2.png' },
    { id: 52, type: 'material', name: 'DTF Material A3', desc: 'A3 size DTF transfer material', brand: 'dtf', category: 'dtf-material', image: 'images/consumables/dtf-material-a3.png' },
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
