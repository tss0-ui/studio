
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { SiteLogo } from './SiteLogo';
import { navigationLinks, type NavItem } from '@/constants/navigation';
import { cn } from '@/lib/utils';

export function Navbar() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);


  const NavLinks = ({ inSheet = false }: { inSheet?: boolean }) => (
    navigationLinks.map((item: NavItem) => (
      <Link
        key={item.label}
        href={item.href}
        onClick={() => inSheet && setIsSheetOpen(false)}
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === item.href ? "text-primary font-semibold" : "text-muted-foreground",
          inSheet && "block py-2 text-lg"
        )}
      >
        {item.label}
      </Link>
    ))
  );

  if (!isMounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <SiteLogo />
          <div className="h-6 w-6 animate-pulse rounded-full bg-muted-foreground/20 md:hidden"></div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <SiteLogo />
        <nav className="hidden items-center space-x-6 md:flex">
          <NavLinks />
        </nav>
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <div className="mb-8 flex justify-between items-center">
                <SiteLogo />
                 <Button variant="ghost" size="icon" onClick={() => setIsSheetOpen(false)} className="md:hidden">
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
              </div>
              <nav className="flex flex-col space-y-4">
                <NavLinks inSheet={true} />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
