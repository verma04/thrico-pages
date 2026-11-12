import React from "react";
import {
  Activity,
  Award,
  CalendarCheck,
  Check,
  Clock,
  Cpu,
  Crown,
  Database,
  Globe,
  HeartPulse,
  History,
  IndianRupee,
  Laptop,
  Layers,
  MapPin,
  MessageSquareText,
  Monitor,
  Radio,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Ticket,
  TrendingUp,
  UserRound,
  UsersRound,
  Wallet,
  Zap,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Activity,
  Award,
  CalendarCheck,
  Check,
  Clock,
  Cpu,
  Crown,
  Database,
  Globe,
  HeartPulse,
  History,
  IndianRupee,
  Laptop,
  Layers,
  MapPin,
  MessageSquareText,
  Monitor,
  Radio,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Ticket,
  TrendingUp,
  UserRound,
  UsersRound,
  Wallet,
  Zap,
};

export type Feature = { icon: string; title: string; body: string };

export function FeatureIcon({ name, className = "" }: { name: string; className?: string }) {
  const Icon = ICONS[name] || Sparkles;
  return <Icon className={className} aria-hidden="true" />;
}

/** Subtle LiveRamp-inspired left-to-right diagonal slash grid overlay. */
export function DiagonalGridOverlay({ dark = false }: { dark?: boolean }) {
  const stroke = dark ? "rgba(255,255,255,0.12)" : "rgba(37,99,235,0.08)";
  const hairline = dark ? "rgba(255,255,255,0.06)" : "rgba(225,225,223,0.7)";
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern
          id={dark ? "lr-slash-dark" : "lr-slash-light"}
          width="160"
          height="160"
          patternUnits="userSpaceOnUse"
        >
          <path d="M 0 160 L 160 0" stroke={stroke} strokeWidth="1" />
          <path d="M 160 0 L 160 160" stroke={hairline} strokeWidth="1" />
          <path d="M 0 160 L 160 160" stroke={hairline} strokeWidth="1" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill={`url(#${dark ? "lr-slash-dark" : "lr-slash-light"})`}
      />
    </svg>
  );
}

export function Eyebrow({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] ${
        dark
          ? "border-white/20 bg-white/10 text-white"
          : "border-[#e1e1df] bg-white text-blue-600"
      }`}
    >
      <span
        className={`font-black ${dark ? "text-sky-200" : "text-blue-600"}`}
        aria-hidden="true"
      >
        /
      </span>
      {children}
    </div>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  intro,
  tone = "white",
  bordered = true,
  children,
}: {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  tone?: "white" | "warm" | "blue";
  bordered?: boolean;
  children: React.ReactNode;
}) {
  const bgClass =
    tone === "blue"
      ? "bg-blue-600 text-white"
      : tone === "warm"
      ? "bg-[#f7f7f5] text-black"
      : "bg-white text-black";

  return (
    <section
      id={id}
      className={`scroll-mt-20 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 ${bgClass} ${
        bordered ? "border-b border-[#e1e1df]" : ""
      }`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <Eyebrow dark={tone === "blue"}>{eyebrow}</Eyebrow>
          <h2
            className={`mt-5 text-3xl font-bold tracking-tight sm:text-[42px] sm:leading-[1.12] ${
              tone === "blue" ? "text-white" : "text-black"
            }`}
          >
            {title}
          </h2>
          {intro && (
            <p
              className={`mt-4 text-base leading-relaxed sm:text-lg ${
                tone === "blue" ? "text-blue-100" : "text-zinc-600"
              }`}
            >
              {intro}
            </p>
          )}
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

export function FeatureCard({ item }: { item: Feature }) {
  return (
    <div className="group rounded-2xl border border-[#e1e1df] bg-white p-6 transition-colors hover:border-blue-300">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        <FeatureIcon name={item.icon} className="h-5 w-5" />
      </div>
      <h3 className="mt-5 text-base font-bold text-black">{item.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600">{item.body}</p>
    </div>
  );
}

export function FeatureGrid({
  items,
  columns = 3,
}: {
  items: Feature[];
  columns?: 2 | 3 | 4;
}) {
  const cols = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }[columns];
  return (
    <div className={`grid grid-cols-1 gap-4 sm:gap-5 ${cols}`}>
      {items.map((item) => (
        <FeatureCard key={item.title} item={item} />
      ))}
    </div>
  );
}
