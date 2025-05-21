
import Image from 'next/image';
import Link from 'next/link';

export function SiteLogo() {
  return (
    <Link href="/" className="flex items-center" aria-label="Nikki by Night Home">
      <Image
        src="/images/nikki-by-night-logo.png"
        alt="Nikki by Night Logo"
        width={180} 
        height={45} 
        className="h-auto max-h-10" 
        priority
      />
    </Link>
  );
}
