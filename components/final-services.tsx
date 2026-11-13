import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: "donations",
    index: "01",
    title: "Donations",
    copy: "Working or repairable machines are repaired and given to schools. Cash and listed items go through the programs page.",
    cta: "Donate",
    href: "/donations",
    image: "/home-impact.jpg",
    alt: "A student using a donated laptop in class",
    position: "center 30%",
  },
  {
    id: "sponsor-testimonials",
    index: "02",
    title: "Sponsor testimonials",
    copy: "People and organisations who have handed machines over say what happened after the visit.",
    cta: "Read testimonials",
    href: "/#stories",
    image: "/impact/impact-sponsors.jpg",
    alt: "Partners talking through a donation at a table",
    position: "center 40%",
  },
  {
    id: "community-engagement",
    index: "03",
    title: "Community engagement",
    copy: "Race days, tree planting, and school slots sit on the programs page. Join the group that plans the day.",
    cta: "See programs",
    href: "/programs",
    image: "/impact/impact-community.jpg",
    alt: "A community planting seedlings together",
    position: "center 45%",
  },
  {
    id: "environmental-engagement",
    index: "04",
    title: "Environmental engagement",
    copy: "Dead electronics are collected, recycled, or disposed of. Working parts stay in service. Neighbourhoods keep dumps clear of e-waste.",
    cta: "E-waste path",
    href: "/recycling",
    image: "/impact/impact-environment.jpg",
    alt: "Circuit boards and computer parts sorted for recycling",
    position: "center center",
  },
  {
    id: "digital-divide",
    index: "05",
    title: "Digital divide and sensitization",
    copy: "Placed computers go into class. Schools and students learn what the machines can do, not only that they arrived.",
    cta: "How placement works",
    href: "/donations",
    image: "/impact/impact-digital.jpg",
    alt: "Students in a computer class with a teacher",
    position: "center 40%",
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
            COMMUNITY IMPACT
            <span className="h-px w-10 bg-[#16a34a] sm:w-14" aria-hidden="true" />
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0b1b16] sm:text-[2.7rem]">
            How the work <span className="text-[#16a34a]">reaches people</span>
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
            Donations, sponsor voices, community days, e-waste, and digital access. Each card is a different way the desk shows up.
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
