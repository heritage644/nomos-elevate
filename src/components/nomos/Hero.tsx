import heroImg from "@/assets/hero-library.jpg";
import { ArrowUpRight, PhoneCall } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-ink-deep">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Nomos Legal Practice library"
          width={1920}
          height={1280}
          className="h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 gradient-hero-overlay" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-16 px-6 pt-24 pb-32 lg:grid-cols-12 lg:px-10 lg:pt-32 lg:pb-44">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-4">
            <span className="gold-rule" />
            <p className="eyebrow">Lagos · Established Counsel</p>
          </div>

          <h1 className="mt-8 font-display text-5xl font-medium leading-[1.02] text-parchment text-balance md:text-6xl lg:text-[5.25rem]">
            Unwavering counsel
            <br />
            for the matters that
            <br />
            <em className="text-gold not-italic font-medium">define your future.</em>
          </h1>

          <p className="mt-10 max-w-xl font-sans text-lg leading-relaxed text-parchment/75">
            Nomos Legal Practice is a Lagos-based firm advising global enterprises and
            discerning individuals on complex immigration, corporate, real estate and
            advisory matters — with the discretion and rigour our clients expect.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 font-sans text-sm font-semibold text-ink-deep shadow-gold-glow transition hover:opacity-90"
            >
              Book Consultation
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-gold-soft px-7 py-4 font-sans text-sm font-medium text-parchment transition hover:border-gold hover:text-gold"
            >
              <PhoneCall className="h-4 w-4" />
              Speak with a Lawyer
            </a>
          </div>
        </div>

        <aside className="lg:col-span-4 lg:pt-12">
          <div className="border-l border-gold-soft pl-6">
            <p className="eyebrow">Recognition</p>
            <p className="mt-4 font-display text-2xl leading-snug text-parchment">
              Recipient of the
              <span className="text-gold"> Mondaq Thought Leadership</span> Award for
              contributions to corporate and immigration jurisprudence.
            </p>
            <p className="mt-6 font-sans text-xs uppercase tracking-[0.25em] text-parchment/50">
              ISO 27001 · NBA Certified · Member, IBA
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
