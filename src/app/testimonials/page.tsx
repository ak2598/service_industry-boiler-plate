"use client";

import Testimonials from "@/components/Testimonials";
import { sampleTestimonials } from "@/data/testimonials";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ExternalLink, Award, Users, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function TestimonialsPage() {
  // 💬 CUSTOMIZE: Update these stats with your actual business metrics
  const trustStats = [
    { icon: Star, value: "4.9/5", label: "Google Rating", subtitle: "200+ Reviews" },
    { icon: Users, value: "2,000+", label: "Happy Customers", subtitle: "Since 2018" },
    { icon: Award, value: "#1", label: "Local Ranking", subtitle: "Best of 2024" },
    { icon: TrendingUp, value: "98%", label: "Customer Satisfaction", subtitle: "Guaranteed Results" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>


      {/* Hero Section with Rankings */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Consistently Ranked <span className="text-green-600">#1</span> in Customer Satisfaction
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our commitment to excellence has earned us top ratings across all review platforms. 
              We're proud to be the most trusted service provider in our area, with hundreds of 
              five-star reviews from satisfied customers who recommend us to their friends and family.
            </p>
          </div>

          {/* Trust Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {trustStats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-500">
                    {stat.subtitle}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Carousel */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Are Saying
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real reviews from real customers who have experienced our exceptional service
            </p>
          </div>

          <Testimonials 
            testimonials={sampleTestimonials} 
            layout="carousel"
            showTitle={false}
            autoRotate={true}
            autoRotateInterval={7000}
            className="bg-white"
          />
        </div>
      </section>

      {/* Review Platform Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              See All Our Reviews
            </h3>
            <p className="text-lg text-gray-600">
              Check out our reviews on these trusted platforms
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* 🔗 CUSTOMIZE: Update these links with your actual review platform URLs */}
            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md bg-green-600">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-700" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Google Reviews</h4>
                <div className="flex justify-center items-center mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-green-100">4.9/5 (200+ reviews)</span>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-white text-green-600 bg-white hover:bg-green-50"
                  asChild
                >
                  <a href="https://google.com/search?q=your+business+reviews" target="_blank" rel="noopener noreferrer">
                    View Reviews <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md bg-green-600">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-700" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Facebook Reviews</h4>
                <div className="flex justify-center items-center mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-green-100">4.8/5 (150+ reviews)</span>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-white text-green-600 bg-white hover:bg-green-50"
                  asChild
                >
                  <a href="https://facebook.com/your-business-page/reviews" target="_blank" rel="noopener noreferrer">
                    View Reviews <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md bg-green-600">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-700" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Yelp Reviews</h4>
                <div className="flex justify-center items-center mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-green-100">4.7/5 (80+ reviews)</span>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-white text-green-600 bg-white hover:bg-green-50"
                  asChild
                >
                  <a href="https://yelp.com/biz/your-business-name" target="_blank" rel="noopener noreferrer">
                    View Reviews <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience 5-Star Service?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have trusted us with their service needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg">
              Get Your Free Estimate
            </Button>
            <Button variant="outline" size="lg" className="border-white text-green-600 bg-white hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg">
              View Our Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 