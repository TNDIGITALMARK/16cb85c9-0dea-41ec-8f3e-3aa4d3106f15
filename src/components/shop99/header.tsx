"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[hsl(var(--navy-dark))] shadow-header">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-white">
              Shop<span className="text-[hsl(var(--electric-blue))]">99</span>Detailing
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-[hsl(var(--electric-blue))] transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-white hover:text-[hsl(var(--electric-blue))] transition-colors">
              Services
            </Link>
            <Link href="/booking" className="text-white hover:text-[hsl(var(--electric-blue))] transition-colors">
              Testimonials
            </Link>
            <Link href="/booking" className="text-white hover:text-[hsl(var(--electric-blue))] transition-colors">
              About Us
            </Link>
            <Link href="/booking" className="text-white hover:text-[hsl(var(--electric-blue))] transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <Link
            href="/booking"
            className="hidden md:inline-flex items-center justify-center px-10 py-3.5 bg-[hsl(var(--electric-blue))] text-white font-medium rounded-lg shadow-button hover:bg-[hsl(var(--blue-hover))] hover:-translate-y-0.5 transition-all duration-300"
          >
            Book Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-white hover:text-[hsl(var(--electric-blue))] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-white hover:text-[hsl(var(--electric-blue))] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/booking"
                className="text-white hover:text-[hsl(var(--electric-blue))] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="/booking"
                className="text-white hover:text-[hsl(var(--electric-blue))] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/booking"
                className="text-white hover:text-[hsl(var(--electric-blue))] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/booking"
                className="inline-flex items-center justify-center px-10 py-3.5 bg-[hsl(var(--electric-blue))] text-white font-medium rounded-lg shadow-button mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Now
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
