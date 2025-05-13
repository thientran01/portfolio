
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [scrolled, setScrolled] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollPercent = Math.min(scrollY / windowHeight, 1);
      setScrolled(scrollPercent);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="h-screen flex items-center relative overflow-hidden">
      <div className="portfolio-container relative z-10">
        <div 
          className="max-w-3xl"
          style={{ 
            transform: `translateY(${scrolled * -50}px)`,
            opacity: 1 - scrolled
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-portfolio-deepblue mb-4">UX Portfolio</p>
          </motion.div>
          
          <motion.h1 
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Balancing <span className="gradient-text">utility</span> with <span className="gradient-text">emotional intelligence</span> in digital design
          </motion.h1>
          
          <motion.p
            className="text-xl mb-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Creating experiences that are both functional and emotionally resonant, 
            with attention to every detail of the user journey.
          </motion.p>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        onClick={scrollToProjects}
        data-cursor="pointer"
      >
        <span className="text-xs font-mono mb-2">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </motion.div>
      
      {/* Subtle decoration items */}
      <div className="absolute top-1/4 right-[10%] w-4 h-4 rounded-full bg-portfolio-periwinkle/20 animate-dot-pulse"></div>
      <div className="absolute bottom-1/3 left-[15%] w-6 h-6 rounded-full bg-portfolio-deepblue/10 animate-dot-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-1/2 left-[5%] w-2 h-2 rounded-full bg-portfolio-periwinkle/30 animate-dot-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;
