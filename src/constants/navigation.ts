
export type NavItem = {
  label: string;
  href: string;
};

export const navigationLinks: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Book Now', href: '/booking' },
  { label: 'Payments', href: '/payments' },
  { label: 'Contact', href: '/contact' },
];
