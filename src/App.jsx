import React from 'react';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import BestSellers from './components/BestSellers';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-[#0A0A0A]">
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-[#0A0A0A]/10">
        <div className="max-w-6xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-semibold" style={{ fontFamily: 'Playfair Display, ui-serif, Georgia, serif' }}>MotiviQue</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#catalog" className="hover:text-[#D4AF37]">Catalog</a>
            <a href="#story" className="hover:text-[#D4AF37]">Story</a>
            <a href="#support" className="hover:text-[#D4AF37]">Support</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="rounded-2xl bg-[#D4AF37] text-[#0A0A0A] px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2">Shop</button>
          </div>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <ValueProps />
        <BestSellers />
      </main>

      <Footer />
    </div>
  );
}

export default App;
