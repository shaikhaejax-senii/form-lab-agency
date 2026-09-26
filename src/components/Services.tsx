import React, { useState } from 'react';
import { SERVICES } from '../data/agencyData';
import { Plus, Minus, Clock, Sparkles } from 'lucide-react';
import { soundManager } from '../utils/audio';

export const Services: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    soundManager.playClick();
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="services" className="py-24 sm:py-32 relative border-t border-white/[0.06]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#E94B2F]/[0.04] rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF6A2A] tracking-widest uppercase mb-3">
              <span>02</span>
              <span>//</span>
              <span>CAPABILITIES</span>
            </div>
            <h2 className="font-['Space_Grotesk'] text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white">
              WHAT WE DO
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#A8A39B] leading-relaxed">
            We partner with visionary enterprises to architect digital systems that fuse artistic emotion with rigorous engineering discipline.
          </p>
        </div>

        {/* Services Editorial List */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {SERVICES.map((service, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={service.number}
                className="group transition-colors duration-300"
              >
                {/* Clickable Header Row */}
                <button
                  type="button"
                  onClick={() => toggleExpand(index)}
                  onMouseEnter={() => soundManager.playHover()}
                  aria-expanded={isExpanded}
                  className="w-full py-8 sm:py-10 md:py-12 flex items-center justify-between text-left cursor-pointer group-hover:bg-white/[0.015] px-4 rounded-xl transition-all"
                >
                  <div className="flex items-baseline gap-6 sm:gap-12">
                    <span className="font-mono text-sm sm:text-base font-bold text-[#FF6A2A]">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="font-['Space_Grotesk'] text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white group-hover:text-[#FF8A3D] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#A8A39B] font-mono mt-1.5 max-w-xl">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-2 text-xs font-mono text-[#A8A39B]/80 px-3 py-1 rounded-full border border-white/10">
                      <Clock className="w-3.5 h-3.5 text-[#FF6A2A]" />
                      <span>{service.timeline}</span>
                    </div>

                    <div className="p-3 rounded-full border border-white/10 bg-white/[0.03] group-hover:bg-[#FF6A2A] group-hover:text-white transition-all text-[#A8A39B]">
                      {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>
                </button>

                {/* Expanded Details Panel */}
                {isExpanded && (
                  <div className="px-4 pb-10 pt-2 grid grid-cols-1 lg:grid-cols-12 gap-8 text-sm animate-fade-in">
                    <div className="lg:col-span-5 space-y-4">
                      <p className="text-base text-[#F5F1EA]/90 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF8A3D] pt-2">
                        <Sparkles className="w-4 h-4 text-[#FF6A2A]" />
                        <span>ESTIMATED CYCLE: {service.timeline}</span>
                      </div>
                    </div>

                    <div className="lg:col-span-4 space-y-3">
                      <span className="text-xs font-mono text-[#A8A39B] uppercase tracking-wider block font-bold">
                        // CORE CAPABILITIES
                      </span>
                      <ul className="space-y-2">
                        {service.capabilities.map((cap, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs font-mono text-white/90">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A2A]" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="lg:col-span-3 space-y-3">
                      <span className="text-xs font-mono text-[#A8A39B] uppercase tracking-wider block font-bold">
                        // DELIVERABLES
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {service.deliverables.map((del, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-[#A8A39B]"
                          >
                            {del}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
