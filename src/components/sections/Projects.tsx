import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Sistema de Manufactura - Obengroup',
      description: 'Aplicación web para gestión de procesos de manufactura, control de inventarios y seguimiento de producción en tiempo real para empresa industrial.',
      image: '🏭', // Placeholder - manufactura
      technologies: ['React', 'C#', 'MySQL', 'AWS'],
      company: 'Joyit',
      client: 'Obengroup',
      period: '2024 - Actualidad',
      liveUrl: '#', // Privado
      githubUrl: '#', // Privado
      featured: true,
      type: 'Desarrollo Full Stack'
    },
    {
      id: 2,
      title: 'Migración Web Trazabilidad - Telefónica',
      description: 'Migración completa de aplicación web de trazabilidad de React a Angular, mejorando performance y mantenibilidad del sistema.',
      image: '🔄', // Placeholder - migración
      technologies: ['Angular', 'TypeScript', 'Bootstrap', 'REST APIs'],
      company: 'Stefanini',
      client: 'Telefónica',
      period: '2023 - 2024',
      liveUrl: '#', // Privado
      githubUrl: '#', // Privado
      featured: true,
      type: 'Migración de Tecnología'
    },
    {
      id: 3,
      title: 'App Mi Movistar & Web Trazabilidad',
      description: 'Desarrollo y mantenimiento de aplicación híbrida Mi Movistar y sistema web de trazabilidad para gestión de servicios telefónicos.',
      image: '📱', // Placeholder - app móvil
      technologies: ['React', 'JavaScript', 'HTML5', 'CSS3'],
      company: 'NTT Data',
      client: 'Telefónica',
      period: '2022 - 2023',
      liveUrl: '#', // Privado
      githubUrl: '#', // Privado
      featured: false,
      type: 'Desarrollo Frontend'
    },
    {
      id: 4,
      title: 'Proyectos Personales',
      description: 'Desarrollos personales y proyectos de aprendizaje con diferentes tecnologías del stack completo.',
      image: '💻', // Placeholder - desarrollo personal
      technologies: ['Python', 'Django', 'PostgreSQL', 'Docker'],
      company: 'Personal',
      client: 'Proyectos propios',
      period: '2021 - Actualidad',
      liveUrl: '#',
      githubUrl: 'https://github.com/leninalbino?tab=repositories',
      featured: false,
      type: 'Desarrollo Personal'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-12 lg:mb-16">
          <motion.span 
            className="text-primary-600 dark:text-primary-400 font-semibold text-sm sm:text-base lg:text-lg uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Experiencia Profesional
          </motion.span>
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4 lg:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Proyectos en los que he trabajado
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Mi experiencia profesional en empresas líderes del sector tecnológico, trabajando para clientes importantes.
          </motion.p>
        </AnimatedSection>

        <div className="grid gap-8 lg:gap-12">
          {/* Featured Projects */}
          <div className="space-y-8 lg:space-y-12">
            {projects.filter(project => project.featured).map((project, index) => (
              <AnimatedSection key={project.id} delay={0.2 * index}>
                <motion.div 
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 * index }}
                >
                  {/* Project Image Placeholder */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <motion.div 
                      className="relative group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="aspect-video bg-gradient-to-br from-primary-500 to-primary-700 dark:from-primary-400 dark:to-primary-600 rounded-2xl shadow-2xl flex items-center justify-center border border-gray-200 dark:border-gray-700 group-hover:shadow-3xl transition-all duration-300">
                        <div className="text-center">
                          <span className="text-6xl lg:text-8xl block mb-4">{project.image}</span>
                          <div className="text-white font-semibold text-lg lg:text-xl">
                            {project.company}
                          </div>
                          <div className="text-white/80 text-sm lg:text-base">
                            Cliente: {project.client}
                          </div>
                        </div>
                      </div>
                      
                      <motion.div 
                        className="absolute inset-0 bg-primary-600/20 dark:bg-primary-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <div className="flex space-x-4">
                          {project.githubUrl !== '#' && (
                            <motion.a
                              href={project.githubUrl}
                              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                              </svg>
                            </motion.a>
                          )}
                          <motion.div
                            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-3 rounded-full shadow-lg"
                          >
                            <span className="text-xs font-medium">
                              {project.liveUrl === '#' ? 'Privado' : 'Público'}
                            </span>
                          </motion.div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div>
                      <motion.div 
                        className="flex items-center gap-3 mb-2"
                        initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full">
                          {project.type}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                          {project.period}
                        </span>
                      </motion.div>
                      
                      <motion.h3 
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white"
                        initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        {project.title}
                      </motion.h3>
                      
                      <motion.div 
                        className="flex items-center gap-2 mt-2 text-sm text-gray-600 dark:text-gray-400"
                        initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                      >
                        <span className="font-medium text-primary-600 dark:text-primary-400">
                          {project.company}
                        </span>
                        <span>•</span>
                        <span>Cliente: {project.client}</span>
                      </motion.div>
                    </div>
                    
                    <motion.p 
                      className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
                      initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      {project.description}
                    </motion.p>

                    <motion.div 
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full border border-gray-200 dark:border-gray-600"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.6 + (0.1 * techIndex) }}
                          whileHover={{ scale: 1.1, backgroundColor: 'var(--tw-colors-primary-100)' }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>

                    <motion.div 
                      className="flex flex-col sm:flex-row gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                      <motion.a 
                        href="#contact"
                        className="btn-primary text-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Contactar para más detalles
                      </motion.a>
                      {project.githubUrl !== '#' && (
                        <motion.a 
                          href={project.githubUrl}
                          className="btn-secondary text-center"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Ver repositorio
                        </motion.a>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Other Projects Grid */}
          <div className="mt-16">
            <motion.h3 
              className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white text-center mb-8 lg:mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Otras experiencias
            </motion.h3>
            
            <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
              {projects.filter(project => !project.featured).map((project, index) => (
                <AnimatedSection key={project.id} delay={0.1 * index}>
                  <motion.div 
                    className="bg-gray-50 dark:bg-gray-700 p-6 lg:p-8 rounded-2xl border border-gray-200 dark:border-gray-600 transition-all duration-300 hover:shadow-lg dark:hover:shadow-gray-900/20 h-full group"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <div className="text-center mb-6">
                      <motion.div 
                        className="text-4xl lg:text-5xl mb-4"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {project.image}
                      </motion.div>
                      
                      <div className="mb-3">
                        <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full">
                          {project.period}
                        </span>
                      </div>
                      
                      <h4 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </h4>
                      
                      <div className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-3">
                        {project.company} • {project.client}
                      </div>
                      
                      <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <motion.a 
                        href="#contact"
                        className="flex-1 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200 text-sm font-medium"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Consultar
                      </motion.a>
                      {project.githubUrl !== '#' && (
                        <motion.a 
                          href={project.githubUrl}
                          className="flex-1 border border-gray-300 dark:border-gray-500 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 text-center py-2 px-4 rounded-lg transition-colors duration-200 text-sm font-medium"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>

        {/* Call to action */}
        <motion.div 
          className="text-center mt-12 lg:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-base lg:text-lg text-gray-600 dark:text-gray-400 mb-6">
            ¿Quieres conocer más sobre mi experiencia profesional?
          </p>
          <motion.a 
            href="#contact" 
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Conversemos sobre oportunidades
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;