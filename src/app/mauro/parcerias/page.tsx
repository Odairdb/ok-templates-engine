import React from 'react';
import ThreeImagePageTemplate from '@/components/mauro/ThreeImagePageTemplate';

export default function Page() {
    const sections = [
        {
            imageSrc: 'https://maurobenedetti.com.br/wp-content/uploads/2025/12/MAURO-BENEDETTI-2-890x1024.png',
            imageAlt: 'Parcerias e Conexões 1',
            text: (
                <p>Um dos grandes diferenciais do trabalho de Mauro Benedetti está na capacidade de atuar como elo entre produtores, marcas, indústrias, traders e mercados consumidores.</p>
            ),
            reverse: false
        },
        {
            imageSrc: 'https://maurobenedetti.com.br/wp-content/uploads/2026/01/mercado-de-cafe-01-mauro-benedetti.jpg',
            imageAlt: 'Parcerias e Conexões 2',
            text: (
                <p>Por meio de curadoria técnica e mercadológica, a Benedetti Specialty Coffee garante que a qualidade negociada seja exatamente a qualidade entregue, criando relações comerciais baseadas em confiança, transparência e ganho mútuo.</p>
            ),
            reverse: true
        },
        {
            imageSrc: 'https://maurobenedetti.com.br/wp-content/uploads/elementor/thumbs/exportacao-cafe-1-rgi2gxpvdr4gkfeeav6w4l3l75cvbyhrdgk8sox6yu.jpg',
            imageAlt: 'Parcerias e Conexões 3',
            text: (
                <p>Essas conexões permitem que o café certo chegue ao comprador certo, tanto no mercado nacional quanto internacional, fortalecendo toda a cadeia produtiva.</p>
            ),
            reverse: false
        }
    ];

    const bottomContent = (
        <div className="text-center bg-gray-50 p-8 rounded-lg border border-gray-100">
            <h2 className="text-2xl font-serif text-mauro-dark mb-6">Entre em contato para saber mais sobre nossos serviços e parcerias.</h2>
            <a href="/mauro#contato" className="inline-block px-8 py-4 bg-mauro-dark text-mauro-gold text-sm uppercase tracking-widest font-bold hover:bg-mauro-gold hover:text-mauro-dark transition-all rounded-full shadow-lg">
                Falar com Mauro Benedetti
            </a>
        </div>
    );

    return (
        <ThreeImagePageTemplate 
            title="Parcerias e Conexões" 
            subtitle="Benedetti Specialty Coffee"
            sections={sections}
            bottomContent={bottomContent}
        />
    );
}
