import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Removed webhook call as requested. 
      // Currently just logging data and showing success message.
      console.log('Form Submitted:', formData);

      setStatus('success');
      setFormData({ fullName: '', phone: '', email: '', message: '' });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 relative">
        {/* Subtle Glow */}
        <div className={`absolute bottom-0 ${language === 'ar' ? 'right-0' : 'left-0'} w-1/3 h-1/2 bg-yellow-600/10 blur-[120px] pointer-events-none`}></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">{t.contact.title} <span className="text-yellow-500">{t.contact.highlight}</span></h2>
          <p className="text-gray-400">{t.contact.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info & Map */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">{t.contact.call}</h3>
                  <p className="text-gray-400 dir-ltr text-right font-mono">01097820086</p>
                  <p className="text-gray-400 dir-ltr text-right font-mono">01066903731</p>
                  <p className="text-gray-400 dir-ltr text-right font-mono">01003640838</p>
                  <p className="text-gray-400 dir-ltr text-right font-mono">01147702335</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">{t.contact.email}</h3>
                  <p className="text-gray-400 break-all">decoration.art90@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">{t.contact.location}</h3>
                  <p className="text-gray-400">{t.contact.locationText}</p>
                </div>
              </div>
            </div>
            
            {/* Visual Map Placeholder - Updated to Shabrament/Marioutia area */}
            <div className="h-64 rounded-2xl overflow-hidden border border-white/10 relative grayscale hover:grayscale-0 transition-all duration-500">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55318.52803657788!2d31.1856173!3d29.9392231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458406155982e03%3A0xc47805167f130796!2sShabramant%2C%20Giza%20Governorate!5e0!3m2!1sen!2seg!4v1740000000000!5m2!1sen!2seg" 
                    width="100%" 
                    height="100%" 
                    style={{border:0, filter: 'invert(90%) hue-rotate(180deg)'}} 
                    allowFullScreen 
                    loading="lazy"
                    title="Map"
                ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl h-full flex flex-col justify-center relative overflow-hidden">
              
              {/* Success Overlay */}
              {status === 'success' && (
                <div className="absolute inset-0 bg-black/80 backdrop-blur-md z-10 flex flex-col items-center justify-center text-center p-6 animate-in fade-in duration-300">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{t.contact.form.successTitle}</h3>
                  <p className="text-gray-400 mb-6">{t.contact.form.successDesc}</p>
                  <button 
                    type="button" 
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm text-white transition-colors"
                  >
                    {t.contact.form.sendAnother}
                  </button>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="fullName" className="block text-gray-400 mb-2 text-sm">{t.contact.form.fullName}</label>
                  <input 
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    type="text" 
                    className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all" 
                    placeholder={t.contact.form.fullNamePh} 
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-400 mb-2 text-sm">{t.contact.form.phone}</label>
                  <input 
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    type="tel" 
                    className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all" 
                    placeholder="01xxxxxxxxx" 
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-400 mb-2 text-sm">{t.contact.form.email}</label>
                <input 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  type="email" 
                  className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all" 
                  placeholder="example@email.com" 
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-gray-400 mb-2 text-sm">{t.contact.form.message}</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4} 
                  className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all resize-none" 
                  placeholder={t.contact.form.messagePh}
                ></textarea>
              </div>

              {status === 'error' && (
                <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  <span>{t.contact.form.error}</span>
                </div>
              )}

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full bg-gold-gradient text-black font-bold py-4 rounded-lg hover:shadow-[0_0_20px_rgba(252,246,186,0.3)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> {t.contact.form.sending}
                  </>
                ) : (
                  <>
                    {t.contact.form.submit} <Send className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;