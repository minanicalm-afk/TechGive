"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const SELECTOR = [
  "main > *",
  "main section",
  "main article",
  "main [class*='grid'] > *",
  "main li > a.group",
  "main details",
].join(", ");

export function ScrollRise() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const root = document.getElementById("main");
    if (!root) return;

    const nodes = [...root.querySelectorAll<HTMLElement>(SELECTOR)].filter((node, index, list) => {
      if (node.closest("[data-no-rise]")) return false;
      return list.indexOf(node) === index;
    });

    nodes.forEach((node) => node.classList.add("scroll-rise"));

    const supportsView = CSS.supports("animation-timeline", "view()");
    if (supportsView) return;

    const show = (node: HTMLElement) => node.classList.add("is-in");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          show(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    for (const node of nodes) {
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92) show(node);
      else observer.observe(node);
    }

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
