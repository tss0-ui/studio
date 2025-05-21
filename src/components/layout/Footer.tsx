
import { SiteLogo } from './SiteLogo';
import Link from 'next/link';
import { navigationLinks } from '@/constants/navigation';

export function Footer() {
  const footerNavLinks = navigationLinks.filter(link => link.label !== 'Book Now!');

  return (
    <footer className="border-t border-border/40 bg-background py-8">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Part: Logo and Quick Links */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left mb-8">
          <div className="mb-4"> {/* Logo container */}
            <SiteLogo />
          </div>
          <nav aria-label="Footer Quick Links">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
              {footerNavLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Part: Copyright and Legal Disclaimer */}
        <div className="mt-6 text-xs text-muted-foreground/80">
          <p className="text-center">
            © 2025 Nikki By Night - TLee Apps.
          </p>
          <div className="relative mt-1 w-full text-center">
            <p>All rights reserved.</p>
            <div className="mt-1 sm:mt-0 sm:absolute sm:right-0 sm:top-0">
              <Link
                href="/legal-disclaimer"
                className="hover:text-primary transition-colors"
              >
                Legal Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
