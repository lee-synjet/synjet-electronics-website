import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Car, 
  Factory, 
  Home,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Lock,
  Droplets,
  Tv
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Smart Home - SynJet Electronics',
  description: 'Low-power magnetic sensors for home appliances, security systems, and IoT devices.',
};

const applicationAreas = [
  {
    title: 'Smart Appliances',
    icon: Tv,
    description: 'Position sensors for washing machines, dishwashers, and other home appliances.',
    products: ['MT6701 Angle Encoder', 'MT910x Linear Position Sensor'],
    features: ['High reliability', 'Low cost', 'Easy integration'],
  },
  {
    title: 'Security Systems',
    icon: Lock,
    description: 'Magnetic switches for door/window sensors and smart locks.',
    products: ['NSM105x TMR Switch', 'MT86xx Micro-Power Hall Switch'],
    features: ['200nA ultra-low power', 'High sensitivity', 'Long battery life'],
  },
  {
    title: 'Water & Gas Meters',
    icon: Droplets,
    description: 'Flow sensors for smart metering applications.',
    products: ['NSM1030 Hall Switch', 'MT8111 Low-Power Switch'],
    features: ['Battery powered', 'High accuracy', 'AMR/AMI ready'],
  },
  {
    title: 'Smart Lighting',
    icon: Lightbulb,
    description: 'Position detection for smart lighting systems and motorized blinds.',
    products: ['MT911x Low-Power Sensor', 'MT634x AMR Switch'],
    features: ['Micro-power design', 'Compact size', 'Precise detection'],
  },
];

const keyFeatures = [
  'Ultra-low power consumption (as low as 200nA)',
  'Wide operating voltage range (1.65V-5.5V)',
  'Compact package options (SOT-23, DFN)',
  'Long battery life for IoT devices',
  'Cost-effective solutions',
  'Easy to integrate',
];

export default function SmartHomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo.webp"
              alt="SynJet Logo"
              width={36}
              height={36}
              className="h-9 w-9"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-slate-900">SynJet Electronics</span>
              <span className="text-xs text-slate-500 hidden sm:block">Authorized Distributor</span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/applications" className="text-sm font-medium text-blue-600">
              Applications
            </Link>
            <Link href="/#brands" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Brands
            </Link>
            <Link href="/#about" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              About
            </Link>
            <Link href="/#contact" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Contact
            </Link>
          </nav>
          <Button className="bg-slate-900 hover:bg-slate-800 text-white" asChild>
            <a href="mailto:autumn@synjet-electronics.com?subject=Quote Request">
              Request Quote
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[400px] bg-slate-900">
        <Image
          src="/applications/images/smarthome-banner.jpg"
          alt="Smart Home"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <Home className="h-6 w-6 text-blue-400" />
                <span className="text-blue-400 font-medium">Smart Home</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                IoT & Home Appliance Sensors
              </h1>
              <p className="text-lg text-slate-300">
                Low-power magnetic sensors for home appliances, security systems, and IoT devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href="/applications" className="hover:text-blue-600">Applications</Link>
            <span>/</span>
            <span className="text-slate-900">Smart Home</span>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
            <div className="prose prose-lg text-slate-600 space-y-4">
              <p>
                With the development of technology, smart homes use residential platforms to enable people to control devices more conveniently and quickly through automatic control, network communication, and other technologies.
              </p>
              <p>
                Our magnetic sensors are applied in various motion sensors, security sensors, and other technologies, promoting the development of smart homes in applications such as home appliances, security, and water/gas/electricity data collection and transmission, making home life more comfortable, safe, and effective. Through the combination of magnetic sensing technology with IoT technology and big data, we have become part of the neural network of smart cities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Areas */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Application Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applicationAreas.map((area, index) => (
              <Card key={index} className="border border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <area.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">{area.title}</h3>
                      <p className="text-slate-600 mb-4">{area.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-slate-700 mb-2">Recommended Products:</h4>
                        <div className="flex flex-wrap gap-2">
                          {area.products.map((product, i) => (
                            <span key={i} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                              {product}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {area.features.map((feature, i) => (
                          <span key={i} className="inline-flex items-center gap-1 text-xs text-green-700">
                            <CheckCircle2 className="h-3 w-3" />
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Applications */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Explore Other Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Link href="/applications/intelligent-transportation" className="group">
              <Card className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-colors">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <Car className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Intelligent Transportation</h3>
                    <p className="text-sm text-slate-400">Automotive applications</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-slate-400 ml-auto group-hover:text-white transition-colors" />
                </CardContent>
              </Card>
            </Link>
            <Link href="/applications/smart-manufacturing" className="group">
              <Card className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-colors">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <Factory className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Smart Manufacturing</h3>
                    <p className="text-sm text-slate-400">Industrial automation</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-slate-400 ml-auto group-hover:text-white transition-colors" />
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Need IoT & Home Appliance Sensors?</h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Contact our team for product recommendations, samples, and technical support for your smart home applications.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
            <a href="mailto:autumn@synjet-electronics.com?subject=Smart Home Sensor Inquiry">
              Contact Us Today
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} SynJet Electronics. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
