
import React from 'react';
import { motion } from 'framer-motion';

interface InsightCardProps {
  title: string;
  description: string;
  icon?: string;
  isEmotional?: boolean;
  index: number;
}

const InsightCard = ({ title, description, icon, isEmotional = false, index }: InsightCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`p-6 rounded-lg border ${
        isEmotional 
          ? 'border-portfolio-periwinkle/20 hover:border-portfolio-periwinkle/40' 
          : 'border-portfolio-deepblue/20 hover:border-portfolio-deepblue/40'
      } transition-colors duration-300`}
    >
      {icon && (
        <div className="mb-4">
          <div 
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              isEmotional 
                ? 'bg-portfolio-periwinkle/10 text-portfolio-periwinkle' 
                : 'bg-portfolio-deepblue/10 text-portfolio-deepblue'
            }`}
          >
            <span className="text-xl">{icon}</span>
          </div>
        </div>
      )}
      <h3 className={`text-lg font-medium mb-2 ${
        isEmotional ? 'text-portfolio-periwinkle' : 'text-portfolio-deepblue'
      }`}>
        {title}
      </h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </motion.div>
  );
};

export default InsightCard;
