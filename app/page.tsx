"use client";

import NoiseBackgroundDemo from "@/components/noise-background-demo";
import { Cover } from "@/components/ui/cover";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { Highlight } from "@/components/ui/hero-highlight";
import { LinkPreview } from "@/components/ui/link-preview";
import { WobbleCard } from "@/components/ui/wobble-card";
import { Tooltip } from "@/components/ui/tooltip-card";
import { ImagesBadge } from "@/components/ui/images-badge";

const skills = {
  shopify: [
    "Shopify Polaris",
    "Liquid",
    "Shopify CLI",
    "Shopify App Development",
    "Embedded Apps",
    "Shopify Theme Development",
  ],
  frontend: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Vite",
    "Framer Motion",
  ],
  backend: ["Node.js", "MongoDB", "Appwrite", "Supabase", "Python"],
  tools: [
    "GitHub",
    "Postman",
    "VS Code",
    "Cursor",
    "Vercel",
    "Clerk",
    "Gemini AI",
    "Figma",
    "Canva",
  ],
};

const experiences = [
  {
    role: "Frontend Developer",
    company: "EcomZenith LLP",
    companyUrl: "https://ecomzenith.com/",
    duration: "Aug 2025 – Present",
    points: [
      "Developed embedded Shopify applications using React.js and Shopify Polaris, following Shopify's design system and UX guidelines.",
      "Built and maintained the complete frontend of SEOLister, a SaaS platform, using Next.js, React.js, and modern frontend technologies.",
      "Designed responsive interfaces for dashboards, product listing management, and AI-powered SEO optimization features.",
      "Created reusable Polaris components and scalable UI architectures for Shopify applications.",
      "Customized Shopify app interfaces to improve merchant workflows and usability.",
      "Optimized application performance through efficient component rendering, responsive design, and frontend best practices.",
    ],
  },
  {
    role: "Web Developer",
    company: "DigiCoders Technologies",
    companyUrl: "https://thedigicoders.com/",
    duration: "Mar 2025 – Sep 2025",
    points: [
      "Built intuitive, user-friendly frontend interfaces.",
      "Developed responsive UI components for seamless experiences across devices and browsers.",
      "Collaborated with design teams to translate UI/UX designs into functional web interfaces.",
      "Built and maintained web application frontends with a focus on usability and performance.",
    ],
  },
  {
    role: "Python Summer Training",
    company: "SV Infotech",
    companyUrl: "https://www.svinfotech.co.in/",
    duration: "Aug 2024 – Sep 2024",
    points: [
      "Completed hands-on training in Python programming fundamentals.",
      "Built basic applications focused on logic building and problem-solving.",
      "Gained exposure to real-world development practices and debugging techniques.",
    ],
  },
];

const projects = [
  {
    name: "Munch Menu",
    tech: ["Next.js", "React.js", "Tailwind CSS", "Supabase", "Cloudflare AI"],
    description:
      "Restaurant SaaS platform for QR-based ordering and digital menus, with dashboards for menu management, order tracking, and kitchen operations. Includes AI-powered menu creation that extracts and organizes menu items from images.",
    live: "https://munchmenu.local11.online/",
    code: "#",
  },
  {
    name: "HostelCart India",
    tech: ["React.js", "Appwrite", "Tailwind CSS", "Google OAuth"],
    description:
      "Student-focused marketplace for buying and selling second-hand items within a local city, with Google OAuth authentication and Appwrite for database, auth, and real-time backend services.",
    live: "https://hostelcartindia.live",
    code: "#",
  },
  {
    name: "Greenyz Shopify Theme",
    tech: ["Shopify Liquid", "HTML", "CSS", "JavaScript"],
    description:
      "Custom Shopify theme built from scratch with reusable sections and blocks for Theme Editor customization. Includes responsive, mobile-first layouts for homepage, product, collection, cart, and navigation pages.",
    live: "https://sprinto-dev.myshopify.com/",
    code: "1234",
    storePassword: true,
  },
];

