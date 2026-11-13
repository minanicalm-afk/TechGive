import Image from "next/image";

export function FinalImpact() {
  return (
    <section id="impact" className="scroll-mt-24 bg-white py-10 sm:py-14">
      <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-white">
          <Image
            src="/final-impact.jpg"
            alt=""
            fill
            className="object-cover object-right"
            sizes="(min-width: 1024px) 90vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white via-40% to-white/15" />

          <div className="relative px-6 pt-10 pb-10 sm:px-10 sm:pt-12 sm:pb-12 lg:px-14">
            <p className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.16em] text-[#15803d]">
              <span className="h-0.5 w-12 bg-[#15803d]" aria-hidden="true" />
              OUR IMPACT
            </p>
            <h2 className="mt-4 max-w-xl text-4xl font-extrabold leading-[0.95] tracking-tight text-[#0b1b16] sm:text-5xl lg:text-6xl">
              Together, We Make a
              <span className="mt-1 block text-[#15803d] underline decoration-[#16a34a] decoration-[3px] underline-offset-[8px]">
                Difference
              </span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-slate-700 sm:text-base">
              Through donations, repairs, and responsible recycling, we&apos;re giving technology a second life and creating opportunities for our community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
