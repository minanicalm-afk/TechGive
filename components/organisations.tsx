import { Card } from "@/components/ui/card";
import { CardLink } from "@/components/ui/card-link";
import { SectionHeading } from "@/components/section-heading";
import { shell } from "@/lib/ui";

const disposal = [
  "A list of what is leaving, even a rough one, is enough to start.",
  "The cost follows volume, access, and the state of the load.",
  "Drives are wiped or destroyed before reuse or parting out.",
  "What can be repaired may still enter the community give.",
];

const exchange = [
  ["You hand in", "The laptops, desktops, or all-in-ones your team uses now."],
  ["You receive", "A newer generation of that same kind of machine."],
  ["We agree first", "Counts, the generation you are moving to, and the day we collect."],
  ["The old set", "Repaired for someone who needs a computer, or kept for parts."],
];

export function Organisations() {
  return (
    <section id="organisations" className="py-20 sm:py-28">
      <div className={shell}>
        <SectionHeading
          eyebrow="For organisations"
          title="Two ways a fleet can leave the building."
          text="Schools, labs, NGOs, and companies use the same desks in Juja and Nairobi. One path is a paid collection. The other is an exchange for a newer generation of the systems you already run."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <Card tone="cream" hover>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">Paid disposal</p>
            <h3 className="mt-4 font-serif text-4xl tracking-[-0.03em]">We take the equipment away.</h3>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              Computers, parts, cables, and other electronics that are finished. Homes can book
              this too. It is a charged collection, agreed before we schedule it.
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-ink">
              {disposal.map((item) => (
                <li key={item} className="grid grid-cols-[1rem_1fr] gap-3">
                  <span className="mt-2 size-1.5 rounded-full bg-copper" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <CardLink href="/dispose">Book a collection</CardLink>
            </div>
          </Card>

          <Card tone="moss" hover delay={0.08}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper-soft">
              Generation upgrade
            </p>
            <h3 className="mt-4 font-serif text-4xl tracking-[-0.03em]">
              Newer machines. Same kind of work.
            </h3>
            <p className="mt-4 text-base leading-relaxed text-cream/75">
              You release what you already have. We supply a newer generation of that same class
              of system, then put the outgoing machines onto the repair bench or into parts.
            </p>
            <dl className="mt-6 grid gap-4 sm:grid-cols-2">
              {exchange.map(([term, detail]) => (
                <div key={term} className="rounded-2xl bg-white/10 p-4">
                  <dt className="text-sm font-medium text-copper-soft">{term}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-cream/80">{detail}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8">
              <CardLink href="/upgrade" variant="cream">
                Talk through an upgrade
              </CardLink>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
