import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { contact, messages, site, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "TechGive — Give technology a second life" },
  description:
    "Donate, sell, repair, or upgrade computers in Juja and Nairobi. Offers are estimates until the Josachi desk inspects the machine.",
};

const services = [
  {
    title: "Device Donations",
    label: "Community impact",
    copy: "A person or an organisation can leave a working or repairable computer. We log it, repair it, and give the finished machine to a less privileged school.",
    href: "/donations",
    cta: "Donate a device",
    image: "/home-impact.jpg",
    alt: "A student using a laptop in a classroom",
    position: "center 30%",
  },
  {
    title: "E-Waste Collection",
    label: "Environmental responsibility",
    copy: "We collect broken, obsolete, or unwanted computers and parts. Some collections are paid. The charge depends on the quantity, the type, and where the equipment is.",
    href: "/recycling",
    cta: "Ask about a collection",
    image: "/services/recycle.jpg",
    alt: "A pile of old monitors and desktop computers",
    position: "center center",
  },
  {
    title: "Corporate IT Upgrades",
    label: "Organisations",
    copy: "A school, NGO, or company hands in the machines it has outgrown. We assess them and supply a newer generation of the same kind, then collect what was replaced.",
    href: "/upgrade",
    cta: "Plan an upgrade",
    image: "/services/upgrade.jpg",
    alt: "Office computers being wrapped for collection",
    position: "center 55%",
  },
  {
    title: "Sell Your Electronics",
    label: "Buy-back",
    copy: "Send the details and photos. The offer is about 20–30% of the price the desk would put on the machine. It is an estimate until we inspect it.",
    href: "/sell",
    cta: "Start a sale",
    image: "/services/shop.jpg",
    alt: "Laptops on the counter of a computer shop",
    position: "32% 62%",
  },
  {
    title: "Computer Repair",
    label: "The bench",
    copy: "Hardware and software faults are looked at on the Juja bench. We say whether the machine is worth repairing before the work starts. Data recovery is not promised.",
    href: "/repair",
    cta: "Book a repair",
    image: "/services/opened.jpg",
    alt: "A laptop opened on a wooden floor, showing the board and memory",
    position: "58% 32%",
  },
  {
    title: "Computer Sales",
    label: "The shop",
    copy: "The Juja shop sells laptops and desktops. Ask what is on the bench today. A repaired machine that came in as a donation is not put back on the shop floor.",
    href: whatsappHref("Hello Josachi, I would like to buy a computer from the Juja shop.\n\nWhat I need:"),
    cta: "Ask what is in stock",
    external: true,
  },
] as const;

const sellSteps = [
  {
    title: "Submit your device",
    copy: "Tell us the brand, model, and condition, and send photographs on WhatsApp. A purchase receipt helps. We do not ask you to upload a national ID.",
  },
  {
    title: "Receive an estimated offer",
    copy: "The range is about 20–30% of the price the desk would put on that machine. It is the amount we pay, not a discount off a shop price. Photos only produce an estimate.",
  },
  {
    title: "Accept or negotiate",
    copy: "Accept the estimate, decline it, or negotiate on WhatsApp. Nothing is final until the machine has been seen.",
  },
  {
    title: "Verification and payment",
    copy: "Bring it to the Juja desk, or ask for collection. We inspect it, then pay. If you have no receipt, bring identification to the desk so we can confirm the machine is yours.",
  },
] as const;

const corporate = [
  "Assess the computers an organisation already has.",
  "Identify machines that are outdated or no longer doing the job.",
  "Recommend what the replacement should be.",
  "Supply a newer generation of the same kind.",
  "Deliver the machines set up and ready to use.",
  "Collect the equipment that was replaced, and pass on what cannot be repaired.",
] as const;

const impact = [
  "We receive donated devices.",
  "We log each one against the name it arrived with.",
  "We repair the machines that are worth repairing.",
  "A finished computer goes to a less privileged school.",
  "Equipment that cannot be restored is kept for parts or sent for recycling.",
] as const;

