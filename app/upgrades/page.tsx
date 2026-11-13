import type { Metadata } from "next";
import Link from "next/link";
import { PathForm } from "@/components/flow/path-form";
import { Home4Banner, Home4Footer } from "@/components/home4-footer";
import { UpgradeSwap } from "@/components/upgrade-swap";

export const metadata: Metadata = {
  title: { absolute: "TechGive — System Upgrades" },
  description: "Hand in the computers you have and move to a newer generation of the same kind.",
};

const benefits = [
  ["Old kit leaves with us", "We collect the old machines. Nothing is left looking for a cupboard."],
  ["Same kind, newer", "Laptops stay laptops. Desktops stay desktops."],
  ["Delivered ready", "The new machines arrive set up, ready to use."],
  ["Good machines live on", "Working machines can be donated onward to less privileged schools."],
] as const;

const faqs = [
  {
    q: "Do we have to dispose of our old machines?",
    a: "No. We collect them as part of the upgrade, so they are not left in a cupboard. Working machines can be donated onward, or released for a small fee. Dead equipment is a paid collection, not part of this path.",
  },
  {
    q: "How is the trade-in value decided?",
    a: "There is no online price. The desk inspects the lot, then says what the old machines are worth toward a newer generation of the same kind. The figure can change after that visit.",
  },
  {
    q: "Can we upgrade only part of our fleet?",
    a: "Yes. Tell us how many machines, and whether they are laptops, desktops, or both. We travel for 10 working pieces or more.",
  },
  {
    q: "Where do you collect?",
    a: "The shop is at Alma Matta Building, along Gachororo Road, JKUAT Gate B, Juja. Nairobi is on-site collection only. We send the meeting point once the visit is set.",
  },
] as const;

export default function UpgradesPage() {
  return (
    <>
      <main id="main" className="bg-white">
        <Home4Banner
          image="/fleet-after.jpg"
          eyebrow="SYSTEM UPGRADES"
          title={
            <>
              Upgrade your fleet.
              <span className="mt-1 block text-[#86efac]">Keep the value of what you already own.</span>
            </>
          }
          text="IT asset disposal and recovery: system upgrades, recovery, testing, sorting, and reuse of functional equipment from components. Secure data destruction when an organisation needs the drive gone."
        >
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#request" className="inline-flex items-center rounded-full bg-[#22c55e] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#16a34a]">
              Estimate my upgrade
            </Link>
            <Link href="/contact" className="inline-flex items-center rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">
              Talk to the desk
            </Link>
          </div>
        </Home4Banner>

        <UpgradeSwap />

        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6">
            <p className="text-xs font-bold tracking-[0.18em] text-[#16a34a]">DISPOSAL AND RECOVERY</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-[#0b1b16] sm:text-4xl">
              Upgrade, recover, test, sort, and reuse.
            </h2>
            <ul className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {[
                ["System upgrades", "Hand in the generation you have. Move to a newer generation of the same kind."],
                ["Recovery", "Working machines and parts are pulled from the lot before anything is scrapped."],
                ["Testing and sorting", "Each unit is tested. Functional equipment is separated from waste."],
                ["Reuse from components", "Boards and parts that still work go into refurbished machines."],
                ["Upgrade and refurbishment", "The bench upgrades what can still serve, then places or returns it as agreed."],
                ["Secure data destruction", "When an organisation needs complete destruction of data, the drive is wiped or destroyed. Data recovery is not promised."],
              ].map(([title, copy]) => (
                <li key={title} className="rounded-[1.6rem] bg-[#f4fbf6] p-6">
                  <h3 className="text-lg font-extrabold text-[#0b1b16]">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{copy}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-[#f4fbf6] py-16 lg:py-20">
          <div className="mx-auto grid w-full max-w-[96rem] gap-4 px-4 sm:grid-cols-2 sm:px-6 xl:grid-cols-4">
            {benefits.map(([title, copy]) => (
              <article key={title} className="rounded-[1.6rem] bg-white p-6 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.45)]">
                <h2 className="text-lg font-extrabold tracking-tight text-[#0b1b16]">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="request" className="scroll-mt-24 bg-white py-16 lg:py-20">
          <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6">
            <div className="grid gap-6 rounded-[2rem] bg-[#f4fbf6] p-5 sm:p-8 lg:grid-cols-[1.25fr_0.75fr] lg:p-10">
              <div className="rounded-[1.8rem] bg-white p-6 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.45)] sm:p-8">
                <h2 className="text-3xl font-extrabold tracking-tight text-[#0b1b16] sm:text-4xl">Tell the desk about the fleet.</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">We travel when 10 working machines are collected.</p>
                <div className="mt-8">
                  <PathForm kind="upgrade" tone="home" />
                </div>
              </div>
              <aside className="h-fit rounded-[1.8rem] bg-[#123d2b] p-6 text-white sm:p-8">
                <p className="text-xs font-bold tracking-[0.18em] text-[#86efac]">WHAT HAPPENS NEXT</p>
                <ol className="mt-5 space-y-4">
                  {[
                    "The desk replies on WhatsApp after the note.",
                    "We confirm the count and the kind of machines.",
                    "The upgrade figure is confirmed after inspection.",
                    "We collect the old machines and deliver the new ones.",
                  ].map((step, index) => (
                    <li key={step} className="grid grid-cols-[2rem_1fr] gap-2 text-sm leading-relaxed text-white/80">
                      <span className="text-lg font-extrabold text-[#86efac]">0{index + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </aside>
            </div>
          </div>
        </section>

        <section className="bg-white pb-16 lg:pb-20">
          <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
            <h2 className="text-center text-3xl font-extrabold tracking-tight text-[#0b1b16] sm:text-4xl">
              Questions organisations ask
            </h2>
            <div className="mt-8 divide-y divide-slate-200 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white">
              {faqs.map((item) => (
                <details key={item.q} className="group px-5 sm:px-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-base font-semibold text-[#0b1b16] sm:text-lg [&::-webkit-details-marker]:hidden">
                    <span>{item.q}</span>
                    <span
                      className="grid size-8 shrink-0 place-items-center rounded-full bg-[#dcfce7] text-xl leading-none text-[#15803d] group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="pb-5 text-sm leading-relaxed text-slate-600">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 lg:pb-20">
          <div className="mx-auto flex w-full max-w-[96rem] flex-col items-start justify-between gap-6 rounded-[2rem] bg-[#071a12] px-6 py-10 text-white sm:px-10 lg:flex-row lg:items-center">
            <p className="max-w-2xl text-lg leading-relaxed text-white/85">
              This is for organisations. A single home computer is a donation, a sale, or a repair.
            </p>
            <Link href="#request" className="inline-flex shrink-0 items-center rounded-full bg-[#22c55e] px-5 py-3 text-sm font-semibold text-white hover:bg-[#16a34a]">
              Request an upgrade
            </Link>
          </div>
        </section>
      </main>
      <Home4Footer />
    </>
  );
}
