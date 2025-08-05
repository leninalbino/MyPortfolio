const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Mi Movistar App - Trazabilidad",
      description: "Sistema web de trazabilidad para Telefónica. Migración completa de React a Angular, mantenimiento y nuevas funcionalidades.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop",
      technologies: ["React", "Angular", "TypeScript", "JavaScript"],
      company: "NTT Data / Stefanini",
      client: "Telefónica",
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "Sistema de Manufactura",
      description: "Aplicación web para gestión de procesos de manufactura con dashboard en tiempo real y reportes analíticos.",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=500&h=300&fit=crop",
      technologies: ["React.js", "C#", "MySQL", "AWS"],
      company: "Joyit",
      client: "Obengroup",
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "Mi Movistar App Híbrida",
      description: "Aplicación móvil híbrida para clientes de Telefónica con funcionalidades de gestión de cuenta y servicios.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
      technologies: ["React", "Hybrid App", "JavaScript", "API REST", "Angular", "TypeScript", "Ionic", "Cordova"],
      company: "NTT Data",
      client: "Telefónica",
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-primary-600 font-semibold text-lg">Portafolio</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Algunos de los proyectos en los que he trabajado, desde aplicaciones 
            web hasta soluciones empresariales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/*<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a 
                    href={project.github}
                    className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  >
                    GitHub
                  </a>
                  <a 
                    href={project.live}
                    className="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors"
                  >
                    Ver Demo
                  </a>
                </div>*/}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#" 
            className="btn-secondary"
          >
            Ver todos los proyectos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;