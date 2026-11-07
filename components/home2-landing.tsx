import Image from "next/image";
import Link from "next/link";
import { Arrow, LineIcon, TechFooter, TechHeader } from "@/components/techgive-ui";

const services = [
  { href: "#donations", label: "Donate Devices" },
  { href: "#recycling", label: "Collection & Recycling" },
  { href: "#upgrades", label: "System Upgrades" },
  { href: "#sell", label: "Sell Your Electronics" },
  { href: "#repair", label: "Computer Repair" },
] as const;

const links = [
  { href: "#impact", label: "Impact" },
  { href: "#about", label: "About" },
  { href: "#how", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;

export function Home2Landing() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#0f172a]">
      <TechHeader homeHref="/home2" links={links} services={services} cta={{ href: "/donate", label: "Donate Now" }} />
      <main id="main">
        <section className="bg-white">
          <div className="mx-auto grid min-h-[34rem] w-full max-w-6xl items-center gap-6 px-5 py-12 lg:grid-cols-2">
            <div>
              <h1 className="text-5xl leading-[1.02] font-extrabold tracking-tight text-[#0b1b33] sm:text-[3.4rem]">
                Give. Repair.<br />Recycle.<br />
                <span className="text-[#3DDC6A]">Create Impact.</span>
              </h1>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-slate-600">
                Donate, sell, upgrade, or responsibly recycle your computers and electronics. Together, we build a more connected and sustainable community.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/donate" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#22c55e] px-5 py-3 text-sm font-semibold text-white hover:bg-[#16a34a]">
                  Donate a Device <Arrow />
                </Link>
                <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold hover:bg-slate-50">
                  Explore Services
                  <svg viewBox="0 0 16 16" className="size-3.5" aria-hidden="true" fill="none"><path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
                </a>
              </div>
            </div>
            <div className="relative h-72 sm:h-[26rem]">
              <Image src="/home2-hero.jpg" alt="A recycling mark made from circuit boards above a pile of electronics." fill priority className="object-contain object-right" sizes="640px" />
            </div>
          </div>
        </section>

        <section className="mx-auto -mt-2 w-full max-w-6xl px-5">
          <div className="grid gap-6 rounded-[1.4rem] bg-[#E7F8EE] px-4 py-7 sm:grid-cols-2 lg:grid-cols-4 sm:px-8">
            {[
              ["laptop", "500+", "Devices Donated"],
              ["people", "1,000+", "People Supported"],
              ["recycle", "5 Tons", "E-Waste Recycled"],
              ["building", "50+", "Organizations Assisted"],
            ].map(([icon, value, label]) => (
              <div key={label} className="text-center">
                <span className="mx-auto grid size-14 place-items-center text-[#16a34a]"><LineIcon name={icon} className="size-10" /></span>
                <p className="mt-1 text-3xl font-extrabold text-[#14532d]">{value}</p>
                <p className="mt-1 text-sm text-slate-600">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="mx-auto w-full max-w-6xl px-5 py-16">
          <div className="text-center">
            <p className="text-[11px] font-bold tracking-[0.2em] text-[#16a34a]">OUR SERVICES</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0b1b33] sm:text-4xl">Turning E-Waste into Opportunities</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <Offer id="donations" title="Donate Devices" copy="Help someone in need." cta="Donate Now" href="/donate" art="heart" />
            <Offer id="recycling" title="Collection & Recycling" copy="Dispose responsibly." cta="Schedule Pickup" href="/dispose" art="bin" />
            <Offer id="upgrades" title="System Upgrades" copy="Boost performance." cta="Request Upgrade" href="/upgrade" art="desk" />
            <Offer id="sell" title="Sell Your Electronics" copy="Get a fair price." cta="Get a Quote" href="/sell" art="tag" />
            <Offer id="repair" title="Computer Repair" copy="Fix. Upgrade. Extend life." cta="Book a Repair" href="/contact" art="tools" />
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-6xl gap-4 px-5 lg:grid-cols-2">
          <article id="how" className="grid items-center gap-4 overflow-hidden rounded-[1.6rem] bg-[#E7F8EE] p-6 sm:grid-cols-[1fr_0.9fr] sm:p-7">
            <div>
              <h2 className="text-2xl font-extrabold text-[#0b1b33]">How It Works</h2>
              <p className="mt-1 text-sm text-slate-500">A Simple 4-Step Process</p>
              <ol className="mt-5 space-y-3 text-sm">
                {["Tell us about your device", "Get an estimated offer", "Accept or negotiate via WhatsApp", "We handle the rest"].map((step, index) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#22c55e] text-sm font-bold text-white">{index + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <a href="#how" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#22c55e] px-4 py-2.5 text-sm font-semibold text-white">Learn More <Arrow /></a>
            </div>
            <div className="relative h-48 sm:h-full sm:min-h-56">
              <Image src="/home2-laptop.jpg" alt="A laptop showing a green recycling symbol." fill className="object-contain" sizes="320px" />
            </div>
          </article>
          <article id="impact" className="relative grid items-center overflow-hidden rounded-[1.6rem] bg-[#06281c] p-6 text-white sm:grid-cols-[1fr_0.8fr] sm:p-7">
            <div id="about" className="relative z-10">
              <h2 className="text-2xl font-extrabold">Our Impact</h2>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/75">Together, we&apos;re making a difference. By extending the life of electronics, we reduce e-waste and expand access to technology.</p>
              <a href="#impact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#22c55e] px-4 py-2.5 text-sm font-semibold">See Our Impact <Arrow /></a>
            </div>
            <div className="relative mt-4 h-44 sm:mt-0 sm:h-56">
              <Image src="/home-globe.jpg" alt="" fill className="object-contain" sizes="280px" />
            </div>
          </article>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 py-16">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-[#0b1b33]">Why Choose Us?</h2>
          <ul className="mt-10 grid gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {[
              ["people", "Community Impact", "Support education and opportunity."],
              ["leaf", "Sustainable Future", "Reduce e-waste."],
              ["shield", "Secure Handling", "Your data, our priority."],
              ["tag", "Fair Pricing", "Get the best value."],
              ["wrench", "Expert Support", "From experienced technicians."],
            ].map(([icon, title, copy]) => (
              <li key={title} className="text-center">
                <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-[#E7F8EE] text-[#16a34a]"><LineIcon name={icon} className="size-9" /></span>
                <p className="mt-3 text-sm font-bold">{title}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">{copy}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="get-started" className="mx-auto w-full max-w-6xl px-5 pb-16">
          <div className="relative flex flex-col items-start justify-between gap-6 overflow-hidden rounded-[1.4rem] bg-[#07111c] px-6 py-8 text-white sm:flex-row sm:items-center sm:px-10">
            <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" style={{ backgroundImage: "radial-gradient(circle at 20% 40%, #14532d 0 1px, transparent 1.5px), radial-gradient(circle at 70% 60%, #166534 0 1px, transparent 1.5px)", backgroundSize: "18px 18px" }} />
            <div className="relative">
              <h2 className="max-w-3xl text-2xl font-extrabold tracking-tight sm:text-3xl">Let&apos;s Build a More Connected and Sustainable Community Together</h2>
              <p className="mt-1 text-sm text-white/70">Donate. Upgrade. Repair. Recycle. Empower.</p>
            </div>
            <Link href="/donate" className="relative inline-flex shrink-0 items-center gap-2 rounded-full bg-[#22c55e] px-5 py-3 text-sm font-semibold">
              Get Started <Arrow />
            </Link>
          </div>
        </section>
      </main>
      <TechFooter
        homeHref="/home2"
        columns={[
          { title: "Quick Links", items: [["Home", "/home2"], ["Services", "#services"], ["About Us", "#about"]] },
          { title: "Support", items: [["FAQ", "#how"], ["Contact", "#contact"], ["Impact", "#impact"], ["WhatsApp", "#contact"]] },
        ]}
      />
    </div>
  );
}

function Offer({ id, title, copy, cta, href, art }: { id: string; title: string; copy: string; cta: string; href: string; art: "heart" | "bin" | "desk" | "tag" | "tools" }) {
  return (
    <article id={id} className="flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-5 text-center shadow-[0_18px_40px_-28px_rgba(15,23,42,0.4)]">
      <span className="mx-auto grid h-36 w-full place-items-center rounded-2xl bg-[#F3FBF6] text-[#16a34a]">
        <Art kind={art} />
      </span>
      <h3 className="mt-4 text-sm font-bold">{title}</h3>
      <p className="mt-1.5 flex-1 text-xs leading-relaxed text-slate-500">{copy}</p>
      <Link href={href} className="mt-4 inline-flex items-center justify-center gap-1 text-sm font-semibold text-[#16a34a]">{cta} <Arrow /></Link>
    </article>
  );
}

function Art({ kind }: { kind: "heart" | "bin" | "desk" | "tag" | "tools" }) {
  if (kind === "heart") {
    return (
      <svg viewBox="0 0 64 48" className="h-24 w-28" aria-hidden="true">
        <rect x="6" y="6" width="52" height="32" rx="3" fill="#111827" />
        <rect x="9" y="9" width="46" height="26" rx="1.5" fill="#e8fff0" />
        <path d="M32 28s-6-3.6-6-7.4a3.4 3.4 0 0 1 6-2.1 3.4 3.4 0 0 1 6 2.1C38 24.4 32 28 32 28Z" fill="#22c55e" />
        <path d="M22 40h20" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (kind === "bin") {
    return (
      <svg viewBox="0 0 48 56" className="h-24" aria-hidden="true">
        <path d="M10 16h28l-2 32H12L10 16Z" fill="#22c55e" />
        <path d="M8 14h32" stroke="#14532d" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 14c1-4 3-6 6-6s5 2 6 6" fill="none" stroke="#14532d" strokeWidth="2" />
        <path d="M24 24v14M19 26l-2 10M29 26l2 10" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  if (kind === "desk") {
    return (
      <svg viewBox="0 0 72 48" className="h-20 w-28" aria-hidden="true">
        <rect x="2" y="6" width="40" height="26" rx="2" fill="#111827" />
        <rect x="5" y="9" width="34" height="20" fill="#dbeafe" />
        <path d="M18 34h10M22 32v4" stroke="#64748b" strokeWidth="2" />
        <rect x="48" y="10" width="18" height="28" rx="2" fill="#1f2937" />
        <rect x="51" y="14" width="4" height="8" rx="0.5" fill="#94a3b8" />
      </svg>
    );
  }
  if (kind === "tag") {
    return (
      <svg viewBox="0 0 56 56" className="size-24" aria-hidden="true">
        <path d="M8 28 26 8h20v20L26 48a4 4 0 0 1-6 0L8 34a4 4 0 0 1 0-6Z" fill="#86efac" stroke="#16a34a" strokeWidth="1.5" />
        <circle cx="38" cy="16" r="2.2" fill="#14532d" />
        <text x="16" y="32" fill="#14532d" fontSize="11" fontWeight="700">KES</text>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 56 40" className="h-20 w-24" aria-hidden="true">
      <path d="M10 28 22 16a6 6 0 0 1 8 8L18 36a3 3 0 0 1-4-4l8-8" fill="none" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
      <path d="M30 12 42 24" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" />
      <circle cx="44" cy="10" r="5" fill="#22c55e" />
    </svg>
  );
}
