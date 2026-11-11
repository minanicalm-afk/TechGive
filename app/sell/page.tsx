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

        <section id="quote" className="scroll-mt-24 py-14 lg:py-20">
          <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6">
            <SellFlow />
          </div>
        </section>
      </main>
      <Home4Footer />
    </>
  );
}
