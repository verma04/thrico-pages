"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

interface MemberCardData {
  id: string;
  name: string;
  badges: string[];
  handle: string;
  role: string;
  location?: string;
  languages?: string;
  avatarUrl: string;
  thumbnailUrl?: string;
  offsetClass: string;
  zIndex: number;
}

export default function CommunityMemberDirectory() {
  const [activeCardId, setActiveCardId] = useState<string>("card-4");
  const [connectedIds, setConnectedIds] = useState<Record<string, boolean>>({});

  const members: MemberCardData[] = [
    {
      id: "card-1",
      name: "Jonathan Morin",
      badges: ["THRICO"],
      handle: "@Jomor",
      role: "Designer & Founder, Jomor Community",
      avatarUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&q=80",
      offsetClass: "translate-x-16 -translate-y-12 sm:translate-x-24 sm:-translate-y-16",
      zIndex: 10,
    },
    {
      id: "card-2",
      name: "Yann Kubacki",
      badges: ["THRICO"],
      handle: "@yannkubacki",
      role: "Senior Community Architect, Good City",
      avatarUrl:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=300&q=80",
      offsetClass: "translate-x-10 -translate-y-6 sm:translate-x-16 sm:-translate-y-8",
      zIndex: 20,
    },
    {
      id: "card-3",
      name: "Alex Van Holtz",
      badges: ["THRICO", "PRO"],
      handle: "@alex",
      role: "Principal Community Lead, Feathr",
      avatarUrl:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=300&q=80",
      offsetClass: "translate-x-4 0 sm:translate-x-8 sm:translate-y-0",
      zIndex: 30,
    },
    {
      id: "card-4",
      name: "Mathias Adolfsson",
      badges: ["THRICO", "PRO"],
      handle: "@MathiasAdo",
      role: "Independent Community Builder & Creator",
      location: "Linköping, SE",
      languages: "English",
      avatarUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=300&q=80",
      offsetClass: "translate-x-0 translate-y-6 sm:translate-x-0 sm:translate-y-8",
      zIndex: 40,
    },
  ];

  const handleToggleConnect = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setConnectedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="relative w-full py-24 sm:py-32 bg-zinc-950 text-white overflow-hidden selection:bg-zinc-800 selection:text-white">
      {/* Background ambient lighting */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle at 65% 50%, rgba(255, 255, 255, 0.15) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Copy */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400 mb-6 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>COMMUNITY DIRECTORY</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] mb-6">
              Find the<br />
              right people.
            </h2>

            <p className="text-base sm:text-lg text-zinc-400 max-w-md leading-relaxed mb-8">
              Explore the directory and connect with people who share your vision,
              from future collaborators and community hosts to members whose ideas inspire you.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="#directory"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all duration-200 shadow-sm hover:scale-[1.02] active:scale-95 group"
              >
                <span>Browse Directory</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                href="#join"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-zinc-900 text-zinc-300 font-semibold text-sm hover:text-white hover:bg-zinc-850 border border-zinc-800 transition-all duration-200 active:scale-95"
              >
                <span>Create Your Card</span>
              </Link>
            </div>

            {/* Quick stats counter */}
            <div className="grid grid-cols-3 gap-6 pt-10 mt-10 border-t border-zinc-900 font-mono text-xs">
              <div>
                <div className="text-xl font-bold text-white mb-0.5">8.4k+</div>
                <div className="text-zinc-500 text-[11px]">Members</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white mb-0.5">140+</div>
                <div className="text-zinc-500 text-[11px]">Global Circles</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white mb-0.5">99.8%</div>
                <div className="text-zinc-500 text-[11px]">Verified</div>
              </div>
            </div>
          </div>

          {/* Right Column: Cascading Stacked Cards (Matching Reference Screenshot) */}
          <div className="lg:col-span-7 relative flex items-center justify-center lg:justify-end min-h-[440px] sm:min-h-[480px]">
            <div className="relative w-full max-w-[560px] flex flex-col items-center">
              {members.map((member) => {
                const isSelected = activeCardId === member.id;
                const isConnected = !!connectedIds[member.id];

                return (
                  <div
                    key={member.id}
                    onClick={() => setActiveCardId(member.id)}
                    onMouseEnter={() => setActiveCardId(member.id)}
                    style={{
                      zIndex: isSelected ? 50 : member.zIndex,
                    }}
                    className={`
                      relative w-full cursor-pointer transition-all duration-300 ease-out
                      ${member.offsetClass}
                      ${isSelected ? "scale-[1.03] shadow-2xl -translate-y-2" : "opacity-90 hover:opacity-100"}
                    `}
                  >
                    <div
                      className={`
                        p-3.5 sm:p-4 rounded-2xl sm:rounded-3xl border transition-all duration-300 backdrop-blur-md
                        ${
                          isSelected
                            ? "bg-zinc-900/95 border-zinc-700 shadow-2xl shadow-black/80"
                            : "bg-zinc-900/80 border-zinc-800/90 hover:border-zinc-700"
                        }
                      `}
                    >
                      <div className="flex items-center gap-3.5 sm:gap-4">
                        {/* Avatar */}
                        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl overflow-hidden bg-zinc-800 shrink-0 border border-zinc-700/60">
                          <Image
                            src={member.avatarUrl}
                            alt={member.name}
                            fill
                            sizes="60px"
                            className="object-cover"
                          />
                        </div>

                        {/* Middle Info Column */}
                        <div className="flex-1 min-w-0">
                          {/* Row 1: Name, Badges, Handle */}
                          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap mb-1">
                            <span className="text-sm sm:text-base font-bold text-white tracking-tight leading-tight truncate">
                              {member.name}
                            </span>

                            {/* Badges */}
                            {member.badges.map((badge, idx) => (
                              <span
                                key={idx}
                                className={`
                                  px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] font-mono font-bold tracking-wider uppercase
                                  ${
                                    badge === "PRO"
                                      ? "bg-zinc-800 text-zinc-300 border border-zinc-700"
                                      : "bg-white/10 text-white border border-white/20"
                                  }
                                `}
                              >
                                {badge}
                              </span>
                            ))}

                            <span className="text-xs text-zinc-400 font-mono">
                              {member.handle}
                            </span>
                          </div>

                          {/* Row 2: Role / Headline */}
                          <div className="text-xs sm:text-sm text-zinc-400 truncate leading-snug">
                            {member.role}
                          </div>

                          {/* Row 3: Location / Languages (if provided) */}
                          {member.location && (
                            <div className="flex items-center gap-1.5 text-[11px] text-zinc-400 font-mono mt-1">
                              <MapPin className="w-3 h-3 text-zinc-400 shrink-0" />
                              <span>{member.location}</span>
                              {member.languages && (
                                <>
                                  <span className="text-zinc-600">•</span>
                                  <span>{member.languages}</span>
                                </>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Right Thumbnail Work/Profile Preview */}
                        {member.thumbnailUrl && (
                          <div className="relative w-16 sm:w-24 h-12 sm:h-16 rounded-lg sm:rounded-xl overflow-hidden bg-zinc-800 shrink-0 border border-zinc-700/80 hidden xs:block">
                            <Image
                              src={member.thumbnailUrl}
                              alt={`${member.name}'s preview`}
                              fill
                              sizes="100px"
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          </div>
                        )}

                        {/* Connect Button */}
                        <button
                          type="button"
                          onClick={(e) => handleToggleConnect(member.id, e)}
                          className={`
                            shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer border
                            ${
                              isConnected
                                ? "bg-emerald-950/80 text-emerald-300 border-emerald-500/50"
                                : "bg-white text-black border-white hover:bg-zinc-200"
                            }
                          `}
                        >
                          {isConnected ? "Connected ✓" : "Connect"}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
