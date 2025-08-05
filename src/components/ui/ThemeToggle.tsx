import { useTheme } from '../../contexts/ThemeContext';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-8 bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {/* Toggle switch */}
      <motion.div
        className="w-6 h-6 bg-white dark:bg-gray-200 rounded-full shadow-md flex items-center justify-center text-sm"
        animate={{
          x: theme === 'dark' ? 24 : 0,
        }}
        transition={{ 
          type: "spring", 
          stiffness: 500, 
          damping: 30 
        }}
      >
        <motion.span
          initial={false}
          animate={{ 
            rotate: theme === 'dark' ? 360 : 0,
            scale: theme === 'dark' ? 1 : 1.1
          }}
          transition={{ duration: 0.3 }}
        >
          {theme === 'dark' ? '🌙' : '☀️'}
        </motion.span>
      </motion.div>
      
      {/* Background track */}
      <div className="absolute inset-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 dark:from-blue-600 dark:to-purple-600 opacity-0 dark:opacity-20 transition-opacity duration-300" />
    </motion.button>
  );
};

export default ThemeToggle;