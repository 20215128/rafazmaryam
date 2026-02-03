#!/bin/bash
# Image Optimization Script
# Compresses large JPEGs and PNGs to improve page load time

echo "🎨 Starting image optimization..."
echo ""

# Count files
jpeg_count=$(find images -type f -name "*.jpg" -size +500k | wc -l | tr -d ' ')
png_count=$(find images -type f -name "*.png" -size +500k | wc -l | tr -d ' ')

echo "Found $jpeg_count large JPEGs and $png_count large PNGs to compress"
echo ""

# Compress JPEGs to 80% quality
echo "📸 Compressing JPEGs..."
find images -type f -name "*.jpg" -size +500k | while read file; do
    echo "  - $(basename "$file")"
    sips -s formatOptions 80 "$file" --out "$file" > /dev/null 2>&1
done

# Compress PNGs (resample to 80% size for large files)
echo "📸 Compressing PNGs..."
find images -type f -name "*.png" -size +500k | while read file; do
    echo "  - $(basename "$file")"
    # Get dimensions
    width=$(sips -g pixelWidth "$file" | tail -1 | awk '{print $2}')
    height=$(sips -g pixelHeight "$file" | tail -1 | awk '{print $2}')
    # Calculate 80% dimensions
    new_width=$((width * 80 / 100))
    new_height=$((height * 80 / 100))
    # Resize
    sips -z $new_height $new_width "$file" --out "$file" > /dev/null 2>&1
done

echo ""
echo "✅ Image optimization complete!"
echo ""

# Show new total size
new_size=$(du -sh images/ | awk '{print $1}')
echo "New images folder size: $new_size"
