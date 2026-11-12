"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  ages,
  catalogue,
  conditions,
  formatKes,
  type AgeId,
  type CategoryId,
  type ConditionId,
} from "@/lib/pricing";
import { messages, whatsappHref } from "@/lib/site";

const control =
  "mt-2 w-full rounded-2xl border border-slate-200 bg-[#f4fbf6] px-4 py-3 text-sm text-[#0b1b16] outline-none placeholder:text-slate-400 focus:border-[#16a34a]";

const steps = ["Gadget", "Details", "Photos", "Your info", "Review"] as const;
type Step = 1 | 2 | 3 | 4 | 5;

type Draft = {
  category: CategoryId | "";
  brand: string;
  model: string;
  specs: string;
  age: AgeId | "";
  condition: ConditionId | "";
  powersOn: boolean | null;
  asking: string;
  notes: string;
  charger: boolean;
  photos: File[];
  hasReceipt: "yes" | "no" | "";
  bringId: boolean;
  name: string;
  phone: string;
  email: string;
  town: string;
  handover: "bring" | "collect" | "";
};

const empty: Draft = {
  category: "",
  brand: "",
  model: "",
  specs: "",
  age: "",
  condition: "",
  powersOn: null,
  asking: "",
  notes: "",
  charger: false,
  photos: [],
  hasReceipt: "",
  bringId: false,
  name: "",
  phone: "",
  email: "",
  town: "",
  handover: "",
};

