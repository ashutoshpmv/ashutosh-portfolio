import Link from "next/link";
import Navbar from "@/components/ui/navbar";
import ProjectCard from "@/components/ui/project-card";
import Reveal from "@/components/ui/reveal";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#080d1a] text-[#f8fafc]">
      <Navbar />

      <section className="relative overflow-hidden px-6 pb-32 pt-20">
        <div className="pointer-events-none absolute right-[-10%] top-[-20%] h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <Link
              href="/"
              className="font-mono text-xs uppercase tracking-widest text-white/40 transition-colors hover:text-cyan-300"
            >
              ← Home
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-24">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300/70">
                Selected Work
              </p>

              <h1 className="mt-5 max-w-5xl text-6xl font-semibold tracking-[-0.05em] md:text-8xl">
                Projects I&apos;ve
                <br />
                <span className="text-slate-500">
                  built &amp; explored.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
                A collection of projects across software engineering,
                AI/ML, cybersecurity, cloud and embedded systems.
              </p>
            </div>
          </Reveal>

          <div className="mt-24">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.05}>
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
        </div>
      </section>
    </main>
  );
}