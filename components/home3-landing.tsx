"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HomesMenu, homePages } from "@/components/techgive-ui";
import { contact, messages, site, whatsappHref } from "@/lib/site";

const green = "#1c7a43";
const deep = "#125c34";

const gadgets = [
  { title: "Laptop", image: "/home3-laptop.jpg", alt: "A closed silver laptop on a wooden desk." },
  { title: "Phone", image: "/home3-phone.jpg", alt: "A black smartphone standing on a wooden desk." },
  { title: "Monitor", image: "/home3-monitor.jpg", alt: "A computer monitor on a wooden desk." },
  { title: "Tablet / iPad", image: "/home3-tablet.jpg", alt: "A tablet lying on a wooden desk." },
  { title: "Desktop PC", image: "/home3-desktop.jpg", alt: "A black desktop computer tower on a wooden desk." },
  { title: "TV", image: "/home3-tv.jpg", alt: "A flat-screen television on a wooden desk." },
  { title: "Game Console", image: "/home3-console.jpg", alt: "A white game console and controller on a wooden desk." },
  { title: "Printer", image: "/home3-printer.jpg", alt: "A white printer on a wooden desk." },
] as const;

const peopleSteps = [
  ["Pick your gadget", "Laptops, phones, tablets, monitors, printers, consoles, and desktops."],
  ["Send a few photos", "Name, phone, email, town, model, and the price you have in mind."],
  ["Get a written estimate", "The team reviews the photos. Expect about 20–30% of the assessed desk price."],
  ["Accept it, or talk", "Bring it to the Juja desk, or ask us to collect. Bargain opens WhatsApp."],
] as const;

const companySteps = [
  ["Tell us what you have", "Working machines, or equipment that no longer powers on."],
  ["We schedule a visit", "We travel for 10 working pieces, or 20 dead pieces."],
  ["We collect and pay", "Companies are paid by M-Pesa or bank after inspection."],
  ["Donation and disposal", "Old working machines can be donated. Dead equipment is collected for a fee."],
] as const;

const assurances = [
  {
    title: "Fair, pre-approved pricing",
    copy: "A written range before you travel, about 20–30% of the assessed desk price. It is confirmed when we see the item, and it can change.",
    icon: "tag",
  },
  {
    title: "Proof of ownership required",
    copy: "Bring the gadget, a National ID, and a receipt or box. No receipt means other proof, or a written agreement.",
    icon: "lock",
  },
  {
    title: "Paid tomorrow",
    copy: "Individuals are paid in cash, by M-Pesa, or by bank once we have inspected the item. Companies are paid by M-Pesa or bank.",
    icon: "bolt",
  },
] as const;

