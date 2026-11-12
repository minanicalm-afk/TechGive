import Image from "next/image";
import Link from "next/link";

const top = [
  {
    id: "donations",
    icon: "heart",
    title: "Device Donations",
    copy: "Give unused laptops, desktops and other electronics to help those in need.",
    points: ["Laptops & Desktops", "Monitors & Accessories", "Servers & More"],
    cta: "Donate Now",
    href: "/donations",
    image: "/home-impact.jpg",
    alt: "A student using a laptop at a classroom desk",
    position: "center 30%",
  },
  {
    id: "recycling",
    icon: "recycle",
    title: "Collection & Recycling",
    copy: "Dispose of old or broken electronics safely and responsibly.",
    points: ["E-Waste Collection", "Secure Recycling", "Environmental Care"],
    cta: "Schedule a Pickup",
    href: "/recycling",
    image: "/services/recycle.jpg",
    alt: "A pile of old monitors and desktop computers",
    position: "center center",
  },
  {
    id: "upgrades",
    icon: "arrow",
    title: "System Upgrades",
    copy: "Upgrade your existing systems to newer generations for better performance.",
    points: ["Hardware Upgrades", "OS Updates", "Performance Boost"],
    cta: "Request an Upgrade",
    href: "/upgrades",
    image: "/services/upgrade.jpg",
    alt: "Office computers stacked and wrapped for collection",
    position: "center 70%",
  },
] as const;

const bottom = [
  {
    id: "sell",
    icon: "tag",
    title: "Sell Your Electronics",
    copy: "Get a fair and instant quote for your devices. Sell with confidence!",
    points: ["Laptops, Desktops & More", "Instant Pricing", "Flexible Options"],
    cta: "Get a Quote",
    href: "/sell",
    image: "/services/shop.jpg",
    alt: "Laptops on the counter of a computer shop",
    position: "32% 68%",
  },
  {
    id: "repair",
    icon: "tools",
    title: "Computer Repair",
    copy: "Expert repair services for all your computing needs.",
    points: ["Hardware & Software Repair", "System Optimization", "Data Recovery"],
    cta: "Book a Repair",
    href: "/repair",
    image: "/services/opened.jpg",
    alt: "A laptop opened on a workbench, showing the board and memory",
    position: "58% 28%",
  },
] as const;

export function FinalServices() {
  return (
    <section id="services" className="bg-[#f4fbf6] py-14 sm:py-16">
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

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {top.map((card) => (
            <ServiceCard key={card.id} card={card} />
          ))}
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {bottom.map((card) => (
            <ServiceCard key={card.id} card={card} wide />
          ))}
        </div>
        <p className="mt-4 text-center text-[11px] leading-relaxed text-slate-400">
          Computer shop by Adamrabah, CC BY-SA 4.0. Office machines by Jemimus, CC BY 2.0. Monitor pile: public domain.
        </p>
      </div>
    </section>
  );
}

function ServiceCard({
  card,
  wide = false,
}: {
  card: (typeof top)[number] | (typeof bottom)[number];
  wide?: boolean;
}) {
  return (
    <article id={card.id} className="grid overflow-hidden rounded-[1.35rem] bg-white shadow-[0_16px_40px_-28px_rgba(15,23,42,0.45)] sm:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)]">
      <div className="flex min-w-0 flex-col p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#16a34a] text-white">
            <CardIcon name={card.icon} />
          </span>
          <h3 className="pt-1.5 text-lg font-extrabold tracking-tight text-[#0b1b16]">{card.title}</h3>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{card.copy}</p>
        <ul className="mt-3 space-y-1.5">
          {card.points.map((point) => (
            <li key={point} className="flex items-center gap-2 text-sm text-slate-700">
              <span className="grid size-4 shrink-0 place-items-center rounded-full bg-[#16a34a] text-white">
                <svg viewBox="0 0 12 12" className="size-2.5" aria-hidden="true">
                  <path d="M2.4 6.2 4.8 8.6 9.6 3.6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {point}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-6">
          <Link
            href={card.href}
            className="inline-flex w-fit max-w-full items-center gap-2 whitespace-nowrap rounded-full bg-[#123d2b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0c2e20]"
          >
            {card.cta} <Arrow />
          </Link>
        </div>
      </div>
      <div className="relative min-h-52 sm:min-h-full">
        <Image
          src={card.image}
          alt={card.alt}
          fill
          className="object-cover"
          style={{ objectPosition: card.position }}
          sizes={wide ? "480px" : "320px"}
        />
      </div>
    </article>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" className="size-3.5" aria-hidden="true" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CardIcon({ name }: { name: string }) {
  if (name === "recycle") {
    return (
      <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 7.5 9.2 4h5.6L17 7.5" />
        <path d="M17 7.5 19.5 12l-2.2 4.2" />
        <path d="M7 16.5 4.5 12 7 7.5" />
        <path d="M7 16.5h5.2L14.5 20" />
        <path d="m8.2 6.2 1-2.2M18.4 10.2l2.2-.2M8.8 17.6l-1.2 2" />
      </svg>
    );
  }
  if (name === "arrow") {
    return (
      <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 16.5 10 11l3 2.5L19 7" />
        <path d="M14 7h5v5" />
      </svg>
    );
  }
  if (name === "tag") {
    return (
      <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true" fill="currentColor">
        <path d="M13.2 3.6h6.1a1 1 0 0 1 1 1v6.1a1.5 1.5 0 0 1-.4 1L11.2 20.4a1.5 1.5 0 0 1-2.1 0l-5.5-5.5a1.5 1.5 0 0 1 0-2.1L12.2 4a1.5 1.5 0 0 1 1-.4Zm4.3 4.2a1.15 1.15 0 1 0 0-2.3 1.15 1.15 0 0 0 0 2.3Z" />
      </svg>
    );
  }
  if (name === "tools") {
    return (
      <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true" fill="currentColor">
        <path d="M14.2 3.4a3.2 3.2 0 0 0-1.6 4.2L6.2 14a2.2 2.2 0 0 0 0 3.1l.7.7a2.2 2.2 0 0 0 3.1 0l6.4-6.4a3.2 3.2 0 0 0 4.2-1.6l-2.3.6-1.2-1.2.6-2.3a3.2 3.2 0 0 0-3.5-2.5Z" />
        <path d="M8.4 14.2 4.2 18.4a1.6 1.6 0 0 0 2.2 2.2l4.2-4.2-2.2-2.2Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true" fill="currentColor">
      <path d="M12 11.4c.8-1.8 3-2.4 4.3-1.2 1.1.9 1.2 2.5.2 3.6L12 18.2 7.5 13.8c-1-1.1-.9-2.7.2-3.6 1.3-1.2 3.5-.6 4.3 1.2Z" />
      <path d="M7.2 14.6c-1.8.7-3.1 2.2-3.5 3.8.4.2 1 .3 1.5.1 1.2-.6 2.2-1.8 2.6-3.1l-.6-.8Zm9.6 0 .6.8c.4 1.3 1.4 2.5 2.6 3.1.5.2 1.1.1 1.5-.1-.4-1.6-1.7-3.1-3.5-3.8Z" />
    </svg>
  );
}
