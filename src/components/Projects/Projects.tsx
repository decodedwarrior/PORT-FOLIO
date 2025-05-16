import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/projects';

const Projects: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section 
      id="projects" 
      className="py-20 bg-gray-50"
      ref={ref}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`transition-all duration-700 delay-${index % 3 * 150}`}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">These are just a few examples of my work. Interested in seeing more?</p>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition-colors"
            >
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;