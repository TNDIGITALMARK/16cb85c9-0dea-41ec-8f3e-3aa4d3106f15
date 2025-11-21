import Link from 'next/link';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[hsl(var(--navy-dark))] text-white py-16">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand & About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold">
                Shop<span className="text-[hsl(var(--electric-blue))]">99</span>Detailing
              </span>
            </div>
            <p className="text-white/70 leading-relaxed">
              Premium automotive detailing services delivering showroom quality results. Your vehicle deserves the best.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/70 hover:text-[hsl(var(--electric-blue))] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-[hsl(var(--electric-blue))] transition-colors">
                  Services & Pricing
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-white/70 hover:text-[hsl(var(--electric-blue))] transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-white/70 hover:text-[hsl(var(--electric-blue))] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[hsl(var(--electric-blue))] flex-shrink-0 mt-0.5" />
                <span className="text-white/70">123 Main Street, Downtown<br />City, State 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[hsl(var(--electric-blue))] flex-shrink-0" />
                <a href="tel:+15551234567" className="text-white/70 hover:text-[hsl(var(--electric-blue))] transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[hsl(var(--electric-blue))] flex-shrink-0" />
                <a href="mailto:info@shop99detailing.com" className="text-white/70 hover:text-[hsl(var(--electric-blue))] transition-colors">
                  info@shop99detailing.com
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[hsl(var(--electric-blue))] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[hsl(var(--electric-blue))] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[hsl(var(--electric-blue))] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Shop99Detailing. All rights reserved. | Operating Hours: Monday-Saturday, 8AM-6PM
          </p>
        </div>
      </div>
    </footer>
  );
}
