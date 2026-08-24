import React from 'react';
import Header from '@/components/mauro/Header';
import Footer from '@/components/mauro/Footer';

interface InternalPageTemplateProps {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
}

export default function InternalPageTemplate({ title, subtitle, children }: InternalPageTemplateProps) {
    return (
        <main className="bg-white min-h-screen text-mauro-dark font-sans selection:bg-mauro-gold selection:text-white mauro-scrollbar relative">
            
            {/* 1) NAVBAR / HEADER */}
            <Header />

            {/* 2) HERO TITLE SECTION (Fundo Escuro) */}
            <section 
                className="relative w-full flex flex-col items-center justify-center text-center overflow-hidden bg-mauro-dark"
                style={{ paddingTop: '200px', paddingBottom: '100px', paddingLeft: '8vw', paddingRight: '8vw' }}
            >
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-mauro-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="relative z-10 max-w-4xl">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-mauro-light mb-6">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-mauro-gold uppercase tracking-[0.3em] text-xs md:text-sm font-bold">
                            {subtitle}
                        </p>
                    )}
                </div>
            </section>

            {/* 3) CONTENT AREA (Fundo Claro) */}
            <section 
                className="w-full relative z-10 bg-[#fbfbfb]"
                style={{ paddingTop: '100px', paddingBottom: '150px', paddingLeft: '8vw', paddingRight: '8vw' }}
            >
                <div className="max-w-[1000px] mx-auto text-gray-700 font-light leading-relaxed text-lg flex flex-col gap-8">
                    {/* CONTEÚDO INJETADO AQUI */}
                    {children}
                </div>
            </section>

            {/* 4) FOOTER / RODAPÉ */}
            {/* O Footer tem seu próprio fundo dark */}
            <Footer />
        </main>
    );
}
