"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Sparkles, UserPlus, Check } from "lucide-react";

interface NodePerson {
  id: string;
  name: string;
  role: string;
  handle: string;
  location: string;
  badges: string[];
  avatarUrl: string;
  // Percentage coordinates relative to SVG canvas
  cx: number;
  cy: number;
  size: number; // in pixels
  bgRingColor: string;
}

export default function CommunityConnectionNetwork() {
  const [activeNodeId, setActiveNodeId] = useState<string | null>("node-3");
  const [connectedIds, setConnectedIds] = useState<Record<string, boolean>>({});

  const nodes: NodePerson[] = [
    {
      id: "node-1",
      name: "Clara Morales",
      role: "Host & Creative Director",
      handle: "@clara",
      location: "Madrid, ES",
      badges: ["THRICO", "HOST"],
      avatarUrl:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      cx: 240,
      cy: 640,
      size: 80,
      bgRingColor: "ring-rose-500/40",
    },
    {
      id: "node-2",
      name: "Marcus Chen",
      role: "Community Lead & Creator",
      handle: "@marcus",
      location: "San Francisco, CA",
      badges: ["THRICO", "PRO"],
      avatarUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      cx: 370,
      cy: 430,
      size: 64,
      bgRingColor: "ring-amber-500/40",
    },
    {
      id: "node-3",
      name: "Jonathan Morin",
      role: "Founder, Global Circle",
      handle: "@Jomor",
      location: "Montreal, CA",
      badges: ["THRICO", "FOUNDER"],
      avatarUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
      cx: 640,
      cy: 350,
      size: 88,
      bgRingColor: "ring-blue-500/50",
    },
    {
      id: "node-4",
      name: "Sophia Kim",
      role: "Ecosystem Architect",
      handle: "@sophia",
      location: "Seoul, KR",
      badges: ["THRICO", "LEAD"],
      avatarUrl:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      cx: 840,
      cy: 230,
      size: 76,
      bgRingColor: "ring-emerald-500/40",
    },
    {
      id: "node-5",
      name: "Pixel & Milo",
      role: "Community Mascot & Support",
      handle: "@pixelcat",
      location: "Everywhere",
      badges: ["MASCOT"],
      avatarUrl:
        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=300&q=80",
      cx: 520,
      cy: 630,
      size: 68,
      bgRingColor: "ring-purple-500/40",
    },
    {
      id: "node-6",
      name: "Rusty & Team",
      role: "Community Ambassador",
      handle: "@rustypup",
      location: "Austin, TX",
      badges: ["FRIEND"],
      avatarUrl:
        "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=300&q=80",
      cx: 780,
      cy: 490,
      size: 64,
      bgRingColor: "ring-orange-500/40",
    },
    {
      id: "node-7",
      name: "David Okafor",
      role: "Mentor & Discussion Host",
      handle: "@david",
      location: "London, UK",
      badges: ["THRICO", "MENTOR"],
      avatarUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      cx: 930,
      cy: 590,
      size: 82,
      bgRingColor: "ring-teal-500/40",
    },
  ];

  const handleToggleConnect = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setConnectedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Primary Path A: Top looping ribbon
  const pathA = `
    M -60 540 
    C 160 530, 260 480, 340 420 
    C 380 370, 410 320, 390 280 
    C 360 230, 300 270, 330 350 
    C 370 430, 470 420, 560 360 
    C 660 290, 710 180, 780 170 
    C 860 160, 890 270, 810 330 
    C 740 380, 780 450, 870 410 
    C 960 360, 1020 220, 1140 160 
    C 1260 100, 1380 60, 1520 20
  `;

  // Primary Path B: Lower looping ribbon
  const pathB = `
    M 80 760 
    C 180 710, 260 630, 340 640 
    C 420 650, 480 720, 520 670 
    C 550 620, 490 560, 450 610 
    C 420 660, 480 750, 600 710 
    C 710 670, 770 590, 840 600 
    C 920 610, 970 700, 940 750 
    C 900 810, 820 750, 850 660 
    C 890 540, 1040 480, 1200 470 
    C 1340 460, 1420 420, 1540 370
  `;

  return (
    <section className="relative w-full py-20 sm:py-28 bg-[#090b10] text-white overflow-hidden selection:bg-amber-500 selection:text-black">
      {/* 1. Subtle Confetti / Geometric Scatter Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 select-none overflow-hidden" aria-hidden="true">
        {/* Scattered festive shapes matching screenshot */}
        <span className="absolute top-12 left-[18%] text-zinc-500 text-lg">~</span>
        <span className="absolute top-36 left-[35%] text-zinc-600 text-base">■</span>
        <span className="absolute top-24 left-[58%] text-zinc-500 text-xl">~</span>
        <span className="absolute top-16 right-[24%] text-zinc-600 text-sm">▲</span>
        <span className="absolute top-44 right-[12%] text-zinc-500 text-lg">●</span>
        <span className="absolute bottom-28 left-[12%] text-zinc-600 text-base">■</span>
        <span className="absolute bottom-40 left-[42%] text-zinc-500 text-xl">~</span>
        <span className="absolute bottom-16 right-[38%] text-zinc-600 text-sm">▲</span>
        <span className="absolute bottom-32 right-[18%] text-zinc-500 text-lg">~</span>
        <span className="absolute bottom-12 right-[8%] text-zinc-600 text-sm">●</span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Title Section */}
        <div className="max-w-2xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span>INTERCONNECTED ECOSYSTEM</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-[1.1] mb-4">
            A network of real connections.
          </h2>

          <p className="text-base text-zinc-400 max-w-xl leading-relaxed">
            Members don&apos;t just join spaces — they build relationships, host circles,
            and create opportunities together across one fluid network.
          </p>
        </div>

        {/* 2. Ribbon Canvas with SVG Multi-Stripe Paths & Avatar Nodes */}
        <div className="relative w-full aspect-[16/9] min-h-[520px] sm:min-h-[640px] max-h-[720px] rounded-3xl bg-[#0b0e14]/90 border border-zinc-800/80 overflow-hidden shadow-2xl">
          
          {/* SVG Triple-Stripe Looping Ribbons */}
          <svg
            viewBox="0 0 1440 720"
            preserveAspectRatio="xMidYMid meet"
            className="absolute inset-0 w-full h-full pointer-events-none"
          >
            <defs>
              {/* Soft glow filter */}
              <filter id="ribbonGlow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#f97316" floodOpacity="0.25" />
              </filter>
            </defs>

            {/* ---------- RIBBON PATH A (Top Track) ---------- */}
            {/* Base Red / Coral Stripe (Bottom of Ribbon) */}
            <path
              d={pathA}
              transform="translate(0, 5)"
              fill="none"
              stroke="#e11d48"
              strokeWidth="5"
              strokeLinecap="round"
              className="opacity-95"
            />
            {/* Middle Orange Stripe */}
            <path
              d={pathA}
              transform="translate(0, 0)"
              fill="none"
              stroke="#f97316"
              strokeWidth="5"
              strokeLinecap="round"
              filter="url(#ribbonGlow)"
              className="opacity-100"
            />
            {/* Top Yellow Stripe (Top of Ribbon) */}
            <path
              d={pathA}
              transform="translate(0, -5)"
              fill="none"
              stroke="#facc15"
              strokeWidth="5"
              strokeLinecap="round"
              className="opacity-95"
            />

            {/* Traveling Pulse Along Path A */}
            <circle r="4.5" fill="#ffffff" className="animate-pulse">
              <animateMotion
                path={pathA}
                dur="16s"
                repeatCount="indefinite"
                rotate="auto"
              />
            </circle>

            {/* ---------- RIBBON PATH B (Lower Track) ---------- */}
            {/* Base Red / Coral Stripe */}
            <path
              d={pathB}
              transform="translate(0, 5)"
              fill="none"
              stroke="#e11d48"
              strokeWidth="5"
              strokeLinecap="round"
              className="opacity-95"
            />
            {/* Middle Orange Stripe */}
            <path
              d={pathB}
              transform="translate(0, 0)"
              fill="none"
              stroke="#f97316"
              strokeWidth="5"
              strokeLinecap="round"
              filter="url(#ribbonGlow)"
              className="opacity-100"
            />
            {/* Top Yellow Stripe */}
            <path
              d={pathB}
              transform="translate(0, -5)"
              fill="none"
              stroke="#facc15"
              strokeWidth="5"
              strokeLinecap="round"
              className="opacity-95"
            />

            {/* Traveling Pulse Along Path B */}
            <circle r="4.5" fill="#ffffff" className="animate-pulse">
              <animateMotion
                path={pathB}
                dur="20s"
                repeatCount="indefinite"
                rotate="auto"
              />
            </circle>
          </svg>

          {/* 3. Interactive Avatar Nodes Placed Exactly Along the Ribbon */}
          {nodes.map((node) => {
            const isSelected = activeNodeId === node.id;
            const isConnected = !!connectedIds[node.id];

            // Normalize coordinate to percentage of canvas (1440x720)
            const leftPct = (node.cx / 1440) * 100;
            const topPct = (node.cy / 720) * 100;

            return (
              <div
                key={node.id}
                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform duration-300 z-20 group"
                style={{
                  left: `${leftPct}%`,
                  top: `${topPct}%`,
                  width: `${node.size}px`,
                  height: `${node.size}px`,
                }}
                onClick={() => setActiveNodeId(node.id)}
                onMouseEnter={() => setActiveNodeId(node.id)}
              >
                {/* Outer Ring & Avatar */}
                <div
                  className={`
                    relative w-full h-full rounded-full overflow-hidden border-4 border-zinc-950 shadow-2xl transition-all duration-300
                    ${node.bgRingColor} ring-4
                    ${isSelected ? "scale-115 ring-amber-400 border-zinc-900 shadow-amber-500/20" : "group-hover:scale-110"}
                  `}
                >
                  <Image
                    src={node.avatarUrl}
                    alt={node.name}
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Status Dot */}
                <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-zinc-950 shadow-xs" />

                {/* Floating Rich Tooltip on Active/Hover */}
                {isSelected && (
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3.5 z-40 whitespace-nowrap pointer-events-auto animate-in fade-in zoom-in-95 duration-200">
                    <div className="p-3 bg-zinc-900/95 backdrop-blur-md rounded-2xl border border-zinc-700/80 shadow-2xl shadow-black/80 flex items-center gap-3">
                      <div>
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span className="text-xs font-bold text-white leading-tight">
                            {node.name}
                          </span>
                          {node.badges.map((badge, bIdx) => (
                            <span
                              key={bIdx}
                              className="px-1.5 py-0.2 rounded text-[8px] font-mono font-bold bg-white/10 text-zinc-300 border border-white/20"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                        <div className="text-[10px] text-zinc-400 font-medium">
                          {node.role}
                        </div>
                        <div className="flex items-center gap-1 text-[9px] text-zinc-500 font-mono mt-0.5">
                          <MapPin className="w-2.5 h-2.5 text-zinc-500" />
                          <span>{node.location}</span>
                          <span className="text-zinc-600">•</span>
                          <span>{node.handle}</span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => handleToggleConnect(node.id, e)}
                        className={`
                          shrink-0 px-2.5 py-1 rounded-full text-[10px] font-semibold transition-all duration-200 cursor-pointer border flex items-center gap-1
                          ${
                            isConnected
                              ? "bg-emerald-950/90 text-emerald-300 border-emerald-500/50"
                              : "bg-white text-black border-white hover:bg-zinc-200"
                          }
                        `}
                      >
                        {isConnected ? (
                          <>
                            <Check className="w-3 h-3" />
                            <span>Connected</span>
                          </>
                        ) : (
                          <>
                            <UserPlus className="w-3 h-3" />
                            <span>Connect</span>
                          </>
                        )}
                      </button>
                    </div>
                    {/* Tooltip triangle indicator */}
                    <div className="w-2.5 h-2.5 bg-zinc-900 border-r border-b border-zinc-700/80 rotate-45 mx-auto -mt-1.5" />
                  </div>
                )}
              </div>
            );
          })}

          {/* Ribbon Floating Stats Pill */}
          <div className="absolute bottom-5 right-6 z-20 hidden sm:flex items-center gap-3 px-4 py-2 rounded-full bg-zinc-900/85 backdrop-blur-md border border-zinc-800 text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-1.5 text-white font-semibold">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              1,420 Active Node Connections
            </span>
            <span className="text-zinc-600">|</span>
            <span>Click any node to connect</span>
          </div>
        </div>

      </div>
    </section>
  );
}
