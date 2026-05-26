from PIL import Image, ImageEnhance, ImageDraw, ImageFilter
import numpy as np

# Load the image
img = Image.open('src/assets/portrait.jpg').convert('RGBA')

# 1. Darken and increase contrast for "cinematic dark grade"
# Decrease brightness
enhancer = ImageEnhance.Brightness(img)
img_dark = enhancer.enhance(0.4)

# Increase contrast to crush blacks
enhancer = ImageEnhance.Contrast(img_dark)
img_contrast = enhancer.enhance(1.6)

# Adjust color (slightly desaturate overall)
enhancer = ImageEnhance.Color(img_contrast)
img_graded = enhancer.enhance(0.7)

width, height = img_graded.size

# 2. Add an orange rim light on the right side
rim_overlay = Image.new('RGBA', (width, height), (0, 0, 0, 0))
draw = ImageDraw.Draw(rim_overlay)

# Draw an orange glow on the right edge
rim_color = (255, 100, 20, 200) # Warm orange
draw.ellipse((width*0.6, -height*0.2, width*1.4, height*1.2), fill=rim_color)

# Blur the overlay heavily
rim_overlay = rim_overlay.filter(ImageFilter.GaussianBlur(radius=150))

base_arr = np.array(img_graded).astype(float)
rim_arr = np.array(rim_overlay).astype(float)

# Screen blend mode for the rim light
base_rgb = base_arr[..., :3] / 255.0
rim_rgb = rim_arr[..., :3] / 255.0
rim_alpha = (rim_arr[..., 3:4] / 255.0) * 0.8 # Intensity

screen_rgb = 1.0 - (1.0 - base_rgb) * (1.0 - rim_rgb)
blended_rgb = base_rgb * (1.0 - rim_alpha) + screen_rgb * rim_alpha

# 3. Add a vignette to darken edges/background more
Y, X = np.ogrid[:height, :width]
center_x = width * 0.4
center_y = height * 0.4
radius_x = width * 0.7
radius_y = height * 0.7
dist_from_center = np.sqrt(((X - center_x) / radius_x)**2 + ((Y - center_y) / radius_y)**2)
vignette_mask = 1.0 - np.clip(dist_from_center, 0, 1)
vignette_mask = np.power(vignette_mask, 0.6)

# Base illumination (so it doesn't go completely pitch black in the center)
min_illumination = 0.2
vignette_mask = min_illumination + (1.0 - min_illumination) * vignette_mask

# Multiply by vignette
blended_rgb = blended_rgb * vignette_mask[..., np.newaxis]

final_img = np.zeros_like(base_arr)
final_img[..., :3] = np.clip(blended_rgb * 255, 0, 255)
final_img[..., 3] = base_arr[..., 3]

final_pil = Image.fromarray(final_img.astype(np.uint8), 'RGBA')
final_pil = final_pil.convert('RGB')
final_pil.save('src/assets/portrait_cinematic.jpg', quality=95)
print("Saved src/assets/portrait_cinematic.jpg")
