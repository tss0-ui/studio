
import type { Metadata } from 'next';
import Image from 'next/image';
import { inter, montserrat, greatVibes, neonderthaw } from '@/lib/fonts';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { DisclaimerPopup } from '@/components/features/disclaimer/DisclaimerPopup';

export const metadata: Metadata = {
  title: 'Nikki By Night - Your Premier Escort Experience',
  description: 'Indulge in an exclusive and sophisticated escort experience with me, Nikki. Book your private appointment in Pinellas County, FL.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${montserrat.variable} ${greatVibes.variable} ${neonderthaw.variable} font-sans antialiased`}>
        <Image
          src="/images/site-background-pattern.jpg" 
          alt="Abstract background pattern"
          fill
          className="object-cover fixed inset-0 z-[-1] blur-2xl"
          priority
        />
        {children}
        <Toaster />
        <DisclaimerPopup />
      </body>
    </html>
  );
}
