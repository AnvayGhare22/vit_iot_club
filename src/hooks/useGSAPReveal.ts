import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealConfig {
  y?: number;
  x?: number;
  opacity?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  ease?: string;
}

export function useGSAPReveal(config: RevealConfig = {}) {
  const ref = useRef<any>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (!ref.current || prefersReducedMotion) {
      if (ref.current && prefersReducedMotion) {
        gsap.set(ref.current, { clearProps: "all" });
      }
      return;
    }

    const {
      y = 40,
      x = 0,
      opacity = 0,
      duration = 1,
      delay = 0,
      stagger = 0.1,
      ease = "power3.out"
    } = config;

    const elements = ref.current.children ? Array.from(ref.current.children) : ref.current;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        elements,
        { y, x, opacity },
        {
          y: 0,
          x: 0,
          opacity: 1,
          duration,
          delay,
          stagger,
          ease,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [config]);

  return ref;
}
