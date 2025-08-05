import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'Sobre mí' },
    { href: '#projects', label: 'Proyectos' },
    { href: '#skills', label: 'Habilidades' },
    { href: '#contact', label: 'Contacto' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-primary-600">
            Lenin
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-5 relative">
              <span className={`block absolute h-0.5 w-6 bg-gray-700 transform transition duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : 'translate-y-0'
              }`} />
              <span className={`block absolute h-0.5 w-6 bg-gray-700 transform transition duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'translate-y-2'
              }`} />
              <span className={`block absolute h-0.5 w-6 bg-gray-700 transform transition duration-300 ${
                isMobileMenuOpen ? '-rotate-45 translate-y-2' : 'translate-y-4'
              }`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;