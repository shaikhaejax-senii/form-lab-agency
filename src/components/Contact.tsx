import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Copy, Check, Clock, Sparkles } from 'lucide-react';
import { soundManager } from '../utils/audio';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [selectedService, setSelectedService] = useState('3D Web Flagship');
  const [selectedBudget, setSelectedBudget] = useState('$25k — $50k');
  const [selectedTimeline, setSelectedTimeline] = useState('Q3 2026');

  // Studio clocks
  const [times, setTimes] = useState({
    tokyo: '',
    london: '',
    nyc: '',
  });

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      setTimes({
        tokyo: now.toLocaleTimeString('en-US', { timeZone: 'Asia/Tokyo', hour: '2-digit', minute: '2-digit', hour12: false }),
        london: now.toLocaleTimeString('en-US', { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit', hour12: false }),
        nyc: now.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', hour12: false }),
      });
    };

    updateClocks();
    const timer = setInterval(updateClocks, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    soundManager.playClick();
    navigator.clipboard.writeText('hello@formlab.studio');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mailtoLink = `mailto:hello@formlab.studio?subject=${encodeURIComponent(
    `Project Inquiry: ${selectedService} (${selectedTimeline})`
  )}&body=${encodeURIComponent(
    `Hello FORM / LAB,\n\nWe are looking to collaborate on a new project.\n\nProject Scope: ${selectedService}\nEstimated Budget: ${selectedBudget}\nTarget Launch: ${selectedTimeline}\n\nLet's connect!\n`
  )}`;

  return (
    <section id="contact" className="py-24 sm:py-36 relative border-t border-white/[0.08] overflow-hidden">
      {/* Background warm ember bloom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#FF6A2A]/[0.08] rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#FF6A2A] tracking-widest uppercase mb-8">
          <span>05</span>
          <span>//</span>
          <span>INITIATE COLLABORATION</span>
        </div>

        {/* Massive Display Headline */}
        <div className="mb-16 sm:mb-20">
          <h2 className="font-['Space_Grotesk'] text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white leading-[0.92]">
            LET&apos;S BUILD <br />
            SOMETHING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A3D] via-[#FF6A2A] to-[#E94B2F]">
              REMARKABLE.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Interactive Project Inquiry Configurator */}
          <div className="lg:col-span-7 bg-[#09090B] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-mono font-bold tracking-wider text-white uppercase flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#FF6A2A]" />
                PROJECT CONFIGURATOR
              </span>
              <span className="text-[11px] font-mono text-[#A8A39B]">SELECT OPTIONS</span>
            </div>

            {/* Scope Selector */}
            <div>
              <label className="text-xs font-mono text-[#A8A39B] uppercase block mb-3 font-bold">
                01 // PROJECT FOCUS
              </label>
              <div className="flex flex-wrap gap-2">
                {['3D Web Flagship', 'Digital Product / App', 'Brand & Token System', 'AI Spatial Interface'].map((scope) => (
                  <button
                    key={scope}
                    type="button"
                    onClick={() => {
                      soundManager.playClick();
                      setSelectedService(scope);
                    }}
                    className={`px-3.5 py-2 rounded-xl text-xs font-mono tracking-wider transition-all cursor-pointer ${
                      selectedService === scope
                        ? 'bg-white text-black font-bold shadow-md'
                        : 'bg-white/[0.04] text-[#A8A39B] hover:text-white border border-white/10'
                    }`}
                  >
                    {scope}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget Selector */}
            <div>
              <label className="text-xs font-mono text-[#A8A39B] uppercase block mb-3 font-bold">
                02 // BUDGET RANGE
              </label>
              <div className="flex flex-wrap gap-2">
                {['$15k — $25k', '$25k — $50k', '$50k — $100k', '$100k+'].map((budget) => (
                  <button
                    key={budget}
                    type="button"
                    onClick={() => {
                      soundManager.playClick();
                      setSelectedBudget(budget);
                    }}
                    className={`px-3.5 py-2 rounded-xl text-xs font-mono tracking-wider transition-all cursor-pointer ${
                      selectedBudget === budget
                        ? 'bg-[#FF6A2A] text-white font-bold shadow-md'
                        : 'bg-white/[0.04] text-[#A8A39B] hover:text-white border border-white/10'
                    }`}
                  >
                    {budget}
                  </button>
                ))}
              </div>
            </div>

            {/* Timeline Selector */}
            <div>
              <label className="text-xs font-mono text-[#A8A39B] uppercase block mb-3 font-bold">
                03 // TARGET TIMELINE
              </label>
              <div className="flex flex-wrap gap-2">
                {['Immediate (Next 4 wks)', 'Q3 2026', 'Q4 2026', '2027 Roadmaps'].map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => {
                      soundManager.playClick();
                      setSelectedTimeline(time);
                    }}
                    className={`px-3.5 py-2 rounded-xl text-xs font-mono tracking-wider transition-all cursor-pointer ${
                      selectedTimeline === time
                        ? 'bg-[#FF8A3D] text-black font-bold shadow-md'
                        : 'bg-white/[0.04] text-[#A8A39B] hover:text-white border border-white/10'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Mailto Action Button */}
            <div className="pt-4 border-t border-white/10">
              <a
                href={mailtoLink}
                onMouseEnter={() => soundManager.playHover()}
                onClick={() => soundManager.playClick()}
                className="w-full py-4 rounded-2xl bg-white text-black hover:bg-[#FF6A2A] hover:text-white font-mono text-sm font-bold tracking-wider transition-all flex items-center justify-center gap-2 shadow-2xl cursor-pointer group"
              >
                <span>START A PROJECT →</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Direct Contact & Studio Clocks */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Email Card */}
            <div className="p-8 rounded-3xl bg-[#09090B] border border-white/10 shadow-2xl">
              <div className="text-xs font-mono text-[#A8A39B] tracking-widest uppercase mb-2">
                // DIRECT INBOX
              </div>
              <a
                href="mailto:hello@formlab.studio"
                onMouseEnter={() => soundManager.playHover()}
                className="text-2xl sm:text-3xl font-['Space_Grotesk'] font-bold text-white hover:text-[#FF8A3D] transition-colors block mb-4"
              >
                hello@formlab.studio
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                onMouseEnter={() => soundManager.playHover()}
                className="w-full py-2.5 px-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-mono tracking-wider text-[#F5F1EA] flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#FF6A2A]" />
                    <span>COPIED TO CLIPBOARD</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#A8A39B]" />
                    <span>COPY EMAIL ADDRESS</span>
                  </>
                )}
              </button>
            </div>

            {/* Global Studio Clocks */}
            <div className="p-8 rounded-3xl bg-[#09090B] border border-white/10 shadow-2xl space-y-4">
              <div className="text-xs font-mono text-[#A8A39B] tracking-widest uppercase mb-2 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#FF6A2A]" />
                <span>STUDIO HUBS &amp; LIVE TIME</span>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <span className="text-[10px] font-mono text-[#A8A39B] block">TOKYO</span>
                  <span className="text-sm sm:text-base font-bold font-mono text-white mt-1 block">
                    {times.tokyo || '19:40'}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <span className="text-[10px] font-mono text-[#A8A39B] block">LONDON</span>
                  <span className="text-sm sm:text-base font-bold font-mono text-white mt-1 block">
                    {times.london || '10:40'}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <span className="text-[10px] font-mono text-[#A8A39B] block">NEW YORK</span>
                  <span className="text-sm sm:text-base font-bold font-mono text-white mt-1 block">
                    {times.nyc || '05:40'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
