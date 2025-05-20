
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MainLayout } from '@/components/layout/MainLayout';
import Link from 'next/link';
import { ArrowRight, CalendarCheck, DollarSign, Gift, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Gift className="h-8 w-8 text-primary" />,
    title: 'Exclusive Packages',
    description: 'Tailored experiences designed for ultimate luxury and discretion.',
    link: '/services',
  },
  {
    icon: <CalendarCheck className="h-8 w-8 text-primary" />,
    title: 'Seamless Booking',
    description: 'Easy and private appointment scheduling integrated with Google Calendar.',
    link: '/booking',
  },
  {
    icon: <DollarSign className="h-8 w-8 text-primary" />,
    title: 'Flexible Payments',
    description: 'Secure transactions via Stripe and select cryptocurrencies for your convenience.',
    link: '/payments',
  },
];

export default function HomePage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-background to-muted">
        <div className="absolute inset-0 opacity-10">
           {/* Optional subtle background pattern or image */}
        </div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Experience <span className="text-primary">Nikki By Night</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground sm:text-xl">
            Indulge in unparalleled sophistication and bespoke services. Your exclusive escape awaits.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
              <Link href="/booking">Book an Appointment <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="shadow-lg hover:shadow-xl transition-shadow">
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Why Choose Nikki By Night?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We offer a unique blend of luxury, privacy, and personalized attention.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center shadow-lg hover:shadow-xl transition-shadow_transform hover:-translate-y-1">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                   <Button variant="link" asChild className="mt-4 text-primary">
                     <Link href={feature.link}>Learn More <ArrowRight className="ml-1 h-4 w-4" /></Link>
                   </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About/Image Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Meet Nikki</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                With years of experience in providing top-tier personal services, Nikki ensures every client interaction is memorable, discreet, and tailored to individual desires.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Nikki By Night is more than a service; it's an experience curated with passion and professionalism.
              </p>
              <Button asChild className="mt-8 shadow-md" size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://placehold.co/600x700.png"
                alt="Nikki"
                width={600}
                height={700}
                className="object-cover aspect-[6/7]"
                data-ai-hint="elegant woman portrait"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="mx-auto h-12 w-12 mb-4" />
          <h2 className="text-3xl font-bold">Ready for an Unforgettable Experience?</h2>
          <p className="mt-4 text-lg opacity-90">
            Secure your private consultation or booking with Nikki By Night. Discretion and satisfaction guaranteed.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8 shadow-xl hover:bg-accent hover:text-accent-foreground transition-colors">
            <Link href="/booking">Book Your Appointment Now</Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
}
