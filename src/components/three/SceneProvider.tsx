"use client";

import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { ReactNode, useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { BackgroundScene } from "./BackgroundScene";

export function SceneProvider({ children }: { children?: ReactNode }) {
  const reducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div id="three-canvas-container" className="fixed inset-0 z-[-1] pointer-events-none w-full h-full">
        {mounted && !reducedMotion && (
          <Canvas
            eventSource={document.body}
            className="w-full h-full pointer-events-none"
            camera={{ position: [0, 0, 10], fov: 45 }}
            dpr={[1, 1.5]}
            gl={{
              antialias: false,
              alpha: true,
              powerPreference: "high-performance",
              depth: false,
              stencil: false,
            }}
          >
            <BackgroundScene />
            <View.Port />
          </Canvas>
        )}
      </div>
      {children}
    </>
  );
}
