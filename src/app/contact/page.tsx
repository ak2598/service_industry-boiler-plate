'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { Phone, Mail, Clock, MapPin, Upload, Loader2 } from 'lucide-react';
import { sendWebhook } from '@/lib/webhook';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  file?: File | null;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    file: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send data to webhook
      const webhookSuccess = await sendWebhook({
        ...formData,
        timestamp: new Date().toISOString(),
        source: 'contact_form'
      });

      if (!webhookSuccess) {
        throw new Error('Failed to send webhook');
      }
      
      // If file is present, you might want to handle it separately
      // For example, upload to a storage service and include the URL in the webhook
      if (formData.file) {
        // Handle file upload here if needed
        console.log('File to be handled:', formData.file);
      }
      
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        file: null,
      });
      
      // Reset file input
      const fileInput = document.getElementById('file-upload') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
      
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // 📞 CUSTOMIZE: Update this business information with your actual details
  const businessInfo = {
    phone: '(555) 123-4567', // ← Your phone number
    email: 'contact@servicecompany.com', // ← Your email address
    hours: 'Monday - Friday: 9:00 AM - 5:00 PM', // ← Your business hours
    serviceAreas: [ // ← Your service areas with zip codes
      'Grand Rapids - 49503',
      'East Grand Rapids - 49506',
      'Wyoming - 49509',
      'Kentwood - 49512',
      'Walker - 49544'
    ]
  };

  return (
    <>
      {/* Schema Markup for Local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Service Company", // ← Change to your business name
            "description": "Professional service provider", // ← Update description
            "telephone": businessInfo.phone,
            "email": businessInfo.email,
            "openingHours": "Mo-Fr 09:00-17:00",
            "areaServed": businessInfo.serviceAreas.map(area => ({
              "@type": "City",
              "name": area
            })),
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": businessInfo.phone,
              "contactType": "customer service",
              "availableLanguage": "English"
            }
          })
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're here to help! Reach out below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg bg-gray-100 border-0">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-gray-900">
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                          Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="mt-1"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="mt-1"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="mt-1"
                        rows={5}
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <div>
                      <Label htmlFor="file-upload" className="text-sm font-medium text-gray-700">
                        Photo Attachment (Optional)
                      </Label>
                      <div className="mt-1 flex items-center space-x-2">
                        <Input
                          id="file-upload"
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => document.getElementById('file-upload')?.click()}
                          className="flex items-center space-x-2"
                        >
                          <Upload className="h-4 w-4" />
                          <span>Choose Photo</span>
                        </Button>
                        {formData.file && (
                          <span className="text-sm text-gray-600">
                            {formData.file.name}
                          </span>
                        )}
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Business Information */}
            <div className="space-y-6">
              <Card className="shadow-lg bg-gray-100 border-0">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    Get in Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Phone</p>
                      <a
                        href={`tel:${businessInfo.phone}`}
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        {businessInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Email</p>
                      <a
                        href={`mailto:${businessInfo.email}`}
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        {businessInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Business Hours</p>
                      <p className="text-gray-600">{businessInfo.hours}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Service Areas</p>
                      <ul className="text-gray-600 space-y-1">
                        {businessInfo.serviceAreas.map((area, index) => (
                          <li key={index} className="text-sm">
                            {area}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Google Maps Embed */}
              <Card className="shadow-lg bg-gray-100 border-0">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    Service Area Map
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="w-full h-64 rounded-b-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d185410.87404345494!2d-85.8681845!3d42.9633599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8819ad30504d6c8b%3A0x7e0d7b1d5d1c5b1a!2sGrand%20Rapids%2C%20MI!5e0!3m2!1sen!2sus!4v1234567890123"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Service Area Map - Grand Rapids, MI"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 