import Image from "next/image";
import Link from "next/link";
import { getProgram } from "@/lib/programs";

const lead = "abc-school";
const mid = "organised-race";
const pair = ["tree-planting", "listed-classroom"] as const;

export function EditorsPicks() {
  const featured = getProgram(lead);
  const secondary = getProgram(mid);
  const pairItems = pair.map((slug) => getProgram(slug)).filter(Boolean);
  if (!featured) return null;

  return (
    <section className="mx-auto w-full max-w-[96rem] px-4 pb-10 sm:px-6">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-sm font-extrabold tracking-[0.16em] text-[#0b1b16] uppercase">Editor&apos;s picks</h2>
        <Link href="#list" className="text-sm font-semibold text-slate-500 hover:text-[#15803d]">
          View all
        </Link>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-2 lg:items-stretch">
        <Link href={`/programs/${featured.slug}`} className="group relative block h-full min-h-[16rem] overflow-hidden rounded-2xl bg-slate-200">
          <div className="relative aspect-[16/11] h-full w-full lg:aspect-auto">
            <Image
              src={featured.image}
              alt={featured.imageAlt}
              fill
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
              sizes="(min-width: 1024px) 48vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071a12]/85 via-[#071a12]/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <p className="text-[11px] font-bold tracking-[0.14em] text-[#86efac] uppercase">
                {featured.period} · {featured.kindLabel}
              </p>
              <h3 className="mt-2 text-2xl font-extrabold leading-snug tracking-tight text-white sm:text-[1.7rem]">
                {featured.title} — {featured.need}
              </h3>
            </div>
          </div>
        </Link>

        <div className="grid h-full min-h-0 gap-5 lg:grid-rows-[minmax(0,1.15fr)_minmax(0,0.9fr)]">
          {secondary ? (
            <Link href={`/programs/${secondary.slug}`} className="group relative block min-h-[12rem] overflow-hidden rounded-2xl bg-slate-200">
              <div className="relative aspect-[16/9] h-full w-full lg:aspect-auto">
                <Image
                  src={secondary.image}
                  alt={secondary.imageAlt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 48vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071a12]/85 via-[#071a12]/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <p className="text-[11px] font-bold tracking-[0.14em] text-[#86efac] uppercase">
                    {secondary.period} · {secondary.kindLabel}
                  </p>
                  <h3 className="mt-1.5 text-lg font-extrabold leading-snug tracking-tight text-white sm:text-xl">
                    {secondary.title} — {secondary.need}
                  </h3>
                </div>
              </div>
            </Link>
          ) : null}

          <ul className="grid h-full min-h-0 grid-cols-2 gap-4">
            {pairItems.map((program) =>
              program ? (
                <li key={program.slug} className="min-h-0">
                  <Link href={`/programs/${program.slug}`} className="group relative block h-full min-h-[10rem] overflow-hidden rounded-2xl bg-slate-200">
                    <div className="relative aspect-[16/11] h-full w-full lg:aspect-auto">
                      <Image
                        src={program.image}
                        alt={program.imageAlt}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                        sizes="(min-width: 1024px) 22vw, 45vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071a12]/85 via-[#071a12]/25 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                        <p className="text-[10px] font-bold tracking-[0.14em] text-[#86efac] uppercase">
                          {program.period} · {program.kindLabel}
                        </p>
                        <h3 className="mt-1 text-sm font-extrabold leading-snug tracking-tight text-white sm:text-base">
                          {program.title} — {program.need}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </li>
              ) : null,
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
