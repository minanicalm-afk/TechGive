import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { shell } from "@/lib/ui";

export function CloseCta() {
  return (
    <section className="pb-20 sm:pb-28">
      <div className={shell}>
        <Reveal className="overflow-hidden rounded-[2rem] bg-ink px-6 py-14 text-cream sm:px-12 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper-soft">
            The desk is open on WhatsApp
          </p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.05] tracking-[-0.03em] text-balance sm:text-6xl">
            The computer you are finished with may be the one someone is waiting on.
          </h2>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="/donate" variant="cream">
              Donate a device
            </Button>
            <Button href="/sell" variant="ghost-light">
              Sell to TechGive
            </Button>
            <Button href="/dispose" variant="ghost-light">
              Book a collection
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
