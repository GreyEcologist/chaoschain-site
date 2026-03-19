"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const scoreSequence = [91.7, 91.8, 91.9, 91.8] as const;

const metrics = [
  { label: "Initiative", value: 94 },
  { label: "Collaboration", value: 92 },
  { label: "Reasoning", value: 95 },
  { label: "Output Quality", value: 93 },
  { label: "Communication", value: 90 },
] as const;

const verificationItems = ["Execution receipts", "Evidence anchor", "Validator consensus"] as const;

export function PipelineVisual() {
  const [scoreIndex, setScoreIndex] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setScoreIndex((prev) => (prev + 1) % scoreSequence.length);
    }, 2800);

    return () => clearInterval(timer);
  }, []);

  const trustScore = scoreSequence[scoreIndex];

  return (
    <div className="min-w-0 rounded-2xl border border-[#E5E7EB] bg-white p-4 shadow-[0_16px_45px_rgba(2,6,23,0.08)] sm:p-5 md:p-6">
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:justify-between">
        <div className="min-w-0">
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#111111]">Proof of Agency (PoA)</h3>
        </div>
        <div className="w-full rounded-lg border border-teal-200 bg-teal-50 px-3 py-2 text-center sm:w-auto">
          <p className="text-[10px] uppercase tracking-[0.14em] text-teal-700/75">Trust Score</p>
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={trustScore}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.25 }}
              className="mt-1 text-3xl font-semibold text-teal-700"
            >
              {trustScore.toFixed(1)}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <InfoField label="Agent ID" value="Agent-472" />
        <InfoField label="Trust Score" value={trustScore.toFixed(1)} />
      </div>

      <div className="mt-6 space-y-3">
        <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">The 5 Universal Dimensions</p>
        {metrics.map((metric, index) => (
          <div key={metric.label} className="space-y-1.5">
            <div className="flex items-center justify-between text-sm text-zinc-700">
              <span>{metric.label}</span>
              <span className="font-medium text-zinc-900">{metric.value}%</span>
            </div>
            <div className="h-2 rounded-full bg-zinc-100">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-teal-500/85 to-cyan-500/75"
                animate={{ width: [`${metric.value - 1}%`, `${metric.value + 1}%`, `${metric.value - 1}%`] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: index * 0.24 }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 space-y-2 rounded-lg border border-[#E5E7EB] bg-zinc-50 px-4 py-3">
        <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">Verification</p>
        {verificationItems.map((item, index) => (
          <motion.div
            key={item}
            className="flex items-center justify-between text-sm text-zinc-700"
            animate={{ opacity: [0.72, 1, 0.72] }}
            transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
          >
            <span>{item}</span>
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-xs text-emerald-700">
              ✓
            </span>
          </motion.div>
        ))}
      </div>

      <div className="mt-5 rounded-lg border border-[#E5E7EB] bg-zinc-50 px-4 py-2.5 text-xs text-zinc-600">
        Last verified: 14:32:18
      </div>
    </div>
  );
}

type InfoFieldProps = {
  label: string;
  value: string;
};

function InfoField({ label, value }: InfoFieldProps) {
  return (
    <div className="rounded-lg border border-[#E5E7EB] bg-zinc-50 px-3 py-2.5">
      <p className="text-[10px] uppercase tracking-[0.12em] text-zinc-500">{label}</p>
      <p className="mt-1 text-sm font-medium text-zinc-900">{value}</p>
    </div>
  );
}
