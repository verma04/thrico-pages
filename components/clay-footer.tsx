"use client";

import React, { useState } from "react";
import Link from "next/link";
import BrandBanner from "./brand-banner";

// Partner Badge 1: IIT Mandi Catalyst with Micro-Interactions
function IITMandiCatalystBadge() {
  const [copied, setCopied] = useState(false);

  return (
    <div
      onClick={() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="group relative flex items-center gap-2 px-3.5 py-2 rounded-xl border border-zinc-200/90 bg-white hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
      title="Incubated at IIT Mandi Catalyst"
    >
      <svg
        className="w-9 h-6 shrink-0 transition-transform duration-300 group-hover:scale-110"
        viewBox="0 0 54 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 28L16 11C17.5 9 19.5 9 21 11L27 19L33 7C34.5 5 36.5 5 38 7L49 28"
          stroke="#16a34a"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-colors group-hover:stroke-emerald-600"
        />
        <circle cx="44" cy="9" r="5" fill="#ea580c" className="transition-transform duration-300 group-hover:scale-125" />
      </svg>

      <div className="flex flex-col text-left leading-tight">
        <span className="text-[7.5px] font-semibold text-emerald-800 tracking-wider uppercase group-hover:text-emerald-600 transition-colors">
          IIT Mandi
        </span>
        <span className="text-[11px] font-black tracking-tight text-zinc-900 font-mono group-hover:text-emerald-950 transition-colors">
          CATALYST
        </span>
        <span className="text-[6.5px] font-medium text-zinc-500 tracking-tight">
          A Technology Business Incubator
        </span>
      </div>

      {copied && (
        <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] bg-emerald-900 text-white font-mono shadow-sm">
          Incubator Partner ✓
        </span>
      )}
    </div>
  );
}

// Partner Badge 2: NVIDIA Inception Program with Micro-Interactions
function NvidiaInceptionBadge() {
  const [copied, setCopied] = useState(false);

  return (
    <div
      onClick={() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="group relative flex items-center gap-2 px-3.5 py-2 rounded-xl border border-zinc-200/90 bg-white hover:border-[#76b900] hover:shadow-md hover:shadow-[#76b900]/15 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
      title="Member of NVIDIA Inception Program"
    >
      <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#76b900]/10 p-0.5 shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#76b900]/20">
        <svg
          className="w-6 h-6 text-[#76b900]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M11.77 4.23c-4.43 0-8.03 3.52-8.03 7.85 0 2.22.94 4.22 2.45 5.64-.17-.79-.24-1.63-.16-2.5.42-4.14 3.73-7.39 7.89-7.75 1.54-.13 3.01.24 4.26.98-.9-2.52-3.32-4.22-6.41-4.22zm-.1 3.54c-2.45 0-4.46 1.95-4.57 4.38-.11 2.37 1.63 4.41 3.99 4.67 1.52.17 2.97-.47 3.86-1.61.12-.15.22-.31.31-.48-.68-.81-1.7-1.33-2.85-1.33-1.46 0-2.73.86-3.31 2.1-.06-.3-.09-.61-.07-.94.13-2.1 1.83-3.74 3.93-3.74 1.25 0 2.36.58 3.08 1.48.53-.88.8-1.92.73-3.03-.43-.91-1.28-1.5-2.29-1.5-1.4 0-2.61.9-2.93 2.19-.05.19-.07.39-.07.59 0 .42.11.81.3 1.16-.62.24-1.22.6-1.74 1.07-.15-.46-.22-.95-.2-1.47.16-2.56 2.29-4.56 4.88-4.56zM20.25 12.08c0 4.33-3.6 7.85-8.03 7.85-2.02 0-3.87-.74-5.3-1.97.23.14.47.26.72.36 3.84 1.59 8.25-.26 9.84-4.1 1.04-2.51.6-5.32-.97-7.36 2.25 1.15 3.74 3.52 3.74 5.22z" />
        </svg>
      </div>

      <div className="flex flex-col text-left leading-tight">
        <span className="text-[10px] font-black text-zinc-900 tracking-tight uppercase group-hover:text-[#76b900] transition-colors">
          NVIDIA
        </span>
        <span className="text-[7.5px] font-semibold text-zinc-600 tracking-wider">
          Inception Program
        </span>
      </div>

      {copied && (
        <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] bg-[#76b900] text-black font-mono font-bold shadow-sm">
          AI Accelerator ✓
        </span>
      )}
    </div>
  );
}

// Interactive Link Item with animated arrow and hover slide
function InteractiveFooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="group flex items-center gap-1.5 text-zinc-600 hover:text-zinc-950 transition-all duration-200 py-0.5"
      >
        <span className="transition-transform duration-200 group-hover:translate-x-1">
          {children}
        </span>
        <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-emerald-600 text-xs font-bold">
          →
        </span>
      </Link>
    </li>
  );
}

