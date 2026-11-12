"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { easeOut } from "@/components/ui/motion";

const steps = [
  {
    mark: "01",
    title: "The Juja shop",
    copy: "Josachi Computers at Alma Matta Building, JKUAT Gate B. Drop-off, sales, and repairs happen here.",
  },
  {
    mark: "02",
    title: "The donation desk",
    copy: "TechGive sits with that shop. Repairable machines are logged, cleaned, and prepared for a school.",
  },
  {
    mark: "03",
    title: "Collection",
    copy: "We collect in Juja and, by arrangement, in Nairobi. Working donations are collected without a charge.",
  },
  {
    mark: "04",
    title: "A class receives it",
    copy: "A finished machine goes to a student, a job seeker, or a community class that is short of computers.",
  },
] as const;

export function AboutPath() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const check = () => {
      const rect = node.getBoundingClientRect();
      const visible = rect.top < window.innerHeight * 0.85 && rect.bottom > 60;
      if (!visible) return;
      setActive(true);
    };
    check();
    const id = window.setInterval(check, 200);
    window.addEventListener("scroll", check, { passive: true });
    return () => {
      window.clearInterval(id);
      window.removeEventListener("scroll", check);
    };
  }, []);

  const play = active || reduce;

  return (
    <section ref={sectionRef} className="bg-[#050807] py-16 text-white lg:py-24">
      <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-[#4ade80]">
            <span className="h-px w-10 bg-[#4ade80]" aria-hidden="true" />
            THE PATH
            <span className="h-px w-10 bg-[#4ade80]" aria-hidden="true" />
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">
            The journey of a <span className="text-[#3dff6a]">machine.</span>
          </h2>
        </div>

        <div className="relative mx-auto mt-16 max-w-4xl">
          <motion.div
            className="absolute top-3 bottom-8 left-[15px] w-px origin-top bg-[#22c55e] md:left-1/2 md:-translate-x-1/2"
            initial={{ scaleY: reduce ? 1 : 0 }}
            animate={{ scaleY: play ? 1 : 0 }}
            transition={{ duration: 1.15, ease: easeOut }}
            aria-hidden="true"
          />

          <ol className="space-y-8 md:space-y-12">
            {steps.map((step, index) => {
              const left = index % 2 === 0;
              return (
                <li key={step.mark} className="relative md:grid md:grid-cols-2 md:items-start">
                  <motion.span
                    className="absolute top-8 left-[15px] z-10 size-3.5 -translate-x-1/2 rounded-full border-[3px] border-[#050807] bg-[#22c55e] md:left-1/2"
                    initial={{ scale: reduce ? 1 : 0 }}
                    animate={{ scale: play ? 1 : 0 }}
                    transition={{ duration: 0.35, delay: reduce ? 0 : 0.18 + index * 0.14, ease: easeOut }}
                    aria-hidden="true"
                  />
                  <motion.article
                    className={`ml-10 md:ml-0 ${left ? "md:col-start-1 md:pr-14" : "md:col-start-2 md:pl-14"}`}
                    initial={{ opacity: reduce ? 1 : 0, x: reduce ? 0 : left ? -48 : 48, y: reduce ? 0 : 16 }}
                    animate={play ? { opacity: 1, x: 0, y: 0 } : undefined}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.55, delay: reduce ? 0 : 0.12 + index * 0.14, ease: easeOut }}
                  >
                    <div className="rounded-[1.35rem] bg-white p-6 text-[#0b1b16] shadow-[0_0_0_6px_rgba(34,197,94,0.22)]">
                      <p className="inline-flex rounded-full bg-[#e7f8ed] px-2.5 py-0.5 text-[11px] font-bold tracking-[0.18em] text-[#15803d]">
                        {step.mark}
                      </p>
                      <h3 className="mt-3 text-xl font-extrabold tracking-tight">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.copy}</p>
                    </div>
                  </motion.article>
                </li>
              );
            })}

            <li className="relative md:grid md:grid-cols-2">
              <motion.span
                className="absolute top-8 left-[15px] z-10 size-3.5 -translate-x-1/2 rounded-full border-[3px] border-[#050807] bg-[#22c55e] md:left-1/2"
                initial={{ scale: reduce ? 1 : 0 }}
                animate={{ scale: play ? 1 : 0 }}
                transition={{ duration: 0.35, delay: reduce ? 0 : 0.74, ease: easeOut }}
                aria-hidden="true"
              />
              <motion.article
                className="ml-10 md:col-start-2 md:ml-0 md:pl-14"
                initial={{ opacity: reduce ? 1 : 0, x: reduce ? 0 : 48, y: reduce ? 0 : 16 }}
                animate={play ? { opacity: 1, x: 0, y: 0 } : undefined}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: reduce ? 0 : 0.68, ease: easeOut }}
              >
                <div className="rounded-[1.35rem] bg-white p-6 text-[#0b1b16] shadow-[0_0_0_6px_rgba(34,197,94,0.22)]">
                  <p className="inline-flex rounded-full bg-[#e7f8ed] px-2.5 py-0.5 text-[11px] font-bold tracking-[0.18em] text-[#15803d]">
                    NEXT
                  </p>
                  <h3 className="mt-3 text-xl font-extrabold tracking-tight">Bring the next machine</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    A photo and a town is enough to start. Tell the desk what you have.
                  </p>
                  <Link href="/donations#note" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#15803d] hover:text-[#166534]">
                    Donate a device
                    <svg viewBox="0 0 16 16" className="size-3.5" aria-hidden="true" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </motion.article>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
