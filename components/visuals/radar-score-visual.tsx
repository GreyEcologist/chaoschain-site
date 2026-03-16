"use client";

import { motion } from "framer-motion";

const metrics = [
  { label: "Initiative", score: 90 },
  { label: "Collaboration", score: 85 },
  { label: "Reasoning", score: 95 },
  { label: "Compliance", score: 90 },
  { label: "Efficiency", score: 85 },
] as const;

const center = { x: 60, y: 52 };
const outerRadius = 34;

function polarToCartesian(angleDeg: number, radius: number) {
  const angle = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: center.x + radius * Math.cos(angle),
    y: center.y + radius * Math.sin(angle),
  };
}

export function RadarScoreVisual() {
  const axes = metrics.map((metric, index) => {
    const angle = index * (360 / metrics.length);
    const edge = polarToCartesian(angle, outerRadius);
    const value = polarToCartesian(angle, (outerRadius * metric.score) / 100);
    const labelPoint = polarToCartesian(angle, outerRadius + 10);
    return { ...metric, angle, edge, value, labelPoint };
  });

  const polygon = axes.map((axis) => `${axis.value.x},${axis.value.y}`).join(" ");
  const averageScore = Math.round(
    axes.reduce((total, axis) => total + axis.score, 0) / axes.length,
  );

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5">
      <svg viewBox="-6 0 132 126" className="mx-auto w-full max-w-md">
        {[0.4, 0.65, 0.9].map((ratio) => (
          <polygon
            key={ratio}
            points={axes
              .map((axis) => {
                const ringPoint = polarToCartesian(axis.angle, outerRadius * ratio);
                return `${ringPoint.x},${ringPoint.y}`;
              })
              .join(" ")}
            fill="none"
            stroke="rgba(255,255,255,0.09)"
            strokeWidth="0.6"
          />
        ))}
        {axes.map((axis) => (
          <line
            key={axis.label}
            x1={center.x}
            y1={center.y}
            x2={axis.edge.x}
            y2={axis.edge.y}
            stroke="rgba(255,255,255,0.09)"
            strokeWidth="0.6"
          />
        ))}
        <motion.polygon
          points={polygon}
          fill="rgba(56,189,248,0.12)"
          stroke="rgba(125,211,252,0.8)"
          strokeWidth="0.8"
          animate={{ opacity: [0.6, 0.95, 0.6] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
        />
        {axes.map((axis) => (
          <g key={`${axis.label}-text`} transform={`translate(${axis.labelPoint.x}, ${axis.labelPoint.y})`}>
            <text
              x="0"
              y="-1"
              textAnchor="middle"
              className="fill-zinc-400 text-[4.1px] tracking-[0.1em] uppercase"
            >
              {axis.label}
            </text>
            <text x="0" y="4.5" textAnchor="middle" className="fill-zinc-100 text-[5.1px] font-semibold">
              {axis.score}
            </text>
          </g>
        ))}
      </svg>
      <div className="mx-auto mt-3 w-full max-w-xs rounded-lg border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-center">
        <p className="text-[11px] uppercase tracking-[0.16em] text-zinc-500">Total Score</p>
        <p className="mt-1 text-xl font-semibold text-zinc-100">{averageScore}</p>
      </div>
    </div>
  );
}
