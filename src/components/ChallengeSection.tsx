
import React from 'react';
import { motion } from 'framer-motion';

interface ChallengeSectionProps {
  challenge: string;
  researchMethods: string[];
  insights: string[];
  isEmotional?: boolean;
}

const ChallengeSection = ({ challenge, researchMethods, insights, isEmotional = false }: ChallengeSectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="my-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl mb-4">The Challenge</h2>
          <p className="text-gray-300 mb-8 text-lg">{challenge}</p>
          
          <h3 className="text-xl mb-3">Insights & Learnings</h3>
          <ul className="space-y-4 mb-8">
            {insights.map((insight, index) => (
              <li key={index} className="flex">
                <span 
                  className={`inline-block w-6 h-6 rounded-full mr-3 flex items-center justify-center text-xs ${
                    isEmotional 
                      ? 'bg-portfolio-periwinkle text-white' 
                      : 'bg-portfolio-deepblue text-white'
                  }`}
                >
                  {index + 1}
                </span>
                <span className="text-gray-300">{insight}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <div className={`p-6 rounded-lg border ${
            isEmotional 
              ? 'border-portfolio-periwinkle/20 bg-portfolio-periwinkle/5' 
              : 'border-portfolio-deepblue/20 bg-portfolio-deepblue/5'
          }`}>
            <h3 className="text-lg mb-4 font-mono">Research Methods</h3>
            <ul className="space-y-2">
              {researchMethods.map((method, index) => (
                <li key={index} className="flex items-center">
                  <div 
                    className={`w-2 h-2 rounded-full mr-3 ${
                      isEmotional ? 'bg-portfolio-periwinkle' : 'bg-portfolio-deepblue'
                    }`}
                  ></div>
                  <span>{method}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ChallengeSection;
