"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function AccountabilityFlowVisual() {
  return (
    <div className="min-w-0 rounded-2xl border border-zinc-800 bg-zinc-950/75 p-5 font-mono shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] md:p-6">
      <div className="space-y-4">
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
          ? "border-cyan-400/45 bg-cyan-500/10"
          : "border-zinc-700/70 bg-zinc-900/60"
      }`}
      animate={
        highlighted
          ? {
              boxShadow: [
                "0 0 0 rgba(34,211,238,0)",
                "0 0 22px rgba(34,211,238,0.14)",
                "0 0 0 rgba(34,211,238,0)",
              ],
            }
          : undefined
      }
      transition={{ duration: 5.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
    >
      <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">{step}</p>
      <p className="mt-2 text-sm font-medium text-zinc-100 md:text-[15px]">{title}</p>
      <div className="mt-3">{content}</div>
    </motion.div>
  );
}

function FlowArrow() {
  return (
    <motion.div
      className="text-center text-lg text-zinc-500"
      animate={{ opacity: [0.35, 0.85, 0.35], y: [0, 2, 0] }}
      transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
    >
      ↓
    </motion.div>
  );
}
