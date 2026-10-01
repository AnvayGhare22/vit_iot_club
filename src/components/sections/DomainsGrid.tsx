import { SectionReveal } from "@/components/ui/SectionReveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function DomainsGrid() {
  const domains = [
    {
      id: "iot",
      title: "Internet of Things",
      description: "Build smart connected devices using Arduino, ESP32, NodeMCU, and Raspberry Pi. Learn sensor integration, cloud connectivity, and real-time data processing.",
      tags: ["Arduino", "ESP32", "Sensors"],
      color: "#EBAE38", // Logo Core Gold
      borderColor: "hover:border-[#EBAE38]",
      textColor: "group-hover:text-[#EBAE38]",
      badgeColor: "text-[#EBAE38] border-[#EBAE38]/30 bg-[#EBAE38]/5",
    },
    {
      id: "ai",
      title: "Artificial Intelligence",
      description: "Dive into machine learning, deep learning, computer vision, and NLP. Work on AI-powered solutions for real-world problems.",
      tags: ["ML", "CV", "NLP"],
      color: "#389FD6", // Logo Signal Cyan
      borderColor: "hover:border-[#389FD6]",
      textColor: "group-hover:text-[#389FD6]",
      badgeColor: "text-[#389FD6] border-[#389FD6]/30 bg-[#389FD6]/5",
    },
    {
      id: "robotics",
      title: "Electronics & Robotics",
      description: "Design circuits, PCBs, and build autonomous robots. Master embedded systems, motor control, and robotic navigation.",
      tags: ["PCB", "Robotics", "Embedded"],
      color: "#D8603C", // Logo Terracotta Orange
      borderColor: "hover:border-[#D8603C]",
      textColor: "group-hover:text-[#D8603C]",
      badgeColor: "text-[#D8603C] border-[#D8603C]/30 bg-[#D8603C]/5",
    },
    {
      id: "software",
      title: "Software Development",
      description: "Create web applications, mobile apps, and IoT dashboards. Full-stack development with modern frameworks and cloud integration.",
      tags: ["Web Dev", "Mobile", "Cloud"],
      color: "#5CB89C", // Logo Mint Aqua
      borderColor: "hover:border-[#5CB89C]",
      textColor: "group-hover:text-[#5CB89C]",
      badgeColor: "text-[#5CB89C] border-[#5CB89C]/30 bg-[#5CB89C]/5",
    },
  ];

  return (
    <section id="domains" className="py-32 bg-[var(--color-surface-alt)] relative z-10 border-t border-[var(--color-ink)]/10">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="mb-16 max-w-2xl">
          <SectionReveal>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#EBAE38]" />
              <span className="w-2 h-2 rounded-full bg-[#389FD6]" />
              <span className="w-2 h-2 rounded-full bg-[#D8603C]" />
              <span className="w-2 h-2 rounded-full bg-[#5CB89C]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] ml-2">Core Domains</span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-[var(--color-ink)] mb-6">
              Our Expertise
            </h2>
            <p className="font-sans text-lg text-[var(--color-muted)] leading-relaxed">
              Explore diverse areas of technology and innovation guided by our multi-disciplinary engineering focus.
            </p>
          </SectionReveal>
        </div>

        {/* Symmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {domains.map((domain, i) => {
            return (
              <SectionReveal key={domain.id} delay={i * 0.1} className="h-full">
                <Link href={`/projects?domain=${domain.id}`} className="group block h-full">
                  <div className={`h-full min-h-[280px] bg-[var(--color-surface-alt)]/80 border border-[var(--color-ink)]/10 p-8 flex flex-col justify-between ${domain.borderColor} transition-all duration-300 relative overflow-hidden`}>
                    
                    {/* Top Color Accent Line */}
                    <div 
                      className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ backgroundColor: domain.color }}
                    />

                    <div className="flex justify-between items-start">
                      <div className={`w-12 h-12 bg-[var(--color-surface)]/90 border border-[var(--color-ink)]/10 flex items-center justify-center rounded-sm transition-colors ${domain.textColor}`}>
                        <span className="font-mono font-bold">
                          &lt;/&gt;
                        </span>
                      </div>
                      <ArrowRight className={`w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-custom ${domain.textColor}`} />
                    </div>
                    
                    <div className="mt-12 flex-grow">
                      <h3 className={`font-display font-bold text-2xl text-[var(--color-ink)] mb-3 ${domain.textColor} transition-colors`}>
                        {domain.title}
                      </h3>
                      <p className="font-sans text-sm text-[var(--color-muted)] mb-6 flex-grow leading-relaxed">
                        {domain.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {domain.tags.map((tag) => (
                          <span key={tag} className="font-mono text-xs text-[var(--color-ink)] bg-[var(--color-ink)]/5 px-2.5 py-1 rounded-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </SectionReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
