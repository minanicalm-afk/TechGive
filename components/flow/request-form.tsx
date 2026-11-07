"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { whatsappHref } from "@/lib/site";

export type RequestField = {
  name: string;
  label: string;
  type: "text" | "tel" | "textarea" | "select";
  required?: boolean;
  options?: readonly { value: string; label: string }[];
  placeholder?: string;
};

const control =
  "mt-2 w-full rounded-2xl border border-ink/15 bg-paper px-4 py-3 text-sm text-ink outline-none focus:border-copper";

export function RequestForm({
  fields,
  submitLabel,
  doneTitle,
  doneText,
  buildMessage,
}: {
  fields: readonly RequestField[];
  submitLabel: string;
  doneTitle: string;
  doneText: string;
  buildMessage: (values: Record<string, string>) => string;
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
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setMessage(buildMessage(values));
  }

  if (message) {
    return (
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">Ready to send</p>
        <h2 className="mt-3 font-serif text-3xl tracking-[-0.03em]">{doneTitle}</h2>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">{doneText}</p>
        <pre className="mt-6 overflow-x-auto rounded-2xl bg-paper p-4 text-sm leading-relaxed whitespace-pre-wrap text-ink">
          {message}
        </pre>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button href={whatsappHref(message)} external>
            Send on WhatsApp
          </Button>
          <Button variant="ghost" onClick={() => setMessage(null)}>
            Edit the note
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      {fields.map((field) => {
        const value = values[field.name] ?? "";
        const error = errors[field.name];
        const id = `field-${field.name}`;
        return (
          <label key={field.name} htmlFor={id} className="block text-sm font-medium text-ink">
            {field.label}
            {field.type === "textarea" ? (
              <textarea
                id={id}
                value={value}
                rows={4}
                placeholder={field.placeholder}
                aria-invalid={Boolean(error)}
                className={control}
                onChange={(event) => setValues((current) => ({ ...current, [field.name]: event.target.value }))}
              />
            ) : field.type === "select" ? (
              <select
                id={id}
                value={value}
                aria-invalid={Boolean(error)}
                className={control}
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
                className={control}
                onChange={(event) => setValues((current) => ({ ...current, [field.name]: event.target.value }))}
              />
            )}
            {error ? <span className="mt-1 block text-sm font-normal text-copper">{error}</span> : null}
          </label>
        );
      })}
      <div>
        <Button type="submit">{submitLabel}</Button>
      </div>
    </form>
  );
}
