import type { Metadata } from "next";
import Link from "next/link";
import { SellFlow } from "@/components/flow/sell-flow";
import { Home4Banner, Home4Footer } from "@/components/home4-footer";

export const metadata: Metadata = {
  title: { absolute: "TechGive — Sell Your Electronics" },
  description: "Sell a computer to Josachi. The offer is about 20–30% of the assessed desk price, confirmed after inspection.",
};

export default function SellPage() {
  return (
    <>
      <main id="main" className="bg-white">
        <Home4Banner
          image="/fleet-before.jpg"
          focus="low"
          eyebrow="SELL YOUR ELECTRONICS"
          title={
            <>
              A fair range,
              <span className="mt-1 block text-[#86efac]">after we see the machine.</span>
            </>
          }
          text="Send the details and photos. A sale is about 20–30% of the assessed desk price. The team confirms the range after inspection, and it can change."
        >
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#quote" className="inline-flex items-center rounded-full bg-[#22c55e] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#16a34a]">
              Get a quote
            </Link>
            <Link href="#quote" className="inline-flex items-center rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">
              Send photos first
            </Link>
          </div>
        </Home4Banner>

        <section className="mx-auto grid w-full max-w-[96rem] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
          <div>
            <p className="text-xs font-bold tracking-[0.18em] text-[#16a34a]">HOW IT WORKS HERE</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0b1b16] sm:text-4xl">
              We buy working electronics after we see them.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Send the details and photos. The first figure is an estimate, about 20–30% of the assessed desk price, and it can change after inspection. Payment is after that visit, in cash, M-Pesa, or by bank.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Bring the item to Juja, or ask for a collection. A donated machine is not bought. Dead equipment is a paid collection, not a sale.
            </p>
          </div>
          <ul className="h-fit space-y-3 rounded-[1.6rem] bg-[#f4fbf6] p-6 sm:p-8">
            {[
              "Laptops, desktops, TVs, printers, and other working gear",
              "Photos first, then a range after inspection",
              "About 20–30% of the assessed desk price",
              "National ID at handover",
            ].map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-relaxed text-[#0b1b16]">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#16a34a] text-white" aria-hidden="true">
                  <svg viewBox="0 0 12 12" className="size-3">
                    <path d="M2.4 6.2 4.8 8.6 9.6 3.6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {point}
              </li>
            ))}
          </ul>
        </section>

        <section id="quote" className="scroll-mt-24 bg-[#f4fbf6] py-14 lg:py-20">
          <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6">
            <p className="text-xs font-bold tracking-[0.18em] text-[#16a34a]">THE SALE NOTE</p>
            <h2 className="mt-3 max-w-xl text-3xl font-extrabold tracking-tight text-[#0b1b16] sm:text-4xl">
              Describe the item for a quote.
            </h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
              <div className="rounded-[2rem] bg-white p-6 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.45)] sm:p-8">
                <SellFlow />
              </div>
              <aside className="h-fit rounded-[2rem] bg-[#123d2b] p-6 text-white sm:p-8">
                <p className="text-xs font-bold tracking-[0.18em] text-[#86efac]">BEFORE AN OFFER</p>
                <ol className="mt-5 space-y-4">
                  {[
                    "Photos stay on this page until you send them on WhatsApp.",
                    "The range is confirmed after the desk inspects the machine.",
                    "A donated computer is not shop stock and is not bought.",
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
      </main>
      <Home4Footer />
    </>
  );
}
