import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { SectionReveal } from "@/components/ui/SectionReveal";

interface BlogPost {
  slug: string;
  type: string;
  date: string;
  category: string;
  title: string;
  author: string;
  readTime: string;
  image: string;
  stats?: { label: string; value: string }[];
  milestones?: string[];
  sections?: { title?: string; paragraphs: string[] }[];
  gallery?: { url: string; caption: string; alt?: string }[];
  content?: string[];
}

const iotGenesisData: BlogPost = {
  slug: "iot-genesis",
  type: "Inter-College Ideathon",
  date: "21st – 27th February 2026",
  category: "Ideathon & Innovation",
  title: "IoT Genesis '26 — Inter-College Technical Ideathon & Prototype Showcase",
  author: "IoT Club Technical Team",
  readTime: "6 min read",
  image: "/images/blogs/iot-genesis-img-4.jpeg",
  stats: [
    { label: "Total Registrations", value: "140+ Teams" },
    { label: "Grand Finalists", value: "35 Teams" },
    { label: "Prize Pool", value: "₹10,000 Cash" },
    { label: "Venue", value: "B001, VIT Pune" },
  ],
  sections: [
    {
      title: "Executive Summary & Ideathon Vision",
      paragraphs: [
        "IoT Genesis '26 was organized by the IoT Club, VIT Pune, as an inter-college technical ideathon designed to inspire young innovators to translate theoretical engineering into practical, scalable Internet of Things architectures.",
        "Spanning two competitive rounds, the event engaged over 140 teams representing colleges across Maharashtra. Participants tackled real-world challenges across smart agriculture, healthcare telemetry, intelligent disaster response rovers, and industrial automation."
      ],
    },
    {
      title: "Round Structure & The Grand Finale",
      paragraphs: [
        "Round 1 was conducted online from 21st to 23rd February 2026, wherein competing teams submitted comprehensive technical presentations detailing problem formulations, system architectures, sensor interfaces, and preliminary circuit schematics.",
        "From the 140+ submissions, 35 elite finalist teams were shortlisted for the Grand Offline Finale held on 27th February 2026 at the B001 Auditorium, VIT Pune. The offline round required teams to present live proof-of-concept hardware prototypes and operational microcontrollers before an esteemed judging panel."
      ],
    },
    {
      title: "Distinguished Guest & Industry Mentorship",
      paragraphs: [
        "The event was graced by Chief Guest and Judge Mr. Atharva Balpande, Solution Architect at Dassault Systèmes, alongside respected faculty mentors Dr. Vijaya Aher, Prof. Rupa Kawchale, and Prof. Pravin Gawande.",
        "Mr. Balpande delivered an inspiring keynote addressing the industry shift towards digital twin technology, edge intelligence, and robust embedded hardware design. During evaluations, he engaged deeply with each team, evaluating component economics, power budgeting, sensor calibration, and failure tolerances."
      ],
    },
    {
      title: "Prize Distribution & Accolades",
      paragraphs: [
        "The ideathon featured a total cash prize pool of ₹10,000. The winning team was awarded ₹5,000 for their remarkable prototype, with the first runner-up receiving ₹3,000 and the second runner-up securing ₹2,000, along with certificates of excellence and technical mentorship.",
        "Key organizers Hamd Ansari, Shaoor Ahmed, and Mansi Laddha, supported by a 30-member committee, ensured seamless logistics, technical evaluation, and a highly competitive yet supportive environment."
      ],
    },
  ],
  milestones: [
    "Successfully hosted 140+ teams across Maharashtra in a two-stage competitive ideathon.",
    "35 live hardware prototypes demonstrated, featuring ESP32, STM32, and custom sensor rigs.",
    "Direct technical feedback and industry mentorship provided by Dassault Systèmes experts.",
    "Fostered inter-disciplinary collaboration between hardware design, embedded firmware, and cloud analytics."
  ],
  gallery: [
    { url: "/images/blogs/iot-genesis-img-4.jpeg", caption: "B001 Auditorium stage during the grand finale and project presentations." },
    { url: "/images/blogs/iot-genesis-img-3.jpeg", caption: "Finalist team presenting their IoT telemetry architecture to the judging panel." },
    { url: "/images/blogs/iot-genesis-img-5.jpeg", caption: "Hardware prototype demonstration featuring robotic rovers and microcontrollers." },
    { url: "/images/blogs/iot-genesis-img-6.jpeg", caption: "Award ceremony, faculty felicitation, and organizing committee gathering." },
  ],
};

