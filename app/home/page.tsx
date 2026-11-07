import type { Metadata } from "next";
import { HomeLanding } from "@/components/home-landing";

export const metadata: Metadata = {
  title: { absolute: "TechGive — Donate · Upgrade · Empower" },
  description:
    "Donate, sell, or upgrade computers and electronics. Repair, redistribute, and recycle for a more connected community.",
};

export default function HomePage() {
  return <HomeLanding />;
}
