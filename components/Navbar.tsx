import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      
      if (element) {
        // Offset for fixed header
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    
    setIsOpen(false);
  };

  const navLinks = [
    { name: t.nav.home, href: '#' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.portfolio, href: '#portfolio' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/60 backdrop-blur-xl border-b border-white/5 py-1' 
          : 'bg-transparent py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo - Keeping container wide to allow larger image height without clipping */}
        <a 
          href="#" 
          onClick={(e) => handleNavClick(e, '#')}
          className="block w-48 md:w-64 hover:opacity-90 transition-opacity relative z-50"
        >
          <Logo />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-gray-300 hover:text-yellow-400 transition-colors text-sm font-medium tracking-wide relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          
          <div className="h-6 w-px bg-white/20 mx-2"></div>

          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors text-sm font-medium"
          >
            <Globe className="w-4 h-4" />
            <span>{language === 'ar' ? 'English' : 'العربية'}</span>
          </button>

          <a 
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="bg-transparent border border-yellow-500/50 text-yellow-500 px-5 py-1.5 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300 text-sm font-bold cursor-pointer"
          >
            {t.nav.startProject}
          </a>
        </div>

        {/* Mobile Layout Controls */}
        <div className="flex items-center gap-4 md:hidden">
            <button 
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors text-sm font-medium"
            >
                <Globe className="w-4 h-4" />
                <span>{language === 'ar' ? 'EN' : 'AR'}</span>
            </button>

            {/* Mobile Toggle */}
            <button 
                className="text-white relative z-50"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-xl transition-all duration-300 flex items-center justify-center ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col items-center gap-8 text-center p-6 w-full">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-white text-2xl font-medium hover:text-yellow-400 transition-colors"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="mt-4 bg-yellow-500 text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-400 transition-colors"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            {t.nav.startProject}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;