"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  CalendarCheck,
  Check,
  IndianRupee,
  MessageSquareText,
  Radio,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { HERO, SAMPLE_MEMBERS, TRIAL_URL, type SampleMember } from "./content";
import { DiagonalGridOverlay, Eyebrow } from "./shared";

function HealthRing({ score, status }: { score: number; status: SampleMember["healthStatus"] }) {
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  const strokeColor =
    status === "Thriving"
      ? "#2563eb"
      : status === "Healthy"
      ? "#0ea5e9"
      : "#f97316";

  const pillStyles =
    status === "Thriving"
      ? "bg-blue-50 text-blue-700 border-blue-200"
      : status === "Healthy"
      ? "bg-sky-50 text-sky-700 border-sky-200"
      : "bg-orange-50 text-orange-700 border-orange-200";

  return (
    <div className="flex items-center gap-2.5">
      <div className="relative flex h-14 w-14 items-center justify-center">
        <svg className="h-14 w-14 -rotate-90" viewBox="0 0 56 56" aria-hidden="true">
          <circle
            cx="28"
            cy="28"
            r={radius}
            fill="none"
            stroke="#e1e1df"
            strokeWidth="4.5"
          />
          <circle
            cx="28"
            cy="28"
            r={radius}
            fill="none"
            stroke={strokeColor}
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-700 ease-out"
          />
        </svg>
        <span className="absolute text-xs font-black text-black">{score}</span>
      </div>
      <span
        className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-bold ${pillStyles}`}
      >
        {status}
      </span>
    </div>
  );
}

const SIGNAL_NODES = [
  { label: "Community Posts", x: 14 },
  { label: "Event Tickets", x: 38 },
  { label: "Store & Perks", x: 62 },
  { label: "Mobile App", x: 86 },
];

function SignalConvergenceGraphic() {
  return (
    <div className="mb-2 hidden sm:block" aria-hidden="true">
      <div className="grid grid-cols-4 gap-2 text-center">
        {SIGNAL_NODES.map((n) => (
          <div
            key={n.label}
            className="rounded-lg border border-[#e1e1df] bg-white/90 px-2 py-1 text-[10px] font-semibold text-zinc-600 shadow-2xs"
          >
            {n.label}
          </div>
        ))}
      </div>
      <svg className="h-7 w-full" viewBox="0 0 400 28" preserveAspectRatio="none">
        {SIGNAL_NODES.map((n) => (
          <g key={n.label}>
            <path
              d={`M ${n.x * 4} 0 Q ${n.x * 4} 16 200 28`}
              fill="none"
              stroke="#dbeafe"
              strokeWidth="1.5"
            />
            <path
              d={`M ${n.x * 4} 0 Q ${n.x * 4} 16 200 28`}
              fill="none"
              stroke="#2563eb"
              strokeWidth="1.5"
              className="animate-pulse-travel"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}

function DigitalPassportShowcase() {
  const [selectedId, setSelectedId] = useState<string>(SAMPLE_MEMBERS[0].id);
  const [sentMap, setSentMap] = useState<Record<string, boolean>>({});
  const member = SAMPLE_MEMBERS.find((m) => m.id === selectedId) ?? SAMPLE_MEMBERS[0];
  const isSent = Boolean(sentMap[member.id]);

  const barColor =
    member.healthScore >= 80
      ? "bg-blue-600"
      : member.healthScore >= 50
      ? "bg-sky-500"
      : "bg-orange-500";

  return (
    <div className="relative mx-auto w-full max-w-xl">
      <SignalConvergenceGraphic />

      {/* LiveRamp-inspired architectural frame */}
      <div className="relative rounded-2xl border border-[#e1e1df] bg-white p-4 shadow-[0_24px_70px_rgba(37,99,235,0.08)] sm:p-5">
        {/* Member Switcher Row */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-[#e1e1df] pb-3.5">
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-zinc-500">
            / Digital Passport Preview
          </span>
          <div className="flex flex-wrap gap-1.5">
            {SAMPLE_MEMBERS.map((m) => {
              const active = m.id === member.id;
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setSelectedId(m.id)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-all duration-200 cursor-pointer active:scale-95 ${
                    active
                      ? "bg-black text-white shadow-sm"
                      : "bg-[#f7f7f5] text-zinc-700 hover:bg-zinc-200"
                  }`}
                >
                  <span>{m.name.split(" ")[0]}</span>
                  <span className={active ? "text-blue-300" : "text-zinc-500"}>
                    {m.healthScore}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Profile Header */}
        <div key={member.id} className="animate-fade-up-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-3.5">
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-sm font-extrabold text-white transition-transform duration-300 hover:scale-105">
                {member.initials}
                {member.isCurrentlyOnline && (
                  <span
                    title="Active now"
                    className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white"
                  >
                    <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-blue-600" />
                  </span>
                )}
              </div>

              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-base font-bold text-black">{member.name}</h2>
                  <span className="rounded-full border border-[#e1e1df] bg-[#f7f7f5] px-2.5 py-0.5 text-[11px] font-semibold text-zinc-800">
                    {member.segmentLabel}
                  </span>
                </div>
                <div className="mt-0.5 flex flex-wrap items-center gap-2 text-xs text-zinc-500">
                  <span>{member.role}</span>
                  <span>·</span>
                  <span>{member.location}</span>
                  {member.isCurrentlyOnline && (
                    <span className="inline-flex items-center gap-1 font-semibold text-blue-600">
                      <Radio className="h-3 w-3 animate-pulse" /> Active now
                    </span>
                  )}
                </div>
              </div>
            </div>

            <HealthRing score={member.healthScore} status={member.healthStatus} />
          </div>

          {/* Health Score Progress */}
          <div className="mt-4">
            <div className="flex items-center justify-between text-[11px] font-semibold text-zinc-500">
              <span>Engagement Health Score</span>
              <span className="text-black">{member.healthScore} / 100</span>
            </div>
            <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-[#f7f7f5]">
              <div
                className={`h-full rounded-full transition-all duration-700 ease-out ${barColor}`}
                style={{ width: `${member.healthScore}%` }}
              />
            </div>
          </div>

          {/* Unified Lifetime Impact */}
          <div className="mt-5 grid grid-cols-5 divide-x divide-[#e1e1df] rounded-xl border border-[#e1e1df] bg-[#f7f7f5] text-center">
            {[
              { icon: IndianRupee, label: "Spend", value: member.totalSpend },
              { icon: CalendarCheck, label: "Events", value: String(member.eventsAttended) },
              { icon: UsersRound, label: "Groups", value: String(member.communitiesJoined) },
              { icon: MessageSquareText, label: "Posts", value: String(member.contentCreated) },
              { icon: Award, label: "Points", value: member.pointsEarned },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="group/tile px-1.5 py-3 transition-colors hover:bg-white"
              >
                <Icon className="mx-auto h-3.5 w-3.5 text-blue-600 transition-transform duration-200 group-hover/tile:-translate-y-0.5 group-hover/tile:scale-110" />
                <div className="mt-1 truncate text-xs font-extrabold text-black transition-colors group-hover/tile:text-blue-600 sm:text-sm">
                  {value}
                </div>
                <div className="text-[10px] text-zinc-500">{label}</div>
              </div>
            ))}
          </div>

          {/* Real-Time Activity Timeline */}
          <div className="mt-5 border-t border-[#e1e1df] pt-4">
            <div className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-zinc-400">
              Real-Time Activity Timeline
            </div>
            <div className="space-y-2">
              {member.timeline.map((item) => (
                <div
                  key={item.text}
                  className="group/row flex items-center justify-between gap-3 rounded-lg px-2 py-1 text-xs text-zinc-700 transition-colors hover:bg-[#f7f7f5]"
                >
                  <div className="flex min-w-0 items-center gap-2">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600 transition-transform group-hover/row:scale-150" />
                    <span className="truncate font-medium">{item.text}</span>
                  </div>
                  <span className="shrink-0 text-[11px] text-zinc-400">{item.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Embedded AI Summary Strip with 1-Click Outreach Trigger */}
          <div className="mt-4 rounded-xl bg-blue-950 p-4 text-white">
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
                <Sparkles className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-bold text-white">
                    {member.aiSummary.personaTitle}
                  </span>
                  <span className="rounded-full bg-blue-600/40 px-2.5 py-0.5 text-[10px] font-semibold text-blue-200">
                    {member.aiSummary.suggestedOutreachChannel}
                  </span>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-blue-100/90">
                  {member.aiSummary.summary}
                </p>
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-lg bg-white/10 px-3 py-2 text-[11px] text-white">
                  <span className="min-w-0 flex-1">
                    <span className="font-bold text-sky-300">Next step: </span>
                    {member.aiSummary.recommendedAction}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      setSentMap((prev) => ({ ...prev, [member.id]: !prev[member.id] }))
                    }
                    className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold transition-all cursor-pointer active:scale-95 ${
                      isSent
                        ? "bg-blue-500 text-white"
                        : "bg-black text-white hover:bg-zinc-800"
                    }`}
                  >
                    {isSent ? (
                      <>
                        <Check className="h-3 w-3" /> Queued
                      </>
                    ) : (
                      "Trigger Action"
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[#e1e1df] bg-white px-4 pb-20 pt-14 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8">
      <DiagonalGridOverlay />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div>
          <Eyebrow>{HERO.eyebrow}</Eyebrow>
          <h1 className="mt-6 text-4xl font-bold leading-[1.06] tracking-tight text-black sm:text-[56px]">
            {HERO.title[0]}
            <br />
            <span className="text-blue-600">{HERO.title[1]}</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-600 sm:text-lg">
            {HERO.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#demo"
              className="group inline-flex items-center gap-2 rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-zinc-800 active:scale-95"
            >
              Book a Demo{" "}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              href={TRIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-[#e1e1df] bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all hover:border-black active:scale-95"
            >
              Start Free Trial
            </Link>
          </div>

          {/* LiveRamp-style 3-column architectural hairline metrics */}
          <div className="mt-10 grid grid-cols-3 divide-x divide-[#e1e1df] border-t border-[#e1e1df] pt-6">
            <div className="pr-4">
              <div className="text-xl font-bold text-black sm:text-2xl">0–100</div>
              <div className="mt-0.5 text-xs text-zinc-500">Health Score</div>
            </div>
            <div className="px-4">
              <div className="text-xl font-bold text-blue-600 sm:text-2xl">7 Tiers</div>
              <div className="mt-0.5 text-xs text-zinc-500">Smart Categories</div>
            </div>
            <div className="pl-4">
              <div className="text-xl font-bold text-black sm:text-2xl">360°</div>
              <div className="mt-0.5 text-xs text-zinc-500">Lifetime Profile</div>
            </div>
          </div>
        </div>

        <DigitalPassportShowcase />
      </div>
    </section>
  );
}
