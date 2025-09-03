# 🎨 Template Customization Guide

Welcome to your Service Boilerplate Template! This guide will help you customize every aspect of this template to match your business needs. This template is currently set up for a lawn care business, but can be easily adapted for any service-based business.

## 📋 Quick Start Checklist

Before you begin, gather the following information about your business:
- [ ] Business name and tagline
- [ ] Services you offer
- [ ] Service areas/locations
- [ ] Contact information (phone, email, address)
- [ ] Business photos and images
- [ ] Customer testimonials
- [ ] Business credentials/certifications
- [ ] Brand colors (if different from green theme)

## 🏢 Basic Business Information

### 1. Site Title & Metadata (`src/app/layout.tsx`)

**What to change:**
```typescript
export const metadata: Metadata = {
  title: "Service Boilerplate", // ← Change this to your business name
  description: "A modern Next.js service boilerplate with TypeScript and shadcn/ui", // ← Change to your business description
};
```

**Example for different businesses:**
- **Plumbing:** `title: "ABC Plumbing Services"`
- **Cleaning:** `title: "Sparkle Clean Services"`
- **HVAC:** `title: "Cool Air HVAC Solutions"`

### 2. Business Name Throughout Site

**Files to update:**
- `src/app/about/page.tsx` - Line 42: Change "LawnCare Pro" to your business name
- `src/components/ui/navbar.tsx` - Update logo/brand name
- `src/components/ui/footer.tsx` - Update business name and details

## 🎨 Visual Branding

### 1. Color Scheme

The template uses a green color scheme. To change colors:

**Primary locations to update:**
- `src/app/globals.css` - CSS custom properties
- Tailwind classes throughout components (bg-green-600, text-green-600, etc.)

**Common color classes to find and replace:**
- `bg-green-600` → `bg-blue-600` (for blue theme)
- `text-green-600` → `text-blue-600`
- `border-green-600` → `border-blue-600`
- `from-green-50` → `from-blue-50`

### 2. Images and Photos

**Replace these images in `/public/images/`:**
- `heroimage.png` - Main hero background image
- `beforelawn.jpg` & `afterlawn.png` - Before/after gallery images
- `landscaping.jpg` & `landscaping.png` - Service examples
- `lawncareowners.jpg` - Owner/team photos
- `lawncareteam.jpg` - Team at work photos

**Image requirements:**
- Hero image: 1920x1080px or larger
- Gallery images: 800x600px recommended
- Team photos: 500x375px recommended

## 📱 Contact Information

### 1. Phone Number (`src/app/page.tsx`)

**Find and replace:**
```typescript
<Phone className="w-5 h-5 mr-2" />
(555) 123-4567  // ← Change to your phone number
```

### 2. Footer Contact Info (`src/components/ui/footer.tsx`)

**Update these sections:**
- Business address
- Phone number
- Email address
- Business hours
- Social media links

## 🛠️ Services Section

### 1. Main Services (`src/app/page.tsx`)

**Current services array (lines ~45-51):**
```typescript
const services = [
  { icon: Scissors, title: "Lawn Mowing", description: "Regular mowing and edging to keep your lawn pristine" },
  { icon: Sprout, title: "Fertilization", description: "Custom fertilization programs for healthy grass growth" },
  // ... add your services here
];
```

**Examples for different businesses:**

**Plumbing Services:**
```typescript
const services = [
  { icon: Wrench, title: "Pipe Repair", description: "Expert pipe repair and replacement services" },
  { icon: Droplets, title: "Leak Detection", description: "Advanced leak detection and repair" },
  { icon: Shower, title: "Bathroom Plumbing", description: "Complete bathroom plumbing solutions" },
  { icon: Home, title: "Water Heaters", description: "Installation and repair of water heaters" },
  { icon: AlertTriangle, title: "Emergency Service", description: "24/7 emergency plumbing repairs" },
];
```

**Cleaning Services:**
```typescript
const services = [
  { icon: Home, title: "House Cleaning", description: "Complete residential cleaning services" },
  { icon: Building, title: "Office Cleaning", description: "Professional commercial cleaning" },
  { icon: Sparkles, title: "Deep Cleaning", description: "Thorough deep cleaning services" },
  { icon: Calendar, title: "Regular Service", description: "Weekly, bi-weekly, or monthly cleaning" },
  { icon: Trash, title: "Move-out Cleaning", description: "Complete move-in/move-out cleaning" },
];
```

### 2. Detailed Services Page (`src/app/services/page.tsx`)

**Update the services data in `src/lib/services-data.ts`:**
- Service titles and descriptions
- Pricing information
- Service categories
- FAQ sections

