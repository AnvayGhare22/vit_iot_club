export type TeamMember = {
  name: string;
  role: string;
  domainId: string;
  photo: string;
  github?: string;
  linkedin?: string;
  specialty: string;
};

export const team: TeamMember[] = [
  {
    name: 'Jane Doe',
    role: 'President',
    domainId: 'iot',
    photo: '/images/avatar-1-placeholder.jpg',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    specialty: 'System Architecture'
  },
  {
    name: 'John Smith',
    role: 'Technical Lead',
    domainId: 'ai',
    photo: '/images/avatar-2-placeholder.jpg',
    github: 'https://github.com',
    specialty: 'Computer Vision'
  }
];
