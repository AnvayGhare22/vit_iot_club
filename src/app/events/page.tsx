import { SectionReveal } from "@/components/ui/SectionReveal";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { UpcomingEventModal } from "@/components/events/UpcomingEventModal";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";

export const metadata: Metadata = {
  title: "Events | IoT Club VIT Pune",
  description: "Hands-on innovation, workshops, and flagship competitions at VIT Pune.",
};

const currentEvent = {
  title: "XEN Workshop 5.0",
  tagline: "Where Hardware Meets Innovation. Learn. Build. Connect. Innovate.",
  category: "Flagship Technical Workshop",
  organizer: "Organized by IoT Club, VIT Pune",
  date: "9 & 10 October 2026",
  googleFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSdrTvI6tMZWqQkteMTI9AyIZoFIjYyAIIC2QRF7qTdCxAc9RA/viewform?usp=publish-editor",
  whatsappGroupUrl: "https://chat.whatsapp.com/EJDVaeuGSKGBLHhyZgpO3z",
  day1: {
    time: "9 OCTOBER | 3:00 PM – 6:00 PM",
    items: [
      {
        title: "Introduction to the IoT Club",
        desc: "Discover the club, its activities, projects, opportunities, and the exciting world of IoT.",
      },
      {
        title: "Arduino & Embedded Systems Session",
        desc: "Learn the fundamentals of Arduino, microcontrollers, sensors, interfacing, and how embedded systems bring ideas to life.",
      },
      {
        title: "Special Guest Session",
        desc: "Gain valuable insights, experiences, and industry perspectives through an interactive session with our invited guest.",
      },
    ],
  },
  day2: {
    time: "10 OCTOBER | 2:00 PM – 6:00 PM",
    items: [
      {
        title: "NodeMCU & Internet of Things",
        desc: "Explore Wi-Fi-enabled development using NodeMCU and understand how devices communicate through IoT.",
      },
      {
        title: "ESP32 Hands-On Session",
        desc: "Dive into one of the most powerful and widely used microcontrollers for modern IoT applications.",
      },
      {
        title: "Beyond Microcontrollers",
        desc: "Platforms shaping the future of embedded systems, robotics, AI, and edge computing: Raspberry Pi, STM32, NVIDIA Jetson Nano.",
      },
    ],
  },
};

const upcomingEvents = [
  {
    title: "PCB Designing Workshop",
    category: "Technical Workshop",
    date: "Tentatively November 2026",
    status: "Upcoming",
    description:
      "A hands-on workshop focused on custom circuit board layout, schematic design, component footprints, and fabrication standards for real-world IoT hardware.",
  },
  {
    title: "Inter-College IoT Genesis Ideathon",
    category: "Ideathon & Competition",
    date: "February 2027",
    status: "Upcoming",
    description:
      "The next chapter of our premier inter-college ideathon. Compete across software architecture and physical prototype demonstrations with teams from colleges across Maharashtra.",
  },
];

