import { SectionReveal } from "@/components/ui/SectionReveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";

export function FeaturedProjects() {
  const featuredProjects = projects.slice(0, 3);
  
  return (
    <section className="py-32 bg-[var(--color-surface)] relative z-10 border-t border-[var(--color-ink)]/10">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <SectionReveal>
              <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-[var(--color-ink)] mb-6">
                Featured Work
              </h2>
              <p className="font-sans text-lg text-[var(--color-muted)] leading-relaxed">
                Applied research and production-grade prototypes built by our members. Many of these are open for industry sponsorship.
              </p>
            </SectionReveal>
          </div>
          <SectionReveal delay={0.2}>
            <Link 
              href="/projects"
              className="inline-flex h-10 items-center justify-center px-6 font-sans text-sm font-medium border border-[var(--color-ink)]/20 text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-surface)] transition-colors active-scale"
            >
              View All Projects
            </Link>
          </SectionReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, i) => (
            <SectionReveal key={project.slug} delay={i * 0.15}>
              <Link href={`/projects/${project.slug}`} className="block h-full">
                <TiltCard className="h-full">
                  <div className="h-full bg-[var(--color-surface-alt)]/80 backdrop-blur-md border border-[var(--color-ink)]/10 flex flex-col group hover:border-[var(--color-ink)]/30 transition-colors">
                    
                    {/* Render Image */}
                    <div className="w-full aspect-[4/3] bg-[var(--color-surface)]/80 relative overflow-hidden flex items-center justify-center border-b border-[var(--color-ink)]/10">
                      {project.image && (
                        <Image 
                          src={project.image} 
                          alt={project.title} 
                          fill 
                          className="object-cover transition-transform duration-700 group-hover:scale-105" 
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      )}
                      
                      {project.status === 'Seeking Sponsor' && (
                        <div className="absolute top-4 right-4 z-10 bg-[var(--color-accent-lime)] text-[var(--color-ink)] text-[10px] uppercase font-mono font-bold px-2 py-1">
                          Sponsor this
                        </div>
                      )}
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex gap-2 mb-4 flex-wrap">
                        {project.techStack.slice(0, 3).map(tech => (
                          <span key={tech} className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-muted)] bg-[var(--color-surface)] px-2 py-1 border border-[var(--color-ink)]/10">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <h3 className="font-display font-bold text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-accent-blue)] transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="font-sans text-sm text-[var(--color-muted)] leading-relaxed mt-auto line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                  </div>
                </TiltCard>
              </Link>
            </SectionReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
