import Link from 'next/link';
import Image from 'next/image';

// Mock data updated with local asset paths
const projects = [
  {
    id: "1",
    title: "Urban Oasis",
    category: "Architecture",
    image: "/assets/project-1.jpg", 
  },
  {
    id: "2",
    title: "Minimalist Haven",
    category: "Interior Design",
    image: "/assets/project-2.jpg",
  },
  {
    id: "3",
    title: "The Glass Pavilion",
    category: "Commercial",
    image: "/assets/project-3.jpg",
  },
  {
    id: "4",
    title: "Eco Retreat",
    category: "Architecture",
    image: "/assets/project-4.jpg",
  },
];

export default function PortfolioGrid() {
  return (
    <section id="portfolio" className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-onSurface font-bold mb-4">Selected Works</h2>
            <p className="text-onSurfaceVariant max-w-md font-sans">
              Explore our latest architectural and interior design projects, where form meets function.
            </p>
          </div>
          <Link href="#all-projects" className="text-primary hover:text-primaryContainer transition-colors font-medium flex items-center gap-2 group">
            View All Projects
            <span className="transform transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <Link 
              href={`/portfolio/${project.id}`} 
              key={project.id} 
              // Create the staggered effect by pushing even items down on desktop
              className={`group cursor-pointer block ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
            >
              {/* Image Container with Hover Effects */}
              <div className="overflow-hidden mb-6 bg-surfaceVariant relative aspect-[4/5] md:aspect-[3/4]">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
                />
              </div>
              
              {/* Text Content */}
              <div>
                <p className="text-sm font-mono text-outline mb-2 tracking-widest uppercase">
                  {project.category}
                </p>
                <h3 className="text-2xl font-serif text-onSurface group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}