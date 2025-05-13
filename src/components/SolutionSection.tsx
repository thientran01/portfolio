
import React from 'react';
import { motion } from 'framer-motion';

interface SolutionSectionProps {
  solution: string;
  outcomes: string[];
  images: string[];
  isEmotional?: boolean;
}

const SolutionSection = ({ solution, outcomes, images, isEmotional = false }: SolutionSectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="my-24"
    >
      <h2 className="text-2xl mb-8">The Solution</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
        <div>
          <p className="text-gray-300 mb-8 text-lg">{solution}</p>
          
          <div className={`p-6 rounded-lg border ${
            isEmotional 
              ? 'border-portfolio-periwinkle/20 bg-portfolio-periwinkle/5' 
              : 'border-portfolio-deepblue/20 bg-portfolio-deepblue/5'
          }`}>
            <h3 className="text-lg mb-4 font-mono">Outcomes</h3>
            <ul className="space-y-3">
              {outcomes.map((outcome, index) => (
                <li key={index} className="flex items-start">
                  <div 
                    className={`w-5 h-5 rounded-full mr-3 flex items-center justify-center mt-0.5 flex-shrink-0 ${
                      isEmotional 
                        ? 'bg-portfolio-periwinkle text-white' 
                        : 'bg-portfolio-deepblue text-white'
                    }`}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="space-y-6">
          {images.slice(0, 2).map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <img 
                src={image} 
                alt={`Solution image ${index + 1}`}
                className="w-full rounded-lg shadow-lg"
              />
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* More images if available */}
      {images.length > 2 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {images.slice(2).map((image, index) => (
            <motion.div
              key={index + 2}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <img 
                src={image} 
                alt={`Solution image ${index + 3}`}
                className="w-full rounded-lg shadow-lg"
              />
            </motion.div>
          ))}
        </div>
      )}
    </motion.section>
  );
};

export default SolutionSection;
