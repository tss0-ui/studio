
import { MainLayout } from '@/components/layout/MainLayout';
import { ServiceCard } from '@/components/features/services/ServiceCard';
import { services } from '@/constants/services';

export default function ServicesPage() {
  return (
    <MainLayout>
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            My Exquisite Services
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Discover a range of experiences I've meticulously crafted for your pleasure and privacy.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
