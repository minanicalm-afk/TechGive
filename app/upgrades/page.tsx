import type { Metadata } from "next";
import { PathForm } from "@/components/flow/path-form";
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
      primary={{ href: "#request", label: "Request an upgrade" }}
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
      form={
        <section id="request" className="scroll-mt-24 bg-[#f4fbf6] py-14 lg:py-20">
          <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6">
            <p className="text-xs font-bold tracking-[0.18em] text-[#16a34a]">THE UPGRADE NOTE</p>
            <h2 className="mt-3 max-w-xl text-3xl font-extrabold tracking-tight text-[#0b1b16] sm:text-4xl">
              Tell the desk about the fleet.
            </h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
              <div className="rounded-[2rem] bg-white p-6 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.45)] sm:p-8">
                <PathForm kind="upgrade" tone="home" />
              </div>
              <aside className="h-fit rounded-[2rem] bg-[#123d2b] p-6 text-white sm:p-8">
                <p className="text-xs font-bold tracking-[0.18em] text-[#86efac]">HOW A LOT IS HANDLED</p>
                <ol className="mt-5 space-y-4">
                  {[
                    "Send a count, the condition, and a PDF inventory if you have one.",
                    "There is no online price. The lot is weighed on inspection.",
                    "Working machines that can be saved go to less privileged schools.",
                  ].map((step, index) => (
                    <li key={step} className="grid grid-cols-[2rem_1fr] gap-2 text-sm leading-relaxed text-white/80">
                      <span className="text-lg font-extrabold text-[#86efac]">0{index + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </aside>
            </div>
          </div>
        </section>
      }
    />
  );
}
