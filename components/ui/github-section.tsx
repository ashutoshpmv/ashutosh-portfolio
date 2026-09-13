import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/reveal";
import { getGithubRepos } from "@/lib/github";

export default async function GithubSection() {
  const repos = await getGithubRepos();

  return (
    <section className="relative overflow-hidden border-t border-white/10 px-6 py-28 md:py-36">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -right-40 top-1/4 h-[420px] w-[420px] rounded-full bg-blue-500/[0.035] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* HEADER */}
        <Reveal>
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center border border-cyan-300/20 bg-cyan-400/[0.04] font-mono text-[8px] font-medium tracking-tight text-cyan-300/70">
                  GH
                </span>

                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-300/60">
                  Open Source
                </p>
              </div>

              <h2 className="mt-5 text-5xl font-semibold tracking-[-0.045em] md:text-7xl">
                On GitHub.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500">
                A live look at repositories, experiments and development work.
              </p>
            </div>

            <a
              href="https://github.com/ashutoshpmv"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 self-start border border-white/10 bg-white/[0.02] px-5 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-400 transition-all duration-300 hover:border-cyan-300/30 hover:bg-cyan-400/[0.04] hover:text-white md:self-end"
            >
              View Profile

              <ArrowUpRight className="h-3.5 w-3.5 text-slate-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300" />
            </a>
          </div>
        </Reveal>

        {/* REPOSITORIES */}
        <div className="border-t border-white/10">

          {repos.slice(0, 6).map((repo: any, index: number) => (
            <Reveal
              key={repo.id}
              delay={index * 0.05}
            >
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block border-b border-white/10 py-8 transition-all duration-500 hover:bg-white/[0.015] md:py-9"
              >
                {/* Accent line */}
                <span className="absolute left-0 top-0 h-px w-0 bg-gradient-to-r from-cyan-300/70 via-blue-400/50 to-violet-400/50 transition-all duration-700 group-hover:w-full" />

                <div className="grid gap-6 md:grid-cols-[55px_1fr_190px_42px] md:items-center">

                  {/* INDEX */}
                  <span className="font-mono text-[9px] tracking-[0.2em] text-slate-700 transition-colors duration-300 group-hover:text-cyan-300/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* REPO INFO */}
                  <div>

                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-medium tracking-tight text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">
                        {repo.name}
                      </h3>

                      {repo.fork && (
                        <span className="border border-white/[0.06] px-2 py-0.5 font-mono text-[8px] uppercase tracking-wider text-slate-700">
                          Fork
                        </span>
                      )}
                    </div>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 transition-colors duration-500 group-hover:text-slate-500">
                      {repo.description || "Repository and development work."}
                    </p>

                  </div>

                  {/* REPO META */}
                  <div className="flex items-center gap-5 font-mono text-[9px] uppercase tracking-widest text-slate-600 md:justify-end">

                    {repo.language && (
                      <span className="transition-colors duration-300 group-hover:text-slate-400">
                        {repo.language}
                      </span>
                    )}

                    <span className="transition-colors duration-300 group-hover:text-cyan-300/70">
                      ★ {repo.stargazers_count}
                    </span>

                  </div>

                  {/* ARROW */}
                  <div className="flex h-9 w-9 items-center justify-center border border-white/[0.08] bg-white/[0.015] transition-all duration-500 group-hover:border-cyan-300/30 group-hover:bg-cyan-400/[0.04]">
                    <ArrowUpRight className="h-3.5 w-3.5 text-slate-600 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300" />
                  </div>

                </div>
              </a>
            </Reveal>
          ))}

        </div>

        {/* FOOTER */}
        <Reveal delay={0.25}>
          <div className="mt-8 flex flex-col justify-between gap-4 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-700 sm:flex-row">

            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/60 shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
              Live repository data
            </span>

            <span>
              github.com/ashutoshpmv
            </span>

          </div>
        </Reveal>

      </div>
    </section>
  );
}