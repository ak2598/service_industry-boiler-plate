"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, Leaf, ChevronDown, MapPin } from "lucide-react";
import { servicesData } from "@/lib/services-data";
import { serviceAreas } from "@/lib/service-areas-data";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isServiceAreasDropdownOpen, setIsServiceAreasDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const [serviceAreasTimeout, setServiceAreasTimeout] = useState<NodeJS.Timeout | null>(null);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const handleDropdownEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setIsServicesDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 150); // 150ms delay
    setDropdownTimeout(timeout);
  };

  const handleServiceAreasEnter = () => {
    if (serviceAreasTimeout) {
      clearTimeout(serviceAreasTimeout);
      setServiceAreasTimeout(null);
    }
    setIsServiceAreasDropdownOpen(true);
  };

  const handleServiceAreasLeave = () => {
    const timeout = setTimeout(() => {
      setIsServiceAreasDropdownOpen(false);
    }, 150); // 150ms delay
    setServiceAreasTimeout(timeout);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
      }
      if (serviceAreasTimeout) {
        clearTimeout(serviceAreasTimeout);
      }
    };
  }, [dropdownTimeout, serviceAreasTimeout]);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* 🏢 CUSTOMIZE: Update logo and business name */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" /> {/* ← Change icon for your business */}
            </div>
            <span className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
              LawnCare Pro {/* ← Change to your business name */}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200"
              style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200"
              style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}
            >
              About
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <Link
                href="/services"
                className="flex items-center text-gray-700 hover:text-green-600 font-medium transition-colors duration-200"
                style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}
              >
                Services
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </Link>
              
              {/* Dropdown Menu */}
              {isServicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                  <Link
                    href="/services"
                    className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 font-medium border-b border-gray-100"
                    style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}
                  >
                    All Services
                  </Link>
                  {servicesData.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="flex items-center px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                      style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}
                    >
                      <service.icon className="w-5 h-5 mr-3 text-green-600" />
                      <div>
                        <div className="font-medium">{service.title}</div>
                        <div className="text-sm text-gray-500">Starting at {service.startingPrice}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link
              href="/testimonials"
              className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200"
              style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}
            >
              Testimonials
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200"
              style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}
            >
              Contact
            </Link>
            
            {/* Service Areas Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleServiceAreasEnter}
              onMouseLeave={handleServiceAreasLeave}
            >
              <button
                className="flex items-center text-gray-700 hover:text-green-600 font-medium transition-colors duration-200"
                style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}
              >
                Service Areas
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${isServiceAreasDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Service Areas Dropdown Menu */}
              {isServiceAreasDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                  {serviceAreas.map((area) => (
                    <Link
                      key={area}
                      href={`/?location=${area.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex items-center px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                      style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}
                    >
                      <MapPin className="w-4 h-4 mr-3 text-green-600" />
                      <span className="font-medium">{area}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="border-green-600 text-green-600 hover:bg-green-50"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
            <Button
              size="sm"
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              Free Estimate
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-green-600 font-medium py-2 transition-colors duration-200"
                style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-green-600 font-medium py-2 transition-colors duration-200"
                style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              
              {/* Mobile Services Section */}
              <div className="py-2">
                <Link
                  href="/services"
                  className="text-gray-700 hover:text-green-600 font-medium py-2 transition-colors duration-200 block"
                  style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  All Services
                </Link>
                <div className="ml-4 mt-2 space-y-2">
                  {servicesData.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="flex items-center py-2 text-gray-600 hover:text-green-600 transition-colors duration-200"
                      style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <service.icon className="w-4 h-4 mr-2 text-green-600" />
                      <span className="text-sm">{service.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link
                href="/testimonials"
                className="text-gray-700 hover:text-green-600 font-medium py-2 transition-colors duration-200"
                style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-green-600 font-medium py-2 transition-colors duration-200"
                style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile Service Areas Section */}
              <div className="py-2">
                <div className="text-gray-700 hover:text-green-600 font-medium py-2 transition-colors duration-200"
                     style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
                  Service Areas
                </div>
                <div className="ml-4 mt-2 space-y-2">
                  {serviceAreas.map((area) => (
                    <Link
                      key={area}
                      href={`/?location=${area.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex items-center py-2 text-gray-600 hover:text-green-600 transition-colors duration-200"
                      style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <MapPin className="w-4 h-4 mr-2 text-green-600" />
                      <span className="text-sm">{area}</span>
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-green-600 text-green-600 hover:bg-green-50 w-full"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
                <Button
                  size="sm"
                  className="bg-green-600 hover:bg-green-700 text-white w-full"
                >
                  Free Estimate
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 