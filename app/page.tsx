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

const skills = {
  languages: ["JavaScript", "Python", "TypeScript (Beginner)"],
  web: [
    "HTML",
    "CSS",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Next.js (Beginner)",
    "Tailwind CSS",
    "Sass",
  ],
  tools: ["VS Code", "GitHub", "Postman", "Vercel", "Appwrite", "Clerk", "OAuth"],
  design: ["Canva", "Figma", "Framer Motion"],
};

const experiences = [
  {
    role: "React Developer",
    company: "EcomSyncify",
    companyUrl: "https://ecomzenith.com/",
    duration: "Aug 2025 - Present",
    points: ["Building scalable frontend applications", "Working with modern React ecosystem"],
  },
  {
    role: "Jr. Associate Developer",
    company: "DigiCoders Pvt Ltd",
    companyUrl: "https://thedigicoders.com/",
    duration: "May 2025 - Aug 2025",
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
    name: "Ochi 2.0",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Locomotive Scroll"],
    description:
      "A visually rich React project with smooth scrolling, modern animations, and polished interactions.",
    live: "#",
    code: "#",
  },
  {
    name: "Canvas Share",
    tech: ["React", "Node.js", "Express", "Socket.io", "Clerk"],
    description:
      "A real-time collaborative whiteboard where multiple users can draw and chat using room IDs.",
    live: "#",
    code: "#",
  },
  {
    name: "OSSphere",
    tech: ["React", "Firebase"],
    description:
      "An open-source discovery platform with AI-powered recommendations based on user skills and interests.",
    live: "#",
    code: "#",
  },
  {
    name: "TailwindGPT",
    tech: ["React", "Tailwind CSS", "Gemini API"],
    description:
      "AI-powered Tailwind CSS generator that returns ready-to-use className snippets with copy support.",
    live: "#",
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
              <h1 className="mt-1 text-3xl font-semibold tracking-tight text-zinc-800 sm:text-4xl">
                <Cover>Akhilesh Verma</Cover></h1>
            </FollowerPointerCard>
            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-zinc-600">
              Passionate React Developer at EcomSyncify,
              skilled in <Highlight className="text-black dark:text-white">
                MERN STACK
              </Highlight> and focused on building
              dynamic, user-centric web applications that create real impact.
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
              href="/cv.pdf"
              download
              className="ml-auto  px-3 py-1.5 text-sm text-zinc-700 transition hover:border-zinc-500"
            >
              <NoiseBackgroundDemo />
            </a>
          </nav>
        </header>

        <div className="mt-8 space-y-10">
          <Section id="about" title="About">

            <p className="text-[15px] leading-7 text-zinc-600">
              I  my Diploma in Information
              <LinkPreview url="https://gpkanpur.co.in/" className="border-b border-dotted border-zinc-500 text-zinc-700 transition hover:text-zinc-900"> Government Polytechnic Kanpur </LinkPreview> (2022-2025) with First Division Honours. I enjoy continuous learning, experimenting with modern tools, and shipping products that solve meaningful problems.
              (2022-2025) with First Division Honours. I enjoy continuous learning, experimenting with
              modern tools, and shipping products that solve meaningful problems.
            </p>

          </Section>

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
                  <> <span className="text-zinc-100" > “JavaScript fluent, Python solid, TypeScript… still convincing me 😄”</span>
                  </>
                }
              >
              <WobbleCard
                containerClassName="h-full bg-red-900/90 border border-zinc-800"
                className="px-5 py-8 sm:px-6 sm:py-10"
              >
                <div>
                  <h3 className="mb-3 text-sm font-semibold text-zinc-100">Languages</h3>
                 
                  <div className="flex flex-wrap gap-2 text-sm text-zinc-200">
                    {skills.languages.map((item) => (
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
                  <> <span className="text-zinc-100" > “I build fast, smooth apps that actually feel good to use ⚡”</span>
                  </>
                }
              >
              <WobbleCard
                containerClassName="h-full bg-yellow-900/90 border border-zinc-800"
                className="px-5 py-8 sm:px-6 sm:py-10"
              >
                <div>
                  <h3 className="mb-3 text-sm font-semibold text-zinc-100">Web & Frameworks</h3>
                  <div className="flex flex-wrap gap-2 text-sm text-zinc-200">
                    {skills.web.map((item) => (
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
                  <> <span className="text-zinc-100" > “My daily toolkit for coding, debugging, and shipping faster 🚀”</span>
                  </>
                }
              >
              <WobbleCard
                containerClassName="h-full bg-green-900/90 border border-zinc-800"
                className="px-5 py-8 sm:px-6 sm:py-10"
              >
                <div>
                  <h3 className="mb-3 text-sm font-semibold text-zinc-100">Tools & Technologies</h3>
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
              <FollowerPointerCard
                title={
                  <> <span className="text-zinc-100" > “Clean UI, smooth vibes, and zero confusion 😎”</span>
                  </>
                }
              >
              <WobbleCard
                containerClassName="h-full bg-blue-700/90 border border-zinc-800"
                className="px-5 py-8 sm:px-6 sm:py-10"
              >
                <div>
                  <h3 className="mb-3 text-sm font-semibold text-zinc-100">Design</h3>
                  <div className="flex flex-wrap gap-2 text-sm text-zinc-200">
                    {skills.design.map((item) => (
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

          <Section id="projects" title="Projects">
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
                    <a href={project.live} className="text-zinc-700 underline-offset-4 hover:underline">
                      Live Demo
                    </a>
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
