import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AboutPath } from "@/components/about-path";
import { Home4Footer } from "@/components/home4-footer";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "TechGive — About Us" },
  description:
    "Josachi collects, repairs, and recycles computers in Juja and Nairobi. Repairable machines go to less privileged schools.",
};

const chips = [
  { href: "/donations", label: "Donate" },
  { href: "/repair", label: "Repair" },
  { href: "/recycling", label: "Recycle" },
  { href: "/sell", label: "Sell" },
  { href: "/upgrades", label: "Upgrade" },
] as const;

const reasons = [
  {
    title: "Donations are not shop stock",
    copy: "A repaired machine goes to a person or school that needs it. It is not sold over the counter.",
  },
  {
    title: "The range is confirmed after inspection",
    copy: "A sale starts as an estimate. Payment follows once the desk has seen the item.",
  },
  {
    title: "Files are wiped before handover",
    copy: "Before a machine is handed on or opened for parts, the drive is wiped or destroyed.",
  },
  {
    title: "The fee is agreed before we travel",
    copy: "Dead equipment is a paid collection, not a buyback. We confirm the fee, then we come.",
  },
  {
    title: "Juja drop-off, Nairobi collection",
    copy: "Bring it to JKUAT Gate B, or ask for collection. Nairobi is on-site collection only.",
  },
  {
    title: "Repair and buy at the same desk",
    copy: "The Juja shop repairs computers and buys working electronics after inspection.",
  },
] as const;

const values = [
  {
    title: "Donation first",
    copy: "A donation goes a long way. We repair it and send it to a person or school that needs it.",
  },
  {
    title: "Repair what can still work",
    copy: "The bench decides. Working parts stay in service. We do not dump a machine that can still serve a class.",
  },
  {
    title: "A cleaner, safer environment",
    copy: "Electronics that cannot be repaired are recycled. Dead equipment is collected, not left in a storeroom.",
  },
  {
    title: "An honest figure",
    copy: "The offer is about 20–30% of the assessed desk price. It can change after we inspect the item.",
  },
] as const;

const leaders = [
  {
    mark: "J",
    quote: "The bench decides what a machine can still do. Sales and repairs stay at the Juja shop.",
    name: "Founder",
    role: "Josachi Computers",
  },
  {
    mark: "T",
    quote: "A donation goes a long way. We repair the machine and send it to a school that needs it.",
    name: "Co-founder",
    role: "TechGive",
  },
] as const;

function PlusMark({ letter }: { letter: string }) {
  return (
    <div className="relative mx-auto grid h-[13.5rem] w-[13.5rem] place-items-center sm:h-[15.5rem] sm:w-[15.5rem]">
      <span className="absolute inset-y-[22%] inset-x-0 rounded-[2.6rem] bg-[#c6f0d4]" aria-hidden="true" />
      <span className="absolute inset-x-[22%] inset-y-0 rounded-[2.6rem] bg-[#c6f0d4]" aria-hidden="true" />
      <span className="relative text-5xl font-extrabold tracking-tight text-[#15803d] sm:text-6xl">{letter}</span>
    </div>
  );
}

