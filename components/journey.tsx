import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { shell } from "@/lib/ui";

const steps = [
  {
    title: "Drop it off",
    copy: "Bring the computer to Juja or Nairobi. Message first if you are bringing several, so the bench is ready.",
  },
  {
    title: "We log it",
    copy: "We note what arrived, whether it powers on, and if it was used for work. That note stays with the machine.",
  },
  {
    title: "The bench decides",
    copy: "A repairable computer is cleaned and fixed. Memory, storage, or a fresh system goes in when the machine needs it to be useful.",
  },
  {
    title: "Parts, if that is the honest end",
    copy: "A unit that cannot be placed is opened for parts that keep other donated computers in service.",
  },
  {
    title: "Someone receives it",
    copy: "A finished machine is given to a person or a group with a need we can name: study, work, or a class.",
  },
];

export function Journey() {
  return (
    <section id="donations" className="border-y border-ink/10 bg-cream py-20 sm:py-28">
      <div className={shell}>
        <SectionHeading
          eyebrow="A donated computer"
          title="From the doorway to a desk that needs it."
          text="Donations are not stock for the shop. This is the path a laptop or desktop takes once you leave it with us."
        />

        <ol className="relative mt-14 grid gap-10 md:grid-cols-5 md:gap-6">
          <div
            className="absolute top-5 right-[8%] left-[8%] hidden h-px bg-ink/15 md:block"
            aria-hidden="true"
          />
          {steps.map((step, index) => (
            <li key={step.title} className="relative">
              <Reveal delay={index * 0.06}>
                <span className="relative z-10 grid size-10 place-items-center rounded-full border border-ink/10 bg-paper font-serif text-lg">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-serif text-2xl tracking-[-0.03em]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.copy}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
