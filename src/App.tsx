import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

export function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStartProject = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#F5F1EA] selection:bg-[#FF6A2A]/30 selection:text-white bg-noise">
      {/* Scroll Progress Bar at the top of the viewport */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] bg-transparent z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#FF6A2A] via-[#FF8A3D] to-[#E94B2F] transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Interactive Custom Cursor Follower */}
      <CustomCursor />

      {/* Main Navigation */}
      <Navigation onStartProject={handleStartProject} />

      {/* Main Agency Content Flow */}
      <main className="relative">
        <Hero onStartProject={handleStartProject} />
        <SelectedWork />
        <Services />
        <Process />
        <About />
        <Contact />
      </main>

      {/* Agency Footer */}
      <Footer />
    </div>
  );
}

export default App;
