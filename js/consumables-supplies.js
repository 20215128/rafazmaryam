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
        'blade': 'Cleaning Blade'
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
