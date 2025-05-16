import React, { useState } from 'react';
import { ProjectItem } from '../../types';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative bg-white rounded-xl overflow-hidden shadow-lg group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-48 sm:h-56 md:h-64 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-black transition-colors"
            >
              <Github size={18} className="mr-1" />
              <span>Code</span>
            </a>
          )}
          
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-yellow-600 hover:text-yellow-700 transition-colors"
            >
              <ExternalLink size={18} className="mr-1" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
      
      <div 
        className={`absolute top-0 left-0 w-full h-1 bg-yellow-400 transition-transform duration-300 ${
          isHovered ? 'transform-none' : '-translate-x-full'
        }`}
      ></div>
    </div>
  );
};

export default ProjectCard;