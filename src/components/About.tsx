import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="py-24 bg-surface text-onSurface">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Typography / Visual Side */}
          <div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
              We design spaces that <span className="text-primary italic">inspire</span> and endure.
            </h2>
          </div>

          {/* Text Content Side */}
          <div>
            <p className="text-lg text-onSurfaceVariant mb-6 leading-relaxed font-sans">
              Founded in 2018, NOVA Studio has been at the forefront of modern architectural design. We believe that architecture is not just about buildings, but about creating environments that enhance human experience and respect our natural world.
            </p>
            <p className="text-lg text-onSurfaceVariant mb-8 leading-relaxed font-sans">
              Our multidisciplinary team of architects and interior designers works closely with clients to translate their vision into timeless, functional, and deeply personal spaces.
            </p>
            
            <Link 
              href="#contact" 
              className="inline-flex items-center gap-2 text-primary font-medium hover:text-primaryContainer transition-colors group"
            >
              <span className="uppercase tracking-widest text-sm font-mono">Let's build together</span>
              <span className="transform transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}