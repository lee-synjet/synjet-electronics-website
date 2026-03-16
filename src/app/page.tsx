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
  Award,
  ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'SynJet Electronics - Authorized Distributor of Magnetic Sensor ICs',
  description: 'Authorized distributor of magnetic sensor ICs from Novosns. 100% original components with full traceability.',
  keywords: 'magnetic sensor ICs, Hall switch, current sensor, authorized distributor, Novosns',
};

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
              Hall sensors, AMR/TMR sensors, angle encoders, and current sensors from Novosns.
              100% genuine components with full traceability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                <Link href="/applications">
                  View Applications
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

      {/* Applications Section */}
      <section id="applications" className="py-20 bg-white">
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
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/applications/images/transport-banner.jpg"
                    alt="Intelligent Transportation"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
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
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/applications/images/manufacturing-banner.jpg"
                    alt="Smart Manufacturing"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
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
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/applications/images/smarthome-banner.jpg"
                    alt="Smart Home"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
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
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-3 md:p-4 flex items-center justify-center aspect-square hover:bg-slate-50 transition-colors">
              <Image
                src="/brands/novosns-1.png"
                alt="Novosns"
                width={80}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="bg-white rounded-lg p-3 md:p-4 flex items-center justify-center aspect-square hover:bg-slate-50 transition-colors">
              <Image
                src="/brands/novosns-2.png"
                alt="Novosns"
                width={80}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <div key={i} className="bg-white rounded-lg p-3 md:p-4 flex items-center justify-center aspect-square hover:bg-slate-50 transition-colors">
                <Image
                  src={`/brands/brand_${i}.jpg`}
                  alt={`Brand ${i}`}
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-slate-400 text-sm">
              More brands available. Contact us for other semiconductor products.
            </p>
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
                (Hall sensors, AMR/TMR sensors, angle encoders, and current sensors) from leading names like Novosns. 
                Engineered for automotive, industrial, and IoT applications, our products deliver precision and 
                reliability comparable to global standards—giving you a competitive edge.
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
          <Card className="border border-slate-200 max-w-2xl mx-auto">
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
      <footer className="border-t border-slate-200 py-8 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo.webp"
                alt="SynJet Logo"
                width={28}
                height={28}
                className="h-7 w-7"
              />
              <span className="text-sm font-medium text-slate-700">SynJet Electronics</span>
            </div>
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} SynJet Electronics. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
