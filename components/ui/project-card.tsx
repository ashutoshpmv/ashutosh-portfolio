"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ProjectCardProps = {
  number: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  metric: string;
  href: string;
};

export default function ProjectCard({
  number,
  title,
  description,
  category,
  technologies,
  metric,
  href,
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="group relative block overflow-hidden border-t border-white/[0.09] py-10 transition-colors duration-500 hover:border-cyan-300/30 md:py-14"
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute -right-40 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-cyan-400/[0.045] opacity-0 blur-[100px] transition-opacity duration-700 group-hover:opacity-100" />

      {/* Top accent line */}
      <span className="absolute left-0 top-0 h-px w-0 bg-gradient-to-r from-cyan-300/80 via-blue-400/60 to-violet-400/60 transition-all duration-700 group-hover:w-full" />

      <div className="relative grid gap-8 md:grid-cols-[70px_1fr_240px] md:gap-12">

        {/* NUMBER */}
        <div className="flex items-start">
          <span className="font-mono text-[10px] tracking-[0.2em] text-slate-700 transition-colors duration-300 group-hover:text-cyan-300/60">
            {number}
          </span>
        </div>

        {/* MAIN CONTENT */}
        <div>

          {/* CATEGORY + METRIC */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-cyan-300/50 transition-colors duration-300 group-hover:text-cyan-300/70">
              {category}
            </span>

            <span className="h-px w-5 bg-white/10" />

            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-slate-700">
              {metric}
            </span>
          </div>

          {/* TITLE */}
          <h3 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-white transition-all duration-500 group-hover:translate-x-1 md:text-5xl">
            {title}
          </h3>

          {/* DESCRIPTION */}
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 transition-colors duration-500 group-hover:text-slate-400 md:text-base">
            {description}
          </p>

          {/* TECHNOLOGIES */}
          <div className="mt-7 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="border border-white/[0.07] bg-white/[0.015] px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-slate-600 transition-all duration-300 group-hover:border-white/[0.1] group-hover:text-slate-500"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* RESULT */}
        <div className="flex items-end justify-between md:flex-col md:items-end md:justify-between">

          <div className="text-left md:text-right">
            <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-slate-700">
              Result
            </p>

            <p className="mt-2 text-lg font-medium tracking-tight text-slate-300 transition-colors duration-300 group-hover:text-white">
              {metric}
            </p>
          </div>

          {/* ARROW */}
          <div className="flex h-11 w-11 items-center justify-center border border-white/[0.09] bg-white/[0.015] transition-all duration-500 group-hover:border-cyan-300/30 group-hover:bg-cyan-400/[0.05]">
            <ArrowUpRight
              className="h-4 w-4 text-slate-700 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}