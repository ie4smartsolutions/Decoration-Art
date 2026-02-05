import React from 'react';
import { PenTool, Layout, Megaphone, MonitorPlay, Palette, Lightbulb } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const icons = [
  <Layout className="w-8 h-8" />,
  <Megaphone className="w-8 h-8" />,
  <MonitorPlay className="w-8 h-8" />,
  <Palette className="w-8 h-8" />,
  <PenTool className="w-8 h-8" />,
  <Lightbulb className="w-8 h-8" />
];

const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-900/10 via-black to-black"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">{t.services.title} <span className="text-yellow-500">{t.services.highlight}</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.items.map((service: any, index: number) => (
            <div 
              key={index} 
              className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Gold Glow on Hover */}
              <div className="absolute inset-0 bg-yellow-500/0 rounded-2xl group-hover:bg-yellow-500/5 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-500/20 to-black border border-yellow-500/30 flex items-center justify-center mb-6 group-hover:border-yellow-500 transition-colors duration-300">
                  <div className="text-yellow-500 group-hover:text-yellow-400 transition-colors">
                    {icons[index]}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;