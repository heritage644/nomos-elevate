import attorney1 from "@/assets/attorney-1.jpg";
import attorney2 from "@/assets/attorney-2.jpg";
import attorney3 from "@/assets/attorney-3.jpg";

const TEAM = [
  {
    img: attorney1,
    name: "Adekunle Bamidele, SAN",
    role: "Managing Partner",
    bio: "30+ years advising on cross-border M&A and complex commercial litigation. Lead counsel on three of West Africa's largest infrastructure transactions.",
    practice: ["Corporate", "Dispute Resolution"],
  },
  {
    img: attorney2,
    name: "Ifeoma Okonkwo",
    role: "Partner — Immigration",
    bio: "Architect of bespoke residency and citizenship strategies for high-net-worth families and global executives across five continents.",
    practice: ["Immigration", "Private Client"],
  },
  {
    img: attorney3,
    name: "Tunde Adeyemi",
    role: "Partner — Real Estate",
    bio: "Trusted counsel to developers and institutional investors on landmark commercial property transactions in Lagos and Abuja.",
    practice: ["Real Estate", "Project Finance"],
  },
];

export function Team() {
  return (
    <section id="team" className="bg-ink-deep">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4">
              <span className="gold-rule" />
              <p className="eyebrow">Counsel</p>
            </div>
            <h2 className="mt-6 font-display text-4xl leading-tight text-parchment md:text-5xl">
              The minds behind <em className="text-gold not-italic">every matter.</em>
            </h2>
          </div>
          <a
            href="#"
            className="font-sans text-sm font-medium text-gold underline-offset-4 hover:underline"
          >
            View full bench →
          </a>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {TEAM.map((m) => (
            <article key={m.name} className="group relative overflow-hidden rounded-xl border border-border/60 bg-card">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={m.img}
                  alt={m.name}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-deep via-ink-deep/30 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="eyebrow">{m.role}</p>
                  <h3 className="mt-2 font-display text-2xl text-parchment">{m.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="font-sans text-sm leading-relaxed text-parchment/70">
                  {m.bio}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {m.practice.map((p) => (
                    <span
                      key={p}
                      className="rounded-full border border-gold-soft px-3 py-1 font-sans text-[10px] uppercase tracking-wider text-gold"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
