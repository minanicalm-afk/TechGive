import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Home4Banner, Home4Footer } from "@/components/home4-footer";
import { WhatsAppIcon } from "@/components/icons";
import { contact, messages, site, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "TechGive — Contact" },
  description:
    "Visit Josachi Computers at Alma Matta Building, JKUAT Gate B, or write about a donation, a disposal, an upgrade, or a sale.",
};

const facts = [
  { label: "Visit", title: "The shop", detail: contact.place, href: contact.mapsHref, external: true },
  { label: "Call", title: "Phone / WhatsApp", detail: site.whatsappDisplay, href: `tel:+${site.whatsappE164}`, external: false },
  { label: "Write", title: "Email", detail: contact.email, href: `mailto:${contact.email}`, external: false },
  { label: "Hours", title: "When we are open", detail: contact.hours, href: undefined, external: false },
] as const;

export default function ContactPage() {
  return (
    <>
      <main id="main" className="bg-[#f4fbf6]">
        <Home4Banner
          image="/final-cta-chip.jpg"
          eyebrow="CONTACT"
          title={
            <>
              The desk is on
              <span className="mt-1 block text-[#86efac]">Gachororo Road.</span>
            </>
          }
          text={`${contact.hours} Write about a disposal, a donation, an upgrade, or a gain for a good cause. Nairobi is on-site collection only.`}
        >
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsappHref(messages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1ebe5d]"
            >
              <WhatsAppIcon className="size-4" />
              Chat on WhatsApp
            </a>
            <a href="#write" className="inline-flex items-center rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">
              Write a message
            </a>
          </div>
        </Home4Banner>

        <section className="relative z-10 mx-auto -mt-10 w-full max-w-[96rem] px-4 sm:px-6">
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((fact) => {
              const body = (
                <>
                  <p className="text-[11px] font-bold tracking-[0.16em] text-[#16a34a]">{fact.label.toUpperCase()}</p>
                  <p className="mt-2 text-base font-extrabold text-[#0b1b16]">{fact.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{fact.detail}</p>
                </>
              );
              const className = "block h-full rounded-[1.4rem] bg-white p-5 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.45)]";
              if (!fact.href) {
                return (
                  <li key={fact.label}>
                    <article className={className}>{body}</article>
                  </li>
                );
              }
              return (
                <li key={fact.label}>
                  <a
                    href={fact.href}
                    target={fact.external ? "_blank" : undefined}
                    rel={fact.external ? "noopener noreferrer" : undefined}
                    className={`${className} hover:-translate-y-0.5`}
                  >
                    {body}
                  </a>
                </li>
              );
            })}
          </ul>
        </section>

        <section id="write" className="mx-auto grid w-full max-w-[96rem] gap-6 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_40px_-28px_rgba(15,23,42,0.45)]">
            <div className="relative h-[28rem]">
              <iframe
                title="Map of the Josachi shop near JKUAT Gate B, Juja"
                src={contact.mapEmbed}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex flex-col gap-3 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-extrabold text-[#0b1b16]">Josachi Computers</p>
                <p className="mt-1 max-w-md text-sm leading-relaxed text-slate-600">{contact.place}</p>
              </div>
              <a
                href={contact.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#123d2b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0c2e20]"
              >
                Open in Maps
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.45)] sm:p-8">
            <ContactForm tone="home4" />
          </div>
        </section>
      </main>
      <Home4Footer />
    </>
  );
}
