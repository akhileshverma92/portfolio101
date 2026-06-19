"use client";

import DottedGlowBackgroundDemo from "@/components/dotted-glow-background-demo";
import NoiseBackgroundDemo from "@/components/noise-background-demo";
import TooltipCardDemo from "@/components/tooltip-card-demo";
import { Cover } from "@/components/ui/cover";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { Highlight } from "@/components/ui/hero-highlight";
import { LinkPreview } from "@/components/ui/link-preview";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { WobbleCard } from "@/components/ui/wobble-card";
import { Tooltip } from "@/components/ui/tooltip-card";
import { ImagesBadge } from "@/components/ui/images-badge";
import Image from "next/image";

const skills = {
  shopify: [
    "Shopify Polaris",
    "Liquid",
    "Shopify CLI",
    "Shopify App Development", 
    "Embedded Apps",
    "Shopify Theme Development",
  ],
  frontend: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
  backend: ["Node.js", "Express.js", "MongoDB", "Appwrite"],
  tools: ["Git", "GitHub", "Postman", "VS Code", "Cursor", "Vercel", "Figma", "Canva"],
};

const experiences = [
  {
    role: "Frontend Developer",
    company: "EcomZenith LLP",
    companyUrl: "https://ecomzenith.com/",
    duration: "Aug 2025 - Present",
    points: [
      "Developing Shopify embedded applications using React.js and Shopify Polaris for merchant workflows.",
      "Building reusable Polaris-based UI components and responsive merchant dashboards.",
      "Customizing Shopify themes with Liquid to improve storefront usability and conversion flow.",
      "Integrating backend APIs and optimizing performance for scalable, merchant-facing experiences.",
    ],
  },
  {
    role: "Jr. Associate Developer",
    company: "DigiCoders Pvt Ltd",
    companyUrl: "https://thedigicoders.com/",
    duration: "March 2025 - Sep 2025",
    points: ["Worked on real-world development projects", "Gained industry-level experience"],
  },
  {
    role: "Summer Training in Python",
    company: "SV Infotech",
    companyUrl: "https://www.svinfotech.co.in/",
    duration: "Aug 2024 - Sep 2024",
    points: ["Hands-on Python training", "Built practical foundations for backend logic"],
  },
];

const projects = [
  {
    name: "Custom Shopify Theme",
    tech: ["Shopify", "Liquid", "JavaScript", "HTML", "CSS", "Shopify CLI"],
    description:
      "Developed a custom Shopify theme from scratch with reusable sections, responsive storefront pages, and optimized Lighthouse scores (Performance 81, Accessibility 90, Best Practices 100, SEO 92).",
    live: "https://sprinto-dev.myshopify.com/",
    code: "1234",
  },
  {
    name: "AI Tailwind Generator",
    tech: ["React", "Tailwind CSS", "Gemini API", "Framer Motion"],
    description:
      "AI-powered tool that generates production-ready Tailwind CSS utility classes to speed up frontend delivery and component styling.",
    live: "#",
    code: "#",
  },
  {
    name: "HostelCart India",
    tech: ["React", "Appwrite", "Google OAuth"],
    description:
      "Marketplace platform enabling students to buy and sell second-hand products locally with responsive interfaces and user-friendly product flows.",
    live: "https://hostelcartindia.live/",
    code: "#",
  },
];

const achievements = [
  {
    title: "Completed 1-year Web Development Course (STP Computer Education)",
  },
  {
    title: "Community Volunteer at FOSS United Kanpur",
    tooltip: "Contributed to local open-source events and helped attendees with setup/support.",
  },
  {
    title: "Volunteered in National Seminar (Oct 2024)",
  },
  {
    title: "Participated in FOSS Hack 2025",
    tooltip: "Worked in a team hackathon environment and built rapid prototypes.",
  },
];

