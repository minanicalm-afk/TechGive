import Image from "next/image";
import Link from "next/link";
import { Arrow, LineIcon, TechFooter, TechHeader } from "@/components/techgive-ui";

const services = [
  { href: "#donations", label: "Device Donations" },
  { href: "#recycling", label: "Collection & Recycling" },
  { href: "#upgrades", label: "System Upgrades" },
  { href: "#sell", label: "Sell Your Electronics" },
  { href: "#repair", label: "Computer Repair" },
] as const;

const links = [
  { href: "#impact", label: "Our Impact" },
  { href: "#about", label: "About Us" },
  { href: "#how", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;

const cards = [
  { id: "donations", title: "Device Donations", copy: "Donate working laptops, desktops and more.", cta: "Donate Now", href: "/donate", image: "/home1-donate.jpg" },
  { id: "recycling", title: "Collection & Recycling", copy: "Dispose of old or broken electronics at a fair cost.", cta: "Schedule Pickup", href: "/dispose", image: "/home1-recycle.jpg" },
  { id: "upgrades", title: "System Upgrades", copy: "Upgrade your company's systems.", cta: "Request an Upgrade", href: "/upgrade", image: "/home1-upgrade.jpg" },
  { id: "sell", title: "Sell Your Electronics", copy: "Get a fair price for your computers & electronics.", cta: "Get a Quote", href: "/sell", image: "/home1-sell.jpg" },
  { id: "repair", title: "Computer Repair", copy: "Expert repair services for all devices.", cta: "Book a Repair", href: "/contact", image: "/home1-repair.jpg" },
] as const;

export function Home1Landing() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#0f172a]">
      <TechHeader homeHref="/home1" links={links} services={services} cta={{ href: "#get-started", label: "Get Involved" }} />
      <main id="main">
        <section className="relative min-h-[38rem] overflow-hidden bg-[#06331c] text-white">
          <Image src="/home1-hero.jpg" alt="" fill priority className="object-cover object-[78%_42%]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#042616] from-25% via-[#042616]/80 via-48% to-transparent" />
          <div className="relative mx-auto flex min-h-[38rem] w-full max-w-6xl items-center px-5 py-16">
            <div className="max-w-xl">
              <h1 className="text-5xl leading-[1.02] font-extrabold tracking-tight sm:text-6xl">
                Give Your Old<br />Electronics a<br /><span className="text-[#7CFF4D]">New Life</span>
              </h1>
              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/80">
                Donate, sell, upgrade, or responsibly recycle your computers and electronics. Together, we repair, redistribute, and transform technology into opportunities for a more connected community.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/donate" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#22c55e] px-5 py-3 text-sm font-semibold hover:bg-[#16a34a]">
                  Donate a Device <Arrow />
                </Link>
                <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 px-5 py-3 text-sm font-semibold hover:bg-white/10">
                  Explore Our Services
                  <svg viewBox="0 0 16 16" className="size-3.5" aria-hidden="true" fill="none"><path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-14 sm:grid-cols-3 lg:grid-cols-5">
          {[
            ["laptop", "Donate Devices", "Give unused laptops and computers."],
            ["wrench", "Repair & Reuse", "We fix and upgrade devices."],
            ["recycle", "Recycle Responsibly", "Dispose e-waste safely."],
            ["people", "Empower Communities", "Bridge the digital divide."],
            ["building", "Support Organisations", "Upgrade your systems cost-effectively."],
          ].map(([icon, title, copy]) => (
            <div key={title} className="text-center">
              <span className="mx-auto grid size-16 place-items-center text-[#16a34a]">
                <LineIcon name={icon} className="size-12" />
              </span>
              <h2 className="mt-2 text-sm font-bold">{title}</h2>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">{copy}</p>
            </div>
          ))}
        </section>

        <section id="services" className="mx-auto w-full max-w-6xl px-5 pb-16">
          <div className="text-center">
            <p className="text-[11px] font-bold tracking-[0.2em] text-[#16a34a]">OUR SERVICES</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0b1b33] sm:text-4xl">Comprehensive Electronics Solutions</h2>
            <p className="mt-2 text-sm text-slate-500">From donations to upgrades, we&apos;ve got you covered.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {cards.map((card) => (
              <article key={card.id} id={card.id} className="flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-3 text-center shadow-[0_18px_40px_-28px_rgba(15,23,42,0.45)]">
                <div className="relative h-44 overflow-hidden rounded-2xl bg-[#f8fafc]">
                  <Image src={card.image} alt="" fill className="object-contain p-1" sizes="240px" />
                </div>
                <h3 className="mt-4 text-sm font-bold">{card.title}</h3>
                <p className="mt-1.5 flex-1 px-1 text-xs leading-relaxed text-slate-500">{card.copy}</p>
                <Link href={card.href} className="mt-3 mb-2 inline-flex items-center justify-center gap-1 text-sm font-semibold text-[#16a34a]">
                  {card.cta} <Arrow />
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section id="impact" className="mx-auto w-full max-w-6xl px-5 pb-16">
          <div className="grid items-center gap-8 overflow-hidden rounded-[1.7rem] bg-[#06281c] px-6 py-8 text-white sm:px-10 sm:py-10 lg:grid-cols-[1.05fr_0.7fr_1.15fr]">
            <div id="about">
              <p className="text-xs font-semibold text-emerald-200/80">Our Impact</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight">Together, We Make a Difference</h2>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
                Through your support, we extend the digital life of electronics, reduce e-waste, and bring digital access to more people.
              </p>
              <a href="#impact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#22c55e] px-4 py-2.5 text-sm font-semibold">
                See Our Impact <Arrow />
              </a>
            </div>
            <div className="relative mx-auto size-40 sm:size-48">
              <Image src="/home-globe.jpg" alt="" fill className="object-contain" sizes="200px" />
            </div>
            <div className="grid grid-cols-3 gap-3 text-center">
              {[
                ["recycle", "12+ Tons", "of E-waste Recycled"],
                ["people", "2,500+", "People Empowered"],
                ["leaf", "30%+", "Carbon Footprint Reduction"],
              ].map(([icon, value, label]) => (
                <div key={value}>
                  <span className="mx-auto grid size-14 place-items-center rounded-full bg-white/10 text-[#7CFF4D]">
                    <LineIcon name={icon} className="size-8" />
                  </span>
                  <p className="mt-3 text-xl font-extrabold text-[#7CFF4D]">{value}</p>
                  <p className="mt-1 text-[11px] leading-snug text-white/70">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how" className="mx-auto w-full max-w-6xl px-5 pb-16">
          <div className="grid items-center gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-[11px] font-bold tracking-[0.2em] text-[#16a34a]">HOW IT WORKS</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0b1b33]">Simple Steps to Give & Get</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">A transparent and easy process for donors, sellers and organisations.</p>
              <a href="#how" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#22c55e] px-4 py-2.5 text-sm font-semibold text-white">Learn More <Arrow /></a>
            </div>
            <ol className="relative grid gap-8 sm:grid-cols-4">
              <span className="absolute top-4 right-[10%] left-[10%] hidden h-px bg-emerald-100 sm:block" aria-hidden="true" />
              {[
                ["1", "laptop", "Donate or Sell", "Tell us what device you have."],
                ["2", "document", "Get a Quote", "Our system evaluates your device."],
                ["3", "chat", "Accept or Negotiate", "Confirm via WhatsApp."],
                ["4", "hands", "We Handle the Rest", "Repair, upgrade, or redistribute."],
              ].map(([n, icon, title, copy]) => (
                <li key={n} className="relative text-center">
                  <span className="relative z-10 mx-auto grid size-11 place-items-center rounded-full bg-[#22c55e] text-sm font-bold text-white">{n}</span>
                  <span className="mx-auto mt-4 grid size-14 place-items-center text-[#16a34a]"><LineIcon name={icon} className="size-10" /></span>
                  <h3 className="mt-2 text-sm font-bold">{title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">{copy}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="get-started" className="mx-auto w-full max-w-6xl px-5 pb-16">
          <div className="flex flex-col items-start justify-between gap-6 rounded-[1.4rem] bg-gradient-to-r from-[#16a34a] via-[#22c55e] to-[#4ade80] px-6 py-8 text-white sm:flex-row sm:items-center sm:px-10">
            <div>
              <h2 className="max-w-3xl text-2xl font-extrabold tracking-tight sm:text-3xl">Let&apos;s Build a More Connected and Sustainable Community Together</h2>
              <p className="mt-1 text-sm text-white/90">Donate. Upgrade. Repair. Recycle. Empower.</p>
            </div>
            <Link href="/donate" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#15803d]">
              Get Started <Arrow />
            </Link>
          </div>
        </section>
      </main>
      <TechFooter
        homeHref="/home1"
        wide
        columns={[
          { title: "Quick Links", items: [["Home", "/home1"], ["Our Services", "#services"], ["Our Impact", "#impact"], ["About Us", "#about"]] },
          { title: "Services", items: [["Donate Devices", "#donations"], ["Sell Electronics", "#sell"], ["Repairs", "#repair"], ["Recycling", "#recycling"]] },
          { title: "Support", items: [["FAQ", "#how"], ["Contact", "#contact"], ["WhatsApp", "#contact"]] },
        ]}
      />
    </div>
  );
}
