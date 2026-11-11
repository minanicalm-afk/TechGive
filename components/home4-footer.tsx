import type { ReactNode } from "react";
import Image from "next/image";
import { TechFooter } from "@/components/techgive-ui";

const columns = [
  {
    title: "Quick Links",
    items: [
      ["Home", "/"],
      ["Our Services", "/#services"],
      ["Our Impact", "/#impact"],
      ["About Us", "/about"],
    ],
  },
  {
    title: "Services",
    items: [
      ["Donate Devices", "/donations"],
      ["Sell Electronics", "/sell"],
      ["Repairs", "/repair"],
      ["Recycling", "/recycling"],
    ],
  },
  {
    title: "Support",
    items: [
      ["FAQ", "/faq"],
      ["Contact", "/contact"],
      ["WhatsApp", "/contact"],
    ],
  },
] as const;

export function Home4Footer() {
  return <TechFooter homeHref="/" page columns={columns} />;
}

const bannerFocus = {
  center: "object-center",
  low: "object-[center_72%]",
  right: "object-right",
} as const;

export function Home4Banner({
  image,
  eyebrow,
  title,
  text,
  focus = "center",
  children,
}: {
  image: string;
  eyebrow: string;
  title: ReactNode;
  text: string;
  focus?: keyof typeof bannerFocus;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[#071a12] text-white">
      <Image
        src={image}
        alt=""
        fill
        priority
        className={`object-cover ${bannerFocus[focus]}`}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#071a12] via-[#071a12]/88 via-50% to-[#071a12]/25" />
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
