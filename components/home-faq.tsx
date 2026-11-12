import Link from "next/link";

const items = [
  {
    q: "How does a donation work?",
    a: "Leave a working or repairable computer. We clean and repair it, then give the finished machine to a less privileged school. A missing charger is fine. Drop it at the Juja shop, or ask for collection in Juja or Nairobi. Working donations are collected without a charge. Donations are not stock for the shop.",
  },
  {
    q: "How does disposal work?",
    a: "Dead equipment is a paid collection, not a buyback. Tell us roughly how many pieces and the town. We confirm the fee before we travel. A van is for 20 pieces or more. Repairable parts stay in service. The rest is recycled.",
  },
  {
    q: "Who gets a donated device?",
    a: "A repaired donation goes to a student, a job seeker, or a community class that is short of machines. We place it where that need is specific, usually a less privileged school.",
  },
  {
    q: "Where are you located?",
    a: "The shop is at Josachi Computers, Alma Matta Building, along Gachororo Road, JKUAT Gate B, Juja. Nairobi is on-site collection only. We send the meeting point once the visit is set.",
  },
] as const;

export function HomeFaq() {
  return (
    <section id="home-faq" className="scroll-mt-24 bg-[#f4fbf6] py-16 lg:py-24">
      <div className="mx-auto grid w-full max-w-[96rem] items-start gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <div className="lg:sticky lg:top-28">
          <p className="flex justify-center">
            <span className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-[#16a34a]">
              <span className="h-px w-10 bg-[#16a34a] sm:w-14" aria-hidden="true" />
              FAQ
              <span className="h-px w-10 bg-[#16a34a] sm:w-14" aria-hidden="true" />
            </span>
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0b1b16] sm:text-[2.7rem] lg:text-5xl lg:leading-[1.08]">
            Short answers before you make the trip.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Donations, disposal, and drop-off all start the same way: tell us what you have, and we say what the desk can do with it.
          </p>
          <Link
            href="/faq"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#22c55e] px-5 py-3 text-sm font-semibold text-white hover:bg-[#16a34a]"
          >
            Read the full FAQ
            <svg viewBox="0 0 16 16" className="size-3.5" aria-hidden="true" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div className="divide-y divide-slate-200 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white px-5 sm:px-7">
          {items.map((item, index) => (
            <details key={item.q} className="group py-6" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-lg font-extrabold tracking-tight text-[#0b1b16] sm:text-xl [&::-webkit-details-marker]:hidden">
                <span>
                  <span className="mr-2.5 text-[#16a34a]">{String(index + 1).padStart(2, "0")}</span>
                  {item.q}
                </span>
                <span
                  className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-[#dcfce7] text-xl leading-none text-[#15803d] group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:pl-[2.6rem] sm:text-base">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
