"use client";

import { motion } from "framer-motion";

export function PipelineVisual() {
  const scoreRows = [
    { name: "Verifier A", values: "[82,74,90]" },
    { name: "Verifier B", values: "[85,70,91]" },
    { name: "Verifier C", values: "[80,76,88]" },
  ];

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 font-mono shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] md:p-6">
      <div className="rounded-xl border border-zinc-700/80 p-4 md:p-5">
        <p className="text-center text-[11px] uppercase tracking-[0.2em] text-zinc-400 md:text-xs">
          Accountability Flow
        </p>

        <div className="mt-4 space-y-3 text-xs text-zinc-300 md:text-[13px]">
          <div className="rounded-lg border border-zinc-700/80 bg-zinc-900/50 p-3">
            <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">Step 1</p>
            <p className="mt-1 text-zinc-100">Agent Executes Work</p>
            <div className="mt-2 flex items-center gap-3 text-zinc-400">
              <span>Payment ○</span>
              <span>Task ○</span>
              <span>Service ○</span>
            </div>
          </div>

          <motion.p
            className="text-center text-zinc-500"
            animate={{ opacity: [0.35, 0.85, 0.35] }}
            transition={{ duration: 3.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            ↓
          </motion.p>

          <div className="rounded-lg border border-zinc-700/80 bg-zinc-900/50 p-3">
            <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">Step 2</p>
            <p className="mt-1 text-zinc-100">ChaosChain Records Event</p>
            <div className="mt-2 grid grid-cols-3 gap-2 text-zinc-400">
              <span>Action Hash</span>
              <span>Timestamp</span>
              <span>Evidence</span>
              <span className="text-zinc-300">0x8fa21...</span>
              <span className="text-zinc-300">13:42:11</span>
              <span className="text-zinc-300">Anchor</span>
            </div>
          </div>

          <motion.p
            className="text-center text-zinc-500"
            animate={{ opacity: [0.35, 0.85, 0.35] }}
            transition={{ duration: 3.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.4 }}
          >
            ↓
          </motion.p>

          <div className="rounded-lg border border-zinc-700/80 bg-zinc-900/50 p-3">
            <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">Step 3</p>
            <p className="mt-1 text-zinc-100">Verifiers Score Output</p>
            <div className="mt-2 grid gap-1 text-zinc-300">
              {scoreRows.map((row) => (
                <div key={row.name} className="flex items-center justify-between gap-3">
                  <span className="text-zinc-400">{row.name}</span>
                  <span>{row.values}</span>
                </div>
              ))}
            </div>
            <p className="mt-2 text-zinc-400">Initiative · Compliance · Efficiency</p>
          </div>

          <motion.p
            className="text-center text-zinc-500"
            animate={{ opacity: [0.35, 0.85, 0.35] }}
            transition={{ duration: 3.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.8 }}
          >
            ↓
          </motion.p>

          <div className="rounded-lg border border-zinc-700/80 bg-zinc-900/50 p-3">
            <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">Step 4</p>
            <p className="mt-1 text-zinc-100">Portable Reputation</p>
            <p className="mt-2 text-zinc-300">Trust Score: 84.7</p>
            <p className="mt-1 text-zinc-300">API: GET /v1/agent/8472/reputation</p>
            <motion.p
              className="mt-1 text-emerald-300"
              animate={{ opacity: [0.45, 1, 0.45] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              Status: VERIFIED
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}
