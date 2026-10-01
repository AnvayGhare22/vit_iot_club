"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Phone, ExternalLink } from "lucide-react";
import { TeamMember } from "@/data/teamData";

function getInitials(name: string): string {
  if (!name) return "";
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function TeamModal({
  member,
  onClose,
}: {
  member: TeamMember | null;
  onClose: () => void;
}) {
  // Close on ESC key and lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (member) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [member, onClose]);

  return (
    <AnimatePresence>
      {member && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Dialog Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-[var(--color-surface)] border border-[var(--color-ink)]/20 shadow-2xl rounded-sm overflow-hidden z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Logo Spectrum Accent Bar */}
            <div className="h-1.5 w-full bg-logo-spectrum" />

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 p-2 text-[var(--color-muted)] hover:text-[var(--color-ink)] hover:bg-[var(--color-ink)]/5 rounded-full transition-colors z-20"
            >
              <X size={20} />
            </button>

            <div className="p-6 sm:p-8">
              {/* Header: Photo + Name + Role */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
                {/* Photo or Initials Avatar */}
                <div className="relative w-28 h-36 aspect-[3/4] bg-[var(--color-surface-alt)] border border-[var(--color-ink)]/15 shrink-0 overflow-hidden rounded-sm">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      sizes="112px"
                      className="object-cover object-top"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[var(--color-surface-alt)] to-[var(--color-surface)]">
                      <div className="w-14 h-14 rounded-full border border-[var(--color-accent-blue)]/40 bg-[var(--color-accent-blue)]/10 flex items-center justify-center text-[var(--color-accent-blue)] font-mono font-bold text-xl tracking-wider">
                        {getInitials(member.name)}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="inline-block font-mono text-xs uppercase tracking-widest text-[var(--color-accent-blue)] font-semibold mb-1">
                    {member.role}
                  </div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-[var(--color-ink)] leading-tight mb-2">
                    {member.name}
                  </h3>
                  <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[var(--color-muted)] bg-[var(--color-ink)]/5 border border-[var(--color-ink)]/10 px-2.5 py-1 rounded-sm">
                    {member.domain}
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="my-6 border-t border-[var(--color-ink)]/10" />

              {/* Contact and Links */}
              <div className="space-y-3 font-mono text-xs">
                {/* Email */}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-between p-3 rounded-sm border border-[var(--color-ink)]/10 bg-[var(--color-surface-alt)]/50 hover:bg-[var(--color-ink)]/5 hover:border-[var(--color-accent-blue)] text-[var(--color-ink)] transition-colors group"
                  >
                    <div className="flex items-center gap-3 truncate">
                      <Mail size={16} className="text-[var(--color-accent-blue)] shrink-0" />
                      <span className="truncate">{member.email}</span>
                    </div>
                    <span className="text-[var(--color-muted)] group-hover:text-[var(--color-accent-blue)] text-[11px] shrink-0 ml-2">
                      Send Email &rarr;
                    </span>
                  </a>
                )}

                {/* LinkedIn */}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-sm border border-[var(--color-ink)]/10 bg-[var(--color-surface-alt)]/50 hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/50 text-[var(--color-ink)] transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-[#0A66C2] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0-.01-3.28 1.64 1.64 0 0 0 .01 3.28M5.07 18.5h2.78v-8.37H5.07v8.37z" />
                      </svg>
                      <span className="font-semibold">LinkedIn Profile</span>
                    </div>
                    <ExternalLink size={14} className="text-[var(--color-muted)] group-hover:text-[#0A66C2]" />
                  </a>
                )}

                {/* GitHub */}
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-sm border border-[var(--color-ink)]/10 bg-[var(--color-surface-alt)]/50 hover:bg-[var(--color-ink)]/10 hover:border-[var(--color-ink)]/40 text-[var(--color-ink)] transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-[var(--color-ink)] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      <span className="font-semibold">GitHub Profile</span>
                    </div>
                    <ExternalLink size={14} className="text-[var(--color-muted)] group-hover:text-[var(--color-ink)]" />
                  </a>
                )}

                {/* Contact */}
                {member.contact && (
                  <div className="flex items-center gap-3 p-3 rounded-sm border border-[var(--color-ink)]/10 bg-[var(--color-surface-alt)]/30 text-[var(--color-muted)]">
                    <Phone size={16} className="text-[var(--color-muted)] shrink-0" />
                    <span>{member.contact}</span>
                  </div>
                )}
              </div>

              {/* Close Button Footer */}
              <div className="mt-8 pt-4 border-t border-[var(--color-ink)]/10 flex justify-end">
                <button
                  onClick={onClose}
                  className="px-5 py-2 font-mono text-xs font-semibold tracking-wider uppercase border border-[var(--color-ink)]/20 hover:border-[var(--color-ink)] text-[var(--color-ink)] rounded-sm transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
