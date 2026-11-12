import type { Metadata } from "next";
import { PathForm } from "@/components/flow/path-form";
import { Home4Service } from "@/components/home4-service";

export const metadata: Metadata = {
  title: { absolute: "TechGive — Collection for Recycling" },
  description: "Paid collection of dead electronics in Juja and Nairobi. We travel for 20 pieces or more.",
};

export default function RecyclingPage() {
  return (
    <Home4Service
      image="/final-hero.jpg"
      imageAlt="A recycling mark made from computer circuit boards"
      imageRight
      eyebrow="COLLECTION FOR RECYCLING"
      title={
        <>
          Dead electronics,
          <span className="mt-1 block text-[#86efac]">collected and finished properly.</span>
        </>
      }
      text="Broken boards, dead computers, and equipment that will not power on are a paid collection. We do not buy them. What cannot be repaired is recycled."
      primary={{ href: "#pickup", label: "Schedule a pickup" }}
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
      form={
        <section id="pickup" className="scroll-mt-24 bg-[#f4fbf6] py-14 lg:py-20">
          <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6">
            <p className="text-xs font-bold tracking-[0.18em] text-[#16a34a]">THE COLLECTION NOTE</p>
            <h2 className="mt-3 max-w-xl text-3xl font-extrabold tracking-tight text-[#0b1b16] sm:text-4xl">
              Tell the desk what is leaving.
            </h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
              <div className="rounded-[2rem] bg-white p-6 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.45)] sm:p-8">
                <PathForm kind="dispose" tone="home" />
              </div>
              <aside className="h-fit rounded-[2rem] bg-[#123d2b] p-6 text-white sm:p-8">
                <p className="text-xs font-bold tracking-[0.18em] text-[#86efac]">BEFORE THE VAN COMES</p>
                <ol className="mt-5 space-y-4">
                  {[
                    "A list is enough to start. A PDF inventory can be sent on WhatsApp.",
                    "The charge is confirmed before the visit is booked.",
                    "What can still be repaired may be given to a school. The rest is recycled.",
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
