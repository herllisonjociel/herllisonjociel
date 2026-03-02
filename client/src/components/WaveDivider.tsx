/**
 * WaveDivider — organic SVG curve between sections
 * Design: Tropical Tech — Modernismo Solar Brasileiro
 */

interface WaveDividerProps {
  from?: string;
  to?: string;
  className?: string;
}

export default function WaveDivider({ from = "#0A1628", to = "#FAFAF2", className = "" }: WaveDividerProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-[0] -mt-px ${className}`}
      style={{ backgroundColor: from }}
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="relative block w-full h-[50px] sm:h-[70px] md:h-[100px]"
      >
        <path
          d="M0,30 C240,80 480,0 720,50 C960,100 1200,20 1440,40 L1440,100 L0,100 Z"
          fill={to}
        />
      </svg>
    </div>
  );
}
