import type { Metadata } from "next";
import { Home2Landing } from "@/components/home2-landing";

export const metadata: Metadata = {
  title: { absolute: "TechGive — Give. Repair. Recycle. Create Impact." },
  description: "Donate, sell, upgrade, or responsibly recycle computers and electronics.",
};

export default function Home2Page() {
  return <Home2Landing />;
}
