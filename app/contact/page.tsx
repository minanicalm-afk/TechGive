import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { WhatsAppIcon } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { contact, messages, site, whatsappHref } from "@/lib/site";
import { shell } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Visit Josachi Computers at Alma Matta Building, JKUAT Gate B, or write about a donation, a disposal, an upgrade, or a sale.",
};

const facts = [
  {
    title: "Visit our shop",
    detail: `${site.name}, ${contact.place}`,
    href: contact.mapsHref,
    external: true,
    icon: "pin",
  },
  {
    title: "Call / WhatsApp",
    detail: site.whatsappDisplay,
    href: `tel:+${site.whatsappE164}`,
    external: false,
    icon: "phone",
  },
  {
    title: "Email us",
    detail: contact.email,
    href: `mailto:${contact.email}`,
    external: false,
    icon: "mail",
  },
  {
    title: "Opening hours",
    detail: contact.hours,
    href: undefined,
    external: false,
    icon: "clock",
  },
] as const;

export default function ContactPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Contact"
        title="Contact us."
        text="The shop is open every day, except occasionally on Sundays. Write about a disposal, a donation, an upgrade, or a gain for a good cause."
      />
      <div className={`${shell} grid gap-6 py-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:py-20`}>
        <div className="grid gap-4">
          {facts.map((fact) => {
            const body = (
              <>
                <FactIcon name={fact.icon} />
                <span>
                  <span className="block text-sm font-semibold">{fact.title}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-ink-soft">{fact.detail}</span>
                </span>
              </>
            );
            const className =
              "grid grid-cols-[2.75rem_1fr] items-center gap-4 rounded-2xl border border-ink/10 bg-cream p-4 sm:p-5";
            if (!fact.href) {
              return (
                <article key={fact.title} className={className}>
                  {body}
                </article>
              );
            }
            return (
              <a
                key={fact.title}
                href={fact.href}
                target={fact.external ? "_blank" : undefined}
                rel={fact.external ? "noopener noreferrer" : undefined}
                className={`${className} hover:border-copper/40`}
              >
                {body}
              </a>
            );
          })}

          <a
            href={whatsappHref(messages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-5 py-4 text-sm font-semibold text-white hover:bg-[#1ebe5d]"
          >
            <WhatsAppIcon className="size-5" />
            Chat instantly on WhatsApp
          </a>

          <div className="overflow-hidden rounded-2xl border border-ink/10 bg-cream">
            <div className="relative h-64">
              <iframe
                title="Map of the Josachi shop near JKUAT Gate B, Juja"
                src={contact.mapEmbed}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={contact.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-lg bg-cream px-3 py-1.5 text-xs font-semibold text-ink shadow-sm"
              >
                Open in Maps
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-ink/10 bg-cream p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}

function FactIcon({ name }: { name: "pin" | "phone" | "mail" | "clock" }) {
  const path = {
    pin: "M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11zm0-8.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z",
    phone:
      "M7.2 3.8h2.1l1.2 3-1.5 1a12.5 12.5 0 0 0 5.2 5.2l1-1.5 3 1.2v2.1a1.6 1.6 0 0 1-1.7 1.6A15.2 15.2 0 0 1 5.6 5.5a1.6 1.6 0 0 1 1.6-1.7z",
    mail: "M4 7.5A1.5 1.5 0 0 1 5.5 6h13A1.5 1.5 0 0 1 20 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 16.5v-9zm1.6.6 6.4 4.2 6.4-4.2",
    clock: "M12 7v5l3 2M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z",
  }[name];

  return (
    <span className="grid size-11 place-items-center rounded-2xl bg-leaf/10 text-leaf">
      <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true" fill="none">
        <path d={path} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}
