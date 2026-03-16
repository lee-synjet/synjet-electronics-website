import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Shield, 
  Mail, 
  MapPin,
  CheckCircle2,
  Clock,
  DollarSign,
  FileText,
  MessageSquare,
  Award,
  ArrowRight,
  Car,
  Factory,
  Home as HomeIcon
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'SynJet Electronics - Authorized Distributor of Magnetic Sensor ICs',
  description: 'Authorized distributor of genuine magnetic sensor ICs, Hall switches, and current sensors. 100% original components with full traceability. Competitive pricing and fast delivery.',
  keywords: 'magnetic sensor ICs, Hall switch, current sensor, authorized distributor, semiconductor distributor',
};

const products = [
  {
    name: 'MT92XX High-Voltage Hall Switch',
    description: 'AEC-Q100 certified, wide voltage range (3.8V-60V), 200KHz sampling for automotive.',
    image: 'https://aka.doubaocdn.com/s/28sP1w3qQb',
    features: ['3.8-60V', '200KHz', '-40~150°C', 'AEC-Q100'],
    datasheet: '#',
  },
  {
    name: 'MT9522 Current Sensor IC',
    description: '4800Vrms isolation, 250KHz bandwidth, overcurrent protection.',
    image: 'https://aka.doubaocdn.com/s/zNV81w3qQS',
    features: ['±20-80A', '4800Vrms', '250KHz', 'Built-in OCP'],
    datasheet: '#',
  },
  {
    name: 'MT86XX Micro-Power Hall Switch',
    description: 'Ultra-low power 1.7µA for battery-powered IoT devices.',
    image: 'https://aka.doubaocdn.com/s/InMi1w3qQb',
    features: ['1.7µA', '1.6-5.5V', '-40~125°C', 'IoT Ready'],
    datasheet: '#',
  },
  {
    name: 'MT9532 High-Speed Current Sensor',
    description: '1MHz bandwidth, <1µs response for industrial systems.',
    image: 'https://aka.doubaocdn.com/s/tXc31w3qQS',
    features: ['1MHz', '<1µs', '4800Vrms', '±20-80A'],
    datasheet: '#',
  },
];

const features = [
  {
    icon: Shield,
    title: '100% Original & Traceable',
    description: 'Genuine, factory-direct components with full traceability. Zero counterfeits.',
  },
  {
    icon: DollarSign,
    title: 'Save 20-30%',
    description: 'Competitive pricing on high-performance Chinese brand alternatives.',
  },
  {
    icon: Clock,
    title: 'Fast Response',
    description: '24-48h quote turnaround. Quick delivery from Shanghai warehouse.',
  },
];

