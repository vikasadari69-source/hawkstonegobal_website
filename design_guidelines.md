# Design Guidelines: Hawkstone Global Software Pvt Ltd

## Design Approach

**System Selected**: Corporate Enterprise Pattern (inspired by IBM, Accenture, Deloitte Digital)  
**Rationale**: Professional B2B consulting website requiring trust, clarity, and information density. Design should convey global enterprise credibility while maintaining modern appeal.

## Typography System

**Primary Font**: Inter or IBM Plex Sans (Google Fonts CDN)  
**Secondary Font**: Space Grotesk for headings (optional accent)

**Hierarchy**:
- H1 (Hero): text-5xl md:text-6xl lg:text-7xl, font-bold, leading-tight
- H2 (Section Headers): text-4xl md:text-5xl, font-semibold
- H3 (Subsections): text-2xl md:text-3xl, font-semibold
- H4 (Card Titles): text-xl md:text-2xl, font-medium
- Body: text-base md:text-lg, leading-relaxed
- Small/Meta: text-sm, font-medium

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 (e.g., p-8, mt-16, gap-6)  
**Container**: max-w-7xl mx-auto px-6 md:px-8  
**Section Padding**: py-16 md:py-24 lg:py-32  
**Grid System**: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 for features/services

## Component Library

### Navigation
- Sticky header with transparent-to-solid transition on scroll
- Logo left, navigation center/right, CTA button (e.g., "Contact Us")
- Dropdown menus for "Industries We Serve" and "Why Choose Us" with hover mega-menu style
- Mobile: Hamburger menu with slide-in drawer

### Hero Section
- Full-width, 85vh height
- Large corporate AI-generated image (technology/global business theme) with gradient overlay
- Centered content: Headline + supporting text + dual CTAs ("Get Started" + "View Services")
- Subtle parallax scroll effect on background image
- Trust indicators below CTAs: "500+ Global Clients | 15+ Countries | 24/7 Support"

### Service Cards
- Grid layout (3 columns desktop, 2 tablet, 1 mobile)
- Each card: Icon (Material Icons CDN) + Title + Description + "Learn More" link
- Subtle hover elevation: transition from shadow-md to shadow-xl
- Border with rounded corners (rounded-xl)

### Statistics/Metrics Section
- 4-column grid (stacks on mobile)
- Large numbers (text-4xl md:text-5xl font-bold) + label underneath
- Examples: "500+ Clients", "72hr Turnaround", "15 Countries", "98% Satisfaction"

### Industry Showcase
- 2-column alternating image-text blocks
- Each industry: Full-width section with background image + content overlay
- Text block: Industry name + key capabilities + stats
- Stagger layout: image-left, image-right pattern

### Testimonials
- 3-column card grid (single column mobile)
- Each card: Quote + Client logo + Name/Title/Company
- Minimal design with subtle background treatment

### Global Presence Section
- Map visual (AI-generated or simplified illustration) showing UK, Europe, USA, India
- 4 location cards underneath with office details
- Icons for each region

### Contact Form
- 2-column layout (form left, info right on desktop)
- Form fields: Full Name, Company Email, Phone, Service Interest (dropdown), Message
- Right column: Office addresses, phone numbers, email
- Background: Subtle gradient or geometric pattern

### Footer
- 4-column layout (stacks on mobile)
- Column 1: Logo + tagline
- Column 2: Quick Links (Services, Industries, About)
- Column 3: Contact Info
- Column 4: Newsletter signup
- Bottom bar: Copyright, Privacy Policy, Terms, Social icons (LinkedIn, Twitter placeholders)

## Animation Strategy

**Minimal & Professional**:
- Fade-in on scroll for section headers (opacity 0 to 1, 0.6s ease)
- Smooth hover transitions on cards (0.3s ease-in-out)
- Navigation dropdown slide-down (0.2s ease)
- NO distracting scroll-triggered animations or parallax beyond hero
- Button hover: slight scale (scale-105) and shadow increase

## Images

**Hero**: AI-generated professional image - modern office with diverse team collaborating, or abstract tech/connectivity visual. Full-width, high quality.

**Services Section**: Icon-based (no images)

**Industries**: Each industry gets a relevant AI-generated image:
- BFSI: Financial district/banking technology
- Retail: Modern e-commerce/logistics
- Automotive: Smart manufacturing/mobility
- Healthcare: Medical technology/lab
- Telecommunications: Network infrastructure
- Tech Consulting: Innovation/digital transformation

**About Us**: Team collaboration image, global office montage

**Global Presence**: World map illustration or AI-generated global connectivity visual

All images should be professional, corporate, slightly desaturated for enterprise feel.

## Accessibility
- WCAG AA contrast ratios throughout
- Focus states on all interactive elements (ring-2 ring-offset-2)
- Semantic HTML (header, nav, main, section, footer)
- Alt text for all images
- Keyboard navigation support for dropdowns

## Responsive Breakpoints
- Mobile: < 768px (single column, stacked navigation)
- Tablet: 768px - 1024px (2-column grids)
- Desktop: > 1024px (full multi-column layouts)