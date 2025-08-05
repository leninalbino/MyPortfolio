import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';

const About = () => {
  const statsVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        stiffness: 100,
        damping: 15
      }
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Imagen/Avatar animada */}
          <AnimatedSection direction="left" delay={0.2}>
            <div className="relative">
              <motion.div 
                className="w-80 h-80 bg-gradient-to-br from-primary-500 to-blue-600 rounded-2xl mx-auto relative overflow-hidden shadow-2xl"
                whileHover={{ 
                  scale: 1.05,
                  rotate: 2,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="absolute inset-4 bg-white rounded-xl flex items-center justify-center">
                  <motion.span 
                    className="text-6xl"
                    animate={{
                      rotate: [0, 10, -10, 0],
                      transition: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    👨‍💻
                  </motion.span>
                </div>
              </motion.div>
              
              {/* Decoraciones animadas */}
              <motion.div 
                className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-80"
                animate={{
                  y: [-5, 5, -5],
                  x: [-2, 2, -2],
                  transition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              />
              <motion.div 
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400 rounded-full opacity-80"
                animate={{
                  y: [5, -5, 5],
                  x: [2, -2, 2],
                  transition: {
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }
                }}
              />
            </div>
          </AnimatedSection>

          {/* Contenido */}
          <div className="space-y-6">
            <AnimatedSection direction="right" delay={0.3}>
              <div>
                <span className="text-primary-600 font-semibold text-lg">Sobre mí</span>
                <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6">
                  Desarrollador Full Stack con experiencia en proyectos empresariales
                </h2>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.4}>
              <p className="text-lg text-gray-600 leading-relaxed">
                Desarrollador Full Stack con más de 3 años de experiencia en proyectos de gran escala. 
                He trabajado en NTT Data y Stefanini para Telefónica, desarrollando y manteniendo 
                aplicaciones críticas como Mi Movistar App y el sistema web de Trazabilidad.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.5}>
              <p className="text-lg text-gray-600 leading-relaxed">
                Actualmente en Joyit, trabajo para Obengroup desarrollando soluciones de manufactura 
                con React.js, C# y MySQL en AWS. Mi experiencia incluye migraciones tecnológicas, 
                desde React a Angular, y desarrollo de aplicaciones híbridas.
              </p>
            </AnimatedSection>

            {/* Estadísticas actualizadas */}
            <AnimatedSection delay={0.6}>
              <motion.div 
                className="grid grid-cols-3 gap-6 pt-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { number: '3+', label: 'Años Experiencia' },
                  { number: '3', label: 'Empresas' },
                  { number: '8+', label: 'Tecnologías' }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="text-center"
                    variants={statsVariants}
                    whileHover={{ 
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="text-3xl font-bold text-primary-600">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.7}>
              <div className="pt-4">
                <motion.a 
                  href="#contact" 
                  className="btn-primary"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Trabajemos juntos
                </motion.a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;