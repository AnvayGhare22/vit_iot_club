import { SectionReveal } from "@/components/ui/SectionReveal";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | IoT Club VIT Pune",
  description: "Technical reports, ideathons, and hardware workshop insights from IoT Club VIT Pune.",
};

const blogs = [
  {
    title: "IoT Genesis",
    category: "Ideathon & Innovation",
    date: "February 2026",
    description: "An inter-college ideathon bringing together over 140 teams across two rounds of rigorous conceptualization and live hardware prototyping, evaluated by Dassault Systèmes experts.",
    image: "/images/blogs/iot-genesis-img-4.jpeg",
    link: "/blog/iot-genesis",
  },
  {
    title: "Mini Shark Tank",
    category: "Flagship Ideathon",
    date: "November 2025",
    description: "Organized in collaboration with I2IOC, 120 first-year innovators across 25 teams pitched inventive IoT products to distinguished alumni leaders from Honeywell and Alfa Laval.",
    image: "/images/blogs/mini-shark-tank-img-4.jpeg",
    link: "/blog/mini-shark-tank-iot",
  },
  {
    title: "XEN Workshop",
    category: "Hands-on Technical",
    date: "October 2025",
    description: "A comprehensive 2-day workshop covering Arduino, ESP8266/ESP32 Wi-Fi architecture, Raspberry Pi edge automation, Agentic AI, and defense applications led by Prabhakar S. from the Indian Air Force.",
    image: "/images/blogs/xen-workshop-img-4.jpeg",
    link: "/blog/xen-workshop",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4 md:px-8 bg-transparent relative z-10">
      <div className="container mx-auto">
        <SectionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div>
              <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tight text-[var(--color-ink)] mb-6">
                Club Blogs
              </h1>
              <p className="font-sans text-xl text-[var(--color-muted)] max-w-2xl">
                Technical deep-dives, ideathon highlights, and event reports straight from our innovators and makers.
              </p>
            </div>
            <div className="text-[var(--color-accent-blue)] font-mono text-sm tracking-widest uppercase">
              // Technical Reports
            </div>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
            <SectionReveal key={blog.title} delay={i * 0.08}>
              <div className="bg-[var(--color-surface-alt)]/60 backdrop-blur-md p-10 border border-[var(--color-ink)]/10 hover:border-[var(--color-accent-blue)] transition-colors h-full flex flex-col group">
                <Link
                  href={blog.link}
                  prefetch={true}
                  className="block relative aspect-video -mx-10 -mt-10 mb-8 overflow-hidden border-b border-[var(--color-ink)]/10"
                >
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    priority={i < 2}
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>

                <div className="flex items-center justify-between font-mono text-xs text-[var(--color-accent-blue)] mb-4 uppercase tracking-widest">
                  <span>{blog.category}</span>
                  <span className="text-[var(--color-muted)]">{blog.date}</span>
                </div>

                <h3 className="font-display font-bold text-2xl text-[var(--color-ink)] mb-4">
                  <Link href={blog.link} prefetch={true} className="hover:text-[var(--color-accent-blue)] transition-colors">
                    {blog.title}
                  </Link>
                </h3>

                <p className="font-sans text-[var(--color-muted)] leading-relaxed mb-6 flex-grow">
                  {blog.description}
                </p>

                <div className="mt-auto pt-6 border-t border-[var(--color-ink)]/10">
                  <Link
                    href={blog.link}
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
