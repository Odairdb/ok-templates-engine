'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'O Mestre', href: '/mauro/o-especialista' },
  { name: 'A Jornada', href: '/mauro/jornada-do-cafe' },
  { name: 'Experiência', href: '/mauro#experiencia' },
  { name: 'Instituto', href: '/mauro#instituto' },
];

interface HeaderProps {
  forceDark?: boolean;
}

export default function Header({ forceDark = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Detect scroll to add glassmorphism effect and shrink header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Se o link contiver '/mauro', extrai apenas a parte do hash (#)
    const hashIndex = href.indexOf('#');
    if (hashIndex !== -1) {
      const hash = href.substring(hashIndex);
      const target = document.querySelector(hash);
      
      // Se o elemento existe NA MESMA PÁGINA, fazemos scroll suave e cancelamos a navegação padrão
      if (target) {
        e.preventDefault();
        setMobileMenuOpen(false);
        const top = target.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top, behavior: 'smooth' });
      }
      // Se NíO existe na página atual, deixamos o navegador carregar a URL (que vai abrir a Home e já cair no hash)
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
          isScrolled || forceDark
            ? 'bg-[#050403]/95 backdrop-blur-md border-mauro-gold/10 shadow-2xl' 
            : 'bg-transparent border-transparent'
        }`}
        style={{ paddingTop: '25px', paddingBottom: '25px' }}
      >
        <div 
          className="w-full flex items-center justify-between"
          style={{ paddingLeft: '8vw', paddingRight: '8vw' }}
        >
          
          {/* LOGO */}
          <a 
            href="/mauro" 
            className="flex-shrink-0 cursor-pointer"
          >
            <img 
              src="/mauro/logo-mb-01.png" 
              alt="Benedetti Specialty Coffee" 
              className="object-contain transition-all duration-500 w-32 md:w-44"
            />
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-14 xl:gap-20">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToAnchor(e, link.href)}
                className="text-xs uppercase tracking-[0.2em] font-medium text-mauro-light/70 hover:text-mauro-gold transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-mauro-gold transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden lg:block">
            <a 
              href="/mauro#contato"
              onClick={(e) => scrollToAnchor(e, '/mauro#contato')}
              className="px-12 py-5 border border-mauro-gold text-mauro-gold text-sm uppercase tracking-[0.25em] font-bold hover:bg-mauro-gold hover:text-mauro-dark transition-all rounded-full shadow-[0_0_20px_rgba(212,175,55,0.1)] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
            >
              Vamos Conversar?
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button 
            className="lg:hidden text-mauro-gold p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* MOBILE FULLSCREEN MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#050403] pt-32 px-6 flex flex-col"
          >
            <nav className="flex flex-col gap-8 items-center mt-12">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href={link.href}
                  onClick={(e) => scrollToAnchor(e, link.href)}
                  className="text-xl uppercase tracking-[0.3em] font-serif text-mauro-light hover:text-mauro-gold transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                href="/mauro#contato"
                onClick={(e) => scrollToAnchor(e, '/mauro#contato')}
                className="mt-8 px-12 py-5 border border-mauro-gold text-mauro-gold text-sm uppercase tracking-[0.25em] font-bold hover:bg-mauro-gold hover:text-mauro-dark transition-all rounded-full shadow-[0_0_20px_rgba(212,175,55,0.1)] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] text-center w-full max-w-xs"
              >
                Vamos Conversar?
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


