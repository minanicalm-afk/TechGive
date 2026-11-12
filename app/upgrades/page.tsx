import type { Metadata } from "next";
import { Home4Service } from "@/components/home4-service";

export const metadata: Metadata = {
  title: { absolute: "TechGive — System Upgrades" },
  description: "Hand in the computers you have and move to a newer generation of the same kind.",
};

export default function UpgradesPage() {
  return (
    <Home4Service
      image="/fleet-after.jpg"
      eyebrow="SYSTEM UPGRADES"
      title={
        <>
          Newer machines of the same kind,
          <span className="mt-1 block text-[#86efac]">without starting from zero.</span>
        </>
      }
      text="An organisation hands in the laptops or desktops it already has. We deliver a newer generation of the same kind, ready to use."
      primary={{ href: "/upgrade", label: "Request an upgrade" }}
      secondary={{ href: "/contact", label: "Talk to the desk" }}
      storyTitle="The old fleet is part of the upgrade."
      story={[
        "We collect the machines you are leaving and bring newer ones of the same kind. Laptops stay laptops. Desktops stay desktops.",
        "Working machines you hand in can be donated onward, or released for a small fee. We travel for 10 working pieces.",
      ]}
      points={[
        "Laptops, desktops, or both",
        "A newer generation of the same kind",
        "We travel for 10 working pieces",
        "The old machines are collected, not left in a cupboard",
      ]}
      stepsTitle="How an organisation upgrade runs."
      steps={[
        ["Tell us the fleet", "How many machines, and whether they are laptops, desktops, or both."],
        ["We plan the swap", "What you hand in, and the newer generation that replaces it."],
        ["We collect and deliver", "The old machines leave. The new ones arrive ready to use."],
      ]}
      note="This is for organisations. A single home computer is a donation, a sale, or a repair."
    />
  );
}
