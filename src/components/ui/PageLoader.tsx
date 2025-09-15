import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState('');

  useEffect(() => {
    const loadingSteps = [
      'Iniciando...',
      'Cargando proyectos...',
      'Configurando diseño...',
      '¡Casi listo!'
    ];
    
    let stepIndex = 0;
    
    const textInterval = setInterval(() => {
      if (stepIndex < loadingSteps.length) {
        setLoadingText(loadingSteps[stepIndex]);
        stepIndex++;
      }
    }, 600);

    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
      clearInterval(textInterval);
    }, 2500);

    return () => {
      clearTimeout(loadingTimeout);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.1,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
        >
          {/* Animated background pattern */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary-300/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -50, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="text-center relative z-10">
            {/* Logo animation */}
            <motion.div
              className="mb-8"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.div
                className="w-20 h-20 mx-auto bg-gradient-to-br from-primary-500 via-accent-500 to-secondary-500 rounded-2xl flex items-center justify-center shadow-2xl"
                animate={{
                  rotateY: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotateY: { duration: 2, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity }
                }}
              >
                <span className="text-white font-bold text-3xl">L</span>
              </motion.div>
            </motion.div>

            {/* Loading spinner */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="w-16 h-16 mx-auto relative"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <motion.div
                  className="absolute inset-0 border-4 border-primary-200 dark:border-primary-800 rounded-full"
                />
                <motion.div
                  className="absolute inset-0 border-4 border-transparent border-t-primary-500 border-r-secondary-500 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            </motion.div>

            {/* Loading text */}
            <motion.div
              className="h-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={loadingText}
                  className="text-lg font-medium gradient-text"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {loadingText}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            {/* Progress dots */}
            <motion.div
              className="flex justify-center space-x-2 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-primary-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;