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
  mode?: Mode;
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
    cardBorder: "border-zinc-800/95",
    cardBg: "bg-[linear-gradient(180deg,rgba(12,10,14,0.985),rgba(9,8,12,0.995))]",
    cardGlow:
      "bg-[radial-gradient(ellipse_at_top,rgba(190,24,93,0.05),transparent_34%),radial-gradient(ellipse_at_top,rgba(127,29,29,0.03),transparent_48%)]",
    cardAtmosphere:
      "bg-[linear-gradient(to_right,rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)]",
    railSegment:
      "bg-[repeating-linear-gradient(to_bottom,rgba(161,161,170,0.24)_0px,rgba(161,161,170,0.24)_10px,transparent_10px,transparent_16px)]",
    arrow: "text-zinc-500",
    arrowBorder: "border-zinc-700/70",
    arrowBg: "bg-zinc-900/95",
    arrowGlow: "",
    nodeBorder: "border-zinc-700/85",
    nodeBg: "bg-[linear-gradient(180deg,rgba(20,14,18,0.96),rgba(12,10,14,0.985))]",
    nodeText: "text-zinc-100",
    nodeGlow: "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.012)]",
    detailBorder: "border-zinc-700/85",
    detailBg: "bg-[linear-gradient(180deg,rgba(24,12,16,0.96),rgba(14,9,12,0.985))]",
    detailTitle: "text-red-100",
    detailBody: "text-red-100/90",
    detailGlow: "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.015)]",
    heroBorder: "border-zinc-700/90",
    heroBg: "bg-[linear-gradient(180deg,rgba(22,11,14,0.97),rgba(13,8,10,0.99))]",
    heroTitle: "text-red-100",
    heroBody: "text-red-100/90",
    heroGlow: "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.018)]",
    stateBorder: "border-[rgba(200,60,60,0.35)]",
    stateBg: "bg-[rgba(120,20,30,0.35)]",
    stateTitle: "text-red-100",
    stateSupport: "text-red-100/85 font-medium",
  },
  solution: {
    cardBorder: "border-zinc-800/95",
    cardBg: "bg-[linear-gradient(180deg,rgba(11,13,18,0.985),rgba(8,10,14,0.995))]",
    cardGlow:
      "bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.05),transparent_34%),radial-gradient(ellipse_at_top,rgba(20,184,166,0.028),transparent_48%)]",
    cardAtmosphere:
      "bg-[linear-gradient(to_right,rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)]",
    railSegment:
      "bg-[repeating-linear-gradient(to_bottom,rgba(148,163,184,0.24)_0px,rgba(148,163,184,0.24)_10px,transparent_10px,transparent_16px)]",
    arrow: "text-cyan-100/78",
    arrowBorder: "border-zinc-700/80",
    arrowBg: "bg-[linear-gradient(180deg,rgba(17,20,27,0.98),rgba(10,12,18,0.99))]",
    arrowGlow: "",
    nodeBorder: "border-zinc-700/85",
    nodeBg: "bg-[linear-gradient(180deg,rgba(16,19,27,0.96),rgba(11,13,19,0.985))]",
    nodeText: "text-zinc-100",
    nodeGlow: "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.012)]",
    detailBorder: "border-zinc-700/85",
    detailBg: "bg-[linear-gradient(180deg,rgba(13,17,23,0.96),rgba(9,12,17,0.985))]",
    detailTitle: "text-zinc-100",
    detailBody: "text-zinc-300",
    detailGlow: "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.015)]",
    heroBorder: "border-zinc-700/90",
    heroBg: "bg-[linear-gradient(180deg,rgba(12,18,22,0.97),rgba(9,12,16,0.99))]",
    heroTitle: "text-zinc-100",
    heroBody: "text-zinc-300",
    heroGlow: "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.018)]",
    stateBorder: "border-zinc-700/85",
    stateBg: "bg-[rgba(10,14,18,0.92)]",
    stateTitle: "text-zinc-100",
    stateSupport: "text-zinc-300",
  },
};

