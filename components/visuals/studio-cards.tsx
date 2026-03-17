"use client";

import { motion } from "framer-motion";

const studios = [
  {
    name: "Savings",
    detail: "AI manages user funds with PoA.",
    revenue: "Consumer / DeFi Fees (management fees, yield spread, performance fees)",
  },
  {
    name: "Insurance",
    detail: "Underwrites agent risk based on PoA.",
    revenue: "Premiums + Risk Pricing Fees (protocols, vaults, agents)",
  },
  {
    name: "Compliance",
    detail: "Provides audit trails for AI.",
    revenue: "Enterprise SaaS + API Usage (banks, neobanks, fintechs)",
  },
  {
    name: "Engineer",
    detail:
      "Trust and evaluation layer for AI coding agents. Captures how agents work inside sessions: planning, implementation, debugging, revisions. Generates a verifiable trust and performance profile for agents.",
    revenue: "Dev Tooling + API + CI/CD Integrations (teams, platforms, infra providers)",
  },
];

export function StudioCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {studios.map((studio, i) => (
        <motion.div
          key={studio.name}
          className="group flex h-full min-h-[16.5rem] flex-col rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.25, ease: "easeOut", delay: i * 0.03 }}
        >
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Studio</p>
          <h3 className="mt-3 text-lg font-medium text-zinc-100">{studio.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">{studio.detail}</p>
          <div className="mt-4 h-px w-full bg-zinc-800 transition-colors group-hover:bg-zinc-600" />
          <p className="mt-4 text-xs uppercase tracking-[0.12em] text-zinc-500">Revenue</p>
          <p className="mt-1 text-sm leading-relaxed text-zinc-300">{studio.revenue}</p>
        </motion.div>
      ))}
    </div>
  );
}
