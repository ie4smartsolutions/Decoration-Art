import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Updated images to align with the new translation order
const projectImages = [
  "https://drive.google.com/thumbnail?id=1-XwGr2pEecd_k0sFDAeCRPWZ53qZ9Cx4&sz=w1600", // FPI Quetiapine
  "https://drive.google.com/thumbnail?id=196wvzDALuXUpVBcszXOXGs_IxyYzd9Q_&sz=w1600", // Elixir
  "https://drive.google.com/thumbnail?id=1uZS8lqMedpmTaC_xTH82oEk59yKAvvZt&sz=w1600", // ACT (Updated from El-Wafaa)
  "https://drive.google.com/thumbnail?id=18umEUJLYmLctIBClNQwJ-jv5ibJC34DA&sz=w1600", // El Masrya Foundation
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop", // Luxury Interior vibe
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop"  // 3D/Digital Waterfall vibe
];

const Portfolio = () => {
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-white mb-2">{t.portfolio.title} <span className="text-gold-gradient">{t.portfolio.highlight}</span></h2>
            <p className="text-gray-400">{t.portfolio.subtitle}</p>
          </div>
          <button className="mt-4 md:mt-0 px-6 py-2 border border-yellow-500 text-yellow-500 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300">
            {t.portfolio.seeMore}
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.portfolio.items.map((project: any, index: number) => (
            <div 
              key={index} 
              className="group relative h-72 rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-[0_0_50px_rgba(234,179,8,0.4)] hover:-translate-y-2 border border-white/5"
            >
              {/* Image */}
              <img 
                src={projectImages[index]} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1)">
                  <span className="text-yellow-500 text-sm font-medium tracking-wider uppercase mb-2 block">{project.category}</span>
                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  <button className="inline-flex items-center gap-2 text-white hover:text-yellow-400 transition-colors border-b border-yellow-500 pb-1">
                    {t.portfolio.details} <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              {/* Border Gradient on Hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-500/70 rounded-xl transition-all duration-300 pointer-events-none group-hover:shadow-[inset_0_0_30px_rgba(234,179,8,0.2)]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
