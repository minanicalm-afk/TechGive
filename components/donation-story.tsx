"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { easeOut } from "@/components/ui/motion";
import { shell } from "@/lib/ui";

const stages = [
  {
    n: "01",
    title: "Drop it off",
    copy: "Bring it to the Juja shop, or ask for collection in Juja, Nairobi, or nearby. A missing charger is fine.",
    record: "It arrives at a desk",
    detail: "Logged with your name and a WhatsApp number. The shop is at Alma Matta Building, JKUAT Gate B.",
  },
  {
    n: "02",
    title: "We log it",
    copy: "The machine gets a note that stays with it: what arrived, whether it powers on, and if it was used for work.",
    record: "A note stays with it",
    detail: "The record names the machine, its condition, and whether the drive needs to be wiped.",
  },
  {
    n: "03",
    title: "The bench repairs it",
    copy: "We clean it and fix what we can. Memory, storage, or a fresh system goes in when that is what makes it useful.",
    record: "The bench records the work",
    detail: "Tested, repaired, and fitted with what it needs. A machine that cannot be placed is kept for parts.",
  },
  {
    n: "04",
    title: "Someone receives it",
    copy: "A finished computer is given to a less privileged school. What cannot be repaired is recycled or disposed of responsibly.",
    record: "Placed with a school",
    detail: "Collected computers that can be saved go to schools. Dead units that cannot be recycled are disposed of.",
  },
] as const;

export function DonationStory() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [hold, setHold] = useState(false);
  const stage = stages[active];

  useEffect(() => {
    if (reduce || hold) return;
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % stages.length);
    }, 4200);
    return () => window.clearInterval(id);
  }, [reduce, hold]);

  return (
    <section id="donations" className="border-y border-ink/10 bg-cream py-20 sm:py-28">
      <div className={shell}>
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">How giving works</p>
            <h2 className="mt-3 font-serif text-4xl leading-[1.05] tracking-[-0.03em] sm:text-5xl">
              A spare computer can go back to work.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              TechGive collects e-waste from people, companies, and institutions. What can be repaired
              is given to less privileged schools. The rest is recycled or disposed of in an
              environmentally friendly way.
            </p>
            <div className="mt-8">
              <Button href="/donate">Donate a device</Button>
            </div>
          </div>

          <figure className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-moss shadow-[0_28px_60px_-32px_rgba(18,33,27,0.55)]">
              <motion.img
                src="/donation-bench.jpg"
                alt="An illustrated laptop on a repair bench, tagged and waiting to be logged, with a charger, screwdrivers, and a tray of screws beside it."
                className="h-full w-full object-cover"
                initial={reduce ? false : { scale: 1.06 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.2, ease: easeOut }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/0 to-ink/10" />
              <motion.figcaption
                key={stage.n}
                className="absolute right-4 bottom-4 left-4 rounded-2xl bg-cream/95 p-4 text-ink shadow-[0_18px_40px_-24px_rgba(18,33,27,0.8)] sm:right-auto sm:max-w-xs"
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: easeOut }}
              >
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-copper">
                  On the record · {stage.n}
                </p>
                <p className="mt-1 font-serif text-2xl tracking-[-0.03em]">{stage.record}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{stage.detail}</p>
              </motion.figcaption>
            </div>
          </figure>
        </div>

        <div className="relative mt-14">
          <div className="absolute top-5 right-[12%] left-[12%] hidden h-px bg-ink/10 lg:block" aria-hidden="true" />
          <motion.div
            className="absolute top-5 right-[12%] left-[12%] hidden h-px origin-left bg-copper lg:block"
            aria-hidden="true"
            animate={{ scaleX: active / (stages.length - 1) }}
            transition={{ duration: 0.45, ease: easeOut }}
          />
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {stages.map((item, index) => {
              const selected = index === active;
              return (
                <li key={item.n}>
                  <button
                    type="button"
                    aria-pressed={selected}
                    className="w-full text-left"
                    onClick={() => {
                      setActive(index);
                      setHold(true);
                    }}
                  >
                    <span
                      className={`relative z-10 grid size-10 place-items-center rounded-full border font-serif text-lg transition-colors ${
                        selected
                          ? "border-copper bg-copper text-cream"
                          : "border-ink/10 bg-paper text-ink"
                      }`}
                    >
                      {index + 1}
                    </span>
                    <span className="mt-4 block font-serif text-2xl tracking-[-0.03em]">{item.title}</span>
                    <span className="mt-2 block text-sm leading-relaxed text-ink-soft">{item.copy}</span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
