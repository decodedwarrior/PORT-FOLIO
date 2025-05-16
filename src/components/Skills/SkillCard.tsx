import React from 'react';
import { SkillItem } from '../../types';

interface SkillCardProps {
  skill: SkillItem;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-gray-800">{skill.name}</h3>
        <span className="text-sm text-gray-500">{skill.level}%</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full">
        <div 
          className="h-2 bg-yellow-400 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillCard;