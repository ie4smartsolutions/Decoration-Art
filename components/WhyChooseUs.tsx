import React from 'react';
import { Clock, ShieldCheck, Sparkles, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const icons = [
  <Sparkles className="w-6 h-6" />,
  <ShieldCheck className="w-6 h-6" />,
  <Clock className="w-6 h-6" />,
  <Users className="w-6 h-6" />
];

const WhyChooseUs = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#111] to-black opacity-90"></div>
            <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2274&auto=format&fit=crop" className="w-full h-full object-cover opacity-10" alt="Background Texture" />
        </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-bold text-white mb-6">{t.whyChooseUs.title} <br /> <span className="text-gold-gradient">Decoration Art?</span></h2>
            <p className="text-gray-400 mb-10 text-lg">
              {t.whyChooseUs.subtitle}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {t.whyChooseUs.items.map((feature: any, idx: number) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors backdrop-blur-md">
                  <div className="text-yellow-500 mb-4">{icons[idx]}</div>
                  <h4 className="text-white font-bold text-lg mb-2">{feature.title}</h4>
                  <p className="text-gray-400 text-sm">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
             <div className="absolute -inset-4 bg-yellow-500/20 rounded-full blur-3xl"></div>
             <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop" 
                alt="Luxury Object" 
                className="relative w-full h-auto rounded-2xl shadow-2xl border border-white/10 rotate-3 hover:rotate-0 transition-transform duration-500"
             />
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;