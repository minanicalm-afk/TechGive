import { Logo } from "@/components/logo";
import { contact, messages, nav, offices, site, whatsappHref } from "@/lib/site";
import { shell } from "@/lib/ui";

export function Footer() {
  return (
    <footer className="bg-[#0c1914] pb-28 text-cream">
      <div className={`${shell} grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-4`}>
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/65">
            {site.meaning}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper-soft">Paths</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/75">
            {[...nav, { href: "/ask", label: "Ask" }, { href: "/offices", label: "Offices" }].map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-cream">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper-soft">Desks</p>
          <ul className="mt-4 space-y-3 text-sm text-cream/75">
            {offices.map((office) => (
              <li key={office.city}>
                <span className="block text-cream">{office.city}</span>
                <span>{office.county}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper-soft">Visit us</p>
          <ul className="mt-4 space-y-3 text-sm text-cream/75">
            <li>{contact.place}</li>
            <li>
              <a href={`tel:+${site.whatsappE164}`} className="hover:text-cream">
                {site.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="hover:text-cream">
                {contact.email}
              </a>
            </li>
            <li>{contact.hours}</li>
            <li>
              <a
                href={whatsappHref(messages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream underline decoration-white/30 underline-offset-4"
              >
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${shell} border-t border-white/10 py-5 text-xs text-cream/45`}>
        TechGive · Computers, e-waste collection, donation, and responsible disposal.
      </div>
    </footer>
  );
}
