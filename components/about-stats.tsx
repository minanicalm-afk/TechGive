"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { target: 500, suffix: "+", label: "Devices repaired", grouped: false },
  { target: 1000, suffix: "+", label: "People supported", grouped: true },
  { target: 5, suffix: "", label: "Tons of e-waste recycled", grouped: false },
  { target: 50, suffix: "+", label: "Organisations assisted", grouped: false },
] as const;

export function AboutStats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const check = () => {
      const rect = node.getBoundingClientRect();
      const visible = rect.top < window.innerHeight * 0.85 && rect.bottom > 60;
      if (!visible) return;
      setActive(true);
    };
    check();
    const id = window.setInterval(check, 200);
    window.addEventListener("scroll", check, { passive: true });
    return () => {
      window.clearInterval(id);
      window.removeEventListener("scroll", check);
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-14 lg:py-20">
      <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6">
        <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <li key={stat.label} className="text-center">
              <p className="text-4xl font-extrabold tracking-tight text-[#16a34a] sm:text-5xl">
                <CountUp target={stat.target} suffix={stat.suffix} grouped={stat.grouped} active={active} />
              </p>
              <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CountUp({
  target,
  suffix,
  grouped,
  active,
}: {
  target: number;
  suffix: string;
  grouped: boolean;
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
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / 1400);
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
