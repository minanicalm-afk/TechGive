import type { Metadata } from "next";
import { FinalCta } from "@/components/final-cta";
import { FinalHow } from "@/components/final-how";
import { FinalImpact } from "@/components/final-impact";
import { FinalServices } from "@/components/final-services";
import { FinalStories } from "@/components/final-stories";
import { Hero } from "@/components/hero";
import { Home4Footer } from "@/components/home4-footer";
import { PartnerStrip } from "@/components/partner-carousel";

export const metadata: Metadata = {
  title: { absolute: "TechGive — Donate · Repair · Reuse · Empower" },
  description:
    "Donate, sell, upgrade, or responsibly recycle computers and electronics in Juja and Nairobi.",
};

export default function HomePage() {
  return (
    <>
      <main id="main">
        <Hero motion />
        <PartnerStrip />
        <FinalServices />
        <FinalImpact />
        <FinalHow />
        <FinalStories />
        <FinalCta />
      </main>
      <Home4Footer />
    </>
  );
}
