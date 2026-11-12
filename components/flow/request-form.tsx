"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { whatsappHref } from "@/lib/site";

export type RequestField = {
  name: string;
  label: string;
  type: "text" | "tel" | "email" | "textarea" | "select";
  required?: boolean;
  half?: boolean;
  options?: readonly { value: string; label: string }[];
  placeholder?: string;
};

const control =
  "mt-2 w-full rounded-2xl border border-ink/15 bg-paper px-4 py-3 text-sm text-ink outline-none focus:border-copper";

const homeControl =
  "mt-2 w-full rounded-2xl border border-slate-200 bg-[#f4fbf6] px-4 py-3 text-sm text-[#0b1b16] outline-none placeholder:text-slate-400 focus:border-[#16a34a]";

export function RequestForm({
  fields,
  submitLabel,
  doneTitle,
  doneText,
  buildMessage,
  tone = "desk",
}: {
  fields: readonly RequestField[];
  submitLabel: string;
  doneTitle: string;
  doneText: string;
  buildMessage: (values: Record<string, string>) => string;
  tone?: "desk" | "home";
}) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState<string | null>(null);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};
    for (const field of fields) {
      const value = (values[field.name] ?? "").trim();
      if (field.required && !value) nextErrors[field.name] = "Add this before you continue.";
      if (field.type === "tel" && value && value.replace(/\D/g, "").length < 9) {
        nextErrors[field.name] = "Enter a phone number the desk can message.";
      }
      if (field.type === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        nextErrors[field.name] = "Enter an email address.";
      }
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setMessage(buildMessage(values));
  }

  if (message) {
    return (
      <div>
        <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${tone === "home" ? "text-[#16a34a]" : "text-copper"}`}>Ready to send</p>
        <h2 className="mt-3 font-serif text-3xl tracking-[-0.03em]">{doneTitle}</h2>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">{doneText}</p>
        <pre className="mt-6 overflow-x-auto rounded-2xl bg-paper p-4 text-sm leading-relaxed whitespace-pre-wrap text-ink">
          {message}
        </pre>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button href={whatsappHref(message)} external variant={tone === "home" ? "green" : "copper"}>
            Send on WhatsApp
          </Button>
          <Button variant="ghost" onClick={() => setMessage(null)}>
            Edit the note
          </Button>
        </div>
      </div>
    );
  }

  const fieldClass = tone === "home" ? homeControl : control;
  const rows: RequestField[][] = [];
  for (const field of fields) {
    const last = rows.at(-1);
    if (field.half && last?.length === 1 && last[0].half) last.push(field);
    else rows.push([field]);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      {rows.map((row) => (
        <div key={row.map((field) => field.name).join("-")} className={row.length > 1 ? "grid gap-5 sm:grid-cols-2" : undefined}>
          {row.map((field) => {
            const value = values[field.name] ?? "";
            const error = errors[field.name];
            const id = `field-${field.name}`;
            return (
              <label key={field.name} htmlFor={id} className={`block text-sm font-medium ${tone === "home" ? "text-[#0b1b16]" : "text-ink"}`}>
                {field.label}
                {field.type === "textarea" ? (
                  <textarea
                    id={id}
                    value={value}
                    rows={4}
                    placeholder={field.placeholder}
                    aria-invalid={Boolean(error)}
                    className={fieldClass}
                    onChange={(event) => setValues((current) => ({ ...current, [field.name]: event.target.value }))}
                  />
                ) : field.type === "select" ? (
                  <select
                    id={id}
                    value={value}
                    aria-invalid={Boolean(error)}
                    className={fieldClass}
                    onChange={(event) => setValues((current) => ({ ...current, [field.name]: event.target.value }))}
                  >
                    <option value="">Choose one</option>
                    {field.options?.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    id={id}
                    type={field.type}
                    value={value}
                    placeholder={field.placeholder}
                    aria-invalid={Boolean(error)}
                    className={fieldClass}
                    onChange={(event) => setValues((current) => ({ ...current, [field.name]: event.target.value }))}
                  />
                )}
                {error ? <span className={`mt-1 block text-sm font-normal ${tone === "home" ? "text-[#16a34a]" : "text-copper"}`}>{error}</span> : null}
              </label>
            );
          })}
        </div>
      ))}
      <div>
        <Button type="submit" variant={tone === "home" ? "green" : "copper"}>{submitLabel}</Button>
      </div>
    </form>
  );
}
