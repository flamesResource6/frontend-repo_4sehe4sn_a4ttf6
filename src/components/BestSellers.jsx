import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Star } from 'lucide-react';

const products = [
  {
    id: 'resilient-spirit',
    name: 'Resilient Spirit — Turtle Pendant',
    price: '$180',
    image: 'https://images.unsplash.com/photo-1730309485494-e4f93d86b11c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSZXNpbGllbnQlMjBTcGlyaXQlMjAlRTIlODAlOTQlMjBUdXJ0bGV8ZW58MHwwfHx8MTc2MjU2NjA1Mnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 'soaring-change',
    name: 'Butterfly — Soaring Change',
    price: '$220',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'inner-fire',
    name: 'Dragon — Inner Fire',
    price: '$260',
    image: 'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=1200&auto=format&fit=crop',
  },
];

const BestSellers = () => {
  const reduce = useReducedMotion();
  return (
    <section className="bg-white text-[#0A0A0A] py-16" id="catalog">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-semibold" style={{ fontFamily: 'Playfair Display, ui-serif, Georgia, serif' }}>Best-sellers</h2>
          <a href="#" className="text-sm text-[#D4AF37] font-medium hover:underline">View all</a>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.a
              href={`#product-${p.id}`}
              key={p.id}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={reduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group block overflow-hidden rounded-2xl border border-[#0A0A0A]/10 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{p.name}</h3>
                  <span className="text-[#0A0A0A]/70">{p.price}</span>
                </div>
                <div className="mt-2 flex items-center gap-1 text-[#D4AF37]">
                  {[0,1,2,3,4].map((s) => <Star key={s} size={16} fill="#D4AF37" className="text-[#D4AF37]" />)}
                  <span className="ml-2 text-xs text-[#0A0A0A]/60">(124)</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
