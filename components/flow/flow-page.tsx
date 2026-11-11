import type { ReactNode } from "react";
import { Home4Banner } from "@/components/home4-footer";

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
    <main id="main" className="bg-[#f4fbf6]">
      <Home4Banner image="/final-hero.jpg" eyebrow={eyebrow} title={title} text={text} />
      <div className="mx-auto grid w-full max-w-[96rem] gap-6 px-4 py-14 sm:px-6 lg:grid-cols-[1.25fr_0.75fr] lg:py-20">
        <div className="rounded-[2rem] bg-white p-6 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.45)] sm:p-8">{children}</div>
        <aside className="h-fit rounded-[2rem] bg-[#123d2b] p-6 text-white sm:p-8">
          <p className="text-xs font-bold tracking-[0.18em] text-[#86efac]">{asideTitle}</p>
          <ol className="mt-5 space-y-4">
            {aside.map((step, index) => (
              <li key={step} className="grid grid-cols-[2rem_1fr] gap-2 text-sm leading-relaxed text-white/80">
                <span className="text-lg font-extrabold text-[#86efac]">0{index + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </main>
  );
}
