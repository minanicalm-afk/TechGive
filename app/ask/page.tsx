import type { Metadata } from "next";
import { FlowPage } from "@/components/flow/flow-page";
import { PathForm } from "@/components/flow/path-form";

export const metadata: Metadata = {
  title: "Ask for a computer",
  description: "Ask Josachi about computers for a less privileged school.",
};

export default function AskPage() {
  return (
    <FlowPage
      eyebrow="Ask"
      title="Computers for a school."
      text="Collected machines that can be repaired are given to less privileged schools. Tell us about the school and what the computers need to do."
      asideTitle="What helps the desk"
      aside={[
        "Name the school and the town.",
        "Say how many learners the machines need to serve.",
        "A placement is a gift from the donation path, not a purchase.",
      ]}
    >
      <PathForm kind="ask" />
    </FlowPage>
  );
}
