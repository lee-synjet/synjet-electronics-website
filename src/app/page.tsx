import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Zap, 
  Shield, 
  Cpu, 
  Globe, 
  Mail, 
  Phone, 
  MapPin,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'SynJet Electronics - Advanced Electromagnetic Sensors',
  description: 'SynJet Electronics is a leading manufacturer of high-precision electromagnetic sensors for industrial automation, automotive, and IoT applications.',
  keywords: 'electromagnetic sensors, proximity sensors, flow sensors, industrial sensors, SynJet',
};

const products = [
  {
    name: 'MT92XX High-Voltage Hall Switch Series',
    description: 'AEC-Q100 certified Hall switch ICs with wide voltage range (3.8V-60V) and high sampling frequency up to 200KHz for automotive applications.',
    image: 'https://aka.doubaocdn.com/s/28sP1w3qQb',
    features: ['Voltage: 3.8-60V', 'Sampling: 200KHz', 'Temperature: -40 to 150°C', 'AEC-Q100 Certified'],
  },
  {
    name: 'MT9522 Integrated Current Sensor IC',
    description: 'High-performance isolated current sensor with 4800Vrms isolation, 250KHz bandwidth, and built-in overcurrent protection for industrial applications.',
    image: 'https://aka.doubaocdn.com/s/zNV81w3qQS',
    features: ['Range: ±20A to ±80A', 'Isolation: 4800Vrms', 'Bandwidth: 250KHz', 'Built-in Fault Detection'],
  },
  {
    name: 'MT86XX Micro-Power Hall Switch Series',
    description: 'Ultra-low power Hall switch ICs with 1.7µA current consumption for battery-powered and IoT applications.',
    image: 'https://aka.doubaocdn.com/s/InMi1w3qQb',
    features: ['Ultra-low Power: 1.7µA', 'Voltage: 1.6-5.5V', 'Temperature: -40 to 125°C', 'Ideal for IoT Devices'],
  },
  {
    name: 'MT9532 High-Speed Current Sensor',
    description: 'Advanced current sensor IC with 1MHz bandwidth, ultra-fast response time <1µs for high-performance industrial systems.',
    image: 'https://aka.doubaocdn.com/s/tXc31w3qQS',
    features: ['Bandwidth: 1MHz', 'Response: <1µs', 'Isolation: 4800Vrms', 'Range: ±20A to ±80A'],
  },
];

