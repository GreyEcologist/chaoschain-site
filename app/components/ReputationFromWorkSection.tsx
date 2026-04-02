"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

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

const stageMeta = [
  {
    eyebrow: "01 / 04",
    title: "WORK SESSION",
    caption: "Raw session evidence",
  },
  {
    eyebrow: "02 / 04",
    title: "EVIDENCE GRAPH",
    caption: "Causal trace",
  },
  {
    eyebrow: "03 / 04",
    title: "VERIFIER CONSENSUS",
    caption: "Independent scoring",
  },
  {
    eyebrow: "04 / 04",
    title: "REPUTATION REGISTRY",
    caption: "Portable credential",
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
  { id: "plan", label: "Plan", left: "12%", top: "52%" },
  { id: "action", label: "Action", left: "36%", top: "34%" },
  { id: "recovery", label: "Recovery", left: "64%", top: "70%" },
  { id: "output", label: "Output", left: "88%", top: "52%" },
] as const;

const scoreDimensions = [
  { label: "Initiative", value: 92 },
  { label: "Collaboration", value: 84 },
  { label: "Reasoning", value: 89 },
  { label: "Compliance", value: 95 },
  { label: "Efficiency", value: 87 },
] as const;

export default function ReputationFromWorkSection() {
  const reduceMotion = useReducedMotion();
  const [activeStage, setActiveStage] = useState(0);

  const goPrev = () => setActiveStage((current) => (current === 0 ? stageMeta.length - 1 : current - 1));
  const goNext = () => setActiveStage((current) => (current === stageMeta.length - 1 ? 0 : current + 1));

  return (
    <section aria-labelledby="reputation-from-work-title" className="section-shell">
      <div className="responsive-split py-4 xl:py-6">
        <div className="min-w-0 space-y-8">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">How Reputation Is Earned</p>
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
                transition={{ delay: index * 0.14, duration: 0.5, ease: "easeOut" }}
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
        </div>

        <motion.div
          className="relative min-w-0 self-start overflow-hidden rounded-[1.9rem] border border-zinc-800/80 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),rgba(10,10,14,0.96)_36%),linear-gradient(180deg,rgba(24,24,27,0.96),rgba(10,10,14,1))] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.34),inset_0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur sm:p-5 xl:p-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:28px_28px] opacity-30" />
          <div className="pointer-events-none absolute inset-x-10 top-0 h-24 bg-[radial-gradient(circle,rgba(34,211,238,0.14),transparent_72%)] blur-3xl" />

          <div className="relative space-y-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">Causal Pipeline</p>
              </div>
              <div className="inline-flex w-fit rounded-full border border-zinc-700/80 bg-zinc-900/80 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-zinc-400">
                deterministic flow
              </div>
            </div>

            <div className="rounded-[1.6rem] border border-zinc-800/80 bg-[linear-gradient(180deg,rgba(17,17,22,0.92),rgba(10,10,14,0.98))] p-3 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] sm:p-4">
              <div className="flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Show previous stage"
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-700/80 bg-zinc-900/90 text-zinc-300 transition hover:border-zinc-500 hover:text-zinc-100"
                >
                  ←
                </button>

                <div className="min-w-0 text-center">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">{stageMeta[activeStage].eyebrow}</p>
                  <h3 className="mt-2 text-sm font-medium tracking-[0.18em] text-zinc-100 sm:text-base">
                    {stageMeta[activeStage].title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Show next stage"
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-700/80 bg-zinc-900/90 text-zinc-300 transition hover:border-zinc-500 hover:text-zinc-100"
                >
                  →
                </button>
              </div>

              <div className="mt-4 flex items-center justify-center gap-2">
                {stageMeta.map((stage, index) => (
                  <button
                    key={stage.title}
                    type="button"
                    aria-label={`Show ${stage.title}`}
                    aria-pressed={activeStage === index}
                    onClick={() => setActiveStage(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      activeStage === index ? "w-8 bg-cyan-300" : "w-2.5 bg-zinc-700 hover:bg-zinc-500"
                    }`}
                  />
                ))}
              </div>

              <div className="mt-5">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={activeStage}
                    initial={{ opacity: 0, x: reduceMotion ? 0 : 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: reduceMotion ? 0 : -24 }}
                    transition={{ duration: 0.32, ease: "easeOut" }}
                    className="relative w-full overflow-hidden rounded-[1.5rem] border border-zinc-800/80 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.04),rgba(9,9,11,0.92)_55%)] p-4 sm:p-5"
                  >
                    <div className="pointer-events-none absolute inset-x-8 top-0 h-16 bg-[radial-gradient(circle,rgba(34,211,238,0.12),transparent_72%)] blur-2xl" />
                    <div className="relative">
                      {activeStage === 0 ? <WorkSessionVisual reduceMotion={reduceMotion} /> : null}
                      {activeStage === 1 ? <EvidenceGraphVisual reduceMotion={reduceMotion} /> : null}
                      {activeStage === 2 ? <VerificationVisual reduceMotion={reduceMotion} /> : null}
                      {activeStage === 3 ? <RegistryVisual reduceMotion={reduceMotion} /> : null}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-5 flex items-center justify-between gap-3">
                <div className="text-[11px] uppercase tracking-[0.16em] text-zinc-500">
                  {stageMeta[activeStage].title}
                </div>
                <div className="relative h-px flex-1 overflow-hidden rounded-full bg-zinc-800">
                  <motion.div
                    className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-cyan-300/0 via-cyan-300/90 to-cyan-300/0"
                    animate={
                      reduceMotion
                        ? { x: "40%", opacity: 0.7 }
                        : {
                            x: ["-20%", "100%"],
                            opacity: [0.22, 0.9, 0.22],
                          }
                    }
                    transition={{ duration: 2.2, repeat: reduceMotion ? 0 : Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  />
                </div>
                <div className="text-[11px] uppercase tracking-[0.16em] text-cyan-200">
                  {activeStage === stageMeta.length - 1 ? "credential" : "in progress"}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WorkSessionVisual({ reduceMotion }: { reduceMotion: boolean | null }) {
  return (
    <div className="w-full space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-zinc-100 sm:text-base">Capture what actually happened</p>
        </div>
        <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-emerald-200">
          recorded
        </div>
      </div>

      <div className="grid gap-2.5">
        {sessionRows.map((row, index) => (
          <motion.div
            key={row}
            className="flex items-center justify-between rounded-xl border border-zinc-800/80 bg-zinc-950/78 px-4 py-3 text-sm text-zinc-300"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: reduceMotion ? 0 : index * 0.07, duration: 0.26, ease: "easeOut" }}
          >
            <span>{row}</span>
            <span className="text-zinc-500">{String(index + 1).padStart(2, "0")}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function EvidenceGraphVisual({ reduceMotion }: { reduceMotion: boolean | null }) {
  return (
    <div className="w-full space-y-4">
      <div>
        <p className="text-sm font-medium text-zinc-100 sm:text-base">Actions linked into auditable evidence</p>
      </div>

      <div className="relative h-[16rem] rounded-2xl border border-zinc-800/80 bg-zinc-950/78">
        <svg aria-hidden="true" viewBox="0 0 620 240" className="absolute inset-0 h-full w-full">
          {[
            ["92", "120", "226", "76"],
            ["226", "76", "394", "164"],
            ["394", "164", "546", "120"],
          ].map((edge, edgeIndex) => (
            <g key={edge.join("-")}>
              <line x1={edge[0]} y1={edge[1]} x2={edge[2]} y2={edge[3]} stroke="rgba(82,82,91,0.55)" strokeWidth="1.5" />
              <motion.line
                x1={edge[0]}
                y1={edge[1]}
                x2={edge[2]}
                y2={edge[3]}
                stroke="rgba(103,232,249,0.84)"
                strokeWidth="2"
                strokeDasharray="10 10"
                strokeLinecap="round"
                initial={{ pathLength: 0.12, opacity: 0.26 }}
                animate={
                  reduceMotion
                    ? { pathLength: 1, opacity: 0.72 }
                    : {
                        pathLength: [0.12, 1, 0.12],
                        opacity: [0.22, 0.88, 0.22],
                      }
                }
                transition={{
                  delay: edgeIndex * 0.08,
                  duration: 2.6,
                  repeat: reduceMotion ? 0 : Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </g>
          ))}
        </svg>

        {graphNodes.map((node, index) => (
          <motion.div
            key={node.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-700/80 bg-zinc-900/95 px-4 py-2.5 text-sm font-medium text-zinc-200 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
            style={{ left: node.left, top: node.top }}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: reduceMotion ? 0 : 0.12 + index * 0.08, duration: 0.24, ease: "easeOut" }}
          >
            {node.label}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function VerificationVisual({ reduceMotion }: { reduceMotion: boolean | null }) {
  return (
    <div className="w-full space-y-4">
      <div>
        <div>
          <p className="text-sm font-medium text-zinc-100 sm:text-base">Independent scores collapse into one output</p>
        </div>
      </div>

      <div className="grid gap-2.5">
        {scoreDimensions.map((dimension, index) => (
          <motion.div
            key={dimension.label}
            className="relative overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-950/78 px-4 py-3"
            initial={{ opacity: 0, x: index % 2 === 0 ? -10 : 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: reduceMotion ? 0 : index * 0.07, duration: 0.24, ease: "easeOut" }}
          >
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-[linear-gradient(90deg,rgba(34,211,238,0.10),transparent)]" />
            <div className="relative flex items-center justify-between gap-4 text-sm">
              <span className="text-zinc-300">{dimension.label}</span>
              <span className="font-semibold text-cyan-200">{dimension.value}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function RegistryVisual({ reduceMotion }: { reduceMotion: boolean | null }) {
  return (
    <div className="w-full space-y-4">
      <div>
        <p className="text-sm font-medium text-zinc-100 sm:text-base">Performance sealed into portable reputation</p>
      </div>

      <motion.div
        className="rounded-[1.5rem] border border-emerald-400/30 bg-[linear-gradient(180deg,rgba(6,95,70,0.18),rgba(9,9,11,0.94))] p-5 shadow-[0_0_0_1px_rgba(16,185,129,0.10),0_0_40px_rgba(16,185,129,0.12)]"
        animate={
          reduceMotion
            ? undefined
            : {
                boxShadow: [
                  "0 0 0 1px rgba(16,185,129,0.10), 0 0 32px rgba(16,185,129,0.10)",
                  "0 0 0 1px rgba(16,185,129,0.16), 0 0 46px rgba(16,185,129,0.18)",
                  "0 0 0 1px rgba(16,185,129,0.10), 0 0 32px rgba(16,185,129,0.10)",
                ],
              }
        }
        transition={{ duration: 4.2, repeat: reduceMotion ? 0 : Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-[0.18em] text-emerald-200/70">AGENT REPUTATION</p>
            <p className="mt-3 text-5xl font-semibold tracking-tight text-emerald-50">91</p>
          </div>
          <div className="inline-flex shrink-0 items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-emerald-200">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.55)]" />
            Verified
          </div>
        </div>

        <div className="mt-5 space-y-3 rounded-2xl border border-zinc-800/70 bg-zinc-950/72 p-4">
          <RegistryRow label="Vector" value="[92,84,89,95,87]" mono />
          <RegistryRow label="Registry" value="ERC-8004" />
          <RegistryRow label="State" value="Sealed" accent />
        </div>
      </motion.div>
    </div>
  );
}

function RegistryRow({
  label,
  value,
  mono = false,
  accent = false,
}: {
  label: string;
  value: string;
  mono?: boolean;
  accent?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4 text-sm">
      <span className="text-zinc-500">{label}</span>
      <span className={`${mono ? "font-mono" : "font-medium"} ${accent ? "text-emerald-200" : "text-zinc-100"}`}>
        {value}
      </span>
    </div>
  );
}
