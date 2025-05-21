
import { Inter, Montserrat, Great_Vibes, Neonderthaw } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-great-vibes',
  display: 'swap',
});

export const neonderthaw = Neonderthaw({
  subsets: ['latin'],
  weight: ['400'], // Neonderthaw typically only has '400' weight
  variable: '--font-neonderthaw',
  display: 'swap',
});
