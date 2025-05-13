
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import NavigationSystem from '@/components/NavigationSystem';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import CaseStudyHeader from '@/components/CaseStudyHeader';
import ProcessTimeline from '@/components/ProcessTimeline';
import ChallengeSection from '@/components/ChallengeSection';
import SolutionSection from '@/components/SolutionSection';
import InsightCard from '@/components/InsightCard';
import DataVisualization from '@/components/DataVisualization';
import { getCaseStudyData } from '@/data/caseStudies';

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = getCaseStudyData(slug || '');
  
  useEffect(() => {
    if (caseStudy) {
      document.title = `${caseStudy.title} | UX Portfolio`;
      // Scroll to top when case study loads
      window.scrollTo(0, 0);
    }
  }, [caseStudy]);
  
  if (!caseStudy) {
    return (
      <div className="min-h-screen flex flex-col">
        <CustomCursor />
        <NavigationSystem />
        <main className="flex-grow flex items-center justify-center">
          <div className="portfolio-container py-24 text-center">
            <h1 className="text-7xl font-bold mb-6">404</h1>
            <p className="text-xl mb-8">Case study not found.</p>
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-portfolio-deepblue hover:text-portfolio-periwinkle transition-colors"
              data-cursor="pointer"
            >
              <ArrowLeft size={16} />
              <span>Return to projects</span>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <CustomCursor />
      <NavigationSystem />
      <main className="flex-grow">
        <CaseStudyHeader 
          title={caseStudy.title}
          category={caseStudy.category}
          image={caseStudy.heroImage}
          isEmotional={caseStudy.isEmotional}
        />
        
        <div className="portfolio-container py-16">
          {/* Back to projects link */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              data-cursor="pointer"
            >
              <ArrowLeft size={16} />
              <span>Back to all projects</span>
            </Link>
          </motion.div>
          
          {/* Project overview */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="lg:col-span-2">
              <h2 className="text-2xl mb-4">Project Overview</h2>
              <p className="text-gray-300 mb-4">{caseStudy.overview}</p>
              {caseStudy.externalLink && (
                <a 
                  href={caseStudy.externalLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-portfolio-periwinkle hover:text-white transition-colors"
                  data-cursor="pointer"
                >
                  <span>View live project</span>
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
            <div>
              <div className="bg-black/30 p-6 rounded-lg border border-gray-800">
                <h3 className="text-lg mb-4 font-mono">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400 text-sm">Timeline</p>
                    <p>{caseStudy.timeline}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">My Role</p>
                    <p>{caseStudy.role}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Tools Used</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {caseStudy.tools.map((tool, i) => (
                        <span 
                          key={i} 
                          className="inline-block text-xs font-mono px-2 py-1 rounded bg-gray-800 text-gray-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Process timeline */}
          <ProcessTimeline 
            steps={caseStudy.process} 
            isEmotional={caseStudy.isEmotional}
          />
          
          {/* Challenge section */}
          <ChallengeSection 
            challenge={caseStudy.challenge}
            researchMethods={caseStudy.researchMethods}
            insights={caseStudy.insights}
            isEmotional={caseStudy.isEmotional}
          />
          
          {/* Key insights */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="my-24"
          >
            <h2 className="text-2xl mb-8">Key Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudy.keyInsights.map((insight, index) => (
                <InsightCard 
                  key={index}
                  title={insight.title}
                  description={insight.description}
                  icon={insight.icon}
                  isEmotional={caseStudy.isEmotional}
                  index={index}
                />
              ))}
            </div>
          </motion.section>
          
          {/* Data visualization (only if available) */}
          {caseStudy.dataPoints && caseStudy.dataPoints.length > 0 && (
            <DataVisualization 
              title={caseStudy.dataTitle || 'Research Results'}
              data={caseStudy.dataPoints}
              isEmotional={caseStudy.isEmotional}
            />
          )}
          
          {/* Solution section */}
          <SolutionSection 
            solution={caseStudy.solution}
            outcomes={caseStudy.outcomes}
            images={caseStudy.solutionImages}
            isEmotional={caseStudy.isEmotional}
          />
          
          {/* Next project */}
          {caseStudy.nextProject && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-32 mb-16 text-center"
            >
              <p className="text-gray-400 mb-2">Next Case Study</p>
              <Link
                to={`/project/${caseStudy.nextProject.slug}`}
                className="group inline-flex flex-col items-center"
                data-cursor="pointer"
              >
                <h3 className="text-2xl mb-2 transition-colors group-hover:text-portfolio-periwinkle">
                  {caseStudy.nextProject.title}
                </h3>
                <div className="inline-flex items-center space-x-2">
                  <span className="text-gray-300 group-hover:text-white transition-colors">View case study</span>
                  <ArrowLeft size={16} className="rotate-180 transform transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudy;
