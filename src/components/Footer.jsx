import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-white py-10">
      <div className="max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-1 sm:grid-cols-3 gap-8 items-start">
        <div>
          <h3 className="text-lg font-semibold" style={{ fontFamily: 'Playfair Display, ui-serif, Georgia, serif' }}>MotiviQue</h3>
          <p className="mt-2 text-sm text-white/70">Wear Your Why. Protect Your Flame.</p>
        </div>
        <nav className="grid gap-2 text-sm text-white/80">
          <a href="#catalog" className="hover:text-white">Catalog</a>
          <a href="#story" className="hover:text-white">Story</a>
          <a href="#support" className="hover:text-white">Support</a>
        </nav>
        <form className="grid gap-2">
          <label htmlFor="email" className="text-sm">Newsletter</label>
          <div className="flex overflow-hidden rounded-2xl border border-white/20">
            <input id="email" type="email" placeholder="Your email" className="flex-1 bg-transparent px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none" />
            <button type="submit" className="bg-[#D4AF37] text-[#0A0A0A] px-4 font-medium">Follow the Flame</button>
          </div>
        </form>
      </div>
      <div className="mt-8 text-center text-xs text-white/60">© {new Date().getFullYear()} MotiviQue. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
