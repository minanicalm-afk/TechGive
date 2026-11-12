"use client";

import { useState } from "react";
import Image from "next/image";

const steps = [
  {
    title: "Tell us the fleet",
    copy: "Count how many machines you have, whether they are laptops, desktops or both, and roughly what condition they are in.",
    image: "/upgrades/fleet.jpg",
    alt: "Office staff at their desks using older computers",
  },
  {
    title: "We evaluate and you top up",
    copy: "The desk inspects the lot with you. There is no online price. You pay the difference toward a newer generation of the same kind.",
    image: "/upgrades/evaluate.jpg",
    alt: "Josachi staff and an organisation counting cash at the desk",
  },
  {
    title: "You select desired computers",
    copy: "Choose the machines you want from the newer stock. Laptops stay laptops. Desktops stay desktops.",
    image: "/upgrades/select.jpg",
    alt: "A pile of boxed computers with sample laptops on top",
  },
  {
    title: "We deliver and install",
    copy: "We collect the old kit and install the new machines in the same office, ready to use. Working machines that can still serve go to less privileged schools.",
    image: "/upgrades/deliver.jpg",
    alt: "The same office staff working on the new computers",
  },
] as const;

export function UpgradeSwap() {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6">
        <p className="text-center text-xs font-bold tracking-[0.22em] text-[#16a34a]">HOW THE SWAP WORKS</p>
        <h2 className="mt-3 text-center text-3xl font-extrabold tracking-tight text-[#0b1b16] sm:text-5xl">
          Trade in, top up, upgrade.
        </h2>
        <ol className="mx-auto mt-8 flex max-w-5xl flex-wrap items-center justify-center gap-2">
          {steps.map((item, index) => {
            const selected = index === active;
            return (
              <li key={item.title}>
                <button
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setActive(index)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${
                    selected ? "bg-[#22c55e] text-white" : "bg-[#f4fbf6] text-[#0b1b16] hover:bg-[#e7f7ec]"
                  }`}
                >
                  <span className={`grid size-6 place-items-center rounded-full text-xs ${selected ? "bg-white/20" : "bg-white text-[#16a34a]"}`}>
                    {index + 1}
                  </span>
                  {item.title}
                </button>
              </li>
            );
          })}
        </ol>

        <div className="mt-10 grid items-center gap-8 rounded-[2rem] bg-[#f4fbf6] p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h3 className="text-2xl font-extrabold tracking-tight text-[#0b1b16] sm:text-3xl">{step.title}</h3>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-600">{step.copy}</p>
          </div>
          <div className="relative min-h-[16rem] overflow-hidden rounded-[1.6rem] bg-[#123d2b] sm:min-h-[18rem]">
            <Image key={step.image} src={step.image} alt={step.alt} fill className="object-cover" sizes="(min-width: 1024px) 40vw, 100vw" />
          </div>
        </div>
      </div>
    </section>
  );
}
