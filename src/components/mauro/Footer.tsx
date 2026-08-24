'use client';

import { Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-[#0f0e0c] text-mauro-light/70 font-sans border-t border-mauro-gold/20 w-full overflow-hidden">
            
            {/* MAIN FOOTER CONTENT */}
            <div 
                className="w-full relative z-10" 
                style={{ 
                    paddingTop: '30px', 
                    paddingBottom: '40px', 
                    paddingLeft: '8vw', 
                    paddingRight: '8vw' 
                }}
            >
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    
                    {/* COLUMN 1: Brand & Social */}
                    <div className="flex flex-col gap-6">
                        <a 
                            href="#inicio"
                            onClick={(e) => {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="cursor-pointer"
                        >
                            <img 
                                src="/mauro/logo-mb-01.png" 
                                alt="Benedetti Specialty Coffee" 
                                className="w-40 object-contain hover:opacity-80 transition-opacity"
                            />
                        </a>
                        <p className="text-sm font-light leading-relaxed">
                            Do genoma à xícara, aqui seu café tem mais valor.
                        </p>
                          <div className="flex gap-4 mt-2">
                              <a href="https://www.instagram.com/benedettimauro/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-mauro-gold text-mauro-dark flex items-center justify-center hover:bg-white transition-colors shrink-0">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                              </a>
                              <a href="https://wa.me/5535991733388?text=Ol%C3%A1!%20Vi%20o%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es." target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-mauro-gold text-mauro-dark flex items-center justify-center hover:bg-white transition-colors shrink-0">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                              </a>
                          </div>
                    </div>

                    {/* COLUMN 2: Especialista & Jornada */}
                    <div>
                        <h4 className="text-mauro-gold text-xs tracking-[0.2em] font-bold uppercase mb-4">O Especialista</h4>
                        <ul className="flex flex-col gap-2 text-sm font-light mb-10">
                            <li><a href="/mauro/o-especialista" className="hover:text-mauro-gold transition-colors">O Especialista</a></li>
                            <li><a href="/mauro/linha-do-tempo" className="hover:text-mauro-gold transition-colors">Linha do Tempo</a></li>
                            <li><a href="/mauro/diplomas" className="hover:text-mauro-gold transition-colors">Diplomas e Certificados</a></li>
                            <li><a href="/mauro/instituto" className="hover:text-mauro-gold transition-colors">Instituto BSC</a></li>
                        </ul>

                        <h4 className="text-mauro-gold text-xs tracking-[0.2em] font-bold uppercase mb-4">Jornada do Café</h4>
                        <ul className="flex flex-col gap-2 text-sm font-light">
                            <li><a href="/mauro/jornada-do-cafe" className="hover:text-mauro-gold transition-colors">A Jornada do Café</a></li>
                            <li><a href="/mauro/cafeicultor" className="hover:text-mauro-gold transition-colors">O Cafeicultor</a></li>
                            <li><a href="/mauro/marca-propria" className="hover:text-mauro-gold transition-colors">Marca Própria</a></li>
                        </ul>
                    </div>

                    {/* COLUMN 3: Comercial & Mercado */}
                    <div>
                        <h4 className="text-mauro-gold text-xs tracking-[0.2em] font-bold uppercase mb-4">Comercial</h4>
                        <ul className="flex flex-col gap-2 text-sm font-light mb-10">
                            <li><a href="/mauro/parcerias" className="hover:text-mauro-gold transition-colors">Parcerias e Conexões</a></li>
                            <li><a href="/mauro/mentorias" className="hover:text-mauro-gold transition-colors">Mentorias</a></li>
                        </ul>

                        <h4 className="text-mauro-gold text-xs tracking-[0.2em] font-bold uppercase mb-4">Mercado</h4>
                        <ul className="flex flex-col gap-2 text-sm font-light">
                            <li><a href="/mauro/nacional-internacional" className="hover:text-mauro-gold transition-colors">Nacional e Internacional</a></li>
                        </ul>
                    </div>

                    {/* COLUMN 4: Contato & Institucional */}
                    <div>
                        <h4 className="text-mauro-gold text-xs tracking-[0.2em] font-bold uppercase mb-4">Contato</h4>
                        <ul className="flex flex-col gap-4 text-sm font-light mb-10">
                            <li className="flex items-center gap-3">
                                <Phone size={16} className="text-mauro-gold shrink-0" />
                                <span>(35) 99173-3388</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={16} className="text-mauro-gold shrink-0" />
                                <span>mrrbenedetti@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <MapPin size={16} className="text-mauro-gold shrink-0" />
                                <span>Poços de Caldas - MG</span>
                            </li>
                        </ul>

                        <h4 className="text-mauro-gold text-xs tracking-[0.2em] font-bold uppercase mb-4">Institucional</h4>
                        <ul className="flex flex-col gap-2 text-sm font-light">
                            <li><a href="/mauro/privacidade" className="hover:text-mauro-gold transition-colors">Política de Privacidade</a></li>
                            <li><a href="/mauro/termos" className="hover:text-mauro-gold transition-colors">Termos de Uso</a></li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* COPYRIGHT BAR */}
            <div 
                className="w-full bg-[#050403] border-t border-white/5"
                style={{ 
                    paddingTop: '20px', 
                    paddingBottom: '30px',
                    paddingLeft: '8vw', 
                    paddingRight: '8vw'
                }}
            >
                <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light text-mauro-light/40">
                    <p className="text-center md:text-left">
                        Mauro Benedetti - Benedetti Specialty Coffee Copyright 2026 - Todos os Direitos Reservados.
                    </p>
                    <div className="flex items-center gap-2 font-bold text-mauro-light/60">
                        <a href="https://okcomunica.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-mauro-gold transition-colors">Desenvolvido por OK Comunica</a>
                    </div>
                </div>
            </div>

        </footer>
    );
}




