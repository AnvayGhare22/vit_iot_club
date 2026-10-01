"use client";

import { motion } from "framer-motion";

export function CircuitDivider() {
  return (
    <div className="w-full flex items-center justify-center overflow-hidden py-8">
      <motion.svg
        width="100%"
        height="12"
        viewBox="0 0 1200 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="text-[var(--color-line)]"
      >
        <motion.path
          d="M0 6H400 L410 1 L420 11 L430 6 H800 L810 1 L820 11 L830 6 H1200"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.circle
          cx="410"
          cy="1"
          r="2"
          fill="var(--color-accent-cyan)"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.3 }}
        />
        <motion.circle
          cx="820"
          cy="11"
          r="2"
          fill="var(--color-accent-blue)"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.3 }}
        />
      </motion.svg>
    </div>
  );
}
