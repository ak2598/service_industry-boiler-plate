"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, Phone, Mail, Star, Clock, Shield, Award, ChevronDown, ChevronUp, Loader2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/services-data";
import { notFound } from "next/navigation";
import { useState } from "react";
import { sendWebhook } from '@/lib/webhook';
import { toast } from 'sonner';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!service) {
    notFound();
  }

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const handleEstimateRequest = async () => {
    setIsSubmitting(true);
    try {
      const success = await sendWebhook({
        name: '',  // These will be collected via a modal or redirect to contact page
        email: '',
        phone: '',
        message: `Estimate request for ${service.title}`,
        timestamp: new Date().toISOString(),
        source: `service_estimate_${params.slug}`
      });

      if (success) {
        // For now, we'll redirect to the contact page
        window.location.href = `/contact?service=${params.slug}`;
      } else {
        throw new Error('Failed to process request');
      }
    } catch (error) {
      console.error('Error requesting estimate:', error);
      toast.error('Failed to process request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-emerald-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Link href="/services" className="inline-flex items-center text-green-600 hover:text-green-700 font-medium">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </Link>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <Badge className="bg-green-600 text-white text-lg px-4 py-2">
                    Starting at {service.startingPrice}
                  </Badge>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  {service.title}
                </h1>
                
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  {service.detailedDescription}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold"
                    onClick={handleEstimateRequest}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      'Get Free Estimate'
                    )}
                  </Button>
                  <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={service.heroImage}
                    alt={service.title}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What's Included</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Every service includes these comprehensive features and benefits
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg bg-green-600">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Service Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {service.whatsIncluded.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-green-200 flex-shrink-0 mt-0.5" />
                        <span className="text-green-100 text-lg">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg bg-green-600">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Key Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Star className="w-6 h-6 text-green-200 flex-shrink-0 mt-0.5" />
                        <span className="text-green-100 text-lg">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Here's how we deliver exceptional results every time
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
              <p className="text-xl text-gray-600">
                Trusted by hundreds of satisfied customers
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Licensed & Insured</h3>
                <p className="text-gray-600">Fully licensed professionals with comprehensive insurance coverage.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4.9/5 Rating</h3>
                <p className="text-gray-600">Consistently rated excellent by our satisfied customers.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">10+ Years Experience</h3>
                <p className="text-gray-600">Decade of experience serving the local community.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">
                Get answers to common questions about our {service.title.toLowerCase()} service
              </p>
            </div>
            
            <div className="space-y-4">
              {service.faqs.map((faq, index) => (
                <Card key={index} className="border-0 shadow-md bg-green-600">
                  <CardHeader 
                    className="cursor-pointer hover:bg-green-700 transition-colors"
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-white text-left">{faq.question}</CardTitle>
                      {expandedFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-green-200 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-green-200 flex-shrink-0" />
                      )}
                    </div>
                  </CardHeader>
                  {expandedFaq === index && (
                    <CardContent className="pt-0">
                      <p className="text-green-100 leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Get a free, no-obligation estimate for our {service.title.toLowerCase()} service. 
              We'll provide a detailed quote tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Get Free Estimate
              </Button>
              <Button variant="outline" size="lg" className="border-white text-green-600 bg-white hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                Call (555) 123-4567
              </Button>
            </div>
            
            <div className="mt-12 pt-8 border-t border-green-500">
              <div className="flex items-center justify-center gap-8 text-green-100">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>Same-day quotes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  <span>Licensed & insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  <span>Satisfaction guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 