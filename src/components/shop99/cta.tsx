import Link from 'next/link';

export function CTA() {
  return (
    <section className="py-20 bg-[hsl(var(--navy-dark))]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
          Ready for a Transformation?
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Book your appointment today and experience the Shop99Detailing difference
        </p>
        <Link
          href="/booking"
          className="inline-flex items-center justify-center px-12 py-4 bg-[hsl(var(--electric-blue))] text-white font-medium text-lg rounded-lg shadow-button hover:bg-[hsl(var(--blue-hover))] hover:-translate-y-1 transition-all duration-300"
        >
          Book Your Detail Now
        </Link>
      </div>
    </section>
  );
}
