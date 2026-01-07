# PrintMaster Pro - Commercial Printing Website

A premium, conversion-optimized website for a commercial printing press featuring 7 specialized departments and comprehensive WhatsApp integration.

## Features

- 🎨 **Premium Design** - Modern, professional design with navy blue and white color scheme
- 💬 **WhatsApp Integration** - Instant quote requests and customer engagement via WhatsApp
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🚀 **Conversion Optimized** - Persuasive copy, testimonials, trust badges, and urgency elements
- 🏢 **7 Departments** - Digital Printing, Offset Printing, Large Format, Binding & Finishing, Packaging & Labels, Corporate Printing, Machine Servicing
- 📸 **Professional Images** - High-quality, photorealistic images for all departments and portfolio items

## Pages

- **Home** - Hero section, trust indicators, department overview, testimonials, CTAs
- **About Us** - Company story, mission, values, team
- **Departments** - Detailed information about all 7 departments
- **Portfolio** - Showcase of completed projects
- **Get a Quote** - WhatsApp-first quote request with form alternative
- **Contact Us** - Multiple contact methods with WhatsApp emphasis

## Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd printing-press
   ```

2. **Configure WhatsApp Number**
   - Open `js/main.js`
   - Find line 314: `const WHATSAPP_NUMBER = '1234567890';`
   - Replace with your WhatsApp business number (format: country code + number, no spaces)
   - Example: `971501234567` for UAE or `12025551234` for USA

3. **Run Local Server**
   ```bash
   python3 -m http.server 8000
   ```
   Then open http://localhost:8000 in your browser

## WhatsApp Integration

All CTAs throughout the site are configured to open WhatsApp with pre-filled messages:
- Hero section CTAs
- Quote page priority section
- Contact page
- Floating WhatsApp button (all pages)

Custom messages can be set using the `data-message` attribute:
```html
<a href="whatsapp://" data-message="Your custom message" class="btn btn-primary">
  Chat on WhatsApp
</a>
```

## Technologies Used

- HTML5
- CSS3 (Vanilla CSS with custom design system)
- JavaScript (ES6+)
- No frameworks or dependencies required

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Project Structure

```
printing-press/
├── index.html              # Homepage
├── about.html              # About page
├── departments.html        # Departments page
├── portfolio.html          # Portfolio page
├── quote.html             # Quote request page
├── contact.html           # Contact page
├── css/
│   └── styles.css         # Main stylesheet
├── js/
│   └── main.js           # JavaScript functionality
└── images/
    ├── hero/             # Hero background images
    ├── departments/      # Department images
    ├── portfolio/        # Portfolio images
    └── assets/          # Other assets
```

## Customization

### Colors
The color scheme can be customized in `css/styles.css` by modifying the CSS custom properties:
```css
:root {
  --color-primary: #1e3a8a;    /* Navy blue */
  --color-secondary: #fbbf24;  /* Gold */
  --color-accent: #3b82f6;     /* Light blue */
}
```

### Content
All content can be edited directly in the HTML files. Key sections to customize:
- Company name and branding
- Contact information
- Testimonials
- Promotional offers
- Department descriptions

## License

© 2026 PrintMaster Pro. All rights reserved.

## Support

For questions or support, contact: info@printmasterpro.com
