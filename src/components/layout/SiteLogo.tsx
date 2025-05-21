
import Link from 'next/link';
import Image from 'next/image';

export function SiteLogo() {
  return (
    <Link href="/" className="flex items-center group" aria-label="Nikki By Night Home">
      <Image
        src="/images/nikki-by-night-logo.png"
        alt="Nikki By Night Logo"
        width={130} // Adjusted for better visibility, original aspect ratio ~3.05 (1080/354)
        height={43}  // 130 / 3.05 = ~42.6
        className="group-hover:opacity-90 transition-opacity duration-300"
        priority // Important for LCP if the logo is visible above the fold
      />
    </Link>
  );
}
