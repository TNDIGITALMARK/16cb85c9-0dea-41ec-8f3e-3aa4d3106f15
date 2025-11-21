import { Header } from '@/components/shop99/header';
import { Hero } from '@/components/shop99/hero';
import { Services } from '@/components/shop99/services';
import { Gallery } from '@/components/shop99/gallery';
import { Testimonials } from '@/components/shop99/testimonials';
import { CTA } from '@/components/shop99/cta';
import { Footer } from '@/components/shop99/footer';

export const dynamic = 'force-dynamic'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}