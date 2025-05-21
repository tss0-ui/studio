
import { MainLayout } from '@/components/layout/MainLayout';
import Image from 'next/image';
import { Images } from 'lucide-react'; // Icon for gallery page

const galleryImages = [
  { src: 'https://placehold.co/600x800.png', alt: 'Image of Nikki 1', caption: 'Elegance and Poise', aiHint: 'elegant pose' },
  { src: 'https://placehold.co/600x800.png', alt: 'Image of Nikki 2', caption: 'Sensual Allure', aiHint: 'sensual look' },
  { src: 'https://placehold.co/600x800.png', alt: 'Image of Nikki 3', caption: 'Glamorous Style', aiHint: 'glamorous fashion' },
  { src: 'https://placehold.co/600x800.png', alt: 'Image of Nikki 4', caption: 'Confident Gaze', aiHint: 'confident gaze' },
  { src: 'https://placehold.co/600x800.png', alt: 'Image of Nikki 5', caption: 'Luxury Embodied', aiHint: 'luxury lifestyle' },
  { src: 'https://placehold.co/600x800.png', alt: 'Image of Nikki 6', caption: 'Sophisticated Charm', aiHint: 'sophisticated style' },
  { src: 'https://placehold.co/600x800.png', alt: 'Image of Nikki 7', caption: 'Artistic Portrait', aiHint: 'artistic portrait' },
  { src: 'https://placehold.co/600x800.png', alt: 'Image of Nikki 8', caption: 'Captivating Beauty', aiHint: 'captivating beauty' },
];

export default function GalleryPage() {
  return (
    <MainLayout>
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Images className="mx-auto h-12 w-12 text-primary mb-4" />
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Nikki's Gallery
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A glimpse into my world.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-2.5 max-w-[1600px] mx-auto">
          {galleryImages.map((image, index) => (
            <figure
              key={index}
              className="relative overflow-hidden group rounded-lg shadow-lg aspect-[3/4]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                data-ai-hint={image.aiHint}
                priority={index < 4} // Prioritize loading for the first few images
              />
              <figcaption
                className="absolute bottom-0 left-0 w-full bg-black/70 text-white p-3 md:p-4 
                           opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 
                           transition-all duration-300 ease-in-out text-sm md:text-base"
              >
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