## 📍 Service Areas

### 1. Update Service Areas (`src/lib/service-areas-data.ts`)

**Replace the current areas with your service locations:**
```typescript
export const serviceAreas = [
  "Your City",
  "Neighboring Town",
  "Another Area",
  // ... add your service areas
];
```

### 2. Location-Specific Content (`src/app/page.tsx`)

**Update location references:**
- Hero section location mentions
- Service area descriptions
- Local business information

## 👥 About Page Customization

### 1. Company Story (`src/app/about/page.tsx`)

**Update these sections:**
- Company founding year and story
- Mission statement
- Team member information
- Business credentials and certifications
- Customer count and statistics

### 2. Credentials Section

**Update business credentials:**
```typescript
const credentials = [
  {
    title: "Licensed & Insured", // ← Update with your credentials
    description: "State License #LC-2024-001", // ← Your license numbers
    icon: Shield
  },
  // ... add your certifications
];
```

## 💬 Testimonials

### 1. Customer Reviews (`src/data/testimonials.ts`)

**Replace sample testimonials with real customer reviews:**
```typescript
export const sampleTestimonials = [
  {
    name: "Customer Name",
    location: "City, State",
    rating: 5,
    text: "Your customer's review text here...",
    service: "Service they used",
    date: "Month Year"
  },
  // ... add more testimonials
];
```

## 📞 Contact Page

### 1. Contact Form (`src/app/contact/page.tsx`)

**Customize:**
- Form fields for your business needs
- Contact information display
- Business hours
- Service area map or information

### 2. Form Handling

**Set up form submission:**
- Configure email service (EmailJS, Formspree, etc.)
- Update form action endpoints
- Add form validation for your specific needs

## 🎯 Industry-Specific Customizations

### For HVAC Business:
- Change icons to heating/cooling related (Thermometer, Wind, etc.)
- Update services to heating, cooling, maintenance
- Add seasonal service messaging
- Include emergency service emphasis

### For Cleaning Business:
- Use cleaning-related icons (Sparkles, Home, etc.)
- Emphasize before/after transformations
- Add service frequency options
- Include eco-friendly messaging if applicable

### For Plumbing Business:
- Use plumbing icons (Wrench, Droplets, etc.)
- Emphasize emergency availability
- Add water damage prevention messaging
- Include warranty information

## 🔧 Technical Customizations

### 1. SEO Optimization

**Update meta tags in each page:**
- Page titles
- Meta descriptions
- Open Graph tags
- Local business schema markup

### 2. Analytics Setup

**Add tracking codes:**
- Google Analytics
- Google Tag Manager
- Facebook Pixel (if needed)
- Local business tracking

### 3. Performance Optimization

**Optimize images:**
- Compress all images
- Use WebP format when possible
- Add proper alt tags
- Implement lazy loading

## 📱 Mobile Responsiveness

**Test and adjust:**
- All pages on mobile devices
- Contact forms on mobile
- Image galleries
- Navigation menu
- Call-to-action buttons

## 🚀 Before Going Live

### Final Checklist:
- [ ] All placeholder text replaced
- [ ] All images replaced with your photos
- [ ] Contact information updated everywhere
- [ ] Services match your business
- [ ] Service areas are correct
- [ ] Testimonials are real
- [ ] Colors match your brand
- [ ] Forms are working
- [ ] Mobile responsive
- [ ] SEO tags updated
- [ ] Analytics installed

## 🆘 Need Help?

If you get stuck during customization:

1. **Check the file comments** - Many files have helpful comments
2. **Use search and replace** - For bulk text changes
3. **Test frequently** - Run `npm run dev` to see changes
4. **Keep backups** - Save working versions before major changes

## 📁 File Structure Reference

```
src/
├── app/
│   ├── layout.tsx          # Site-wide settings, title, font
│   ├── page.tsx            # Homepage content
│   ├── about/page.tsx      # About page
│   ├── services/page.tsx   # Services page
│   ├── contact/page.tsx    # Contact page
│   └── testimonials/page.tsx
├── components/
│   ├── ui/
│   │   ├── navbar.tsx      # Navigation bar
│   │   └── footer.tsx      # Footer content
│   └── Testimonials.tsx    # Testimonials component
├── data/
│   └── testimonials.ts     # Customer reviews data
└── lib/
    ├── services-data.ts    # Services information
    └── service-areas-data.ts # Service locations
```

---

**Remember:** This template is designed to be flexible. Don't be afraid to modify, add, or remove sections to better fit your business needs! 