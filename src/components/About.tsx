import React from 'react';
import { STUDIO_METRICS, CLIENT_LOGOS } from '../data/agencyData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 relative border-t border-white/[0.06]">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#FF8A3D]/[0.04] rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#FF6A2A] tracking-widest uppercase mb-8">
          <span>04</span>
          <span>//</span>
          <span>STUDIO PHILOSOPHY</span>
        </div>

        {/* Large Editorial Manifesto */}
        <div className="mb-16 sm:mb-24">
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.04] max-w-5xl">
            WE DESIGN DIGITAL <br />
            EXPERIENCES FOR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A3D] via-[#FF6A2A] to-[#E94B2F]">
              PEOPLE WHO EXPECT
            </span> <br />
            MORE.
          </h2>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <p className="lg:col-span-7 text-lg sm:text-xl md:text-2xl text-[#F5F1EA]/90 font-normal leading-relaxed">
              We combine strategy, design, and creative technology to build digital experiences that are clear, memorable, and physically tactile. We reject generic templates in pursuit of authentic digital identity.
            </p>

            <div className="lg:col-span-5 text-sm font-mono text-[#A8A39B] space-y-3 lg:border-l lg:border-white/10 lg:pl-8">
              <p>
                Founded in 2024, FORM / LAB operates as a specialized independent creative collective. We keep teams intentionally compact to ensure direct partner-level involvement on every single production.
              </p>
              <div className="flex items-center gap-2 text-[#FF6A2A] font-bold text-xs pt-2">
                <span className="w-2 h-2 rounded-full bg-[#FF6A2A] animate-ping" />
                <span>ACTIVE WORLDWIDE // REMOTE STUDIO HUBS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 sm:mb-28">
          {STUDIO_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#09090B] border border-white/[0.08] hover:border-[#FF6A2A]/40 transition-all duration-300 group shadow-xl"
            >
              <div className="font-['Space_Grotesk'] text-4xl sm:text-5xl font-bold text-white group-hover:text-[#FF8A3D] transition-colors mb-2">
                {metric.value}
              </div>
              <div className="text-xs font-mono font-bold tracking-wider text-white uppercase mb-2">
                {metric.label}
              </div>
              <div className="text-xs text-[#A8A39B] leading-relaxed">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Client Marks & Partnerships */}
        <div className="border-t border-white/[0.08] pt-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <span className="text-xs font-mono tracking-widest text-[#A8A39B] uppercase font-bold">
              // TRUSTED BY PIONEERING TEAMS
            </span>
            <span className="text-xs font-mono text-[#A8A39B]/60">
              VENTURE BACKED &amp; GLOBAL BRANDS
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {CLIENT_LOGOS.map((client, idx) => (
              <div
                key={idx}
                className="h-20 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/20 transition-all flex flex-col items-center justify-center p-3 text-center group cursor-default"
              >
                <span className="font-['Space_Grotesk'] font-bold text-sm tracking-wider text-white/80 group-hover:text-[#FF8A3D] transition-colors">
                  {client.name}
                </span>
                <span className="text-[10px] font-mono text-[#A8A39B]/60 mt-0.5">
                  {client.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
