"use client";

import { motion, useReducedMotion } from "framer-motion";

const brands = [
  "Greenfield Academy",
  "BrightPath NGO",
  "Northwind Logistics",
  "Kijani Foundation",
  "Orbit Bank",
];

export function PartnerCarousel() {
  const reduce = useReducedMotion();
  const loop = [...brands, ...brands];

  return (
    <div>
      <p className="text-center text-xs font-semibold tracking-[0.22em] text-ink-soft">
        Trusted by schools, NGOs and companies
      </p>
      <div className="relative mt-8 overflow-hidden">
        <motion.ul
          className="flex w-max items-center gap-16"
          animate={reduce ? undefined : { x: ["0%", "-50%"] }}
          transition={reduce ? undefined : { duration: 22, ease: "linear", repeat: Infinity }}
        >
          {loop.map((name, index) => (
            <li key={`${name}-${index}`} className="text-lg font-semibold whitespace-nowrap text-ink/35 sm:text-xl">
              {name}
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}

export function PartnerStrip() {
  return (
    <section className="border-y border-[#e7efe9] bg-white py-12 sm:py-16" aria-label="Partners">
      <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6">
        <PartnerCarousel />
      </div>
    </section>
  );
}
