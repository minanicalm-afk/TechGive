"use client";

import { usePathname } from "next/navigation";
import { Home4Footer } from "@/components/home4-footer";
import { Header } from "@/components/header";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { themedPaths } from "@/lib/site";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const themed = themedPaths.includes(pathname as (typeof themedPaths)[number]);

  return (
    <>
      <Header />
      {children}
      {themed ? null : (
        <>
          <Home4Footer />
          <WhatsAppButton />
        </>
      )}
    </>
  );
}
