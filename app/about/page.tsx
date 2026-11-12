import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AboutPath } from "@/components/about-path";
import { AboutStats } from "@/components/about-stats";
import { FinalCta } from "@/components/final-cta";
import { Home4Footer } from "@/components/home4-footer";

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

const values = [
  {
    mark: "1",
    title: "Fair and transparent",
    copy: "Offers are confirmed after inspection, and fees are agreed before we travel.",
  },
  {
    mark: "2",
    title: "Reuse first",
    copy: "If the machine can be saved, it stays in service. The bench recycles only what cannot be revived.",
  },
  {
    mark: "3",
    title: "Community impact",
    copy: "Repairable machines go to schools and people with less access to technology.",
  },
  {
    mark: "4",
    title: "Honest about limits",
    copy: "Data recovery is not promised, and we say so up front.",
  },
] as const;

const team = [
  { name: "Founder", role: "Josachi Computers" },
  { name: "Co-founder", role: "TechGive" },
  { name: "The bench", role: "Repairs · Juja shop" },
  { name: "Collection", role: "Juja & Nairobi" },
] as const;

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
                alt="A student using a refurbished laptop at a classroom desk"
                fill
                className="object-cover"
                style={{ objectPosition: "center 30%" }}
                sizes="(min-width: 1024px) 46vw, 100vw"
              />
            </div>
            <div>
              <p className="text-xs font-bold tracking-[0.22em] text-[#16a34a]">OUR MISSION</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0b1b16] sm:text-5xl">
                Technology deserves a longer life.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                We collect, repair and upgrade electronics. Whether you want to donate to a good cause, upgrade your company&apos;s fleet, sell to us for a fair price, or safely dispose of e-waste, we make it simple.
              </p>
              <ul className="mt-5 space-y-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                <li className="border-l-2 border-[#16a34a] pl-3">Recycle electronics for a cleaner, safer environment.</li>
                <li className="border-l-2 border-[#16a34a] pl-3">Upgrade an organisation&apos;s electronics when the fleet is ready to move on.</li>
                <li className="border-l-2 border-[#16a34a] pl-3">Repair and buy electronics at the Juja desk.</li>
              </ul>
              <ul className="mt-6 flex flex-wrap gap-2">
                {chips.map((chip) => (
                  <li key={chip.href}>
                    <Link
                      href={chip.href}
                      className="inline-flex rounded-full bg-[#dcfce7] px-4 py-2 text-sm font-semibold text-[#15803d] hover:bg-[#bbf7d0]"
                    >
                      {chip.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-[#f4fbf6] py-16 lg:py-24">
          <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold tracking-[0.22em] text-[#16a34a]">WHAT WE STAND FOR</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0b1b16] sm:text-5xl">Our values</h2>
            </div>
            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((item) => (
                <li key={item.mark} className="rounded-[1.5rem] bg-white p-6">
                  <span className="grid size-9 place-items-center rounded-full bg-[#dcfce7] text-sm font-extrabold text-[#15803d]">
                    {item.mark}
                  </span>
                  <h3 className="mt-5 text-lg font-extrabold text-[#0b1b16]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.copy}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <AboutPath />
        <AboutStats />

        <section className="bg-[#f4fbf6] py-16 lg:py-24">
          <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold tracking-[0.22em] text-[#16a34a]">THE TEAM</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0b1b16] sm:text-5xl">
                The people behind the desk
              </h2>
            </div>
            <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((person) => (
                <li key={person.name} className="text-center">
                  <div className="aspect-[4/5] rounded-[1.35rem] bg-[#c6f0d4]" aria-hidden="true" />
                  <p className="mt-4 text-base font-extrabold text-[#0b1b16]">{person.name}</p>
                  <p className="mt-1 text-sm text-slate-500">{person.role}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="pt-4">
          <FinalCta />
        </div>
      </main>
      <Home4Footer />
    </>
  );
}
