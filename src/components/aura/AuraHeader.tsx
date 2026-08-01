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
          ? "bg-[#1A1A1A]/70 backdrop-blur-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-b border-white/5 py-6" 
          : "bg-transparent py-10"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-8 md:px-16 lg:px-20 flex items-center justify-between">
        <Link href={`/aura?nicho=${niche}`} className="flex items-center w-32 md:w-48 h-10">
          {/* Logo container reserved width */}
          <span className="text-2xl font-serif font-bold text-[#C5A880] tracking-wider">AURA</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-10">
          <a href="#servicos" className="text-white/80 hover:text-[#C5A880] text-sm uppercase tracking-[0.2em] font-bold transition-colors">Serviços</a>
          <a href="#portfolio" className="text-white/80 hover:text-[#C5A880] text-sm uppercase tracking-[0.2em] font-bold transition-colors">Portfólio</a>
          <a href="#equipe" className="text-white/80 hover:text-[#C5A880] text-sm uppercase tracking-[0.2em] font-bold transition-colors">Equipe</a>
        </nav>

        <a href="#agendar" className="bg-[#C5A880] hover:bg-[#D4B58A] text-[#1A1A1A] font-black px-10 py-5 rounded-full text-sm uppercase tracking-[0.2em] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(197,168,128,0.6)] shadow-[0_0_15px_rgba(197,168,128,0.3)] hidden sm:block">
          Agendar
        </a>
      </div>
    </motion.header>
  );
}
