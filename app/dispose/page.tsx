import type { Metadata } from "next";
import { FlowPage } from "@/components/flow/flow-page";
import { PathForm } from "@/components/flow/path-form";

export const metadata: Metadata = {
  title: "Book a disposal collection",
  description: "Book a paid collection of dead electronics in Juja, Nairobi, or nearby. We travel for 20 pieces or more.",
};

export default function DisposePage() {
  return (
    <FlowPage
      eyebrow="Dispose"
      title="Dead equipment, collected for a fee."
      text="Dead and un-recyclable electronics are collected and disposed of responsibly. The collection charge is agreed after we know the load. We travel for 20 dead pieces or more, in Juja, Nairobi, and nearby."
      asideTitle="Before the van comes"
      aside={[
        "A list is enough to start. A PDF inventory can be sent on WhatsApp.",
        "The charge is confirmed before the visit is booked.",
        "What can still be repaired may be given to a school. The rest is disposed of.",
      ]}
    >
      <PathForm kind="dispose" />
    </FlowPage>
  );
}
