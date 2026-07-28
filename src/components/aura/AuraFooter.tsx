"use client";

import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function AuraFooter({ niche }: { niche: string }) {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
      <div className="w-full max-w-6xl mx-auto px-10 md:px-20 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand & Sobre */}
          <div>
            <h3 className="text-3xl font-serif mb-6 text-[#C5A880]">AURA</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Elevando o seu estilo com excelência e sofisticação. {niche === 'barbearia' ? 'A barbearia definitiva para o homem moderno.' : 'O espaço perfeito para a sua transformação.'}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C5A880] transition-colors font-bold text-xs">
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C5A880] transition-colors font-bold text-xs">
                FB
              </a>
            </div>
          </div>

          {/* Contato & Horários */}
          <div>
            <h4 className="text-lg font-bold uppercase tracking-widest mb-6">Informações</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C5A880] shrink-0" />
                <span>Av. Elegância, 1000 - Bairro Nobre<br/>Sua Cidade - Estado</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C5A880] shrink-0" />
                <span>(31) 90000-0000</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#C5A880] shrink-0" />
                <span>Terça a Sábado: 09h às 19h<br/>Domingo e Segunda: Fechado</span>
              </li>
            </ul>
          </div>

          {/* Mapa / Localização (Placeholder) */}
          <div className="w-full h-48 bg-white/5 rounded-2xl flex items-center justify-center overflow-hidden border border-white/10 relative group">
             <div className="absolute inset-0 bg-black/40 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="px-4 py-2 bg-[#C5A880] text-white text-sm font-bold rounded-full">Como chegar</span>
             </div>
             {/* Em um site real, aqui entraria o iframe do Google Maps */}
             <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" alt="Mapa" className="w-full h-full object-cover opacity-50 grayscale" />
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} AURA. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">
            Desenvolvido por <a href="https://okcomunica.com.br" target="_blank" rel="noreferrer" className="text-white hover:text-[#C5A880] font-bold transition-colors">OK Comunica</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
