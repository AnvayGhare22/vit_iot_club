"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

export function AnimatedCounter({ value, label, suffix = "", prefix = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [motionValue, inView, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Intl.NumberFormat("en-US").format(
          Math.round(latest)
        )}${suffix}`;
      }
    });
  }, [springValue, prefix, suffix]);

  return (
    <div className="flex flex-col items-center">
      <span
        ref={ref}
        className="font-mono text-4xl md:text-5xl font-bold text-[var(--color-ink)]"
      >
        {prefix}0{suffix}
      </span>
      <span className="mt-2 text-sm md:text-base text-[var(--color-muted)] tracking-widest uppercase">
        {label}
      </span>
    </div>
  );
}
