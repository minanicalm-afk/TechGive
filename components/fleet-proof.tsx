"use client";

import Image from "next/image";
import { PartnerCarousel } from "@/components/partner-carousel";
import { Button } from "@/components/ui/button";
import { shell } from "@/lib/ui";

const cards = [
  { label: "Donations", value: "2,386", detail: "devices donated" },
  { label: "E-waste", value: "18 t", detail: "diverted from landfill" },
  { label: "Businesses", value: "94", detail: "schools, NGOs and companies" },
  { label: "Upgrades", value: "312", detail: "business upgrades" },
];

export function TrustedProof() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className={shell}>
        <PartnerCarousel />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <li key={card.label} className="rounded-[1.4rem] bg-ink px-6 py-8 text-center text-cream">
              <p className="text-xs font-semibold tracking-[0.16em] text-copper-soft uppercase">{card.label}</p>
              <p className="mt-3 font-serif text-5xl tracking-tight">{card.value}</p>
              <p className="mt-2 text-sm text-cream/75">{card.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function FleetUpgrade() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className={shell}>
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="rounded-[2rem] border border-ink/10 bg-cream p-4 sm:p-6">
            <div className="grid items-center gap-4 sm:grid-cols-[1fr_auto_1fr]">
              <Shot
                src="/fleet-before.jpg"
                alt="A worn older laptop from a company fleet"
                badge="Before"
                kicker="Your current fleet"
                caption="8th-gen laptops"
              />
              <span className="mx-auto grid size-11 place-items-center rounded-full bg-copper text-lg text-cream" aria-hidden="true">
                →
              </span>
              <Shot
                src="/fleet-after.jpg"
                alt="A new thin laptop delivered as the upgrade"
                badge="After"
                kicker="What we deliver"
                caption="12th-gen laptops"
                fresh
              />
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-copper uppercase">Fleet upgrade</p>
            <h2 className="mt-3 font-serif text-4xl leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl">
              Upgrade your company’s computers without the hassle
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">
              We collect the machines you already have and deliver newer generations of the same, ready to use.
            </p>
            <ul className="mt-6 space-y-2 text-sm leading-relaxed text-ink">
              <li>Trade-in value deducted from your upgrade</li>
              <li>Certified data wiping on every old device</li>
              <li>On-site installation and staff handover</li>
            </ul>
            <div className="mt-8">
              <Button href="/upgrade" variant="copper">
                Request a fleet quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Shot({
  src,
  alt,
  badge,
  kicker,
  caption,
  fresh = false,
}: {
  src: string;
  alt: string;
  badge: string;
  kicker: string;
  caption: string;
  fresh?: boolean;
}) {
  return (
    <figure>
      <div className={`relative aspect-[4/3] overflow-hidden rounded-2xl ${fresh ? "ring-2 ring-copper" : ""}`}>
        <Image src={src} alt={alt} fill className="object-cover" sizes="(min-width: 1024px) 320px, 100vw" />
        <span className={`absolute top-3 left-3 rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] uppercase ${fresh ? "bg-copper text-cream" : "bg-ink/80 text-cream"}`}>
          {badge}
        </span>
      </div>
      <figcaption className="mt-3 text-center">
        <p className="text-[0.7rem] font-semibold tracking-[0.16em] text-ink-soft uppercase">{kicker}</p>
        <p className="mt-1 text-sm text-ink">{caption}</p>
      </figcaption>
    </figure>
  );
}
