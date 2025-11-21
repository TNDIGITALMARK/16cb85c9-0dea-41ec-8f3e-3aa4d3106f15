import Image from 'next/image';

const galleryImages = [
  {
    before: '/generated/before-exterior.png',
    after: '/generated/after-exterior.png',
    alt: 'Exterior transformation'
  },
  {
    before: '/generated/before-wheel.png',
    after: '/generated/after-wheel.png',
    alt: 'Wheel detailing transformation'
  },
  {
    before: '/generated/before-exterior.png',
    after: '/generated/after-exterior.png',
    alt: 'Paint correction results'
  },
  {
    before: '/generated/before-wheel.png',
    after: '/generated/after-wheel.png',
    alt: 'Complete detailing package'
  }
];

export function Gallery() {
  return (
    <section className="py-24 bg-[hsl(var(--background))]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-12">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-4">Transformation Gallery</h2>
          <p className="text-lg text-[hsl(var(--secondary))] max-w-2xl mx-auto">
            See the dramatic results of our professional detailing services
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300"
            >
              {/* After Image (default) */}
              <Image
                src={image.after}
                alt={`${image.alt} - after`}
                fill
                className="object-cover group-hover:opacity-0 transition-opacity duration-500"
              />

              {/* Before Image (on hover) */}
              <Image
                src={image.before}
                alt={`${image.alt} - before`}
                fill
                className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* Overlay Label */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-semibold text-lg">Before</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
