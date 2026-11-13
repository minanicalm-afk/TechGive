"use client";

import { useMemo, useState, type FormEvent } from "react";
import type { Program } from "@/lib/programs";
import { site, whatsappHref } from "@/lib/site";

type Tab = "cash" | "item" | "join";

const tabs: { id: Tab; label: string }[] = [
  { id: "cash", label: "Donate" },
  { id: "item", label: "Provide listed item" },
  { id: "join", label: "Join us" },
];

export function ProgramSupport({ program }: { program: Program }) {
  const [tab, setTab] = useState<Tab>("cash");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [anonymous, setAnonymous] = useState("anonymous");

  const message = useMemo(() => {
    const shout = anonymous === "anonymous" ? "Stay anonymous" : "Shout-out is fine";
    if (tab === "cash") {
      return [
        `Program cash: ${program.title}`,
        `Need: ${program.need}`,
        `Name: ${name || "—"}`,
        `Phone: ${phone || "—"}`,
        `Email: ${email || "—"}`,
        `Amount (KES): ${amount || "—"}`,
        shout,
        note ? `Note: ${note}` : "",
      ]
        .filter(Boolean)
        .join("\n");
    }
    if (tab === "item") {
      return [
        `Provide listed item: ${program.title}`,
        `Item: ${program.itemLabel}`,
        `Name: ${name || "—"}`,
        `Phone: ${phone || "—"}`,
        `Email: ${email || "—"}`,
        shout,
        note ? `Note: ${note}` : "",
      ]
        .filter(Boolean)
        .join("\n");
    }
    return [
      `Join us: ${program.title}`,
      `Need: ${program.need}`,
      `Name: ${name || "—"}`,
      `Phone: ${phone || "—"}`,
      `Email: ${email || "—"}`,
      "Add me to the planning group",
      note ? `Note: ${note}` : "",
    ]
      .filter(Boolean)
      .join("\n");
  }, [amount, anonymous, email, name, note, phone, program, tab]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.open(whatsappHref(message), "_blank", "noopener,noreferrer");
  }

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8">
      <div className="flex flex-wrap gap-2">
        {tabs.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setTab(item.id)}
            className={`rounded-full px-4 py-2 text-sm font-semibold ${
              tab === item.id ? "bg-[#071a12] text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <form onSubmit={onSubmit} className="mt-6 grid gap-4">
        {tab === "cash" ? (
          <p className="text-sm leading-relaxed text-slate-600">{program.cashHint}</p>
        ) : null}
        {tab === "item" ? (
          <p className="text-sm leading-relaxed text-slate-600">
            Listed item for this activity: <strong className="text-[#0b1b16]">{program.itemLabel}</strong>
          </p>
        ) : null}
        {tab === "join" ? (
          <p className="text-sm leading-relaxed text-slate-600">
            Your details are captured and added to the group where organisation and planning happens.
          </p>
        ) : null}

        <label className="grid gap-1 text-sm font-medium text-[#0b1b16]">
          Name
          <input
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="rounded-2xl border border-slate-200 px-4 py-3 text-base font-normal"
          />
        </label>
        <label className="grid gap-1 text-sm font-medium text-[#0b1b16]">
          Phone
          <input
            required
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="rounded-2xl border border-slate-200 px-4 py-3 text-base font-normal"
          />
        </label>
        <label className="grid gap-1 text-sm font-medium text-[#0b1b16]">
          Email
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="rounded-2xl border border-slate-200 px-4 py-3 text-base font-normal"
          />
        </label>
        {tab === "cash" ? (
          <label className="grid gap-1 text-sm font-medium text-[#0b1b16]">
            Amount (KES)
            <input
              required
              inputMode="numeric"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              className="rounded-2xl border border-slate-200 px-4 py-3 text-base font-normal"
            />
          </label>
        ) : null}
        {tab !== "join" ? (
          <label className="grid gap-1 text-sm font-medium text-[#0b1b16]">
            Recognition
            <select
              value={anonymous}
              onChange={(event) => setAnonymous(event.target.value)}
              className="rounded-2xl border border-slate-200 px-4 py-3 text-base font-normal"
            >
              <option value="anonymous">Stay anonymous</option>
              <option value="shout">Shout-out is fine</option>
            </select>
          </label>
        ) : null}
        <label className="grid gap-1 text-sm font-medium text-[#0b1b16]">
          Note
          <textarea
            rows={3}
            value={note}
            onChange={(event) => setNote(event.target.value)}
            className="rounded-2xl border border-slate-200 px-4 py-3 text-base font-normal"
          />
        </label>
        <button type="submit" className="rounded-full bg-[#22c55e] px-5 py-3 text-sm font-semibold text-white hover:bg-[#16a34a]">
          Continue on WhatsApp
        </button>
        <p className="text-xs text-slate-500">Opens {site.whatsappDisplay}. Public pages show the activity name and the listed need only.</p>
      </form>
    </div>
  );
}
