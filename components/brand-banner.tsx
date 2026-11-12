"use client";

import React, { useState } from "react";

interface BrandBannerProps {
  brandName?: string;
  className?: string;
}

export default function BrandBanner({
  brandName = "THRIVING COMMUNITIES",
  className = "",
}: BrandBannerProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 800);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      className={`relative w-full overflow-hidden select-none pt-4 pb-6 sm:pt-6 sm:pb-10 md:pt-8 md:pb-14 flex items-center justify-center cursor-pointer group ${className}`}
    >
      {/* Subtle glowing aura on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-cyan-500/0 filter blur-xl transition-opacity duration-700 pointer-events-none ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Massive, full-width responsive SVG outlined stroke typography with interactive wave */}
      <div
        className={`w-full max-w-[1500px] px-2 sm:px-4 md:px-6 flex items-center justify-center transition-transform duration-500 ${
          isClicked ? "scale-[0.98]" : isHovered ? "scale-[1.01]" : "scale-100"
        }`}
      >
        <svg
          viewBox="0 0 1440 160"
          className="w-full h-auto max-h-[110px] sm:max-h-[160px] md:max-h-[220px] lg:max-h-[280px] overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="brandGradientHover" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>

          <text
            x="50%"
            y="65%"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="none"
            stroke={isHovered ? "url(#brandGradientHover)" : "currentColor"}
            strokeWidth={isHovered ? "3.2" : "2.5"}
            strokeLinejoin="round"
            strokeLinecap="round"
            className="text-zinc-300/90 transition-all duration-500 font-black tracking-tight uppercase"
            style={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              fontSize: "122px",
              letterSpacing: "-0.035em",
              filter: isHovered ? "drop-shadow(0 0 16px rgba(16,185,129,0.25))" : "none",
            }}
          >
            {brandName}
          </text>
        </svg>
      </div>

      {/* Floating subtle hint */}
      <div
        className={`absolute bottom-2 text-[10px] font-mono tracking-widest text-emerald-600 transition-all duration-300 ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        ✦ THRIVING COMMUNITY ENGINE
      </div>
    </div>
  );
}
