const STEPS = [
  {
    n: "01",
    title: "Confidential Inquiry",
    desc: "Share the contours of your matter through our secure intake. A senior partner reviews within one business day.",
  },
  {
    n: "02",
    title: "Strategic Briefing",
    desc: "We meet — in person or remotely — to map objectives, risk tolerance and the optimal legal pathway.",
  },
  {
    n: "03",
    title: "Engagement & Execution",
    desc: "A bespoke engagement letter outlines scope and fees. Our team mobilises with precision and pace.",
  },
  {
    n: "04",
    title: "Stewardship & Outcomes",
    desc: "We remain by your side through closing and beyond — measuring success in lasting outcomes, not billable hours.",
  },
];

export function Process() {
  return (
    <section id="process" className="border-y border-border/60 bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4">
              <span className="gold-rule" />
              <p className="eyebrow">The Process</p>
            </div>
            <h2 className="mt-6 font-display text-4xl leading-tight text-parchment md:text-5xl">
              From inquiry to <em className="text-gold not-italic">resolution.</em>
            </h2>
            <p className="mt-6 font-sans text-base leading-relaxed text-parchment/70">
              A clear, four-step engagement designed for clarity, control and confidence at every stage.
            </p>
          </div>

          <ol className="lg:col-span-8 space-y-px overflow-hidden rounded-xl border border-border/60 bg-border/60">
            {STEPS.map((s) => (
              <li
                key={s.n}
                className="grid grid-cols-[auto_1fr] items-start gap-6 bg-card p-8 md:grid-cols-[8rem_1fr] md:gap-10 md:p-10"
              >
                <div className="font-display text-5xl font-light text-gold">{s.n}</div>
                <div>
                  <h3 className="font-display text-2xl text-parchment">{s.title}</h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-parchment/70 md:text-base">
                    {s.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
