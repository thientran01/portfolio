
import React from 'react';
import { motion } from 'framer-motion';

interface VisualMotifProps {
  type: 'structured' | 'emotional' | 'combined';
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  size?: 'sm' | 'md' | 'lg';
  opacity?: number;
  animated?: boolean;
}

const VisualMotif = ({ 
  type, 
  position = 'top-right', 
  size = 'md',
  opacity = 0.1,
  animated = true 
}: VisualMotifProps) => {
  // Size classes
  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-64 h-64',
    lg: 'w-96 h-96'
  };
  
  // Position classes
  const positionClasses = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0'
  };
  
  const renderMotif = () => {
    switch(type) {
      case 'structured':
        return (
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {animated ? (
              <motion.g
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <motion.rect 
                  x="20" y="20" 
                  width="60" height="60" 
                  stroke="#1B2CC1" 
                  strokeWidth="2" 
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                <motion.rect 
                  x="30" y="30" 
                  width="40" height="40" 
                  stroke="#1B2CC1" 
                  strokeWidth="1.5" 
                  fill="none" 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                />
                <motion.rect 
                  x="40" y="40" 
                  width="20" height="20" 
                  stroke="#1B2CC1" 
                  strokeWidth="1" 
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
                />
              </motion.g>
            ) : (
              <>
                <rect x="20" y="20" width="60" height="60" stroke="#1B2CC1" strokeWidth="2" fill="none" />
                <rect x="30" y="30" width="40" height="40" stroke="#1B2CC1" strokeWidth="1.5" fill="none" />
                <rect x="40" y="40" width="20" height="20" stroke="#1B2CC1" strokeWidth="1" fill="none" />
              </>
            )}
          </svg>
        );
        
      case 'emotional':
        return (
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {animated ? (
              <motion.g
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <motion.path
                  d="M50,20 
                     C70,20 80,35 80,50 
                     C80,65 70,80 50,80 
                     C30,80 20,65 20,50 
                     C20,35 30,20 50,20 Z"
                  stroke="#7692FF"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                />
                <motion.circle 
                  cx="50" cy="50" r="15" 
                  stroke="#7692FF" 
                  strokeWidth="1.5" 
                  fill="none"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
                />
              </motion.g>
            ) : (
              <>
                <path
                  d="M50,20 C70,20 80,35 80,50 C80,65 70,80 50,80 C30,80 20,65 20,50 C20,35 30,20 50,20 Z"
                  stroke="#7692FF"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="50" cy="50" r="15" stroke="#7692FF" strokeWidth="1.5" fill="none" />
              </>
            )}
          </svg>
        );
        
      case 'combined':
        return (
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {animated ? (
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <motion.rect 
                  x="25" y="25" 
                  width="50" height="50" 
                  stroke="#1B2CC1" 
                  strokeWidth="2" 
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                <motion.circle 
                  cx="50" cy="50" r="25" 
                  stroke="#7692FF" 
                  strokeWidth="2" 
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                />
                <motion.path 
                  d="M50,35 L50,65 M35,50 L65,50" 
                  stroke="#1B2CC1" 
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1.5, ease: "easeInOut" }}
                />
              </motion.g>
            ) : (
              <>
                <rect x="25" y="25" width="50" height="50" stroke="#1B2CC1" strokeWidth="2" fill="none" />
                <circle cx="50" cy="50" r="25" stroke="#7692FF" strokeWidth="2" fill="none" />
                <path d="M50,35 L50,65 M35,50 L65,50" stroke="#1B2CC1" strokeWidth="1.5" />
              </>
            )}
          </svg>
        );
        
      default:
        return null;
    }
  };
  
  return (
    <div 
      className={`absolute ${positionClasses[position]} ${sizeClasses[size]}`}
      style={{ opacity }}
    >
      {renderMotif()}
    </div>
  );
};

export default VisualMotif;