const pastEvents = [
  {
    title: "Shark Tank IoT",
    category: "Flagship Event",
    description:
      "In collaboration with I2IOC. First-year students pitched innovative IoT solutions to industry judges Ashwin Kshirasagar and Shreyash Rane.",
    image: "/images/updates/shark-tank.jpeg",
    link: "/blog/shark-tank-iot-xen-4",
  },
  {
    title: "XEN 4.0 Speaker Session",
    category: "Technical",
    description:
      "A Speaker Session under XEN 4.0 by Prabhaker S. Sir (Indian Air Force) highlighted the importance of a disciplined engineering mindset, practical problem-solving, and real-world IoT applications in industry and defense.",
    image: "/images/updates/expert-session.jpeg",
    link: "/blog/iaf-expert-session-xen-4",
  },
  {
    title: "XEN 4.0 Workshop",
    category: "Technical",
    description:
      "A deep dive into Arduino, NodeMCU, and sensor integration for embedded systems enthusiasts.",
    image: "/images/updates/workshop.jpeg",
    link: "/blog/xen-4-hardware-workshop",
  },
  {
    title: "Resume Building Session",
    category: "Professional Development",
    description:
      "Led by Mr. Dheeraj Rathod, Career Coach, guiding students on crafting impactful, industry-ready resumes through effective structure, skill presentation, and project showcasing.",
    image: "/images/updates/resume.jpeg",
    link: "/blog/resume-building-session",
  },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4 md:px-8 bg-transparent relative z-10">
      {/* Pop up menu displayed when visiting Events page */}
      <UpcomingEventModal />

      <div className="container mx-auto">
        {/* Page Main Header */}
        <SectionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tight text-[var(--color-ink)] mb-6">
                Events & Workshops
              </h1>
              <p className="font-sans text-xl text-[var(--color-muted)] max-w-2xl">
                Explore our current flagship initiatives, upcoming roadmaps, and celebrated past events at VIT Pune.
              </p>
            </div>
            <div className="text-[var(--color-accent-blue)] font-mono text-sm tracking-widest uppercase">
              // 2026 - 2027 Season
            </div>
          </div>
        </SectionReveal>

        {/* 1. CURRENT EVENT SECTION (At the top) */}
        <div className="mb-20">
          <SectionReveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent-blue)] animate-pulse" />
              <h2 className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-accent-blue)]">
                // Current Event
              </h2>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.05}>
            <div className="relative bg-[var(--color-surface-alt)]/80 backdrop-blur-md p-8 md:p-12 border-2 border-[var(--color-accent-blue)] shadow-[0_0_50px_rgba(0,102,255,0.15)] group">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-[var(--color-ink)]/10">
                <div>
                  <span className="font-mono text-xs font-bold tracking-widest uppercase bg-[var(--color-accent-blue)] text-white px-3.5 py-1.5 shadow-sm inline-block mb-3">
                    ★ Registrations Open
                  </span>
                  <h3 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[var(--color-ink)] tracking-tight">
                    {currentEvent.title}
                  </h3>
                  <p className="font-mono text-xs text-[var(--color-accent-blue)] tracking-wider uppercase mt-1">
                    {currentEvent.organizer}
                  </p>
                </div>

                <div className="flex items-center gap-2 font-mono text-base md:text-lg font-bold text-[var(--color-accent-blue)] bg-[var(--color-surface)] px-4 py-2 border border-[var(--color-ink)]/10">
                  <span>📅</span>
                  <span>{currentEvent.date}</span>
                </div>
              </div>

              <p className="font-sans text-lg text-[var(--color-ink)]/90 leading-relaxed mb-8 max-w-3xl">
                Get ready to explore the world of <strong>Embedded Systems</strong>, <strong>IoT</strong>, and <strong>next-generation development boards</strong> with XEN Workshop 5.0! Whether you&apos;re taking your first step into electronics or looking to expand your knowledge, this workshop takes you from fundamentals to advanced edge platforms.
              </p>

              {/* Day 1 & Day 2 Schedule Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Day 1 */}
                <div className="p-6 bg-[var(--color-surface)] border border-[var(--color-ink)]/10">
                  <div className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-accent-blue)] mb-3 pb-2 border-b border-[var(--color-ink)]/10">
                    (DAY 1) — {currentEvent.day1.time}
                  </div>
                  <div className="space-y-4 font-sans text-sm">
                    {currentEvent.day1.items.map((item, idx) => (
                      <div key={idx}>
                        <p className="font-semibold text-[var(--color-ink)] flex items-start gap-2">
                          <span className="text-[var(--color-accent-blue)]">🔹</span>
                          <span>{item.title}</span>
                        </p>
                        <p className="text-xs text-[var(--color-muted)] pl-5 mt-0.5 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Day 2 */}
                <div className="p-6 bg-[var(--color-surface)] border border-[var(--color-ink)]/10">
                  <div className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-accent-blue)] mb-3 pb-2 border-b border-[var(--color-ink)]/10">
                    (DAY 2) — {currentEvent.day2.time}
                  </div>
                  <div className="space-y-4 font-sans text-sm">
                    {currentEvent.day2.items.map((item, idx) => (
                      <div key={idx}>
                        <p className="font-semibold text-[var(--color-ink)] flex items-start gap-2">
                          <span className="text-[var(--color-accent-blue)]">🔹</span>
                          <span>{item.title}</span>
                        </p>
                        <p className="text-xs text-[var(--color-muted)] pl-5 mt-0.5 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons: Apply Now & WhatsApp Group */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-6 border-t border-[var(--color-ink)]/10">
                <a
                  href={currentEvent.googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 h-13 px-8 bg-[var(--color-ink)] text-[var(--color-surface)] font-mono text-xs font-bold tracking-widest uppercase hover:bg-[var(--color-accent-blue)] transition-colors text-center shadow-lg group"
                >
                  <span>Apply Now!</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>

                <a
                  href={currentEvent.whatsappGroupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 h-13 px-8 bg-[#25D366] text-black font-mono text-xs font-bold tracking-wider uppercase hover:bg-[#20ba5a] transition-colors text-center shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-current" />
                  <span>Join WhatsApp Group</span>
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>

        {/* 2. UPCOMING EVENTS ROADMAP */}
        <div className="mb-24">
          <SectionReveal>
            <div className="flex items-center justify-between gap-4 mb-8">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-accent-blue)] block mb-2">
                  // Upcoming Roadmap
                </span>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-[var(--color-ink)]">
                  Upcoming Events
                </h2>
              </div>
              <span className="font-mono text-xs text-[var(--color-muted)] uppercase hidden sm:block">
                Future Sessions
              </span>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, i) => (
              <SectionReveal key={event.title} delay={i * 0.08}>
                <div className="p-8 bg-[var(--color-surface-alt)]/60 backdrop-blur-md border border-[var(--color-ink)]/10 hover:border-[var(--color-accent-blue)] transition-colors h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between font-mono text-xs mb-4">
                      <span className="text-[var(--color-accent-blue)] uppercase tracking-widest">
                        {event.category}
                      </span>
                      <span className="text-[var(--color-muted)] font-bold">
                        {event.date}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-2xl text-[var(--color-ink)] mb-4">
                      {event.title}
                    </h3>

                    <p className="font-sans text-[var(--color-muted)] leading-relaxed mb-6">
                      {event.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[var(--color-ink)]/10 flex items-center justify-between">
                    <span className="font-mono text-xs text-[var(--color-accent-blue)] tracking-wider uppercase">
                      Status: {event.status}
                    </span>
                    <a
                      href={currentEvent.whatsappGroupUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-[var(--color-ink)] hover:text-[#25D366] transition-colors inline-flex items-center gap-1.5"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-current" />
                      <span>Stay Updated &rarr;</span>
                    </a>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>

        {/* 3. PAST EVENTS SECTION (Renamed from "XEN 4.0 & Beyond") */}
        <div>
          <SectionReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-t border-[var(--color-ink)]/10 pt-16">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-accent-blue)] block mb-2">
                  // Archive & Reports
                </span>
                <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-[var(--color-ink)] mb-3">
                  Past Events
                </h2>
                <p className="font-sans text-lg text-[var(--color-muted)] max-w-2xl">
                  Hands-on innovation, hackathons, and expert speaker sessions hosted by IoT Club VIT Pune.
                </p>
              </div>
              <div className="text-[var(--color-muted)] font-mono text-xs tracking-widest uppercase">
                // Completed Editions
              </div>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event, i) => (
              <SectionReveal key={event.title} delay={i * 0.05}>
                <div className="bg-[var(--color-surface-alt)]/60 backdrop-blur-md p-10 border border-[var(--color-ink)]/10 hover:border-[var(--color-accent-blue)] transition-colors h-full flex flex-col group">
                  <Link
                    href={event.link}
                    prefetch={true}
                    className="block relative aspect-video -mx-10 -mt-10 mb-8 overflow-hidden border-b border-[var(--color-ink)]/10"
                  >
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      priority={i < 2}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>

                  <div className="font-mono text-xs text-[var(--color-accent-blue)] mb-4 uppercase tracking-widest">
                    {event.category}
                  </div>

                  <h3 className="font-display font-bold text-2xl text-[var(--color-ink)] mb-4">
                    <Link
                      href={event.link}
                      prefetch={true}
                      className="hover:text-[var(--color-accent-blue)] transition-colors"
                    >
                      {event.title}
                    </Link>
                  </h3>

                  <p className="font-sans text-[var(--color-muted)] leading-relaxed mb-6">
                    {event.description}
                  </p>

                  <div className="mt-auto pt-6 border-t border-[var(--color-ink)]/10">
                    <Link
                      href={event.link}
                      prefetch={true}
                      className="inline-flex items-center font-mono text-xs font-bold tracking-widest uppercase text-[var(--color-ink)] group-hover:text-[var(--color-accent-blue)] transition-colors"
                    >
                      View Details{" "}
                      <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
