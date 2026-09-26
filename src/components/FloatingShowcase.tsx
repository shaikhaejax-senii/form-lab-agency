import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Activity, Layers, Terminal, Play, Cpu, ShieldCheck } from 'lucide-react';
import { soundManager } from '../utils/audio';

export const FloatingShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Mouse tilt tracking state with smooth lerping
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState<'neural' | 'tokens' | 'spatial'>('neural');
  const [isPlayingWave, setIsPlayingWave] = useState(true);

  // Mouse move listener with normalized coordinates
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setTargetPos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Smooth lerp loop for believable inertia
  useEffect(() => {
    let animationFrameId: number;
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const updateMotion = () => {
      setMousePos((prev) => ({
        x: lerp(prev.x, targetPos.x, 0.06),
        y: lerp(prev.y, targetPos.y, 0.06),
      }));
      animationFrameId = requestAnimationFrame(updateMotion);
    };

    animationFrameId = requestAnimationFrame(updateMotion);
    return () => cancelAnimationFrame(animationFrameId);
  }, [targetPos]);

  // Live interactive canvas waveform and particle grid inside the front dashboard
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frame = 0;
    let animId: number;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const width = canvas.width;
      const height = canvas.height;
      const centerY = height / 2;

      // Draw subtle background grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 1;
      const step = 20;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw multi-sine harmonic wave
      ctx.lineWidth = 2;
      const gradients = ctx.createLinearGradient(0, 0, width, 0);
      gradients.addColorStop(0, 'rgba(255, 106, 42, 0.2)');
      gradients.addColorStop(0.5, 'rgba(255, 138, 61, 0.9)');
      gradients.addColorStop(1, 'rgba(233, 75, 47, 0.3)');
      ctx.strokeStyle = gradients;

      ctx.beginPath();
      for (let x = 0; x < width; x++) {
        const freq1 = 0.025;
        const freq2 = 0.012;
        const amp = 24 * Math.sin(frame * 0.03 + x * 0.01);
        const y = centerY + Math.sin(x * freq1 + frame * 0.04) * amp + Math.cos(x * freq2 - frame * 0.02) * 10;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Draw active node points
      for (let i = 1; i <= 5; i++) {
        const nodeX = (width / 6) * i;
        const nodeY = centerY + Math.sin(nodeX * 0.025 + frame * 0.04) * (24 * Math.sin(frame * 0.03 + nodeX * 0.01));
        
        ctx.fillStyle = '#FF6A2A';
        ctx.beginPath();
        ctx.arc(nodeX, nodeY, 3.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(nodeX, nodeY, 6.5 + Math.sin(frame * 0.1 + i) * 2, 0, Math.PI * 2);
        ctx.stroke();
      }

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [isPlayingWave]);

  // Tilt transforms calculated from mouse position
  const mainTiltX = mousePos.y * -8;
  const mainTiltY = mousePos.x * 12;

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-5xl mx-auto h-[480px] sm:h-[540px] md:h-[620px] lg:h-[660px] perspective-2000 select-none my-6 md:my-10"
    >
      {/* Background warm radial ambient glow */}
      <div 
        className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
        }}
      >
        <div className="w-[320px] sm:w-[480px] md:w-[650px] h-[320px] sm:h-[480px] md:h-[650px] rounded-full bg-gradient-to-tr from-[#E94B2F]/20 via-[#FF6A2A]/15 to-transparent blur-[90px] md:blur-[130px]" />
      </div>

      {/* Primary 3D Transform Stage */}
      <div
        className="relative w-full h-full preserve-3d transition-transform duration-100 ease-out flex items-center justify-center"
        style={{
          transform: `rotateX(${mainTiltX}deg) rotateY(${mainTiltY}deg)`,
        }}
      >
        {/* ========================================================= */}
        {/* LAYER 1 (BACK / TOP-LEFT): CREAM EDITORIAL INTERFACE CARD */}
        {/* ========================================================= */}
        <div
          className="absolute w-[290px] sm:w-[380px] md:w-[460px] lg:w-[500px] h-[340px] sm:h-[400px] md:h-[460px] rounded-2xl md:rounded-3xl glass-panel-cream p-5 md:p-7 preserve-3d will-change-transform shadow-2xl transition-all duration-300"
          style={{
            transform: `translate3d(calc(-18% + ${mousePos.x * -18}px), calc(-12% + ${mousePos.y * -18}px), -80px) rotateX(10deg) rotateY(-14deg) rotateZ(3deg)`,
          }}
        >
          {/* Subtle paper specular gradient */}
          <div className="flex items-center justify-between border-b border-black/15 pb-3.5 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-black/80" />
              <span className="text-[11px] font-mono tracking-wider uppercase font-bold text-black/80">
                ARCHIVE // VOL. 26
              </span>
            </div>
            <span className="text-[10px] font-mono tracking-widest text-black/50 uppercase">
              ART DIRECTED SYSTEM
            </span>
          </div>

          <div className="space-y-3">
            <div className="text-[9px] font-mono tracking-widest text-[#E94B2F] font-bold uppercase">
              // EDITORIAL ARCHITECTURE
            </div>
            <h4 className="font-['Space_Grotesk'] text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#0D0D0D] leading-[1.08]">
              SPATIAL INTERACTION IN THE AGE OF INTELLIGENCE.
            </h4>
            <p className="text-[11px] sm:text-[12px] text-black/70 leading-relaxed font-sans line-clamp-3">
              Crafting tangible digital matter through light, typography, and mathematical depth. A study in modern responsive composition.
            </p>
          </div>

          {/* Editorial Visual Grid Mockup */}
          <div className="mt-5 grid grid-cols-3 gap-2 pt-3 border-t border-black/10">
            <div className="h-16 md:h-20 bg-black/8 rounded-lg p-2 flex flex-col justify-between">
              <span className="text-[9px] font-mono text-black/50">01 / TYPO</span>
              <span className="text-xs font-bold text-black/80">GROTESK</span>
            </div>
            <div className="h-16 md:h-20 bg-black/8 rounded-lg p-2 flex flex-col justify-between">
              <span className="text-[9px] font-mono text-black/50">02 / RATIO</span>
              <span className="text-xs font-bold text-black/80">1.618 φ</span>
            </div>
            <div className="h-16 md:h-20 bg-[#FF6A2A]/20 rounded-lg p-2 flex flex-col justify-between border border-[#FF6A2A]/30">
              <span className="text-[9px] font-mono text-[#E94B2F] font-bold">03 / GRID</span>
              <span className="text-xs font-bold text-[#E94B2F]">FLUID</span>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* LAYER 2 (MIDDLE / RIGHT): WARM EMBER STUDIO CONTROLS CARD */}
        {/* ========================================================= */}
        <div
          className="absolute w-[260px] sm:w-[340px] md:w-[410px] lg:w-[440px] h-[300px] sm:h-[360px] md:h-[400px] rounded-2xl md:rounded-3xl glass-panel-warm p-5 md:p-6 preserve-3d will-change-transform shadow-2xl transition-all duration-300"
          style={{
            transform: `translate3d(calc(22% + ${mousePos.x * 24}px), calc(-5% + ${mousePos.y * 24}px), 10px) rotateX(12deg) rotateY(16deg) rotateZ(-3deg)`,
          }}
        >
          <div className="flex items-center justify-between border-b border-white/20 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-white animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-wider text-white">
                SYNTH ENGINE V4
              </span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-white/20 text-[10px] font-mono text-white">
              LIVE FFT
            </span>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <div>
                <span className="text-[10px] font-mono text-white/70 uppercase">Harmonic Wave</span>
                <div className="text-lg md:text-xl font-bold font-mono text-white">
                  432.08 <span className="text-xs text-white/70">Hz</span>
                </div>
              </div>
              <div className="flex gap-1 items-end h-8">
                {[40, 75, 100, 60, 90, 45, 80, 95, 30].map((h, i) => (
                  <span
                    key={i}
                    className="w-1.5 bg-white rounded-full transition-all duration-300"
                    style={{
                      height: `${h}%`,
                      opacity: 0.6 + (i % 3) * 0.15,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Dial controls mockup */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-black/20 rounded-xl p-3 border border-white/15">
                <span className="text-[10px] font-mono text-white/70 block mb-1">RESONANCE</span>
                <div className="h-2 w-full bg-black/30 rounded-full overflow-hidden">
                  <div className="h-full bg-white rounded-full w-3/4" />
                </div>
                <div className="flex justify-between text-[9px] font-mono text-white/80 mt-1">
                  <span>Q-Factor</span>
                  <span>8.4 dB</span>
                </div>
              </div>

              <div className="bg-black/20 rounded-xl p-3 border border-white/15">
                <span className="text-[10px] font-mono text-white/70 block mb-1">SPATIAL GAIN</span>
                <div className="h-2 w-full bg-black/30 rounded-full overflow-hidden">
                  <div className="h-full bg-white rounded-full w-5/6" />
                </div>
                <div className="flex justify-between text-[9px] font-mono text-white/80 mt-1">
                  <span>Stereo</span>
                  <span>+3.2 dB</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-white/90 pt-1">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                SYNCHRONIZED
              </span>
              <span>LATENCY &lt; 0.8ms</span>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* LAYER 3 (FRONT / CENTER): DARK LUXURY SPATIAL DASHBOARD   */}
        {/* ========================================================= */}
        <div
          className="absolute w-[310px] sm:w-[420px] md:w-[520px] lg:w-[580px] h-[330px] sm:h-[390px] md:h-[450px] rounded-2xl md:rounded-3xl glass-panel-dark p-5 md:p-6 preserve-3d will-change-transform shadow-[0_30px_90px_rgba(0,0,0,0.9)] border border-white/15 transition-all duration-300"
          style={{
            transform: `translate3d(${mousePos.x * 32}px, ${mousePos.y * 32}px, 80px) rotateX(4deg) rotateY(-4deg)`,
          }}
        >
          {/* Top Window Bar */}
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-4">
            <div className="flex items-center gap-2.5">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF6A2A]/80 border border-[#FF6A2A]" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20 border border-white/30" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/10 border border-white/20" />
              </div>
              <span className="text-[11px] font-mono font-bold tracking-wider text-white pl-2">
                ORBIT // SPATIAL OS
              </span>
            </div>

            {/* Status Pill */}
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#FF6A2A]/10 border border-[#FF6A2A]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A2A] animate-pulse" />
              <span className="text-[10px] font-mono text-[#FF8A3D] font-semibold tracking-wider">
                60 FPS // GPU ACTIVE
              </span>
            </div>
          </div>

          {/* Interactive Mode Switcher */}
          <div className="flex items-center gap-2 mb-3.5">
            {[
              { id: 'neural', label: 'NEURAL TOPOLOGY', icon: Cpu },
              { id: 'tokens', label: 'DESIGN TOKENS', icon: Layers },
              { id: 'spatial', label: 'SPATIAL DEPTH', icon: Terminal },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    soundManager.playClick();
                    setActiveTab(tab.id as 'neural' | 'tokens' | 'spatial');
                  }}
                  onMouseEnter={() => soundManager.playHover()}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-mono tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? 'bg-white/10 text-white border border-white/20 shadow-sm'
                      : 'text-[#A8A39B] hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <Icon className={`w-3 h-3 ${isActive ? 'text-[#FF6A2A]' : ''}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Central Live Canvas Area */}
          <div className="relative w-full h-[150px] sm:h-[180px] md:h-[210px] rounded-xl overflow-hidden bg-[#070709] border border-white/[0.08]">
            <canvas
              ref={canvasRef}
              width={540}
              height={210}
              className="w-full h-full object-cover"
            />

            {/* Floating Telemetry Overlays */}
            <div className="absolute top-3 left-3 flex flex-col gap-1 pointer-events-none">
              <span className="text-[9px] font-mono text-[#A8A39B]/80 tracking-widest uppercase">
                VECTOR VELOCITY
              </span>
              <span className="text-xs font-mono font-bold text-white">
                ΔX: {(mousePos.x * 10).toFixed(2)} | ΔY: {(mousePos.y * 10).toFixed(2)}
              </span>
            </div>

            <div className="absolute bottom-3 right-3 flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  setIsPlayingWave(!isPlayingWave);
                }}
                className="px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 border border-white/15 text-[10px] font-mono text-white flex items-center gap-1 transition-all"
              >
                <Play className="w-2.5 h-2.5 text-[#FF6A2A]" />
                <span>{isPlayingWave ? 'STREAMING' : 'PAUSED'}</span>
              </button>
            </div>
          </div>

          {/* Bottom Metric Pills */}
          <div className="grid grid-cols-3 gap-2.5 mt-3.5">
            <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-col">
              <span className="text-[9px] font-mono text-[#A8A39B]">LATENCY</span>
              <span className="text-xs md:text-sm font-bold font-mono text-white mt-0.5">
                0.04 <span className="text-[10px] text-[#A8A39B]">sec</span>
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-col">
              <span className="text-[9px] font-mono text-[#A8A39B]">ACTIVE NODES</span>
              <span className="text-xs md:text-sm font-bold font-mono text-[#FF8A3D] mt-0.5">
                12,480 <span className="text-[10px] text-[#A8A39B]">pts</span>
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-col">
              <span className="text-[9px] font-mono text-[#A8A39B]">SECURITY</span>
              <span className="text-xs md:text-sm font-bold font-mono text-white mt-0.5 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FF6A2A]" />
                VERIFIED
              </span>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* LAYER 4 (ACCENT FLOATER): GLASS CHIP / BADGE              */}
        {/* ========================================================= */}
        <div
          className="absolute -bottom-4 -left-4 sm:left-4 md:left-12 px-3.5 py-2 rounded-xl glass-panel text-white text-[11px] font-mono tracking-wider flex items-center gap-2 shadow-2xl preserve-3d border border-white/20 hidden sm:flex"
          style={{
            transform: `translate3d(calc(${mousePos.x * 45}px), calc(${mousePos.y * 45}px), 130px)`,
          }}
        >
          <Sparkles className="w-3.5 h-3.5 text-[#FF6A2A]" />
          <span>PHYSICAL 3D PERSPECTIVE</span>
        </div>

        {/* ========================================================= */}
        {/* LAYER 5 (ACCENT FLOATER): SYSTEM TIME CHIP                */}
        {/* ========================================================= */}
        <div
          className="absolute -top-4 -right-2 sm:right-6 md:right-16 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md text-[#A8A39B] text-[10px] font-mono tracking-widest border border-white/10 hidden sm:flex items-center gap-2 shadow-xl"
          style={{
            transform: `translate3d(calc(${mousePos.x * -35}px), calc(${mousePos.y * -35}px), 100px)`,
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A3D] animate-ping" />
          <span>SPATIAL RENDER: OK</span>
        </div>
      </div>
    </div>
  );
};
