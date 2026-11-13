import Link from "next/link";

const audiences = [
  {
    title: "To our donors",
    summary: "Leave a machine that still has work in it. We repair it and place it. It does not become shop stock.",
    href: "/donations",
    cta: "Donate a device",
    points: [
      "Working or repairable laptops, desktops, monitors, and TVs are logged, cleaned, and given to a school or a listed program.",
      "You can name who should receive it, or leave placement to the desk. Stay anonymous, or ask for a shout-out.",
      "Cash and listed items for a specific activity go through the programs page, not the shop floor.",
    ],
  },
  {
    title: "To our partners",
    summary: "Organisations that need disposal or an upgrade. One desk handles the load, the data, and the next generation of machines.",
    href: "/#services",
    cta: "See disposal and upgrades",
    points: [
      "E-waste is collected, recycled, or disposed of at corporate, small-business, and individual levels. The fee is agreed before we travel.",
      "Working laptops, desktops, monitors, and TVs in that load can still be donated. What we dispose of is all electronics that cannot be recovered.",
      "IT asset recovery covers upgrades, testing, sorting, reuse of working parts, and secure data destruction when the drive must be gone.",
    ],
  },
  {
    title: "To our team",
    summary: "People already in the work, and people who want to join the planning group for a listed activity.",
    href: "/programs",
    cta: "Join a program",
    points: [
      "The bench in Juja takes intake, sorting, repair, and placement. That work stays with the desk.",
      "Join us on a program by sending your details. You are added to the group where organisation and planning happen.",
      "Public pages show the activity name and the need only. Planning contacts stay with the desk.",
    ],
  },
  {
    title: "To the community",
    summary: "Schools and students receive working machines. Neighbourhoods keep dead electronics off the dump.",
    href: "/programs",
    cta: "See this year’s programs",
    points: [
      "A rebuilt PC leaves as a planned donation: a student with a laptop, or a school receiving a listed item such as a projector.",
      "Race days, tree planting, and school slots sit on the programs page so support stays tied to a real activity.",
      "A school or organisation can request a slot. If it is listed, the public card shows the name and the need only.",
    ],
  },
] as const;

export function FinalHow() {
  return (
    <section id="why-us" className="scroll-mt-24 bg-white py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-[#16a34a]">
            <span className="h-px w-10 bg-[#16a34a] sm:w-14" aria-hidden="true" />
            WHY US
            <span className="h-px w-10 bg-[#16a34a] sm:w-14" aria-hidden="true" />
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0b1b16] sm:text-[2.7rem] lg:text-5xl">
            Why we are the desk for the machines you have.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Donors, partners who need disposal or an upgrade, the team, and the community each get a different reason to work with us.
          </p>
        </div>

        <ol className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {audiences.map((item) => (
            <li key={item.title} className="flex flex-col rounded-[1.4rem] bg-[#f4fbf6] p-6 text-left">
              <h3 className="text-lg font-extrabold tracking-tight text-[#0b1b16]">{item.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-slate-600">{item.summary}</p>
              <ol className="mt-5 space-y-3">
                {item.points.map((point, index) => (
                  <li key={point} className="flex gap-3 text-base leading-relaxed text-slate-700">
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[#22c55e] text-xs font-bold text-white">
                      {index + 1}
                    </span>
                    <span className="pt-0.5">{point}</span>
                  </li>
                ))}
              </ol>
              <Link href={item.href} className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-[#15803d] hover:text-[#166534]">
                {item.cta}
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
