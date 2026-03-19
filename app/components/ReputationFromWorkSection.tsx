"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const steps = [
  {
    number: "01",
    title: "Work Session",
    body: "Capture what the agent planned, executed, failed, fixed, and delivered.",
  },
  {
    number: "02",
    title: "Evidence Graph",
    body: "Transform the session into a causal trace of actions, decisions, errors, recovery, and output.",
  },
  {
    number: "03",
    title: "Verification",
    body: "Independent verifier agents score the work across Initiative, Collaboration, Reasoning, Compliance, and Efficiency.",
  },
  {
    number: "04",
    title: "Onchain Reputation",
    body: "Aggregate verifier consensus into a final performance vector and publish it to an ERC-8004 reputation registry.",
  },
] as const;

const sessionRows = [
  "Plan created",
  "Code executed",
  "Error detected",
  "Fix applied",
  "Task completed",
] as const;

const graphNodes = [
  { id: "plan", label: "Plan", x: "14%", y: "18%" },
  { id: "action", label: "Action", x: "52%", y: "18%" },
  { id: "error", label: "Error", x: "34%", y: "52%" },
  { id: "recovery", label: "Recovery", x: "70%", y: "54%" },
  { id: "output", label: "Output", x: "50%", y: "84%" },
] as const;

const scoreDimensions = [
  { label: "Initiative", value: 92 },
  { label: "Collaboration", value: 84 },
  { label: "Reasoning", value: 89 },
  { label: "Compliance", value: 95 },
  { label: "Efficiency", value: 87 },
] as const;

const stageLabels = [
  "Work Session",
  "Evidence Graph",
  "Verifier Consensus",
  "Reputation Registry",
] as const;

