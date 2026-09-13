export default function AmbientBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Moving ambient lights */}
      <div className="ambient-orb ambient-orb-blue" />
      <div className="ambient-orb ambient-orb-violet" />
      <div className="ambient-orb ambient-orb-cyan" />

      {/* Slowly moving technical grid */}
      <div className="ambient-grid" />

      {/* Subtle horizontal light sweep */}
      <div className="ambient-scan" />
    </div>
  );
}