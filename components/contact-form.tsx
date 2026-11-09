"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { whatsappHref } from "@/lib/site";

const subjects = [
  "Dispose",
  "Donate",
  "Upgrade",
  "Gains for a good cause",
] as const;

export function ContactForm({ tone = "desk" }: { tone?: "desk" | "home4" }) {
  const home = tone === "home4";
  const control = home
    ? "mt-2 w-full rounded-2xl border border-slate-200 bg-[#f4fbf6] px-4 py-3 text-sm text-[#0c2340] outline-none placeholder:text-slate-400 focus:border-[#16a34a]"
    : "mt-2 w-full rounded-2xl border border-ink/10 bg-paper px-4 py-3 text-sm text-ink outline-none placeholder:text-ink-soft/70 focus:border-copper";
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState<string>(subjects[0]);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [note, setNote] = useState<string | null>(null);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (name.trim().length < 2) next.name = "Add your name before you continue.";
    if (phone.replace(/\D/g, "").length < 9) next.phone = "Enter a phone number the desk can message.";
    if (!subject) next.subject = "Choose a subject.";
    if (message.trim().length < 4) next.message = "Tell us what you have, or what you need.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setNote(
      [
        "Hello Josachi,",
        "",
        `Name: ${name.trim()}`,
        `Phone: ${phone.trim()}`,
        `Subject: ${subject}`,
        `Message: ${message.trim()}`,
      ].join("\n"),
    );
  }

  if (note) {
    return (
      <div>
        <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${home ? "text-[#16a34a]" : "text-copper"}`}>Ready to send</p>
        <h2 className={`mt-3 text-3xl tracking-[-0.03em] ${home ? "font-extrabold text-[#0c2340]" : "font-serif"}`}>The message is ready.</h2>
        <p className={`mt-3 text-sm leading-relaxed ${home ? "text-slate-600" : "text-ink-soft"}`}>
          Send it on WhatsApp. The desk replies there, usually within minutes during opening hours.
        </p>
        <pre className={`mt-6 overflow-x-auto rounded-2xl p-4 text-sm leading-relaxed whitespace-pre-wrap ${home ? "bg-[#f4fbf6] text-[#0c2340]" : "bg-paper text-ink"}`}>
          {note}
        </pre>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button href={whatsappHref(note)} external>
            Send on WhatsApp
          </Button>
          <Button variant="ghost" onClick={() => setNote(null)}>
            Edit the message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <h2 className={`text-3xl tracking-[-0.03em] ${home ? "font-extrabold text-[#0c2340]" : "font-serif"}`}>Send us a message</h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium" htmlFor="contact-name">
          Your name <span className={home ? "text-[#16a34a]" : "text-copper"}>*</span>
          <input
            id="contact-name"
            value={name}
            placeholder="Full name"
            aria-invalid={Boolean(errors.name)}
            className={control}
            onChange={(event) => setName(event.target.value)}
          />
          {errors.name ? <span className={`mt-1 block font-normal ${home ? "text-[#b45309]" : "text-copper"}`}>{errors.name}</span> : null}
        </label>
        <label className="block text-sm font-medium" htmlFor="contact-phone">
          Phone / WhatsApp <span className={home ? "text-[#16a34a]" : "text-copper"}>*</span>
          <input
            id="contact-phone"
            type="tel"
            value={phone}
            placeholder="07XX XXX XXX"
            aria-invalid={Boolean(errors.phone)}
            className={control}
            onChange={(event) => setPhone(event.target.value)}
          />
          {errors.phone ? <span className={`mt-1 block font-normal ${home ? "text-[#b45309]" : "text-copper"}`}>{errors.phone}</span> : null}
        </label>
      </div>
      <label className="mt-5 block text-sm font-medium" htmlFor="contact-subject">
        Subject
        <select
          id="contact-subject"
          value={subject}
          className={control}
          onChange={(event) => setSubject(event.target.value)}
        >
          {subjects.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
      <label className="mt-5 block text-sm font-medium" htmlFor="contact-message">
        Message <span className={home ? "text-[#16a34a]" : "text-copper"}>*</span>
        <textarea
          id="contact-message"
          value={message}
          rows={5}
          placeholder="Tell us what you have or what you’d like to know…"
          aria-invalid={Boolean(errors.message)}
          className={control}
          onChange={(event) => setMessage(event.target.value)}
        />
        {errors.message ? <span className={`mt-1 block font-normal ${home ? "text-[#b45309]" : "text-copper"}`}>{errors.message}</span> : null}
      </label>
      <button
        type="submit"
        className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-5 py-3.5 text-sm ${home ? "bg-[#123d2b] font-semibold text-white hover:bg-[#0c2e20]" : "bg-moss font-medium text-cream hover:bg-ink"}`}
      >
        Send message
      </button>
      <p className={`mt-4 text-sm leading-relaxed ${home ? "text-slate-600" : "text-ink-soft"}`}>
        For the fastest reply, use the WhatsApp button. We usually respond within minutes during opening hours.
      </p>
    </form>
  );
}
