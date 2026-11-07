import type { Metadata } from "next";
import { FlowPage } from "@/components/flow/flow-page";
import { PathForm } from "@/components/flow/path-form";

export const metadata: Metadata = {
  title: "Donate a computer",
  description: "Donate a working or repairable computer. Josachi repairs it and gives it to a less privileged school.",
};

export default function DonatePage() {
  return (
    <FlowPage
      eyebrow="Donate"
      title="Leave a computer for a school."
      text="Working or repairable. A missing charger is fine. Drop it at the Juja shop, or ask for collection in Juja, Nairobi, or nearby. Working donations are collected without a charge."
      asideTitle="After you send it"
      aside={[
        "We confirm the town and whether you will bring it or we will collect it.",
        "The machine is logged, tested, and repaired when it can be used.",
        "A usable computer is given to a less privileged school.",
      ]}
    >
      <PathForm kind="donate" />
    </FlowPage>
  );
}
