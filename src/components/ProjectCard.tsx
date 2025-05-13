
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  slug: string;
  isEmotional?: boolean;
}

const ProjectCard = ({ id, title, description, category, image, slug, isEmotional = false }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group hover-card rounded-lg overflow-hidden bg-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: parseInt(id) * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-cursor="pointer"
    >
      <Link to={`/project/${slug}`}>
        <div className="relative overflow-hidden aspect-[4/3]">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          />
          <div className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-300 ${
            isEmotional 
              ? 'from-portfolio-periwinkle/30 to-transparent' 
              : 'from-portfolio-deepblue/30 to-transparent'
          } opacity-0 group-hover:opacity-100`}></div>
        </div>
        <div className="p-5">
          <div className="mb-2">
            <span className={`inline-block text-xs font-mono px-2 py-1 rounded ${
              isEmotional 
                ? 'bg-portfolio-periwinkle/10 text-portfolio-periwinkle' 
                : 'bg-portfolio-deepblue/10 text-portfolio-deepblue'
            }`}>
              {category}
            </span>
          </div>
          <h3 className="text-xl font-medium mb-2">{title}</h3>
          <p className="text-sm text-gray-600 mb-4">{description}</p>
          <div className="flex items-center text-sm font-medium">
            <span className={`transition-colors duration-300 ${
              isHovered ? (isEmotional ? 'text-portfolio-periwinkle' : 'text-portfolio-deepblue') : 'text-black'
            }`}>
              View Project
            </span>
            <ArrowRight 
              size={16} 
              className={`ml-2 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''} ${
                isHovered ? (isEmotional ? 'text-portfolio-periwinkle' : 'text-portfolio-deepblue') : 'text-black'
              }`} 
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
