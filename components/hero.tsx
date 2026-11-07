import { HeroFacts } from "@/components/hero-facts";
import { Button } from "@/components/ui/button";
import { shell } from "@/lib/ui";

const facts = [
  { href: "/donate", label: "Donate", value: "Repaired, then given to less privileged schools" },
  { href: "/sell", label: "Sell", value: "A range, confirmed after we inspect the item" },
  { href: "/dispose", label: "Dispose", value: "Dead equipment collected for a fee" },
  { href: "/upgrade", label: "Upgrade", value: "Old working machines donated, or released for a small fee" },
];

export function Hero() {
  return (
    <>
    <section className="relative overflow-x-clip bg-ink text-cream">
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div className="hero-dots pointer-events-none absolute inset-0" />

      <div className="relative mx-auto w-full max-w-3xl px-5 pt-32 pb-24 text-center sm:px-8 lg:pt-40 lg:pb-28">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper-soft">
          Computer sales & repair · Community Support
        </p>
        <h1 className="mt-5 font-serif text-[3.15rem] leading-[0.98] tracking-[-0.035em] text-balance sm:text-6xl lg:text-[4.4rem]">
          Unused computers still have{" "}
          <em className="font-medium text-copper-soft italic">work to do.</em>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-cream/78">
          We collect, repair, and upgrade electronics. Whether you want to donate to a good
          cause, let us handle your company&apos;s IT upgrades, sell to us for a fair price, or
          safely dispose of e-waste in Juja and Nairobi — we make it simple.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/donate" variant="cream">
            Donate a device
          </Button>
          <Button href="/sell" variant="ghost-light">
            Sell to TechGive
          </Button>
        </div>
      </div>

    </section>

    <div className={`relative z-10 -mt-16 ${shell}`}>
      <HeroFacts facts={facts} />
    </div>
    </>
  );
}
