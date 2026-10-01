"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { SocialBar } from "@/components/ui/SocialIcons";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 h-20 transition-colors duration-300",
          scrolled ? "bg-[var(--color-surface)]/80 backdrop-blur-md border-b border-[var(--color-ink)]/10" : "bg-transparent"
        )}
      >
        {/* Subtle Logo Chromatic Spectrum Edge */}
        <div className="absolute top-0 inset-x-0 h-[2.5px] bg-logo-spectrum" />

        <div className="container mx-auto px-4 md:px-8 h-full flex items-center justify-between">
          <Link href="/" prefetch={true} className="group relative z-50 flex items-center gap-3">
            <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-105">
              <Image 
                src="/iot_club_logo.png" 
                alt="IoT Club Logo" 
                fill 
                sizes="40px"
                className="object-contain"
                priority
              />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-[var(--color-ink)] hidden sm:block">
              IoT Club
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { name: "Home", href: "/" },
              { name: "Events", href: "/events" },
              { name: "Projects", href: "/projects" },
              { name: "Team", href: "/team" },
              { name: "Blog", href: "/blog" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                prefetch={true}
                className="group flex flex-col relative"
              >
                <span className={cn(
                  "font-sans text-sm font-medium tracking-tight transition-colors ease-custom",
                  pathname === link.href ? "text-[var(--color-ink)]" : "text-[var(--color-muted)] group-hover:text-[var(--color-ink)]"
                )}>
                  {link.name}
                </span>
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4 z-50">
            <Link
              href="/join"
              prefetch={true}
              className="hidden lg:inline-flex items-center justify-center h-10 px-6 font-sans text-sm font-semibold tracking-wide border border-[var(--color-ink)]/20 text-[var(--color-ink)] active-scale hover:border-[var(--color-ink)] transition-colors rounded"
            >
              Join Team
            </Link>
            <Link
              href="/partner"
              prefetch={true}
              className="hidden md:inline-flex items-center justify-center h-10 px-6 font-sans text-sm font-semibold tracking-wide bg-[var(--color-accent-blue)] text-[var(--color-surface)] active-scale hover:opacity-90 transition-opacity rounded"
            >
              Partner With Us
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-[var(--color-ink)] active-scale"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-40 bg-[var(--color-surface)] pt-24 px-4 pb-8 flex flex-col"
          >
            <nav className="flex flex-col gap-6">
              {[
                { name: "Home", href: "/" },
                { name: "Events", href: "/events" },
                { name: "Projects", href: "/projects" },
                { name: "Team", href: "/team" },
                { name: "Blog", href: "/blog" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  prefetch={true}
                  className="flex items-baseline gap-4 border-b border-[var(--color-ink)]/10 pb-4"
                >
                  <span className="font-display font-semibold text-2xl text-[var(--color-ink)]">
                    {link.name}
                  </span>
                </Link>
              ))}
            </nav>
            <div className="mt-auto pt-6 flex flex-col gap-3">
              <Link
                href="/join"
                prefetch={true}
                className="flex items-center justify-center w-full h-12 font-sans text-sm font-semibold tracking-wide border border-[var(--color-ink)]/20 text-[var(--color-ink)] active-scale rounded"
              >
                Join Our Team
              </Link>
              <Link
                href="/partner"
                prefetch={true}
                className="flex items-center justify-center w-full h-12 font-sans text-sm font-semibold tracking-wide bg-[var(--color-accent-blue)] text-[var(--color-surface)] active-scale rounded"
              >
                Partner With Us
              </Link>
              <div className="pt-2 flex flex-col items-center gap-2">
                <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-muted)]">
                  Connect With Us
                </span>
                <SocialBar />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
