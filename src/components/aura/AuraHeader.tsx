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
          ? "bg-[#1A1A1A]/70 backdrop-blur-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-b border-white/5" 
          : "bg-transparent"
      }`}
      style={{ paddingTop: isScrolled ? '24px' : '60px', paddingBottom: isScrolled ? '24px' : '60px' }}
    >
      <div className="w-full max-w-[1200px] mx-auto relative flex items-center justify-between" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
        <Link href={`/aura?nicho=${niche}`} className="flex items-center h-10 relative z-10">
          <span className="text-2xl font-serif font-bold text-[#C5A880] tracking-wider pl-4">AURA</span>
        </Link>
        
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-12 z-0">
          <a href="#servicos" className="text-white/80 hover:text-[#C5A880] text-sm uppercase tracking-[0.2em] font-bold transition-colors">Serviços</a>
          <a href="#portfolio" className="text-white/80 hover:text-[#C5A880] text-sm uppercase tracking-[0.2em] font-bold transition-colors">Portfólio</a>
          <a href="#equipe" className="text-white/80 hover:text-[#C5A880] text-sm uppercase tracking-[0.2em] font-bold transition-colors">Equipe</a>
        </nav>

        <div className="relative z-10">
          <a href="#agendar" className="bg-[#C5A880] hover:bg-[#D4B58A] text-[#1A1A1A] font-black px-10 py-3 rounded-full text-sm uppercase tracking-[0.2em] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(197,168,128,0.6)] shadow-[0_0_15px_rgba(197,168,128,0.3)] hidden sm:block">
            Agendar
          </a>
        </div>
      </div>
    </motion.header>
  );
}
