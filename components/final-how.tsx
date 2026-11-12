import Link from "next/link";

const paths = [
  {
    title: "Donate",
    summary: "A working or repairable computer is repaired, then given to a less privileged school.",
    href: "/donations#note",
    cta: "Donate a device",
    steps: [
      "Tell us the machine, and whether it powers on. A missing charger is fine.",
      "Drop it at the Juja shop, or ask for collection in Juja or Nairobi.",
      "We clean and repair it, then place it with a school.",
    ],
  },
  {
    title: "Dispose",
    summary: "Dead equipment is a paid collection. We do not buy machines that cannot be repaired.",
    href: "/recycling#pickup",
    cta: "Schedule a pickup",
    steps: [
      "Tell us what is there, roughly how many pieces, and the town.",
      "We confirm the collection fee before we travel. A van is for 20 pieces or more.",
      "Repairable parts stay in service. The rest is recycled.",
    ],
  },
  {
    title: "Upgrade",
    summary: "An organisation hands in its fleet and receives a newer generation of the same kind.",
    href: "/upgrades#request",
    cta: "Request an upgrade",
    steps: [
      "Tell us how many machines, and whether they are laptops, desktops, or both.",
      "We plan the swap. Laptops stay laptops. Desktops stay desktops.",
      "We collect the old machines and deliver the new ones ready to use.",
    ],
  },
  {
    title: "Sell to us",
    summary: "We buy working electronics from you. The range is confirmed after we inspect the item.",
    href: "/sell",
    cta: "Get a quote",
    steps: [
      "Send the details and photos of the laptop, desktop, or other device.",
      "The offer is about 20–30% of the assessed desk price, and it can change after inspection.",
      "Confirm on WhatsApp, or bring it to the desk in Juja.",
    ],
  },
] as const;

export function FinalHow() {
  return (
    <section id="how" className="scroll-mt-24 bg-white py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-[#16a34a]">
            <span className="h-px w-10 bg-[#16a34a] sm:w-14" aria-hidden="true" />
            HOW IT WORKS
            <span className="h-px w-10 bg-[#16a34a] sm:w-14" aria-hidden="true" />
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0b1b16] sm:text-[2.7rem] lg:text-5xl">
            Four ways a machine leaves your hands
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Donate it, dispose of what is dead, upgrade a fleet, or sell it to us. Each path starts with a short note to the desk.
          </p>
        </div>

        <ol className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {paths.map((path) => (
            <li key={path.title} className="flex flex-col rounded-[1.4rem] bg-[#f4fbf6] p-6 text-left">
              <h3 className="text-lg font-extrabold tracking-tight text-[#0b1b16]">{path.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-slate-600">{path.summary}</p>
              <ol className="mt-5 space-y-3">
                {path.steps.map((step, index) => (
                  <li key={step} className="flex gap-3 text-base leading-relaxed text-slate-700">
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[#22c55e] text-xs font-bold text-white">
                      {index + 1}
                    </span>
                    <span className="pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
              <Link href={path.href} className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-[#15803d] hover:text-[#166534]">
                {path.cta}
                <svg viewBox="0 0 16 16" className="size-3.5" aria-hidden="true" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
