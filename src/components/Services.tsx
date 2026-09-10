export default function Services() {
  const services = [
    {
      id: "01",
      title: "Architecture",
      description: "From conceptual design to final construction, we create sustainable and innovative architectural solutions."
    },
    {
      id: "02",
      title: "Interior Design",
      description: "Transforming spaces into harmonious environments through careful selection of materials, lighting, and textures."
    },
    {
      id: "03",
      title: "Urban Planning",
      description: "Developing comprehensive master plans that integrate communities with their natural and built surroundings."
    }
  ];

  return (
    <section id="services" className="py-24 bg-surfaceVariant text-onSurface">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Services</h2>
          <p className="text-onSurfaceVariant max-w-xl font-sans">
            Comprehensive design solutions tailored to your unique vision and lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="p-8 border border-outline/20 hover:border-primary/50 transition-colors bg-surface group">
              <span className="text-3xl font-mono text-outline/40 mb-6 block group-hover:text-primary transition-colors">
                {service.id}
              </span>
              <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-onSurfaceVariant leading-relaxed font-sans">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}