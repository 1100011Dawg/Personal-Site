
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  animationDelay?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, animationDelay = '0ms' }) => {
  return (
    <section className="animate-fade-in-up" style={{ animationDelay }}>
      <div className="flex items-center mb-6">
        <h2 className="text-2xl font-bold text-lightest-slate whitespace-nowrap pr-4">{title}</h2>
        <div className="w-full h-px bg-lightest-navy"></div>
      </div>
      {children}
    </section>
  );
};

export default Section;
