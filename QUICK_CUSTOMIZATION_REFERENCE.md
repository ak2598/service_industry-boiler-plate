# 🚀 Quick Customization Reference

This is a quick reference for the most common changes you'll need to make to customize this template for your business.

## 🔥 Essential Changes (Do These First!)

### 1. Business Name & Title
**Files to update:**
- `src/app/layout.tsx` - Line 15: Site title and description
- `src/components/ui/navbar.tsx` - Line 67: Logo text
- `src/components/ui/footer.tsx` - Line 26: Footer logo text
- `src/app/about/page.tsx` - Line 42: About page title

**Find and replace:** `LawnCare Pro` → `Your Business Name`

### 2. Phone Number
**Files to update:**
- `src/app/page.tsx` - Line 78: Hero section phone button
- `src/app/contact/page.tsx` - Line 67: Contact info
- `src/components/ui/footer.tsx` - Line 108: Footer contact

**Find and replace:** `(555) 123-4567` → `Your Phone Number`

### 3. Email Address
**Files to update:**
- `src/app/contact/page.tsx` - Line 68: Contact info
- `src/components/ui/footer.tsx` - Line 118: Footer contact

**Find and replace:** `contact@servicecompany.com` → `your@email.com`

### 4. Service Areas
**File:** `src/lib/service-areas-data.ts`
Replace the entire array with your actual service cities/areas.

### 5. Services
**File:** `src/lib/services-data.ts`
Update the services array with your actual services, descriptions, and pricing.

## 🎨 Visual Customization

### Change Color Scheme
**Current:** Green theme
**To change:** Find and replace these classes throughout the codebase:
- `bg-green-600` → `bg-blue-600` (or your color)
- `text-green-600` → `text-blue-600`
- `border-green-600` → `border-blue-600`
- `hover:bg-green-50` → `hover:bg-blue-50`

### Replace Images
**Location:** `/public/images/`
**Key images to replace:**
- `heroimage.png` - Main hero background
- `beforelawn.jpg` & `afterlawn.png` - Gallery before/after
- `lawncareowners.jpg` - Owner photos
- `lawncareteam.jpg` - Team photos

## 📝 Content Updates

### Hero Section
**File:** `src/app/page.tsx` (Lines 65-72)
- Update headline text
- Update description text
- Update call-to-action buttons

### About Page
**File:** `src/app/about/page.tsx`
- Company founding story
- Team member information
- Business credentials
- Mission statement

### Testimonials
**File:** `src/data/testimonials.ts`
Replace sample testimonials with real customer reviews.

## 🏢 Business-Specific Examples

### For Plumbing Business:
```typescript
// Services (src/app/page.tsx)
const services = [
  { icon: Wrench, title: "Pipe Repair", description: "Expert pipe repair services" },
  { icon: Droplets, title: "Leak Detection", description: "Advanced leak detection" },
  { icon: Home, title: "Water Heaters", description: "Installation and repair" },
];

// Business name
"ABC Plumbing Services"

// Hero headline
"Professional Plumbing in [City]"
```

### For Cleaning Business:
```typescript
// Services
const services = [
  { icon: Home, title: "House Cleaning", description: "Complete residential cleaning" },
  { icon: Building, title: "Office Cleaning", description: "Commercial cleaning services" },
  { icon: Sparkles, title: "Deep Cleaning", description: "Thorough deep cleaning" },
];

// Business name
"Sparkle Clean Services"

// Hero headline
"Professional Cleaning Services in [City]"
```

### For HVAC Business:
```typescript
// Services
const services = [
  { icon: Thermometer, title: "AC Repair", description: "Air conditioning repair" },
  { icon: Wind, title: "Heating Service", description: "Heating system maintenance" },
  { icon: Settings, title: "Installation", description: "New system installation" },
];

// Business name
"Cool Air HVAC Solutions"

// Hero headline
"Professional HVAC Services in [City]"
```

## 📱 Contact Information

### Update All Contact Info
**Search for these and replace:**
- `(555) 123-4567` → Your phone
- `contact@servicecompany.com` → Your email
- `Monday - Friday: 9:00 AM - 5:00 PM` → Your hours
- Update social media links in footer

## 🔍 SEO & Meta Tags

### Update Meta Information
**File:** `src/app/layout.tsx`
- Site title
- Meta description

**File:** `src/app/contact/page.tsx`
- Business schema markup
- Local business information

## ✅ Pre-Launch Checklist

- [ ] Business name updated everywhere
- [ ] Phone number updated everywhere
- [ ] Email address updated everywhere
- [ ] Services match your business
- [ ] Service areas are correct
- [ ] Images replaced with your photos
- [ ] About page story updated
- [ ] Testimonials are real
- [ ] Contact form works
- [ ] Colors match your brand
- [ ] All placeholder text removed

## 🆘 Common Issues

**Problem:** Colors not changing everywhere
**Solution:** Use global find/replace in your editor for color classes

**Problem:** Images not showing
**Solution:** Make sure images are in `/public/images/` and paths are correct

**Problem:** Services not displaying
**Solution:** Check `src/lib/services-data.ts` for proper formatting

**Problem:** Contact form not working
**Solution:** Set up form handling service (EmailJS, Formspree, etc.)

---

**💡 Tip:** Use your code editor's "Find and Replace All" feature to quickly update common elements like business name and phone number across all files! 