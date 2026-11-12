import { ChevronDown, Globe, Laptop, MapPin, Monitor, Radio, Smartphone } from "lucide-react";
import { BUSINESS_USE_CASES, DIGITAL_FOOTPRINT, FAQS } from "./content";
import { FeatureIcon, Section } from "./shared";

export function BusinessUseCases() {
  return (
    <Section
      id="use-cases"
      tone="warm"
      eyebrow="Real-World Business Use Cases"
      title="Turn member signals into retention and revenue."
      intro="Customer 360 helps community teams act early — keeping members engaged, recognizing top advocates, and filling more event seats."
    >
      <div className="grid grid-cols-1 divide-y divide-[#e1e1df] overflow-hidden rounded-2xl border border-[#e1e1df] bg-white lg:grid-cols-3 lg:divide-x lg:divide-y-0">
        {BUSINESS_USE_CASES.map((item) => (
          <div key={item.title} className="flex flex-col justify-between p-6 sm:p-8">
            <div>
              <div className="flex items-center justify-between gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <FeatureIcon name={item.icon} className="h-5 w-5" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                  {item.tag}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-bold text-black">{item.title}</h3>

              <div className="mt-4 rounded-xl border border-[#e1e1df] bg-[#f7f7f5] p-4">
                <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                  The Problem
                </div>
                <p className="mt-1 text-sm leading-relaxed text-zinc-600">{item.problem}</p>
              </div>
            </div>

            <div className="mt-3 rounded-xl border border-blue-200 bg-blue-50/70 p-4">
              <div className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
                The Solution
              </div>
              <p className="mt-1 text-sm leading-relaxed text-black">{item.solution}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function DigitalFootprintSection() {
  return (
    <Section
      id="digital-footprint"
      tone="warm"
      eyebrow="Digital Activity & Reach"
      title="See how members discover and browse your community."
      intro="Understand every member's live presence, the campaigns that brought them in, the devices they prefer, and the pages they visit most."
    >
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {/* Card 1: Live Presence & Acquisition */}
        <div className="rounded-2xl border border-[#e1e1df] bg-white p-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              Visits &amp; Acquisition
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-[11px] font-bold text-blue-700">
              <Radio className="h-3 w-3 animate-pulse" /> Active now
            </span>
          </div>

          <div className="mt-5 grid grid-cols-2 divide-x divide-[#e1e1df] rounded-xl border border-[#e1e1df] bg-[#f7f7f5]">
            <div className="p-4">
              <div className="text-2xl font-black text-black">52</div>
              <div className="mt-0.5 text-xs text-zinc-500">Total web &amp; app visits</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-black text-black">184</div>
              <div className="mt-0.5 text-xs text-zinc-500">Total pages viewed</div>
            </div>
          </div>

          <div className="mt-5 rounded-xl border border-[#e1e1df] bg-[#f7f7f5] p-4">
            <div className="flex items-center gap-1.5 text-xs font-bold text-black">
              <Globe className="h-3.5 w-3.5 text-blue-600" />
              How This Member Found You
            </div>
            <dl className="mt-3 space-y-2 text-xs">
              {[
                { k: "First Visit Channel", v: "Organic Search" },
                { k: "Latest Campaign", v: "Annual Tech Summit 2026" },
                { k: "Referral Source", v: "LinkedIn" },
                { k: "First Landing Page", v: "Tech Summit Registration" },
              ].map((row) => (
                <div key={row.k} className="flex items-center justify-between gap-2">
                  <dt className="text-zinc-500">{row.k}</dt>
                  <dd className="truncate font-semibold text-black">{row.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Card 2: Device, OS & Browser Footprint */}
        <div className="rounded-2xl border border-[#e1e1df] bg-white p-6">
          <div className="text-xs font-bold uppercase tracking-wider text-zinc-400">
            Devices &amp; Platforms Used
          </div>

          <div className="mt-5 space-y-3.5">
            {DIGITAL_FOOTPRINT.devices.map((d) => {
              const Icon =
                d.name === "Desktop" ? Monitor : d.name === "Mobile App & Web" ? Smartphone : Laptop;
              return (
                <div key={d.name}>
                  <div className="flex items-center justify-between text-xs font-semibold text-zinc-800">
                    <span className="flex items-center gap-2">
                      <Icon className="h-3.5 w-3.5 text-blue-600" />
                      {d.name}
                    </span>
                    <span className="text-zinc-500">
                      {d.sessions} visits · {d.pct}%
                    </span>
                  </div>
                  <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-[#f7f7f5]">
                    <div
                      className="h-full rounded-full bg-blue-600"
                      style={{ width: `${d.pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 border-t border-[#e1e1df] pt-5">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                Operating Systems
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {DIGITAL_FOOTPRINT.os.map((os) => (
                  <span
                    key={os.name}
                    className="rounded-md border border-[#e1e1df] bg-[#f7f7f5] px-2 py-1 text-[11px] font-medium text-zinc-700"
                  >
                    {os.name} {os.pct}%
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                Browsers
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {DIGITAL_FOOTPRINT.browsers.map((b) => (
                  <span
                    key={b.name}
                    className="rounded-md border border-[#e1e1df] bg-[#f7f7f5] px-2 py-1 text-[11px] font-medium text-zinc-700"
                  >
                    {b.name} {b.pct}%
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Location & Top Visited Pages */}
        <div className="rounded-2xl border border-[#e1e1df] bg-white p-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              Location &amp; Top Interests
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-700">
              <MapPin className="h-3.5 w-3.5 text-blue-600" /> Bengaluru, India
            </span>
          </div>

          <div className="mt-4 rounded-xl border border-[#e1e1df] bg-[#f7f7f5] px-4 py-3 text-xs text-zinc-600">
            Region: <span className="font-semibold text-black">Karnataka</span> · Local time:{" "}
            <span className="font-semibold text-black">IST (Asia/Kolkata)</span>
          </div>

          <div className="mt-5 space-y-2.5">
            {DIGITAL_FOOTPRINT.topPages.map((p, idx) => (
              <div
                key={p.path}
                className="flex items-center justify-between gap-3 rounded-xl border border-[#e1e1df] bg-[#f7f7f5] px-3.5 py-2.5"
              >
                <div className="min-w-0">
                  <div className="truncate text-xs font-bold text-black">
                    {idx + 1}. {p.title}
                  </div>
                  <div className="truncate text-[10px] text-zinc-400">{p.path}</div>
                </div>
                <span className="shrink-0 rounded-full border border-[#e1e1df] bg-white px-2.5 py-1 text-[11px] font-bold text-blue-700">
                  {p.views} views
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export function Faq() {
  return (
    <Section id="faq" bordered={false} eyebrow="FAQ" title="Customer 360, answered.">
      <div className="divide-y divide-[#e1e1df] rounded-2xl border border-[#e1e1df] bg-white">
        {FAQS.map((item) => (
          <details key={item.q} className="group p-5 sm:p-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-bold text-black [&::-webkit-details-marker]:hidden">
              {item.q}
              <ChevronDown
                className="h-4 w-4 shrink-0 text-blue-600 transition-transform group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">{item.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
