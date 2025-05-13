
import React from 'react';
import { motion } from 'framer-motion';

interface CaseStudyHeaderProps {
  title: string;
  category: string;
  image: string;
  isEmotional?: boolean;
}

const CaseStudyHeader = ({ title, category, image, isEmotional = false }: CaseStudyHeaderProps) => {
  return (
    <div className="relative w-full">
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="portfolio-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-3">
                <span className={`inline-block text-sm font-mono px-3 py-1 rounded ${
                  isEmotional 
                    ? 'bg-portfolio-periwinkle/10 text-portfolio-periwinkle' 
                    : 'bg-portfolio-deepblue/10 text-portfolio-deepblue'
                }`}>
                  {category}
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-medium max-w-3xl">{title}</h1>
            </motion.div>
          </div>
        </div>
      </div>
      <div className={`h-2 w-full ${isEmotional ? 'bg-portfolio-periwinkle' : 'bg-portfolio-deepblue'}`}></div>
    </div>
  );
};

export default CaseStudyHeader;
