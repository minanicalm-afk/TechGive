import { shell } from "@/lib/ui";

export function PageHero({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="relative flex min-h-[38rem] items-end overflow-hidden bg-ink text-cream">
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div className="hero-dots pointer-events-none absolute inset-0" />
      <div className={`${shell} relative w-full pt-32 pb-14 sm:pb-16`}>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper-soft">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.02] tracking-[-0.035em] text-balance sm:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream/75">{text}</p>
      </div>
    </section>
  );
}
