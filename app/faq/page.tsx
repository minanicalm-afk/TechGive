import type { Metadata } from "next";
import Link from "next/link";
import { Home4Banner, Home4Footer } from "@/components/home4-footer";
import { messages, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "TechGive — FAQ" },
  description:
    "How donations, sales, disposal, and organisation upgrades work at the Josachi desk in Juja.",
};

const groups = [
  {
    title: "Giving a computer",
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
        q: "Do you buy equipment that is dead?",
        a: "No. Dead equipment is a paid collection for disposal, not a buyback. We travel for that when there are 20 pieces or more.",
      },
    ],
  },
  {
    title: "Organisations and the visit",
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
    ],
  },
] as const;

export default function FaqPage() {
  return (
    <>
      <main id="main" className="bg-white">
        <Home4Banner
          image="/final-hero.jpg"
          eyebrow="FAQ"
          title="The short answers, before you make the trip."
          text="Donations, sales, disposal, and upgrades all start the same way: tell us what you have, and we say what the desk can do with it."
        />

        <section className="mx-auto grid w-full max-w-[96rem] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[18rem_1fr] lg:py-20">
          <aside className="h-fit rounded-[1.6rem] bg-[#062c3c] p-6 text-white lg:sticky lg:top-28">
            <p className="text-xs font-bold tracking-[0.18em] text-[#86efac]">STILL UNSURE</p>
            <h2 className="mt-3 text-2xl font-extrabold leading-tight">Ask the desk before you load the car.</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              A photo and a town is enough to start. The range for a sale is confirmed after we see the item.
            </p>
            <a
              href={whatsappHref(messages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#22c55e] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#16a34a]"
            >
              WhatsApp the desk
            </a>
            <Link href="/home4/contact" className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-white/25 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10">
              Write a message
            </Link>
          </aside>

          <div className="space-y-12">
            {groups.map((group) => (
              <section key={group.title}>
                <h2 className="text-sm font-bold tracking-[0.16em] text-[#16a34a]">{group.title.toUpperCase()}</h2>
                <div className="mt-2 divide-y divide-slate-200 border-t border-slate-200">
                  {group.items.map((item, index) => (
                    <details key={item.q} className="group py-5" open={index === 0}>
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-extrabold text-[#0c2340] [&::-webkit-details-marker]:hidden">
                        <span>
                          <span className="mr-3 text-[#16a34a]">{String(index + 1).padStart(2, "0")}</span>
                          {item.q}
                        </span>
                        <span className="mt-1 grid size-7 shrink-0 place-items-center rounded-full bg-[#dcfce7] text-lg leading-none text-[#15803d] group-open:rotate-45" aria-hidden="true">
                          +
                        </span>
                      </summary>
                      <p className="mt-3 max-w-2xl pl-9 text-sm leading-relaxed text-slate-600 sm:text-base">{item.a}</p>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>
      </main>
      <Home4Footer />
    </>
  );
}
