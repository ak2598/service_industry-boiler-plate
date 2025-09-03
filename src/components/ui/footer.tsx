"use client";

import Link from "next/link";
import { Leaf, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { servicesData } from "@/lib/services-data";
import { serviceAreas } from "@/lib/service-areas-data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const topServices = servicesData.slice(0, 4);
  const topServiceAreas = serviceAreas.slice(0, 6);

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 🏢 CUSTOMIZE: Update company info and description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" /> {/* ← Change icon */}
              </div>
              <span className="text-xl font-bold" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
                LawnCare Pro {/* ← Change to your business name */}
              </span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
              Professional lawn care services you can trust. We transform outdoor spaces with expert care, 
              reliable service, and guaranteed results for residential and commercial properties.
              {/* ← Update with your business description */}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                    style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/privacy" 
                  className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                  style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms" 
                  className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                  style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
              Our Services
            </h3>
            <ul className="space-y-2">
              {topServices.map((service) => (
                <li key={service.slug}>
                  <Link 
                    href={`/services/${service.slug}`} 
                    className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                    style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/services" 
                  className="text-green-400 hover:text-green-300 transition-colors text-sm font-medium"
                  style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}
                >
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Service Areas */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a 
                    href="tel:+1234567890" 
                    className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                    style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}
                  >
                    (123) 456-7890 {/* ← Update with your phone number */}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a 
                    href="mailto:info@lawncarepro.com" 
                    className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                    style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}
                  >
                    info@lawncarepro.com {/* ← Update with your email */}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
                  {/* 🕒 CUSTOMIZE: Update with your business hours */}
                  <div>Mon-Fri: 7AM-6PM</div>
                  <div>Sat: 8AM-4PM</div>
                  <div>Sun: Closed</div>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <h4 className="text-sm font-semibold text-white mb-2" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
                Service Areas
              </h4>
              <div className="grid grid-cols-2 gap-1">
                {topServiceAreas.map((area) => (
                  <Link
                    key={area}
                    href={`/?location=${area.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-400 hover:text-green-400 transition-colors text-xs"
                    style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}
                  >
                    {area}
                  </Link>
                ))}
              </div>
              <Link 
                href="/#service-areas" 
                className="text-green-400 hover:text-green-300 transition-colors text-xs font-medium inline-block mt-2"
                style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}
              >
                View All Areas →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
              © {currentYear} LawnCare Pro. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-4 h-4 text-green-400" />
                <span style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
                  Licensed & Insured
                </span>
              </div>
              <div className="text-gray-400" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
                •
              </div>
              <div className="text-gray-400" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
                Free Estimates Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 