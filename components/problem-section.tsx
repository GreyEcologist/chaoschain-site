"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/section-header";
import { ProblemTrustVisual } from "@/components/visuals/problem-trust-visual";

const structuralGaps = [
  { index: "01", label: "Same model, different behavior across setups" },
  { index: "02", label: "Static benchmarks miss production reality" },
  { index: "03", label: "No behavioral audit trail from real sessions" },
  { index: "04", label: "No clear answer for which agent to trust next" },
] as const;

export function ProblemSection() {
  return (
    <section className="section-shell pt-8 md:pt-10">
      <div className="responsive-split">
        <div className="min-w-0 space-y-6">
          <SectionHeader title="You Do Not Have an AI Problem. You Have a Trust Problem." />
          <div className="space-y-5 text-zinc-400">
            <p>
              The same AI agent can behave differently depending on setup, codebase, prompt, and context. A model name
              alone tells you almost nothing.
            </p>
            <div>
              <motion.p
                className="mb-3 text-[10px] uppercase tracking-[0.22em] text-zinc-600"
                initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                Why Worldline Exists
              </motion.p>
              <ul className="space-y-2 text-zinc-300">
                {structuralGaps.map((gap, index) => (
                  <motion.li
                    key={gap.index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      delay: 0.1 + index * 0.1,
                      duration: 0.58,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <span className="min-w-7 font-mono text-[11px] tracking-[0.18em] text-cyan-200/70">
                      {gap.index}
                    </span>
                    <span>{gap.label}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <p>Worldline focuses on the immediate engineering question: which coding agent earned trust on real work?</p>
            <p className="text-zinc-200">
              ChaosChain is the long-term trust infrastructure. Worldline is the product teams can use now.
            </p>
          </div>
        </div>
        <div className="min-w-0">
          <ProblemTrustVisual />
        </div>
      </div>
    </section>
  );
}
