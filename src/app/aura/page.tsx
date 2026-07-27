import React from 'react';
import AuraHero from '@/components/aura/AuraHero';
import AuraServices from '@/components/aura/AuraServices';
import PlinShowcase from '@/components/shared/PlinShowcase';

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function AuraTemplate({ searchParams }: PageProps) {
  // Extract niche from URL params: ?nicho=barbearia or ?nicho=salao
  const resolvedParams = await searchParams;
  const nicheParam = resolvedParams?.nicho;
  const niche = typeof nicheParam === 'string' ? nicheParam.toLowerCase() : 'default';

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-gray-900 font-sans">
      <AuraHero initialNiche={niche} />
      <AuraServices niche={niche} />
      <PlinShowcase niche={niche} templateType="aura" />
    </main>
  );
}
