from PIL import Image, ImageDraw, ImageFont
import os

def create_icon(size):
    # Create a new image with a golden background
    img = Image.new('RGB', (size, size), '#C4A484')
    draw = ImageDraw.Draw(img)
    
    # Draw a circle
    margin = size // 8
    draw.ellipse([margin, margin, size - margin, size - margin], fill='#8B7355')
    
    # Draw Greek letter φ (phi) in the center
    try:
        font_size = size // 2
        font = ImageFont.truetype("/System/Library/Fonts/Supplemental/Times New Roman.ttf", font_size)
        text = "φ"
        text_bbox = draw.textbbox((0, 0), text, font=font)
        text_width = text_bbox[2] - text_bbox[0]
        text_height = text_bbox[3] - text_bbox[1]
        x = (size - text_width) // 2
        y = (size - text_height) // 2
        draw.text((x, y), text, fill='#E0D5C1', font=font)
    except:
        # Fallback if font not available
        draw.text((size//3, size//3), "φ", fill='#E0D5C1')
    
    return img

def create_greek_pattern(width=400, height=400):
    img = Image.new('RGB', (width, height), '#2B1810')
    draw = ImageDraw.Draw(img)
    
    # Create a meander pattern
    pattern_size = 40
    for y in range(0, height, pattern_size):
        for x in range(0, width, pattern_size):
            draw.rectangle([x, y, x + pattern_size//2, y + pattern_size//2], 
                         fill='#8B7355', outline='#C4A484')
            draw.rectangle([x + pattern_size//2, y + pattern_size//2, 
                          x + pattern_size, y + pattern_size],
                         fill='#8B7355', outline='#C4A484')
    
    return img

def create_greek_border(width=400, height=20):
    img = Image.new('RGB', (width, height), '#2B1810')
    draw = ImageDraw.Draw(img)
    
    # Create a wave pattern
    wave_width = 20
    for x in range(0, width, wave_width):
        draw.arc([x, -height, x + wave_width, height], 
                0, 180, fill='#8B7355', width=2)
    
    return img

# Create directories if they don't exist
os.makedirs('icons', exist_ok=True)
os.makedirs('images', exist_ok=True)

# Generate icons
sizes = [16, 48, 128]
for size in sizes:
    icon = create_icon(size)
    icon.save(f'icons/icon{size}.png')

# Generate patterns
pattern = create_greek_pattern()
pattern.save('images/greek-pattern.png')

border = create_greek_border()
border.save('images/greek-border.png') 