"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const homePages = [
  { href: "/", label: "Landing" },
  { href: "/home", label: "Home" },
  { href: "/home1", label: "Home 1" },
  { href: "/home2", label: "Home 2" },
  { href: "/home3", label: "Home 3" },
] as const;

export function HomesMenu({ buttonClassName }: { buttonClassName: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function close(event: MouseEvent) {
      if (!ref.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        className={`inline-flex items-center gap-1 text-sm font-medium ${buttonClassName}`}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        Homes
        <svg viewBox="0 0 12 12" className={`size-3 ${open ? "rotate-180" : ""}`} aria-hidden="true">
          <path d="M2 4.5 6 8l4-3.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </button>
      {open ? (
        <div className="absolute top-full left-1/2 z-20 mt-3 w-44 -translate-x-1/2 rounded-2xl border border-slate-100 bg-white p-2 shadow-xl">
          {homePages.map((item) => {
            const current = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={`block rounded-xl px-3 py-2.5 text-sm font-medium ${current ? "bg-emerald-50 text-[#16a34a]" : "text-slate-600 hover:bg-emerald-50 hover:text-[#16a34a]"}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export function Mark({ className = "size-9", color = "#22c55e" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path d="M16 3.2 28.2 10v12L16 28.8 3.8 22V10L16 3.2Z" fill="none" stroke={color} strokeWidth="1.8" />
      <path
        d="M11.2 16.4a4.8 4.8 0 0 1 7.6-3.9l-1.6 1.5a2.9 2.9 0 0 0-4.3 2.4h-1.7Zm9.6 0h-1.7a2.9 2.9 0 0 0-2.4 4.3l1.5 1.6a4.8 4.8 0 0 1 2.6-5.9Zm-4.8 4.8v1.7a4.8 4.8 0 0 1-5.9-2.6l1.6-1.5a2.9 2.9 0 0 0 4.3 2.4Zm0-9.6a4.8 4.8 0 0 1 5.9 2.6l-1.5 1.6a2.9 2.9 0 0 0-4.4-2.5V11.6Z"
        fill={color}
      />
    </svg>
  );
}

export function Arrow() {
  return (
    <svg viewBox="0 0 16 16" className="size-3.5" aria-hidden="true" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LineIcon({ name, className = "size-6" }: { name: string; className?: string }) {
  const props = {
    viewBox: "0 0 24 24",
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  if (name === "laptop") {
    return (
      <svg {...props}>
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M2 20h20" />
      </svg>
    );
  }
  if (name === "wrench") {
    return (
      <svg {...props}>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    );
  }
  if (name === "recycle") {
    return (
      <svg {...props}>
        <path d="M7 19H4.8a1.8 1.8 0 0 1-1.57-.88 1.8 1.8 0 0 1 0-1.78L7.2 9.5" />
        <path d="M11 19h8.2a1.8 1.8 0 0 0 1.56-.89 1.8 1.8 0 0 0 0-1.78l-1.23-2.12" />
        <path d="m14 16-3 3 3 3" />
        <path d="M8.3 13.6 7.2 9.5 3.1 10.6" />
        <path d="m9.3 5.8 1.1-1.9A1.8 1.8 0 0 1 12 3a1.8 1.8 0 0 1 1.55.89l3.94 6.84" />
        <path d="m13.4 9.6 4.1 1.1 1.1-4.1" />
      </svg>
    );
  }
  if (name === "people") {
    return (
      <svg {...props}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }
  if (name === "building") {
    return (
      <svg {...props}>
        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
        <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
        <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
        <path d="M10 6h4M10 10h4M10 14h4M10 18h4" />
      </svg>
    );
  }
  if (name === "document") {
    return (
      <svg {...props}>
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M10 9H8M16 13H8M16 17H8" />
      </svg>
    );
  }
  if (name === "chat") {
    return (
      <svg {...props}>
        <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z" />
      </svg>
    );
  }
  if (name === "hands") {
    return (
      <svg {...props}>
        <path d="m11 17 2 2a1 1 0 1 0 3-3" />
        <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.8 5.8 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
        <path d="m21 3 1 11h-2" />
        <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
        <path d="M3 4h8" />
      </svg>
    );
  }
  if (name === "shield") {
    return (
      <svg {...props}>
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  }
  if (name === "tag") {
    return (
      <svg {...props}>
        <path d="M12.6 2.6A2 2 0 0 0 11.2 2H4a2 2 0 0 0-2 2v7.2a2 2 0 0 0 .6 1.4l8.7 8.7a2.4 2.4 0 0 0 3.4 0l6.6-6.6a2.4 2.4 0 0 0 0-3.4z" />
        <circle cx="7.5" cy="7.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  return (
    <svg {...props}>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z" />
      <path d="M2 21c0-3 1.8-5.4 5.1-6C9.5 14.5 12 13 13 12" />
    </svg>
  );
}

export function TechHeader({
  homeHref,
  links,
  services,
  cta,
}: {
  homeHref: string;
  links: readonly { href: string; label: string }[];
  services: readonly { href: string; label: string }[];
  cta: { href: string; label: string };
}) {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function close(event: MouseEvent) {
      if (!ref.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">
      <div className="mx-auto flex h-[4.5rem] w-full max-w-6xl items-center justify-between gap-4 px-5">
        <Link href={homeHref} className="flex items-center gap-2.5">
          <Mark />
          <span className="leading-none">
            <span className="block text-lg font-bold tracking-tight text-[#0b1b16]">TechGive</span>
            <span className="mt-0.5 block text-[10px] font-medium text-slate-500">Donate · Repair · Reuse · Empower</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex" aria-label="Page">
          <Link href={homeHref} className="text-[#16a34a] underline decoration-2 underline-offset-8">
            Home
          </Link>
          <HomesMenu buttonClassName="text-slate-600 hover:text-[#16a34a]" />
          <div className="relative" ref={ref}>
            <button type="button" className="inline-flex items-center gap-1 hover:text-[#16a34a]" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
              Services
              <svg viewBox="0 0 12 12" className={`size-3 ${open ? "rotate-180" : ""}`} aria-hidden="true">
                <path d="M2 4.5 6 8l4-3.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </button>
            {open ? (
              <div className="absolute top-full left-1/2 z-20 mt-3 w-56 -translate-x-1/2 rounded-2xl border border-slate-100 bg-white p-2 shadow-xl">
                {services.map((item) => (
                  <a key={item.href} href={item.href} className="block rounded-xl px-3 py-2 text-sm hover:bg-emerald-50 hover:text-[#16a34a]" onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
          {links.map((item) => (
            <a key={item.label} href={item.href} className="hover:text-[#16a34a]">
              {item.label}
            </a>
          ))}
        </nav>
        <a href={cta.href} className="hidden items-center gap-2 rounded-full bg-[#22c55e] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_8px_18px_-10px_rgba(22,163,74,0.9)] hover:bg-[#16a34a] lg:inline-flex">
          {cta.label} <Arrow />
        </a>
        <button type="button" className="grid size-11 place-items-center rounded-full border border-slate-200 lg:hidden" aria-expanded={menu} onClick={() => setMenu((value) => !value)}>
          <span className="sr-only">Menu</span>
          <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
            <span className="h-px w-full bg-slate-800" />
            <span className="h-px w-full bg-slate-800" />
          </span>
        </button>
      </div>
      {menu ? (
        <nav className="space-y-1 border-t border-slate-100 px-5 py-4 text-sm lg:hidden" aria-label="Mobile">
          <a href={homeHref} className="block py-2 font-medium text-[#16a34a]" onClick={() => setMenu(false)}>Home</a>
          {homePages.map((item) => (
            <Link key={item.href} href={item.href} className="block py-2" onClick={() => setMenu(false)}>
              {item.label}
            </Link>
          ))}
          {services.map((item) => (
            <a key={item.href} href={item.href} className="block py-2" onClick={() => setMenu(false)}>{item.label}</a>
          ))}
          {links.map((item) => (
            <a key={item.label} href={item.href} className="block py-2" onClick={() => setMenu(false)}>{item.label}</a>
          ))}
          <a href={cta.href} className="mt-2 inline-flex items-center gap-2 rounded-full bg-[#22c55e] px-4 py-2.5 font-semibold text-white" onClick={() => setMenu(false)}>
            {cta.label} <Arrow />
          </a>
        </nav>
      ) : null}
    </header>
  );
}

export function TechFooter({
  homeHref,
  columns,
  wide,
  page,
}: {
  homeHref: string;
  columns: readonly { title: string; items: readonly (readonly [string, string])[] }[];
  wide?: boolean;
  page?: boolean;
}) {
  return (
    <footer id="contact" className="relative overflow-hidden bg-[#071611] text-white">
      <Leaf className="pointer-events-none absolute -bottom-2 left-0 h-32 w-36 text-[#14532d]" />
      <Leaf className="pointer-events-none absolute right-0 -bottom-2 h-32 w-36 -scale-x-100 text-[#14532d]" />
      <div className={`relative mx-auto grid w-full gap-10 py-12 sm:grid-cols-2 ${page ? "max-w-[96rem] px-4 sm:px-6 lg:grid-cols-5" : `max-w-6xl px-5 ${wide ? "lg:grid-cols-5" : "lg:grid-cols-4"}`}`}>
        <Link href={homeHref} className="flex items-center gap-2.5 self-start">
          <Mark />
          <span>
            <span className="block font-bold">TechGive</span>
            <span className="block text-[10px] text-white/55">Donate · Repair · Reuse · Empower</span>
          </span>
        </Link>
        {columns.map((column) => (
          <div key={column.title}>
            <p className="text-sm font-semibold">{column.title}</p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              {column.items.map(([label, href]) => (
                <li key={label}><a href={href} className="hover:text-white">{label}</a></li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <p className="text-sm font-semibold">Follow Us</p>
          <div className="mt-3 flex gap-2">
            <Social name="Facebook" path="M14 8h2V5h-2c-2.2 0-4 1.8-4 4v2H8v3h2v6h3v-6h2.2l.8-3H13V9c0-.6.4-1 1-1Z" />
            <Social name="Instagram" path="M8 4.5h8A3.5 3.5 0 0 1 19.5 8v8a3.5 3.5 0 0 1-3.5 3.5H8A3.5 3.5 0 0 1 4.5 16V8A3.5 3.5 0 0 1 8 4.5Z M12 15.2A3.2 3.2 0 1 0 12 8.8a3.2 3.2 0 0 0 0 6.4Z M16.6 7.6h.01" />
            <Social name="YouTube" path="M5 8.5h14v7.2c0 .8-.7 1.5-1.6 1.5H6.6c-.9 0-1.6-.7-1.6-1.5V8.5Z M11 10.2v4.2l4-2.1-4-2.1Z" />
            <Social name="LinkedIn" path="M7 10v7.5M7 6.8h.01 M11 17.5V13a2.2 2.2 0 0 1 4.2-1c.2.6.3 1.3.3 2v3.5 M11 10v7.5" />
          </div>
        </div>
      </div>
      <p className="relative border-t border-white/10 py-4 text-center text-xs text-white/45">
        © 2025 TechGive. All rights reserved. &nbsp;|&nbsp; Building a greener, more connected future.
      </p>
    </footer>
  );
}

function Social({ name, path }: { name: string; path: string }) {
  return (
    <a href="#contact" aria-label={name} className="grid size-8 place-items-center rounded-full border border-white/15 text-white/80 hover:border-white/40 hover:text-white">
      <svg viewBox="0 0 24 24" className="size-3.5" aria-hidden="true" fill="none">
        <path d={path} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

function Leaf({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 90" className={className} aria-hidden="true" fill="currentColor">
      <path d="M8 86c18-8 28-8 40-4-6-16-4-32 8-48 10-14 28-22 52-26-6 18-8 32-2 44 8 16 6 28-8 36-22 2-58 2-90-2Z" opacity=".9" />
      <path d="M28 78c10-22 28-36 54-42-8 14-8 26-2 36-16 2-34 4-52 6Z" opacity=".55" />
    </svg>
  );
}
