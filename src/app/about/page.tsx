import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Shield, 
  Users, 
  CheckCircle, 
  Phone,
  Mail,
  MapPin
} from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  // 🏆 CUSTOMIZE: Update these credentials with your actual business certifications
  // Replace with your license numbers, certifications, and coverage amounts
  const credentials = [
    {
      title: "Licensed & Insured",
      description: "State License #LC-2024-001",
      icon: Shield
    },
    {
      title: "Certified Professionals",
      description: "ISA Certified Arborists",
      icon: Award
    },
    {
      title: "Bonded Service",
      description: "$2M Liability Coverage",
      icon: CheckCircle
    },
    {
      title: "EPA Certified",
      description: "Pesticide Application License",
      icon: Award
    }
  ];



  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          {/* 🏢 CUSTOMIZE: Replace "LawnCare Pro" with your business name */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
            About LawnCare Pro
          </h1>
          <p className="text-xl text-gray-600 mb-8" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
            Your trusted partner in creating and maintaining beautiful outdoor spaces
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
                Transforming Lawns Since 2018
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
                LawnCare Pro began with a simple mission: to help homeowners achieve the lawn of their dreams. 
                What started as a small family operation has grown into the region's most trusted lawn care service, 
                serving over 2,000 satisfied customers across the metro area.
              </p>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
                We combine traditional craftsmanship with modern technology to deliver exceptional results. 
                Our team of certified professionals takes pride in every lawn we service, treating each property 
                as if it were our own. From routine maintenance to complete landscape transformations, 
                we're committed to exceeding your expectations.
              </p>
            </div>
            <div className="relative">
              <div className="bg-green-100 rounded-2xl p-8 text-center">
                <Users className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
                  2,000+
                </h3>
                <p className="text-gray-600" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
                  Happy Customers Served
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Photo Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
            Meet Our Team
          </h2>
          
          {/* Owners Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
              Our Owners
            </h3>
            <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/lawncareowners.jpg"
                      alt="LawnCare Pro Owners - John & Bill Smith"
                      width={500}
                      height={375}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
                    John & Bill Smith
                  </h4>
                  <p className="text-green-600 font-semibold mb-4" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
                    Founders & Lead Specialists
                  </p>
                  <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
                    With over 15 years of combined experience in landscaping and horticulture, 
                    John and Bill lead our team of certified professionals who share their passion 
                    for creating beautiful, healthy outdoor spaces. Their commitment to quality 
                    and customer satisfaction has made LawnCare Pro the trusted choice for 
                    thousands of homeowners.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
              Our Professional Team
            </h3>
            <div className="bg-gradient-to-r from-blue-100 to-green-100 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 text-center md:text-left">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
                    Certified Professionals
                  </h4>
                  <p className="text-green-600 font-semibold mb-4" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
                    Licensed & Experienced Specialists
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
                    Our skilled team of lawn care professionals brings expertise, dedication, and 
                    attention to detail to every project. Each team member is fully trained, 
                    licensed, and committed to delivering exceptional results.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    <Badge variant="secondary" className="px-3 py-1">
                      EPA Certified
                    </Badge>
                    <Badge variant="secondary" className="px-3 py-1">
                      ISA Arborists
                    </Badge>
                    <Badge variant="secondary" className="px-3 py-1">
                      Licensed & Insured
                    </Badge>
                  </div>
                </div>
                <div className="order-1 md:order-2 relative">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/lawncareteam.jpg"
                      alt="LawnCare Pro Professional Team at Work"
                      width={500}
                      height={375}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-green-600 text-white border-0">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
                Our Mission & Philosophy
              </h2>
              <p className="text-xl mb-6 leading-relaxed" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
                "To create and maintain beautiful, sustainable outdoor spaces that enhance our clients' 
                quality of life while respecting the environment."
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <CheckCircle className="w-12 h-12 mx-auto mb-4 text-green-200" />
                  <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
                    Quality First
                  </h3>
                  <p className="text-green-100" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
                    We never compromise on the quality of our work or materials
                  </p>
                </div>
                <div className="text-center">
                  <Shield className="w-12 h-12 mx-auto mb-4 text-green-200" />
                  <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
                    Eco-Friendly
                  </h3>
                  <p className="text-green-100" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
                    Sustainable practices that protect your family and the environment
                  </p>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 mx-auto mb-4 text-green-200" />
                  <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
                    Customer Focus
                  </h3>
                  <p className="text-green-100" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
                    Your satisfaction is our top priority in everything we do
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
            Licensed, Certified & Trusted
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((credential, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-green-600 border-0">
                <CardContent className="p-6">
                  <credential.icon className="w-12 h-12 text-green-200 mx-auto mb-4" />
                  <h3 className="font-semibold text-white mb-2" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
                    {credential.title}
                  </h3>
                  <p className="text-sm text-green-100" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
                    {credential.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="px-4 py-2">
                BBB A+ Rating
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Angie's List Super Service Award
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Google 4.9★ Rating
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                HomeAdvisor Elite Service
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
            Our Story
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
                Why We Started LawnCare Pro
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
                It all began in 2018 when Bill Smith moved into his first home. Like many new homeowners, 
                he was excited about having his own yard but quickly realized he had no idea how to maintain it properly. 
                After struggling with patchy grass, stubborn weeds, and failed DIY attempts, he decided to hire a lawn care service.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
                What he found was disappointing - services that were either too expensive, unreliable, or simply didn't care 
                about the quality of their work. John, with his background in horticulture, and Bill, with his business expertise, 
                saw an opportunity to do things differently.
              </p>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
                They founded LawnCare Pro with a simple belief: every homeowner deserves a beautiful lawn without the hassle, 
                stress, or breaking the bank. What started as helping neighbors has grown into a trusted service for thousands 
                of families who want to enjoy their outdoor spaces, not worry about them.
              </p>
            </div>
            
            <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-0">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
                    Our Promise
                  </h4>
                </div>
                <blockquote className="text-gray-700 italic text-center leading-relaxed" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
                  "We treat every lawn as if it were our own, because we remember what it felt like to struggle with ours. 
                  Your satisfaction isn't just our goal - it's personal."
                </blockquote>
                <div className="text-center mt-4">
                  <p className="text-sm text-gray-600" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
                    - John & Bill Smith, Founders
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
            Ready to Transform Your Lawn?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>
            Join thousands of satisfied customers who trust LawnCare Pro for all their lawn care needs. 
            Get your free estimate today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              <Phone className="w-5 h-5 mr-2" />
              Get Free Quote
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-green-600 bg-white hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Us
            </Button>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-green-100">
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              <span style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>(555) 123-LAWN</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              <span style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>info@lawncarepro.com</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              <span style={{ fontFamily: 'Reddit Sans, system-ui, sans-serif' }}>Serving Metro Area</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 