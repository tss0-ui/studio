
import { MainLayout } from '@/components/layout/MainLayout';
import Image from 'next/image';
import { ImageSquare } from 'lucide-react'; // Using a generic icon for the page title

const galleryImages = [
  { id: 1, src: 'https://placehold.co/600x800.png', alt: 'Nikki posing elegantly', caption: 'Elegance Redefined', aiHint: 'elegant woman portrait' },
  { id: 2, src: 'https://placehold.co/600x800.png', alt: 'Nikki with a playful smile', caption: 'Playful Moments', aiHint: 'woman playful smile' },
  { id: 3, src: 'https://placehold.co/600x800.png', alt: 'Nikki in a luxurious setting', caption: 'Luxury Awaits', aiHint: 'luxurious boudoir' },
  { id: 4, src: 'https://placehold.co/600x800.png', alt: 'Nikki exuding confidence', caption: 'Confident Gaze', aiHint: 'confident woman fashion' },
  { id: 5, src: 'https://placehold.co/600x800.png', alt: 'Nikki in an artistic pose', caption: 'Artistic Flair', aiHint: 'artistic sensual photo' },
  { id: 6, src: 'https://placehold.co/600x800.png', alt: 'Nikki, sensual and captivating', caption: 'Captivating Charm', aiHint: 'sensual allure' },
  { id: 7, src: 'https://placehold.co/600x800.png', alt: 'Nikki ready for an evening out', caption: 'Evening Glow', aiHint: 'woman evening dress' },
  { id: 8, src: 'https://placehold.co/600x800.png', alt: 'Nikki in a mysterious shot', caption: 'Mysterious Nights', aiHint: 'mysterious silhouette night' },
];

export default function GalleryPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <ImageSquare className="mx-auto h-12 w-12 text-primary mb-4" />
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Nikki's Gallery
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A glimpse into the world of Nikki by Night.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div key={image.id} className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer aspect-[3/4]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                data-ai-hint={image.aiHint}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300 ease-in-out group-hover:bg-opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-white 
                              transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                <h3 className="text-lg font-semibold">{image.caption}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
