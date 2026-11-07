import type { ReactNode } from "react";
import { PageHero } from "@/components/page-hero";
import { shell } from "@/lib/ui";

export function FlowPage({
  eyebrow,
  title,
  text,
  asideTitle,
  aside,
  children,
}: {
  eyebrow: string;
  title: string;
  text: string;
  asideTitle: string;
  aside: readonly string[];
  children: ReactNode;
}) {
  return (
    <main id="main">
      <PageHero eyebrow={eyebrow} title={title} text={text} />
      <div className={`${shell} grid gap-6 py-14 lg:grid-cols-[1.25fr_0.75fr] lg:py-20`}>
        <div className="rounded-2xl border border-ink/10 bg-cream p-6 sm:p-8">{children}</div>
        <aside className="h-fit rounded-2xl bg-moss p-6 text-cream sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper-soft">{asideTitle}</p>
          <ol className="mt-5 space-y-4">
            {aside.map((step, index) => (
              <li key={step} className="grid grid-cols-[2rem_1fr] gap-2 text-sm leading-relaxed text-cream/80">
                <span className="font-serif text-lg text-copper-soft">0{index + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </main>
  );
}