export function FlowCard({ mode, title, sectionLabel, children }: FlowCardProps) {
  const colors = modeClasses[mode];

  return (
    <div
      className={`relative min-w-0 overflow-hidden rounded-2xl border p-5 font-mono shadow-[inset_0_0_0_1px_rgba(255,255,255,0.015)] sm:p-6 md:p-8 ${colors.cardBorder} ${colors.cardBg}`}
    >
      {mode === "solution" || mode === "problem" ? (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[28%] overflow-hidden">
          <div className={`absolute inset-0 ${colors.cardGlow}`} />
          <div
            className={`absolute inset-x-[10%] top-[-18%] h-28 rounded-full blur-3xl ${
              mode === "solution" ? "bg-cyan-300/5" : "bg-rose-400/6"
            }`}
          />
        </div>
      ) : (
        <div className={`pointer-events-none absolute inset-0 ${colors.cardGlow}`} />
      )}
      <div className={`pointer-events-none absolute inset-0 bg-[size:34px_34px] opacity-14 ${colors.cardAtmosphere}`} />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.14))]" />
      <div className="relative">
        <h3 className="text-center text-sm font-medium uppercase tracking-[0.16em] text-zinc-200 md:text-base">{title}</h3>
        {sectionLabel ? (
          <p className="mt-6 text-center text-[10px] uppercase tracking-[0.26em] text-zinc-500 md:text-xs">{sectionLabel}</p>
        ) : null}

        <div className="relative mt-8 flex flex-col items-center gap-6 md:mt-10 md:gap-7">{children}</div>
      </div>
    </div>
  );
}

export function RailConnector({ mode }: { mode: Mode }) {
  const colors = modeClasses[mode];

  return (
    <div className="relative z-10 flex flex-col items-center">
      <div className={`h-4 w-px ${colors.railSegment}`} />
      <motion.div
        className={`grid h-8 w-8 place-items-center rounded-full border text-lg ${colors.arrowBorder} ${colors.arrowBg} ${colors.arrow} ${colors.arrowGlow}`}
        animate={{ y: [0, 2, 0], opacity: [0.72, 1, 0.72] }}
        transition={{ duration: 3.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        ↓
      </motion.div>
      <div className={`h-4 w-px ${colors.railSegment}`} />
    </div>
  );
}

export function NodeBox({ mode = "problem", children, className }: NodeBoxProps) {
  const colors = modeClasses[mode];

  return (
    <div
      className={`relative z-10 w-full max-w-[14rem] rounded-lg border px-5 py-3 text-center text-sm font-medium md:text-[15px] ${colors.nodeBorder} ${colors.nodeBg} ${colors.nodeText} ${colors.nodeGlow} ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

export function DetailPanel({ mode, title, bullets, className }: DetailPanelProps) {
  const colors = modeClasses[mode];

  return (
    <div
      className={`relative z-10 w-full max-w-[26rem] rounded-xl border px-5 py-5 md:px-6 md:py-6 ${colors.detailBorder} ${colors.detailBg} ${colors.detailGlow} ${className ?? ""}`}
    >
      {mode === "solution" ? (
        <div className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_50%_24%,rgba(34,211,238,0.025),transparent_44%)]" />
      ) : null}
      <div className="relative">
        <p className={`text-sm font-semibold md:text-[15px] ${colors.detailTitle}`}>{title}</p>
        <ul className={`mt-3 space-y-2 text-sm leading-relaxed md:text-[13px] ${colors.detailBody}`}>
          {bullets.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function HeroOutcomeBox({ mode, title, lines, className }: HeroOutcomeBoxProps) {
  const colors = modeClasses[mode];

  return (
    <div
      className={`relative z-10 w-full max-w-[23rem] rounded-xl border px-5 py-5 md:px-6 md:py-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] ${colors.heroBorder} ${colors.heroBg} ${colors.heroGlow} ${className ?? ""}`}
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
