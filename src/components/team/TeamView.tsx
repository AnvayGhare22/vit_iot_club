"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { TeamMember, coreCommittee, domainHeads, teams } from "@/data/teamData";
import { TeamModal } from "@/components/team/TeamModal";

function getInitials(name: string): string {
  if (!name) return "";
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function MemberCard({
  member,
  onClick,
}: {
  member: TeamMember;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col group cursor-pointer select-none"
      role="button"
      tabIndex={0}
      aria-label={`View details for ${member.name}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className="w-full aspect-[3/4] bg-[var(--color-surface-alt)] border border-[var(--color-ink)]/10 mb-4 overflow-hidden relative group-hover:border-[var(--color-accent-blue)] transition-colors duration-300">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[var(--color-surface-alt)] to-[var(--color-surface)]">
            <div className="w-14 h-14 rounded-full border border-[var(--color-accent-blue)]/40 bg-[var(--color-accent-blue)]/10 flex items-center justify-center text-[var(--color-accent-blue)] font-mono font-bold text-lg tracking-wider group-hover:scale-110 transition-transform duration-300">
              {getInitials(member.name)}
            </div>
          </div>
        )}

        {/* Hover info badge */}
        <div className="absolute inset-x-2 bottom-2 py-1 px-2 bg-black/80 backdrop-blur-sm text-white font-mono text-[10px] tracking-wider text-center uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-sm">
          Click for details
        </div>
      </div>
      <h3 className="font-sans font-bold text-lg text-[var(--color-ink)] group-hover:text-[var(--color-accent-blue)] transition-colors">
        {member.name}
      </h3>
      <p className="font-mono text-xs text-[var(--color-muted)] uppercase tracking-wider mt-1">
        {member.role}
      </p>
    </div>
  );
}

export function TeamView() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <>
      <SectionReveal>
        <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tight text-[var(--color-ink)] mb-6">
          The Team
        </h1>
        <p className="font-sans text-xl text-[var(--color-muted)] max-w-2xl mb-24">
          Meet the researchers, developers, and designers driving innovation at VIT Pune&apos;s IoT Club.
        </p>
      </SectionReveal>

      {/* Core Committee */}
      <section className="mb-32">
        <SectionReveal delay={0.1}>
          <h2 className="font-mono text-sm tracking-[0.2em] text-[var(--color-ink)] mb-12 border-b border-[var(--color-ink)]/10 pb-4">
            CORE COMMITTEE
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {coreCommittee.map((member) => (
              <MemberCard
                key={member.name}
                member={member}
                onClick={() => setSelectedMember(member)}
              />
            ))}
          </div>
        </SectionReveal>
      </section>

      {/* Domain Heads */}
      <section className="mb-32">
        <SectionReveal delay={0.1}>
          <h2 className="font-mono text-sm tracking-[0.2em] text-[var(--color-ink)] mb-12 border-b border-[var(--color-ink)]/10 pb-4">
            DOMAIN HEADS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {domainHeads.map((member) => (
              <MemberCard
                key={member.name}
                member={member}
                onClick={() => setSelectedMember(member)}
              />
            ))}
          </div>
        </SectionReveal>
      </section>

      {/* Domain Teams */}
      {teams.map((team) => (
        <section key={team.name} className="mb-24">
          <SectionReveal delay={0.05}>
            <div className="flex items-center justify-between border-b border-[var(--color-ink)]/10 pb-4 mb-12">
              <h2 className="font-mono text-sm tracking-[0.2em] text-[var(--color-ink)]">
                {team.name.toUpperCase()}
              </h2>
              <span className="font-mono text-xs text-[var(--color-accent-blue)]">
                {team.members.length} MEMBERS
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-12">
              {team.members.map((member) => (
                <MemberCard
                  key={`${team.name}-${member.name}`}
                  member={member}
                  onClick={() => setSelectedMember(member)}
                />
              ))}
            </div>
          </SectionReveal>
        </section>
      ))}

      {/* Interactive Popup Modal */}
      <TeamModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </>
  );
}
