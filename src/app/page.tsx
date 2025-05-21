
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MainLayout } from '@/components/layout/MainLayout';
import Link from 'next/link';
import { 
  ArrowRight, 
  Gem, 
  KeyRound, // For Discretion (🤫)
  WandSparkles, // For Tailored (✨)
  CalendarCog, // For Smart Sync (📅)
  Gift, // For Personal Touches (💌)
  Palette, // For Bespoke Companionship (💃)
  Landmark, // For Private Events (🛥️)
  MoonStar, // For Intimate Evenings (🖤)
  Sparkles, // For "Let's Make Magic"
  Heart, // For Values, if needed, or general use
  ShieldCheck // Alternative for Discretion
} from 'lucide-react';

const whyChooseNikkiFeatures = [
  {
    icon: <Gem className="h-10 w-10 text-primary" />,
    title: 'Exclusivity Meets Authenticity',
    description: 'You’re not booking from a list — you’re connecting with a real woman. I\'m selective with whom I spend time, which means when we meet, you\'re getting my full attention. Our chemistry? Unrushed. Our vibe? Real.',
  },
  {
    icon: <KeyRound className="h-10 w-10 text-primary" />, // Changed from ShieldCheck to KeyRound for '🤫'
    title: 'Discretion First, Always',
    description: 'Whether you\'re high-profile or simply value your privacy, I ensure that every step of our interaction — from communication to rendezvous — remains strictly confidential. My discretion is absolute.',
  },
  {
    icon: <WandSparkles className="h-10 w-10 text-primary" />,
    title: 'Tailored, Not Templated',
    description: 'Every client is unique — and so is every date. Whether you\'re craving stimulating conversation, romantic escapism, or something more playful, I tailor our time to align with your vision and vibe.',
  },
  {
    icon: <CalendarCog className="h-10 w-10 text-primary" />,
    title: 'Smart Sync, Seamless Planning',
    description: 'My calendar is integrated with real-time availability. Once your preferred time is confirmed, everything is scheduled smoothly — including any travel or event prep we may need. Efficiency meets elegance.',
  },
  {
    icon: <Gift className="h-10 w-10 text-primary" />,
    title: 'Personal Touches',
    description: 'Expect more than just a pretty face. From thoughtful texts to surprise details, I love weaving unexpected delights into our interactions. You’ll feel seen, appreciated, and indulged.',
  },
];

const whatIOfferItems = [
  {
    icon: <Palette className="h-8 w-8 text-primary" />,
    title: 'Bespoke Companionship',
    description: 'From candlelit dinners in downtown St. Pete to upscale overnights or weekend escapes, I offer companionship designed to reflect your mood and elevate your moment.',
  },
  {
    icon: <Landmark className="h-8 w-8 text-primary" />,
    title: 'Private Events & Travel',
    description: 'Need a plus-one with polish for a corporate gala or luxury getaway? I blend seamlessly into high-end environments and handle myself with poise, charm, and a dash of mischief when the time is right.',
  },
  {
    icon: <MoonStar className="h-8 w-8 text-primary" />,
    title: 'Intimate Evenings',
    description: 'Sometimes you don’t want the world — just a meaningful connection. Allow me to be your sanctuary from the noise.',
  },
];

const myValuesItems = [
    { title: 'Integrity', description: 'I value honest, respectful interactions. No facades, no games — just clear expectations and genuine engagement.' },
    { title: 'Trust', description: 'Discretion is non-negotiable. You’ll always be treated with the same level of privacy I expect myself.' },
    { title: 'Excellence', description: 'I hold myself to the highest standards in every aspect — from communication to appearance, to the emotional intelligence I bring to our time.' },
    { title: 'Presence', description: 'You’ll never feel like a transaction. I’m here to be present with you, not just beside you.' },
];

const bookingSteps = [
    { step: 1, title: 'Submit Your Booking Request', description: 'Head over to the "Book Me" page to select your date, time, and desired experience.'},
    { step: 2, title: 'Availability Check + Approval', description: 'My system will check your requested time slot. Once confirmed, you\'ll receive a personalized follow-up and next-step instructions.'},
    { step: 3, title: 'Secure Payment', description: 'Upon approval, your reservation will be secured through a private Stripe checkout link or crypto wallet — your choice.'},
    { step: 4, title: 'Calendar Sync + Confirmation', description: 'Your date is locked into my calendar. You\'ll receive an email confirmation, with optional SMS updates if requested.'},
    { step: 5, title: 'Enjoy the Experience', description: 'Whether it’s dinner, a nightcap, or an extended escape — our time will be polished, playful, and personal.'},
];

