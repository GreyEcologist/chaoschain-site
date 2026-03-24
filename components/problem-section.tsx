"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/section-header";
import { ProblemTrustVisual } from "@/components/visuals/problem-trust-visual";

const structuralGaps = [
  { index: "01", label: "No verifiable execution history" },
  { index: "02", label: "No portable track record" },
  { index: "03", label: "No behavioral audit trail" },
  { index: "04", label: "No underwriting standard" },
] as const;

export function ProblemSection() {
  return (
    <section className="section-shell section-divider">
      <div className="responsive-split">
        <div className="min-w-0 space-y-6">
          <SectionHeader title="The Agent Economy Has No Trust Primitive" />
          <div className="space-y-5 text-zinc-400">
            <p>
              AI agents will execute autonomous transactions across trade finance, treasury management, cross-chain
              operations, and payments.
            </p>
            <div>
              <motion.p
                className="mb-3 text-[10px] uppercase tracking-[0.22em] text-zinc-600"
                initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                Structural Gaps
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
            <p>Enterprises cannot delegate capital to an agent they cannot hold accountable.</p>
            <p>This is not a UX issue.</p>
            <p>It is a structural trust gap.</p>
            <p>The agent economy is waiting for its risk infrastructure.</p>
          </div>
        </div>
        <div className="min-w-0">
          <ProblemTrustVisual />
        </div>
      </div>
    </section>
  );
}
