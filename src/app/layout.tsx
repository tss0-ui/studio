
import type { Metadata } from 'next';
import { inter, montserrat } from '@/lib/fonts';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Nikki By Night - Luxury & Sophistication',
  description: 'Experience unparalleled service with Nikki By Night. Book your exclusive appointment today.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
