
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MainLayout } from '@/components/layout/MainLayout';
import Link from 'next/link';
import { 
  ArrowRight, 
  Gem, 
  KeyRound, 
  WandSparkles, 
  CalendarCog, 
  Gift, 
  MoonStar,
  Sparkles,
  Wine,
  Heart, // For My Values
  Diamond // For Luxury Escort Services & Why Choose Nikki
} from 'lucide-react';

const physicalAttributes = [
  { label: "Gender", value: "Female" },
  { label: "Age", value: "31" },
  { label: "Location", value: "Pinellas County, Florida" },
  { label: "Eyes", value: "Blue" },
  { label: "Hair", value: "Blonde, Medium Length" },
  { label: "Height", value: "170 cm / 5'7\"" },
  { label: "Bust", value: "Natural C" },
  { label: "Pubic Hair", value: "Shaved" },
  { label: "Ethnicity", value: "Caucasian" },
  { label: "Orientation", value: "Straight" },
  { label: "Languages", value: "English" },
  { label: "Available for", value: "Incall Only" },
];

const whyChooseNikkiFeatures = [
  {
    icon: <Diamond className="h-10 w-10 text-primary" />, // Changed from Gem
    title: 'Exclusivity Meets Authenticity',
    description: 'You’re not booking from a list — you’re connecting with a real woman. I\'m selective with whom I spend time, which means when we meet, you\'re getting my full attention. Our chemistry? Unrushed. Our vibe? Real.',
  },
  {
    icon: <KeyRound className="h-10 w-10 text-primary" />,
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
    icon: <Wine className="h-8 w-8 text-primary" />,
    title: 'Bespoke Companionship',
    description: 'From candlelit dinners in downtown St. Pete to best kept secrets in the bedroom. I offer companionship designed to reflect your mood and elevate your moment.',
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
    { title: 'Submit Your Booking Request', description: 'Head over to the "Book Me" page to select your date, time, and desired experience.'},
    { title: 'Availability Check + Approval', description: 'My system will check your requested time slot.'},
    { title: 'Secure Payment', description: 'Upon approval, your reservation will be secured through a private Stripe checkout link or crypto wallet — your choice.'},
    { title: 'Calendar Sync + Confirmation', description: 'Your date is locked into my calendar. You\'ll receive an email confirmation, with optional SMS updates if requested.'},
    { title: 'Enjoy the Experience', description: 'Our time will be polished, playful, and personal.'},
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
            Welcome to Nikki by Night — the private world of Miss. Nikki, your premier companion in St. Petersburg, Florida, for high-end encounters infused with luxury, intellect, and sensual charm. Whether you're seeking a dazzling date for a black-tie event, an engaging presence for a private dinner, or an evening of deep connection, Nikki offers something rare: the perfect blend of class, confidence, and captivating energy.
          </p>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl">
            Nikki stands out for her unparalleled elegance, captivating beauty, and engaging personality. She combines sophistication with warmth, making every encounter feel personal and unforgettable. Whether you're seeking a charming companion for a special event or an intimate, discreet escort, Nikki's professionalism and attention to detail ensure a luxurious experience tailored just for you.
          </p>
        
          {/* Physical Attributes Section */}
          <Card className="shadow-xl my-12 text-left bg-card/80 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-primary">Physical Attributes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-muted-foreground">
                {physicalAttributes.map(attr => (
                  <div key={attr.label} className="flex justify-between sm:block">
                    <span className="font-semibold text-foreground pr-2">{attr.label}:</span>
                    <span>{attr.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <p className="mt-8 max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl">
            As a fiercely independent and discerning companion, Nikki delivers more than just beauty — she curates personalized experiences designed to leave you glowing. Every encounter is approached with care, attention, and an intuitive understanding of your unique desires. No gimmicks. No agency filters. Just one woman who takes pride in the art of unforgettable company.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button asChild size="lg" className="shadow-lg hover:shadow-primary/50 transition-shadow">
              <Link href="/booking">Book an Encounter <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="shadow-lg hover:shadow-primary/30 transition-shadow">
              <Link href="/services">Explore My Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* My Mission Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="mx-auto h-12 w-12 text-primary mb-6" /> {/* Updated icon */}
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
            <Gem className="mx-auto h-12 w-12 text-primary mb-6" />
            <h2 className="text-3xl font-bold text-foreground tracking-tight">Why Choose Nikki?</h2>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseNikkiFeatures.map((feature, index) => (
              <div key={index} className={`flex flex-col items-center text-center p-6 rounded-lg shadow-xl hover:shadow-primary/30 transition-shadow_transform hover:-translate-y-1 bg-card`}>
                 <div className="mb-4 p-3 rounded-full bg-primary/20">
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
            <Sparkles className="mx-auto h-12 w-12 text-primary mb-6" /> {/* Changed icon for variety */}
            <h2 className="text-3xl font-bold text-foreground tracking-tight">What I Offer</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {whatIOfferItems.map((item) => (
              <Card key={item.title} className="text-center shadow-lg hover:shadow-primary/30 transition-shadow_transform hover:-translate-y-1 bg-card flex flex-col">
                <CardHeader className="items-center">
                  <div className="p-3 rounded-full bg-primary/20 mb-3">
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

      {/* Luxury Escort Services by Nikki Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Diamond className="mx-auto h-12 w-12 text-primary mb-6" />
          <h2 className="text-3xl font-bold text-foreground tracking-tight mb-6">
            Luxury Escort Services by Nikki
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            When you choose Nikki, you are choosing an elite escort experience that is second to none. Looking for a private, intimate experience? Nikki delivers a range of luxury escort services that ensure every moment with her is unforgettable. Her services are designed to suit your preferences and schedule.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            For more information, check out <Link href="/services" className="text-primary hover:underline">my rates and services page</Link>.
          </p>
        </div>
      </section>

      {/* My Values Section */}
      <section className="py-16 md:py-24 bg-muted"> {/* Alternating background */}
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Heart className="mx-auto h-12 w-12 text-primary mb-6" /> {/* Consistent icon with My Mission */}
            <h2 className="text-3xl font-bold text-foreground tracking-tight">My Values</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {myValuesItems.map((value) => (
              <div key={value.title} className="p-6 rounded-lg border border-border/50 hover:shadow-primary/20 transition-shadow bg-card">
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
            <CalendarCog className="mx-auto h-12 w-12 mb-6" />
            <h2 className="text-3xl font-bold tracking-tight">Booking with Nikki</h2>
            <p className="mt-4 text-lg opacity-90">
              My process is easy, efficient, and designed to keep things effortless for you:
            </p>
          </div>
          <div className="space-y-6 text-center text-lg opacity-90">
              <p>Head over to the "Book Me" page to select your date, time, and desired experience.</p>
              <p>My system will check your requested time slot.</p>
              <p>Upon approval, your reservation will be secured through a private Stripe checkout link or crypto wallet — your choice.</p>
              <p>Your date is locked into my calendar. You'll receive an email confirmation, with optional SMS updates if requested.</p>
              <p>Enjoy the Experience — our time will be polished, playful, and personal.</p>
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
            <Button asChild size="lg" className="shadow-lg hover:shadow-primary/50 transition-shadow">
              <Link href="/booking">Schedule an Unforgettable Experience <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

    