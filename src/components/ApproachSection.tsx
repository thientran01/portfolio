
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ApproachSection = () => {
  const approaches = [
    {
      id: '1',
      title: 'Functional Utility',
      description: 'Designing interfaces that are intuitive, efficient, and solve real problems through careful research and testing.',
      color: 'bg-portfolio-deepblue',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="24" height="24" rx="2" stroke="#1B2CC1" strokeWidth="2" />
          <line x1="14" y1="16" x2="26" y2="16" stroke="#1B2CC1" strokeWidth="2" />
          <line x1="14" y1="20" x2="26" y2="20" stroke="#1B2CC1" strokeWidth="2" />
          <line x1="14" y1="24" x2="22" y2="24" stroke="#1B2CC1" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: '2',
      title: 'Emotional Intelligence',
      description: 'Creating experiences that connect with users on a deeper level, understanding and responding to emotional needs.',
      color: 'bg-portfolio-periwinkle',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="12" stroke="#7692FF" strokeWidth="2" />
          <path d="M15 20C15 20 16.5 24 20 24C23.5 24 25 20 25 20" stroke="#7692FF" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: '3',
      title: 'Intentional Design',
      description: 'Every detail serves a purpose, crafting experiences where form follows function while maintaining a human touch.',
      color: 'bg-white',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="20" height="20" rx="2" stroke="white" strokeWidth="2" />
          <circle cx="20" cy="20" r="6" stroke="white" strokeWidth="2" />
          <circle cx="20" cy="20" r="2" fill="white" />
        </svg>
      )
    }
  ];
  
  return (
    <section className="py-24 bg-black relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-portfolio-deepblue opacity-10 blur-3xl"></div>
        <div className="absolute -left-20 top-40 w-72 h-72 rounded-full bg-portfolio-periwinkle opacity-5 blur-3xl"></div>
      </div>
      
      <div className="portfolio-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-3xl"
        >
          <div className="flex items-center mb-4">
            <div className="w-8 h-1 bg-portfolio-deepblue mr-3"></div>
            <p className="font-mono text-portfolio-deepblue text-sm">PHILOSOPHY</p>
          </div>
          <h2 className="mb-3 text-white">Design Approach</h2>
          <p className="text-lg text-gray-300">
            My work balances functional utility with emotional intelligence, creating experiences that are both effective and engaging.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <motion.div
              key={approach.id}
              className="bg-gray-900 p-8 rounded-lg relative border border-gray-800 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -5, 
                borderColor: index === 0 ? "#1B2CC1" : index === 1 ? "#7692FF" : "white",
                transition: { duration: 0.2 } 
              }}
              data-cursor="pointer"
            >
              <div className="mb-6">{approach.icon}</div>
              <div className={`w-12 h-0.5 ${approach.color} mb-4`}></div>
              <h3 className="text-xl font-medium mb-4 text-white">{approach.title}</h3>
              <p className="text-gray-400">{approach.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link to="/process" className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors group" data-cursor="pointer">
            <span className="font-mono">Learn more about my process</span>
            <motion.div 
              className="w-6 h-6 rounded-full flex items-center justify-center border border-gray-700 group-hover:border-white"
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ArrowRight size={14} />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ApproachSection;
