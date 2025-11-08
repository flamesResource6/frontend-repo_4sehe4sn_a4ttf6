import React from 'react';
import { Shield, Sparkles, Feather } from 'lucide-react';

const items = [
  {
    icon: Shield,
    title: 'Protect Your Flame',
    text: 'Symbolic pendants crafted for meaning, intention, and everyday resilience.'
  },
  {
    icon: Sparkles,
    title: 'Premium Craft',
    text: 'Hypoallergenic metals, luminous finish, and meticulous polishing.'
  },
  {
    icon: Feather,
    title: 'Light, Effortless',
    text: 'Comfortable wear with soft edges and rounded-2xl forms.'
  },
];

const ValueProps = () => {
  return (
    <section className="bg-white text-[#0A0A0A] py-16" id="story">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold" style={{ fontFamily: 'Playfair Display, ui-serif, Georgia, serif' }}>
          Minimal, luminous, intentional
        </h2>
        <p className="mt-3 text-[#0A0A0A]/70 max-w-2xl">
          We create symbolic jewelry to help you wear your why—pieces that whisper courage and quiet strength.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-[#0A0A0A]/10 p-6 bg-white shadow-sm">
              <Icon className="text-[#D4AF37]" />
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-[#0A0A0A]/70">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
