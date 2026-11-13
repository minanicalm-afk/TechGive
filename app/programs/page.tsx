import type { Metadata } from "next";
import Link from "next/link";
import { EditorsPicks } from "@/components/editors-picks";
import { Home4Footer } from "@/components/home4-footer";
import { ProgramCard } from "@/components/program-card";
import { ProgramsHero } from "@/components/programs-hero";
import { programs, programsPeriod } from "@/lib/programs";

export const metadata: Metadata = {
  title: { absolute: "TechGive — Programs" },
  description: "Pick a listed activity for this year. Give cash, provide the listed item, or join the planning group.",
};

export default function ProgramsPage() {
  return (
    <>
      <main id="main" className="bg-[#f6f7f8]">
        <ProgramsHero programs={programs} period={programsPeriod} />

        <section id="list" className="scroll-mt-24 mx-auto w-full max-w-[96rem] px-4 py-10 sm:px-6 lg:py-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-[#0b1b16] uppercase">Featured programs</p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0b1b16] sm:text-3xl">
                {programsPeriod} activities you can support
              </h2>
            </div>
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-5">
            {programs.map((program) => (
              <li key={program.slug}>
                <ProgramCard program={program} />
              </li>
            ))}
          </ul>
        </section>

        <EditorsPicks />

        <section className="px-4 pb-20 sm:px-6">
          <div className="mx-auto flex w-full max-w-[96rem] flex-col items-start justify-between gap-6 overflow-hidden rounded-[1.75rem] bg-[#071a12] px-6 py-10 text-white sm:flex-row sm:items-center sm:px-10">
            <div>
              <p className="text-[11px] font-bold tracking-[0.22em] text-[#86efac] uppercase">Don&apos;t miss the list</p>
              <h2 className="mt-2 max-w-xl text-3xl font-extrabold tracking-tight sm:text-4xl">A school can ask to be added. A machine can still be left as a donation.</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/donations#request" className="rounded-full bg-[#22c55e] px-5 py-3 text-sm font-semibold text-white hover:bg-[#16a34a]">
                Request a slot
              </Link>
              <Link href="/donations" className="rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
                Donate a device
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Home4Footer />
    </>
  );
}
