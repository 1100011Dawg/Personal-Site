
import React from 'react';

interface SkillBadgeProps {
  skill: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <span className="bg-light-navy text-accent text-xs font-mono font-medium px-3 py-1 rounded-full">
      {skill}
    </span>
  );
};

export default SkillBadge;
