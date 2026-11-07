"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check } from "@/components/icons";
import { messages, whatsappHref } from "@/lib/site";
import { Button } from "@/components/ui/button";

function openChat(message: string) {
  window.open(whatsappHref(message), "_blank", "noopener,noreferrer");
}

export function ProposalActions() {
  const reduce = useReducedMotion();
  const [accepted, setAccepted] = useState(false);
  const [bargaining, setBargaining] = useState(false);

  function accept() {
    if (accepted) return;
    setAccepted(true);
    openChat(messages.accept);
    window.setTimeout(() => setAccepted(false), 1600);
  }

  function bargain() {
    setBargaining(true);
    openChat(messages.bargain);
    window.setTimeout(() => setBargaining(false), 700);
  }

  return (
    <div className="mt-6 flex flex-col gap-3">
      <Button
        variant={accepted ? "leaf" : "cream"}
        className="w-full"
        onClick={accept}
        disabled={accepted}
      >
        <AnimatePresence mode="wait" initial={false}>
          {accepted ? (
            <motion.span
              key="accepted"
              className="inline-flex items-center gap-2"
              initial={reduce ? false : { opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 420, damping: 22 }}
            >
              <Check />
              Accepted
            </motion.span>
          ) : (
            <motion.span
              key="accept"
              className="inline-flex w-full items-center justify-between gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Accept the proposal
              <ArrowUpRight />
            </motion.span>
          )}
        </AnimatePresence>
      </Button>

      <motion.div
        animate={bargaining && !reduce ? { scale: [1, 1.045, 0.98, 1.03, 1] } : { scale: 1 }}
        transition={{ duration: 0.55 }}
      >
        <Button variant="ghost-light" className="w-full justify-between" onClick={bargain}>
          Bargain on WhatsApp
          <ArrowUpRight />
        </Button>
      </motion.div>

      <Button
        variant="ghost-light"
        className="w-full justify-between"
        onClick={() => openChat(messages.cancel)}
      >
        Cancel
        <ArrowUpRight />
      </Button>
      <p className="sr-only" aria-live="polite">
        {accepted ? "Accepted. WhatsApp is opening with your reply." : ""}
      </p>
    </div>
  );
}
