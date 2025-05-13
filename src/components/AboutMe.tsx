
import React from 'react';
import { motion } from 'framer-motion';
import { Building, Compass, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="portfolio-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span className="inline-block font-mono text-sm text-portfolio-periwinkle mb-2">About Me</span>
          <h2 className="text-4xl md:text-5xl font-medium mb-6">Balancing utility with <span className="gradient-text">emotional intelligence</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Profile Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="relative w-48 h-48 mb-8">
              {/* Profile Image Placeholder - Replace with your actual image */}
              <div className="w-full h-full rounded-full bg-gradient-to-br from-portfolio-deepblue to-portfolio-periwinkle overflow-hidden">
                {/* Replace this with your actual image */}
                <div className="w-full h-full bg-black/40 flex items-center justify-center text-white">
                  Your Photo
                </div>
              </div>
              
              {/* Animated decorative elements */}
              <motion.div 
                className="absolute -z-10 w-48 h-48 rounded-full border-2 border-dashed border-portfolio-deepblue"
                style={{ top: '10px', left: '10px' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />
            </div>
            
            <div className="prose prose-lg prose-invert">
              <p>I'm a UX designer focused on creating experiences that balance utility with emotional intelligence. My work spans from functional problem-solving to emotionally-aware interfaces.</p>
              <p>With a background in both design and psychology, I approach each project with a unique perspective that considers both the practical needs and emotional responses of users.</p>
            </div>
            
            <Link to="/contact" className="inline-flex items-center gap-2 text-portfolio-periwinkle hover:text-white transition-colors" data-cursor="pointer">
              <span>Get in touch</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>
          
          {/* My Approach */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-medium">My Dual Approach</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Utility Card */}
              <div className="p-6 border border-portfolio-deepblue/20 rounded-lg hover:border-portfolio-deepblue/40 transition-colors duration-300">
                <div className="w-10 h-10 rounded-full bg-portfolio-deepblue/10 flex items-center justify-center text-portfolio-deepblue mb-4">
                  <Building size={20} />
                </div>
                <h4 className="text-lg font-medium mb-2 text-portfolio-deepblue">Utility Focus</h4>
                <p className="text-sm text-gray-300">Crafting functional interfaces that solve real problems efficiently, like my work on FixMyBlock.</p>
              </div>
              
              {/* Emotional Card */}
              <div className="p-6 border border-portfolio-periwinkle/20 rounded-lg hover:border-portfolio-periwinkle/40 transition-colors duration-300">
                <div className="w-10 h-10 rounded-full bg-portfolio-periwinkle/10 flex items-center justify-center text-portfolio-periwinkle mb-4">
                  <Compass size={20} />
                </div>
                <h4 className="text-lg font-medium mb-2 text-portfolio-periwinkle">Emotional Intelligence</h4>
                <p className="text-sm text-gray-300">Designing interfaces that connect emotionally with users, as seen in my Emotion Compass project.</p>
              </div>
            </div>
            
            <div className="bg-black/30 p-6 rounded-lg border border-gray-800">
              <h4 className="font-mono text-sm font-bold mb-2">Skills & Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {['UX Research', 'UI Design', 'Prototyping', 'User Testing', 'Information Architecture', 'Design Systems', 'Emotional Design'].map((skill, i) => (
                  <span key={i} className="inline-block text-xs font-mono px-2 py-1 rounded bg-gray-800 text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Visual motif that subtly references structure and emotion */}
        <div className="absolute -z-10 bottom-0 right-0 w-80 h-80 opacity-10">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#1B2CC1"
              d="M43.5,-62.8C56.9,-53.8,68.5,-40.8,74.8,-25.4C81.1,-10,82.1,7.9,76.9,23.6C71.8,39.3,60.4,52.9,46.4,61.9C32.4,71,15.7,75.4,-0.3,75.8C-16.3,76.2,-32.5,72.6,-46.2,64.1C-59.8,55.6,-70.9,42.3,-76.2,26.9C-81.5,11.5,-81.1,-5.9,-75.5,-21.1C-69.9,-36.2,-59.2,-49.2,-46,-58.9C-32.8,-68.5,-16.4,-75,0,-75C16.3,-75,30.1,-71.9,43.5,-62.8Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
