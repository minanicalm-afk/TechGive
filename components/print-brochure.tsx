"use client";

export function PrintBrochure() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center rounded-full bg-[#22c55e] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#16a34a] print:hidden"
    >
      Download / print brochure
    </button>
  );
}
