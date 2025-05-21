
import { SiteLogo } from './SiteLogo';
import Link from 'next/link';
import { navigationLinks } from '@/constants/navigation';

export function Footer() {
  const footerNavLinks = navigationLinks.filter(link => link.label !== 'Book Now!');

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Column 1: Logo and Vertical Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <SiteLogo />
            <nav className="mt-4 flex flex-col space-y-1 text-center md:text-left">
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

          {/* Column 2: Copyright */}
          <div className="flex flex-col items-center justify-start text-center md:text-left md:items-start mt-8 md:mt-0">
            <p className="text-xs text-muted-foreground/80">
              &copy; 2025 Nikki By Night - TLee Apps. All rights reserved.
            </p>
          </div>
          
          {/* Column 3: Kept for grid structure, can be used for future elements if needed */}
          <div></div>

        </div>
        
        {/* Legal Disclaimer - positioned separately for bottom-right alignment */}
        <div className="mt-8 pt-8 border-t border-border/30 flex justify-center md:justify-end">
          <Link href="/legal-disclaimer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Legal Disclaimer
          </Link>
        </div>

      </div>
    </footer>
  );
}
