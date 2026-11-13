const stats = [
  { value: "500+", label: "Devices Repaired", icon: "laptop" },
  { value: "1,000+", label: "People Supported", icon: "people" },
  { value: "5 Tons", label: "E-Waste Recycled", icon: "recycle" },
  { value: "50+", label: "Organizations Assisted", icon: "building" },
] as const;

export function ImpactBar() {
  return (
    <div data-no-rise className="pointer-events-none fixed inset-x-0 bottom-0 z-40 print:hidden">
      <div className="pointer-events-auto border-t border-slate-200/80 bg-white/90 px-3 py-2.5 shadow-[0_-12px_32px_-20px_rgba(15,23,42,0.35)] backdrop-blur-md sm:px-6">
        <ul className="mx-auto grid w-full max-w-[96rem] grid-cols-2 gap-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <li
              key={stat.label}
              className="flex items-center gap-2.5 rounded-full border border-slate-100 bg-white px-3 py-2 shadow-[0_10px_24px_-18px_rgba(15,23,42,0.45)] sm:gap-3 sm:px-4 sm:py-2.5"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-emerald-50 text-[#15803d] sm:size-12">
                <StatIcon name={stat.icon} />
              </span>
              <span className="min-w-0">
                <span className="block text-base font-extrabold tracking-tight text-[#0b1b16] sm:text-xl">{stat.value}</span>
                <span className="block truncate text-[11px] font-medium text-slate-600 sm:text-sm">{stat.label}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function StatIcon({ name }: { name: string }) {
  if (name === "people") {
    return (
      <svg viewBox="0 0 24 24" className="size-5 sm:size-6" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="9" cy="8.5" r="2.2" />
        <circle cx="15.5" cy="9" r="1.8" />
        <path d="M4.8 17.2c.6-2.3 2.3-3.6 4.2-3.6s3.6 1.3 4.2 3.6" />
        <path d="M13.5 14.1c1.4-.2 2.8.6 3.4 2.4" />
      </svg>
    );
  }
  if (name === "recycle") {
    return (
      <svg viewBox="0 0 24 24" className="size-5 sm:size-6" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7.2 8 9.4 4.5h5.2L16.8 8" />
        <path d="m16.8 8 2.2 4.2-2.1 3.8" />
        <path d="M7.2 16 5 11.8 7.2 8" />
        <path d="M7.2 16h5.4l2 3.5" />
      </svg>
    );
  }
  if (name === "building") {
    return (
      <svg viewBox="0 0 24 24" className="size-5 sm:size-6" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M5 19.5V7L12 4l7 3v12.5" />
        <path d="M9 19.5v-4h6v4M9 9.5h.01M12 9.5h.01M15 9.5h.01M9 12.5h.01M12 12.5h.01M15 12.5h.01" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="size-5 sm:size-6" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="5" width="16" height="11" rx="1.5" />
      <path d="M8 19h8M12 16v3" />
    </svg>
  );
}
