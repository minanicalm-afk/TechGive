import type { Metadata } from "next";
import { CloseCta } from "@/components/close-cta";
import { DonationStory } from "@/components/donation-story";
import { FleetUpgrade, TrustedProof } from "@/components/fleet-proof";
import { StartHere } from "@/components/start-here";
import { Hero } from "@/components/hero";

export const metadata: Metadata = {
  title: { absolute: "TechGive — Donate · Repair · Reuse · Empower" },
  description:
    "Donate, sell, upgrade, or responsibly recycle computers and electronics in Juja and Nairobi.",
};

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <TrustedProof />
      <StartHere />
      <DonationStory />
      <FleetUpgrade />
      <CloseCta />
    </main>
  );
}