const miniSharkTankData: BlogPost = {
  slug: "mini-shark-tank-iot",
  type: "Flagship Ideathon",
  date: "1st November 2025",
  category: "Competition",
  title: "Mini Shark Tank IoT — Nurturing First-Year Technical Pitching & Innovation",
  author: "IoT Club Editorial Team",
  readTime: "5 min read",
  image: "/images/blogs/mini-shark-tank-img-4.jpeg",
  stats: [
    { label: "Total Attendance", value: "120 Students" },
    { label: "Competing Teams", value: "25 Teams" },
    { label: "Span", value: "1 Day (6 Hours)" },
    { label: "Collaboration", value: "IoT Club × I2IOC" },
  ],
  sections: [
    {
      title: "Event Overview & Maiden Edition",
      paragraphs: [
        "The Mini Shark Tank IoT event was organized by the IoT Club, VIT Pune, in collaboration with the Industry-Institute Interaction Cell (I2IOC). Held on 1st November 2025 at B001 and the TPO Office, this maiden event was purposefully structured as an ideathon to introduce first-year students to technical innovation, business viability, and structured project pitching.",
        "The event witnessed enthusiastic participation from approximately 120 first-year students organized into 25 teams of 3 to 5 members each, showcasing solutions addressing civic automation, agricultural sensing, home automation, and smart campus utilities."
      ],
    },
    {
      title: "Pitching Dynamics & Industry Cross-Examination",
      paragraphs: [
        "Each team took the stage in a competitive pitching format reminiscent of Shark Tank. Participants formulated problem statements, explained hardware feasibility, presented circuit block diagrams, and justified their project economics.",
        "A distinguished panel of alumni judges evaluated the presentations: Mr. Shreyash Rane from Honeywell (specializing in industrial engineering and automation) and Mr. Ashwin Kshirsagar from Alfa Laval (expert in technical innovation and project execution).",
        "The judges challenged students on supply-chain viability, sensor calibration, real-world deployment challenges, and intellectual property. Dr. Hemant Dushane, President of the VIIT Alumni Association, along with Prof. Dr. Vijay Mane (Dean - Alumni and Outreach) and Prof. Vishal Ambhore (Associate Dean), commended the students for their bold presentation and poise."
      ],
    },
    {
      title: "Sponsorship & Student Takeaways",
      paragraphs: [
        "The event was proudly supported and sponsored by I2IOC, who provided goodies, awards, and logistical support. The structured pitching format served as a launchpad for first-year engineers, teaching them how to communicate technical complexity in concise, persuasive language.",
        "Key organizers Hamd Ansari, Shaoor Ahmed, and Mansi Laddha, along with a 25-member organizing committee, ensured rigorous judging rubrics and timely execution throughout the 6-hour marathon session."
      ],
    },
  ],
  milestones: [
    "Maiden ideathon-style competition conducted specifically for first-year students.",
    "Active participation from 25+ teams representing 120 budding engineers.",
    "Industry-level critique and mentoring from Honeywell and Alfa Laval alumni leaders.",
    "Enhanced core competencies in engineering problem formulation, public speaking, and team dynamics."
  ],
  gallery: [
    { url: "/images/blogs/mini-shark-tank-img-4.jpeg", caption: "Felicitation ceremony of alumni judges Mr. Shreyash Rane and Mr. Ashwin Kshirsagar with faculty." },
    { url: "/images/blogs/mini-shark-tank-img-3.jpeg", caption: "First-year student team pitching their IoT business concept to the Shark Tank panel." },
    { url: "/images/blogs/mini-shark-tank-img-5.jpeg", caption: "Interactive Q&A session with judges probing hardware components and market feasibility." },
    { url: "/images/blogs/mini-shark-tank-img-6.jpeg", caption: "Evaluation panel reviewing pitch decks and scoring student innovations." },
  ],
};

