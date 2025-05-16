import React, { useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import SkillCard from './SkillCard';
import { skills } from '../../data/skills';

type SkillCategory = 'all' | 'frontend' | 'backend' | 'design' | 'other';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const categories: { key: SkillCategory; label: string }[] = [
    { key: 'all', label: 'All Skills' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'design', label: 'Design' },
    { key: 'other', label: 'Other' },
  ];

  return (
    <section 
      id="skills" 
      className="py-20 bg-white"
      ref={ref}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-12"></div>
          
          <div className="flex justify-center mb-10 flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.key
                    ? 'bg-yellow-400 text-black'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredSkills.map((skill, index) => (
              <div
                key={skill.name}
                className={`transition-all duration-500 delay-${index % 4 * 100}`}
              >
                <SkillCard skill={skill} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;