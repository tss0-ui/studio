
import { SiteLogo } from './SiteLogo';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <SiteLogo />
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-sm text-muted-foreground">
            <span>&copy; {currentYear} Nikki By Night. All rights reserved.</span>
            <Link href="/legal-disclaimer" className="hover:text-primary">
              Legal Disclaimer
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary">
              <Facebook size={20} />
            </Link>
            <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary">
              <Instagram size={20} />
            </Link>
            <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary">
              <Twitter size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
