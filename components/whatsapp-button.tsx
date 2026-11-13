"use client";

import { motion, useReducedMotion } from "framer-motion";
import { WhatsAppIcon } from "@/components/icons";
import { messages, whatsappHref } from "@/lib/site";

export function WhatsAppButton() {
  const reduce = useReducedMotion();

  return (
    <a
      href={whatsappHref(messages.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Josachi on WhatsApp"
      className="wa-float fixed right-[max(1.25rem,env(safe-area-inset-right))] bottom-[calc(6.5rem+env(safe-area-inset-bottom))] z-50 inline-flex items-center gap-2.5 rounded-full bg-ink py-2 pr-2 pl-4 text-sm font-medium text-cream shadow-[0_18px_40px_-16px_rgba(18,33,27,0.7)] lg:bottom-[calc(5.25rem+env(safe-area-inset-bottom))]"
    >
      WhatsApp
      <span className="relative grid size-11 place-items-center">
        {reduce ? null : (
          <motion.span
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-[#25D366]"
            animate={{ scale: [1, 1.55], opacity: [0.5, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
          />
        )}
        <span className="relative grid size-11 place-items-center rounded-full bg-[#25D366] text-[#07331a]">
          <WhatsAppIcon className="size-6" />
        </span>
      </span>
    </a>
  );
}
