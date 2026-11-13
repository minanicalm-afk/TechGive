import type { Metadata } from "next";
import Link from "next/link";
import { Home4Footer } from "@/components/home4-footer";
import { PrintBrochure } from "@/components/print-brochure";
import { programs, programsPeriod } from "@/lib/programs";

export const metadata: Metadata = {
  title: { absolute: "TechGive — Brochure" },
  description: "What the work has been, and the programs listed for this period.",
};

export default function BrochurePage() {
  return (
    <>
      <main id="main" className="bg-white">
        <section className="bg-[#071a12] px-4 pt-32 pb-16 text-white sm:px-6 sm:pt-36 print:bg-white print:pt-8 print:text-[#0b1b16]">
          <div className="mx-auto w-full max-w-[96rem]">
            <p className="text-xs font-bold tracking-[0.22em] text-[#86efac] print:text-[#15803d]">BROCHURE</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-6xl">What the work has been.</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 print:text-slate-600">
              Machines are taken in, sorted, rebuilt when they can be, and placed with schools. Dead electronics are collected and disposed of. This page is the print brochure.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrintBrochure />
              <Link
                href="/faq#brochure"
                className="inline-flex items-center rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 print:hidden"
              >
                Back to FAQ
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-[96rem] gap-6 px-4 py-16 sm:px-6 md:grid-cols-3">
          {[
            ["Donate", "Working or repairable machines are logged, repaired, and given to schools."],
            ["Recycle", "What cannot be recovered is collected, recycled, or disposed of."],
            ["Re-use / Empower", "Recovered parts become working PCs. Students and schools receive them."],
          ].map(([title, copy]) => (
            <article key={title} className="rounded-[1.6rem] bg-[#f4fbf6] p-6">
              <h2 className="text-xl font-extrabold text-[#0b1b16]">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{copy}</p>
            </article>
          ))}
        </section>

        <section className="bg-[#f4fbf6] px-4 py-16 sm:px-6">
          <div className="mx-auto w-full max-w-[96rem]">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0b1b16]">Programs for {programsPeriod}</h2>
            <ul className="mt-8 grid gap-4 md:grid-cols-3">
              {programs.map((program) => (
                <li key={program.slug} className="rounded-[1.6rem] bg-white p-6">
                  <h3 className="text-lg font-extrabold text-[#0b1b16]">{program.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">Need: {program.need}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Home4Footer />
    </>
  );
}
