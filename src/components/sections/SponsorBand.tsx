"use client";

import { SectionReveal } from "@/components/ui/SectionReveal";
import { Download, ArrowRight } from "lucide-react";
import Link from "next/link";

export function SponsorBand() {
  const tiers = [
    {
      name: "Community",
      benefits: ["Logo on website", "Access to resume book", "Shoutouts in newsletter"],
    },
    {
      name: "Innovation",
      benefits: ["All Community benefits", "Tech talk slot", "Co-branded hackathon track"],
    },
    {
      name: "Strategic",
      benefits: ["All Innovation benefits", "Custom R&D project", "Priority campus recruiting"],
    }
  ];

  return (
    <section id="partner" className="py-32 bg-[var(--color-dark-panel)] text-[var(--color-surface)] relative z-10 border-t border-[var(--color-ink)]/10">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Context & Form */}
          <div className="lg:col-span-5 flex flex-col">
            <SectionReveal>
              <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight mb-6">
                Partner with the next generation of engineers.
              </h2>
              <p className="font-sans text-lg text-[var(--color-surface-alt)]/70 leading-relaxed mb-10">
                Gain direct access to top talent at VIT Pune. We collaborate with industry leaders on applied research, hardware provision, and recruitment events.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <Link href="/partner" className="inline-flex h-12 items-center justify-center px-8 bg-[var(--color-brand-gold)] text-[var(--color-brand-dark)] font-sans font-bold text-sm tracking-wide active-scale w-full sm:w-auto hover:brightness-110 transition-all">
                  Get in Touch
                </Link>
                <Link href="/partner" className="inline-flex h-12 items-center justify-center px-6 border border-white/20 text-white hover:bg-white hover:text-[var(--color-ink)] font-sans font-medium text-sm tracking-wide transition-colors active-scale w-full sm:w-auto group">
                  <Download className="w-4 h-4 mr-2 opacity-70 group-hover:opacity-100" />
                  Sponsorship Deck
                </Link>
              </div>
            </SectionReveal>

            {/* Logo Wall Placeholder */}
            <SectionReveal delay={0.2}>
              <div className="pt-10 border-t border-white/10">
                <p className="font-mono text-xs uppercase tracking-widest text-white/50 mb-6">
                  Trusted by industry leaders
                </p>
                <div className="flex flex-wrap gap-8 opacity-50 grayscale">
                  {/* Real logos would go here, placeholders for now */}
                  <div className="font-display font-bold text-xl">Acme Corp</div>
                  <div className="font-display font-bold text-xl">Stark Ind</div>
                  <div className="font-display font-bold text-xl">Tyrell</div>
                </div>
              </div>
            </SectionReveal>
          </div>

          {/* Right Column: Tiers */}
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="flex flex-col gap-4">
              {tiers.map((tier, i) => (
                <SectionReveal key={tier.name} delay={0.1 + (i * 0.1)}>
                  <div className="group bg-white/5 border border-white/10 p-8 hover:bg-white/10 hover:border-[var(--color-accent-lime)]/50 transition-colors duration-300">
                    <h3 className="font-display font-bold text-2xl mb-6 flex items-center justify-between">
                      {tier.name} Partner
                      <ArrowRight className="w-5 h-5 text-[var(--color-accent-lime)] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-custom" />
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {tier.benefits.map((benefit, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm font-sans text-white/70">
                          <div className="w-1.5 h-1.5 bg-[var(--color-accent-lime)] mt-1.5" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
