import { SectionReveal } from "@/components/ui/SectionReveal";

export function AboutSection() {
  const features = [
    {
      title: "Hands-On Workshops",
      description: "Learn by building real-world IoT projects and prototypes"
    },
    {
      title: "Expert Mentorship",
      description: "Guidance from industry professionals and experienced alumni"
    },
    {
      title: "National Events",
      description: "Organize and participate in hackathons and tech competitions"
    }
  ];

  return (
    <section id="about" className="py-32 bg-transparent relative z-10 border-t border-[var(--color-ink)]/10">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/2">
            <SectionReveal>
              <div className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-ink)] mb-6 border-b border-[var(--color-ink)] pb-4 inline-block">
                WHO WE ARE
              </div>
              <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-[var(--color-ink)] mb-8 leading-[1.1]">
                About IOT Club
              </h2>
              <div className="prose prose-lg prose-neutral max-w-none font-sans text-[var(--color-muted)] leading-relaxed space-y-6">
                <p>
                  The IOT Club at VIT Pune is a student-driven technical community dedicated to fostering innovation in Internet of Things, Artificial Intelligence, Robotics, and Electronics. We empower students to transform ideas into reality through hands-on learning, collaborative projects, and industry exposure.
                </p>
                <p>
                  From workshops on Arduino and Raspberry Pi to national-level events like XEN 4.0, we provide a platform for students to explore emerging technologies, develop technical skills, and connect with industry professionals. Whether you're a beginner or an expert, IOT Club is your gateway to the future of technology.
                </p>
              </div>
              
              <div className="mt-12 flex items-center gap-4 font-mono text-sm tracking-widest uppercase text-[var(--color-ink)]">
                <span className="w-12 h-[1px] bg-[var(--color-ink)]"></span>
                By the Students, For the Students
              </div>
            </SectionReveal>
          </div>

          <div className="lg:w-1/2 flex flex-col justify-center gap-8">
            {features.map((feature, i) => (
              <SectionReveal key={feature.title} delay={0.1 * (i + 1)}>
                <div className="p-8 border border-[var(--color-ink)]/10 bg-[var(--color-surface-alt)] hover:border-[var(--color-accent-blue)] transition-colors group">
                  <h3 className="font-display font-bold text-2xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-accent-blue)] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="font-sans text-[var(--color-muted)]">
                    {feature.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
