
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

// Placeholder for project data
const projectsData = [
  {
    id: '1',
    title: 'FixMyBlock App',
    description: 'A community-focused reporting app for neighborhood issues',
    category: 'Functional UX',
    image: 'https://images.unsplash.com/photo-1603899122361-e99b4f8405e0?q=80&w=2874',
    slug: 'fixmyblock',
    isEmotional: false
  },
  {
    id: '2',
    title: 'Emotion Compass',
    description: 'An emotional intelligence tool for self-awareness and reflection',
    category: 'Emotional UX',
    image: 'https://images.unsplash.com/photo-1578091878751-557e3391dbc8?q=80&w=2874',
    slug: 'emotion-compass',
    isEmotional: true
  },
  {
    id: '3',
    title: 'Data Visualization Dashboard',
    description: 'An accessible analytics platform with intuitive data visualizations',
    category: 'Functional UX',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940',
    slug: 'data-viz-dashboard',
    isEmotional: false
  },
  {
    id: '4',
    title: 'Mindful Journal',
    description: 'A reflective journaling app with emotion tracking capabilities',
    category: 'Emotional UX',
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2940',
    slug: 'mindful-journal',
    isEmotional: true
  }
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => 
        filter === 'functional' ? !project.isEmotional : project.isEmotional
      );
  
  return (
    <section id="projects" className="py-24 relative">
      <motion.div
        className="absolute inset-0 bg-gray-950 -z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
      
      <div className="portfolio-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center mb-4">
            <div className="w-8 h-1 bg-portfolio-periwinkle mr-3"></div>
            <p className="font-mono text-portfolio-periwinkle text-sm">FEATURED WORK</p>
          </div>
          <h2 className="mb-3 text-white">The Duality of My Approach</h2>
          <p className="text-lg text-gray-300 max-w-2xl">
            Explore how I balance functional utility with emotional intelligence across different projects.
          </p>
        </motion.div>
        
        <motion.div 
          className="mb-10 flex space-x-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button 
            className={`px-4 py-2 text-sm font-mono rounded-full transition-colors ${
              filter === 'all' 
                ? 'bg-white text-black' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
            onClick={() => setFilter('all')}
            data-cursor="pointer"
          >
            All Work
          </button>
          <motion.button 
            className={`px-4 py-2 text-sm font-mono rounded-full transition-colors ${
              filter === 'functional' 
                ? 'bg-portfolio-deepblue text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
            onClick={() => setFilter('functional')}
            data-cursor="pointer"
            whileHover={filter !== 'functional' ? { 
              backgroundColor: "rgba(27, 44, 193, 0.3)" 
            } : {}}
          >
            Functional UX
          </motion.button>
          <motion.button 
            className={`px-4 py-2 text-sm font-mono rounded-full transition-colors ${
              filter === 'emotional' 
                ? 'bg-portfolio-periwinkle text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
            onClick={() => setFilter('emotional')}
            data-cursor="pointer"
            whileHover={filter !== 'emotional' ? { 
              backgroundColor: "rgba(118, 146, 255, 0.3)" 
            } : {}}
          >
            Emotional UX
          </motion.button>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <ProjectCard {...project} />
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
          <Link to="/work" className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors group" data-cursor="pointer">
            <span className="font-mono">View all projects</span>
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

export default ProjectsSection;
