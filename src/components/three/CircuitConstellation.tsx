"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function CircuitConstellation() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Slow, monolithic rotation
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.08;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.12;
      
      // Smooth scroll-driven parallax without layout thrashing
      const targetY = (window.scrollY || 0) * 0.005;
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.05);
    }
  });

  return (
    <group position={[10, 0, -10]}>
      {/* Massive Icosahedron Wireframe */}
      <mesh ref={meshRef}>
        {/* Large geometric shape, low detail for structural feel */}
        <icosahedronGeometry args={[18, 1]} />
        <meshBasicMaterial 
          color="#000000" 
          wireframe 
          transparent 
          opacity={0.15} // Increased visibility
        />
      </mesh>
    </group>
  );
}
