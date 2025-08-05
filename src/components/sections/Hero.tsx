import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Desarrollador Full Stack';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          y: [-10, 10, -10],
          transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          y: [10, -10, 10],
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }
        }}
      />
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.1
            }}
          >
            <motion.div 
              className="w-32 h-32 bg-gradient-to-r from-primary-500 to-blue-600 rounded-full mx-auto mb-8 flex items-center justify-center text-white text-4xl font-bold shadow-xl"
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              LA
            </motion.div>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Hola, soy{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-blue-600">
              Lenin Albino
            </span>
          </motion.h1>
          
          <motion.div 
            className="text-2xl md:text-3xl text-gray-600 mb-8 h-12"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {displayText}
            <motion.span 
              className="inline-block"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              |
            </motion.span>
          </motion.div>
          
          <motion.p 
            className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Transformando ideas en soluciones digitales robustas con Angular, React, TypeScript, 
            Python, C#, Java y experiencia en múltiples bases de datos.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.a 
              href="#projects" 
              className="btn-primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Proyectos
            </motion.a>
            <motion.a 
              href="#contact" 
              className="btn-secondary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contactarme
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0
        }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center cursor-pointer"
          animate={{
            y: [0, 10, 0],
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          whileHover={{ scale: 1.1 }}
        >
          <motion.div 
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            animate={{
              opacity: [1, 0.3, 1],
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;