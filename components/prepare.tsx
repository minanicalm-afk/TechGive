import { Reveal } from "@/components/ui/reveal";
import { shell } from "@/lib/ui";

const lists = [
  {
    title: "If you are donating",
    items: [
      "The computer, even if it does not switch on",
      "The charger, bag, or dock if you still have them",
      "A note if the machine was used for work",
      "Your name and a WhatsApp number, so we can confirm the drop-off",
    ],
  },
  {
    title: "If you are selling",
    items: [
      "Photos of the item, sent before you travel",
      "The type, condition, and what is included",
      "The receipt, photographed, if you have it",
      "Your identification card at handover if there is no receipt",
    ],
  },
  {
    title: "If you are disposing or upgrading",
    items: [
      "A count, or a rough list, of what is leaving",
      "Where the equipment sits, and any stairs or access notes",
      "Whether the machines are laptops, desktops, or a mix",
      "A person we can message on the day of collection",
    ],
  },
];

export function Prepare() {
  return (
    <section id="prepare" className="border-y border-ink/10 bg-cream py-20 sm:py-28">
      <div className={shell}>
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">Before you come</p>
          <h2 className="mt-3 font-serif text-4xl leading-[1.08] tracking-[-0.03em] sm:text-5xl">
            What to have in your hands.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {lists.map((list, index) => (
            <Reveal key={list.title} delay={index * 0.06} className="rounded-2xl border border-ink/10 bg-paper p-6 sm:p-7">
              <h3 className="font-serif text-2xl tracking-[-0.03em]">{list.title}</h3>
              <ul className="mt-5 space-y-3">
                {list.items.map((item) => (
                  <li key={item} className="grid grid-cols-[1rem_1fr] gap-3 text-sm leading-relaxed text-ink-soft">
                    <span className="mt-2 size-1.5 rounded-full bg-leaf" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
