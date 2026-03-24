"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function AccountabilityFlowVisual() {
  return (
    <div className="relative min-w-0 overflow-hidden rounded-2xl border border-zinc-800/95 bg-[linear-gradient(180deg,rgba(11,13,18,0.985),rgba(8,10,14,0.995))] p-5 font-mono shadow-[inset_0_0_0_1px_rgba(255,255,255,0.015)] md:p-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[28%] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.05),transparent_34%),radial-gradient(ellipse_at_top,rgba(20,184,166,0.028),transparent_48%)]" />
        <div className="absolute inset-x-[10%] top-[-18%] h-28 rounded-full bg-cyan-300/5 blur-3xl" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:34px_34px] opacity-14" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.14))]" />
      <div className="relative space-y-4">
        <FlowStep
          step="STEP 1"
          title="Agent Executes Work"
          content={<p className="text-zinc-300">Payment · Task · Service</p>}
        />

        <FlowArrow />

        <FlowStep
          step="STEP 2"
          title="ChaosChain Records Event"
          highlighted
          content={
            <div className="grid grid-cols-1 gap-2 text-xs text-zinc-400 sm:grid-cols-3 md:text-[12px]">
              <span>Action Hash</span>
              <span>Timestamp</span>
              <span>Evidence Anchor</span>
              <span className="text-zinc-200">0x8fa21...</span>
              <span className="text-zinc-200">14:32:18</span>
              <span className="text-zinc-200">verified</span>
            </div>
          }
        />

        <FlowArrow />

        <FlowStep
          step="STEP 3"
          title="Verifiers Score Output"
          content={
            <div className="space-y-2 text-xs text-zinc-300 md:text-[12px]">
              <div className="flex items-center justify-between gap-3">
                <span className="text-zinc-400">Verifier A</span>
                <span>[82, 76, 89, 91, 88]</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-zinc-400">Verifier B</span>
                <span>[85, 79, 92, 90, 86]</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-zinc-400">Verifier C</span>
                <span>[80, 78, 90, 89, 87]</span>
              </div>
              <p className="pt-1 text-zinc-400">Initiative · Collaboration · Reasoning · Compliance · Efficiency</p>
            </div>
          }
        />
      </div>
    </div>
  );
}

type FlowStepProps = {
  step: string;
  title: string;
  content: ReactNode;
  highlighted?: boolean;
};

function FlowStep({ step, title, content, highlighted = false }: FlowStepProps) {
  return (
    <motion.div
      className={`rounded-xl border px-4 py-4 ${
        highlighted
          ? "border-zinc-700/90 bg-[linear-gradient(180deg,rgba(13,17,23,0.96),rgba(9,12,17,0.985))] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.015)]"
          : "border-zinc-700/85 bg-[linear-gradient(180deg,rgba(16,19,27,0.96),rgba(11,13,19,0.985))] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.012)]"
      }`}
      animate={highlighted ? { opacity: [0.92, 1, 0.92] } : undefined}
      transition={{ duration: 5.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
    >
      {highlighted ? (
        <div className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_50%_24%,rgba(34,211,238,0.025),transparent_44%)]" />
      ) : null}
      <div className="relative">
      <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">{step}</p>
      <p className="mt-2 text-sm font-medium text-zinc-100 md:text-[15px]">{title}</p>
      <div className="mt-3">{content}</div>
      </div>
    </motion.div>
  );
}

function FlowArrow() {
  return (
    <motion.div
      className="text-center text-lg text-cyan-100/78"
      animate={{ opacity: [0.35, 0.85, 0.35], y: [0, 2, 0] }}
      transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
    >
      ↓
    </motion.div>
  );
}
