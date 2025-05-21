
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal Disclaimer - Nikki By Night',
  description: 'Legal disclaimer for Nikki By Night escort services.',
};

export default function LegalDisclaimerPage() {
  const sections = [
    {
      title: "I. Let’s Be Clear on Responsibility",
      content: "I’m not responsible for anything that happens as a result of you browsing my site, contacting me, or meeting me. You’re an adult, making adult decisions. Everything we do is based on mutual respect, mutual choice, and mutual freedom."
    },
    {
      title: "II. Your Satisfaction Matters — Within Limits",
      content: "I want you to have a good experience. If we meet and you’re not feeling it within the first 10 minutes, just say so—I won’t take it personally, and you won’t be obligated to continue. But if you cancel because you’re suddenly busy or change your mind, I expect a cancellation fee. Also, if you leave everything up to me (like what time or how I show up), this guarantee doesn’t apply."
    },
    {
      title: "III. Companionship, Not Promises",
      content: "I offer genuine, no-strings-attached companionship. What I don’t offer is anything illegal or explicit. Booking time with me is not the same as buying something you think you’re entitled to. You’re paying for my time and energy—what happens during that time is entirely natural, respectful, and mutual. Nothing is promised or pre-negotiated. If you try to discuss anything illegal, we’re done."
    },
    {
      title: "IV. Adults Only – No Minors, No Spam",
      content: "You must be 18 or older to view this site or interact with me. That’s non-negotiable. If you’re here to sell me something, promote a brand, or waste time—I’m not interested. I’m here for respectful people looking to enjoy real company."
    },
    {
      title: "V. Payments & Credit Terms",
      content: "All payments you send me are final. I don’t issue refunds. If you cancel a booked session, that money becomes credit you can use anytime in the next 12 months. If something major happens in your city—like a natural disaster—I’ll consider extending that timeframe, but that’s entirely my call."
    },
    {
      title: "VI. I Reserve the Right to Say No",
      content: "If I feel you’re not a good fit for my vibe, my safety, or my standards, I will decline contact or bookings—no explanation required. If you’re drunk, high, rude, or asking for anything illegal or disrespectful, the conversation ends immediately."
    },
    {
      title: "VII. Your Safety Is Yours — My Safety Is Mine",
      content: "While I do everything I can to make our time safe and comfortable, I’m not liable for your safety or your choices. You agree to hold me completely harmless for anything that happens before, during, or after our time together."
    },
    {
      title: "VIII. Membership or Retainer Payments",
      content: "If you ever pay for priority access, advanced booking, or a membership-type service, that money is non-refundable too. You’ll have credit for up to two years to use it, but I don’t offer refunds just because you changed your mind."
    },
    {
      title: "IX. Let’s Be Real — I’m Here for Connection, Not Contracts",
      content: "I’m a sensual, confident, modern woman—not a service menu. Nothing I do is transactional in that way. I won’t tolerate being spoken to like a product, and I won’t promise or guarantee anything beyond my time. If you’re looking for “services,” this isn’t the place for you."
    },
    {
      title: "X. By Staying Here, You Agree",
      content: "If you’re still reading, you’re agreeing to these terms. If anything changes on my site, it’s your responsibility to check and make sure it still works for you. If it doesn’t, simply don’t use my site or contact me."
    }
  ];

  return (
    <MainLayout>
      <div className="container mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <FileText className="mx-auto h-12 w-12 text-primary mb-4" />
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Legal Disclaimer
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Spoken from Nikki, Independent Companion | Pinellas County, FL
          </p>
        </div>

        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl">Important Information</CardTitle>
            <CardDescription>
              Hi there. Before we connect, I need to be fully transparent with you. By visiting my site or reaching out, you’re agreeing to everything below. These terms protect us both, and they’re subject to change without notice—so it's on you to stay updated. I reserve the right to turn down any request or communication that doesn’t feel right to me, for any reason. I stand firmly against anything that violates basic human decency or respect.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-xl font-semibold text-primary mb-2">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
