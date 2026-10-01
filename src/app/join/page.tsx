"use client";

import { SectionReveal } from "@/components/ui/SectionReveal";
import { useState } from "react";
import { SOCIAL_LINKS } from "@/data/socials";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";

export default function JoinPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    object.access_key = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "d0302f54-509a-4b85-8a3b-231d92ede2a7";
    object.subject = "New Team Application - " + (formData.get("name") || "Student");
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
        alert(data.message || "Submission failed. Please try again.");
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
            BECOME A MEMBER
          </div>
          <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tight text-[var(--color-ink)] mb-6 uppercase">
            Join Our<br />
            <span className="text-[var(--color-accent-blue)]">Team.</span>
          </h1>
          <p className="font-sans text-xl text-[var(--color-muted)] mb-16 leading-relaxed">
            Passionate about deep-tech, IoT, or AI? We are always looking for driven individuals to build the future with us.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          {isSubmitted ? (
            <div className="bg-[var(--color-surface-alt)] border-2 border-[var(--color-accent-blue)] p-8 md:p-12 text-center">
              <div className="w-16 h-16 bg-[var(--color-accent-blue)] text-[var(--color-surface)] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-3xl text-[var(--color-ink)] mb-4">Application Received</h3>
              <p className="font-sans text-[var(--color-muted)] max-w-lg mx-auto mb-8 leading-relaxed">
                Thank you for applying to the IoT Club! We will review your application and reach out via email shortly.
              </p>
              <div className="border-t border-[var(--color-ink)]/10 pt-8 flex flex-col items-center">
                <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] mb-4">
                  In the meantime, join our active members community:
                </p>
                <a
                  href={SOCIAL_LINKS.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#25D366] text-black font-sans font-bold text-sm tracking-wide rounded hover:brightness-110 active-scale transition-all"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Join IoT Club WhatsApp Community
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Web3Forms hidden honeypot field to prevent spam */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Full Name */}
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
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block font-mono text-xs font-bold tracking-widest uppercase text-[var(--color-ink)]">
                    College Email <span className="text-[var(--color-accent-blue)]">*</span>
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required 
                    className="w-full bg-[var(--color-surface-alt)] border-2 border-[var(--color-ink)]/20 p-4 font-sans text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-accent-blue)] transition-colors placeholder:text-[var(--color-muted)]/50"
                    placeholder="john.doe@vit.edu"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Year of Study */}
                <div className="space-y-2">
                  <label htmlFor="year" className="block font-mono text-xs font-bold tracking-widest uppercase text-[var(--color-ink)]">
                    Year of Study <span className="text-[var(--color-accent-blue)]">*</span>
                  </label>
                  <div className="relative">
                    <select 
                      id="year" 
                      name="year_of_study"
                      required 
                      defaultValue=""
                      className="w-full appearance-none bg-[var(--color-surface-alt)] border-2 border-[var(--color-ink)]/20 p-4 font-sans text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-accent-blue)] transition-colors"
                    >
                      <option value="" disabled>Select Year</option>
                      <option value="First Year">First Year</option>
                      <option value="Second Year">Second Year</option>
                      <option value="Third Year">Third Year</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[var(--color-ink)]">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Department */}
                <div className="space-y-2">
                  <label htmlFor="department" className="block font-mono text-xs font-bold tracking-widest uppercase text-[var(--color-ink)]">
                    Department / Branch <span className="text-[var(--color-accent-blue)]">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="department" 
                    name="department"
                    required 
                    className="w-full bg-[var(--color-surface-alt)] border-2 border-[var(--color-ink)]/20 p-4 font-sans text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-accent-blue)] transition-colors placeholder:text-[var(--color-muted)]/50"
                    placeholder="E.g., Computer Engineering"
                  />
                </div>
              </div>

              {/* Domain Interest */}
              <div className="space-y-2">
                <label htmlFor="domain" className="block font-mono text-xs font-bold tracking-widest uppercase text-[var(--color-ink)]">
                  Primary Domain of Interest <span className="text-[var(--color-accent-blue)]">*</span>
                </label>
                <div className="relative">
                  <select 
                    id="domain" 
                    name="domain_interest"
                    required 
                    defaultValue=""
                    className="w-full appearance-none bg-[var(--color-surface-alt)] border-2 border-[var(--color-ink)]/20 p-4 font-sans text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-accent-blue)] transition-colors"
                  >
                    <option value="" disabled>Select Domain</option>
                    <option value="IoT & Hardware">IoT & Hardware</option>
                    <option value="AI & Machine Learning">AI & Machine Learning</option>
                    <option value="Software / Web Development">Software / Web Development</option>
                    <option value="Design & UI/UX">Design & UI/UX</option>
                    <option value="Management & PR">Management & PR</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[var(--color-ink)]">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Portfolio / Resume Link */}
              <div className="space-y-2">
                <label htmlFor="portfolio" className="block font-mono text-xs font-bold tracking-widest uppercase text-[var(--color-ink)]">
                  Link to Resume / GitHub / Portfolio
                </label>
                <input 
                  type="url" 
                  id="portfolio" 
                  name="portfolio_link"
                  className="w-full bg-[var(--color-surface-alt)] border-2 border-[var(--color-ink)]/20 p-4 font-sans text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-accent-blue)] transition-colors placeholder:text-[var(--color-muted)]/50"
                  placeholder="https://github.com/yourusername"
                />
              </div>

              {/* Why join us */}
              <div className="space-y-2">
                <label htmlFor="message" className="block font-mono text-xs font-bold tracking-widest uppercase text-[var(--color-ink)]">
                  Why do you want to join? <span className="text-[var(--color-accent-blue)]">*</span>
                </label>
                <textarea 
                  id="message" 
                  name="why_join"
                  required 
                  rows={5}
                  className="w-full bg-[var(--color-surface-alt)] border-2 border-[var(--color-ink)]/20 p-4 font-sans text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-accent-blue)] transition-colors resize-none placeholder:text-[var(--color-muted)]/50"
                  placeholder="Tell us about your passion for tech..."
                ></textarea>
              </div>

              {/* Submit */}
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full h-16 bg-[var(--color-ink)] text-[var(--color-surface)] font-sans font-bold text-sm tracking-widest uppercase hover:bg-[var(--color-accent-blue)] transition-colors active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>

              <div className="pt-2 text-center">
                <p className="font-sans text-xs text-[var(--color-muted)]">
                  Questions before applying?{" "}
                  <a 
                    href={SOCIAL_LINKS.whatsapp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-accent-blue)] hover:underline font-medium"
                  >
                    Join our WhatsApp Community to connect
                  </a>
                </p>
              </div>
            </form>
          )}
        </SectionReveal>
      </div>
    </div>
  );
}
