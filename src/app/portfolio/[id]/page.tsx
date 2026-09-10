import Link from 'next/link';
import Image from 'next/image';
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

// Mock data updated with local asset paths
const projects = [
  {
    id: "1",
    title: "Urban Oasis",
    category: "Architecture",
    image: "/assets/project-1.jpg",
    client: "EcoCorp Ltd.",
    year: "2023",
    description: "A sustainable urban development project that integrates natural ecosystems into a high-density living space. The design focuses on maximizing natural light and reducing the carbon footprint using innovative materials."
  },
  {
    id: "2",
    title: "Minimalist Haven",
    category: "Interior Design",
    image: "/assets/project-2.jpg",
    client: "Private Client",
    year: "2024",
    description: "A complete interior renovation focusing on minimalism and tranquility. Using a muted palette and natural textures, we created a sanctuary away from the bustling city life."
  },
  {
    id: "3",
    title: "The Glass Pavilion",
    category: "Commercial",
    image: "/assets/project-3.jpg",
    client: "TechFlow Inc.",
    year: "2022",
    description: "A modern commercial space designed to foster collaboration and creativity. The extensive use of glass removes visual barriers, creating an open and inclusive work environment."
  },
  {
    id: "4",
    title: "Eco Retreat",
    category: "Architecture",
    image: "/assets/project-4.jpg",
    client: "Wellness Resorts",
    year: "2024",
    description: "A luxury resort completely integrated into its natural surroundings. Built with locally sourced materials, the retreat offers a premium experience while maintaining absolute ecological harmony."
  },
];

export default function ProjectPage({ params }: { params: { id: string } }) {
  // Find the specific project by the ID from the URL
  const project = projects.find((p) => p.id === params.id);

  // If project is not found, show a 404-like message
  if (!project) {
    return (
      <div className="min-h-screen bg-surface flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-4xl font-serif text-primary mb-4">Project Not Found</h1>
            <Link href="/" className="text-onSurfaceVariant hover:text-primary transition-colors">
              ← Return to Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Render the project details
  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6">
          
          {/* Back button */}
          <Link href="/#portfolio" className="inline-flex items-center gap-2 text-onSurfaceVariant hover:text-primary transition-colors mb-8 font-medium">
            <span>←</span> Back to Portfolio
          </Link>

          {/* Project Header */}
          <div className="mb-12">
            <p className="text-sm font-mono text-outline tracking-widest uppercase mb-4">
              {project.category}
            </p>
            <h1 className="text-5xl md:text-6xl font-serif text-onSurface font-bold mb-6">
              {project.title}
            </h1>
            
            {/* Project Metadata */}
            <div className="flex flex-wrap gap-8 text-onSurfaceVariant border-t border-outline/20 pt-6">
              <div>
                <span className="block text-xs uppercase tracking-wider text-outline mb-1">Client</span>
                <span className="font-medium text-onSurface">{project.client}</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-outline mb-1">Year</span>
                <span className="font-medium text-onSurface">{project.year}</span>
              </div>
            </div>
          </div>

          {/* Main Hero Image */}
          <div className="w-full aspect-video relative bg-surfaceVariant mb-16 overflow-hidden">
            <Image 
              src={project.image} 
              alt={project.title}
              fill
              className="object-cover"
              priority 
            />
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif text-onSurface mb-6">About the project</h2>
            <p className="text-lg text-onSurfaceVariant leading-relaxed font-sans">
              {project.description}
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}