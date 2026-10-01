import { SectionReveal } from "@/components/ui/SectionReveal";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/data/socials";
import { SocialBar, WhatsAppIcon, LinkedInIcon, InstagramIcon, XTwitterIcon } from "@/components/ui/SocialIcons";

export function Footer() {
  return (
    <footer className="bg-[var(--color-dark-panel)] text-[var(--color-surface)] pt-32 pb-12 relative z-10 overflow-hidden">
      {/* Signature Logo Chromatic Spectrum Border */}
      <div className="absolute top-0 inset-x-0 h-[3px] bg-logo-spectrum" />

      <div className="container mx-auto px-4 md:px-8">
        
        {/* Massive CTA */}
        <SectionReveal>
          <div className="flex flex-col items-center text-center mb-28">
            <h2 className="font-display font-bold text-5xl md:text-7xl tracking-tight mb-8">
              Ready to Join the <br/> <span className="text-logo-spectrum">Innovation?</span>
            </h2>
            <p className="font-sans text-xl text-[var(--color-muted)] max-w-2xl mx-auto mb-10">
              Become part of VIT Pune's most dynamic technical community. Learn, build, and innovate with us.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Link
                href="/join"
                className="w-full sm:w-auto inline-flex items-center justify-center h-14 px-8 bg-[var(--color-brand-gold)] text-[var(--color-brand-dark)] font-sans font-bold text-sm tracking-widest uppercase hover:brightness-110 active-scale transition-all"
              >
                Join Our Team
              </Link>
              <a
                href={SOCIAL_LINKS.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 h-14 px-8 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 hover:border-[#25D366] text-[#25D366] font-sans font-bold text-sm tracking-widest uppercase transition-all active-scale"
              >
                <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
                <span>Join Community</span>
              </a>
              <Link
                href="/events"
                className="w-full sm:w-auto inline-flex items-center justify-center h-14 px-8 bg-transparent border-2 border-[var(--color-surface)]/20 text-[var(--color-surface)] hover:bg-[var(--color-surface)] hover:text-[var(--color-ink)] font-sans font-bold text-sm tracking-widest uppercase transition-colors active-scale"
              >
                Upcoming Events
              </Link>
            </div>
          </div>
        </SectionReveal>

        {/* Footer Links & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-16 border-t border-[var(--color-surface)]/10">
          
          {/* Column 1: About & Social Icons */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 relative">
                <img src="/iot_club_logo.png" alt="IoT Club" className="w-full h-full object-contain" />
              </div>
              <h3 className="font-display font-bold text-2xl tracking-tight">IOT CLUB</h3>
            </div>
            <p className="font-sans text-[var(--color-muted)] leading-relaxed text-sm mb-6">
              Empowering students at VIT Pune to innovate and create technology solutions for tomorrow's challenges.
            </p>

            <div>
              <span className="block font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--color-muted)] mb-3">
                Connect With Us
              </span>
              <SocialBar />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--color-muted)] mb-6">Quick Links</h4>
            <ul className="space-y-3.5 font-sans">
              <li><Link href="/" className="hover:text-[var(--color-accent-blue)] transition-colors">Home</Link></li>
              <li><Link href="/events" className="hover:text-[var(--color-accent-blue)] transition-colors">Events</Link></li>
              <li><Link href="/projects" className="hover:text-[var(--color-accent-blue)] transition-colors">Projects</Link></li>
              <li><Link href="/team" className="hover:text-[var(--color-accent-blue)] transition-colors">Team</Link></li>
              <li><Link href="/blog" className="hover:text-[var(--color-accent-blue)] transition-colors">Blogs</Link></li>
              <li><Link href="/partner" className="hover:text-[var(--color-accent-blue)] transition-colors">Partner With Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Domains */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--color-muted)] mb-6">Domains</h4>
            <ul className="space-y-3.5 font-sans text-[var(--color-muted)]">
              <li>Internet of Things</li>
              <li>Artificial Intelligence</li>
              <li>Robotics</li>
              <li>Embedded Systems</li>
              <li>Machine Learning</li>
            </ul>
          </div>

          {/* Column 4: Contact & Community */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--color-muted)] mb-6">Contact & Community</h4>
            <ul className="space-y-4 font-sans text-[var(--color-surface)]">
              <li>
                <a href="mailto:iotclub@vit.edu" className="hover:text-[var(--color-accent-blue)] transition-colors">
                  iotclub@vit.edu
                </a>
              </li>
              <li className="text-[var(--color-muted)] text-sm">
                Harshvardhan Patil (Secretary)<br/>
                <span className="font-mono text-xs text-[var(--color-surface)]">+91 95112 92616</span>
              </li>
              <li className="text-[var(--color-muted)] text-sm">
                Suraj Yadav (Event Coordinator)<br/>
                <span className="font-mono text-xs text-[var(--color-surface)]">+91 95293 95453</span>
              </li>
              <li className="text-[var(--color-muted)] text-sm">
                VIT Pune, Maharashtra
              </li>
              <li className="pt-2">
                <a
                  href={SOCIAL_LINKS.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 hover:border-[#25D366] transition-all rounded group"
                >
                  <div className="w-8 h-8 rounded-full bg-[#25D366] text-black flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <WhatsAppIcon className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-sans font-semibold text-xs text-[#25D366]">WhatsApp Community</span>
                    <span className="font-mono text-[11px] text-[var(--color-muted)] group-hover:text-[var(--color-surface)]">Join our group discussion</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar with Copyright and Social Icons */}
        <div className="mt-20 pt-8 border-t border-[var(--color-surface)]/10 flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-[var(--color-muted)]">
          <div className="tracking-widest uppercase text-center md:text-left">
            © 2026 IOT CLUB VIT PUNE. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://in.linkedin.com/company/iot-club-viit-pune"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="IoT Club on LinkedIn"
              className="w-10 h-10 rounded-full border border-[var(--color-surface)]/15 bg-[var(--color-surface)]/5 text-[var(--color-muted)] flex items-center justify-center hover:text-[#0A66C2] hover:border-[#0A66C2]/60 hover:bg-[#0A66C2]/10 hover:scale-110 transition-all duration-200"
            >
              <i className="fab fa-linkedin text-base"></i>
            </a>
            <a
              href="https://x.com/vit_college?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="VIT College on X (Twitter)"
              className="w-10 h-10 rounded-full border border-[var(--color-surface)]/15 bg-[var(--color-surface)]/5 text-[var(--color-muted)] flex items-center justify-center hover:text-white hover:border-white/60 hover:bg-white/10 hover:scale-110 transition-all duration-200"
            >
              <i className="fab fa-twitter text-base"></i>
            </a>
            <a
              href="https://www.instagram.com/iot_club_vit/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="IoT Club on Instagram"
              className="w-10 h-10 rounded-full border border-[var(--color-surface)]/15 bg-[var(--color-surface)]/5 text-[var(--color-muted)] flex items-center justify-center hover:text-[#E1306C] hover:border-[#E1306C]/60 hover:bg-[#E1306C]/10 hover:scale-110 transition-all duration-200"
            >
              <i className="fab fa-instagram text-base"></i>
            </a>
            <a
              href="https://chat.whatsapp.com/EJDVaeuGSKGBLHhyZgpO3z"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join IoT Club WhatsApp Community"
              className="w-10 h-10 rounded-full border border-[var(--color-surface)]/15 bg-[var(--color-surface)]/5 text-[var(--color-muted)] flex items-center justify-center hover:text-[#25D366] hover:border-[#25D366]/60 hover:bg-[#25D366]/10 hover:scale-110 transition-all duration-200"
            >
              <i className="fab fa-whatsapp text-base"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
