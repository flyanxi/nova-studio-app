import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-surfaceVariant pt-16 pb-8 border-t border-outline/20 mt-auto">
      <div className="container mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-serif text-primary font-bold tracking-widest mb-4 inline-block">
              NOVA
            </Link>
            <p className="text-onSurfaceVariant max-w-sm font-sans">
              Crafting modern architecture and interior design experiences tailored to your vision.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-onSurface font-bold mb-4 uppercase tracking-wider text-sm">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#portfolio" className="text-onSurfaceVariant hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-onSurfaceVariant hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-onSurfaceVariant hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-onSurface font-bold mb-4 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-2 text-onSurfaceVariant">
              <li>hello@nova-studio.app</li>
              <li>+1 (555) 123-4567</li>
              <li>Tallinn, Estonia</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-outline pt-8 border-t border-outline/20">
          &copy; {new Date().getFullYear()} NOVA Architecture. All rights reserved.
        </div>

      </div>
    </footer>
  );
}