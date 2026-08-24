'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="relative z-20 bg-mauro-dark overflow-hidden py-32 md:py-48">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Image with Parallax Mask */}
          <motion.div 
            initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
            whileInView={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative h-[700px] w-full rounded-sm overflow-hidden"
          >
            <Image 
              src="https://maurobenedetti.com.br/wp-content/uploads/2026/01/Cafeicultor-03-site-Mauro-Benedetti.jpg"
              alt="Mauro Benedetti"
              fill
              className="object-cover object-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-[2000ms] ease-out"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Subtle Gold Overlay */}
            <div className="absolute inset-0 bg-mauro-gold mix-blend-overlay opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-mauro-dark via-transparent to-transparent opacity-90"></div>
          </motion.div>

          {/* Right Column: Text Reveal */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-12">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h4 className="text-mauro-gold text-sm md:text-base tracking-[0.3em] uppercase font-sans mb-4">
                O Mestre de Torra
              </h4>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-mauro-light leading-[1.1] tracking-tight">
                Uma vida <br />
                <span className="italic text-mauro-gold/90">dedicada</span> ao café.
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="pl-0 md:pl-12 border-l-0 md:border-l border-mauro-gold/30"
            >
              <p className="text-2xl md:text-3xl text-mauro-light/90 font-serif leading-relaxed mb-8">
                "Da análise genética à xícara, formando produtores, marcas e negócios mais preparados para o mercado global."
              </p>
              
              <p className="text-base md:text-lg text-mauro-light/60 leading-loose font-sans font-light max-w-2xl">
                Com mais de 40 anos de experiência, o Benedetti Specialty Coffee conecta conhecimento técnico, mercado e parcerias estratégicas B2B para levar o café à sua máxima valorização. Elevamos presentes corporativos a um status de arte em forma de sabor.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="pt-8"
            >
              <button className="group flex items-center gap-6 pb-2 border-b border-mauro-gold/30 hover:border-mauro-gold transition-colors">
                <span className="text-mauro-gold font-sans tracking-widest uppercase text-sm font-medium group-hover:text-mauro-light transition-colors">
                  Conheça o Especialista
                </span>
                <span className="w-10 h-[1px] bg-mauro-gold group-hover:w-16 transition-all duration-300"></span>
              </button>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
