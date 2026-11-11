import type { Metadata } from "next";
import { Home4Service } from "@/components/home4-service";

export const metadata: Metadata = {
  title: { absolute: "TechGive — Donations" },
  description: "Donate a working or repairable computer. Josachi repairs it and gives it to a less privileged school.",
};

export default function DonationsPage() {
  return (
    <Home4Service
      image="/home-impact.jpg"
      eyebrow="DONATIONS"
      title={
        <>
          A computer you are finished with
          <span className="mt-1 block text-[#86efac]">can go back to class.</span>
        </>
      }
      text="Bring a working or repairable laptop, desktop, or monitor. We repair it and give it to a less privileged school. A missing charger is fine."
      primary={{ href: "/donate", label: "Donate a device" }}
      secondary={{ href: "/contact", label: "Ask about a drop-off" }}
      storyTitle="Donations are not stock for the shop."
      story={[
        "The machine is logged with your name and a note of what arrived, including whether it powers on. That note stays with it.",
        "If it can be made useful, the bench cleans it and fixes what it needs. A finished computer goes to a school for study or a class. What cannot be repaired is recycled.",
      ]}
      points={[
        "Laptops, desktops, monitors, and accessories",
        "Working or repairable is enough",
        "A missing charger is fine",
        "Drop off in Juja, or ask about collection",
      ]}
      stepsTitle="From your doorway to a school desk."
      steps={[
        ["Tell us what you have", "A short note is enough: the machine, and whether it powers on."],
        ["Leave it with the desk", "Bring it to Juja, or arrange a collection in Juja or Nairobi."],
        ["We place it", "A repaired computer is given to a less privileged school."],
      ]}
      note="Nairobi is on-site collection only. The shop is at Alma Matta Building, Gachororo Road, JKUAT Gate B."
    />
  );
}
