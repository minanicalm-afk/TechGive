import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: "donations",
    index: "01",
    title: "Device Donations",
    copy: "Leave a usable computer. We repair it and give the finished machine to a less privileged school.",
    cta: "Donate",
    href: "/donations",
    image: "/home-impact.jpg",
    alt: "A student using a laptop at a classroom desk",
    position: "center 30%",
  },
  {
    id: "recycling",
    index: "02",
    title: "Collection & Recycling",
    copy: "We collect broken or unwanted equipment. The fee, when there is one, is agreed before we travel.",
    cta: "Ask about a collection",
    href: "/recycling",
    image: "/services/recycle.jpg",
    alt: "A pile of old monitors and desktop computers",
    position: "center center",
  },
  {
    id: "upgrades",
    index: "03",
    title: "System Upgrades",
    copy: "An organisation hands in the machines it has outgrown. We supply a newer generation of the same kind.",
    cta: "Plan an upgrade",
    href: "/upgrades",
    image: "/services/upgrade.jpg",
    alt: "Office computers stacked and wrapped for collection",
    position: "center 70%",
  },
  {
    id: "sell",
    index: "04",
    title: "Sell Your Electronics",
    copy: "Send the details and photos. The first figure is an estimate until the desk inspects the machine.",
    cta: "Get an estimate",
    href: "/sell",
    image: "/services/shop.jpg",
    alt: "Laptops on the counter of a computer shop",
    position: "32% 68%",
  },
  {
    id: "repair",
    index: "05",
    title: "Computer Repair",
    copy: "The Juja shop sells computers and takes hardware and software faults. Data recovery is not promised.",
    cta: "Book a repair",
    href: "/repair",
    image: "/services/opened.jpg",
    alt: "A laptop opened on a workbench, showing the board and memory",
    position: "58% 28%",
  },
] as const;

export function FinalServices() {
  const lead = services.slice(0, 3);
  const rest = services.slice(3);

  return (
    <section id="services" className="scroll-mt-24 bg-[#f4fbf6] py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6">
        <div className="text-center">
          <p className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-[#16a34a]">
            <span className="h-px w-10 bg-[#16a34a] sm:w-14" aria-hidden="true" />
            OUR SERVICES
            <span className="h-px w-10 bg-[#16a34a] sm:w-14" aria-hidden="true" />
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0b1b16] sm:text-[2.7rem]">
            Comprehensive <span className="text-[#16a34a]">Electronics Solutions</span>
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
            From donations to upgrades, we&apos;ve got you covered. Together, let&apos;s give technology a longer, greater purpose.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {lead.map((card) => (
            <ServicePanel key={card.id} card={card} />
          ))}
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {rest.map((card) => (
            <ServicePanel key={card.id} card={card} wide />
          ))}
        </div>
        <p className="mt-4 text-center text-xs leading-relaxed text-slate-500">
          Computer shop by Adamrabah, CC BY-SA 4.0. Office machines by Jemimus, CC BY 2.0. Monitor pile: public domain.
        </p>
      </div>
    </section>
  );
}

function ServicePanel({
  card,
  wide = false,
}: {
  card: (typeof services)[number];
  wide?: boolean;
}) {
  return (
    <Link
      id={card.id}
      href={card.href}
      className={`group relative flex min-h-80 overflow-hidden rounded-[1.75rem] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#16a34a] ${wide ? "lg:min-h-[22rem]" : "lg:min-h-[28rem]"}`}
    >
      <Image
        src={card.image}
        alt={card.alt}
        fill
        className="object-cover transition duration-500 group-hover:scale-[1.03]"
        style={{ objectPosition: card.position }}
        sizes={wide ? "(min-width: 1024px) 48vw, 100vw" : "(min-width: 1024px) 32vw, 100vw"}
      />
      <span className="absolute inset-0 bg-gradient-to-t from-[#050807] via-[#050807]/55 to-[#050807]/15" />
      <span className="absolute top-5 right-6 font-sans text-5xl font-extrabold tracking-tight text-white/25">{card.index}</span>
      <span className="relative mt-auto flex flex-col p-6 sm:p-7">
        <span className="text-2xl font-extrabold tracking-tight">{card.title}</span>
        <span className="mt-2 max-w-md text-base leading-relaxed text-white/85">{card.copy}</span>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#86efac]">
          {card.cta}
          <svg viewBox="0 0 16 16" className="size-3.5 transition group-hover:translate-x-0.5" aria-hidden="true" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </span>
    </Link>
  );
}
