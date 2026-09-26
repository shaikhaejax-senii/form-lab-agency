import React, { useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import type { Project } from '../types';
import { soundManager } from '../utils/audio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onNavigate: (direction: 'next' | 'prev') => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onNavigate }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        soundManager.playClick();
        onClose();
      }
      if (e.key === 'ArrowRight') {
        soundManager.playClick();
        onNavigate('next');
      }
      if (e.key === 'ArrowLeft') {
        soundManager.playClick();
        onNavigate('prev');
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose, onNavigate]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} Case Study`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-2xl animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          soundManager.playClick();
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0A0A0C] border border-white/15 rounded-3xl overflow-y-auto shadow-2xl p-6 sm:p-10 text-white">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-[#FF6A2A]/20 border border-[#FF6A2A]/40 text-[#FF8A3D] text-xs font-mono font-bold">
              {project.number} // CASE STUDY
            </span>
            <span className="text-xs font-mono text-[#A8A39B] tracking-wider uppercase">
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                soundManager.playClick();
                onNavigate('prev');
              }}
              aria-label="Previous project"
              className="p-2 rounded-full border border-white/10 hover:bg-white/10 text-[#A8A39B] hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => {
                soundManager.playClick();
                onNavigate('next');
              }}
              aria-label="Next project"
              className="p-2 rounded-full border border-white/10 hover:bg-white/10 text-[#A8A39B] hover:text-white transition-colors cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => {
                soundManager.playClick();
                onClose();
              }}
              aria-label="Close case study modal"
              className="p-2 rounded-full bg-white/10 hover:bg-[#FF6A2A] text-white transition-colors ml-2 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Project Title & Client */}
        <div className="mb-8">
          <div className="text-xs font-mono tracking-widest text-[#FF6A2A] uppercase mb-2">
            CLIENT: {project.client} // {project.year}
          </div>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            {project.title}
          </h2>
          <p className="text-base sm:text-lg text-[#F5F1EA] font-normal leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Key Hero Stat Highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] mb-10">
          {project.metrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-xs font-mono text-[#A8A39B] uppercase mb-1">
                {metric.label}
              </span>
              <span className="text-2xl sm:text-3xl font-mono font-bold text-white">
                {metric.value}
              </span>
            </div>
          ))}
        </div>

        {/* Deep Dive Breakdown */}
        <div className="space-y-8 text-sm sm:text-base leading-relaxed text-[#A8A39B]">
          <div>
            <h4 className="text-xs font-mono tracking-widest text-white uppercase font-bold mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF6A2A]" />
              01 // PROJECT OVERVIEW
            </h4>
            <p className="text-[#F5F1EA]/90">{project.overview}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/[0.06]">
            <div>
              <h4 className="text-xs font-mono tracking-widest text-white uppercase font-bold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E94B2F]" />
                02 // THE CHALLENGE
              </h4>
              <p className="text-[#F5F1EA]/80">{project.challenge}</p>
            </div>

            <div>
              <h4 className="text-xs font-mono tracking-widest text-white uppercase font-bold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF8A3D]" />
                03 // THE ARCHITECTURE &amp; SOLUTION
              </h4>
              <p className="text-[#F5F1EA]/80">{project.solution}</p>
            </div>
          </div>

          {/* Deliverables & Technologies */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/[0.06]">
            <div>
              <h4 className="text-xs font-mono tracking-widest text-white uppercase font-bold mb-3">
                // SHIPPED DELIVERABLES
              </h4>
              <ul className="space-y-2">
                {project.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs font-mono text-[#F5F1EA]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6A2A]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono tracking-widest text-white uppercase font-bold mb-3">
                // TECHNICAL STACK
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-xs font-mono text-[#F5F1EA]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono text-[#A8A39B]">
            READY TO BUILD SOMETHING SIMILAR?
          </div>
          <a
            href="#contact"
            onClick={() => {
              soundManager.playClick();
              onClose();
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-black hover:bg-[#FF6A2A] hover:text-white font-mono text-xs font-bold tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>INQUIRE FOR THIS SCOPE</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
