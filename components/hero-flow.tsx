"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import Image from "next/image";

const steps = [
  {
    id: "bin",
    kicker: "1 · Bin",
    title: "Boards fall in",
    image: "/hero-ewaste.jpg",
    imageAlt: "Motherboards falling onto a pile of old computers",
  },
  {
    id: "sort",
    kicker: "2 · Sort",
    title: "What can still be used",
    image: "/impact/impact-environment.jpg",
    imageAlt: "A board being sorted into a labeled e-waste bin",
  },
  {
    id: "recycle",
    kicker: "3 · Recycle",
    title: "Can it be rebuilt?",
    image: "/home-impact.jpg",
    imageAlt: "A student smiling at a laptop in class",
  },
] as const;

const boards = [
  { src: "/drops/drop-0.png", delay: "0s", shift: "18%" },
  { src: "/drops/drop-1.png", delay: "1.25s", shift: "46%" },
  { src: "/drops/drop-2.png", delay: "2.5s", shift: "72%" },
] as const;

const HeroStepContext = createContext<{
  step: number;
  setStep: (step: number) => void;
} | null>(null);

export function HeroStage({ children }: { children: ReactNode }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setStep((value) => (value + 1) % steps.length);
    }, 4600);
    return () => window.clearInterval(timer);
  }, [step]);

  const current = steps[step];

  return (
    <HeroStepContext.Provider value={{ step, setStep }}>
      <div className="pointer-events-none absolute inset-0">
        {steps.map((item, index) => (
          <Image
            key={item.id}
            src={item.image}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className={`object-cover object-center transition-opacity duration-700 ${index === step ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050807] from-0% via-[#050807]/78 via-[38%] to-[#050807]/35" />
      </div>
      <p className="sr-only" aria-live="polite">
        {current.kicker}. {current.title}
      </p>
      {children}
    </HeroStepContext.Provider>
  );
}

export function HeroFlow() {
  const context = useContext(HeroStepContext);
  const step = context?.step ?? 0;
  const setStep = context?.setStep ?? (() => {});
  const current = steps[step];

  return (
    <figure
      data-no-rise
      className="relative w-full justify-self-end rounded-[1.6rem] border border-white/15 bg-[#071a12]/92 p-3 text-white shadow-[0_24px_60px_-28px_rgba(0,0,0,0.7)] sm:p-4"
      aria-label="How a motherboard becomes a classroom laptop"
    >
      <div className="relative overflow-hidden rounded-2xl">
        <div className="relative aspect-[16/8]">
          <Image
            src={current.image}
            alt={current.imageAlt}
            fill
            className="object-cover object-center"
            sizes="420px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071a12] via-[#071a12]/25 to-transparent" />
          <p className="absolute inset-x-3 bottom-3 text-sm font-bold leading-snug">
            {step === 2 ? "A school receives the laptops" : current.title}
          </p>
        </div>
      </div>

      <div className={`mt-2 flex items-center gap-3 rounded-2xl px-3 py-2 ring-1 transition ${step === 2 ? "bg-[#22c55e]/15 ring-[#22c55e]/50" : "bg-white/6 ring-white/10"}`}>
        <span className="flow-rise grid size-8 shrink-0 place-items-center rounded-full bg-[#22c55e] text-sm font-bold" aria-hidden="true">
          ↑
        </span>
        <div className="min-w-0">
          <p className="text-[10px] font-bold tracking-[0.16em] text-[#86efac] uppercase">Yes</p>
          <p className="text-sm font-semibold leading-snug">Rebuilt into working PCs</p>
        </div>
        <div className="relative ml-auto h-11 w-[4.5rem] shrink-0 overflow-hidden rounded-lg">
          <Image src="/home3-laptop.jpg" alt="" fill className="object-cover" sizes="80px" />
        </div>
      </div>

      <ol className="mt-3 grid grid-cols-[minmax(0,1.15fr)_auto_minmax(0,0.85fr)_auto_minmax(0,1fr)] items-stretch gap-1.5">
        <li>
          <button
            type="button"
            onClick={() => setStep(0)}
            aria-current={step === 0 ? "step" : undefined}
            className={`relative flex h-full w-full flex-col justify-end rounded-2xl p-2 text-left ring-1 transition ${step === 0 ? "bg-[#22c55e]/18 ring-[#86efac]" : "bg-white/6 ring-white/10 hover:bg-white/10"}`}
          >
            <div className="relative mb-1 h-14" aria-hidden="true">
              {boards.map((board) => (
                <span
                  key={board.src}
                  className="board-drop absolute top-0 w-9"
                  style={{ left: board.shift, animationDelay: board.delay }}
                >
                  <Image src={board.src} alt="" width={72} height={48} className="h-auto w-full" />
                </span>
              ))}
              <svg viewBox="0 0 80 46" className="absolute inset-x-2 bottom-0 h-9 w-[calc(100%-1rem)]" aria-hidden="true">
                <path d="M8 8h64l-8 34H16L8 8Z" fill="#14532d" stroke="#86efac" strokeWidth="2" />
                <path d="M4 8h72" stroke="#86efac" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <p className="text-[10px] font-bold tracking-[0.12em] text-[#86efac] uppercase">{steps[0].kicker}</p>
            <p className="text-xs font-semibold leading-tight">{steps[0].title}</p>
          </button>
        </li>
        <li className="flex items-center text-[#86efac]" aria-hidden="true">
          →
        </li>
        <li>
          <button
            type="button"
            onClick={() => setStep(1)}
            aria-current={step === 1 ? "step" : undefined}
            className={`flex h-full w-full flex-col justify-end rounded-2xl p-2 text-left ring-1 transition ${step === 1 ? "bg-[#22c55e]/18 ring-[#86efac]" : "bg-white/6 ring-white/10 hover:bg-white/10"}`}
          >
            <p className="text-[10px] font-bold tracking-[0.12em] text-[#86efac] uppercase">{steps[1].kicker}</p>
            <p className="mt-1 text-xs font-semibold leading-tight">{steps[1].title}</p>
          </button>
        </li>
        <li className="flex items-center text-[#86efac]" aria-hidden="true">
          →
        </li>
        <li>
          <button
            type="button"
            onClick={() => setStep(2)}
            aria-current={step === 2 ? "step" : undefined}
            className={`flex h-full w-full flex-col justify-end rounded-2xl p-2 text-left ring-1 transition ${step === 2 ? "bg-[#22c55e]/18 ring-[#86efac]" : "bg-white/6 ring-white/10 hover:bg-white/10"}`}
          >
            <p className="text-[10px] font-bold tracking-[0.12em] text-[#86efac] uppercase">{steps[2].kicker}</p>
            <p className="mt-1 text-xs font-semibold leading-tight">{steps[2].title}</p>
          </button>
        </li>
      </ol>

      <div className="mt-2 flex justify-end">
        <p className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${step === 2 ? "border-[#fecaca]/40 bg-[#3f1d1d]/80 text-[#fecaca]" : "border-white/10 bg-white/5 text-white/55"}`}>
          No → Dispose
        </p>
      </div>
    </figure>
  );
}
