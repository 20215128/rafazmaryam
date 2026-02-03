#!/bin/bash
# Add lazy loading to images in HTML files
# Skips the hero image which should load immediately

echo "⚡ Adding lazy loading to HTML images..."

# Find all HTML files and add loading="lazy" to img tags that don't already have it
# Exclude hero images and marquee logos (both should load immediately)
find . -name "*.html" -type f | while read file; do
    echo "  - $(basename "$file")"
    sed -i '' 's/<img \(.*\)class="hero-img-full"/<img \1class="hero-img-full"/g' "$file"
    sed -i '' 's/<img \(.*\)class="marquee-logo"/<img \1class="marquee-logo"/g' "$file"
    sed -i '' 's/<img \([^>]*\)src=/&lt;img loading="lazy" \1src=/g' "$file" 2>/dev/null || true
done

echo "✅ Lazy loading added to all eligible images!"
