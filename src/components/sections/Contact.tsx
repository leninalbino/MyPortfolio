import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';

const Contact = () => {
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
                ¡Mensaje enviado!
              </h2>
              <p className="text-gray-300 mb-6">
                Gracias por contactarme. Te responderé lo antes posible.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="btn-primary"
              >
                Enviar otro mensaje
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding bg-gray-900">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary-400 font-semibold text-lg">Contacto</span>
          <h2 className="text-4xl font-bold text-white mt-2 mb-4">
            ¡Trabajemos juntos!
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría conocer más detalles.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <AnimatedSection direction="left" delay={0.2}>
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Información de contacto
              </h3>
              
              <motion.div className="flex items-center space-x-4" whileHover={{ x: 5 }}>
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="text-white font-medium">leninalbino@gmail.com</p>
                </div>
              </motion.div>

              <motion.div className="flex items-center space-x-4" whileHover={{ x: 5 }}>
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-xl">💼</span>
                </div>
                <div>
                  <p className="text-gray-400">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/lenin-leonor-albino-chavez-227527209/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-400 hover:text-primary-300 transition-colors"
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
                  <p className="text-gray-400">GitHub</p>
                  <a 
                    href="https://github.com/leninalbino"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    @leninalbino
                  </a>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Formulario */}
          <AnimatedSection direction="right" delay={0.4}>
            <div className="bg-gray-800 p-8 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all"
                      placeholder="Tu nombre completo"
                    />
                    <ValidationError 
                      prefix="Name" 
                      field="name"
                      errors={state.errors}
                      className="text-red-400 text-sm mt-1"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all"
                      placeholder="tu@email.com"
                    />
                    <ValidationError 
                      prefix="Email" 
                      field="email"
                      errors={state.errors}
                      className="text-red-400 text-sm mt-1"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Asunto *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all"
                    placeholder="¿De qué se trata tu proyecto?"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-1"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
                  whileHover={{ scale: state.submitting ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {state.submitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Enviando...
                    </>
                  ) : (
                    'Enviar Mensaje'
                  )}
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