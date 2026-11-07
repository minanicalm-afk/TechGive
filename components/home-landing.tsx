"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { homePages, HomesMenu } from "@/components/techgive-ui";

const services = [
  { href: "#donations", label: "Donations" },
  { href: "#recycling", label: "Collection for Recycling" },
  { href: "#upgrades", label: "System Upgrades" },
  { href: "#buy", label: "Buy from Us" },
  { href: "#repair", label: "Repair Services" },
] as const;

const nav = [
  { href: "/home", label: "Home" },
  { href: "#impact", label: "Impact" },
  { href: "#about", label: "About" },
  { href: "#how", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;

function Mark({ className = "size-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        d="M16 4.5 27.5 11v10L16 27.5 4.5 21V11L16 4.5Z"
        fill="none"
        stroke="#22c55e"
        strokeWidth="1.7"
      />
      <path
        d="M16 9.2a6.8 6.8 0 0 1 5.2 2.4l-1.7 1.2A4.8 4.8 0 0 0 16 11.2V9.2Zm6.8 6.8a6.8 6.8 0 0 1-2.4 5.2l-1.2-1.7a4.8 4.8 0 0 0 1.6-3.5h2Zm-6.8 6.8a6.8 6.8 0 0 1-5.2-2.4l1.7-1.2a4.8 4.8 0 0 0 3.5 1.6v2Zm-6.8-6.8a6.8 6.8 0 0 1 2.4-5.2l1.2 1.7a4.8 4.8 0 0 0-1.6 3.5h-2Z"
        fill="#22c55e"
      />
    </svg>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" className="size-3.5" aria-hidden="true" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HomeLanding() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onPointer(event: MouseEvent) {
      if (!servicesRef.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onPointer);
    return () => document.removeEventListener("mousedown", onPointer);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#0f172a]">
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">
        <div className="mx-auto flex h-[4.6rem] w-full max-w-6xl items-center justify-between gap-4 px-5">
          <Link href="/home" className="flex items-center gap-2.5">
            <Mark />
            <span className="leading-none">
              <span className="block text-lg font-bold tracking-tight text-[#0b1b16]">TechGive</span>
              <span className="mt-0.5 block text-[10px] font-medium text-slate-500">Donate · Upgrade · Empower</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 lg:flex" aria-label="Page">
            <Link href="/home" className="text-[#16a34a] underline decoration-2 underline-offset-8">
              Home
            </Link>
            <HomesMenu buttonClassName="text-slate-600 hover:text-[#16a34a]" />
            <div className="relative" ref={servicesRef}>
              <button
                type="button"
                className="inline-flex items-center gap-1 hover:text-[#16a34a]"
                aria-expanded={open}
                onClick={() => setOpen((value) => !value)}
              >
                Our Services
                <svg viewBox="0 0 12 12" className={`size-3 transition ${open ? "rotate-180" : ""}`} aria-hidden="true">
                  <path d="M2 4.5 6 8l4-3.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </button>
              {open ? (
                <div className="absolute top-full left-1/2 z-20 mt-3 w-60 -translate-x-1/2 rounded-2xl border border-slate-100 bg-white p-2 shadow-xl">
                  {services.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block rounded-xl px-3 py-2.5 text-sm text-slate-700 hover:bg-emerald-50 hover:text-[#16a34a]"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
            {nav.slice(1).map((item) => (
              <a key={item.label} href={item.href} className="hover:text-[#16a34a]">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#get-started"
            className="hidden items-center gap-2 rounded-full bg-[#22c55e] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_8px_18px_-10px_rgba(22,163,74,0.9)] hover:bg-[#16a34a] lg:inline-flex"
          >
            Get Involved <Arrow />
          </a>

          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-slate-200 lg:hidden"
            aria-expanded={menu}
            onClick={() => setMenu((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
              <span className="h-px w-full bg-slate-800" />
              <span className="h-px w-full bg-slate-800" />
            </span>
          </button>
        </div>
        {menu ? (
          <nav className="border-t border-slate-100 px-5 py-4 lg:hidden" aria-label="Mobile">
            <a href="/home" className="block py-2 font-medium text-[#16a34a]" onClick={() => setMenu(false)}>
              Home
            </a>
            {homePages.map((item) => (
              <Link key={item.href} href={item.href} className="block py-2 text-slate-700" onClick={() => setMenu(false)}>
                {item.label}
              </Link>
            ))}
            {services.map((item) => (
              <a key={item.href} href={item.href} className="block py-2 text-slate-700" onClick={() => setMenu(false)}>
                {item.label}
              </a>
            ))}
            {nav.slice(1).map((item) => (
              <a key={item.label} href={item.href} className="block py-2 text-slate-700" onClick={() => setMenu(false)}>
                {item.label}
              </a>
            ))}
            <a href="#get-started" className="mt-3 inline-flex rounded-full bg-[#22c55e] px-4 py-2.5 text-sm font-semibold text-white" onClick={() => setMenu(false)}>
              Get Involved
            </a>
          </nav>
        ) : null}
      </header>

      <main id="main">
        <section className="relative overflow-hidden bg-[#071422] text-white">
          <Image src="/home-hero.jpg" alt="" fill priority className="object-cover object-[72%_center]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06101c] via-[#06101c]/92 to-[#06101c]/25" />
          <div className="relative mx-auto grid min-h-[38rem] w-full max-w-6xl items-center gap-8 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-emerald-300">
                <span className="text-emerald-400" aria-hidden="true">♻</span>
                Reduce E-Waste. Empower Lives.
                <span aria-hidden="true">↗</span>
              </p>
              <h1 className="mt-6 max-w-xl text-5xl leading-[1.02] font-extrabold tracking-tight sm:text-6xl">
                Give Your Old Electronics <span className="text-[#3ddc6a]">New Life</span>
              </h1>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
                Donate, sell, or upgrade your computers and electronics. Together, we repair, redistribute, and recycle — creating opportunities for a more connected and sustainable community.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/donate" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#22c55e] px-5 py-3 text-sm font-semibold text-white hover:bg-[#16a34a]">
                  Donate Devices <Arrow />
                </Link>
                <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
                  Explore Our Services
                  <svg viewBox="0 0 16 16" className="size-3.5" aria-hidden="true" fill="none">
                    <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="relative hidden h-full lg:block" aria-hidden="true">
              <div className="absolute top-[18%] right-[6%] w-36 rotate-2 rounded-sm bg-[#c6a36a] px-4 py-6 text-center shadow-2xl">
                <p className="text-lg leading-tight font-extrabold text-[#3d2b12]">Share Tech. Change Lives.</p>
              </div>
            </div>
          </div>
          <svg viewBox="0 0 1440 90" className="absolute right-0 bottom-0 left-0 h-16 w-full sm:h-20" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 48C360 78 820 8 1440 42V90H0V48Z" fill="#22c55e" />
            <path d="M0 62C380 92 860 28 1440 58V90H0V62Z" fill="#ffffff" />
          </svg>
        </section>

        <section className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-12 sm:grid-cols-2 lg:grid-cols-5 lg:py-14">
          {[
            ["recycle", "Donate Devices", "Give unused laptops, desktops and more."],
            ["wrench", "Repair & Reuse", "We fix and upgrade for greater impact."],
            ["leaf", "Recycle Responsibly", "Dispose electronics safely for a greener planet."],
            ["people", "Empower Communities", "Get access to quality technology."],
            ["building", "Support Organisations", "Upgrade your systems cost-effectively."],
          ].map(([icon, title, copy]) => (
            <div key={title} className="text-center">
              <span className="mx-auto grid size-16 place-items-center rounded-full bg-emerald-50 text-[#16a34a]">
                <FeatureIcon name={icon} />
              </span>
              <h2 className="mt-3 text-sm font-bold">{title}</h2>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">{copy}</p>
            </div>
          ))}
        </section>

        <section id="services" className="mx-auto w-full max-w-6xl px-5 pb-16">
          <div className="text-center">
            <p className="text-xs font-bold tracking-[0.18em] text-[#16a34a]">OUR SERVICES</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Comprehensive Electronics Solutions</h2>
            <p className="mt-2 text-sm text-slate-500">From donations to upgrades, we&apos;ve got you covered.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            <ServiceCard
              id="donations"
              title="Donations"
              copy="Contribute working or repairable devices to help those in need."
              cta="Donate Now"
              href="/donate"
              art="laptop"
            />
            <ServiceCard
              id="recycling"
              title="Collection for Recycling"
              copy="Dispose of old or broken electronics at a fair cost."
              cta="Schedule Pickup"
              href="/dispose"
              art="bin"
            />
            <ServiceCard
              id="upgrades"
              title="System Upgrades"
              copy="Upgrade your company's systems with newer generations."
              cta="Request an Upgrade"
              href="/upgrade"
              art="monitor"
            />
            <ServiceCard
              id="buy"
              title="Buy from Us"
              copy="Get a fair price for your computers & electronics."
              cta="Get a Quote"
              href="/sell"
              art="cart"
            />
            <ServiceCard
              id="repair"
              title="Repair Services"
              copy="Restore your devices to full working condition."
              cta="Book a Repair"
              href="/contact"
              art="tools"
            />
          </div>
        </section>

        <section id="impact" className="mx-auto w-full max-w-6xl px-5 pb-16">
          <div className="grid overflow-hidden rounded-[1.6rem] bg-[#071422] text-white lg:grid-cols-[0.9fr_1.1fr]">
            <div id="about" className="p-8 sm:p-10">
              <p className="text-xs font-bold tracking-[0.18em] text-[#3ddc6a]">OUR IMPACT</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Together, We Make a Difference</h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
                Through your support, you extend the digital life of electronics, reduce e-waste, and bring digital access to more people.
              </p>
              <a href="#impact-stats" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#22c55e] px-4 py-2.5 text-sm font-semibold hover:bg-[#16a34a]">
                See Our Impact <Arrow />
              </a>
            </div>
            <div id="impact-stats" className="grid sm:grid-cols-[0.85fr_1.15fr]">
              <div className="grid content-center gap-6 border-white/10 p-8 sm:border-l">
                {[
                  ["12+ Tons", "of E-waste Recycled"],
                  ["2,500+", "People Empowered"],
                  ["30%+", "Carbon Footprint Reduction"],
                ].map(([value, label]) => (
                  <div key={value}>
                    <p className="text-2xl font-extrabold text-[#3ddc6a]">{value}</p>
                    <p className="text-sm text-white/70">{label}</p>
                  </div>
                ))}
              </div>
              <Image
                src="/home-impact.jpg"
                alt="A student in class using a laptop."
                width={900}
                height={700}
                className="h-full min-h-64 w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section id="how" className="mx-auto w-full max-w-6xl px-5 pb-16 text-center">
          <p className="text-xs font-bold tracking-[0.18em] text-[#16a34a]">HOW IT WORKS</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Simple Steps to Give & Get</h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["1", "Donate or Sell", "Tell us what you have (laptops, PCs, parts etc.)."],
              ["2", "Get a Quote", "Our system suggests a fair price (≈ 20–30% of market)."],
              ["3", "Accept or Negotiate", "Confirm via WhatsApp."],
              ["4", "We Handle the Rest", "We repair, upgrade or redistribute responsibly."],
            ].map(([n, title, copy], index) => (
              <li key={n} className="relative">
                {index < 3 ? <span className="absolute top-5 right-0 hidden text-slate-300 lg:block" aria-hidden="true">→</span> : null}
                <span className="mx-auto grid size-10 place-items-center rounded-full bg-[#22c55e] text-sm font-bold text-white">{n}</span>
                <h3 className="mt-4 font-bold">{title}</h3>
                <p className="mt-1 text-sm text-slate-500">{copy}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="get-started" className="mx-auto w-full max-w-6xl px-5 pb-16">
          <div className="flex flex-col items-start justify-between gap-6 rounded-[1.4rem] bg-gradient-to-r from-[#16a34a] to-[#3ddc6a] px-6 py-8 text-white sm:flex-row sm:items-center sm:px-10">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Let&apos;s Build a More Connected, Sustainable Community Together</h2>
              <p className="mt-1 text-sm text-white/85">Donate. Upgrade. Empower.</p>
            </div>
            <Link href="/donate" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#15803d]">
              Get Started <Arrow />
            </Link>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-[#07111c] text-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-10 lg:flex-row lg:items-center lg:justify-between">
          <Link href="/home" className="flex items-center gap-2.5">
            <Mark />
            <span>
              <span className="block font-bold">TechGive</span>
              <span className="block text-[10px] text-white/55">Donate · Upgrade · Empower</span>
            </span>
          </Link>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/75" aria-label="Footer">
            <Link href="/home">Home</Link>
            <a href="#services">Our Services</a>
            <a href="#impact">Impact</a>
            <a href="#about">About</a>
            <a href="#how">FAQ</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="flex gap-3 text-white/80">
            {["Facebook", "X", "YouTube", "LinkedIn", "WhatsApp"].map((name) => (
              <a key={name} href="#contact" aria-label={name} className="grid size-8 place-items-center rounded-full border border-white/15 text-xs">
                {name.slice(0, 1)}
              </a>
            ))}
          </div>
        </div>
        <p className="border-t border-white/10 py-4 text-center text-xs text-white/45">
          © 2025 TechGive. All rights reserved. &nbsp;|&nbsp; Building a greener, more connected future.
        </p>
      </footer>
    </div>
  );
}

function ServiceCard({
  id,
  title,
  copy,
  cta,
  href,
  art,
}: {
  id: string;
  title: string;
  copy: string;
  cta: string;
  href: string;
  art: "laptop" | "bin" | "monitor" | "cart" | "tools";
}) {
  return (
    <article id={id} className="flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-5 text-center shadow-[0_18px_40px_-28px_rgba(15,23,42,0.45)]">
      <div className="grid h-40 place-items-center rounded-2xl bg-slate-50 text-[#16a34a]">
        <Art name={art} />
      </div>
      <h3 className="mt-4 text-sm font-bold">{title}</h3>
      <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-500">{copy}</p>
      <Link href={href} className="mt-4 inline-flex items-center justify-center gap-1 text-sm font-semibold text-[#16a34a]">
        {cta} <Arrow />
      </Link>
    </article>
  );
}

function FeatureIcon({ name }: { name: string }) {
  const common = { viewBox: "0 0 24 24", className: "size-10", fill: "none", "aria-hidden": true } as const;
  if (name === "wrench") {
    return (
      <svg {...common}>
        <path d="M14.5 6.5a3.5 3.5 0 0 0-4.8 4.1L4 16.3 7.7 20l5.7-5.7a3.5 3.5 0 0 0 4.1-4.8L15 12l-3-3 2.5-2.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    );
  }
  if (name === "leaf") {
    return (
      <svg {...common}>
        <path d="M5 19s1-7 8-10 7-1 7-1-1 6-6 8-9 3-9 3Z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9 15c2-2 4-3 7-4" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }
  if (name === "people") {
    return (
      <svg {...common}>
        <circle cx="9" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="16" cy="10" r="1.8" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4.5 18c.6-2.4 2.4-3.5 4.5-3.5s3.9 1.1 4.5 3.5M13 18c.3-1.6 1.4-2.6 3-2.6 1.4 0 2.4.7 2.8 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "building") {
    return (
      <svg {...common}>
        <path d="M4 20V8l6-3v15M10 20V9l10 3v8M4 20h16" stroke="currentColor" strokeWidth="1.6" />
        <path d="M13 14h2M13 17h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M7 8.5A5 5 0 0 1 12 6a5 5 0 0 1 4.2 2.3M16.5 12A5 5 0 0 1 12 18a5 5 0 0 1-4.2-2.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M16 7.5V5h2.5M8 16.5V19H5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function Art({ name }: { name: "laptop" | "bin" | "monitor" | "cart" | "tools" }) {
  if (name === "laptop") {
    return (
      <svg viewBox="0 0 64 48" className="h-24 w-32" aria-hidden="true">
        <rect x="8" y="6" width="48" height="30" rx="3" fill="#e8eef5" stroke="#94a3b8" />
        <path d="M26 20.5 32 16l6 4.5V28H26V20.5Z" fill="none" stroke="#16a34a" strokeWidth="2" />
        <path d="M4 38h56l-4 4H8l-4-4Z" fill="#cbd5e1" />
      </svg>
    );
  }
  if (name === "bin") {
    return (
      <svg viewBox="0 0 64 48" className="h-24 w-32" aria-hidden="true">
        <path d="M18 16h28l-2 24H20L18 16Z" fill="#16a34a" />
        <path d="M16 16h32" stroke="#0f172a" strokeWidth="2" />
        <path d="M28 12h8" stroke="#0f172a" strokeWidth="2" />
        <path d="M32 22a6 6 0 1 1-4 1" fill="none" stroke="white" strokeWidth="2" />
      </svg>
    );
  }
  if (name === "monitor") {
    return (
      <svg viewBox="0 0 64 48" className="h-24 w-32" aria-hidden="true">
        <rect x="8" y="6" width="48" height="28" rx="2" fill="#0f172a" />
        <path d="M32 14v10M27 19l5-5 5 5" fill="none" stroke="#22c55e" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M26 38h12M32 34v4" stroke="#94a3b8" strokeWidth="2" />
      </svg>
    );
  }
  if (name === "cart") {
    return (
      <svg viewBox="0 0 64 48" className="h-24 w-32" aria-hidden="true">
        <path d="M10 12h8l6 18h22l6-12H22" fill="none" stroke="#334155" strokeWidth="2" />
        <circle cx="26" cy="36" r="3" fill="#334155" />
        <circle cx="44" cy="36" r="3" fill="#334155" />
        <rect x="28" y="14" width="14" height="8" rx="1" fill="#64748b" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 64 48" className="h-24 w-32" aria-hidden="true">
      <path d="M14 34 34 14l6 6L20 40l-8 2 2-8Z" fill="#94a3b8" />
      <path d="M36 12l6 6" stroke="#f59e0b" strokeWidth="3" />
      <rect x="34" y="22" width="18" height="8" rx="2" fill="#16a34a" transform="rotate(-30 43 26)" />
    </svg>
  );
}
