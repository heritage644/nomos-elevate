import { Linkedin, Twitter, Mail, MapPin, Lock } from "lucide-react";

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-border/60 bg-ink-deep">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-3xl font-medium text-parchment">Nomos</span>
              <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-gold">
                Legal Practice
              </span>
            </div>
            <p className="mt-6 max-w-md font-sans text-sm leading-relaxed text-parchment/65">
              Premier counsel in immigration, corporate, real estate and advisory law —
              serving discerning clients from Lagos to the world.
            </p>

            <div className="mt-8 space-y-3 font-sans text-sm text-parchment/75">
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-gold" />
                <span>
                  16 Bourdillon Road, Ikoyi
                  <br /> Lagos 101233, Nigeria
                </span>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gold" />
                <a href="mailto:counsel@nomos.legal" className="hover:text-gold">
                  counsel@nomos.legal
                </a>
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-soft text-parchment transition hover:border-gold hover:text-gold"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-soft text-parchment transition hover:border-gold hover:text-gold"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 lg:col-span-7 sm:grid-cols-3">
            <div>
              <p className="eyebrow">Practice</p>
              <ul className="mt-5 space-y-3 font-sans text-sm text-parchment/75">
                <li><a href="#practice" className="hover:text-gold">Immigration Law</a></li>
                <li><a href="#practice" className="hover:text-gold">Corporate & Commercial</a></li>
                <li><a href="#practice" className="hover:text-gold">Real Estate</a></li>
                <li><a href="#practice" className="hover:text-gold">Legal Advisory</a></li>
              </ul>
            </div>
            <div>
              <p className="eyebrow">The Firm</p>
              <ul className="mt-5 space-y-3 font-sans text-sm text-parchment/75">
                <li><a href="#team" className="hover:text-gold">Our Counsel</a></li>
                <li><a href="#why" className="hover:text-gold">Why Nomos</a></li>
                <li><a href="#process" className="hover:text-gold">Engagement</a></li>
                <li><a href="#testimonials" className="hover:text-gold">Insights</a></li>
              </ul>
            </div>
            <div>
              <p className="eyebrow">Trust</p>
              <ul className="mt-5 space-y-3 font-sans text-sm text-parchment/75">
                <li className="flex items-center gap-2"><Lock className="h-3 w-3 text-gold" /> Encrypted Intake</li>
                <li>NBA Certified Practitioners</li>
                <li>Member, IBA</li>
                <li>ISO 27001 Aligned</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-8 font-sans text-xs text-parchment/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Nomos Legal Practice. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">Privacy</a>
            <a href="#" className="hover:text-gold">Terms</a>
            <a href="#" className="hover:text-gold">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
