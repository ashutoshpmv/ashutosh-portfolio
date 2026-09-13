"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Mail } from "lucide-react";import Reveal from "@/components/ui/reveal";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");

    try {
      const response = await fetch(
        "https://formspree.io/f/myeyarrg",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 px-6 py-28 md:py-36"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.035] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* =====================================================
            HEADER
        ===================================================== */}
        <Reveal>
          <div className="mb-20">

            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center border border-cyan-300/20 bg-cyan-400/[0.04]">
                <Mail className="h-3 w-3 text-cyan-300/70" />
              </span>

              <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300/60">
                Contact
              </p>
            </div>

            <h2 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl lg:text-8xl">
              Let&apos;s build
              <br />
              <span className="text-slate-500">
                something useful.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-500 md:text-lg">
              Have an opportunity, project idea or just want to talk
              technology? Send me a message.
            </p>

          </div>
        </Reveal>

        {/* =====================================================
            CONTACT GRID
        ===================================================== */}
        <div className="grid gap-px border border-white/10 bg-white/10 lg:grid-cols-[0.75fr_1.25fr]">

          {/* =================================================
              LEFT SIDE
          ================================================= */}
          <Reveal>
            <div className="h-full bg-[#080d1a] p-8 md:p-10 lg:p-12">

              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">
                Get in touch
              </p>

              {/* Email */}
              <a
                href="mailto:ashutoshpmv@gmail.com"
                className="group mt-6 flex items-center justify-between border-b border-white/10 pb-5 text-sm text-slate-300 transition-colors hover:text-white"
              >
                <span>ashutoshpmv@gmail.com</span>

                <ArrowUpRight className="h-4 w-4 text-slate-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300" />
              </a>

              {/* Social links */}
              <div className="mt-12">

                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">
                  Elsewhere
                </p>

                <div className="mt-5 space-y-3">

                  <SocialLink
                    label="GitHub"
                    href="https://github.com/ashutoshpmv"
                    icon="github"
                  />

                  <SocialLink
                    label="LinkedIn"
                    href="https://www.linkedin.com/in/ashutoshpmv"
                    icon="linkedin"
                  />

                  <SocialLink
                    label="LeetCode"
                    href="https://leetcode.com/u/ashutoshpmv"
                    icon="leetcode"
                  />

                  <SocialLink
                    label="Blog"
                    href="https://ashutoshpmv.blogspot.com"
                    icon="blog"
                  />

                </div>
              </div>

              {/* Availability */}
              <div className="mt-16 border-t border-white/10 pt-6">

                <div className="flex items-center gap-3">

                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400/40" />

                    <span className="relative h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.7)]" />
                  </span>

                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">
                    Open to opportunities
                  </span>

                </div>

              </div>

            </div>
          </Reveal>

          {/* =================================================
              FORM
          ================================================= */}
          <Reveal delay={0.1}>
            <div className="bg-[#0a1221] p-8 md:p-10 lg:p-12">

              <div className="mb-10 flex items-center justify-between">

                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">
                    Message
                  </p>

                  <p className="mt-2 text-sm text-slate-400">
                    I&apos;ll get back to you as soon as possible.
                  </p>
                </div>

                <span className="font-mono text-[9px] text-slate-700">
                  01 / 01
                </span>

              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-7"
              >

                {/* Name + Email */}
                <div className="grid gap-7 md:grid-cols-2">

                  <FormField
                    label="Name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                  />

                  <FormField
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />

                </div>

                {/* Subject */}
                <FormField
                  label="Subject"
                  name="subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                  required
                />

                {/* Message */}
                <div>

                  <label
                    htmlFor="message"
                    className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Tell me a little about it..."
                    className="mt-3 w-full resize-none border-b border-white/10 bg-transparent px-0 py-3 text-sm text-white outline-none transition-colors placeholder:text-slate-700 focus:border-cyan-300/40"
                  />

                </div>

                {/* Success */}
                {status === "success" && (
                  <div className="border border-cyan-300/15 bg-cyan-400/[0.04] px-4 py-3 font-mono text-[10px] uppercase tracking-wider text-cyan-300/70">
                    Message sent successfully.
                  </div>
                )}

                {/* Error */}
                {status === "error" && (
                  <div className="border border-red-300/15 bg-red-400/[0.03] px-4 py-3 font-mono text-[10px] uppercase tracking-wider text-red-300/70">
                    Something went wrong. Please try again or email me directly.
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group inline-flex items-center gap-3 border border-cyan-300/25 bg-cyan-400/[0.05] px-6 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-200 transition-all duration-300 hover:border-cyan-300/50 hover:bg-cyan-400/[0.09] hover:shadow-[0_0_30px_rgba(34,211,238,0.08)] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {status === "sending"
                    ? "Sending..."
                    : "Send Message"}

                  {status !== "sending" && (
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  )}
                </button>

              </form>

            </div>
          </Reveal>

        </div>

        {/* Footer */}
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col justify-between gap-4 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-700 md:flex-row">
            <span>
              Based in India · Working globally
            </span>

            <span>
              © {new Date().getFullYear()} Ashutosh Kumar Singh
            </span>
          </div>
        </Reveal>

      </div>
    </section>
  );
}


/* =========================================================
   FORM FIELD
   ========================================================= */

function FormField({
  label,
  name,
  type,
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>

      <label
        htmlFor={name}
        className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-3 w-full border-b border-white/10 bg-transparent px-0 py-3 text-sm text-white outline-none transition-colors placeholder:text-slate-700 focus:border-cyan-300/40"
      />

    </div>
  );
}


/* =========================================================
   SOCIAL LINK
   ========================================================= */

function SocialLink({
  label,
  href,
  icon,
}: {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "leetcode" | "blog";
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between border-b border-white/[0.06] py-3 text-sm text-slate-500 transition-colors duration-300 hover:text-white"
    >

      <span className="flex items-center gap-3">

        <SocialIcon type={icon} />

        <span>{label}</span>

      </span>

      <ArrowUpRight className="h-3.5 w-3.5 text-slate-700 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300" />

    </a>
  );
}


/* =========================================================
   SOCIAL ICONS
   ========================================================= */

function SocialIcon({
  type,
}: {
  type: "github" | "linkedin" | "leetcode" | "blog";
}) {
  if (type === "github") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 fill-current text-slate-600 transition-colors duration-300 group-hover:text-cyan-300"
        aria-hidden="true"
      >
        <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.2-3.37-1.2-.46-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.58 2.35 1.13 2.92.86.09-.67.35-1.13.63-1.39-2.22-.26-4.55-1.15-4.55-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.2 9.2 0 0 1 12 7.13c.85 0 1.7.12 2.5.36 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.91-2.34 4.78-4.57 5.04.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.49A10.27 10.27 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 fill-current text-slate-600 transition-colors duration-300 group-hover:text-cyan-300"
        aria-hidden="true"
      >
        <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.68H9.34V8.98h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.48v6.28ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.54 20.45H7.1V8.98H3.54v11.47ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0Z" />
      </svg>
    );
  }

  if (type === "leetcode") {
    return (
      <span className="font-mono text-[9px] font-semibold text-slate-600 transition-colors duration-300 group-hover:text-cyan-300">
        LC
      </span>
    );
  }

  return (
    <span className="font-mono text-[9px] font-semibold text-slate-600 transition-colors duration-300 group-hover:text-cyan-300">
      B
    </span>
  );
}