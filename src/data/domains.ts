export type Domain = {
  id: string;
  name: string;
  tagline: string;
  icon: string;
  accent: 'blue' | 'cyan' | 'lime';
};

export const domains: Domain[] = [
  { id: 'iot', name: 'Internet of Things', tagline: 'Connecting the physical world', icon: 'sensor', accent: 'cyan' },
  { id: 'ai', name: 'Artificial Intelligence', tagline: 'Intelligent algorithms', icon: 'neural', accent: 'blue' },
  { id: 'robotics', name: 'Robotics', tagline: 'Autonomous movement', icon: 'arm', accent: 'lime' },
  { id: 'embedded', name: 'Embedded Systems', tagline: 'Hardware meets software', icon: 'chip', accent: 'cyan' },
  { id: 'ml', name: 'Machine Learning', tagline: 'Data-driven insights', icon: 'drone', accent: 'blue' }
];
