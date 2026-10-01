"use client";

import { SectionReveal } from "@/components/ui/SectionReveal";
import { useState } from "react";
import { SOCIAL_LINKS } from "@/data/socials";
import { LinkedInIcon } from "@/components/ui/SocialIcons";

export default function PartnerPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    object.access_key = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "d0302f54-509a-4b85-8a3b-231d92ede2a7";
    object.subject = "New Partnership Inquiry - " + (formData.get("organization") || formData.get("name") || "Partner");
    object.from_name = "IoT Club VIT Pune Website";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(object),
      });
      
      const data = await response.json();
      if (data.success) {
        setIsSubmitted(true);
      } else {
        alert(data.message || "Something went wrong. Please check your configuration or try again later.");
      }
    } catch {
      alert("Error submitting form. Please check your network connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 md:px-8 bg-[var(--color-surface)]">
      <div className="container mx-auto max-w-3xl">
        <SectionReveal>
          <div className="font-mono text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-[var(--color-ink)] mb-8 border-b-2 border-[var(--color-ink)] pb-4 inline-block">
            COLLABORATE WITH US
          </div>
          <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tight text-[var(--color-ink)] mb-6 uppercase">
            Partner<br />
            <span className="text-[var(--color-accent-blue)]">With Us.</span>
          </h1>
          <p className="font-sans text-xl text-[var(--color-muted)] mb-16 leading-relaxed">
            Whether you're looking to sponsor events, mentor students, or collaborate on deep-tech research, we'd love to hear from you.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          {isSubmitted ? (
            <div className="bg-[var(--color-surface-alt)] border-2 border-[var(--color-accent-blue)] p-12 text-center">
              <div className="w-16 h-16 bg-[var(--color-accent-blue)] text-[var(--color-surface)] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-3xl text-[var(--color-ink)] mb-4">Message Received</h3>
              <p className="font-sans text-[var(--color-muted)] max-w-lg mx-auto mb-6">
                Thank you for your interest in partnering with the IoT Club. Our team will get back to you shortly.
              </p>
              <div className="pt-6 border-t border-[var(--color-ink)]/10 flex flex-wrap items-center justify-center gap-6">
                <a
                  href={SOCIAL_LINKS.linkedin.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-[var(--color-accent-blue)] hover:underline"
                >
                  <LinkedInIcon className="w-4 h-4" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Web3Forms requires a hidden honeypot field to prevent spam */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="block font-mono text-xs font-bold tracking-widest uppercase text-[var(--color-ink)]">
                    Full Name <span className="text-[var(--color-accent-blue)]">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required 
                    className="w-full bg-[var(--color-surface-alt)] border-2 border-[var(--color-ink)]/20 p-4 font-sans text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-accent-blue)] transition-colors placeholder:text-[var(--color-muted)]/50"
                    placeholder="Jane Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="organization" className="block font-mono text-xs font-bold tracking-widest uppercase text-[var(--color-ink)]">
                    Organization / Company
                  </label>
                  <input 
                    type="text" 
                    id="organization" 
                    name="organization"
                    className="w-full bg-[var(--color-surface-alt)] border-2 border-[var(--color-ink)]/20 p-4 font-sans text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-accent-blue)] transition-colors placeholder:text-[var(--color-muted)]/50"
                    placeholder="Tech Corp"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block font-mono text-xs font-bold tracking-widest uppercase text-[var(--color-ink)]">
                  Work Email <span className="text-[var(--color-accent-blue)]">*</span>
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required 
                  className="w-full bg-[var(--color-surface-alt)] border-2 border-[var(--color-ink)]/20 p-4 font-sans text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-accent-blue)] transition-colors placeholder:text-[var(--color-muted)]/50"
                  placeholder="jane@company.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="type" className="block font-mono text-xs font-bold tracking-widest uppercase text-[var(--color-ink)]">
                  Partnership Type <span className="text-[var(--color-accent-blue)]">*</span>
                </label>
                <div className="relative">
                  <select 
                    id="type" 
                    name="partnership_type"
                    required 
                    defaultValue=""
                    className="w-full appearance-none bg-[var(--color-surface-alt)] border-2 border-[var(--color-ink)]/20 p-4 font-sans text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-accent-blue)] transition-colors"
                  >
                    <option value="" disabled>Select an option</option>
                    <option value="Sponsorship">Event Sponsorship</option>
                    <option value="Mentorship">Mentorship & Workshops</option>
                    <option value="Hardware">Hardware / Tooling Support</option>
                    <option value="Other">Other Collaboration</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[var(--color-ink)]">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block font-mono text-xs font-bold tracking-widest uppercase text-[var(--color-ink)]">
                  Message <span className="text-[var(--color-accent-blue)]">*</span>
                </label>
                <textarea 
                  id="message" 
                  name="message"
                  required 
                  rows={6}
                  className="w-full bg-[var(--color-surface-alt)] border-2 border-[var(--color-ink)]/20 p-4 font-sans text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-accent-blue)] transition-colors resize-none placeholder:text-[var(--color-muted)]/50"
                  placeholder="Tell us how you'd like to collaborate..."
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full h-16 bg-[var(--color-ink)] text-[var(--color-surface)] font-sans font-bold text-sm tracking-widest uppercase hover:bg-[var(--color-accent-blue)] transition-colors active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Submit Inquiry"}
              </button>
            </form>
          )}
        </SectionReveal>
      </div>
    </div>
  );
}
