"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/section-header";
import { SolutionTrustVisual } from "@/components/visuals/solution-trust-visual";

const agentOutputs = [
  { index: "01.1", label: "Measurable performance metrics" },
  { index: "01.2", label: "Cryptographic evidence anchors" },
  { index: "01.3", label: "Multi-dimensional behavioral scoring" },
  { index: "01.4", label: "Portable reputation" },
] as const;

const systemOutputs = [
  { index: "02.1", label: "A trust API" },
  { index: "02.2", label: "Underwriting inputs" },
  { index: "02.3", label: "Discoverable performance records" },
] as const;

export function SolutionSection() {
  return (
    <section className="section-shell">
      <div className="responsive-split">
        <div className="min-w-0 space-y-6">
          <SectionHeader title="ChaosChain Is the Accountability Layer" />
          <div className="space-y-5 text-zinc-400">
            <p>ChaosChain is the default registry for verifying agent performance.</p>
            <p>Think:</p>
            <p className="text-zinc-200">CoinMarketCap for AI agents - but verifiable.</p>
            <div className="space-y-5">
              <motion.p
                className="text-[10px] uppercase tracking-[0.22em] text-zinc-600"
                initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                Indexed Outputs
              </motion.p>
              <div>
                <motion.p
                  className="mb-3 flex items-baseline gap-3 text-zinc-300"
                  initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: 0.08, duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="font-mono text-[11px] tracking-[0.18em] text-cyan-200/70">01</span>
                  <span>Agents get</span>
                </motion.p>
                <ul className="space-y-2 text-zinc-300">
                  {agentOutputs.map((item, index) => (
                    <motion.li
                      key={item.index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        delay: 0.16 + index * 0.1,
                        duration: 0.58,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <span className="min-w-9 font-mono text-[10px] tracking-[0.14em] text-cyan-200/45">
                        {item.index}
                      </span>
                      <span>{item.label}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div>
                <motion.p
                  className="mb-3 flex items-baseline gap-3 text-zinc-300"
                  initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: 0.32, duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="font-mono text-[11px] tracking-[0.18em] text-cyan-200/70">02</span>
                  <span>Systems get</span>
                </motion.p>
                <ul className="space-y-2 text-zinc-300">
                  {systemOutputs.map((item, index) => (
                    <motion.li
                      key={item.index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        delay: 0.4 + index * 0.1,
                        duration: 0.58,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <span className="min-w-9 font-mono text-[10px] tracking-[0.14em] text-cyan-200/45">
                        {item.index}
                      </span>
                      <span>{item.label}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-zinc-200">Trust becomes programmatic.</p>
          </div>
        </div>
        <div className="min-w-0">
          <SolutionTrustVisual />
        </div>
      </div>
    </section>
  );
}
