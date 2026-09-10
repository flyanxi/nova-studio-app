import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-surfaceVariant transition-all">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-serif text-primary font-bold tracking-widest">
          NOVA
        </Link>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-8">
          <Link href="#portfolio" className="text-onSurface hover:text-primary transition-colors font-medium">
            Portfolio
          </Link>
          <Link href="#services" className="text-onSurface hover:text-primary transition-colors font-medium">
            Services
          </Link>
          <Link href="#about" className="text-onSurface hover:text-primary transition-colors font-medium">
            About
          </Link>
        </nav>

        {/* Accessible mobile menu button (A11y) */}
        <button 
          className="md:hidden text-onSurface hover:text-primary transition-colors"
          aria-label="Open menu"
          tabIndex={0}
        >
          {/* Hamburger menu icon (SVG) */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

      </div>
    </header>
  );
}