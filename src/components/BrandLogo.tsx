
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
}

const BrandLogo = ({ size = 'md', animated = true }: BrandLogoProps) => {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-10 w-10',
    lg: 'h-14 w-14',
    xl: 'h-20 w-20'
  };
  
  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl'
  };

  return (
    <Link to="/" className="inline-flex items-center gap-3" data-cursor="pointer">
      {animated ? (
        <motion.div 
          className={`relative ${sizeClasses[size]}`}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {/* The logo consists of two geometric shapes representing structure and emotion */}
          <div className="absolute inset-0">
            <svg viewBox="0 0 40 40" className="w-full h-full">
              {/* Square representing structure/utility (FixMyBlock) */}
              <motion.rect 
                x="6" y="6" 
                width="28" height="28" 
                rx="2"
                fill="none"
                stroke="#1B2CC1"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              
              {/* Circle representing emotion/empathy (Emotion Compass) */}
              <motion.circle 
                cx="20" cy="20" 
                r="12" 
                fill="none"
                stroke="#7692FF"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
              />
            </svg>
          </div>
          
          {/* Pulse effect */}
          <motion.div 
            className="absolute inset-0 opacity-20 bg-portfolio-periwinkle rounded-full"
            animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      ) : (
        <div className={`relative ${sizeClasses[size]}`}>
          <svg viewBox="0 0 40 40" className="w-full h-full">
            <rect x="6" y="6" width="28" height="28" rx="2" fill="none" stroke="#1B2CC1" strokeWidth="2" />
            <circle cx="20" cy="20" r="12" fill="none" stroke="#7692FF" strokeWidth="2" />
          </svg>
        </div>
      )}
      <div className={`font-mono font-bold ${textSizeClasses[size]}`}>
        <span className="text-portfolio-black">UX</span>
        <span className="text-portfolio-deepblue">Portfolio</span>
      </div>
    </Link>
  );
};

export default BrandLogo;
