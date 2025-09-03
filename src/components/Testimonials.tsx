"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight, MapPin, Wrench } from "lucide-react";

export interface Testimonial {
  id?: string | number;
  name: string;
  quote: string;
  rating?: number;
  location?: string;
  serviceType?: string;
  avatar?: string;
}

export interface TestimonialsProps {
  testimonials: Testimonial[];
  layout?: 'carousel' | 'grid' | 'list';
  title?: string;
  subtitle?: string;
  showTitle?: boolean;
  autoRotate?: boolean;
  autoRotateInterval?: number;
  maxRating?: number;
  className?: string;
  cardClassName?: string;
  showNavigation?: boolean;
  itemsPerView?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
}

export default function Testimonials({
  testimonials,
  layout = 'grid',
  title = "What Our Customers Say",
  subtitle = "Don't just take our word for it - hear from satisfied customers",
  showTitle = true,
  autoRotate = false,
  autoRotateInterval = 5000,
  maxRating = 5,
  className = "",
  cardClassName = "",
  showNavigation = true,
  itemsPerView = { mobile: 1, tablet: 2, desktop: 3 }
}: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate for carousel
  useEffect(() => {
    if (layout === 'carousel' && autoRotate && testimonials.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, autoRotateInterval);
      return () => clearInterval(interval);
    }
  }, [layout, autoRotate, autoRotateInterval, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex mb-4">
        {[...Array(maxRating)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating
                ? 'text-yellow-400 fill-current'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  const renderTestimonialCard = (testimonial: Testimonial, index?: number) => {
    const initials = testimonial.name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();

    return (
      <Card
        key={testimonial.id || index}
        className={`border-0 shadow-lg hover:shadow-xl transition-shadow bg-green-600 ${cardClassName}`}
      >
        <CardContent className="p-6 md:p-8">
          {testimonial.rating && renderStars(testimonial.rating)}
          
          <blockquote className="text-green-100 text-lg mb-6 italic leading-relaxed">
            "{testimonial.quote}"
          </blockquote>
          
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              {testimonial.avatar ? (
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
                  <span className="text-green-700 font-semibold text-lg">
                    {initials}
                  </span>
                </div>
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-white text-lg">
                {testimonial.name}
              </div>
              
              <div className="flex flex-wrap gap-2 mt-1">
                {testimonial.location && (
                  <div className="flex items-center text-green-200 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    {testimonial.location}
                  </div>
                )}
                
                {testimonial.serviceType && (
                  <div className="flex items-center text-green-200 text-sm">
                    <Wrench className="w-4 h-4 mr-1" />
                    {testimonial.serviceType}
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  const renderCarousel = () => {
    return (
      <div className="relative max-w-4xl mx-auto">
        <div className="overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id || index} className="w-full flex-shrink-0 px-4">
                {renderTestimonialCard(testimonial, index)}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        {showNavigation && testimonials.length > 1 && (
          <>
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg hover:shadow-xl border-gray-200"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg hover:shadow-xl border-gray-200"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </>
        )}

        {/* Dots Indicator */}
        {testimonials.length > 1 && (
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-green-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  const renderGrid = () => {
    const gridCols = {
      1: 'grid-cols-1',
      2: 'md:grid-cols-2',
      3: 'md:grid-cols-2 lg:grid-cols-3',
      4: 'md:grid-cols-2 lg:grid-cols-4'
    };

    const colClass = gridCols[Math.min(itemsPerView.desktop || 3, 4) as keyof typeof gridCols] || 'md:grid-cols-3';

    return (
      <div className={`grid gap-6 md:gap-8 max-w-7xl mx-auto ${colClass}`}>
        {testimonials.map((testimonial, index) => 
          renderTestimonialCard(testimonial, index)
        )}
      </div>
    );
  };

  const renderList = () => {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        {testimonials.map((testimonial, index) => 
          renderTestimonialCard(testimonial, index)
        )}
      </div>
    );
  };

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section className={`py-12 md:py-20 ${className}`} style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {layout === 'carousel' && renderCarousel()}
        {layout === 'grid' && renderGrid()}
        {layout === 'list' && renderList()}
      </div>
    </section>
  );
} 