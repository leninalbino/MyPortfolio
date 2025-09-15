import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';
import { useLanguage } from '../../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [state, handleSubmit] = useForm("xpwlyypw");

  if (state.succeeded) {
    return (
      <section id="contact" className="section-padding bg-gray-900">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-600/20 border border-green-500/30 rounded-2xl p-8"
            >
              <span className="text-6xl mb-4 block">✅</span>
              <h2 className="text-3xl font-bold text-white mb-4">
                {t('contact.form.success')}
              </h2>
              <p className="text-gray-300 mb-6">
                {t('contact.successMessage')}
              </p>
              <button
                onClick={() => window.location.reload()}
                className="btn-primary"
              >
                {t('contact.sendAnother')}
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative section-padding bg-gradient-to-br from-gray-50 via-indigo-50/20 to-white dark:from-gray-900 dark:via-indigo-900/10 dark:to-gray-800 transition-colors duration-300 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-primary-300/30 to-secondary-300/30 dark:from-primary-300/20 dark:to-secondary-300/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-accent-300/30 to-primary-300/30 dark:from-accent-300/20 dark:to-primary-300/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
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
            {t('contact.title')}
          </motion.span>
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4 lg:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t('contact.subtitle')}
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('contact.description')}
          </motion.p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <AnimatedSection direction="left" delay={0.2}>
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t('contact.info.title')}
              </h3>
              
              <motion.div 
                className="flex items-center space-x-4 p-4 glass-card hover:shadow-lg transition-all duration-300 group" 
                whileHover={{ x: 8, scale: 1.02 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-xl">📧</span>
                </motion.div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">{t('contact.info.emailLabel')}</p>
                  <p className="text-gray-900 dark:text-white font-medium">leninalbino@gmail.com</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-4 p-4 glass-card hover:shadow-lg transition-all duration-300 group" 
                whileHover={{ x: 8, scale: 1.02 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-accent-500 to-primary-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-xl">💼</span>
                </motion.div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/lenin-leonor-albino-chavez-227527209/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                  >
                    Lenin Leonor Albino Chavez
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-4 p-4 glass-card hover:shadow-lg transition-all duration-300 group" 
                whileHover={{ x: 8, scale: 1.02 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-xl">🐱</span>
                </motion.div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">GitHub</p>
                  <a 
                    href="https://github.com/leninalbino"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                  >
                    @leninalbino
                  </a>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Formulario */}
          <AnimatedSection direction="right" delay={0.4}>
            <motion.div 
              className="glass-card p-8 shadow-xl relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-900 dark:text-white font-medium mb-2">
                      {t('contact.form.name')} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder={t('contact.form.name')}
                    />
                    <ValidationError 
                      prefix="Name" 
                      field="name"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-900 dark:text-white font-medium mb-2">
                      {t('contact.form.email')} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder={t('contact.form.email')}
                    />
                    <ValidationError 
                      prefix="Email" 
                      field="email"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-900 dark:text-white font-medium mb-2">
                    {t('contact.form.subject')} *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder={t('contact.form.subject')}
                  />
                </div>

                <div>
                  <label className="block text-gray-900 dark:text-white font-medium mb-2">
                    {t('contact.form.message')} *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                    placeholder={t('contact.form.message')}
                  />
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={state.submitting}
                  className="relative w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center overflow-hidden"
                  whileHover={{ scale: state.submitting ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Loading animation */}
                  {state.submitting && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-600"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                  <span className="relative z-10">
                    {state.submitting ? t('contact.form.sending') : t('contact.form.send')}
                  </span>
                </motion.button>
              </form>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;