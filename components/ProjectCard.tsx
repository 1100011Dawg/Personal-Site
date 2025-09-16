
import React from 'react';
import { Project } from '../types';
import { ExternalLinkIcon } from './Icons';
import SkillBadge from './SkillBadge';

const ProjectCard: React.FC<Project> = ({ title, date, description, tools, link, imageUrl }) => {
  const CardContent = (
    <>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-lightest-slate group-hover:text-accent transition-colors duration-300">{title}</h3>
            <p className="text-xs font-mono text-slate">{date}</p>
          </div>
          {link && <ExternalLinkIcon />}
        </div>
        <ul className="space-y-2 mb-4 text-sm">
            {description.map((point, index) => (
                <li key={index} className="text-light-slate">{point}</li>
            ))}
        </ul>
      </div>
      <div className="p-6 pt-0 mt-auto">
        <div className="flex flex-wrap gap-2">
          {tools.map((tool, index) => (
            <SkillBadge key={index} skill={tool} />
          ))}
        </div>
      </div>
    </>
  );

  return (
    <div className="bg-secondary rounded-lg shadow-lg flex flex-col h-full group transition-transform duration-300 ease-in-out hover:-translate-y-2">
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
          {CardContent}
        </a>
      ) : (
        CardContent
      )}
    </div>
  );
};

export default ProjectCard;
