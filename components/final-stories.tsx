import Image from "next/image";
import Link from "next/link";

const stories = [
  {
    href: "/donations",
    photo: "/story-wanjiku.jpg",
    label: "Donated",
    quote:
      "We dropped two working laptops at the Juja desk. One was missing a charger, and that was fine. They repaired both and the computers went to a school.",
    name: "Wanjiku M.",
    role: "Parent, Juja",
  },
  {
    href: "/recycling",
    photo: "/story-david.jpg",
    label: "Disposed",
    quote:
      "The storeroom was full of machines that would not power on. They agreed the collection fee before they travelled, then recycled what could not be repaired.",
    name: "David Otieno",
    role: "Office manager, Nairobi",
  },
  {
    href: "/upgrades",
    photo: "/story-grace.jpg",
    label: "Upgraded",
    quote:
      "We handed in the laptops the office had outgrown. They collected them and delivered a newer generation of the same kind, ready to use.",
    name: "Grace Wanjiru",
    role: "Administrator, training centre",
  },
  {
    href: "/sell",
    photo: "/story-brian.jpg",
    label: "Sold",
    quote:
      "I sent photos of a working desktop. The offer was about 20–30% of the assessed desk price, confirmed after inspection, and paid after that visit.",
    name: "Brian Kamau",
    role: "Sold a desktop, Kiambu",
  },
] as const;

export function FinalStories() {
  return (
    <section id="stories" className="scroll-mt-24 bg-[#f4fbf6] py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6">
        <div className="text-center">
          <p className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-[#16a34a]">
            <span className="h-px w-10 bg-[#16a34a] sm:w-14" aria-hidden="true" />
            TESTIMONIALS
            <span className="h-px w-10 bg-[#16a34a] sm:w-14" aria-hidden="true" />
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-extrabold tracking-tight text-[#0b1b16] sm:text-[2.7rem] lg:text-5xl">
            We care about the experience after the handoff
          </h2>
        </div>
        <ul className="mt-16 grid gap-x-6 gap-y-16 sm:grid-cols-2 xl:grid-cols-4">
          {stories.map((story) => (
            <li key={story.label} className="relative rounded-[1.4rem] bg-white px-6 pt-14 pb-7 text-center shadow-[0_18px_40px_-24px_rgba(15,23,42,0.28)]">
              <Image
                src={story.photo}
                alt=""
                width={96}
                height={96}
                className="absolute top-0 left-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full object-cover ring-4 ring-white"
              />
              <h3 className="text-lg font-extrabold text-[#0b1b16]">{story.name}</h3>
              <p className="mt-1 text-sm text-slate-400">
                <Link href={story.href} className="font-medium text-[#16a34a] hover:text-[#15803d]">
                  {story.label}
                </Link>
                <span> · {story.role}</span>
              </p>
              <blockquote className="mt-4 text-sm leading-relaxed text-slate-500">{story.quote}</blockquote>
              <Stars />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Stars() {
  return (
    <p className="mt-5 flex justify-center gap-1 text-[#16a34a]" aria-label="5 out of 5">
      {Array.from({ length: 5 }, (_, index) => (
        <svg key={index} viewBox="0 0 20 20" className="size-4" aria-hidden="true">
          <path
            fill="currentColor"
            d="m10 1.8 2.1 4.6 5 .6-3.7 3.4.9 5-4.3-2.4L5.7 15.4l.9-5L2.9 7l5-.6L10 1.8Z"
          />
        </svg>
      ))}
    </p>
  );
}
