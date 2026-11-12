"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ActionLink } from "@/components/action-link";
import { Logo } from "@/components/logo";
import { Arrow } from "@/components/techgive-ui";
import { messages, nav, themedPaths } from "@/lib/site";
import { shell } from "@/lib/ui";

const finalServices = [
  { href: "/donations", label: "Donations" },
  { href: "/recycling", label: "Collection for Recycling" },
  { href: "/upgrades", label: "System Upgrades" },
  { href: "/sell", label: "Sell to Us" },
  { href: "/repair", label: "Repair Services" },
] as const;

const finalNav = [
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

function subscribe(onStoreChange: () => void) {
  window.addEventListener("scroll", onStoreChange, { passive: true });
  return () => window.removeEventListener("scroll", onStoreChange);
}

function scrolledSnapshot() {
  return window.scrollY > 12;
}

function jumpTo(id: string) {
  const target = document.getElementById(id);
  if (!target) return;
  const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - 88);
  const root = document.documentElement;
  const previous = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";
  window.scrollTo(0, top);
  root.style.scrollBehavior = previous;
}

export function Header() {
  const scrolled = useSyncExternalStore(subscribe, scrolledSnapshot, () => false);
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const pendingScroll = useRef<string | null>(null);
  const onFinal = themedPaths.includes(pathname as (typeof themedPaths)[number]);
  const solid = scrolled || open;
  const linkClass = solid ? "text-ink-soft hover:text-ink" : "text-cream/80 hover:text-cream";

  useEffect(() => {
    function close(event: MouseEvent) {
      if (!servicesRef.current?.contains(event.target as Node)) setServicesOpen(false);
    }
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    document.body.classList.add("menu-open");
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", onKey);
      const id = pendingScroll.current;
      pendingScroll.current = null;
      if (!id) return;
      jumpTo(id);
      // Releasing the scroll lock can restore the old position on the next turn.
      window.setTimeout(() => jumpTo(id), 0);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "border-b border-ink/10 bg-cream/95 text-ink backdrop-blur-md"
          : "bg-transparent text-cream"
      }`}
    >
      <div className={`${onFinal ? "mx-auto w-full max-w-[96rem] px-4 sm:px-6" : shell} flex h-[4.5rem] items-center justify-between gap-4`}>
        <Link href="/" className="rounded-md" aria-label="TechGive home">
          <Logo light={!solid} />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Page">
          {onFinal ? (
            <Link
              href="/"
              aria-current={pathname === "/" ? "page" : undefined}
              className={`text-sm font-medium ${pathname === "/" ? "underline decoration-2 underline-offset-8" : ""} ${solid ? "text-[#16a34a]" : "text-emerald-300"}`}
            >
              Home
            </Link>
          ) : null}
          {onFinal ? (
            <div className="relative" ref={servicesRef}>
              <button
                type="button"
                className={`inline-flex items-center gap-1 text-sm font-medium ${linkClass}`}
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((value) => !value)}
              >
                Our Services
                <svg viewBox="0 0 12 12" className={`size-3 ${servicesOpen ? "rotate-180" : ""}`} aria-hidden="true">
                  <path d="M2 4.5 6 8l4-3.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </button>
              {servicesOpen ? (
                <div className="absolute top-full left-1/2 z-20 mt-3 w-60 -translate-x-1/2 rounded-2xl border border-slate-100 bg-white p-2 shadow-xl">
                  {finalServices.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block rounded-xl px-3 py-2.5 text-sm text-slate-700 hover:bg-emerald-50 hover:text-[#16a34a]"
                      onClick={() => setServicesOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}
          {(onFinal ? finalNav : nav).map((item) => {
            const current = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={`text-sm font-medium ${current ? (onFinal ? "text-[#16a34a]" : solid ? "text-copper" : "text-copper-soft") : linkClass}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          {onFinal ? (
            <a
              href="/#get-started"
              className="inline-flex items-center gap-2 rounded-full bg-[#22c55e] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_8px_18px_-10px_rgba(22,163,74,0.9)] hover:bg-[#16a34a]"
            >
              Get Involved <Arrow />
            </a>
          ) : (
            <ActionLink message={messages.general} variant={solid ? "copper" : "cream"}>
              WhatsApp the desk
            </ActionLink>
          )}
        </div>

        <button
          type="button"
          className={`grid size-11 place-items-center rounded-full border lg:hidden ${
            solid ? "border-ink/15" : "border-cream/25"
          }`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
            <span className={`h-px w-full ${solid ? "bg-ink" : "bg-cream"} ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px w-full ${solid ? "bg-ink" : "bg-cream"} ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-ink/10 bg-cream px-4 py-6 sm:px-6 lg:hidden">
          <nav className="mx-auto flex w-full max-w-7xl flex-col" aria-label="Mobile">
            {onFinal ? (
              <Link
                href="/"
                className="border-b border-ink/10 py-3.5 font-serif text-2xl text-[#16a34a]"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
            ) : null}
            {onFinal
              ? finalServices.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="border-b border-ink/10 py-3.5 font-serif text-2xl text-ink"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))
              : null}
            {(onFinal ? finalNav : nav).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-ink/10 py-3.5 font-serif text-2xl text-ink"
                onClick={(event) => {
                  event.preventDefault();
                  if (item.href.startsWith("#")) {
                    pendingScroll.current = item.href.slice(1);
                    setOpen(false);
                    return;
                  }
                  setOpen(false);
                  router.push(item.href);
                }}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-5">
              {onFinal ? (
                <a
                  href="/#get-started"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#22c55e] px-4 py-3 text-sm font-semibold text-white"
                  onClick={() => setOpen(false)}
                >
                  Get Involved <Arrow />
                </a>
              ) : (
                <ActionLink message={messages.general} className="w-full">
                  WhatsApp the desk
                </ActionLink>
              )}
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
