import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CommandPalette from "@/components/ui/command-palette";
import PageTransition from "@/components/ui/page-transition";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ashutosh-portfolio.vercel.app"),

  title: {
    default: "Ashutosh Kumar Singh — Software Engineer",
    template: "%s — Ashutosh Kumar Singh",
  },

  description:
    "Portfolio of Ashutosh Kumar Singh — software engineering, AI/ML, cybersecurity and cloud projects.",

  keywords: [
    "Ashutosh Kumar Singh",
    "Software Engineer",
    "Full Stack Developer",
    "AI/ML",
    "Cybersecurity",
    "Cloud",
    "React",
    "Next.js",
    "Python",
  ],

  authors: [
    {
      name: "Ashutosh Kumar Singh",
    },
  ],

  creator: "Ashutosh Kumar Singh",

  openGraph: {
    title: "Ashutosh Kumar Singh — Software Engineer",
    description:
      "Software engineering, AI/ML, cybersecurity and cloud projects.",
    type: "website",
    locale: "en_US",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
     <body className="min-h-full flex flex-col">
  <PageTransition>
    {children}
  </PageTransition>

  <CommandPalette />
</body>
    </html>
  );
}