function ReasonIcon({ index }: { index: number }) {
  const common = { viewBox: "0 0 24 24", className: "size-7", fill: "none", "aria-hidden": true } as const;
  if (index === 0) {
    return (
      <svg {...common}>
        <path d="M12 3 4.5 7v5.5c0 4.2 3 7.2 7.5 8.5 4.5-1.3 7.5-4.3 7.5-8.5V7L12 3Z" stroke="currentColor" strokeWidth="1.7" />
        <path d="m9 12 2 2 4-4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg {...common}>
        <path d="M4 7h16M7 7V5h10v2M8 7l1 13h6l1-13" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    );
  }
  if (index === 2) {
    return (
      <svg {...common}>
        <rect x="5" y="6" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M8 10h8M8 14h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }
  if (index === 3) {
    return (
      <svg {...common}>
        <path d="M7 8.5A5 5 0 0 1 12 6a5 5 0 0 1 4.2 2.3M16.5 12A5 5 0 0 1 12 18a5 5 0 0 1-4.2-2.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M16 7.5V5h2.5M8 16.5V19H5.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }
  if (index === 4) {
    return (
      <svg {...common}>
        <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M14.5 6.5a3.5 3.5 0 0 0-4.8 4.1L4 16.3 7.7 20l5.7-5.7a3.5 3.5 0 0 0 4.1-4.8L15 12l-3-3 2.5-2.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      <main id="main" className="bg-white">
        <section className="relative isolate overflow-hidden bg-[#071a12] text-white">
          <Image
            src="/home-impact.jpg"
            alt="A student using a laptop at a classroom desk"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: "center 30%" }}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071a12] via-[#071a12]/72 via-40% to-[#071a12]/15" />
          <div className="relative mx-auto flex min-h-[28rem] w-full max-w-[96rem] flex-col justify-end px-4 pt-32 pb-16 sm:min-h-[32rem] sm:px-6 sm:pt-36 sm:pb-20">
            <p className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-[#86efac]">
              <span className="h-px w-10 bg-[#86efac]" aria-hidden="true" />
              ABOUT US
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl">
              We turn spare computers into classroom machines.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              TechGive is the public desk of Josachi Computers in Juja. We collect electronics, repair what can still work, and send finished machines to schools that need them.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/donations#note" className="inline-flex items-center rounded-full bg-[#22c55e] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#16a34a]">
                Donate a device
              </Link>
              <Link href="/contact" className="inline-flex items-center rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">
                Visit the desk
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto grid w-full max-w-[96rem] items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
            <div className="relative min-h-[22rem] overflow-hidden rounded-[1.75rem] sm:min-h-[28rem]">
              <Image
                src="/home-impact.jpg"
                alt="A student using a laptop at a classroom desk"
                fill
                className="object-cover"
                style={{ objectPosition: "center 30%" }}
                sizes="(min-width: 1024px) 46vw, 100vw"
              />
              <p className="absolute bottom-5 left-5 inline-flex rounded-full bg-[#0b1b16]/90 px-3.5 py-1.5 text-xs font-semibold text-white">
                Juja · Alma Matta, JKUAT Gate B
              </p>
            </div>
            <div>
              <p className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-[#16a34a]">
                <span className="h-px w-10 bg-[#16a34a]" aria-hidden="true" />
                OUR STORY
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0b1b16] sm:text-5xl">
                Why TechGive?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                Because a spare computer still has a class to reach. Josachi is the shop. TechGive is the donation desk that sits with it. People, companies, and institutions hand in electronics. The bench decides what is repaired, given, sold, or recycled.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                Donations are not stock. A working or repairable machine is cleaned and fixed, then given to a less privileged school. Nairobi is collection by arrangement. We send the meeting point once the visit is set.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {chips.map((chip) => (
                  <li key={chip.href}>
                    <Link
                      href={chip.href}
                      className="inline-flex rounded-full border border-[#d7eadc] bg-white px-4 py-2 text-sm font-semibold text-[#0b1b16] hover:border-[#16a34a] hover:text-[#15803d]"
                    >
                      {chip.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/#services" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#15803d] hover:text-[#166534]">
                See the services
                <svg viewBox="0 0 16 16" className="size-3.5" aria-hidden="true" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#eef8f1] py-16 lg:py-24">
          <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-[#16a34a]">
                <span className="h-px w-10 bg-[#16a34a]" aria-hidden="true" />
                WHY CHOOSE US
                <span className="h-px w-10 bg-[#16a34a]" aria-hidden="true" />
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0b1b16] sm:text-5xl">
                Why people bring a machine to the desk.
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Short answers before you load the car. This is how the Juja bench actually works.
              </p>
            </div>
            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {reasons.map((item, index) => (
                <li key={item.title} className="relative rounded-[1.5rem] bg-white p-6 shadow-[0_16px_40px_-28px_rgba(15,23,42,0.35)]">
                  <span className="absolute top-5 right-5 text-xs font-bold tracking-[0.16em] text-slate-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="grid size-12 place-items-center rounded-2xl bg-[#e7f8ed] text-[#16a34a]">
                    <ReasonIcon index={index} />
                  </span>
                  <h3 className="mt-5 text-lg font-extrabold text-[#0b1b16]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.copy}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto grid w-full max-w-[96rem] items-start gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
            <div>
              <p className="text-xs font-bold tracking-[0.22em] text-[#16a34a]">OUR VALUES</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0b1b16] sm:text-5xl">
                What drives the desk.
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-slate-600">
                Mission and vision, in the work: donate, repair, recycle, upgrade, and buy — without pretending a donation is shop stock.
              </p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {values.map((item) => (
                <li key={item.title} className="rounded-[1.4rem] bg-[#f4fbf6] p-6">
                  <h3 className="text-lg font-extrabold text-[#0b1b16]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.copy}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <AboutPath />

        <section className="py-16 lg:py-24">
          <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold tracking-[0.22em] text-[#16a34a]">MEET THE DESK</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0b1b16] sm:text-5xl">
                Two paths. One bench.
              </h2>
            </div>
            <ul className="mx-auto mt-14 grid max-w-4xl gap-12 sm:grid-cols-2">
              {leaders.map((person) => (
                <li key={person.role} className="text-center">
                  <PlusMark letter={person.mark} />
                  <blockquote className="mx-auto mt-8 max-w-sm text-base leading-relaxed text-slate-600 italic">
                    “{person.quote}”
                  </blockquote>
                  <p className="mt-5 text-base font-extrabold text-[#0b1b16]">{person.name}</p>
                  <p className="mt-1 text-sm text-slate-500">{person.role}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-[#e7efe9] py-16 lg:py-20">
          <div className="mx-auto grid w-full max-w-[96rem] items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-[#16a34a]">
                <span className="h-px w-10 bg-[#16a34a]" aria-hidden="true" />
                LOCATION
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0b1b16] sm:text-4xl">
                One shop. Collection where the visit is set.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{contact.place}.</p>
              <p className="mt-2 text-base leading-relaxed text-slate-600">
                {contact.hours} Nairobi is on-site collection only.
              </p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#15803d] hover:text-[#166534]">
                Get directions
                <svg viewBox="0 0 16 16" className="size-3.5" aria-hidden="true" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
            <div className="overflow-hidden rounded-[1.75rem] border border-[#e7efe9]">
              <iframe
                title="Map of the Josachi shop near JKUAT Gate B, Juja"
                src={contact.mapEmbed}
                className="h-[22rem] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>
      <Home4Footer />
    </>
  );
}
