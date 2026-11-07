"use client";

import { motion, useReducedMotion } from "framer-motion";
import { easeOut } from "@/components/ui/motion";

export function PriceBand() {
  const reduce = useReducedMotion();

  return (
    <div className="mt-6" role="img" aria-label="Proposal band from 20 to 30 percent of the assessed price.">
      <div className="h-3 overflow-hidden rounded-full bg-ink/10">
        <motion.div
          className="flex h-full"
          initial={reduce ? { width: "30%" } : { width: "0%" }}
          whileInView={{ width: "30%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          <div className="h-full w-2/3 bg-copper/45" />
          <div className="h-full w-1/3 bg-copper" />
        </motion.div>
      </div>
      <p className="mt-2 text-xs leading-relaxed text-ink-soft">
        The filled stretch is the proposal: it begins at 20% and stops at 30%.
      </p>
    </div>
  );
}
