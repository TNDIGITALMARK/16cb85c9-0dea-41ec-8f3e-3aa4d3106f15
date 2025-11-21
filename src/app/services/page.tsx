import { Header } from '@/components/shop99/header';
import { Footer } from '@/components/shop99/footer';
import { Check, Clock } from 'lucide-react';
import Link from 'next/link';

const packages = [
  {
    name: 'Express Wash',
    price: '$79',
    duration: '1-2 hours',
    description: 'Perfect for regular maintenance and quick refreshes',
    features: [
      'Exterior hand wash',
      'Wheel cleaning',
      'Tire shine',
      'Windows cleaned',
      'Quick interior vacuum',
      'Dashboard wipe down'
    ],
    popular: false
  },
  {
    name: 'Premium Detail',
    price: '$249',
    duration: '4-5 hours',
    description: 'Our most popular package for comprehensive care',
    features: [
      'Complete exterior hand wash',
      'Clay bar treatment',
      'Machine polish',
      'Wax protection',
      'Deep interior cleaning',
      'Leather conditioning',
      'Engine bay cleaning',
      'Headlight restoration'
    ],
    popular: true
  },
  {
    name: 'Ceramic Coating',
    price: '$499',
    duration: '6-8 hours',
    description: 'Ultimate protection with long-lasting ceramic coating',
    features: [
      'Full premium detail included',
      'Paint correction (2-step)',
      'Ceramic coating application',
      'Hydrophobic protection',
      '3-year coating warranty',
      'Maintenance kit included',
      'Free touch-up (first year)',
      'Priority booking'
    ],
    popular: false
  }
];

const additionalServices = [
  { name: 'Paint Correction (1-step)', price: '$150' },
  { name: 'Paint Correction (2-step)', price: '$250' },
  { name: 'Headlight Restoration', price: '$75' },
  { name: 'Engine Bay Detailing', price: '$100' },
  { name: 'Pet Hair Removal', price: '$50' },
  { name: 'Odor Elimination Treatment', price: '$75' },
  { name: 'Scratch Removal', price: '$100+' },
  { name: 'Window Tinting', price: '$200+' }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[hsl(var(--navy-dark))] to-[hsl(214,28%,20%)] py-20">
          <div className="max-w-[1280px] mx-auto px-6 sm:px-12 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Services & Pricing
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Transparent pricing for professional detailing services. Choose the package that best fits your vehicle's needs.
            </p>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-24 bg-[hsl(var(--background))]">
          <div className="max-w-[1280px] mx-auto px-6 sm:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`relative rounded-xl p-8 ${
                    pkg.popular
                      ? 'bg-[hsl(var(--navy-dark))] text-white shadow-card-hover scale-105'
                      : 'bg-white shadow-card'
                  } transition-all duration-300`}
                >
                  {/* Popular Badge */}
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-[hsl(var(--electric-blue))] text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Package Header */}
                  <div className="mb-6">
                    <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-[hsl(var(--foreground))]'}`}>
                      {pkg.name}
                    </h3>
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className={`text-4xl font-bold ${pkg.popular ? 'text-white' : 'text-[hsl(var(--electric-blue))]'}`}>
                        {pkg.price}
                      </span>
                    </div>
                    <div className={`flex items-center gap-2 text-sm ${pkg.popular ? 'text-white/70' : 'text-[hsl(var(--secondary))]'}`}>
                      <Clock className="w-4 h-4" />
                      <span>{pkg.duration}</span>
                    </div>
                    <p className={`mt-3 ${pkg.popular ? 'text-white/80' : 'text-[hsl(var(--secondary))]'}`}>
                      {pkg.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 flex-shrink-0 ${pkg.popular ? 'text-[hsl(var(--electric-blue))]' : 'text-[hsl(var(--electric-blue))]'}`} />
                        <span className={pkg.popular ? 'text-white/90' : 'text-[hsl(var(--foreground))]'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link
                    href="/booking"
                    className={`block w-full text-center py-3 rounded-lg font-medium transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-[hsl(var(--electric-blue))] text-white hover:bg-[hsl(var(--blue-hover))]'
                        : 'bg-[hsl(var(--electric-blue))] text-white hover:bg-[hsl(var(--blue-hover))]'
                    }`}
                  >
                    Book This Package
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 sm:px-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-semibold mb-4">Additional Services</h2>
              <p className="text-lg text-[hsl(var(--secondary))] max-w-2xl mx-auto">
                Enhance your detailing package with these specialized services
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-[hsl(var(--background))] border border-[hsl(var(--border))] rounded-lg p-6 hover:border-[hsl(var(--electric-blue))] hover:shadow-md transition-all duration-300"
                >
                  <h3 className="font-semibold text-lg mb-2">{service.name}</h3>
                  <p className="text-2xl font-bold text-[hsl(var(--electric-blue))]">{service.price}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center px-10 py-4 bg-[hsl(var(--electric-blue))] text-white font-medium text-lg rounded-lg shadow-button hover:bg-[hsl(var(--blue-hover))] hover:-translate-y-1 transition-all duration-300"
              >
                Book Your Appointment
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
