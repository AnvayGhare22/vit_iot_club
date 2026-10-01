"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const SceneProvider = dynamic(
  () => import("./SceneProvider").then((module) => module.SceneProvider),
  { ssr: false }
);

export function HomeBackground() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setShouldLoad(true), 800);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return shouldLoad ? <SceneProvider /> : null;
}
