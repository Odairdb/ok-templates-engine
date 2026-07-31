"use client";

import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';

export default function AuraHeader({ niche }: { niche: string }) {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[#1A1A1A]/70 backdrop-blur-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-b border-white/5 py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex items-center justify-between">
        <Link href={`/aura?nicho=${niche}`} className="flex items-center gap-2">
          <span className="text-2xl font-serif font-bold text-[#C5A880] tracking-wider">AURA</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-10">
          <a href="#servicos" className="text-white/80 hover:text-[#C5A880] text-xs uppercase tracking-[0.2em] font-bold transition-colors">Serviços</a>
          <a href="#portfolio" className="text-white/80 hover:text-[#C5A880] text-xs uppercase tracking-[0.2em] font-bold transition-colors">Portfólio</a>
          <a href="#equipe" className="text-white/80 hover:text-[#C5A880] text-xs uppercase tracking-[0.2em] font-bold transition-colors">Equipe</a>
        </nav>

        <a href="#agendar" className="bg-[#C5A880] hover:bg-[#a68a65] text-[#1A1A1A] font-black px-6 py-2.5 rounded-full text-xs uppercase tracking-widest transition-transform hover:scale-105 shadow-md hidden sm:block">
          Agendar
        </a>
      </div>
    </motion.header>
  );
}
