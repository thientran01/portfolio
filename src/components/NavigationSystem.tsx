
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { cn } from "@/lib/utils";

// Navigation items with enhanced metadata
const navigationItems = [
  {
    title: "Work",
    path: "/work",
    description: "Explore my projects and case studies",
    emotion: "curiosity",
    color: "bg-portfolio-periwinkle"
  },
  {
    title: "About",
    path: "/about",
    description: "Learn about my approach and background",
    emotion: "trust",
    color: "bg-portfolio-deepblue"
  },
  {
    title: "Process",
    path: "/process",
    description: "See how I balance utility with emotion",
    emotion: "insight",
    color: "bg-portfolio-periwinkle"
  },
  {
    title: "Contact",
    path: "/contact",
    description: "Let's start a conversation",
    emotion: "connection",
    color: "bg-portfolio-deepblue"
  }
];

const NavigationSystem = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect for the header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track mouse position for interactive elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Close navigation when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node) && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Handle navigation toggle
  const toggleNavigation = () => {
    setIsOpen(!isOpen);
    setActiveIndex(null);
  };

  // Handle hover effects
  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <header 
      ref={navRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300", 
        isScrolled ? 'py-3 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm' : 'py-6',
        isOpen ? 'h-screen bg-white' : ''
      )}
    >
      <div className="portfolio-container flex items-center justify-between">
        <Link to="/" className="font-mono text-xl font-bold z-20" data-cursor="pointer" onClick={() => setIsOpen(false)}>
          <span className="text-portfolio-black">UX</span>
          <span className="text-portfolio-deepblue">Portfolio</span>
        </Link>
        
        <button 
          className="text-portfolio-black z-20 transition-all duration-300 hover:text-portfolio-deepblue" 
          onClick={toggleNavigation}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          data-cursor="pointer"
        >
          {isOpen ? (
            <X size={24} className="transition-all duration-300 transform hover:rotate-90" />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 z-10 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <motion.div 
              className="absolute top-0 left-0 right-0 bottom-0 bg-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            
            <div className="portfolio-container relative z-20 flex flex-col items-center w-full">
              <div className="w-full max-w-lg py-20">
                <nav className="flex flex-col space-y-2">
                  {navigationItems.map((item, index) => (
                    <motion.div 
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="relative"
                      onMouseEnter={() => handleItemHover(index)}
                      onMouseLeave={() => setActiveIndex(null)}
                    >
                      <Link 
                        to={item.path} 
                        className="group flex items-center py-4 w-full"
                        data-cursor="pointer"
                        onClick={toggleNavigation}
                      >
                        <div className="mr-4 relative">
                          <motion.div 
                            className={`w-3 h-3 rounded-full ${activeIndex === index ? item.color : 'bg-gray-200'} transition-all duration-300`}
                            animate={{ 
                              scale: activeIndex === index ? 1.2 : 1
                            }}
                          />
                        </div>
                        
                        <div className="flex flex-col">
                          <div className="flex items-center">
                            <span className="text-2xl font-medium transition-all duration-300 group-hover:text-portfolio-deepblue">
                              {item.title}
                            </span>
                            <motion.div
                              animate={{ x: activeIndex === index ? 5 : 0 }}
                              transition={{ duration: 0.3 }}
                              className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <ChevronRight size={18} className="text-portfolio-deepblue" />
                            </motion.div>
                          </div>
                          
                          <motion.p 
                            className="text-sm text-gray-500 mt-1 max-w-sm"
                            animate={{ 
                              opacity: activeIndex === index ? 1 : 0.5,
                              x: activeIndex === index ? 5 : 0
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            {item.description}
                          </motion.p>
                          
                          <motion.div 
                            className="absolute bottom-0 left-0 h-[1px] bg-portfolio-deepblue"
                            initial={{ width: 0 }}
                            animate={{ width: activeIndex === index ? '100%' : 0 }}
                            transition={{ duration: 0.4 }}
                          />
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-16 text-center"
                >
                  <p className="text-sm text-gray-500 max-w-sm mx-auto">
                    <span className="block font-medium text-portfolio-black mb-2">Design Philosophy:</span> 
                    Creating experiences that balance utility with emotional intelligence,
                    always keeping the user's needs at the center.
                  </p>
                </motion.div>
              </div>
            </div>
            
            {/* Interactive background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div 
                className="absolute w-64 h-64 rounded-full bg-portfolio-periwinkle/5 blur-3xl"
                animate={{ 
                  x: mousePosition.x * 0.02, 
                  y: mousePosition.y * 0.02 
                }}
                transition={{ type: "spring", damping: 50 }}
              />
              <motion.div 
                className="absolute w-96 h-96 rounded-full bg-portfolio-deepblue/5 blur-3xl right-[10%] top-[30%]"
                animate={{ 
                  x: -mousePosition.x * 0.01, 
                  y: -mousePosition.y * 0.01 
                }}
                transition={{ type: "spring", damping: 50 }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavigationSystem;
