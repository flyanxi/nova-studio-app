"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

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

const ALL_LABEL = "All";

export default function PortfolioGrid() {
  const categories = useMemo(() => {
    const unique = Array.from(new Set(projects.map((p) => p.category)));
    return [ALL_LABEL, ...unique];
  }, []);

  const [activeCategory, setActiveCategory] = useState<string>(ALL_LABEL);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === ALL_LABEL) return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  // Закрытие дропдауна при клике вне его области
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Закрытие дропдауна по Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsDropdownOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const handleSelectCategory = (category: string) => {
    setActiveCategory(category);
    setIsDropdownOpen(false);
  };

  return (
    <section id="portfolio" className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
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

        {/* Category Filter — Tabs on desktop, Dropdown on mobile */}
        <div className="mb-16 md:mb-24">

          {/* Desktop: Text Tabs */}
          <div className="hidden md:flex flex-wrap items-center gap-8 border-b border-surfaceVariant pb-4">
            {categories.map((category) => {
              const isActive = category === activeCategory;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                  className={`relative text-sm font-mono tracking-widest uppercase pb-2 transition-colors ${
                    isActive
                      ? "text-onSurface"
                      : "text-outline hover:text-onSurface"
                  }`}
                >
                  {category}
                  <span
                    className={`absolute left-0 -bottom-[1px] h-[2px] bg-primary transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Mobile: Dropdown */}
          <div className="md:hidden relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              aria-haspopup="listbox"
              aria-expanded={isDropdownOpen}
              className="w-full flex items-center justify-between border border-surfaceVariant px-5 py-4 text-sm font-mono tracking-widest uppercase text-onSurface"
            >
              <span>
                Filter by:{" "}
                <span className="text-primary">{activeCategory}</span>
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-4 h-4 transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            {isDropdownOpen && (
              <ul
                role="listbox"
                className="absolute z-20 top-full left-0 w-full mt-1 bg-surface border border-surfaceVariant shadow-lg shadow-onSurface/5"
              >
                {categories.map((category) => {
                  const isActive = category === activeCategory;
                  return (
                    <li key={category} role="option" aria-selected={isActive}>
                      <button
                        type="button"
                        onClick={() => handleSelectCategory(category)}
                        className={`w-full text-left px-5 py-3 text-sm font-mono tracking-widest uppercase transition-colors ${
                          isActive
                            ? "text-primary bg-surfaceVariant/30"
                            : "text-outline hover:text-onSurface hover:bg-surfaceVariant/20"
                        }`}
                      >
                        {category}
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

        </div>

        {/* Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
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

        {/* Empty state, just in case a category has no projects */}
        {filteredProjects.length === 0 && (
          <p className="text-outline font-sans text-center py-16">
            No projects found in this category yet.
          </p>
        )}

      </div>
    </section>
  );
}