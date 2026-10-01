export type Event = {
  slug: string;
  title: string;
  date: string;
  type: 'Workshop' | 'Hackathon' | 'Guest Talk' | 'Sponsor Showcase';
  domainId: string;
  description: string;
  isUpcoming: boolean;
  photos?: string[];
  sponsor?: string;
  registrationUrl?: string;
};

export const events: Event[] = [
  {
    slug: 'intro-to-esp32',
    title: 'Intro to ESP32 Workshop',
    date: '2026-10-15',
    type: 'Workshop',
    domainId: 'iot',
    description: 'Learn the basics of ESP32 and build your first connected sensor node.',
    isUpcoming: true,
    registrationUrl: '#'
  },
  {
    slug: 'ai-hackathon-2026',
    title: 'AI Innovation Hackathon',
    date: '2026-08-20',
    type: 'Hackathon',
    domainId: 'ai',
    description: '48-hour hackathon focused on building intelligent solutions for campus problems.',
    isUpcoming: false,
    sponsor: 'TechCorp',
    photos: ['/images/event-1-placeholder.jpg']
  }
];