const features = [
  {
    icon: Zap,
    title: 'High Precision',
    description: 'Industry-leading accuracy with advanced signal processing technology.',
  },
  {
    icon: Shield,
    title: 'Robust Design',
    description: 'Built to withstand harsh industrial environments with IP67+ ratings.',
  },
  {
    icon: Cpu,
    title: 'Smart Technology',
    description: 'Intelligent sensors with self-diagnostics and predictive maintenance.',
  },
  {
    icon: Globe,
    title: 'Global Support',
    description: 'Technical support and service network spanning 50+ countries.',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2Fgenerate_image_74113d01-5272-48a3-9d33-712a62776867.webp&nonce=9489a992-416b-43b8-b432-e6a26d688d6a&project_id=7616738217844523059&sign=e664257a51264f4c7bd6335337e289af330a9fe5208fdd0e090fc067e2fa11b5"
              alt="SynJet Logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="text-xl font-bold text-blue-600">SynJet</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/products" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Products
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>
          <Button asChild>
            <a href="mailto:autumn@synjet-electronics.com">Get Quote</a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,transparent,black)] dark:bg-grid-slate-900" />
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium">
              <span className="text-blue-600">Featured</span>
              <span className="ml-2">Hall Effect & Current Sensor Series</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-4xl">
              Advanced Electromagnetic Sensors for{' '}
              <span className="text-blue-600">Industrial Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              SynJet Electronics delivers high-precision electromagnetic sensors trusted by industries worldwide. 
              Engineered for reliability, built for performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg" asChild>
                <Link href="/products">Explore Products</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:autumn@synjet-electronics.com?subject=Product Inquiry">Request Sample</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose SynJet</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Leading the industry with innovation, quality, and exceptional customer support
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive range of electromagnetic sensors for diverse industrial applications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative h-48 bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                  <ul className="space-y-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/products">
                View All Products
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Trusted by Industries Worldwide
              </h2>
              <p className="text-muted-foreground mb-6">
                SynJet Electronics specialize in high-quality Chinese-brand magnetic sensor ICs 
                (Hall switches and current sensors) from leading names like Novosense (covering 
                the original Magntek series). Engineered for automotive, industrial, and IoT 
                applications, our products deliver precision and reliability comparable to global 
                standards—giving you a competitive edge.
              </p>
              <p className="text-muted-foreground mb-6">
                Beyond sensors, we operate as a comprehensive one-stop service provider, leveraging 
                our strong network to source everything from passives and connectors to modules, 
                streamlining your entire supply chain.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-muted-foreground">Countries Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">1000+</div>
                  <div className="text-sm text-muted-foreground">Product Models</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">99.8%</div>
                  <div className="text-sm text-muted-foreground">Quality Rate</div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <Zap className="h-16 w-16 mx-auto mb-4 opacity-90" />
                  <h3 className="text-2xl font-bold mb-2">Innovation Driven</h3>
                  <p className="text-blue-100">
                    Continuous research and development to meet evolving industry demands
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Partners Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Brand Partners</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We partner with leading Chinese semiconductor brands to deliver high-quality solutions
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-6">
            {[
              { name: 'Brand 1', file: 'brand_1.jpg' },
              { name: 'Brand 2', file: 'brand_2.jpg' },
              { name: 'Brand 3', file: 'brand_3.jpg' },
              { name: 'Brand 4', file: 'brand_4.jpg' },
              { name: 'Brand 5', file: 'brand_5.jpg' },
              { name: 'Brand 6', file: 'brand_6.jpg' },
              { name: 'Brand 7', file: 'brand_7.jpg' },
              { name: 'Brand 8', file: 'brand_8.jpg' },
              { name: 'Brand 9', file: 'brand_9.jpg' },
              { name: 'Brand 10', file: 'brand_10.jpg' },
              { name: 'Brand 11', file: 'brand_11.jpg' },
              { name: 'Brand 12', file: 'brand_12.jpg' },
              { name: 'Brand 13', file: 'brand_13.jpg' },
              { name: 'Brand 14', file: 'brand_14.jpg' },
              { name: 'Brand 15', file: 'brand_15.jpg' },
              { name: 'Brand 16', file: 'brand_16.jpg' },
              { name: 'Brand 17', file: 'brand_17.jpg' },
              { name: 'Brand 18', file: 'brand_18.jpg' },
            ].map((brand, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow bg-white dark:bg-slate-800">
                <CardContent className="p-4 md:p-6 flex flex-col items-center justify-center min-h-[100px] md:min-h-[140px]">
                  <div className="flex items-center justify-center w-full">
                    <img
                      src={`/brands/${brand.file}`}
                      alt={brand.name}
                      style={{ maxHeight: '60px' }}
                      className="w-auto h-auto max-w-full object-contain md:max-h-[80px]"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions about our products? Our sales team is ready to assist you.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <a href="mailto:autumn@synjet-electronics.com" className="text-sm text-blue-600 hover:underline">
                  autumn@synjet-electronics.com
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-sm text-muted-foreground">+86 (21) 2096-5129</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Headquarters</h3>
                <p className="text-sm text-muted-foreground">
                  Shanghai, China
                </p>
              </CardContent>
            </Card>
          </div>
          <Card className="mt-8">
            <CardContent className="p-8">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6" action="mailto:autumn@synjet-electronics.com" method="post" encType="text/plain">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-slate-800"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-slate-800"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-slate-800"
                    placeholder="How can we help?"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-slate-800"
                    placeholder="Tell us about your requirements..."
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <Button size="lg" type="submit">
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2Fgenerate_image_74113d01-5272-48a3-9d33-712a62776867.webp&nonce=9489a992-416b-43b8-b432-e6a26d688d6a&project_id=7616738217844523059&sign=e664257a51264f4c7bd6335337e289af330a9fe5208fdd0e090fc067e2fa11b5"
                  alt="SynJet Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
                <span className="text-xl font-bold text-blue-600">SynJet</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Leading manufacturer of electromagnetic sensors for industrial applications worldwide.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/products" className="hover:text-blue-600 transition-colors">Hall Switch Sensors</Link></li>
                <li><Link href="/products" className="hover:text-blue-600 transition-colors">Current Sensors</Link></li>
                <li><Link href="/products" className="hover:text-blue-600 transition-colors">Magnetoresistive Sensors</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
                <li><Link href="#contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="mailto:autumn@synjet-electronics.com" className="hover:text-blue-600 transition-colors">
                    autumn@synjet-electronics.com
                  </a>
                </li>
                <li>+86 (21) 2096-5129</li>
                <li>Shanghai, China</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} SynJet Electronics Co., Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
