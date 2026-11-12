import Image from "next/image";
import Link from "next/link";
import { contact } from "@/lib/site";

const services = [
  { title: "Donate", href: "/donations" },
  { title: "Repair", href: "/repair" },
  { title: "Recycle", href: "/recycling" },
  { title: "Sell", href: "/sell" },
  { title: "Upgrade", href: "/upgrades" },
] as const;

export function HomeAbout() {
  return (
    <section id="about-us" className="scroll-mt-24 bg-white py-16 lg:py-24">
      <div className="mx-auto grid w-full max-w-[96rem] items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="relative min-h-[28rem] overflow-hidden rounded-[1.75rem] sm:min-h-[34rem]">
          <Image
            src="/home-impact.jpg"
            alt="A student using a laptop at a classroom desk"
            fill
            className="object-cover"
            style={{ objectPosition: "center 30%" }}
            sizes="(min-width: 1024px) 46vw, 100vw"
          />
        </div>

        <div>
          <p className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-[#16a34a]">
            <span className="h-px w-10 bg-[#16a34a] sm:w-14" aria-hidden="true" />
            ABOUT US
            <span className="h-px w-10 bg-[#16a34a] sm:w-14" aria-hidden="true" />
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0b1b16] sm:text-[2.7rem] lg:text-5xl">
            We turn spare computers into classroom machines.
          </h2>

          <p className="mt-5">
            <span
              className="inline-flex items-center gap-2 rounded-full border border-[#16a34a]/25 bg-[#f4fbf6] px-4 py-2 text-sm font-semibold text-[#15803d]"
              title={contact.place}
            >
              <svg viewBox="0 0 16 16" className="size-4 shrink-0" aria-hidden="true" fill="none">
                <path
                  d="M8 14s5-4.2 5-8A5 5 0 0 0 3 6c0 3.8 5 8 5 8Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <circle cx="8" cy="6" r="1.5" fill="currentColor" />
              </svg>
              Juja · Alma Matta, JKUAT Gate B
            </span>
          </p>

          <div className="mt-7">
            <p className="text-xs font-bold tracking-[0.22em] text-[#16a34a]">OUR MISSION</p>
            <p className="mt-2 text-base leading-relaxed text-slate-600 sm:text-lg">
              A donation goes a long way. We repair the machine and send it to a person or school that needs it.
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600 sm:text-base">
              <li className="border-l-2 border-[#16a34a] pl-3">Recycle electronics for a cleaner, safer environment.</li>
              <li className="border-l-2 border-[#16a34a] pl-3">Upgrade an organisation&apos;s electronics when the fleet is ready to move on.</li>
              <li className="border-l-2 border-[#16a34a] pl-3">We also repair and buy electronics at the Juja desk.</li>
            </ul>
          </div>

          <div className="mt-7">
            <p className="text-xs font-bold tracking-[0.22em] text-[#16a34a]">OUR SERVICES</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {services.map((service) => (
                <li key={service.title}>
                  <Link
                    href={service.href}
                    className="inline-flex rounded-full border border-[#d7eadc] bg-white px-4 py-2 text-sm font-semibold text-[#0b1b16] hover:border-[#16a34a] hover:text-[#15803d]"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link href="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#15803d] hover:text-[#166534]">
            More about the desk
            <svg viewBox="0 0 16 16" className="size-3.5" aria-hidden="true" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
