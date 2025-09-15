import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/leninalbino',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/lenin-leonor-albino-chavez-227527209/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    }
  ];

  const quickLinks = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.contact'), href: '#contact' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 dark:from-gray-900 dark:via-indigo-900/30 dark:to-gray-900 text-white transition-colors duration-300 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 dark:from-primary-500/10 dark:to-secondary-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, -50, 0],
            x: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-48 h-48 bg-gradient-to-br from-accent-500/20 to-primary-500/20 dark:from-accent-500/10 dark:to-primary-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -30, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      <div className="container-custom">
        {/* Contenido principal del footer */}
        <div className="py-12 lg:py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Sección de marca */}
            <motion.div 
              className="sm:col-span-2 lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="flex items-center space-x-3 mb-4 group"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-white font-bold text-xl">L</span>
                </motion.div>
                <h3 className="text-2xl lg:text-3xl font-bold gradient-text">
                  Lenin
                </h3>
              </motion.div>
              <p className="text-gray-400 leading-relaxed mb-6">
                {t('footer.description')}
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative p-3 bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-xl text-gray-400 hover:text-primary-400 transition-colors duration-300 group"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {/* Glowing effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-secondary-500/30 dark:from-primary-500/20 dark:to-secondary-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.1 }}
                    />
                    <span className="relative z-10">{link.icon}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Enlaces rápidos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-6">{t('footer.quickLinks')}</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                      whileHover={{ x: 5 }}
                    >
                      <span className="mr-2">→</span>
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Tecnologías */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-6">{t('footer.technologies')}</h4>
              <ul className="space-y-3 text-gray-400">
                <li>React & Angular</li>
                <li>TypeScript</li>
                <li>Python & C#</li>
                <li>Node.js & Java</li>
                <li>PostgreSQL & MongoDB</li>
              </ul>
            </motion.div>

            {/* Información de contacto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold mb-6">{t('footer.contact')}</h4>
              <div className="space-y-3 text-gray-400">
                <motion.a
                  href="mailto:leninalbino@gmail.com"
                  className="flex items-center hover:text-white transition-colors duration-200"
                  whileHover={{ x: 5 }}
                >
                  <span className="mr-3">📧</span>
                  leninalbino@gmail.com
                </motion.a>
                <p className="flex items-center">
                  <span className="mr-3">📍</span>
                  {t('footer.location')}
                </p>
                <p className="flex items-center">
                  <span className="mr-3">🕒</span>
                  {t('footer.response')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Sección inferior */}
        <motion.div 
          className="border-t border-gray-600 dark:border-gray-800 py-6 lg:py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm lg:text-base">
              © {currentYear} Lenin Albino. {t('footer.rights')}
            </p>
            
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>{t('footer.madeWith')}</span>
              <motion.span 
                className="text-red-500"
                animate={{ 
                  scale: [1, 1.2, 1],
                  transition: {
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                ❤️
              </motion.span>
              <span>{t('footer.and')}</span>
              <motion.span 
                className="text-blue-400"
                whileHover={{ scale: 1.1 }}
              >
                React
              </motion.span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;