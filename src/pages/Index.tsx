
import React, { useEffect } from 'react';
import NavigationSystem from '@/components/NavigationSystem';
import Hero from '@/components/Hero';
import ProjectsSection from '@/components/ProjectsSection';
import ApproachSection from '@/components/ApproachSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import AboutMe from '@/components/AboutMe';
import VisualMotif from '@/components/VisualMotifs';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = 'UX Portfolio | Designing Intuitive & Emotionally Intelligent Experiences';
    
    // Set the background color to black
    document.body.style.backgroundColor = '#000000';
    
    return () => {
      // Reset the background color when the component unmounts
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-black text-white">
      <CustomCursor />
      <NavigationSystem />
      <main>
        <Hero />
        <div className="relative">
          <VisualMotif type="structured" position="top-right" opacity={0.05} />
          <ProjectsSection />
        </div>
        <div className="relative">
          <VisualMotif type="emotional" position="bottom-left" opacity={0.05} />
          <AboutMe />
        </div>
        <div className="relative">
          <VisualMotif type="combined" position="top-right" opacity={0.04} />
          <ApproachSection />
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
