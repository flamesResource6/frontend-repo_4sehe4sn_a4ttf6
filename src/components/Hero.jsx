import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useReducedMotion } from 'framer-motion';

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  const headingVariants = shouldReduceMotion
    ? {}
    : {
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
      };

  return (
    <section className="relative w-full min-h-[88vh] overflow-hidden bg-[#0A0A0A] text-white">
      <div className="absolute inset-0" aria-hidden="true">
        <Spline scene="https://prod.spline.design/JqBuM4DcZiGXqO-1/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* luminous vignette and gold glow overlay - never block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        <div className="pointer-events-none absolute inset-0" style={{
          background: 'radial-gradient(600px 300px at 50% 30%, rgba(212,175,55,0.15), transparent 70%)'
        }} />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 md:px-8 pt-28 pb-24 flex flex-col items-center text-center">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={headingVariants}
          className="text-4xl md:text-6xl font-semibold tracking-tight"
          style={{ fontFamily: 'Playfair Display, ui-serif, Georgia, serif' }}
        >
          MotiviQue
          <span className="block mt-2 text-[#D4AF37]">Follow the Flame</span>
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={shouldReduceMotion ? {} : { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.2 } } }}
          className="mt-6 max-w-2xl text-base md:text-lg text-white/80"
        >
          Premium symbolic pendants crafted to protect your flame. Minimal, luminous, and timeless.
        </motion.p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#catalog"
            className="group inline-flex items-center justify-center rounded-2xl bg-[#D4AF37] px-6 py-3 text-[#0A0A0A] font-semibold shadow-[0_8px_24px_rgba(212,175,55,0.25)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4AF37] focus:ring-offset-black transition"
          >
            <span className="relative">
              Shop Best-Sellers
              <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-focus:opacity-100 transition" style={{
                background: 'linear-gradient(90deg, rgba(255,255,255,0.0), rgba(255,255,255,0.35), rgba(255,255,255,0.0))',
                boxShadow: 'inset 0 0 0 1px rgba(10,10,10,0.05)'
              }} />
            </span>
          </a>
          <a
            href="#story"
            className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 backdrop-blur px-6 py-3 text-white hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/30 focus:ring-offset-black"
          >
            Learn the Story
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
