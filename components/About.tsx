import React from 'react';
import { Target, Eye, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t, language } = useLanguage();

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 text-white ${language === 'ar' ? 'border-r-4 pr-4' : 'border-l-4 pl-4'} border-yellow-500`}>
              {t.about.title}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {t.about.description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-yellow-500/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.about.visionTitle}</h3>
                <p className="text-gray-400 text-sm">
                  {t.about.visionDesc}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-yellow-500/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.about.missionTitle}</h3>
                <p className="text-gray-400 text-sm">
                  {t.about.missionDesc}
                </p>
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative">
            <div className="absolute inset-0 bg-gold-gradient blur-3xl opacity-20 rounded-full"></div>
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-8">
                <div className="h-64 rounded-2xl overflow-hidden border border-white/10">
                    <img src="https://images.unsplash.com/photo-1541512416146-3cf58d6b27cc?q=80&w=800&auto=format&fit=crop" alt="Office" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="h-40 rounded-2xl overflow-hidden border border-white/10 p-6 bg-white/5 backdrop-blur-md flex flex-col justify-center items-center text-center">
                    <span className="text-4xl font-bold text-yellow-500 mb-2">+10</span>
                    <span className="text-gray-300">{t.about.years}</span>
                </div>
              </div>
              <div className="space-y-4">
                 <div className="h-40 rounded-2xl overflow-hidden border border-white/10 p-6 bg-yellow-500/10 backdrop-blur-md flex flex-col justify-center items-center text-center">
                    <Award className="w-10 h-10 text-yellow-500 mb-3" />
                    <span className="text-gray-300">{t.about.awards}</span>
                </div>
                <div className="h-64 rounded-2xl overflow-hidden border border-white/10">
                    <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop" alt="Showroom" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;