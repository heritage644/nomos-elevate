import { ArrowUpRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section id="cta" className="bg-radial-gold">
      <div className="mx-auto max-w-5xl px-6 py-24 text-center lg:py-32">
        <div className="flex items-center justify-center gap-4">
          <span className="gold-rule" />
          <p className="eyebrow">Begin the Conversation</p>
          <span className="gold-rule" />
        </div>
        <h2 className="mt-8 font-display text-4xl leading-tight text-parchment text-balance md:text-6xl">
          Your matter deserves
          <br />
          <em className="text-gold not-italic">considered counsel.</em>
        </h2>
        <p className="mx-auto mt-8 max-w-xl font-sans text-base leading-relaxed text-parchment/75 md:text-lg">
          Schedule a confidential consultation with a Nomos partner. We respond within one business day.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 font-sans text-sm font-semibold text-ink-deep shadow-gold-glow transition hover:opacity-90"
          >
            Book Consultation
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="tel:+2340000000000"
            className="inline-flex items-center gap-2 rounded-full border border-gold-soft px-8 py-4 font-sans text-sm font-medium text-parchment transition hover:border-gold hover:text-gold"
          >
            +234 (0) 1 000 0000
          </a>
        </div>
      </div>
    </section>
  );
}
