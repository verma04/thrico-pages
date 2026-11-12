import Link from "next/link";
import MigrationBentoGrid from "@/components/migration-bento-grid";
import ClayFooter from "@/components/clay-footer";

export const metadata = {
  title: "Migration & Integrations | Thrico",
  description: "Seamlessly migrate from Discord, Slack, Circle, Discourse, WhatsApp and connect with 500+ apps.",
};

export default function MigrationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white antialiased selection:bg-emerald-500 selection:text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-black/80 border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-600 via-teal-500 to-cyan-400 flex items-center justify-center text-white font-bold text-lg shadow-sm">
              T
            </div>
            <span className="font-extrabold text-xl tracking-tight text-white">
              Thrico
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/migration" className="text-emerald-400 font-semibold">
              Migration & Integrations
            </Link>
            <Link href="/#gamification" className="hover:text-white transition-colors">
              Gamification
            </Link>
            <Link href="/#pricing" className="hover:text-white transition-colors">
              Pricing
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="#login"
              className="hidden sm:inline-flex px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="#start-migration"
              className="px-4 py-2 rounded-full text-sm font-medium bg-white text-black hover:bg-zinc-200 transition-all shadow-sm"
            >
              Start Migration
            </Link>
          </div>
        </div>
      </header>

      {/* Main Migration & Integration Showcase */}
      <main className="flex-1">
        {/* 6-Card Interactive Bento Grid */}
        <MigrationBentoGrid />

        {/* 1-Click Migration Steps */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center border-t border-zinc-900">
          <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            How 1-Click Migration Works
          </h3>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mb-12">
            Automated, zero-downtime transition for your entire community history, members, roles, and media.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              {
                step: "01",
                title: "Authenticate Source",
                desc: "Connect Discord, Slack, Circle, or Discourse bot with read permissions.",
              },
              {
                step: "02",
                title: "Map Roles & Channels",
                desc: "Preview and customize channel hierarchy and role mapping in real-time.",
              },
              {
                step: "03",
                title: "Live Sync & Switch",
                desc: "Background sync runs without downtime. Members log in with 1 click.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-emerald-500/40 transition-colors"
              >
                <div className="text-emerald-400 font-mono text-sm font-bold mb-2">
                  {item.step}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer with Pre-Footer & Radiant Gradient */}
      <ClayFooter
        showPreFooter={true}
        preFooterTitle="Ready to migrate your community?"
        preFooterSubtitle="Talk to our migration team."
        primaryCtaText="Start Free Migration"
        primaryCtaLink="#start-migration"
        secondaryCtaText="Book Migration Demo"
        secondaryCtaLink="#demo"
        brandBottomName="THRIVING COMMUNITIES"
      />
    </div>
  );
}
