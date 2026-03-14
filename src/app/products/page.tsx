import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Products - SynJet Electronics',
  description: 'Explore our comprehensive range of electromagnetic sensors, current sensors, and position detection ICs.',
};

const productCategories = [
  {
    id: 'hall-switches',
    name: 'Hall Switch Position Sensors',
    description: 'High-precision Hall effect switches for position detection in automotive, industrial, and consumer applications.',
    products: [
      {
        name: 'MT83XX High-Voltage Series',
        description: 'AEC-Q100 certified Hall switches with wide voltage range (3.8V-60V) and 200KHz sampling frequency.',
        specs: [
          'Operating Voltage: 3.8V - 60V',
          'Sampling Frequency: 200KHz',
          'Operating Temperature: -40°C to 150°C',
          'Output Type: Open-Drain / Built-in Pull-up',
          'Package: SOT-23, TO-92',
        ],
        applications: ['Automotive Transmission', 'Automotive HVAC', 'Wiper Systems'],
      },
      {
        name: 'MT81XX Low-Voltage High-Speed Series',
        description: 'High-speed Hall switches with 400KHz sampling for fast response applications.',
        specs: [
          'Operating Voltage: 2.8V - 24V',
          'Sampling Frequency: 400KHz',
          'Operating Temperature: -40°C to 150°C',
          'Current Consumption: 3.5mA',
          'Package: SOT-23, TO-92, WLCSP',
        ],
        applications: ['E-bikes', 'Electric Vehicles', 'White Goods'],
      },
      {
        name: 'MT85XX Low-Power Series',
        description: 'Low-power Hall switches with balanced performance for battery-conscious applications.',
        specs: [
          'Operating Voltage: 3.0V - 24V',
          'Sampling Frequency: 25KHz',
          'Current Consumption: 1.0mA max',
          'Operating Temperature: -40°C to 125°C',
          'Package: SOT-23, TO-92',
        ],
        applications: ['Electric Curtains', 'BLDC Motors', 'Automotive Door Systems'],
      },
      {
        name: 'MT86XX Micro-Power Series',
        description: 'Ultra-low power Hall switches with 1.7µA current consumption for IoT and portable devices.',
        specs: [
          'Operating Voltage: 1.6V - 5.5V',
          'Sampling Frequency: 20Hz',
          'Current Consumption: 1.7µA',
          'Operating Temperature: -40°C to 125°C',
          'Package: SOT-23, TO-92, DFN',
        ],
        applications: ['Smart Meters', 'Smart Locks', 'TWS Earbuds', 'IoT Devices'],
      },
    ],
  },
  {
    id: 'current-sensors',
    name: 'Current Sensor ICs',
    description: 'Integrated current sensors with galvanic isolation for precise current measurement in power systems.',
    products: [
      {
        name: 'MT9221 / MT9223 Series',
        description: 'Isolated current sensor ICs with 2400Vrms isolation voltage and 150KHz bandwidth.',
        specs: [
          'Measuring Range: ±5A to ±50A',
          'Isolation Voltage: 2400Vrms',
          'Bandwidth: 150KHz',
          'Response Time: <4µs',
          'Accuracy: ±1.5%',
          'Package: SOP-8',
        ],
        applications: ['Inverters', 'Servo Controllers', 'Battery Management Systems'],
      },
      {
        name: 'MT9222 Series',
        description: 'High-isolation current sensor with 4800Vrms isolation and 10kV surge withstand.',
        specs: [
          'Measuring Range: ±20A to ±100A',
          'Isolation Voltage: 4800Vrms',
          'Bandwidth: 150KHz',
          'Surge Current: 13kA',
          'Working Voltage: 1097Vrms',
          'Package: SOP-16W',
        ],
        applications: ['Photovoltaic Inverters', 'On-Board Chargers', 'Industrial Power Systems'],
      },
      {
        name: 'MT9523 Series',
        description: 'High-speed current sensor with 250KHz bandwidth and 2.2µs response time.',
        specs: [
          'Measuring Range: ±5A to ±50A',
          'Isolation Voltage: 2500Vrms',
          'Bandwidth: 250KHz',
          'Response Time: ≤2.2µs',
          'Accuracy: ±1.5%',
          'Package: SOP-8',
        ],
        applications: ['Frequency Converters', 'EPS Systems', 'Portable Power Stations'],
      },
      {
        name: 'MT9522 Series',
        description: 'Advanced current sensor with overcurrent protection and fault detection.',
        specs: [
          'Measuring Range: ±20A to ±80A',
          'Isolation Voltage: 4800Vrms',
          'Bandwidth: 250KHz',
          'Response Time: ≤2.2µs',
          'Built-in Fault Detection',
          'Package: SOP-16W',
        ],
        applications: ['DC/DC Converters', 'EPS Systems', 'Photovoltaic Systems'],
      },
      {
        name: 'MT9532 Series',
        description: 'Ultra-high-speed current sensor with 1MHz bandwidth for demanding applications.',
        specs: [
          'Measuring Range: ±20A to ±80A',
          'Isolation Voltage: 4800Vrms',
          'Bandwidth: 1MHz',
          'Response Time: <1µs',
          'Accuracy: ±1.5%',
          'Package: SOP-16W',
        ],
        applications: ['DC Fast Charging Stations', 'High-Frequency Power Supplies'],
      },
    ],
  },
  {
    id: 'magnetoresistive',
    name: 'Magnetoresistive Sensors',
    description: 'High-sensitivity AMR-based sensors for precise angular and position detection.',
    products: [
      {
        name: 'MT6325 Series',
        description: 'One-dimensional AMR switch with high sensitivity and low power consumption.',
        specs: [
          'Operating Voltage: 1.8V - 5.5V',
          'Sampling Frequency: 900Hz',
          'Current Consumption: 4.1µA',
          'Operating Temperature: -40°C to 125°C',
          'Package: DFN1616',
        ],
        applications: ['Industrial Cylinders', 'Smart Meters', 'Anti-Tamper Detection'],
      },
      {
        name: 'MT613X Series',
        description: 'Two-dimensional AMR switches for 360° planar magnetic field detection.',
        specs: [
          'Operating Voltage: 1.65V - 5.0V',
          'Sampling Frequency: 20Hz - 1KHz',
          'Current Consumption: 2µA - 15µA',
          'Operating Temperature: -40°C to 125°C',
          'Package: SOT-23',
        ],
        applications: ['Liquid Level Detection', 'Anti-Tamper Systems'],
      },
    ],
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded bg-blue-600 flex items-center justify-center">
              <span className="text-white font-bold">S</span>
            </div>
            <span className="text-xl font-bold text-blue-600">SynJet</span>
          </Link>
          <nav className="flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-sm font-medium text-blue-600">
              Products
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Electromagnetic Sensor Solutions
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive range of high-performance sensors for automotive, industrial, and IoT applications
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="hall-switches" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto">
              {productCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="text-sm">
                  {category.name.split(' ')[0]}
                </TabsTrigger>
              ))}
            </TabsList>

            {productCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">{category.name}</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {category.products.map((product, idx) => (
                    <Card key={idx} className="overflow-hidden">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-3">{product.name}</h3>
                        <p className="text-muted-foreground mb-4">{product.description}</p>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2 text-sm text-blue-600">Key Specifications</h4>
                            <ul className="space-y-1">
                              {product.specs.map((spec, i) => (
                                <li key={i} className="flex items-start text-sm">
                                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                  <span className="text-muted-foreground">{spec}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2 text-sm text-blue-600">Applications</h4>
                            <div className="flex flex-wrap gap-2">
                              {product.applications.map((app, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-medium"
                                >
                                  {app}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Technical Support?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Our engineering team is ready to help you select the right sensor for your application.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/#contact">Contact Our Team</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SynJet Electronics Co., Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
