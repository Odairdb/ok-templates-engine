"use client";

import React from 'react';
import { motion } from 'framer-motion';

const nicheImages = {
  default: [
    "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800&auto=format&fit=crop",
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
    "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=800&auto=format&fit=crop",
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
    <section className="bg-white relative flex flex-col items-center w-full" style={{ paddingTop: '90px', paddingBottom: '90px' }}>
      <div className="w-full max-w-[1200px] mx-auto px-10 md:px-16 lg:px-20">
        <div className="flex flex-col items-center text-center mb-32" style={{ marginBottom: '80px' }}>
          <div className="max-w-3xl">
            <span className="text-[#C5A880] font-bold tracking-widest uppercase text-sm mb-4 block">Portfólio</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-12">Resultados Reais</h2>
          </div>
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
