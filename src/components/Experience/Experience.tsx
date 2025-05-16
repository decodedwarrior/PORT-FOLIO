import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import TimelineItem from './TimelineItem';
import { experiences } from '../../data/experience';

const Experience: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section 
      id="experience" 
      className="py-20 bg-gray-50"
      ref={ref}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">My Experience</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-12"></div>
          
          <div className="max-w-5xl mx-auto">
            {experiences.map((experience, index) => (
              <TimelineItem 
                key={index}
                experience={experience}
                index={index}
                isLast={index === experiences.length - 1}
              />
            ))}
          </div>
          
          <div className="text-center mt-16">
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition-colors inline-flex items-center"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;