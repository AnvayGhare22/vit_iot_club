export type Project = {
  slug: string;
  title: string;
  description: string;
  domainId: string;
  status: 'Ongoing' | 'Completed' | 'Seeking Sponsor';
  techStack: string[];
  image: string;
  isOpenToSponsorship: boolean;
};

export const projects: Project[] = [
  {
    slug: 'smart-campus-grid',
    title: 'Smart Campus Grid',
    description: 'A centralized IoT network for monitoring energy consumption across campus buildings.',
    domainId: 'iot',
    status: 'Seeking Sponsor',
    techStack: ['ESP32', 'MQTT', 'React', 'Node.js'],
    image: '/images/project-1-placeholder.jpg',
    isOpenToSponsorship: true
  },
  {
    slug: 'autonomous-delivery-bot',
    title: 'Autonomous Delivery Bot',
    description: 'Self-driving robot for delivering packages within the university premises.',
    domainId: 'robotics',
    status: 'Ongoing',
    techStack: ['ROS', 'Python', 'Computer Vision'],
    image: '/images/project-2-placeholder.jpg',
    isOpenToSponsorship: true
  },
  {
    slug: 'predictive-maintenance',
    title: 'Predictive Maintenance ML',
    description: 'Machine learning model predicting hardware failures before they occur.',
    domainId: 'ml',
    status: 'Completed',
    techStack: ['TensorFlow', 'Python', 'AWS'],
    image: '/images/project-3-placeholder.jpg',
    isOpenToSponsorship: false
  }
];
