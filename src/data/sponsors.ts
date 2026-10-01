export type SponsorTier = {
  name: string;
  level: 'Bronze' | 'Silver' | 'Gold';
  benefits: string[];
};

export const sponsorTiers: SponsorTier[] = [
  {
    name: 'Community Partner',
    level: 'Bronze',
    benefits: ['Event branding', 'Social media features', 'Newsletter inclusion']
  },
  {
    name: 'Innovation Partner',
    level: 'Silver',
    benefits: ['All Bronze benefits', 'Resume book access', 'Co-branded workshops']
  },
  {
    name: 'Strategic Partner',
    level: 'Gold',
    benefits: ['All Silver benefits', 'Co-branded R&D projects', 'Campus recruiting access', 'Advisory board seat']
  }
];

export const currentSponsors = [
  // Placeholder array for sponsor logos
  { name: 'TechCorp', logo: '/images/sponsor-1-placeholder.svg' },
  { name: 'InnovateX', logo: '/images/sponsor-2-placeholder.svg' }
];
