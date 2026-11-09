"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { WhatsAppButton } from "@/components/whatsapp-button";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname === "/home" || pathname === "/home1" || pathname === "/home2" || pathname === "/home3") return children;

  const heroOnly =
    pathname === "/home4" || pathname === "/about" || pathname === "/faq" || pathname === "/home4/contact";

  return (
    <>
      <Header />
      {children}
      {heroOnly ? null : (
        <>
          <Footer />
          <WhatsAppButton />
        </>
      )}
    </>
  );
}
