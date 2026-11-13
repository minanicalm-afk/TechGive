import type { Metadata } from "next";
import Link from "next/link";
import { PathForm } from "@/components/flow/path-form";
import { Home4Banner, Home4Footer } from "@/components/home4-footer";

export const metadata: Metadata = {
  title: { absolute: "TechGive — Donations" },
  description:
    "Donate a working or repairable computer. Josachi repairs it and gives it to a less privileged school. Drop it in Juja, or ask for collection.",
};

const steps = [
  ["Tell us what you have", "A short note is enough: the machine, the condition, and your location."],
  ["Hand it over", "Drop it at the Juja shop, or ask for collection in Juja, Nairobi, or nearby."],
  ["The bench logs it", "Your name stays with the machine, along with what arrived and whether it powers on."],
  ["A school receives it", "If it can be made useful, we clean and repair it, then give it to a less privileged school."],
] as const;

export default function DonationsPage() {
  return (
    <>
      <main id="main" className="bg-white">
        <Home4Banner
          image="/home-impact.jpg"
          eyebrow="DONATIONS"
          title={
            <>
              A computer you are finished with
              <span className="mt-1 block text-[#86efac]">can go back to class.</span>
            </>
          }
          text="Bring a working or repairable laptop, desktop, or monitor. We repair it and give it to a less privileged school. A missing charger is fine."
        >
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#note" className="inline-flex items-center rounded-full bg-[#22c55e] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#16a34a]">
              Prepare the donation note
            </Link>
            <Link href="/programs" className="inline-flex items-center rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">
              Support a listed program
            </Link>
          </div>
        </Home4Banner>

        <section className="mx-auto w-full max-w-[96rem] px-4 py-16 sm:px-6 lg:py-20">
          <p className="text-xs font-bold tracking-[0.18em] text-[#16a34a]">WHAT WE TAKE AND WHO WE GIVE TO</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-balance text-[#0b1b16] sm:text-4xl">
            Working or repairable machines, given to schools and listed programs.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
            We take laptops, desktops, monitors, and TVs that can still serve. We give the finished machines to less privileged schools and to activities listed on the programs page. Cash and listed items for those activities are supported on the program, not here.
          </p>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["What we take", "Laptops, desktops, monitors, and TVs. A missing charger is fine. Dead loads that cannot be repaired are e-waste, not a donation."],
              ["Who we give to", "Less privileged schools, and organisations that have a slot on the programs page. Public cards show the name and the need only."],
              ["Where it can go", "Leave the placement to the desk, or name a school or organisation. Say if you want to stay anonymous or if a shout-out is fine."],
            ].map(([title, copy]) => (
              <li key={title} className="rounded-[1.4rem] bg-[#f4fbf6] p-6">
                <h3 className="text-lg font-extrabold text-[#0b1b16]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{copy}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-slate-600">
            Working donations are collected without a charge. A sale is a different path. Equipment that will not power on is a paid collection.{" "}
            <Link href="/recycling" className="font-semibold text-[#15803d] hover:text-[#166534]">
              That is disposal, not a donation.
            </Link>
          </p>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:py-20">
          <div className="mx-auto w-full max-w-[96rem] rounded-[2rem] bg-[#f4fbf6] px-5 py-10 sm:px-8 sm:py-12">
            <p className="text-xs font-bold tracking-[0.18em] text-[#16a34a]">THE PATH</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight text-balance text-[#0b1b16] sm:text-4xl">
              From your doorway to a school desk.
            </h2>
            <ol className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {steps.map(([title, copy], index) => (
                <li key={title} className="relative flex h-full flex-col rounded-[1.4rem] bg-white p-6 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.45)]">
                  {index < steps.length - 1 ? (
                    <span className="absolute top-[2.15rem] -right-4 hidden h-px w-4 bg-[#86efac] xl:block" aria-hidden="true" />
                  ) : null}
                  <span className="grid size-11 place-items-center rounded-full bg-[#22c55e] text-base font-extrabold text-white">
                    {index + 1}
                  </span>
                  <h3 className="mt-5 text-lg font-extrabold text-[#0b1b16]">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{copy}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="note" className="scroll-mt-24 bg-[#f4fbf6] py-14 lg:py-20">
          <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6">
            <p className="text-xs font-bold tracking-[0.18em] text-[#16a34a]">THE DONATION NOTE</p>
            <h2 className="mt-3 max-w-xl text-3xl font-extrabold tracking-tight text-[#0b1b16] sm:text-4xl">
              Tell the bench what you are leaving.
            </h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
              <div className="rounded-[2rem] bg-white p-6 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.45)] sm:p-8">
                <PathForm kind="donate" tone="home" />
              </div>
              <aside className="h-fit rounded-[2rem] bg-[#123d2b] p-6 text-white sm:p-8">
                <p className="text-xs font-bold tracking-[0.18em] text-[#86efac]">AFTER YOU SEND IT</p>
                <ol className="mt-5 space-y-4">
                  {[
                    "We confirm the town and whether you will bring it or we will collect it.",
                    "The machine is logged, tested, and repaired when it can be used.",
                    "A usable computer is given to a less privileged school.",
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

        <section id="request" className="scroll-mt-24 bg-white py-14 lg:py-20">
          <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6">
            <p className="text-xs font-bold tracking-[0.18em] text-[#16a34a]">REQUEST A PROGRAM SLOT</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight text-[#0b1b16] sm:text-4xl">
              A school or organisation can ask to be listed.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
              If the request is accepted, the programs page shows the name and the need only — for example ABC School, need of a Projector. Planning contacts stay with the desk.
            </p>
            <div className="mt-10 max-w-3xl rounded-[2rem] border border-slate-200 bg-[#f4fbf6] p-6 sm:p-8">
              <PathForm kind="request" tone="home" />
            </div>
          </div>
        </section>
      </main>
      <Home4Footer />
    </>
  );
}
