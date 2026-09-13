import { ArrowUpRight, FileText } from "lucide-react";
import Reveal from "@/components/ui/reveal";
import { research } from "@/data/research";

export default function ResearchSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 px-6 py-28 md:py-36">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-violet-500/[0.035] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* SECTION LABEL */}
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center border border-violet-300/20 bg-violet-400/[0.04]">
              <FileText className="h-3.5 w-3.5 text-violet-300/70" />
            </span>

            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-violet-300/60">
              Research
            </p>
          </div>
        </Reveal>

        {/* RESEARCH CARD */}
        <Reveal delay={0.1}>
          <article className="group relative mt-12 overflow-hidden border border-white/10 bg-white/[0.015]">

            {/* Top accent */}
            <span className="absolute left-0 top-0 h-px w-0 bg-gradient-to-r from-violet-300/70 via-blue-400/60 to-cyan-300/50 transition-all duration-700 group-hover:w-full" />

            <div className="grid md:grid-cols-[1fr_300px]">

              {/* MAIN */}
              <div className="p-8 md:p-12 lg:p-16">

                {/* META */}
                <div className="flex flex-wrap items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">

                  <span>{research.publication}</span>

                  <span className="h-3 w-px bg-white/10" />

                  <span>{research.year}</span>

                  <span className="h-3 w-px bg-white/10" />

                  <span>Machine Learning</span>

                </div>

                {/* TITLE */}
                <h2 className="mt-7 max-w-4xl text-3xl font-semibold leading-[1.12] tracking-[-0.04em] text-white md:text-5xl">
                  {research.title}
                </h2>

                {/* DESCRIPTION */}
                <p className="mt-7 max-w-3xl text-base leading-8 text-slate-500 md:text-lg">
                  {research.focus}
                </p>

                {/* TECHNOLOGIES */}
                <div className="mt-10 flex flex-wrap gap-2">

                  {research.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="border border-white/[0.08] bg-white/[0.02] px-3 py-2 font-mono text-[9px] uppercase tracking-wider text-slate-500 transition-all duration-300 hover:border-violet-300/25 hover:bg-violet-400/[0.03] hover:text-violet-200"
                    >
                      {technology}
                    </span>
                  ))}

                </div>
              </div>

              {/* SIDE PANEL */}
              <div className="border-t border-white/10 bg-white/[0.015] p-8 md:border-l md:border-t-0 md:p-10">

                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">
                  Publication
                </p>

                <p className="mt-5 text-5xl font-semibold tracking-[-0.04em] text-white">
                  {research.year}
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  Published research
                </p>

                <div className="my-8 h-px bg-white/10" />

                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">
                  Focus
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  Hybrid machine learning and domain reputation analysis for
                  phishing URL detection.
                </p>

                <div className="mt-10">

                  <span className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-violet-300/60 transition-colors duration-300 group-hover:text-violet-300/80">
                    Technical Research

                    <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>

                </div>
              </div>

            </div>
          </article>
        </Reveal>

        {/* FOOTNOTE */}
        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-col justify-between gap-3 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-700 sm:flex-row">
            <span>Research / 01 Publication</span>
            <span>Machine Learning · Cybersecurity</span>
          </div>
        </Reveal>

      </div>
    </section>
  );
}