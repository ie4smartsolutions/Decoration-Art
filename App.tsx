import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#050505] overflow-x-hidden selection:bg-yellow-500 selection:text-black">
        {/* Background Ambient Effects */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-yellow-600/10 rounded-full blur-[120px] opacity-40"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[150px] opacity-30"></div>
          <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-purple-900/10 rounded-full blur-[100px] opacity-20"></div>
        </div>

        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <WhyChooseUs />
          <Testimonials />
          <Contact />
        </main>

        <Footer />
        <BackToTop />
      </div>
    </LanguageProvider>
  );
}