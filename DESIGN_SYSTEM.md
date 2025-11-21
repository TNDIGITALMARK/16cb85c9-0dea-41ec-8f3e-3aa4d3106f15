# Shop99Detailing Design System Specification
## Extracted from ai-generated-preview.png for Pixel-Perfect Replication

---

## Color System (EXACT HEX VALUES)

### Primary Colors
- **Navy Dark**: `#1A2332` (Header, Footer, Service Card backgrounds)
- **Electric Blue**: `#1E6FFF` (Primary CTA buttons, Logo accent, BMW highlight)
- **Blue Hover**: `#0D5FE8` (Button hover state)

### Neutral Colors
- **White**: `#FFFFFF` (Light backgrounds, text on dark)
- **Light Gray**: `#F8F9FA` (Section backgrounds)
- **Medium Gray**: `#6C757D` (Secondary text, subtitles)
- **Dark Text**: `#212529` (Primary text on light backgrounds)

### UI States
- **Success**: `#28A745`
- **Error**: `#DC3545`
- **Warning**: `#FFC107`

---

## Typography System (EXACT SPECIFICATIONS)

### Font Family
**Primary**: Inter (Google Fonts)
**Fallback**: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif

### Font Sizes & Weights
- **Hero Heading**: 56px / Bold 700 / Line-height: 1.1 / Letter-spacing: -0.02em
- **Section Heading**: 36px / Semi-bold 600 / Line-height: 1.2
- **Subsection Heading**: 24px / Semi-bold 600 / Line-height: 1.3
- **Body Large**: 18px / Regular 400 / Line-height: 1.6
- **Body Regular**: 16px / Regular 400 / Line-height: 1.6
- **Body Small**: 14px / Regular 400 / Line-height: 1.5
- **Button Text**: 16px / Medium 500 / Letter-spacing: 0.01em

---

## Spacing System (EXACT PIXEL VALUES)

### Section Spacing
- **Vertical Section Padding**: 100px top/bottom
- **Section Gap**: 80px between major sections
- **Container Max Width**: 1280px
- **Container Padding**: 24px (mobile), 48px (desktop)

### Component Spacing
- **Card Gap**: 32px between cards
- **Card Padding**: 40px internal padding
- **Button Padding**: 16px vertical, 40px horizontal
- **Input Padding**: 14px vertical, 16px horizontal

### Grid System
- **3-Column Grid**: gap-8 (32px)
- **4-Column Gallery**: gap-6 (24px)
- **Testimonials**: gap-12 (48px)

---

## Component Specifications (EXACT STYLING)

### Buttons
```css
/* Primary CTA Button */
background: #1E6FFF;
color: #FFFFFF;
padding: 16px 40px;
border-radius: 8px;
font-size: 16px;
font-weight: 500;
box-shadow: 0 4px 12px rgba(30, 111, 255, 0.25);
transition: all 0.3s ease;

/* Hover State */
background: #0D5FE8;
transform: translateY(-2px);
box-shadow: 0 6px 16px rgba(30, 111, 255, 0.35);

/* Secondary Button */
background: transparent;
border: 2px solid #1E6FFF;
color: #1E6FFF;
```

### Service Cards
```css
background: #1A2332;
color: #FFFFFF;
padding: 40px;
border-radius: 12px;
text-align: center;
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
transition: transform 0.3s ease;

/* Hover */
transform: translateY(-8px);
box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
```

### Gallery Images
```css
border-radius: 8px;
aspect-ratio: 1 / 1;
object-fit: cover;
transition: transform 0.3s ease;

/* Hover */
transform: scale(1.05);
```

### Testimonial Avatars
```css
width: 80px;
height: 80px;
border-radius: 50%;
border: 3px solid #1E6FFF;
object-fit: cover;
```

---

## Visual Effects (EXACT CSS VALUES)

### Shadows
- **Card Shadow**: `box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);`
- **Card Shadow Hover**: `box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);`
- **Button Shadow**: `box-shadow: 0 4px 12px rgba(30, 111, 255, 0.25);`
- **Header Shadow**: `box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);`

### Border Radius
- **Buttons**: 8px
- **Cards**: 12px
- **Images**: 8px
- **Avatars**: 50% (circular)
- **Inputs**: 6px

### Transitions
- **Standard**: `all 0.3s ease`
- **Transform**: `transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)`
- **Color**: `color 0.2s ease, background 0.2s ease`

---

## Layout Specifications

### Header
- Height: 80px
- Background: #1A2332
- Position: Sticky
- Z-index: 1000
- Shadow: 0 2px 10px rgba(0, 0, 0, 0.08)

### Hero Section
- Height: 700px
- Background: Linear gradient overlay on image
- Text alignment: Left
- Image position: Right (60% width)

### Footer
- Background: #1A2332
- Color: #FFFFFF
- Padding: 60px 0
- Text align: Center

---

## Nested Image Asset Strategy

### Hero BMW Image
- **Generation**: AI-generated electric blue BMW M8 (high-performance sports car)
- **Style**: Angled 3/4 view, motion blur background, dramatic lighting
- **Aspect Ratio**: 16:9 or wider
- **Placement**: Right side of hero, 60% width

### Service Icons
- **Library**: Lucide React (outlined style)
- **Icons Needed**: Shield (protection), Sparkles (ceramic coating), Car (detailing)
- **Size**: 48px
- **Color**: #1E6FFF (Electric blue)
- **Style**: Outlined, 2px stroke

### Before/After Gallery
- **Content**: 4 transformation images
- **Generation**: AI-generated or high-quality stock photos
- **Style**: Sharp, clean, professional automotive photography
- **Aspect Ratio**: 1:1 (square)
- **Treatments**: None (clean professional cuts)

### Testimonial Avatars
- **Content**: 3 professional headshot placeholders
- **Style**: Circular crop, consistent lighting
- **Size**: 80px diameter
- **Treatment**: 3px electric blue border

### Social Icons
- **Library**: Lucide React
- **Icons**: Facebook, Instagram, Twitter
- **Color**: #FFFFFF with 70% opacity, 100% on hover
- **Size**: 24px

---

## Asset Generation Prompts

### Hero BMW Image
```
"Electric blue BMW M8 sports car, dramatic 3/4 angle view, motion blur
background, professional automotive photography, studio lighting,
showroom quality, high-performance vehicle, sleek design, 4K quality"
```

### Before/After Gallery Images
```
1. "Dirty car exterior before detailing, mud splashes, weathered paint"
2. "Pristine car after detailing, mirror-like paint finish, showroom condition"
3. "Dirty car interior, stained seats, dusty dashboard, before cleaning"
4. "Clean car interior, pristine leather seats, spotless dashboard, after detailing"
```

### Testimonial Placeholders
```
Professional business portrait placeholders with neutral backgrounds,
diverse individuals, confident expressions, suitable for customer testimonials
```

---

## Responsive Breakpoints

- **Mobile**: < 640px (Stack everything vertically)
- **Tablet**: 640px - 1024px (2 columns for services, 2x2 gallery)
- **Desktop**: > 1024px (3 columns for services, 4-column gallery)

---

## Component Reusability

All components should be built with:
- Consistent spacing using the spacing system
- Exact color values from the color system
- Typography scale for all text elements
- Visual effects applied uniformly
- Responsive behavior baked in

**Success Criteria**: Side-by-side comparison with reference shows IDENTICAL visual design.
