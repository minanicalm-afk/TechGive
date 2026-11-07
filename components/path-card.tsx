"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CardLink } from "@/components/ui/card-link";
import type { ButtonVariant } from "@/components/ui/button";
import { easeOut } from "@/components/ui/motion";

export function PathCard({
  index,
  title,
  copy,
  cta,
  href,
  featured = false,
  delay = 0,
}: {
  index: number;
  title: string;
  copy: string;
  cta: string;
  href: string;
  featured?: boolean;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const number = `0${index}`;

  return (
    <motion.div
      className="h-full"
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay, ease: easeOut }}
    >
      <motion.article
        className={`relative flex h-full flex-col overflow-hidden rounded-2xl p-6 sm:p-7 ${
          featured
            ? "bg-moss text-cream shadow-[0_24px_50px_-28px_rgba(18,33,27,0.55)]"
            : "border border-ink/10 border-t-[3px] border-t-copper bg-cream text-ink shadow-[0_16px_40px_-28px_rgba(18,33,27,0.45)]"
        }`}
        initial="rest"
        animate="rest"
        whileHover={reduce ? undefined : "hover"}
        variants={{
          rest: { y: 0 },
          hover: { y: -8 },
        }}
        transition={{ type: "spring", stiffness: 340, damping: 26 }}
      >
        <motion.div
          aria-hidden="true"
          className={`pointer-events-none absolute -inset-10 ${
            featured
              ? "bg-[radial-gradient(circle_at_12%_0%,rgba(240,199,174,0.4),transparent_58%)]"
              : "bg-[radial-gradient(circle_at_100%_0%,rgba(154,67,24,0.16),transparent_55%)]"
          }`}
          variants={{ rest: { scale: 1 }, hover: { scale: 1.08 } }}
          transition={{ duration: 0.45, ease: easeOut }}
        />
        <div className="relative flex h-full flex-col">
          <div className="flex items-start justify-between gap-4">
            <p
              className={`font-serif text-4xl leading-none tracking-[-0.04em] ${
                featured ? "text-copper-soft" : "text-copper"
              }`}
            >
              {number}
            </p>
          </div>
          <h3
            className={`mt-5 font-serif tracking-[-0.03em] ${
              featured ? "text-4xl sm:text-5xl" : "text-3xl"
            }`}
          >
            {title}
          </h3>
          <p
            className={`mt-3 max-w-sm flex-1 text-sm leading-relaxed sm:text-base ${
              featured ? "text-cream/78" : "text-ink-soft"
            }`}
          >
            {copy}
          </p>
          <div className="mt-8">
            <CardLink href={href} variant={(featured ? "cream" : "copper") satisfies ButtonVariant}>
              {cta}
            </CardLink>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}