export function SellFlow() {
  const [step, setStep] = useState<Step>(1);
  const [draft, setDraft] = useState<Draft>(empty);
  const [error, setError] = useState("");
  const [answer, setAnswer] = useState<"idle" | "accepted" | "cancelled">("idle");
  const [previews, setPreviews] = useState<string[]>([]);
  const [reference, setReference] = useState("");

  const item = catalogue.find((entry) => entry.id === draft.category);

  function patch(next: Partial<Draft>) {
    setDraft((current) => ({ ...current, ...next }));
  }

  function replacePhotos(files: File[]) {
    setPreviews((current) => {
      current.forEach((url) => URL.revokeObjectURL(url));
      return files.map((file) => URL.createObjectURL(file));
    });
    patch({ photos: files });
  }

  function go(next: Step) {
    setError("");
    setStep(next);
  }

  function continueFromDetails() {
    const loose = item?.id === "cables";
    if (!loose && (draft.brand.trim().length < 2 || draft.model.trim().length < 2)) {
      setError("Add the brand and the model.");
      return;
    }
    if (!draft.condition) {
      setError("Choose the condition.");
      return;
    }
    if (!loose && draft.powersOn === null) {
      setError("Say whether it powers on.");
      return;
    }
    if (Number(draft.asking.replace(/\D/g, "")) <= 0) {
      setError("Add the price you have in mind.");
      return;
    }
    go(3);
  }

  function continueFromPhotos() {
    if (draft.photos.length === 0) {
      setError("Add at least one photo of the item.");
      return;
    }
    if (!draft.hasReceipt) {
      setError("Say whether you have the receipt.");
      return;
    }
    go(4);
  }

  function continueFromInfo() {
    if (!draft.bringId) {
      setError("Confirm that you will bring your National ID.");
      return;
    }
    if (!draft.email.includes("@") || draft.email.trim().length < 6) {
      setError("Add an email address.");
      return;
    }
    if (draft.name.trim().length < 2 || draft.phone.replace(/\D/g, "").length < 9 || draft.town.trim().length < 2) {
      setError("Add your name, a phone number, and your town.");
      return;
    }
    if (!draft.handover) {
      setError("Say whether you will bring the item or need a collection.");
      return;
    }
    setReference(`JS-${Date.now().toString(36).toUpperCase()}`);
    go(5);
  }

  function note(decision: "review" | "bargain") {
    const asking = Number(draft.asking.replace(/\D/g, ""));
    const condition = conditions.find((entry) => entry.id === draft.condition)?.label ?? "";
    const opening =
      decision === "bargain"
        ? "I would like to bargain once you have reviewed this item."
        : "Please review this item before you show an offer.";
    return [
      "Hello Josachi,",
      opening,
      `Reference: ${reference}`,
      "",
      `Item: ${item?.label ?? ""}${draft.brand.trim() ? ` · ${draft.brand.trim()}` : ""}${draft.model.trim() ? ` ${draft.model.trim()}` : ""}`,
      draft.specs.trim() ? `RAM / storage: ${draft.specs.trim()}` : "",
      draft.age ? `Age: ${ages.find((entry) => entry.id === draft.age)?.label}` : "",
      `Condition: ${condition}`,
      `Powers on: ${draft.powersOn === false ? "no" : "yes"}`,
      `Charger included: ${draft.charger ? "yes" : "no"}`,
      draft.notes.trim() ? `Notes: ${draft.notes.trim()}` : "",
      `Asking price: ${formatKes(asking)}`,
      `Receipt: ${draft.hasReceipt === "yes" ? "yes" : "no, other proof of ownership or a written agreement"}`,
      "National ID: I will bring it",
      `Photos to send in this chat: ${draft.photos.length}`,
      `Town: ${draft.town.trim()}`,
      `Handover: ${draft.handover === "collect" ? "please collect" : "I will bring it"}`,
      `Name: ${draft.name.trim()}`,
      `Phone: ${draft.phone.trim()}`,
      `Email: ${draft.email.trim()}`,
    ]
      .filter(Boolean)
      .join("\n");
  }

  function accept() {
    window.open(whatsappHref(note("review")), "_blank", "noopener,noreferrer");
    setAnswer("accepted");
  }

  function bargain() {
    window.open(whatsappHref(note("bargain")), "_blank", "noopener,noreferrer");
  }

  return (
    <div className="mx-auto max-w-4xl">
      <ol className="flex items-center gap-2" aria-label="Sell steps">
        {steps.map((label, index) => {
          const number = index + 1;
          const current = step === number;
          const done = step > number;
          return (
            <li key={label} className="flex min-w-0 flex-1 items-center gap-2">
              <span
                className={`grid size-8 shrink-0 place-items-center rounded-full text-xs font-semibold ${
                  done || current ? "bg-[#22c55e] text-white" : "bg-[#e7efe9] text-slate-500"
                }`}
              >
                {done ? <Check className="size-3.5" /> : number}
              </span>
              <span className={`hidden truncate text-sm sm:inline ${current ? "font-semibold text-[#0b1b16]" : "text-slate-500"}`}>
                {label}
              </span>
              {index < steps.length - 1 ? <span className={`h-px flex-1 ${done ? "bg-[#86efac]" : "bg-slate-200"}`} /> : null}
            </li>
          );
        })}
      </ol>
      <p className="mt-3 text-sm text-slate-600 sm:hidden">
        {step} of {steps.length} · {steps[step - 1]}
      </p>

      <div className="mt-6">
        {step === 1 ? (
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#16a34a]">What we buy</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0b1b16]">What we take in.</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Computers first, plus TVs, printers, scanners, servers, switches, and faulty cables. Accessories are not bought on their own. Working and repairable items are welcome.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {catalogue.map((entry) => (
                <li key={entry.id}>
                  <button
                    type="button"
                    className="flex h-full w-full flex-col rounded-2xl border border-slate-200 bg-[#f4fbf6] p-5 text-left hover:border-[#16a34a]/50"
                    onClick={() => {
                      patch({
                        category: entry.id,
                        charger: false,
                        condition: "",
                        powersOn: null,
                      });
                      go(2);
                    }}
                  >
                    <span className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#15803d]">Describe it</span>
                    <span className="mt-3 text-2xl font-extrabold tracking-tight text-[#0b1b16]">{entry.label}</span>
                    <span className="mt-1 text-sm text-slate-600">{entry.blurb}</span>
                    <span className="mt-4 text-sm font-medium text-[#16a34a]">Continue</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {step === 2 && item ? (
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0b1b16]">Tell us about your {item.label.toLowerCase()}</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {item.id !== "cables" ? (
                <>
                  <label className="block text-sm font-medium" htmlFor="brand">
                    Brand <span className="text-[#16a34a]">*</span>
                    <input
                      id="brand"
                      className={control}
                      placeholder="Any brand"
                      value={draft.brand}
                      onChange={(event) => patch({ brand: event.target.value })}
                    />
                  </label>
                  <label className="block text-sm font-medium" htmlFor="model">
                    Model <span className="text-[#16a34a]">*</span>
                    <input
                      id="model"
                      className={control}
                      placeholder="e.g. EliteBook 840 G5"
                      value={draft.model}
                      onChange={(event) => patch({ model: event.target.value })}
                    />
                  </label>
                </>
              ) : null}
              {item.specs ? (
                <label className="block text-sm font-medium" htmlFor="specs">
                  RAM / storage
                  <input
                    id="specs"
                    className={control}
                    placeholder="e.g. 16GB / 512GB SSD"
                    value={draft.specs}
                    onChange={(event) => patch({ specs: event.target.value })}
                  />
                  <span className="mt-1 block font-normal text-slate-600">Optional, but it helps the price.</span>
                </label>
              ) : null}
              <label className="block text-sm font-medium" htmlFor="age">
                How old is it?
                <select id="age" className={control} value={draft.age} onChange={(event) => patch({ age: event.target.value as AgeId | "" })}>
                  <option value="">Choose one</option>
                  {ages.map((age) => (
                    <option key={age.id} value={age.id}>
                      {age.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <fieldset className="mt-6">
              <legend className="text-sm font-medium">
                Condition <span className="text-[#16a34a]">*</span>
              </legend>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {conditions.map((condition) => {
                  const selected = draft.condition === condition.id;
                  return (
                    <button
                      key={condition.id}
                      type="button"
                      aria-pressed={selected}
                      className={`rounded-2xl border px-4 py-3 text-left ${
                        selected ? "border-[#16a34a] bg-[#f4fbf6]" : "border-slate-200 bg-white"
                      }`}
                      onClick={() => patch({ condition: condition.id })}
                    >
                      <span className="block text-sm font-semibold">{condition.label}</span>
                      <span className="mt-1 block text-sm text-slate-600">{condition.hint}</span>
                    </button>
                  );
                })}
              </div>
            </fieldset>

            {item.id !== "cables" ? (
              <fieldset className="mt-6">
                <legend className="text-sm font-medium">Is it working / powering on?</legend>
                <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    aria-pressed={draft.powersOn === true}
                    className={`rounded-full px-4 py-2.5 text-sm font-medium ${
                      draft.powersOn === true ? "bg-[#22c55e] text-white" : "bg-[#f4fbf6] text-[#0b1b16]"
                    }`}
                    onClick={() => patch({ powersOn: true })}
                  >
                    Yes, it works
                  </button>
                  <button
                    type="button"
                    aria-pressed={draft.powersOn === false}
                    className={`rounded-full px-4 py-2.5 text-sm font-medium ${
                      draft.powersOn === false ? "bg-[#22c55e] text-white" : "bg-[#f4fbf6] text-[#0b1b16]"
                    }`}
                    onClick={() => patch({ powersOn: false })}
                  >
                    No, it doesn’t
                  </button>
                </div>
              </fieldset>
            ) : null}

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium" htmlFor="asking">
                Your asking price (KES)
                <input
                  id="asking"
                  inputMode="numeric"
                  className={control}
                  placeholder="e.g. 8000"
                  value={draft.asking}
                  onChange={(event) => patch({ asking: event.target.value })}
                />
                <span className="mt-1 block font-normal text-slate-600">
                  Required. The team reviews this before any range is shown.
                </span>
              </label>
              <label className="block text-sm font-medium" htmlFor="notes">
                Anything else we should know?
                <input
                  id="notes"
                  className={control}
                  placeholder="e.g. cracked screen, no charger"
                  value={draft.notes}
                  onChange={(event) => patch({ notes: event.target.value })}
                />
              </label>
            </div>

            {item.charger ? (
              <label className="mt-5 flex items-center gap-3 text-sm">
                <input type="checkbox" checked={draft.charger} onChange={(event) => patch({ charger: event.target.checked })} />
                The charger or power brick is included. A missing charger does not stop us taking the item.
              </label>
            ) : null}

            {error ? <p className="mt-4 text-sm text-[#16a34a]">{error}</p> : null}
            <div className="mt-6 flex items-center justify-between gap-3">
              <Button type="button" variant="ghost" className="border-slate-200 bg-white hover:bg-[#f4fbf6]" onClick={() => go(1)}>
                Back
              </Button>
              <Button type="button" variant="green" onClick={continueFromDetails}>
                Continue
              </Button>
            </div>
          </div>
        ) : null}

        {step === 3 ? (
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0b1b16]">Show the item.</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Photos are required. They stay on this page until you send them in the WhatsApp chat. A team member reviews them before an offer is shown.
            </p>
            <label className="mt-6 block text-sm font-medium" htmlFor="photos">
              Photos of the item
              <input
                id="photos"
                type="file"
                accept="image/*"
                multiple
                className={`${control} file:mr-3 file:rounded-full file:border-0 file:bg-[#22c55e] file:px-3 file:py-1.5 file:text-xs file:text-white`}
                onChange={(event) => replacePhotos(Array.from(event.target.files ?? []).slice(0, 6))}
              />
            </label>
            {previews.length > 0 ? (
              <ul className="mt-4 grid grid-cols-3 gap-2">
                {previews.map((url, index) => (
                  <li key={url} className="overflow-hidden rounded-xl bg-[#f4fbf6]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={url} alt="" className="aspect-square w-full object-cover" />
                    <p className="truncate px-2 py-1 text-xs">{draft.photos[index]?.name}</p>
                  </li>
                ))}
              </ul>
            ) : null}
            <fieldset className="mt-6 grid gap-2 text-sm">
              <legend className="font-medium">Do you have the receipt?</legend>
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="receipt"
                  checked={draft.hasReceipt === "yes"}
                  onChange={() => patch({ hasReceipt: "yes", bringId: false })}
                />
                Yes. I will send a photo of it.
              </label>
              <label className="flex items-center gap-3">
                <input type="radio" name="receipt" checked={draft.hasReceipt === "no"} onChange={() => patch({ hasReceipt: "no" })} />
                No. I have other proof of ownership, or I will sign a written agreement.
              </label>
            </fieldset>
            {error ? <p className="mt-4 text-sm text-[#16a34a]">{error}</p> : null}
            <div className="mt-6 flex items-center justify-between gap-3">
              <Button type="button" variant="ghost" className="border-slate-200 bg-white hover:bg-[#f4fbf6]" onClick={() => go(2)}>
                Back
              </Button>
              <Button type="button" variant="green" onClick={continueFromPhotos}>
                Continue
              </Button>
            </div>
          </div>
        ) : null}

        {step === 4 ? (
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0b1b16]">Who should we reply to?</h2>
            <div className="mt-6 grid gap-5">
              <label className="flex items-start gap-3 text-sm">
                <input
                  type="checkbox"
                  className="mt-1"
                  checked={draft.bringId}
                  onChange={(event) => patch({ bringId: event.target.checked })}
                />
                I will bring the item, my National ID, and the box if I still have it. Stolen goods are not accepted.
              </label>
              <label className="block text-sm font-medium" htmlFor="seller">
                Your name
                <input id="seller" className={control} value={draft.name} onChange={(event) => patch({ name: event.target.value })} />
              </label>
              <label className="block text-sm font-medium" htmlFor="email">
                Email
                <input
                  id="email"
                  type="email"
                  className={control}
                  value={draft.email}
                  onChange={(event) => patch({ email: event.target.value })}
                />
              </label>
              <label className="block text-sm font-medium" htmlFor="phone">
                WhatsApp number
                <input
                  id="phone"
                  type="tel"
                  className={control}
                  placeholder="07XX XXX XXX"
                  value={draft.phone}
                  onChange={(event) => patch({ phone: event.target.value })}
                />
              </label>
              <label className="block text-sm font-medium" htmlFor="town">
                Town
                <input
                  id="town"
                  className={control}
                  placeholder="Juja, Nairobi, or a nearby town"
                  value={draft.town}
                  onChange={(event) => patch({ town: event.target.value })}
                />
              </label>
              <fieldset>
                <legend className="text-sm font-medium">After the offer</legend>
                <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    aria-pressed={draft.handover === "bring"}
                    className={`rounded-full px-4 py-2.5 text-sm font-medium ${
                      draft.handover === "bring" ? "bg-[#22c55e] text-white" : "bg-[#f4fbf6] text-[#0b1b16]"
                    }`}
                    onClick={() => patch({ handover: "bring" })}
                  >
                    I will bring it
                  </button>
                  <button
                    type="button"
                    aria-pressed={draft.handover === "collect"}
                    className={`rounded-full px-4 py-2.5 text-sm font-medium ${
                      draft.handover === "collect" ? "bg-[#22c55e] text-white" : "bg-[#f4fbf6] text-[#0b1b16]"
                    }`}
                    onClick={() => patch({ handover: "collect" })}
                  >
                    Please collect it
                  </button>
                </div>
              </fieldset>
            </div>
            {error ? <p className="mt-4 text-sm text-[#16a34a]">{error}</p> : null}
            <div className="mt-6 flex items-center justify-between gap-3">
              <Button type="button" variant="ghost" className="border-slate-200 bg-white hover:bg-[#f4fbf6]" onClick={() => go(3)}>
                Back
              </Button>
              <Button type="button" variant="green" onClick={continueFromInfo}>
                Review
              </Button>
            </div>
          </div>
        ) : null}

        {step === 5 ? (
          <div>
            {answer === "cancelled" ? (
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-[#0b1b16]">This request is cancelled.</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">Nothing is collected. You can start another description whenever you want.</p>
                <div className="mt-6">
                  <Button
                    type="button"
                    variant="green"
                    onClick={() => {
                      replacePhotos([]);
                      setDraft(empty);
                      setAnswer("idle");
                      setReference("");
                      go(1);
                    }}
                  >
                    Start again
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#16a34a]">For the team to review</p>
                <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-[#0b1b16]">No price is shown yet.</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Reference {reference}. A Josachi team reviews the photos before an offer is shown. The offer is a
                  range, about 20–30% depending on condition, and it is confirmed after inspection. It is an estimate,
                  it can change, and it does not expire. Payment is after inspection, in cash, M-Pesa, or by bank.
                  You asked for {formatKes(Number(draft.asking.replace(/\D/g, "")))}.
                </p>
                {answer === "accepted" ? (
                  <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#16a34a] px-4 py-2 text-sm font-medium text-white">
                    <Check />
                    Sent. WhatsApp is open with your details. Add the photos in that chat.
                  </p>
                ) : (
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <Button type="button" variant="green" onClick={accept}>
                      Send for review
                    </Button>
                    <Button type="button" variant="ghost" className="border-slate-200 bg-white hover:bg-[#f4fbf6]" onClick={bargain}>
                      Bargain on WhatsApp
                    </Button>
                    <Button type="button" variant="ghost" className="border-slate-200 bg-white hover:bg-[#f4fbf6]" onClick={() => setAnswer("cancelled")}>
                      Cancel
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        ) : null}
      </div>

      <p className="mt-5 text-center text-sm text-slate-600">
        Prefer to talk first?{" "}
        <a href={whatsappHref(messages.sell)} target="_blank" rel="noopener noreferrer" className="font-medium text-[#15803d] underline underline-offset-4">
          Message us on WhatsApp
        </a>{" "}
        or{" "}
        <Link href="/contact" className="font-medium text-[#15803d] underline underline-offset-4">
          visit us in Juja
        </Link>
        .
      </p>
    </div>
  );
}
