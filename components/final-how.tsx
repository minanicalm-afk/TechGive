const steps = [
  ["1", "Donate or Sell", "Tell us what you have: a laptop, desktop, parts, or a machine that needs repair."],
  ["2", "Get a Quote", "A sale is about 20–30% of the assessed desk price, confirmed after we inspect it."],
  ["3", "Accept or Negotiate", "Confirm on WhatsApp, or bring it to the desk in Juja."],
  ["4", "We Handle the Rest", "We repair, upgrade, place it with a school, or recycle what cannot be reused."],
] as const;

export function FinalHow() {
  return (
    <section id="how" className="scroll-mt-24 bg-white py-16">
      <div className="mx-auto w-full max-w-[96rem] px-4 text-center sm:px-6">
        <p className="text-xs font-bold tracking-[0.18em] text-[#16a34a]">HOW IT WORKS</p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0c2340] sm:text-4xl">
          Simple Steps to Give &amp; Get
        </h2>
        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(([n, title, copy], index) => (
            <li key={n} className="relative">
              {index < steps.length - 1 ? (
                <span className="absolute top-5 right-0 hidden text-slate-300 lg:block" aria-hidden="true">
                  →
                </span>
              ) : null}
              <span className="mx-auto grid size-10 place-items-center rounded-full bg-[#22c55e] text-sm font-bold text-white">
                {n}
              </span>
              <h3 className="mt-4 font-bold text-[#0c2340]">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-500">{copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
