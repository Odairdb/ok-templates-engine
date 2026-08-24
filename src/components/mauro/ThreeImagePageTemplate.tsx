import React from 'react';
import InternalPageTemplate from '@/components/mauro/InternalPageTemplate';

interface SectionData {
    imageSrc: string;
    imageAlt: string;
    text: React.ReactNode;
    reverse?: boolean; // Se true, a imagem fica na direita
}

interface ThreeImagePageTemplateProps {
    title: string;
    subtitle?: string;
    sections: SectionData[];
    bottomContent?: React.ReactNode;
}

export default function ThreeImagePageTemplate({ title, subtitle, sections, bottomContent }: ThreeImagePageTemplateProps) {
    return (
        <InternalPageTemplate title={title} subtitle={subtitle}>
            
            <div className="flex flex-col gap-20 py-12">
                {sections.map((section, index) => (
                    <div 
                        key={index} 
                        className={`flex flex-col ${section.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}
                    >
                        {/* Imagem */}
                        <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg border border-gray-100 bg-white">
                            <img 
                                src={section.imageSrc} 
                                alt={section.imageAlt} 
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Texto */}
                        <div className="w-full md:w-1/2 prose prose-lg prose-p:text-gray-700 prose-strong:text-mauro-dark prose-strong:font-bold">
                            {section.text}
                        </div>
                    </div>
                ))}
            </div>

            {/* Conteúdo Extra no Rodapé da Página (ex: Logos, CTA) */}
            {bottomContent && (
                <div className="mt-12 pt-12 border-t border-gray-200">
                    {bottomContent}
                </div>
            )}

        </InternalPageTemplate>
    );
}
