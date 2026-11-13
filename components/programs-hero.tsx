"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Program } from "@/lib/programs";

export function ProgramsHero({
  programs,
  period,
}: {
  programs: Program[];
  period: string;
}) {
  const slides = programs.filter((program, index, list) => list.findIndex((item) => item.image === program.image) === index);
  const [index, setIndex] = useState(0);
  const count = slides.length;
  const current = slides[index] ?? slides[0];
  const behind = count > 1 ? slides[(index + 1) % count] : undefined;
  const far = count > 2 ? slides[(index + 2) % count] : undefined;

  useEffect(() => {
    if (count < 2) return;
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % count);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [count]);

  return (
    <section className="relative isolate overflow-hidden bg-[#071a12] text-white">
      <Image
        src={current?.image ?? "/home-impact.jpg"}
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#071a12] via-[#071a12]/88 via-50% to-[#071a12]/25" />

      <div className="relative mx-auto flex min-h-[36rem] w-full max-w-[96rem] flex-col justify-end gap-8 px-4 pt-32 pb-16 sm:min-h-[42rem] sm:px-6 sm:pt-36 sm:pb-20 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <p className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.18em] text-[#86efac]">
            <span className="h-0.5 w-10 bg-[#86efac]" aria-hidden="true" />
            GET INVOLVED
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl">
            This year’s programs.
            <span className="mt-1 block text-[#86efac]">Pick the activity you want to support.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Cash, the listed item, or joining the planning group all go through the activity you choose. {period} is listed here. Public cards show the name and the need only.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#list" className="inline-flex items-center rounded-full bg-[#22c55e] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#16a34a]">
              See the list
            </Link>
            <Link href="/donations#request" className="inline-flex items-center rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">
              Request a slot
            </Link>
          </div>
        </div>

        {current ? (
          <div className="relative mx-auto h-44 w-40 shrink-0 sm:h-52 sm:w-48 lg:mx-0 lg:h-56 lg:w-52">
            {far ? (
              <div
                className="absolute overflow-hidden rounded-xl bg-[#0b1b16] shadow-xl ring-1 ring-white/25"
                style={{ width: "52%", aspectRatio: "3 / 4", right: "2%", top: "10%", transform: "rotate(7deg)" }}
              >
                <Image src={far.image} alt="" fill className="object-cover" sizes="120px" />
              </div>
            ) : null}
            {behind ? (
              <div
                className="absolute overflow-hidden rounded-xl bg-[#0b1b16] shadow-xl ring-1 ring-white/25"
                style={{ width: "54%", aspectRatio: "3 / 4", left: "0%", top: "16%", transform: "rotate(-7deg)" }}
              >
                <Image src={behind.image} alt="" fill className="object-cover" sizes="130px" />
              </div>
            ) : null}
            <Link
              href={`/programs/${current.slug}`}
              className="absolute top-[14%] left-[20%] z-10 w-[56%] overflow-hidden rounded-xl bg-[#0b1b16] shadow-xl ring-2 ring-white/55"
              style={{ aspectRatio: "3 / 4" }}
            >
              <Image src={current.image} alt={current.imageAlt} fill className="object-cover" sizes="150px" />
            </Link>
            {count > 1 ? (
              <div className="absolute right-0 bottom-0 z-20 flex items-center gap-1.5">
                <button
                  type="button"
                  aria-label="Previous program image"
                  onClick={() => setIndex((value) => (value - 1 + count) % count)}
                  className="grid size-8 place-items-center rounded-full bg-white/15 text-base text-white hover:bg-white/25"
                >
                  ‹
                </button>
                <button
                  type="button"
                  aria-label="Next program image"
                  onClick={() => setIndex((value) => (value + 1) % count)}
                  className="grid size-8 place-items-center rounded-full bg-white/15 text-base text-white hover:bg-white/25"
                >
                  ›
                </button>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