interface ClayFooterProps {
  showPreFooter?: boolean;
  preFooterTitle?: string;
  preFooterSubtitle?: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  brandBottomName?: string;
}

export default function ClayFooter({
  showPreFooter = true,
  preFooterTitle = "Thrico is for teams that move.",
  preFooterSubtitle = "Make your move.",
  primaryCtaText = "Book a Demo",
  primaryCtaLink = "#demo",
  secondaryCtaText = "Get Started Free",
  secondaryCtaLink = "#get-started",
  brandBottomName = "THRIVING COMMUNITIES",
}: ClayFooterProps) {
  return (
    <div className="relative w-full overflow-hidden bg-white selection:bg-emerald-500 selection:text-white">
      {/* 
        Full Bottom-to-Top Continuous Radiant Mesh Gradient 
        Flows behind both the Pre-Footer and the Inset Footer Card
      */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Deep ambient background gradient base */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#fdf2f8] via-[#faf5ff] to-white" />

        {/* Vibrant Mesh Gradient Clouds Blooming from Bottom to Top */}
        <div className="absolute inset-0 filter blur-[90px] sm:blur-[130px] opacity-90">
          {/* Bottom-Left Rose / Pink Orb */}
          <div className="absolute bottom-[5%] left-[0%] w-[55vw] h-[55vw] max-w-[750px] max-h-[750px] rounded-full bg-gradient-to-tr from-pink-400 via-rose-300 to-pink-200 mix-blend-multiply opacity-85" />

          {/* Center-Bottom Warm Peach / Champagne Glow */}
          <div className="absolute bottom-[15%] left-[25%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full bg-gradient-to-tr from-orange-200 via-rose-200 to-amber-100 mix-blend-multiply opacity-75" />

          {/* Center-Top Radiant Lilac / Lavender Wave */}
          <div className="absolute top-[20%] right-[20%] w-[55vw] h-[55vw] max-w-[750px] max-h-[750px] rounded-full bg-gradient-to-bl from-purple-400 via-violet-300 to-indigo-200 mix-blend-multiply opacity-80" />

          {/* Right Electric Violet / Indigo Sphere */}
          <div className="absolute bottom-[10%] right-[0%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full bg-gradient-to-tl from-indigo-500 via-purple-400 to-fuchsia-300 mix-blend-multiply opacity-85" />
        </div>

        {/* Soft top fade to blend seamlessly into pure white page content */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white via-white/80 to-transparent" />
      </div>

      {/* Pre-Footer Section (if enabled) */}
      {showPreFooter && (
        <section className="relative z-10 pt-24 pb-16 sm:pt-32 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-[#1a1a1e] leading-[1.15] max-w-3xl">
            {preFooterTitle}
            <br />
            <span>{preFooterSubtitle}</span>
          </h2>

          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3.5">
            <Link
              href={primaryCtaLink}
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold bg-[#1a1a1e] text-white hover:bg-black transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg shadow-black/15 active:translate-y-0 active:scale-95"
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
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold bg-white/90 hover:bg-white text-[#1a1a1e] border border-zinc-300 hover:border-zinc-400 backdrop-blur-xs transition-all duration-200 transform hover:-translate-y-0.5 shadow-xs active:translate-y-0 active:scale-95"
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
        </section>
      )}

      {/* Clay-style Inset Floating Card */}
      <footer className="relative z-10 w-full max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-10 pb-4">
        <div className="bg-white rounded-[32px] sm:rounded-[44px] md:rounded-[52px] shadow-[0_-16px_48px_rgba(0,0,0,0.06),0_16px_48px_rgba(0,0,0,0.04)] border border-zinc-200/80 pt-12 sm:pt-16 pb-8 px-6 sm:px-10 md:px-14 lg:px-16 transition-colors duration-300">
          
          {/* Main Footer Links Grid (5 Columns matching user design) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-10 gap-x-6 sm:gap-x-8 lg:gap-x-12 pb-12 sm:pb-16 text-[13.5px]">
            
            {/* Column 1: COMPANY & DOWNLOAD */}
            <div className="flex flex-col space-y-8">
              <div>
                <h4 className="text-[11px] font-bold tracking-widest text-zinc-900 uppercase mb-4 flex items-center gap-1.5">
                  <span>COMPANY</span>
                </h4>
                <ul className="space-y-2.5 font-normal text-zinc-600">
                  <InteractiveFooterLink href="#about">About Us</InteractiveFooterLink>
                  <InteractiveFooterLink href="#partners">Partners</InteractiveFooterLink>
                  <InteractiveFooterLink href="#pricing">Pricing</InteractiveFooterLink>
                  <InteractiveFooterLink href="#careers">Careers</InteractiveFooterLink>
                  <InteractiveFooterLink href="#events">Events</InteractiveFooterLink>
                </ul>
              </div>

              <div>
                <h4 className="text-[11px] font-bold tracking-widest text-zinc-900 uppercase mb-4">
                  DOWNLOAD
                </h4>
                <ul className="space-y-2.5 font-normal text-zinc-600">
                  <InteractiveFooterLink href="#ios">iOS App</InteractiveFooterLink>
                  <InteractiveFooterLink href="#android">Android App</InteractiveFooterLink>
                </ul>
              </div>
            </div>

            {/* Column 2: BUILT FOR */}
            <div>
              <h4 className="text-[11px] font-bold tracking-widest text-zinc-900 uppercase mb-4">
                BUILT FOR
              </h4>
              <ul className="space-y-2.5 font-normal text-zinc-600">
                <InteractiveFooterLink href="#d2c">D2C Startups</InteractiveFooterLink>
                <InteractiveFooterLink href="#enterprise">Enterprise</InteractiveFooterLink>
                <InteractiveFooterLink href="#associations">Associations</InteractiveFooterLink>
                <InteractiveFooterLink href="#academia">Academia</InteractiveFooterLink>
                <InteractiveFooterLink href="#creators">Creators</InteractiveFooterLink>
              </ul>
            </div>

            {/* Column 3: SOLUTIONS */}
            <div>
              <h4 className="text-[11px] font-bold tracking-widest text-zinc-900 uppercase mb-4">
                SOLUTIONS
              </h4>
              <ul className="space-y-2.5 font-normal text-zinc-600">
                <InteractiveFooterLink href="#context">Context</InteractiveFooterLink>
                <InteractiveFooterLink href="#content">Content</InteractiveFooterLink>
                <InteractiveFooterLink href="#conversations">Conversations</InteractiveFooterLink>
                <InteractiveFooterLink href="#collaborations">Collaborations</InteractiveFooterLink>
                <InteractiveFooterLink href="#communities">Communities</InteractiveFooterLink>
                <InteractiveFooterLink href="#commerce">Commerce</InteractiveFooterLink>
                <InteractiveFooterLink href="#coins">Coins</InteractiveFooterLink>
                <InteractiveFooterLink href="#confidentiality">Confidentiality</InteractiveFooterLink>
                <InteractiveFooterLink href="#care-console">Care Console</InteractiveFooterLink>
              </ul>
            </div>

            {/* Column 4: RESOURCES */}
            <div>
              <h4 className="text-[11px] font-bold tracking-widest text-zinc-900 uppercase mb-4">
                RESOURCES
              </h4>
              <ul className="space-y-2.5 font-normal text-zinc-600">
                <InteractiveFooterLink href="#roi-calculator">ROI Calculator</InteractiveFooterLink>
                <InteractiveFooterLink href="#podcast">Podcast</InteractiveFooterLink>
                <InteractiveFooterLink href="#thriving-communities">Thriving Communities</InteractiveFooterLink>
                <InteractiveFooterLink href="#ambassadors">Ambassadors</InteractiveFooterLink>
                <InteractiveFooterLink href="#blog">Blog</InteractiveFooterLink>
                <InteractiveFooterLink href="#faqs">FAQs</InteractiveFooterLink>
              </ul>
            </div>

            {/* Column 5: GAMIFICATION */}
            <div>
              <h4 className="text-[11px] font-bold tracking-widest text-zinc-900 uppercase mb-4">
                GAMIFICATION
              </h4>
              <ul className="space-y-2.5 font-normal text-zinc-600">
                <InteractiveFooterLink href="#engagement-games">Engagement Games</InteractiveFooterLink>
                <InteractiveFooterLink href="#points-coins">Points & Coins</InteractiveFooterLink>
                <InteractiveFooterLink href="#badges-ranks">Badges & Ranks</InteractiveFooterLink>
                <InteractiveFooterLink href="#leaderboard">Leaderboard</InteractiveFooterLink>
                <InteractiveFooterLink href="#refer-earn">Refer & Earn</InteractiveFooterLink>
                <InteractiveFooterLink href="#rewards">Rewards</InteractiveFooterLink>
              </ul>
            </div>

          </div>

          {/* Middle Partner Badges & Social Media Row */}
          <div className="border-t border-zinc-200/80 pt-6 pb-6 flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Left: IIT Mandi Catalyst & NVIDIA Inception Program Badges */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <IITMandiCatalystBadge />
              <NvidiaInceptionBadge />
            </div>

            {/* Right: Social Media Icon Buttons with Tactile Color Shifts */}
            <div className="flex items-center gap-3 text-zinc-700">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-zinc-100 hover:bg-[#0a66c2] hover:text-white transition-all duration-200 transform hover:-translate-y-1 hover:shadow-md hover:shadow-[#0a66c2]/30 active:scale-90"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.99 0 1.79-.8 1.79-1.79a1.8 1.8 0 0 0-1.79-1.8 1.8 1.8 0 0 0-1.79 1.8c0 .99.8 1.79 1.79 1.79m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-zinc-100 hover:bg-[#1877f2] hover:text-white transition-all duration-200 transform hover:-translate-y-1 hover:shadow-md hover:shadow-[#1877f2]/30 active:scale-90"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-zinc-100 hover:bg-gradient-to-tr hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#8134af] hover:text-white transition-all duration-200 transform hover:-translate-y-1 hover:shadow-md hover:shadow-pink-500/30 active:scale-90"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.79-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* X */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (formerly Twitter)"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-zinc-100 hover:bg-black hover:text-white transition-all duration-200 transform hover:-translate-y-1 hover:shadow-md hover:shadow-black/30 active:scale-90"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-zinc-100 hover:bg-[#ff0000] hover:text-white transition-all duration-200 transform hover:-translate-y-1 hover:shadow-md hover:shadow-red-500/30 active:scale-90"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>

          </div>

          {/* Bottom Copyright & Legal Links with Hover Transitions */}
          <div className="border-t border-zinc-200/60 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
            <div>
              <span>© 2026 | Thrico - The Modern Community Management Platform by </span>
              <a
                href="https://pulseplaydigital.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-emerald-700 transition-colors font-medium"
              >
                PulsePlay Digital
              </a>
            </div>

            <div className="flex items-center gap-5 font-medium">
              <Link href="#privacy-policy" className="hover:text-zinc-950 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#terms-of-use" className="hover:text-zinc-950 transition-colors">
                Terms of Use
              </Link>
              <Link href="#cookies-policy" className="hover:text-zinc-950 transition-colors">
                Cookies Policy
              </Link>
            </div>
          </div>

        </div>
      </footer>

      {/* Outlined THRIVING COMMUNITIES typography with Interactive Neon Stroke */}
      <BrandBanner brandName={brandBottomName} />
    </div>
  );
}
