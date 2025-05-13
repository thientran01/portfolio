
import React, { useEffect } from 'react';
import NavigationSystem from '@/components/NavigationSystem';
import Hero from '@/components/Hero';
import ProjectsSection from '@/components/ProjectsSection';
import ApproachSection from '@/components/ApproachSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = 'UX Portfolio | Balancing Utility with Emotional Intelligence';
  }, []);

  return (
    <div className="min-h-screen">
      <CustomCursor />
      <NavigationSystem />
      <main>
        <Hero />
        <ProjectsSection />
        <ApproachSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
