"use client";

import { View, Environment, Float } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { CircuitConstellation } from "./CircuitConstellation";

export function HeroScene({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full h-full relative ${className}`}>
      <View className="w-full h-full absolute inset-0">
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Environment preset="city" />
        
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
          <CircuitConstellation />
        </Float>

        <EffectComposer>
          <Bloom luminanceThreshold={0.2} mipmapBlur intensity={1.5} />
        </EffectComposer>
      </View>
    </div>
  );
}
