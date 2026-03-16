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
  Zap,
  Shield,
  Gauge,
  Battery
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Intelligent Transportation - SynJet Electronics',
  description: 'AEC-Q100 certified magnetic sensor ICs for automotive applications, from e-bikes to new energy vehicles.',
};

const applicationAreas = [
  {
    title: 'ABS/ESP Brake Systems',
    icon: Shield,
    description: 'High-reliability wheel speed sensors for anti-lock braking and electronic stability programs.',
    products: ['NSM41xx AMR Wheel Speed Sensor', 'MT83xx High-Voltage Hall Switch'],
    features: ['AEC-Q100 Grade 0', 'High EMC immunity', 'Wide temperature range'],
  },
  {
    title: 'Electric Power Steering',
    icon: Gauge,
    description: 'Precision angle sensors for torque and position detection in EPS systems.',
    products: ['MT6835 21-bit Angle Encoder', 'MT6825 18-bit Angle Encoder'],
    features: ['±0.02° linearity', 'High speed response', 'ISO26262 ASIL-B'],
  },
  {
    title: 'Battery Management',
    icon: Battery,
    description: 'Current sensors for battery monitoring and management in EVs.',
    products: ['NSM201x Integrated Current Sensor', 'NSM211x High-Bandwidth Current Sensor'],
    features: ['4000V isolation', '±1% accuracy', '400kHz bandwidth'],
  },
  {
    title: 'Motor Control',
    icon: Zap,
    description: 'Angle encoders and current sensors for BLDC motor control.',
    products: ['MT6701 Angle Encoder', 'MT9519 Linear Hall Current Sensor'],
    features: ['55,000 RPM max', '14-bit resolution', 'Low latency'],
  },
];

const keyFeatures = [
  'AEC-Q100 qualified for automotive grade',
  'ISO26262 functional safety compliance',
  'Operating temperature -40°C to 150°C',
  'High EMC immunity for harsh environments',
  'Compact packages for space-constrained designs',
  'Full traceability and PPAP support',
];

export default function IntelligentTransportationPage() {
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
            <Link href="/products" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Products
            </Link>
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
          src="/applications/images/transport-banner.jpg"
          alt="Intelligent Transportation"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <Car className="h-6 w-6 text-blue-400" />
                <span className="text-blue-400 font-medium">Intelligent Transportation</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Automotive-Grade Magnetic Sensors
              </h1>
              <p className="text-lg text-slate-300">
                AEC-Q100 certified magnetic sensor ICs for automotive applications, from light electric vehicles to new energy vehicles.
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
            <span className="text-slate-900">Intelligent Transportation</span>
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
                Our automotive-grade magnetic sensor ICs are fully tested according to AEC-Q100 standards and are progressively designed and evaluated according to ISO26262 functional safety standards. The product applications cover the entire land transportation industry, from light electric bicycles to fuel vehicles and new energy vehicles.
              </p>
              <p>
                Energy conversion efficiency, emission regulations, production efficiency, and regional infrastructure are the four major driving forces in the intelligent transportation industry. Our magnetic sensor ICs will play a role in these four major areas, contributing to the development of the intelligent transportation industry.
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
            <Link href="/applications/smart-manufacturing" className="group">
              <Card className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-colors">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <Factory className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Smart Manufacturing</h3>
                    <p className="text-sm text-slate-400">Industrial automation & robotics</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-slate-400 ml-auto group-hover:text-white transition-colors" />
                </CardContent>
              </Card>
            </Link>
            <Link href="/applications/smart-home" className="group">
              <Card className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-colors">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <Home className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Smart Home</h3>
                    <p className="text-sm text-slate-400">IoT & home appliances</p>
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
          <h2 className="text-2xl font-bold mb-4">Need Automotive-Grade Sensors?</h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Contact our team for product recommendations, samples, and technical support for your automotive applications.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
            <a href="mailto:autumn@synjet-electronics.com?subject=Automotive Sensor Inquiry">
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
