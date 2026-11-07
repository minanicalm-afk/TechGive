import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { shell } from "@/lib/ui";

const people = [
  {
    title: "A student",
    copy: "Coursework, applications, and a quiet place to study when the family has no computer at home.",
  },
  {
    title: "A job search",
    copy: "Someone preparing applications and online work, who cannot buy a laptop to begin.",
  },
  {
    title: "A community class",
    copy: "A small learning group or lab that needs a few dependable machines, not a showroom set.",
  },
  {
    title: "A shared home",
    copy: "A household where schoolwork and a small livelihood have to live on one computer.",
  },
];

export function Recipients() {
  return (
    <section id="recipients" className="py-20 sm:py-28">
      <div className={shell}>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            eyebrow="Who receives one"
            title="A repaired donation is given to a need we can name."
            text="Tell us who the computer is for and what it has to do. We place machines where that need is specific, and we say so when we do not have one to give."
          />
          <div className="lg:justify-self-end">
            <Button href="/ask" variant="ghost">
              Ask about a computer
            </Button>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {people.map((person, index) => (
            <Reveal
              key={person.title}
              delay={index * 0.06}
              className="flex min-h-64 flex-col justify-between rounded-2xl border border-ink/10 bg-cream p-6 sm:p-7"
            >
              <p className="font-serif text-5xl tracking-[-0.04em] text-copper/80">0{index + 1}</p>
              <div>
                <h3 className="font-serif text-2xl tracking-[-0.03em]">{person.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{person.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
