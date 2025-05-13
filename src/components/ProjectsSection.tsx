
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
    <section id="projects" className="py-24">
      <div className="portfolio-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="mb-3">Selected Work</h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            A collection of projects showcasing the balance between functional utility and emotional intelligence.
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
                ? 'bg-portfolio-black text-white' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
            onClick={() => setFilter('all')}
            data-cursor="pointer"
          >
            All Work
          </button>
          <button 
            className={`px-4 py-2 text-sm font-mono rounded-full transition-colors ${
              filter === 'functional' 
                ? 'bg-portfolio-deepblue text-white' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
            onClick={() => setFilter('functional')}
            data-cursor="pointer"
          >
            Functional UX
          </button>
          <button 
            className={`px-4 py-2 text-sm font-mono rounded-full transition-colors ${
              filter === 'emotional' 
                ? 'bg-portfolio-periwinkle text-white' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
            onClick={() => setFilter('emotional')}
            data-cursor="pointer"
          >
            Emotional UX
          </button>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