export function Home3Landing() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f4f8f5] font-sans text-[#10241a]">
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white">
        <div className="mx-auto flex h-[4.5rem] w-full max-w-6xl items-center justify-between gap-4 px-5">
          <Link href="/home3" className="flex items-center gap-2.5" aria-label="Josachi home">
            <Mark />
            <span className="text-[1.15rem] font-semibold tracking-tight">
              Josachi<span style={{ color: green }}>.</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Page">
            <Link href="/home3" className="rounded-full px-3.5 py-1.5 text-sm font-semibold text-white" style={{ background: green }} aria-current="page">
              Home
            </Link>
            <HomesMenu buttonClassName="text-slate-600 hover:text-[#1c7a43]" />
            <a href="#gadgets" className="text-sm font-medium text-slate-600 hover:text-[#1c7a43]">
              Sell Your Gadgets
            </a>
            <a href="#companies" className="text-sm font-medium text-slate-600 hover:text-[#1c7a43]">
              For Companies
            </a>
            <Link href="/contact" className="text-sm font-medium text-slate-600 hover:text-[#1c7a43]">
              Contact Us
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/sell" className="hidden items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-white sm:inline-flex" style={{ background: green }}>
              Get Instant Price
              <Arrow />
            </Link>
            <button
              type="button"
              className="grid size-11 place-items-center rounded-full border border-slate-200 lg:hidden"
              aria-expanded={open}
              aria-controls="home3-menu"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
                <span className={`h-px w-full bg-[#10241a] ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
                <span className={`h-px w-full bg-[#10241a] ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>
        {open ? (
          <nav id="home3-menu" className="border-t border-slate-100 bg-white px-5 py-4 lg:hidden" aria-label="Mobile">
            <Link href="/home3" className="block py-2.5 text-sm font-semibold" style={{ color: green }} onClick={() => setOpen(false)}>
              Home
            </Link>
            {homePages.map((item) => (
              <Link key={item.href} href={item.href} className="block py-2.5 text-sm font-medium text-slate-600" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <a href="#gadgets" className="block py-2.5 text-sm font-medium text-slate-600" onClick={() => setOpen(false)}>
              Sell Your Gadgets
            </a>
            <a href="#companies" className="block py-2.5 text-sm font-medium text-slate-600" onClick={() => setOpen(false)}>
              For Companies
            </a>
            <Link href="/contact" className="block py-2.5 text-sm font-medium text-slate-600" onClick={() => setOpen(false)}>
              Contact Us
            </Link>
            <Link href="/sell" className="mt-3 inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-white" style={{ background: green }} onClick={() => setOpen(false)}>
              Get Instant Price <Arrow />
            </Link>
          </nav>
        ) : null}
      </header>

      <main id="main">
        <section className="relative min-h-[40rem] overflow-hidden bg-[#0d2418]">
          <Image
            src="/home3-hero.jpg"
            alt="A customer handing cash to a shop assistant across the counter of an electronics shop."
            fill
            priority
            className="object-cover object-[82%_center]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10" />
          <div className="relative mx-auto flex min-h-[40rem] w-full max-w-6xl items-center px-5 py-16">
            <div className="max-w-xl text-white">
              <div className="flex items-center gap-3 text-[#e7c56a]">
                <GoldMark />
                <div className="leading-tight">
                  <p className="text-sm font-semibold tracking-[0.28em]">JOSACHI</p>
                  <p className="text-[10px] font-medium tracking-[0.32em]">ELECTRONICS BUYBACK</p>
                  <p className="mt-1 text-[10px] tracking-[0.22em] text-white/75">JUJA, KENYA</p>
                </div>
              </div>
              <h1 className="mt-6 max-w-lg text-4xl leading-[1.05] font-semibold tracking-tight sm:text-5xl lg:text-[3.35rem]">
                We buy the gadgets gathering dust at home.
              </h1>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-white/85 sm:text-[15px]">
                Laptops, desktops, phones, tablets, monitors and more. Accept the price we offer, or bargain with us on WhatsApp.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/sell" className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white" style={{ background: green }}>
                  Get Instant Price <Arrow />
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/70 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
                  Schedule a Visit
                </Link>
              </div>
              <p className="mt-5 flex items-center gap-2 text-xs text-white/75">
                <span className="grid size-4 place-items-center rounded-full bg-white/15">
                  <svg viewBox="0 0 12 12" className="size-2.5" aria-hidden="true"><path d="M2 6.2 4.6 8.6 10 3.2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
                </span>
                Working, faulty, or dead. A missing charger is fine.
              </p>
            </div>
          </div>
        </section>

        <section className="relative z-10 mx-auto -mt-14 w-full max-w-3xl px-5">
          <ul className="grid gap-3 sm:grid-cols-3">
            {[
              ["20–30%", "of the assessed desk price"],
              ["Same Day", "payout after inspection"],
              ["Any Condition", "working, faulty, or dead"],
            ].map(([value, label]) => (
              <li key={value} className="rounded-2xl bg-white px-4 py-5 text-center shadow-[0_10px_30px_rgba(16,36,26,0.08)]">
                <p className="text-xl font-semibold" style={{ color: deep }}>{value}</p>
                <p className="mt-1 text-xs text-slate-500">{label}</p>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-center text-xs text-slate-500">Final price confirmed after physical inspection at our Juja desk.</p>
        </section>

        <section id="gadgets" className="scroll-mt-24 px-5 py-20">
          <div className="mx-auto w-full max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[11px] font-bold tracking-[0.22em]" style={{ color: green }}>WHAT WE BUY</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Gadgets we cash out.</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Tell us what it is and send a few photos. Working, faulty, or dead.
              </p>
            </div>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {gadgets.map((item) => (
                <li key={item.title}>
                  <Link href="/sell" className="block overflow-hidden rounded-2xl bg-white shadow-[0_8px_28px_rgba(16,36,26,0.06)] transition hover:-translate-y-0.5">
                    <div className="relative h-44 bg-[#f6f3ee]">
                      <Image src={item.image} alt={item.alt} fill className="object-cover" sizes="280px" />
                    </div>
                    <div className="px-4 py-4">
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="mt-1 inline-flex items-center gap-1 text-sm font-medium" style={{ color: green }}>
                        Start valuation <Arrow />
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="how" className="scroll-mt-24 bg-white px-5 py-20">
          <div className="mx-auto w-full max-w-6xl">
            <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">How it works</h2>
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              <article className="rounded-[1.6rem] border border-slate-100 bg-[#f7fbf8] p-6 sm:p-8">
                <h3 className="flex items-center gap-2 text-lg font-semibold">
                  <StepIcon name="person" /> For Individuals
                </h3>
                <ol className="mt-6 space-y-5">
                  {peopleSteps.map(([title, copy], index) => (
                    <li key={title} className="flex gap-3">
                      <span className="grid size-7 shrink-0 place-items-center rounded-full text-xs font-semibold text-white" style={{ background: green }}>{index + 1}</span>
                      <span>
                        <span className="block text-sm font-semibold">{title}</span>
                        <span className="mt-1 block text-sm leading-relaxed text-slate-600">{copy}</span>
                      </span>
                    </li>
                  ))}
                </ol>
                <Link href="/sell" className="mt-8 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white" style={{ background: green }}>
                  Start Selling <Arrow />
                </Link>
              </article>

              <article id="companies" className="scroll-mt-24 rounded-[1.6rem] border border-slate-100 bg-[#f7fbf8] p-6 sm:p-8">
                <h3 className="flex items-center gap-2 text-lg font-semibold">
                  <StepIcon name="building" /> For Companies &amp; Organisations
                </h3>
                <ol className="mt-6 space-y-5">
                  {companySteps.map(([title, copy], index) => (
                    <li key={title} className="flex gap-3">
                      <span className="grid size-7 shrink-0 place-items-center rounded-full text-xs font-semibold text-white" style={{ background: deep }}>{index + 1}</span>
                      <span>
                        <span className="block text-sm font-semibold">{title}</span>
                        <span className="mt-1 block text-sm leading-relaxed text-slate-600">{copy}</span>
                      </span>
                    </li>
                  ))}
                </ol>
                <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white" style={{ background: deep }}>
                  Book a Bulk Visit <Arrow />
                </Link>
              </article>
            </div>
          </div>
        </section>

        <section className="px-5 py-16">
          <ul className="mx-auto grid w-full max-w-6xl gap-4 md:grid-cols-3">
            {assurances.map((item) => (
              <li key={item.title} className="rounded-2xl bg-white p-6 shadow-[0_8px_28px_rgba(16,36,26,0.05)]">
                <StepIcon name={item.icon} />
                <h3 className="mt-4 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.copy}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="px-5 pb-16">
          <div className="mx-auto w-full max-w-6xl rounded-[1.8rem] px-6 py-14 text-center text-white sm:px-12" style={{ background: deep }}>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Got electronics gathering dust?</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/80">
              From a single laptop in Juja to a whole office in Nairobi. WhatsApp us, or bring it to the desk.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/sell" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold" style={{ color: deep }}>
                Calculate a price
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/50 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
                Contact us
              </Link>
              <a href={whatsappHref(messages.sell)} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-100 bg-white px-5 py-14">
        <div className="mx-auto grid w-full max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/home3" className="flex items-center gap-2.5">
              <Mark />
              <span className="text-lg font-semibold">Josachi<span style={{ color: green }}>.</span></span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">
              We buy laptops, phones, and other electronics in Juja and Nairobi. Working, faulty, or dead.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold">Sell</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {["Laptops", "Phones", "Monitors", "All gadgets"].map((label) => (
                <li key={label}><Link href="/sell" className="hover:text-[#1c7a43]">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Company</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#how" className="hover:text-[#1c7a43]">How it works</a></li>
              <li><a href="#companies" className="hover:text-[#1c7a43]">For companies</a></li>
              <li><Link href="/contact" className="hover:text-[#1c7a43]">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Visit us</p>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-600">
              <li>{contact.place}</li>
              <li><a href={`tel:+${site.whatsappE164}`} className="hover:text-[#1c7a43]">{site.whatsappDisplay}</a></li>
              <li><a href={`mailto:${contact.email}`} className="hover:text-[#1c7a43]">{contact.email}</a></li>
              <li>{contact.hours}</li>
            </ul>
          </div>
        </div>
        <p className="mx-auto mt-12 w-full max-w-6xl border-t border-slate-100 pt-6 text-xs text-slate-500">
          © 2026 Josachi. Electronics buyback in Juja and Nairobi.
        </p>
      </footer>
    </div>
  );
}

function Mark() {
  return (
    <span className="grid size-9 place-items-center rounded-lg text-white" style={{ background: green }} aria-hidden="true">
      <svg viewBox="0 0 24 24" className="size-5" fill="none">
        <path d="M7 13.5A5 5 0 0 1 12 7.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M17 10.5A5 5 0 0 1 12 16.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M12 6.2 14.2 8 12 8.6 11 6.6 12 6.2Z" fill="currentColor" />
        <path d="M12 17.8 9.8 16 12 15.4 13 17.4 12 17.8Z" fill="currentColor" />
      </svg>
    </span>
  );
}

function GoldMark() {
  return (
    <svg viewBox="0 0 40 40" className="size-12" aria-hidden="true">
      <path d="M20 5.5 32.5 12.5v15L20 34.5 7.5 27.5v-15L20 5.5Z" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M20 13c2.2 2 3.6 4.2 3.6 6.6 0 2.8-1.6 4.8-3.6 5.8-2-1-3.6-3-3.6-5.8 0-2.4 1.4-4.6 3.6-6.6Z" fill="currentColor" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" className="size-3.5" aria-hidden="true" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StepIcon({ name }: { name: string }) {
  const path = {
    person: "M12 12a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4ZM6.2 18.2a5.8 5.8 0 0 1 11.6 0",
    building: "M5 19V6.5L12 4l7 2.5V19M9 19v-4h6v4M9 9h.01M12 9h.01M15 9h.01M9 12.5h.01M12 12.5h.01M15 12.5h.01",
    tag: "M4 12.5 11.5 5H18v6.5L10.5 19 4 12.5ZM14.5 8.5h.01",
    lock: "M8 11V8.5a4 4 0 0 1 8 0V11M7 11h10v8H7v-8Z",
    bolt: "M13 3 6 13h5l-1 8 7-10h-5l1-8Z",
  }[name];
  return (
    <span className="grid size-10 place-items-center rounded-xl bg-[#e7f6ec]" style={{ color: green }} aria-hidden="true">
      <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d={path} />
      </svg>
    </span>
  );
}
