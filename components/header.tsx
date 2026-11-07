"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ActionLink } from "@/components/action-link";
import { Logo } from "@/components/logo";
import { homePages, HomesMenu } from "@/components/techgive-ui";
import { messages, nav } from "@/lib/site";
import { shell } from "@/lib/ui";

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
  const pendingScroll = useRef<string | null>(null);
  const solid = scrolled || open;
  const onLanding = pathname === "/";

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
      <div className={`${shell} flex h-[4.5rem] items-center justify-between gap-4`}>
        <Link href="/" className="rounded-md" aria-label="TechGive home">
          <Logo light={!solid} />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Page">
          {onLanding ? (
            <HomesMenu buttonClassName={solid ? "text-ink-soft hover:text-ink" : "text-cream/80 hover:text-cream"} />
          ) : null}
          {nav.map((item) => {
            const current = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={`text-sm font-medium ${
                  current
                    ? solid
                      ? "text-copper"
                      : "text-copper-soft"
                    : solid
                      ? "text-ink-soft hover:text-ink"
                      : "text-cream/80 hover:text-cream"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <ActionLink message={messages.general} variant={solid ? "copper" : "cream"}>
            WhatsApp the desk
          </ActionLink>
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
            {onLanding
              ? homePages.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="border-b border-ink/10 py-3.5 font-serif text-2xl text-ink"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))
              : null}
            {nav.map((item) => (
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
              <ActionLink message={messages.general} className="w-full">
                WhatsApp the desk
              </ActionLink>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
