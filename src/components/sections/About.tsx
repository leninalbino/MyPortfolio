import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';
import { useLanguage } from '../../contexts/LanguageContext';

const About = () => {
  const { t, language } = useLanguage(); // Agregar language

  // Función para obtener la ruta del CV según el idioma
  const getCVPath = () => {
    return language === 'en' 
      ? '/cv/cv-lenin-albino-en.pdf'
      : '/cv/cv-lenin-albino-es.pdf';
  };

  // Función para el nombre del archivo descargado
  const getCVFileName = () => {
    return language === 'en' 
      ? 'Lenin-Albino-Resume-EN.pdf'
      : 'Lenin-Albino-CV-ES.pdf';
  };

  return (
    <section id="about" className="relative section-padding bg-gradient-to-br from-white via-indigo-50/30 to-white dark:from-gray-800 dark:via-indigo-900/20 dark:to-gray-800 transition-colors duration-300 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-10 w-32 h-32 bg-gradient-to-br from-primary-200/40 to-secondary-200/40 dark:from-primary-200/30 dark:to-secondary-200/30 rounded-full blur-2xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-24 h-24 bg-gradient-to-br from-accent-200/40 to-primary-200/40 dark:from-accent-200/30 dark:to-primary-200/30 rounded-full blur-2xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 15, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      <div className="container-custom">
        <AnimatedSection className="text-center mb-12 lg:mb-16">
          <motion.span 
            className="text-primary-600 dark:text-primary-400 font-semibold text-sm sm:text-base lg:text-lg uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t('about.title')}
          </motion.span>
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4 lg:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t('about.subtitle')}
          </motion.h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <AnimatedSection className="space-y-6 lg:space-y-8">
            <motion.p 
              className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t('about.paragraph1')}
            </motion.p>

            <motion.p 
              className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {t('about.paragraph2')}
            </motion.p>

            <motion.p 
              className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {t('about.paragraph3')}
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.a 
                href="#contact" 
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('about.workTogether')}
              </motion.a>
              
              {/* CV ACTUALIZADO */}
              <motion.a 
                href={getCVPath()}
                download={getCVFileName()}
                className="btn-secondary flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {t('about.downloadCV')}
              </motion.a>
            </motion.div>
          </AnimatedSection>

          {/* Stats Grid - sin cambios */}
          <AnimatedSection delay={0.3}>
            <div className="grid grid-cols-2 gap-6 lg:gap-8">
              {[
                { number: "3+", label: t('about.stats.experience') },
                { number: "16+", label: t('about.stats.projects') },
                { number: "10+", label: t('about.stats.technologies') },
                { number: "100%", label: t('about.stats.dedication') }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="relative text-center p-6 lg:p-8 glass-card hover:shadow-xl dark:hover:shadow-gray-900/20 transition-all duration-300 group overflow-hidden"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/15 to-secondary-500/15 dark:from-primary-500/10 dark:to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  
                  {/* Animated border */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-br from-primary-500/20 to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(135deg, transparent 30%, ${index % 2 === 0 ? 'rgba(79, 70, 229, 0.1)' : 'rgba(20, 184, 166, 0.1)'} 100%)`,
                    }}
                  />
                  <motion.div 
                    className="text-3xl lg:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.6 + (index * 0.1) }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm lg:text-base text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
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