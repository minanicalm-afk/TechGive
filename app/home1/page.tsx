import type { Metadata } from "next";
import { Home1Landing } from "@/components/home1-landing";

export const metadata: Metadata = {
  title: { absolute: "TechGive — Give Your Old Electronics a New Life" },
  description: "Donate, sell, upgrade, or responsibly recycle computers and electronics.",
};

export default function Home1Page() {
  return <Home1Landing />;
}