const how = [
  {
    title: "Donate",
    summary: "A working or repairable computer is repaired, then given to a school.",
    href: "/donations#note",
    cta: "Donate a device",
    steps: [
      "Tell us the machine, and whether it powers on. A missing charger is fine.",
      "Drop it at the Juja shop, or ask for collection in Juja or Nairobi.",
      "We clean and repair it, then place it with a school.",
    ],
  },
  {
    title: "Dispose",
    summary: "Dead equipment is a paid collection. We do not buy machines that will not power on.",
    href: "/dispose",
    cta: "Schedule a pickup",
    steps: [
      "Tell us what is there, roughly how many pieces, and the town.",
      "We confirm the fee before we travel. A van is for 20 pieces or more.",
      "Repairable parts stay in service. The rest is recycled.",
    ],
  },
  {
    title: "Upgrade",
    summary: "An organisation hands in its fleet and receives a newer generation of the same kind.",
    href: "/upgrade",
    cta: "Request an upgrade",
    steps: [
      "Tell us how many machines, and whether they are laptops, desktops, or both.",
      "We plan the swap. Laptops stay laptops. Desktops stay desktops.",
      "We collect the old machines and deliver the new ones ready to use.",
    ],
  },
  {
    title: "Sell to us",
    summary: "We buy working electronics. The figure is confirmed after inspection.",
    href: "/sell",
    cta: "Get an estimate",
    steps: [
      "Send the details and photos. A receipt helps. An ID stays at the desk, not in an upload.",
      "The estimate is about 20–30% of the assessed desk price, and it can change.",
      "Confirm on WhatsApp, then bring it in or ask us to collect. Payment follows the inspection.",
    ],
  },
] as const;

const reasons = [
  ["Responsible handling", "Dead equipment is collected for a fee. We do not describe the service as certified."],
  ["A repair bench", "Hardware and software faults are judged in Juja before any work starts."],
  ["Community impact", "A donated computer is repaired and given to a school, not sold from the shop."],
  ["Corporate IT", "Organisations can hand in a fleet and receive a newer generation of the same kind."],
] as const;

