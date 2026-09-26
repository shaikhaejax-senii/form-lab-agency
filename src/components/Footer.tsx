import React from 'react';
import { ArrowUp } from 'lucide-react';
import { soundManager } from '../utils/audio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundManager.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 sm:py-16 border-t border-white/[0.08] relative bg-[#040404]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/[0.06]">
          {/* Left Brand */}
          <div className="space-y-1">
            <div className="font-['Space_Grotesk'] font-bold text-xl tracking-tight text-white flex items-center gap-2">
              <span>FORM</span>
              <span className="text-[#FF6A2A]">/</span>
              <span>LAB</span>
            </div>
            <p className="text-xs font-mono text-[#A8A39B]">
              Digital experiences / Creative technology
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono tracking-wider">
            {[
              { label: 'INSTAGRAM', href: 'https://instagram.com' },
              { label: 'LINKEDIN', href: 'https://linkedin.com' },
              { label: 'TWITTER / X', href: 'https://x.com' },
              { label: 'GITHUB', href: 'https://github.com' },
              { label: 'EMAIL', href: 'mailto:hello@formlab.studio' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => soundManager.playHover()}
                className="text-[#A8A39B] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            onMouseEnter={() => soundManager.playHover()}
            aria-label="Back to top of page"
            className="p-3 rounded-full border border-white/10 hover:border-white/30 bg-white/[0.03] text-white hover:bg-white/[0.08] transition-all flex items-center gap-2 text-xs font-mono"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#FF6A2A]" />
          </button>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#A8A39B]/60">
          <div>© 2026 FORM / LAB. ALL RIGHTS RESERVED.</div>
          <div className="flex items-center gap-4">
            <span>TOKYO — LONDON — NYC</span>
            <span>•</span>
            <span className="text-[#FF8A3D]">AWWWARDS DESIGN EXCELLENCE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
