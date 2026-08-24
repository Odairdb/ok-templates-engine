import React from 'react';
import ThreeImagePageTemplate from '@/components/mauro/ThreeImagePageTemplate';

export default function Page() {
    const sections = [
        {
            imageSrc: 'https://maurobenedetti.com.br/wp-content/uploads/2025/12/coffee-hands-farm.jpg',
            imageAlt: 'Jornada do Café 1',
            text: (
                <p>A Jornada do Café representa um conceito inovador criado para preencher uma lacuna histórica do setor: a falta de conexão entre produção, potencial e valorização.</p>
            ),
            reverse: false
        },
        {
            imageSrc: 'https://maurobenedetti.com.br/wp-content/uploads/elementor/thumbs/Sustainability-in-our-hands-rgi2cqdug9rjxaauvvcugz4l91rv9v9tzp8lblupdw.jpg',
            imageAlt: 'Jornada do Café 2',
            text: (
                <p>O método Do Genoma à Xícara analisa o café de forma completa, considerando desde sua base genética até o perfil sensorial e o posicionamento de mercado. Cada lote é avaliado com profundidade, identificando padrões, atributos e oportunidades reais de valorização, indo muito além da classificação tradicional.</p>
            ),
            reverse: true
        },
        {
            imageSrc: 'https://maurobenedetti.com.br/wp-content/uploads/elementor/thumbs/fazenda-cafe-01-rgi1750yecfiwdx7q2j9n5539b32auokesal1ctq4m.jpg',
            imageAlt: 'Jornada do Café 3',
            text: (
                <p>Esse processo permite que o cafeicultor compreenda exatamente o que produz, reconheça o potencial do seu café e tenha argumentos técnicos para negociar melhor. A valorização deixa de depender exclusivamente do preço comercial do dia e passa a ser definida pelo potencial e padrão do café.</p>
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
            title="A Jornada do Café" 
            subtitle="Benedetti Specialty Coffee"
            sections={sections}
            bottomContent={bottomContent}
        />
    );
}
