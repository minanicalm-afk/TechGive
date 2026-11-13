import { Mark } from "@/components/techgive-ui";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Mark className="size-10" />
      <span className="leading-none">
        <span className={`block text-lg font-bold tracking-tight ${light ? "text-cream" : "text-ink"}`}>
          TechGive
        </span>
        <span className={`mt-0.5 block text-[10px] font-medium ${light ? "text-cream/65" : "text-ink-soft"}`}>
          Donate · Recycle · Re-use · Empower
        </span>
      </span>
    </span>
  );
}
