import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Home4Banner, Home4Footer } from "@/components/home4-footer";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "TechGive — About Us" },
  description:
    "Josachi collects, repairs, and recycles computers in Juja and Nairobi. Repairable machines go to less privileged schools.",
};

const paths = [
  {
    title: "Donate",
    copy: "A working or repairable computer, cleaned and fixed, then given to a less privileged school.",
    href: "/donations",
    image: "/final-svc-donate-2.jpg",
    cta: "Donate a device",
  },
  {
    title: "Sell",
    copy: "About 20–30% of the assessed desk price. The range is confirmed after we inspect it.",
    href: "/sell",
    image: "/final-svc-sell.jpg",
    cta: "Get a quote",
  },
  {
    title: "Recycle",
    copy: "Dead equipment is collected for a fee. What cannot be repaired is disposed of responsibly.",
    href: "/recycling",
    image: "/final-svc-recycle-2.jpg",
    cta: "Book a collection",
  },
  {
    title: "Upgrade",
    copy: "An organisation hands in what it has and moves to a newer generation of the same kind.",
    href: "/upgrades",
    image: "/final-svc-upgrade-2.jpg",
    cta: "Plan an upgrade",
  },
] as const;

const pathSteps = [
  ["It arrives", "Drop it at the Juja shop, or ask for collection in Juja or Nairobi."],
  ["We log it", "The note stays with the machine: what arrived, and whether it powers on."],
  ["The bench decides", "Repairable computers are cleaned and fixed. The rest is kept for parts or recycled."],
  ["Someone receives it", "A finished machine goes to a less privileged school, for study or a class."],
] as const;

const marks = [
  ["500+", "Devices repaired"],
  ["1,000+", "People supported"],
  ["5 Tons", "E-waste recycled"],
  ["50+", "Organisations assisted"],
] as const;

export default function AboutPage() {
  return (
    <>
      <main id="main" className="bg-white">
        <Home4Banner
          image="/final-impact.jpg"
          eyebrow="ABOUT US"
          title={
            <>
              A spare computer
              <span className="mt-1 block text-[#86efac]">still has a class to reach.</span>
            </>
          }
          text="TechGive is the Josachi desk in Juja. We collect electronics from people, companies, and institutions, then put the repairable ones back to work."
        >
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/donate" className="inline-flex items-center rounded-full bg-[#22c55e] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#16a34a]">
              Donate a device
            </Link>
            <Link href="/contact" className="inline-flex items-center rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">
              Visit the desk
            </Link>
          </div>
        </Home4Banner>

        <section className="mx-auto grid w-full max-w-[96rem] items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div className="relative min-h-[26rem] overflow-hidden rounded-[2rem]">
            <Image src="/donation-bench.jpg" alt="Computers on the repair bench." fill className="object-cover" sizes="640px" />
          </div>
          <div>
            <p className="text-xs font-bold tracking-[0.18em] text-[#16a34a]">THE DESK</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0b1b16] sm:text-4xl">
              From a doorway in Juja to a school that is short of machines.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Donations are not stock for the shop. A laptop or desktop is logged, repaired when that is the honest job, and given to a less privileged school. A missing charger is fine.
            </p>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              If you are selling, the offer is about 20–30% of the assessed desk price. The team confirms the range after inspection, and it can change. Payment follows that visit.
            </p>
            <p className="mt-6 text-sm font-semibold text-[#0b1b16]">{contact.place}</p>
            <p className="mt-1 text-sm text-slate-500">{contact.hours} Nairobi is on-site collection only.</p>
          </div>
        </section>

        <section className="bg-[#f4fbf6] py-16 lg:py-20">
          <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6">
            <p className="text-xs font-bold tracking-[0.18em] text-[#16a34a]">WHAT COMES IN</p>
            <h2 className="mt-3 max-w-xl text-3xl font-extrabold tracking-tight text-[#0b1b16] sm:text-4xl">
              Four ways a machine reaches the bench.
            </h2>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {paths.map((item) => (
                <li key={item.title} className="overflow-hidden rounded-[1.4rem] bg-white shadow-[0_18px_40px_-28px_rgba(15,23,42,0.45)]">
                  <div className="relative h-44 bg-[radial-gradient(circle_at_55%_45%,#d9f5e4,transparent_70%)]">
                    <Image src={item.image} alt="" fill className="object-contain p-4" sizes="280px" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-extrabold text-[#0b1b16]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.copy}</p>
                    <Link href={item.href} className="mt-4 inline-flex text-sm font-semibold text-[#15803d] hover:text-[#166534]">
                      {item.cta} →
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[96rem] px-4 py-16 sm:px-6 lg:py-20">
          <p className="text-xs font-bold tracking-[0.18em] text-[#16a34a]">THE PATH</p>
          <h2 className="mt-3 max-w-xl text-3xl font-extrabold tracking-tight text-[#0b1b16] sm:text-4xl">
            What happens after you leave it with us.
          </h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-4">
            {pathSteps.map(([title, copy], index) => (
              <li key={title} className="relative">
                <span className="grid size-12 place-items-center rounded-full bg-[#22c55e] text-lg font-extrabold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-lg font-extrabold text-[#0b1b16]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{copy}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="px-4 pb-16 sm:px-6">
          <ul className="mx-auto grid w-full max-w-[96rem] gap-3 rounded-[2rem] bg-[#123d2b] px-4 py-8 text-white sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
            {marks.map(([value, label]) => (
              <li key={label} className="px-2 py-2">
                <p className="text-3xl font-extrabold text-[#86efac]">{value}</p>
                <p className="mt-1 text-sm text-white/75">{label}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Home4Footer />
    </>
  );
}