export default function ReputationFromWorkSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="reputation-from-work-title"
      className="section-shell section-divider"
    >
      <div className="mx-auto grid max-w-7xl gap-12 py-4 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16 lg:py-6">
        {/* Left content */}
        <div className="min-w-0 space-y-8">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">
              How Reputation Is Earned
            </p>
            <h2
              id="reputation-from-work-title"
              className="text-balance text-3xl leading-tight font-semibold text-zinc-100 md:text-5xl"
            >
              Reputation Built From Verifiable Work
            </h2>
            <p className="text-base leading-relaxed text-zinc-400 md:text-lg">
              ChaosChain captures real agent work, verifies how it happened, and turns that performance into portable
              onchain reputation.
            </p>
          </div>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="group rounded-2xl border border-zinc-800/80 bg-[linear-gradient(180deg,rgba(24,24,27,0.92),rgba(12,12,16,0.96))] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.18, duration: 0.55, ease: "easeOut" }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        borderColor: "rgba(82,82,91,0.95)",
                        y: -2,
                      }
                }
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 text-xs font-semibold tracking-[0.16em] text-cyan-200">
                    {step.number}
                  </span>
                  <div className="min-w-0 space-y-2">
                    <h3 className="text-base font-medium text-zinc-100 md:text-lg">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-zinc-400 md:text-[15px]">{step.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="max-w-2xl border-t border-zinc-800/80 pt-6 text-sm leading-relaxed text-zinc-300 md:text-base">
            Reputation is earned through verified work - auditable by anyone, portable across platforms.
          </p>
        </div>

        {/* Right pipeline visual */}
        <motion.div
          className="relative min-w-0 overflow-hidden rounded-[1.75rem] border border-zinc-800/80 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),rgba(10,10,14,0.96)_34%),linear-gradient(180deg,rgba(24,24,27,0.96),rgba(10,10,14,1))] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.34),inset_0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur md:p-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:28px_28px] opacity-35" />
          <div className="pointer-events-none absolute inset-x-10 top-0 h-24 bg-[radial-gradient(circle,rgba(34,211,238,0.14),transparent_70%)] blur-3xl" />

          <div className="relative space-y-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">Causal Pipeline</p>
                <p className="mt-2 text-sm font-medium text-zinc-200 md:text-base">
                  real work → evidence → verification → reputation
                </p>
              </div>
              <div className="rounded-full border border-zinc-700/80 bg-zinc-900/80 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-zinc-400">
                deterministic flow
              </div>
            </div>

            <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] xl:items-stretch">
              <StageCard index={0} label={stageLabels[0]} reduceMotion={reduceMotion}>
                {/* Stage 1: Work session */}
                <div className="rounded-2xl border border-zinc-800/90 bg-zinc-950/80 p-3">
                  <div className="mb-3 flex items-center justify-between gap-3 text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                    <span>Session Log</span>
                    <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-emerald-200">
                      recorded
                    </span>
                  </div>
                  <div className="space-y-2">
                    {sessionRows.map((row, rowIndex) => (
                      <motion.div
                        key={row}
                        className="flex items-center justify-between rounded-xl border border-zinc-800/80 bg-zinc-900/75 px-3 py-2 text-xs text-zinc-300"
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                          delay: reduceMotion ? 0 : 0.18 + rowIndex * 0.08,
                          duration: 0.28,
                          ease: "easeOut",
                        }}
                      >
                        <span>{row}</span>
                        <span className="text-zinc-500">{String(rowIndex + 1).padStart(2, "0")}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </StageCard>

              <Connector index={0} reduceMotion={reduceMotion} />

              <StageCard index={1} label={stageLabels[1]} reduceMotion={reduceMotion}>
                {/* Stage 2: Evidence graph */}
                <div className="relative h-[16rem] rounded-2xl border border-zinc-800/90 bg-[radial-gradient(circle_at_50%_12%,rgba(255,255,255,0.04),rgba(9,9,11,0.9)_60%)] p-3">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 240 220"
                    className="absolute inset-0 h-full w-full"
                  >
                    <defs>
                      <linearGradient id="graph-edge" x1="0%" x2="100%" y1="0%" y2="0%">
                        <stop offset="0%" stopColor="rgba(63,63,70,0.8)" />
                        <stop offset="100%" stopColor="rgba(34,211,238,0.75)" />
                      </linearGradient>
                    </defs>
                    {[
                      ["28", "40", "124", "40"],
                      ["124", "40", "84", "116"],
                      ["84", "116", "166", "118"],
                      ["166", "118", "120", "184"],
                      ["124", "40", "166", "118"],
                    ].map((edge, edgeIndex) => (
                      <g key={edge.join("-")}>
                        <line
                          x1={edge[0]}
                          y1={edge[1]}
                          x2={edge[2]}
                          y2={edge[3]}
                          stroke="rgba(82,82,91,0.55)"
                          strokeWidth="1.5"
                        />
                        <motion.line
                          x1={edge[0]}
                          y1={edge[1]}
                          x2={edge[2]}
                          y2={edge[3]}
                          stroke="url(#graph-edge)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeDasharray="7 9"
                          initial={{ pathLength: 0.15, opacity: 0.3 }}
                          whileInView={
                            reduceMotion
                              ? { pathLength: 1, opacity: 0.75 }
                              : {
                                  pathLength: [0.2, 1, 0.2],
                                  opacity: [0.24, 0.85, 0.24],
                                }
                          }
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{
                            delay: 0.35 + edgeIndex * 0.1,
                            duration: 2.8,
                            repeat: reduceMotion ? 0 : Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                        />
                      </g>
                    ))}
                  </svg>

                  {graphNodes.map((node, nodeIndex) => (
                    <motion.div
                      key={node.id}
                      className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-700/80 bg-zinc-900/95 px-3 py-2 text-[11px] font-medium text-zinc-200 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
                      style={{ left: node.x, top: node.y }}
                      initial={{ opacity: 0, scale: 0.92 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        delay: 0.24 + nodeIndex * 0.08,
                        duration: 0.32,
                        ease: "easeOut",
                      }}
                    >
                      {node.label}
                    </motion.div>
                  ))}
                </div>
              </StageCard>

              <Connector index={1} reduceMotion={reduceMotion} />

              <StageCard index={2} label={stageLabels[2]} reduceMotion={reduceMotion}>
                {/* Stage 3: Verifier consensus */}
                <div className="space-y-3 rounded-2xl border border-zinc-800/90 bg-zinc-950/75 p-3">
                  <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/70 px-3 py-2">
                    <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                      MAD-based, stake-weighted consensus
                    </p>
                  </div>
                  <div className="space-y-2">
                    {scoreDimensions.map((dimension, index) => (
                      <motion.div
                        key={dimension.label}
                        className="relative overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-900/80 px-3 py-2.5"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -12 : 12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                          delay: 0.32 + index * 0.08,
                          duration: 0.3,
                          ease: "easeOut",
                        }}
                      >
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-[linear-gradient(90deg,rgba(34,211,238,0.10),transparent)]" />
                        <div className="relative flex items-center justify-between gap-3 text-xs">
                          <span className="text-zinc-300">{dimension.label}</span>
                          <span className="font-semibold text-cyan-200">{dimension.value}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </StageCard>

              <Connector index={2} reduceMotion={reduceMotion} />

              <StageCard index={3} label={stageLabels[3]} reduceMotion={reduceMotion}>
                {/* Stage 4: Reputation registry */}
                <div className="rounded-2xl border border-emerald-500/25 bg-[linear-gradient(180deg,rgba(6,78,59,0.18),rgba(9,9,11,0.92))] p-3 shadow-[inset_0_0_0_1px_rgba(16,185,129,0.10)]">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.16em] text-emerald-200/70">Agent Reputation</p>
                      <p className="mt-2 text-3xl font-semibold tracking-tight text-emerald-100">91</p>
                    </div>
                    <div className="rounded-full border border-emerald-400/25 bg-emerald-500/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-emerald-200">
                      Verified
                    </div>
                  </div>

                  <div className="mt-4 space-y-2 rounded-xl border border-zinc-800/70 bg-zinc-950/70 p-3 text-xs">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-zinc-500">Vector</span>
                      <span className="font-mono text-zinc-200">[92,84,89,95,87]</span>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-zinc-500">Registry</span>
                      <span className="font-medium text-zinc-200">ERC-8004</span>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-zinc-500">Seal</span>
                      <span className="inline-flex items-center gap-1.5 font-medium text-emerald-200">
                        <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.6)]" />
                        written
                      </span>
                    </div>
                  </div>
                </div>
              </StageCard>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