export default function Home() {
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
            <Link href="#products" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Products
            </Link>
            <Link href="/applications" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Applications
            </Link>
            <Link href="#brands" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Brands
            </Link>
            <Link href="#about" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
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
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full border border-blue-400 bg-blue-400/10 px-4 py-1.5 text-sm font-medium text-blue-300 mb-6">
              <Shield className="h-4 w-4 mr-2" />
              Authorized Distributor
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Your Trusted Source for
              <br />
              <span className="text-blue-400">Magnetic Sensor ICs</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Hall switches, current sensors, and magnetic ICs from leading Chinese semiconductor brands.
              100% genuine components with full traceability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                <Link href="#products">
                  Browse Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" className="border border-slate-400 text-white hover:bg-slate-700 bg-transparent" asChild>
                <a href="mailto:autumn@synjet-electronics.com?subject=Quote Request">
                  Request Quote
                </a>
              </Button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span className="text-slate-300">100% Original</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span className="text-slate-300">Factory-Direct</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span className="text-slate-300">Full Traceability</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span className="text-slate-300">FAE Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 mb-4">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-slate-900">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Featured Products</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              High-performance Hall switches and current sensors for automotive, industrial, and IoT applications
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow group">
                <div className="relative h-40 bg-slate-50 flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="font-semibold text-base mb-2 text-slate-900">{product.name}</h3>
                  <p className="text-sm text-slate-600 mb-3 line-clamp-2">{product.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, i) => (
                      <span key={i} className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-slate-100 text-slate-700">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 pt-3 border-t border-slate-100">
                    <Button variant="outline" size="sm" className="flex-1 text-slate-700 border-slate-300" asChild>
                      <a href={product.datasheet}>
                        <FileText className="h-3.5 w-3.5 mr-1" />
                        Datasheet
                      </a>
                    </Button>
                    <Button size="sm" className="flex-1 bg-slate-900 hover:bg-slate-800 text-white" asChild>
                      <a href={`mailto:autumn@synjet-electronics.com?subject=Quote: ${product.name}`}>
                        <MessageSquare className="h-3.5 w-3.5 mr-1" />
                        Quote
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" size="lg" className="border-slate-300 text-slate-700" asChild>
              <Link href="/products">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section id="applications" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Application Scenarios</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our magnetic sensors power innovation across transportation, manufacturing, and smart home industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/applications/intelligent-transportation" className="group">
              <Card className="h-full border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-blue-600 to-blue-800">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Car className="h-20 w-20 text-white/20" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">Intelligent Transportation</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-slate-600 text-sm mb-4">
                    AEC-Q100 certified sensors for automotive applications, from e-bikes to new energy vehicles.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">ABS/ESP</span>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">EPS</span>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">BMS</span>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">Motor Control</span>
                  </div>
                  <div className="flex items-center text-blue-600 font-medium">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/applications/smart-manufacturing" className="group">
              <Card className="h-full border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-green-600 to-green-800">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Factory className="h-20 w-20 text-white/20" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">Smart Manufacturing</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-slate-600 text-sm mb-4">
                    High-reliability sensors for industrial automation, robotics, and precision equipment.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">Robot Arms</span>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">CNC</span>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">Linear Motors</span>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">Encoders</span>
                  </div>
                  <div className="flex items-center text-blue-600 font-medium">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/applications/smart-home" className="group">
              <Card className="h-full border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-purple-600 to-purple-800">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <HomeIcon className="h-20 w-20 text-white/20" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">Smart Home</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-slate-600 text-sm mb-4">
                    Low-power magnetic sensors for home appliances, security systems, and IoT devices.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">Appliances</span>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">Security</span>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">Meters</span>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">Smart Locks</span>
                  </div>
                  <div className="flex items-center text-blue-600 font-medium">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Authorized Brands */}
      <section id="brands" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Authorized Brands</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Official authorized distributor for leading Chinese semiconductor manufacturers
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {[...Array(18)].map((_, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-4 flex items-center justify-center min-h-[80px] hover:bg-slate-50 transition-colors"
              >
                <img
                  src={`/brands/brand_${index + 1}.jpg`}
                  alt={`Brand ${index + 1}`}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 mb-6">
                <Award className="h-4 w-4 mr-2" />
                Authorized Distributor
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">
                Your Reliable Semiconductor Partner
              </h2>
            </div>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                SynJet Electronics specialize in high-quality Chinese-brand magnetic sensor ICs 
                (Hall switches and current sensors) from leading names like Novosense (covering 
                the original Magntek series). Engineered for automotive, industrial, and IoT 
                applications, our products deliver precision and reliability comparable to global 
                standards—giving you a competitive edge.
              </p>
              <p>
                Beyond sensors, we operate as a comprehensive one-stop service provider, leveraging 
                our strong network to source everything from passives and connectors to modules, 
                streamlining your entire supply chain.
              </p>
            </div>
            <div className="mt-10 flex justify-center">
              <Button className="bg-slate-900 hover:bg-slate-800 text-white" asChild>
                <a href="#contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Get in Touch</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Have questions about our products? Our team is ready to help.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-8">
            <Card className="border border-slate-200">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 mb-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2 text-slate-900">Email</h3>
                <a href="mailto:autumn@synjet-electronics.com" className="text-blue-600 hover:underline text-sm">
                  autumn@synjet-electronics.com
                </a>
              </CardContent>
            </Card>
            <Card className="border border-slate-200">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 mb-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2 text-slate-900">Location</h3>
                <p className="text-sm text-slate-600">Shenzhen, China</p>
              </CardContent>
            </Card>
          </div>
          <Card className="border border-slate-200">
            <CardContent className="p-8">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6" action="mailto:autumn@synjet-electronics.com" method="post" encType="text/plain">
                <div>
                  <label className="text-sm font-medium mb-2 block text-slate-700">Name *</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block text-slate-700">Email *</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm font-medium mb-2 block text-slate-700">Company</label>
                  <input
                    type="text"
                    name="company"
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Company name"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm font-medium mb-2 block text-slate-700">Message *</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your requirements..."
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white" type="submit">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2Fgenerate_image_74113d01-5272-48a3-9d33-712a62776867.webp&nonce=9489a992-416b-43b8-b432-e6a26d688d6a&project_id=7616738217844523059&sign=e664257a51264f4c7bd6335337e289af330a9fe5208fdd0e090fc067e2fa11b5"
                  alt="SynJet Logo"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
                <span className="text-lg font-bold">SynJet Electronics</span>
              </div>
              <p className="text-slate-400 text-sm max-w-md">
                Authorized distributor of genuine magnetic sensor ICs from leading Chinese semiconductor manufacturers.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/products" className="hover:text-white transition-colors">Hall Switches</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors">Current Sensors</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors">Magnetic ICs</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>autumn@synjet-electronics.com</li>
                <li>Shenzhen, China</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} SynJet Electronics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
