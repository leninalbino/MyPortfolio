import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import PageLoader from './components/ui/PageLoader';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PageLoader />
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Header />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
