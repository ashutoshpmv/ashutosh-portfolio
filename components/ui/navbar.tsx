"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Work", href: "/#work" },
  { label: "Skills", href: "/#skills" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.21-1.5 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.08.78 2.18v3.23c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.38 4.28 5.48v6.27ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.54 20.45H7.1V8.99H3.54v11.46ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
    </svg>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#07101f]/75 backdrop-blur-xl">
      <div className="mx-auto flex h-[73px] max-w-7xl items-center justify-between px-6">

        {/* LOGO */}
        <Link
          href="/"
          onClick={closeMenu}
          className="group flex items-center gap-3"
        >
          <img
            src="/aks-logo.png"
            alt="AKS"
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.04] md:h-14"
          />

          <div className="hidden sm:block">
            <p className="text-sm font-medium leading-none text-white">
              Ashutosh Kumar Singh
            </p>

            <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">
              Software Engineer
            </p>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 md:flex">

          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group relative py-2 text-xs uppercase tracking-[0.14em] text-slate-400 transition-colors duration-300 hover:text-white"
            >
              {link.label}

              <span className="absolute bottom-0 left-0 h-px w-0 bg-cyan-300/70 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          <span className="h-4 w-px bg-white/10" />

          {/* GITHUB */}
          <a
            href="https://github.com/ashutoshpmv"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-slate-400 transition-colors duration-300 hover:text-white"
          >
            <GitHubIcon />

            <span>GitHub</span>

            <ArrowUpRight
              className="h-3 w-3 text-white/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300"
            />
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/ashutoshpmv"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-slate-400 transition-colors duration-300 hover:text-white"
          >
            <LinkedInIcon />

            <span>LinkedIn</span>

            <ArrowUpRight
              className="h-3 w-3 text-white/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300"
            />
          </a>

          {/* RESUME */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.14em] text-slate-300 transition-all duration-300 hover:border-cyan-300/30 hover:bg-cyan-400/[0.06] hover:text-white"
          >
            Resume
          </a>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          className="flex h-10 w-10 items-center justify-center border border-white/10 bg-white/[0.03] text-slate-300 transition-all duration-300 hover:border-cyan-300/30 hover:text-white md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* MOBILE NAV */}
      <div
        className={`overflow-hidden border-t border-white/[0.06] bg-[#07101f]/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-[600px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-6 py-5">

          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className="block border-b border-white/[0.06] py-4 font-mono text-xs uppercase tracking-[0.18em] text-slate-400 transition-colors hover:text-cyan-300"
            >
              {link.label}
            </Link>
          ))}

          {/* MOBILE GITHUB */}
          <a
            href="https://github.com/ashutoshpmv"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="flex items-center gap-3 border-b border-white/[0.06] py-4 font-mono text-xs uppercase tracking-[0.18em] text-slate-400 transition-colors hover:text-cyan-300"
          >
            <GitHubIcon />
            GitHub
            <ArrowUpRight className="h-3 w-3" />
          </a>

          {/* MOBILE LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/ashutoshpmv"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="flex items-center gap-3 border-b border-white/[0.06] py-4 font-mono text-xs uppercase tracking-[0.18em] text-slate-400 transition-colors hover:text-cyan-300"
          >
            <LinkedInIcon />
            LinkedIn
            <ArrowUpRight className="h-3 w-3" />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mt-5 inline-flex items-center gap-2 border border-cyan-300/20 bg-cyan-400/[0.05] px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-cyan-200 transition-all hover:border-cyan-300/40 hover:bg-cyan-400/[0.1]"
          >
            View Resume
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </nav>
      </div>
    </header>
  );
}