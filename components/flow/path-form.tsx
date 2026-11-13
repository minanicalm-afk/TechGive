"use client";

import { RequestForm, type RequestField } from "@/components/flow/request-form";

const devices = ["Laptop", "Desktop / CPU", "Server", "TV", "Printer", "Scanner", "Switch", "Faulty cables"].map((label) => ({
  value: label,
  label,
}));

type PathFormKind = "donate" | "dispose" | "upgrade" | "ask" | "request";

const forms: Record<
  PathFormKind,
  {
    submitLabel: string;
    doneTitle: string;
    doneText: string;
    fields: readonly RequestField[];
    buildMessage: (values: Record<string, string>) => string;
  }
> = {
  donate: {
    submitLabel: "Prepare the donation note",
    doneTitle: "The donation note is ready.",
    doneText: "Send it on WhatsApp. We confirm whether you will bring it to Juja or we will collect it. Working donations are collected without a charge.",
    fields: [
      { name: "name", label: "Your name/organization", type: "text", required: true },
      { name: "phone", label: "WhatsApp number", type: "tel", required: true, half: true },
      { name: "email", label: "Email", type: "email", required: true, half: true },
      { name: "device", label: "What are you donating?", type: "select", required: true, options: devices },
      {
        name: "condition",
        label: "Condition",
        type: "select",
        required: true,
        options: [
          { value: "Working", label: "Working" },
          { value: "Repairable", label: "Repairable" },
          { value: "Company lot of working machines", label: "Company lot of working machines" },
        ],
      },
      { name: "location", label: "Location", type: "text", required: true },
      {
        name: "recipient",
        label: "Who should receive this (school or organisation). Leave blank if we should place it.",
        type: "text",
      },
      {
        name: "shout",
        label: "Recognition",
        type: "select",
        required: true,
        options: [
          { value: "Stay anonymous", label: "Stay anonymous" },
          { value: "Shout-out is fine", label: "Shout-out is fine" },
        ],
      },
      { name: "note", label: "Anything the bench should know", type: "textarea" },
    ],
    buildMessage: (values) => {
      const lines = [
        "Hello Josachi, I would like to donate a device.",
        "",
        `Name: ${values.name?.trim()}`,
        `WhatsApp: ${values.phone?.trim()}`,
        `Email: ${values.email?.trim()}`,
        `What it is: ${values.device}`,
        `Condition: ${values.condition}`,
        `Location: ${values.location?.trim()}`,
        values.recipient?.trim()
          ? `Direct this donation to: ${values.recipient.trim()}`
          : "Place this donation where it is needed.",
        `Recognition: ${values.shout}`,
      ];
      if (values.note?.trim()) lines.push(`Note: ${values.note.trim()}`);
      return lines.join("\n");
    },
  },
  dispose: {
    submitLabel: "Prepare the collection note",
    doneTitle: "The collection note is ready.",
    doneText: "Send it on WhatsApp. Dead loads are charged for collection. We travel for 20 pieces or more, and the charge is agreed before the visit.",
    fields: [
      { name: "name", label: "Your name", type: "text", required: true },
      { name: "phone", label: "WhatsApp number", type: "tel", required: true },
      {
        name: "place",
        label: "Home or organisation",
        type: "select",
        required: true,
        options: [
          { value: "Home", label: "Home" },
          { value: "Organisation", label: "Organisation" },
        ],
      },
      { name: "what", label: "Roughly what is leaving", type: "textarea", required: true },
      { name: "town", label: "Pickup town", type: "text", required: true, placeholder: "Juja, Nairobi, or another town" },
      { name: "access", label: "Stairs, gate, or access notes", type: "textarea" },
    ],
    buildMessage: (values) => {
      const lines = [
        "Hello Josachi, I need a paid collection of dead electronics for disposal.",
        "",
        `Name: ${values.name?.trim()}`,
        `WhatsApp: ${values.phone?.trim()}`,
        `Home or organisation: ${values.place}`,
        `Roughly what is there: ${values.what?.trim()}`,
        `Pickup from: ${values.town?.trim()}`,
      ];
      if (values.access?.trim()) lines.push(`Access: ${values.access.trim()}`);
      return lines.join("\n");
    },
  },
  upgrade: {
    submitLabel: "Send the upgrade request",
    doneTitle: "The upgrade note is ready.",
    doneText: "Send it on WhatsApp. Old working machines can be donated, or released for a small fee. We travel for 10 working pieces. A PDF inventory can follow in the chat.",
    fields: [
      { name: "name", label: "Your name", type: "text", required: true, half: true },
      { name: "organisation", label: "Organisation", type: "text", required: true, half: true },
      { name: "phone", label: "WhatsApp number", type: "tel", required: true, half: true },
      { name: "count", label: "How many machines", type: "text", required: true, half: true },
      {
        name: "kind",
        label: "What you run today",
        type: "select",
        required: true,
        half: true,
        options: [
          { value: "Laptops", label: "Laptops" },
          { value: "Desktops", label: "Desktops" },
          { value: "Both", label: "Laptops and desktops" },
        ],
      },
      {
        name: "inventory",
        label: "PDF or notes about inventory",
        type: "text",
        half: true,
        placeholder: "A list is enough to start",
      },
      { name: "note", label: "What the machines are used for", type: "textarea" },
    ],
    buildMessage: (values) =>
      [
        "Hello Josachi, we have old-generation working computers to donate or release for a small fee.",
        "",
        `Name: ${values.name?.trim()}`,
        `Organisation: ${values.organisation?.trim()}`,
        `WhatsApp: ${values.phone?.trim()}`,
        `How many machines: ${values.count?.trim()}`,
        `What they are: ${values.kind}`,
        values.inventory?.trim() ? `Inventory: ${values.inventory.trim()}` : "",
        values.note?.trim() ? `Used for: ${values.note.trim()}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
  },
  ask: {
    submitLabel: "Prepare the request",
    doneTitle: "The request is ready.",
    doneText: "Send it on WhatsApp. Placements go to less privileged schools.",
    fields: [
      { name: "name", label: "Your name", type: "text", required: true },
      { name: "phone", label: "WhatsApp number", type: "tel", required: true },
      { name: "who", label: "School", type: "text", required: true },
      { name: "need", label: "What the computers need to do", type: "textarea", required: true },
      { name: "town", label: "Town", type: "text", required: true },
    ],
    buildMessage: (values) =>
      [
        "Hello Josachi, I am asking about computers for a less privileged school.",
        "",
        `Name: ${values.name?.trim()}`,
        `WhatsApp: ${values.phone?.trim()}`,
        `School: ${values.who?.trim()}`,
        `What the computer needs to do: ${values.need?.trim()}`,
        `Town: ${values.town?.trim()}`,
      ].join("\n"),
  },
  request: {
    submitLabel: "Request a program slot",
    doneTitle: "The request is ready.",
    doneText: "Send it on WhatsApp. If the request is accepted, the public programs page will show the organisation name and the listed need only.",
    fields: [
      { name: "name", label: "Your name", type: "text", required: true, half: true },
      { name: "role", label: "Your role (kept off the public page)", type: "text", required: true, half: true },
      { name: "organisation", label: "School or organisation name", type: "text", required: true },
      { name: "phone", label: "WhatsApp number", type: "tel", required: true, half: true },
      { name: "email", label: "Email", type: "email", required: true, half: true },
      { name: "need", label: "What is needed (this is what the public page will show)", type: "text", required: true },
      { name: "town", label: "Town", type: "text", required: true },
      { name: "note", label: "Anything else for planning", type: "textarea" },
    ],
    buildMessage: (values) =>
      [
        "Hello Josachi, we would like a slot on the programs page for a donation request.",
        "",
        `Name: ${values.name?.trim()}`,
        `Role (not for the public page): ${values.role?.trim()}`,
        `School or organisation: ${values.organisation?.trim()}`,
        `WhatsApp: ${values.phone?.trim()}`,
        `Email: ${values.email?.trim()}`,
        `Public need: ${values.need?.trim()}`,
        `Town: ${values.town?.trim()}`,
        values.note?.trim() ? `Note: ${values.note.trim()}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
  },
};

export function PathForm({ kind, tone = "desk" }: { kind: PathFormKind; tone?: "desk" | "home" }) {
  const form = forms[kind];
  return <RequestForm {...form} tone={tone} />;
}
