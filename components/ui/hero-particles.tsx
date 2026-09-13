"use client";

import { useMemo } from "react";

type Particle = {
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
};

export default function HeroParticles() {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 90 }, (_, index) => ({
      left: (index * 37.17) % 100,
      top: (index * 61.83) % 100,
      size: index % 7 === 0 ? 3 : index % 3 === 0 ? 2 : 1,
      delay: (index % 12) * 0.45,
      duration: 4 + (index % 7) * 1.1,
      opacity: 0.18 + (index % 5) * 0.07,
    }));
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {particles.map((particle, index) => (
        <span
          key={index}
          className="absolute rounded-full bg-cyan-200"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animation: `heroParticleFloat ${particle.duration}s ease-in-out ${particle.delay}s infinite alternate`,
            boxShadow:
              particle.size >= 3
                ? "0 0 10px rgba(103, 232, 249, 0.45)"
                : "0 0 5px rgba(103, 232, 249, 0.25)",
          }}
        />
      ))}
    </div>
  );
}