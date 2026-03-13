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
  icons: {
    icon: 'https://coze-coding-project.tos.coze.site/coze_storage_7616740022158622770/image/generate_image_6a61ae2f-1062-4e16-a957-4f61f1abcbd8.jpeg?sign=1804948393-ba1e281d34-0-da1ab1c2c78b0523bc74a40fa78bf7f12f615613c04358b57e98ada495888459',
    apple: 'https://coze-coding-project.tos.coze.site/coze_storage_7616740022158622770/image/generate_image_f079123b-ae9e-4e9e-8c29-d1aeb092480f.jpeg?sign=1804947701-e16e4ff24d-0-f70fe0d3bbf1e4d5fccf6cbb662feef5bc5096241236a9b7fd2bd71496960226',
  },
};

const products = [
  {
    name: 'SJ-ES100 Proximity Sensor',
    description: 'High-precision inductive proximity sensor with extended detection range and robust metal housing.',
    image: 'https://coze-coding-project.tos.coze.site/coze_storage_7616740022158622770/image/generate_image_a3afe82d-324d-493b-8b7a-1cbc37f2a6de.jpeg?sign=1804947373-c00dd1d008-0-623c11f9e75e284cc164d85bc4bca1d7c5d08cde02f0a47daad7bcc3632712fd',
    features: ['Detection Range: 2-15mm', 'IP67 Rated', 'LED Status Indicator'],
  },
  {
    name: 'SJ-ES200 Flow Sensor',
    description: 'Electromagnetic flow sensor with digital display, ideal for conductive liquid measurement.',
    image: 'https://coze-coding-project.tos.coze.site/coze_storage_7616740022158622770/image/generate_image_0c97d4b7-2c81-4151-a133-25efe24d5e18.jpeg?sign=1804947373-2f5e2b43ea-0-741ad2b481ed618b9cfe5163fb0e5a9893f2ba76fe21abbf931414056d6a59c2',
    features: ['Accuracy: ±0.5%', 'Multiple Output Options', 'Easy Installation'],
  },
  {
    name: 'SJ-ES300 Inductive Sensor',
    description: 'Compact inductive sensor with stainless steel housing for harsh environments.',
    image: 'https://coze-coding-project.tos.coze.site/coze_storage_7616740022158622770/image/generate_image_7d3227ac-5b66-4283-b561-f79f150887f5.jpeg?sign=1804947373-d4ad553e8f-0-cb8629513dc632eecc92ec908c34d4e23d283c02b2264254b580e063cd75460a',
    features: ['Compact Design', 'Temperature: -25°C to +70°C', 'High Reliability'],
  },
  {
    name: 'SJ-ES400 Smart Sensor Module',
    description: 'Intelligent electromagnetic sensor module with IoT connectivity and real-time monitoring.',
    image: 'https://coze-coding-project.tos.coze.site/coze_storage_7616740022158622770/image/generate_image_b768dd55-79b4-4e34-b1e3-539d1ca5ca31.jpeg?sign=1804947374-e7677c1df1-0-748ff39e42e17b81101bf9442469b9e3d8380a610a73a1ebc8fe4a847a6e8fcb',
    features: ['IoT Ready', 'Real-time Monitoring', 'Cloud Integration'],
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
            <div className="flex items-center space-x-3">
              <Image
                src="https://coze-coding-project.tos.coze.site/coze_storage_7616740022158622770/image/generate_image_6a61ae2f-1062-4e16-a957-4f61f1abcbd8.jpeg?sign=1804948393-ba1e281d34-0-da1ab1c2c78b0523bc74a40fa78bf7f12f615613c04358b57e98ada495888459"
                alt="SynJet Logo"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="text-xl font-bold text-blue-600">SynJet</span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#products" className="text-sm font-medium hover:text-blue-600 transition-colors">
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
            <Link href="#contact">Get Quote</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,transparent,black)] dark:bg-grid-slate-900" />
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium">
              <span className="text-blue-600">New Release</span>
              <span className="ml-2">SJ-ES400 Smart Sensor Series</span>
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
                <Link href="#products">Explore Products</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#contact">Request Sample</Link>
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
                <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
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
            <Button variant="outline" size="lg">
              View All Products
              <ChevronRight className="ml-2 h-4 w-4" />
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
                Founded in 2008, SynJet Electronics has established itself as a leading manufacturer 
                of electromagnetic sensors. Our products are used in automotive manufacturing, 
                industrial automation, energy management, and IoT applications across the globe.
              </p>
              <p className="text-muted-foreground mb-6">
                With state-of-the-art R&D facilities and strict quality control processes, 
                we deliver sensors that meet the highest international standards including 
                ISO 9001, IATF 16949, and CE certifications.
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

      {/* Brand Identity Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Brand Identity</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              SynJet brand represents innovation, precision, and reliability in electromagnetic sensor technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="overflow-hidden">
              <CardContent className="p-6 text-center">
                <div className="mb-4 h-32 flex items-center justify-center">
                  <Image
                    src="https://coze-coding-project.tos.coze.site/coze_storage_7616740022158622770/image/generate_image_6a61ae2f-1062-4e16-a957-4f61f1abcbd8.jpeg?sign=1804948393-ba1e281d34-0-da1ab1c2c78b0523bc74a40fa78bf7f12f615613c04358b57e98ada495888459"
                    alt="SynJet Primary Logo"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2">Primary Logo</h3>
                <p className="text-sm text-muted-foreground">Blue S with electromagnetic coil design</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <CardContent className="p-6 text-center">
                <div className="mb-4 h-32 flex items-center justify-center">
                  <Image
                    src="https://coze-coding-project.tos.coze.site/coze_storage_7616740022158622770/image/generate_image_74113d01-5272-48a3-9d33-712a62776867.jpeg?sign=1804947677-1508162838-0-c66cf2117458e8cbbe924304d184ad12c25b08c82064ea1be13293ccc802258c"
                    alt="SynJet Logo Style 2"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2">Tech Innovation</h3>
                <p className="text-sm text-muted-foreground">Circuit pattern integrated with letter S and J</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <CardContent className="p-6 text-center">
                <div className="mb-4 h-32 flex items-center justify-center">
                  <Image
                    src="https://coze-coding-project.tos.coze.site/coze_storage_7616740022158622770/image/generate_image_e877ada7-0a93-4ad7-bba7-c58f60a7e748.jpeg?sign=1804947678-ae7635a2aa-0-5593eef26905bfd84b49470d3c7805c442b82b46a4252f7565f4826807ef0144"
                    alt="SynJet Logo Style 3"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2">Premium Brand</h3>
                <p className="text-sm text-muted-foreground">Metallic blue finish with high-tech aesthetic</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <CardContent className="p-6 text-center">
                <div className="mb-4 h-32 flex items-center justify-center">
                  <Image
                    src="https://coze-coding-project.tos.coze.site/coze_storage_7616740022158622770/image/generate_image_f079123b-ae9e-4e9e-8c29-d1aeb092480f.jpeg?sign=1804947701-e16e4ff24d-0-f70fe0d3bbf1e4d5fccf6cbb662feef5bc5096241236a9b7fd2bd71496960226"
                    alt="SynJet App Icon"
                    width={120}
                    height={120}
                    className="object-contain rounded-2xl"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2">App Icon</h3>
                <p className="text-sm text-muted-foreground">Modern iOS style icon with gradient background</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions about our products? Our technical team is ready to assist you.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-muted-foreground">sales@synjet-electronics.com</p>
                <p className="text-sm text-muted-foreground">support@synjet-electronics.com</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                <p className="text-sm text-muted-foreground">+86 (21) 8765-4321</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Headquarters</h3>
                <p className="text-sm text-muted-foreground">
                  123 Industrial Park, Tech Valley<br />
                  Shanghai, China 200000
                </p>
              </CardContent>
            </Card>
          </div>
          <Card className="mt-8">
            <CardContent className="p-8">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-slate-800"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-slate-800"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-slate-800"
                    placeholder="How can we help?"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-slate-800"
                    placeholder="Tell us about your requirements..."
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
                  src="https://coze-coding-project.tos.coze.site/coze_storage_7616740022158622770/image/generate_image_6a61ae2f-1062-4e16-a957-4f61f1abcbd8.jpeg?sign=1804948393-ba1e281d34-0-da1ab1c2c78b0523bc74a40fa78bf7f12f615613c04358b57e98ada495888459"
                  alt="SynJet Logo"
                  width={32}
                  height={32}
                  className="h-8 w-8"
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
                <li><Link href="#" className="hover:text-blue-600">Proximity Sensors</Link></li>
                <li><Link href="#" className="hover:text-blue-600">Flow Sensors</Link></li>
                <li><Link href="#" className="hover:text-blue-600">Inductive Sensors</Link></li>
                <li><Link href="#" className="hover:text-blue-600">Smart Modules</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-blue-600">About Us</Link></li>
                <li><Link href="#" className="hover:text-blue-600">Careers</Link></li>
                <li><Link href="#" className="hover:text-blue-600">News</Link></li>
                <li><Link href="#" className="hover:text-blue-600">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-blue-600">Documentation</Link></li>
                <li><Link href="#" className="hover:text-blue-600">Technical Support</Link></li>
                <li><Link href="#" className="hover:text-blue-600">Warranty</Link></li>
                <li><Link href="#" className="hover:text-blue-600">FAQs</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} SynJet Electronics Co., Ltd. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-2 md:mt-0">
              www.synjet-electronics.com
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
