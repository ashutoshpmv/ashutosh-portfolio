"use client";

import { useEffect, useState } from "react";
import { Search, ArrowUpRight } from "lucide-react";

const commands = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Skills",
    href: "/#skills",
  },
  {
    label: "About",
    href: "/#about",
  },
  {
    label: "Contact",
    href: "/#contact",
  },
  {
    label: "GitHub",
    href: "https://github.com/ashutoshpmv",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ashutoshpmv",
    external: true,
  },
  {
    label: "Resume",
    href: "/resume.pdf",
    external: true,
  },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((current) => !current);
      }

      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setQuery("");
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const filteredCommands = commands.filter((command) =>
    command.label.toLowerCase().includes(query.toLowerCase())
  );

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 hidden items-center gap-2 border border-white/10 bg-[#0a0a0a]/90 px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-white/30 backdrop-blur-md transition-colors hover:border-white/30 hover:text-white md:flex"
        aria-label="Open command palette"
      >
        <span>⌘</span>
        <span>K</span>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[15vh]">
      {/* BACKDROP */}
      <button
        type="button"
        aria-label="Close command palette"
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      />

      {/* PALETTE */}
      <div className="relative w-full max-w-xl overflow-hidden border border-white/15 bg-[#0d0d0d] shadow-2xl">

        {/* SEARCH */}
        <div className="flex items-center gap-3 border-b border-white/10 px-5">
          <Search className="h-4 w-4 shrink-0 text-white/30" />

          <input
            autoFocus
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search..."
            className="h-14 w-full bg-transparent text-sm text-white outline-none placeholder:text-white/25"
          />

          <kbd className="border border-white/10 px-2 py-1 font-mono text-[9px] text-white/25">
            ESC
          </kbd>
        </div>

        {/* COMMANDS */}
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {filteredCommands.length > 0 ? (
            filteredCommands.map((command) => (
              <a
                key={command.label}
                href={command.href}
                target={command.external ? "_blank" : undefined}
                rel={command.external ? "noopener noreferrer" : undefined}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between px-4 py-3 text-sm text-white/50 transition-colors hover:bg-white/[0.05] hover:text-white"
              >
                <span>{command.label}</span>

                {command.external ? (
                  <ArrowUpRight className="h-4 w-4 text-white/20 transition-colors group-hover:text-white" />
                ) : (
                  <span className="text-white/20 group-hover:text-white">
                    →
                  </span>
                )}
              </a>
            ))
          ) : (
            <div className="px-4 py-8 text-center font-mono text-xs text-white/25">
              No results found.
            </div>
          )}
        </div>

        {/* FOOTER */}
        <div className="flex items-center justify-between border-t border-white/10 px-5 py-3 font-mono text-[9px] uppercase tracking-widest text-white/20">
          <span>Navigation</span>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
}