import React from 'react';

interface VHLogoProps {
  className?: string;
  size?: number;
}

export const VHLogo: React.FC<VHLogoProps> = ({ className = 'w-9 h-9', size }) => {
  const dimensionProps = size ? { width: size, height: size } : {};

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${className}`}
      {...dimensionProps}
      aria-label="VHGLOBALS Logo"
    >
      <defs>
        {/* Deep navy to royal blue for the left V stem */}
        <linearGradient id="vhDarkBlue" x1="20" y1="35" x2="45" y2="70" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#17396c" />
          <stop offset="50%" stopColor="#1e4e8c" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>

        {/* 3D bevel top/outer edge for V */}
        <linearGradient id="vhBevel" x1="22" y1="36" x2="38" y2="68" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#22487e" />
          <stop offset="40%" stopColor="#1d447a" />
          <stop offset="100%" stopColor="#132f58" />
        </linearGradient>

        {/* Dynamic bright cerulean/cyan wave swoop */}
        <linearGradient id="vhSwoop" x1="36" y1="65" x2="78" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0d3b75" />
          <stop offset="25%" stopColor="#1d63b8" />
          <stop offset="60%" stopColor="#2087ce" />
          <stop offset="85%" stopColor="#2596be" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>

        {/* Middle/right stem of V and left part of H */}
        <linearGradient id="vhMidStem" x1="42" y1="36" x2="55" y2="68" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1e58a0" />
          <stop offset="60%" stopColor="#2083ca" />
          <stop offset="100%" stopColor="#2596be" />
        </linearGradient>

        {/* Right stem of H */}
        <linearGradient id="vhRightStem" x1="58" y1="42" x2="72" y2="68" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2083cb" />
          <stop offset="60%" stopColor="#2596be" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>

        {/* Arrowhead gradient */}
        <linearGradient id="vhArrow" x1="64" y1="42" x2="78" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1a6bbd" />
          <stop offset="50%" stopColor="#2088d4" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
      </defs>

      {/* 1. Left stem of "V" */}
      <path
        d="M24 38 L32 38 L40.5 63 L40 67 L36 67 L24 38 Z"
        fill="url(#vhBevel)"
      />
      <path
        d="M27 38 L34 38 L41 61.5 L36.5 67 L27 38 Z"
        fill="url(#vhDarkBlue)"
      />

      {/* 2. Middle junction / Right stem of V */}
      <path
        d="M38 66.5 L46.5 45 L54 38 L48 38 L40 58 L38 66.5 Z"
        fill="url(#vhMidStem)"
      />

      {/* 3. Base & right column of "H" */}
      {/* Left lower stem of H */}
      <path
        d="M48 55 L54 55 L54 67 L48 67 Z"
        fill="url(#vhMidStem)"
      />
      {/* Right stem of H */}
      <path
        d="M64 43.5 L70 43.5 L70 67 L64 67 Z"
        fill="url(#vhRightStem)"
      />
      {/* Horizontal bar of H */}
      <path
        d="M48 54 L68 54 L68 59 L48 59 Z"
        fill="url(#vhRightStem)"
      />

      {/* 4. White accent separator band under the rising swoop */}
      <path
        d="M36 65 C41 55, 52 49, 70 41.5 L69 39.5 C51 47, 40 53, 34.5 63.5 Z"
        fill="#ffffff"
        opacity="0.95"
      />

      {/* 5. Dynamic rising 3D wave swoop connecting V and arrow */}
      <path
        d="M36.5 65.5 C42 56, 52.5 50.5, 68 43 L69.5 40.5 C53 47.5, 43 53.5, 37 63 Z"
        fill="url(#vhSwoop)"
      />
      <path
        d="M37 64 C43 55, 54 48.5, 71.5 39.5 L70.5 36.5 C52 45, 42 51.5, 36 61 Z"
        fill="url(#vhSwoop)"
      />

      {/* 6. Aerodynamic upward-pointing Arrow Head at top right */}
      <path
        d="M65 37 L77.5 31 L73.5 43.5 L70 39.5 Z"
        fill="url(#vhArrow)"
      />
    </svg>
  );
};
