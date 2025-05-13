
import React from 'react';
import { motion } from 'framer-motion';

interface ProcessStep {
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
  isEmotional?: boolean;
}

const ProcessTimeline = ({ steps, isEmotional = false }: ProcessTimelineProps) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="my-24"
    >
      <h2 className="text-2xl mb-8">Design Process</h2>
      <div className="relative">
        {/* Timeline line */}
        <div 
          className={`absolute left-4 md:left-1/2 transform md:translate-x-0 translate-y-6 w-[2px] h-[calc(100%-2rem)] ${
            isEmotional ? 'bg-portfolio-periwinkle' : 'bg-portfolio-deepblue'
          }`}
        ></div>
        
        {/* Timeline steps */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Circle marker */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className={`absolute left-4 md:left-1/2 transform md:-translate-x-[9px] mt-1 w-5 h-5 rounded-full border-2 ${
                  isEmotional 
                    ? 'bg-portfolio-periwinkle/20 border-portfolio-periwinkle' 
                    : 'bg-portfolio-deepblue/20 border-portfolio-deepblue'
                }`}
              ></motion.div>
              
              {/* Content */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                className={`flex-1 pl-12 md:pl-0 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}
              >
                <h3 className={`text-xl font-medium mb-2 ${
                  isEmotional ? 'text-portfolio-periwinkle' : 'text-portfolio-deepblue'
                }`}>{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
              
              {/* Empty space for alignment */}
              <div className="hidden md:block flex-1"></div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProcessTimeline;
