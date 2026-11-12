import type { Metadata } from "next";
import { FlowPage } from "@/components/flow/flow-page";
import { PathForm } from "@/components/flow/path-form";
import { Home4Footer } from "@/components/home4-footer";

export const metadata: Metadata = {
  title: "Plan a fleet upgrade",
  description:
    "Companies can donate old working computers, or ask a small fee for them. Josachi travels for 10 working pieces or more.",
};

export default function UpgradePage() {
  return (
    <>
    <FlowPage
      eyebrow="Upgrade"
      title="Old working machines can leave the building."
      text="For companies and institutions. Donate the old generation, or ask a small fee for it. We travel for 10 working pieces or more. Donors are not charged for collection. If a fee is agreed, the collection cost is taken off that amount."
      asideTitle="How a lot is handled"
      aside={[
        "Send a count, the condition, and a PDF inventory if you have one.",
        "There is no online price. The lot is weighed on inspection.",
        "Working machines that can be saved go to less privileged schools.",
      ]}
    >
      <PathForm kind="upgrade" tone="home" />
    </FlowPage>
    <Home4Footer />
    </>
  );
}