const achievements = [
  {
    title:
      "Completed a comprehensive one-year Web Development program with hands-on experience in modern frontend tools.",
  },
  {
    title: "Actively involved in the open-source community through FOSS United Kanpur",
    tooltip:
      "Contributing to events and collaboration initiatives in the local open-source community.",
  },
  {
    title: "Helped organize a national-level tech seminar, coordinating activities and on-ground execution.",
  },
  {
    title: "Participated in FOSS Hack 2025",
    tooltip:
      "Collaborating and building solutions in a fast-paced hackathon environment.",
  },
];

const education = [
  {
    school: "Government Polytechnic Kanpur",
    location: "Kanpur Nagar, Uttar Pradesh",
    detail: "Diploma in Information Technology",
    duration: "2022 – 2025",
  },
  {
    school: "Om Sai Vidya Mandir Inter College",
    location: "Lakhimpur Kheri, Uttar Pradesh",
    detail: "Intermediate (Class XII), Science Stream — 76.6%",
    duration: "2020 – 2022",
  },
];

const socialLinks = [
  { label: "Email", href: "mailto:akhileshverma734@gmail.com" },
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
            <p className="text-sm text-zinc-500">AI Web Developer | Shopify Developer</p>
            <FollowerPointerCard
              title={
                <>
                  {" "}
                  <span> नमस्ते </span>
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
              Frontend Developer experienced in building responsive web applications using{" "}
              <Highlight className="text-black dark:text-white">
                React.js, Next.js, and Tailwind CSS
              </Highlight>
              . Skilled in creating scalable UI architectures, AI-powered SaaS platforms, and
              high-performance user experiences, with additional expertise in Shopify app development
              using Polaris and Shopify theme development using Liquid.
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-4 text-sm text-zinc-500">
            {socialLinks.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-zinc-800">
                {item.label}
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/1L7wIh4lQ-Mck8JwTIM_6p3xa7f7Fczcz/view?usp=sharing"
              target="_blank"
              className="ml-auto px-3 py-1.5 text-sm text-zinc-700 transition hover:border-zinc-500"
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
                  <>
                    {" "}
                    <span className="text-zinc-100">
                      {" "}
                      “Building merchant-first Shopify experiences with Polaris + Liquid 🛍️”
                    </span>
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
                  <>
                    {" "}
                    <span className="text-zinc-100">
                      {" "}
                      “Modern React interfaces optimized for speed, clarity, and scale ⚡”
                    </span>
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
                  <>
                    {" "}
                    <span className="text-zinc-100">
                      {" "}
                      “Reliable APIs and scalable backend foundations for frontend workflows 🚀”
                    </span>
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
                  <>
                    {" "}
                    <span className="text-zinc-100">
                      {" "}
                      “Tooling that helps me ship clean merchant dashboards faster 😎”
                    </span>
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
                    {project.storePassword ? (
                      <span className="text-zinc-500">Store password: {project.code}</span>
                    ) : project.code !== "#" ? (
                      <a href={project.code} className="text-zinc-700 underline-offset-4 hover:underline">
                        Source Code
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </Section>

          <Section id="education" title="Education">
            <div className="space-y-5">
              {education.map((item) => (
                <article key={item.school} className="space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold text-zinc-800">{item.school}</h3>
                    <span className="text-xs text-zinc-500">{item.duration}</span>
                  </div>
                  <p className="text-sm text-zinc-600">{item.detail}</p>
                  <p className="text-xs text-zinc-500">{item.location}</p>
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
                      <span className="bg-red border-b border-dotted border-zinc-400">{item.title}</span>
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
                <a href="mailto:akhileshverma734@gmail.com" className="mt-1 block hover:underline">
                  akhileshverma734@gmail.com
                </a>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-zinc-500">Phone</p>
                <a href="tel:+917348675182" className="mt-1 block hover:underline">
                  +91 7348675182
                </a>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-zinc-500">Portfolio</p>
                <a
                  href="https://akhileshdev.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 block hover:underline"
                >
                  akhileshdev.vercel.app
                </a>
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