const xenWorkshopData: BlogPost = {
  slug: "xen-workshop",
  type: "Technical Workshop",
  date: "30th & 31st October 2025",
  category: "Workshop",
  title: "XEN 4.0 Workshop — Embedded Systems, Microcontrollers, and Defense IoT",
  author: "IoT Club Technical Team",
  readTime: "7 min read",
  image: "/images/blogs/xen-workshop-img-4.jpeg",
  stats: [
    { label: "Total Attendance", value: "150 Students" },
    { label: "Event Duration", value: "2 Days (7 Hours)" },
    { label: "Venue", value: "B001 Auditorium" },
    { label: "Hardware Platforms", value: "Arduino, ESP32, RPi" },
  ],
  sections: [
    {
      title: "Workshop Overview & Pedagogical Objectives",
      paragraphs: [
        "The XEN 4.0 Workshop, organized by the IoT Club at VIT Pune on 30th and 31st October 2025, was a comprehensive two-day technical event tailored to equip first-year engineers with strong foundational understanding and hands-on exposure to embedded hardware, microcontrollers, and modern Internet of Things systems.",
        "Guided by Faculty Mentors Dr. Vijaya Aher and Prof. Dr. Nitin Sakhare, over 150 students filled the B001 Auditorium, participating in interactive circuit wiring, live coding exercises, and cutting-edge hardware demonstrations."
      ],
    },
    {
      title: "Day 1: Microcontroller Fundamentals & Connected Devices",
      paragraphs: [
        "Day 1 commenced with Arduino fundamentals, unravelling microcontroller architectures, input/output interfacing, registers, PWM, and programming via the Arduino IDE. Students engaged in hands-on sessions assembling breadboards, wiring ultrasonic sensors, LEDs, and relays.",
        "The curriculum progressed directly into ESP8266 and ESP32 microcontrollers, highlighting their onboard Wi-Fi and Bluetooth capabilities, TCP/IP communication, and role in modern distributed IoT sensor nodes."
      ],
    },
    {
      title: "Day 2: Raspberry Pi, Agentic AI, and Indian Air Force Defense Applications",
      paragraphs: [
        "Day 2 took learning to the next level with a live demonstration of Raspberry Pi, exploring Linux-based single board computers, GPIO pin manipulation in Python, and video streaming applications.",
        "Students were introduced to the frontier of Agentic AI in IoT—demonstrating how autonomous software agents can process edge sensor data to execute intelligent real-time decisions without constant cloud latency.",
        "The workshop culminated in a landmark guest lecture by Prabhakar S. from the Indian Air Force. He gave students an eye-opening perspective on mission-critical IoT in military defense: encrypted field communications, radar telemetry, perimeter surveillance, and ruggedized hardware engineering capable of withstanding extreme environmental stress."
      ],
    },
  ],
  milestones: [
    "Successful execution of a 2-day hands-on embedded systems workshop for 150 first-year students.",
    "Covered Arduino, ESP8266/ESP32, Raspberry Pi, and breadboard interfacing from the ground up.",
    "Introduced cutting-edge concepts of Agentic AI integrated with IoT edge devices.",
    "Direct industry and national defense perspective provided by Prabhakar S. of the Indian Air Force."
  ],
  gallery: [
    { url: "/images/blogs/xen-workshop-img-4.jpeg", caption: "B001 auditorium packed with 150 enthusiastic students during the workshop demo." },
    { url: "/images/blogs/xen-workshop-img-3.jpeg", caption: "Hands-on hardware lab: students assembling and programming Arduino circuits." },
    { url: "/images/blogs/xen-workshop-img-5.jpeg", caption: "Close-up breadboard sensor interfacing and microcontroller debugging." },
    { url: "/images/blogs/xen-workshop-img-6.jpeg", caption: "Guest lecture session by Prabhakar S. from the Indian Air Force on Defense IoT." },
  ],
};

