import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function ImpactStrip() {
  const metrics = [
    { value: 120, label: "Active Members", suffix: "+" },
    { value: 45, label: "Projects Shipped", suffix: "+" },
    { value: 12, label: "Events Hosted", suffix: "" },
    { value: 8, label: "Industry Partners", suffix: "" },
  ];

  return (
    <section className="py-24 bg-[var(--color-surface)] relative z-10 border-t border-[var(--color-ink)]/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {metrics.map((metric, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <div className="border-l-2 border-[var(--color-accent-blue)]/20 pl-6 h-full flex flex-col justify-center">
                <AnimatedCounter value={metric.value} label={metric.label} suffix={metric.suffix} />
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
