
import React from 'react';
import { Experience } from '../types';
import { BulletIcon } from './Icons';

const ExperienceItem: React.FC<Experience> = ({ role, company, location, dates, description }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="md:w-1/4 text-sm font-mono text-slate whitespace-nowrap">{dates}</div>
      <div className="flex-1">
        <h3 className="text-lg font-bold text-lightest-slate hover:text-accent transition-colors duration-300">
          {role} · {company}
        </h3>
        <p className="text-sm text-light-slate mb-3">{location}</p>
        <ul className="space-y-2">
          {description.map((point, index) => (
            <li key={index} className="flex gap-3">
              <span className="text-accent mt-1">
                <BulletIcon />
              </span>
              <span className="text-slate">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceItem;
