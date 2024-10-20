import React from 'react';
import { SkillBars } from '../lib/portfo';

const Proficiency = () => {
  if (!SkillBars || SkillBars.length === 0) {
    return null;
  }

  return (
    <div className="container mx-auto my-12">
<h1 className="text-3xl font-bold mb-8 hover:text-gold">Skills</h1>
{SkillBars.map((skill) => (
        <div className="mb-6" key={skill.Stack}>
          <div className="flex justify-between mb-2">
            <div className="text-lg font-medium group relative">
              {/* Add tooltip on hover */}
              <span className="tooltip absolute left-0 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2 -bottom-6">
                Click for details
              </span>
              {skill.Stack}
            </div>
            <div className="text-lg font-medium group relative">
              <span className="tooltip absolute left-0 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2 -bottom-6">
                {skill.progressPercentage}% proficiency
              </span>
              {skill.progressPercentage}%
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-blue-500 h-4 rounded-full transition-all duration-300"
              style={{ width: `${skill.progressPercentage}%` }}
              role="progressbar"
              aria-label={skill.Stack}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Proficiency;
