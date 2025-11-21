"use client";

import { Header } from '@/components/shop99/header';
import { Footer } from '@/components/shop99/footer';
import { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, Car } from 'lucide-react';

const serviceOptions = [
  { value: 'express', label: 'Express Wash - $79', duration: '1-2 hours' },
  { value: 'premium', label: 'Premium Detail - $249', duration: '4-5 hours' },
  { value: 'ceramic', label: 'Ceramic Coating - $499', duration: '6-8 hours' }
];

const timeSlots = [
  '8:00 AM',
  '10:00 AM',
  '12:00 PM',
  '2:00 PM',
  '4:00 PM'
];

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    service: '',
    date: '',
    time: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate booking submission
    console.log('Booking submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        vehicle: '',
        service: '',
        date: '',
        time: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[hsl(var(--navy-dark))] to-[hsl(214,28%,20%)] py-20">
          <div className="max-w-[1280px] mx-auto px-6 sm:px-12 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Book Your Appointment
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Select your preferred service and schedule a convenient time. We'll have your vehicle looking showroom-ready.
            </p>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="py-24 bg-[hsl(var(--background))]">
          <div className="max-w-[800px] mx-auto px-6 sm:px-12">
            {submitted ? (
              <div className="bg-green-50 border-2 border-green-500 rounded-xl p-12 text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-green-800 mb-4">Booking Confirmed!</h2>
                <p className="text-lg text-green-700">
                  Thank you for booking with Shop99Detailing. We'll send you a confirmation email shortly with all the details.
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-card p-8 sm:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold mb-4">Your Information</h3>

                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium mb-2">
                        <User className="w-4 h-4 text-[hsl(var(--electric-blue))]" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-[hsl(var(--border))] rounded-lg focus:ring-2 focus:ring-[hsl(var(--electric-blue))] focus:border-transparent transition"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium mb-2">
                        <Mail className="w-4 h-4 text-[hsl(var(--electric-blue))]" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-[hsl(var(--border))] rounded-lg focus:ring-2 focus:ring-[hsl(var(--electric-blue))] focus:border-transparent transition"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium mb-2">
                        <Phone className="w-4 h-4 text-[hsl(var(--electric-blue))]" />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-[hsl(var(--border))] rounded-lg focus:ring-2 focus:ring-[hsl(var(--electric-blue))] focus:border-transparent transition"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium mb-2">
                        <Car className="w-4 h-4 text-[hsl(var(--electric-blue))]" />
                        Vehicle Make & Model *
                      </label>
                      <input
                        type="text"
                        name="vehicle"
                        value={formData.vehicle}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-[hsl(var(--border))] rounded-lg focus:ring-2 focus:ring-[hsl(var(--electric-blue))] focus:border-transparent transition"
                        placeholder="2023 BMW M8"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-6 pt-6 border-t border-[hsl(var(--border))]">
                    <h3 className="text-2xl font-semibold mb-4">Select Service</h3>

                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium mb-2">
                        Service Package *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-[hsl(var(--border))] rounded-lg focus:ring-2 focus:ring-[hsl(var(--electric-blue))] focus:border-transparent transition"
                      >
                        <option value="">Choose a service package</option>
                        {serviceOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label} ({option.duration})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Date & Time Selection */}
                  <div className="space-y-6 pt-6 border-t border-[hsl(var(--border))]">
                    <h3 className="text-2xl font-semibold mb-4">Choose Date & Time</h3>

                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium mb-2">
                        <Calendar className="w-4 h-4 text-[hsl(var(--electric-blue))]" />
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border border-[hsl(var(--border))] rounded-lg focus:ring-2 focus:ring-[hsl(var(--electric-blue))] focus:border-transparent transition"
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium mb-2">
                        <Clock className="w-4 h-4 text-[hsl(var(--electric-blue))]" />
                        Preferred Time *
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-[hsl(var(--border))] rounded-lg focus:ring-2 focus:ring-[hsl(var(--electric-blue))] focus:border-transparent transition"
                      >
                        <option value="">Select a time slot</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      className="w-full py-4 bg-[hsl(var(--electric-blue))] text-white font-medium text-lg rounded-lg shadow-button hover:bg-[hsl(var(--blue-hover))] hover:-translate-y-1 transition-all duration-300"
                    >
                      Confirm Booking
                    </button>
                  </div>

                  <p className="text-sm text-[hsl(var(--secondary))] text-center">
                    We'll contact you to confirm your appointment within 24 hours
                  </p>
                </form>
              </div>
            )}
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 sm:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-xl font-semibold mb-3">Operating Hours</h3>
                <p className="text-[hsl(var(--secondary))]">
                  Monday - Saturday<br />
                  8:00 AM - 6:00 PM
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Location</h3>
                <p className="text-[hsl(var(--secondary))]">
                  123 Main Street<br />
                  Downtown, City 12345
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Contact</h3>
                <p className="text-[hsl(var(--secondary))]">
                  (555) 123-4567<br />
                  info@shop99detailing.com
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
