import React, { useState } from 'react';
import { ArrowUpRight, Layers, Cpu, TrendingUp } from 'lucide-react';
import type { Project } from '../types';
import { soundManager } from '../utils/audio';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  index?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setTilt({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    soundManager.playHover();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  // Render bespoke 3D UI art-directed mockup for each specific project
  const renderProjectVisual = () => {
    if (project.id === 'orbit') {
      return (
        <div className="relative w-full h-full p-6 flex flex-col justify-between overflow-hidden bg-[#070709] rounded-2xl border border-white/10">
          {/* Neural Node Grid Background */}
          <div className="absolute inset-0 bg-[radial-gradient(#FF6A2A_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
          
          <div className="flex justify-between items-center relative z-10">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#FF6A2A]" />
              <span className="text-[10px] font-mono text-white tracking-widest">ORBIT_NEURAL_V2</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-[#FF6A2A]/20 text-[#FF8A3D] text-[9px] font-mono font-bold">
              0.04s INFERENCE
            </span>
          </div>

          {/* Central 3D Mesh Wireframe Visual */}
          <div className="relative my-4 flex items-center justify-center">
            <div
              className="w-32 h-32 rounded-full border border-[#FF6A2A]/40 flex items-center justify-center transition-transform duration-500 ease-out"
              style={{
                transform: `rotateX(${tilt.y * 30}deg) rotateY(${tilt.x * 30}deg)`,
              }}
            >
              <div className="w-24 h-24 rounded-full border border-dashed border-white/40 flex items-center justify-center animate-spin" style={{ animationDuration: '20s' }}>
                <div className="w-12 h-12 rounded-full bg-[#FF6A2A]/30 backdrop-blur-sm border border-[#FF6A2A] flex items-center justify-center">
                  <span className="w-3 h-3 rounded-full bg-white animate-pulse" />
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 text-[10px] font-mono text-[#A8A39B]">
              [12,480 CONNECTED NODES]
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-white/80 border-t border-white/10 pt-3 relative z-10">
            <span>SPATIAL CLUSTER</span>
            <span className="text-[#FF8A3D]">120 FPS NOMINAL</span>
          </div>
        </div>
      );
    }

    if (project.id === 'noir') {
      return (
        <div className="relative w-full h-full p-6 flex flex-col justify-between overflow-hidden bg-[#E8DDC8] text-[#0D0D0D] rounded-2xl border border-white/30">
          <div className="flex justify-between items-center border-b border-black/15 pb-2">
            <span className="font-['Space_Grotesk'] text-xs font-bold tracking-widest uppercase">
              MAISON NOIR PARIS
            </span>
            <span className="text-[10px] font-mono text-black/60">AUTUMN / WINTER</span>
          </div>

          <div className="my-3 space-y-2">
            <span className="text-[9px] font-mono tracking-widest text-[#E94B2F] font-bold block">
              COLLECTION // N° 08
            </span>
            <div className="font-serif text-2xl font-normal leading-none tracking-tight">
              ARCHITECTURE &amp; SILHOUETTE
            </div>
            <p className="text-[11px] text-black/70 line-clamp-2">
              Bespoke luxury digital runway rendered with 4K physical textile micro-physics.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-black/10 text-[10px] font-mono">
            <div className="p-2 bg-black/5 rounded">
              <span className="text-black/50 block">CONVERSION</span>
              <span className="font-bold text-black">+180% LIFT</span>
            </div>
            <div className="p-2 bg-black/5 rounded">
              <span className="text-black/50 block">LAUNCH GMV</span>
              <span className="font-bold text-[#E94B2F]">$42,000,000</span>
            </div>
          </div>
        </div>
      );
    }

    if (project.id === 'pulse') {
      return (
        <div className="relative w-full h-full p-6 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#140D0A] via-[#0E0B0A] to-[#070707] rounded-2xl border border-[#E94B2F]/30">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#E94B2F]" />
              <span className="text-[10px] font-mono text-white font-bold tracking-wider">
                PULSE_TERMINAL
              </span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-[#E94B2F]/20 text-[#FF8A3D] text-[9px] font-mono">
              12ms LATENCY
            </span>
          </div>

          {/* Glowing Candlestick / Orderbook Matrix Visual */}
          <div className="my-3 flex items-end justify-between h-28 px-2 bg-black/40 rounded-xl p-3 border border-white/5">
            {[35, 60, 45, 90, 70, 85, 100, 55, 75, 95].map((val, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div
                  className="w-3 rounded-sm transition-all duration-300"
                  style={{
                    height: `${val}%`,
                    backgroundColor: i % 2 === 0 ? '#E94B2F' : '#FF6A2A',
                    boxShadow: i % 2 === 0 ? '0 0 10px rgba(233,75,47,0.5)' : '0 0 10px rgba(255,106,42,0.5)',
                  }}
                />
              </div>
            ))}
          </div>

          <div className="flex justify-between text-[10px] font-mono text-[#A8A39B] border-t border-white/10 pt-2">
            <span>VOLUME 24H: $1.84B</span>
            <span className="text-[#FF8A3D]">UPTIME: 99.999%</span>
          </div>
        </div>
      );
    }

    // ATLAS
    return (
      <div className="relative w-full h-full p-6 flex flex-col justify-between overflow-hidden bg-[#0A0A0C] rounded-2xl border border-white/10">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#FF8A3D]" />
            <span className="text-[10px] font-mono text-white font-bold tracking-wider">
              ATLAS_TOKEN_STUDIO
            </span>
          </div>
          <span className="text-[9px] font-mono text-[#A8A39B]">120+ TOKENS</span>
        </div>

        {/* Dynamic Token Stack visual */}
        <div className="my-2 space-y-2">
          <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-between">
            <span className="text-[10px] font-mono text-white">color.spatial.accent</span>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF6A2A]" />
              <span className="text-[10px] font-mono text-[#FF8A3D]">#FF6A2A</span>
            </div>
          </div>
          <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-between">
            <span className="text-[10px] font-mono text-white">typography.display.hero</span>
            <span className="text-[10px] font-mono text-[#A8A39B]">Space Grotesk 96px</span>
          </div>
        </div>

        <div className="flex justify-between items-center text-[10px] font-mono text-white/70 border-t border-white/10 pt-2">
          <span>8 GLOBAL DIVISIONS</span>
          <span className="text-[#FF8A3D]">SYNC ACTIVE</span>
        </div>
      </div>
    );
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        soundManager.playClick();
        onSelect(project);
      }}
      className="group relative cursor-pointer perspective-1000"
    >
      {/* 3D Moving Container */}
      <div
        className="relative rounded-3xl bg-[#0C0C0E] border border-white/[0.08] p-6 sm:p-8 transition-all duration-300 ease-out will-change-transform shadow-2xl group-hover:border-white/25 group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.8)]"
        style={{
          transform: isHovered
            ? `rotateX(${tilt.y * -8}deg) rotateY(${tilt.x * 8}deg) translateY(-8px) translateZ(20px)`
            : 'rotateX(0deg) rotateY(0deg) translateY(0px) translateZ(0px)',
        }}
      >
        {/* Subtle Ambient Corner Glow */}
        <div
          className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[80px] pointer-events-none transition-opacity duration-300 -z-10"
          style={{
            backgroundColor: project.accentColor,
            opacity: isHovered ? 0.2 : 0.05,
          }}
        />

        {/* Header Metadata */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#FF6A2A]">
              {project.number}
            </span>
            <span className="text-xs font-mono tracking-widest text-[#A8A39B] uppercase">
              {project.category}
            </span>
          </div>
          <span className="text-xs font-mono text-[#A8A39B]/70">
            {project.year}
          </span>
        </div>

        {/* 3D Visual Mockup Showcase Area */}
        <div className="w-full h-64 sm:h-72 md:h-80 mb-6 rounded-2xl overflow-hidden preserve-3d">
          <div
            className="w-full h-full transition-transform duration-300 ease-out"
            style={{
              transform: isHovered
                ? `rotateX(${tilt.y * -4}deg) rotateY(${tilt.x * 4}deg) scale(1.03)`
                : 'scale(1)',
            }}
          >
            {renderProjectVisual()}
          </div>
        </div>

        {/* Title and Tagline */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-[#FF8A3D] transition-colors">
              {project.title}
            </h3>
            <p className="text-xs font-mono tracking-wider text-[#A8A39B] uppercase mt-1">
              {project.client}
            </p>
          </div>

          <div className="p-3 rounded-full bg-white/[0.04] border border-white/10 group-hover:bg-[#FF6A2A] group-hover:text-white transition-all duration-300 text-[#A8A39B]">
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        <p className="text-sm text-[#A8A39B] font-normal leading-relaxed mb-6 line-clamp-2">
          {project.overview}
        </p>

        {/* Quick Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 border-t border-white/[0.06]">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-[10px] font-mono text-[#A8A39B] uppercase truncate">
                {m.label}
              </span>
              <span className="text-sm font-mono font-bold text-white mt-0.5">
                {m.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
