"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MessageSquare,
  Calendar,
  ArrowRight,
  Heart,
  RotateCcw,
  MapPin,
  Check,
  UserPlus,
} from "lucide-react";

interface ParallaxOffset {
  x: number;
  y: number;
}

interface NetworkNode {
  id: string;
  name: string;
  role: string;
  handle: string;
  location: string;
  badges: string[];
  avatarUrl: string;
  // Coordinates relative to 1440x760 canvas
  cx: number;
  cy: number;
  size: number;
  delay: number;
  ringColor: string;
}

interface NetworkEdge {
  id: string;
  fromId: string;
  toId: string;
  curvature: number;
  speed: number;
  isExternal?: boolean;
  startX?: number;
  startY?: number;
  endX?: number;
  endY?: number;
}

// Generates a smooth quadratic Bezier curve path string
function getCurvedPath(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  curvature: number = 0.15
): string {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy);
  if (len === 0) return `M ${x1} ${y1}`;
  const nx = -dy / len;
  const ny = dx / len;
  const cpx = mx + nx * len * curvature;
  const cpy = my + ny * len * curvature;
  return `M ${x1} ${y1} Q ${cpx.toFixed(1)} ${cpy.toFixed(1)} ${x2} ${y2}`;
}

export default function ThricoCommunityHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });
  const [isHeadlineReady, setIsHeadlineReady] = useState(false);
  const [isEmerged, setIsEmerged] = useState(false);
  const [ribbonsDrawn, setRibbonsDrawn] = useState(false);
  const [mouseOffset, setMouseOffset] = useState<ParallaxOffset>({ x: 0, y: 0 });

  // Interactive Card & Node States
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);
  const [connectedIds, setConnectedIds] = useState<Record<string, boolean>>({});
  const [rsvpCount, setRsvpCount] = useState(64);
  const [hasRsvpd, setHasRsvpd] = useState(false);
  const [likedPost, setLikedPost] = useState(false);
  const [likeCount, setLikeCount] = useState(84);

  // 12 perimeter community nodes — ALL placed on the outer ring so the center
  // text area (roughly x:380–1060, y:190–580 on the 1440×760 canvas) stays clear.
  const networkNodes: NetworkNode[] = [
    // ── TOP ROW ──────────────────────────────────────────────────────────────
    // Top-left corner
    {
      id: "node-tl",
      name: "Amina Diallo",
      role: "Engagement Strategist",
      handle: "@amina",
      location: "Paris, FR • French, English",
      badges: ["THRICO", "PRO"],
      avatarUrl:
        "https://d1mluk3as397pq.cloudfront.net/wp-content/uploads/2026/08/20070244/enable-member.png",
      cx: 110,
      cy: 110,
      size: 80,
      delay: 0.35,
      ringColor: "ring-indigo-500/40",
    },
    // Top-center-left (above safe zone)
    {
      id: "node-tc-l",
      name: "Julian Brooks",
      role: "Ambassador & Media Creator",
      handle: "@julian",
      location: "Austin, TX • English",
      badges: ["THRICO", "CREATOR"],
      avatarUrl:
        "https://d1mluk3as397pq.cloudfront.net/wp-content/uploads/2026/08/20071545/gamify-fan.png",
      cx: 400,
      cy: 70,
      size: 76,
      delay: 0.42,
      ringColor: "ring-indigo-500/40",
    },
    // Top-center (directly above, clear of text)
    {
      id: "node-tc",
      name: "Elena Vance",
      role: "Global Host & Director",
      handle: "@elena",
      location: "London, UK • English",
      badges: ["THRICO", "HOST"],
      avatarUrl:
        "https://d1mluk3as397pq.cloudfront.net/wp-content/uploads/2026/08/20070244/enable-member.png",
      cx: 720,
      cy: 62,
      size: 84,
      delay: 0.50,
      ringColor: "ring-violet-500/40",
    },
    // Top-center-right (above safe zone)
    {
      id: "node-tc-r",
      name: "Liam Evans",
      role: "DevRel & Creator Support",
      handle: "@liam",
      location: "Toronto, CA • English",
      badges: ["THRICO", "DEVREL"],
      avatarUrl:
        "https://d1mluk3as397pq.cloudfront.net/wp-content/uploads/2026/08/20062417/reward.png",
      cx: 1040,
      cy: 70,
      size: 76,
      delay: 0.58,
      ringColor: "ring-violet-500/40",
    },
    // Top-right corner
    {
      id: "node-tr",
      name: "Maya Patel",
      role: "Brand Partnership Lead",
      handle: "@maya",
      location: "Berlin, DE • German, English",
      badges: ["THRICO", "LEAD"],
      avatarUrl:
        "https://d1mluk3as397pq.cloudfront.net/wp-content/uploads/2026/08/20062416/increase.png",
      cx: 1330,
      cy: 110,
      size: 80,
      delay: 0.65,
      ringColor: "ring-purple-500/40",
    },
    // ── LEFT EDGE ────────────────────────────────────────────────────────────
    // Left-mid-top
    {
      id: "node-l-t",
      name: "Priya Sharma",
      role: "Growth & Retention Lead",
      handle: "@priya",
      location: "New York, NY • English, Hindi",
      badges: ["THRICO", "LEAD"],
      avatarUrl:
        "https://d1mluk3as397pq.cloudfront.net/wp-content/uploads/2026/08/20062418/reduce.png",
      cx: 95,
      cy: 330,
      size: 78,
      delay: 0.45,
      ringColor: "ring-blue-500/40",
    },
    // Left-mid-bottom
    {
      id: "node-l-b",
      name: "David Okafor",
      role: "Mentor & Discussion Host",
      handle: "@david",
      location: "Montreal, CA • English, French",
      badges: ["THRICO", "MENTOR"],
      avatarUrl:
        "https://d1mluk3as397pq.cloudfront.net/wp-content/uploads/2026/08/20062417/reward.png",
      cx: 95,
      cy: 530,
      size: 78,
      delay: 0.52,
      ringColor: "ring-violet-500/40",
    },
    // ── RIGHT EDGE ───────────────────────────────────────────────────────────
    // Right-mid-top
    {
      id: "node-r-t",
      name: "Sophia Lin",
      role: "Ecosystem Architect",
      handle: "@sophia",
      location: "Seoul, KR • Korean, English",
      badges: ["THRICO", "FOUNDER"],
      avatarUrl:
        "https://d1mluk3as397pq.cloudfront.net/wp-content/uploads/2026/08/20062416/increase.png",
      cx: 1345,
      cy: 330,
      size: 78,
      delay: 0.62,
      ringColor: "ring-purple-500/40",
    },
    // Right-mid-bottom
    {
      id: "node-r-b",
      name: "Kenji Sato",
      role: "Ambassador & Event Lead",
      handle: "@kenji",
      location: "Tokyo, JP • Japanese, English",
      badges: ["THRICO", "AMBASSADOR"],
      avatarUrl:
        "https://d1mluk3as397pq.cloudfront.net/wp-content/uploads/2026/08/20071545/gamify-fan.png",
      cx: 1345,
      cy: 530,
      size: 78,
      delay: 0.70,
      ringColor: "ring-indigo-500/40",
    },
    // ── BOTTOM ROW ───────────────────────────────────────────────────────────
    // Bottom-left corner
    {
      id: "node-bl",
      name: "Clara Morales",
      role: "Experience Designer",
      handle: "@clara",
      location: "Barcelona, ES • Spanish, English",
      badges: ["THRICO", "DESIGN"],
      avatarUrl:
        "https://d1mluk3as397pq.cloudfront.net/wp-content/uploads/2026/08/20062418/reduce.png",
      cx: 110,
      cy: 690,
      size: 76,
      delay: 0.55,
      ringColor: "ring-blue-500/40",
    },
    // Bottom-center-left
    {
      id: "node-bc-l",
      name: "Marcus Chen",
      role: "Community Lead & Creator",
      handle: "@marcus",
      location: "San Francisco, CA • English",
      badges: ["THRICO", "PRO"],
      avatarUrl:
        "https://d1mluk3as397pq.cloudfront.net/wp-content/uploads/2026/08/20062417/reward.png",
      cx: 400,
      cy: 720,
      size: 76,
      delay: 0.60,
      ringColor: "ring-violet-500/40",
    },
    // Bottom-center
    {
      id: "node-bc",
      name: "Zara Al-Mansoor",
      role: "Community Operations",
      handle: "@zara",
      location: "Dubai, UAE • Arabic, English",
      badges: ["THRICO", "OPS"],
      avatarUrl:
        "https://d1mluk3as397pq.cloudfront.net/wp-content/uploads/2026/08/20070244/enable-member.png",
      cx: 720,
      cy: 730,
      size: 80,
      delay: 0.68,
      ringColor: "ring-indigo-500/40",
    },
    // Bottom-center-right
    {
      id: "node-bc-r",
      name: "Noa Becker",
      role: "Product & Growth Lead",
      handle: "@noa",
      location: "Tel Aviv, IL • Hebrew, English",
      badges: ["THRICO", "GROWTH"],
      avatarUrl:
        "https://d1mluk3as397pq.cloudfront.net/wp-content/uploads/2026/08/20062416/increase.png",
      cx: 1040,
      cy: 720,
      size: 76,
      delay: 0.75,
      ringColor: "ring-purple-500/40",
    },
    // Bottom-right corner
    {
      id: "node-br",
      name: "Tom\u00e1s Silva",
      role: "Community Ambassador",
      handle: "@tomas",
      location: "S\u00e3o Paulo, BR \u2022 Portuguese, English",
      badges: ["THRICO", "AMBASSADOR"],
      avatarUrl:
        "https://d1mluk3as397pq.cloudfront.net/wp-content/uploads/2026/08/20071545/gamify-fan.png",
      cx: 1330,
      cy: 690,
      size: 76,
      delay: 0.82,
      ringColor: "ring-indigo-500/40",
    },
  ];

  // Map for fast node lookup
  const nodeMap = React.useMemo(() => {
    const map = new Map<string, NetworkNode>();
    networkNodes.forEach((n) => map.set(n.id, n));
    return map;
  }, [networkNodes]);

  // Network edges connecting perimeter nodes — lines travel around the frame
  // and arc gently WITHOUT passing through the center text safe zone.
  const networkEdges: NetworkEdge[] = [
    // Top arch
    { id: "e1",  fromId: "node-tl",   toId: "node-tc-l", curvature:  0.10, speed: 11 },
    { id: "e2",  fromId: "node-tc-l", toId: "node-tc",   curvature:  0.08, speed: 13 },
    { id: "e3",  fromId: "node-tc",   toId: "node-tc-r", curvature:  0.08, speed: 13 },
    { id: "e4",  fromId: "node-tc-r", toId: "node-tr",   curvature:  0.10, speed: 11 },

    // Left spine
    { id: "e5",  fromId: "node-tl",   toId: "node-l-t",  curvature: -0.12, speed: 10 },
    { id: "e6",  fromId: "node-l-t",  toId: "node-l-b",  curvature: -0.10, speed: 12 },
    { id: "e7",  fromId: "node-l-b",  toId: "node-bl",   curvature: -0.12, speed: 11 },

    // Right spine
    { id: "e8",  fromId: "node-tr",   toId: "node-r-t",  curvature:  0.12, speed: 10 },
    { id: "e9",  fromId: "node-r-t",  toId: "node-r-b",  curvature:  0.10, speed: 12 },
    { id: "e10", fromId: "node-r-b",  toId: "node-br",   curvature:  0.12, speed: 11 },

    // Bottom arch
    { id: "e11", fromId: "node-bl",   toId: "node-bc-l", curvature: -0.10, speed: 12 },
    { id: "e12", fromId: "node-bc-l", toId: "node-bc",   curvature: -0.08, speed: 14 },
    { id: "e13", fromId: "node-bc",   toId: "node-bc-r", curvature: -0.08, speed: 14 },
    { id: "e14", fromId: "node-bc-r", toId: "node-br",   curvature: -0.10, speed: 12 },

    // Diagonal cross-connections (stay close to frame)
    { id: "e15", fromId: "node-l-t",  toId: "node-tc-l", curvature: -0.16, speed: 13 },
    { id: "e16", fromId: "node-tc-r", toId: "node-r-t",  curvature:  0.16, speed: 13 },
    { id: "e17", fromId: "node-l-b",  toId: "node-bc-l", curvature: -0.14, speed: 12 },
    { id: "e18", fromId: "node-bc-r", toId: "node-r-b",  curvature:  0.14, speed: 12 },
    { id: "e19", fromId: "node-tl",   toId: "node-l-b",  curvature: -0.10, speed: 15 },
    { id: "e20", fromId: "node-tr",   toId: "node-r-b",  curvature:  0.10, speed: 15 },
    { id: "e21", fromId: "node-bl",   toId: "node-bc-r", curvature: -0.12, speed: 14 },
    { id: "e22", fromId: "node-bc-l", toId: "node-br",   curvature:  0.12, speed: 14 },

    // External lines (boundless network feel)
    { id: "ext-tl", fromId: "ext-tl", toId: "node-tl",   startX:  -40, startY:  60, curvature:  0.08, speed: 12, isExternal: true },
    { id: "ext-tc", fromId: "ext-tc", toId: "node-tc",   startX:  720, startY: -40, curvature:  0.05, speed: 15, isExternal: true },
    { id: "ext-tr", fromId: "ext-tr", toId: "node-tr",   startX: 1480, startY:  60, curvature: -0.08, speed: 12, isExternal: true },
    { id: "ext-lt", fromId: "ext-lt", toId: "node-l-t",  startX:  -40, startY: 330, curvature:  0.08, speed: 11, isExternal: true },
    { id: "ext-lb", fromId: "ext-lb", toId: "node-l-b",  startX:  -40, startY: 530, curvature:  0.08, speed: 13, isExternal: true },
    { id: "ext-rt", fromId: "ext-rt", toId: "node-r-t",  startX: 1480, startY: 330, curvature: -0.08, speed: 11, isExternal: true },
    { id: "ext-rb", fromId: "ext-rb", toId: "node-r-b",  startX: 1480, startY: 530, curvature: -0.08, speed: 13, isExternal: true },
    { id: "ext-bc", fromId: "ext-bc", toId: "node-bc",   startX:  720, startY: 800, curvature: -0.05, speed: 15, isExternal: true },
  ];

  // Set of connected neighbor IDs for the currently active node
  const activeConnectedNeighborIds = React.useMemo(() => {
    if (!activeNodeId) return new Set<string>();
    const neighbors = new Set<string>();
    networkEdges.forEach((e) => {
      if (e.fromId === activeNodeId) neighbors.add(e.toId);
      if (e.toId === activeNodeId) neighbors.add(e.fromId);
    });
    return neighbors;
  }, [activeNodeId, networkEdges]);

  // Measure container size
  const updateDimensions = useCallback(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setDimensions({ width: rect.width, height: rect.height });
    }
  }, []);

  // Entrance Sequence
  const runEntranceSequence = useCallback(() => {
    setIsHeadlineReady(false);
    setIsEmerged(false);
    setRibbonsDrawn(false);
    setActiveNodeId(null);

    const t1 = setTimeout(() => {
      setIsHeadlineReady(true);
    }, 120);

    const t2 = setTimeout(() => {
      setRibbonsDrawn(true);
    }, 240);

    const t3 = setTimeout(() => {
      setIsEmerged(true);
    }, 320);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    const cleanupSequence = runEntranceSequence();

    return () => {
      window.removeEventListener("resize", updateDimensions);
      cleanupSequence();
    };
  }, [updateDimensions, runEntranceSequence]);

  // Mouse parallax effect
  useEffect(() => {
    let animationFrameId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      targetX = (e.clientX - centerX) / (rect.width / 2);
      targetY = (e.clientY - centerY) / (rect.height / 2);
    };

    const handleMouseLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const updateParallax = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      setMouseOffset({
        x: Math.round(currentX * 100) / 100,
        y: Math.round(currentY * 100) / 100,
      });
      animationFrameId = requestAnimationFrame(updateParallax);
    };

    window.addEventListener("mousemove", handleMouseMove);
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mouseleave", handleMouseLeave);
    }
    animationFrameId = requestAnimationFrame(updateParallax);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (container) {
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleToggleRsvp = () => {
    if (hasRsvpd) {
      setRsvpCount((prev) => prev - 1);
      setHasRsvpd(false);
    } else {
      setRsvpCount((prev) => prev + 1);
      setHasRsvpd(true);
    }
  };

  const handleToggleLike = () => {
    if (likedPost) {
      setLikeCount((prev) => prev - 1);
      setLikedPost(false);
    } else {
      setLikeCount((prev) => prev + 1);
      setLikedPost(true);
    }
  };

  const handleToggleConnect = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setConnectedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  /**
   * Emergence transform:
   * Originates from center behind headline
   * Curves outward to target position with cubic-bezier easing
   */
  const getEmergenceStyle = (
    dx: number,
    dy: number,
    initialRotate: number,
    delay: number,
    duration: number,
    parallaxFactor: number = 0
  ): React.CSSProperties => {
    const halfW = dimensions.width / 2;
    const halfH = dimensions.height / 2;

    const startX = -dx * halfW * 0.82;
    const startY = -dy * halfH * 0.78;

    if (!isEmerged) {
      return {
        transform: `translate3d(${startX}px, ${startY}px, 0) scale(0.28) rotate(${initialRotate}deg)`,
        opacity: 0,
        filter: "blur(8px)",
        pointerEvents: "none",
        transition: "none",
      };
    }

    const currentParallaxX = mouseOffset.x * parallaxFactor;
    const currentParallaxY = mouseOffset.y * parallaxFactor;

    return {
      transform: `translate3d(${currentParallaxX}px, ${currentParallaxY}px, 0) scale(1) rotate(0deg)`,
      opacity: 1,
      filter: "blur(0px)",
      transition: `
        transform ${duration}s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s,
        opacity ${duration * 0.7}s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s,
        filter ${duration * 0.65}s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s
      `,
    };
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[960px] lg:h-[96vh] lg:min-h-[880px] bg-white text-zinc-950 overflow-hidden flex flex-col justify-between selection:bg-black selection:text-white border-b border-zinc-200/80"
    >
      {/* 1. Subtle Light-Gray Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none bg-grid-subtle opacity-65"
        aria-hidden="true"
      />

      {/* Grid Intersection Crosshairs & Subtle Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-30 select-none overflow-hidden" aria-hidden="true">
        <span className="absolute top-24 left-[12%] text-zinc-400 font-mono text-xs">+</span>
        <span className="absolute top-48 right-[18%] text-zinc-400 font-mono text-xs">+</span>
        <span className="absolute bottom-36 left-[22%] text-zinc-400 font-mono text-xs">+</span>
        <span className="absolute bottom-28 right-[14%] text-zinc-400 font-mono text-xs">+</span>
        <span className="absolute top-1/2 left-[8%] text-zinc-400 font-mono text-xs">+</span>
        <span className="absolute top-1/3 right-[32%] text-zinc-400 font-mono text-xs">+</span>

        <span className="absolute top-16 left-[28%] text-zinc-400 text-lg">~</span>
        <span className="absolute top-36 right-[26%] text-zinc-400 text-xs">▲</span>
        <span className="absolute bottom-20 left-[35%] text-zinc-400 text-sm">■</span>
        <span className="absolute bottom-40 right-[42%] text-zinc-400 text-lg">~</span>
      </div>

      {/* 2. Top Navigation & Brand Header */}
      <header className="relative z-35 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-7 flex items-center justify-between">
        {/* Brand Logo & Pill */}
        <div className="flex items-center gap-2.5 group cursor-pointer">
          <div className="w-5 h-5 rounded-md bg-black flex items-center justify-center text-white text-[10px] font-bold tracking-tighter">
            T
          </div>
          <span className="font-mono text-xs font-semibold tracking-[0.16em] uppercase text-zinc-900 group-hover:text-zinc-600 transition-colors">
            THRICO COMMUNITY
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 ml-2 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-zinc-100 text-zinc-600 border border-zinc-200/60">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Live Network
          </span>
        </div>

        {/* Minimal Navigation & Replay Trigger */}
        <div className="flex items-center gap-4 sm:gap-6 text-xs font-medium text-zinc-600">
          <button
            type="button"
            onClick={runEntranceSequence}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono text-zinc-600 hover:text-black hover:bg-zinc-100 transition-all cursor-pointer border border-zinc-200/80 shadow-2xs"
            title="Replay entrance emergence animation"
          >
            <RotateCcw className="w-3 h-3" />
            <span className="hidden sm:inline font-semibold">Replay Emergence</span>
          </button>
          <Link
            href="#explore"
            className="hidden md:inline-block hover:text-black transition-colors"
          >
            Explore
          </Link>
          <Link
            href="#login"
            className="hover:text-black transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="https://thricov2.thrico.social/#"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-black text-white font-medium hover:bg-zinc-800 transition-all duration-200 shadow-xs active:scale-95 text-xs"
          >
            Start Free Trial
          </Link>
        </div>
      </header>

      {/* 3. SVG Curved Dashed Connection Network Graph (Interconnecting Avatars) */}
      <svg
        viewBox="0 0 1440 760"
        preserveAspectRatio="xMidYMid meet"
        className="absolute inset-0 w-full h-full pointer-events-none z-15"
        aria-hidden="true"
      >
        <defs>
          {/* Active connection line glow */}
          <filter id="activeLineGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#6366f1" floodOpacity="0.75" />
          </filter>
          {/* Pulse particle glow */}
          <filter id="pulseGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#818cf8" floodOpacity="0.9" />
          </filter>
        </defs>

        {/* Render each curved dashed connection line */}
        {networkEdges.map((edge) => {
          let x1 = 0;
          let y1 = 0;
          let x2 = 0;
          let y2 = 0;

          if (edge.isExternal) {
            x1 = edge.startX ?? 0;
            y1 = edge.startY ?? 0;
            const toNode = nodeMap.get(edge.toId);
            if (!toNode) return null;
            x2 = toNode.cx;
            y2 = toNode.cy;
          } else {
            const fromNode = nodeMap.get(edge.fromId);
            const toNode = nodeMap.get(edge.toId);
            if (!fromNode || !toNode) return null;
            x1 = fromNode.cx;
            y1 = fromNode.cy;
            x2 = toNode.cx;
            y2 = toNode.cy;
          }

          const pathD = getCurvedPath(x1, y1, x2, y2, edge.curvature);
          const isConnectedToActive =
            activeNodeId !== null &&
            (edge.fromId === activeNodeId || edge.toId === activeNodeId);
          const isFaded = activeNodeId !== null && !isConnectedToActive;

          return (
            <g key={edge.id}>
              {/* The Dashed Curved Line */}
              <path
                d={pathD}
                fill="none"
                stroke={isConnectedToActive ? "#4f46e5" : "#6366f1"}
                strokeWidth={isConnectedToActive ? 3.5 : 2.2}
                strokeLinecap="round"
                strokeDasharray={isConnectedToActive ? "8 6" : "6 7"}
                filter={isConnectedToActive ? "url(#activeLineGlow)" : undefined}
                className={`transition-all duration-300 ease-out ${
                  !ribbonsDrawn
                    ? "opacity-0"
                    : isConnectedToActive
                    ? "opacity-100"
                    : isFaded
                    ? "opacity-20"
                    : "opacity-75"
                }`}
              />

              {/* Traveling Glowing Activity Pulse */}
              {ribbonsDrawn && (
                <circle
                  r={isConnectedToActive ? 4 : 3}
                  fill="#ffffff"
                  stroke={isConnectedToActive ? "#4338ca" : "#6366f1"}
                  strokeWidth={isConnectedToActive ? 2 : 1.5}
                  filter="url(#pulseGlow)"
                  className={`transition-opacity duration-300 ${
                    isFaded ? "opacity-15" : "opacity-100"
                  }`}
                >
                  <animateMotion
                    path={pathD}
                    dur={`${isConnectedToActive ? edge.speed * 0.7 : edge.speed}s`}
                    repeatCount="indefinite"
                    rotate="auto"
                  />
                </circle>
              )}
            </g>
          );
        })}
      </svg>

      {/* 4. Center Main Typographic Focus — nodes are on perimeter, center is clear */}
      <div className="relative z-30 max-w-4xl mx-auto px-4 sm:px-6 my-auto text-center flex flex-col items-center justify-center pointer-events-auto">
        {/* Eyebrow */}
        <div
          className={`inline-flex items-center gap-2 mb-4 sm:mb-6 transition-all duration-700 ease-out ${
            isHeadlineReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-zinc-500 font-mono">
            A SOCIAL NETWORK FOR YOUR COMMUNITY
          </span>
        </div>

        {/* Headline */}
        <h1
          className={`flex flex-col items-center justify-center font-black tracking-[-0.04em] text-black leading-[0.95] select-none transition-all duration-800 delay-100 ease-out ${
            isHeadlineReady ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-[0.98]"
          }`}
        >
          <span className="text-4xl sm:text-6xl md:text-7xl lg:text-[88px] xl:text-[96px] tracking-tight">
            Build
          </span>
          <div className="mt-2 sm:mt-3.5 inline-block">
            <span className="inline-flex items-center justify-center bg-black text-white text-3xl sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[80px] font-black px-6 sm:px-9 py-1.5 sm:py-2 rounded-2xl sm:rounded-3xl shadow-sm tracking-tight hover:scale-[1.02] transition-transform duration-300 cursor-default">
              Thriving Communities
            </span>
          </div>
        </h1>

        {/* Description */}
        <p
          className={`mt-6 sm:mt-8 text-sm sm:text-base lg:text-lg text-zinc-600 max-w-xl mx-auto font-normal leading-relaxed text-balance transition-all duration-700 delay-200 ease-out ${
            isHeadlineReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          Turn fans, followers, members, customers, employees and alumni into active ambassadors. Unified community infrastructure – gamification, social, commerce-ready platform – your audience, your data, your community.
        </p>

        {/* CTAs */}
        <div
          className={`mt-7 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md mx-auto transition-all duration-700 delay-300 ease-out ${
            isHeadlineReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <Link
            href="https://thricov2.thrico.social/#"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-black text-white text-sm font-semibold tracking-wide hover:bg-zinc-800 transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5 active:scale-95 w-full sm:w-auto"
          >
            <span>Start Free Trial</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
          <Link
            href="https://thricov2.thrico.social/#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-sm font-semibold border border-zinc-200/80 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 w-full sm:w-auto"
          >
            <span>Book A Demo</span>
          </Link>
        </div>
      </div>

      {/* 5. Circular Avatar Connection Nodes Sitting Directly on Network Intersections */}
      <div className="absolute inset-0 pointer-events-none z-25">
        {networkNodes.map((node) => {
          const isSelected = activeNodeId === node.id;
          const isNeighbor = activeConnectedNeighborIds.has(node.id);
          const isConnected = !!connectedIds[node.id];

          // Coordinates relative to 1440x760 canvas
          const leftPct = (node.cx / 1440) * 100;
          const topPct = (node.cy / 760) * 100;

          // Normalized dx, dy from canvas center (720, 380)
          const dx = (node.cx - 720) / 720;
          const dy = (node.cy - 380) / 380;

          return (
            <div
              key={node.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer group select-none"
              style={{
                left: `${leftPct}%`,
                top: `${topPct}%`,
                width: `${node.size}px`,
                height: `${node.size}px`,
                ...getEmergenceStyle(dx, dy, dx * 8, node.delay, 1.15, dx * 16),
              }}
              onClick={() => setActiveNodeId(isSelected ? null : node.id)}
              onMouseEnter={() => setActiveNodeId(node.id)}
            >
              <div className="animate-hero-float-2 relative w-full h-full">
                {/* Node Avatar Circle */}
                <div
                  className={`
                    relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-md transition-all duration-300
                    ${node.ringColor} ring-4
                    ${
                      isSelected
                        ? "scale-115 ring-indigo-600 border-zinc-950 shadow-xl shadow-indigo-500/25"
                        : isNeighbor
                        ? "ring-indigo-400 ring-offset-2 animate-pulse scale-105"
                        : "group-hover:scale-110 group-hover:shadow-lg group-hover:ring-indigo-500/60"
                    }
                  `}
                >
                  <Image
                    src={node.avatarUrl}
                    alt={node.name}
                    fill
                    sizes="160px"
                    className="object-cover object-center bg-white transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Online Status Dot */}
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white shadow-xs z-10" />

                {/* Floating Rich Member Info Tooltip Card */}
                {isSelected && (
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 z-50 whitespace-nowrap pointer-events-auto animate-in fade-in zoom-in-95 duration-200">
                    <div className="p-3.5 bg-white/98 backdrop-blur-md rounded-2xl border border-zinc-200 shadow-xl shadow-zinc-900/10 flex items-center gap-3">
                      <div>
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span className="text-xs font-bold text-zinc-950 leading-tight">
                            {node.name}
                          </span>
                          {node.badges.map((badge, bIdx) => (
                            <span
                              key={bIdx}
                              className="px-1.5 py-0.2 rounded text-[8px] font-mono font-bold bg-zinc-100 text-zinc-800 border border-zinc-200"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                        <div className="text-[10px] text-zinc-600 font-medium">
                          {node.role}
                        </div>
                        <div className="flex items-center gap-1 text-[9px] text-zinc-400 font-mono mt-0.5">
                          <MapPin className="w-2.5 h-2.5 text-zinc-400 shrink-0" />
                          <span>{node.location}</span>
                          <span className="text-zinc-300">•</span>
                          <span>{node.handle}</span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => handleToggleConnect(node.id, e)}
                        className={`
                          shrink-0 px-3 py-1 rounded-full text-[10px] font-semibold transition-all duration-200 cursor-pointer border flex items-center gap-1
                          ${
                            isConnected
                              ? "bg-emerald-50 text-emerald-700 border-emerald-300"
                              : "bg-black text-white border-black hover:bg-zinc-800"
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
                    {/* Tooltip pointer triangle */}
                    <div className="w-2.5 h-2.5 bg-white border-r border-b border-zinc-200 rotate-45 mx-auto -mt-1.5" />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* 7. Bottom Status Bar */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-6 pb-6 pt-2 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 font-mono gap-3 border-t border-zinc-100/80">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-zinc-600">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            14 Active Members
          </span>
          <span className="hidden sm:inline text-zinc-300">•</span>
          <span className="hidden sm:inline text-zinc-500">Hover any avatar to connect</span>
        </div>
        <button
          type="button"
          onClick={runEntranceSequence}
          className="flex items-center gap-1.5 text-zinc-500 hover:text-black transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Replay Intro</span>
        </button>
      </div>
    </section>
  );
}
