import React from 'react';
import { ExperienceItem } from '../../types';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface TimelineItemProps {
  experience: ExperienceItem;
  index: number;
  isLast: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ experience, index, isLast }) => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const isEven = index % 2 === 0;

  return (
    <div 
      ref={ref}
      className={`relative ${!isLast ? 'mb-16' : ''}`}
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-yellow-400 h-full -z-10"></div>
      )}

      {/* Content positioning */}
      <div 
        className={`transition-all duration-700 delay-${index * 100} ${
          isVisible 
            ? 'opacity-100' 
            : 'opacity-0 translate-y-8'
        }`}
      >
        <div className={`flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
          {/* Date bubble */}
          <div className="flex-shrink-0 mb-6 md:mb-0">
            <div className="w-36 md:w-40 h-10 bg-yellow-400 text-black font-semibold rounded-full flex items-center justify-center">
              {experience.period}
            </div>
          </div>

          {/* Center dot */}
          <div className="hidden md:block flex-shrink-0 w-16 relative">
            <div className="w-6 h-6 bg-yellow-400 border-4 border-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          {/* Content card */}
          <div className={`w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md`}>
            <h3 className="text-xl font-bold text-gray-800">{experience.title}</h3>
            <h4 className="text-lg font-medium text-yellow-600 mb-3">{experience.company}</h4>
            <p className="text-gray-600 mb-4">{experience.description}</p>
            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill, idx) => (
                <span 
                  key={idx}
                  className="text-xs px-3 py-1 bg-gray-100 text-gray-800 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;