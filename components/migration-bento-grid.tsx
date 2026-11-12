"use client";

import React, { useState, useEffect, useRef } from "react";

export default function MigrationBentoGrid() {
  // Autoplay control (pauses on user hover)
  const [isPaused, setIsPaused] = useState(false);

  // Card 1 State: Memory & Preferences
  const preferences = [
    { label: "Values clarity", tag: "Fast Sync", members: "12,400", time: "< 2 mins" },
    { label: "Deep thread hierarchy", tag: "Full Index", members: "45,000", time: "< 5 mins" },
    { label: "Role & rank preservation", tag: "Gamified", members: "88,200", time: "< 8 mins" },
  ];
  const [activePrefIdx, setActivePrefIdx] = useState(0);

  // Card 2 State: Platform Switcher
  const platforms = [
    { name: "Discord", icon: "💬", color: "#5865F2", count: "84 Channels • 32k Members" },
    { name: "Slack", icon: "💼", color: "#E01E5A", count: "120 Public Channels • 14k Members" },
    { name: "Circle.so", icon: "⭕", color: "#F59E0B", count: "18 Spaces • 9.2k Members" },
    { name: "Discourse", icon: "🗣️", color: "#3B82F6", count: "4,500 Topics • 64k Posts" },
    { name: "WhatsApp", icon: "📱", color: "#25D366", count: "25 Groups • 2,500 Members" },
    { name: "Telegram", icon: "✈️", color: "#229ED9", count: "6 Supergroups • 48k Members" },
  ];
  const [platformIdx, setPlatformIdx] = useState(0);

  // Card 3 State: Multiplayer Roles
  const [activeRoleId, setActiveRoleId] = useState(3);
  const roles = [
    { id: 1, name: "Super Admin", icon: "👑", count: 12 },
    { id: 2, name: "Community Lead", icon: "⭐", count: 48 },
    { id: 3, name: "Ambassador & Creator", icon: "🚀", count: 184 },
    { id: 4, name: "VIP Backer", icon: "💎", count: 1240 },
  ];

  // Card 4 State: Connected Apps & MCP
  const appNodes = [
    { id: "github", label: "GitHub", icon: "🐙", desc: "Sync repos & commits" },
    { id: "gdrive", label: "Drive", icon: "📁", desc: "Sync shared assets" },
    { id: "figma", label: "Figma", icon: "🎨", desc: "Embed design spaces" },
    { id: "hubspot", label: "HubSpot", icon: "📈", desc: "Sync CRM contacts" },
    { id: "stripe", label: "Stripe", icon: "💳", desc: "Paid tiers & subscriptions" },
  ];
  const [activeAppIdx, setActiveAppIdx] = useState(3);
  const [mcpOnline, setMcpOnline] = useState(true);

  // Card 5 State: Ambient Intelligence Auto-Cleaner Loop
  const [cleanStep, setCleanStep] = useState(1);

  // Card 6 State: Deep Search Typewriter Loop
  const searchPhrases = [
    "pricing tier launch",
    "community guidelines update",
    "mcp architecture v2",
    "founder AMA stage",
  ];
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [searchQuery, setSearchQuery] = useState(searchPhrases[0]);

  // =========================================================================
  // AUTOPLAY TIMERS (Run on smooth interval loops when not paused)
  // =========================================================================
  useEffect(() => {
    if (isPaused) return;

    // Card 1: Preferences auto-cycle
    const prefTimer = setInterval(() => {
      setActivePrefIdx((prev) => (prev + 1) % preferences.length);
    }, 3200);

    // Card 2: Platform auto-cycle
    const platformTimer = setInterval(() => {
      setPlatformIdx((prev) => (prev + 1) % platforms.length);
    }, 2800);

    // Card 3: Role auto-cycle
    const roleTimer = setInterval(() => {
      setActiveRoleId((prev) => (prev % roles.length) + 1);
    }, 2400);

    // Card 4: App node auto-cycle
    const appTimer = setInterval(() => {
      setActiveAppIdx((prev) => (prev + 1) % appNodes.length);
    }, 2200);

    // Card 5: Auto-cleaner step loop
    const cleanTimer = setInterval(() => {
      setCleanStep((prev) => (prev >= 3 ? 1 : prev + 1));
    }, 2000);

    // Card 6: Search query typewriter loop
    const searchTimer = setInterval(() => {
      setPhraseIdx((prev) => {
        const next = (prev + 1) % searchPhrases.length;
        setSearchQuery(searchPhrases[next]);
        return next;
      });
    }, 3600);

    return () => {
      clearInterval(prefTimer);
      clearInterval(platformTimer);
      clearInterval(roleTimer);
      clearInterval(appTimer);
      clearInterval(cleanTimer);
      clearInterval(searchTimer);
    };
  }, [isPaused, preferences.length, platforms.length, roles.length, appNodes.length, searchPhrases]);

  // Simulated search results depending on query
  const searchResultsMap: Record<string, Array<{ title: string; source: string; time: string }>> = {
    pricing: [
      { title: "Q3 Pricing Tier Discussion & Founder Feedback", source: "#general-chat", time: "2 hrs ago" },
      { title: "Enterprise SLA Custom Contract Clauses", source: "#contracts", time: "Yesterday" },
    ],
    guidelines: [
      { title: "Community Guidelines 2026 Update & Member Rules", source: "#announcements", time: "1 day ago" },
      { title: "Code of Conduct Enforcement Playbook", source: "#moderation", time: "4 days ago" },
    ],
    mcp: [
      { title: "AMA with Head of Engineering on MCP Architecture", source: "#stage-events", time: "3 days ago" },
      { title: "Custom MCP Server Connector Template", source: "#dev-tools", time: "Last week" },
    ],
    founder: [
      { title: "Live Stage Q&A with PulsePlay Digital Founders", source: "#stage-events", time: "5 hrs ago" },
      { title: "Roadmap 2026 Keynote Recording", source: "#resources", time: "2 days ago" },
    ],
  };

  const getResults = () => {
    const q = searchQuery.toLowerCase();
    if (q.includes("pricing")) return searchResultsMap.pricing;
    if (q.includes("guideline")) return searchResultsMap.guidelines;
    if (q.includes("mcp")) return searchResultsMap.mcp;
    return searchResultsMap.founder;
  };

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full bg-[#050507] text-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden selection:bg-emerald-500 selection:text-white border-t border-zinc-900"
    >
      {/* Ambient background glow blooms */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-b from-purple-900/15 via-pink-900/10 to-transparent filter blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-emerald-950/20 filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 mb-5 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>
              {isPaused ? "Paused on Hover (Interactive)" : "Auto-Playing Live Simulation"}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
            Nothing comes close to Thrico²
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 font-normal max-w-2xl mx-auto">
            We rebuilt community migration and integration engine from the ground up. All micro-interactions autoplay in real time.
          </p>
        </div>

        {/* 6-Card Interactive Bento Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800/60 border border-zinc-800/80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-xs">
          
          {/* ========================================================================= */}
          {/* Card 1: MEMORY & PREFERENCES */}
          {/* ========================================================================= */}
          <div className="bg-[#09090b] p-7 sm:p-9 flex flex-col justify-between min-h-[410px] hover:bg-[#0d0d10] transition-all group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono font-semibold tracking-widest text-zinc-400 uppercase">
                  MEMORY & PREFERENCES
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-800/60 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Auto-Syncing
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Thrico² keeps track of how you like to work, and gets smarter every time your community scales.
              </p>
            </div>

            {/* Interactive Widget 1 (Autoplays Preferences) */}
            <div className="mt-6 flex flex-col items-center">
              <div className="w-full rounded-2xl bg-zinc-900/90 border border-zinc-800 p-4 shadow-xl relative overflow-hidden backdrop-blur-md transition-all duration-500">
                <div className="flex items-center justify-between text-xs text-zinc-400 mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="text-pink-400 text-sm animate-spin">✦</span>
                    <span className="font-mono text-[11px] text-zinc-300">Memory Updated</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-950/60 text-emerald-300 border border-emerald-800/40">
                    {preferences[activePrefIdx].tag}
                  </span>
                </div>

                <div className="text-[10px] font-mono text-zinc-500 tracking-wider uppercase mb-1">
                  USER PREFERENCE:
                </div>
                <div className="text-base font-bold text-white tracking-tight flex items-center justify-between">
                  <span className="transition-all duration-300">{preferences[activePrefIdx].label}</span>
                  <span className="text-xs text-zinc-400 font-mono font-normal">
                    {preferences[activePrefIdx].time}
                  </span>
                </div>

                {/* Ambient glow in card corner */}
                <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-pink-500/15 filter blur-xl pointer-events-none" />
              </div>

              {/* Preference selector pills */}
              <div className="mt-3 flex items-center justify-center gap-1.5 w-full">
                {preferences.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePrefIdx(idx)}
                    className={`text-[10px] font-mono py-1 px-2.5 rounded-full transition-all cursor-pointer ${
                      activePrefIdx === idx
                        ? "bg-zinc-800 text-white border border-zinc-600 shadow-xs scale-105"
                        : "bg-zinc-950/80 text-zinc-500 border border-zinc-800/80 hover:text-zinc-300"
                    }`}
                  >
                    Preset #{idx + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* Card 2: EVERY PLATFORM, UNLIMITED */}
          {/* ========================================================================= */}
          <div className="bg-[#09090b] p-7 sm:p-9 flex flex-col justify-between min-h-[410px] hover:bg-[#0d0d10] transition-all group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono font-semibold tracking-widest text-zinc-400 uppercase">
                  EVERY PLATFORM, UNLIMITED
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-950/80 text-purple-300 border border-purple-800/60 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                  Auto-Carousel
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Discord, Slack, Circle, Discourse, WhatsApp, and more. Complete history and media import.
              </p>
            </div>

            {/* Interactive Widget 2 (Platform Switcher with Autoplay Animation) */}
            <div className="mt-6 flex flex-col items-center justify-center">
              <div className="flex items-center justify-between gap-3 w-full">
                {/* Previous Button */}
                <button
                  onClick={() => setPlatformIdx((prev) => (prev > 0 ? prev - 1 : platforms.length - 1))}
                  className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 flex items-center justify-center transition-all cursor-pointer shrink-0 active:scale-95 shadow-md"
                  aria-label="Previous platform"
                >
                  ◀
                </button>

                {/* Central Stack */}
                <div className="flex flex-col items-center gap-1.5 flex-1 max-w-[200px]">
                  {/* Previous preview */}
                  <div className="text-[11px] text-zinc-600 font-medium truncate transition-all duration-300">
                    {platforms[(platformIdx - 1 + platforms.length) % platforms.length].name}
                  </div>

                  {/* Active Platform Card */}
                  <div className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-purple-950/60 via-pink-950/40 to-indigo-950/60 border border-purple-500/50 shadow-lg shadow-purple-950/40 flex flex-col items-center justify-center gap-1 text-sm font-bold text-white transition-all duration-500 transform hover:scale-[1.02]">
                    <div className="flex items-center gap-2">
                      <span className="text-lg animate-bounce">{platforms[platformIdx].icon}</span>
                      <span className="font-extrabold tracking-tight">{platforms[platformIdx].name}</span>
                    </div>
                    <span className="text-[9.5px] font-mono font-normal text-zinc-400 text-center">
                      {platforms[platformIdx].count}
                    </span>
                  </div>

                  {/* Next preview */}
                  <div className="text-[11px] text-zinc-600 font-medium truncate transition-all duration-300">
                    {platforms[(platformIdx + 1) % platforms.length].name}
                  </div>
                </div>

                {/* Next Button */}
                <button
                  onClick={() => setPlatformIdx((prev) => (prev + 1) % platforms.length)}
                  className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 flex items-center justify-center transition-all cursor-pointer shrink-0 active:scale-95 shadow-md"
                  aria-label="Next platform"
                >
                  ▶
                </button>
              </div>

              {/* Dot Indicators */}
              <div className="flex items-center gap-1 mt-4">
                {platforms.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPlatformIdx(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      platformIdx === i ? "w-5 bg-purple-400" : "w-1.5 bg-zinc-700 hover:bg-zinc-500"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* Card 3: MULTIPLAYER ROLES */}
          {/* ========================================================================= */}
          <div className="bg-[#09090b] p-7 sm:p-9 flex flex-col justify-between min-h-[410px] hover:bg-[#0d0d10] transition-all group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono font-semibold tracking-widest text-zinc-400 uppercase">
                  MULTIPLAYER ROLES
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-800/80 text-zinc-400 border border-zinc-700/50 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Auto-Cycle
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                The more your team uses Thrico², the smarter permission mapping gets across every tier.
              </p>
            </div>

            {/* Interactive Widget 3 (Autoplays Role Active Highlights) */}
            <div className="mt-6 flex flex-col gap-2">
              {roles.map((r) => {
                const isActive = activeRoleId === r.id;

                return (
                  <button
                    key={r.id}
                    onClick={() => setActiveRoleId(r.id)}
                    className={`w-full py-2 px-3 rounded-xl text-xs font-medium flex items-center justify-between transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-zinc-800/90 border border-emerald-500/60 text-white shadow-md scale-[1.02]"
                        : "bg-zinc-900/60 border border-zinc-800 text-zinc-500 hover:text-zinc-400"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{r.icon}</span>
                      <span className="font-semibold">{r.name}</span>
                      <span className="text-[10px] font-mono text-zinc-500">
                        ({r.count})
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className={`text-[10px] font-mono ${isActive ? "text-emerald-300" : "text-zinc-500"}`}>
                        {isActive ? "Mapped" : "Active"}
                      </span>
                      <span
                        className={`w-2.5 h-2.5 rounded-full transition-colors ${
                          isActive ? "bg-emerald-400 animate-ping" : "bg-zinc-700"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ========================================================================= */}
          {/* Card 4: CONNECTED APPS & ANY MCP */}
          {/* ========================================================================= */}
          <div className="bg-[#09090b] p-7 sm:p-9 flex flex-col justify-between min-h-[410px] hover:bg-[#0d0d10] transition-all group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono font-semibold tracking-widest text-zinc-400 uppercase">
                  CONNECTED APPS & ANY MCP
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-800/80 text-zinc-400 border border-zinc-700/50 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Auto-Sweep
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Connect Google Drive, GitHub, Stripe, HubSpot, and custom Model Context Protocol (MCP) servers.
              </p>
            </div>

            {/* Interactive Widget 4 (Autoplays App Node Sweep) */}
            <div className="mt-6 flex flex-col items-center justify-center">
              <div className="relative flex items-center justify-center w-full h-32">
                {/* Central Thrico Hub */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-600 via-teal-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-emerald-500/30 z-10 animate-pulse">
                  <span className="text-white text-xl font-black">T</span>
                </div>

                {/* App Node Buttons sweeping automatically */}
                {appNodes.map((app, idx) => {
                  const angle = (idx / appNodes.length) * Math.PI * 2 - Math.PI / 2;
                  const radius = 56;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  const isSelected = activeAppIdx === idx;

                  return (
                    <button
                      key={app.id}
                      onClick={() => setActiveAppIdx(idx)}
                      className={`absolute w-8 h-8 rounded-xl flex items-center justify-center text-sm transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? "bg-emerald-500/20 border-2 border-emerald-400 text-white shadow-lg shadow-emerald-500/40 scale-125 z-20"
                          : "bg-zinc-800/80 border border-zinc-700 text-zinc-400 hover:text-white hover:scale-105"
                      }`}
                      style={{
                        transform: `translate(${x}px, ${y}px)`,
                      }}
                      title={`${app.label}: ${app.desc}`}
                    >
                      {app.icon}
                    </button>
                  );
                })}
              </div>

              {/* MCP Online Status Toggle */}
              <div className="mt-3 flex items-center justify-between w-full max-w-[260px] px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      mcpOnline ? "bg-emerald-400 animate-ping" : "bg-red-400"
                    }`}
                  />
                  <span className="text-zinc-300 font-semibold">
                    {mcpOnline ? `MCP ONLINE (${appNodes[activeAppIdx].label})` : "MCP STANDBY"}
                  </span>
                </div>
                <button
                  onClick={() => setMcpOnline(!mcpOnline)}
                  className="text-[10px] text-zinc-400 hover:text-white underline cursor-pointer"
                >
                  {mcpOnline ? "12ms" : "Offline"}
                </button>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* Card 5: AMBIENT INTELLIGENCE */}
          {/* ========================================================================= */}
          <div className="bg-[#09090b] p-7 sm:p-9 flex flex-col justify-between min-h-[410px] hover:bg-[#0d0d10] transition-all group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono font-semibold tracking-widest text-zinc-400 uppercase">
                  AMBIENT INTELLIGENCE
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  Live Loop
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Surfaces duplicate channels, orphan roles, and smart hierarchy suggestions before import.
              </p>
            </div>

            {/* Interactive Widget 5 (Autoplays Clean Loop) */}
            <div className="mt-6 flex flex-col items-center justify-center w-full">
              <div className="w-full py-2.5 px-4 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-300 flex items-center justify-between mb-3 shadow-inner">
                <div className="flex items-center gap-2">
                  <span className="text-sm animate-spin text-cyan-400">✦</span>
                  <span className="font-semibold">Taxonomy Optimizer</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400">
                  Step {cleanStep} of 3
                </span>
              </div>

              {/* Steps log */}
              <div className="w-full space-y-2 text-[11px] font-mono">
                <div className="flex items-center justify-between text-zinc-400">
                  <span className="flex items-center gap-2">
                    <span className={cleanStep >= 1 ? "text-emerald-400 font-bold" : "text-zinc-600"}>
                      ✓
                    </span>
                    <span className={cleanStep === 1 ? "text-white font-semibold" : ""}>
                      Consolidate 42 channel topics
                    </span>
                  </span>
                  <span className={cleanStep >= 1 ? "text-emerald-400" : "text-zinc-600"}>
                    {cleanStep >= 1 ? "100%" : "queued"}
                  </span>
                </div>

                <div className="flex items-center justify-between text-zinc-400">
                  <span className="flex items-center gap-2">
                    <span className={cleanStep >= 2 ? "text-emerald-400 font-bold" : "text-zinc-600"}>
                      ✓
                    </span>
                    <span className={cleanStep === 2 ? "text-white font-semibold" : ""}>
                      Remove legacy spam bots & tokens
                    </span>
                  </span>
                  <span className={cleanStep >= 2 ? "text-emerald-400" : "text-zinc-600"}>
                    {cleanStep >= 2 ? "100%" : "queued"}
                  </span>
                </div>

                <div className="flex items-center justify-between text-zinc-400">
                  <span className="flex items-center gap-2">
                    <span className={cleanStep >= 3 ? "text-emerald-400 font-bold" : "text-zinc-600"}>
                      ✓
                    </span>
                    <span className={cleanStep === 3 ? "text-white font-semibold" : ""}>
                      Map gamified badge achievements
                    </span>
                  </span>
                  <span className={cleanStep >= 3 ? "text-emerald-400" : "text-zinc-600"}>
                    {cleanStep >= 3 ? "100%" : "queued"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* Card 6: DEEP SEARCH */}
          {/* ========================================================================= */}
          <div className="bg-[#09090b] p-7 sm:p-9 flex flex-col justify-between min-h-[410px] hover:bg-[#0d0d10] transition-all group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono font-semibold tracking-widest text-zinc-400 uppercase">
                  DEEP SEARCH
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-800/80 text-zinc-400 border border-zinc-700/50 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Auto-Search
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Ask something complex. Thrico² checks your historical archive, workspace, and threads in milliseconds.
              </p>
            </div>

            {/* Interactive Widget 6 (Autoplays Search Queries) */}
            <div className="mt-6 w-full flex flex-col gap-2.5">
              {/* Interactive Search Bar */}
              <div className="relative w-full">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search historical archive..."
                  className="w-full py-2 pl-8 pr-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-all font-mono"
                />
                <span className="absolute left-2.5 top-2.5 text-emerald-400 text-xs animate-pulse">
                  🔍
                </span>
              </div>

              {/* Filtered Simulated Search Results */}
              <div className="space-y-1.5">
                {getResults().slice(0, 2).map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2 rounded-lg bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 transform hover:translate-x-0.5"
                  >
                    <div className="text-[11px] font-medium text-zinc-200 truncate">
                      {item.title}
                    </div>
                    <div className="flex items-center justify-between text-[9.5px] font-mono text-zinc-500 mt-1">
                      <span className="text-emerald-400/80">{item.source}</span>
                      <span>{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
