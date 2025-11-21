import { Shield, Sparkles, Car } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Paint Correction',
    description: 'Multi-step paint correction process that removes swirls and restores showroom shine.'
  },
  {
    icon: Sparkles,
    title: 'Ceramic Coating',
    description: 'Long-lasting protection with hydrophobic properties for ultimate paint defense.'
  },
  {
    icon: Car,
    title: 'Interior Detailing',
    description: 'Deep cleaning and conditioning of all interior surfaces for pristine results.'
  }
];

export function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-12">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-4">Our Services</h2>
          <p className="text-lg text-[hsl(var(--secondary))] max-w-2xl mx-auto">
            Professional detailing services designed to protect and enhance your vehicle's appearance
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-[hsl(var(--navy-dark))] text-white rounded-xl p-10 text-center shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-[hsl(var(--electric-blue))]/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-[hsl(var(--electric-blue))]" strokeWidth={2} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>

                {/* Description */}
                <p className="text-white/70 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
