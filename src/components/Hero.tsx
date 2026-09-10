import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 bg-primary">
        <Image 
          src="/assets/hero-bg.jpg" 
          alt="NOVA Architecture Modern Building"
          fill
          priority 
          className="object-cover brightness-50" 
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-surface">
        
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
          Crafting Modern <span className="italic font-light">Architecture</span>
        </h1>
        
        <p className="text-lg md:text-xl font-sans max-w-2xl mx-auto mb-12 text-surfaceVariant">
          We transform spaces into experiences. NOVA studio delivers premium architectural and interior design solutions tailored to your vision.
        </p>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="#portfolio" 
            className="px-8 py-4 bg-surface text-onSurface font-bold tracking-wider uppercase text-sm hover:bg-surfaceVariant transition-colors"
          >
            Explore Projects
          </Link>
          <Link 
            href="#contact" 
            className="px-8 py-4 border border-surface text-surface font-bold tracking-wider uppercase text-sm hover:bg-surface/10 transition-colors"
          >
            Book a Consultation
          </Link>
        </div>

      </div>
    </section>
  );
}