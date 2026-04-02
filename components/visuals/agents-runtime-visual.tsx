"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type RuntimeEventTemplate = {
  agent: string;
  action: string;
  trustScore: number;
};

type RuntimeEvent = {
  id: number;
  agent: string;
  action: string;
  trustScore: number;
  receipt: string;
  timestamp: string;
};

const initialEvents: RuntimeEvent[] = [
  {
    id: 1,
    agent: "Agent-128",
    action: "executing trade",
    trustScore: 91,
    receipt: "rcpt_74ad01",
    timestamp: "14:32:18",
  },
  {
    id: 2,
    agent: "Agent-901",
    action: "treasury rebalance",
    trustScore: 95,
    receipt: "rcpt_2cf91a",
    timestamp: "14:32:15",
  },
  {
    id: 3,
    agent: "Agent-392",
    action: "compliance check",
    trustScore: 87,
    receipt: "rcpt_19fe83",
    timestamp: "14:32:13",
  },
  {
    id: 4,
    agent: "Agent-472",
    action: "executing payment",
    trustScore: 90,
    receipt: "rcpt_42ac9f",
    timestamp: "14:32:10",
  },
  {
    id: 5,
    agent: "Agent-674",
    action: "cross-chain settlement",
    trustScore: 94,
    receipt: "rcpt_68ab10",
    timestamp: "14:32:07",
  },
];

const templates: RuntimeEventTemplate[] = [
  { agent: "Agent-128", action: "executing trade", trustScore: 91 },
  { agent: "Agent-901", action: "treasury rebalance", trustScore: 95 },
  { agent: "Agent-392", action: "compliance check", trustScore: 87 },
  { agent: "Agent-472", action: "executing payment", trustScore: 90 },
  { agent: "Agent-674", action: "cross-chain settlement", trustScore: 94 },
];

const trustScoreSequence = [91.5, 91.6, 91.7, 91.8] as const;

const metricRows = [
  { label: "Initiative", value: 95 },
  { label: "Collaboration", value: 92 },
  { label: "Reasoning", value: 94 },
  { label: "Output Quality", value: 93 },
  { label: "Communication", value: 90 },
] as const;

function makeEvent(index: number): RuntimeEvent {
  const template = templates[index % templates.length];
  const stamp = new Date(Date.now() + index * 1000)
    .toLocaleTimeString("en-US", { hour12: false })
    .slice(0, 8);

  return {
    id: Date.now() + index,
    agent: template.agent,
    action: template.action,
    trustScore: template.trustScore,
    receipt: `rcpt_${(index * 9473 + 1921).toString(16).slice(0, 6)}`,
    timestamp: stamp,
  };
}

function trustScoreBadgeClass(score: number) {
  if (score >= 90) return "border-emerald-200 bg-emerald-50 text-emerald-700";
  if (score >= 85) return "border-zinc-300 bg-zinc-100 text-zinc-700";
  return "border-amber-200 bg-amber-50 text-amber-700";
}

export function AgentsRuntimeVisual() {
  const cursorRef = useRef(5);
  const [scoreIndex, setScoreIndex] = useState(2);
  const [events, setEvents] = useState<RuntimeEvent[]>(initialEvents);

  useEffect(() => {
    const feedTimer = setInterval(() => {
      setEvents((prev) => {
        const next = makeEvent(cursorRef.current);
        cursorRef.current += 1;
        return [next, ...prev].slice(0, 5);
      });
    }, 2200);

    const scoreTimer = setInterval(() => {
      setScoreIndex((prev) => (prev + 1) % trustScoreSequence.length);
    }, 2400);

    return () => {
      clearInterval(feedTimer);
      clearInterval(scoreTimer);
    };
  }, []);

  const trustScore = trustScoreSequence[scoreIndex];

  return (
    <div className="grid items-stretch gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <div className="min-w-0 h-full rounded-2xl border border-zinc-200 bg-white p-5 shadow-[0_10px_40px_rgba(2,6,23,0.06)] md:p-7">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:justify-between">
          <div className="min-w-0">
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900">Proof of Agency (PoA)</h3>
          </div>
          <div className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-center sm:w-auto">
            <p className="text-[10px] uppercase tracking-[0.14em] text-zinc-500">Trust Score</p>
            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={trustScore}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="mt-1 text-2xl font-semibold text-teal-700"
              >
                {trustScore.toFixed(1)}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <InfoField label="Agent ID" value="Agent-472" />
          <InfoField label="Status" value="Active" />
          <InfoField label="Policy Scope" value="Payments / Treasury / Compliance" className="sm:col-span-2" />
        </div>

        <div className="mt-6 space-y-3">
          {metricRows.map((metric, index) => (
            <div key={metric.label} className="space-y-1.5">
              <div className="flex items-center justify-between text-sm text-zinc-700">
                <span>{metric.label}</span>
                <span className="font-medium text-zinc-900">{metric.value}%</span>
              </div>
              <div className="h-2 rounded-full bg-zinc-100">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-teal-500/85 to-cyan-500/80"
                  initial={{ width: `${metric.value - 1}%` }}
                  whileInView={{ width: [`${metric.value - 1}%`, `${metric.value + 1}%`, `${metric.value - 1}%`] }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.24,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="min-w-0 flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-5 shadow-[0_10px_40px_rgba(2,6,23,0.06)] md:p-7">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-2xl font-semibold tracking-tight text-zinc-900">Live Runtime</h3>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-emerald-700">
            <motion.span
              className="h-2 w-2 rounded-full bg-emerald-500"
              animate={{ scale: [1, 1.35, 1], opacity: [0.55, 1, 0.55] }}
              transition={{ duration: 1.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
            Live
          </div>
        </div>

        <div className="mt-5 flex-1 overflow-y-auto pr-1">
          <div className="space-y-3">
            {events.map((event, index) => {
              const rowScores = [91, 95, 87, 90, 94] as const;
              const displayScore = rowScores[index % rowScores.length];

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="flex min-w-0 min-h-[5.9rem] flex-col justify-between rounded-xl border border-zinc-200 bg-zinc-50/80 px-4 py-3"
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="min-w-0 text-[15px] text-zinc-900">
                      <span className="font-semibold">{event.agent}</span> {event.action}
                    </p>
                    <span className="text-xs text-zinc-500">{event.timestamp}</span>
                  </div>

                  <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                    <p className="min-w-0 break-all text-xs text-zinc-500">receipt {event.receipt} → verification</p>
                    <span
                      className={`inline-flex min-w-10 items-center justify-center rounded-md border px-2.5 py-1 text-xs font-semibold leading-none ${trustScoreBadgeClass(displayScore)}`}
                    >
                      {displayScore}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

type InfoFieldProps = {
  label: string;
  value: string;
  className?: string;
};

function InfoField({ label, value, className }: InfoFieldProps) {
  return (
    <div className={`rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2.5 ${className ?? ""}`}>
      <p className="text-[10px] uppercase tracking-[0.12em] text-zinc-500">{label}</p>
      <p className="mt-1 text-sm font-medium text-zinc-900">{value}</p>
    </div>
  );
}
