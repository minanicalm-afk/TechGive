"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const stats = [
  { target: 500, suffix: "+", label: "Devices Repaired", icon: "laptop" },
  { target: 1000, suffix: "+", label: "People Supported", icon: "people", grouped: true },
  { target: 5, suffix: " Tons", label: "E-Waste Recycled", icon: "recycle" },
  { target: 50, suffix: "+", label: "Organizations Assisted", icon: "building" },
] as const;

export function FinalImpact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const check = () => {
      const rect = node.getBoundingClientRect();
      const visible = rect.top < window.innerHeight * 0.8 && rect.bottom > 80;
      if (!visible) return;
      setActive(true);
      window.removeEventListener("scroll", check);
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

  return (
    <section id="impact" ref={sectionRef} className="scroll-mt-24 bg-white py-10 sm:py-14">
      <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-white">
          <Image
            src="/final-impact.jpg"
            alt=""
            fill
            className="object-cover object-right"
            sizes="(min-width: 1024px) 90vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white via-40% to-white/15" />

          <div className="relative px-6 pt-10 pb-6 sm:px-10 sm:pt-12 lg:px-14">
            <p className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.16em] text-[#15803d]">
              <span className="h-0.5 w-12 bg-[#15803d]" aria-hidden="true" />
              OUR IMPACT
            </p>
            <h2 className="mt-4 max-w-xl text-4xl font-extrabold leading-[0.95] tracking-tight text-[#0b1b16] sm:text-5xl lg:text-6xl">
              Together, We Make a
              <span className="mt-1 block text-[#15803d] underline decoration-[#16a34a] decoration-[3px] underline-offset-[8px]">
                Difference
              </span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-slate-700 sm:text-base">
              Through donations, repairs, and responsible recycling, we&apos;re giving technology a second life and creating opportunities for our community.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4">
              {stats.map((stat) => (
                <li
                  key={stat.label}
                  className="flex items-center gap-3 rounded-3xl border border-white/80 bg-white/95 px-4 py-4 shadow-[0_16px_40px_-24px_rgba(15,23,42,0.45)]"
                >
                  <span className="grid size-14 shrink-0 place-items-center rounded-full bg-emerald-50 text-[#15803d]">
                    <StatIcon name={stat.icon} />
                  </span>
                  <span>
                    <span className="block text-2xl font-extrabold tracking-tight text-[#0b1b16]">
                      <CountUp target={stat.target} suffix={stat.suffix} grouped={"grouped" in stat} active={active} />
                    </span>
                    <span className="mt-0.5 block text-xs font-medium text-slate-600 sm:text-sm">{stat.label}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function CountUp({
  target,
  suffix,
  grouped = false,
  active,
}: {
  target: number;
  suffix: string;
  grouped?: boolean;
  active: boolean;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setValue(target);
      return;
    }
    const start = performance.now();
    const duration = 1400;
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  const shown = grouped ? value.toLocaleString("en-US") : String(value);
  return (
    <>
      {shown}
      {suffix}
    </>
  );
}

function StatIcon({ name }: { name: string }) {
  if (name === "people") {
    return (
      <svg viewBox="0 0 24 24" className="size-7" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="9" cy="8.5" r="2.2" />
        <circle cx="15.5" cy="9" r="1.8" />
        <path d="M4.8 17.2c.6-2.3 2.3-3.6 4.2-3.6s3.6 1.3 4.2 3.6" />
        <path d="M13.5 14.1c1.4-.2 2.8.6 3.4 2.4" />
      </svg>
    );
  }
  if (name === "recycle") {
    return (
      <svg viewBox="0 0 24 24" className="size-7" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7.2 8 9.4 4.5h5.2L16.8 8" />
        <path d="m16.8 8 2.2 4.2-2.1 3.8" />
        <path d="M7.2 16 5 11.8 7.2 8" />
        <path d="M7.2 16h5.4l2 3.5" />
      </svg>
    );
  }
  if (name === "building") {
    return (
      <svg viewBox="0 0 24 24" className="size-7" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M5 19.5V7L12 4l7 3v12.5" />
        <path d="M9 19.5v-4h6v4M9 9.5h.01M12 9.5h.01M15 9.5h.01M9 12.5h.01M12 12.5h.01M15 12.5h.01" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="size-7" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="5" width="16" height="11" rx="1.5" />
      <path d="M8 19h8M12 16v3" />
    </svg>
  );
}
