"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";

interface UpcomingEventModalProps {
  forceOpen?: boolean;
}

export function UpcomingEventModal({ forceOpen = true }: UpcomingEventModalProps) {
  const [isOpen, setIsOpen] = useState(forceOpen);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    // 1. Pause Lenis virtual smooth-scrolling if active
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
    if (lenis && typeof lenis.stop === "function") {
      lenis.stop();
    }

    // 2. Lock both document.body and document.documentElement scroll
    const origBodyOverflow = document.body.style.overflow;
    const origHtmlOverflow = document.documentElement.style.overflow;
    const origBodyPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    // 3. Close on Escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      // Resume Lenis smooth-scrolling
      if (lenis && typeof lenis.start === "function") {
        lenis.start();
      }
      document.body.style.overflow = origBodyOverflow;
      document.documentElement.style.overflow = origHtmlOverflow;
      document.body.style.paddingRight = origBodyPaddingRight;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  const googleFormUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSdrTvI6tMZWqQkteMTI9AyIZoFIjYyAIIC2QRF7qTdCxAc9RA/viewform?usp=publish-editor";
  const whatsappGroupUrl = "https://chat.whatsapp.com/EJDVaeuGSKGBLHhyZgpO3z";

  const modalContent = (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="upcoming-event-title"
      data-lenis-prevent="true"
      className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md transition-all duration-300 animate-in fade-in"
      onClick={() => setIsOpen(false)}
      onWheel={(e) => {
        // Prevent background wheel if scrolled on backdrop
        if (e.target === e.currentTarget) {
          e.preventDefault();
        }
      }}
    >
      {/* Modal Dialog Content Container (completely covers & blocks navbar underneath) */}
      <div
        data-lenis-prevent="true"
        className="relative w-full max-w-2xl max-h-[88vh] flex flex-col bg-[var(--color-surface)] border-2 border-[var(--color-accent-blue)] shadow-[0_0_60px_rgba(0,102,255,0.35)] text-[var(--color-ink)] overscroll-contain overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
      >
        {/* Top Accent Chromatic Edge */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[var(--color-accent-blue)] via-cyan-400 to-[var(--color-accent-blue)] z-30" />

        {/* High-Hit-Area Cross Button (Fixed in modal top-right) */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsOpen(false);
          }}
          aria-label="Close popup"
          className="cursor-pointer absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-40 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center border-2 border-[var(--color-ink)]/30 bg-[var(--color-surface-alt)] text-[var(--color-ink)] hover:text-red-500 hover:border-red-500 hover:bg-red-500/10 active:scale-95 transition-all shadow-md group"
        >
          <svg
            className="w-6 h-6 pointer-events-none transition-transform duration-200 group-hover:scale-110"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Scrollable Content Container (data-lenis-prevent enables native modal scrolling) */}
        <div
          data-lenis-prevent="true"
          className="overflow-y-auto overscroll-contain flex-1 p-6 sm:p-9 pt-8"
        >
          {/* Status Header */}
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs mb-4 pr-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[var(--color-accent-blue)]/15 border border-[var(--color-accent-blue)]/40 text-[var(--color-accent-blue)] font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[var(--color-accent-blue)] animate-pulse" />
              Upcoming Event
            </span>
            <span className="text-[var(--color-muted)] uppercase tracking-wider">
              // Registrations Open
            </span>
          </div>

          {/* Event Main Title */}
          <h2
            id="upcoming-event-title"
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-[var(--color-ink)] mb-2 pr-12"
          >
            XEN WORKSHOP 5.0
          </h2>
          <p className="font-mono text-xs text-[var(--color-accent-blue)] tracking-wider uppercase mb-5">
            Organized by IoT Club, VIT Pune
          </p>

          {/* Tagline / Subtitle */}
          <div className="p-4 mb-6 bg-[var(--color-surface-alt)] border-l-4 border-[var(--color-accent-blue)] font-sans text-sm sm:text-base text-[var(--color-ink)]/90 leading-relaxed">
            Get ready to explore the world of <strong>Embedded Systems</strong>, <strong>IoT</strong>, and <strong>next-generation development boards</strong> with XEN Workshop 5.0!
          </div>

          {/* Date & Time Highlights */}
          <div className="mb-6 p-4 border border-[var(--color-ink)]/10 bg-[var(--color-surface-alt)]/60">
            <div className="flex items-center gap-2 font-mono text-sm sm:text-base font-bold text-[var(--color-accent-blue)] mb-3">
              <span>📅</span>
              <span>9 & 10 October 2026</span>
            </div>

            <div className="space-y-4 text-xs sm:text-sm font-sans text-[var(--color-ink)]/85">
              {/* Day 1 */}
              <div className="border-t border-[var(--color-ink)]/10 pt-3">
                <p className="font-mono font-bold text-xs uppercase tracking-wider text-[var(--color-ink)] mb-1">
                  (DAY 1) — 9 OCTOBER | 3:00 PM – 6:00 PM
                </p>
                <ul className="space-y-1 text-[var(--color-muted)] pl-2">
                  <li>• <strong className="text-[var(--color-ink)]">Introduction to IoT Club:</strong> Projects, opportunities & IoT landscape.</li>
                  <li>• <strong className="text-[var(--color-ink)]">Arduino & Embedded Systems:</strong> Microcontrollers, sensors & interfacing.</li>
                  <li>• <strong className="text-[var(--color-ink)]">Special Guest Session:</strong> Industry perspectives and expert experiences.</li>
                </ul>
              </div>

              {/* Day 2 */}
              <div className="border-t border-[var(--color-ink)]/10 pt-3">
                <p className="font-mono font-bold text-xs uppercase tracking-wider text-[var(--color-ink)] mb-1">
                  (DAY 2) — 10 OCTOBER | 2:00 PM – 6:00 PM
                </p>
                <ul className="space-y-1 text-[var(--color-muted)] pl-2">
                  <li>• <strong className="text-[var(--color-ink)]">NodeMCU & IoT:</strong> Wi-Fi enabled embedded development.</li>
                  <li>• <strong className="text-[var(--color-ink)]">ESP32 Hands-On Session:</strong> Modern industrial IoT applications.</li>
                  <li>• <strong className="text-[var(--color-ink)]">Beyond Microcontrollers:</strong> Raspberry Pi, STM32 & NVIDIA Jetson Nano (AI & Edge).</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="font-mono text-xs text-center text-[var(--color-muted)] tracking-wider mb-6 uppercase">
            💡 Learn. Build. Connect. Innovate. Two Days. Endless Possibilities. 🚀
          </p>

          {/* Action Buttons: Apply Now & WhatsApp Group */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            {/* Apply Now Button */}
            <a
              href={googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 h-12 px-6 bg-[var(--color-ink)] text-[var(--color-surface)] font-mono text-xs font-bold tracking-widest uppercase hover:bg-[var(--color-accent-blue)] transition-colors text-center shadow-md group"
            >
              <span>Apply Now!</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>

            {/* WhatsApp Group Link Button */}
            <a
              href={whatsappGroupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 h-12 px-6 bg-[#25D366] text-black font-mono text-xs font-bold tracking-wider uppercase hover:bg-[#20ba5a] transition-colors text-center shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current" />
              <span>Join WhatsApp Group</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
