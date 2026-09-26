import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { PROJECTS } from '../data/agencyData';
import type { Project } from '../types';
import { soundManager } from '../utils/audio';

export const SelectedWork: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'AI & SPATIAL', 'ECOMMERCE', 'FINTECH', 'BRAND SYSTEMS'];

  const filteredProjects = activeCategory === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  const handleNavigateModal = (direction: 'next' | 'prev') => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS.findIndex((p) => p.id === selectedProject.id);
    let nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    if (nextIndex >= PROJECTS.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = PROJECTS.length - 1;
    setSelectedProject(PROJECTS[nextIndex]);
  };

  return (
    <section id="work" className="py-24 sm:py-32 relative border-t border-white/[0.06]">
      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#FF6A2A]/[0.04] rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF6A2A] tracking-widest uppercase mb-3">
              <span>01</span>
              <span>//</span>
              <span>PORTFOLIO SHOWCASE</span>
            </div>
            <h2 className="font-['Space_Grotesk'] text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
              SELECTED WORK
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#A8A39B] leading-relaxed">
            A curated index of spatial web applications, luxury flagships, and high-frequency digital architectures built for industry pioneers.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  setActiveCategory(cat);
                }}
                onMouseEnter={() => soundManager.playHover()}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white text-black font-semibold shadow-lg'
                    : 'bg-white/[0.03] text-[#A8A39B] border border-white/10 hover:text-white hover:bg-white/[0.08]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Case Study Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNavigate={handleNavigateModal}
      />
    </section>
  );
};
