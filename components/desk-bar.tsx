import Link from "next/link";
import { messages, site, whatsappHref } from "@/lib/site";

export function DeskBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#0b1b16]/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[96rem] items-center gap-3 px-4 py-2.5 sm:px-6">
        <a href={`tel:+${site.whatsappE164}`} className="min-w-0">
          <span className="block text-[10px] font-bold tracking-[0.16em] text-white/50">DESK</span>
          <span className="block truncate text-sm font-semibold text-white">{site.whatsappDisplay}</span>
        </a>
        <a
          href={whatsappHref(messages.general)}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto hidden rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 sm:inline-flex"
        >
          WhatsApp
        </a>
        <Link
          href="/contact"
          className="ml-auto rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 sm:ml-0"
        >
          Contact
        </Link>
        <Link href="/donations#note" className="rounded-full bg-[#22c55e] px-4 py-2 text-sm font-semibold text-white hover:bg-[#16a34a]">
          Donate
        </Link>
      </div>
    </div>
  );
}
