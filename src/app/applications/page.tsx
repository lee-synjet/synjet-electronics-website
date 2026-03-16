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
  CheckCircle2
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Applications - SynJet Electronics',
  description: 'Magnetic sensor applications in intelligent transportation, smart manufacturing, and smart home industries.',
};

const applications = [
  {
    title: 'Intelligent Transportation',
    icon: Car,
    description: 'AEC-Q100 certified magnetic sensor ICs for automotive applications, from e-bikes to new energy vehicles.',
    href: '/applications/intelligent-transportation',
    image: '/applications/images/transport-banner.jpg',
    highlights: ['ABS/ESP Systems', 'Electric Power Steering', 'Battery Management', 'Motor Control'],
  },
  {
    title: 'Smart Manufacturing',
    icon: Factory,
    description: 'High-reliability sensors for industrial automation, robotics, and precision equipment.',
    href: '/applications/smart-manufacturing',
    image: '/applications/images/manufacturing-banner.jpg',
    highlights: ['Robot Arms', 'CNC Machines', 'Linear Motors', 'Encoder Systems'],
  },
  {
    title: 'Smart Home',
    icon: Home,
    description: 'Low-power magnetic sensors for home appliances, security systems, and IoT devices.',
    href: '/applications/smart-home',
    image: '/applications/images/smarthome-banner.jpg',
    highlights: ['Smart Appliances', 'Security Systems', 'Water/Gas Meters', 'Smart Locks'],
  },
];

export default function ApplicationsPage() {
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
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Application Scenarios</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Discover how our magnetic sensor ICs power innovation across transportation, manufacturing, and smart home industries.
          </p>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={app.image}
                    alt={app.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                        <app.icon className="h-5 w-5 text-white" />
                      </div>
                      <h2 className="text-xl font-bold text-white">{app.title}</h2>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-slate-600 mb-4">{app.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {app.highlights.map((highlight, i) => (
                      <span key={i} className="inline-flex items-center gap-1 text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">
                        <CheckCircle2 className="h-3 w-3 text-green-600" />
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white" asChild>
                    <Link href={app.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Need Custom Solutions?</h2>
          <p className="text-slate-600 mb-6 max-w-xl mx-auto">
            Our technical team can help you find the right magnetic sensor solution for your specific application requirements.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
            <a href="mailto:autumn@synjet-electronics.com?subject=Application Support Request">
              Contact Technical Support
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
