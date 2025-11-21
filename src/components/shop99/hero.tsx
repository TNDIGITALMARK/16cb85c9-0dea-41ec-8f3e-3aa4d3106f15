import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-[hsl(var(--navy-dark))] via-[hsl(214,28%,18%)] to-[hsl(214,28%,22%)] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[700px] py-20 lg:py-0">
          {/* Left: Text Content */}
          <div className="text-white z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Experience Unrivaled<br />
              Automotive Perfection
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed">
              Premium car detailing services that transform your vehicle into a showroom masterpiece. Expert care, guaranteed results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center px-10 py-4 bg-[hsl(var(--electric-blue))] text-white font-medium text-lg rounded-lg shadow-button hover:bg-[hsl(var(--blue-hover))] hover:-translate-y-1 transition-all duration-300"
              >
                Schedule an Appointment
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-10 py-4 bg-transparent border-2 border-white text-white font-medium text-lg rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                View Services
              </Link>
            </div>
          </div>

          {/* Right: BMW Image */}
          <div className="relative h-[400px] lg:h-[600px] w-full">
            <Image
              src="/generated/hero-bmw.png"
              alt="Premium BMW detailing showcase"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
