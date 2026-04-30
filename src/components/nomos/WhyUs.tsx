import { Globe2, ShieldCheck, Clock4, Users2, BookMarked, Gem } from "lucide-react";

const POINTS = [
  { icon: Globe2, title: "Global Reach", desc: "Active matters across 40+ jurisdictions, with established correspondent firms in every major hub." },
  { icon: ShieldCheck, title: "Absolute Discretion", desc: "Confidentiality protocols modelled on private banking — your matters never leave the room." },
  { icon: Clock4, title: "Responsive by Design", desc: "Senior partner access within 24 hours. No call centre. No queue. Just counsel." },
  { icon: Users2, title: "Senior-Led Teams", desc: "Every engagement is partner-supervised from intake to closing — no junior hand-offs." },
  { icon: BookMarked, title: "Award-Winning Scholarship", desc: "Mondaq-recognised thought leaders shaping the jurisprudence we practise." },
  { icon: Gem, title: "Premium Client Care", desc: "Dedicated relationship managers, transparent billing, and outcomes measured in years not hours." },
];

export function WhyUs() {
  return (
    <section id="why" className="bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="gold-rule" />
            <p className="eyebrow">Why Nomos</p>
            <span className="gold-rule" />
          </div>
          <h2 className="mt-6 font-display text-4xl leading-tight text-parchment md:text-5xl">
            The standard our clients have come to expect.
          </h2>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
          {POINTS.map(({ icon: Icon, ...p }) => (
            <div key={p.title} className="group bg-card p-8 transition hover:bg-secondary">
              <div className="flex h-12 w-12 items-center justify-center rounded-md border border-gold-soft text-gold transition group-hover:border-gold">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-display text-xl text-parchment">{p.title}</h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-parchment/65">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
