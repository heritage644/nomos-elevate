import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Nomos handled our pan-African expansion with the calm authority of a firm three times their size. They are now our default counsel.",
    name: "M. Achebe",
    role: "Group General Counsel, Energy Conglomerate",
  },
  {
    quote:
      "From the first call to my residency approval, every detail was anticipated. A genuinely premium experience — exactly as promised.",
    name: "S. Lawal",
    role: "Founder & CEO, Fintech",
  },
  {
    quote:
      "Their command of Nigerian property law is unmatched. We closed a complex acquisition in half the time we expected.",
    name: "R. Anderson",
    role: "Director, International Investment Fund",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-ink-deep">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="gold-rule" />
            <p className="eyebrow">Client Voices</p>
            <span className="gold-rule" />
          </div>
          <h2 className="mt-6 font-display text-4xl leading-tight text-parchment md:text-5xl">
            Trusted by founders, families and Fortune 500 boards.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col gap-6 rounded-xl border border-border/60 bg-card p-8"
            >
              <Quote className="h-7 w-7 text-gold" strokeWidth={1.5} />
              <blockquote className="font-display text-xl leading-snug text-parchment">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-auto border-t border-border/60 pt-5">
                <p className="font-sans text-sm font-semibold text-parchment">{t.name}</p>
                <p className="font-sans text-xs uppercase tracking-wider text-parchment/55">
                  {t.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
