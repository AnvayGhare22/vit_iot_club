import { SectionReveal } from "@/components/ui/SectionReveal";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function LatestUpdates() {
  const updates = [
    {
      type: "Featured Event",
      date: "Nov 2024",
      category: "Competition",
      title: "Shark Tank IoT - XEN 4.0",
      description: "IOT Club organized Shark Tank IoT in collaboration with I2IOC, featuring industry experts Ashwin Kshirasagar and Shreyash Rane as judges. First-year students pitched innovative IoT solutions.",
      link: "/blog/shark-tank-iot-xen-4",
      image: "/images/updates/shark-tank.jpeg",
    },
    {
      type: "Workshop",
      date: "Sep 2024",
      category: "Career Development",
      title: "Resume Building Session",
      description: "Career Coach Mr. Dheeraj Rathod guided students on creating industry-ready resumes for internships and placements, sharing actionable insights on skill representation and profile optimization.",
      link: "/blog/resume-building-session",
      image: "/images/updates/resume.jpeg",
    },
    {
      type: "Orientation",
      date: "Aug 2024",
      category: "Club Activities",
      title: "First Year Orientation 2024",
      description: "Welcomed the new batch with an engaging orientation introducing our technical domains, leadership opportunities, and hands-on learning culture to spark innovation among first-year students.",
      link: "/blog/first-year-orientation-2024",
      image: "/images/updates/orientation.jpeg",
    },
    {
      type: "Technical",
      date: "Nov 2024",
      category: "Workshop",
      title: "XEN 4.0 Hardware Workshop",
      description: "Hands-on technical session for first-years featuring Arduino, NodeMCU, and Raspberry Pi. Students learned sensor integration, programming, and embedded system fundamentals.",
      link: "/blog/xen-4-hardware-workshop",
      image: "/images/updates/workshop.jpeg",
    },
    {
      type: "Speaker Session",
      date: "Nov 2024",
      category: "Guest Lecture",
      title: "IAF Expert Session - XEN 4.0",
      description: "Prabhaker S. from the Indian Air Force guided students on engineering aptitude, problem-solving, and real-world IoT applications in defense and industrial sectors.",
      link: "/blog/iaf-expert-session-xen-4",
      image: "/images/updates/expert-session.jpeg",
    },
    {
      type: "Achievements",
      date: "Ongoing",
      category: "Projects",
      title: "Member Projects Showcase",
      description: "Our members are working on cutting-edge projects including smart home automation, health monitoring systems, agricultural IoT solutions, and AI-powered robotics.",
      link: "/blog/member-projects-showcase",
      image: "/images/updates/showcase.jpg",
    }
  ];

  return (
    <section id="updates" className="py-32 bg-transparent relative z-10 border-t border-[var(--color-ink)]/10">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div className="max-w-2xl">
            <SectionReveal>
              <div className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-ink)] mb-6 border-b border-[var(--color-ink)] pb-4 inline-block">
                STAY INFORMED
              </div>
              <h2 className="font-display font-bold text-5xl md:text-6xl tracking-tight text-[var(--color-ink)] mb-6">
                Latest Updates
              </h2>
              <p className="font-sans text-xl text-[var(--color-muted)] leading-relaxed">
                Catch up on our recent events, workshops, and achievements
              </p>
            </SectionReveal>
          </div>
          <SectionReveal>
            <Link href="/events" prefetch={true} className="font-mono text-sm tracking-widest uppercase border-b-2 border-[var(--color-ink)] pb-1 hover:text-[var(--color-accent-blue)] hover:border-[var(--color-accent-blue)] transition-colors">
              View All Updates →
            </Link>
          </SectionReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {updates.map((update, i) => (
            <SectionReveal key={update.title} delay={i * 0.05}>
              <div className="group h-full flex flex-col border border-[var(--color-ink)]/10 bg-[var(--color-surface-alt)] hover:border-[var(--color-accent-blue)] transition-colors">
                
                <Link href={update.link} prefetch={true} className="block w-full aspect-video bg-[var(--color-surface)] relative overflow-hidden flex items-center justify-center border-b border-[var(--color-ink)]/10">
                  <Image
                    src={update.image}
                    alt={update.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className={cn(
                      "object-cover transition-transform duration-500 group-hover:scale-105",
                      update.image.includes("showcase.jpg") ? "object-[center_58%]" : "object-center"
                    )}
                  />
                </Link>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-6 font-mono text-xs tracking-widest uppercase text-[var(--color-muted)]">
                    <span>{update.date}</span>
                    <span className="text-[var(--color-accent-blue)]">{update.category}</span>
                  </div>
                  
                  <h3 className="font-display font-bold text-2xl text-[var(--color-ink)] mb-4">
                    <Link href={update.link} prefetch={true} className="hover:text-[var(--color-accent-blue)] transition-colors">
                      {update.title}
                    </Link>
                  </h3>
                  
                  <p className="font-sans text-[var(--color-muted)] leading-relaxed mb-8 flex-grow">
                    {update.description}
                  </p>
                  
                  <Link href={update.link} prefetch={true} className="inline-flex items-center font-mono text-xs font-bold tracking-widest uppercase text-[var(--color-ink)] group-hover:text-[var(--color-accent-blue)] transition-colors mt-auto border-t border-[var(--color-ink)]/10 pt-6 w-full">
                    Read More <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
