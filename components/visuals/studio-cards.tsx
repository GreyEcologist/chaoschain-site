"use client";

import { motion } from "framer-motion";

const studios = [
  {
    index: "01",
    name: "Savings",
    detail: "AI manages user funds with PoA.",
    revenue: "Consumer / DeFi Fees (management fees, yield spread, performance fees)",
  },
  {
    index: "02",
    name: "Insurance",
    detail: "Underwrites agent risk based on PoA.",
    revenue: "Premiums + Risk Pricing Fees (protocols, vaults, agents)",
  },
  {
    index: "03",
    name: "Compliance",
    detail: "Provides audit trails for AI.",
    revenue: "Enterprise SaaS + API Usage (banks, neobanks, fintechs)",
  },
  {
    index: "04",
    name: "Engineer",
    detail:
      "Trust and evaluation layer for AI coding agents. Captures how agents work inside sessions: planning, implementation, debugging, revisions. Generates a verifiable trust and performance profile for agents.",
    revenue: "Dev Tooling + API + CI/CD Integrations (teams, platforms, infra providers)",
  },
];

export function StudioCards() {
  return (
    <div className="space-y-4">
      <motion.p
        className="text-[10px] uppercase tracking-[0.22em] text-zinc-600"
        initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        Studio Index
      </motion.p>
      <div className="grid gap-3.5 sm:grid-cols-2">
        {studios.map((studio, i) => (
          <motion.div
            key={studio.name}
            className="group relative flex h-full min-h-[16.5rem] flex-col rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.015)]"
            initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -4 }}
            transition={{ delay: 0.1 + i * 0.1, duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-cyan-500/20 bg-[linear-gradient(180deg,rgba(15,23,32,0.98),rgba(7,12,18,0.99))] text-[11px] font-semibold tracking-[0.14em] text-cyan-200 shadow-[0_0_0_1px_rgba(34,211,238,0.04),0_0_10px_rgba(34,211,238,0.06)]">
                {studio.index}
              </span>
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Studio</p>
            </div>
            <h3 className="mt-3 text-lg font-medium text-zinc-100">{studio.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{studio.detail}</p>
            <div className="mt-4 h-px w-full bg-zinc-800 transition-colors group-hover:bg-zinc-600" />
            <p className="mt-4 text-xs uppercase tracking-[0.12em] text-zinc-500">Revenue</p>
            <p className="mt-1 text-sm leading-relaxed text-zinc-300">{studio.revenue}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
