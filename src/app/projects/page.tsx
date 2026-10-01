import { SectionReveal } from "@/components/ui/SectionReveal";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/data/projectsData";

export const metadata: Metadata = {
  title: "Projects | IoT Club VIT Pune",
  description: "Explore the cutting-edge IoT prototypes, autonomous robotics, and smart systems engineered by our club members.",
};

export default function ProjectsPage() {
  const flagshipProject = projectsData.find((p) => p.featured) || projectsData[0];
  const regularProjects = projectsData.filter((p) => p.slug !== flagshipProject.slug);

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 md:px-8 bg-transparent relative z-10">
      <div className="container mx-auto">
        <SectionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tight text-[var(--color-ink)] mb-6">
                Projects Repository
              </h1>
              <p className="font-sans text-xl text-[var(--color-muted)] max-w-2xl leading-relaxed">
                Translating classroom theory into real-world, market-ready IoT prototypes, autonomous robotics, and edge computing architectures.
              </p>
            </div>
            <div className="text-[var(--color-accent-blue)] font-mono text-sm tracking-widest uppercase">
              // Innovation & R&D
            </div>
          </div>
        </SectionReveal>

        {/* Featured Flagship Project Banner */}
        {flagshipProject && (
          <SectionReveal delay={0.05}>
            <div className="mb-14 p-8 md:p-12 bg-[var(--color-surface-alt)]/80 backdrop-blur-md border border-[var(--color-ink)]/15 hover:border-[var(--color-accent-blue)] transition-colors group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <Link
                  href={`/projects/${flagshipProject.slug}`}
                  prefetch={true}
                  className="lg:col-span-6 block relative aspect-[16/10] overflow-hidden border border-[var(--color-ink)]/10"
                >
                  <Image
                    src={flagshipProject.image}
                    alt={flagshipProject.title}
                    fill
                    priority
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="font-mono text-xs font-bold tracking-[0.2em] uppercase bg-[var(--color-accent-blue)] text-white px-3.5 py-1.5 shadow-sm">
                      ★ Flagship Project
                    </span>
                  </div>
                </Link>

                <div className="lg:col-span-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[var(--color-accent-blue)] mb-4 uppercase tracking-widest">
                      <span>{flagshipProject.category}</span>
                      <span>•</span>
                      <span className="text-[var(--color-muted)]">{flagshipProject.date}</span>
                    </div>

                    <h2 className="font-display font-bold text-3xl md:text-4xl text-[var(--color-ink)] mb-4">
                      <Link
                        href={`/projects/${flagshipProject.slug}`}
                        prefetch={true}
                        className="hover:text-[var(--color-accent-blue)] transition-colors"
                      >
                        {flagshipProject.title}
                      </Link>
                    </h2>

                    <p className="font-sans text-[var(--color-muted)] text-base md:text-lg leading-relaxed mb-6">
                      {flagshipProject.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {flagshipProject.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[11px] tracking-wider uppercase px-2.5 py-1 border border-[var(--color-ink)]/15 text-[var(--color-ink)]/70 bg-[var(--color-surface)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[var(--color-ink)]/10">
                    <Link
                      href={`/projects/${flagshipProject.slug}`}
                      prefetch={true}
                      className="inline-flex items-center font-mono text-xs font-bold tracking-widest uppercase text-[var(--color-ink)] group-hover:text-[var(--color-accent-blue)] transition-colors"
                    >
                      View Details <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>
        )}

        {/* Regular Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularProjects.map((project, i) => (
            <SectionReveal key={project.slug} delay={i * 0.06}>
              <div className="bg-[var(--color-surface-alt)]/60 backdrop-blur-md p-10 border border-[var(--color-ink)]/10 hover:border-[var(--color-accent-blue)] transition-colors h-full flex flex-col group">
                <Link
                  href={`/projects/${project.slug}`}
                  prefetch={true}
                  className="block relative aspect-video -mx-10 -mt-10 mb-8 overflow-hidden border-b border-[var(--color-ink)]/10"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>

                <div className="flex items-center justify-between font-mono text-xs text-[var(--color-accent-blue)] mb-4 uppercase tracking-widest">
                  <span>{project.category}</span>
                  <span className="text-[var(--color-muted)]">{project.type}</span>
                </div>

                <h3 className="font-display font-bold text-2xl text-[var(--color-ink)] mb-4">
                  <Link
                    href={`/projects/${project.slug}`}
                    prefetch={true}
                    className="hover:text-[var(--color-accent-blue)] transition-colors"
                  >
                    {project.title}
                  </Link>
                </h3>

                <p className="font-sans text-[var(--color-muted)] leading-relaxed mb-6 flex-grow text-sm md:text-base">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 border border-[var(--color-ink)]/10 text-[var(--color-ink)]/70 bg-[var(--color-surface)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-[var(--color-ink)]/10">
                  <Link
                    href={`/projects/${project.slug}`}
                    prefetch={true}
                    className="inline-flex items-center font-mono text-xs font-bold tracking-widest uppercase text-[var(--color-ink)] group-hover:text-[var(--color-accent-blue)] transition-colors"
                  >
                    View Details <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
