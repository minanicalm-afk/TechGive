import Image from "next/image";
import Link from "next/link";
import type { Program } from "@/lib/programs";

export function ProgramCard({ program }: { program: Program }) {
  return (
    <Link
      href={`/programs/${program.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-[0_16px_40px_-28px_rgba(15,23,42,0.45)] ring-1 ring-slate-200/80 transition hover:-translate-y-0.5 hover:shadow-[0_22px_48px_-24px_rgba(15,23,42,0.5)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <Image
          src={program.image}
          alt={program.imageAlt}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
          sizes="(min-width: 1024px) 30vw, 50vw"
        />
        <span className="absolute top-2 left-2 rounded-md bg-[#071a12]/85 px-1.5 py-0.5 text-[9px] font-bold tracking-[0.14em] text-white uppercase">
          {program.period}
        </span>
        <span className="absolute top-2 right-2 rounded-md bg-[#22c55e] px-1.5 py-0.5 text-[9px] font-bold tracking-[0.14em] text-white uppercase">
          {program.kindLabel}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-[10px] font-semibold tracking-[0.16em] text-[#16a34a] uppercase">Need</p>
        <p className="mt-1 line-clamp-2 text-xs font-medium text-slate-600">{program.need}</p>
        <h3 className="mt-1.5 text-sm font-extrabold tracking-tight text-[#0b1b16] sm:text-base">{program.title}</h3>
        <p className="mt-auto pt-4 text-xs font-semibold text-[#15803d]">
          Donate · Provide item · Join us
        </p>
      </div>
    </Link>
  );
}
