
'use client';

import { MainLayout } from '@/components/layout/MainLayout';

export default function GalleryPage() {
  const column1 = [
    "https://cdn-thumbs.imagevenue.com/09/57/a7/ME1ASDMM_t.jpg",
    "https://cdn-thumbs.imagevenue.com/65/9b/44/ME1ASDMQ_t.jpg",
    "https://cdn-thumbs.imagevenue.com/72/41/e1/ME1ASDMS_t.jpg",
    "https://cdn-thumbs.imagevenue.com/4d/5b/15/ME1ASDMU_t.jpg",
  ];

  const column2 = [
    "https://cdn-thumbs.imagevenue.com/e4/e3/a9/ME1ASDMV_t.jpg",
    "https://cdn-thumbs.imagevenue.com/a7/75/c3/ME1ASDMY_t.jpg",
    "https://cdn-thumbs.imagevenue.com/74/7e/a3/ME1ASDMZ_t.jpg",
  ];

  const column3 = [
    "https://cdn-thumbs.imagevenue.com/ea/52/7b/ME1ASDN2_t.jpg",
    "https://cdn-thumbs.imagevenue.com/38/31/47/ME1ASDN4_t.jpg",
    "https://cdn-thumbs.imagevenue.com/24/ea/14/ME1ASDN9_t.jpg",
    "https://cdn-thumbs.imagevenue.com/34/c8/79/ME1ASDND_t.png",
  ];

  // Added alt text for better accessibility
  const allImages = [
    ...column1.map((src, i) => ({ src, alt: `Nikki gallery image column 1 item ${i + 1}` })),
    ...column2.map((src, i) => ({ src, alt: `Nikki gallery image column 2 item ${i + 1}` })),
    ...column3.map((src, i) => ({ src, alt: `Nikki gallery image column 3 item ${i + 1}` })),
  ];

  // It's better to structure data for columns if you intend to render them as such.
  // For simplicity with the existing structure, I'll keep separate column arrays for mapping.

  const imgClass = `
    w-full max-w-[220px] md:max-w-[250px] mx-auto rounded-lg shadow-lg cursor-pointer
    filter grayscale brightness-50 blur-sm 
    transition-all duration-300 ease-in-out
    hover:blur-0 hover:grayscale-0 hover:brightness-100 hover:scale-105 hover:shadow-primary/30
  `;

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Gallery
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A Sneak Peek of Nikki&apos;s Beauty
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {[column1, column2, column3].map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col items-center space-y-6">
              {column.map((src, idx) => (
                <img 
                  key={idx} 
                  src={src} 
                  alt={`Nikki gallery image ${colIndex}-${idx}`} 
                  className={imgClass} 
                  loading="lazy" // Added lazy loading for images
                />
              ))}
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <p className="text-center text-sm text-muted-foreground mt-12">
          For pricing details, please visit my <a href="/rates" className="underline text-primary hover:text-primary/80">Rates</a> page.
        </p>
      </div>
    </MainLayout>
  );
}
