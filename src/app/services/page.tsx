"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, CheckCircle, Phone, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { servicesData } from "@/lib/services-data";

export default function ServicesPage() {
  // 📸 CUSTOMIZE: Update these image paths to match your service images
  // Add your service images to /public/images/ and update the paths here
  const getServiceImage = (slug: string) => {
    const imageMap: { [key: string]: string } = {
      'lawn-mowing': '/images/free-photo-of-back-view-of-man-lawn-mowing.jpeg',
      'pest-control': '/images/pestcontrol.jpg',
      'stump-removal': '/images/stumpremoval.png',
      'landscaping': '/images/heroimage.png'
    };
    return imageMap[slug] || '/images/heroimage.png';
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-emerald-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                {/* 🎯 CUSTOMIZE: Update the services page headline and description */}
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Our <span className="text-green-600">Services</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 mb-8">
                  Professional outdoor services designed to enhance and maintain your property's beauty and value.
                </p>
                <div className="flex items-center justify-center lg:justify-start gap-2 text-green-600 mb-8">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <span className="ml-2 text-gray-700 font-medium">4.9/5 from 200+ reviews</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold">
                    Get Free Estimate
                  </Button>
                  <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/serviceslarge.jpg"
                    alt="Professional landscaping and outdoor services"
                    width={600}
                    height={450}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {servicesData.map((service, index) => (
              <Card key={service.slug} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden bg-green-600">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={getServiceImage(service.slug)}
                    alt={service.title}
                    width={500}
                    height={224}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <Badge className="absolute top-4 right-4 bg-green-200 text-green-800 z-10 shadow-lg">
                    Starting at {service.startingPrice}
                  </Badge>
                  <div className="absolute bottom-4 left-4 z-10">
                    <service.icon className="w-10 h-10 text-white drop-shadow-lg" />
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-white group-hover:text-green-200 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-green-100 text-base leading-relaxed">
                    {service.shortDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-200 flex-shrink-0" />
                        <span className="text-green-100">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Link href={`/services/${service.slug}`} className="flex-1">
                      <Button className="w-full bg-white text-green-600 hover:bg-green-50 group-hover:shadow-lg transition-all">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Button variant="outline" className="border-white text-white hover:bg-green-700">
                      Get Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Services?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to delivering exceptional results with every project
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed professionals with comprehensive insurance coverage for your peace of mind.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">We stand behind our work with a 100% satisfaction guarantee on all services.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Reliable Service</h3>
              <p className="text-gray-600">Consistent, on-time service with clear communication throughout every project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Property?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Get a free, no-obligation estimate for any of our services. We'll work with you to create the perfect solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Get Free Estimate
              </Button>
              <Button variant="outline" size="lg" className="border-white text-green-600 bg-white hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 