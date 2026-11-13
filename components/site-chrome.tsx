"use client";

import { usePathname } from "next/navigation";
import { Home4Footer } from "@/components/home4-footer";
import { Header } from "@/components/header";
import { ImpactBar } from "@/components/impact-bar";
import { ScrollRise } from "@/components/scroll-rise";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { isThemedPath } from "@/lib/site";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const themed = isThemedPath(pathname);

  return (
    <>
      <Header />
      <ScrollRise />
      <div className="pb-28 sm:pb-24">{children}</div>
      <ImpactBar />
      {themed ? null : (
        <>
          <Home4Footer />
          <WhatsAppButton />
        </>
      )}
    </>
  );
}
