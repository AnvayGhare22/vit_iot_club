"use client";

import { Environment, Float } from "@react-three/drei";
import { CircuitConstellation } from "./CircuitConstellation";

export function BackgroundScene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.3}>
        <CircuitConstellation />
      </Float>
    </>
  );
}
