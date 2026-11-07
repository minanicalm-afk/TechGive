export const site = {
  name: "Josachi",
  meaning:
    "E-waste collected from companies and institutions for donation, recycling, and environmentally friendly disposal.",
  /** Desk WhatsApp in international form, digits only. */
  whatsappE164: "254712345678",
  whatsappDisplay: "+254 712 345 678",
} as const;

export const contact = {
  place: "Josachi Computers, Alma Matta Building, along Gachororo Road, JKUAT Gate B, Juja",
  email: "hello@josachi.co.ke",
  hours: "Open every day, except occasionally on Sundays.",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Alma+Matta+Building+Gachororo+Road+JKUAT+Gate+B+Juja",
  mapEmbed:
    "https://maps.google.com/maps?q=Gachororo+Road+JKUAT+Gate+B+Juja&z=15&output=embed",
} as const;

const whatsappReady = /^\d{8,15}$/.test(site.whatsappE164);

export function whatsappHref(message: string) {
  const text = encodeURIComponent(message);
  if (!whatsappReady) return "#offices";
  return `https://wa.me/${site.whatsappE164}?text=${text}`;
}

export const messages = {
  general:
    "Hello Josachi, I would like to talk about a computer.\n\nI am in:",
  donate:
    "Hello Josachi, I would like to donate a device.\n\nWhat it is:\nCondition (powers on, or not):\nI can bring it to: Juja / Nairobi",
  sell: "Hello Josachi, I would like to sell an item.\n\nType:\nCondition:\nTown:\nI will send photos in this chat.\nProof of ownership:",
  accept:
    "Hello Josachi, please review this item. I understand the range is confirmed after inspection.\n\nI will: bring it in / ask you to collect",
  cancel: "Hello Josachi, I would like to cancel a buyback.",
  bargain:
    "Hello Josachi, I would like to bargain on the buyback proposal.\n\nThe item is:\nWhat I had in mind:",
  disposal:
    "Hello Josachi, I need a paid collection of computers, parts, or other electronics for disposal.\n\nRoughly what is there:\nPickup from: Juja / Nairobi / other\nHome or organisation:",
  upgrade:
    "Hello Josachi, we want to hand in our current systems and move to a newer generation of the same.\n\nOrganisation:\nHow many machines:\nLaptops, desktops, or both:",
  need: "Hello Josachi, I am asking about a repaired computer for someone who needs one.\n\nWho it is for:\nWhat the computer needs to do:\nTown:",
} as const;

export const nav = [
  { href: "/donate", label: "Donate" },
  { href: "/sell", label: "Sell" },
  { href: "/dispose", label: "Dispose" },
  { href: "/upgrade", label: "Upgrade" },
  { href: "/contact", label: "Contact" },
] as const;

export const offices = [
  {
    city: "Juja",
    county: "Kiambu County",
    copy: "The shop is at Alma Matta Building, along Gachororo Road, JKUAT Gate B. Drop-off is here, and we also collect in Juja and the surrounding area.",
  },
  {
    city: "Nairobi",
    county: "Nairobi County",
    copy: "On-site collection in Nairobi and the surrounding area. We send the meeting point once the visit is set.",
  },
] as const;
