import { PriceBand } from "@/components/price-band";
import { ProposalActions } from "@/components/proposal-actions";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { shell } from "@/lib/ui";

const steps = [
  {
    n: "01",
    title: "Describe it",
    copy: "Type, brand if you know it, condition, and what comes with it: charger, bag, dock, or nothing else.",
  },
  {
    n: "02",
    title: "Show it",
    copy: "Photos of the front, the ports, any damage, and the serial label if you can find it. A charger gets its own photo when you still have one.",
  },
  {
    n: "03",
    title: "Add the receipt",
    copy: "Send a flat, readable photo of the receipt when you have it. It helps the desk confirm what the item is.",
  },
  {
    n: "04",
    title: "Read the proposal",
    copy: "We assess the item on our pricing desk, then offer 20–30% of that assessed price.",
  },
  {
    n: "05",
    title: "Answer it",
    copy: "Accept, cancel, or bargain on WhatsApp. Bring the item to Juja or Nairobi once you are agreed.",
  },
];

const shots = ["Front", "Ports", "Damage", "Serial label", "Charger", "Receipt"];

export function Buyback() {
  return (
    <section id="buyback" className="bg-ink py-20 text-cream sm:py-28">
      <div className={shell}>
        <SectionHeading
          light
          eyebrow="Selling to Josachi"
          title="A clear proposal, and three ways to answer it."
          text="People and organisations can sell computers and other electronics. The offer is a band, not a surprise, and the decision stays yours."
        />

        <div className="mt-8">
          <Button href="/sell" variant="cream">
            Price your item
          </Button>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-6">
          {steps.map((step, index) => (
            <Card
              key={step.n}
              tone="glass"
              delay={index * 0.05}
              className={index > 2 ? "lg:col-span-3" : "lg:col-span-2"}
            >
              <p className="font-serif text-2xl text-copper-soft">{step.n}</p>
              <h3 className="mt-3 font-serif text-2xl tracking-[-0.03em]">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">{step.copy}</p>
            </Card>
          ))}
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <Card tone="cream" delay={0.05}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
              How the price is set
            </p>
            <p className="mt-4 font-serif text-3xl leading-tight tracking-[-0.03em]">
              20–30% of the price our desk assesses.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft sm:text-base">
              Condition, completeness, and what we are paying that week decide where inside the
              band the proposal lands. You see the figure before you travel.
            </p>
            <p className="mt-4 rounded-2xl bg-paper px-4 py-4 text-sm leading-relaxed text-ink-soft">
              Example only. An item assessed at KES 20,000 is proposed between{" "}
              <span className="font-medium text-ink">KES 4,000 and KES 6,000</span>. Your item
              gets its own assessment.
            </p>
            <PriceBand />
          </Card>

          <Card tone="deep" delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper-soft">
              Your three answers
            </p>
            <ProposalActions />
            <p className="mt-6 text-sm leading-relaxed text-cream/70">
              Photos of the item start the conversation. If you have the receipt, send that too.
              These buttons open WhatsApp with a draft you can edit.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {shots.map((shot) => (
                <span key={shot} className="rounded-full bg-white/10 px-3 py-1.5 text-xs">
                  {shot}
                </span>
              ))}
            </div>
          </Card>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Card tone="copper" delay={0.05}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper-soft">
              With a receipt
            </p>
            <p className="mt-3 font-serif text-2xl tracking-[-0.03em]">Send it with the photos.</p>
            <p className="mt-3 text-sm leading-relaxed text-cream/75">
              A photo of the receipt is enough to begin. Bring the paper as well if you still
              have it when you hand the item over.
            </p>
          </Card>
          <Card tone="glass" delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper-soft">
              Without a receipt
            </p>
            <p className="mt-3 font-serif text-2xl tracking-[-0.03em]">
              Bring your identification card.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-cream/75">
              You can still sell the item. When you deliver it, carry your identification card.
              An organisation brings a staff or company identification card. Photos are still
              required.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
