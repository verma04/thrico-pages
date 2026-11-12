import Link from "next/link";
import { TRIAL_URL } from "./content";

const NAV = [
  { href: "#superpowers", label: "4 Superpowers" },
  { href: "#segments", label: "Member Categories" },
  { href: "#use-cases", label: "Use Cases" },
  { href: "#ai-copilot", label: "AI Assistant" },
  { href: "#digital-footprint", label: "Activity & Reach" },
  { href: "#faq", label: "FAQ" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e1e1df] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-base font-black text-white">
            /
          </div>
          <span className="text-xl font-extrabold tracking-tight text-black">Thrico</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-zinc-600 lg:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-blue-600">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#demo"
            className="hidden px-3 py-2 text-sm font-semibold text-black transition-colors hover:text-blue-600 sm:inline-flex"
          >
            Book a Demo
          </a>
          <Link
            href={TRIAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-zinc-800"
          >
            Start Free Trial
          </Link>
        </div>
      </div>
    </header>
  );
}
