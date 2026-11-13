import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Home4Banner, Home4Footer } from "@/components/home4-footer";
import { ProgramSupport } from "@/components/program-support";
import { getProgram, programs } from "@/lib/programs";

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) return { title: "Program" };
  return {
    title: { absolute: `TechGive — ${program.title}` },
    description: `${program.title}. Need: ${program.need}.`,
  };
}

export default async function ProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) notFound();

  return (
    <>
      <main id="main" className="bg-white">
        <Home4Banner
          image={program.image}
          imageAlt={program.imageAlt}
          eyebrow={program.period}
          title={
            <>
              {program.title}
              <span className="mt-1 block text-[#86efac]">Need: {program.need}</span>
            </>
          }
          text={program.summary}
        >
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#support" className="inline-flex items-center rounded-full bg-[#22c55e] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#16a34a]">
              Support this activity
            </Link>
            <Link href="/programs" className="inline-flex items-center rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">
              All programs
            </Link>
          </div>
        </Home4Banner>

        <section id="support" className="scroll-mt-24 mx-auto grid w-full max-w-[96rem] gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
          <div>
            <p className="text-xs font-bold tracking-[0.18em] text-[#16a34a]">PUBLIC DETAILS</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0b1b16]">{program.title}</h2>
            <p className="mt-4 text-lg font-semibold text-[#0b1b16]">Need: {program.need}</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Donate cash, provide the listed item, or join us. The desk keeps planning contacts off this page.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-slate-600">
              <li>Donate — cash toward this activity.</li>
              <li>Provide listed item — {program.itemLabel}.</li>
              <li>Join us — your details go to the planning group.</li>
            </ul>
          </div>
          <ProgramSupport program={program} />
        </section>
      </main>
      <Home4Footer />
    </>
  );
}
