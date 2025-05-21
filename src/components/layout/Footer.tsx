
import { SiteLogo } from './SiteLogo';
import Link from 'next/link';
import { navigationLinks } from '@/constants/navigation';

export function Footer() {
  const footerNavLinks = navigationLinks.filter(link => link.label !== 'Book Now!');

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Top Part: Logo and Links Grid */}
        <div className="flex flex-col items-center md:flex-row md:items-center md:justify-start mb-8">
          <div className="mb-6 md:mb-0 md:mr-10 lg:mr-16 flex-shrink-0">
            <SiteLogo />
          </div>
          <nav className="grid grid-cols-3 gap-x-4 xs:gap-x-6 sm:gap-x-8 gap-y-2 text-center md:text-left w-full md:w-auto">
            {footerNavLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors py-0.5"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Legal Disclaimer - No top border on this specific div, positioned above copyright, far right on desktop */}
        <div className="flex justify-center md:justify-end mb-6">
          <Link
            href="/legal-disclaimer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Legal Disclaimer
          </Link>
        </div>

        {/* Copyright - very bottom, centered */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground/80">
            &copy; 2025 Nikki By Night - TLee Apps. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
