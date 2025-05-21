
import type { Metadata } from 'next';
import { inter, montserrat, greatVibes, neonderthaw } from '@/lib/fonts';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

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
        {children}
        <Toaster />
      </body>
    </html>
  );
}
