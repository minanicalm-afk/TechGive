import type { ReactNode } from "react";
import Link from "next/link";
import { Home4Banner, Home4Footer } from "@/components/home4-footer";

export function Home4Service({
  image,
  imageAlt,
  imageRight,
  focus,
  eyebrow,
  title,
  text,
  primary,
  secondary,
  storyTitle,
  story,
  points,
  stepsTitle,
  steps,
  form,
  note,
}: {
  image: string;
  imageAlt?: string;
  imageRight?: boolean;
  focus?: "center" | "low" | "right";
  eyebrow: string;
  title: ReactNode;
  text: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
  storyTitle: string;
  story: string[];
  points: readonly string[];
  stepsTitle: string;
  steps: readonly (readonly [string, string])[];
  form?: ReactNode;
  note: string;
}) {
  return (
    <>
      <main id="main" className="bg-white">
        <Home4Banner image={image} imageAlt={imageAlt} imageRight={imageRight} focus={focus} eyebrow={eyebrow} title={title} text={text}>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={primary.href} className="inline-flex items-center rounded-full bg-[#22c55e] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#16a34a]">
              {primary.label}
            </Link>
            {secondary ? (
              <Link href={secondary.href} className="inline-flex items-center rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">
                {secondary.label}
              </Link>
            ) : null}
          </div>
        </Home4Banner>

        <section className="mx-auto grid w-full max-w-[96rem] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
          <div>
            <p className="text-xs font-bold tracking-[0.18em] text-[#16a34a]">HOW IT WORKS HERE</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0b1b16] sm:text-4xl">{storyTitle}</h2>
            {story.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-base leading-relaxed text-slate-600">
                {paragraph}
              </p>
            ))}
          </div>
          <ul className="h-fit space-y-3 rounded-[1.6rem] bg-[#f4fbf6] p-6 sm:p-8">
            {points.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-relaxed text-[#0b1b16]">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#16a34a] text-white" aria-hidden="true">
                  <svg viewBox="0 0 12 12" className="size-3">
                    <path d="M2.4 6.2 4.8 8.6 9.6 3.6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {point}
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-[#f4fbf6] py-16 lg:py-20">
          <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6">
            <h2 className="max-w-xl text-3xl font-extrabold tracking-tight text-[#0b1b16] sm:text-4xl">{stepsTitle}</h2>
            <ol className="mt-10 grid gap-6 md:grid-cols-3">
              {steps.map(([title, copy], index) => (
                <li key={title} className="rounded-[1.4rem] bg-white p-6 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.45)]">
                  <span className="grid size-11 place-items-center rounded-full bg-[#22c55e] text-lg font-extrabold text-white">{index + 1}</span>
                  <h3 className="mt-4 text-lg font-extrabold text-[#0b1b16]">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{copy}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {form}

        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto flex w-full max-w-[96rem] flex-col items-start justify-between gap-6 rounded-[2rem] bg-[#123d2b] px-6 py-10 text-white sm:px-10 lg:flex-row lg:items-center">
            <p className="max-w-2xl text-lg leading-relaxed text-white/85">{note}</p>
            <Link href={primary.href} className="inline-flex shrink-0 items-center rounded-full bg-[#22c55e] px-5 py-3 text-sm font-semibold text-white hover:bg-[#16a34a]">
              {primary.label}
            </Link>
          </div>
        </section>
      </main>
      <Home4Footer />
    </>
  );
}
