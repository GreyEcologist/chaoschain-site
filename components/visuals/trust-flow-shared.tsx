"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Mode = "problem" | "solution";

type FlowCardProps = {
  mode: Mode;
  title: string;
  sectionLabel?: string;
  children: ReactNode;
};

type NodeBoxProps = {
  children: ReactNode;
  className?: string;
};

type DetailPanelProps = {
  mode: Mode;
  title: string;
  bullets: string[];
  className?: string;
};

type HeroOutcomeBoxProps = {
  mode: Mode;
  title: string;
  lines: string[];
  className?: string;
};

type StateBannerProps = {
  mode: Mode;
  title: string;
  support: string;
};

const modeClasses = {
  problem: {
    cardBorder: "border-zinc-800/90",
    cardBg: "bg-[radial-gradient(circle_at_50%_0%,rgba(42,12,18,0.16),rgba(7,10,18,0.95)_45%)]",
    rail: "bg-[repeating-linear-gradient(to_bottom,rgba(113,113,122,0.42)_0px,rgba(113,113,122,0.42)_10px,transparent_10px,transparent_20px)]",
    arrow: "text-zinc-500",
    detailBorder: "border-red-900/60",
    detailBg: "bg-red-950/25",
    detailTitle: "text-red-100",
    detailBody: "text-red-100/90",
    heroBorder: "border-red-900/70",
    heroBg: "bg-red-950/35",
    heroTitle: "text-red-100",
    heroBody: "text-red-100/90",
    stateBorder: "border-[rgba(200,60,60,0.35)]",
    stateBg: "bg-[rgba(120,20,30,0.35)]",
    stateTitle: "text-red-100",
    stateSupport: "text-red-100/85 font-medium",
  },
  solution: {
    cardBorder: "border-zinc-700/90",
    cardBg: "bg-[radial-gradient(circle_at_50%_0%,rgba(18,46,58,0.18),rgba(7,10,18,0.95)_44%)]",
    rail: "bg-[repeating-linear-gradient(to_bottom,rgba(113,113,122,0.52)_0px,rgba(113,113,122,0.52)_14px,transparent_14px,transparent_24px)]",
    arrow: "text-cyan-200/75",
    detailBorder: "border-cyan-700/60",
    detailBg: "bg-cyan-950/25",
    detailTitle: "text-cyan-100",
    detailBody: "text-cyan-100/90",
    heroBorder: "border-emerald-600/60",
    heroBg: "bg-emerald-950/35",
    heroTitle: "text-emerald-100",
    heroBody: "text-emerald-100/90",
    stateBorder: "border-emerald-700/70",
    stateBg: "bg-emerald-950/40",
    stateTitle: "text-emerald-100",
    stateSupport: "text-emerald-100/85",
  },
};

export function FlowCard({ mode, title, sectionLabel, children }: FlowCardProps) {
  const colors = modeClasses[mode];

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border p-7 font-mono shadow-[inset_0_0_0_1px_rgba(255,255,255,0.015)] md:p-8 ${colors.cardBorder} ${colors.cardBg}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.03),transparent_48%)]" />
      <div className="relative">
        <h3 className="text-center text-sm font-medium uppercase tracking-[0.16em] text-zinc-200 md:text-base">{title}</h3>
        {sectionLabel ? (
          <p className="mt-6 text-center text-[10px] uppercase tracking-[0.26em] text-zinc-500 md:text-xs">{sectionLabel}</p>
        ) : null}

        <div className="relative mt-8 flex flex-col items-center gap-6 md:mt-10 md:gap-7">
          <div className={`pointer-events-none absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 ${colors.rail}`} />
          {children}
        </div>
      </div>
    </div>
  );
}

export function RailConnector({ mode }: { mode: Mode }) {
  const colors = modeClasses[mode];

  return (
    <motion.div
      className={`relative z-10 grid h-8 w-8 place-items-center rounded-full border border-zinc-700/70 bg-zinc-900/95 text-lg ${colors.arrow}`}
      animate={{ y: [0, 2, 0], opacity: [0.72, 1, 0.72] }}
      transition={{ duration: 3.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
    >
      ↓
    </motion.div>
  );
}

export function NodeBox({ children, className }: NodeBoxProps) {
  return (
    <div
      className={`relative z-10 w-full max-w-[14rem] rounded-lg border border-zinc-700/80 bg-zinc-900/90 px-5 py-3 text-center text-sm font-medium text-zinc-100 md:text-[15px] ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

export function DetailPanel({ mode, title, bullets, className }: DetailPanelProps) {
  const colors = modeClasses[mode];

  return (
    <div
      className={`relative z-10 w-full max-w-[26rem] rounded-xl border px-5 py-5 md:px-6 md:py-6 ${colors.detailBorder} ${colors.detailBg} ${className ?? ""}`}
    >
      <p className={`text-sm font-semibold md:text-[15px] ${colors.detailTitle}`}>{title}</p>
      <ul className={`mt-3 space-y-2 text-sm leading-relaxed md:text-[13px] ${colors.detailBody}`}>
        {bullets.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

export function HeroOutcomeBox({ mode, title, lines, className }: HeroOutcomeBoxProps) {
  const colors = modeClasses[mode];

  return (
    <div
      className={`relative z-10 w-full max-w-[23rem] rounded-xl border px-5 py-5 md:px-6 md:py-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] ${colors.heroBorder} ${colors.heroBg} ${className ?? ""}`}
    >
      <p className={`text-sm font-semibold md:text-[15px] ${colors.heroTitle}`}>{title}</p>
      <ul className={`mt-3 space-y-2 text-sm leading-relaxed md:text-[13px] ${colors.heroBody}`}>
        {lines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </div>
  );
}

export function StateBanner({ mode, title, support }: StateBannerProps) {
  const colors = modeClasses[mode];

  return (
    <div
      className={`relative z-10 w-full max-w-[30rem] rounded-xl border px-5 py-5 text-center shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] md:px-6 md:py-6 ${colors.stateBorder} ${colors.stateBg}`}
    >
      <p className={`text-base font-semibold md:text-lg ${colors.stateTitle}`}>{title}</p>
      <p className={`mt-2 text-sm leading-relaxed md:text-[15px] ${colors.stateSupport}`}>{support}</p>
    </div>
  );
}
