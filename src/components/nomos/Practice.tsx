import { Plane, Building2, Landmark, Scale, ArrowUpRight } from "lucide-react";

const PRACTICES = [
  {
    icon: Plane,
    title: "Immigration Law",
    desc: "Bespoke visa, residency and citizenship strategies for executives, investors and skilled professionals across global jurisdictions.",
    items: ["Investor & Talent Visas", "Permanent Residency", "Citizenship Planning"],
  },
  {
    icon: Building2,
    title: "Corporate & Commercial",
    desc: "Advisory across mergers, acquisitions, regulatory compliance and structuring for ambitious enterprises and multinationals.",
    items: ["M&A and Joint Ventures", "Regulatory Compliance", "Corporate Governance"],
  },
  {
    icon: Landmark,
    title: "Real Estate & Property",
    desc: "Acquisition, development and disposal of high-value assets — from title perfection to landmark commercial transactions.",
    items: ["Title Verification", "Commercial Leasing", "Property Development"],
  },
  {
    icon: Scale,
    title: "Legal Advisory",
    desc: "Discreet, strategic counsel to family offices, founders and boards confronting their most consequential decisions.",
    items: ["Risk & Strategy", "Dispute Resolution", "Bespoke Retainers"],
  },
];

export function Practice() {
  return (
    <section id="practice" className="bg-radial-gold">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4">
              <span className="gold-rule" />
              <p className="eyebrow">Practice Areas</p>
            </div>
            <h2 className="mt-6 font-display text-4xl leading-tight text-parchment md:text-5xl">
              Four pillars of <em className="text-gold not-italic">premier counsel.</em>
            </h2>
            <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-parchment/70">
              Each practice is led by senior partners with decades of cross-border
              experience — supported by a bench of meticulous associates.
            </p>
          </div>

          <div className="grid gap-6 lg:col-span-7 sm:grid-cols-2">
            {PRACTICES.map(({ icon: Icon, ...p }) => (
              <article
                key={p.title}
                className="group relative flex flex-col gap-5 rounded-xl border border-border/60 bg-card/60 p-7 transition-all hover:border-gold/60 hover:bg-card"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md border border-gold-soft text-gold">
                    <Icon className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-parchment/30 transition group-hover:text-gold" />
                </div>
                <h3 className="font-display text-2xl text-parchment">{p.title}</h3>
                <p className="font-sans text-sm leading-relaxed text-parchment/70">
                  {p.desc}
                </p>
                <ul className="mt-auto space-y-1.5 border-t border-border/60 pt-4">
                  {p.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-center gap-2 font-sans text-xs uppercase tracking-wider text-parchment/60"
                    >
                      <span className="h-px w-3 bg-gold" />
                      {it}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
