import type { Metadata } from "next";
import { Home3Landing } from "@/components/home3-landing";

export const metadata: Metadata = {
  title: { absolute: "Josachi — We buy the gadgets gathering dust at home." },
  description:
    "Josachi buys laptops, phones, tablets, monitors, and more in Juja and Nairobi. The range is about 20–30% of the assessed desk price, confirmed after inspection.",
};

export default function Home3Page() {
  return <Home3Landing />;
}
