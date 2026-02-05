import React from 'react';
import { Instagram, Facebook } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Logo from './Logo';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6 w-48">
              <Logo />
            </div>
            <p className="text-gray-500 leading-relaxed max-w-sm">
              {t.footer.desc}
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">{t.footer.quickLinks}</h4>
            <ul className="space-y-3 text-gray-500">
              <li><a href="#" className="hover:text-yellow-500 transition-colors">{t.nav.home}</a></li>
              <li><a href="#about" className="hover:text-yellow-500 transition-colors">{t.nav.about}</a></li>
              <li><a href="#services" className="hover:text-yellow-500 transition-colors">{t.nav.services}</a></li>
              <li><a href="#portfolio" className="hover:text-yellow-500 transition-colors">{t.nav.portfolio}</a></li>
              <li><a href="#contact" className="hover:text-yellow-500 transition-colors">{t.nav.contact}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t.footer.followUs}</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/Decorati0nArt/" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Decoration Art - Facebook"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-yellow-500 hover:border-yellow-500 transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/decoration.art90" 
                target="_blank" 
                rel="noopener noreferrer"
                title="decoration.art90 - Instagram"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-yellow-500 hover:border-yellow-500 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} {t.footer.rights}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-400 transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-gray-400 transition-colors">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;