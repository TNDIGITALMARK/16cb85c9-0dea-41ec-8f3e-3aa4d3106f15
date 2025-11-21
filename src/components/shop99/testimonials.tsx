import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Michael Rodriguez',
    role: 'BMW Owner',
    quote: 'Amazing transformation on my BMW. The attention to detail is incredible and the results speak for themselves!',
    rating: 5,
    avatar: 'MR'
  },
  {
    name: 'Sarah Chen',
    role: 'Porsche Owner',
    quote: 'Five-star service worth every penny. My car looks better than the day I bought it. Highly recommended!',
    rating: 5,
    avatar: 'SC'
  },
  {
    name: 'James Wilson',
    role: 'Mercedes Owner',
    quote: 'Professional, thorough, and exceptional quality. Shop99Detailing has earned a customer for life.',
    rating: 5,
    avatar: 'JW'
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-12">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-4">Customer Testimonials</h2>
          <p className="text-lg text-[hsl(var(--secondary))] max-w-2xl mx-auto">
            Hear what our satisfied customers have to say about their experience
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-[hsl(var(--electric-blue))] flex items-center justify-center text-white text-2xl font-bold mb-4 border-4 border-[hsl(var(--electric-blue))]/20">
                {testimonial.avatar}
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[hsl(var(--electric-blue))] text-[hsl(var(--electric-blue))]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[hsl(var(--foreground))] leading-relaxed mb-4 italic">
                "{testimonial.quote}"
              </p>

              {/* Name & Role */}
              <div>
                <p className="font-semibold text-lg">{testimonial.name}</p>
                <p className="text-[hsl(var(--secondary))] text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
