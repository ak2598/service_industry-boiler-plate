import { Testimonial } from "@/components/Testimonials";

// 💬 CUSTOMIZE: Replace these sample testimonials with real customer reviews
// Update names, quotes, locations, and service types to match your business
export const sampleTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    quote: "Best lawn care service in the city! My yard has never looked better. The team is professional, reliable, and always goes above and beyond.",
    rating: 5,
    location: "Downtown",
    serviceType: "Lawn Maintenance"
  },
  {
    id: 2,
    name: "Mike Chen",
    quote: "Professional, reliable, and affordable. Highly recommend! They transformed my overgrown backyard into a beautiful space.",
    rating: 5,
    location: "Westside",
    serviceType: "Landscape Design"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    quote: "They transformed my overgrown yard into a beautiful landscape. The attention to detail is incredible and the results speak for themselves.",
    rating: 5,
    location: "Eastbrook",
    serviceType: "Garden Cleanup"
  },
  {
    id: 4,
    name: "David Thompson",
    quote: "Excellent service and fair pricing. My lawn looks amazing year-round thanks to their consistent care and expertise.",
    rating: 5,
    location: "Northfield",
    serviceType: "Fertilization"
  },
  {
    id: 5,
    name: "Lisa Park",
    quote: "The team is always punctual and does fantastic work. I've been using their services for 3 years and couldn't be happier.",
    rating: 5,
    location: "Southgate",
    serviceType: "Tree & Shrub Care"
  },
  {
    id: 6,
    name: "Robert Wilson",
    quote: "Great communication and quality work. They helped design and install a beautiful irrigation system that keeps my lawn green all season.",
    rating: 4,
    location: "Riverside",
    serviceType: "Irrigation"
  }
];

// Testimonials for different service types
export const lawnCareTestimonials: Testimonial[] = sampleTestimonials.filter(
  t => t.serviceType?.includes('Lawn') || t.serviceType?.includes('Fertilization')
);

export const landscapeTestimonials: Testimonial[] = sampleTestimonials.filter(
  t => t.serviceType?.includes('Landscape') || t.serviceType?.includes('Garden') || t.serviceType?.includes('Design')
);

export const maintenanceTestimonials: Testimonial[] = sampleTestimonials.filter(
  t => t.serviceType?.includes('Maintenance') || t.serviceType?.includes('Tree') || t.serviceType?.includes('Care')
); 