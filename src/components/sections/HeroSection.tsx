"use client";

import Link from "next/link";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden bg-transparent">
      {/* Subtle grid background for tech feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="absolute inset-0 bg-[var(--color-surface)] [mask-image:linear-gradient(to_right,transparent_20%,black_100%)]"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col items-start pt-20">
        <SectionReveal direction="up" delay={0.1}>
          <div className="inline-flex items-center gap-3 px-0 py-1.5 mb-8 border-b-2 border-[var(--color-ink)]">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-brand-gold)] animate-pulse shadow-[0_0_10px_#EBAE38]" />
            <span className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-ink)]">Internet of Things Club • VIT Pune</span>
          </div>
        </SectionReveal>

        <SectionReveal direction="up" delay={0.2}>
          <h1 className="font-display font-bold text-6xl md:text-8xl lg:text-[7.5rem] leading-[0.9] tracking-[-0.04em] text-[var(--color-ink)] max-w-5xl mb-8 uppercase">
            Building the<br />
            technology of<br />
            <span className="text-logo-spectrum">tomorrow.</span>
          </h1>
        </SectionReveal>

        <SectionReveal direction="up" delay={0.3}>
          <p className="font-sans text-xl md:text-2xl text-[var(--color-muted)] max-w-2xl leading-relaxed mb-12">
            Empowering students to research, build, and innovate in autonomous robotics, AI, and edge computing.
          </p>
        </SectionReveal>

        <SectionReveal direction="up" delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center h-16 px-10 bg-[var(--color-ink)] text-[var(--color-surface)] font-sans font-bold text-sm tracking-widest uppercase hover:bg-[var(--color-accent-blue)] transition-colors active:scale-95"
            >
              Explore Our Work
            </Link>
            <Link
              href="/partner"
              className="inline-flex items-center justify-center h-16 px-10 bg-transparent border-2 border-[var(--color-ink)] text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-surface)] font-sans font-bold text-sm tracking-widest uppercase transition-colors active:scale-95"
            >
              Partner With Us
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
