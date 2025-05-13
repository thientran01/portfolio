
import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom'; 

const Hero = () => {
  const [scrolled, setScrolled] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
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
    <section ref={heroRef} className="h-screen flex items-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-portfolio-deepblue opacity-5 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-portfolio-periwinkle opacity-5 blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.08, 0.05, 0.08],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
      </div>
      
      <div className="portfolio-container relative z-10">
        <motion.div
          style={{ y: textY, opacity }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center">
              <div className="w-10 h-1 bg-portfolio-deepblue mr-3"></div>
              <p className="font-mono text-portfolio-deepblue">UX Designer</p>
            </div>
          </motion.div>
          
          <motion.h1 
            className="my-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Designing <span className="gradient-text">scalable systems</span> that make technology feel <span className="gradient-text">intuitive, inclusive, and intentional</span>
          </motion.h1>
          
          <motion.p
            className="text-xl mb-8 max-w-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Balancing functional utility with emotional intelligence to create experiences that 
            resonate with users on multiple levels.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <motion.div 
              className="group flex items-center gap-3 py-2 px-4 border border-portfolio-deepblue rounded-full cursor-pointer transition-all"
              whileHover={{ 
                backgroundColor: "rgba(27, 44, 193, 0.1)",
                transition: { duration: 0.2 }
              }}
              data-cursor="pointer"
              onClick={scrollToProjects}
            >
              <span className="font-mono text-sm">View my work</span>
              <motion.div 
                className="w-6 h-6 rounded-full flex items-center justify-center bg-portfolio-deepblue"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ArrowDown size={14} className="text-white" />
              </motion.div>
            </motion.div>
            
            <Link to="/process" className="group flex items-center gap-3 py-2 px-4 border border-gray-700 rounded-full cursor-pointer transition-all hover:border-portfolio-periwinkle" data-cursor="pointer">
              <span className="font-mono text-sm">My design process</span>
              <motion.div 
                className="w-6 h-6 rounded-full flex items-center justify-center border border-gray-700 group-hover:border-portfolio-periwinkle group-hover:bg-portfolio-periwinkle/10"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ArrowRight size={14} />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
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
        <span className="text-xs font-mono mb-2 text-gray-400">Scroll to explore</span>
        <motion.div
          animate={{ 
            y: [0, 5, 0],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            repeatType: "loop" 
          }}
        >
          <ArrowDown size={16} className="text-gray-400" />
        </motion.div>
      </motion.div>
      
      {/* Distinctive grid pattern in background */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="brand-grid-bg h-full w-full"></div>
      </div>
    </section>
  );
};

export default Hero;
