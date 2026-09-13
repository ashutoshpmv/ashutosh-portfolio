import Navbar from "@/components/ui/navbar";
import ProjectCard from "@/components/ui/project-card";
import Skills from "@/components/ui/skills";
import GithubSection from "@/components/ui/github-section";
import ResearchSection from "@/components/ui/research-section";
import CredentialsSection from "@/components/ui/credentials-section";
import AboutSection from "@/components/ui/about-section";
import ContactSection from "@/components/ui/contact-section";
import Reveal from "@/components/ui/reveal";
import AmbientBackground from "@/components/ui/ambient-background";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080d1a] text-[#f8fafc]">
      <Navbar />

   {/* HERO */}
<section className="relative flex min-h-[calc(100vh-73px)] items-center overflow-hidden px-6 py-24 md:py-32">
  <AmbientBackground />

  {/* subtle frame lines */}
  <div className="pointer-events-none absolute left-6 top-0 h-full w-px bg-white/[0.035] md:left-10" />
  <div className="pointer-events-none absolute right-6 top-0 h-full w-px bg-white/[0.035] md:right-10" />

  <div className="relative z-10 mx-auto w-full max-w-7xl">

    {/* TOP LABEL */}
    <Reveal>
      <div className="mb-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-slate-500 md:text-xs">
        <span className="h-px w-10 bg-cyan-400/50" />
        <span>Software Engineer</span>
        <span className="text-slate-700">/</span>
        <span className="text-slate-600">Portfolio 2026</span>
      </div>
    </Reveal>

    {/* NAME */}
    <Reveal delay={0.08}>
      <h1 className="max-w-[1200px] text-[clamp(4rem,10vw,9.5rem)] font-bold leading-[0.82] tracking-[-0.065em]">
        <span className="block text-white">ASHUTOSH</span>

        <span className="mt-2 block bg-gradient-to-r from-slate-200 via-blue-200 to-violet-300 bg-clip-text text-transparent">
          KUMAR SINGH
        </span>
      </h1>
    </Reveal>

    {/* DESCRIPTION + META */}
    <Reveal delay={0.18}>
      <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-[1.35fr_0.65fr]">

        <div>
          <p className="max-w-2xl text-lg leading-8 text-slate-400 md:text-xl md:leading-9">
            I build practical software and explore the systems behind it.
            Interested in AI/ML, cybersecurity, cloud and full-stack
            development.
          </p>

          {/* ACTIONS */}
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#work"
              className="group relative overflow-hidden border border-cyan-300/30 bg-cyan-400/[0.06] px-6 py-3.5 text-sm font-medium text-cyan-100 transition-all duration-300 hover:border-cyan-300/60 hover:bg-cyan-400/[0.1] hover:shadow-[0_0_35px_rgba(34,211,238,0.08)]"
            >
              <span className="relative z-10">
                Explore Work
                <span className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/10 bg-white/[0.02] px-6 py-3.5 text-sm text-slate-400 transition-all duration-300 hover:border-violet-300/30 hover:bg-white/[0.04] hover:text-white"
            >
              View Resume
            </a>
          </div>
        </div>

        {/* META PANEL */}
        <div className="border-l border-white/10 pl-6 md:flex md:flex-col md:justify-end md:pb-1">
          <div className="space-y-4 font-mono text-[10px] uppercase tracking-[0.18em]">

            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/70 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
              <span className="text-slate-500">2026 CSE Graduate</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400/60" />
              <span className="text-slate-500">Cybersecurity Honors</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400/60" />
              <span className="text-slate-500">Greater Noida / India</span>
            </div>

          </div>
        </div>
      </div>
    </Reveal>

    {/* BOTTOM STATUS */}
    <Reveal delay={0.28}>
      <div className="mt-20 flex flex-col justify-between gap-5 border-t border-white/[0.07] pt-5 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-700 sm:flex-row sm:items-center md:mt-24">

        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400/30" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400/70" />
          </span>

          Available for opportunities
        </div>

        <div className="flex gap-6">
          <span>React</span>
          <span>Node.js</span>
          <span>Python</span>
          <span>AWS</span>
        </div>

      </div>
    </Reveal>

  </div>
</section>

      {/* =====================================================
          SELECTED WORK
      ===================================================== */}
      <section
        id="work"
        className="relative border-t border-white/10 px-6 py-28 md:py-36"
      >
        {/* Ambient section glow */}
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 bg-blue-500/[0.025] blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">

          <Reveal>
            <div className="mb-20">

              <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300/60">
                Selected Work
              </p>

              <div className="mt-5 flex flex-col justify-between gap-8 md:flex-row md:items-end">

                <h2 className="max-w-3xl text-5xl font-semibold tracking-[-0.04em] md:text-7xl">
                  Things I&apos;ve built.
                </h2>

                <p className="max-w-sm text-sm leading-7 text-slate-500">
                  A selection of projects across software engineering,
                  cybersecurity, machine learning and cloud.
                </p>

              </div>

            </div>
          </Reveal>

          {/* Featured projects */}
          <div>
            {projects.slice(0, 3).map((project, index) => (
              <Reveal
                key={project.slug}
                delay={index * 0.1}
              >
                <ProjectCard
                  number={project.number}
                  title={project.title}
                  description={project.description}
                  category={project.category}
                  technologies={project.technologies}
                  metric={project.metric}
                  href={`/projects/${project.slug}`}
                />
              </Reveal>
            ))}
          </div>

          {/* All projects */}
          <Reveal delay={0.2}>
            <div className="mt-12 border-t border-white/10 pt-8">

              <a
                href="/projects"
                className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-slate-500 transition-colors hover:text-cyan-300"
              >
                View all projects

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

            </div>
          </Reveal>

        </div>
      </section>

      {/* =====================================================
          ENGINEERING PROFILE
      ===================================================== */}
      <Skills />

      {/* =====================================================
          GITHUB
      ===================================================== */}
      <GithubSection />

      {/* =====================================================
          RESEARCH
      ===================================================== */}
      <ResearchSection />

      {/* =====================================================
          CREDENTIALS
      ===================================================== */}
      <CredentialsSection />

      {/* =====================================================
          ABOUT
      ===================================================== */}
      <AboutSection />

      {/* =====================================================
          CONTACT
      ===================================================== */}
      <ContactSection />

    </main>
  );
}