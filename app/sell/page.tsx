import type { Metadata } from "next";
import { SellFlow } from "@/components/flow/sell-flow";
import { PageHero } from "@/components/page-hero";
import { shell } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Sell to Josachi",
  description:
    "Describe an item and send photos. Josachi reviews them, then confirms a price range after inspection. No account is needed.",
};

export default function SellPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Sell"
        title="Sell your gadget."
        text="No account is needed for a first sale. Send the details and photos. The team reviews them before any range is shown, and the figure is confirmed after inspection."
      />
      <div className={`${shell} py-14 lg:py-20`}>
        <SellFlow />
      </div>
    </main>
  );
}
