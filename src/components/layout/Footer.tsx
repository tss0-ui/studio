
import { SiteLogo } from './SiteLogo';
import Link from 'next/link';
import { navigationLinks } from '@/constants/navigation';

export function Footer() {
  const footerNavLinks = navigationLinks.filter(link => link.label !== 'Book Now!');

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex justify-center md:justify-start">
            <SiteLogo />
          </div>

          <div className="flex flex-col items-center space-y-3 text-center">
            <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
              {footerNavLinks.map((item) => (
                <Link key={item.label} href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {item.label}
                </Link>
              ))}
            </nav>
            <p className="text-xs text-muted-foreground/80">
              &copy; 2025 Nikki By Night - TLee Apps. All rights reserved.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <Link href="/legal-disclaimer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Legal Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
