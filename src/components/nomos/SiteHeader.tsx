import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "Practice", href: "#practice" },
  { label: "Why Nomos", href: "#why" },
  { label: "Counsel", href: "#team" },
  { label: "Process", href: "#process" },
  { label: "Insights", href: "#testimonials" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-ink-deep/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-2xl font-medium tracking-tight text-parchment">
            Nomos
          </span>
          <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-gold">
            Legal Practice
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="font-sans text-sm font-medium text-parchment/75 transition-colors hover:text-gold"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            className="rounded-full border border-gold-soft px-5 py-2 font-sans text-sm font-medium text-parchment transition hover:border-gold hover:text-gold"
          >
            Contact
          </a>
          <a
            href="#cta"
            className="rounded-full bg-gold px-5 py-2 font-sans text-sm font-semibold text-ink-deep transition hover:opacity-90"
          >
            Book Consultation
          </a>
        </div>

        <button
          className="lg:hidden text-parchment"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-ink-deep px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="font-sans text-base text-parchment/80"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-gold px-5 py-3 text-center font-sans text-sm font-semibold text-ink-deep"
            >
              Book Consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
