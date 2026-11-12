"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Award,
  Bot,
  CalendarCheck,
  CheckCircle2,
  IndianRupee,
  MessageSquareText,
  Send,
  Sparkles,
  UsersRound,
} from "lucide-react";
import {
  COPILOT_PROMPTS,
  LIFETIME_METRICS,
  MEMBER_CATEGORIES,
  SAMPLE_MEMBERS,
  SUPERPOWERS,
  TRIAL_URL,
  type MemberCategory,
} from "./content";
import { DiagonalGridOverlay, FeatureGrid, FeatureIcon, Section } from "./shared";

type RecencyOption = {
  id: string;
  label: string;
  delta: number;
};

const RECENCY_OPTIONS: RecencyOption[] = [
  { id: "7d", label: "Active this week", delta: 30 },
  { id: "14d", label: "Within 2 weeks", delta: 15 },
  { id: "30d", label: "Within 30 days", delta: 0 },
  { id: "over30d", label: "Over 30 days ago", delta: -30 },
];

export function SuperpowersAndHealthScore() {
  const [recencyId, setRecencyId] = useState<string>("7d");
  const [recentActions, setRecentActions] = useState<number>(14);
  const [hasCommitment, setHasCommitment] = useState<boolean>(true);

  const recencyDelta = RECENCY_OPTIONS.find((r) => r.id === recencyId)?.delta ?? 30;
  const activityDelta = Math.min(20, recentActions);
  const commitmentDelta = hasCommitment ? 15 : 0;
  const rawScore = 50 + recencyDelta + activityDelta + commitmentDelta;
  const healthScore = Math.max(0, Math.min(100, rawScore));

  const tier =
    healthScore >= 80
      ? {
          label: "Thriving (80–100)",
          desc: "Super active, frequently joins events, posts regularly, and spends with your community.",
          badgeClass: "bg-blue-50 text-blue-700 border-blue-200",
          barClass: "bg-blue-600",
        }
      : healthScore >= 50
      ? {
          label: "Healthy (50–79)",
          desc: "Regularly logs in and reads content, and attends occasional events.",
          badgeClass: "bg-sky-50 text-sky-700 border-sky-200",
          barClass: "bg-sky-500",
        }
      : {
          label: "At Risk (Below 40)",
          desc: "Has stopped opening emails and hasn't visited in over 2 weeks.",
          badgeClass: "bg-orange-50 text-orange-700 border-orange-200",
          barClass: "bg-orange-500",
        };

  const featuredMember = SAMPLE_MEMBERS[0];

  return (
    <Section
      id="superpowers"
      tone="warm"
      eyebrow="The 4 Superpowers"
      title="Everything that matters, in one digital passport."
      intro="Instead of keeping event tickets, community posts, store purchases, and login history in separate places, Customer 360 brings every member signal together."
    >
      <FeatureGrid items={SUPERPOWERS} columns={4} />

      {/* LiveRamp-style Alternating Module 1: Text Left, Interactive Health Score Right */}
      <div className="mt-14 grid items-center gap-10 rounded-2xl border border-[#e1e1df] bg-white p-6 sm:p-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
            / 01 · Engagement Health Score
          </div>
          <h3 className="mt-3 text-2xl font-bold tracking-tight text-black sm:text-3xl">
            Know instantly who is thriving — and who needs attention
          </h3>
          <p className="mt-3 text-base leading-relaxed text-zinc-600">
            Just like a credit score tells a bank how financially healthy a person is, the Health Score (0 to 100) shows how actively connected each member is to your community.
          </p>

          <div className="mt-6 space-y-3 border-t border-[#e1e1df] pt-5 text-sm">
            <div className="flex items-start gap-2.5">
              <span className="font-black text-blue-600">/</span>
              <div>
                <span className="font-bold text-black">80 – 100 (Thriving):</span>{" "}
                <span className="text-zinc-600">
                  Super active, frequently joins events, posts regularly, and spends money.
                </span>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="font-black text-blue-600">/</span>
              <div>
                <span className="font-bold text-black">50 – 79 (Healthy):</span>{" "}
                <span className="text-zinc-600">
                  Regularly logs in, reads content, and attends occasional events.
                </span>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="font-black text-blue-600">/</span>
              <div>
                <span className="font-bold text-black">Below 40 (At Risk):</span>{" "}
                <span className="text-zinc-600">
                  Has stopped opening emails and hasn&apos;t visited in over 2 weeks.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Score Card */}
        <div className="rounded-2xl border border-[#e1e1df] bg-[#f7f7f5] p-5 sm:p-6">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">
              Live Health Score Simulator
            </span>
            <span className={`rounded-full border px-2.5 py-0.5 text-[11px] font-bold ${tier.badgeClass}`}>
              {tier.label}
            </span>
          </div>

          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-5xl font-black tracking-tight text-black">{healthScore}</span>
            <span className="text-base font-semibold text-zinc-400">/ 100</span>
          </div>

          <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-zinc-200">
            <div
              className={`h-full rounded-full transition-all duration-300 ${tier.barClass}`}
              style={{ width: `${healthScore}%` }}
            />
          </div>
          <p className="mt-2.5 text-xs text-zinc-600">{tier.desc}</p>

          <div className="mt-5 space-y-4 border-t border-[#e1e1df] pt-4">
            <div>
              <div className="mb-2 flex items-center justify-between text-xs font-semibold text-zinc-700">
                <span>Last visited</span>
                <span className="text-blue-600">
                  {recencyDelta >= 0 ? `+${recencyDelta}` : recencyDelta} pts
                </span>
              </div>
              <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-4">
                {RECENCY_OPTIONS.map((opt) => {
                  const active = opt.id === recencyId;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setRecencyId(opt.id)}
                      className={`rounded-lg border px-2.5 py-2 text-left text-[11px] font-semibold transition-all cursor-pointer ${
                        active
                          ? "border-black bg-black text-white"
                          : "border-[#e1e1df] bg-white text-zinc-700 hover:border-zinc-400"
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <div className="mb-1.5 flex items-center justify-between text-xs font-semibold text-zinc-700">
                <span>Recent interactions ({recentActions})</span>
                <span className="text-blue-600">+{activityDelta} pts</span>
              </div>
              <input
                type="range"
                min={0}
                max={25}
                value={recentActions}
                onChange={(e) => setRecentActions(Number(e.target.value))}
                aria-label="Recent member interactions"
                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-zinc-300 accent-blue-600"
              />
            </div>

            <div className="flex items-center justify-between rounded-xl border border-[#e1e1df] bg-white px-3.5 py-2.5">
              <span className="text-xs font-semibold text-zinc-800">
                Attended event or purchased
              </span>
              <button
                type="button"
                onClick={() => setHasCommitment((v) => !v)}
                className={`rounded-full px-3 py-1 text-xs font-bold transition-all cursor-pointer ${
                  hasCommitment
                    ? "bg-black text-white hover:bg-zinc-800"
                    : "bg-zinc-200 text-zinc-700 hover:bg-zinc-300"
                }`}
              >
                {hasCommitment ? "+15 pts Active" : "Add +15 pts"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* LiveRamp-style Alternating Module 2: Visual Left, Text Right */}
      <div className="mt-8 grid items-center gap-10 rounded-2xl border border-[#e1e1df] bg-white p-6 sm:p-10 lg:grid-cols-2 lg:gap-14">
        {/* Visual Left */}
        <div className="order-2 rounded-2xl border border-[#e1e1df] bg-[#f7f7f5] p-5 sm:p-6 lg:order-1">
          <div className="text-xs font-bold uppercase tracking-wider text-zinc-500">
            Unified Lifetime Impact · {featuredMember.name}
          </div>

          <div className="mt-4 grid grid-cols-5 divide-x divide-[#e1e1df] rounded-xl border border-[#e1e1df] bg-white text-center">
            {[
              { icon: IndianRupee, label: "Spend", value: featuredMember.totalSpend },
              { icon: CalendarCheck, label: "Events", value: String(featuredMember.eventsAttended) },
              { icon: UsersRound, label: "Groups", value: String(featuredMember.communitiesJoined) },
              { icon: MessageSquareText, label: "Posts", value: String(featuredMember.contentCreated) },
              { icon: Award, label: "Points", value: featuredMember.pointsEarned },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="px-1.5 py-3">
                <Icon className="mx-auto h-3.5 w-3.5 text-blue-600" />
                <div className="mt-1 truncate text-xs font-extrabold text-black sm:text-sm">
                  {value}
                </div>
                <div className="text-[10px] text-zinc-500">{label}</div>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-[#e1e1df] bg-white p-4">
            <div className="mb-3 text-[11px] font-bold uppercase tracking-wider text-zinc-400">
              Real-Time Activity Timeline
            </div>
            <div className="space-y-2.5">
              {featuredMember.timeline.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center justify-between gap-3 border-b border-zinc-100 pb-2 text-xs last:border-none last:pb-0"
                >
                  <div className="flex min-w-0 items-center gap-2 text-zinc-800">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                    <span className="truncate font-medium">{item.text}</span>
                  </div>
                  <span className="shrink-0 text-[11px] text-zinc-400">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Text Right */}
        <div className="order-1 lg:order-2">
          <div className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
            / 02 · Lifetime Impact &amp; Timeline
          </div>
          <h3 className="mt-3 text-2xl font-bold tracking-tight text-black sm:text-3xl">
            Every rupee, event, post, and login in one chronological feed
          </h3>
          <p className="mt-3 text-base leading-relaxed text-zinc-600">
            See every member&apos;s exact lifetime contribution alongside a live feed of everything they do across your web portal and mobile apps.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 border-t border-[#e1e1df] pt-5 sm:grid-cols-2">
            {LIFETIME_METRICS.map((m) => (
              <div key={m.label} className="flex items-start gap-2.5">
                <FeatureIcon name={m.icon} className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                <div>
                  <div className="text-xs font-bold text-black">{m.label}</div>
                  <div className="text-xs text-zinc-500">{m.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

const CATEGORY_TONE: Record<MemberCategory["tone"], string> = {
  amber: "bg-amber-50 text-amber-800 border-amber-200",
  blue: "bg-blue-50 text-blue-800 border-blue-200",
  indigo: "bg-indigo-50 text-indigo-800 border-indigo-200",
  sky: "bg-sky-50 text-sky-800 border-sky-200",
  orange: "bg-orange-50 text-orange-800 border-orange-200",
  zinc: "bg-zinc-100 text-zinc-700 border-zinc-300",
  rose: "bg-rose-50 text-rose-800 border-rose-200",
};

export function RfmSegmentsSection() {
  const [selectedId, setSelectedId] = useState<string>(MEMBER_CATEGORIES[0].id);
  const active =
    MEMBER_CATEGORIES.find((s) => s.id === selectedId) ?? MEMBER_CATEGORIES[0];

  return (
    <Section
      id="segments"
      eyebrow="Smart Member Categories"
      title="7 easy-to-understand member segments."
      intro="Customer 360 automatically organizes every member by how recently they visited, how often they engage, and how much they spend — paired with the exact next step to take."
    >
      {/* Interactive Category Pills */}
      <div className="flex flex-wrap gap-2">
        {MEMBER_CATEGORIES.map((seg) => {
          const isSelected = seg.id === active.id;
          return (
            <button
              key={seg.id}
              type="button"
              onClick={() => setSelectedId(seg.id)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-all cursor-pointer sm:text-sm ${
                isSelected
                  ? "border-black bg-black text-white"
                  : "border-[#e1e1df] bg-white text-zinc-700 hover:border-black"
              }`}
            >
              <span>{seg.emoji}</span>
              <span>{seg.label}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Category Spotlight */}
      <div className="mt-6 rounded-2xl border border-[#e1e1df] bg-[#f7f7f5] p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-2xl">{active.emoji}</span>
              <h3 className="text-2xl font-bold text-black">{active.label}</h3>
              <span
                className={`rounded-full border px-2.5 py-0.5 text-[11px] font-bold ${CATEGORY_TONE[active.tone]}`}
              >
                Smart Segment
              </span>
            </div>
            <p className="mt-3 text-base text-zinc-600">{active.whoTheyAre}</p>
            <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50 p-4">
              <div className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
                What You Should Do
              </div>
              <p className="mt-1 text-sm font-semibold text-black">{active.action}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 divide-x divide-[#e1e1df] rounded-xl border border-[#e1e1df] bg-white">
            {[
              { label: "Recency", value: active.activityWindow },
              { label: "Frequency", value: active.engagementLevel },
              { label: "Spend", value: active.spendProfile },
            ].map((item) => (
              <div key={item.label} className="p-4">
                <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                  {item.label}
                </div>
                <div className="mt-2 text-sm font-bold text-black">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full 7-Category Executive Matrix */}
      <div className="mt-6 overflow-hidden rounded-2xl border border-[#e1e1df] bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[680px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[#e1e1df] bg-[#f7f7f5] text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                <th className="px-5 py-3.5">Category</th>
                <th className="px-4 py-3.5">Who They Are</th>
                <th className="px-5 py-3.5">What You Should Do</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e1e1df]">
              {MEMBER_CATEGORIES.map((seg) => {
                const isSelected = seg.id === active.id;
                return (
                  <tr
                    key={seg.id}
                    onClick={() => setSelectedId(seg.id)}
                    className={`cursor-pointer transition-colors ${
                      isSelected ? "bg-blue-50/70" : "hover:bg-[#f7f7f5]"
                    }`}
                  >
                    <td className="whitespace-nowrap px-5 py-3.5 font-semibold text-black">
                      <span className="mr-2">{seg.emoji}</span>
                      {seg.label}
                    </td>
                    <td className="px-4 py-3.5 text-xs text-zinc-600 sm:text-sm">
                      {seg.whoTheyAre}
                    </td>
                    <td className="px-5 py-3.5 text-xs text-zinc-700 sm:text-sm">
                      {seg.action}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
}

export function AiCopilotSection() {
  const [selectedPromptId, setSelectedPromptId] = useState<string>(COPILOT_PROMPTS[0].id);
  const current =
    COPILOT_PROMPTS.find((p) => p.id === selectedPromptId) ?? COPILOT_PROMPTS[0];

  return (
    <Section
      id="ai-copilot"
      eyebrow="AI Assistant for Admins"
      title="Ask in plain English. Get instant clarity."
      intro="Entity admins don't need complicated dashboards or query tools. Ask the AI Copilot a simple question and receive visual cards, health metrics, and actionable recommendations."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left: Executive Member AI Summary Card */}
        <div className="flex flex-col justify-between rounded-2xl border border-[#e1e1df] bg-white p-6 sm:p-8">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                <Sparkles className="h-3.5 w-3.5" /> Instant Member Brief
              </span>
              <span className="rounded-full bg-black px-3 py-1 text-[11px] font-semibold text-white">
                Best Channel: VIP Direct Call
              </span>
            </div>

            <h3 className="mt-5 text-xl font-bold text-black">
              👑 VIP Community Champion &amp; Power Spender
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              Pankaj has attended 14 flagship events, shared 48 posts and comments across 6 communities, and contributed ₹18,450 in lifetime spend with a 94/100 Health Score.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-4">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-800">
                  <CheckCircle2 className="h-3.5 w-3.5" /> Key Strengths
                </div>
                <ul className="mt-2.5 space-y-1.5 text-xs text-zinc-700">
                  <li>• Active just 2 hours ago on web and mobile</li>
                  <li>• Consistent early-bird ticket buyer (₹4,999+)</li>
                  <li>• Engaged connector across 6 communities</li>
                </ul>
              </div>

              <div className="rounded-xl border border-amber-100 bg-amber-50/50 p-4">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-800">
                  <AlertTriangle className="h-3.5 w-3.5" /> Watchouts
                </div>
                <ul className="mt-2.5 space-y-1.5 text-xs text-zinc-700">
                  <li>• No disengagement risk detected</li>
                  <li>• Follow up within 14 days after Tech Summit</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-[#e1e1df] bg-[#f7f7f5] p-4">
              <div className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                Recommended Actions
              </div>
              <ul className="mt-2 space-y-1.5 text-xs font-semibold text-black">
                <li>1. Invite to the 2026 Community Advisory Board</li>
                <li>2. Award VIP Ambassador badge and speaker priority</li>
              </ul>
            </div>
          </div>

          <p className="mt-5 border-t border-[#e1e1df] pt-4 text-xs text-zinc-500">
            Every summary recommends the right outreach channel —{" "}
            <span className="font-semibold text-black">VIP Direct Call</span>,{" "}
            <span className="font-semibold text-black">Email</span>, or{" "}
            <span className="font-semibold text-black">In-App Notification</span> — tailored to the member&apos;s profile.
          </p>
        </div>

        {/* Right: Interactive Plain-English AI Copilot Console */}
        <div className="flex flex-col justify-between rounded-2xl border border-[#e1e1df] bg-[#f7f7f5] p-6 sm:p-8">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                <Bot className="h-4 w-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-black">AI Copilot</div>
                <div className="text-[11px] text-zinc-500">
                  Click any question below to preview the instant answer
                </div>
              </div>
            </div>

            {/* Prompt Selector Buttons */}
            <div className="mt-5 space-y-2">
              {COPILOT_PROMPTS.map((item) => {
                const active = item.id === current.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedPromptId(item.id)}
                    className={`flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left text-xs font-semibold transition-all cursor-pointer ${
                      active
                        ? "border-black bg-black text-white"
                        : "border-[#e1e1df] bg-white text-zinc-700 hover:border-black"
                    }`}
                  >
                    <span className="truncate">&ldquo;{item.prompt}&rdquo;</span>
                    <Send
                      className={`h-3.5 w-3.5 shrink-0 ${
                        active ? "text-blue-400" : "text-zinc-400"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Live Copilot Response Card */}
            <div className="mt-5 rounded-2xl border border-[#e1e1df] bg-white p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-[10px] font-bold text-blue-700">
                  {current.badge}
                </span>
              </div>
              <h4 className="mt-3 text-base font-bold text-black">{current.headline}</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-zinc-600">{current.summary}</p>

              <div className="mt-4 grid grid-cols-3 divide-x divide-[#e1e1df] rounded-xl border border-[#e1e1df] bg-[#f7f7f5]">
                {current.metrics.map((m) => (
                  <div key={m.label} className="p-3">
                    <div className="text-[10px] text-zinc-500">{m.label}</div>
                    <div className="mt-1 text-xs font-bold text-black sm:text-sm">{m.value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50 px-3.5 py-2.5 text-xs text-zinc-800">
                <span className="font-bold text-blue-700">Recommended Action: </span>
                {current.recommendation}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function BlueBrandBanner() {
  return (
    <section className="relative overflow-hidden border-b border-[#e1e1df] bg-blue-600 px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8">
      <DiagonalGridOverlay dark />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-white">
              <span>/</span> Customer 360 Impact
            </div>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-5xl sm:leading-[1.1]">
              One digital passport for every member, student, or alumni.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-blue-100 sm:text-lg">
              Spot churn early, celebrate your top advocates, and grow event ticket sales — without spreadsheets or guesswork.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#demo"
                className="inline-flex items-center gap-2 rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-zinc-800 active:scale-95"
              >
                Book a Demo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={TRIAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
              >
                Start Free Trial
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 divide-y divide-white/20 rounded-2xl border border-white/20 bg-blue-700/50 backdrop-blur">
            {[
              { stat: "0–100", label: "Live Engagement Health Score on every member" },
              { stat: "7 Tiers", label: "Automatic RFM segments with ready-to-run actions" },
              { stat: "360°", label: "Unified spend, events, posts, points & timeline" },
            ].map((item) => (
              <div key={item.stat} className="flex items-center gap-5 p-5 sm:p-6">
                <div className="w-24 shrink-0 text-2xl font-black text-white sm:text-3xl">
                  {item.stat}
                </div>
                <div className="text-sm text-blue-100">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
