import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const LoadingSpinner = ({ size = 'md', className = '' }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8', 
    lg: 'w-12 h-12'
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        className={`${sizeClasses[size]} relative`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        {/* Outer ring */}
        <motion.div
          className="absolute inset-0 border-2 border-primary-500/30 rounded-full"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Inner spinning element */}
        <motion.div
          className="absolute inset-0 border-2 border-transparent border-t-primary-500 border-r-secondary-500 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Center dot */}
        <motion.div
          className="absolute inset-0 m-auto w-1 h-1 bg-accent-500 rounded-full"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
};

export default LoadingSpinner;