const iafSessionData: BlogPost = {
  slug: "iaf-expert-session-xen-4",
  type: "Defense Keynote",
  date: "31st October 2025",
  category: "Speaker Session",
  title: "IAF Expert Session — Mission-Critical IoT in National Defense with Prabhakar S.",
  author: "IoT Club Editorial Team",
  readTime: "5 min read",
  image: "/images/blogs/xen-workshop-img-6.jpeg",
  stats: [
    { label: "Distinguished Speaker", value: "Prabhakar S. (IAF)" },
    { label: "Audience", value: "150 Students" },
    { label: "Focus Area", value: "Defense & Surveillance IoT" },
    { label: "Venue", value: "B001 Auditorium" },
  ],
  sections: [
    {
      title: "Session Background & The Engineering Mindset",
      paragraphs: [
        "As part of the flagship XEN 4.0 technical symposium, the IoT Club, VIT Pune, had the distinct honor of hosting Prabhakar S., an experienced technology specialist from the Indian Air Force. Addressing an audience of 150 eager engineering students in B001, the keynote delivered profound insights into how Internet of Things technologies safeguard national defense and aerospace infrastructure.",
        "Prabhakar S. emphasized the foundational importance of a disciplined engineering mindset, highlighting that in defense environments, failure is not an option. Practical problem-solving, rigorous verification, and zero-defect programming form the bedrock of military-grade hardware."
      ],
    },
    {
      title: "Real-World Applications in Military Operations",
      paragraphs: [
        "The lecture demystified the high-stakes implementation of IoT in modern armed forces. Key topics covered included tactical battlefield telemetry, encrypted mesh communications, perimeter intrusion detection using distributed sensor networks, and real-time operational health monitoring of defense equipment.",
        "Students learned about hardware hardening against electronic countermeasures, electromagnetic pulses (EMP), and harsh weather conditions—concepts far beyond standard textbook examples."
      ],
    },
    {
      title: "Q&A and Impact on Future Engineers",
      paragraphs: [
        "The session concluded with an engaging interactive dialogue where students asked about career pathways in defense technology, indigenous R&D, and drone communications. The talk left a lasting impression, motivating students to apply their engineering acumen toward national development."
      ],
    },
  ],
  milestones: [
    "First-hand defense technology insights delivered directly by an Indian Air Force specialist.",
    "Deep dive into secure telemetry, encrypted communications, and mission-critical reliability.",
    "Inspired students toward careers in defense tech, aerospace, and indigenous hardware R&D."
  ],
  gallery: [
    { url: "/images/blogs/xen-workshop-img-6.jpeg", caption: "Prabhakar S. (Indian Air Force) delivering the keynote on defense IoT systems." },
    { url: "/images/blogs/xen-workshop-img-4.jpeg", caption: "Auditorium of 150 students listening attentively to the defense speaker." },
  ],
};

