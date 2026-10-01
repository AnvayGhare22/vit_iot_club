import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { projectsData } from "@/data/projectsData";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-[var(--color-surface)] pb-24">
      {/* Hero Cover Banner */}
      <div className="relative w-full h-[55vh] min-h-[380px] overflow-hidden bg-[var(--color-surface-alt)]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-[var(--color-surface)]/50 to-transparent" />
        <div className="absolute top-8 left-4 md:left-8 flex flex-wrap gap-2">
          <span className="font-mono text-xs font-bold tracking-[0.25em] uppercase bg-[var(--color-accent-blue)] text-white px-4 py-1.5 shadow-sm">
            {project.category}
          </span>
          {project.featured && (
            <span className="font-mono text-xs font-bold tracking-[0.25em] uppercase bg-[var(--color-ink)] text-white px-4 py-1.5 shadow-sm">
              ★ Flagship Achievement
            </span>
          )}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-4xl -mt-24 relative z-10">
        <SectionReveal>
          {/* Navigation Breadcrumbs */}
          <div className="mb-10 flex flex-wrap items-center gap-3">
            <Link
              href="/"
              prefetch={true}
              className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-[var(--color-muted)] hover:text-[var(--color-accent-blue)] transition-colors"
            >
              &larr; Home
            </Link>
            <span className="text-[var(--color-muted)]/30">|</span>
            <Link
              href="/projects"
              prefetch={true}
              className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-[var(--color-muted)] hover:text-[var(--color-accent-blue)] transition-colors"
            >
              All Projects
            </Link>
            <span className="text-[var(--color-muted)]/30">|</span>
            <Link
              href="/events"
              prefetch={true}
              className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-[var(--color-muted)] hover:text-[var(--color-accent-blue)] transition-colors"
            >
              Events &rarr;
            </Link>
          </div>

          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs tracking-widest uppercase text-[var(--color-muted)] mb-6">
            <span className="text-[var(--color-accent-blue)] font-semibold">{project.type}</span>
            <span>•</span>
            <span>{project.date}</span>
          </div>

          {/* Title */}
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-[var(--color-ink)] mb-6 leading-tight">
            {project.title}
          </h1>

          {/* Mentors / Team Info if available */}
          {(project.mentors || project.team) && (
            <div className="flex flex-wrap items-center gap-6 pb-8 mb-8 border-b border-[var(--color-ink)]/10 text-sm">
              {project.mentors && (
                <div>
                  <span className="font-mono text-xs text-[var(--color-muted)] uppercase tracking-wider block">Faculty Mentor</span>
                  <span className="font-sans font-semibold text-[var(--color-ink)]">{project.mentors}</span>
                </div>
              )}
              {project.team && (
                <div>
                  <span className="font-mono text-xs text-[var(--color-muted)] uppercase tracking-wider block">Key Contributors</span>
                  <span className="font-sans text-[var(--color-ink)]/90">{project.team}</span>
                </div>
              )}
            </div>
          )}

          {/* Quick Metrics Bar */}
          {project.stats && project.stats.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 mb-12 bg-[var(--color-surface-alt)]/80 backdrop-blur-sm border border-[var(--color-ink)]/10">
              {project.stats.map((s, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-muted)] mb-1">
                    {s.label}
                  </span>
                  <span className="font-display font-bold text-base sm:text-lg text-[var(--color-ink)]">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Skills Demonstrated Box */}
          {project.skillsDemonstrated && project.skillsDemonstrated.length > 0 && (
            <div className="mb-12 p-6 md:p-8 bg-[var(--color-surface-alt)] border border-[var(--color-ink)]/10">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-accent-blue)] mb-4">
                Core Competencies & Skills Demonstrated
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans text-sm text-[var(--color-ink)]/85">
                {project.skillsDemonstrated.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-2.5">
                    <span className="text-[var(--color-accent-blue)] font-bold text-sm">▸</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Structured Text Content */}
          <div className="space-y-10">
            {project.sections.map((section, idx) => (
              <div key={idx} className="space-y-4">
                {section.title && (
                  <h2 className="font-display font-bold text-2xl md:text-3xl text-[var(--color-ink)] tracking-tight pt-4 border-t border-[var(--color-ink)]/10 first:border-t-0 first:pt-0">
                    {section.title}
                  </h2>
                )}
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="font-sans text-lg text-[var(--color-ink)]/80 leading-[1.85] whitespace-pre-line">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Key Milestones */}
          {project.milestones && project.milestones.length > 0 && (
            <div className="my-12 p-8 border-l-4 border-[var(--color-accent-blue)] bg-[var(--color-surface-alt)]">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-accent-blue)] mb-4">
                Key Project Milestones & Impact
              </h3>
              <ul className="space-y-3 font-sans text-base text-[var(--color-ink)]/85">
                {project.milestones.map((m, mIdx) => (
                  <li key={mIdx} className="flex items-start gap-3">
                    <span className="text-[var(--color-accent-blue)] font-bold">✔</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Project Image Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="my-14 space-y-6">
              <div className="flex items-center justify-between border-b border-[var(--color-ink)]/10 pb-4">
                <h3 className="font-display font-bold text-2xl text-[var(--color-ink)]">
                  Project Gallery
                </h3>
                <span className="font-mono text-xs text-[var(--color-accent-blue)] tracking-widest uppercase">
                  // Hardware & Deployments
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.gallery.map((item, idx) => (
                  <div key={idx} className="group border border-[var(--color-ink)]/10 bg-[var(--color-surface-alt)] overflow-hidden">
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--color-surface)]">
                      <Image
                        src={item.url}
                        alt={item.caption || "Project Photograph"}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    {item.caption && (
                      <div className="p-4 border-t border-[var(--color-ink)]/10 bg-[var(--color-surface-alt)]">
                        <p className="font-mono text-xs text-[var(--color-muted)] tracking-wide leading-relaxed">
                          {item.caption}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div className="mt-14 pt-10 border-t border-[var(--color-ink)]/10">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-muted)] mb-4">
              Technologies & Methodologies
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs tracking-wider uppercase px-3.5 py-1.5 border border-[var(--color-ink)]/15 text-[var(--color-ink)]/80 bg-[var(--color-surface-alt)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Join Call to Action */}
          <div className="mt-16 p-8 bg-[var(--color-surface-alt)] border border-[var(--color-ink)]/10">
            <p className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-accent-blue)] mb-3">
              Want to build projects like this?
            </p>
            <h3 className="font-display font-bold text-2xl text-[var(--color-ink)] mb-4">
              Join the IoT Club at VIT Pune
            </h3>
            <p className="font-sans text-[var(--color-muted)] mb-6 leading-relaxed">
              Work with microcontrollers, autonomous robotics, AI edge computing platforms, and take your ideas from breadboard prototypes to national hackathon podiums.
            </p>
            <Link
              href="/join"
              className="inline-flex items-center justify-center h-12 px-8 bg-[var(--color-ink)] text-[var(--color-surface)] font-sans font-bold text-sm tracking-widest uppercase hover:bg-[var(--color-accent-blue)] transition-colors"
            >
              Apply to Join
            </Link>
          </div>
        </SectionReveal>
      </div>
    </article>
  );
}
