import { Scissors, Bug, TreePine, Flower2, LucideIcon } from "lucide-react";

// 🛠️ CUSTOMIZE: This file contains all your service data
// Update services, descriptions, pricing, and images to match your business
// For different industries, change icons and service types accordingly

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  icon: LucideIcon;
  features: string[];
  benefits: string[];
  whatsIncluded: string[];
  startingPrice: string;
  heroImage: string;
  galleryImages: string[];
  process: {
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

// 📝 CUSTOMIZE: Replace these services with your actual business services
// Each service should include: title, description, pricing, images, and FAQs
export const servicesData: Service[] = [
  {
    slug: "lawn-mowing", // ← Update slug for URL (e.g., "plumbing-repair")
    title: "Professional Lawn Mowing", // ← Change to your service name
    shortDescription: "Professional lawn mowing and edging services to keep your grass healthy and beautiful.",
    detailedDescription: "Our professional lawn mowing service ensures your grass stays healthy, vibrant, and perfectly manicured year-round. We use commercial-grade equipment and proven techniques to deliver consistent, reliable results that enhance your property's curb appeal and value.",
    icon: Scissors,
    features: ["Weekly/Bi-weekly service", "Edging included", "Grass clipping cleanup", "Seasonal scheduling"],
    benefits: [
      "Improved curb appeal and property value",
      "Healthier grass growth and root development",
      "Time savings for busy homeowners",
      "Professional equipment for superior results",
      "Consistent, reliable service schedule"
    ],
    whatsIncluded: [
      "Precision mowing with commercial equipment",
      "Edge trimming around walkways and flower beds",
      "Grass clipping removal and cleanup",
      "Basic debris removal from lawn area",
      "Post-service property inspection"
    ],
    startingPrice: "$45",
    heroImage: "/images/guy_on_lawn_mower.png",
    galleryImages: [
      "/images/free-photo-of-back-view-of-man-lawn-mowing.jpeg",
      "/images/guy_on_lawn_mower.png",
      "/images/grass-lawn-green-nature-landscapes.png",
      "/images/heroimage.png"
    ],
    process: [
      {
        title: "Initial Assessment",
        description: "We evaluate your lawn's current condition, grass type, and specific needs to create a customized mowing plan."
      },
      {
        title: "Professional Mowing",
        description: "Using commercial-grade equipment, we mow your lawn to the optimal height for your grass type and season."
      },
      {
        title: "Precision Edging",
        description: "We carefully edge around walkways, driveways, and flower beds for a clean, professional appearance."
      },
      {
        title: "Cleanup & Inspection",
        description: "We remove clippings, clear debris, and perform a final inspection to ensure quality standards are met."
      }
    ],
    faqs: [
      {
        question: "How often should I have my lawn mowed?",
        answer: "Most lawns benefit from weekly mowing during peak growing season (spring/summer) and bi-weekly during slower growth periods. We'll recommend the best schedule based on your grass type and local conditions."
      },
      {
        question: "Do you provide your own equipment?",
        answer: "Yes, we bring all necessary commercial-grade equipment including mowers, edgers, and cleanup tools. You don't need to provide anything."
      },
      {
        question: "What happens to the grass clippings?",
        answer: "We typically remove and dispose of grass clippings, though we can leave them as natural fertilizer if you prefer. We'll discuss the best option for your lawn during our initial consultation."
      },
      {
        question: "Do you service during bad weather?",
        answer: "We monitor weather conditions and will reschedule service if conditions are unsafe or would damage your lawn. We'll communicate any schedule changes in advance."
      }
    ]
  },
  {
    slug: "pest-control",
    title: "Comprehensive Pest Control",
    shortDescription: "Comprehensive pest management solutions to protect your property from unwanted insects and rodents.",
    detailedDescription: "Our integrated pest management approach combines the latest techniques and eco-friendly solutions to eliminate current pest problems and prevent future infestations. We protect your home and family while being mindful of the environment.",
    icon: Bug,
    features: ["Interior & exterior treatment", "Eco-friendly options", "Monthly maintenance", "Guaranteed results"],
    benefits: [
      "Complete protection from common household pests",
      "Safe, family-friendly treatment options",
      "Prevention of property damage from pests",
      "Improved health and comfort in your home",
      "Long-term cost savings vs. DIY solutions"
    ],
    whatsIncluded: [
      "Comprehensive property inspection",
      "Interior and exterior treatment application",
      "Targeted pest elimination strategies",
      "Preventive barrier treatments",
      "Follow-up monitoring and maintenance"
    ],
    startingPrice: "$89",
    heroImage: "/images/masquitopestcontrol.jpeg",
    galleryImages: [
      "/images/masquitopestcontrol.jpeg",
      "/images/pestcontrol.jpg",
      "/images/neighborhood.jpg",
      "/images/heroimage.png"
    ],
    process: [
      {
        title: "Thorough Inspection",
        description: "We conduct a detailed inspection to identify pest types, entry points, and problem areas throughout your property."
      },
      {
        title: "Customized Treatment Plan",
        description: "Based on our findings, we develop a targeted treatment strategy using the most effective and safe methods for your situation."
      },
      {
        title: "Professional Application",
        description: "Our certified technicians apply treatments using professional-grade equipment and proven techniques for maximum effectiveness."
      },
      {
        title: "Monitoring & Follow-up",
        description: "We monitor treatment effectiveness and provide ongoing maintenance to ensure long-term pest prevention."
      }
    ],
    faqs: [
      {
        question: "Are your treatments safe for children and pets?",
        answer: "Yes, we prioritize safety and offer eco-friendly, low-toxicity options that are safe for families and pets when applied correctly. We'll discuss all safety precautions during treatment."
      },
      {
        question: "How quickly will I see results?",
        answer: "Most customers see significant improvement within 24-48 hours, with complete elimination typically achieved within 1-2 weeks depending on the pest type and severity of infestation."
      },
      {
        question: "Do you guarantee your pest control services?",
        answer: "Yes, we stand behind our work with a satisfaction guarantee. If pests return between scheduled treatments, we'll return at no additional charge to address the issue."
      },
      {
        question: "What types of pests do you treat?",
        answer: "We handle a wide range of common household pests including ants, spiders, cockroaches, termites, rodents, and seasonal pests. Contact us to discuss your specific pest concerns."
      }
    ]
  },
  {
    slug: "stump-removal",
    title: "Professional Stump Removal",
    shortDescription: "Complete stump grinding and removal services to reclaim your yard space safely and efficiently.",
    detailedDescription: "Our professional stump removal service eliminates unsightly tree stumps and reclaims valuable yard space. Using state-of-the-art grinding equipment, we safely and efficiently remove stumps of any size while minimizing impact to your surrounding landscape.",
    icon: TreePine,
    features: ["Professional grinding", "Complete cleanup", "Root removal", "Site restoration"],
    benefits: [
      "Reclaim valuable yard space for landscaping",
      "Eliminate tripping hazards and safety concerns",
      "Prevent pest infestations in decaying stumps",
      "Improve property aesthetics and value",
      "Allow for new plantings or construction"
    ],
    whatsIncluded: [
      "Complete stump grinding below ground level",
      "Root system removal and treatment",
      "Wood chip and debris cleanup",
      "Site grading and soil preparation",
      "Optional topsoil and seed application"
    ],
    startingPrice: "$150",
    heroImage: "/images/stumpremoval.png",
    galleryImages: [
      "/images/stumpremoval.png",
      "/images/treestump.png",
      "/images/landscaping.jpg",
      "/images/neighborhood.jpg"
    ],
    process: [
      {
        title: "Site Assessment",
        description: "We evaluate the stump size, location, and surrounding area to determine the best removal approach and equipment needed."
      },
      {
        title: "Professional Grinding",
        description: "Using commercial stump grinders, we safely remove the stump and major root system several inches below ground level."
      },
      {
        title: "Complete Cleanup",
        description: "We remove all wood chips and debris, then grade the area to blend seamlessly with your existing landscape."
      },
      {
        title: "Site Restoration",
        description: "We can add topsoil and grass seed to restore the area, or prepare it for your planned landscaping project."
      }
    ],
    faqs: [
      {
        question: "How deep do you grind the stump?",
        answer: "We typically grind stumps 6-8 inches below ground level, which is sufficient for most landscaping needs. We can go deeper if required for specific projects."
      },
      {
        question: "What happens to the wood chips?",
        answer: "We can remove all wood chips, or leave them for you to use as mulch in other areas of your yard. We'll discuss your preference during the initial consultation."
      },
      {
        question: "Will stump removal damage my yard?",
        answer: "We use specialized equipment and techniques to minimize impact to your surrounding landscape. Any minor damage is typically restored as part of our cleanup process."
      },
      {
        question: "How long does stump removal take?",
        answer: "Most residential stumps can be removed in 1-3 hours depending on size and complexity. We'll provide a time estimate during our initial assessment."
      }
    ]
  },
  {
    slug: "landscaping",
    title: "Custom Landscaping Design",
    shortDescription: "Full-service landscaping design and installation to transform your outdoor living space.",
    detailedDescription: "Transform your outdoor space with our comprehensive landscaping services. From initial design concepts to final installation, we create beautiful, functional landscapes that reflect your style and enhance your property's value while considering maintenance requirements and local growing conditions.",
    icon: Flower2,
    features: ["Custom design", "Plant installation", "Hardscape features", "Ongoing maintenance"],
    benefits: [
      "Dramatically increase property value and curb appeal",
      "Create functional outdoor living spaces",
      "Reduce long-term maintenance requirements",
      "Improve energy efficiency with strategic plantings",
      "Enjoy year-round beauty with seasonal interest"
    ],
    whatsIncluded: [
      "Comprehensive site analysis and design consultation",
      "Custom landscape design and 3D visualization",
      "Professional plant selection and installation",
      "Hardscape features (patios, walkways, retaining walls)",
      "Irrigation system design and installation",
      "Mulching and finishing touches"
    ],
    startingPrice: "$299",
    heroImage: "/images/landscaping.jpg",
    galleryImages: [
      "/images/landscaping.jpg",
      "/images/landscaping.png",
      "/images/neighborhood.jpg",
      "/images/heroimage.png"
    ],
    process: [
      {
        title: "Design Consultation",
        description: "We meet with you to understand your vision, assess your property, and discuss budget, timeline, and maintenance preferences."
      },
      {
        title: "Custom Design Creation",
        description: "Our designers create detailed plans and 3D visualizations showing your new landscape, including plant selections and hardscape features."
      },
      {
        title: "Professional Installation",
        description: "Our experienced crew installs all elements according to the approved design, ensuring proper planting techniques and construction standards."
      },
      {
        title: "Final Walkthrough",
        description: "We conduct a comprehensive walkthrough, provide care instructions, and ensure you're completely satisfied with your new landscape."
      }
    ],
    faqs: [
      {
        question: "Do you provide landscape design services?",
        answer: "Yes, we offer complete design services including site analysis, custom design creation, and 3D visualizations to help you envision your new landscape before installation begins."
      },
      {
        question: "What types of plants do you recommend?",
        answer: "We select plants based on your local climate, soil conditions, sun exposure, and maintenance preferences. We focus on native and adapted species that thrive in your area."
      },
      {
        question: "Do you install hardscape features?",
        answer: "Yes, we install various hardscape elements including patios, walkways, retaining walls, fire pits, and water features as part of our comprehensive landscaping services."
      },
      {
        question: "Do you provide ongoing maintenance?",
        answer: "We offer maintenance packages to keep your new landscape looking its best, including pruning, fertilization, seasonal cleanups, and irrigation system maintenance."
      }
    ]
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return servicesData.find(service => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map(service => service.slug);
} 