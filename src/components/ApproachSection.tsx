
import React from 'react';
import { motion } from 'framer-motion';

const ApproachSection = () => {
  const approaches = [
    {
      id: '1',
      title: 'Functional Utility',
      description: 'Designing interfaces that are intuitive, efficient, and solve real problems through careful research and testing.',
      color: 'bg-portfolio-deepblue'
    },
    {
      id: '2',
      title: 'Emotional Intelligence',
      description: 'Creating experiences that connect with users on a deeper level, understanding and responding to emotional needs.',
      color: 'bg-portfolio-periwinkle'
    },
    {
      id: '3',
      title: 'Thoughtful Interactions',
      description: 'Crafting micro-interactions and feedback systems that make interfaces feel responsive and alive.',
      color: 'bg-black'
    }
  ];
  
  return (
    <section className="py-24 bg-gray-50">
      <div className="portfolio-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-3xl mx-auto text-center"
        >
          <h2 className="mb-3">Design Approach</h2>
          <p className="text-lg text-gray-600">
            My work balances functional utility with emotional intelligence, creating experiences that are both effective and engaging.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <motion.div
              key={approach.id}
              className="bg-white p-8 rounded-lg relative shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              data-cursor="pointer"
            >
              <div className={`w-12 h-1 ${approach.color} mb-6`}></div>
              <h3 className="text-xl font-medium mb-4">{approach.title}</h3>
              <p className="text-gray-600">{approach.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
