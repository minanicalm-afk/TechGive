import { Reveal } from "@/components/ui/reveal";
import { shell } from "@/lib/ui";

const promises = [
  {
    title: "Donations are for giving",
    copy: "A computer you donate is repaired and placed with someone who needs it, or it is kept for parts. It does not go back onto the sales floor.",
  },
  {
    title: "A buyback is a proposal",
    copy: "You see 20–30% of the assessed price, then you accept, cancel, or bargain. Nothing is collected until you agree.",
  },
  {
    title: "Drives are cleared",
    copy: "Before a machine is handed on or opened for parts, the drive is wiped or destroyed. Say if it was a work computer.",
  },
  {
    title: "The workshop is still here",
    copy: "Josachi is the community desk of a computer sales and repair company. Buying a system, or booking a repair, still happens with the same people.",
  },
];

export function Promises() {
  return (
    <section className="py-20 sm:py-24">
      <div className={shell}>
        <div className="grid gap-8 lg:grid-cols-4">
          {promises.map((promise, index) => (
            <Reveal key={promise.title} delay={index * 0.06}>
              <h3 className="font-serif text-2xl tracking-[-0.03em]">{promise.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{promise.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
