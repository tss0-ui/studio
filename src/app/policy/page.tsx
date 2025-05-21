
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Policy - Nikki By Night',
  description: 'Legal and operational policies for Nikki By Night escort services.',
};

export default function PolicyPage() {
  const sections = [
    {
      title: "I. General Liability",
      content: "Nikki accepts no responsibility for any outcome resulting from use of this website, contact via phone, messaging platforms, or any meetings arranged. All engagements are entered into voluntarily and at your own discretion."
    },
    {
      title: "II. Your Satisfaction Guarantee",
      content: "While Nikki does not offer refunds, she does value genuine connection. If within the first 10 minutes you feel the meeting isn’t a match, you may cancel without obligation. However, if you cancel for reasons unrelated to compatibility (e.g., scheduling conflict or change of mind), a cancellation fee will be expected. If you leave the decision entirely up to Nikki's discretion regarding timing or presentation, the satisfaction guarantee becomes void."
    },
    {
      title: "III. Companionship Only – Not Solicitation",
      content: "Nikki offers non-sexual companionship and social experiences for consenting adults. No service offered, requested, or implied is intended to be or should be interpreted as prostitution. Discussing or attempting to pre-arrange sexual activities is illegal and strictly prohibited. You pay for Nikki’s time, energy, and presence—how you spend that time together is up to mutual consent, without pre-negotiation of illegal acts."
    },
    {
      title: "IV. Adult-Only Content & Communication Policy",
      content: "This site and all content herein is strictly for individuals 18 years or older. By proceeding, you agree not to expose minors to this material. Contacting Nikki for promotional, marketing, or sales-related purposes is not allowed. This service is strictly for respectful individuals seeking social companionship."
    },
    {
      title: "V. Payments, Cancellations, and Credit",
      content: "Payments made to Nikki are non-refundable under any circumstance. If a scheduled appointment is canceled, the amount will be held as a credit for up to 12 months. Force majeure events (e.g., natural disasters) may extend this term at Nikki’s discretion."
    },
    {
      title: "VI. Right to Refuse Service",
      content: "Nikki reserves the right to refuse contact or bookings from anyone whose behavior is inappropriate, threatening, disrespectful, intoxicated, or in any way inconsistent with her personal values and safety standards."
    },
    {
      title: "VII. Personal Safety",
      content: "While Nikki takes precautions to ensure mutual comfort and safety, she is not liable for your safety or actions. You agree to fully indemnify Nikki from any legal claims, damages, or consequences resulting from use of this website or meeting in person."
    },
    {
      title: "VIII. Membership & Booking Terms",
      content: "If Nikki offers membership access or exclusive time blocks, any funds sent in advance will be held as non-refundable credit for up to 24 months. Abuse of this policy (e.g., sending funds to view availability and then requesting a refund) is grounds for permanent refusal of future service."
    },
    {
      title: "IX. Entertainment & Consent-Based Experiences Only",
      content: "Nikki’s services are for social enjoyment, companionship, and conversation only. She is not a provider of adult entertainment or sexual services, and no sexual activity is promised, implied, or guaranteed. Any assumptions to the contrary are inaccurate and will result in immediate termination of communication. Her time is her own. You are paying only for her time, not for outcomes or expectations."
    },
    {
      title: "X. Your Agreement",
      content: "By visiting this site or engaging with Nikki in any form, you confirm that you agree to this disclaimer in full. Continued use of the site or services implies ongoing acceptance of any future updates. It is your responsibility to review these terms regularly."
    }
  ];

  return (
    <MainLayout>
      <div className="container mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <FileText className="mx-auto h-12 w-12 text-primary mb-4" />
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Policy
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Legal Disclaimer — Nikki by Night | Independent Companion | Pinellas County, FL
          </p>
        </div>

        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl">Important Information</CardTitle>
            <CardDescription>
              This disclaimer governs the use of this website and any interactions with Nikki, an independent companion operating exclusively in Pinellas County, Florida. These terms are subject to change without prior notice. Nikki reserves the right to decline any request or communication deemed inappropriate, unsafe, or otherwise inconsistent with her personal boundaries. Abuse of human dignity will never be tolerated.
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
