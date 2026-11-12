import { PathCard } from "@/components/path-card";
import { Reveal } from "@/components/ui/reveal";
import { shell } from "@/lib/ui";

const paths = [
  {
    title: "Donate",
    copy: "A working or repairable computer for less privileged schools. A missing charger is fine.",
    cta: "Donate",
    href: "/donations",
    featured: true,
  },
  {
    title: "Sell",
    copy: "Send the details and photos. The team reviews them, then confirms a range after inspection.",
    cta: "Get a proposal",
    href: "/sell",
  },
  {
    title: "Dispose",
    copy: "Dead equipment, collected for a fee. We travel for 20 pieces or more.",
    cta: "Book collection",
    href: "/recycling#pickup",
  },
  {
    title: "Upgrade",
    copy: "Old-generation machines a company can donate, or release for a small fee. We travel for 10 working pieces.",
    cta: "Plan an upgrade",
    href: "/upgrades#request",
  },
  {
    title: "Ask",
    copy: "A less privileged school that needs computers for class.",
    cta: "Request a placement",
    href: "/ask",
  },
];

export function StartHere() {
  return (
    <section id="start" className="relative z-10 py-16 sm:py-20">
      <div className={shell}>
        <Reveal>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">
              Where to start
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-[1.08] tracking-[-0.03em] sm:text-5xl">
              Begin with what you have.
            </h2>
          </div>
        </Reveal>
        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {paths.map((path, index) => (
            <li
              key={path.title}
              className={path.featured ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : undefined}
            >
              <PathCard
                index={index + 1}
                title={path.title}
                copy={path.copy}
                cta={path.cta}
                href={path.href}
                featured={path.featured}
                delay={index * 0.06}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