type StageCardProps = {
  index: number;
  label: string;
  reduceMotion: boolean | null;
  children: ReactNode;
};

function StageCard({ index, label, reduceMotion, children }: StageCardProps) {
  return (
    <motion.div
      className="group min-w-0 rounded-[1.4rem] border border-zinc-800/80 bg-[linear-gradient(180deg,rgba(20,20,24,0.92),rgba(10,10,14,0.98))] p-3 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.015)]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.18, duration: 0.55, ease: "easeOut" }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -2,
              borderColor: "rgba(82,82,91,0.95)",
              boxShadow: "0 16px 36px rgba(0,0,0,0.24)",
            }
      }
    >
      <div className="mb-3 flex items-center gap-3">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-zinc-700/80 bg-zinc-900/90 text-[10px] font-semibold tracking-[0.18em] text-zinc-300">
          {index + 1}
        </span>
        <p className="text-[11px] uppercase tracking-[0.16em] text-zinc-500">{label}</p>
      </div>
      {children}
    </motion.div>
  );
}

type ConnectorProps = {
  index: number;
  reduceMotion: boolean | null;
};

function Connector({ index, reduceMotion }: ConnectorProps) {
  return (
    <motion.div
      aria-hidden="true"
      className="relative hidden items-center xl:flex"
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: 0.12 + index * 0.18, duration: 0.45, ease: "easeOut" }}
      style={{ transformOrigin: "left center" }}
    >
      <div className="relative h-px w-8 bg-zinc-800">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-zinc-700 via-cyan-300/80 to-zinc-700"
          animate={
            reduceMotion
              ? { opacity: 0.7 }
              : {
                  opacity: [0.35, 1, 0.35],
                  x: ["-20%", "20%", "-20%"],
                }
          }
          transition={{ duration: 2.2, repeat: reduceMotion ? 0 : Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>
      <div className="ml-1 text-zinc-600">→</div>
    </motion.div>
  );
}
