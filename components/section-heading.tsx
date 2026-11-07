import { Reveal } from "@/components/ui/reveal";

export function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p
        className={`text-xs font-semibold uppercase tracking-[0.22em] ${light ? "text-copper-soft" : "text-copper"}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-serif text-4xl leading-[1.08] tracking-[-0.03em] text-balance sm:text-5xl ${light ? "text-cream" : "text-ink"}`}
      >
        {title}
      </h2>
      {text ? (
        <p
          className={`mt-4 text-lg leading-relaxed text-pretty ${light ? "text-cream/75" : "text-ink-soft"}`}
        >
          {text}
        </p>
      ) : null}
    </Reveal>
  );
}
