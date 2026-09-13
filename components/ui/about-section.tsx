import Reveal from "@/components/ui/reveal";

const stats = [
  {
    value: "2026",
    label: "Graduation",
  },
  {
    value: "8.45",
    label: "CGPA / 10",
  },
  {
    value: "05",
    label: "Projects",
  },
  {
    value: "01",
    label: "Publication",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/10 px-6 py-28 md:py-36"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-blue-500/[0.035] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <Reveal>
          <div className="mb-20">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300/60">
              About
            </p>

            <div className="mt-5 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <h2 className="max-w-3xl text-5xl font-semibold tracking-[-0.04em] md:text-7xl">
                Building with purpose.
              </h2>

              <p className="max-w-sm text-sm leading-7 text-slate-500">
                Computer Science & Engineering graduate focused on turning
                ideas into practical software.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Main content */}
        <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-[1.4fr_0.6fr]">

          {/* Story */}
          <Reveal>
            <div className="bg-[#080d1a] p-8 md:p-12 lg:p-16">

              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-300/50">
                The approach
              </p>

              <div className="mt-8 max-w-3xl space-y-6 text-base leading-8 text-slate-400 md:text-lg">
                <p>
                  I&apos;m interested in how software works beyond the
                  interface — from application architecture and APIs to
                  machine learning models, cloud infrastructure and security.
                </p>

                <p>
                  My projects have given me hands-on experience across
                  full-stack development, AI/ML, cybersecurity and embedded
                  systems, with a focus on building things that solve
                  practical problems.
                </p>

                <p>
                  I enjoy learning by building, experimenting with new
                  technologies and understanding the systems behind the tools
                  I use.
                </p>
              </div>

            </div>
          </Reveal>

          {/* Stats */}
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 bg-[#080d1a]">

              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="group relative flex min-h-[150px] flex-col justify-between border-b border-white/10 p-7 transition-all duration-500 hover:bg-white/[0.02] md:min-h-[180px] md:p-8"
                >
                  <span className="font-mono text-[9px] tracking-widest text-slate-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <p className="text-3xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-200 md:text-4xl">
                      {stat.value}
                    </p>

                    <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.15em] text-slate-600">
                      {stat.label}
                    </p>
                  </div>

                  <span className="absolute bottom-0 left-0 h-px w-0 bg-cyan-300/50 transition-all duration-500 group-hover:w-full" />
                </div>
              ))}

            </div>
          </Reveal>

        </div>

        {/* Bottom line */}
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-700">
            <span>Computer Science & Engineering</span>

            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/60" />
              Cybersecurity Honors
            </span>
          </div>
        </Reveal>

      </div>
    </section>
  );
}