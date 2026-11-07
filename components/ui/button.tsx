"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const variants = {
  copper:
    "bg-copper text-cream shadow-[0_12px_30px_-16px_rgba(154,67,24,0.9)] hover:bg-copper-deep",
  cream: "bg-cream text-ink hover:bg-white",
  leaf: "bg-leaf text-cream",
  ghost: "border border-ink/15 bg-cream/40 text-ink hover:bg-cream",
  "ghost-light": "border border-cream/25 text-cream hover:bg-cream/10",
  "text-light":
    "bg-transparent px-0 text-cream/90 underline decoration-white/30 underline-offset-[6px] hover:text-cream hover:decoration-cream",
  text: "bg-transparent px-0 text-copper underline decoration-copper/30 underline-offset-[6px] hover:decoration-copper",
} as const;

export type ButtonVariant = keyof typeof variants;

export function buttonClass(variant: ButtonVariant = "copper", className = "") {
  return `inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors duration-200 disabled:cursor-default ${variants[variant]} ${className}`;
}

type Common = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type LinkButtonProps = Common & {
  href: string;
  external?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

type NativeButtonProps = Common & {
  href?: undefined;
  type?: "button" | "submit";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

function isLink(props: LinkButtonProps | NativeButtonProps): props is LinkButtonProps {
  return typeof props.href === "string";
}

export function Button(props: LinkButtonProps | NativeButtonProps) {
  const reduce = useReducedMotion();
  const tap = reduce ? undefined : { scale: 0.98 };
  const className = buttonClass(props.variant, props.className);

  if (isLink(props)) {
    if (props.external) {
      return (
        <motion.a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={props.onClick}
          className={className}
          whileTap={tap}
        >
          {props.children}
        </motion.a>
      );
    }

    return (
      <Link href={props.href} onClick={props.onClick} className={className}>
        {props.children}
      </Link>
    );
  }

  return (
    <motion.button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={className}
      whileTap={props.disabled || reduce ? undefined : tap}
    >
      {props.children}
    </motion.button>
  );
}
