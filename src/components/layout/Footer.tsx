const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Sobre mí', href: '#about' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Contacto', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: '🐱', href: 'https://github.com/leninalbino?tab=repositories' },
    { name: 'LinkedIn', icon: '💼', href: 'https://www.linkedin.com/in/lenin-leonor-albino-chavez-227527209/' },
    { name: 'Email', icon: '📧', href: 'mailto:leninalbino@gmail.com' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        {/* Contenido principal del footer */}
        <div className="py-12 grid md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-primary-400 mb-4">
              Lenin
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Desarrollador Full Stack apasionado por crear soluciones digitales 
              innovadoras y experiencias de usuario excepcionales.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                  title={link.name}
                >
                  <span className="text-lg">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-gray-300">
              <p>📧 leninalbino@gmail.com</p>
              <p>📱 +51 932434695</p>
              <p>📍 Lima, Perú</p>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-800"></div>

        {/* Copyright */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Lenin. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
              Términos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;