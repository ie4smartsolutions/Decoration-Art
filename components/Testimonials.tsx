import React from 'react';
import { Quote, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Testimonials = () => {
  const { t, language } = useLanguage();

  return (
    <section id="testimonials" className="py-24 bg-[#080808] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-yellow-600/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-yellow-500/5 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            {t.testimonials.title} <span className="text-gold-gradient">{t.testimonials.highlight}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.testimonials.items.map((item: any, index: number) => (
            <div 
              key={index}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm relative hover:-translate-y-2 transition-transform duration-300 group"
            >
              {/* Quote Icon Positioned based on Language */}
              <Quote className={`absolute top-8 ${language === 'ar' ? 'left-8' : 'right-8'} w-10 h-10 text-yellow-500/10 group-hover:text-yellow-500/20 transition-colors`} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              <p className="text-gray-300 mb-8 leading-relaxed relative z-10">
                "{item.text}"
              </p>

              <div className="flex items-center gap-4 mt-auto border-t border-white/5 pt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-700 flex items-center justify-center text-black font-bold text-lg shadow-lg shrink-0">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">{item.name}</h4>
                  <p className="text-yellow-500/80 text-sm">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;