# Testimonials Component

A flexible and reusable React component for displaying customer testimonials with multiple layout options.

## Features

- **Multiple Layouts**: Carousel, Grid, and List layouts
- **Star Ratings**: Optional 5-star rating system
- **Client Information**: Display customer location and service type
- **Auto-rotation**: Automatic carousel rotation with customizable intervals
- **Navigation**: Arrow navigation and dot indicators for carousel
- **Responsive**: Mobile-first responsive design
- **Customizable**: Extensive customization options via props
- **Accessible**: ARIA labels and keyboard navigation support

## Basic Usage

```tsx
import Testimonials from "@/components/Testimonials";
import { sampleTestimonials } from "@/data/testimonials";

// Basic grid layout
<Testimonials testimonials={sampleTestimonials} />

// Carousel with auto-rotation
<Testimonials 
  testimonials={sampleTestimonials}
  layout="carousel"
  autoRotate={true}
  autoRotateInterval={5000}
/>

// List layout without title
<Testimonials 
  testimonials={sampleTestimonials}
  layout="list"
  showTitle={false}
/>
```

## Props API

### TestimonialsProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `testimonials` | `Testimonial[]` | **Required** | Array of testimonial objects |
| `layout` | `'carousel' \| 'grid' \| 'list'` | `'grid'` | Layout style for testimonials |
| `title` | `string` | `"What Our Customers Say"` | Section title |
| `subtitle` | `string` | `"Don't just take our word for it..."` | Section subtitle |
| `showTitle` | `boolean` | `true` | Whether to show title and subtitle |
| `autoRotate` | `boolean` | `false` | Auto-rotate carousel (carousel only) |
| `autoRotateInterval` | `number` | `5000` | Auto-rotation interval in ms |
| `maxRating` | `number` | `5` | Maximum star rating |
| `className` | `string` | `""` | Additional CSS classes for section |
| `cardClassName` | `string` | `""` | Additional CSS classes for cards |
| `showNavigation` | `boolean` | `true` | Show navigation arrows (carousel only) |
| `itemsPerView` | `object` | `{mobile: 1, tablet: 2, desktop: 3}` | Items per row for grid layout |

### Testimonial Interface

```tsx
interface Testimonial {
  id?: string | number;        // Unique identifier
  name: string;                // Customer name (required)
  quote: string;               // Testimonial text (required)
  rating?: number;             // Star rating (1-5)
  location?: string;           // Customer location/city
  serviceType?: string;        // Type of service provided
  avatar?: string;             // Customer avatar URL
}
```

## Layout Examples

### Grid Layout
Perfect for displaying multiple testimonials in a responsive grid:

```tsx
<Testimonials 
  testimonials={testimonials}
  layout="grid"
  itemsPerView={{ mobile: 1, tablet: 2, desktop: 3 }}
/>
```

### Carousel Layout
Great for highlighting testimonials with smooth transitions:

```tsx
<Testimonials 
  testimonials={testimonials}
  layout="carousel"
  autoRotate={true}
  autoRotateInterval={6000}
  showNavigation={true}
/>
```

### List Layout
Ideal for detailed testimonials in a vertical stack:

```tsx
<Testimonials 
  testimonials={testimonials}
  layout="list"
  title="Customer Stories"
/>
```

## Styling Customization

The component uses Tailwind CSS classes and can be customized via props:

```tsx
<Testimonials 
  testimonials={testimonials}
  className="bg-gray-100 py-16"
  cardClassName="border-2 border-green-200"
/>
```

## Data Structure Examples

### Basic Testimonial
```tsx
const basicTestimonial: Testimonial = {
  id: 1,
  name: "John Doe",
  quote: "Excellent service! Highly recommended.",
  rating: 5
};
```

### Complete Testimonial
```tsx
const completeTestimonial: Testimonial = {
  id: 1,
  name: "Sarah Johnson",
  quote: "Best lawn care service in the city! My yard has never looked better.",
  rating: 5,
  location: "Downtown",
  serviceType: "Lawn Maintenance",
  avatar: "/images/customer-avatar.jpg"
};
```

## Responsive Behavior

- **Mobile**: Single column layout, touch-friendly navigation
- **Tablet**: 2-column grid, optimized spacing
- **Desktop**: 3+ column grid, hover effects

## Accessibility Features

- ARIA labels for navigation buttons
- Keyboard navigation support
- Screen reader friendly content structure
- High contrast star ratings

## Integration Examples

### With Different Data Sources
```tsx
// Filter testimonials by service type
const lawnCareTestimonials = allTestimonials.filter(
  t => t.serviceType?.includes('Lawn')
);

<Testimonials 
  testimonials={lawnCareTestimonials}
  title="Lawn Care Reviews"
/>
```

### Multiple Sections
```tsx
// Different layouts on same page
<>
  <Testimonials 
    testimonials={featuredTestimonials}
    layout="carousel"
    title="Featured Reviews"
  />
  
  <Testimonials 
    testimonials={allTestimonials}
    layout="grid"
    title="All Customer Reviews"
    className="bg-gray-50"
  />
</>
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design for all screen sizes 