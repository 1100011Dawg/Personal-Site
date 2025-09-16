
import React from 'react';
import { profileData, experiences, projects, skills, education } from './constants';
import Section from './components/Section';
import ExperienceItem from './components/ExperienceItem';
import ProjectCard from './components/ProjectCard';
import SkillBadge from './components/SkillBadge';
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon, LocationIcon, ClusterIcon } from './components/Icons';

const App: React.FC = () => {
  return (
    <div className="font-sans max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 py-12 md:py-20">
      
      <header className="flex flex-col md:flex-row md:items-center justify-between mb-16 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-lightest-slate tracking-tight">{profileData.name}</h1>
          <h2 className="mt-2 text-lg md:text-xl font-medium text-light-slate">{profileData.title}</h2>
          <p className="mt-4 max-w-md text-slate leading-relaxed">
            {profileData.bio}
          </p>
          <div className="mt-4 flex items-center space-x-4 text-xs">
              <LocationIcon />
              <span>{profileData.location}</span>
          </div>
        </div>
        <div className="mt-8 md:mt-0 flex flex-col items-start md:items-end space-y-3">
          <a href={`mailto:${profileData.contact.email}`} className="flex items-center space-x-3 text-sm hover:text-accent transition-colors duration-300">
            <MailIcon />
            <span>{profileData.contact.email}</span>
          </a>
          <a href={`tel:${profileData.contact.phone.replace(/\s|-/g, '')}`} className="flex items-center space-x-3 text-sm hover:text-accent transition-colors duration-300">
            <PhoneIcon />
            <span>{profileData.contact.phone}</span>
          </a>
          <div className="flex space-x-4 pt-2">
            <a href={profileData.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate hover:text-accent transition-colors duration-300">
              <LinkedinIcon />
            </a>
            <a href={profileData.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate hover:text-accent transition-colors duration-300">
              <GithubIcon />
            </a>
            <a href="https://nixos.mulard-lake.ts.net/" target="_blank" rel="noopener noreferrer" aria-label="Self-hosted Cluster" className="text-slate hover:text-accent transition-colors duration-300">
              <ClusterIcon />
            </a>
          </div>
        </div>
      </header>

      <main className="space-y-20">
        <Section title="Experience" animationDelay="200ms">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} {...exp} />
            ))}
          </div>
        </Section>

        <Section title="Projects" animationDelay="300ms">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((proj, index) => (
              <ProjectCard key={index} {...proj} />
            ))}
          </div>
        </Section>

        <Section title="Skills" animationDelay="400ms">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="mb-6">
              <h3 className="text-md font-semibold text-light-slate mb-3 capitalize">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </Section>
        
        <Section title="Education" animationDelay="500ms">
            <div className="bg-secondary p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-lg font-bold text-lightest-slate">{education.school}</h3>
                        <p className="text-light-slate">{education.degree}</p>
                    </div>
                    <span className="text-sm font-mono text-slate whitespace-nowrap">{education.graduation}</span>
                </div>
                <div className="mt-4 text-sm">
                    <p><span className="font-semibold text-light-slate">Focus Area:</span> {education.focus}</p>
                    <p><span className="font-semibold text-light-slate">GPA:</span> {education.gpa}</p>
                    <p className="mt-2"><span className="font-semibold text-light-slate">Relevant Courses:</span> {education.courses.join(' | ')}</p>
                </div>
            </div>
        </Section>
      </main>

      <footer className="text-center mt-20 py-6 border-t border-lightest-navy">
        <p className="text-sm text-slate">&copy; {new Date().getFullYear()} Dawson David.</p>
      </footer>
    </div>
  );
};

export default App;
