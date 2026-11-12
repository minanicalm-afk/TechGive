import type { Metadata } from "next";
import { Home4Service } from "@/components/home4-service";

export const metadata: Metadata = {
  title: { absolute: "TechGive — Collection for Recycling" },
  description: "Paid collection of dead electronics in Juja and Nairobi. We travel for 20 pieces or more.",
};

export default function RecyclingPage() {
  return (
    <Home4Service
      image="/final-hero.jpg"
      eyebrow="COLLECTION FOR RECYCLING"
      title={
        <>
          Dead electronics,
          <span className="mt-1 block text-[#86efac]">collected and finished properly.</span>
        </>
      }
      text="Broken boards, dead computers, and equipment that will not power on are a paid collection. We do not buy them. What cannot be repaired is recycled."
      primary={{ href: "/dispose", label: "Schedule a pickup" }}
      secondary={{ href: "/contact", label: "Describe the load" }}
      storyTitle="This is disposal, not a buyback."
      story={[
        "If a machine cannot be repaired, it does not go to a school and it is not bought. It is taken apart for parts that still serve other computers, or sent for responsible recycling.",
        "Collection of dead equipment is paid. We travel when there are 20 pieces or more. Smaller loads can be brought to the Juja shop.",
      ]}
      points={[
        "Dead computers, parts, and other e-waste",
        "A fee for collection, confirmed before we travel",
        "We travel for 20 pieces or more",
        "Juja drop-off for a smaller load",
      ]}
      stepsTitle="How a collection is arranged."
      steps={[
        ["Tell us the load", "What is there, roughly how many pieces, and the town."],
        ["We confirm the fee", "The price is for collection and disposal, agreed before the visit."],
        ["We take it away", "Repairable parts stay in service. The rest is recycled."],
      ]}
      note="A single dead laptop can come to the Juja desk. A van is for a larger clear-out."
    />
  );
}
