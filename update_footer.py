
import os
import glob

def update_footer():
    # Define the target directory
    directory = "."
    
    # Define the old and new values
    # We address the footer specifically and potentially the contact page bodies
    
    replacements = [
        # 1. Address Replacement (Footer style)
        {
            "old": "123 Industrial Avenue<br>Business District, City 12345",
            "new": "No 3 Old Bukuru Park<br>Jos"
        },
        # 2. Address Replacement (Contact page card style - slight variation possible, using partial match if needed or exact)
        {
            "old": "123 Industrial Avenue<br>Business District<br>City, State 12345",
            "new": "No 3 Old Bukuru Park<br>Jos"
        },
        # 3. Phone Replacement (Display - Footer & Body)
        {
            "old": "+1 (555) 123-4567",
            "new": "+234 916 686 0809"
        },
        # 4. Phone Link Replacement
        {
            "old": "tel:+15551234567",
            "new": "tel:+2349166860809"
        },
        # 5. Email Replacements (Consolidating to single provided email)
        { "old": "info@rafaz.com", "new": "rafazmultibnigltd@gmail.com" },
        { "old": "quotes@rafaz.com", "new": "rafazmultibnigltd@gmail.com" },
        { "old": "sales@rafaz.com", "new": "rafazmultibnigltd@gmail.com" },
        { "old": "production@rafaz.com", "new": "rafazmultibnigltd@gmail.com" },
        { "old": "support@rafaz.com", "new": "rafazmultibnigltd@gmail.com" },
        { "old": "design@rafaz.com", "new": "rafazmultibnigltd@gmail.com" },
        { "old": "billing@rafaz.com", "new": "rafazmultibnigltd@gmail.com" },
        
        # 6. Business Hours Replacement (Footer)
        { 
            "old": "Mon-Fri: 8:00 AM - 6:00 PM<br>Sat: 9:00 AM - 2:00 PM", 
            "new": "Everyday: 9:00 AM - 7:00 PM" 
        },
        # 7. Business Hours Replacement (Contact Page - Business Hours Card)
        {
            "old": """<p style="display: flex; justify-content: space-between; margin-bottom: var(--space-2);">
                                <span><strong>Monday - Friday:</strong></span>
                                <span>8:00 AM - 6:00 PM</span>
                            </p>
                            <p style="display: flex; justify-content: space-between; margin-bottom: var(--space-2);">
                                <span><strong>Saturday:</strong></span>
                                <span>9:00 AM - 2:00 PM</span>
                            </p>
                            <p style="display: flex; justify-content: space-between; margin: 0;">
                                <span><strong>Sunday:</strong></span>
                                <span>Closed</span>
                            </p>""",
            "new": """<p style="display: flex; justify-content: space-between; margin-bottom: var(--space-2);">
                                <span><strong>Monday - Sunday:</strong></span>
                                <span>9:00 AM - 7:00 PM</span>
                            </p>"""
        },
        # 8. Business Hours Replacement (Contact Page - Phone Card)
        {
            "old": "Mon-Fri: 8:00 AM - 6:00 PM<br>Sat: 9:00 AM - 2:00 PM",
            "new": "Everyday: 9:00 AM - 7:00 PM"
        },
        # 9. Map Embed Replacement
        {
            "old": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841!2d-73.98731!3d40.74844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjQiTiA3M8KwNTknMTQuMyJX!5e0!3m2!1sen!2sus!4v1234567890",
            # This is a generic embed for "Jos, Nigeria" centered. In a real scenario we'd get the exact embed code for the specific address.
            # Using a generic Jos map view for now as exact coordinates for "No 3 Old Bukuru Park" might need specific geocoding.
            # Updated to search for "Old Bukuru Park, Jos"
            "new": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15878.016395175402!2d8.88299863266657!3d9.896792446721532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105374828c6aa221%3A0x6a24765d78701a2!2sOld%20Bukuru%20park!5e0!3m2!1sen!2sng!4v1706222222222!5m2!1sen!2sng"
        }
    ]

    # Find all HTML files
    files = glob.glob(os.path.join(directory, "*.html"))
    
    print(f"Found {len(files)} HTML files to process.")
    
    for file_path in files:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        new_content = content
        modified = False
        
        for rep in replacements:
            if rep["old"] in new_content:
                new_content = new_content.replace(rep["old"], rep["new"])
                modified = True
                
        if modified:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated: {file_path}")
        else:
            print(f"No changes needed: {file_path}")

if __name__ == "__main__":
    update_footer()