const socialLinks = [
  { label: "Email", href: "mailto:akhileshverma734867@gmail.com" },
  { label: "Call", href: "tel:+917348675182" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="border-t border-dotted border-zinc-300 pt-8">
      <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">{title}</p>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f6f6f6] px-4 py-10 text-zinc-700">

      <main className="mx-auto w-full max-w-3xl">
        <header className="space-y-5">
          <div>
            <p className="text-sm text-zinc-500">Lucknow, Uttar Pradesh, India</p>
            <FollowerPointerCard
              title={
                <> <span > नमस्ते </span>
                </>
              }
            >
              <div className="mt-1 flex items-center justify-between gap-3">
                <h1 className="text-3xl font-semibold tracking-tight text-zinc-800 sm:text-4xl">
                  <Cover>Akhilesh Verma</Cover>
                </h1>
                <img
                  src="https://media.tenor.com/fOD0TBLKQg8AAAAm/spider-man-no-way-home-marvel-studios.webp"
                  alt="Animated avatar"
                  width={64}
                  height={64}
                  loading="eager"
                  fetchPriority="high"
                  decoding="sync"
                  className="ml-auto h-18 w-18 rounded-full object-cover ring-1 ring-zinc-300 sm:h-18 sm:w-18"
                />
              </div>
            </FollowerPointerCard>
            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-zinc-600">
              Frontend Developer at EcomZenith | Shopify Polaris | Shopify Themes | Embedded Apps. I
              build fast, scalable, and user-friendly e-commerce experiences using{" "}
              <Highlight className="text-black dark:text-white">React.js, Polaris, and Liquid</Highlight>{" "}
              for merchant dashboards, embedded app interfaces, and storefront customization. I focus on
              clean UI architecture, API-driven workflows, and performance-first delivery for modern
              Shopify ecosystems.
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-4 text-sm text-zinc-500">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition hover:text-zinc-800"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/1L7wIh4lQ-Mck8JwTIM_6p3xa7f7Fczcz/view?usp=sharing"
              target="_blank"
              className="ml-auto  px-3 py-1.5 text-sm text-zinc-700 transition hover:border-zinc-500"
            >
              <NoiseBackgroundDemo />
            </a>
          </nav>
        </header>

        <div className="mt-8 space-y-10">
          <Section id="experience" title="Experience">
            <div className="space-y-6">
              {experiences.map((exp) => (
                <article key={`${exp.role}-${exp.company}`} className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold text-zinc-800">
                      {exp.role} -{" "}
                      <LinkPreview
                        url={exp.companyUrl}
                        className="border-b border-dotted border-zinc-500 text-zinc-700 transition hover:text-zinc-900"
                      >
                        {exp.company}
                      </LinkPreview>
                    </h3>
                    <span className="text-xs text-zinc-500">{exp.duration}</span>
                  </div>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-zinc-600">
                    {exp.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </Section>

          <Section id="skills" title="Skills">
            <div className="grid gap-4 sm:grid-cols-2">
              <FollowerPointerCard
                title={
                  <> <span className="text-zinc-100" > “Building merchant-first Shopify experiences with Polaris + Liquid 🛍️”</span>
                  </>
                }
              >
                <WobbleCard
                  containerClassName="h-full bg-red-900/90 border border-zinc-800"
                  className="px-5 py-8 sm:px-6 sm:py-10"
                >
                  <div>
                    <h3 className="mb-3 text-sm font-semibold text-zinc-100">Shopify</h3>

                    <div className="flex flex-wrap gap-2 text-sm text-zinc-200">
                      {skills.shopify.map((item) => (
                        <span key={item} className="rounded-full border border-zinc-600 px-3 py-1">
                          {item}
                        </span>
                      ))}
                    </div>

                  </div>
                </WobbleCard>

              </FollowerPointerCard>
              <FollowerPointerCard
                title={
                  <> <span className="text-zinc-100" > “Modern React interfaces optimized for speed, clarity, and scale ⚡”</span>
                  </>
                }
              >
                <WobbleCard
                  containerClassName="h-full bg-yellow-900/90 border border-zinc-800"
                  className="px-5 py-8 sm:px-6 sm:py-10"
                >
                  <div>
                    <h3 className="mb-3 text-sm font-semibold text-zinc-100">Frontend</h3>
                    <div className="flex flex-wrap gap-2 text-sm text-zinc-200">
                      {skills.frontend.map((item) => (
                        <span key={item} className="rounded-full border border-zinc-600 px-3 py-1">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </WobbleCard>
              </FollowerPointerCard>
              <FollowerPointerCard
                title={
                  <> <span className="text-zinc-100" > “Reliable APIs and scalable backend foundations for frontend workflows 🚀”</span>
                  </>
                }
              >
                <WobbleCard
                  containerClassName="h-full bg-green-900/90 border border-zinc-800"
                  className="px-5 py-8 sm:px-6 sm:py-10"
                >
                  <div>
                    <h3 className="mb-3 text-sm font-semibold text-zinc-100">Backend</h3>
                    <div className="flex flex-wrap gap-2 text-sm text-zinc-200">
                      {skills.backend.map((item) => (
                        <span key={item} className="rounded-full border border-zinc-600 px-3 py-1">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </WobbleCard>
              </FollowerPointerCard>
              <FollowerPointerCard
                title={
                  <> <span className="text-zinc-100" > “Tooling that helps me ship clean merchant dashboards faster 😎”</span>
                  </>
                }
              >
                <WobbleCard
                  containerClassName="h-full bg-blue-700/90 border border-zinc-800"
                  className="px-5 py-8 sm:px-6 sm:py-10"
                >
                  <div>
                    <h3 className="mb-3 text-sm font-semibold text-zinc-100">Tools</h3>
                    <div className="flex flex-wrap gap-2 text-sm text-zinc-200">
                      {skills.tools.map((item) => (
                        <span key={item} className="rounded-full border border-zinc-600 px-3 py-1">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </WobbleCard>
              </FollowerPointerCard>
            </div>
          </Section>

          <Section id="projects" title="">
            <ImagesBadge
              text="Projects"
              images={[
                "https://assets.aceternity.com/pro/agenforce-1.webp",
                "https://assets.aceternity.com/pro/agenforce-2.webp",
                "https://assets.aceternity.com/pro/agenforce-3.webp",
              ]}
            />
            <div className="space-y-6">
              {projects.map((project) => (
                <article key={project.name} className="space-y-2">
                  <h3 className="text-lg font-semibold text-zinc-800">{project.name}</h3>
                  <p className="text-sm leading-6 text-zinc-600">{project.description}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-zinc-600">
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-full border border-zinc-300 px-2.5 py-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-1 text-sm">
                    <LinkPreview
                      url={project.live}
                      className="border-b border-dotted border-zinc-500 text-zinc-700 transition hover:text-zinc-900"
                    >
                      Live Demo
                    </LinkPreview>
                    <a href={project.code} className="text-zinc-700 underline-offset-4 hover:underline">
                      Source Code
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </Section>

          <Section id="achievements" title="Achievements & Activities">
            <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-600">
              {achievements.map((item) => (
                <li key={item.title}>
                  {item.tooltip ? (
                    <Tooltip content={item.tooltip} containerClassName=" inline-block text-zinc-600">
                      <span className="bg-red border-b border-dotted border-zinc-400">
                        {item.title}
                      </span>
                    </Tooltip>
                  ) : (
                    item.title
                  )}
                </li>
              ))}
            </ul>
          </Section>

          <Section id="contact" title="Contact">
            <div className="grid gap-4 text-sm text-zinc-600 sm:grid-cols-3">
              <div>
                <p className="text-[11px] uppercase tracking-wider text-zinc-500">Email</p>
                <a href="mailto:akhileshverma734867@gmail.com" className="mt-1 block hover:underline">
                  akhileshverma734867@gmail.com
                </a>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-zinc-500">Phone</p>
                <a href="tel:+917348675182" className="mt-1 block hover:underline">
                  +91-7348675182
                </a>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-zinc-500">Location</p>
                <p className="mt-1">Lucknow, Uttar Pradesh, India</p>
              </div>
            </div>
          </Section>

          <footer className="border-t border-dotted border-zinc-300 pt-7 text-center text-sm text-zinc-500">
            Built with care by Akhilesh Verma.
          </footer>
        </div>
      </main>

    </div>
  );
}
