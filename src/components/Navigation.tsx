import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface NavigationProps {
  onStartProject?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onStartProject }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['work', 'services', 'process', 'about', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleSound = () => {
    const newState = soundManager.toggleSound();
    setSoundEnabled(newState);
  };

  const navLinks = [
    { label: 'WORK', href: '#work', id: 'work' },
    { label: 'SERVICES', href: '#services', id: 'services' },
    { label: 'PROCESS', href: '#process', id: 'process' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    soundManager.playClick();
    setMobileMenuOpen(false);

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#050505]/80 backdrop-blur-xl border-b border-white/[0.06] py-3.5 shadow-2xl'
            : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, '#')}
            onMouseEnter={() => soundManager.playHover()}
            className="group flex items-center gap-3 cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <span className="font-['Space_Grotesk'] font-bold text-lg md:text-xl tracking-tight text-white group-hover:text-[#FF6A2A] transition-colors">
                FORM <span className="text-[#FF6A2A]">/</span> LAB
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FF6A2A] animate-pulse" />
            </div>
            <span className="hidden lg:inline-block text-[11px] font-mono tracking-widest text-[#A8A39B]/60 uppercase border-l border-white/10 pl-3">
              Q3/Q4 AVAILABILITY
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium tracking-widest font-mono">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  onMouseEnter={() => soundManager.playHover()}
                  className={`relative py-1 transition-colors ${
                    isActive ? 'text-white' : 'text-[#A8A39B] hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#FF6A2A] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Group */}
          <div className="flex items-center gap-3 md:gap-5">
            {/* Audio Toggle Button */}
            <button
              type="button"
              onClick={handleToggleSound}
              onMouseEnter={() => soundManager.playHover()}
              aria-label={soundEnabled ? 'Mute sound effects' : 'Enable sound effects'}
              className="p-2.5 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-[#A8A39B] hover:text-white transition-all cursor-pointer"
              title={soundEnabled ? 'Sound Enabled' : 'Enable Micro-Audio'}
            >
              {soundEnabled ? (
                <div className="flex items-center gap-1.5">
                  <Volume2 className="w-4 h-4 text-[#FF6A2A]" />
                  <span className="hidden sm:inline text-[10px] font-mono text-[#FF6A2A]">ON</span>
                </div>
              ) : (
                <div className="flex items-center gap-1.5">
                  <VolumeX className="w-4 h-4 text-[#A8A39B]" />
                  <span className="hidden sm:inline text-[10px] font-mono text-[#A8A39B]">SFX</span>
                </div>
              )}
            </button>

            {/* Start a project primary pill CTA */}
            <a
              href="#contact"
              onClick={(e) => {
                if (onStartProject) {
                  e.preventDefault();
                  onStartProject();
                } else {
                  handleNavClick(e, '#contact');
                }
              }}
              onMouseEnter={() => soundManager.playHover()}
              className="group hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-mono tracking-wider font-semibold rounded-full bg-white text-black hover:bg-[#FF6A2A] hover:text-white transition-all duration-300 shadow-lg"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => {
                soundManager.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              aria-label="Toggle navigation menu"
              className="md:hidden p-2 rounded-lg border border-white/10 bg-white/[0.03] text-white hover:bg-white/[0.08] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-30 bg-[#050505]/95 backdrop-blur-2xl transition-all duration-500 md:hidden flex flex-col justify-between p-8 pt-28 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-6">
          <div className="text-[11px] font-mono text-[#FF6A2A] tracking-widest uppercase">
            // Navigation
          </div>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-3xl font-['Space_Grotesk'] font-bold text-white hover:text-[#FF6A2A] transition-colors flex items-center justify-between border-b border-white/[0.08] pb-4"
            >
              <span>{link.label}</span>
              <ArrowUpRight className="w-5 h-5 text-[#A8A39B]" />
            </a>
          ))}
        </div>

        <div className="pt-6 border-t border-white/[0.08] flex flex-col gap-4">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="w-full py-3.5 text-center text-sm font-mono tracking-wider font-semibold rounded-full bg-[#FF6A2A] text-white"
          >
            START A PROJECT →
          </a>
          <div className="flex items-center justify-between text-xs text-[#A8A39B] font-mono">
            <span>FORM / LAB STUDIO</span>
            <span>hello@formlab.studio</span>
          </div>
        </div>
      </div>
    </>
  );
};
