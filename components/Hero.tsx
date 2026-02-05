import React, { useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t, language } = useLanguage();
  const parallaxRef = useRef<HTMLImageElement>(null);
  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        // Apply parallax transform: move down slower than scroll (0.3 factor)
        // Keep scale 1.25 to prevent white gaps at edges
        parallaxRef.current.style.transform = `translate3d(0, ${scrolled * 0.3}px, 0) scale(1.25)`;
      }
    };

    // Initial positioning
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          ref={parallaxRef}
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" 
          alt="Luxury Interior" 
          className="w-full h-full object-cover opacity-30 will-change-transform"
          style={{ transform: 'scale(1.25)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-[#050505]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 backdrop-blur-md">
          <span className="text-yellow-400 text-sm font-semibold tracking-wider uppercase">{t.hero.badge}</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 leading-tight font-sans">
          Decoration Art
        </h1>
        
        {/* Bilingual Slogan */}
        <h2 className="text-lg md:text-2xl text-gray-300 font-light tracking-widest uppercase mb-6 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
          <span className="font-medium tracking-normal">{t.hero.slogan}</span>
        </h2>
        
        <h3 className="text-3xl md:text-5xl font-bold text-gold-gradient mb-8 leading-tight">
          {t.hero.heading}
        </h3>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.hero.description}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#services" className="px-8 py-4 bg-gold-gradient text-black font-bold rounded-full hover:shadow-[0_0_20px_rgba(252,246,186,0.4)] transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2">
            {t.hero.discover}
            <ArrowIcon className="w-5 h-5" />
          </a>
          <a href="#contact" className="px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-md text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300">
            {t.hero.start}
          </a>
        </div>
      </div>

      {/* Decorative Floating Elements */}
      <div className={`absolute bottom-10 ${language === 'ar' ? 'left-10' : 'right-10'} hidden md:block animate-bounce duration-[3000ms]`}>
        <div className="w-16 h-16 border border-yellow-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;