import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/techgive-ui";

export function FinalCta() {
  return (
    <section id="get-started" className="scroll-mt-24 bg-white pb-16">
      <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6">
        <div className="relative flex flex-col items-center gap-4 overflow-hidden rounded-[1.25rem] border border-white/10 bg-[linear-gradient(90deg,#071a12_0%,#123d2b_46%,#14532d_100%)] px-5 py-5 sm:flex-row sm:py-6 sm:pr-6 sm:pl-[34%]">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-full sm:w-[42%]">
            <Image
              src="/final-cta-chip.jpg"
              alt=""
              fill
              className="object-cover object-left"
              sizes="480px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent from-45% to-[#123d2b] sm:to-[#0c2e20]" />
          </div>

          <div className="relative z-10 flex-1 text-center">
            <h2 className="text-lg font-extrabold leading-tight tracking-tight text-white sm:text-2xl">
              Let&apos;s Build a More Connected
              <span className="block">and Sustainable Community Together</span>
            </h2>
            <p className="mt-1.5 text-sm text-white/75">Donate. Upgrade. Repair. Recycle. Empower.</p>
          </div>

          <Link
            href="/donations#note"
            className="relative z-10 inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#78d93d] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#6bcf34]"
          >
            Get Started <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
