const STATS = [
  { value: "500+", label: "Legal Matters Handled" },
  { value: "25", label: "Years Combined Experience" },
  { value: "40+", label: "Jurisdictions Served" },
  { value: "Mondaq", label: "Thought Leadership Award" },
];

export function TrustStrip() {
  return (
    <section aria-label="Credibility" className="border-y border-border/60 bg-ink-deep">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="border-l border-gold-soft pl-5">
              <p className="font-display text-4xl font-medium text-gold md:text-5xl">
                {s.value}
              </p>
              <p className="mt-3 font-sans text-[11px] uppercase tracking-[0.22em] text-parchment/60">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
