// ===================================
// RAFAZ - SHARED FOOTER COMPONENT
// Injects consistent footer HTML into every page
// To update the footer site-wide, edit ONLY this file.
// ===================================

(function injectFooter() {
    const footerHTML = `
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h4>RAFAZ</h4>
          <p>Your trusted partner in commercial printing excellence. Delivering quality, precision, and professionalism since 1988.</p>
          <div class="social-links">
            <!-- X (Twitter) -->
            <a href="https://x.com/Rafazmulti" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" style="color: white; text-decoration: none;">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul class="footer-links">
            <li><a href="./">Home</a></li>
            <li><a href="about">About Us</a></li>
            <li><a href="departments">Departments</a></li>
            <li><a href="portfolio">Portfolio</a></li>
            <li><a href="quote">Get a Quote</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Services</h4>
          <ul class="footer-links">
            <li><a href="departments#digital">Direct Imaging (D.I)</a></li>
            <li><a href="departments#offset">Offset Printing</a></li>
            <li><a href="departments#large-format">Large Format</a></li>
            <li><a href="departments#dtf">DTF Printing</a></li>
            <li><a href="departments#uv">UV Printing</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Contact Info</h4>
          <p>📍 No 3 Old Bukuru Park<br>Jos</p>
          <p>📞 Phone: <a href="tel:+2349166860809" style="color: inherit;">+234 916 686 0809</a></p>
          <p>📧 Email: <a href="mailto:rafazmultibnigltd@gmail.com" style="color: inherit;">rafazmultibnigltd@gmail.com</a></p>
          <p>🕒 Everyday: 9:00 AM - 7:30 PM</p>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} RAFAZ. All rights reserved. | Premium Commercial Printing Services</p>
      </div>
    </footer>
  `;

    // Replace the existing footer element if present, otherwise append to body
    const existingFooter = document.querySelector('footer.footer');
    if (existingFooter) {
        existingFooter.outerHTML = footerHTML;
    } else {
        // Append before the WhatsApp float button if possible
        const whatsappBtn = document.querySelector('.whatsapp-float');
        if (whatsappBtn) {
            whatsappBtn.insertAdjacentHTML('beforebegin', footerHTML);
        } else {
            document.body.insertAdjacentHTML('beforeend', footerHTML);
        }
    }

    // Inject WhatsApp modal on every page if not already present
    if (!document.getElementById('whatsappModal')) {
        const modalHTML = `
    <div id="whatsappModal" class="whatsapp-modal" onclick="if(event.target===this)hideWhatsAppModal()" role="dialog" aria-modal="true" aria-label="Choose WhatsApp line">
      <div class="whatsapp-modal-content">
        <button class="whatsapp-modal-close" onclick="hideWhatsAppModal()" aria-label="Close">&times;</button>

        <div class="whatsapp-modal-header">
          <div class="whatsapp-modal-icon">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-5.247 1.407 1.407-5.247-0.292-0.507c-1.224-2.162-1.87-4.588-1.87-7.070 0-7.72 6.28-14 14-14s14 6.28 14 14-6.28 14-14 14zM21.305 18.694c-0.372-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.186-0.837 0.186s-0.962 1.208-1.179 1.456c-0.217 0.248-0.434 0.279-0.806 0.093-0.372-0.186-1.571-0.579-2.991-1.846-1.106-0.986-1.853-2.204-2.070-2.576-0.217-0.372-0.023-0.573 0.163-0.759 0.167-0.166 0.372-0.434 0.558-0.651 0.186-0.217 0.248-0.372 0.372-0.62 0.124-0.248 0.062-0.465-0.031-0.651-0.093-0.186-0.837-2.015-1.147-2.759-0.303-0.724-0.611-0.627-0.837-0.638-0.217-0.011-0.465-0.013-0.713-0.013s-0.651 0.093-0.992 0.465c-0.341 0.372-1.301 1.270-1.301 3.099s1.332 3.594 1.518 3.842c0.186 0.248 2.625 4.007 6.359 5.619 0.888 0.383 1.582 0.612 2.122 0.783 0.892 0.283 1.704 0.243 2.347 0.147 0.716-0.107 2.197-0.898 2.507-1.766 0.31-0.868 0.31-1.613 0.217-1.766-0.093-0.153-0.341-0.248-0.713-0.434z"/></svg>
          </div>
          <h2 class="whatsapp-modal-title">Chat with us on WhatsApp</h2>
          <p class="whatsapp-modal-subtitle">We have two dedicated lines — pick the one that matches your need for a faster, more focused response.</p>
        </div>

        <div class="whatsapp-pick-label">Pick your line</div>

        <div class="whatsapp-modal-buttons">

          <a href="https://wa.me/2349166860809?text=Hi!%20I%20need%20help%20with%20printing%20services.%20Can%20you%20assist%20me?" class="whatsapp-choice-btn" target="_blank" rel="noopener">
            <div class="whatsapp-choice-content">
              <div class="whatsapp-choice-icon printing">🖨️</div>
              <div class="whatsapp-choice-text">
                <h3>Printing Services</h3>
                <p>Quotes, orders, brochures, banners, DTF, UV &amp; more</p>
                <div class="whatsapp-choice-number">+234 916 686 0809</div>
              </div>
            </div>
            <span class="whatsapp-choice-arrow">→</span>
          </a>

          <a href="https://wa.me/2348064060430?text=Hi!%20I'm%20interested%20in%20printing%20equipment%20and%20machines.%20Can%20you%20help%20me?" class="whatsapp-choice-btn" target="_blank" rel="noopener">
            <div class="whatsapp-choice-content">
              <div class="whatsapp-choice-icon equipment">⚙️</div>
              <div class="whatsapp-choice-text">
                <h3>Equipment &amp; Machines</h3>
                <p>Printer sales, consumables, parts &amp; servicing</p>
                <div class="whatsapp-choice-number">+234 806 406 0430</div>
              </div>
            </div>
            <span class="whatsapp-choice-arrow">→</span>
          </a>

        </div>

        <div class="whatsapp-modal-note">
          <strong>Not sure?</strong> Start with Printing Services — we'll redirect you if needed.
        </div>
      </div>
    </div>`;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }
})();
