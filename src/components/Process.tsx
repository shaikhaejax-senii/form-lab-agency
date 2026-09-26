import React, { useState } from 'react';
import { PROCESS_STAGES } from '../data/agencyData';
import { CheckCircle, Layers, Target, Compass, Terminal } from 'lucide-react';
import { soundManager } from '../utils/audio';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0: return Target;
      case 1: return Compass;
      case 2: return Layers;
      case 3: return Terminal;
      default: return CheckCircle;
    }
  };

  return (
    <section id="process" className="py-24 sm:py-32 relative border-t border-white/[0.06]">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#FF6A2A]/[0.03] rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF6A2A] tracking-widest uppercase mb-3">
              <span>03</span>
              <span>//</span>
              <span>METHODOLOGY</span>
            </div>
            <h2 className="font-['Space_Grotesk'] text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-none">
              FROM IDEA <br />
              <span className="text-[#FF8A3D]">TO EXPERIENCE.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#A8A39B] leading-relaxed">
            Our iterative four-phase framework eliminates ambiguity, protects creative ambition, and guarantees production-grade velocity.
          </p>
        </div>

        {/* Horizontal Step Navigation Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {PROCESS_STAGES.map((stage, idx) => {
            const Icon = getStepIcon(idx);
            const isActive = activeStep === idx;
            return (
              <button
                key={stage.number}
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  setActiveStep(idx);
                }}
                onMouseEnter={() => soundManager.playHover()}
                className={`p-5 rounded-2xl text-left border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white/[0.06] border-[#FF6A2A]/60 shadow-[0_10px_30px_rgba(255,106,42,0.15)]'
                    : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#FF6A2A]' : 'text-[#A8A39B]'}`}>
                    STAGE {stage.number}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#FF8A3D]' : 'text-[#A8A39B]/50'}`} />
                </div>
                <div className="font-['Space_Grotesk'] text-lg sm:text-xl font-bold text-white">
                  {stage.phase}
                </div>
                <div className="text-[11px] font-mono text-[#A8A39B] mt-1">
                  {stage.duration}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Stagecard */}
        <div className="rounded-3xl bg-[#0B0B0D] border border-white/10 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle accent corner gradient */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6A2A]/[0.06] rounded-full blur-[90px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
            {/* Left Column: Core Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#FF6A2A]/20 text-[#FF8A3D] text-xs font-mono font-bold">
                  PHASE {PROCESS_STAGES[activeStep].number}
                </span>
                <span className="text-xs font-mono text-[#A8A39B]">
                  TIMELINE: {PROCESS_STAGES[activeStep].duration}
                </span>
              </div>

              <h3 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-white tracking-tight">
                {PROCESS_STAGES[activeStep].subtitle}
              </h3>

              <p className="text-base text-[#A8A39B] leading-relaxed">
                {PROCESS_STAGES[activeStep].description}
              </p>

              {/* Progress Indicator */}
              <div className="flex items-center gap-2 pt-4">
                {PROCESS_STAGES.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === activeStep
                        ? 'w-10 bg-[#FF6A2A]'
                        : i < activeStep
                        ? 'w-4 bg-white/40'
                        : 'w-4 bg-white/10'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Column: Execution Breakdown & Deliverables */}
            <div className="lg:col-span-6 space-y-6 lg:border-l lg:border-white/[0.08] lg:pl-10">
              <div>
                <h4 className="text-xs font-mono text-white tracking-widest uppercase font-bold mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A3D]" />
                  KEY ACTIONS EXECUTED
                </h4>
                <ul className="space-y-2.5">
                  {PROCESS_STAGES[activeStep].keyActions.map((action, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-mono text-[#F5F1EA]/90">
                      <span className="text-[#FF6A2A] font-bold">↳</span>
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                <h4 className="text-xs font-mono text-white tracking-widest uppercase font-bold mb-3">
                  // VERIFIABLE DELIVERABLES
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {PROCESS_STAGES[activeStep].deliverables.map((del, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-[#A8A39B]"
                    >
                      {del}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
