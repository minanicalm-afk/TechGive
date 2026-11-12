import Image from "next/image";
import Link from "next/link";
import { HeroFacts } from "@/components/hero-facts";
import { Button } from "@/components/ui/button";
import { shell } from "@/lib/ui";

const features = [
  { icon: "recycle", title: "Donate Devices", copy: "Give unused laptops, desktops and more." },
  { icon: "wrench", title: "Repair & Reuse", copy: "We fix and upgrade for greater impact." },
  { icon: "leaf", title: "Recycle Responsibly", copy: "Dispose electronics safely for a greener planet." },
  { icon: "people", title: "Empower Communities", copy: "Get access to quality technology." },
  { icon: "building", title: "Support Organisations", copy: "Upgrade your systems cost-effectively." },
] as const;

const facts = [
  { href: "/donations", label: "Donate", value: "Repaired, then given to less privileged schools" },
  { href: "/sell", label: "Sell", value: "A range, confirmed after we inspect the item" },
  { href: "/dispose", label: "Dispose", value: "Dead equipment collected for a fee" },
  { href: "/upgrade", label: "Upgrade", value: "Old working machines donated, or released for a small fee" },
];

export function Hero({ image, motion = false }: { image?: string; motion?: boolean }) {
  const scenic = Boolean(image) || motion;
  return (
    <>
    <section className={`relative overflow-hidden text-cream ${motion ? "hero-motion" : "bg-ink"}`}>
      {motion ? (
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/hero-ring.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050807] from-0% via-[#050807]/70 via-[32%] to-transparent to-[62%]" />
        </div>
      ) : image ? (
        <>
          <svg className="absolute size-0" aria-hidden="true">
            <filter id="hero-no-white" colorInterpolationFilters="sRGB">
              <feColorMatrix
                in="SourceGraphic"
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  -1.15 -1.15 -1.15 0 3.15"
                result="knock"
              />
              <feColorMatrix
                in="SourceGraphic"
                type="matrix"
                values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
                result="srcAlpha"
              />
              <feComposite in="knock" in2="srcAlpha" operator="in" />
            </filter>
          </svg>
          <div className="pointer-events-none absolute top-16 right-0 bottom-20 hidden w-[58%] [mask-image:linear-gradient(90deg,transparent_0%,#000_46%)] lg:block">
            <Image
              src={image}
              alt=""
              fill
              priority
              sizes="58vw"
              className="object-contain object-right"
              style={{ filter: "url(#hero-no-white)" }}
            />
          </div>
        </>
      ) : (
        <>
          <div className="hero-glow pointer-events-none absolute inset-0" />
          <div className="hero-dots pointer-events-none absolute inset-0" />
        </>
      )}

      <div
        className={
          scenic
            ? "relative z-10 mx-auto flex min-h-[36rem] w-full max-w-[96rem] flex-col justify-center px-4 pt-28 pb-20 sm:px-6 lg:pt-32 lg:pb-24"
            : "relative z-10 mx-auto w-full max-w-3xl px-5 pt-32 pb-24 text-center sm:px-8 lg:pt-40 lg:pb-28"
        }
      >
        <div>
          {scenic ? (
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#22c55e]/70 bg-[#071a12]/50 px-3 py-1.5 text-sm font-medium text-[#4ade80]">
                <svg viewBox="0 0 16 16" className="size-3.5" aria-hidden="true" fill="none">
                  <path d="M8 1.6 13 3.6v4.2c0 3.2-2.1 5.4-5 6.6-2.9-1.2-5-3.4-5-6.6V3.6L8 1.6Z" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M5.6 8.1 7.2 9.7 10.5 6.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Files cleared before handover
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/50 bg-[#071a12]/50 px-3 py-1.5 text-sm font-medium text-sky-300">
                <svg viewBox="0 0 16 16" className="size-3.5" aria-hidden="true" fill="currentColor">
                  <path d="M7.1 1.4h1.8l.3 1.7a4.7 4.7 0 0 1 1.1.6l1.6-.7 1.3 1.3-.7 1.6c.2.3.4.7.6 1.1l1.7.3v1.8l-1.7.3a4.7 4.7 0 0 1-.6 1.1l.7 1.6-1.3 1.3-1.6-.7a4.7 4.7 0 0 1-1.1.6l-.3 1.7H7.1l-.3-1.7a4.7 4.7 0 0 1-1.1-.6l-1.6.7-1.3-1.3.7-1.6a4.7 4.7 0 0 1-.6-1.1l-1.7-.3V7.1l1.7-.3c.2-.4.4-.8.6-1.1L3 4.1 4.3 2.8l1.6.7c.3-.2.7-.4 1.1-.6l.1-1.5ZM8 10.1A2.1 2.1 0 1 0 8 5.9a2.1 2.1 0 0 0 0 4.2Z" />
                </svg>
                Repair, reuse, and upgrade
              </span>
            </div>
          ) : (
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper-soft">
              Computer sales & repair · Community Support
            </p>
          )}
          <h1
            className={
              scenic
                ? "mt-6 max-w-5xl font-sans text-[2.6rem] font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl"
                : "mt-5 font-serif text-[3.15rem] leading-[0.98] tracking-[-0.035em] text-balance sm:text-6xl lg:text-[4.4rem]"
            }
          >
            {scenic ? (
              <>
                <span className="block sm:whitespace-nowrap">
                  Give <span className="text-[#3dff6a] [text-shadow:0_0_24px_rgba(61,255,106,0.55)]">technology</span>
                </span>
                <span className="block">a second life.</span>
              </>
            ) : (
              <>
                Unused electronics still have{" "}
                <em className="font-medium text-copper-soft italic">work to do.</em>
              </>
            )}
          </h1>
          <p
            className={
              scenic
                ? "mt-6 max-w-lg text-lg leading-relaxed text-pretty text-cream/78"
                : "mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-cream/78"
            }
          >
            We collect, repair, and upgrade electronics. Whether you want to donate to a good
            cause, let us handle your company&apos;s IT upgrades, sell to us for a fair price, or
            safely dispose of e-waste in Juja and Nairobi — we make it simple.
          </p>
          <div className={`mt-8 flex flex-col gap-3 sm:flex-row ${scenic ? "items-stretch sm:items-center" : "items-center justify-center"}`}>
            {scenic ? (
              <>
                <Link href="/donations#note" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#22c55e] px-5 py-3 text-sm font-semibold text-white hover:bg-[#16a34a]">
                  Donate Devices
                  <svg viewBox="0 0 16 16" className="size-3.5" aria-hidden="true" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
                  Explore Our Services
                  <svg viewBox="0 0 16 16" className="size-3.5" aria-hidden="true" fill="none">
                    <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </>
            ) : (
              <>
                <Button href="/donations#note" variant="cream">
                  Donate a device
                </Button>
                <Button href="/sell" variant="ghost-light">
                  Sell to TechGive
                </Button>
              </>
            )}
          </div>
        </div>
        {image && !motion ? (
          <div className="relative h-80 sm:h-96 lg:hidden">
            <Image
              src={image}
              alt="A recycling mark made from computer motherboards."
              fill
              sizes="100vw"
              className="object-contain object-center"
              style={{ filter: "url(#hero-no-white)" }}
            />
          </div>
        ) : null}

      </div>

      {scenic ? (
        <svg viewBox="0 0 1440 90" className="absolute right-0 bottom-0 left-0 z-10 h-16 w-full sm:h-20" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 48C360 78 820 8 1440 42V90H0V48Z" fill="#22c55e" />
          <path d="M0 62C380 92 860 28 1440 58V90H0V62Z" fill="#ffffff" />
        </svg>
      ) : null}
    </section>

    {scenic ? (
      <section className="bg-white">
        <ul className="mx-auto grid w-full max-w-[96rem] gap-8 px-4 py-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-5 lg:py-8">
          {features.map((item) => (
            <li key={item.title} className="text-center">
              <span className="mx-auto grid size-16 place-items-center rounded-full bg-emerald-50 text-[#16a34a]">
                <FeatureIcon name={item.icon} />
              </span>
              <h2 className="mt-3 text-sm font-bold text-[#0f172a]">{item.title}</h2>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">{item.copy}</p>
            </li>
          ))}
        </ul>
      </section>
    ) : (
      <div className={`relative z-10 -mt-16 ${shell}`}>
        <HeroFacts facts={facts} />
      </div>
    )}
    </>
  );
}

function FeatureIcon({ name }: { name: (typeof features)[number]["icon"] }) {
  const common = { viewBox: "0 0 24 24", className: "size-10", fill: "none", "aria-hidden": true } as const;
  if (name === "wrench") {
    return (
      <svg {...common}>
        <path d="M14.5 6.5a3.5 3.5 0 0 0-4.8 4.1L4 16.3 7.7 20l5.7-5.7a3.5 3.5 0 0 0 4.1-4.8L15 12l-3-3 2.5-2.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    );
  }
  if (name === "leaf") {
    return (
      <svg {...common}>
        <path d="M5 19s1-7 8-10 7-1 7-1-1 6-6 8-9 3-9 3Z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9 15c2-2 4-3 7-4" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }
  if (name === "people") {
    return (
      <svg {...common}>
        <circle cx="9" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="16" cy="10" r="1.8" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4.5 18c.6-2.4 2.4-3.5 4.5-3.5s3.9 1.1 4.5 3.5M13 18c.3-1.6 1.4-2.6 3-2.6 1.4 0 2.4.7 2.8 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "building") {
    return (
      <svg {...common}>
        <path d="M4 20V8l6-3v15M10 20V9l10 3v8M4 20h16" stroke="currentColor" strokeWidth="1.6" />
        <path d="M13 14h2M13 17h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M7 8.5A5 5 0 0 1 12 6a5 5 0 0 1 4.2 2.3M16.5 12A5 5 0 0 1 12 18a5 5 0 0 1-4.2-2.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M16 7.5V5h2.5M8 16.5V19H5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

