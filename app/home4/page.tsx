import type { Metadata } from "next";
import { FinalCta } from "@/components/final-cta";
import { FinalHow } from "@/components/final-how";
import { FinalImpact } from "@/components/final-impact";
import { FinalServices } from "@/components/final-services";
import { Hero } from "@/components/hero";

export const metadata: Metadata = {
  title: { absolute: "TechGive — Home 4" },
  description:
    "Donate, sell, upgrade, or responsibly recycle computers and electronics in Juja and Nairobi.",
};

export default function Home4Page() {
  return (
    <main id="main">
      <Hero image="/final-hero.jpg" />
      <FinalServices />
      <FinalImpact />
      <FinalHow />
      <FinalCta />
    </main>
  );
}
