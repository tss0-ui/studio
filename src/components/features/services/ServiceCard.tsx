
import Image from 'next/image';
import Link from 'next/link';
import type { Service } from '@/constants/services';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowRight } from 'lucide-react';

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow_transform duration-300 hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
          <Image
            src={service.image}
            alt={service.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            data-ai-hint={service.aiHint}
          />
        </div>
        <div className="p-6">
          <CardTitle className="text-2xl font-semibold">{service.name}</CardTitle>
          <CardDescription className="mt-2 text-muted-foreground h-20 overflow-hidden text-ellipsis">
            {service.description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6 pt-0">
        <div className="mb-4">
          <p className="text-2xl font-bold text-primary">{service.price}</p>
          <p className="text-sm text-muted-foreground">{service.duration}</p>
        </div>
        {service.features && service.features.length > 0 && (
          <ul className="space-y-2 mb-4">
            {service.features.slice(0,3).map((feature, index) => ( // Show max 3 features
              <li key={index} className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 mr-2 text-primary shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
      <CardFooter className="p-6 pt-0 border-t mt-auto">
        <Button asChild className="w-full shadow-md">
          <Link href={`/booking?service=${service.id}`}>
            Book This Service <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