export default function Home1Page() {
  return (
    <>
      <main id="main" className="bg-white text-base text-slate-700">
        <section className="relative min-h-[100svh] overflow-hidden bg-[#050b09] text-white">
          <Image
            src="/hero-pile.jpg"
            alt="Old computers, cables, and circuit boards gathered for sorting"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[72%_60%] opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050b09] via-[#050b09]/85 to-[#050b09]/35" />
          <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[96rem] flex-col justify-center px-4 pt-28 pb-16 sm:px-6">
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/85">
                <span className="size-1.5 rounded-full bg-[#22c55e]" aria-hidden="true" />
                Juja desk, Nairobi collection
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/85">
                Offer confirmed after inspection
              </span>
            </div>
            <h1 className="mt-6 max-w-4xl text-5xl font-extrabold tracking-tight text-balance text-white sm:text-7xl sm:leading-[0.95]">
              Give technology a <span className="text-[#22c55e]">second life.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Donate, sell, repair, or upgrade. The Josachi desk collects computers from people, schools, NGOs, and companies, then puts the repairable ones back to work.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/donations" className="inline-flex items-center justify-center rounded-full bg-[#22c55e] px-6 py-3 text-base font-semibold text-[#05210f] hover:bg-[#4ade80]">
                Donate a device
              </Link>
              <Link href="#services" className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-base font-semibold text-white hover:bg-white/10">
                Explore services
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-[#d7efe1] bg-[#f4fbf6]" aria-label="Why choose us">
          <div className="mx-auto grid w-full max-w-[96rem] gap-6 px-4 py-10 sm:px-6 md:grid-cols-2 xl:grid-cols-4">
            {reasons.map(([title, copy]) => (
              <div key={title}>
                <h2 className="text-lg font-extrabold text-[#0b1b16]">{title}</h2>
                <p className="mt-2 text-base leading-relaxed">{copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="scroll-mt-24 py-16 lg:py-24">
          <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6">
            <p className="text-sm font-semibold tracking-[0.16em] text-[#15803d]">SERVICES</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-balance text-[#0b1b16] sm:text-5xl">
              Everything your technology needs
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed">
              Six paths, each with its own rule. A donation is not stock for the shop. A sale is not a guaranteed price. A dead machine is a paid collection.
            </p>
            <ul className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <li key={service.title} className="flex flex-col overflow-hidden rounded-[1.5rem] border border-[#e4f3ea] bg-white">
                  {"image" in service ? (
                    <div className="relative h-56">
                      <Image src={service.image} alt={service.alt} fill className="object-cover" style={{ objectPosition: service.position }} sizes="(min-width: 1280px) 30vw, (min-width: 768px) 50vw, 100vw" />
                    </div>
                  ) : (
                    <div className="flex h-56 items-end bg-[#123d2b] p-6">
                      <p className="text-lg font-semibold text-[#86efac]">Josachi Computers, Juja</p>
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-sm font-semibold text-[#15803d]">{service.label}</p>
                    <h3 className="mt-1 text-2xl font-extrabold tracking-tight text-[#0b1b16]">{service.title}</h3>
                    <p className="mt-3 text-base leading-relaxed">{service.copy}</p>
                    {"external" in service ? (
                      <a href={service.href} className="mt-auto pt-6 text-base font-semibold text-[#15803d] hover:text-[#166534]">
                        {service.cta}
                      </a>
                    ) : (
                      <Link href={service.href} className="mt-auto pt-6 text-base font-semibold text-[#15803d] hover:text-[#166534]">
                        {service.cta}
                      </Link>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="sell-device" className="scroll-mt-24 bg-[#f4fbf6] py-16 lg:py-24">
          <div className="mx-auto grid w-full max-w-[96rem] items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-sm font-semibold tracking-[0.16em] text-[#15803d]">SELL YOUR DEVICE</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-balance text-[#0b1b16] sm:text-5xl">
                Have an old computer? Turn it into cash.
              </h2>
              <p className="mt-4 text-lg leading-relaxed">
                The online figure is provisional. The final offer depends on a physical inspection, and you can negotiate before you accept.
              </p>
              <ol className="mt-8 space-y-6">
                {sellSteps.map((step, index) => (
                  <li key={step.title} className="grid grid-cols-[auto_1fr] gap-4">
                    <span className="grid size-9 place-items-center rounded-full bg-[#22c55e] text-base font-extrabold text-white">{index + 1}</span>
                    <div>
                      <h3 className="text-xl font-extrabold text-[#0b1b16]">{step.title}</h3>
                      <p className="mt-1 text-base leading-relaxed">{step.copy}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <Link href="/sell" className="mt-8 inline-flex rounded-full bg-[#22c55e] px-6 py-3.5 text-base font-semibold text-white hover:bg-[#16a34a]">
                Get an estimate
              </Link>
            </div>
            <div className="relative min-h-[28rem] overflow-hidden rounded-[1.8rem]">
              <Image src="/services/shop.jpg" alt="Laptops displayed on the counter of a computer shop" fill className="object-cover" style={{ objectPosition: "30% 60%" }} sizes="(min-width: 1024px) 40vw, 100vw" />
            </div>
          </div>
        </section>

        <section id="corporate" className="scroll-mt-24 py-16 lg:py-24">
          <div className="mx-auto grid w-full max-w-[96rem] items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
            <div className="relative min-h-[24rem] overflow-hidden rounded-[1.8rem] lg:min-h-[36rem]">
              <Image src="/services/upgrade.jpg" alt="A person wrapping old office computers for collection" fill className="object-cover" style={{ objectPosition: "center 50%" }} sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.16em] text-[#15803d]">CORPORATE SOLUTIONS</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-balance text-[#0b1b16] sm:text-5xl">
                Is your organisation ready for its next generation of technology?
              </h2>
              <p className="mt-4 text-lg leading-relaxed">
                This is for schools, NGOs, SMEs, companies, and institutions. We travel for 10 working machines or more.
              </p>
              <ul className="mt-6 space-y-3">
                {corporate.map((item) => (
                  <li key={item} className="text-base leading-relaxed text-[#0b1b16]">
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/upgrade" className="mt-8 inline-flex rounded-full bg-[#22c55e] px-6 py-3.5 text-base font-semibold text-white hover:bg-[#16a34a]">
                Enquire about an upgrade
              </Link>
            </div>
          </div>
        </section>

        <section id="impact" className="scroll-mt-24 bg-[#071a12] py-16 text-white lg:py-24">
          <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6">
            <p className="text-sm font-semibold tracking-[0.16em] text-[#86efac]">COMMUNITY IMPACT</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-balance sm:text-5xl">
              Your unused computer could change someone&apos;s future.
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/80">
              The donation path is what separates this desk from an ordinary computer shop. A machine left with us is repaired and given to a school. It does not go back on the shop floor.
            </p>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <div className="relative h-72 overflow-hidden rounded-[1.4rem]">
                <Image src="/home-impact.jpg" alt="A student using a laptop in class" fill className="object-cover" style={{ objectPosition: "center 30%" }} sizes="(min-width: 768px) 30vw, 100vw" />
              </div>
              <div className="relative h-72 overflow-hidden rounded-[1.4rem]">
                <Image src="/services/opened.jpg" alt="A laptop opened for repair, showing the board" fill className="object-cover" style={{ objectPosition: "center 40%" }} sizes="(min-width: 768px) 30vw, 100vw" />
              </div>
              <div className="relative h-72 overflow-hidden rounded-[1.4rem]">
                <Image src="/services/recycle.jpg" alt="Old monitors and desktop computers waiting to be sorted" fill className="object-cover" sizes="(min-width: 768px) 30vw, 100vw" />
              </div>
            </div>
            <ul className="mt-8 max-w-3xl space-y-2 text-lg leading-relaxed text-white/85">
              {impact.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/70">
              Before a donated or purchased computer is passed on, we clear the personal files we can reach. We do not advertise certified data destruction. Counts of devices and students will be published when the desk has figures it can stand behind.
            </p>
          </div>
        </section>

        <section id="how" className="scroll-mt-24 py-16 lg:py-24">
          <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6">
            <p className="text-sm font-semibold tracking-[0.16em] text-[#15803d]">HOW IT WORKS</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-balance text-[#0b1b16] sm:text-5xl">
              Four ways to work with us
            </h2>
            <ol className="mt-10 grid gap-5 md:grid-cols-2">
              {how.map((path) => (
                <li key={path.title} className="flex flex-col rounded-[1.5rem] bg-[#f4fbf6] p-6 sm:p-8">
                  <h3 className="text-2xl font-extrabold text-[#0b1b16]">{path.title}</h3>
                  <p className="mt-2 text-base leading-relaxed">{path.summary}</p>
                  <ol className="mt-5 space-y-3">
                    {path.steps.map((step, index) => (
                      <li key={step} className="grid grid-cols-[auto_1fr] gap-3 text-base leading-relaxed text-[#0b1b16]">
                        <span className="font-extrabold text-[#15803d]">{index + 1}</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                  <Link href={path.href} className="mt-auto pt-6 text-base font-semibold text-[#15803d] hover:text-[#166534]">
                    {path.cta}
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 bg-[#f4fbf6] py-16 lg:py-24">
          <div className="mx-auto grid w-full max-w-[96rem] gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold tracking-[0.16em] text-[#15803d]">ABOUT US</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-balance text-[#0b1b16] sm:text-5xl">
                A business built around technology and purpose.
              </h2>
              <p className="mt-4 text-lg leading-relaxed">
                TechGive is the public name of the Josachi desk in Juja. We collect electronics from people, companies, and institutions. Repairable computers go back to a school or to a buyer. What cannot be repaired is taken out of use.
              </p>
              <p className="mt-4 text-lg leading-relaxed">
                The shop is open for drop-off, repair, and sales. Nairobi is collection by arrangement, not a second shop. Working donations are collected without a charge. Dead equipment is not.
              </p>
              <Link href="/about" className="mt-8 inline-flex text-base font-semibold text-[#15803d] hover:text-[#166534]">
                Read the longer story
              </Link>
            </div>
            <div className="rounded-[1.5rem] bg-white p-6 sm:p-8">
              <h3 className="text-xl font-extrabold text-[#0b1b16]">What we will not claim</h3>
              <ul className="mt-4 space-y-3 text-base leading-relaxed">
                <li>A partner logo, until that organisation has agreed to be named.</li>
                <li>A device count, until the desk can stand behind the number.</li>
                <li>A certified recycling mark, or certified data destruction.</li>
                <li>A final buy-back price from photographs alone.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="stories" className="scroll-mt-24 py-16 lg:py-20">
          <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
            <p className="text-sm font-semibold tracking-[0.16em] text-[#15803d]">TESTIMONIALS</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0b1b16] sm:text-4xl">What our customers say</h2>
            <p className="mt-4 text-lg leading-relaxed">
              A quote will appear here only after the person has agreed to it. If the desk handled a donation, a sale, a repair, or a collection for you, write to us and we can ask to use your words.
            </p>
            <Link href="/contact" className="mt-6 inline-flex text-base font-semibold text-[#15803d] hover:text-[#166534]">
              Tell us about your visit
            </Link>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 bg-[#f4fbf6] py-16 lg:py-24">
          <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6">
            <p className="text-sm font-semibold tracking-[0.16em] text-[#15803d]">CONTACT</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-balance text-[#0b1b16] sm:text-5xl">
              Let&apos;s give technology a new purpose.
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed">
              Bring a computer to Juja for inspection, a repair, or a sale. For Nairobi, we come to you once the visit is set.
            </p>
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              <article className="rounded-[1.5rem] bg-white p-6 sm:p-8">
                <h3 className="text-2xl font-extrabold text-[#0b1b16]">Juja</h3>
                <p className="mt-3 text-base leading-relaxed">{contact.place}.</p>
                <p className="mt-3 text-base leading-relaxed">{contact.hours}</p>
                <ul className="mt-5 space-y-2 text-base">
                  <li>
                    <a className="font-semibold text-[#15803d] hover:text-[#166534]" href={`tel:+${site.whatsappE164}`}>
                      {site.whatsappDisplay}
                    </a>
                  </li>
                  <li>
                    <a className="font-semibold text-[#15803d] hover:text-[#166534]" href={`mailto:${contact.email}`}>
                      {contact.email}
                    </a>
                  </li>
                  <li>
                    <a className="font-semibold text-[#15803d] hover:text-[#166534]" href={contact.mapsHref} target="_blank" rel="noopener noreferrer">
                      Open the Juja desk in Google Maps
                    </a>
                  </li>
                  <li>
                    <a className="font-semibold text-[#15803d] hover:text-[#166534]" href={whatsappHref(messages.general)} target="_blank" rel="noopener noreferrer">
                      WhatsApp the desk
                    </a>
                  </li>
                </ul>
              </article>
              <article className="rounded-[1.5rem] bg-[#123d2b] p-6 text-white sm:p-8">
                <h3 className="text-2xl font-extrabold">Nairobi</h3>
                <p className="mt-3 text-base leading-relaxed text-white/85">
                  There is no Nairobi shop. Collection in Nairobi and the surrounding area is arranged, and we send the meeting point once the visit is set. Drop-off stays in Juja.
                </p>
                <a href={whatsappHref(messages.general)} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-full bg-[#22c55e] px-6 py-3.5 text-base font-semibold text-white hover:bg-[#16a34a]">
                  Arrange a Nairobi collection
                </a>
              </article>
            </div>
            <div className="mt-5 overflow-hidden rounded-[1.5rem] bg-white">
              <iframe
                title="Map of the Josachi shop near JKUAT Gate B, Juja"
                src={contact.mapEmbed}
                className="h-80 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <section id="privacy" className="scroll-mt-24 py-16 lg:py-20">
          <div className="mx-auto grid w-full max-w-[96rem] gap-10 px-4 sm:px-6 lg:grid-cols-2">
            <div id="terms" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0b1b16]">How a price is set</h2>
              <p className="mt-3 text-base leading-relaxed">
                A buy-back offer depends on the kind of machine, whether it powers on, and what the desk would sell a comparable one for. The first figure is an estimate. The final figure is set at inspection. You can negotiate on WhatsApp, and payment follows that visit. A donation is not a sale. A machine that will not power on is a paid collection, not a purchase.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-[#0b1b16]">Privacy</h2>
              <p className="mt-3 text-base leading-relaxed">
                A note for the desk asks for your name, a WhatsApp number, an email if you give one, and what the machine is. Photographs stay in the WhatsApp chat you send them from. We do not ask you to upload a national ID. If there is no receipt, bring identification to Juja so we can confirm the computer is yours. We use these details to arrange the visit and the offer. Ask us and we will delete the note.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#071611] text-white">
        <div className="mx-auto grid w-full max-w-[96rem] gap-8 px-4 py-12 sm:px-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-bold">TechGive</p>
            <p className="mt-2 text-base leading-relaxed text-white/70">The Josachi desk in Juja. Donate, repair, reuse.</p>
          </div>
          <div>
            <p className="font-semibold">Services</p>
            <ul className="mt-3 space-y-2 text-base text-white/75">
              <li><Link href="/donations" className="hover:text-white">Donations</Link></li>
              <li><Link href="/recycling" className="hover:text-white">E-waste collection</Link></li>
              <li><Link href="/upgrade" className="hover:text-white">Corporate upgrades</Link></li>
              <li><Link href="/sell" className="hover:text-white">Sell to us</Link></li>
              <li><Link href="/repair" className="hover:text-white">Repair</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Company</p>
            <ul className="mt-3 space-y-2 text-base text-white/75">
              <li><Link href="/home1#about" className="hover:text-white">About</Link></li>
              <li><Link href="/home1#contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link href="/home1#privacy" className="hover:text-white">Privacy</Link></li>
              <li><Link href="/home1#terms" className="hover:text-white">How a price is set</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Support</p>
            <ul className="mt-3 space-y-2 text-base text-white/75">
              <li><a href={whatsappHref(messages.general)} className="hover:text-white">WhatsApp {site.whatsappDisplay}</a></li>
              <li><a href={`mailto:${contact.email}`} className="hover:text-white">{contact.email}</a></li>
            </ul>
          </div>
        </div>
        <p className="mx-auto w-full max-w-[96rem] px-4 pb-8 text-sm leading-relaxed text-white/50 sm:px-6">
          © 2026 TechGive. Computer shop photograph by Adamrabah, CC BY-SA 4.0. Office machines by Jemimus, CC BY 2.0. The monitor pile is in the public domain.
        </p>
      </footer>
      <WhatsAppButton />
    </>
  );
}
