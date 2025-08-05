import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí manejarías el envío del formulario
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-primary-400 font-semibold text-lg">Contacto</span>
          <h2 className="text-4xl font-bold text-white mt-2 mb-4">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Estoy siempre interesado en nuevos desafíos y oportunidades. 
            ¡Hablemos sobre tu próximo proyecto!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">📧</span>
                  </div>
                  <div>
                    <p className="text-gray-300">Email</p>
                    <p className="text-white font-medium">leninalbino@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">📱</span>
                  </div>
                  <div>
                    <p className="text-gray-300">Teléfono</p>
                    <p className="text-white font-medium">+51 932434695</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <p className="text-gray-300">Ubicación</p>
                    <p className="text-white font-medium">Lima, Perú</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Redes sociales */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Sígueme</h4>
              <div className="flex space-x-4">
                {[
                  { name: 'GitHub', icon: '🐱', href: 'https://github.com/leninalbino?tab=repositories' },
                  { name: 'LinkedIn', icon: '💼', href: 'https://www.linkedin.com/in/lenin-leonor-albino-chavez-227527209/' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                  >
                    <span className="text-xl">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-gray-800 p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all"
                  placeholder="Asunto del mensaje"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;