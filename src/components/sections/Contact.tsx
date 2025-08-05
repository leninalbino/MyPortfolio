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
    <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
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
              
              <motion.div className="flex items-center space-x-4" whileHover={{ x: 5 }}>
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">{t('contact.info.emailLabel')}</p>
                  <p className="text-gray-900 dark:text-white font-medium">leninalbino@gmail.com</p>
                </div>
              </motion.div>

              <motion.div className="flex items-center space-x-4" whileHover={{ x: 5 }}>
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-xl">💼</span>
                </div>
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

              <motion.div className="flex items-center space-x-4" whileHover={{ x: 5 }}>
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-xl">🐱</span>
                </div>
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
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg">
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
                  className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
                  whileHover={{ scale: state.submitting ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {state.submitting ? t('contact.form.sending') : t('contact.form.send')}
                </motion.button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;