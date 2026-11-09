import type { ReactNode } from "react";
import Image from "next/image";
import { TechFooter } from "@/components/techgive-ui";

const columns = [
  {
    title: "Quick Links",
    items: [
      ["Home", "/home4"],
      ["Our Services", "/home4#services"],
      ["Our Impact", "/home4#impact"],
      ["About Us", "/about"],
    ],
  },
  {
    title: "Services",
    items: [
      ["Donate Devices", "/home4#donations"],
      ["Sell Electronics", "/home4#sell"],
      ["Repairs", "/home4#repair"],
      ["Recycling", "/home4#recycling"],
    ],
  },
  {
    title: "Support",
    items: [
      ["FAQ", "/faq"],
      ["Contact", "/home4/contact"],
      ["WhatsApp", "/home4/contact"],
    ],
  },
] as const;

export function Home4Footer() {
  return <TechFooter homeHref="/home4" page columns={columns} />;
}

export function Home4Banner({
  image,
  eyebrow,
  title,
  text,
  children,
}: {
  image: string;
  eyebrow: string;
  title: ReactNode;
  text: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[#041e2c] text-white">
      <Image src={image} alt="" fill priority className="object-cover object-center" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#041e2c] via-[#041e2c]/88 via-50% to-[#041e2c]/25" />
      <div className="relative mx-auto flex min-h-[32rem] w-full max-w-[96rem] flex-col justify-end px-4 pt-32 pb-16 sm:min-h-[36rem] sm:px-6 sm:pt-36 sm:pb-20">
        <p className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.18em] text-[#86efac]">
          <span className="h-0.5 w-10 bg-[#86efac]" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl">{title}</h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">{text}</p>
        {children}
      </div>
    </section>
  );
}