export default function HomePage() {
  return (
    <MainLayout>
      {/* Hero Section - About Nikki */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-background to-muted/50">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">About Nikki</h1>
          <p className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl mb-6">
            Intimate. Intentional. <span className="text-primary">Unforgettable.</span>
          </p>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl">
            Welcome to Nikki by Night — the private world of Nikki Lix, your premier companion in St. Petersburg, Florida, for high-end encounters infused with luxury, intellect, and sensual charm. Whether you're seeking a dazzling date for a black-tie event, an engaging presence for a private dinner, or an evening of deep connection, Nikki offers something rare: the perfect blend of class, confidence, and captivating energy.
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl">
            As a fiercely independent and discerning companion, Nikki delivers more than just beauty — she curates personalized experiences designed to leave you glowing. Every encounter is approached with care, attention, and an intuitive understanding of your unique desires. No gimmicks. No agency filters. Just one woman who takes pride in the art of unforgettable company.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
              <Link href="/booking">Book an Encounter <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="shadow-lg hover:shadow-xl transition-shadow">
              <Link href="/services">Explore My Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* My Mission Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground tracking-tight">My Mission</h2>
          <p className="mt-4 text-2xl text-primary font-semibold italic">
            To turn your time into timelessness.
          </p>
          <p className="mt-6 text-lg text-muted-foreground">
            Every moment we spend together is crafted with precision, respect, and authenticity. My goal is simple: to provide luxury companionship that feels effortless — where you’re free to unwind, explore, and just be. Whether it’s a single night or an ongoing arrangement, I aim to build trust, deliver joy, and make memories worth coming back for.
          </p>
        </div>
      </section>

      {/* Why Choose Nikki? Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground tracking-tight">Why Choose Nikki?</h2>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseNikkiFeatures.map((feature, index) => (
              <div key={index} className={`flex flex-col items-center text-center p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow_transform hover:-translate-y-1 bg-card`}>
                 <div className="mb-4 p-3 rounded-full bg-primary/10">
                   {feature.icon}
                 </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* What I Offer Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground tracking-tight">What I Offer</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {whatIOfferItems.map((item) => (
              <Card key={item.title} className="text-center shadow-lg hover:shadow-xl transition-shadow_transform hover:-translate-y-1 bg-card flex flex-col">
                <CardHeader className="items-center">
                  <div className="p-3 rounded-full bg-primary/10 mb-3">
                    {item.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* My Values Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground tracking-tight">My Values</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {myValuesItems.map((value) => (
              <div key={value.title} className="p-6 rounded-lg border border-border hover:shadow-lg transition-shadow bg-card">
                <h3 className="text-xl font-semibold text-primary mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking with Nikki Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Booking with Nikki</h2>
            <p className="mt-4 text-lg opacity-90">
              My process is easy, efficient, and designed to keep things effortless for you:
            </p>
          </div>
          <div className="space-y-8">
            {bookingSteps.map((item) => (
                <div key={item.step} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-background text-primary flex items-center justify-center text-lg font-bold shadow-md">
                        {item.step}
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-background">{item.title}</h3>
                        <p className="opacity-90">{item.description}</p>
                    </div>
                </div>
            ))}
          </div>
           <div className="mt-12 text-center">
            <Button asChild size="lg" variant="secondary" className="bg-accent text-accent-foreground shadow-xl hover:bg-accent/90 transition-colors">
              <Link href="/booking">Book Me Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Let's Make Magic CTA Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="mx-auto h-12 w-12 text-primary mb-6" />
          <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Let's Make <span className="text-primary">Magic</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Nikki by Night isn’t about fantasy — it’s about creating real, memorable moments that feel indulgent, exciting, and unmistakably yours.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
             So when you're ready to elevate your evening beyond the ordinary… <br/> <span className="font-semibold">You know where to find me.</span>
          </p>
          <div className="mt-10">
            <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
              <Link href="/booking">Schedule an Unforgettable Experience <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

    