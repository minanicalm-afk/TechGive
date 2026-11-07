"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { easeOut } from "@/components/ui/motion";

export function HeroFacts({
  facts,
}: {
  facts: readonly { href: string; label: string; value: string }[];
}) {
  const reduce = useReducedMotion();

  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {facts.map((fact, index) => (
        <li key={fact.label} className="h-full">
          <Link href={fact.href} className="block h-full">
          <motion.article
            className="flex h-full flex-col rounded-2xl border border-ink/10 border-t-[3px] border-t-copper bg-cream p-6 text-ink shadow-[0_22px_40px_-22px_rgba(18,33,27,0.55)]"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            whileHover={reduce ? undefined : { y: -6 }}
            transition={{ duration: 0.45, delay: index * 0.05, ease: easeOut }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">{fact.label}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink sm:text-[0.95rem]">{fact.value}</p>
          </motion.article>
          </Link>
        </li>
      ))}
    </ul>
  );
}
