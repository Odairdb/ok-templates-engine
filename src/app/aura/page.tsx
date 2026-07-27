import React from 'react';
import AuraHero from '@/components/aura/AuraHero';
import AuraServices from '@/components/aura/AuraServices';
import AuraGallery from '@/components/aura/AuraGallery';
import AuraTeam from '@/components/aura/AuraTeam';
import AuraFooter from '@/components/aura/AuraFooter';
import PlinShowcase from '@/components/shared/PlinShowcase';
import WhatsAppButton from '@/components/shared/WhatsAppButton';

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function AuraTemplate({ searchParams }: PageProps) {
  // Extract niche from URL params: ?nicho=barbearia or ?nicho=salao
  const resolvedParams = await searchParams;
  const nicheParam = resolvedParams?.nicho;
  const niche = typeof nicheParam === 'string' ? nicheParam.toLowerCase() : 'default';

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-gray-900 font-sans relative">
      <AuraHero initialNiche={niche} />
      <AuraServices niche={niche} />
      <AuraGallery niche={niche} />
      <AuraTeam niche={niche} />
      <PlinShowcase niche={niche} templateType="aura" />
      <AuraFooter niche={niche} />
      <WhatsAppButton />
    </main>
  );
}
