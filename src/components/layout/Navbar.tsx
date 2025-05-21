
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
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
    navigationLinks.map((item: NavItem) => {
      if (item.label === 'Book Now!') {
        return (
          <Button 
            key={item.label} 
            asChild 
            size={inSheet ? "lg" : "default"} 
            className={cn(
              inSheet ? "w-full mt-4" : "shadow-md hover:shadow-primary/50 transition-shadow",
            )}
          >
            <Link href={item.href} onClick={() => inSheet && setIsSheetOpen(false)}>
              {item.label}
            </Link>
          </Button>
        );
      }
      return (
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
      );
    })
  );

  if (!isMounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <SiteLogo />
          <div className="h-6 w-6 animate-pulse rounded-full bg-muted-foreground/20 md:hidden"></div>
          <div className="hidden md:flex items-center space-x-6">
             <div className="h-6 w-12 animate-pulse rounded-md bg-muted-foreground/20"></div>
             <div className="h-6 w-12 animate-pulse rounded-md bg-muted-foreground/20"></div>
             <div className="h-6 w-12 animate-pulse rounded-md bg-muted-foreground/20"></div>
             <div className="h-9 w-24 animate-pulse rounded-md bg-primary/20"></div>
          </div>
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
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6 flex flex-col">
               <SheetHeader className="mb-8">
                <div className="flex justify-between items-center">
                  <SiteLogo />
                  <Button variant="ghost" size="icon" onClick={() => setIsSheetOpen(false)} className="md:hidden -mr-2">
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                </div>
                <SheetTitle className="sr-only">Main Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 flex-grow">
                <NavLinks inSheet={true} />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
