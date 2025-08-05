import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';

const About = () => {
  const stats = [
    { number: '3+', label: 'Años de experiencia' },
    { number: '15+', label: 'Proyectos completados' },
    { number: '8+', label: 'Tecnologías dominadas' },
    { number: '100%', label: 'Dedicación' },
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-12 lg:mb-16">
          <motion.span 
            className="text-primary-600 dark:text-primary-400 font-semibold text-sm sm:text-base lg:text-lg uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Sobre mí
          </motion.span>
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4 lg:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Desarrollador Full Stack apasionado por crear soluciones innovadoras
          </motion.h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Contenido principal */}
          <AnimatedSection direction="left" delay={0.2}>
            <div className="space-y-6">
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Soy un desarrollador Full Stack con <span className="font-semibold text-primary-600 dark:text-primary-400">más de 3 años de experiencia</span> 
                creando aplicaciones web robustas y escalables. Mi pasión radica en transformar ideas complejas en soluciones digitales elegantes y funcionales.
              </p>
              
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Especializado en tecnologías modernas como <span className="font-semibold text-primary-600 dark:text-primary-400">React, Angular, TypeScript, Python, C#</span> y <span className="font-semibold text-primary-600 dark:text-primary-400">Java</span>. 
                Me enfoco en escribir código limpio, mantenible y en seguir las mejores prácticas de desarrollo.
              </p>

              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Cuando no estoy programando, me gusta mantenerme actualizado con las últimas tendencias tecnológicas, 
                contribuir a proyectos open source y compartir conocimiento con la comunidad de desarrolladores.
              </p>

              {/* Call to action */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 pt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.a 
                  href="#contact" 
                  className="btn-primary text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Trabajemos juntos
                </motion.a>
                <motion.a 
                  href="/cv.pdf" 
                  target="_blank"
                  className="btn-secondary text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Descargar CV
                </motion.a>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection direction="right" delay={0.4}>
            <div className="grid grid-cols-2 gap-6 lg:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl border border-gray-200 dark:border-gray-600 transition-all duration-300 hover:shadow-lg dark:hover:shadow-gray-900/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.h3 
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 + (0.1 * index), type: "spring" }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;