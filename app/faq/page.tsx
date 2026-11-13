import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Home4Footer } from "@/components/home4-footer";
import { messages, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "TechGive — FAQ" },
  description:
    "How donations, sales, disposal, and organisation upgrades work at the Josachi desk in Juja.",
};

const groups = [
  {
    title: "Donations",
    items: [
      {
        q: "What can I bring?",
        a: "Laptops, desktops, monitors, parts, and other electronics. Tell us what it is, and whether it powers on, before you travel.",
      },
      {
        q: "Where does a donation go?",
        a: "A repairable computer is cleaned and fixed, then given to a less privileged school. What cannot be repaired is recycled or disposed of responsibly. Donations are not stock for the shop.",
      },
      {
        q: "Who gets a donated device?",
        a: "A repaired donation goes to a student, a job seeker, or a community class that is short of machines. We place it where that need is specific, usually a less privileged school.",
      },
      {
        q: "Do you wipe hard drives?",
        a: "Yes. Before a machine is handed on or opened for parts, the drive is wiped or destroyed. Say if it was a work computer. Data recovery is not promised.",
      },
      {
        q: "Do I need the charger?",
        a: "No. A missing charger is fine. Bring the machine as it is, and we will note what arrived.",
      },
    ],
  },
  {
    title: "Selling to the desk",
    items: [
      {
        q: "How is the price worked out?",
        a: "Send the details and photos. The offer is about 20–30% of the assessed desk price. The team confirms the range after inspection, and it can change. There is no instant calculated price on the site.",
      },
      {
        q: "When do I get paid?",
        a: "After inspection. The range you see first is a proposal. Payment follows once the desk has seen the item.",
      },
      {
        q: "Do I need a receipt to sell?",
        a: "No. A receipt helps the desk confirm the machine. If you do not have one, bring identification to Juja so we can confirm it is yours. We do not ask you to upload a national ID.",
      },
      {
        q: "Do you buy equipment that is dead?",
        a: "No. Dead equipment is a paid collection for disposal, not a buyback. We travel for that when there are 20 pieces or more.",
      },
    ],
  },
  {
    title: "Recycling & disposal",
    items: [
      {
        q: "How does disposal work?",
        a: "Dead equipment is a paid collection, not a buyback. Tell us roughly how many pieces and the town. We confirm the fee before we travel. A van is for 20 pieces or more. Repairable parts stay in service. The rest is recycled.",
      },
      {
        q: "Why recycle with the desk?",
        a: "Electronics that cannot be repaired are disposed of responsibly, for a cleaner and safer environment. We do not dump working parts that can still serve another machine.",
      },
    ],
  },
  {
    title: "Programs & brochure",
    items: [
      {
        q: "Where do I support an activity?",
        a: "On the programs page. Pick the activity, then donate cash, provide the listed item, or join the planning group. Public cards show the name and the need only.",
      },
      {
        q: "How do I download the brochure?",
        a: "Open the brochure page and use Download / print brochure. It shows what the work has been and the programs listed for this period.",
      },
    ],
  },
  {
    title: "The desk & organisations",
    items: [
      {
        q: "Can an organisation upgrade its machines?",
        a: "Yes. We collect the computers you already have and deliver a newer generation of the same kind. We travel for 10 working pieces.",
      },
      {
        q: "Where do I drop it off?",
        a: "The shop is at Alma Matta Building, along Gachororo Road, JKUAT Gate B, Juja. Nairobi is on-site collection only. We send the meeting point once the visit is set.",
      },
      {
        q: "When are you open?",
        a: "Open every day, except occasionally on Sundays. WhatsApp is the fastest way to reach the desk during those hours.",
      },
      {
        q: "Do you also repair and buy electronics?",
        a: "Yes. The Juja shop repairs computers and buys working electronics after inspection. Repair and buyback stay at the desk. Donations are not sold as shop stock.",
      },
    ],
  },
] as const;

export default function FaqPage() {
  return (
    <>
      <main id="main" className="bg-[#f4fbf6]">
        <section className="relative isolate overflow-hidden bg-[#071a12] text-white">
          <Image
            src="/final-impact.jpg"
            alt="Laptops on a workbench under a Reduce, Reuse, Recycle sign"
            fill
            priority
            className="object-cover object-[center_40%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071a12] via-[#071a12]/80 via-45% to-[#071a12]/20" />
          <div className="relative mx-auto flex min-h-[28rem] w-full max-w-[96rem] flex-col justify-end px-4 pt-32 pb-16 sm:min-h-[32rem] sm:px-6 sm:pt-36 sm:pb-20">
            <p className="inline-flex w-fit items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-bold tracking-[0.22em] text-[#86efac]">
              FAQ
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl">
              Questions, answered before you travel.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Everything you might want to know about donations, sales, recycling, and the Juja desk.
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[96rem] px-4 py-16 sm:px-6 lg:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0b1b16] sm:text-4xl">
              Everything you need to know
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Short answers before you load the car. Tell us what you have, and we say what the desk can do with it.
            </p>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-14">
            {groups.map((group) => (
              <section key={group.title}>
                <h3 className="text-center text-xs font-bold tracking-[0.22em] text-[#16a34a]">
                  {group.title.toUpperCase()}
                </h3>
                <ul className="mt-4 space-y-3">
                  {group.items.map((item) => (
                    <li key={item.q}>
                      <details className="group rounded-[1.4rem] bg-white px-5 py-1 shadow-[0_10px_28px_-22px_rgba(15,23,42,0.45)]">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-3.5 text-[15px] font-semibold text-[#0b1b16] [&::-webkit-details-marker]:hidden">
                          <span>{item.q}</span>
                          <svg
                            viewBox="0 0 16 16"
                            className="size-4 shrink-0 text-slate-400 transition group-open:rotate-180"
                            aria-hidden="true"
                            fill="none"
                          >
                            <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </summary>
                        <p className="pb-4 text-sm leading-relaxed text-slate-600">{item.a}</p>
                      </details>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>

        <section id="brochure" className="scroll-mt-24 px-4 pb-10 sm:px-6">
          <div className="mx-auto flex w-full max-w-[96rem] flex-col items-start justify-between gap-6 rounded-[2rem] bg-[#071a12] px-6 py-10 text-white sm:px-10 lg:flex-row lg:items-center">
            <div>
              <p className="text-xs font-bold tracking-[0.22em] text-[#86efac]">BROCHURE</p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">What we have done, on one page.</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/80">
                Download or print the brochure. It lists the work over time and the programs for this period.
              </p>
            </div>
            <Link href="/brochure" className="inline-flex shrink-0 items-center rounded-full bg-[#22c55e] px-5 py-3 text-sm font-semibold text-white hover:bg-[#16a34a]">
              Download brochure
            </Link>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 lg:pb-20">
          <div className="mx-auto max-w-2xl rounded-[2rem] bg-white px-6 py-12 text-center shadow-[0_18px_40px_-28px_rgba(15,23,42,0.4)] sm:px-10">
            <h2 className="text-2xl font-extrabold tracking-tight text-[#0b1b16] sm:text-3xl">Still have questions?</h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
              A photo and a town is enough to start. The range for a sale is confirmed after we see the item.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href={whatsappHref(messages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#22c55e] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#16a34a]"
              >
                WhatsApp the desk
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-[#d7eadc] px-5 py-2.5 text-sm font-semibold text-[#0b1b16] hover:border-[#16a34a] hover:text-[#15803d]"
              >
                Contact us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Home4Footer />
    </>
  );
}
