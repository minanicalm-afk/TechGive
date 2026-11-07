import { ActionLink } from "@/components/action-link";
import { Button } from "@/components/ui/button";
import { messages, offices } from "@/lib/site";
import { shell } from "@/lib/ui";

export function Offices() {
  return (
    <section id="offices" className="pb-20 sm:pb-28">
      <div className={shell}>
        <div className="overflow-hidden rounded-[2rem] bg-moss text-cream">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            <div className="p-7 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper-soft">Offices</p>
              <h2 className="mt-3 font-serif text-4xl leading-[1.08] tracking-[-0.03em] sm:text-5xl">
                Two desks. Juja and Nairobi.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-cream/75">
                Drop-offs, buyback handovers, disposal, and upgrade conversations happen at both.
                Message us and we send the meeting point once the visit is set.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" variant="cream">
                  Contact us
                </Button>
                <ActionLink message={messages.general} variant="ghost-light">
                  Ask for directions
                </ActionLink>
              </div>
            </div>
            <div className="grid sm:grid-cols-2">
              {offices.map((office) => (
                <article key={office.city} className="border-t border-white/10 p-7 sm:p-10 sm:border-t-0 sm:border-l">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper-soft">
                    {office.county}
                  </p>
                  <h3 className="mt-3 font-serif text-4xl tracking-[-0.03em]">{office.city}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-cream/75">{office.copy}</p>
                </article>
              ))}
            </div>
          </div>
          <p className="border-t border-white/10 px-7 py-4 text-sm text-cream/65 sm:px-10">
            For a single device, tell us which town suits you. For a van-load or a fleet, we
            confirm access before the day.
          </p>
        </div>
      </div>
    </section>
  );
}
