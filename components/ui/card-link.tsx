"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "@/components/icons";
import { buttonClass, type ButtonVariant } from "@/components/ui/button";

export function CardLink({
  href,
  children,
  variant = "copper",
  className = "",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
}) {
  const classNameAll = buttonClass(variant, className);
  const arrow = (
    <motion.span
      className="inline-flex"
      variants={{ rest: { x: 0 }, hover: { x: 6 } }}
      transition={{ duration: 0.25 }}
    >
      <ArrowUpRight />
    </motion.span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classNameAll}>
        {children}
        {arrow}
      </a>
    );
  }

  return (
    <Link href={href} className={classNameAll}>
      {children}
      {arrow}
    </Link>
  );
}
