"use client";

import React from 'react';
import { motion } from 'framer-motion';

const nicheImages = {
  default: [
    "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=800&auto=format&fit=crop"
  ],
  barbearia: [
    "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503951458645-643d53bfd90f?q=80&w=800&auto=format&fit=crop"
  ],
  salao: [
    "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600948836101-f9ff5141014a?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?q=80&w=800&auto=format&fit=crop"
  ],
  manicure: [
    "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1594910903332-9df7270b2a75?q=80&w=800&auto=format&fit=crop"
  ]
};

export default function AuraGallery({ niche }: { niche: string }) {
  const images = nicheImages[niche as keyof typeof nicheImages] || nicheImages.default;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-[#C5A880] font-bold tracking-widest uppercase text-sm mb-4 block">Portfólio</span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900">Resultados Reais</h2>
          </div>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hidden md:inline-block pb-1 border-b border-gray-900 font-bold hover:text-[#C5A880] hover:border-[#C5A880] transition-colors mt-6 md:mt-0">
            Siga nosso Instagram
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group ${index === 0 || index === 3 ? 'aspect-[3/4]' : 'aspect-square md:aspect-[3/4] mt-0 md:mt-8'}`}
            >
              <img 
                src={src} 
                alt={`Trabalho ${index + 1}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
