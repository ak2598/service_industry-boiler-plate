"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Phone, Mail, CheckCircle, Users, Award, Shield, Clock, Scissors, Sprout, Leaf, TreePine, Droplets } from "lucide-react";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Testimonials from "@/components/Testimonials";
import { sampleTestimonials } from "@/data/testimonials";
import { serviceAreas } from "@/lib/service-areas-data";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const searchParams = useSearchParams();
  const locationParam = searchParams.get('location');
  
  // Convert location parameter back to display format
  const selectedLocation = locationParam 
    ? serviceAreas.find(area => area.toLowerCase().replace(/\s+/g, '-') === locationParam)
    : null;

  // 📸 CUSTOMIZE: Replace these gallery images with your own before/after photos
  // Upload your images to /public/images/ and update the paths here
  const galleryImages = [
    { before: "/images/beforelawn.jpg", after: "/images/afterlawn.png", title: "Lawn Transformation" },
    { before: "/images/landscaping.jpg", after: "/images/landscaping.png", title: "Garden Cleanup" },
    { before: "/images/landscapedlawn.jpg", after: "/images/heroimage.png", title: "Landscape Design" },
  ];

  // Auto-rotate gallery
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  // Show sticky CTA on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 🛠️ CUSTOMIZE: Replace these services with your business services
  // For different businesses, change icons and descriptions:
  // Plumbing: Wrench, Droplets, Shower, Home, AlertTriangle
  // Cleaning: Home, Building, Sparkles, Calendar, Trash
  // HVAC: Thermometer, Wind, Zap, Settings, Clock
  const services = [
    { icon: Scissors, title: "Lawn Mowing", description: "Regular mowing and edging to keep your lawn pristine" },
    { icon: Sprout, title: "Fertilization", description: "Custom fertilization programs for healthy grass growth" },
    { icon: Leaf, title: "Leaf Removal", description: "Seasonal cleanup and debris removal services" },
    { icon: TreePine, title: "Tree & Shrub Care", description: "Pruning, trimming, and maintenance for all plants" },
    { icon: Droplets, title: "Irrigation", description: "Sprinkler system installation and maintenance" },
  ];



  // 🏆 CUSTOMIZE: Update these trust badges with your business credentials
  // Replace with your actual ratings, experience, and certifications
  const trustBadges = [
    { icon: Shield, title: "Licensed & Insured", subtitle: "Fully protected service" },
    { icon: Star, title: "4.9/5 Google Rating", subtitle: "200+ reviews" },
    { icon: Users, title: "10+ Years Experience", subtitle: "Trusted by 1000+ customers" },
    { icon: Award, title: "Best of 2024", subtitle: "Local business award" },
  ];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-emerald-100 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/heroimage.png')] bg-cover bg-center opacity-80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* 🎯 CUSTOMIZE: Update hero headline and description for your business */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Professional Lawn Care in <span className="text-green-200">{selectedLocation || 'Your City'}</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto drop-shadow-md">
              Transform your outdoor space with our expert lawn care services in {selectedLocation || 'your area'}. Beautiful lawns, reliable service, guaranteed results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all">
                Get Free Estimate
              </Button>
              {/* 📞 CUSTOMIZE: Replace with your actual phone number */}
              <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold rounded-lg">
                <Phone className="w-5 h-5 mr-2" />
                (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive lawn care solutions to keep your property looking its best year-round
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0 shadow-md bg-green-600">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-green-700" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-green-100">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section id="service-areas" className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {selectedLocation ? `Serving ${selectedLocation} & Surrounding Areas` : 'Service Areas'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {selectedLocation 
                ? `Professional lawn care services in ${selectedLocation} and nearby neighborhoods` 
                : 'We proudly serve these neighborhoods and surrounding areas'
              }
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {serviceAreas.map((area, index) => {
                const isSelected = area === selectedLocation;
                return (
                  <div 
                    key={index} 
                    className={`rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-all cursor-pointer ${
                      isSelected 
                        ? 'bg-green-600 text-white shadow-lg' 
                        : 'bg-white hover:bg-green-50'
                    }`}
                    onClick={() => {
                      const locationSlug = area.toLowerCase().replace(/\s+/g, '-');
                      window.location.href = `/?location=${locationSlug}`;
                    }}
                  >
                    <MapPin className={`w-5 h-5 mx-auto mb-2 ${isSelected ? 'text-white' : 'text-green-600'}`} />
                    <span className={`font-medium ${isSelected ? 'text-white' : 'text-gray-800'}`}>{area}</span>
                  </div>
                );
              })}
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-600">Don't see your area? <Button variant="link" className="text-green-600 p-0 h-auto font-semibold">Contact us</Button> to check availability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials 
        testimonials={sampleTestimonials.slice(0, 3)} 
        layout="grid"
        className="bg-green-50"
      />

      {/* Our Gallery */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Gallery</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See the transformation we bring to every property
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="relative">
                  <img 
                    src={galleryImages[currentImageIndex].before} 
                    alt="Before" 
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
                <div className="relative">
                  <img 
                    src={galleryImages[currentImageIndex].after} 
                    alt="After" 
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {galleryImages[currentImageIndex].title}
                </h3>
                <div className="flex justify-center space-x-2">
                  {galleryImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-green-600' : 'bg-green-200'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section id="about" className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your trusted partner for professional lawn care services
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {trustBadges.map((badge, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <badge.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{badge.title}</h3>
                <p className="text-gray-600">{badge.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-20 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for a Beautiful Lawn?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Get your free estimate today and see why we're the top choice for lawn care in your area
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg">
              Get Free Estimate
            </Button>
            <Button variant="outline" size="lg" className="border-white text-green-600 bg-white hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg">
              <Phone className="w-5 h-5 mr-2" />
              (555) 123-4567
            </Button>
          </div>
        </div>
      </section>

      {/* Sticky CTA (Mobile) */}
      {showStickyCTA && (
        <div className="fixed bottom-0 left-0 right-0 bg-green-600 p-4 shadow-lg z-50 lg:hidden">
          <div className="flex gap-2">
            <Button className="flex-1 bg-white text-green-600 hover:bg-gray-100 font-semibold">
              Free Estimate
            </Button>
            <Button variant="outline" className="border-white text-green-600 bg-white hover:bg-gray-100">
              <Phone className="w-5 h-5" />
            </Button>
          </div>
        </div>
      )}


    </div>
  );
}
