import React from 'react';
import { ArrowDown, ArrowUpRight, Award, Compass, Sparkles } from 'lucide-react';
import { FloatingShowcase } from './FloatingShowcase';
import { soundManager } from '../utils/audio';

interface HeroProps {
  onStartProject?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject }) => {
  const scrollToWork = () => {
    soundManager.playClick();
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 sm:pt-36 md:pt-40 pb-20 overflow-hidden flex flex-col justify-between"
    >
      {/* Background Subtle Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#FF6A2A]/[0.07] rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-[#E94B2F]/[0.05] rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full text-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-md mb-6 sm:mb-8 animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-[#FF6A2A]" />
          <span className="text-[11px] sm:text-xs font-mono tracking-widest text-[#A8A39B] uppercase font-medium">
            DIGITAL EXPERIENCES / CREATIVE TECHNOLOGY
          </span>
        </div>

        {/* Large Editorial Headline */}
        <h1 className="font-['Space_Grotesk'] text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[0.98] max-w-5xl mx-auto mb-6">
          WE BUILD DIGITAL <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F5F1EA] to-[#A8A39B]">
            EXPERIENCES
          </span>{' '}
          THAT{' '}
          <span className="italic font-serif text-[#FF8A3D] font-normal tracking-normal underline decoration-[#FF6A2A]/40 decoration-wavy decoration-1 underline-offset-8">
            MOVE.
          </span>
        </h1>

        {/* Supporting Editorial Copy */}
        <p className="max-w-2xl mx-auto text-[#A8A39B] text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-8">
          FORM / LAB unites spatial 3D interaction, bespoke frontend engineering, and timeless editorial design to craft digital flagships for visionary leaders.
        </p>

        {/* Call-to-action buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <button
            type="button"
            onClick={scrollToWork}
            onMouseEnter={() => soundManager.playHover()}
            className="group px-7 py-3.5 rounded-full bg-white text-black font-mono text-xs sm:text-sm font-semibold tracking-wider hover:bg-[#FF6A2A] hover:text-white transition-all duration-300 flex items-center gap-2 shadow-2xl cursor-pointer"
          >
            <span>EXPLORE WORK</span>
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
          </button>

          <a
            href="#contact"
            onClick={(e) => {
              if (onStartProject) {
                e.preventDefault();
                onStartProject();
              }
            }}
            onMouseEnter={() => soundManager.playHover()}
            className="group px-7 py-3.5 rounded-full border border-white/20 bg-white/[0.04] text-white hover:bg-white/[0.1] font-mono text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 flex items-center gap-2 backdrop-blur-md cursor-pointer"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4 text-[#FF8A3D] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* =================================================== */}
        {/* 3D FLOATING SHOWCASE CENTERPIECE                   */}
        {/* =================================================== */}
        <FloatingShowcase />
      </div>

      {/* Hero Bottom Information & Proof Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full mt-12 pt-8 border-t border-white/[0.06] grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-[#FF6A2A]">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-mono font-bold text-white">AWWWARDS &amp; FWA</div>
            <div className="text-[11px] text-[#A8A39B]">Site of the Year Nominee</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-[#FF8A3D]">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-mono font-bold text-white">GLOBAL REACH</div>
            <div className="text-[11px] text-[#A8A39B]">Tokyo / London / NYC</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-[#E8DDC8]">
            <span className="font-mono font-bold text-sm">60+</span>
          </div>
          <div>
            <div className="text-xs font-mono font-bold text-white">FPS CINEMATIC</div>
            <div className="text-[11px] text-[#A8A39B]">Hardware accelerated</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-[#E94B2F]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E94B2F] animate-ping" />
          </div>
          <div>
            <div className="text-xs font-mono font-bold text-white">READY FOR Q3/Q4</div>
            <div className="text-[11px] text-[#A8A39B]">2 Client Slots Remaining</div>
          </div>
        </div>
      </div>
    </section>
  );
};
