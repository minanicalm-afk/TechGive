import type { Metadata } from "next";
import { Home4Service } from "@/components/home4-service";

export const metadata: Metadata = {
  title: { absolute: "TechGive — Repair Services" },
  description: "Book a computer repair at the Josachi desk in Juja.",
};

export default function RepairPage() {
  return (
    <Home4Service
      image="/home1-repair.jpg"
      focus="right"
      eyebrow="REPAIR SERVICES"
      title={
        <>
          Bring the fault.
          <span className="mt-1 block text-[#86efac]">We say if it can be saved.</span>
        </>
      }
      text="Hardware and software faults, looked at on the Juja bench. We tell you honestly if the machine is worth repairing before the work starts."
      primary={{ href: "/contact", label: "Book a repair" }}
      secondary={{ href: "/recycling", label: "If it is already dead" }}
      storyTitle="A repair is a job for a machine you want back."
      story={[
        "Describe the fault, or bring the computer to Alma Matta Building. We look at hardware and software and tell you what it needs.",
        "If the honest end is parts, we say so. Data recovery is not promised. A machine that will not be repaired can be collected as e-waste instead.",
      ]}
      points={[
        "Laptops and desktops",
        "Hardware and software faults",
        "You hear the verdict before the work",
        "Juja drop-off, or a description on WhatsApp first",
      ]}
      stepsTitle="How a repair is booked."
      steps={[
        ["Describe the fault", "What it is, and what it does or does not do."],
        ["We look at it", "At the shop, or from what you send."],
        ["You decide", "Repair it, or let us recycle what cannot be saved."],
      ]}
      note="Open every day, except occasionally on Sundays. The shop is at JKUAT Gate B, Juja."
    />
  );
}
