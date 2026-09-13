import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/ui/navbar";
import { projects } from "@/data/projects";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  const projectIndex = projects.findIndex(
    (item) => item.slug === slug
  );

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];

  const nextProject =
    projects[(projectIndex + 1) % projects.length];

  return (
    <main className="min-h-screen bg-[#080d1a] text-[#f8fafc]">
      <Navbar />

      {/* PROJECT HERO */}
      <section className="relative overflow-hidden border-b border-white/10 px-6 pb-24 pt-12 md:pb-28 md:pt-16">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute right-[-10%] top-[-25%] h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[140px]" />

        <div className="pointer-events-none absolute bottom-[-20%] left-[45%] h-[350px] w-[350px] rounded-full bg-blue-500/[0.05] blur-[120px]" />

        {/* Subtle grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />

        <div className="relative mx-auto max-w-7xl">

          {/* BREADCRUMBS */}
          <div className="flex items-center gap-5">
            <Link
              href="/"
              className="font-mono text-xs uppercase tracking-widest text-slate-500 transition-colors hover:text-cyan-300"
            >
              ← Home
            </Link>

            <span className="text-white/10">/</span>

            <Link
              href="/projects"
              className="font-mono text-xs uppercase tracking-widest text-slate-500 transition-colors hover:text-cyan-300"
            >
              All Projects
            </Link>
          </div>

          {/* MAIN HERO */}
          <div className="mt-20 grid gap-14 md:mt-28 md:grid-cols-[1fr_280px]">

            {/* TITLE */}
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300/70">
                Project / {project.number}
              </p>

              <h1 className="mt-6 max-w-5xl text-5xl font-bold leading-[0.92] tracking-[-0.045em] md:text-7xl lg:text-8xl">
                {project.title}
              </h1>

              <p className="mt-8 max-w-3xl text-base leading-7 text-slate-400 md:text-lg md:leading-8">
                {project.description}
              </p>
            </div>

            {/* PROJECT META */}
            <div className="border-l border-white/10 pl-6 md:pl-8">

              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                Category
              </p>

              <p className="mt-4 text-sm leading-6 text-slate-300">
                {project.category}
              </p>

              <div className="my-8 h-px bg-white/10" />

              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                Key Result
              </p>

              <p className="mt-4 text-3xl font-semibold text-white">
                {project.metric}
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* PROJECT DETAILS */}
      {project.details && (
        <>
          {/* OVERVIEW */}
          <section className="border-b border-white/10 px-6 py-24 md:py-28">
            <div className="mx-auto max-w-7xl">

              <SectionHeader
                number="01"
                label="Overview"
              />

              <div className="ml-auto max-w-3xl">
                <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                  The project
                </h2>

                <p className="mt-8 text-base leading-8 text-slate-400 md:text-lg">
                  {project.details.overview}
                </p>
              </div>

            </div>
          </section>

          {/* ARCHITECTURE */}
          <section className="border-b border-white/10 px-6 py-24 md:py-28">
            <div className="mx-auto max-w-7xl">

              <SectionHeader
                number="02"
                label="Architecture"
              />

              <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
                System architecture
              </h2>

              <div className="mt-14 flex flex-wrap items-center gap-3">

                {project.details.architecture.map(
                  (item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <div className="border border-white/10 bg-white/[0.02] px-5 py-4 transition-colors duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.02]">
                        <p className="font-mono text-xs text-slate-300">
                          {item}
                        </p>
                      </div>

                      {index <
                        project.details!.architecture.length - 1 && (
                        <span className="text-cyan-400/30">
                          →
                        </span>
                      )}
                    </div>
                  )
                )}

              </div>
            </div>
          </section>

          {/* ENGINEERING DETAILS */}
          <section className="border-b border-white/10 px-6 py-24 md:py-28">
            <div className="mx-auto max-w-7xl">

              <SectionHeader
                number="03"
                label={
                  project.slug === "ocular-disease"
                    ? "Model Evaluation"
                    : "Engineering Details"
                }
              />

              <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
                {project.slug === "ocular-disease"
                  ? "Model performance"
                  : "Technical details"}
              </h2>

              <div className="mt-14 grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">

                {project.details.security.map((item) => (
                  <div
                    key={item.title}
                    className="bg-[#0b1220] p-8 transition-colors duration-300 hover:bg-[#101a2c]"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-widest text-cyan-300/50">
                      {item.label}
                    </p>

                    <h3 className="mt-5 text-2xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                ))}

              </div>
            </div>
          </section>

          {/* METRICS */}
          {project.details.metrics && (
            <section className="border-b border-white/10 px-6 py-24 md:py-28">
              <div className="mx-auto max-w-7xl">

                <SectionHeader
                  number="04"
                  label="Results"
                />

                <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
                  Measured performance.
                </h2>

                <div className="mt-14 grid grid-cols-2 gap-px border border-white/10 bg-white/10 md:grid-cols-3">

                  {project.details.metrics.map(
                    (metric) => (
                      <div
                        key={metric.label}
                        className="bg-[#0b1220] p-7 transition-colors duration-300 hover:bg-[#101a2c] md:p-8"
                      >
                        <p className="text-4xl font-semibold tracking-tight md:text-5xl">
                          {metric.value}
                        </p>

                        <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-slate-500">
                          {metric.label}
                        </p>
                      </div>
                    )
                  )}

                </div>
              </div>
            </section>
          )}

          {/* TECHNOLOGY */}
          <section className="border-b border-white/10 px-6 py-24 md:py-28">
            <div className="mx-auto max-w-7xl">

              <SectionHeader
                number={project.details.metrics ? "05" : "04"}
                label="Technology"
              />

              <div className="mt-12 flex flex-wrap gap-3">

                {project.technologies.map(
                  (technology) => (
                    <span
                      key={technology}
                      className="border border-white/10 bg-white/[0.015] px-5 py-3 font-mono text-xs uppercase tracking-wider text-slate-400 transition-all duration-300 hover:border-cyan-400/30 hover:text-cyan-200"
                    >
                      {technology}
                    </span>
                  )
                )}

              </div>
            </div>
          </section>
        </>
      )}

      {/* NEXT PROJECT */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">

          <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
            Next Project
          </p>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="group mt-8 block border-t border-white/10 pt-8"
          >
            <div className="flex items-end justify-between gap-6">

              <div>
                <span className="font-mono text-xs text-slate-600">
                  {nextProject.number}
                </span>

                <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight transition-transform duration-500 group-hover:translate-x-2 md:text-6xl">
                  {nextProject.title}
                </h2>
              </div>

              <span className="shrink-0 text-2xl text-cyan-300/40 transition-all duration-300 group-hover:translate-x-2 group-hover:text-cyan-300 md:text-3xl">
                →
              </span>

            </div>
          </Link>

        </div>
      </section>
    </main>
  );
}

function SectionHeader({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="mb-12 flex items-center gap-5">
      <span className="font-mono text-xs text-slate-600">
        {number}
      </span>

      <span className="h-px w-10 bg-cyan-400/20" />

      <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
        {label}
      </span>
    </div>
  );
}