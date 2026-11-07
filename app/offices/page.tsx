import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { ActionLink } from "@/components/action-link";
import { messages, offices } from "@/lib/site";
import { shell } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Juja and Nairobi",
  description: "The Josachi shop is in Juja, at Alma Matta Building by JKUAT Gate B. Collections also run in Nairobi and nearby.",
};

const paths = [
  { href: "/donate", label: "Donate a device" },
  { href: "/sell", label: "Sell to Josachi" },
  { href: "/dispose", label: "Book a collection" },
  { href: "/upgrade", label: "Plan an upgrade" },
  { href: "/ask", label: "Ask for a computer" },
];

export default function OfficesPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Offices"
        title="The shop is in Juja. We also collect in Nairobi."
        text="Drop computers at Alma Matta Building, along Gachororo Road, JKUAT Gate B. On-site collection covers Juja, Nairobi, and the surrounding areas."
      />
      <div className={`${shell} grid gap-4 py-14 sm:grid-cols-2 lg:py-20`}>
        {offices.map((office) => (
          <article key={office.city} className="rounded-2xl border border-ink/10 bg-cream p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">{office.county}</p>
            <h2 className="mt-3 font-serif text-4xl tracking-[-0.03em]">{office.city}</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft sm:text-base">{office.copy}</p>
          </article>
        ))}
      </div>
      <div className={`${shell} pb-20`}>
        <div className="rounded-2xl bg-moss p-6 text-cream sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper-soft">Start a visit</p>
          <ul className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {paths.map((path) => (
              <li key={path.href}>
                <Link
                  href={path.href}
                  className="inline-flex rounded-full border border-cream/25 px-5 py-3 text-sm font-medium hover:bg-cream/10"
                >
                  {path.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <ActionLink message={messages.general} variant="cream">
              Ask for directions
            </ActionLink>
          </div>
        </div>
      </div>
    </main>
  );
}
