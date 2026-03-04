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
          <div class="social-links" style="margin-top: 1rem; display: flex; gap: 1rem;">
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
})();
