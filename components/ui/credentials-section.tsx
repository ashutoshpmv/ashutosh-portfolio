import Reveal from "@/components/ui/reveal";
import { education, certifications, achievements } from "@/data/credentials";

export default function CredentialsSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 px-6 py-28 md:py-36">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute right-[-12%] top-1/3 h-96 w-96 rounded-full bg-cyan-500/[0.03] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <Reveal>
          <div className="mb-20">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300/60">
              Credentials
            </p>

            <div className="mt-5 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <h2 className="text-5xl font-semibold tracking-[-0.04em] md:text-7xl">
                Background.
              </h2>

              <p className="max-w-sm text-sm leading-7 text-slate-500">
                Education, certifications and milestones that have shaped my
                engineering journey.
              </p>
            </div>
          </div>
        </Reveal>

        {/* =====================================================
            EDUCATION
        ===================================================== */}
        <Reveal>
          <div className="mb-6 flex items-center gap-4">
            <span className="font-mono text-[10px] text-slate-700">
              01
            </span>

            <span className="h-px w-8 bg-cyan-300/20" />

            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
              Education
            </span>
          </div>
        </Reveal>

        <div className="border-t border-white/10">
          {education.map((item, index) => (
            <Reveal key={item.degree} delay={index * 0.08}>
              <div className="group relative grid gap-6 border-b border-white/10 py-9 transition-colors duration-500 hover:bg-white/[0.012] md:grid-cols-[180px_1fr_180px] md:items-start md:gap-10">

                {/* Period */}
                <p className="font-mono text-[10px] uppercase tracking-widest text-slate-600 transition-colors duration-300 group-hover:text-cyan-300/50">
                  {item.period}
                </p>

                {/* Education */}
                <div>
                  <h3 className="text-xl font-medium tracking-tight text-slate-200 transition-colors duration-300 group-hover:text-white md:text-2xl">
                    {item.degree}
                  </h3>

                  <p className="mt-2 text-sm text-cyan-300/50">
                    {item.specialization}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-slate-500">
                    {item.institution}
                    {item.university && ` · ${item.university}`}
                  </p>
                </div>

                {/* Result */}
                <div className="md:text-right">
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">
                    Result
                  </p>

                  <p className="mt-2 text-lg font-medium text-slate-300 transition-colors duration-300 group-hover:text-white">
                    {item.result}
                  </p>
                </div>

                {/* Hover line */}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-cyan-300/60 to-violet-400/40 transition-all duration-500 group-hover:w-full" />

              </div>
            </Reveal>
          ))}
        </div>

        {/* =====================================================
            CERTIFICATIONS
        ===================================================== */}
        <div className="mt-24">

          <Reveal>
            <div className="mb-6 flex items-center gap-4">
              <span className="font-mono text-[10px] text-slate-700">
                02
              </span>

              <span className="h-px w-8 bg-cyan-300/20" />

              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                Certifications
              </span>
            </div>
          </Reveal>

          <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">

            {certifications.map((certificate, index) => (
              <Reveal
                key={certificate.title}
                delay={index * 0.05}
              >
                <div className="group relative h-full bg-[#080d1a] p-7 transition-all duration-500 hover:bg-[#0b1426] md:p-9">

                  <div className="flex items-start justify-between gap-6">

                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-cyan-300/50">
                        Certification
                      </p>

                      <h3 className="mt-5 text-lg font-medium leading-7 text-slate-200 transition-colors duration-300 group-hover:text-white">
                        {certificate.title}
                      </h3>

                      <p className="mt-4 text-sm text-slate-600">
                        {certificate.issuer}
                      </p>
                    </div>

                    <span className="font-mono text-[10px] text-slate-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  </div>

                  <span className="absolute bottom-0 left-0 h-px w-0 bg-cyan-300/50 transition-all duration-500 group-hover:w-full" />

                </div>
              </Reveal>
            ))}

          </div>
        </div>

        {/* =====================================================
            ACHIEVEMENTS
        ===================================================== */}
        <div className="mt-24">

          <Reveal>
            <div className="mb-6 flex items-center gap-4">
              <span className="font-mono text-[10px] text-slate-700">
                03
              </span>

              <span className="h-px w-8 bg-cyan-300/20" />

              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                Achievements
              </span>
            </div>
          </Reveal>

          <div className="border-t border-white/10">

            {achievements.map((achievement, index) => (
              <Reveal
                key={achievement.title}
                delay={index * 0.06}
              >
                <div className="group relative flex flex-col justify-between gap-4 border-b border-white/10 py-7 transition-colors duration-500 hover:bg-white/[0.012] md:flex-row md:items-center">

                  <div className="flex items-center gap-5">
                    <span className="font-mono text-[10px] text-slate-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="text-base font-medium text-slate-300 transition-colors duration-300 group-hover:text-white">
                      {achievement.title}
                    </h3>
                  </div>

                  <p className="font-mono text-[9px] uppercase tracking-widest text-slate-600 md:text-right">
                    {achievement.organization}
                  </p>

                  <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-cyan-300/50 to-violet-400/40 transition-all duration-500 group-hover:w-full" />

                </div>
              </Reveal>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}