"use client";

import { motion, useReducedMotion } from "framer-motion";
import { easeOut } from "@/components/ui/motion";

const tones = {
  cream: "border border-ink/10 bg-cream text-ink",
  paper: "border border-ink/10 bg-paper text-ink",
  moss: "bg-moss text-cream",
  ink: "bg-ink text-cream",
  glass: "border border-white/10 bg-white/5 text-cream",
  deep: "border border-white/10 bg-[#173028] text-cream",
  copper: "border border-copper-soft/40 bg-copper/15 text-cream",
} as const;

export type CardTone = keyof typeof tones;

export function Card({
  children,
  className = "",
  tone = "cream",
  hover = false,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: CardTone;
  hover?: boolean;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={`h-full ${className}`}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: easeOut }}
    >
      <motion.article
        className={`flex h-full flex-col rounded-2xl p-6 sm:p-7 ${tones[tone]}`}
        initial="rest"
        animate="rest"
        whileHover={hover && !reduce ? "hover" : undefined}
        variants={{
          rest: { y: 0, boxShadow: "0 0 0 0 rgba(18,33,27,0)" },
          hover: { y: -8, boxShadow: "0 28px 50px -30px rgba(18,33,27,0.5)" },
        }}
        transition={{ type: "spring", stiffness: 340, damping: 26 }}
      >
        {children}
      </motion.article>
    </motion.div>
  );
}
