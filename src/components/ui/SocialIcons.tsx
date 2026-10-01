import React from "react";
import { SOCIAL_LINKS, SocialLink } from "@/data/socials";
import { cn } from "@/lib/utils";

export function LinkedInIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0-.01-3.28 1.64 1.64 0 0 0 .01 3.28M5.07 18.5h2.78v-8.37H5.07v8.37z" />
    </svg>
  );
}

export function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export function XTwitterIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.031 0C5.394 0 0 5.391 0 12.025c0 2.115.549 4.181 1.593 6.002L.069 24l6.155-1.503A12.025 12.025 0 0 0 12.031 24c6.637 0 12.031-5.394 12.031-12.025 0-6.634-5.394-12.025-12.031-12.025zm0 22.028a9.988 9.988 0 0 1-5.097-1.392l-.366-.217-3.784.925.938-3.687-.238-.379a9.988 9.988 0 1 1 8.547 4.75zm5.485-7.483c-.3-.15-1.776-.876-2.052-.976-.275-.1-.476-.15-.677.15-.201.3-.777.976-.953 1.176-.176.2-.351.226-.652.076-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.501-1.786-1.677-2.087-.176-.3-.019-.462.132-.612.135-.135.301-.351.452-.527.15-.175.201-.301.301-.501.1-.2.05-.376-.025-.526-.075-.15-.677-1.632-.928-2.235-.245-.588-.493-.509-.677-.518-.176-.01-.376-.01-.577-.01s-.527.075-.802.376c-.276.3-1.054 1.029-1.054 2.51 0 1.48 1.079 2.91 1.23 3.11.15.2 2.124 3.243 5.145 4.548.719.311 1.28.497 1.718.636.722.23 1.379.197 1.898.12.578-.086 1.776-.726 2.027-1.428.251-.703.251-1.305.176-1.428-.076-.123-.276-.2-.576-.35z" />
    </svg>
  );
}

interface SocialIconLinkProps {
  platform: keyof typeof SOCIAL_LINKS;
  className?: string;
  iconClassName?: string;
}

export function SocialIconLink({ platform, className, iconClassName }: SocialIconLinkProps) {
  const item = SOCIAL_LINKS[platform];
  if (!item) return null;

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={item.label}
      className={cn(
        "group relative flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300",
        "border-[var(--color-surface)]/15 bg-[var(--color-surface)]/5 text-[var(--color-muted)]",
        "hover:scale-110 active:scale-95",
        platform === "linkedin" && "hover:text-[#0A66C2] hover:border-[#0A66C2]/60 hover:bg-[#0A66C2]/10",
        platform === "instagram" && "hover:text-[#E1306C] hover:border-[#E1306C]/60 hover:bg-[#E1306C]/10",
        platform === "x" && "hover:text-white hover:border-white/60 hover:bg-white/10",
        platform === "whatsapp" && "hover:text-[#25D366] hover:border-[#25D366]/60 hover:bg-[#25D366]/10",
        className
      )}
    >
      {platform === "linkedin" && <LinkedInIcon className={iconClassName || "w-4 h-4"} />}
      {platform === "instagram" && <InstagramIcon className={iconClassName || "w-4 h-4"} />}
      {platform === "x" && <XTwitterIcon className={iconClassName || "w-4 h-4"} />}
      {platform === "whatsapp" && <WhatsAppIcon className={iconClassName || "w-4 h-4"} />}
    </a>
  );
}

export function SocialBar({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <SocialIconLink platform="linkedin" />
      <SocialIconLink platform="instagram" />
      <SocialIconLink platform="x" />
      <SocialIconLink platform="whatsapp" />
    </div>
  );
}
