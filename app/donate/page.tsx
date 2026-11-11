import type { Metadata } from "next";
import Link from "next/link";
import { PathForm } from "@/components/flow/path-form";
import { Home4Banner, Home4Footer } from "@/components/home4-footer";

export const metadata: Metadata = {
  title: { absolute: "TechGive — Donate a computer" },
  description: "Donate a working or repairable computer. Josachi repairs it and gives it to a less privileged school.",
};

export default function DonatePage() {
  return (
    <>
      <main id="main" className="bg-[#f4fbf6]">
        <Home4Banner
          image="/final-svc-donate-2.jpg"
          eyebrow="DONATE"
          title={
            <>
              Leave a computer
              <span className="mt-1 block text-[#86efac]">for a school.</span>
            </>
          }
          text="Working or repairable. A missing charger is fine. Drop it at the Juja shop, or ask for collection in Juja, Nairobi, or nearby. Working donations are collected without a charge."
        >
          <div className="mt-8">
            <Link href="#note" className="inline-flex items-center rounded-full bg-[#22c55e] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#16a34a]">
              Prepare the donation note
            </Link>
          </div>
        </Home4Banner>

        <section id="note" className="scroll-mt-24 py-14 lg:py-20">
          <div className="mx-auto grid w-full max-w-[96rem] gap-6 px-4 sm:px-6 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="rounded-[2rem] bg-white p-6 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.45)] sm:p-8">
              <PathForm kind="donate" tone="home" />
            </div>
            <aside className="h-fit rounded-[2rem] bg-[#123d2b] p-6 text-white sm:p-8">
              <p className="text-xs font-bold tracking-[0.18em] text-[#86efac]">AFTER YOU SEND IT</p>
              <ol className="mt-5 space-y-4">
                {[
                  "We confirm the town and whether you will bring it or we will collect it.",
                  "The machine is logged, tested, and repaired when it can be used.",
                  "A usable computer is given to a less privileged school.",
                ].map((step, index) => (
                  <li key={step} className="grid grid-cols-[2rem_1fr] gap-2 text-sm leading-relaxed text-white/80">
                    <span className="text-lg font-extrabold text-[#86efac]">0{index + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </aside>
          </div>
        </section>
      </main>
      <Home4Footer />
    </>
  );
}
