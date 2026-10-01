export type SceneConfig = {
  modules: {
    id: string;
    position: [number, number, number];
    rotation: [number, number, number];
    model: 
      | { type: 'primitive'; shape: 'box' | 'cylinder' | 'torus' | 'cone' } 
      | { type: 'gltf'; url: string };
    material: { color: string; emissive?: string; emissiveIntensity?: number };
  }[];
  traces: { from: string; to: string; color: string; pulseSpeed: number }[];
};

export const defaultSceneConfig: SceneConfig = {
  modules: [
    {
      id: 'mcu',
      position: [0, 0, 0],
      rotation: [0.5, 0.5, 0],
      model: { type: 'primitive', shape: 'box' },
      material: { color: '#222222', emissive: '#C6FF3D', emissiveIntensity: 1.5 }
    },
    {
      id: 'sensor',
      position: [3, 2, -2],
      rotation: [0, 0.5, 0.2],
      model: { type: 'primitive', shape: 'cylinder' },
      material: { color: '#00C2D1', emissive: '#00C2D1', emissiveIntensity: 0.5 }
    },
    {
      id: 'drone',
      position: [-4, 3, 1],
      rotation: [0.2, 0.5, 0.1],
      model: { type: 'primitive', shape: 'cone' },
      material: { color: '#2451FF' }
    },
    {
      id: 'arm',
      position: [2, -3, 2],
      rotation: [0, 0, 0.5],
      model: { type: 'primitive', shape: 'torus' },
      material: { color: '#5B6470' }
    }
  ],
  traces: [
    { from: 'mcu', to: 'sensor', color: '#00C2D1', pulseSpeed: 1 },
    { from: 'mcu', to: 'drone', color: '#2451FF', pulseSpeed: 1.5 },
    { from: 'mcu', to: 'arm', color: '#C6FF3D', pulseSpeed: 0.8 }
  ]
};
