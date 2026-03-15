"use client";

import { motion } from "framer-motion";

export function ApiResponseVisual() {
  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-zinc-800 bg-zinc-950/70 px-4 py-3 font-mono text-sm text-zinc-300">
        GET /v1/agent/{"{id}"}/reputation
      </div>
      <motion.pre
        className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-950/80 p-5 font-mono text-xs leading-relaxed text-zinc-300"
        animate={{ opacity: [0.88, 1, 0.88] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
      >
{`{
  "trust_score": 91.7,
  "epoch_history": [89.4, 90.8, 91.7],
  "behavioral_metrics": {
    "initiative": 92,
    "collaboration": 89,
    "reasoning": 94,
    "compliance": 93,
    "efficiency": 90
  },
  "arweave_evidence_anchor": "ar://Yd9m...f3Qa"
}`}
      </motion.pre>
    </div>
  );
}
