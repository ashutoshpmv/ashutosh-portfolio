import Reveal from "@/components/ui/reveal";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-white/10 px-6 py-28 md:py-36"
    >
      {/* Ambient accents */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/[0.035] blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-500/[0.035] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* HEADER */}
        <Reveal>
          <div className="mb-20">

            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-cyan-300/50" />

              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-300/60">
                Engineering Profile
              </p>
            </div>

            <div className="mt-5 flex flex-col justify-between gap-8 md:flex-row md:items-end">

              <h2 className="max-w-3xl text-5xl font-semibold tracking-[-0.045em] md:text-7xl">
                Tools I work with.
              </h2>

              <p className="max-w-sm text-sm leading-7 text-slate-500">
                A practical stack spanning software development, AI/ML,
                cybersecurity, cloud and core computer science.
              </p>

            </div>
          </div>
        </Reveal>

        {/* SKILL MATRIX */}
        <div className="border-t border-white/10">

          {skillGroups.map((group, index) => (
            <Reveal
              key={group.title}
              delay={index * 0.04}
            >
              <div className="group relative grid gap-8 border-b border-white/10 py-9 transition-all duration-500 md:grid-cols-[260px_1fr] md:gap-16 md:py-11">

                {/* Hover indicator */}
                <span className="absolute left-0 top-0 h-px w-0 bg-cyan-300/50 transition-all duration-500 group-hover:w-16" />

                {/* CATEGORY */}
                <div className="flex items-start gap-4">

                  <span className="font-mono text-[9px] tracking-widest text-slate-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400 transition-colors duration-300 group-hover:text-cyan-300/80">
                      {group.title}
                    </p>

                    <span className="mt-4 block h-px w-7 bg-white/10 transition-all duration-500 group-hover:w-12 group-hover:bg-cyan-300/30" />
                  </div>

                </div>

                {/* SKILLS */}
                <div className="flex flex-wrap gap-2.5">

                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="border border-white/[0.08] bg-white/[0.015] px-4 py-2.5 font-mono text-[10px] uppercase tracking-wider text-slate-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/25 hover:bg-cyan-400/[0.035] hover:text-cyan-200"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>
            </Reveal>
          ))}

        </div>

        {/* FOOTER */}
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col justify-between gap-4 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-700 sm:flex-row">

            <span>
              Technical Stack / {String(skillGroups.length).padStart(2, "0")} Categories
            </span>

            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/60" />
              Continuously learning
            </span>

          </div>
        </Reveal>

      </div>
    </section>
  );
}