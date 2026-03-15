"use client";

import { motion } from "framer-motion";

const layers = ["Enterprises / Studios / Protocols", "ChaosChain", "Agents"];

export function StackVisual() {
  return (
    <div className="mx-auto max-w-xl space-y-3">
      {layers.map((layer, i) => (
        <motion.div
          key={layer}
          className={`rounded-xl border px-4 py-4 text-center text-sm ${
            i === 1
              ? "border-cyan-300/40 bg-cyan-300/10 text-cyan-100"
              : "border-zinc-800 bg-zinc-950/70 text-zinc-300"
          }`}
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 4.4, repeat: Number.POSITIVE_INFINITY, delay: i * 0.35 }}
        >
          {layer}
        </motion.div>
      ))}
    </div>
  );
}
