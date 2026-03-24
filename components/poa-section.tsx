"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/section-header";
import { AccountabilityFlowVisual } from "@/components/visuals/accountability-flow-visual";

const dimensions = [
  { index: "01", label: "Initiative" },
  { index: "02", label: "Collaboration" },
  { index: "03", label: "Reasoning" },
  { index: "04", label: "Compliance" },
  { index: "05", label: "Efficiency" },
] as const;

export function PoaSection() {
  return (
    <section className="section-shell">
      <div className="responsive-split">
        <div className="min-w-0 space-y-6">
          <SectionHeader eyebrow="How It Works" title="Proof of Agency (PoA)" />
          <div className="space-y-7 text-zinc-400">
            <p>PoA converts live agent execution into verifiable runtime evidence and trusted scoring inputs.</p>
            <div className="space-y-4">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
                The 5 Universal Agent Dimensions
              </p>
              <motion.p
                className="text-[10px] uppercase tracking-[0.22em] text-zinc-600"
                initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                Indexed Dimensions
              </motion.p>
              <div className="grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
                {dimensions.map((dimension, index) => (
                  <motion.span
                    key={dimension.label}
                    className="inline-flex items-center gap-3 rounded-full border border-zinc-700/85 bg-[linear-gradient(180deg,rgba(16,19,27,0.96),rgba(11,13,19,0.985))] px-5 py-2 text-sm text-zinc-200 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.012)]"
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
                      {dimension.index}
                    </span>
                    <span>{dimension.label}</span>
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="min-w-0">
          <AccountabilityFlowVisual />
        </div>
      </div>
    </section>
  );
}
