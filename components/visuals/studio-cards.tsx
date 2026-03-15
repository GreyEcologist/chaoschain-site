"use client";

import { motion } from "framer-motion";

const studios = [
  {
    name: "Savings",
    detail: "AI manages user funds with PoA.",
    revenue: "Consumer/DeFi Revenue",
  },
  {
    name: "Insurance",
    detail: "Underwrites agent risk based on PoA.",
    revenue: "All Studios Revenue",
  },
  {
    name: "Compliance",
    detail: "Provides audit trails for AI.",
    revenue: "Enterprise Revenue",
  },
];

export function StudioCards() {
  return (
    <div className="relative space-y-5">
      <motion.div
        className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5"
        animate={{ opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">ChaosChain Protocol</p>
        <p className="mt-4 text-center text-base font-semibold text-zinc-100 md:text-xl">
          ERC-8004 (Identity) + PoA (Accountability) + Studios
        </p>
      </motion.div>

      <div className="relative pt-5 md:pt-8">
        <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-10 md:block">
          <div className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-zinc-700/70" />
          <div className="absolute left-[16.66%] right-[16.66%] top-4 h-px bg-zinc-700/60" />
          <div className="absolute left-[16.66%] top-4 h-4 w-px bg-zinc-700/60" />
          <div className="absolute left-1/2 top-4 h-4 w-px -translate-x-1/2 bg-zinc-700/60" />
          <div className="absolute right-[16.66%] top-4 h-4 w-px bg-zinc-700/60" />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {studios.map((studio, i) => (
            <motion.div
              key={studio.name}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: "easeOut", delay: i * 0.03 }}
            >
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Studio</p>
              <h3 className="mt-3 text-lg font-medium text-zinc-100">{studio.name}</h3>
              <p className="mt-2 text-sm text-zinc-400">{studio.detail}</p>
              <div className="mt-4 h-px w-full bg-zinc-800 transition-colors group-hover:bg-zinc-600" />
              <p className="mt-4 text-xs uppercase tracking-[0.12em] text-zinc-500">Revenue</p>
              <p className="mt-1 text-sm text-zinc-300">{studio.revenue}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
