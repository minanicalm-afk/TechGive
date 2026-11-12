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
  imageAlt = "",
  eyebrow,
  title,
  text,
  focus = "center",
  imageRight = false,
  children,
}: {
  image: string;
  imageAlt?: string;
  eyebrow: string;
  title: ReactNode;
  text: string;
  focus?: keyof typeof bannerFocus;
  imageRight?: boolean;
  children?: ReactNode;
}) {
  const copy = (
    <>
      <p className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.18em] text-[#86efac]">
        <span className="h-0.5 w-10 bg-[#86efac]" aria-hidden="true" />
        {eyebrow}
      </p>
      <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl">{title}</h1>
      <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">{text}</p>
      {children}
    </>
  );

  if (imageRight) {
    return (
      <section className="relative isolate overflow-hidden bg-[#071a12] text-white">
        <div className="absolute inset-y-0 right-0 w-full overflow-hidden lg:w-1/2">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            className="object-cover object-center"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#071a12] to-transparent" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#071a12] from-0% via-[#071a12] via-40% to-transparent lg:via-[38%]" />
        <div className="relative mx-auto flex min-h-[36rem] w-full max-w-[96rem] flex-col justify-end px-4 pt-32 pb-16 sm:min-h-[42rem] sm:px-6 sm:pt-36 sm:pb-20">
          <div className="max-w-xl">{copy}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative isolate overflow-hidden bg-[#071a12] text-white">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className={`object-cover ${bannerFocus[focus]}`}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#071a12] via-[#071a12]/88 via-50% to-[#071a12]/25" />
      <div className="relative mx-auto flex min-h-[32rem] w-full max-w-[96rem] flex-col justify-end px-4 pt-32 pb-16 sm:min-h-[36rem] sm:px-6 sm:pt-36 sm:pb-20">
        {copy}
      </div>
    </section>
  );
}