const blogPosts: Record<string, BlogPost> = {
  // New Blog Page Slugs
  "iot-genesis": iotGenesisData,
  "mini-shark-tank-iot": miniSharkTankData,
  "xen-workshop": xenWorkshopData,

  // Events Page / Homepage Slugs mapped to rich content
  "shark-tank-iot-xen-4": {
    ...miniSharkTankData,
    slug: "shark-tank-iot-xen-4",
  },
  "xen-4-hardware-workshop": {
    ...xenWorkshopData,
    slug: "xen-4-hardware-workshop",
  },
  "iaf-expert-session-xen-4": iafSessionData,

  // Kept with Lorem Ipsum as requested
  "resume-building-session": {
    slug: "resume-building-session",
    type: "Workshop",
    date: "September 2024",
    category: "Career Development",
    title: "Resume Building Session with Career Coach Dheeraj Rathod",
    author: "IoT Club Editorial Team",
    readTime: "4 min read",
    image: "/images/updates/resume.jpeg",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl. Pellentesque euismod, nisl vel ultricies lacinia.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam.",
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
    ],
  },
  "first-year-orientation-2024": {
    slug: "first-year-orientation-2024",
    type: "Orientation",
    date: "August 2024",
    category: "Club Activities",
    title: "First Year Orientation 2024 — Welcome to the Future",
    author: "IoT Club Editorial Team",
    readTime: "6 min read",
    image: "/images/updates/orientation.jpeg",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula, enim in suscipit fermentum, purus massa ultricies orci, non vehicula lorem augue eu lorem. Integer facilisis malesuada massa non faucibus.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero sed diam.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
  },
  "member-projects-showcase": {
    slug: "member-projects-showcase",
    type: "Achievements",
    date: "Ongoing",
    category: "Projects",
    title: "Member Projects Showcase — Innovation in Action",
    author: "IoT Club Editorial Team",
    readTime: "8 min read",
    image: "/images/updates/showcase.jpg",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend libero at lobortis.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est.",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-[var(--color-surface)] pb-24">
      {/* Hero Cover Banner */}
      <div className="relative w-full h-[55vh] min-h-[380px] overflow-hidden bg-[var(--color-surface-alt)]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-[var(--color-surface)]/50 to-transparent" />
        <div className="absolute top-8 left-4 md:left-8">
          <span className="font-mono text-xs font-bold tracking-[0.25em] uppercase bg-[var(--color-accent-blue)] text-white px-4 py-1.5 shadow-sm">
            {post.category}
          </span>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-4xl -mt-24 relative z-10">
        <SectionReveal>
          {/* Navigation Breadcrumb Bar */}
          <div className="mb-10 flex flex-wrap items-center gap-3">
            <Link
              href="/"
              prefetch={true}
              className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-[var(--color-muted)] hover:text-[var(--color-accent-blue)] transition-colors"
            >
              &larr; Home
            </Link>
            <span className="text-[var(--color-muted)]/30">|</span>
            <Link
              href="/blog"
              prefetch={true}
              className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-[var(--color-muted)] hover:text-[var(--color-accent-blue)] transition-colors"
            >
              All Blogs
            </Link>
            <span className="text-[var(--color-muted)]/30">|</span>
            <Link
              href="/events"
              prefetch={true}
              className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-[var(--color-muted)] hover:text-[var(--color-accent-blue)] transition-colors"
            >
              All Events &rarr;
            </Link>
          </div>

          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs tracking-widest uppercase text-[var(--color-muted)] mb-6">
            <span className="text-[var(--color-accent-blue)] font-semibold">{post.type}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          {/* Main Title */}
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-[var(--color-ink)] mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Author Byline */}
          <div className="flex items-center gap-3 pb-8 mb-8 border-b border-[var(--color-ink)]/10">
            <div className="w-10 h-10 rounded-full bg-[var(--color-accent-blue)]/20 flex items-center justify-center">
              <span className="font-mono text-xs font-bold text-[var(--color-accent-blue)]">IC</span>
            </div>
            <div>
              <p className="font-sans font-semibold text-sm text-[var(--color-ink)]">{post.author}</p>
              <p className="font-mono text-xs text-[var(--color-muted)]">IoT Club VIT Pune</p>
            </div>
          </div>

          {/* Quick Metrics Bar if available */}
          {post.stats && post.stats.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 mb-12 bg-[var(--color-surface-alt)]/80 backdrop-blur-sm border border-[var(--color-ink)]/10">
              {post.stats.map((s, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-muted)] mb-1">
                    {s.label}
                  </span>
                  <span className="font-display font-bold text-base sm:text-lg text-[var(--color-ink)]">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Structured Sections / Paragraphs */}
          {post.sections && post.sections.length > 0 ? (
            <div className="space-y-10">
              {post.sections.map((section, idx) => (
                <div key={idx} className="space-y-4">
                  {section.title && (
                    <h2 className="font-display font-bold text-2xl md:text-3xl text-[var(--color-ink)] tracking-tight pt-4 border-t border-[var(--color-ink)]/10 first:border-t-0 first:pt-0">
                      {section.title}
                    </h2>
                  )}
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="font-sans text-lg text-[var(--color-ink)]/80 leading-[1.85]">
                      {p}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-7">
              {post.content?.map((paragraph, i) => (
                <p key={i} className="font-sans text-lg text-[var(--color-ink)]/80 leading-[1.85]">
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          {/* Milestones / Key Takeaways Box */}
          {post.milestones && post.milestones.length > 0 && (
            <div className="my-12 p-8 border-l-4 border-[var(--color-accent-blue)] bg-[var(--color-surface-alt)]">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-accent-blue)] mb-4">
                Key Event Milestones & Outcomes
              </h3>
              <ul className="space-y-3 font-sans text-base text-[var(--color-ink)]/85">
                {post.milestones.map((m, mIdx) => (
                  <li key={mIdx} className="flex items-start gap-3">
                    <span className="text-[var(--color-accent-blue)] font-bold">✔</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Real Photo Gallery extracted from report */}
          {post.gallery && post.gallery.length > 0 && (
            <div className="my-14 space-y-6">
              <div className="flex items-center justify-between border-b border-[var(--color-ink)]/10 pb-4">
                <h3 className="font-display font-bold text-2xl text-[var(--color-ink)]">
                  Event Gallery
                </h3>
                <span className="font-mono text-xs text-[var(--color-accent-blue)] tracking-widest uppercase">
                  // {post.gallery.length} Report Photographs
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {post.gallery.map((item, idx) => (
                  <div key={idx} className="group border border-[var(--color-ink)]/10 bg-[var(--color-surface-alt)] overflow-hidden">
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--color-surface)]">
                      <Image
                        src={item.url}
                        alt={item.caption || item.alt || "Event Photograph"}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    {item.caption && (
                      <div className="p-4 border-t border-[var(--color-ink)]/10 bg-[var(--color-surface-alt)]">
                        <p className="font-mono text-xs text-[var(--color-muted)] tracking-wide leading-relaxed">
                          {item.caption}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="mt-14 pt-10 border-t border-[var(--color-ink)]/10 flex flex-wrap gap-3">
            {[post.type, post.category, "IoT Club", "VIT Pune"].map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs tracking-widest uppercase px-3 py-1.5 border border-[var(--color-ink)]/15 text-[var(--color-muted)] bg-[var(--color-surface-alt)]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Join Call to Action */}
          <div className="mt-16 p-8 bg-[var(--color-surface-alt)] border border-[var(--color-ink)]/10">
            <p className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-accent-blue)] mb-3">
              Want to be part of the action?
            </p>
            <h3 className="font-display font-bold text-2xl text-[var(--color-ink)] mb-4">
              Join the IoT Club at VIT Pune
            </h3>
            <p className="font-sans text-[var(--color-muted)] mb-6 leading-relaxed">
              Be part of our growing community of innovators, builders, and tech enthusiasts. Apply now to join the club and attend events like these.
            </p>
            <Link
              href="/join"
              className="inline-flex items-center justify-center h-12 px-8 bg-[var(--color-ink)] text-[var(--color-surface)] font-sans font-bold text-sm tracking-widest uppercase hover:bg-[var(--color-accent-blue)] transition-colors"
            >
              Apply to Join
            </Link>
          </div>
        </SectionReveal>
      </div>
    </article>
  );
}