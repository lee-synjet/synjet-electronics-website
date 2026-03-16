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
  Cog,
  Ruler,
  Gauge
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Smart Manufacturing - SynJet Electronics',
  description: 'High-reliability magnetic sensors for industrial automation, robotics, and precision equipment.',
};

const applicationAreas = [
  {
    title: 'Industrial Robots',
    icon: Cog,
    description: 'High-precision angle encoders for robot arm joints and end-effectors.',
    products: ['MT6835 21-bit Angle Encoder', 'MT6826S 15-bit Angle Encoder'],
    features: ['21-bit resolution', '120,000 RPM', 'Low latency <2μs'],
  },
  {
    title: 'CNC Machines',
    icon: Gauge,
    description: 'Precision position sensors for spindle and axis control.',
    products: ['MT6701 Differential Hall Encoder', 'MT6728 Magnetic Encoder Chip'],
    features: ['±1° accuracy', 'ABZ/UVW output', 'Self-calibration'],
  },
  {
    title: 'Linear Motors',
    icon: Zap,
    description: 'Linear position sensors for direct drive systems.',
    products: ['MT910x Linear Position Sensor', 'MT6620 Off-axis Encoder'],
    features: ['High linearity', 'Multiple interfaces', 'Compact design'],
  },
  {
    title: 'Encoder Systems',
    icon: Ruler,
    description: 'Magnetic encoder solutions for rotary and linear encoders.',
    products: ['MT6816 14-bit Encoder', 'MT6709 Encoder Chip'],
    features: ['Non-contact sensing', 'Dust resistant', 'Long lifespan'],
  },
];

const keyFeatures = [
  'High precision for industrial applications',
  'Robust design for harsh environments',
  'Wide operating temperature range',
  'Multiple output interfaces (SPI, I²C, ABZ)',
  'Excellent EMI/EMC performance',
  'Miniaturized packages',
];

export default function SmartManufacturingPage() {
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
          src="/applications/images/manufacturing-banner.jpg"
          alt="Smart Manufacturing"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <Factory className="h-6 w-6 text-blue-400" />
                <span className="text-blue-400 font-medium">Smart Manufacturing</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Industrial-Grade Magnetic Sensors
              </h1>
              <p className="text-lg text-slate-300">
                High-reliability sensors for industrial automation, robotics, and precision equipment.
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
            <span className="text-slate-900">Smart Manufacturing</span>
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
                In modern industrial production, especially in automated production processes, various sensors are needed to monitor and control various parameters in the production process, enabling equipment to work under normal conditions and ensuring products achieve good quality. As key components of automated intelligent equipment, sensors are the foundation and core of developing smart manufacturing.
              </p>
              <p>
                Sensors are widely used in mechanical equipment manufacturing, scientific instruments, medical health, communication electronics, and other fields. To support the vigorous development of industries such as Industrial Internet, IoT, industrial big data, and artificial intelligence, our magnetic sensor chip design and production are developing towards miniaturization and systemization.
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
          <h2 className="text-2xl font-bold mb-4">Need Industrial Sensors?</h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Contact our team for product recommendations, samples, and technical support for your industrial applications.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
            <a href="mailto:autumn@synjet-electronics.com?subject=Industrial Sensor Inquiry">
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
