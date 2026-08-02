import React from 'react';
import CorpHero from '@/components/Corp/CorpHero';
import CorpHeader from '@/components/Corp/CorpHeader';
import CorpServices from '@/components/Corp/CorpServices';
import CorpGallery from '@/components/Corp/CorpGallery';
import CorpTeam from '@/components/Corp/CorpTeam';
import CorpProcess from '@/components/Corp/CorpProcess';
import CorpFooter from '@/components/Corp/CorpFooter';
import PlinShowcase from '@/components/shared/PlinShowcase';
import WhatsAppButton from '@/components/shared/WhatsAppButton';

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function CorpTemplate({ searchParams }: PageProps) {
  // Extract niche from URL params: ?nicho=engenharia, ?nicho=construtora, or ?nicho=arquitetura
  const resolvedParams = await searchParams;
  const nicheParam = resolvedParams?.nicho;
  const niche = typeof nicheParam === 'string' ? nicheParam.toLowerCase() : 'default';

  return (
    <main className="min-h-screen bg-[#E7DFDB] text-[#3B4146] font-sans relative">
      <CorpHeader niche={niche} />
      <CorpHero initialNiche={niche} />
      <CorpServices niche={niche} />
      <CorpGallery niche={niche} />
      <CorpTeam niche={niche} />
      <CorpProcess niche={niche} />
      <PlinShowcase niche={niche} templateType="Corp" />
      <CorpFooter niche={niche} />
      <WhatsAppButton />
    </main>
  );
}
