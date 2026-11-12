"use client";

import React, { useState } from "react";
import Link from "next/link";

interface PreFooterProps {
  title?: string;
  subtitle?: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

export default function PreFooter({
  title = "Thrico is for communities that move.",
  subtitle = "Make your move.",
  primaryCtaText = "Book a Demo",
  primaryCtaLink = "#demo",
  secondaryCtaText = "Get Started Free",
  secondaryCtaLink = "#get-started",
}: PreFooterProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 30,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 30,
    });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative w-full overflow-hidden bg-white pt-24 pb-20 sm:pt-32 sm:pb-28 transition-all select-none"
    >
      {/* Radiant Mesh Gradient Glow at the Back with subtle mouse parallax */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden select-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)`,
        }}
      >
        {/* Soft atmospheric base blur */}
        <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[140%] h-[140%] opacity-90 filter blur-[90px] sm:blur-[120px]">
          {/* Left Pink / Rose Orb */}
          <div className="absolute top-[20%] left-[8%] w-[45vw] h-[45vw] max-w-[620px] max-h-[620px] rounded-full bg-gradient-to-tr from-pink-400 via-rose-300 to-pink-200 mix-blend-multiply opacity-80 animate-pulse duration-1000" />

          {/* Center-Left Warm Peach / Coral Aura */}
          <div className="absolute top-[30%] left-[28%] w-[40vw] h-[40vw] max-w-[540px] max-h-[540px] rounded-full bg-gradient-to-br from-orange-200 via-rose-200 to-amber-100 mix-blend-multiply opacity-75" />

          {/* Center-Right Purple / Lavender Beam */}
          <div className="absolute top-[15%] right-[22%] w-[48vw] h-[48vw] max-w-[680px] max-h-[680px] rounded-full bg-gradient-to-bl from-purple-400 via-indigo-300 to-violet-300 mix-blend-multiply opacity-85" />

          {/* Right Vibrant Violet / Indigo Sphere */}
          <div className="absolute top-[25%] right-[5%] w-[42vw] h-[42vw] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-tl from-indigo-500 via-violet-400 to-fuchsia-300 mix-blend-multiply opacity-80" />
        </div>

        {/* Ambient radial highlight */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.75)_0%,rgba(255,255,255,0.2)_60%,transparent_100%)] pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-[#1a1a1e] leading-[1.15] max-w-3xl">
          {title}
          <br />
          <span className="text-[#1a1a1e]">{subtitle}</span>
        </h2>

        {/* Action Buttons with Micro-Interactions */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3.5">
          <Link
            href={primaryCtaLink}
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold bg-[#1a1a1e] text-white hover:bg-black transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg shadow-black/15 active:translate-y-0 active:scale-95 cursor-pointer"
          >
            <span>{primaryCtaText}</span>
            <svg
              className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          <Link
            href={secondaryCtaLink}
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold bg-white/90 hover:bg-white text-[#1a1a1e] border border-zinc-300 hover:border-zinc-400 backdrop-blur-xs transition-all duration-200 transform hover:-translate-y-0.5 shadow-xs active:translate-y-0 active:scale-95 cursor-pointer"
          >
            <span>{secondaryCtaText}</span>
            <svg
              className="w-3.5 h-3.5 text-zinc-500 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
