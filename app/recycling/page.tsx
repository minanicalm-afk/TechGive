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
      eyebrow="E-WASTE MANAGEMENT"
      title={
        <>
          Recycling, collection,
          <span className="mt-1 block text-[#86efac]">and disposal — at the right level.</span>
        </>
      }
      text="Corporate, small business, and individual loads. Working laptops, desktops, monitors, and TVs can be given as donations during a collection. We dispose of all electronics that cannot be recovered."
      primary={{ href: "#pickup", label: "Schedule a pickup" }}
      secondary={{ href: "/contact", label: "Describe the load" }}
      storyTitle="Three levels of the same work."
      story={[
        "Corporate, small business, and individual collections all go through recycling, collection, and disposal. The load size and the fee are agreed before we travel.",
        "During a collection, organisations can also give working laptops, desktops, monitors, and TVs as donations. Those machines leave the e-waste line and follow the donation path. What we dispose of is all electronics that cannot be recovered.",
      ]}
      points={[
        "Corporate, small business, and individual",
        "Recycling, collection, and disposal",
        "Donatable on collection: laptops, desktops, monitors, TVs",
        "Disposal covers all electronics",
      ]}
      stepsTitle="How a collection is arranged."
      steps={[
        ["Tell us the load", "What is there, roughly how many pieces, and the town."],
        ["We confirm the fee", "The price is for collection and disposal, agreed before the visit."],
        ["We take it away", "Repairable parts stay in service. The rest is recycled."],
      ]}
      note="A single dead laptop can come to the Juja desk. A van is for a larger clear-out."
      form={
        <>
        <section className="bg-white px-4 py-12 sm:px-6">
          <div className="mx-auto grid w-full max-w-[96rem] gap-4 md:grid-cols-3">
            {[
              ["Corporate", "Fleet clear-outs and mixed e-waste. Donation of working laptops, desktops, monitors, and TVs can be logged on the same visit."],
              ["Small business", "Shop and office loads. Collection is paid when the equipment is dead. Working machines can still be donated."],
              ["Individual", "A home load. A small number of pieces can come to Juja. A van is for a larger clear-out."],
            ].map(([title, copy]) => (
              <article key={title} className="rounded-[1.6rem] bg-[#f4fbf6] p-6">
                <h3 className="text-lg font-extrabold text-[#0b1b16]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{copy}</p>
              </article>
            ))}
          </div>
        </section>
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
        </>
      }
    />
  );
}
