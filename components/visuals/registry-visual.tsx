"use client";

import { motion } from "framer-motion";

const rows = [
  { id: "AG-1138", score: 92, status: "Stable" },
  { id: "AG-7712", score: 87, status: "Improving" },
  { id: "AG-4205", score: 95, status: "Verified" },
];

export function RegistryVisual() {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/70">
      <div className="border-b border-zinc-800 px-5 py-4">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Registry</p>
        <p className="mt-1 text-sm text-zinc-300">Performance index for autonomous agents</p>
      </div>
      <div className="divide-y divide-zinc-800">
        {rows.map((row, i) => (
          <motion.div
            key={row.id}
            className="grid grid-cols-[1.1fr_0.7fr_0.8fr] items-center gap-3 px-5 py-4 text-sm"
            animate={{ backgroundColor: ["rgba(0,0,0,0)", "rgba(255,255,255,0.02)", "rgba(0,0,0,0)"] }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, delay: i * 0.5 }}
          >
            <div>
              <p className="font-medium text-zinc-100">{row.id}</p>
              <p className="text-xs text-zinc-500">ERC-8004 record attached</p>
            </div>
            <div className="text-zinc-300">{row.score}</div>
            <button
              type="button"
              className="justify-self-start rounded-md border border-zinc-700 px-3 py-1 text-xs text-zinc-300"
            >
              {row.status} details
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
