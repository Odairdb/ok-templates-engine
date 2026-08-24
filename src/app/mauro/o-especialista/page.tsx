import React from 'react';
import ThreeImagePageTemplate from '@/components/mauro/ThreeImagePageTemplate';

export default function Page() {
    const sections = [
        {
            imageSrc: 'https://maurobenedetti.com.br/wp-content/uploads/2026/01/Mauro-Benedetti-ExpoMinas-6-BH.jpg',
            imageAlt: 'O Especialista 1',
            text: (
                <>
                    <p>Mauro Benedetti é um dos nomes mais respeitados do café brasileiro.</p>
                    <br />
                    <p>Com mais de 40 anos de atuação contínua, construiu uma trajetória sólida baseada em conhecimento técnico, sensorial e mercadológico, vivenciando todas as etapas da cadeia produtiva do café — do campo ao consumidor final.</p>
                </>
            ),
            reverse: false
        },
        {
            imageSrc: 'https://maurobenedetti.com.br/wp-content/uploads/2026/01/Mauro-Benedetti-ExpoMinas-11-2025.jpg',
            imageAlt: 'O Especialista 2',
            text: (
                <p>Sua experiência vai muito além da análise do grão. Mauro entende o café como um sistema vivo, onde genética, manejo, pós-colheita, perfil sensorial e mercado precisam estar alinhados para que o produtor alcance reconhecimento e valorização real. Ao longo de sua carreira, esteve em contato direto com cafeicultores, indústrias, traders, cafeterias e mercados internacionais, desenvolvendo uma visão macro e estratégica rara no setor.</p>
            ),
            reverse: true
        },
        {
            imageSrc: 'https://maurobenedetti.com.br/wp-content/uploads/2026/01/Mauro-Benedetti-ExpoMinas-9-BH.jpg',
            imageAlt: 'O Especialista 3',
            text: (
                <p>Dessa vivência nasce o conceito "Do Genoma à Xícara", que traduz sua forma de atuar: identificar, lapidar e comunicar o potencial completo de cada lote de café produzido. Para Mauro Benedetti, somente quem domina todas as etapas do processo consegue gerar valor verdadeiro e sustentável para toda a cadeia.</p>
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
            title="O Especialista" 
            subtitle="Benedetti Specialty Coffee"
            sections={sections}
            bottomContent={bottomContent}
        />
    );
}
